import pool from "../../../core/database/data.js";

const NivelRepository = {
    async create(nivelAcesso) {
        console.log("REPOSITORY:", nivelAcesso);
        console.log("codigo:", nivelAcesso.codigo);
        console.log("descricao:", nivelAcesso.descricao);
        const [result] = await pool.execute("INSERT INTO nivel_acesso (codigo, descricao) VALUES (?, ?)", [nivelAcesso.codigo, nivelAcesso.descricao]);
        return result;
    },

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM nivel_acesso");
        return rows;
    },

    async getById(id) {
        const [rows] = await pool.execute("SELECT * FROM nivel_acesso WHERE id = ?", [id]);
        return rows[0];
    },

    async getByCodigo(codigo) {
        const [rows] = await pool.execute("SELECT * FROM nivel_acesso WHERE codigo = ?", [codigo]);
        return rows[0];
    },

    async update(id, nivelAcesso) {
        const [result] = await pool.execute("UPDATE nivel_acesso SET codigo = ?, descricao = ?, updated_at = NOW() WHERE id = ?", 
            [nivelAcesso.codigo, nivelAcesso.descricao, id]);
        return result;
    },

    async delete(id) {
        const [result] = await pool.execute("UPDATE nivel_acesso SET ativo = FALSE, deleted_at = NOW() WHERE id = ?", [id]);
        return result;
    }
};

export default NivelRepository;