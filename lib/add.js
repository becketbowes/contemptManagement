const inquirer = require('inquirer');
const { cMAdd } = require('../utils/inquiries');

const addThings = function() {
    inquirer
        .prompt(cMAdd)
        .then((data) => {
            if (data.add === 'Add Department') {
                console.log('add department function');
            } else if (data.add === 'Add Role') {
                console.log('add role function');
            } else if (data.add === 'Add Employee') {
                console.log('add employee function');
            } else {console.log('line ~14 error add.js')}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = addThings;