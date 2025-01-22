document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    const resetButton = document.getElementById('reset-button');
    const gameMessage = document.getElementById('game-message');
    let currentPlayer = 'X';
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    function checkWin(cells) {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            ) {
                return combination;
            }
        }
        return null;
    }

    function isDraw(cells) {
        return [...cells].every(cell => cell.textContent); 
    }

    function updateGameMessage() {
        gameMessage.innerHTML = `Player <span>${currentPlayer}</span>'s turn`;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (gameActive && !cell.textContent) {
                cell.textContent = currentPlayer;

                const winningCombo = checkWin(cells);

                if (winningCombo) {
                    winningCombo.forEach(index => {
                        cells[index].style.backgroundColor = 'green';
                    });
                    gameMessage.textContent = `Player ${currentPlayer} wins! 🎉`;
                    gameActive = false;
                    return;
                }

                if (isDraw(cells)) {
                    gameMessage.textContent = `It's a draw! 🤝`;
                    gameActive = false;
                    return;
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                updateGameMessage();
            }
        });
    });

    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.style.backgroundColor = '';
        });
        currentPlayer = 'X';
        gameActive = true;
        updateGameMessage();
    });

    updateGameMessage();
});
