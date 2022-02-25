"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
// Create a mongoose schema for User login in typescript and export it
const mongoose_1 = __importDefault(require("mongoose"));
;
// Creating the user schema 
exports.UserSchema = new mongoose_1.default.Schema({
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
}, {
    timestamps: true
});
exports.UserSchema.methods.getJson = function () {
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
    };
};
exports.default = mongoose_1.default.model("User", exports.UserSchema);
//# sourceMappingURL=User.js.map