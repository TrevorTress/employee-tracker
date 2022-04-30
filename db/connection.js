const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    database: 'employees'
    },
    console.log('Connected to Employee Database')
);

module.exports = db;