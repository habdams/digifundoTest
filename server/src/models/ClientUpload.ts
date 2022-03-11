import mongoose from "mongoose";
import * as crypto from "crypto";

export interface ClientUploadInterface extends mongoose.Document {
    applicationId: string;
    acessCode: string;
}

export const ClientUploadSchema = new mongoose.Schema<ClientUploadInterface>({
    applicationId: {
        type: String,
        required: true,
    },
    acessCode: {
        type: String,
        required: true,
    },
});
