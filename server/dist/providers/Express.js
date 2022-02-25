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
const express = __importStar(require("express"));
const ConfigEnvironment_1 = __importDefault(require("./ConfigEnvironment"));
class Express {
    constructor() {
        this.express = express.default();
        this.mountEnvironment();
    }
    // Configuation and local environment variables 
    mountEnvironment() {
        this.express = ConfigEnvironment_1.default.init(this.express);
    }
    // Run the express server 
    init() {
        const port = ConfigEnvironment_1.default.config().port;
        this.express.listen(port, () => {
            return console.log(`Server started at http://localhost:${port}`);
        });
    }
}
exports.default = new Express();
//# sourceMappingURL=Express.js.map