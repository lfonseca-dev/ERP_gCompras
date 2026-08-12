import StatusRouter from "./status/status.routes.js";
import ComprasRouter from "./compras/compras.routes.js";
import HistoricoRouter from "./historico/historico.routes.js";

const CompraRoutes = [
    {
        module: "compra",
        path: "/status",
        router: StatusRouter
    },
    {
        module: "compra",
        path: "/compras",
        router: ComprasRouter
    },
    {
        module: "compra",
        path: "/historico",
        router: HistoricoRouter
    }
];

export default CompraRoutes;