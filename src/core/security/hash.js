import * as argon2 from "argon2";
import "dotenv/config";

const PEPPER = process.env.PEPPER;

if (!PEPPER) {
    throw new Error("PEPPER não configurado");
}

export async function hashPass(password) {
  return await argon2.hash(password + PEPPER, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    parallelism: 4,
    timeCost: 3,
  });
}

export async function validatePass(hash, password) {
  return await argon2.verify(hash, password + PEPPER);
}