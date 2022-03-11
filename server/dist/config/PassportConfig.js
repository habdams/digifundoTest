"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const PassportLocalStrategy_1 = __importDefault(require("./PassportLocalStrategy"));
const PassportJwtStrategy_1 = __importDefault(require("./PassportJwtStrategy"));
const User_1 = require("../models/User");
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Passport");
class Passport {
    /**
     * Mount the passport middleware
     * @param _express
     * @returns
     */
    mountPassportStrategy(_express) {
        _express = _express.use(passport_1.default.initialize());
        _express = _express.use(passport_1.default.session());
        // Serialize the user
        passport_1.default.serializeUser((req, user, done) => {
            done(null, user);
        });
        // Deserialize the user
        passport_1.default.deserializeUser((id, done) => {
            User_1.User.findById(id, (err, user) => done(err, user));
        });
        this.mountPassport();
        return _express;
    }
    /**
     * Mount the local passport strategy
     */
    mountPassport() {
        try {
            PassportLocalStrategy_1.default.init(passport_1.default);
            PassportJwtStrategy_1.default.init(passport_1.default);
        }
        catch (err) {
            logger.error(err);
            console.log("EEEEEE", err);
        }
    }
    /**
     * Check for the user authentication
     */
    checkAuthentication(_req, _res, _next) {
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
    checkAuthorization(_req, _res, _next) {
        const provider = _req.path.split("/").slice(-1)[0];
        const token = _req.user.tokens.find((token) => token.kind === provider);
        if (token) {
            return _next();
        }
        else {
            logger.info("User not authorized");
            _req.flash("error", "You must be logged in to view this page.");
            _res.redirect(`/auth/${provider}`);
        }
    }
}
exports.default = new Passport();
//# sourceMappingURL=PassportConfig.js.map