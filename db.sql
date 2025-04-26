--Create database Rentinel

--DROP TABLE IF EXISTS tenantNotifications;
--GO
--DROP TABLE IF EXISTS ownerNotifications;
--GO
--DROP TABLE IF EXISTS blackListedUsers;
--GO
--DROP TABLE IF EXISTS Payment;
--GO
--DROP TABLE IF EXISTS rentAssignment;
--GO
--DROP TABLE IF EXISTS propertyAssignment;
--GO
--DROP TABLE IF EXISTS Property;
--GO
--DROP TABLE IF EXISTS Tenant;
--GO
--DROP TABLE IF EXISTS Owner;
--GO
--DROP TABLE IF EXISTS Admin;
--GO

Use Rentinel
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
)
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
)
GO
SELECT * FROM Tenant

CREATE TABLE Admin
 (
ID int identity(1,1) PRIMARY KEY,
	fullName varchar(50) NOT NULL,
	userName varchar(50) NOT NULL UNIQUE,
	Password varchar(30) NOT NULL,
	email varchar(30) NOT NULL,
	CNIC varchar(13) NOT NULL,
accountCreationDate Date NOT NULL
)
GO

CREATE TABLE Property 
(
propertyName varchar(50),
propertyID int primary key IDENTITY(1,1),
Area Varchar(50) NOT NULL,
location varchar(255) NOT NULL,
fixedRent Decimal(10,2) NOT NULL,
ownerName varchar(50),
Foreign key (ownerName) references Owner(userName) ON UPDATE CASCADE ON DELETE CASCADE,
tenantName varchar(50),
Foreign key (tenantName) references Tenant(userName) ON UPDATE CASCADE ON DELETE CASCADE,
numOfBedRooms int,
numOfRooms int,
numOfBaths int
)
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
	FOREIGN KEY (tenantUserName) references Tenant(userName) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (ownerUserName) references Owner(userName) ON UPDATE CASCADE ON DELETE CASCADE
)
GO
SELECT * FROM rentAssignment
CREATE TABLE propertyAssignment 
(
	assignmentID INT  IDENTITY(1,1)  PRIMARY KEY ,
	propertyID INT NOT NULL,
	ownerID int NOT NULL,
	tenantID INT NOT NULL,
	assignmentDate Date NOT NULL,
	FOREIGN KEY (propertyID) REFERENCES Property(propertyID),
	FOREIGN KEY (tenantID) references Tenant(ID) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (ownerID) references Owner(ID) ON UPDATE CASCADE ON DELETE CASCADE
)
GO

CREATE TABLE rentAssignment
(
	assignmentID INT  IDENTITY(1,1)  PRIMARY KEY,
	propertyID INT NOT NULL,
	tenantID int NOT NULL,
	startDate DATE NOT NULL,
	dueDate DATE NOT NULL,
	FOREIGN KEY (tenantID) REFERENCES Tenant(ID) ON UPDATE NO ACTION ON DELETE NO ACTION,
	FOREIGN KEY (propertyID) REFERENCES Property(propertyID) ON UPDATE CASCADE ON DELETE CASCADE
)
GO

CREATE TABLE blackListedUsers(
	CNIC varchar(13) PRIMARY KEY
)
GO

CREATE TABLE ownerNotifications
(
	notificationID INT IDENTITY(1, 1),
	ownerID INT NOT NULL,
	subject varchar(30),
	sentDate Date NOT NULL,
propertyName varchar(50) NOT NULL,
tenantUserName varchar(30), --the notification does not implicitly come from the tenant basically it comes from the system but this field shows for which tenant
content varchar(255) NOT NULL,
FOREIGN KEY (ownerID) references Owner(ID) ON UPDATE CASCADE ON DELETE CASCADE
)
go
CREATE TABLE tenantNotifications
(
	notificationID INT IDENTITY(1, 1),
	tenantID INT NOT NULL,
	subject varchar(30),
	sentDate Date NOT NULL,
propertyName varchar(50) NOT NULL,
ownerUserName varchar(30), --the notification does not implicitly come from the owner basically it comes from the system but this field shows for which owner
content varchar(255) NOT NULL,
FOREIGN KEY (tenantID) references Tenant(ID) ON UPDATE CASCADE ON DELETE CASCADE
)

