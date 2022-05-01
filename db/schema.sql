DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- holds info about the employee roles
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30), -- holds role title
    salary DECIMAL, -- holds role salary
    department_id INTEGER -- holds reference to department role belongs to
);

-- holds info about the employee details
CREATE TABLE employees (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30), -- holds employee first name
last_name VARCHAR(30), -- holds employee last name
role_id INTEGER, -- holds reference to employee role
manager_id INTEGER -- holds reference of the id of the manager of current employee (null if employee has no manager)
);

