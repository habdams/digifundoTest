"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Log_1 = require("../middlewares/Log");
const Auth_1 = __importDefault(require("../routes/Auth"));
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Routes");
class Routes {
    /**
     * Mount the routes
     * @param _express
     * @returns {Application}
     */
    mountAuthRoutes(_express) {
        _express = _express.use("/", Auth_1.default);
        logger.info("Routes:: Mounted auth routes");
        return _express;
    }
}
exports.default = new Routes();
//# sourceMappingURL=Routes.js.map