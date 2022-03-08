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
const User_1 = require("../models/User");
const bcrypt = __importStar(require("bcrypt"));
const express_validator_1 = require("express-validator");
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
const jwt = __importStar(require("jsonwebtoken"));
class RegisterController {
}
_a = RegisterController;
/**
 * Register a new user to the Digifundo platform
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise<void>}
 */
RegisterController.register = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate for errors
    yield (0, express_validator_1.check)("email", "Email is not valid").isEmail().run(req);
    yield (0, express_validator_1.check)("password", "Password must be at least 8 characters long")
        .isLength({ min: 8 })
        .run(req);
    yield (0, express_validator_1.check)("confirmPassword", "Passwords do not match")
        .equals(req.body.password)
        .run(req);
    yield (0, express_validator_1.body)("email")
        .normalizeEmail({ gmail_remove_dots: false })
        .run(req);
    // Initialize the error variable
    const errors = (0, express_validator_1.validationResult)(req);
    const errorsObject = {};
    // Flash the errors and redirect
    if (errors) {
        req.flash("errors", errors.array());
        return res.redirect("/signup");
    }
    // Create a new user
    const user = new User_1.User({
        email: req.body.email,
        password: req.body.password,
    });
    // Check for existing user
    User_1.User.findOne({
        email: req.body.email,
    }, (err, existingUser) => {
        if (err) {
            return next(err);
        }
        // If the user exists, redirect to the login page
        if (existingUser) {
            errorsObject.email =
                "Account with that email address already exists.";
            // req.flash('errors', { msg: '' });
            // return res.redirect('/signup');
            return res.status(422).json(errorsObject);
        }
        // Hashing the password for security
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                user.save().then((newUser) => {
                    // Create a verification token for this user
                    const payload = {
                        _id: newUser._id,
                        email: newUser.email,
                    };
                    // Sign the JWT token and include the payload
                    const token = jwt.sign(payload, process.env.ACTIVATION_SECRET, {
                        expiresIn: "4d",
                    });
                });
                return res.status(200).json(user);
                //   req.logIn(user, (err) => {
                //     if (err) {
                //         return next(err);
                //     }
                //     req.flash('success', { msg: 'You are successfully logged in now!' });
                //     res.redirect('/signup');
                // });
            });
        });
    });
}));
exports.default = RegisterController;
//# sourceMappingURL=RegisterController.js.map