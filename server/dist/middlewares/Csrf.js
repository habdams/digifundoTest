"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lusca_1 = __importDefault(require("lusca"));
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "CSRF");
class Csrf {
    mount(_express) {
        logger.info("Initializing CSRF middleware...");
        // Disable the x-powered-by header in response
        _express.disable("x-powered-by");
        // Enable trust proxy
        _express.set("trust proxy", 1);
        // Enable cors
        _express.use((0, lusca_1.default)({
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
        }));
        return _express;
    }
}
exports.default = new Csrf();
//# sourceMappingURL=Csrf.js.map