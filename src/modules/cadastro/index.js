import EmpresaRouter from "./empresa/empresa.routes.js";
import FornecedorRouter from "./fornecedor/fornecedor.routes.js";
import EmpresaFornecedorRouter from "./empresaFornecedor/empresaFornecedor.routes.js";

const CadastroRoutes = [
    {
        module: "cadastro",
        path: "/empresa",
        router: EmpresaRouter
    },
    {
        module: "cadastro",
        path: "/fornecedor",
        router: FornecedorRouter
    },
    {
        module: "cadastro",
        path: "/empresaFornecedor",
        router: EmpresaFornecedorRouter
    }
];

export default CadastroRoutes;