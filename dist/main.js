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
  container.classList.add('grid-container');

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





var game = function () {
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
}();

game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEsV0FBVyxDQUFDekIsYUFBWixDQUEwQmtDLENBQUMsQ0FBQ2xCLE9BQUYsQ0FBVUMsRUFBcEM7QUFDQU8sUUFBQUEsT0FBTyxDQUFDSixNQUFSLEdBQWlCLElBQWpCO0FBQ0FNLFFBQUFBLFFBQVEsQ0FBQ04sTUFBVCxHQUFrQixLQUFsQjtBQUNILE9BSk0sTUFJQTtBQUNILGNBQU0sSUFBSTVCLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0g7QUFDSixLQVpEO0FBYUg7QUFDSixDQTlDWSxFQUFiOztBQWdEQStCLElBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC1nZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNvbnN0IGdhbWVCb2FyZCA9IChuYW1lKSA9PiB7XHJcbiAgbGV0IHNoaXBzU3VuayA9IGZhbHNlXHJcbiAgY29uc3QgYm9hcmQgPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcbiAgICBib2FyZC5wdXNoKFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBjYXJyaWVyID0gc2hpcCg1KTtcclxuICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcCg0KTtcclxuICBjb25zdCBkZXN0cm95ZXIgPSBzaGlwKDMpO1xyXG4gIGNvbnN0IHN1Ym1hcmluZSA9IHNoaXAoMyk7XHJcbiAgY29uc3QgcGF0cm9sID0gc2hpcCgyKTtcclxuICBjb25zdCBwbGFjZVNoaXAgPSAoZGlyZWN0aW9uLCBjb29yZGluYXRlLCBzaGlwKSA9PiB7XHJcbiAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwiXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2hpcHMgY2Fubm90IG92ZXJsYXAhXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGxldCBtYXJrZXI7XHJcbiAgICAgIHN3aXRjaCAoc2hpcCkge1xyXG4gICAgICAgIGNhc2UgY2FycmllcjpcclxuICAgICAgICAgIG1hcmtlciA9IFwiY1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBiYXR0bGVzaGlwOlxyXG4gICAgICAgICAgbWFya2VyID0gXCJiXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGRlc3Ryb3llcjpcclxuICAgICAgICAgIG1hcmtlciA9IFwiZFwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzdWJtYXJpbmU6XHJcbiAgICAgICAgICBtYXJrZXIgPSBcInNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgcGF0cm9sOlxyXG4gICAgICAgICAgbWFya2VyID0gXCJwXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XHJcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIHNoaXAgcGxhY2VtZW50IGRvZXMgbm90IGV4Y2VlZCBlZGdlIG9mIGdhbWVib2FyZFxyXG4gICAgICAgIGNvbnN0IGNvb3JkU3RyaW5nID0gY29vcmRpbmF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBhcnNlSW50KGNvb3JkU3RyaW5nW2Nvb3JkU3RyaW5nLmxlbmd0aCAtIDFdKSArIHNoaXAuaGVhbHRoLmxlbmd0aCA8PVxyXG4gICAgICAgICAgOVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhlYWx0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZC5zcGxpY2UoY29vcmRpbmF0ZSArIGksIDEsIG1hcmtlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgbW92ZS4gc2hpcCBjYW5ub3QgcGFzcyBlZGdlIG9mIGJvYXJkIVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gdmVydGljYWwgcGxhY2VtZW50XHJcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgKyBzaGlwLmhlYWx0aC5sZW5ndGggKiAxMCA8PSA5OSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhlYWx0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZC5zcGxpY2UoY29vcmRpbmF0ZSArIGkgKiAxMCwgMSwgbWFya2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBib2FyZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBtb3ZlLiBzaGlwIGNhbm5vdCBwYXNzIGVkZ2Ugb2YgYm9hcmQhXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBkYW1hZ2UobWFyaykge1xyXG4gICAgICBjb25zdCBmaWx0ZXJCb2FyZCA9IGJvYXJkLmZpbHRlcihsZXR0ZXIgPT4gbGV0dGVyID09PSBtYXJrKTtcclxuICAgICAgcmV0dXJuIGZpbHRlckJvYXJkLmxlbmd0aDtcclxuICAgIH1cclxuICAgIGlmIChib2FyZFtjb29yZGluYXRlXSAhPT0gXCJ4XCIgJiYgYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwic2hvdFwiKSB7XHJcbiAgICAgIGlmIChib2FyZFtjb29yZGluYXRlXSA9PT0gXCJcIikge1xyXG4gICAgICAgIGJvYXJkLnNwbGljZShjb29yZGluYXRlLCAxLCBcInNob3RcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3dpdGNoIChib2FyZFtjb29yZGluYXRlXSkge1xyXG4gICAgICAgICAgY2FzZSBcImNcIjpcclxuICAgICAgICAgICAgY2Fycmllci5oaXQoZGFtYWdlKFwiY1wiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImJcIjpcclxuICAgICAgICAgICAgYmF0dGxlc2hpcC5oaXQoZGFtYWdlKFwiYlwiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcImRcIjpcclxuICAgICAgICAgICAgZGVzdHJveWVyLmhpdChkYW1hZ2UoXCJkXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwic1wiOlxyXG4gICAgICAgICAgICBzdWJtYXJpbmUuaGl0KGRhbWFnZShcInNcIikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJwXCI6XHJcbiAgICAgICAgICAgIHBhdHJvbC5oaXQoZGFtYWdlKFwicFwiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBib2FyZC5zcGxpY2UoY29vcmRpbmF0ZSwgMSwgXCJ4XCIpO1xyXG4gICAgICAgIGlmIChiYXR0bGVzaGlwLmlzU3VuaygpICYmIGNhcnJpZXIuaXNTdW5rKCkgJiYgZGVzdHJveWVyLmlzU3VuaygpICYmIHN1Ym1hcmluZS5pc1N1bmsoKSAmJiBwYXRyb2wuaXNTdW5rKCkpIHtcclxuICAgICAgICAgIHNoaXBzU3VuayA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGF0dGFjayB0aGUgc2FtZSBzcXVhcmUgdHdpY2UhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBuYW1lLFxyXG4gICAgY2FycmllcixcclxuICAgIGJhdHRsZXNoaXAsXHJcbiAgICBkZXN0cm95ZXIsXHJcbiAgICBzdWJtYXJpbmUsXHJcbiAgICBwYXRyb2wsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgc2hpcHNTdW5rXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcclxuIiwiY29uc3QgZ3JpZEdlbiA9IChudW0pID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspe1xyXG4gICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcclxuICAgICAgICBncmlkLmRhdGFzZXQuaWQgPSBpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyaWRHZW47XHJcbiIsImNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgaXNUdXJuID0gZmFsc2U7XHJcbiAgICByZXR1cm4ge25hbWUsIGlzVHVybn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3QgaGVhbHRoID0gW107XHJcbiAgLy8gZmlsbCBoZWFsdGggYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBoZWFsdGgucHVzaChcIlwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBoZWFsdGguc3BsaWNlKG51bSAtIDEsIDEsIFwieFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiAhaGVhbHRoLmluY2x1ZGVzKFwiXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgaGVhbHRoLCBoaXQsIGlzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2IgZnJvbSAnLi9nYW1lYm9hcmQnO1xyXG5pbXBvcnQgc2hpcCBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgcGxheWVyIGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IGdyaWQgZnJvbSAnLi9ncmlkLWdlbic7XHJcblxyXG5jb25zdCBnYW1lID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHBsYXllcjEgPSBwbGF5ZXIocGxheWVyMSk7XHJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGdiKHBsYXllckJvYXJkKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyID0gcGxheWVyKGNvbXB1dGVyKTtcclxuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBnYihjb21wdXRlckJvYXJkKTtcclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XHJcbiAgICBkaXNwbGF5LmlkID0gJ2Rpc3BsYXknO1xyXG4gICAgZGlzcGxheS5hcHBlbmQoZ3JpZChwbGF5ZXJCb2FyZC5ib2FyZC5sZW5ndGgpLCBncmlkKGNvbXB1dGVyQm9hcmQuYm9hcmQubGVuZ3RoKSk7XHJcbiAgICAvLyB0ZW1wb3JhcmlseSBoYXJkY29kZSBzaGlwcyBpbnRvIHBsYWNlXHJcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAwLCBwbGF5ZXJCb2FyZC5jYXJyaWVyKTtcclxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDEwLCBwbGF5ZXJCb2FyZC5iYXR0bGVzaGlwKTtcclxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDIwLCBwbGF5ZXJCb2FyZC5kZXN0cm95ZXIpO1xyXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMzAsIHBsYXllckJvYXJkLnN1Ym1hcmluZSk7XHJcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCA0MCwgcGxheWVyQm9hcmQucGF0cm9sKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMCwgY29tcHV0ZXJCb2FyZC5jYXJyaWVyKTtcclxuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMTAsIGNvbXB1dGVyQm9hcmQuYmF0dGxlc2hpcCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDIwLCBjb21wdXRlckJvYXJkLmRlc3Ryb3llcik7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDMwLCBjb21wdXRlckJvYXJkLnN1Ym1hcmluZSk7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDQwLCBjb21wdXRlckJvYXJkLnBhdHJvbCk7XHJcbiAgICAvLyBtYWluIGxvb3BcclxuICAgIHdoaWxlKCFwbGF5ZXJCb2FyZC5zaGlwc1N1bmsgJiYgIWNvbXB1dGVyQm9hcmQuc2hpcHNTdW5rKSB7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY29tcHV0ZXItZ3JpZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHBsYXllckJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ3JpZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldCBmaXJzdCBwbGF5ZXIgdG8gbWFrZSBmaXJzdCBtb3ZlXHJcbiAgICAgICAgaWYgKCFwbGF5ZXIxLmlzVHVybiAmJiAhY29tcHV0ZXIuaXNUdXJuKSB7XHJcbiAgICAgICAgICAgIHBsYXllcjEuaXNUdXJuID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSAnY29tcHV0ZXItZ3JpZCcgJiYgcGxheWVyMS5pc1R1cm4pIHtcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhlLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMS5pc1R1cm4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVyLmlzVHVybiA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSAncGxheWVyLWdyaWQnICYmIGNvbXB1dGVyLmlzVHVybikge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhlLmRhdGFzZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyMS5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXIuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb21ldGhpbmcgd3Jvbmcgd2l0aCBldmVudCBsaXN0ZW5lclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZ2FtZSgpOyJdLCJuYW1lcyI6WyJzaGlwIiwiZ2FtZUJvYXJkIiwibmFtZSIsInNoaXBzU3VuayIsImJvYXJkIiwiaSIsInB1c2giLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImRlc3Ryb3llciIsInN1Ym1hcmluZSIsInBhdHJvbCIsInBsYWNlU2hpcCIsImRpcmVjdGlvbiIsImNvb3JkaW5hdGUiLCJFcnJvciIsIm1hcmtlciIsImNvb3JkU3RyaW5nIiwidG9TdHJpbmciLCJwYXJzZUludCIsImxlbmd0aCIsImhlYWx0aCIsInNwbGljZSIsInJlY2VpdmVBdHRhY2siLCJkYW1hZ2UiLCJtYXJrIiwiZmlsdGVyQm9hcmQiLCJmaWx0ZXIiLCJsZXR0ZXIiLCJoaXQiLCJpc1N1bmsiLCJncmlkR2VuIiwibnVtIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZ3JpZCIsImRhdGFzZXQiLCJpZCIsImFwcGVuZENoaWxkIiwicGxheWVyIiwiaXNUdXJuIiwiaW5jbHVkZXMiLCJnYiIsImdhbWUiLCJwbGF5ZXIxIiwicGxheWVyQm9hcmQiLCJjb21wdXRlciIsImNvbXB1dGVyQm9hcmQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9