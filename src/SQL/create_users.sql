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

-- Insertion des rôles
INSERT INTO roles (name, created_at, updated_at)
VALUES 
('Admin', CURDATE(), CURDATE()),
('User', CURDATE(), CURDATE()),
('Guest', CURDATE(), CURDATE());

-- Insertion des permissions
INSERT INTO permissions (name, created_at, updated_at)
VALUES 
('Read', CURDATE(), CURDATE()),
('Write', CURDATE(), CURDATE()),
('Delete', CURDATE(), CURDATE());

-- Insertion des associations de rôles et permissions
INSERT INTO roles_permissions (role_ID, permission_ID)
VALUES 
(1, 1), -- Admin a la permission de lire
(1, 2), -- Admin a la permission d'écrire
(1, 3), -- Admin a la permission de supprimer
(2, 1), -- User a la permission de lire
(2, 2), -- User a la permission d'écrire
(3, 1); -- Guest a la permission de lire

-- Insertion des utilisateurs
INSERT INTO users (role_ID, first_name, email, password, created_at, updated_at)
VALUES 
(1, 'Admin', 'admin@gmail.com', 'motdepasseAdmin', CURDATE(), CURDATE()),
(2, 'Jean Bira', 'jeanbira@gmail.com', 'motdepasse1', CURDATE(), CURDATE()),
(2, 'Ella Vélo', 'ellavelo@gmail.com', 'motdepasse2', CURDATE(), CURDATE()),
(2, 'Terry Ficelle', 'terryficelle@gmail.com', 'motdepasse3', CURDATE(), CURDATE()),
(2, 'Anna Tomie', 'annatomie@gmail.com', 'motdepasse4', CURDATE(), CURDATE()),
(2, 'Justin Térieur', 'justinterieur@gmail.com', 'motdepasse5', CURDATE(), CURDATE()),
(2, 'Anita Job', 'anitajob@gmail.com', 'motdepasse6', CURDATE(), CURDATE()),
(2, 'Noah Zéro', 'noahzero@gmail.com', 'motdepasse7', CURDATE(), CURDATE()),
(2, 'Stan Dup', 'standup@gmail.com', 'motdepasse8', CURDATE(), CURDATE()),
(2, 'Helen Coptère', 'helencoptere@gmail.com', 'motdepasse9', CURDATE(), CURDATE()),
(2, 'Hugh Mide', 'hughmide@gmail.com', 'motdepasse10', CURDATE(), CURDATE()),
(2, 'Polly Gone', 'pollygone@gmail.com', 'motdepasse11', CURDATE(), CURDATE()),
(2, 'Will Chair', 'willchair@gmail.com', 'motdepasse12', CURDATE(), CURDATE()),
(2, 'Shirley Ujest', 'shirleyujest@gmail.com', 'motdepasse13', CURDATE(), CURDATE()),
(2, 'Pete Zaria', 'petezaria@gmail.com', 'motdepasse14', CURDATE(), CURDATE()),
(2, 'Barb Aque', 'barbaque@gmail.com', 'motdepasse15', CURDATE(), CURDATE()),
(2, 'Chris Tal', 'christal@gmail.com', 'motdepasse16', CURDATE(), CURDATE()),
(2, 'Anna Gramme', 'annagramme@gmail.com', 'motdepasse17', CURDATE(), CURDATE()),
(2, 'Lee Zard', 'leezard@gmail.com', 'motdepasse18', CURDATE(), CURDATE()),
(2, 'Ty Rannie', 'tyrannie@gmail.com', 'motdepasse19', CURDATE(), CURDATE()),
(2, 'Robin Desbois', 'robindesbois@gmail.com', 'motdepasse20', CURDATE(), CURDATE()),
(2, 'arnode Jyhaisse', 'arnodeJS@gmail.com', 'motdepasse21', CURDATE(), CURDATE());
