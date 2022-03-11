"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientUploadSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ClientUploadSchema = new mongoose_1.default.Schema({
    applicationId: {
        type: String,
        required: true,
    },
    acessCode: {
        type: String,
        required: true,
    },
});
//# sourceMappingURL=ClientUpload.js.map