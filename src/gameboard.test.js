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

describe("gameboard places ships correctly", () => {
    test("gameboard places ships horizontally starting at gb.board[0]", () => {
        const player = gb(player);
        player.placeShip('horizontal', 0, player.carrier);
        expect(player.board.slice(0, 5)).toStrictEqual(['c', 'c', 'c', 'c', 'c']);
    });

    test("gameboard places ships horizontally starting at gb.board[1]", () => {
        const player = gb(player);
        player.placeShip('horizontal', 1, player.carrier);
        expect(player.board.slice(1, 6)).toStrictEqual(['c', 'c', 'c', 'c', 'c']);
    });
    
    test("gameboard.placeShip throws error if ship exceeds edge of board", () => {
        const player = gb(player);
        expect(() => player.placeShip('horizontal', 5, player.carrier)).toThrow();
    });

})
