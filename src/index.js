import gb from './gameboard';
import player from './player';
import grid from './grid-gen';
import './style.css';
import ai from './computer';

const game = (() => {
    const player1 = player(player1);
    const playerBoard = gb(playerBoard);
    const computer = player(computer);
    const computerBoard = gb(computerBoard);
    const display = document.getElementById('display');
    // document.body.appendChild(display);
    display.append(grid(playerBoard.board.length), grid(computerBoard.board.length));
    // WARNING: potential bug could arise here if number of display children changes
    const grid1 = display.firstChild
    const grid2 = display.lastChild
    // temporarily hardcode ships into place
/*     playerBoard.placeShip('horizontal', 0, playerBoard.carrier);
    playerBoard.placeShip('horizontal', 10, playerBoard.battleship);
    playerBoard.placeShip('horizontal', 20, playerBoard.destroyer);
    playerBoard.placeShip('horizontal', 30, playerBoard.submarine);
    playerBoard.placeShip('horizontal', 40, playerBoard.patrol);
 */    
    computerBoard.placeShip('horizontal', 0, computerBoard.carrier);
    computerBoard.placeShip('horizontal', 10, computerBoard.battleship);
    computerBoard.placeShip('horizontal', 20, computerBoard.destroyer);
    computerBoard.placeShip('horizontal', 30, computerBoard.submarine);
    computerBoard.placeShip('horizontal', 40, computerBoard.patrol);
    for (let i = 0; i < grid1.childNodes.length; i++) {
        grid1.childNodes[i].classList.add('player-grid');
        // if (playerBoard.board[i] !== "") {
        //     grid1.childNodes[i].classList.add('ship');
        // }
    };
    for (let i = 0; i < grid2.childNodes.length; i++) {
        grid2.childNodes[i].classList.add('computer-grid');
        // temporarily display positions of computer ships for testing
        if (computerBoard.board[i] !== "") {
            grid2.childNodes[i].classList.add('ship');
        }
    };
    const play = () => {
        // grab all player 1 squares for computer to select
        let nodelist = document.querySelectorAll('div.player-grid');
        // create copy that can be mutated
        let listCopy = [];
        for (let i = 0; i < nodelist.length; i++) {
            listCopy.push(nodelist[i]);
        }
        if (!player1.isTurn && !computer.isTurn) {
            player1.isTurn = true;
        }
        document.addEventListener('click', function el(e) {
            // wait until ships are placed before continuing
            let playerShips = 0;
            const shipList = [playerBoard.carrier, playerBoard.battleship, playerBoard.destroyer, playerBoard.submarine, playerBoard.patrol];
            if (e.target && e.target.classList.contains('player-grid') && playerShips < 5) {
                playerBoard.placeShip('horizontal', e.target.dataset.id, shipList[playerShips]);
                for (let i = 0; i < grid1.childNodes.length; i++) {
                    grid1.childNodes[i].classList.add('player-grid');
                    if (playerBoard.board[i] !== "") {
                        grid1.childNodes[i].classList.add('ship');
                    }
                };
            } else {
                if (e.target && e.target.classList.contains('computer-grid') && player1.isTurn) {
                    computerBoard.receiveAttack(e.target.dataset.id);
                    if (e.target.classList.contains('ship')) {
                        e.target.classList.toggle('hit');
                    } else {
                        e.target.classList.toggle('miss');
                    }
                    if (computerBoard.shipsSunk) {
                        alert('player wins!');
                        document.removeEventListener('click', el);
                    }
                    player1.isTurn = false;
                    computer.isTurn = true;
                    
                    let i = ai(0, listCopy.length);
                    listCopy[i].click();
                    listCopy.splice(i, 1);
    
                } else if (e.target && e.target.classList.contains('player-grid') && computer.isTurn) {
                    playerBoard.receiveAttack(e.target.dataset.id);
                    if (playerBoard.board[e.target.dataset.id] === "shot") {
                        e.target.classList.toggle('miss');
                    } else {
                        e.target.classList.toggle('hit');
                    }
                    if (playerBoard.shipsSunk) {
                        alert('computer wins!');
                        document.removeEventListener('click', el);
                    }
                    console.log('player:', playerBoard.board[e.target.dataset.id]);
    
                    player1.isTurn = true;
                    computer.isTurn = false;
                } else {
                    throw new Error("something wrong with event listener");
                }
    
            }
            // while (playerShips < 5) {
                 // implement loop code here
                
            //     } else {
            //         throw new Error ("While loop error");
            //     }
            //     playerShips++;

            // }
        });

    }
    return {play};
})();

game.play();
