-- Select data from one particular column
SELECT Name FROM world.country;

-- Selecting all columns (by using *) from the 'City' table In the'World'database  
SELECT * FROM city;

-- Select all columns in the table
SELECT * FROM world.country;

-- Using a where clause
SELECT * FROM world.country 
WHERE LifeExpectancy > 80;

-- Ordering the rows returned
SELECT * FROM world.country 
WHERE LifeExpectancy > 80
ORDER BY LifeExpectancy;

-- Using the DISTINCT modifier
SELECT DISTINCT CONTINENT
FROM world.country;

-- Using the LIKE operator
SELECT * FROM world.country
WHERE name LIKE 'New%';

-- Grouping the results by a particular Column
SELECT Continent, SUM(Population)
FROM world.country
GROUP BY Continent

-- Using Having clause to filter groups
SELECT Continent, SUM(Population)
FROM world.country
GROUP BY Continent
HAVING SUM(population) > 700000000;