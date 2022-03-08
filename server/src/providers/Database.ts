import mongoose from "mongoose";
import { MongoError } from "mongodb";
import ConfigEnvironment from "./ConfigEnvironment";
import { Log } from "../middlewares/Log";
import * as dotenv from "dotenv";
import * as path from "path";

/**
 * Initialise the logger instance
 * @param {string} level - The log level
 */
const logger = Log.logInstance("info", "App");

export class Database {
    /**
     * Load the environment variables
     */
    public loadEnv(): void {
        dotenv.config({
            path: path.join(__dirname, "../.env"),
        });
    }

    /**
     * Initialise the database
     */
    public static init = async () => {
        const mongooseURI = ConfigEnvironment.config().mongooseURI;

        (mongoose as any).Promise = global.Promise;
        const db = await mongoose.connect(mongooseURI, (err: MongoError) => {
            // Handle the error
            if (err) {
                logger.error("Error connecting to the database: " + err);
                throw err;
            } else {
                logger.info("Connected to the database");
                console.log("Connected to the database");
            }
        });
    };
}
