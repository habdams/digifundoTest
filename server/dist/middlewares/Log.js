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
exports.Log = void 0;
const path = __importStar(require("path"));
const winston = __importStar(require("winston"));
/**
 * Winston error log levels
 */
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
};
/**
 * Colors for the log
 */
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
/**
 * Enum type for the log levels
 */
var logLevel;
(function (logLevel) {
    logLevel[logLevel["error"] = 0] = "error";
    logLevel[logLevel["warn"] = 1] = "warn";
    logLevel[logLevel["info"] = 2] = "info";
    logLevel[logLevel["http"] = 3] = "http";
    logLevel[logLevel["debug"] = 4] = "debug";
})(logLevel || (logLevel = {}));
/**
 * Level of the log
 */
const levelss = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'warn';
};
/**
 * @description This function is responsible for creating the log file
 */
class Log {
    /**
     * Conctructor for the Log class
     * @param logFileName: Name of the log file
     * @param level: Log level
     */
    constructor(level, logDir) {
        this.dateTime = new Date();
        this._dateString = `${this.dateTime.getFullYear()}-${(this.dateTime.getMonth() + 1)}-${this.dateTime.getDate()}`;
        this._timeString = `${this.dateTime.getHours()}:${this.dateTime.getMinutes()}:${this.dateTime.getSeconds()}`;
        this.baseDir = path.join(__dirname, `../../logs/${logDir}`) || path.join(__dirname, `../../logs`);
        this.filename = "log-" + this._timeString + this._dateString + ".log";
        this.levelLog = level;
        this.format = winston.format.combine(winston.format.colorize({ all: true }), winston.format.simple());
        this.levels = levels,
            this.logger = winston.createLogger({
                level: levelss(),
                levels: this.levels,
                format: winston.format.simple(),
                transports: [
                    new winston.transports.Console(),
                    new winston.transports.File({ filename: `${this.filename}.log`, dirname: this.baseDir }),
                ]
            });
        this.colors = colors;
        winston.addColors(this.colors);
    }
    /**
     * Error log
     * @param _string: Error message
     */
    error(_string) {
        _string = Date().toString() + " | " + _string;
        this.logger.error(_string);
    }
    /**
     * Warn log
     * @param _string: Warning message
     */
    warn(_string) {
        _string = Date().toString() + " | " + _string;
        this.logger.warn(_string);
    }
    /**
     * Info log
     * @param _string: Info message
     */
    info(_string) {
        _string = Date().toString() + " | " + _string;
        this.logger.info(_string);
    }
    /**
     * HTTP log
     * @param _string: HTTP message
     */
    http(_string) {
        console.log('CURRENT', _string);
        _string = Date().toString() + " | " + _string;
        this.logger.http(_string);
    }
    /**
     * Debug log
     * @param _string: Debug message
     */
    debug(_string) {
        console.log('CURRENT', _string);
        _string = Date().toString() + " | " + _string;
        this.logger.debug(_string);
    }
    /**
     * Create an instance of the Log
     * @param service: Name of the service
     * @param currentLevel: Log level
     * @param logDirectory: Directory of the log file
     * @returns
     */
    static logInstance(currentLevel, logDirectory) {
        if (!Log.loggerInstance) {
            let level = logLevel.info;
            switch (currentLevel) {
                case 'error':
                    console.log('This is an error status???');
                    level = logLevel.error;
                    break;
                case 'warn':
                    level = logLevel.warn;
                    break;
                case 'info':
                    level = logLevel.info;
                    break;
                case 'http':
                    level = logLevel.http;
                    break;
                case 'debug':
                    level = logLevel.debug;
                    break;
                default:
                    throw new Error('Invalid log level');
            }
            Log.loggerInstance = new Log(level, logDirectory);
        }
        return Log.loggerInstance;
    }
}
exports.Log = Log;
//# sourceMappingURL=Log.js.map