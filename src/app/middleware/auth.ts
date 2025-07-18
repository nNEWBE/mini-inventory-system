import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import catchAsync from '../../utils/catchAsync';
import AppError from '../errors/apperror';

const auth = (requiredRole: 'admin') => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const token = req?.headers?.authorization;
        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
        }

        const decoded = jwt.verify(
            token,
            config.jwt_access_secret as string,
        ) as JwtPayload;

        const role = decoded.role;
        if (requiredRole && !requiredRole === role) {
            throw new AppError(httpStatus.UNAUTHORIZED,
                'You are not authorized !!',
            );
        }

        next();
    });
};

export default auth;