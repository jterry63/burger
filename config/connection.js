// connection information for MySQL 

var mysql = require("mysql");
var config_password = require("./config.js");

var connection;

// set up connection to use JawsDB for use on Heroku or fall back to local connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: config_password.pass,
        database: "burgers_db"

    });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;