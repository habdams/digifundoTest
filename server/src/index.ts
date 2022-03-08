import * as _cluster from "cluster";
import { cpus } from "os";
import * as process from "process";
import App from "./app";

const numCPUs = cpus().length;
const cluster = _cluster as unknown as _cluster.Cluster;

// If one of the cpu is a master
if (cluster.isPrimary) {
    // Clear the console
    App.clearQueueConsole();

    // Load the configurations
    App.loadEnv();

    const CPUs: any = cpus();
    // For each CPU process, fork a new process
    CPUs.forEach(() => {
        cluster.fork();
    });

    // Load the queue monitor for the app
    App.loadQueueMonitoring();
} else {
    // Load the database
    App.loadMongo();

    // Load the Express server
    App.loadExpress();
}
