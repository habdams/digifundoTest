import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import * as bodyParser from "body-parser";
import * as kue from "kue";
import * as path from "path";
import * as dotenv from "dotenv";
import Express from "./providers/Express";
import ConfigEnvironment from "./providers/ConfigEnvironment";
import { Log } from "./middlewares/Log";
import { Database } from "./providers/Database";
import Queue from "./providers/Queue";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance("info", "App");

class App {
    /**
     * Load the environment variables
     */
    public loadEnv(): void {
        logger.info("Loading the environment variables...");
        dotenv.config({
            path: path.join(__dirname, "../.env"),
        });
    }

    /**
     * Load the express server
     */
    public loadExpress(): void {
        logger.info("Loading the express server...");
        Express.init();
    }

    /**
     * Load the kue server
     */
    public loadKue(): void {
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
    public loadMongo(): void {
        logger.info("Loading the mongo database");
        console.log("Loading the mongo database");
        Database.init();
    }

    /**
     * Clear the queue console
     */
    public clearQueueConsole(): void {
        process.stdout.write("\x1B[2J\x1B[0f");

        Queue.dispatch(
            "checkout",
            { foo: "bar", fizz: "buzz" },
            (_data: any): void => {
                logger.info(`>>> Here goes the data: ${_data}`);
            }
        );
    }

    /**
     * Load the queue monitoring
     */
    public loadQueueMonitoring(): void {
        const checkForMonitoring: boolean =
            ConfigEnvironment.config().queueMonitor;
        const queuePort: number = ConfigEnvironment.config().queuePort;

        if (checkForMonitoring) {
            kue.app.listen(queuePort);
            logger.info("Queue monitoring started at port: " + queuePort);
        }
    }
}

export default new App();
