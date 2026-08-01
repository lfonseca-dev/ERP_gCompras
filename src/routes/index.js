import { Router } from "express";
import { AppError } from "../core/utils/AppError.js";
import  allRoutes from "./allRoutes.js";

const routes = Router();

allRoutes.forEach((route) => {
    const fullPath = 
    `/${route.module}${route.path}`
    .replace(/\/+/g, "/");

    routes.use(
        fullPath,
        route.router);
});

routes.use((req, res, next) => {
    next(
        new AppError({
            message: "Rota não encontrada",
            reason: "ROUTE_NOT_FOUND",
            statusCode: 404,
        })
    );
});

export default routes;