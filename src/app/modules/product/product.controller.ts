import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { ProductService } from "./product.services";
import status from 'http-status';

const createProduct = catchAsync(async (req, res) => {
    const result = await ProductService.createProductIntoDB(req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});

const updateProduct = catchAsync(async (req, res) => {
    const result = await ProductService.updateProductFromDB(req.params.id, req.body);

    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Product updated successfully',
        data: result,
    });
});

const deleteProduct = catchAsync(async (req, res) => {
    const result = await ProductService.deleteProductFromDB(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Product deleted successfully',
        data: result
    })
});

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductService.getAllProductsFromDB();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Products fetched successfully',
        data: result
    })
});

export const Product = {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};