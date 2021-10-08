import ship from "./ship";

test("hit(2) inserts x into battleship[1]", () => {
  const battleship = ship(5);
  battleship.hit(2);
  expect(battleship.health[1]).toBe("x");
});

test("ship(5) returns correct length", () => {
  const battleship = ship(5);
  expect(battleship.health.length).toBe(5);
});

test("isSunk returns true if health only has x", () => {
  const patrol = ship(3);
  for (let i = 0; i < patrol.health.length; i++) {
    patrol.hit(i + 1);
  }
  expect(patrol.isSunk()).toBe(true);
});
