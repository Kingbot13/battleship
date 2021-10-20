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
    for (let i = 0; i < grid1.childNodes.length; i++) {
        grid1.childNodes[i].classList.add('player-grid');
        if (playerBoard.board[i] !== "") {
            grid1.childNodes[i].classList.add('ship');
        }
    };
    for (let i = 0; i < grid2.childNodes.length; i++) {
        grid2.childNodes[i].classList.add('computer-grid');
        // temporarily display positions of computer ships for testing
        if (computerBoard.board[i] !== "") {
            grid2.childNodes[i].classList.add('ship');
        }
    };
    const play = () => {
        const list = document.querySelectorAll('div.player-grid');
        console.log('list', list);
        let shuffleList = [];
        while (shuffleList.length < 100) {
            let r = Math.floor(Math.random() * 99) + 1;
            if(shuffleList.indexOf(r) === -1) shuffleList.push(r);
        }
        console.log('shuffle', shuffleList);
        if (!player1.isTurn && !computer.isTurn) {
            player1.isTurn = true;
        }
        let i = 0;
        document.addEventListener('click', function el(e) {
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
                // simulate mouse click.. grab random div from player board to simulate click
                // could change ai to only return random number and use number to grab div and simulate click
                /* 
                    list = document.queryselectAll(div.player-grid);
                    list[ai()].click()
                */
               list[shuffleList[i]].click();
               i++;
                console.log(i);
            } else if (e.target && e.target.classList.contains('player-grid') && computer.isTurn) {
                playerBoard.receiveAttack(e.target.dataset.id);
                if (playerBoard.board[e.target.textContent] === "") {
                    e.target.classList.toggle('miss');
                } else {
                    e.target.classList.toggle('hit');
                }
                if (playerBoard.shipsSunk) {
                    alert('computer wins!');
                    document.removeEventListener('click', el);
                }

                player1.isTurn = true;
                computer.isTurn = false;
            } else {
                // console.log(e.target.dataset.id);
                // console.log(player1.isTurn);
                // console.log(e.target.className);
                throw new Error("something wrong with event listener");
            }
        });

    }
    return {play};
})();

game.play();
