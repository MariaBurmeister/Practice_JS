const getUserChoice = userInput => {
  let lowUserInput =
  userInput.toLowerCase();

  lowUserInput === "rock"||
  lowUserInput === "paper"||
  lowUserInput === "scissors"||
  lowUserInput === "bomb" ?

  lowUserInput = `You played: ${lowUserInput}.`
  :
  lowUserInput = `${lowUserInput.toUpperCase()} is an invalid Input`;

  return lowUserInput;

}

const getCompChoice = () => {
  const num = Math.floor(Math.random()*3)

  switch (num) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors" ;
  }
}

const determineWinner = (userChoice, compChoice) => {
  let result = "";

  if (userChoice === "bomb" ) {
    result = "BOOOM, YOU WON!";

    } else if (userChoice === compChoice) {
        result = "The game was a tie!";

    } else if (userChoice === "rock") {
      compChoice === "paper" ?
        result = 'Computer won!'
        :
        result = 'User won!' ;

    } else if (userChoice === "paper") {
      compChoice === "scissors" ?
        result = 'Computer won!'
        :
        result = 'User won!';

    } else if (userChoice === "scissors") {
      compChoice === "rock" ?
        result = 'Computer won!'
        :
        result = 'User won!';
    }
    return result;
  }

const playGame = (uChoice) => {
  const userChoice = getUserChoice(uChoice);
  const compChoice = getCompChoice();

  console.log(userChoice);
  console.log(`Computer played: ${compChoice}`);

  console.log(determineWinner(userChoice, compChoice));
}

playGame("Lizard");
