import * as passport from "passport";
import passportJWT from "passport-jwt";
import ConfigEnvironment from "../providers/ConfigEnvironment";
import { User } from "../models/User";
import { Log } from "../middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Activation");

const jwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const opts: any = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = ConfigEnvironment.config().jwtSecret;

// Class to implement the passport jwt strategy
class PassportJWTStrategy {
    /**
     * Initialise the passport jwt strategy
     * @param _passport passport instance
     */
    public static init(_passport: any) {
        _passport.use(
            new jwtStrategy(opts, (jwt_payload, done) => {
                User.findOne({
                    _id: jwt_payload._id,
                })
                    .then((user) => {
                        if (user) {
                            return done(null, user);
                        }
                        return done(null, false);
                    })
                    .catch((err) => {
                        console.log(err);
                        logger.error(err);
                        return done(err, false);
                    });
            })
        );
    }
}

export default PassportJWTStrategy;
