const rock=document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const choices = document.querySelector("#choices");
const score = document.querySelector("#score");
const resetBtn = document.querySelector("#reset");
rock.addEventListener('click',function(){
    play('rock');
});
paper.addEventListener("click", function () {
  play("paper");
});
scissors.addEventListener("click", function () {
  play("scissors");
});
let userScore=0;
let computerScore=0;
function play(userChoice){
    console.log('user choose: ',userChoice);
    const options=['rock','paper','scissors'];
    const randomIndex=Math.floor(Math.random()*3);
    const computerChoice=options[randomIndex];
    if (userChoice === computerChoice) {
      result.innerText = "It's a Draw!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result.innerText = "You Win!";
      userScore++;
    } else {
      result.innerText = "You Lose!";
      computerScore++;
    }
    console.log('computer choose:',computerChoice);
    choices.innerText = `You: ${userChoice} | Computer: ${computerChoice}`;
    score.innerText = `You: ${userScore} | Computer: ${computerScore}`;
}
resetBtn.addEventListener("click", function () {
  userScore = 0;
  computerScore = 0;

  score.innerText = "You: 0 | Computer: 0";
  result.innerText = "Game Reset!";
  choices.innerText = "";
});