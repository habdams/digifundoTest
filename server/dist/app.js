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
const kue = __importStar(require("kue"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
const Express_1 = __importDefault(require("./providers/Express"));
const ConfigEnvironment_1 = __importDefault(require("./providers/ConfigEnvironment"));
const Log_1 = require("./middlewares/Log");
const Database_1 = require("./providers/Database");
const Queue_1 = __importDefault(require("./providers/Queue"));
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "App");
class App {
    /**
     * Load the environment variables
     */
    loadEnv() {
        logger.info("Loading the environment variables...");
        dotenv.config({
            path: path.join(__dirname, "../.env"),
        });
    }
    /**
     * Load the express server
     */
    loadExpress() {
        logger.info("Loading the express server...");
        Express_1.default.init();
    }
    /**
     * Load the kue server
     */
    loadKue() {
        const queue = kue.createQueue({
            prefix: "q",
            redis: {
                port: process.env.REDIS_PORT,
                host: process.env.REDIS_HOST,
                auth: process.env.REDIS_PASSWORD,
            },
        });
        queue.watchStuckJobs(1000);
    }
    /**
     * Load the mongo database
     */
    loadMongo() {
        logger.info("Loading the mongo database");
        console.log("Loading the mongo database");
        Database_1.Database.init();
    }
    /**
     * Clear the queue console
     */
    clearQueueConsole() {
        process.stdout.write("\x1B[2J\x1B[0f");
        Queue_1.default.dispatch("checkout", { foo: "bar", fizz: "buzz" }, (_data) => {
            logger.info(`>>> Here goes the data: ${_data}`);
        });
    }
    /**
     * Load the queue monitoring
     */
    loadQueueMonitoring() {
        const checkForMonitoring = ConfigEnvironment_1.default.config().queueMonitor;
        const queuePort = ConfigEnvironment_1.default.config().queuePort;
        if (checkForMonitoring) {
            kue.app.listen(queuePort);
            logger.info("Queue monitoring started at port: " + queuePort);
        }
    }
}
exports.default = new App();
//# sourceMappingURL=app.js.map