//elements from the DOM
var startButton = document.getElementById("startButton");
var playerNameInput = document.getElementById("playerName");
var gameSection = document.getElementById("gameSection");
var currentPlayer = {
    name: "",
    score: 0
};
//the funcitonality for the start button on click
startButton.addEventListener("click", function () {
    //adding player's name
    currentPlayer.name = playerNameInput.value;
    //hide modal 
    var modal = document.getElementById("startModal");
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
    console.log("Welcome ".concat(currentPlayer.name, "!"));
});
