const inquirer = require('inquirer')
const db = require('./db/connection');
const index = require('./index')

function viewAllDepts() {
    const sql = `SELECT * FROM departments`    
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows)
        index.init()
    });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    const sql = `SELECT * FROM roles`    
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows)
        index.init()
    });
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewAllEmployees() {
    const sql = `SELECT * FROM employees`    
    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.table(rows)
        index.init()
    });
}

function addDept() {
    inquirer.prompt({
        type: 'input',
        name: 'department',
        message: 'What is the name of the new department?',
    })
    .then(( {department} ) => {
        const sql = `INSERT INTO departments (dept_name) VALUES (?)`
        const param = department
        db.query(sql, param, (err, rows) => {
            if (err) throw err;
            console.log('Department Added!')
            index.init()
        })
    })
}

// WHEN I choose to add a role
// THEN that role is added to the database
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the new role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the new role?',
        },
        // need to find away to get current depts as answer choices. how can i make the db query and array of headers
        // {
        //     type: 'list',
        //     name: 'option',
        //     message: 'What dept is the new role in?',
        //     choices: deptOptions
        // }
    ])
    .then(( {title, salary, dept} ) => {
        const sql = `INSERT INTO roles (title, salary) VALUES (?)`
        const params = [
            [title, salary]
        ]
        db.query(sql, params, (err, rows) => {
            if (err) throw err;
            console.log('Role Added!')
            index.init()
        })
    })
}

// WHEN I choose to add an employee
// THEN that employee is added to the database
function addEmployee() {
    inquirer.prompt([
        {
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
        }
    ])
    .then(( {first_name, last_name, role, manager} ) => {
        const sql = `INSERT INTO employees (first_name, last_name) VALUES (?)`
        const params = [
            [first_name, last_name]
        ]
        db.query(sql, params, (err, rows) => {
            if (err) throw err;
            console.log('Employee Added!')
            index.init()
        })
    })
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee',
            message: 'Which employees role would you like to update?',
        },
        {
            type: 'input',
            name: 'new_role',
            message: 'What is the employees new role?',
        }
    ])
    .then(( { employee, new_role } ) => {
        const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
        const params = [employee, new_role];
        db.query(sql, params, (err, rows) => {
            if (err) throw err;
            index.init()
        })
    })
}

module.exports = {
    viewAllEmployees,
    viewAllRoles,
    viewAllDepts,
    addDept,
    addRole,
    addEmployee,
    updateRole
}