import { model, Schema } from "mongoose";
import { IUser } from "./authentication.interface";

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    password: { type: String, required: true },
},
    { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);