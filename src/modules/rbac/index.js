import NivelRouter from "./nivelacesso/nivel.routes.js";
import UsuarioRouter from "./usuario/usuario.routes.js";
import AuthRouter from "./auth/auth.routes.js";

const RbacRoutes = [
    {
        module: "rbac",
        path: "/nivelacesso",
        router: NivelRouter
    },
    {
        module: "rbac",
        path: "/usuario",
        router: UsuarioRouter
    },
    {
        module: "rbac",
        path: "/auth",
        router: AuthRouter
    }
];

export default RbacRoutes;