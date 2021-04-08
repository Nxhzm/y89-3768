var canvas;
var contestantCount, database, quiz, question, contestant; 
var gameState = 0;
function setup(){
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  question = new Question();
}


function draw(){
  background("pink");

question.Display(); 
}
