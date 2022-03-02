// Create a mongoose schema for User login in typescript and export it
import mongoose from 'mongoose';
import * as crypto from 'crypto';

export interface UserApplications extends mongoose.Document{
    applicationId: string;
    applicationName: string;
    applicationDescription: string;
    applicationIcon: string;
    applicationUrl: string;
    applicationStatus: string;
    applicationCreatedAt: Date;
    applicationUpdatedAt: Date;
}

interface JsonInterface {
    email: string;
    firstName: string;
    lastName: string;
    _id: mongoose.Schema.Types.ObjectId;
    role: string;
    createdAt: Date;
    username: string;
    updatedAt: Date;
    isVerified: boolean;
    applicationsAssigned: Array<UserApplications>;
    gender: string;
};

export interface UserInterface extends mongoose.Document {
    email: string;
    username: string;
    password: string;
    checkPassword: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    firstName: string;
    lastName: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    isVerified: boolean;
    gender: string;
    applicationsAssigned: Array<UserApplications>;
    getJson(): any;
}

// Creating the user schema 
export const UserSchema = new mongoose.Schema<UserInterface, UserApplications>({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    firstName: {
        type: String,
        required: true 
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    checkPassword: {
        type: String,
        required: true 
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: true
    },
    gender: {
        type: String,
        required: false 
    },
    applicationsAssigned: [{
        applicationId: {
            type: String, 
            required: true 
        },
        applicationDescription: {
            type: String,
            required: true
        },
        applicationIcon: {
            type: String,
            required: false
        },
        applicationName: {
            type: String,
            required: true
        },
        applicationUrl: {
            type: String,
            required: true
        },
        applicationStatus: {
            type: String,
            required: true
        },
        applicationCreatedAt: {
            type: Date,
            default: Date.now
        },
        applicationUpdatedAt: {
            type: Date,
            default: Date.now
        }
    }]
},
    {
        timestamps: true
    }
)

UserSchema.methods.getJson = function (): JsonInterface {
    return {
        _id: this._id,
        email: this.email,
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        role: this.role,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        isVerified: this.isVerified,
        applicationsAssigned: this.applicationsAssigned,
        gender: this.gender
    }
}

export const User = mongoose.model<UserInterface>("User", UserSchema)