import "dotenv/config";

const config = {
    development: {
        host: "localhost",
        port: 3306,
        database: "faulim_compras",
        dialect: "mysql",
        user: "root",
        password: "",
    },

    production: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    }
};

export default config[process.env.NODE_ENV || "development"];