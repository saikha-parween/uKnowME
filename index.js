
var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "saima",
    score: 3,
  }
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Ranchi"
}, 

{
  question: "My favorite sport? ",
  answer: "BASKETBALL"
},
{
  question: "My current crush? ",
  answer: "ROHIT SARAF"
},
{
  question: "Coffee or Tea? ",
  answer: "COFFEE"
},
{
  question: "My favorite superhero would be? ",
  answer: "IRONMAN"
},
{
  question: "Where do I work? ",
  answer: "INFOSYS"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " DO YOU KNOW SAIKHA?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
  

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


