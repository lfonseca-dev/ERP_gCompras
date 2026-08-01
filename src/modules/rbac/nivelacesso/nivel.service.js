import NivelRepository from "./nivel.repository.js";
import { AppError } from "../../../core/utils/appError.js";

const NivelService = {
    async create(nivelAcesso) {
        const existingNivel = await NivelRepository.getByCodigo(nivelAcesso.codigo);

        if (existingNivel) {
            throw new AppError({
                message: "Código já cadastrado",
                reason: "CODIGO_ALREADY_EXISTS",
                statusCode: 409
            });
        }
        return await NivelRepository.create(nivelAcesso);
    },

    async getAll() {
        const niveisAcesso = await NivelRepository.getAll();

        if (!niveisAcesso || niveisAcesso.length === 0) {
            throw new AppError({
                message: "Nenhum nível de acesso encontrado",
                reason: "NIVEIS_NOT_FOUND",
                statusCode: 404
            });
        }
        return niveisAcesso;
    },

    async getById(id) {
        const nivelAcesso = await NivelRepository.getById(id);  

        if (!nivelAcesso) {
            throw new AppError({
                message: "Nível de acesso não encontrado",
                reason: "NIVEL_NOT_FOUND",
                statusCode: 404
            });
        }
        return nivelAcesso;
    },

    async update(id, nivelAcesso) {
        const existingNivel = await NivelRepository.getById(id);

        if (!existingNivel) {
            throw new AppError({
                message: "Nível de acesso não encontrado",
                reason: "NIVEL_NOT_FOUND",
                statusCode: 404
            });
        }
        return await NivelRepository.update(id, nivelAcesso);
    },

    async delete(id) {
        const existingNivel = await NivelRepository.getById(id);

        if (!existingNivel) {
            throw new AppError({
                message: "Nível de acesso não encontrado",
                reason: "NIVEL_NOT_FOUND",
                statusCode: 404
            });
        }
        return await NivelRepository.delete(id);
    }
};

export default NivelService;