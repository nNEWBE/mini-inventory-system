import { model, Schema } from "mongoose";
import { ISale } from "./sales.interface";

const SaleDetailSchema = new Schema({
    productId: { type: Number, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
})

const SaleSchema = new Schema<ISale>({
    saleId: { type: Number, required: true },
    saleDate: { type: Date, required: true },
    customerId: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    paidAmount: { type: Number, required: true },
    dueAmount: { type: Number, required: true },
    saleDetails: [SaleDetailSchema, { required: true }],
    isDeleted: { type: Boolean, default: false },
})

export const Sale = model<ISale>('Sale', SaleSchema);