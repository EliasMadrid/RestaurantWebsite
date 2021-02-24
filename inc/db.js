const mysql = require('mysql2');

const connection = mysql.createConnection({
    
/*  host: 'localhost',
    user: 'root',
    database: 'saboroso',
    password: 'eliasmd8'*/
//---------------------------------------//-----------
    host: 'localhost',    
    user: 'user',
    database: 'saboroso',
    password: 'password',
    multipleStatements: true
});

module.exports = connection;