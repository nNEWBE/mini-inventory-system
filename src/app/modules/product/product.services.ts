import QueryBuilder from "../../builder/QueryBuilder";
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (data: IProduct) => {
    const result = await Product.create(data);
    return result;
};

const updateProductFromDB = async (id: string, data: IProduct) => {
    const result = await Product.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
}

const deleteProductFromDB = async (id: string) => {
    const result = await Product.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true }
    );
    return result;
}

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
    const productQuery = new QueryBuilder(Product.find({ isDeleted: false })
        , query)
        .search(['name', 'category'])
        .sort()
        .filter()
        .paginate()
        .fields();

    const result = await productQuery.modelQuery;
    const meta = await productQuery.countTotal();

    return {
        meta,
        result,
    }
}

export const ProductService = {
    createProductIntoDB,
    updateProductFromDB,
    deleteProductFromDB,
    getAllProductsFromDB
};
