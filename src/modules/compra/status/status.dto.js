import { z } from "zod";

export const createStatusDTO = z.object({
    codigo: z
    .string({required_error: "Codigo é obrigatório"})
    .min(3, "Codigo deve conter no mínimo 3 caracteres")
    .max(50, "Codigo deve conter no máximo 50 caracteres"),

    descricao: z
    .string({required_error: "Descrição é obrigatória"})
    .min(3, "Descrição deve conter no mínimo 3 caracteres")
    .max(100, "Descrição deve conter no máximo 100 caracteres")
});

export const updateStatusDTO = createStatusDTO.partial();

export const getStatusDTO = z.object({
    id: z.coerce
    .number({message: "O ID deve ser um número"})
    .int("O ID deve ser um número inteiro")
    .positive("O ID deve ser maior que zero")
});