import status from "http-status";
import AppError from "../../errors/apperror";
import { Product } from "../product/product.model";
import { ISale } from "./sales.interface";
import { Sale } from "./sales.model";
import { Customer } from "../customer/customer.model";

const createSalesIntoDB = async (data: ISale) => {
    try {
        for (const item of data.saleDetails) {
            const product = await Product.findOne({ productId: item.productId });

            if (!product) {
                throw new Error(`Product with ID ${item.productId} not found`);
            }

            if (product.stockQty < item.quantity) {
                throw new AppError(status.BAD_REQUEST,
                    `Insufficient stock for product ID ${item.productId}. Available: ${product.stockQty}, Requested: ${item.quantity}`
                );
            }

            await Product.updateOne(
                { productId: item.productId },
                { $inc: { stockQty: -item.quantity } }
            );

            await Customer.updateOne(
                { customerId: data.customerId },
                { $inc: { loyaltyPoints: 1 } }
            );
        }

        const result = await Sale.create(data);
        return result;
    } catch (error: any) {
        throw new AppError(status.BAD_REQUEST, "Sale creation failed", error.stack);
    }
};

export const SaleServices = {
    createSalesIntoDB,
};