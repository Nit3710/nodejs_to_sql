const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nik1234#1",
    database: "node"

})

module.exports=con;