const mysql = require('mysql2');

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: 'Montecarlo02!',
    database: 'roster'
    }
);

module.exports = db;