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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const bodyParser = __importStar(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const Log_1 = require("./Log");
const express_session_1 = __importDefault(require("express-session"));
const ConfigEnvironment_1 = __importDefault(require("../providers/ConfigEnvironment"));
const PassportConfig_1 = __importDefault(require("../config/PassportConfig"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
/**
 * Logger instance
 */
const logger = Log_1.Log.logInstance("info", "Http");
class Http {
    mount(_express) {
        logger.info("Initializing HTTP middleware...");
        // Express request body parser
        _express.use(bodyParser.json({
            limit: ConfigEnvironment_1.default.config().maxRequestSize,
        }));
        _express.use(bodyParser.urlencoded({
            extended: false,
            limit: ConfigEnvironment_1.default.config().maxRequestSize,
            parameterLimit: ConfigEnvironment_1.default.config().maxParameterLimit,
        }));
        // Enable flash messages
        _express.use(require("connect-flash")());
        // Enable helmet security
        _express.use(require("helmet")());
        // Enable cors
        _express.use((0, cors_1.default)());
        // Enable the session store
        const options = {
            resave: true,
            // Save the session if it was modified
            saveUninitialized: true,
            // Use the mongo store
            store: new connect_mongo_1.default({
                mongoUrl: ConfigEnvironment_1.default.config().mongooseURI,
            }),
            secret: ConfigEnvironment_1.default.config().appSecret,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
            },
        };
        _express.use((0, express_session_1.default)(options));
        // Enable the "gzip" compression
        _express.use((0, compression_1.default)());
        // Initialize the passport middleware
        _express = PassportConfig_1.default.mountPassportStrategy(_express);
        return _express;
    }
}
exports.default = new Http();
//# sourceMappingURL=Http.js.map