import { model, Schema } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema = new Schema<IProduct>(
  {
    productId: { type: Number, required: true },
    name: { type: String, required: true },
    barcode: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    stockQty: { type: Number, required: true },
    category: { type: String, required: true },
    status: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Product = model<IProduct>('Product', ProductSchema);