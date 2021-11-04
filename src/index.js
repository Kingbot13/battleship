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
        dom(player1, computer, playerBoard, computerBoard, grid, ai, el);
    }
    return {play};
})();

game.play();
