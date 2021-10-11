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

test.skip("gameboard places ships horizontally on correct squares", () => {

})