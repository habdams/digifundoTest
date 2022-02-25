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
            path: path.join(__dirname, '../../config/config.env')
        });
        // Add environment variables for Digifundo application 
        const port = process.env.PORT || 5040;
        const url = process.env.URL || `https://localhost:${process.env.port}`;
        const mongooseUrl = process.env.MONGOOSE_URL;
        const checkForMonitoring = process.env.QUEUE_HTTP_ENABLED || true;
        const queueHttpPort = process.env.QUEUE_HTTP_PORT || 5550;
        return {
            port,
            url,
            mongooseUrl,
            checkForMonitoring,
            queueHttpPort
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