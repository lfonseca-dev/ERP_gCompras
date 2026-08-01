import pool from "../../../core/database/data.js";

const EmpresaRepository = {
    async create(empresa) {
        const [result] = await pool.execute("INSERT INTO empresa (codigo, descricao) VALUES (?, ?)", 
            [empresa.codigo, empresa.descricao]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM empresa WHERE deleted_at IS NULL");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.query("SELECT * FROM empresa WHERE id = ? AND deleted_at IS NULL", [id]);
        return rows[0];
    },

    async getByCodigo(codigo) {
        const [rows] = await pool.query("SELECT * FROM empresa WHERE codigo = ? AND deleted_at IS NULL", [codigo]);
        return rows[0];
    },

    async update(id, empresa) {
        const [result] = await pool.execute("UPDATE empresa SET codigo = ?, descricao = ?, updated_at = NOW() WHERE id = ?", 
            [empresa.codigo, empresa.descricao, id]);
        return result;
    },

    async delete(id) {
        const [result] = await pool.execute("UPDATE empresa SET ativo = FALSE, deleted_at = NOW() WHERE id = ?", [id]);
        return result;
    }
};

export default EmpresaRepository;