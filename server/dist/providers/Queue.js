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
const ConfigEnvironment_1 = __importDefault(require("./ConfigEnvironment"));
const Log_1 = require("../middlewares/Log");
/**
 * Initialise the logger instance
 */
const logger = Log_1.Log.logInstance("info", "Queue");
class Queue {
    constructor() {
        console.log("***************************");
        this.jobs = kue.createQueue({
            prefix: ConfigEnvironment_1.default.config().redisPrefix,
            redis: {
                port: ConfigEnvironment_1.default.config().redisHttpPort,
                host: ConfigEnvironment_1.default.config().redisHttpHost,
                db: ConfigEnvironment_1.default.config().redisDb,
            },
        });
        console.log("XXXXXXXXXXXXXXXXXXXXXXX");
        this.jobs
            .on("job enqueue", (_id, _type) => {
            logger.info(`Job ${_id} got queued of type ${_type}`);
        })
            .on("job complete", (_id) => {
            logger.info(`Job ${_id} is complete`);
            this.processJobs(_id);
        });
    }
    /**
     * Dispatch a job to the queue
     */
    dispatch(_jobName, _args, _callback) {
        this.jobs.create(_jobName, _args).save((err) => {
            if (err) {
                logger.error(err);
            }
        });
        this.processQueue(_jobName, 3, _callback);
    }
    /**
     * Remove the process from the queue
     */
    processJobs(_id) {
        logger.info(`Queue with the id ${_id} is processed!`);
        kue.Job.get(_id, (_err, _job) => {
            if (_err) {
                logger.error(_err);
                return;
            }
            _job.remove((err) => {
                if (err) {
                    logger.error(err);
                    throw err;
                }
                logger.info(`Job ${_id} removed from the queue`);
            });
        });
    }
    /**
     * Process the queue
     */
    processQueue(_jobName, _count, _callback) {
        this.jobs.process(_jobName, _count, (_job, _done) => {
            _done();
            _callback(_job.data);
        });
    }
}
exports.default = new Queue();
//# sourceMappingURL=Queue.js.map