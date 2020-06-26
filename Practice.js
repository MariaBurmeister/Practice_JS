const getUserChoice = userInput => {
  userInput =
  userInput.toLowerCase();

  userInput === "rock"||
  userInput === "paper"||
  userInput === "scissors" ?

  console.log(`You played: ${userInput}.`)
  :
  userInput = `${userInput.toUpperCase()} is an invalid Input`;

  return userInput;

}

const getCompChoice = () => {
  num = Math.floor(Math.random()*3)

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

  if (userChoice === compChoice) {
    console.log("The game was a tie!");

  } else if (userChoice === "rock") {
    compChoice === "paper" ?
      console.log('Computer won!')
      :
      console.log('User won!') ;

    } else if (userChoice === "paper") {
      compChoice === "scissors" ?
        console.log('Computer won!')
        :
        console.log('User won!');

    } else if (userChoice === "scissors") {
      compChoice === "rock" ?
        console.log('Computer won!')
        :
        console.log('User won!');
    }
  }

const playGame = (uChoice) => {
  const userChoice = getUserChoice(uChoice);
  const compChoice = getCompChoice();

  //console.log(userChoice);
  console.log(`Computer played: ${compChoice}`);

  console.log(determineWinner(userChoice, compChoice));
}

playGame("paper");
