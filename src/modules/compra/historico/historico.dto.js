import { z } from "zod";

export const getHistoricoDTO = z.object({
    id: z
    .number({message: "O ID deve ser um número"})
    .int("O ID deve ser um número inteiro")
    .positive("O ID deve ser maior que zero")
});