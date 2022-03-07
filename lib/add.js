const inquirer = require('inquirer');
const { cMAdd, cMAddDepartment, cMAddRole, cMAddManager, cMAddEmployee } = require('../utils/inquiries');
const db = require("../db/connection");
const cTable = require('console.table');
const viewThings = require('./view');
const updateThings = require('./update');

//restarts the loop -- for reasons i cannot understand it doesn't work to send this back to index or start pages
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

//insert supplied sql add function into database
const addThis = function (sql) {
    db.query(sql, (res) => {
        console.table(res.json);
        cMInterface();
    });
};

//ask which thing to add
const addThings = function () {
    inquirer
        .prompt(cMAdd)
        .then((data) => {
            if (data.add === 'Add Department') {
                addDepartment();
            } else if (data.add === 'Add Role') {
                addRole();
            } else if (data.add === 'Add Manager') {
                addManager();
            } else if (data.add === 'Add Employee') {
                addEmployee();
            } else { console.log('line ~55 error add.js') }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new department
const addDepartment = function () {
    inquirer
        .prompt(cMAddDepartment)
        .then((data) => {
            const sql = `INSERT INTO department (name) VALUE (${data.name})`
            addThis(sql);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new role or manager position
const addRole = function () {
    inquirer
        .prompt(cMAddRole)
        .then((data) => {
            if (data.manager_or_not === 'YES') {
                const sql = `INSERT INTO management 
                (title, salary, department_id) VALUES
                (${data.new_role}, 
                ${data.new_role_salary},
                ${data.new_role_department.length})`
                addThis(sql);
            } else {
                const sql = `INSERT INTO role 
                (title, salary, department_worker_id) VALUES
                (${data.new_role}, 
                ${data.new_role_salary},
                ${data.new_role_department.length})`
                addThis(sql);
            }
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
};

//add new management employee
const addManager = function () {
    inquirer
        .prompt(cMAddManager)
        .then((data) => {
            const sql = `INSERT INTO manager 
            (first_name, last_name, management_id) 
            VALUE (${data.new_manager_firstname}, 
                ${data.new_manager_lastname}, 
                ${data.new_manager_role.length})`
            addThis(sql);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
}

//add new non-management employee
const addEmployee = function () {
    inquirer
        .prompt(cMAddEmployee)
        .then((data) => {
            const sql = `INSERT INTO employee 
            (first_name, last_name, role_id, manager_id) 
            VALUE (${data.new_employee_firstname}, 
                ${data.new_employee_lastname}, 
                ${data.new_employee_role}, 
                ${data.new_employee_manager.length})`
            addThis(sql);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
}

module.exports = addThings;