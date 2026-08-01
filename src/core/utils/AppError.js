export class AppError extends Error {
    constructor({
        message,
        reason = '', 
        statusCode = 500,
    }) {
        super(message);
        this.name = 'AppError';
        this.reason = reason;
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}