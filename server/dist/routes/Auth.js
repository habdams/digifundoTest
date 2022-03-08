"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = __importDefault(require("../controllers/RegisterController"));
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
const ActivationController_1 = __importDefault(require("../controllers/ActivationController"));
const router = (0, express_1.Router)();
router.post("/register", RegisterController_1.default.register);
router.post("/login", LoginController_1.default.login);
router.post("/activate/:activationString", ActivationController_1.default.activate);
exports.default = router;
//# sourceMappingURL=Auth.js.map