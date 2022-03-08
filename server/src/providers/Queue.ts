import * as kue from "kue";
import ConfigEnvironment from "./ConfigEnvironment";
import { Log } from "../middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "Queue");

class Queue {
    // Reference to the kue instance
    public kue: kue.Queue;
    public jobs: kue.Queue;

    constructor() {
        this.jobs = kue.createQueue({
            prefix: ConfigEnvironment.config().redisPrefix,
            redis: {
                port: ConfigEnvironment.config().redisHttpPort,
                host: ConfigEnvironment.config().redisHttpHost,
                db: ConfigEnvironment.config().redisDb,
            },
        });

        this.jobs
            .on("connect", () => {
                logger.info("Successful connection to the Redis server!");
            })
            .on("error", (err: any) => {
                logger.info("Reis server error encountered: " + err);
            })
            .on("job enqueue", (_id: any, _type: any) => {
                logger.info(`Job ${_id} got queued of type ${_type}`);
            })
            .on("job complete", (_id: any) => {
                logger.info(`Job ${_id} is complete`);
                this.processJobs(_id);
            })
            .on("end", () => {
                logger.info("Redis connection closed!");
            });
    }

    /**
     * Dispatch a job to the queue
     */
    public dispatch(
        _jobName: string,
        _args: object,
        _callback: Function
    ): void {
        this.jobs.create(_jobName, _args).save((err: any) => {
            if (err) {
                logger.error(err);
            }
        });
        this.processQueue(_jobName, 3, _callback);
    }

    /**
     * Remove the process from the queue
     */
    private processJobs(_id: any): void {
        logger.info(`Queue with the id ${_id} is processed!`);

        kue.Job.get(_id, (_err: any, _job: any): void => {
            if (_err) {
                logger.error(_err);
                return;
            }

            _job.remove((err: any) => {
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
    private processQueue(
        _jobName: string,
        _count: number,
        _callback: Function
    ): void {
        this.jobs.process(_jobName, _count, (_job: any, _done: any) => {
            _done();
            _callback(_job.data);
        });
    }
}

export default new Queue();
