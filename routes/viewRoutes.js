const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// // all job titles including management
// `SELECT department.id, department.name, management.title, management.salary, role.title, role.salary FROM ((department LEFT JOIN management ON department.id = management.department_id) LEFT JOIN role ON department.id = role.department_worker_id);`
// // all employees with job descriptions and salaries:
// `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee INNER JOIN role ON employee.role_id = role.id;`
// // all managers with job descriptions and salaries: 
// `SELECT manager.id, manager.first_name, manager.last_name, management.title, management.salary FROM manager INNER JOIN management ON manager.management_id = management.id;`
// // all employees by manager:
// `SELECT employee.first_name, employee.last_name, manager.first_name, manager.last_name FROM employee JOIN manager ON employee.manager_id = manager.id;`






module.exports = router;

// 'SELECT department.id, department.name, manager.first_name, manager.last_name, management.title, management.salary, employee.first_name, employee.last_name, role.title, role.salary FROM ((((department RIGHT JOIN management ON department.id = management.department_id) RIGHT JOIN manager ON manager.management_id = management_id) RIGHT JOIN role ON department.id = role.department_worker_id) RIGHT JOIN employee ON employee.role_id = role.id);'