import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import * as bodyParser from 'body-parser';
import * as kue from 'kue';
import * as path from 'path';
import * as dotenv from 'dotenv'
import Express from "./providers/Express";
import ConfigEnvironment from "./providers/ConfigEnvironment";
import {Log} from "./middlewares/Log";

/**
 * Initialise the logger instance
 */
const logger = Log.logInstance(
    'info',
    'App' 
);

class App{
    /**
     * Load the environment variables
     */
    public loadEnv(): void {
        dotenv.config({
            path: path.join(__dirname, '../.env')
        });
    }

    /**
     * Load the express server
     */
    public loadExpress(): void {
        Express.init();
    }

    /**
     * Load the kue server
     */
    public loadKue(): void {
        const queue = kue.createQueue({
            prefix: 'q',
            redis: {
                port: process.env.REDIS_PORT,
                host: process.env.REDIS_HOST,
                auth: process.env.REDIS_PASSWORD
            }
        });
        queue.watchStuckJobs(1000);
    }

    /**
     * Load the queue monitoring    
     */
    public loadQueueMonitoring(): void {
        const checkForMonitoring: boolean = ConfigEnvironment.config().queueMonitor;
        const queuePort: number = ConfigEnvironment.config().queuePort;

        if(checkForMonitoring) {
            console.log('Happy')
            kue.app.listen(queuePort);
            logger.info("Queue monitoring started at port: " + queuePort);
        }
    }
}

export default new App; 