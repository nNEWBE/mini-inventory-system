import { Router } from "express";
import { ReportController } from "./report.controller";

const router= Router();

router.post('/', ReportController.getAllReports);

export const reportRoutes = router;