import { z } from "zod";

export const createUsuarioDTO = z.object({
    nome: z
    .string({required_error: "Nome é obrigatório"})
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve conter no máximo 100 caracteres"),

    email: z
    .string({required_error: "Email é obrigatório"})
    .email("Email inválido"),

    senha: z
    .string({required_error: "Senha é obrigatória"})
    .min(6, "Senha deve conter no mínimo 6 caracteres"),

    empresa_id: z.coerce
    .number({message: "Empresa ID deve ser um número"})
    .int("Empresa ID deve ser um número inteiro")
    .positive("Empresa ID deve ser maior que zero"),

    nivel_acesso_id: z.coerce
    .number({message: "Nível de Acesso ID deve ser um número"})
    .int("Nível de Acesso ID deve ser um número inteiro")
    .positive("Nível de Acesso ID deve ser maior que zero")
});

export const updateUsuarioDTO = createUsuarioDTO.partial();

export const getUsuarioDTO = z.object({
    id: z.coerce
    .number("ID deve ser um número")
    .int("ID deve ser um número inteiro")
    .positive("ID deve ser maior que zero")
});