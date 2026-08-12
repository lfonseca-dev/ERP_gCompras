import pool from "../../../core/database/data.js";

const HistoricoRepository = {
    async create(historico) {
        const [result] = await pool.execute("INSERT INTO historico_compra (compra_id, usuario_id, status_compra_id, observacao) VALUES (?, ?, ?, ?)", 
            [historico.compra_id, historico.usuario_id, historico.status_compra_id, historico.observacao]);
        return result;
    },

    async getAll() {
        const [historicos] = await pool.execute("SELECT * FROM historico_compra");
        return historicos;
    }
};

export default HistoricoRepository;