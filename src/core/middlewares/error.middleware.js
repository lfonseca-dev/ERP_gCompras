import * as response from '../utils/response.js';
import { logError } from '../utils/logger.js';

export const errorMiddleware = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }

    const status = error.statusCode || 500;
    const message = error.message || "Ocorreu um erro no servidor";
    const reason = error.reason || '';

    logError({error, req, status, message, reason});

    switch (status) {
        case 400:
            return response.badRequest(res, {message, error: reason});
        case 401:
            return response.unauthorized(res, { message, error: reason });
        case 403: 
            return response.forbidden(res, {message, error: reason});
        case 404:
            return response.notFound(res, { message, error: reason });
        case 409:
            return response.conflict(res, { message, error: reason });
        default:
            return response.error(res, { message, error: reason });
    }
};
