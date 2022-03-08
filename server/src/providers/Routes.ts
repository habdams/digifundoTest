import { Application } from "express";
import ConfigEnvironment from "./ConfigEnvironment";
import { Log } from "../middlewares/Log";
import authRoutes from "../routes/Auth";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Routes");

class Routes {
    /**
     * Mount the routes
     * @param _express
     * @returns {Application}
     */
    public mountAuthRoutes(_express: Application): Application {
        _express = _express.use("/", authRoutes);
        logger.info("Routes:: Mounted auth routes");
        return _express;
    }
}

export default new Routes();
