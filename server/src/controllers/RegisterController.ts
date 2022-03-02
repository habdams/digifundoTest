import { User, UserInterface } from "../models/User";
import * as bcrypt from "bcrypt";
import * as express from "express";
import Controller from "../interfaces/controller.interface";
import { IRequest, IResponse, INext } from "../interfaces/Request.interface";
import { body, check, validationResult } from "express-validator";
import asyncWrapper from "../utils/asyncWrapper";
import { CallbackError, NativeError } from "mongoose";
import * as jwt from "jsonwebtoken";

class RegisterController {
  public static register = asyncWrapper(
    async (req: IRequest, res: IResponse, next: INext): Promise<void> => {
      // Validate for errors
      await check("email", "Email is not valid").isEmail().run(req);
      await check("password", "Password must be at least 8 characters long")
        .isLength({ min: 8 })
        .run(req);
      await check("confirmPassword", "Passwords do not match")
        .equals(req.body.password)
        .run(req);
      await body("email").normalizeEmail({ gmail_remove_dots: false }).run(req);

      // Initialize the error variable
      const errors = validationResult(req);

      const errorsObject = {} as any;

      // Flash the errors and redirect
      if (errors) {
        req.flash("errors", errors.array());
        return res.redirect("/signup");
      }

      // Create a new user
      const user = new User({
        email: req.body.email,
        password: req.body.password,
      });

      // Check for existing user
      User.findOne(
        {
          email: req.body.email,
        },
        (err: CallbackError, existingUser: UserInterface) => {
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

          // If the user does not exist, create the user
          user.save().then((newUser) => {
            // Hashing the password for security
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                  return next(err);
                }
                newUser.password = hash;
                newUser.save().then((user) => {
                  // Create a verification token for this user
                  const payload = {
                    _id: user._id,
                    email: user.email,
                  };
                  // Sign the JWT token and include the payload
                  const token = jwt.sign(
                    payload,
                    process.env.ACTIVATION_SECRET,
                    {
                      expiresIn: "4d",
                    }
                  );
                });
              });
            });
          });
        }
      );
    }
  );
}

export default RegisterController;
