// Waits for the DOM to be fully loaded before it runs the JavaScript code
document.addEventListener('DOMContentLoaded', () => { // Selects important elements from the DOM, including the game squares on the Tic-Tac-Toe board
    const squares = document.querySelectorAll('.game-square'); // Gets all of the squares on the game board
    const turnDisplay = document.getElementById('turn'); // Element that shows whose turn it is
    const playAgainButton = document.getElementById('button-play-again'); // Code for the "Play again!" button
    const scoreboardX = document.getElementById('scoreboard-x'); // Scoreboard for player "X"
    const scoreboardO = document.getElementById('scoreboard-o'); // Scoreboard for player "O"
    // Initializes the game state variables
    let currentPlayer = 'X'; // Starts the game with player "X"
    let gameBoard = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 Tic-Tac-Toe board
    let gameActive = true; // Tracks whether or not the game is active
    let scoreX = 0; // Score for player "X" to start at 0
    let scoreO = 0; // Score for player "O" to start at 0
    // Winning three in a row patterns in Tic-Tac-Toe
    const winningCombinations = [
        [0, 1, 2], // Top row of squares
        [3, 4, 5], // Middle row of squares
        [6, 7, 8], // Bottom row of squares
        [0, 3, 6], // Left column of squares
        [1, 4, 7], // Middle column of squares
        [2, 5, 8], // Right column of squares
        [0, 4, 8], // Diagonal top-left square to the bottom-right square
        [2, 4, 6]  // Diagonal top-right square to the bottom-left square
    ];
    // Function that handles when players click squares on the board
    const handleSquareClick = (event) => { // Handles the events relating to square clicks
        // Obtains the index from the square the user clicked on using its ID
        const squareIndex = parseInt(event.target.id.split('-')[1]); // Uses the clicked square's id to parse the square index
        // Checks for both squares being filled and the inactivity of the game
        if (gameBoard[squareIndex] !== '' || !gameActive) return; // Returns if the square is filled by a letter or if Tic-Tac-Toe is not active
        // Updates the game board and the UI with the symbol of the player that is supposed to run their turn
        gameBoard[squareIndex] = currentPlayer; // Sets the Tic-Tac-Toe board square to the symbol of the player playing their turn
        event.target.textContent = currentPlayer; // Updates the UI of the game with the player playing their turn
        // Check if the active player has won
        if (checkWin(currentPlayer)) { // Checks to see if the current player has won the game
            announceResult(`${currentPlayer} wins!`); // Announces the player currently playing as the winner
            updateScore(currentPlayer); // Updates the score for the current (winning) player
            gameActive = false; // Inactivates the game
            return; // Exits the function
        }
        // Checks to see if the game is a draw between both players
        if (checkDraw()) { // Checks to see if the game results in a draw
            announceResult('Draw!'); // Announces the game as a draw to the players
            gameActive = false; // Inactivates the game
            return; // Exits the function
        }
        // Switches players
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switches the current player's letter
        updateTurnDisplay(); // Updates the display to show the current player's turn
    };
    // Function that checks if one of the players has won the game
    const checkWin = (player) => { // const command which checks to see if one of the players has won the game
        // Checks each possible winning combo
        return winningCombinations.some(combination => { // Return command that checks each possible winning Tic-Tac-Toe pattern
            // If all of the squares in a possible wining pattern are filled by the same player
            return combination.every(index => gameBoard[index] === player); // Return command that acts based upon the succession of a Tic-Tac-Toe winning pattern
        });
    };
    // Function that checks to see if the game resulted in a draw
    const checkDraw = () => { // const command checking to see if the game has ended in a draw
        // Checks to see if all the game squares are filled
        return gameBoard.every(square => square !== ''); // return command that checks every square on the board for a fill status
    };
    // Function that updates the score of the game
    const updateScore = () => { // const command that updates the Tic-Tac-Toe score
        // Increments the score for the winning player
        if (currentPlayer === 'X') { // Checks if the current player is "X"
            scoreX++; // Increments the score by one for player "X"
            scoreboardX.textContent = scoreX; // Updates the scoreboard scoring for player "X"
        } else { // Falls on player "O" if the current player is not player "X"
            scoreO++; // Increments the score by one for player "O"
            scoreboardO.textContent = scoreO; // Updates the scoreboard scoring for player "O"
        }
    };
    // Function that announces the game result
    const announceResult = (message) => { // const command that announces the results of the game
        // Updates the turn display with the results of the game
        turnDisplay.textContent = message; // Sets the turn display to show the result
    };
    // Function that updates the turn display
    const updateTurnDisplay = () => { // const command that updates the turn display
        // Shows the current player's turn
        turnDisplay.textContent = `${currentPlayer}'s Turn`; // Updates the turn display to show the current player's turn
    };
    // Function that resets the game
    const resetGame = () => { // const command that resets Tic-Tac-Toe
        // Clears the game board
        gameBoard = ['', '', '', '', '', '', '', '', '']; // Resets the game board to an empty state without letters on it
        // Resets the game UI
        squares.forEach(square => { // Loops through each square on the game board
            square.textContent = ''; // Wipes the content of each of the squares
        });
        // Resets the game state to its original form
        currentPlayer = 'X'; // Resets the current player to player "X"
        gameActive = true; // Reactivates the entire game
        // Updates the turn display
        updateTurnDisplay(); // Updates the turn display to show the current player's turn
    };
});