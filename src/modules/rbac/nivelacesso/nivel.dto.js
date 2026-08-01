import { z } from "zod";

export const createNivelDTO = z.object({
    codigo: z
        .string({required_error: "Código é obrigatório"})
        .min(3, "Código deve ter no mínimo 3 caracteres")
        .max(50, "Código deve ter no máximo 50 caracteres"),

    descricao: z
        .string({required_error: "Descrição é obrigatória"})
        .min(3, "Descrição deve ter no mínimo 3 caracteres")
        .max(50, "Descrição deve ter no máximo 50 caracteres")
});

export const updateNivelDTO = createNivelDTO.partial();

export const getNivelDTO = z.object({
    id: z.coerce
        .number({message: "O ID deve ser um número"})
        .int("O ID deve ser um número inteiro")
        .positive("O ID deve ser maior que zero")
});