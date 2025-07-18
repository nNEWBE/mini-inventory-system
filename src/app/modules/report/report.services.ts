import status from "http-status";
import AppError from "../../errors/apperror";
import { Sale } from "../sales/sales.model";
import { IReport } from "./report.interface";

const getAllReportsFromDB = async (data: IReport) => {
    
        const { startDate, endDate } = data;

        if (!startDate || !endDate) {
            throw new AppError(400, "startDate and endDate are required");
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        const salesSummary = await Sale.aggregate([
            {
                $match: {
                    saleDate: {
                        $gte: start,
                        $lte: end
                    },
                    isDeleted: false
                }
            },
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: '$totalAmount' },
                    totalRevenue: { $sum: '$paidAmount' },
                    numberOfTransactions: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    totalSales: 1,
                    totalRevenue: 1,
                    numberOfTransactions: 1
                }
            }
        ]);

        if (!salesSummary || salesSummary.length === 0) {
            throw new AppError(status.NOT_FOUND, 'No sales report found in the given date range');
        }

        return salesSummary[0];
   
};

export const ReportServices = {
    getAllReportsFromDB,
};
