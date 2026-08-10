import { z } from "zod";

export const createRegimeTDTO = z.object({
    codigo: z
        .string({required_error: "Código é obrigatório"})
        .min(1, "Código é obrigatório")
        .max(5, "Código deve ter no máximo 5 caracteres"),
    descricao: z
        .string({required_error: "Descrição é obrigatória"})
        .min(1, "Descrição não pode ser vazia")
        .max(100, "Descrição deve ter no máximo 100 caracteres")
});

export const updateRegimeTDTO = createRegimeTDTO.partial(); 

export const getRegimeTDTO = z.object({
    id: z.coerce
    .number({message: "O ID deve ser um número"})
    .int("O ID deve ser um número inteiro")
    .positive("O ID deve ser maior que zero")
});