const inquirer = require('inquirer');
const { cMStart, cMView } = require('../utils/inquiries');
const db = require("../db/connection");
const cTable = require('console.table');
const addThings = require('./add');
const updateThings = require('./update');

const cMInterface = function() {
    inquirer
        .prompt(cMStart)
        .then((data) => {
            if (data.start === 'View Something') {
                viewThings();
            } else if (data.start === 'Add Something') {
                addThings();
            } else {
                updateThings();
            }
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

//display the suggested sql database request, return to beginning:
const display = function(sql) {
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        console.table(rows);
        cMInterface();
    });
};

//inquirer queries to see what they would like to view, reply by sending sql request to be displayed:
const viewThings = function() {
    inquirer
        .prompt(cMView)
        .then((data) => {
            if (data.view === 'View All Departments') {
                const sql = `SELECT * FROM department`;
                display(sql);
            } else if (data.view === 'View All Departments Salary Budget') {
//fix this
                const sql = `SELECT department.id, department.name, 
                (SUM(management.salary) + SUM(role.salary)) 
                FROM department, management, role GROUP BY department.id;`;
                display(sql);
            } else if (data.view === 'View All Managers') {
                const sql = `SELECT id, first_name, last_name FROM manager`;
                display(sql);
            } else if (data.view === 'View All Managers Salary Budget') {
                const sql = `SELECT management.title, 
                (SUM(role.salary)) FROM management INNER JOIN role 
                ON management.id = role.department_worker_id GROUP BY management.id;`;
                display(sql);
            } else if (data.view === 'View All Roles') {
                const sql = `SELECT department.id, department.name, management.title, role.title 
                FROM ((department LEFT JOIN management ON department.id = management.department_id) 
                LEFT JOIN role ON department.id = role.department_worker_id);`;
                display(sql);
            } else if (data.view === 'View All Roles Salary Budget') {
                const sql = `SELECT department.id, department.name, management.title, 
                management.salary, role.title, role.salary FROM 
                ((department LEFT JOIN management ON department.id = management.department_id) 
                LEFT JOIN role ON department.id = role.department_worker_id);`;
                display(sql);
            } else if (data.view === 'View All Employees') {
                const sql = `SELECT employee.first_name, employee.last_name, 
                manager.first_name, manager.last_name 
                FROM employee JOIN manager ON employee.manager_id = manager.id;`;
                display(sql);
            } else if (data.view === 'View All Employees By Salary') {
                const sql = `SELECT employee.id, role.title, employee.first_name, 
                employee.last_name, role.salary FROM role LEFT JOIN employee 
                ON employee.role_id = role.id ORDER BY salary DESC;`;
                display(sql);
            } else if (data.view === 'View Employees By Manager') {
                const sql = `SELECT employee.first_name, employee.last_name, 
                manager.first_name, manager.last_name 
                FROM employee JOIN manager ON employee.manager_id = manager.id;`;
                display(sql);
            } else if (data.view === 'View Employees By Department') {
                const sql = `SELECT department.name, role.title, employee.first_name, 
                employee.last_name FROM 
                (department LEFT JOIN role ON department.id = role.department_worker_id) 
                LEFT JOIN employee ON role.id = employee.role_id`;
                display(sql);
            } else {console.log('line ~72 error view.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = viewThings;