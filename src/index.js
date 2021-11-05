import gb from './gameboard';
import player from './player';
import grid from './grid-gen';
import './style.css';
import ai from './computer';
import dom from './dom';
import el from './game';

const game = (() => {
    const player1 = player(player1);
    const playerBoard = gb(playerBoard);
    const computer = player(computer);
    const computerBoard = gb(computerBoard);
    const play = () => {
        let playerShips = 0;
        let computerShips = 0;
      
        document.body.appendChild(dom.display); 
        el(playerBoard, computerBoard, player1, computer, ai, playerShips, computerShips, dom.directionBtn, dom.grid1, dom.grid2);
    }
    return {play};
})();

game.play();
