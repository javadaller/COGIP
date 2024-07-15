DROP TABLE IF EXISTS roles_permissions;
DROP TABLE IF EXISTS permissions;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    ID_role         INT NOT NULL AUTO_INCREMENT,
    name               VARCHAR(50) NOT NULL,
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_role)
);

CREATE TABLE users (
    ID_user         INT NOT NULL AUTO_INCREMENT,
    role_ID         INT NOT NULL,
    first_name      VARCHAR(50) NOT NULL,
    email           VARCHAR(50),
    password        VARCHAR(50),
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_user),
    FOREIGN KEY (role_ID) REFERENCES roles (ID_role)
);


CREATE TABLE permissions (
    ID_permission         INT NOT NULL AUTO_INCREMENT,
    name      VARCHAR(50) NOT NULL,
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_permission)
);

CREATE TABLE roles_permissions (
    ID_roles_permissions    INT NOT NULL AUTO_INCREMENT,
    role_ID                 INT NOT NULL,
    permission_ID           INT NOT NULL,

    PRIMARY KEY (ID_roles_permissions),
    FOREIGN KEY (role_ID) REFERENCES roles (ID_role),
    FOREIGN KEY (permission_ID) REFERENCES permissions (ID_permission)
);