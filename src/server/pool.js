const mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'germany',
    port: 3306,
    connectionLimit: 5
});
module.exports = pool;