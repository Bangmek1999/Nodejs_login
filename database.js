const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host: "localhost",
    user: "Nodejs",
    password: "zxcv1234",
    database: "nodejs_login"
}).promise();
module.exports = dbConnection;