/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


var gameBoard = function gameBoard(name) {
  var shipsSunk = false;
  var board = [];

  for (var i = 0; i < 100; i++) {
    board.push("");
  }

  var carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(5);
  var battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(4);
  var destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
  var submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(3);
  var patrol = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])(2);

  var placeShip = function placeShip(direction, coordinate, ship) {
    if (board[coordinate] !== "") {
      throw new Error("ships cannot overlap!");
    } else {
      var marker;

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
        var coordString = coordinate.toString();

        if (parseInt(coordString[coordString.length - 1]) + ship.health.length <= 9) {
          for (var _i = 0; _i < ship.health.length; _i++) {
            board.splice(coordinate + _i, 1, marker);
          }

          return board;
        } else {
          throw new Error("illegal move. ship cannot pass edge of board!");
        }
      } else {
        // vertical placement
        if (coordinate + ship.health.length * 10 <= 99) {
          for (var _i2 = 0; _i2 < ship.health.length; _i2++) {
            board.splice(coordinate + _i2 * 10, 1, marker);
          }

          return board;
        } else {
          throw new Error("illegal move. ship cannot pass edge of board!");
        }

        ;
      }

      ;
    }

    ;
  };

  var receiveAttack = function receiveAttack(coordinate) {
    function damage(mark) {
      var filterBoard = board.filter(function (letter) {
        return letter === mark;
      });
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

        if (battleship.isSunk() && carrier.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrol.isSunk()) {
          shipsSunk = true;
        }

        ;
      }
    } else {
      throw new Error("Cannot attack the same square twice!");
    }
  };

  return {
    board: board,
    name: name,
    carrier: carrier,
    battleship: battleship,
    destroyer: destroyer,
    submarine: submarine,
    patrol: patrol,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    shipsSunk: shipsSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);

/***/ }),

/***/ "./src/grid-gen.js":
/*!*************************!*\
  !*** ./src/grid-gen.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var gridGen = function gridGen(num) {
  var container = document.createElement('div');

  for (var i = 0; i < num; i++) {
    var grid = document.createElement('div');
    grid.classList.add('grid-item');
    grid.dataset.id = i;
    container.appendChild(grid);
  }

  ;
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gridGen);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var player = function player(name) {
  var isTurn = false;
  return {
    name: name,
    isTurn: isTurn
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ship(length) {
  var health = []; // fill health array

  for (var i = 0; i < length; i++) {
    health.push("");
  }

  ;

  var hit = function hit(num) {
    return health.splice(num - 1, 1, "x");
  };

  var isSunk = function isSunk() {
    return !health.includes("");
  };

  return {
    health: health,
    hit: hit,
    isSunk: isSunk
  };
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _grid_gen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid-gen */ "./src/grid-gen.js");





