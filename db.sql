--CREATE DATABASE Rentinel
--go
Use Rentinel
go

--DROP TABLE tenantNotifications;
--DROP TABLE ownerNotifications;
--DROP TABLE blackListedUsers;
--DROP TABLE rentAssignment;
--DROP TABLE propertyAssignment;
--DROP TABLE Payment;
--DROP TABLE Property;
--DROP TABLE Admin;
--DROP TABLE Tenant;
--DROP TABLE Owner;

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
go
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
go
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
go

CREATE TABLE Property 
(
propertyName varchar(50),
propertyID int primary key IDENTITY(1,1),
Area varchar(50) NOT NULL,
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
go
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
go
CREATE TABLE propertyAssignment 
(
	assignmentID INT  IDENTITY(1,1)  PRIMARY KEY ,
	propertyID INT NOT NULL,
	ownerID INT NOT NULL,
tenantID INT NOT NULL,
assignmentDate Date NOT NULL,
FOREIGN KEY (propertyID) REFERENCES Property(propertyID),
FOREIGN KEY (tenantID) references Tenant(ID) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (ownerID) references Owner(ID) ON UPDATE CASCADE ON DELETE CASCADE
)
go
CREATE TABLE rentAssignment
(
assignmentID INT  IDENTITY(1,1)  PRIMARY KEY,
	propertyID INT NOT NULL,
	tenantID INT NOT NULL,
	startDate DATE NOT NULL,
	dueDate DATE NOT NULL,
	FOREIGN KEY (tenantID ) REFERENCES Tenant(ID) ON UPDATE NO ACTION ON DELETE NO ACTION,
FOREIGN KEY (propertyID) REFERENCES Property(propertyID) ON UPDATE NO ACTION ON DELETE NO ACTION,	

)

go
CREATE TABLE blackListedUsers(
	CNIC varchar(13) PRIMARY KEY
)
go
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

--inserts
INSERT INTO Owner (fullName, userName, Password, email, CNIC, accountCreationDate) VALUES
('Adam Grey', 'adamgrey', 'pass123', 'adam@rentinel.com', '1234567890123', '2025-01-15'),
('Brian White', 'brianwhite', 'pass123', 'brian@rentinel.com', '1234567890124', '2025-01-22'),
('Chris Black', 'chrisblack', 'pass123', 'chris@rentinel.com', '1234567890125', '2025-03-03'),
('David Blue', 'davidblue', 'pass123', 'david@rentinel.com', '1234567890126', '2025-03-17'),
('Evan Red', 'evanred', 'pass123', 'evan@rentinel.com', '1234567890127', '2025-03-25'),
('Frank Green', 'frankgreen', 'pass123', 'frank@rentinel.com', '1234567890128', '2025-04-05'),
('George Yellow', 'georgeyellow', 'pass123', 'george@rentinel.com', '1234567890129', '2025-04-11'),
('Henry Violet', 'henryviolet', 'pass123', 'henry@rentinel.com', '1234567890130', '2025-04-20'),
('Ian Orange', 'ianorange', 'pass123', 'ian@rentinel.com', '1234567890131', '2025-04-27'),
('Jack Brown', 'jackbrown', 'pass123', 'jack@rentinel.com', '1234567890132', '2025-06-01'),
('Kevin Grey', 'kevingrey', 'pass123', 'kevin@rentinel.com', '1234567890133', '2025-07-02'),
('Liam Stone', 'liamstone', 'pass123', 'liam@rentinel.com', '1234567890134', '2025-07-06'),
('Mike Sky', 'mikesky', 'pass123', 'mike@rentinel.com', '1234567890135', '2025-07-09'),
('Nathan Snow', 'nathansnow', 'pass123', 'nathan@rentinel.com', '1234567890136', '2025-07-12');


INSERT INTO Tenant (fullName, userName, Password, email, CNIC, accountCreationDate) VALUES
('Olivia Smith', 'oliviasmith', 'pass123', 'olivia@rentinel.com', '2234567890123', '2025-01-10'),
('Peter Johnson', 'peterjohnson', 'pass123', 'peter@rentinel.com', '2234567890124', '2025-01-20'),
('Quinn Davis', 'quinndavis', 'pass123', 'quinn@rentinel.com', '2234567890125', '2025-03-07'),
('Rachel Brown', 'rachelbrown', 'pass123', 'rachel@rentinel.com', '2234567890126', '2025-03-19'),
('Steve Wilson', 'stevewilson', 'pass123', 'steve@rentinel.com', '2234567890127', '2025-03-28'),
('Tina Moore', 'tinamoore', 'pass123', 'tina@rentinel.com', '2234567890128', '2025-04-03'),
('Uma Taylor', 'umataylor', 'pass123', 'uma@rentinel.com', '2234567890129', '2025-04-15'),
('Victor Anderson', 'victoranderson', 'pass123', 'victor@rentinel.com', '2234567890130', '2025-04-23'),
('Wendy Thomas', 'wendythomas', 'pass123', 'wendy@rentinel.com', '2234567890131', '2025-04-29'),
('Xavier Lee', 'xavierlee', 'pass123', 'xavier@rentinel.com', '2234567890132', '2025-06-05'),
('Yvonne Harris', 'yvonneharris', 'pass123', 'yvonne@rentinel.com', '2234567890133', '2025-07-01'),
('Zach Young', 'zachyoung', 'pass123', 'zach@rentinel.com', '2234567890134', '2025-07-04'),
('Abby King', 'abbyking', 'pass123', 'abby@rentinel.com', '2234567890135', '2025-07-07'),
('Ben Scott', 'benscott', 'pass123', 'ben@rentinel.com', '2234567890136', '2025-07-10');


INSERT INTO Admin (fullName, userName, Password, email, CNIC, accountCreationDate) VALUES
('Admin One', 'adminone', 'adminpass', 'admin1@rentinel.com', '3234567890123', '2025-01-01');

INSERT INTO Property (propertyName, Area, location, fixedRent, ownerName, tenantName, numOfBedRooms, numOfRooms, numOfBaths) VALUES
('Sunrise Villa', '1 Kanal', 'Downtown City', 1200.00, 'adamgrey', 'oliviasmith', 3, 5, 2),
('Maple House', '2 Kanal', 'Lakeview Area', 950.00, 'brianwhite', 'peterjohnson', 2, 4, 2),
('Hilltop Mansion', '3000 sqft', 'Green Hills', 2000.00, 'chrisblack', 'quinndavis', 5, 8, 4),
('City Apartment', '4 Marla', 'Metro Heights', 800.00, 'davidblue', 'rachelbrown', 2, 3, 2),
('Riverfront Condo', '2 Kanal', 'River Side', 1100.00, 'evanred', 'stevewilson', 2, 4, 2),
('Ocean Breeze', '1 Kanal', 'Beach Area', 1500.00, 'frankgreen', 'tinamoore', 3, 5, 3);

INSERT INTO Payment (paymentStatus, paymentDate, amount, propertyID, tenantUserName, ownerUserName) VALUES
('Paid', '2025-04-05', 1200, 1, 'oliviasmith', 'adamgrey'),
('Pending', '2025-04-10', 950, 2, 'peterjohnson', 'brianwhite'),
('Paid', '2025-04-15', 2000, 3, 'quinndavis', 'chrisblack'),
('Paid', '2025-04-20', 800, 4, 'rachelbrown', 'davidblue'),
('Pending', '2025-04-25', 1100, 5, 'stevewilson', 'evanred');


INSERT INTO propertyAssignment (propertyID, ownerID, tenantID, assignmentDate) VALUES
(1, 1, 1, '2025-04-02'),
(2, 2, 2, '2025-04-05'),
(3, 3, 3, '2025-04-10'),
(4, 4, 4, '2025-04-12'),
(5, 5, 5, '2025-04-17');


INSERT INTO rentAssignment (propertyID, tenantID, startDate, dueDate) VALUES
(1, 1, '2025-04-01', '2025-04-30'),
(2, 2, '2025-04-01', '2025-04-30'),
(3, 3, '2025-04-01', '2025-04-30'),
(4, 4, '2025-04-01', '2025-04-30'),
(5, 5, '2025-04-01', '2025-04-30');

INSERT INTO blackListedUsers (CNIC) VALUES
('2234567890137'),
('2234567890138');


INSERT INTO ownerNotifications (ownerID, subject, sentDate, propertyName, tenantUserName, content) VALUES
(1, 'Payment Received', '2025-04-06', 'Sunrise Villa', 'oliviasmith', 'Payment for April received.'),
(2, 'Pending Payment', '2025-04-11', 'Maple House', 'peterjohnson', 'Payment overdue for April.');

INSERT INTO tenantNotifications (tenantID, subject, sentDate, propertyName, ownerUserName, content) VALUES
(1, 'Payment Confirmation', '2025-04-06', 'Sunrise Villa', 'adamgrey', 'Your payment has been recorded.'),
(2, 'Payment Reminder', '2025-04-11', 'Maple House', 'brianwhite', 'Please clear your pending dues.');
