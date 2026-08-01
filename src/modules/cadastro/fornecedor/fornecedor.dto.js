import { z } from "zod";

export const createFornecedorDTO = z.object({
    codigo: z
        .string({required_error: "Código é obrigatório"})
        .min(1, "Código não pode ser vazio"),

    descricao: z
        .string({required_error: "Descrição é obrigatória"})
        .min(1, "Descrição não pode ser vazia")
        .max(100, "Descrição deve ter no máximo 100 caracteres")
});

export const updateFornecedorDTO = createFornecedorDTO.partial();

export const getDescricaoFornecedorDTO = z.object({
    descricao: z
        .string({required_error: "Descrição é obrigatória"})
});

export const getFornecedorDTO = z.object({
    id: z.coerce
    .number({message: "O ID deve ser um número"})
    .int("O ID deve ser um número inteiro")
    .positive("O ID deve ser maior que zero")
});