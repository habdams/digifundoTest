import { Router } from "express";

import RegisterController from "../controllers/RegisterController";
import LoginController from "../controllers/LoginController";
import ActivationController from "../controllers/ActivationController";

const router = Router();

router.post("/register", RegisterController.register);
router.post("/login", LoginController.login);
router.post("/activate/:activationString", ActivationController.activate);

export default router;
