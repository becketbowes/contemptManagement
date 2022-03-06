const db = require("../db/connection");

const departmentChoices = [];
const makeDepartmentList = function() {
    const reformatDepartments = function(rows) {
        for (i = 0; i < rows.length; i++) {
            const inqChoice = `${rows[i].id}, ${rows[i].name}`;
            departmentChoices.push(inqChoice);
        };
        return departmentChoices;
    };

    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        rows => JSON.parse(rows);
        reformatDepartments(rows);
    });
};
makeDepartmentList();
// const makeManagementList = function() {
//     console.log(getStuff.getManagers());
// };

// const makeManagerList = function() {
//     console.log(getStuff.getManagers());
// };

// const makeRoleList = function() {
//     console.log(getStuff.getRoles());
// };

// const makeEmployeeList = function() {
//     console.log(getStuff.getEmployees());
// };

const cMStart = [{
    type: 'list',
    name: 'start',
    message: 'What would you like to do?',
    choices: ['View Something', 'Add Something', 'Update/Remove Something']
}];

const cMView = [{
    type: 'list',
    name: 'view',
    message: 'What would you like to see?',
    choices: [
        'View All Departments',
        'View All Departments Salary Budget',
        'View All Managers',
        'View All Managers Salary Budget',
        'View All Roles',
        'View All Roles Salary Budget',
        'View All Employees',
        'View All Employees By Salary',
        'View Employees By Manager',
        'View Employees By Department'
    ]
}];

const cMAdd = [{
    type: 'list',
    name: 'add',
    message: 'What would you like to add?',
    choices: [
        'Add Department',
        'Add Role',
        'Add Employee'
    ]
}];

// const cMUpdate = [{
//     type: 'list',
//     name: 'update',
//     message: 'What would you like to update?',
//     choices: [
//         'Update Roll',
//         'Update Employee',
//         'Remove Department',
//         'Remove Employee',
//         'Self-Destruct Button'
//     ]
// }];

const cMAddDepartment = [{
    type: 'text',
    name: 'new-department',
    message: 'What is the name of the new department?'
}];

const cMAddRole = [{
        type: 'text',
        name: 'new-role',
        message: 'What is the name of the new role?'
    },
    {
        type: 'number',
        name: 'new-role-salary',
        message: 'What is the salary of the new role?'
    },
    {
        type: 'list',
        name: 'new-role-department',
        message: 'What department does this role belong to?',
        choices: departmentChoices
    },
    {
        type: 'list',
        name: 'new-role-department',
        message: 'Is this a managerial position?',
        choices: ['YES', 'NO']
    }
];

// const cMAddManager = [{
//     type: 'text',
//     name: 'new-employee-first-name',
//     message: 'What is the first name of the new employee?'
// },
// {
//     type: 'text',
//     name: 'new-employee-last-name',
//     message: 'What is the last name of the new employee?'
// },
// {
//     type: 'list',
//     name: 'new-employee-role',
//     message: 'What is the role of the new employee?',
//     choices: [makeManagementList()]
// },
// ];

// const cMAddEmployee = [{
//         type: 'text',
//         name: 'new-employee-first-name',
//         message: 'What is the first name of the new employee?'
//     },
//     {
//         type: 'text',
//         name: 'new-employee-last-name',
//         message: 'What is the last name of the new employee?'
//     },
//     {
//         type: 'list',
//         name: 'new-employee-role',
//         message: 'What is the role of the new employee?',
//         choices: [makeRoleList()]
//     },
//     {
//         type: 'list',
//         name: 'new-employee-manager',
//         message: 'Who is the manager of the new employee?',
//         choices: [makeManagerList()]
//     }
// ];

// //expand once working
// const cMUpdateRole = [{
//         type: 'list',
//         name: 'update-role',
//         message: 'Which role would you like to update?',
//         choices: [makeRoleList()]
// }]

// //expand once working
// const cMUpdateEmployee = [{
//         type: 'list',
//         name: 'update-employee',
//         message: 'Which Employee would you like to update?',
//         choices: [makeEmployeeList()]
// }];

module.exports = {
    cMStart,
    cMView,
    cMAdd,
    // cMUpdate,
    cMAddDepartment,
    cMAddRole,
    // cMAddEmployee,
    // cMUpdateRole,
    // cMUpdateEmployee
};