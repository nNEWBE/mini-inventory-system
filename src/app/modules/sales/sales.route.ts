import { Router } from "express";
import { Sales } from "./sales.controller";
import auth from "../../middleware/auth";

const router = Router();

router.post('/create',auth('admin'), Sales.createSale);

export const salesRoutes = router;