const db = require('./db/connection');

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
function viewAllDepts() {
    console.log('function executed')
    //const sql = `SELECT * FROM departments`    
    // db.query(sql, (err, rows) => {
    //     if (err) {
    //         res.status(500).json({ error: err.message });
    //         return;
    //     }
    //     console.table(rows)
    // });
};

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
function viewAllRoles() {
    console.log('function executed')
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
function viewAllEmployees() {
    console.log('function executed')
}

// WHEN I choose to add a department
// THEN that department is added to the database
function addDept() {
    console.log('function executed')
    // inquirer.prompt({
    //     type: 'input',
    //     name: 'department',
    //     message: 'What is the name of the new department?',
    // })
    // .then(( {deptData} ) => {
        
    // })
}

// WHEN I choose to add a role
// THEN that role is added to the database
function addRole() {
    console.log('function executed')
    // inquirer.prompt({
    //     type: 'input',
    //     name: 'name',
    //     message: 'What is the name of the new role?',
    // },
    // {
    //     type: 'input',
    //     name: 'salary',
    //     message: 'What is the salary of the new role?',
    // },
    // {
    //     type: 'input',
    //     name: 'location',
    //     message: 'What department is the new role a part of?',
    // }
    // )
    // .then(( {roleData} ) => {
        
    // })
}

// WHEN I choose to add an employee
// THEN that employee is added to the database
function addEmployee() {
    console.log('function executed')
    
    // inquirer.prompt({
    //     type: 'input',
    //     name: 'first_name',
    //     message: 'What is the first name of the new employee?',
    // },
    // {
    //     type: 'input',
    //     name: 'last_name',
    //     message: 'What is the last name of the new employee?',
    // },
    // {
    //     type: 'input',
    //     name: 'role',
    //     message: 'What is the role of the new employee?',
    // },
    // {
    //     type: 'input',
    //     name: 'manager',
    //     message: 'Who manages the new employee?',
    // })
    // .then(( {employeeData} ) => {

    // })
}


// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
function updateRole() {
    console.log('function executed')
    // inquirer.prompt()
    // .then(( {updatedRole} ) => {
        
    // })
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