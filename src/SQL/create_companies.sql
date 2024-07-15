DROP TABLE IF EXISTS invoices;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS companies;
DROP TABLE IF EXISTS types;

CREATE TABLE types (
    ID_type         INT NOT NULL AUTO_INCREMENT,
    name               VARCHAR(50) NOT NULL,
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_type)
);

CREATE TABLE companies (
    ID_company         INT NOT NULL AUTO_INCREMENT,
    type_ID         INT NOT NULL,
    name                VARCHAR(50) NOT NULL,
    country           VARCHAR(50),
    tva                 VARCHAR(50),
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_company),
    FOREIGN KEY (type_ID) REFERENCES types (ID_type)
);

CREATE TABLE invoices (
    ID_invoice         INT NOT NULL AUTO_INCREMENT,
    ref               VARCHAR(50) NOT NULL,
    company_ID              INT NOT NULL,
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_invoice),
    FOREIGN KEY (company_ID) REFERENCES companies (ID_company)
);

CREATE TABLE contacts (
    ID_contact         INT NOT NULL AUTO_INCREMENT,
    name               VARCHAR(50) NOT NULL,
    email               VARCHAR(50) NOT NULL,
    phone               VARCHAR(50) NOT NULL,
    company_ID              INT NOT NULL,
    created_at            DATE,
    updated_at            DATE,

    PRIMARY KEY (ID_contact),
    FOREIGN KEY (company_ID) REFERENCES companies (ID_company)
);