
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let result, player, computer;
let wins=0;
let losses = 0;
//This function randomizes the computer's choice in the game
function computerChoice(){
    var rando = Math.floor(Math.random() * 3);
    var choice;
    if (rando === 0){
        choice = rock;
    } else if (rando === 1){
        choice = paper;
    } else if (rando === 2){
        choice = scissors;
    }
    return choice;
}


// this is the main gameplay function that runs when a selection is chosen
function playGame(choice){
    player = choice;
    computer = computerChoice();
    changeCompImg(computer);
    changePlayerImg(player);
    var compareResult = compare(player, computer, result);
    updateScore();
}

//this function displays text when you win
function win(y,z,x){
    wins++;
    x ="you win!";
     document.getElementById("infobar").innerHTML = y + " beats " + z +". "+x;
    return x;

}

//this function displays text when you lose
function lose(y,z,x){
    losses++;
    x= "you lose!";

    document.getElementById("infobar").innerHTML = z + " beats " + y +". "+x;
    return x;
}

//this is the main logic function of the game that determines the winner based on the rules of rock paper scissors

function compare(pChoice, cChoice, returnResult){
     if (pChoice === cChoice){
            document.getElementById("infobar").innerHTML = "it's a tie. try again.";
        } else if (pChoice === "rock"){
            if(cChoice === "scissors"){
               return win(pChoice, cChoice, returnResult);
            }else if (cChoice === "paper"){
                return lose(pChoice, cChoice, returnResult);
            }
        } else if (pChoice === "paper"){
            if(cChoice === "rock"){
                return win(pChoice, cChoice, returnResult);
            }else if (cChoice === "scissors"){
               return lose(pChoice, cChoice, returnResult);
            }
        } else if (pChoice === "scissors"){
            if(cChoice === "paper"){
               return win(pChoice, cChoice, returnResult);
            }else if (cChoice === "rock"){
                   return lose(pChoice, cChoice, returnResult);
            }
        }
}
//this function changes the computer's images based on its choice
function changeCompImg(choice){

    if(choice === "rock"){
        document.getElementById("compImg").src = 'img/rock.png';
    } else if (choice === "paper"){
        document.getElementById("compImg").src = 'img/paper.png';
    } else if (choice === "scissors"){
        document.getElementById("compImg").src = 'img/scissors.png';

}}

//this function changes the player's images based on its choice. A better way to write this would be to refactor the code in order to make this one single function for both player and computer.
function changePlayerImg(choice){

    if(choice === "rock"){
        document.getElementById("playerImg").src = 'img/rock.png';
    } else if (choice === "paper"){
        document.getElementById("playerImg").src = 'img/paper.png';
    } else if (choice === "scissors"){
        document.getElementById("playerImg").src = 'img/scissors.png';

}}


//these are the event handlers that make the selection depending on which image the player clicks

var playerChoiceRock = document.getElementById("handr");
playerChoiceRock.addEventListener("click", function(){playGame("rock");});
var playerChoicePaper = document.getElementById("handp");
playerChoicePaper.addEventListener("click", function(){playGame("paper");});
var playerChoiceScissors = document.getElementById("hands");
playerChoiceScissors.addEventListener("click", function(){playGame("scissors");});


//this is code for the collapsing instructions panel, i found the code searching online because i don't know how to actually create this myself yet
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//this function updates the score text at the bottom of the page

function updateScore(){
    var el = document.getElementById('score');
    var updatedScore = "Wins: " + wins + " Losses: " + losses;
    el.textContent = updatedScore;
}
