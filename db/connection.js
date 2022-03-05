const mysql = require('mysql2');

//creates conntection to mysql database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql121!!',
    database: 'contemptManagement'
});

module.exports = db;