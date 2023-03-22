SELECT country.Name,
       countryLanguage.language
FROM countryJOIN countryLanguage
JOIN ON country.Code = countryLanguage.CountryCode
where language = 'English';


SELECT country.Name
FROM country
JOIN countryLanguage ON country.Code = countryLanguage.CountryCode
WHERE countryLanguage.Language = "English";

-- Give me List of Countries (in DESC order of life expectancy) which has English
-- as their official language and has life expectancy above 70 years.

SELECT COUNTRY.NAME,
       countryLanguage.language,
       COUNTRY.LifeExpectancy
FROM country
JOIN countryLanguage ON country.code = countryLanguage.countryCode
WHERE countryLanguage.IsOfficial = 'T'
  AND COUNTRY.LifeExpectancy > 70
  AND countrylanguage.Language = 'English'
ORDER BY COUNTRY.LifeExpectancy DESC;