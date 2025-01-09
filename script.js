console.log('Tic Tac Toe script loaded!');

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td'); 
    let currentPlayer = 'X'; 

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) { 
                cell.textContent = currentPlayer; 
                console.log(`${currentPlayer} placed on ${cell.id}`);
                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
