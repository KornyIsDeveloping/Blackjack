//elements from the DOM
const startButton = document.getElementById("startButton") as HTMLButtonElement;
const playerNameInput = document.getElementById("playerName") as HTMLInputElement;
const gameSection = document.getElementById("gameSection");

//player's details and game state
interface Player {
    name: string;
    score: number;
}

let currentPlayer: Player = {
    name: "",
    score: 0
};

//the funcitonality for the start button on click
startButton.addEventListener("click", () => {
    //adding player's name
    currentPlayer.name = playerNameInput.value;

    //hide modal 
    const modal = document.getElementById("startModal");
    if (modal) {
        modal.style.display = "none";
    }

    //display game section
    if (gameSection) {
        gameSection.style.display = "block";
    }

    //initialize other game variables or logic if needed
    //for example, setting player score to 0 or resetting the game board
    currentPlayer.score = 0;

    //optionally, you can log or display the current player's name to verify
    console.log(`Welcome ${currentPlayer.name}!`);
});

