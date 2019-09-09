# Running Queries Against the Real Results of Summer and Winter Olympics, Since 1896
## To View
Will just show the landing page.

## The categories of data
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

## My code
The file that I did all my work in is [sql.js](https://github.com/atom-box/olympics/blob/master/sql.js) 
You can look at the [landing page](https://atom-box.github.io/olympics/index.html) but it is just a static GitPages page, not hooked up to a server right now.
My server at [Digital Ocean](http://littlefurnace.com) can run it...when I get time to set it up.

## Notes
3/19 Solution:  installed *db Browser for SQLite* Issue: need a sandbox to try the queries.
3/26/2018 Follow DETAILS.  The table is only failing because you didn't put a primary key AS YOU WERE INSTRUCTED TO DO.
4/1 now that I learned to catch errors, I can be decent.  Fix that query test :) using arrrgs2.js syntax.
4/9/2018  
Two Possible Solutions to that last step of OLYMPICS:
Zeroeth choice is to count two columns and divide some nonsense.
First choice is to do it as a nested table.  S  F  W  ( s  X AS Y f w); needs nought after parens!
Second choice is to store a view.



