import asyncWrapper from "../utils/asyncWrapper";
import { Request, Response, NextFunction } from "express";
import { body, check, validationResult } from "express-validator";
import { User } from "../models/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

// Login Controller class
class LoginController {
    /**
     * Method to log in a user by verifying the jwt token
     * @param req Request
     * @param res Response
     * @param next NextFunction
     * @returns void | Promise<void>
     */
    public static login = asyncWrapper(
        async (req: Request, res: Response, next: NextFunction) => {
            // Validate for errors
            await check("email", "Email is not valid").isEmail().run(req);
            await check("password", "Password cannot be blank!")
                .isLength({ min: 1 })
                .run(req);
            await body("email")
                .normalizeEmail({ gmail_remove_dots: false })
                .run(req);

            // Initialize the error variable
            const errors = validationResult(req);

            const errorsObject = {} as any;

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
            const user = await User.findOne({
                email: email,
            });

            // If user does not exist, redirect to the login page
            if (!user) {
                errorsObject.email = "User does not exist";
                return res.status(400).json({
                    errors: errorsObject,
                });
                // return res.redirect("/login");
            } else {
                bcrypt.compare(password, user.password).then((isMatch) => {
                    if (isMatch) {
                        // Create a token
                        const payload = {
                            id: user.id,
                            email: user.email,
                        };
                        const token = jwt.sign(
                            payload,
                            process.env.JWT_SECRET,
                            {
                                expiresIn: "2d",
                            },
                            (error, token) => {
                                if (error) {
                                    return next(error);
                                }
                                return res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                });
                            }
                        );

                        // Set the cookie
                        res.cookie("jwt", token, {
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 365,
                        });

                        // Redirect to the dashboard
                        return res.status(200).json({
                            success: true,
                        });
                    } else {
                        errorsObject.password = "Incorrect password";
                        return res.status(400).json({
                            errors: errorsObject,
                        });
                        // return res.redirect("/login");
                    }
                });
            }
        }
    );
}

export default LoginController;
