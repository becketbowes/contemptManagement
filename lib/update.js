const inquirer = require('inquirer');
const { cMUpdate } = require('../utils/inquiries');

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
            } else {console.log('line ~94 error index.js');}
        })
        .catch ((err) => {
            if (err) {console.log(err)}
        });
};

module.exports = updateThings;