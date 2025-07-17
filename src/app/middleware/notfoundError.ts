import { RequestHandler } from "express";
import httpStatus from "http-status";

const notFoundHandler: RequestHandler = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Not Found Error",
        statusCode: httpStatus.NOT_FOUND,
        error: {
            details: "API Not Found !!"
        }
    })
}

export default notFoundHandler