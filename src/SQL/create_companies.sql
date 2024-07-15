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

INSERT INTO types (name, created_at, updated_at) VALUES
('IT Services', '2023-01-01', '2023-01-01'),
('Consulting', '2023-01-01', '2023-01-01'),
('Retail', '2023-01-01', '2023-01-01'),
('Manufacturing', '2023-01-01', '2023-01-01'),
('Healthcare', '2023-01-01', '2023-01-01'),
('Finance', '2023-01-01', '2023-01-01'),
('Education', '2023-01-01', '2023-01-01'),
('Entertainment', '2023-01-01', '2023-01-01'),
('Transport', '2023-01-01', '2023-01-01'),
('Energy', '2023-01-01', '2023-01-01');

INSERT INTO companies (type_ID, name, country, tva, created_at, updated_at) VALUES
(1, 'Techie Toys Ltd.', 'France', 'FR123456789', '2023-01-01', '2023-01-01'),
(2, 'Consulting Wizards Inc.', 'USA', 'US987654321', '2023-01-01', '2023-01-01'),
(3, 'Happy Shopper LLC', 'UK', 'UK111213141', '2023-01-01', '2023-01-01'),
(4, 'Mighty Manufacturers Co.', 'Germany', 'DE202122232', '2023-01-01', '2023-01-01'),
(5, 'Healthy Living Clinic', 'Canada', 'CA232425262', '2023-01-01', '2023-01-01'),
(6, 'Finance Gurus Ltd.', 'Switzerland', 'CH272829303', '2023-01-01', '2023-01-01'),
(7, 'Smart Schools Ltd.', 'Australia', 'AU313233343', '2023-01-01', '2023-01-01'),
(8, 'Fun Times Entertainment', 'Spain', 'ES353637383', '2023-01-01', '2023-01-01'),
(9, 'Speedy Transport Ltd.', 'Italy', 'IT394041424', '2023-01-01', '2023-01-01'),
(10, 'Green Energy Solutions', 'Denmark', 'DK434445464', '2023-01-01', '2023-01-01');

INSERT INTO invoices (ref, company_ID, created_at, updated_at) VALUES
('INV-001', 1, '2023-02-01', '2023-02-01'),
('INV-002', 2, '2023-02-05', '2023-02-05'),
('INV-003', 3, '2023-02-10', '2023-02-10'),
('INV-004', 4, '2023-02-15', '2023-02-15'),
('INV-005', 5, '2023-02-20', '2023-02-20'),
('INV-006', 6, '2023-02-25', '2023-02-25'),
('INV-007', 7, '2023-03-01', '2023-03-01'),
('INV-008', 8, '2023-03-05', '2023-03-05'),
('INV-009', 9, '2023-03-10', '2023-03-10'),
('INV-010', 10, '2023-03-15', '2023-03-15');

INSERT INTO contacts (name, email, phone, company_ID, created_at, updated_at) VALUES
('John Doe', 'john.doe@techietoys.fr', '0102030405', 1, '2023-01-01', '2023-01-01'),
('Jane Smith', 'jane.smith@consultingwizards.com', '0203040506', 2, '2023-01-01', '2023-01-01'),
('Billy Bob', 'billy.bob@happyshopper.co.uk', '0304050607', 3, '2023-01-01', '2023-01-01'),
('Hans Muller', 'hans.muller@mightymanufacturers.de', '0405060708', 4, '2023-01-01', '2023-01-01'),
('Samantha Brown', 'samantha.brown@healthyliving.ca', '0506070809', 5, '2023-01-01', '2023-01-01'),
('Chris White', 'chris.white@financegurus.ch', '0607080910', 6, '2023-01-01', '2023-01-01'),
('Lisa Green', 'lisa.green@smartschools.au', '0708091011', 7, '2023-01-01', '2023-01-01'),
('Carlos Gomez', 'carlos.gomez@funtimes.es', '0809101112', 8, '2023-01-01', '2023-01-01'),
('Marco Rossi', 'marco.rossi@speedytransport.it', '0910111213', 9, '2023-01-01', '2023-01-01'),
('Ingrid Nielsen', 'ingrid.nielsen@greenenergy.dk', '1011121314', 10, '2023-01-01', '2023-01-01');
