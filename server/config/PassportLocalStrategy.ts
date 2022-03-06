import passportLocal from "passport-local";
import * as passport from "passport";
import { User } from "../src/models/User";
const LocalStrategy = passportLocal.Strategy;
import * as bcrypt from "bcrypt";
import { Log } from "../src/middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Activation");

// Create a class localStrategy to implement the local passport strategy in typescript
class PassportLocalStrategy {
    public static init(_passport: any) {
        _passport.use(
            new LocalStrategy(
                {
                    usernameField: "email",
                },
                (email, passpword, done) => {
                    User.findOne({
                        email: email.toLocaleLowerCase(),
                    })
                        .then((user) => {
                            if (!user) {
                                return done(null, false, {
                                    message: "Incorrect email or password",
                                });
                            }

                            if (user && !user.password) {
                                return done(null, false, {
                                    message:
                                        "User with this email address not registered!",
                                });
                            }

                            if (user && !user.isVerified) {
                                return done(null, false, {
                                    message: "User not verified!",
                                });
                            }
                            logger.info(
                                "User found: ${user.email}. Checking for password match..."
                            );
                            bcrypt
                                .compare(passpword, user.password)
                                .then((isMatch) => {
                                    if (isMatch) {
                                        return done(null, user);
                                    }
                                    return done(null, false, {
                                        message: "Incorrect email or password",
                                    });
                                });
                        })
                        .catch((err) => {
                            logger.error(err);
                            console.log(err);
                            return done(err);
                        });
                }
            )
        );
    }
}

export default PassportLocalStrategy;
