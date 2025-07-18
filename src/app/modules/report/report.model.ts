import { model, Schema } from "mongoose";
import { IReport } from "./report.interface";

const ReportSchema = new Schema<IReport>({
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

export const Report = model<IReport>('Report', ReportSchema);