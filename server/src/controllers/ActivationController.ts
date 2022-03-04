import asyncWrapper from "../utils/asyncWrapper";
import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { Log } from "../middlewares/Log";
import { User, UserInterface } from "../models/User";
import { CallbackError, NativeError } from "mongoose";
import jwt_decode from "jwt-decode";

interface JwtPayload {
    _id: string;
    email: string;
}

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Activation");

class ActivationController {
    /**
     * Activate a user account
     * @param req Request
     * @param res Response
     * @param next NextFunction
     * @returns void | Promise<void>
     */
    public static activate = asyncWrapper(
        async (
            req: Request,
            res: Response,
            next: NextFunction
        ): Promise<void> => {
            // Check if the activation string is in the url
            if (!req.params.activationString) {
                return res.redirect("/");
            }
            const token = req.params.activationString;
            // Check if the activation string is valid
            jwt.verify(
                token,
                process.env.ACTIVATION_SECRET,
                (error, decoded) => {
                    // If there is an error, send the request with a flash message
                    if (error) {
                        logger.error(`Activation error: ${error.message}`);
                        return res.status(401).json({
                            errors: "Link has been expired!",
                        });
                        // req.flash("errors", "Invalid activation link");
                        // return res.redirect("/");
                    } else {
                        const decodedToken: JwtPayload = jwt_decode(token);
                        // If the activation string is valid, activate the user
                        User.findByIdAndUpdate(
                            decodedToken._id,
                            {
                                $set: {
                                    verified: true,
                                },
                            },
                            (err: NativeError, user: UserInterface) => {
                                if (err) {
                                    logger.error(
                                        `Activation error: ${err.message}`
                                    );
                                    return res.status(401).json({
                                        errors: "Link has been expired!",
                                    });
                                    // req.flash("errors", "Invalid activation link");
                                    // return res.redirect("/");
                                }
                                // If the activation is successful, redirect to the login page
                                logger.info(
                                    `Activation successful for user: ${user.email}`
                                );
                                return res.status(200).json({
                                    success: "Your account has been activated!",
                                });
                                // req.flash("success", "Your account has been activated!");
                                // return res.redirect("/login");
                            }
                        );
                    }
                }
            );
        }
    );
}

export default ActivationController;
