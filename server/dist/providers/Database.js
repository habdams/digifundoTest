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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ConfigEnvironment_1 = __importDefault(require("./ConfigEnvironment"));
const Log_1 = require("../middlewares/Log");
const dotenv = __importStar(require("dotenv"));
const path = __importStar(require("path"));
/**
 * Initialise the logger instance
 * @param {string} level - The log level
 */
const logger = Log_1.Log.logInstance("info", "App");
class Database {
    /**
     * Load the environment variables
     */
    loadEnv() {
        dotenv.config({
            path: path.join(__dirname, "../.env"),
        });
    }
}
exports.Database = Database;
_a = Database;
/**
 * Initialise the database
 */
Database.init = () => __awaiter(void 0, void 0, void 0, function* () {
    const mongooseURI = ConfigEnvironment_1.default.config().mongooseURI;
    mongoose_1.default.Promise = global.Promise;
    const db = yield mongoose_1.default.connect(mongooseURI, (err) => {
        // Handle the error
        if (err) {
            logger.error("Error connecting to the database: " + err);
            throw err;
        }
        else {
            logger.info("Connected to the database");
            console.log("Connected to the database");
        }
    });
});
//# sourceMappingURL=Database.js.map