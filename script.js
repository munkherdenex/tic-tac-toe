document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td'); 
    const resetButton = document.getElementById('reset-button');
    let currentPlayer = 'X'; 

    const winningCombinations = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8], 
        [2, 4, 6], 
    ];

    function checkWin(cells) {
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;

            if (
                cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent
            ) {
                console.log(`Winner: ${cells[a].textContent}`);
                return combination; 
            }
        }
        return null; 
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) { 
                cell.textContent = currentPlayer; 
                console.log(`${currentPlayer} placed on ${cell.id}`);

                const winningCombo = checkWin(cells);
                if (winningCombo) {
                    winningCombo.forEach(index => {
                        cells[index].style.backgroundColor = 'green';
                    });
                    console.log(`${currentPlayer} wins!`);
                    return; 
                }

                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    resetButton.addEventListener('click', () => {
        cells.forEach(cell => {
            cell.textContent = ''; 
            cell.style.backgroundColor = ''; 
        });
        currentPlayer = 'X'; 
        console.log('Game reset!');
    });
});
