--For creating the login
--USE master;
--GO
--CREATE LOGIN RentinelUser WITH PASSWORD = 'StrongP@ss123';
--GO
--USE Rentinel;
--GO
--CREATE USER RentinelUser FOR LOGIN RentinelUser;
--GO
--EXEC sp_addrolemember 'db_owner', 'RentinelUser';
--GO

USE Rentinel;
GO

CREATE TABLE Owner
(
	ID int identity(1,1) PRIMARY KEY,
	fullName varchar(50) NOT NULL,
	userName varchar(50) NOT NULL UNIQUE,
	Password varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	CNIC varchar(13) NOT NULL,
	accountCreationDate Date NOT NULL
);
GO

CREATE TABLE Tenant
(
	ID int identity(1,1) PRIMARY KEY,
	fullName varchar(50) NOT NULL,
	userName varchar(50) NOT NULL UNIQUE,
	Password varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	CNIC varchar(13) NOT NULL,
	accountCreationDate Date NOT NULL
);
GO

CREATE TABLE Property 
(
	propertyName varchar(50),
	propertyID int primary key IDENTITY(1,1),
	location varchar(255) NOT NULL,
	fixedRent Decimal(10,2) NOT NULL,
	ownerName varchar(50),
	Foreign key (ownerName) references Owner(userName),
	tenantName varchar(50),
	Foreign key (tenantName) references Tenant(userName),
	numOfBedRooms int,
	numOfRooms int,
	numOfBaths int
);
GO

CREATE TABLE Admin
(
	ID int identity(1,1) PRIMARY KEY,
	fullName varchar(50) NOT NULL,
	userName varchar(50) NOT NULL UNIQUE,
	Password varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	CNIC varchar(13) NOT NULL,
	accountCreationDate Date NOT NULL
);
GO


CREATE TABLE Payment
(
	paymentID INT IDENTITY(1,1) PRIMARY KEY,
	paymentStatus varchar(20),
	paymentDate DATE,
	amount INT NOT NULL,
	propertyID INT NOT NULL,
	tenantUserName varchar(50),
	ownerUserName varchar(50),
	FOREIGN KEY (propertyID) references Property(propertyID),
	FOREIGN KEY (tenantUserName) references Tenant(userName),
	FOREIGN KEY (ownerUserName) references Owner(userName)
);
GO

CREATE TABLE propertyAssignment 
(
	assignmentID INT  IDENTITY(1,1)  PRIMARY KEY,
	propertyID INT NOT NULL,
	ownerName varchar(50) NOT NULL,
	tenantName varchar(50) NOT NULL,
	assignmentDate Date NOT NULL,
	FOREIGN KEY (propertyID) REFERENCES Property(propertyID),
	FOREIGN KEY (tenantName) references Tenant(userName),
	FOREIGN KEY (ownerName) references Owner(userName)
);
GO

CREATE TABLE rentAssignment
(
	assignmentID INT  IDENTITY(1,1)  PRIMARY KEY,
	propertyID INT NOT NULL,
	tenantName varchar(50) NOT NULL,
	ownerName varchar(50) NOT NULL,
	startDate DATE NOT NULL,
	dueDate DATE NOT NULL,
	FOREIGN KEY (tenantName) REFERENCES Tenant(userName),
	FOREIGN KEY (propertyID) REFERENCES Property(propertyID),	
	FOREIGN KEY (ownerName) references Owner(userName)
);
GO

CREATE TABLE blackListedUsers(
	CNIC varchar(13) PRIMARY KEY
);
GO

CREATE TABLE ownerNotifications
(
	notificationID INT IDENTITY(1, 1) PRIMARY KEY,
	ownerID INT NOT NULL,
	subject varchar(30),
	sentDate Date NOT NULL,
	propertyName varchar(50) NOT NULL,
	tenantUserName varchar(30),
	content varchar(255) NOT NULL
);
GO

CREATE TABLE tenantNotifications
(
	notificationID INT IDENTITY(1, 1) PRIMARY KEY,
	tenantID INT NOT NULL,
	subject varchar(30),
	sentDate Date NOT NULL,
	propertyName varchar(50) NOT NULL,
	ownerUserName varchar(30),
	content varchar(255) NOT NULL
);
GO

-- DUMMY INSERTIONS
INSERT INTO Owner (fullName, userName, Password, email, CNIC, accountCreationDate) VALUES
('Amir Qureshi', 'amirq', 'securePass1', 'amirq@mail.com', '3520211122334', '2023-03-01'),
('Sara Khan', 'sarak', 'strongPass2', 'sarak@mail.com', '3520211122335', '2023-04-15'),
('Ali Raza', 'alirz', 'alphaPass3', 'alirz@mail.com', '3520211122336', '2023-05-10'),
('Fatima Noor', 'fatiman', 'deltaPass4', 'fatiman@mail.com', '3520211122337', '2023-06-12'),
('Zain Shah', 'zainsh', 'omegaPass5', 'zainsh@mail.com', '3520211122338', '2023-07-01');
GO

