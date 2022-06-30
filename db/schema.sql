DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employees;

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL
);

-- holds info about the employee roles
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    dept_id INTEGER,
    CONSTRAINT fk_dept
        FOREIGN KEY (dept_id)
        REFERENCES departments(id)
        ON DELETE SET NULL
);

-- holds info about the employee details
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, -- holds employee first name
    last_name VARCHAR(30) NOT NULL, -- holds employee last name
    role_id INTEGER,
    manager_id INTEGER, -- holds reference of the id of the manager of current employee (null if employee has no manager)
    CONSTRAINT fk_role
        FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON DELETE SET NULL

);

