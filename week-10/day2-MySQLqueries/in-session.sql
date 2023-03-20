-- Writing single-line comments with SQL
/* Writing multi-line comments with SQL */

-- CREATE a new database/schema
CREATE DATABASE users;
create database users2; -- lowercase works, but convention is to use uppercase
CREATE schema users3; -- lowercase works, but convention is to use uppercase

-- CREATE a new table
CREATE TABLE team_mate (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    hobby VARCHAR(75) NOT NULL,
    happiness INT NOT NULL,
    left_hand TINYINT NOT NULL,
    pie_pizza_noodles VARCHAR(20),
    date_started_coding DATE
); 

-- USE a database (same as double-clicking it)
USE users;

-- SELECT all columns from team_mate table
SELECT * FROM team_mate;

-- INSERT INTO: inserts new rows into an existing table
INSERT INTO team_mate (name, hobby,happiness,left_hand,pie_pizza_noodles,date_started_coding)
VALUES ('Joseph', 'watching anime', 10, 0, 'noodles', '2023-01-16'),
('Wim', 'Refereeing', 4, 0, 'noodles', '2023-01-16' ),
('Jono', 'motorbike', 4, 0, 'pizza', '2023-01-16'),
('Alan', 'Video Games' , 3, 0, 'Pizza', '2023-01-16'),
( "Elena", "rollerskate", 4, 0, "pizza", "2023-03-21" ),
('Ollie', 'training', 5, 0, 'noodles', '2023-01-01'),
('Roronoa', 'swordsmanship', 5, 1, 'noddles', '2021-11-11'),
('Kahu-Rangi', 'reading', 3, 0, 'pie', '2023-01-16'),
('tergus', 'tabletop gaming', 2, 0, 'pizza', '2008-03-12'),
('Nayiam', 'Making money', 9, 1, 'Pie', '2023-01-16'),
('Greg', 'gaming', 5, 0, 'pizza', '2023-01-16'),
('gordon', 'gym', 5, 0, 'pizza', '2022-04-01'),
('AJ', "making money", 6, 0, 'pizza', '2022-07-28'),
('Jin', 'video-editing', 4, 0, "pizza", '2023-01-17');
-- ('Reuben', 'singing', 5, 0, "pizza", '2021-05-10');

SELECT * FROM team_mate WHERE left_hand=1;

-- SELECT with WHERE, AND, OR clauses 
SELECT * FROM team_mate;
SELECT * FROM team_mate WHERE pie_pizza_noodles='noddles';
SELECT * FROM team_mate WHERE happiness < 3;
SELECT * FROM team_mate WHERE pie_pizza_noodles='noddles' OR pie_pizza_noodles='noodles';
SELECT * FROM team_mate WHERE left_hand = 1 AND (pie_pizza_noodles='noddles' OR pie_pizza_noodles='noodles');
SELECT * FROM team_mate WHERE pie_pizza_noodles IN ('noodles', 'pie');
SELECT * FROM team_mate WHERE happiness > 0 AND happiness < 5;
SELECT * FROM team_mate WHERE happiness BETWEEN 0 AND 5;

-- SELECT with DISTINCT values only 
SELECT DISTINCT hobby FROM team_mate;
SELECT * FROM team_mate;

-- Using LIMIT to limit results shown (first value is offset which is the number of rows to skip, second value is number of rows to return)
SELECT * FROM team_mate LIMIT 5, 5;

-- To perform a kind of an auto complete functionality using LIKE
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'p%';
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'pizz_';

-- ORDER BY: ORDERing the result set by a certain column
SELECT * FROM team_mate WHERE pie_pizza_noodles LIKE 'p%' ORDER BY name DESC;

-- COUNT function to count based on some condition
SELECT COUNT(*) FROM team_mate;
SELECT COUNT(*) FROM team_mate WHERE pie_pizza_noodles= 'noddles';
SELECT COUNT(DISTINCT hobby) AS "unique_hobbies" FROM team_mate;

-- AVG: Find the average happiness using AVG()
SELECT AVG(happiness) AS average_happiness FROM team_mate;

-- MIN: Find the minimum happiness using MIN()
SELECT MIN(happiness) AS lowest_happiness FROM team_mate;

-- MAX: Find the maximum happiness level using MAX()
SELECT MAX(happiness) AS highest_happiness FROM team_mate;

-- CONCAT two datasets
SELECT CONCAT(name, ",", pie_pizza_noodles) AS "name_and_pizza" FROM team_mate;

-- GROUP BY: Group the results based on one or more columns
SELECT pie_pizza_noodles, AVG(happiness) AS happiness FROM team_mate GROUP BY pie_pizza_noodles;

-- HAVING: used in combination with the GROUP BY clause to restrict the groups of returned rows to only those who's condition is TRUE
SELECT pie_pizza_noodles, AVG(happiness) AS avg_happiness FROM team_mate GROUP BY pie_pizza_noodles HAVING avg_happiness <= 5;

-- UPDATE: The UPDATE statement updates data in a table. It allows you to change the values in one or more columns of a single row or multiple rows.
UPDATE team_mate SET hobby = 'test' WHERE id = 2;

-- DELETE statement will delete rows that match the condition in the WHERE clause.
DELETE FROM team_mate WHERE id = 2;



