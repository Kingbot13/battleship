import gb from './gameboard';
import ship from './ship';

test("gameboard returns correct number of grid squares", () => {
    const player = gb();
    expect(player.board.length).toBe(100);
});

test("gameboard correctly creates ships", () => {
    const player = gb(player);
    expect(player.carrier.health.length).toBe(5);
});

test("gameboard places ships horizontally", () => {
    const player = gb(player);
    player.placeShip('horizontal', player.board[0], player.carrier);
    expect(player.board.slice(0, 5)).toStrictEqual(['c', 'c', 'c', 'c', 'c']);
});