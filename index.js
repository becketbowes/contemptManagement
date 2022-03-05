const cTable = require('console.table');
const mysql = require('mysql2');
var inquirer = require('inquirer');
const db = require('./db/connection');

// console.table example:
// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);
  
//   // prints
//   name  age
//   ----  ---
//   foo   10
//   bar   20

// mysql2 example connection:
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test'
//   });
  
//   // simple query
//   connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );
  
//   // with placeholder
//   connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );

// mysql2 promise wrapper example:
// async function main() {
//     // get the client
//     const mysql = require('mysql2/promise');
//     // create the connection
//     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
//     // query database
//     const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
//   }

// inquirer example:
// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });