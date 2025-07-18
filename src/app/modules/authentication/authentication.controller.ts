import status from "http-status";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { AuthenticationServices } from "./authentication.services";
import config from "../../config";

const loginUser = catchAsync(async (req, res) => {
    const { accessToken, refreshToken } = await AuthenticationServices.loginUserIntoDB(req.body);

    res.cookie('refreshToken', refreshToken, {
        secure: config.node_env === 'production',
        httpOnly: true,
        sameSite: 'none',
        maxAge: Number(config.cookies_max_age),
    });

    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: 'Login successful',
        data: {
            token: {
                accessToken,
            }
        }
    });
});

const registerUser = catchAsync(async (req, res) => {
    console.log("🚀 ~ registerUser ~ data:", req.body)
    const result = await AuthenticationServices.regsiterUserIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: status.CREATED,
        message: 'User registered successfully',
        data: result
    });
});


export const AuthenticationController = {
    loginUser,
    registerUser
}