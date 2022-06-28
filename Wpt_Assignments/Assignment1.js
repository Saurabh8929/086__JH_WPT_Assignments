const url = "";

let dbparams = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "juhu",
  port: 3306,
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);
console.log("connection created");