INSERT INTO Tenant (fullName, userName, Password, email, CNIC, accountCreationDate) VALUES
('Hamza Malik', 'hamzam', 'tenantPass1', 'hamzam@mail.com', '3520311122444', '2023-03-03'),
('Nida Faisal', 'nidaf', 'tenantPass2', 'nidaf@mail.com', '3520311122445', '2023-04-18'),
('Usman Tariq', 'usmant', 'tenantPass3', 'usmant@mail.com', '3520311122446', '2023-05-22'),
('Hira Naveed', 'hiran', 'tenantPass4', 'hiran@mail.com', '3520311122447', '2023-06-05'),
('Kashif Rana', 'kashifr', 'tenantPass5', 'kashifr@mail.com', '3520311122448', '2023-07-09');
GO

INSERT INTO Admin(fullName, userName, Password, email, CNIC, accountCreationDate)
VALUES('Im Admin', 'imadmin', 'maAdminHoo', 'admin@gmail.com', '1234567890123', GETDATE());
GO

INSERT INTO Property (propertyName, location, fixedRent, ownerName, tenantName, numOfBedRooms, numOfRooms, numOfBaths) VALUES
('Sunset Villa', 'DHA Phase 6, Lahore', 65000.00, 'amirq', 'hamzam', 3, 5, 3),
('Blue Apartments', 'Gulberg 3, Lahore', 40000.00, 'sarak', 'nidaf', 2, 4, 2),
('Hill View Residency', 'F-11, Islamabad', 80000.00, 'alirz', 'usmant', 4, 6, 3),
('Ocean Breeze Flat', 'Clifton Block 7, Karachi', 55000.00, 'fatiman', 'hiran', 2, 3, 2),
('Urban Nest', 'Johar Town, Lahore', 47000.00, 'zainsh', 'kashifr', 3, 4, 2);
GO
INSERT INTO Property (propertyName, location, fixedRent, ownerName, tenantName, numOfBedRooms, numOfRooms, numOfBaths) VALUES
('Sunset Villa', 'DHA Phase 6, Lahore', 65000.00, 'amirq', 'hamzam', 3, 5, 3)

INSERT INTO Payment (paymentStatus, paymentDate, amount, propertyID, tenantUserName, ownerUserName) VALUES
('Paid', '2024-02-01', 65000, 1, 'hamzam', 'amirq'),
('Paid', '2024-02-01', 40000, 2, 'nidaf', 'sarak'),
('Unpaid', '2024-02-01', 80000, 3, 'usmant', 'alirz'),
('Paid', '2024-02-01', 55000, 4, 'hiran', 'fatiman'),
('Pending', '2024-02-01', 47000, 5, 'kashifr', 'zainsh');
GO

INSERT INTO propertyAssignment (propertyID, ownerName, tenantName, assignmentDate) VALUES
(1, 'amirq', 'hamzam', '2023-12-01'),
(2, 'sarak', 'nidaf', '2023-12-10'),
(3, 'alirz', 'usmant', '2024-01-01'),
(4, 'fatiman', 'hiran', '2024-01-15'),
(5, 'zainsh', 'kashifr', '2024-02-01');
GO

INSERT INTO rentAssignment (propertyID, tenantName, ownerName, startDate, dueDate) VALUES
(1, 'hamzam', 'amirq', '2024-01-01', '2024-01-10'),
(2, 'nidaf', 'sarak', '2024-01-01', '2024-01-10'),
(3, 'usmant', 'alirz', '2024-01-01', '2024-01-10'),
(4, 'hiran', 'fatiman', '2024-01-01', '2024-01-10'),
(5, 'kashifr', 'zainsh', '2024-01-01', '2024-01-10');
GO

INSERT INTO blackListedUsers (CNIC) VALUES
('3520311122446'); -- usmant (Unpaid)
GO

INSERT INTO ownerNotifications (ownerID, subject, sentDate, propertyName, tenantUserName, content) VALUES
(1, 'Rent Received', '2024-02-02', 'Sunset Villa', 'hamzam', 'Rent for February has been received.'),
(2, 'Tenant Complaint', '2024-02-05', 'Blue Apartments', 'nidaf', 'Tenant reported water leakage.'),
(3, 'Unpaid Rent Alert', '2024-02-10', 'Hill View Residency', 'usmant', 'Tenant has missed the rent due date.');
GO

INSERT INTO tenantNotifications (tenantID, subject, sentDate, propertyName, ownerUserName, content) VALUES
(1, 'Rent Reminder', '2024-01-28', 'Sunset Villa', 'amirq', 'Your rent is due on Feb 1st.'),
(2, 'Maintenance Scheduled', '2024-02-04', 'Blue Apartments', 'sarak', 'Plumbing maintenance is scheduled this week.'),
(3, 'Payment Overdue', '2024-02-11', 'Hill View Residency', 'alirz', 'Your rent is overdue. Please clear it immediately.');
GO

INSERT INTO Payment (paymentStatus, paymentDate, amount, propertyID, tenantUserName, ownerUserName) VALUES
('Paid', '2024-02-01', 65000, 6, 'hamzam', 'amirq')