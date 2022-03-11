import lusca from "lusca";
import { Application } from "express";
import { Log } from "../middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "CSRF");

class Csrf {
    public mount(_express: Application): Application {
        logger.info("Initializing CSRF middleware...");

        // Disable the x-powered-by header in response
        _express.disable("x-powered-by");

        // Enable trust proxy
        _express.set("trust proxy", 1);

        // Enable cors
        _express.use(
            lusca({
                csrf: {
                    angular: true,
                },
                xframe: "SAMEORIGIN",
                hsts: {
                    maxAge: 31536000,
                    includeSubDomains: true,
                    preload: true,
                },
                xssProtection: true,
                referrerPolicy: "same-origin",
            })
        );

        return _express;
    }
}

export default new Csrf();
