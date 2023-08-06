const mysql = require("mysql2");

const config = process.env.JAWSDB_URL || {
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: process.env.DB_NAME,
};
const db = mysql.createPool(config);

const API_KEY = "YOUR_API_KEY";


module.exports = db.promise();
