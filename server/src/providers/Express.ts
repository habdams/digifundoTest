import * as express from "express";
import ConfigEnvironment from "./ConfigEnvironment";
import Kernel from "../middlewares/Kernel";
import Routes from "./Routes";

class Express {
    // Reference to the express instance
    public express: express.Application;

    constructor() {
        this.express = express.default();
        this.mountEnvironment();
        this.mountMiddlewares();
    }

    // Mount all the express middlewares
    private mountMiddlewares(): void {
        this.express = Kernel.init(this.express);
    }

    // Configuation and local environment variables
    private mountEnvironment(): void {
        this.express = ConfigEnvironment.init(this.express);
    }

    // Mount routes
    public mountRoutes(): void {
        this.express = Routes.mountAuthRoutes(this.express);
    }

    // Run the express server
    public init(): any {
        const port: number = ConfigEnvironment.config().port;
        this.express.listen(port, () => {
            return console.log(`Server started at http://localhost:${port}`);
        });
    }
}

export default new Express();
