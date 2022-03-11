"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cors_1 = __importDefault(require("./Cors"));
const Csrf_1 = __importDefault(require("./Csrf"));
const Http_1 = __importDefault(require("./Http"));
const Log_1 = require("./Log");
const ExpressStatusMonitor_1 = __importDefault(require("./ExpressStatusMonitor"));
const ConfigEnvironment_1 = __importDefault(require("../providers/ConfigEnvironment"));
class Kernel {
    static init(_express) {
        // Initialise the logger instance
        const logger = Log_1.Log.logInstance("info", "Kernel");
        logger.info("Initialising Kernel...");
        logger.info("Initialising ExpressStatusMonitor...");
        // Initialise the express status monitor instance
        _express = ExpressStatusMonitor_1.default.mount(_express);
        if (ConfigEnvironment_1.default.config().isCorsEnabled) {
            logger.info("Initialising Cors...");
            // Initialise the cors instance
            _express = Cors_1.default.mount(_express);
        }
        logger.info("Initialising Csrf...");
        // Initialise the csrf instance
        _express = Csrf_1.default.mount(_express);
        logger.info("Initialising Http...");
        // Initialise the http instance
        _express = Http_1.default.mount(_express);
        logger.info("Initialising Kernel complete!");
        return _express;
    }
}
exports.default = Kernel;
//# sourceMappingURL=Kernel.js.map