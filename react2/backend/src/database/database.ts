import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: "Kocilla77!",
    database: 'flower_shop',
});

export default pool;


