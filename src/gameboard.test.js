import gameBoard from "./gameboard";
import gb from "./gameboard";
import ship from "./ship";

test("gameboard returns correct number of grid squares", () => {
  const player = gb();
  expect(player.board.length).toBe(100);
});

test("gameboard correctly creates ships", () => {
  const player = gb(player);
  expect(player.carrier.health.length).toBe(5);
});

describe("gameboard places ships correctly", () => {
  test("gameboard places ships horizontally starting at 0", () => {
    const player = gb(player);
    player.placeShip("horizontal", 0, player.carrier);
    expect(player.board.slice(0, 5)).toStrictEqual(["c", "c", "c", "c", "c"]);
  });

  test("gameboard places ships horizontally starting at 1", () => {
    const player = gb(player);
    player.placeShip("horizontal", 1, player.carrier);
    expect(player.board.slice(1, 6)).toStrictEqual(["c", "c", "c", "c", "c"]);
  });

  test("gameboard.placeShip throws error if ship exceeds edge of board", () => {
    const player = gb(player);
    expect(() => player.placeShip("horizontal", 5, player.carrier)).toThrow();
    expect(() => player.placeShip("horizontal", 6, player.carrier)).toThrow();
    expect(() => player.placeShip("horizontal", 36, player.carrier)).toThrow();
  });

  test("gameboard.placeShip places ships vertically starting at [0]", () => {
    const player = gb(player);
    player.placeShip('vertical', 0, player.carrier);
    // console.log('board:', player.board);
    const copy = [];
    for (let i = 0; i < player.carrier.health.length; i++) {
      copy.push(player.board[i * 10]);
    }
    expect(copy).toStrictEqual(["c", "c", "c", "c", "c"]);
  });

  test("gameboard.placeShip throws error if length of ship exceeds bottom of board", () => {
    const player = gb(player);
    expect(() => player.placeShip('vertical', 60, player.carrier)).toThrow();
  });

  test("throw error if ships overlap", () => {
    const player = gb(player);
    player.placeShip('vertical', 0, player.battleship);
    expect(() => player.placeShip('horizontal', 0, player.carrier)).toThrow();
  });
});

describe("gameboard.receiveAttack correctly records attacks", () => {

  const player = gb(player);
  player.placeShip('horizontal', 0, player.carrier);
  player.placeShip('horizontal', 11, player.battleship);
  player.placeShip('horizontal', 23, player.destroyer);
  player.placeShip('vertical', 20, player.submarine);
  player.placeShip('vertical', 33, player.patrol);

  test("receiveAttack marks missed attacks as 'shot'", () => {
    player.receiveAttack(10);
    expect(player.board[10]).toBe("shot");
  });
});
