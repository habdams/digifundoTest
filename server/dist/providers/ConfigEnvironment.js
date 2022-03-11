"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
/**
 * Class to load environment variables
 */
class ConfigEnvironment {
    /**
     * Configutation file for the env variables
     * @returns Object for the env variables
     */
    static config() {
        dotenv.config({
            path: path.join(__dirname, "../../config/config.env"),
        });
        // Add environment variables for Digifundo application
        const port = process.env.PORT || 5040;
        const url = process.env.URL || `https://localhost:${process.env.port}`;
        const mongooseURI = process.env.MONGOOSE_URI;
        const checkForMonitoring = process.env.QUEUE_HTTP_ENABLED || true;
        const queueHttpPort = process.env.QUEUE_HTTP_PORT || 5550;
        const jwtSecret = process.env.JWT_SECRET;
        const activationSecret = process.env.ACTIVATION_SECRET;
        const redisPrefix = process.env.REDIS_QUEUE_PREFIX || "digifundo";
        const redisHttpPort = process.env.REDIS_HTTP_PORT || 6379;
        const redisHttpHost = process.env.REDIS_HTTP_HOST || "127.0.0.1";
        const redisDb = process.env.REDIS_DB || 3;
        const maxRequestSize = process.env.MAX_REQUEST_SIZE || "50mb";
        const maxParameterLimit = process.env.MAX_PARAMETER_LIMIT || 1000;
        const baseURL = process.env.BASE_URL || "https://localhost:${process.env.port}";
        const isCorsEnabled = process.env.CORS_ENABLED || true;
        return {
            port,
            url,
            mongooseURI,
            checkForMonitoring,
            queueHttpPort,
            jwtSecret,
            activationSecret,
            redisPrefix,
            redisHttpPort,
            redisHttpHost,
            redisDb,
            maxRequestSize,
            maxParameterLimit,
            baseURL,
            isCorsEnabled,
        };
    }
    /**
     * Method to initialise the env configuration
     * @param _express: express instance
     * @returns express instance
     */
    static init(_express) {
        _express.locals.app = this.config();
        return _express;
    }
}
exports.default = ConfigEnvironment;
//# sourceMappingURL=ConfigEnvironment.js.map