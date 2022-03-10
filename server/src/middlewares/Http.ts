import { Application } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import compress from "compression";
import { Log } from "./Log";
import session from "express-session";
import ConfigEnvironment from "../providers/ConfigEnvironment";
import Passport from "../config/PassportConfig";
import passport from "passport";

/**
 * Logger instance
 */
const logger = Log.logInstance("info", "Http");

const MongoStore = require("connect-mongo")(session);

class Http {
    public static init(_express: Application): Application {
        logger.info("Initializing HTTP middleware...");

        // Express request body parser
        _express.use(
            bodyParser.json({
                limit: ConfigEnvironment.config().maxRequestSize,
            })
        );
        _express.use(
            bodyParser.urlencoded({
                extended: false,
                limit: ConfigEnvironment.config().maxRequestSize,
                parameterLimit: ConfigEnvironment.config().maxParameterLimit,
            })
        );

        // Enable flash messages
        _express.use(require("connect-flash")());

        // Enable helmet security
        _express.use(require("helmet")());

        // Enable cors
        _express.use(cors());

        // Enable the session store
        _express.use(
            session({
                resave: true,

                // Save the session if it was modified
                saveUninitialized: true,
                // Use the mongo store
                store: new MongoStore({
                    url: ConfigEnvironment.config().mongooseURI,
                    autoReconnect: true,
                }),
                secret: ConfigEnvironment.config().appSecret,
                cookie: {
                    maxAge: 1000 * 60 * 60 * 24 * 7,
                },
            })
        );

        // Enable the "gzip" compression
        _express.use(compress());

        // Initialize the passport middleware
        _express = Passport.mountPassportStrategy(_express);

        return _express;
    }
}
