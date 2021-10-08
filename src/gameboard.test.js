import gb from './gameboard';

test("gameboard returns correct number of grid squares", () => {
    const player = gb();
    expect(player.board.length).toBe(100);
});