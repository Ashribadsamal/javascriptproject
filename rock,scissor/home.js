let userScores = 0;
let  compScore = 0;
const scoreBord_div = document.querySelector(".score-board");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result_div = document.querySelector(".result > P");
const paper_div = document.getElementById("paper");
const rock_div = document.getElementById("rock");
const scissor_div = document.getElementById("scissor");

function win(user , computer){
    const user_div = document.getElementById(user)
    userScores++;
    userScore_span.innerHTML = userScores;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `${user}  beats ${computer}  .you WIN`;
    user_div.classList.add('win-glow');
   setTimeout(function(){ user_div.classList.remove('win-glow')},1000)
}

function loose(user , computer){
    const user_div = document.getElementById(user)
    compScore++;
    userScore_span.innerHTML = userScores;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `${user}  loses to  ${computer}  .you LOST`;
    user_div.classList.add('lost-glow');
   setTimeout(function(){ user_div.classList.remove('lost-glow')},1000)
}

function draw (user , computer){
    const user_div = document.getElementById(user)
    result_div.innerHTML = `${user}  equals ${computer}  .Its DRAW`;
    user_div.classList.add('draw-glow');
   setTimeout(function(){ user_div.classList.remove('draw-glow')},1000)
}
function getComputerChoice(){
    const choices = ["paper","rock","scissor"]
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game (userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":       
            win (userChoice , computerChoice);
            break;
        case "rockpaper":
        case "paperScissor":
        case "scissorrock":
            loose (userChoice , computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw (userChoice , computerChoice);                        
    }
}

function main (){
    paper_div.addEventListener('click', ()=>game ("paper")
    )

    //not using arrow function here  for future propose but i can do it

   //can take any name instead of rock paper scissor
   
    rock_div.addEventListener('click',function (){
        game ("rock")
    })
    scissor_div.addEventListener('click',function (){
        game ("scissor")
    })
}

main();
