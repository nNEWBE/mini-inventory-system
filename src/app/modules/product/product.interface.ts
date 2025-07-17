export interface IProduct {
  productId: number;
  name: string;
  barcode: string;
  price: number;
  stockQty: number;
  category: string;
  status: boolean;
  isDeleted: boolean;
}