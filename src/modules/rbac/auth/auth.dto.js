import { z } from "zod";

export const loginDTO = z.object({
    email: z
        .string()
        .email("Email inválido"),

    senha: z
        .string("Senha é obrigatória")
});