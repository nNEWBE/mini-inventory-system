import { ICustomer } from "./customer.interface";
import { Customer } from "./customer.model";

const createCustomerIntoDB = async (data: ICustomer) => {
    const result = await Customer.create(data);
    return result;
};

const updateCustomerFromDB = async (id: string, data: ICustomer) => {
    const result = await Customer.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

const deleteCustomerFromDB = async (id: string) => {
    const result = await Customer.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    );
    return result;
};

const getAllCustomersFromDB = async () => {
    const result = await Customer.find({ isDeleted: false });
    return result;
};

export const CustomerServices={
    createCustomerIntoDB,
    updateCustomerFromDB,
    deleteCustomerFromDB,
    getAllCustomersFromDB
}