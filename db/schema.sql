DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMA
    name VARCHAR(30) NOT NULL
);

CREATE TABLE management (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE manager (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    management_id INTEGER,
    CONSTRAINT fk_management FOREIGN KEY (management_id) REFERENCES management(id) ON DELETE CASCADE
);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_worker_id INTEGER NOT NULL,
    CONSTRAINT fk_department_worker_id FOREIGN KEY (department_worker_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES manager(id) ON DELETE CASCADE
);