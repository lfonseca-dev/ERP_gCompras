import { AppError } from "../utils/AppError.js";

export const validate =
  (schema, property = "body") => 
    (req, res, next) => {

      const parsed = schema.safeParse(req[property]);

      if (!parsed.success) {

        const reason = parsed.error.issues.map((issue) => ({
          path: issue.path[0],
         message: issue.message,
        }));

        return next(
          new AppError({
            message: "Erro de validação",
            reason,
            statusCode: 400,
          })
        );
      }

      req[property] = parsed.data;

      next();
    };