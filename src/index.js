import gb from './gameboard';
import ship from './ship';
import player from './player';
import grid from './grid-gen';

(() => {
    const player1 = player(player1);
    const playerBoard = gb(playerBoard);
    const computer = player(computer);
    const computerBoard = gb(computerBoard);
    const display = document.createElement('div');
    document.body.appendChild(display);
    display.id = 'display';
    display.append(grid(playerBoard.board.length), grid(computerBoard.board.length));
    // temporarily hardcode ships into place
    playerBoard.placeShip('horizontal', 0, playerBoard.carrier);
    playerBoard.placeShip('horizontal', 10, playerBoard.battleship);
    playerBoard.placeShip('horizontal', 20, playerBoard.destroyer);
    playerBoard.placeShip('horizontal', 30, playerBoard.submarine);
    playerBoard.placeShip('horizontal', 40, playerBoard.patrol);
    computerBoard.placeShip('horizontal', 0, computerBoard.carrier);
    computerBoard.placeShip('horizontal', 10, computerBoard.battleship);
    computerBoard.placeShip('horizontal', 20, computerBoard.destroyer);
    computerBoard.placeShip('horizontal', 30, computerBoard.submarine);
    computerBoard.placeShip('horizontal', 40, computerBoard.patrol);
    // main loop
    while(!playerBoard.shipsSunk && !computerBoard.shipsSunk) {
        // set first player to make first move
        if (!player1.isTurn && !computer.isTurn) {
            player1.isTurn = true;
        }
        if (player1.isTurn) {
            computerBoard.board.forEach((item) => {
                item.addEventListener('click', () => {
                    computerBoard.receiveAttack(item.dataset.id);
                });
            })
        }
    }
})();