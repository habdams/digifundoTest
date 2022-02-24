import * as fs from "fs";
import * as path from "path";
import * as winston from "winston";

/**
 * Winston error log levels
 */
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

/**
 * Colors for the log
 */
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
}

/**
 * Enum type for the log levels
 */
enum logLevel{
    error,
    warn,
    info,
    http,
    debug
}

/** 
 * Level of the log
 */
const levelss = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

/**
 * @description This function is responsible for creating the log file
 */
export class Log {
    public baseDir: string;
    public filename: string;
    public dateTime: Date = new Date();
    public levels: any;
    private logger;
    public colors: any;
    public levelLog: logLevel;
    private static loggerInstance: Log;
    public _dateString: string;
    public _timeString: string;
    public format: any;

    /**
     * Conctructor for the Log class
     * @param logFileName: Name of the log file
     * @param level: Log level
     */
    constructor(level: logLevel, logDir: string) {
        this._dateString = `${this.dateTime.getFullYear()}-${(this.dateTime.getMonth() + 1)}-${this.dateTime.getDate()}`;
		this._timeString = `${this.dateTime.getHours()}:${this.dateTime.getMinutes()}:${this.dateTime.getSeconds()}`;
        this.baseDir = path.join(__dirname, `../../logs/${logDir}`) || path.join(__dirname, `../../logs`);
        this.filename = "log-" + this._timeString + this._dateString+ ".log";
        this.levelLog = level;
        this.format = winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.simple(),
          )
        this.levels = levels,
        this.logger = winston.createLogger({
            level: levelss(),
            levels: this.levels,
            format: winston.format.simple(),
            transports: [
                new winston.transports.Console(),
                new winston.transports.File({ filename: `${this.filename}.log`, dirname: this.baseDir}),
            ]
        });
        this.colors = colors;
        winston.addColors(this.colors);
    }

    /**
     * Error log
     * @param _string: Error message
     */
    public error(_string:string): void {
        _string = Date().toString() + " | " + _string; 
        this.logger.error(_string);
    }

    /**
     * Warn log
     * @param _string: Warning message
     */
    public warn(_string:string): void {
        _string = Date().toString() + " | " + _string; 
        this.logger.warn(_string);
    }

    /**
     * Info log
     * @param _string: Info message
     */
    public info(_string:string): void {
        _string = Date().toString() + " | " + _string; 
        this.logger.info(_string);
    }

    /**
     * HTTP log
     * @param _string: HTTP message 
     */
    public http(_string:string): void {
        console.log('CURRENT', _string)
        _string = Date().toString() + " | " + _string; 
        this.logger.http(_string);
    }

    /**
     * Debug log
     * @param _string: Debug message 
     */
    public debug(_string:string): void {
        console.log('CURRENT', _string)
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
    static logInstance(currentLevel: string, logDirectory: any) {
        if (!Log.loggerInstance) {
            let level: logLevel = logLevel.info;
            switch(currentLevel) {
                case 'error':
                    console.log('This is an error status???')
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
