import status from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { SaleServices } from "./sales.services";

const createSale=catchAsync(async (req, res) => {
    const result = await SaleServices.createSalesIntoDB(req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Sale created successfully',
        data: result,
    });
});

export const Sales = {
    createSale
}