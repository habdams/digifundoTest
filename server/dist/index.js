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
const _cluster = __importStar(require("cluster"));
const os_1 = require("os");
const app_1 = __importDefault(require("./app"));
const numCPUs = (0, os_1.cpus)().length;
const cluster = _cluster;
// If one of the cpu is a master 
if (cluster.isPrimary) {
    const CPUs = (0, os_1.cpus)();
    // For each CPU process, fork a new process
    CPUs.forEach(() => {
        cluster.fork();
    });
    // Load the queue monitor for the app
    app_1.default.loadQueueMonitoring();
}
else {
    // Load the Express server
    app_1.default.loadExpress();
}
//# sourceMappingURL=index.js.map