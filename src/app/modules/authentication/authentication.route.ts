import { Router } from "express";
import { AuthenticationServices } from "./authentication.services";
import { AuthenticationController } from "./authentication.controller";

const router = Router();

router.post('/login', AuthenticationController.loginUser);
router.post('/register', AuthenticationController.registerUser);

export const authenticationRoutes = router;