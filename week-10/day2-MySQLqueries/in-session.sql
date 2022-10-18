-- Writing comments with SQL
-- CREATE DATABASE users;
-- create database users2; 
-- CREATE schema users3;

CREATE TABLE team_mate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    hobby VARCHAR(75) NOT NULL,
    happiness INT NOT NULL,
    left_hand TINYINT NOT NULL,
    pie_pizza_noodles VARCHAR(20),
    date_started_coding DATE
); 

USE users;
-- VALUES ('Reuben', 'singing', 5, 0, 'pizza','2021-5-10');

INSERT INTO team_mate (name, hobby,happiness,left_hand,pie_pizza_noodles,date_started_coding)
VALUES ('Lenuasi', 'Blazing', 5, 1, 'pizza', '1998-10-8'),
('Conor', 'Motorbikes', 5, 0, 'pie', '2022-8-15'),
('Darren', 'Gym', 5, 1, 'pie', '2022-05-01'),
('Taniera', 'Gaming', 4, 1, 'All of Above', '2022-8-15'),
("Jordan", "gaming", 5, 0, "pizza", "2022-08-15"),
('Nick', 'gardening', 2.5, 0,'pizza','2022-02-01'),
('Leisa', 'Rugby', 5, 0, 'pie', '2022-08-15'),
('Bonnie', 'crafting', 4, 0, 'pizza', '2022-08-15'),
('Jervin','Basketball',5,0,'pizza','2022-08-15'),
('Lennard', 'rapping', 5, 0, 'pizza','2022-06-27'),
('Andrew', 'Holding Everyone Up', 2, 0, 'pie', '2022-01-04'),
('Viliami', 'boxing', 1, 0, 'pie', '2001-08-23'),
('William', 'sleeping', 5, 0,'noddles', '2021-5-10');
  
--  ALTER TABLE team_mate
--  ADD left_hand TINYINT NOT NULL;

SELECT * FROM team_mate WHERE left_hand=1;

-- Select with WHERE, AND, OR clauses 
SELECT * FROM team_mate WHERE happiness = 5 AND (pie_pizza_noodles = 'pizza' OR pie_pizza_noodles='pie');
SELECT * FROM team_mate WHERE happiness > 0 AND happiness < 5;
SELECT * FROM team_mate WHERE happiness BETWEEN 0 AND 5;
-- SELECT with DISTINCT values only 
SELECT DISTINCT hobby FROM team_mate;
SELECT * FROM team_mate;

-- Using LIMIT to limit results shown
SELECT * FROM team_mate LIMIT 5, 5;

-- To perform a kind of an auto complete functionality using LIKE
SELECT * FROM team_mate WHERE hobby LIKE 'ga%'; 

-- ORDERing the result set by a certain column
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'p%' ORDER BY name desc;

-- COUNT function to count based on some condition
SELECT COUNT(*) FROM team_mate;
SELECT COUNT(*) FROM team_mate WHERE pie_pizza_noodles= 'noddles';
SELECT COUNT(DISTINCT hobby) AS "unique_hobbies" FROM team_mate;

SELECT AVG(happiness) AS average_happiness FROM team_mate;

-- Find the minimum happiness using MIN()
SELECT MIN(happiness) AS average_happiness FROM team_mate;

-- Find the maximum happiness level
SELECT MAX(happiness) AS average_happiness FROM team_mate;

-- CONCAT two datasets
SELECT CONCAT(name, ",", pie_pizza_noodles) AS "name_and_pizza" FROM team_mate;

