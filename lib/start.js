const inquirer = require('inquirer');
const { cMStart } = require('../utils/inquiries');
const viewThings = require('./view');
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

module.exports = cMInterface;