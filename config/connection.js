// connection information for MySQL 

var mysql = require("mysql");


var connection;


var connection = mysql.createConnection({
    use_env_variable: "JAWSDB_URL",
    user: "rzyza88dd1zanzqr",
    password: "je3mokf5ki6y8wfo",
    port: "3306",
    dialect: "mysql"
    // host: "mnwax9mxzow0k7hi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",


});


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;