// 1. Create function called getComputerChoice that will return
// either rock, paper or scissors.
// 2. write function that plays single round of rock, paper, scissors
// The function should take player selection and computer selection
// and should return a string if you win/lose
// 2.5 function should NOT be case sensitive;


switch (playerSelection) { 
    case 'Rock':
    console.log('you have selected Rock')
    break;
    case 'Paper':
    console.log('you have selected Paper')
    break;
    case 'Scissors':
    console.log('you have selected Scissors')
    break;




    if (playerSelection == computerChoice) {
        console.log("You have tied!");
    } else if (playerSelection == 'Rock' || computerChoice == 'Rock') {
        console.log('NOPE!');
    } else {

    } {

    }


    do {
        playerSelection = prompt('Please choose Rock, Paper, or Scissors.')
    } while (computerChoice.indexOf(playerSelection) === -1);




    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TicTacToe</title>
</head>

<body>
    <script>

        // function to generate computers rock, paper, scissor choice. //
        let computerChoice = ['Rock', 'Paper', 'Scissors'];
        function getComputerChoice(computerChoice) {
            return computerChoice[Math.floor(Math.random() * computerChoice.length)]
        }


        let playerSelection;
        let computerChoice2 = (getComputerChoice(computerChoice));
        console.log(computerChoice2);


        function capitalize(playerSelection) {
            return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
        };

        // Do-while loop for user selection.
        do {
            playerSelection = prompt('Please choose Rock, Paper, or Scissors.');
        } while (computerChoice.indexOf(playerSelection) === -1);
        let answer = playerSelection.toLowerCase();

        // Function to play tic tac toe with computer.
        function singleRound(playerSelection, computerChoice2) {
            console.log(playerSelection + computerChoice2);
            switch (playerSelection + computerChoice2) {
                case "RockScissors":
                case "ScissorsPaper":
                case "PaperRock":
                    console.log('Player has WON!');
                    break;
                case "PaperPaper":
                case "ScissorsScissors":
                case "RockRock":
                    console.log('Player has tied!');
                    break;
                case "ScissorsRock":
                case "PaperScissors":
                case "RockPaper":
                    console.log('Player has LOST!');
                    break;
                default:
            }
        }
        let roundComplete = (singleRound(playerSelection, computerChoice2))
        console.log(roundComplete);
