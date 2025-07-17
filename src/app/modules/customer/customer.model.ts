import { model, Schema } from 'mongoose';
import { ICustomer } from './customer.interface';

const CustomerSchema = new Schema<ICustomer>(
  {
    customerId: { type: Number, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    loyaltyPoints: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const Customer = model<ICustomer>('Customer', CustomerSchema);