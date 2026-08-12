import ComprasRepository from "./compras.repository.js";
import EmpresaFornecedorService from "../../cadastro/empresaFornecedor/empresaFornecedor.service.js";
import HistoricoRepository from "../historico/historico.repository.js";
import { AppError } from "../../../core/utils/AppError.js";

const ComprasService = {
    async create(compra, usuario) {
        const existingCompra = await ComprasRepository.getByNumero(compra.numero);

        if (existingCompra) {
            throw new AppError({
                message: "Compra já cadastrada",
                reason: "COMPRA_ALREADY_EXISTS",
                statusCode: 409,
            });
        }

        await EmpresaFornecedorService.validateVinculo(usuario.empresa_id, compra.fornecedor_id);

        const result = await ComprasRepository.create({
            ...compra, 
            usuario_id: usuario.sub, 
            empresa_id: usuario.empresa_id
        });

        await HistoricoRepository.create({
            compra_id: result.insertId,
            usuario_id: usuario.sub,
            status_compra_id: compra.status_compra_id,
            observacao: "Compra criada"
        });

        return result;
    },

    async getAllByEmpresa(usuario) {
        const compras = await ComprasRepository.getAllByEmpresa(usuario.empresa_id);

        if (!compras || compras.length === 0) {
            throw new AppError({
                message: "Nenhuma compra encontrada",
                reason: "COMPRAS_NOT_FOUND",
                statusCode: 404,
            });
        }

        return compras;
    },

    async getById(id) {
        const compra = await ComprasRepository.getById(id);

        if (!compra) {
            throw new AppError({
                message: "Compra não encontrada",
                reason: "COMPRA_NOT_FOUND",
                statusCode: 404,
            });
        }
        return compra;
    },

    async updateStatus(id, status_compra_id, usuario) {
        const existingCompra = await ComprasRepository.getById(id);

        if (!existingCompra) {
            throw new AppError({
                message: "Compra não encontrada",
                reason: "COMPRA_NOT_FOUND",
                statusCode: 404,
            });
        }

        if (existingCompra.empresa_id !== usuario.empresa_id) {
            throw new AppError({
                message: "A compra não pertence à empresa do usuário",
                reason: "COMPRA_NOT_BELONG_TO_USER_COMPANY",
                statusCode: 403,
            });
        }

        const result = await ComprasRepository.updateStatus(id, status_compra_id);

        await HistoricoRepository.create({
            compra_id: id,
            usuario_id: usuario.sub,
            status_compra_id,
            observacao: "Status da compra alterado"
        });

        return result;
    },

    async update(id, compra, usuario) {
        const existingCompra = await ComprasRepository.getById(id);

        if (!existingCompra) {
            throw new AppError({
                message: "Compra não encontrada",
                reason: "COMPRA_NOT_FOUND",
                statusCode: 404,
            });
        }

        if (existingCompra.empresa_id !== usuario.empresa_id) {
            throw new AppError({
                message: "A compra não pertence à empresa do usuário",
                reason: "COMPRA_NOT_BELONG_TO_USER_COMPANY",
                statusCode: 403,
            });
        }

        const result = await ComprasRepository.update(id, {
            ...compra, 
            usuario_id: usuario.sub, 
            empresa_id: usuario.empresa_id 
        });

        await HistoricoRepository.create({
            compra_id: id,
            usuario_id: usuario.sub,
            status_compra_id: existingCompra.status_compra_id,
            observacao: "Compra atualizada"
        });

        return result;
    },

    async delete(id, usuario) {
        const existingCompra = await ComprasRepository.getById(id);

        if (!existingCompra) {
            throw new AppError({
                message: "Compra não encontrada",
                reason: "COMPRA_NOT_FOUND",
                statusCode: 404,
            });
        }

        if (existingCompra.empresa_id !== usuario.empresa_id) {
            throw new AppError({
                message: "A compra não pertence à empresa do usuário",
                reason: "COMPRA_NOT_BELONG_TO_USER_COMPANY",
                statusCode: 403,
            });
        }

        const result = await ComprasRepository.delete(id);

        await HistoricoRepository.create({
            compra_id: id,
            usuario_id: usuario.sub,
            status_compra_id: existingCompra.status_compra_id,
            observacao: "Compra excluída"
        });

        return result;
    }
};

export default ComprasService;