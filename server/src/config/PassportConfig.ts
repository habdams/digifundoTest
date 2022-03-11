import passport from "passport";
import { Application } from "express";
import PassportLocalStrategy from "./PassportLocalStrategy";
import PassportJwtStrategy from "./PassportJwtStrategy";
import { User, UserInterface } from "../models/User";
import { Log } from "../middlewares/Log";
import { NativeError } from "mongoose";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Passport");

class Passport {
    /**
     * Mount the passport middleware
     * @param _express
     * @returns
     */
    public mountPassportStrategy(_express: Application): Application {
        _express = _express.use(passport.initialize());
        _express = _express.use(passport.session());

        // Serialize the user
        passport.serializeUser<any, any>((req, user, done) => {
            done(null, user);
        });

        // Deserialize the user
        passport.deserializeUser<any, any>((id, done) => {
            User.findById(id, (err: NativeError, user: UserInterface) =>
                done(err, user)
            );
        });

        this.mountPassport();
        return _express;
    }

    /**
     * Mount the local passport strategy
     */
    public mountPassport(): void {
        try {
            PassportLocalStrategy.init(passport);
            PassportJwtStrategy.init(passport);
        } catch (err) {
            logger.error(err);
        }
    }

    /**
     * Check for the user authentication
     */
    public checkAuthentication(_req: any, _res: any, _next: any): void {
        if (_req.isAuthenticated()) {
            return _next();
        }
        logger.info("User not authenticated");
        _req.flash("error", "Kindly re-login to access this!");
        _res.redirect("/login");
    }

    /**
     * Check for the user authorization
     */
    public checkAuthorization(_req: any, _res: any, _next: any): void {
        const provider = _req.path.split("/").slice(-1)[0];
        const token = _req.user.tokens.find(
            (token: any) => token.kind === provider
        );
        if (token) {
            return _next();
        } else {
            logger.info("User not authorized");
            _req.flash("error", "You must be logged in to view this page.");
            _res.redirect(`/auth/${provider}`);
        }
    }
}

export default new Passport();
