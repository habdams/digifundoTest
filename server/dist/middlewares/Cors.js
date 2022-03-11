"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const Log_1 = require("../middlewares/Log");
const ConfigEnvironment_1 = __importDefault(require("../providers/ConfigEnvironment"));
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Cors");
class Cors {
    mount(_express) {
        logger.info("Initializing CORS middleware...");
        // Enable cors
        _express.use((0, cors_1.default)({
            origin: ConfigEnvironment_1.default.config().baseURL,
            optionsSuccessStatus: 200,
        }));
        return _express;
    }
}
exports.default = new Cors();
//# sourceMappingURL=Cors.js.map