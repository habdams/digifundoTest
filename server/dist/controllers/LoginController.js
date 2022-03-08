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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
const express_validator_1 = require("express-validator");
const User_1 = require("../models/User");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const ConfigEnvironment_1 = __importDefault(require("../providers/ConfigEnvironment"));
// Login Controller class
class LoginController {
}
_a = LoginController;
/**
 * Method to log in a user by verifying the jwt token
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns void | Promise<void>
 */
LoginController.login = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate for errors
    yield (0, express_validator_1.check)("email", "Email is not valid").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "Password cannot be blank!")
        .isLength({ min: 1 })
        .run(req);
    yield (0, express_validator_1.body)("email")
        .normalizeEmail({ gmail_remove_dots: false })
        .run(req);
    // Initialize the error variable
    const errors = (0, express_validator_1.validationResult)(req);
    const errorsObject = {};
    // Check for errors
    if (!errors.isEmpty()) {
        errors.array().forEach((error) => {
            errorsObject[error.param] = error.msg;
        });
        return res.status(400).json({
            errors: errorsObject,
        });
        // return res.redirect("/login");
    }
    const email = req.body.email;
    const password = req.body.password;
    // Check if the user exists
    const user = yield User_1.User.findOne({
        email: email,
    });
    // If user does not exist, redirect to the login page
    if (!user) {
        errorsObject.email = "User does not exist";
        return res.status(400).json({
            errors: errorsObject,
        });
        // return res.redirect("/login");
    }
    else {
        if (user.isVerified) {
            bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    // Create a token
                    const payload = {
                        id: user.id,
                        email: user.email,
                    };
                    const token = jwt.sign(payload, ConfigEnvironment_1.default.config().jwtSecret, {
                        expiresIn: "2d",
                    }, (error, token) => {
                        if (error) {
                            return next(error);
                        }
                        return res.json({
                            success: true,
                            token: "Bearer " + token,
                        });
                    });
                    // Set the cookie
                    res.cookie("jwt", token, {
                        httpOnly: true,
                        maxAge: 1000 * 60 * 60 * 24 * 365,
                    });
                    // Redirect to the dashboard
                    return res.status(200).json({
                        success: true,
                    });
                }
                else {
                    errorsObject.password = "Incorrect password";
                    return res.status(400).json({
                        errors: errorsObject,
                    });
                    // return res.redirect("/login");
                }
            });
        }
        else {
            errorsObject.email = "Please verify your email first";
            return res.status(400).json({
                errors: errorsObject,
            });
            // return res.redirect("/login");
        }
    }
}));
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map