import FornecedorRepository from "./fornecedor.repository.js";
import { AppError } from "../../../core/utils/AppError.js";

const FornecedorService = {
    async create(fornecedor) {
        const existingFornecedor = await FornecedorRepository.getByCodigo(fornecedor.codigo);

        if (existingFornecedor) {
            throw new AppError({
                message: "Fornecedor já cadastrado",
                reason: "FORNECEDOR_ALREADY_EXISTS",
                statusCode: 409,
            });
        }
        return await FornecedorRepository.create(fornecedor);
    },

    async getAll() {
        const fornecedores = await FornecedorRepository.getAll();

        if (!fornecedores || fornecedores.length === 0) {
            throw new AppError({
                message: "Nenhum fornecedor encontrado",
                reason: "FORNECEDORES_NOT_FOUND",
                statusCode: 404,
            });
        }
        return fornecedores;
    },

    async getById(id) {
        const fornecedor = await FornecedorRepository.getById(id);

        if (!fornecedor) {
            throw new AppError({
                message: "Fornecedor não encontrado",
                reason: "FORNECEDOR_NOT_FOUND",
                statusCode: 404,
            });
        }
        return fornecedor;
    },

    async getByDescricao(descricao) {
        const Fornecedor = await FornecedorRepository.getByDescricao({ descricao });

        if (!Fornecedor) {
            throw new AppError({
                message: "Fornecedor não encontrado",
                reason: "FORNECEDOR_NOT_FOUND",
                statusCode: 404,
            });
        }
        return Fornecedor;
    },

    async update(id, fornecedor) {
        const existingFornecedor = await FornecedorRepository.getById(id);

        if (!existingFornecedor) {
            throw new AppError({
                message: "Fornecedor não encontrado",
                reason: "FORNECEDOR_NOT_FOUND",
                statusCode: 404,
            });
        }
        return await FornecedorRepository.update(id, fornecedor);
    },

    async delete(id) {
        const existingFornecedor = await FornecedorRepository.getById(id);

        if (!existingFornecedor) {
            throw new AppError({
                message: "Fornecedor não encontrado",
                reason: "FORNECEDOR_NOT_FOUND",
                statusCode: 404,
            });
        }
        return await FornecedorRepository.delete(id);
    }
};

export default FornecedorService;