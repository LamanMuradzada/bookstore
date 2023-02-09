const mysql = require("mysql2");
const config = require("./config");

let connection = mysql.createConnection(config.database);

connection.connect(function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("Connected to MySQL server!");
  }
});

module.exports = connection.promise();
