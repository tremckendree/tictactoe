let cells = document.querySelectorAll('.row > div');

let turnCounter = 0



    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click',cellClicked);
    }
    function cellClicked(event) {
        if (turnCounter % 2 == 0 ){
            event.target.textContent = 'X'
        } else {
            event.target.textContent = 'O'
            
        }
        checkWin()
        turnCounter++
    }

    // for (let i = 0; i < 3; i++) {
    //     let rowSum = 0;
    //     for (let j = 0; j < 3; j++) {
    //         rowSum += cells[i][j];
    //     }
    //     if (rowSum === 3)
    //     alert ('O-Wins!');
    //     else if (rowSum === -3)
    //     alert ('X-Wins!');
    // }
    // for (let i = 0; i < 3; i++) {
    //     let colSum = 0;
    //     for (let j = 0; j < 3; j++) {
    //         colSum += cells[j][i];
    //     }
    //     if (colSum === 3)
    //     alert ('O-Wins!');
    //     else if (colSum === -3)
    //     alert ('X-Wins!')
    // }


function checkWin() {

    if (cells[0].textContent == 'O' && cells[1].textContent == 'O' && cells[2].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X')
    alert ('X-Wins!');
    else if (cells[3].textContent == 'O' && cells[4].textContent == 'O' && cells[5].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X')
    alert ('X-Wins!');
    else if (cells[6].textContent == 'O' && cells[7].textContent == 'O' && cells[8].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X')
    alert ('X-Wins!');

    else if (cells[0].textContent == 'O' && cells[4].textContent == 'O' && cells[8].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X')
    alert ('X-Wins!');
    else if (cells[2].textContent == 'O' && cells[4].textContent == 'O' && cells[6].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X')
    alert ('X-Wins!');

    else if (cells[0].textContent == 'O' && cells[3].textContent == 'O' && cells[6].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X')
    alert ('X-Wins!');
    else if (cells[1].textContent == 'O' && cells[4].textContent == 'O' && cells[7].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X')
    alert ('X-Wins!');
    else if (cells[2].textContent == 'O' && cells[5].textContent == 'O' && cells[8].textContent == 'O')
    alert ('O-Wins!');
    else if (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X')
    alert ('X-Wins!');



}