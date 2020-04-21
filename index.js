// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 is returning a function counter2 is returning a value.
 * 2. Which of the two uses a closure? How can you tell?
 * counter1 is using closure
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be better if you need to keep a continuos count counter2 would be better for increment only once per invocation
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number
 between 0 and 2. */

function inning(){
//  console.log("in inning")
  return Math.floor(Math.random() * 3);

}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings 
and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(cb, innings){
const home =[];
const away =[];
  for(let i =0; i < innings; i++){
    home.push(cb());
    away.push(cb());
  }
 
  const homeScore = home.reduce((total, amount) => total + amount,0); 
  const awayScore = away.reduce((total, amount) => total + amount,0); 
  const scores ={
    home:0,
    away:0
  };

 scores.home = homeScore;
 scores.away = awayScore;

 return scores;
}
console.log(finalScore(inning, 9))

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(cb){
  const home = cb();
  const away = cb();
  let scores = {
    home:0,
    away:0
  }
  scores.home = home;
  scores.away = away;
  return scores;
}

console.log(getInningScore(inning));

scoreboard(getInningScore, inning, 9)
function scoreboard(cbInningScore, cbInning, numInnings) {
  const scores =[];
  const away = [];
  const home = [];

  for(let i =0; i < numInnings; i++){
   scores.push(getInningScore(inning))
   console.log(`${i+1 }st inning: ${scores[i].away} - ${scores[i].home}`)
   away.push(scores[i].away)
   home.push(scores[i].home)
  }

  const homeScore = home.reduce((total, amount) => total + amount,0); 
  const awayScore = away.reduce((total, amount) => total + amount,0); 

  console.log(`Final Score: ${awayScore} - ${homeScore}`)
  
  
}


