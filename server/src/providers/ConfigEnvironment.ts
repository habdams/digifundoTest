import { Application } from "express";
import * as dotenv from 'dotenv'
import * as path from 'path'

class ConfigEnvironment {
    public static config(): any {
        dotenv.config({
            path: path.join(__dirname, '../../.env')
        })
        // Add environment variables for Digifundo application 
        const port = process.env.PORT || 5040;
        const url = process.env.URL || `https://localhost:${process.env.port}`;
        const mongooseUrl = process.env.MONGOOSE_URL;


        return {
            port,
            url,
            mongooseUrl
        }
    }

    public static init(_express: Application): Application {
        _express.locals.app = this.config();
        return _express
    }
}

export default ConfigEnvironment;