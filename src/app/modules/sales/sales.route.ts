import { Router } from "express";
import { Sales } from "./sales.controller";

const router = Router();

router.post('/create', Sales.createSale);

export const salesRoutes = router;