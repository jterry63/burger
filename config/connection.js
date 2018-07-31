// connection information for MySQL 

var mysql = require("mysql");
var config_password = require("./config.js");

var connection;

connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-04.cleardb.net",
    user: "b4031bfcf8037f:8f4c20dc",
    password: config_password.pass,
    database: "heroku_90febd3c7bbf0b8"

});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;