import { z } from "zod";

export const createEmpresaFornecedorDTO = z.object({
    fornecedor_id: z
        .coerce
        .number({required_error: "Fornecedor é obrigatório"})
        .int("Fornecedor deve ser um número inteiro")
        .positive("Fornecedor inválido")
});

export const idEmpresaFornecedorDTO = z.object({
    id: z
        .coerce
        .number({required_error: "ID é obrigatório"})
        .int("ID deve ser um número inteiro")
        .positive("ID inválido")
});