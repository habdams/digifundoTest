import { Application } from "express";
import * as dotenv from 'dotenv'
import * as path from 'path'

/**
 * Class to load environment variables
 */
class ConfigEnvironment {
    /**
     * Configutation file for the env variables
     * @returns Object for the env variables
     */
    public static config(): any {
        dotenv.config({
            path: path.join(__dirname, '../../config/config.env')
        })
        // Add environment variables for Digifundo application 
        const port = process.env.PORT || 5040;
        const url = process.env.URL || `https://localhost:${process.env.port}`;
        const mongooseUrl = process.env.MONGOOSE_URL;
        const checkForMonitoring = process.env.QUEUE_HTTP_ENABLED || true;
		const queueHttpPort = process.env.QUEUE_HTTP_PORT || 5550;

        return {
            port,
            url,
            mongooseUrl,
            checkForMonitoring,
            queueHttpPort
        }
    }

    /**
     * Method to initialise the env configuration
     * @param _express: express instance
     * @returns express instance
     */
    public static init(_express: Application): Application {
        _express.locals.app = this.config();
        return _express
    }
}

export default ConfigEnvironment;