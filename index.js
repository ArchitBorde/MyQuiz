var readlineSync = require("readline-sync");

var score =0;

var highScores = [
  {
    name: "Archit",
    score:7
  },
  {
    name:"Mom",
    score:6
  }
]

function quiz(question,answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("You are right!");
    score = score + 1;
  } else{
    console.log("You are wrong!")
  }

}

var questions = [{
  question:"Where do I stay?",
  answer:"Pune"
},
{
  question:"Where do I work?(Don't go to linkedIn!)",
  answer:"EarlySalary"
},
{
  question:"What is the name of my meme page?",
  answer:"anonymemesly"
},
{
  question:"Which is my favourite food?",
  answer:"Biryani"
},
{
  question:"Which bike do I have?",
  answer:"Bullet"
},
{
  question:"Which sneakers do i like?",
  answer:"Nike"
},
{
  question:"Is my beard dense or patchy ?",
  answer:"dense"
}
]

for(var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}

if(score===highScores[0].score){
  console.log("You've beaten the highest score!")
} else{
  var diff = highScores[0].score-score;
  console.log("You just missed the high score by "+diff+ " points! Better luck next time!")
}

 console.log("Your score is : "+score);
 console.log("The highest score is " +highScores[0].score);
