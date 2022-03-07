const inquirer = require('inquirer');
const { cMStart, cMUpdate } = require('../utils/inquiries');
const db = require("../db/connection");
const cTable = require('console.table');
const viewThings = require('./view');
const addThings = require('./add');

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
const updateThis = function (sql) {
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

const updateThings = function() {
    inquirer
        .prompt(cMUpdate)
        .then((data) => {
            if (data.update === 'Update Roll') {
                console.log('update role function');
            } else if (data.update === 'Update Employee') {
                console.log('update employee function');
            } else if (data.update === 'Remove Department') {
                console.log('remove department function');
            } else if (data.update === 'Remove Employee') {
                console.log('remove employee function');
            } else if (data.update === 'Self-Destruct Button') {
                console.log('self-destruct function');
            } else {console.log('line ~50 error update.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = updateThings;