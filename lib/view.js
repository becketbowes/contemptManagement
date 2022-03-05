const inquirer = require('inquirer');
const { cMView } = require('../utils/inquiries');

const viewThings = function() {
    inquirer
        .prompt(cMView)
        .then((data) => {
            if (data.view === 'View All Departments') {
                console.log('print: view all departments');
            } else if (data.view === 'View All Departments Salary Budget') {
                console.log('print: view all departments salary budget');
            } else if (data.view === 'View All Managers') {
                console.log('print: view all managers');
            } else if (data.view === 'View All Managers Salary Budget') {
                console.log('print: view all managers salary budget');
            } else if (data.view === 'View All Roles') {
                console.log('print: view all roles');
            } else if (data.view === 'View All Roles Salary Budger') {
                console.log('print: view all roles salary budget');
            } else if (data.view === 'View All Employees') {
                console.log('print: view all employees');
            } else if (data.view === 'View All Employees By Salary') {
                console.log('print: view all employees by salary');
            } else if (data.view === 'View All Employees By Manager') {
                console.log('print: view all employees by manager');
            } else if (data.view === 'View All Employees By Department') {
                console.log('print: view all employees by department');
            } else {console.log('line ~56 error index.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = viewThings;