const inquirer = require('inquirer')

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepts() {
    console.table()
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    console.table()
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewAllEmployees() {
    console.table()
}

// WHEN I choose to add a department
// THEN that department is added to the database
function addDept() {
    inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What is the name of the new department?',
    })
}

// WHEN I choose to add a role
// THEN that role is added to the database
function addRole() {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is the name of the new role?',
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the new role?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'What department is the new role a part of?',
    }
    )
}

// WHEN I choose to add an employee
// THEN that employee is added to the database
function addEmployee() {
    inquirer.prompt({
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the new employee?',
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new employee?',
    },
    {
        type: 'input',
        name: 'role',
        message: 'What is the role of the new employee?',
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Who manages the new employee?',
    })
}


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateRole() {
    inquirer.prompt()
}

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
            viewAllDepts()
        }
        if (option === 'view all roles') {
            viewAllRoles()
        }
        if (option === 'view all employees') {
            viewAllEmployees()
        }
        if (option === 'add a department') {
            addDept()
        }
        if (option === 'add a role') {
            addRole()
        }
        if (option === 'add an employee') {
            addEmployee()
        }
        if (option === 'update an employee role') {
            updateRole()
        }
    })
}

init()

// console.table
// ([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
// ]);