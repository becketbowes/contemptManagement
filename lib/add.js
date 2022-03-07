const inquirer = require('inquirer');
const { cMAdd, cMAddDepartment, cMAddRole, cMAddManager, cMAddEmployee } = require('../utils/inquiries');
const cMInterface = require('./start');
const cTable = require('console.table');
const viewThings = require('./view');
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

//insert supplied sql add function into database
const addThis = function (sql) {
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
            } else { console.log('line ~14 error add.js') }
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

//add new role position
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

//add new management employee
const addEmployee = function () {
    inquirer
        .prompt(cMAddManager)
        .then((data) => {
            const sql = `INSERT INTO manager 
            (first_name, last_name, management_id) 
            VALUE (${data.new-manager-first-name}, 
                ${data.new-manager-last-name}, 
                ${data.new-manager-role.length})`
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
            VALUE (${data.new-employee-first-name}, 
                ${data.new-employee-last-name}, 
                ${data.new-employee-role}, 
                ${data.new-employee-manager.length})`
            addThis(sql);
        })
        .catch((err) => {
            if (err) { console.log(err) }
        });
}

module.exports = addThings;