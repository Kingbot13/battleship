import ship from "./ship";

const gameBoard = (name) => {
  const shipsSunk = () => {
    if (battleship.isSunk() && carrier.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrol.isSunk()) {
      return true;
    } else {
      return false;
    }

  }
  const board = [];
  for (let i = 0; i < 100; i++) {
    board.push("");
  }
  const carrier = ship(5);
  const battleship = ship(4);
  const destroyer = ship(3);
  const submarine = ship(3);
  const patrol = ship(2);
  const placeShip = (direction, coordinate, ship) => {
    if (board[coordinate] !== "") {
      throw new Error("ships cannot overlap!");
    } else {

      let marker;
      switch (ship) {
        case carrier:
          marker = "c";
          break;
        case battleship:
          marker = "b";
          break;
        case destroyer:
          marker = "d";
          break;
        case submarine:
          marker = "s";
          break;
        case patrol:
          marker = "p";
          break;

        default:
          break;
      }
      if (direction === "horizontal") {
        // check to see if ship placement does not exceed edge of gameboard
        const coordString = coordinate.toString();
        if (
          parseInt(coordString[coordString.length - 1]) + ship.health.length <=
          9
        ) {
          for (let i = 0; i < ship.health.length; i++) {
            board.splice(coordinate + i, 1, marker);
          }
          return board;
        } else {
          throw new Error("illegal move. ship cannot pass edge of board!");
        }
      } else {
        // vertical placement
        if (coordinate + ship.health.length * 10 <= 99) {
          for (let i = 0; i < ship.health.length; i++) {
            board.splice(coordinate + i * 10, 1, marker);
          }
          return board;
        } else {
          throw new Error("illegal move. ship cannot pass edge of board!");
        };
      };
    };
  };
  const receiveAttack = (coordinate) => {
    function damage(mark) {
      const filterBoard = board.filter(letter => letter === mark);
      return filterBoard.length;
    }
    if (board[coordinate] !== "x" && board[coordinate] !== "shot") {
      if (board[coordinate] === "") {
        board.splice(coordinate, 1, "shot");
      } else {
        switch (board[coordinate]) {
          case "c":
            carrier.hit(damage("c"));
            break;
          case "b":
            battleship.hit(damage("b"));
            break;
          case "d":
            destroyer.hit(damage("d"));
            break;
          case "s":
            submarine.hit(damage("s"));
            break;
          case "p":
            patrol.hit(damage("p"));
            break;
    
          default:
            break;
        }
        board.splice(coordinate, 1, "x");
      }
    } else {
      throw new Error("Cannot attack the same square twice!");
    }
  }
  const legalPlacement = (arr, location, direction, shipLength) => {
    let locationStr = location.toString();
    const curr = arr[location];
    if (direction === 'horizontal') {
        if (parseInt(locationStr[locationStr.length - 1]) + shipLength <= 9) {
            for (let i = 0; i < shipLength; i++) {
                if (curr + arr[i] !== "") {
                    return false;

                } 
            }
            return true; 
        } else {
            return false;
        }
    } else {
      // check vertical placement
      if (location + shipLength * 10 <= 99) {
        for (let i = 0; i < shipLength; i++) {
          if (curr + arr[i * 10] !== "") {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }

  return {
    board,
    name,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrol,
    placeShip,
    receiveAttack,
    shipsSunk,
    legalPlacement
  };
};

export default gameBoard;
