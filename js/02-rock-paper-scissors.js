let user;
let computer;
let compare;
let play = true;

rockPaperScissorsGame();

function rockPaperScissorsGame(){

    while(play === true) {

        userOption();
        computerOption();
        compareOptions();
        finalResults();
        playAgain();

        console.log(user, computer, compare, play);

    };
    
    if(play === false){
        alert('Thanks for playing.');
    };
};

function userOption(){

    user = prompt('Pick \"Rock\", \"Paper\", or \"Scissors\":').toUpperCase();

    if (user !== 'ROCK' && user !== 'PAPER' && user !== 'SCISSORS'){''
         alert('Try Again.');
         userOption();
    };

    return user;

};

function computerOption(){

     computer = Math.round(Math.random()*2);

     if (computer === 0){
        return computer = 'ROCK';
     } else if (computer === 1){
        return computer = 'PAPER';
     } else if (computer === 2) {
        return computer = 'SCISSORS';
     };

};

function compareOptions(){

    if (user === computer){
        return compare = 0;
    } else if (user === 'ROCK' & computer === 'PAPER'){
        return compare = 1;
    } else if (user === 'ROCK' & computer === 'SCISSORS'){
        return compare = 2;
    } else if (user === 'PAPER' & computer === 'ROCK'){
        return compare = 3;
    } else if (user === 'PAPER' & computer === 'SCISSORS'){
        return compare = 4;
    } else if (user === 'SCISSORS' & computer === 'ROCK'){
        return compare = 5;
    } else if (user === 'SCISSORS' & computer === 'PAPER'){
        return compare = 6;
    } else {
        return alert('Error has occured in compareOptions()');
    };
    
};

function finalResults(){

    switch(compare){
        case 0:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nIT\'S A TIE!');
            break;
        case 1:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nPAPER covers ROCK. \n\nCOMPUTER WINS!');
            break;
        case 2:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nROCK destroys SCISSORS. \n\nYOU WIN!');
            break;
        case 3:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nPAPER covers ROCK. \n\nYOU WIN!');
            break;
        case 4:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nSCISSORS cut PAPER. \n\nCOMPUTER WINS!');
            break;
        case 5:
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nROCK destroys SCISSORS. \n\nCOMPUTER WINS!');
            break;
        case 6: 
            alert('You chose '+ user + ', and the computer chose ' + computer + '. \n\nSCISSORS cut PAPER. \n\nYOU WIN!');
            break;
        default:
            alert('An error has occured in finalResults()');
            break;   
        };

};

function playAgain(){

    return play = confirm('Want to play again?');

};





// The Rock, Paper, Scissors Game (20 points)

// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:

// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.
// You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

// Begin by prompting the user for their choice.
// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// What if the result ends in a tie? Figure out how to handle that as well.
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.