import status from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ReportServices } from "./report.services";

const getAllReports = catchAsync(async (req, res)   => {
    const result = await ReportServices.getAllReportsFromDB(req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Reports fetched successfully',
        data: result,
    });
});

export const ReportController = {
    getAllReports
}