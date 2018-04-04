var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./gold_medals.sqlite');

/*
Returns a SQL query string that will create the Country table with four columns: name (required), code (required), gdp, and population.


Returns the SQL command that will create a table, named `Country` with the following columns:
 - `name` a required text field.
 - `code` a required text field.
 - `gdp` an integer.
 - `population` an integer.

*/

const createCountryTable = () => {
  const query = `CREATE TABLE Country  ( 
  name TEXT NOT NULL,
  code TEXT NOT NULL,
  gdp INTEGER,
  population INTEGER);`;
  return query;
};

/*
Returns a SQL query string that will create the GoldMedal table with ten columns (all required): id, year, city, season, name, country, gender, sport, discipline, and event.
*/

const createGoldMedalTable = () => {
const query = `CREATE TABLE GoldMedal (
   id INTEGER PRIMARY KEY, 
   year INTEGER NOT NULL, 
   city  TEXT NOT NULL, 
   season TEXT NOT NULL, 
   name  TEXT NOT NULL, 
   country  TEXT  NOT NULL, 
   gender  TEXT  NOT NULL, 
   sport   TEXT  NOT NULL, 
   discipline  TEXT  NOT NULL,
   event TEXT   NOT NULL
  )`;
  return query;
};

/*
Returns a SQL query string that will find the number of gold medals for the given country.
*/


//   MONDAY MARCH 26 "THIS SHOULD BE SORT OF CLOSE...I finally looked up the syntax"
const goldMedalNumber = country => {
  let query = `
    SELECT COUNT(*) AS "count"  
    FROM GoldMedal WHERE country = "${country}";
  `;
    return query;
};

/*/////////////////

  if (['Summer', 'Winter'].includes(season)) {
    return `SELECT year, COUNT(*) AS count FROM GoldMedal WHERE country = "${country}" AND season = '${season}' GROUP BY year ORDER BY COUNT(*) DESC LIMIT 1;`;
/////////////////*/
/*
Returns a SQL query string that will find the year where the given country 
won the most summer medals, along with the number of medals aliased to 'count'.
*/

const mostSummerWins = country => {
  let query = ` select  year, count(*) as count
from GoldMedal 
where country LIKE "${country}" AND season LIKE "s%" 
group by year ORDER BY count desc limit 1;`
  return query;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most winter medals, along with the number of medals aliased to 'count'.
*/

const mostWinterWins = country => {
    let query = ` select  year, count(*) as count
from GoldMedal 
where country LIKE "${country}" AND season LIKE "w%" 
group by year ORDER BY count desc limit 1;`
  return query;
};

/*
Returns a SQL query string that will find the year where the given country 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestYear = country => {
  const query = `SELECT year, count(*) as count FROM GoldMedal 
WHERE country = "${country}" GROUP BY year ORDER BY count desc LIMIT 1;
;`;
  return query;
};

/*
Returns a SQL query string that will find the discipline this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestDiscipline = country => {
  const query = `SELECT discipline, count(*) AS count FROM GoldMedal 
WHERE country = "${country}"
GROUP BY discipline 
ORDER BY count desc limit 1;`;
  return query;
};

/*
Returns a SQL query string that will find the sport this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestSport = country => {
  const query = `SELECT sport, count(*) as count FROM GoldMedal WHERE country = "${country}" GROUP BY sport ORDER BY count DESC LIMIT 1;`
  return query;
};

/*
Returns a SQL query string that will find the event this country has 
won the most medals, along with the number of medals aliased to 'count'.
*/

const bestEvent = country => {
  const query = `SELECT event, count(*) as count FROM GoldMedal WHERE country = "${country}" GROUP BY event ORDER BY count DESC LIMIT 1;`;
  return query;
};

/*
Returns a SQL query string that will find the number of male medalists.
*/

const numberMenMedalists = country => {
  const query = `select count(name) from
(
SELECT name, count(*) AS count 
  FROM GoldMedal 
  WHERE country = "${country}" and gender LIKE "m%"
  GROUP BY name order by name asc
 ) ;`;
  return query;
};

/*
Returns a SQL query string that will find the number of female medalists.
*/

const numberWomenMedalists = country => {
  const query = `SELECT count(name) FROM(
    SELECT name FROM GoldMedal WHERE country = "${country}" AND gender LIKE "w%"  GROUP BY name 
  );`; 

  return query;
};

/*
Returns a SQL query string that will find the athlete with the most medals.
*/

const mostMedaledAthlete = country => {
  const query = `
    SELECT name, count(*) as count FROM GoldMedal 
  WHERE country = "${country}" GROUP BY name 
  ORDER BY count DESC LIMIT 1;`;
  return query;
};

/*
Returns a SQL query string that will find the medals a country has won
optionally ordered by the given field in the specified direction.
*/

/*
// 1 select * from GoldMedal WHERE country = "Canada";
// 2 select * from GoldMedal WHERE country = "Canada" 
ORDER BY city asc;
*/

const orderedMedals = (country, field, sortAscending) => {

  if (typeof country == 'undefined'){
    // no args given

    console.log("Problem in line 189!");
    return;    
  } else if (typeof field == 'undefined'){
    // just a country entered
    // therefore query for just country

    const query = `select * from GoldMedal WHERE country = 
    "${country}";`;  //fix
    return query;
  } else {
    // country & field entered
    // therefore query for each

    if(typeof sortAscending == 'undefined'){
      sortAscending = false;
      // edge case 2 args given but not a 3rd
    }
    let sortStyle = "";
    if (sortAscending){sortStyle = "ASC"} else {sortStyle = "DESC"}      
      // sets the word for sort-direction

    const query = `select * from GoldMedal WHERE country = "${country}" ORDER BY ${field} SORT ${sortStyle};`;  //fix 
    // query sets country, field, AND direction
    return query;
  }
};
/*  THIS IS YOUR MAN !!
  field2 = 'asc';
    const query = `select * from GoldMedal WHERE country = "Canada" 
      ORDER BY ${field1} ${field2};`;
    console.log( `select * from GoldMedal WHERE country = "Canada" 
      ORDER BY ${field1} ${field2};`);
    return query
  }

  };
*/

/*
Returns a SQL query string that will find the sports a country has
won medals in. It should include the number of medals, aliased as 'count',
as well as the percentage of this country's wins the sport represents,
aliased as 'percent'. Optionally ordered by the given field in the specified direction.
*/

const orderedSports = (country, field, sortAscending) => {
  return;
};

module.exports = {
  createCountryTable,
  createGoldMedalTable,
  goldMedalNumber,
  mostSummerWins,
  mostWinterWins,
  bestDiscipline,
  bestSport,
  bestYear,
  bestEvent,
  numberMenMedalists,
  numberWomenMedalists,
  mostMedaledAthlete,
  orderedMedals,
  orderedSports
};
