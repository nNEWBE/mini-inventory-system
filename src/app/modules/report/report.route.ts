import { Router } from "express";
import { ReportController } from "./report.controller";
import auth from "../../middleware/auth";

const router= Router();

router.post('/', auth('admin'), ReportController.getAllReports);

export const reportRoutes = router;