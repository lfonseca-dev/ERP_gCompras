import { AppError } from '../utils/AppError.js';
import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(
                new AppError({
                    message: "Token nao informado",
                    reason: "TOKEN_MISSING",
                    statusCode: 401,    
                })
            );
        }

        const [type, token] = authHeader.split(' ');

        if (type !== 'Bearer' || !token) {
            return next(
                new AppError({
                    message: "Token inválido",
                    reason: "INVALID_TOKEN",
                    statusCode: 401,
                })
            );
        }

        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return next(
                new AppError({
                    message: "Token expirado",
                    reason: "TOKEN_EXPIRED",
                    statusCode: 401,
                })
            );
        }
        
        return next(
            new AppError({
                message: "Token inválido ou expirado",
                reason: "INVALID_OR_EXPIRED_TOKEN",
                statusCode: 401,
            })
        );
    }
}