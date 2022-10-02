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