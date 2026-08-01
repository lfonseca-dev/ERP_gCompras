import CadastroRoutes from "../modules/cadastro/index.js";
import RbacRoutes from "../modules/rbac/index.js";
import CompraRoutes from "../modules/compra/index.js";

const allRoutes = [
    ...CadastroRoutes,
    ...RbacRoutes,
    ...CompraRoutes
];

export default allRoutes;