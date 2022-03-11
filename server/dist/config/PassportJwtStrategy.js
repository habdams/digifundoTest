"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const ConfigEnvironment_1 = __importDefault(require("../providers/ConfigEnvironment"));
const User_1 = require("../models/User");
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Activation");
const jwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = ConfigEnvironment_1.default.config().jwtSecret;
// Class to implement the passport jwt strategy
class PassportJWTStrategy {
    /**
     * Initialise the passport jwt strategy
     * @param _passport passport instance
     */
    static init(_passport) {
        _passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
            User_1.User.findOne({
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
        }));
    }
}
exports.default = PassportJWTStrategy;
//# sourceMappingURL=PassportJwtStrategy.js.map