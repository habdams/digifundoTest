"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_local_1 = __importDefault(require("passport-local"));
const User_1 = require("../models/User");
const LocalStrategy = passport_local_1.default.Strategy;
const bcrypt = __importStar(require("bcrypt"));
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Passport");
// Create a class localStrategy to implement the local passport strategy in typescript
class PassportLocalStrategy {
    static init(_passport) {
        _passport.use(new LocalStrategy({
            usernameField: "email",
        }, (email, passpword, done) => {
            User_1.User.findOne({
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
                        message: "User with this email address not registered!",
                    });
                }
                if (user && !user.isVerified) {
                    return done(null, false, {
                        message: "User not verified!",
                    });
                }
                logger.info("User found: ${user.email}. Checking for password match...");
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
        }));
    }
}
exports.default = PassportLocalStrategy;
//# sourceMappingURL=PassportLocalStrategy.js.map