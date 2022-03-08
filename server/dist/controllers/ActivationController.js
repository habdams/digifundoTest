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
const jwt = __importStar(require("jsonwebtoken"));
const Log_1 = require("../middlewares/Log");
const User_1 = require("../models/User");
const jwt_decode_1 = __importDefault(require("jwt-decode"));
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Activation");
class ActivationController {
}
_a = ActivationController;
/**
 * Activate a user account
 * @param req Request
 * @param res Response
 * @param next NextFunction
 * @returns void | Promise<void>
 */
ActivationController.activate = (0, asyncWrapper_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if the activation string is in the url
    if (!req.params.activationString) {
        return res.redirect("/");
    }
    const token = req.params.activationString;
    // Check if the activation string is valid
    jwt.verify(token, process.env.ACTIVATION_SECRET, (error, decoded) => {
        // If there is an error, send the request with a flash message
        if (error) {
            logger.error(`Activation error: ${error.message}`);
            return res.status(401).json({
                errors: "Link has been expired!",
            });
            // req.flash("errors", "Invalid activation link");
            // return res.redirect("/");
        }
        else {
            const decodedToken = (0, jwt_decode_1.default)(token);
            // If the activation string is valid, activate the user
            User_1.User.findByIdAndUpdate(decodedToken._id, {
                $set: {
                    verified: true,
                },
            }, (err, user) => {
                if (err) {
                    logger.error(`Activation error: ${err.message}`);
                    return res.status(401).json({
                        errors: "Link has been expired!",
                    });
                    // req.flash("errors", "Invalid activation link");
                    // return res.redirect("/");
                }
                // If the activation is successful, redirect to the login page
                logger.info(`Activation successful for user: ${user.email}`);
                return res.status(200).json({
                    success: "Your account has been activated!",
                });
                // req.flash("success", "Your account has been activated!");
                // return res.redirect("/login");
            });
        }
    });
}));
exports.default = ActivationController;
//# sourceMappingURL=ActivationController.js.map