(function () {
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(player1);
  var playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(playerBoard);
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(computer);
  var computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(computerBoard);
  var display = document.createElement('div');
  document.body.appendChild(display);
  display.id = 'display';
  display.append((0,_grid_gen__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard.board.length), (0,_grid_gen__WEBPACK_IMPORTED_MODULE_3__["default"])(computerBoard.board.length)); // temporarily hardcode ships into place

  playerBoard.placeShip('horizontal', 0, playerBoard.carrier);
  playerBoard.placeShip('horizontal', 10, playerBoard.battleship);
  playerBoard.placeShip('horizontal', 20, playerBoard.destroyer);
  playerBoard.placeShip('horizontal', 30, playerBoard.submarine);
  playerBoard.placeShip('horizontal', 40, playerBoard.patrol);
  computerBoard.placeShip('horizontal', 0, computerBoard.carrier);
  computerBoard.placeShip('horizontal', 10, computerBoard.battleship);
  computerBoard.placeShip('horizontal', 20, computerBoard.destroyer);
  computerBoard.placeShip('horizontal', 30, computerBoard.submarine);
  computerBoard.placeShip('horizontal', 40, computerBoard.patrol); // main loop

  while (!playerBoard.shipsSunk && !computerBoard.shipsSunk) {
    computerBoard.board.forEach(function (item) {
      item.classList.add('computer-grid');
    });
    playerBoard.board.forEach(function (item) {
      item.classList.add('player-grid');
    }); // set first player to make first move

    if (!player1.isTurn && !computer.isTurn) {
      player1.isTurn = true;
    }

    document.addEventListener('click', function (e) {
      if (e.target && e.target.className === 'computer-grid' && player1.isTurn) {
        computerBoard.receiveAttack(e.dataset.id);
        player1.isTurn = false;
        computer.isTurn = true;
      } else if (e.target && e.target.className === 'player-grid' && computer.isTurn) {
        playerBoard.receiveAttack(e.dataset.id);
        player1.isTurn = true;
        computer.isTurn = false;
      } else {
        throw new Error("something wrong with event listener");
      }
    });
  }
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxDQUFDSCxNQUFSLEdBQWlCLElBQWpCO0FBQ0FLLFFBQUFBLFFBQVEsQ0FBQ0wsTUFBVCxHQUFrQixLQUFsQjtBQUNILE9BSk0sTUFJQTtBQUNILGNBQU0sSUFBSTVCLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0g7QUFDSixLQVpEO0FBYUg7QUFDSixDQTlDRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ncmlkLWdlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcFwiO1xyXG5cclxuY29uc3QgZ2FtZUJvYXJkID0gKG5hbWUpID0+IHtcclxuICBsZXQgc2hpcHNTdW5rID0gZmFsc2VcclxuICBjb25zdCBib2FyZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgIGJvYXJkLnB1c2goXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGNhcnJpZXIgPSBzaGlwKDUpO1xyXG4gIGNvbnN0IGJhdHRsZXNoaXAgPSBzaGlwKDQpO1xyXG4gIGNvbnN0IGRlc3Ryb3llciA9IHNoaXAoMyk7XHJcbiAgY29uc3Qgc3VibWFyaW5lID0gc2hpcCgzKTtcclxuICBjb25zdCBwYXRyb2wgPSBzaGlwKDIpO1xyXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChkaXJlY3Rpb24sIGNvb3JkaW5hdGUsIHNoaXApID0+IHtcclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSAhPT0gXCJcIikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzaGlwcyBjYW5ub3Qgb3ZlcmxhcCFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgbGV0IG1hcmtlcjtcclxuICAgICAgc3dpdGNoIChzaGlwKSB7XHJcbiAgICAgICAgY2FzZSBjYXJyaWVyOlxyXG4gICAgICAgICAgbWFya2VyID0gXCJjXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGJhdHRsZXNoaXA6XHJcbiAgICAgICAgICBtYXJrZXIgPSBcImJcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZGVzdHJveWVyOlxyXG4gICAgICAgICAgbWFya2VyID0gXCJkXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHN1Ym1hcmluZTpcclxuICAgICAgICAgIG1hcmtlciA9IFwic1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBwYXRyb2w6XHJcbiAgICAgICAgICBtYXJrZXIgPSBcInBcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcclxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgc2hpcCBwbGFjZW1lbnQgZG9lcyBub3QgZXhjZWVkIGVkZ2Ugb2YgZ2FtZWJvYXJkXHJcbiAgICAgICAgY29uc3QgY29vcmRTdHJpbmcgPSBjb29yZGluYXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcGFyc2VJbnQoY29vcmRTdHJpbmdbY29vcmRTdHJpbmcubGVuZ3RoIC0gMV0pICsgc2hpcC5oZWFsdGgubGVuZ3RoIDw9XHJcbiAgICAgICAgICA5XHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGVhbHRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLnNwbGljZShjb29yZGluYXRlICsgaSwgMSwgbWFya2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBib2FyZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBtb3ZlLiBzaGlwIGNhbm5vdCBwYXNzIGVkZ2Ugb2YgYm9hcmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyB2ZXJ0aWNhbCBwbGFjZW1lbnRcclxuICAgICAgICBpZiAoY29vcmRpbmF0ZSArIHNoaXAuaGVhbHRoLmxlbmd0aCAqIDEwIDw9IDk5KSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGVhbHRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkLnNwbGljZShjb29yZGluYXRlICsgaSAqIDEwLCAxLCBtYXJrZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIG1vdmUuIHNoaXAgY2Fubm90IHBhc3MgZWRnZSBvZiBib2FyZCFcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGUpID0+IHtcclxuICAgIGZ1bmN0aW9uIGRhbWFnZShtYXJrKSB7XHJcbiAgICAgIGNvbnN0IGZpbHRlckJvYXJkID0gYm9hcmQuZmlsdGVyKGxldHRlciA9PiBsZXR0ZXIgPT09IG1hcmspO1xyXG4gICAgICByZXR1cm4gZmlsdGVyQm9hcmQubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcInhcIiAmJiBib2FyZFtjb29yZGluYXRlXSAhPT0gXCJzaG90XCIpIHtcclxuICAgICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdID09PSBcIlwiKSB7XHJcbiAgICAgICAgYm9hcmQuc3BsaWNlKGNvb3JkaW5hdGUsIDEsIFwic2hvdFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGJvYXJkW2Nvb3JkaW5hdGVdKSB7XHJcbiAgICAgICAgICBjYXNlIFwiY1wiOlxyXG4gICAgICAgICAgICBjYXJyaWVyLmhpdChkYW1hZ2UoXCJjXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYlwiOlxyXG4gICAgICAgICAgICBiYXR0bGVzaGlwLmhpdChkYW1hZ2UoXCJiXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiZFwiOlxyXG4gICAgICAgICAgICBkZXN0cm95ZXIuaGl0KGRhbWFnZShcImRcIikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS5oaXQoZGFtYWdlKFwic1wiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInBcIjpcclxuICAgICAgICAgICAgcGF0cm9sLmhpdChkYW1hZ2UoXCJwXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGJvYXJkLnNwbGljZShjb29yZGluYXRlLCAxLCBcInhcIik7XHJcbiAgICAgICAgaWYgKGJhdHRsZXNoaXAuaXNTdW5rKCkgJiYgY2Fycmllci5pc1N1bmsoKSAmJiBkZXN0cm95ZXIuaXNTdW5rKCkgJiYgc3VibWFyaW5lLmlzU3VuaygpICYmIHBhdHJvbC5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgc2hpcHNTdW5rID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYXR0YWNrIHRoZSBzYW1lIHNxdWFyZSB0d2ljZSFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBib2FyZCxcclxuICAgIG5hbWUsXHJcbiAgICBjYXJyaWVyLFxyXG4gICAgYmF0dGxlc2hpcCxcclxuICAgIGRlc3Ryb3llcixcclxuICAgIHN1Ym1hcmluZSxcclxuICAgIHBhdHJvbCxcclxuICAgIHBsYWNlU2hpcCxcclxuICAgIHJlY2VpdmVBdHRhY2ssXHJcbiAgICBzaGlwc1N1bmtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2FtZUJvYXJkO1xyXG4iLCJjb25zdCBncmlkR2VuID0gKG51bSkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspe1xyXG4gICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcclxuICAgICAgICBncmlkLmRhdGFzZXQuaWQgPSBpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyaWRHZW47XHJcbiIsImNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgaXNUdXJuID0gZmFsc2U7XHJcbiAgICByZXR1cm4ge25hbWUsIGlzVHVybn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3QgaGVhbHRoID0gW107XHJcbiAgLy8gZmlsbCBoZWFsdGggYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBoZWFsdGgucHVzaChcIlwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBoZWFsdGguc3BsaWNlKG51bSAtIDEsIDEsIFwieFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiAhaGVhbHRoLmluY2x1ZGVzKFwiXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgaGVhbHRoLCBoaXQsIGlzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2IgZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IGdyaWQgZnJvbSAnLi9ncmlkLWdlbic7XHJcblxyXG4oKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllcihwbGF5ZXIxKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2IocGxheWVyQm9hcmQpO1xyXG4gICAgY29uc3QgY29tcHV0ZXIgPSBwbGF5ZXIoY29tcHV0ZXIpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGdiKGNvbXB1dGVyQm9hcmQpO1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5KTtcclxuICAgIGRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcbiAgICBkaXNwbGF5LmFwcGVuZChncmlkKHBsYXllckJvYXJkLmJvYXJkLmxlbmd0aCksIGdyaWQoY29tcHV0ZXJCb2FyZC5ib2FyZC5sZW5ndGgpKTtcclxuICAgIC8vIHRlbXBvcmFyaWx5IGhhcmRjb2RlIHNoaXBzIGludG8gcGxhY2VcclxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDAsIHBsYXllckJvYXJkLmNhcnJpZXIpO1xyXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMTAsIHBsYXllckJvYXJkLmJhdHRsZXNoaXApO1xyXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMjAsIHBsYXllckJvYXJkLmRlc3Ryb3llcik7XHJcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAzMCwgcGxheWVyQm9hcmQuc3VibWFyaW5lKTtcclxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDQwLCBwbGF5ZXJCb2FyZC5wYXRyb2wpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAwLCBjb21wdXRlckJvYXJkLmNhcnJpZXIpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAxMCwgY29tcHV0ZXJCb2FyZC5iYXR0bGVzaGlwKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMjAsIGNvbXB1dGVyQm9hcmQuZGVzdHJveWVyKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMzAsIGNvbXB1dGVyQm9hcmQuc3VibWFyaW5lKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgNDAsIGNvbXB1dGVyQm9hcmQucGF0cm9sKTtcclxuICAgIC8vIG1haW4gbG9vcFxyXG4gICAgd2hpbGUoIXBsYXllckJvYXJkLnNoaXBzU3VuayAmJiAhY29tcHV0ZXJCb2FyZC5zaGlwc1N1bmspIHtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ncmlkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQuYm9hcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1ncmlkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0IGZpcnN0IHBsYXllciB0byBtYWtlIGZpcnN0IG1vdmVcclxuICAgICAgICBpZiAoIXBsYXllcjEuaXNUdXJuICYmICFjb21wdXRlci5pc1R1cm4pIHtcclxuICAgICAgICAgICAgcGxheWVyMS5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdjb21wdXRlci1ncmlkJyAmJiBwbGF5ZXIxLmlzVHVybikge1xyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGUuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXIuaXNUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdwbGF5ZXItZ3JpZCcgJiYgY29tcHV0ZXIuaXNUdXJuKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGUuZGF0YXNldC5pZCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmlzVHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlci5pc1R1cm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNvbWV0aGluZyB3cm9uZyB3aXRoIGV2ZW50IGxpc3RlbmVyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKCk7Il0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJuYW1lIiwic2hpcHNTdW5rIiwiYm9hcmQiLCJpIiwicHVzaCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIiwicGxhY2VTaGlwIiwiZGlyZWN0aW9uIiwiY29vcmRpbmF0ZSIsIkVycm9yIiwibWFya2VyIiwiY29vcmRTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlSW50IiwibGVuZ3RoIiwiaGVhbHRoIiwic3BsaWNlIiwicmVjZWl2ZUF0dGFjayIsImRhbWFnZSIsIm1hcmsiLCJmaWx0ZXJCb2FyZCIsImZpbHRlciIsImxldHRlciIsImhpdCIsImlzU3VuayIsImdyaWRHZW4iLCJudW0iLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJncmlkIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXIiLCJpc1R1cm4iLCJpbmNsdWRlcyIsImdiIiwicGxheWVyMSIsInBsYXllckJvYXJkIiwiY29tcHV0ZXIiLCJjb21wdXRlckJvYXJkIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmQiLCJmb3JFYWNoIiwiaXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==