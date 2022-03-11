import Cors from "./Cors";
import Csrf from "./Csrf";
import Http from "./Http";
import { Log } from "./Log";
import ExpressStatusMonitor from "./ExpressStatusMonitor";
import { Application } from "express";
import ConfigEnvironment from "../providers/ConfigEnvironment";

class Kernel {
    public static init(_express: Application): Application {
        // Initialise the logger instance
        const logger = Log.logInstance("info", "Kernel");
        logger.info("Initialising Kernel...");

        logger.info("Initialising ExpressStatusMonitor...");
        // Initialise the express status monitor instance
        _express = ExpressStatusMonitor.mount(_express);

        if (ConfigEnvironment.config().isCorsEnabled) {
            logger.info("Initialising Cors...");
            // Initialise the cors instance
            _express = Cors.mount(_express);
        }

        logger.info("Initialising Csrf...");
        // Initialise the csrf instance
        _express = Csrf.mount(_express);

        logger.info("Initialising Http...");
        // Initialise the http instance
        _express = Http.mount(_express);
        logger.info("Initialising Kernel complete!");

        return _express;
    }
}

export default Kernel;
