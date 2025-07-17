export interface ISale {
  saleId: number;
  saleDate: Date;
  customerId?: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
}
