DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- holds info about the employee roles
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30), -- holds role title
    salary DECIMAL, -- holds role salary
    department_id INT -- holds reference to department role belongs to
);

-- holds info about the employee details
CREATE TABLE employee (
id INT PRIMARY KEY,
first_name VARCHAR(30), -- holds employee first name
last_name: VARCHAR(30), -- holds employee last name
role_id INT, -- holds reference to employee role
manager_id INT, -- holds reference of the id of the manager of current employee (null if employee has no manager)
);

