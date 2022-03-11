import cors from "cors";
import { Application } from "express";
import { Log } from "../middlewares/Log";
import ConfigEnvironment from "../providers/ConfigEnvironment";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Cors");

class Cors {
    public mount(_express: Application): Application {
        logger.info("Initializing CORS middleware...");

        // Enable cors
        _express.use(
            cors({
                origin: ConfigEnvironment.config().baseURL,
                optionsSuccessStatus: 200,
            })
        );

        return _express;
    }
}

export default new Cors();
