const inquirer = require('inquirer');
const { cMAdd, cMAddDepartment, cMAddRole } = require('../utils/inquiries');

const addThings = function() {
    inquirer
        .prompt(cMAdd)
        .then((data) => {
            if (data.add === 'Add Department') {
                addDepartment();
            } else if (data.add === 'Add Role') {
                addRole();
            } else if (data.add === 'Add Employee') {
                console.log('add employee function');
            } else {console.log('line ~14 error add.js')}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

const addDepartment = function() {
    inquirer
        .prompt(cMAddDepartment)
        .then((data) => console.log(data))
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

const addRole = function() {
    inquirer
        .prompt(cMAddRole)
        .then((data) => console.log(data))
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = addThings;