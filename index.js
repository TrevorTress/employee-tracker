const inquirer = require('inquirer')
const employee = require('./employees.js')
const db = require('./db/connection');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    init();
});

function init() {
    inquirer.prompt(
    {
        type: 'list',
        name: 'option',
        message: 'WELCOME TO EMPLOYEE-TRACKER',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    })
    .then(( {option} ) => {
        console.log(option)
        if (option === 'view all departments') {
            employee.viewAllDepts()
        }
        if (option === 'view all roles') {
            employee.viewAllRoles()
        }
        if (option === 'view all employees') {
            employee.viewAllEmployees()
        }
        if (option === 'add a department') {
            employee.addDept()
        }
        if (option === 'add a role') {
            employee.addRole()
        }
        if (option === 'add an employee') {
            employee.addEmployee()
        }
        if (option === 'update an employee role') {
            employee.updateRole()
        }
    })
}

module.exports.init = init;