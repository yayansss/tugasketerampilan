import mysql from 'mysql2/promise';

const dbPool = mysql.createPool({
    host: "localhost", 
    user:"root", 
    password: '',
    database: "databarang",
    port: 3306
})

export default dbPool;