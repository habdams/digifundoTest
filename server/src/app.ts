import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import * as bodyParser from 'body-parser';
import * as kue from 'kue';
import * as path from 'path';
import * as dotenv from 'dotenv'
import Express from "./providers/Express";
import ConfigEnvironment from "./providers/ConfigEnvironment";

class App{
    // Load tge environment variables
    private static loadEnv(): void {
        dotenv.config({
            path: path.join(__dirname, '../.env')
        });
    }

    // Load the express server
    private static loadExpress(): void {
        Express.init();
    }

    // Load the kue server
    private static loadKue(): void {
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

    // Load the queue monitoring
    private static loadQueueMonitoring(): void {
        const checkForMonitoring: boolean = ConfigEnvironment.config().queueMonitor;
        const queuePort: number = ConfigEnvironment.config().queuePort;

        if(checkForMonitoring) {
            kue.app.listen(queuePort);
        }
    }
}