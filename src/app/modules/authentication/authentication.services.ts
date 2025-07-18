import config from "../../config";
import { IUser } from "./authentication.interface";
import { User } from "./authentication.model";
import { createToken } from "./authentication.utils";

const loginUserIntoDB = async (data: IUser) => {
    const jwtPayload = {
        userId: data.name,
        role: 'admin'
    };

    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string,
    );

    const refreshToken = createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expires_in as string,
    );

    return {
        accessToken,
        refreshToken
    }
}

const regsiterUserIntoDB = async (data: IUser) => {
    const result = User.create(data);
    return result;
}


export const AuthenticationServices = {
    loginUserIntoDB,
    regsiterUserIntoDB
}