go

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

INSERT INTO Property (propertyName,Area, location, fixedRent, ownerName, tenantName, numOfBedRooms, numOfRooms, numOfBaths) VALUES
('Sunset Villa', '1 Kanal' ,'DHA Phase 6, Lahore', 65000.00, 'amirq', 'hamzam', 3, 5, 3),
('Blue Apartments','2 Kanal' , 'Gulberg 3, Lahore', 40000.00, 'sarak', 'nidaf', 2, 4, 2),
('Hill View Residency','3 Kanal' , 'F-11, Islamabad', 80000.00, 'alirz', 'usmant', 4, 6, 3),
('Ocean Breeze Flat','3 Marla' ,'Clifton Block 7, Karachi', 55000.00, 'fatiman', 'hiran', 2, 3, 2),
('Urban Nest', '1 Kanal' ,'Johar Town, Lahore', 47000.00, 'zainsh', 'kashifr', 3, 4, 2);
GO
INSERT INTO Property (propertyName,Area , location, fixedRent, ownerName, tenantName, numOfBedRooms, numOfRooms, numOfBaths) VALUES
('Sunset Villa','1 Kanal' , 'DHA Phase 6, Lahore', 65000.00, 'amirq', 'hamzam', 3, 5, 3)

INSERT INTO Payment (paymentStatus, paymentDate, amount, propertyID, tenantUserName, ownerUserName) VALUES
('Paid', '2025-02-01', 65000, 1, 'hamzam', 'amirq'),
('Paid', '2025-02-01', 40000, 2, 'nidaf', 'sarak'),
('Unpaid', '2025-02-01', 80000, 3, 'usmant', 'alirz'),
('Paid', '2025-02-01', 55000, 4, 'hiran', 'fatiman'),
('Pending', '2025-02-01', 47000, 5, 'kashifr', 'zainsh');
GO
select * from Owner
select * from Tenant
INSERT INTO propertyAssignment (propertyID, ownerID, tenantID, assignmentDate) VALUES
(1, 5, 1, '2023-12-01'),
(2, 4, 2, '2023-12-10'),
(3, 3, 3, '2024-01-01'),
(4, 2,4, '2024-01-15'),
(5, 1, 5, '2024-02-01');
GO
SELECT * FROM Property
SELECT * FROM Tenant
INSERT INTO rentAssignment (propertyID, tenantID, startDate, dueDate) VALUES
(1, 1, '2024-01-01', '2024-01-10'),
(2, 2, '2024-01-01', '2024-01-10'),
(3, 3, '2024-01-01', '2024-01-10'),
(4, 4, '2024-01-01', '2024-01-10'),
(6, 5, '2024-01-01', '2024-01-10');
GO

INSERT INTO blackListedUsers (CNIC) VALUES
('3520311122446'); -- usmant (Unpaid)
GO

INSERT INTO ownerNotifications (ownerID, subject, sentDate, propertyName, tenantUserName, content) VALUES
(1, 'Rent Received', '2024-02-02', 'Sunset Villa', 'hamzam', 'Rent for February has been received.'),
(2, 'Tenant Complaint', '2024-02-05', 'Blue Apartments', 'nidaf', 'Tenant reported water leakage.'),
(3, 'Unpaid Rent Alert', '2024-02-10', 'Hill View Residency', 'usmant', 'Tenant has missed the rent due date.');
GO
select * from rentAssignment
INSERT INTO tenantNotifications (tenantID, subject, sentDate, propertyName, ownerUserName, content) VALUES
(1, 'Rent Reminder', '2024-01-28', 'Sunset Villa', 'amirq', 'Your rent is due on Feb 1st.'),
(2, 'Maintenance Scheduled', '2024-02-04', 'Blue Apartments', 'sarak', 'Plumbing maintenance is scheduled this week.'),
(3, 'Payment Overdue', '2024-02-11', 'Hill View Residency', 'alirz', 'Your rent is overdue. Please clear it immediately.');
GO

INSERT INTO Payment (paymentStatus, paymentDate, amount, propertyID, tenantUserName, ownerUserName) VALUES
('Paid', '2024-02-01', 65000, 6, 'hamzam', 'amirq')