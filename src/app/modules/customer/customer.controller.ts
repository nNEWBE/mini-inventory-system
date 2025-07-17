import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { CustomerServices } from "./customer.services";
import status from 'http-status';

const createCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.createCustomerIntoDB(req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Customer created successfully',
        data: result,
    });
})

const updateCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.updateCustomerFromDB(req.params.id, req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Customer updated successfully',
        data: result,
    });
})

const deleteCustomer = catchAsync(async (req, res) => {
    const result = await CustomerServices.deleteCustomerFromDB(req.params.id);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Customer deleted successfully',
        data: result,
    });
})

const getAllCustomers = catchAsync(async (req, res) => {
    const result = await CustomerServices.getAllCustomersFromDB();

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Customers fetched successfully',
        data: result,
    });
})

export const Customer = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    getAllCustomers
}