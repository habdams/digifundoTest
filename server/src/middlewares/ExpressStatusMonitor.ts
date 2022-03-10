import expressStatusMonitor from "express-status-monitor";
import { Application } from "express";
import { Log } from "../middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "ExpressStatusMonitor");

class StatusMonitor {
    public mount(_express: Application): Application {
        logger.info("Initializing status monitor middleware...");

        const config = {
            title: "Digifundo Status Monitor",
            path: "/status-monitor",
            spans: [
                {
                    interval: 1,
                    retention: 60,
                },
                {
                    interval: 5,
                    retention: 60,
                },
                {
                    interval: 15,
                    retention: 60,
                },
            ],
            chartVisibility: {
                cpu: true,
                mem: true,
                load: true,
                eventLoop: true,
                heap: true,
                responseTime: true,
                rps: true,
                statusCodes: true,
            },
            healthChecks: [
                {
                    protocol: "http",
                    host: "localhost",
                    path: "/",
                    port: 4040,
                },
                {
                    protocol: "http",
                    host: "localhost",
                    path: "/api",
                    port: 4040,
                },
            ],
        };

        _express.use(expressStatusMonitor(config));
        return _express;
    }
}

export default new StatusMonitor();
