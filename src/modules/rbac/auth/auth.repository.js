import pool from "../../../core/database/data.js";

const AuthRepository = {
    async authentication(email) {
        const [rows] = await pool.execute(
            "SELECT * FROM usuario WHERE email = ? AND deleted_at IS NULL", 
            [email]);
        return rows[0];
    },
};

export default AuthRepository;