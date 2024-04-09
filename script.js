//This page is created by Surendra Mainali , Student id : C0918640, Date :04-09-2024

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const player1ScoreDisplay = document.getElementById("player1Score");
    const player2ScoreDisplay = document.getElementById("player2Score");
    const dice1Img = document.getElementById("dice1Img");
    const dice2Img = document.getElementById("dice2Img");
    const rollButton = document.getElementById("rollButton");
    
    // Initializing player scores and winning score
    let player1Score = 0;
    let player2Score = 0;
    const winningScore = 50; // we can Change this to the desired winning score

    // Event listener for the roll button
    rollButton.addEventListener("click", function() {
        // Generating random dice values
        const dice1 = Math.floor(Math.random() * 6) + 1;
        const dice2 = Math.floor(Math.random() * 6) + 1;
        
        // Updating player scores
        player1Score += dice1;
        player2Score += dice2;
        
        // Updating score displays
        player1ScoreDisplay.textContent = player1Score;
        player2ScoreDisplay.textContent = player2Score;
        
        // Updating dice images
        updateDiceImages(dice1, dice2);

        // Checking if any player has reached the winning score or not
        if(player1Score >= winningScore){
            alert("Player 1 Wins");

        }else if(player2Score >=winningScore){
            alert("Player 2 Wins");
        }
    });
    
    // Function to update dice images
    function updateDiceImages(dice1Value, dice2Value) {
        dice1Img.src = `dice${dice1Value}.png`;
        dice2Img.src = `dice${dice2Value}.png`;
    }
});
