import StatusRepository from "./status.repository.js";
import { AppError } from "../../../core/utils/appError.js";

const StatusService = {
    async create(status) {
        const existingStatus = await StatusRepository.getByCodigo(status.codigo);

        if (existingStatus) {
            throw new AppError({
                message: "Código já cadastrado",
                reason: "CODIGO_ALREADY_EXISTS",
                statusCode: 409
            });
        }
        return await StatusRepository.create(status);
    },

    async getAll() {
        const status = await StatusRepository.getAll();

        if (!status || status.length === 0) {
            throw new AppError({
                message: "Nenhum status encontrado",
                reason: "STATUS_NOT_FOUND",
                statusCode: 404
            });
        }
        return status;
    },

    async getById(id) {
        const status = await StatusRepository.getById(id);

        if (!status) {
            throw new AppError({
                message: "Status não encontrado",
                reason: "STATUS_NOT_FOUND",
                statusCode: 404
            });
        }
        return status;
    },

    async update(id, status) {
        const existingStatus = await StatusRepository.getById(id);

        if (!existingStatus) {
            throw new AppError({
                message: "Status não encontrado",
                reason: "STATUS_NOT_FOUND",
                statusCode: 404
            });
        }
        return await StatusRepository.update(id, status);
    },

    async delete(id) {
        const existingStatus = await StatusRepository.getById(id);

        if (!existingStatus) {
            throw new AppError({
                message: "Status não encontrado",
                reason: "STATUS_NOT_FOUND",
                statusCode: 404
            });
        }
        return await StatusRepository.delete(id);
    }
};

export default StatusService;