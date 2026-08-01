import pool from "../../../core/database/data.js";

const EmpresaFornecedorRepository = {

    async create(empresaFornecedor) {
        const [result] = await pool.execute("INSERT INTO empresa_fornecedor (empresa_id, fornecedor_id) VALUES (?, ?)",
            [ empresaFornecedor.empresa_id, empresaFornecedor.fornecedor_id]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM empresa_fornecedor WHERE deleted_at IS NULL");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM empresa_fornecedor WHERE id = ? AND deleted_at IS NULL", [id]);
        return rows[0];
    },

    async getByEmpresaFornecedor(empresa_id, fornecedor_id) {
        const [rows] = await pool.query(
            `SELECT * FROM empresa_fornecedor WHERE empresa_id = ? AND fornecedor_id = ? AND deleted_at IS NULL`,[empresa_id, fornecedor_id]);
        return rows[0];
    },

    async getAllByEmpresa(empresa_id) {
        const [rows] = await pool.query("SELECT * FROM empresa_fornecedor WHERE empresa_id = ? AND deleted_at IS NULL", [empresa_id]);
        return rows;
    }
};

export default EmpresaFornecedorRepository;