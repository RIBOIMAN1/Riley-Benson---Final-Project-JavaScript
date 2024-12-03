// Waits for the DOM to be fully loaded before it runs the JavaScript code
document.addEventListener('DOMContentLoaded', () => { // Selects important elements from the DOM, including the game squares on the Tic-Tac-Toe board
    const squares = document.querySelectorAll('.game-square'); // Gets all of the squares on the game board
    const turnDisplay = document.getElementById('turn'); // Element that shows who's turn it is
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
]});