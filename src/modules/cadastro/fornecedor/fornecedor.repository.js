import pool from "../../../core/database/data.js";

const FornecedorRepository = {
    async create(fornecedor) {      
        const [result] = await pool.execute("INSERT INTO fornecedor (codigo, descricao) VALUES (?, ?)", 
            [fornecedor.codigo, fornecedor.descricao]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM fornecedor WHERE deleted_at IS NULL");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM fornecedor WHERE id = ? AND deleted_at IS NULL", [id]);
        return rows[0];
    },

    async getByCodigo(codigo) {
        const [rows] = await pool.query("SELECT * FROM fornecedor WHERE codigo = ? AND deleted_at IS NULL", [codigo]);
        return rows[0];
    },

    async getByDescricao(descricao) {
        const [rows] = await pool.query("SELECT * FROM fornecedor WHERE descricao = ? AND deleted_at IS NULL", [descricao]);
        return rows[0];
    },

    async update(id, fornecedor) {
        const [result] = await pool.execute("UPDATE fornecedor SET codigo = ?, descricao = ?, updated_at = NOW() WHERE id = ?", 
            [fornecedor.codigo, fornecedor.descricao, id]);
        return result;
    },

    async delete(id) {
        const [result] = await pool.execute("UPDATE fornecedor SET ativo = FALSE, deleted_at = NOW() WHERE id = ?", [id]);
        return result;
    }
};

export default FornecedorRepository;