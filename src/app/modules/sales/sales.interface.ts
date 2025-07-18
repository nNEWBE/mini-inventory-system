export interface ISale {
  saleId: number;
  saleDate: Date;
  customerId?: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  saleDetails: ISaleDetail[];
  isDeleted: boolean;
}

export interface ISaleDetail {
  productId: number;
  quantity: number;
  price: number;
}