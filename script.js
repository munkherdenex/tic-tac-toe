console.log('Tic Tac Toe script loaded!');

document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td'); 
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (!cell.textContent) { 
                console.log(`Cell ${cell.id} clicked!`);
            }
        });
    });
});
