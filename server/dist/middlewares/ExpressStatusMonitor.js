"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_status_monitor_1 = __importDefault(require("express-status-monitor"));
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "ExpressStatusMonitor");
class StatusMonitor {
    mount(_express) {
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
        _express.use((0, express_status_monitor_1.default)(config));
        return _express;
    }
}
exports.default = new StatusMonitor();
//# sourceMappingURL=ExpressStatusMonitor.js.map