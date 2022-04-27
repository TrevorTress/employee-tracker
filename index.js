const inquirer = require('inquirer')

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
            console.log('you picked something')
        }
        if (option === 'view all roles') {
            console.log('you picked something')
        }
        if (option === 'view all employees') {
            console.log('you picked something')
        }
        if (option === 'add a department') {
            console.log('you picked something')
        }
        if (option === 'add a role') {
            console.log('you picked something')
        }
        if (option === 'add an employee') {
            console.log('you picked something')
        }
        if (option === 'update an employee role') {
            console.log('you picked something')
        }
    })
}

init()

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database