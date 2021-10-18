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
        board[coordinate].classList.add('miss');
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

        board[coordinate].classList.add('hit');
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n\r\n}\r\n\r\nbody{\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n\r\n.grid-container{\r\n    display: grid;\r\n    /* height: 25rem;\r\n    width: 25rem; */\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n    gap: 0;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n}\r\n\r\n.grid-item{\r\n    border: 2px solid black ;\r\n    height: 2rem;\r\n    width: 2rem;\r\n    margin: auto;\r\n}\r\n\r\n.ship{\r\n    background-color: gray;\r\n}\r\n\r\n.hit{\r\n    background-color: red;\r\n}\r\n\r\n.miss{\r\n    background-color: green;\r\n}\r\n\r\n#display{\r\n    display: flex;\r\n    height: 95vh;\r\n    width: 100%;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;AAEA;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb;mBACe;IACf,uCAAuC;IACvC,oCAAoC;IACpC,MAAM;IACN,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;AACf","sourcesContent":["* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n:root{\r\n\r\n}\r\n\r\nbody{\r\n    font-size: 16px;\r\n    text-align: center;\r\n}\r\n\r\n.grid-container{\r\n    display: grid;\r\n    /* height: 25rem;\r\n    width: 25rem; */\r\n    grid-template-columns: repeat(10, auto);\r\n    grid-template-rows: repeat(10, auto);\r\n    gap: 0;\r\n    justify-content: space-between;\r\n    margin: auto;\r\n}\r\n\r\n.grid-item{\r\n    border: 2px solid black ;\r\n    height: 2rem;\r\n    width: 2rem;\r\n    margin: auto;\r\n}\r\n\r\n.ship{\r\n    background-color: gray;\r\n}\r\n\r\n.hit{\r\n    background-color: red;\r\n}\r\n\r\n.miss{\r\n    background-color: green;\r\n}\r\n\r\n#display{\r\n    display: flex;\r\n    height: 95vh;\r\n    width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






var game = function () {
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(player1);
  var playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(playerBoard);
  var computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__["default"])(computer);
  var computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])(computerBoard);
  var display = document.createElement('div');
  document.body.appendChild(display);
  display.id = 'display';
  display.append((0,_grid_gen__WEBPACK_IMPORTED_MODULE_3__["default"])(playerBoard.board.length), (0,_grid_gen__WEBPACK_IMPORTED_MODULE_3__["default"])(computerBoard.board.length)); // WARNING: potential bug could arise here if number of display children changes

  var grid1 = display.firstChild;
  var grid2 = display.lastChild; // temporarily hardcode ships into place

  playerBoard.placeShip('horizontal', 0, playerBoard.carrier);
  playerBoard.placeShip('horizontal', 10, playerBoard.battleship);
  playerBoard.placeShip('horizontal', 20, playerBoard.destroyer);
  playerBoard.placeShip('horizontal', 30, playerBoard.submarine);
  playerBoard.placeShip('horizontal', 40, playerBoard.patrol);
  computerBoard.placeShip('horizontal', 0, computerBoard.carrier);
  computerBoard.placeShip('horizontal', 10, computerBoard.battleship);
  computerBoard.placeShip('horizontal', 20, computerBoard.destroyer);
  computerBoard.placeShip('horizontal', 30, computerBoard.submarine);
  computerBoard.placeShip('horizontal', 40, computerBoard.patrol);

  for (var i = 0; i < grid1.childNodes.length; i++) {
    grid1.childNodes[i].classList.add('player-grid');

    if (playerBoard.board[i] !== "") {
      grid1.childNodes[i].classList.add('ship');
    }
  }

  ;

  for (var _i = 0; _i < grid2.childNodes.length; _i++) {
    grid2.childNodes[_i].classList.add('computer-grid'); // temporarily display positions of computer ships for testing


    if (computerBoard.board[_i] !== "") {
      grid1.childNodes[_i].classList.add('ship');
    }
  }

  ; // main loop

  while (!playerBoard.shipsSunk && !computerBoard.shipsSunk) {
    // set first player to make first move
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
  } // test when exiting while loop


  console.log('game finished');
}();

game();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQVU7QUFDMUIsTUFBSUMsU0FBUyxHQUFHLEtBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCLEVBQThCO0FBQzVCRCxJQUFBQSxLQUFLLENBQUNFLElBQU4sQ0FBVyxFQUFYO0FBQ0Q7O0FBQ0QsTUFBTUMsT0FBTyxHQUFHUCxpREFBSSxDQUFDLENBQUQsQ0FBcEI7QUFDQSxNQUFNUSxVQUFVLEdBQUdSLGlEQUFJLENBQUMsQ0FBRCxDQUF2QjtBQUNBLE1BQU1TLFNBQVMsR0FBR1QsaURBQUksQ0FBQyxDQUFELENBQXRCO0FBQ0EsTUFBTVUsU0FBUyxHQUFHVixpREFBSSxDQUFDLENBQUQsQ0FBdEI7QUFDQSxNQUFNVyxNQUFNLEdBQUdYLGlEQUFJLENBQUMsQ0FBRCxDQUFuQjs7QUFDQSxNQUFNWSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQVlDLFVBQVosRUFBd0JkLElBQXhCLEVBQWlDO0FBQ2pELFFBQUlJLEtBQUssQ0FBQ1UsVUFBRCxDQUFMLEtBQXNCLEVBQTFCLEVBQThCO0FBQzVCLFlBQU0sSUFBSUMsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDRCxLQUZELE1BRU87QUFFTCxVQUFJQyxNQUFKOztBQUNBLGNBQVFoQixJQUFSO0FBQ0UsYUFBS08sT0FBTDtBQUNFUyxVQUFBQSxNQUFNLEdBQUcsR0FBVDtBQUNBOztBQUNGLGFBQUtSLFVBQUw7QUFDRVEsVUFBQUEsTUFBTSxHQUFHLEdBQVQ7QUFDQTs7QUFDRixhQUFLUCxTQUFMO0FBQ0VPLFVBQUFBLE1BQU0sR0FBRyxHQUFUO0FBQ0E7O0FBQ0YsYUFBS04sU0FBTDtBQUNFTSxVQUFBQSxNQUFNLEdBQUcsR0FBVDtBQUNBOztBQUNGLGFBQUtMLE1BQUw7QUFDRUssVUFBQUEsTUFBTSxHQUFHLEdBQVQ7QUFDQTs7QUFFRjtBQUNFO0FBbEJKOztBQW9CQSxVQUFJSCxTQUFTLEtBQUssWUFBbEIsRUFBZ0M7QUFDOUI7QUFDQSxZQUFNSSxXQUFXLEdBQUdILFVBQVUsQ0FBQ0ksUUFBWCxFQUFwQjs7QUFDQSxZQUNFQyxRQUFRLENBQUNGLFdBQVcsQ0FBQ0EsV0FBVyxDQUFDRyxNQUFaLEdBQXFCLENBQXRCLENBQVosQ0FBUixHQUFnRHBCLElBQUksQ0FBQ3FCLE1BQUwsQ0FBWUQsTUFBNUQsSUFDQSxDQUZGLEVBR0U7QUFDQSxlQUFLLElBQUlmLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdMLElBQUksQ0FBQ3FCLE1BQUwsQ0FBWUQsTUFBaEMsRUFBd0NmLEVBQUMsRUFBekMsRUFBNkM7QUFDM0NELFlBQUFBLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYVIsVUFBVSxHQUFHVCxFQUExQixFQUE2QixDQUE3QixFQUFnQ1csTUFBaEM7QUFDRDs7QUFDRCxpQkFBT1osS0FBUDtBQUNELFNBUkQsTUFRTztBQUNMLGdCQUFNLElBQUlXLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0Q7QUFDRixPQWRELE1BY087QUFDTDtBQUNBLFlBQUlELFVBQVUsR0FBR2QsSUFBSSxDQUFDcUIsTUFBTCxDQUFZRCxNQUFaLEdBQXFCLEVBQWxDLElBQXdDLEVBQTVDLEVBQWdEO0FBQzlDLGVBQUssSUFBSWYsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR0wsSUFBSSxDQUFDcUIsTUFBTCxDQUFZRCxNQUFoQyxFQUF3Q2YsR0FBQyxFQUF6QyxFQUE2QztBQUMzQ0QsWUFBQUEsS0FBSyxDQUFDa0IsTUFBTixDQUFhUixVQUFVLEdBQUdULEdBQUMsR0FBRyxFQUE5QixFQUFrQyxDQUFsQyxFQUFxQ1csTUFBckM7QUFDRDs7QUFDRCxpQkFBT1osS0FBUDtBQUNELFNBTEQsTUFLTztBQUNMLGdCQUFNLElBQUlXLEtBQUosQ0FBVSwrQ0FBVixDQUFOO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTtBQUNGOztBQUFBO0FBQ0YsR0FwREQ7O0FBcURBLE1BQU1RLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ1QsVUFBRCxFQUFnQjtBQUNwQyxhQUFTVSxNQUFULENBQWdCQyxJQUFoQixFQUFzQjtBQUNwQixVQUFNQyxXQUFXLEdBQUd0QixLQUFLLENBQUN1QixNQUFOLENBQWEsVUFBQUMsTUFBTTtBQUFBLGVBQUlBLE1BQU0sS0FBS0gsSUFBZjtBQUFBLE9BQW5CLENBQXBCO0FBQ0EsYUFBT0MsV0FBVyxDQUFDTixNQUFuQjtBQUNEOztBQUNELFFBQUloQixLQUFLLENBQUNVLFVBQUQsQ0FBTCxLQUFzQixHQUF0QixJQUE2QlYsS0FBSyxDQUFDVSxVQUFELENBQUwsS0FBc0IsTUFBdkQsRUFBK0Q7QUFDN0QsVUFBSVYsS0FBSyxDQUFDVSxVQUFELENBQUwsS0FBc0IsRUFBMUIsRUFBOEI7QUFDNUJWLFFBQUFBLEtBQUssQ0FBQ1UsVUFBRCxDQUFMLENBQWtCZSxTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsTUFBaEM7QUFDQTFCLFFBQUFBLEtBQUssQ0FBQ2tCLE1BQU4sQ0FBYVIsVUFBYixFQUF5QixDQUF6QixFQUE0QixNQUE1QjtBQUNELE9BSEQsTUFHTztBQUNMLGdCQUFRVixLQUFLLENBQUNVLFVBQUQsQ0FBYjtBQUNFLGVBQUssR0FBTDtBQUNFUCxZQUFBQSxPQUFPLENBQUN3QixHQUFSLENBQVlQLE1BQU0sQ0FBQyxHQUFELENBQWxCO0FBQ0E7O0FBQ0YsZUFBSyxHQUFMO0FBQ0VoQixZQUFBQSxVQUFVLENBQUN1QixHQUFYLENBQWVQLE1BQU0sQ0FBQyxHQUFELENBQXJCO0FBQ0E7O0FBQ0YsZUFBSyxHQUFMO0FBQ0VmLFlBQUFBLFNBQVMsQ0FBQ3NCLEdBQVYsQ0FBY1AsTUFBTSxDQUFDLEdBQUQsQ0FBcEI7QUFDQTs7QUFDRixlQUFLLEdBQUw7QUFDRWQsWUFBQUEsU0FBUyxDQUFDcUIsR0FBVixDQUFjUCxNQUFNLENBQUMsR0FBRCxDQUFwQjtBQUNBOztBQUNGLGVBQUssR0FBTDtBQUNFYixZQUFBQSxNQUFNLENBQUNvQixHQUFQLENBQVdQLE1BQU0sQ0FBQyxHQUFELENBQWpCO0FBQ0E7O0FBRUY7QUFDRTtBQWxCSjs7QUFxQkFwQixRQUFBQSxLQUFLLENBQUNVLFVBQUQsQ0FBTCxDQUFrQmUsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLEtBQWhDO0FBQ0ExQixRQUFBQSxLQUFLLENBQUNrQixNQUFOLENBQWFSLFVBQWIsRUFBeUIsQ0FBekIsRUFBNEIsR0FBNUI7O0FBQ0EsWUFBSU4sVUFBVSxDQUFDd0IsTUFBWCxNQUF1QnpCLE9BQU8sQ0FBQ3lCLE1BQVIsRUFBdkIsSUFBMkN2QixTQUFTLENBQUN1QixNQUFWLEVBQTNDLElBQWlFdEIsU0FBUyxDQUFDc0IsTUFBVixFQUFqRSxJQUF1RnJCLE1BQU0sQ0FBQ3FCLE1BQVAsRUFBM0YsRUFBNEc7QUFDMUc3QixVQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNEOztBQUFBO0FBQ0Y7QUFDRixLQWhDRCxNQWdDTztBQUNMLFlBQU0sSUFBSVksS0FBSixDQUFVLHNDQUFWLENBQU47QUFDRDtBQUNGLEdBeENEOztBQXlDQSxTQUFPO0FBQ0xYLElBQUFBLEtBQUssRUFBTEEsS0FESztBQUVMRixJQUFBQSxJQUFJLEVBQUpBLElBRks7QUFHTEssSUFBQUEsT0FBTyxFQUFQQSxPQUhLO0FBSUxDLElBQUFBLFVBQVUsRUFBVkEsVUFKSztBQUtMQyxJQUFBQSxTQUFTLEVBQVRBLFNBTEs7QUFNTEMsSUFBQUEsU0FBUyxFQUFUQSxTQU5LO0FBT0xDLElBQUFBLE1BQU0sRUFBTkEsTUFQSztBQVFMQyxJQUFBQSxTQUFTLEVBQVRBLFNBUks7QUFTTFcsSUFBQUEsYUFBYSxFQUFiQSxhQVRLO0FBVUxwQixJQUFBQSxTQUFTLEVBQVRBO0FBVkssR0FBUDtBQVlELENBckhEOztBQXVIQSxpRUFBZUYsU0FBZjs7Ozs7Ozs7Ozs7Ozs7QUN6SEEsSUFBTWdDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQsRUFBUztBQUNyQixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFsQjtBQUNBRixFQUFBQSxTQUFTLENBQUNOLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLGdCQUF4Qjs7QUFDQSxPQUFJLElBQUl6QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUc2QixHQUFuQixFQUF3QjdCLENBQUMsRUFBekIsRUFBNEI7QUFDeEIsUUFBSWlDLElBQUksR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQUMsSUFBQUEsSUFBSSxDQUFDVCxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsV0FBbkI7QUFDQVEsSUFBQUEsSUFBSSxDQUFDQyxPQUFMLENBQWFDLEVBQWIsR0FBa0JuQyxDQUFsQjtBQUNBOEIsSUFBQUEsU0FBUyxDQUFDTSxXQUFWLENBQXNCSCxJQUF0QjtBQUVIOztBQUFBO0FBQ0QsU0FBT0gsU0FBUDtBQUNILENBWEQ7O0FBYUEsaUVBQWVGLE9BQWY7Ozs7Ozs7Ozs7Ozs7O0FDYkEsSUFBTVMsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ3hDLElBQUQsRUFBVTtBQUNyQixNQUFJeUMsTUFBTSxHQUFHLEtBQWI7QUFDQSxTQUFPO0FBQUN6QyxJQUFBQSxJQUFJLEVBQUpBLElBQUQ7QUFBT3lDLElBQUFBLE1BQU0sRUFBTkE7QUFBUCxHQUFQO0FBQ0gsQ0FIRDs7QUFLQSxpRUFBZUQsTUFBZjs7Ozs7Ozs7Ozs7Ozs7QUNMQSxTQUFTMUMsSUFBVCxDQUFjb0IsTUFBZCxFQUFzQjtBQUNwQixNQUFNQyxNQUFNLEdBQUcsRUFBZixDQURvQixDQUVwQjs7QUFDQSxPQUFLLElBQUloQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZSxNQUFwQixFQUE0QmYsQ0FBQyxFQUE3QixFQUFpQztBQUMvQmdCLElBQUFBLE1BQU0sQ0FBQ2YsSUFBUCxDQUFZLEVBQVo7QUFDRDs7QUFBQTs7QUFDRCxNQUFNeUIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0csR0FBRCxFQUFTO0FBQ25CLFdBQU9iLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjWSxHQUFHLEdBQUcsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsQ0FBUDtBQUNELEdBRkQ7O0FBR0EsTUFBTUYsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNuQixXQUFPLENBQUNYLE1BQU0sQ0FBQ3VCLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBUjtBQUNELEdBRkQ7O0FBR0EsU0FBTztBQUFFdkIsSUFBQUEsTUFBTSxFQUFOQSxNQUFGO0FBQVVVLElBQUFBLEdBQUcsRUFBSEEsR0FBVjtBQUFlQyxJQUFBQSxNQUFNLEVBQU5BO0FBQWYsR0FBUDtBQUNEOztBQUFBO0FBRUQsaUVBQWVoQyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsNkNBQTZDLG1CQUFtQixrQkFBa0IsK0JBQStCLEtBQUssY0FBYyxTQUFTLGFBQWEsd0JBQXdCLDJCQUEyQixLQUFLLHdCQUF3QixzQkFBc0IseUJBQXlCLHNCQUFzQixrREFBa0QsNkNBQTZDLGVBQWUsdUNBQXVDLHFCQUFxQixLQUFLLG1CQUFtQixpQ0FBaUMscUJBQXFCLG9CQUFvQixxQkFBcUIsS0FBSyxjQUFjLCtCQUErQixLQUFLLGFBQWEsOEJBQThCLEtBQUssY0FBYyxnQ0FBZ0MsS0FBSyxpQkFBaUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsS0FBSyxlQUFlLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSw0QkFBNEIsbUJBQW1CLGtCQUFrQiwrQkFBK0IsS0FBSyxjQUFjLFNBQVMsYUFBYSx3QkFBd0IsMkJBQTJCLEtBQUssd0JBQXdCLHNCQUFzQix5QkFBeUIsc0JBQXNCLGtEQUFrRCw2Q0FBNkMsZUFBZSx1Q0FBdUMscUJBQXFCLEtBQUssbUJBQW1CLGlDQUFpQyxxQkFBcUIsb0JBQW9CLHFCQUFxQixLQUFLLGNBQWMsK0JBQStCLEtBQUssYUFBYSw4QkFBOEIsS0FBSyxjQUFjLGdDQUFnQyxLQUFLLGlCQUFpQixzQkFBc0IscUJBQXFCLG9CQUFvQixLQUFLLDJCQUEyQjtBQUMxakU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLHNCQUFzQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU04QyxJQUFJLEdBQUksWUFBTTtBQUNoQixNQUFNQyxPQUFPLEdBQUdMLG1EQUFNLENBQUNLLE9BQUQsQ0FBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdILHNEQUFFLENBQUNHLFdBQUQsQ0FBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdQLG1EQUFNLENBQUNPLFFBQUQsQ0FBdkI7QUFDQSxNQUFNQyxhQUFhLEdBQUdMLHNEQUFFLENBQUNLLGFBQUQsQ0FBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdmLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQjtBQUNBRCxFQUFBQSxRQUFRLENBQUNnQixJQUFULENBQWNYLFdBQWQsQ0FBMEJVLE9BQTFCO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ1gsRUFBUixHQUFhLFNBQWI7QUFDQVcsRUFBQUEsT0FBTyxDQUFDRSxNQUFSLENBQWVmLHFEQUFJLENBQUNVLFdBQVcsQ0FBQzVDLEtBQVosQ0FBa0JnQixNQUFuQixDQUFuQixFQUErQ2tCLHFEQUFJLENBQUNZLGFBQWEsQ0FBQzlDLEtBQWQsQ0FBb0JnQixNQUFyQixDQUFuRCxFQVJnQixDQVNoQjs7QUFDQSxNQUFNa0MsS0FBSyxHQUFHSCxPQUFPLENBQUNJLFVBQXRCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHTCxPQUFPLENBQUNNLFNBQXRCLENBWGdCLENBWWhCOztBQUNBVCxFQUFBQSxXQUFXLENBQUNwQyxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLENBQXBDLEVBQXVDb0MsV0FBVyxDQUFDekMsT0FBbkQ7QUFDQXlDLEVBQUFBLFdBQVcsQ0FBQ3BDLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsRUFBcEMsRUFBd0NvQyxXQUFXLENBQUN4QyxVQUFwRDtBQUNBd0MsRUFBQUEsV0FBVyxDQUFDcEMsU0FBWixDQUFzQixZQUF0QixFQUFvQyxFQUFwQyxFQUF3Q29DLFdBQVcsQ0FBQ3ZDLFNBQXBEO0FBQ0F1QyxFQUFBQSxXQUFXLENBQUNwQyxTQUFaLENBQXNCLFlBQXRCLEVBQW9DLEVBQXBDLEVBQXdDb0MsV0FBVyxDQUFDdEMsU0FBcEQ7QUFDQXNDLEVBQUFBLFdBQVcsQ0FBQ3BDLFNBQVosQ0FBc0IsWUFBdEIsRUFBb0MsRUFBcEMsRUFBd0NvQyxXQUFXLENBQUNyQyxNQUFwRDtBQUNBdUMsRUFBQUEsYUFBYSxDQUFDdEMsU0FBZCxDQUF3QixZQUF4QixFQUFzQyxDQUF0QyxFQUF5Q3NDLGFBQWEsQ0FBQzNDLE9BQXZEO0FBQ0EyQyxFQUFBQSxhQUFhLENBQUN0QyxTQUFkLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDLEVBQTBDc0MsYUFBYSxDQUFDMUMsVUFBeEQ7QUFDQTBDLEVBQUFBLGFBQWEsQ0FBQ3RDLFNBQWQsQ0FBd0IsWUFBeEIsRUFBc0MsRUFBdEMsRUFBMENzQyxhQUFhLENBQUN6QyxTQUF4RDtBQUNBeUMsRUFBQUEsYUFBYSxDQUFDdEMsU0FBZCxDQUF3QixZQUF4QixFQUFzQyxFQUF0QyxFQUEwQ3NDLGFBQWEsQ0FBQ3hDLFNBQXhEO0FBQ0F3QyxFQUFBQSxhQUFhLENBQUN0QyxTQUFkLENBQXdCLFlBQXhCLEVBQXNDLEVBQXRDLEVBQTBDc0MsYUFBYSxDQUFDdkMsTUFBeEQ7O0FBQ0EsT0FBSyxJQUFJTixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsS0FBSyxDQUFDSSxVQUFOLENBQWlCdEMsTUFBckMsRUFBNkNmLENBQUMsRUFBOUMsRUFBa0Q7QUFDOUNpRCxJQUFBQSxLQUFLLENBQUNJLFVBQU4sQ0FBaUJyRCxDQUFqQixFQUFvQndCLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxhQUFsQzs7QUFDQSxRQUFJa0IsV0FBVyxDQUFDNUMsS0FBWixDQUFrQkMsQ0FBbEIsTUFBeUIsRUFBN0IsRUFBaUM7QUFDN0JpRCxNQUFBQSxLQUFLLENBQUNJLFVBQU4sQ0FBaUJyRCxDQUFqQixFQUFvQndCLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxNQUFsQztBQUNIO0FBQ0o7O0FBQUE7O0FBQ0QsT0FBSyxJQUFJekIsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR21ELEtBQUssQ0FBQ0UsVUFBTixDQUFpQnRDLE1BQXJDLEVBQTZDZixFQUFDLEVBQTlDLEVBQWtEO0FBQzlDbUQsSUFBQUEsS0FBSyxDQUFDRSxVQUFOLENBQWlCckQsRUFBakIsRUFBb0J3QixTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0MsZUFBbEMsRUFEOEMsQ0FFOUM7OztBQUNBLFFBQUlvQixhQUFhLENBQUM5QyxLQUFkLENBQW9CQyxFQUFwQixNQUEyQixFQUEvQixFQUFtQztBQUMvQmlELE1BQUFBLEtBQUssQ0FBQ0ksVUFBTixDQUFpQnJELEVBQWpCLEVBQW9Cd0IsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLE1BQWxDO0FBQ0g7QUFFSjs7QUFBQSxHQXBDZSxDQXFDaEI7O0FBQ0EsU0FBTSxDQUFDa0IsV0FBVyxDQUFDN0MsU0FBYixJQUEwQixDQUFDK0MsYUFBYSxDQUFDL0MsU0FBL0MsRUFBMEQ7QUFDdEQ7QUFDQSxRQUFJLENBQUM0QyxPQUFPLENBQUNKLE1BQVQsSUFBbUIsQ0FBQ00sUUFBUSxDQUFDTixNQUFqQyxFQUF5QztBQUNyQ0ksTUFBQUEsT0FBTyxDQUFDSixNQUFSLEdBQWlCLElBQWpCO0FBQ0g7O0FBQ0RQLElBQUFBLFFBQVEsQ0FBQ3VCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN0QyxVQUFJQSxDQUFDLENBQUNDLE1BQUYsSUFBWUQsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLFNBQVQsS0FBdUIsZUFBbkMsSUFBc0RmLE9BQU8sQ0FBQ0osTUFBbEUsRUFBMEU7QUFDdEVPLFFBQUFBLGFBQWEsQ0FBQzNCLGFBQWQsQ0FBNEJxQyxDQUFDLENBQUNyQixPQUFGLENBQVVDLEVBQXRDO0FBQ0FPLFFBQUFBLE9BQU8sQ0FBQ0osTUFBUixHQUFpQixLQUFqQjtBQUNBTSxRQUFBQSxRQUFRLENBQUNOLE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxPQUpELE1BSU8sSUFBSWlCLENBQUMsQ0FBQ0MsTUFBRixJQUFZRCxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsU0FBVCxLQUF1QixhQUFuQyxJQUFvRGIsUUFBUSxDQUFDTixNQUFqRSxFQUF5RTtBQUM1RUssUUFBQUEsV0FBVyxDQUFDekIsYUFBWixDQUEwQnFDLENBQUMsQ0FBQ3JCLE9BQUYsQ0FBVUMsRUFBcEM7QUFDQU8sUUFBQUEsT0FBTyxDQUFDSixNQUFSLEdBQWlCLElBQWpCO0FBQ0FNLFFBQUFBLFFBQVEsQ0FBQ04sTUFBVCxHQUFrQixLQUFsQjtBQUNILE9BSk0sTUFJQTtBQUNILGNBQU0sSUFBSTVCLEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0g7QUFDSixLQVpEO0FBYUgsR0F4RGUsQ0F5RGhCOzs7QUFDQWdELEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSCxDQTNEWSxFQUFiOztBQTZEQWxCLElBQUksRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ3JpZC1nZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jb25zdCBnYW1lQm9hcmQgPSAobmFtZSkgPT4ge1xyXG4gIGxldCBzaGlwc1N1bmsgPSBmYWxzZVxyXG4gIGNvbnN0IGJvYXJkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG4gICAgYm9hcmQucHVzaChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY2FycmllciA9IHNoaXAoNSk7XHJcbiAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXAoNCk7XHJcbiAgY29uc3QgZGVzdHJveWVyID0gc2hpcCgzKTtcclxuICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwKDMpO1xyXG4gIGNvbnN0IHBhdHJvbCA9IHNoaXAoMik7XHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKGRpcmVjdGlvbiwgY29vcmRpbmF0ZSwgc2hpcCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcIlwiKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInNoaXBzIGNhbm5vdCBvdmVybGFwIVwiKTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBsZXQgbWFya2VyO1xyXG4gICAgICBzd2l0Y2ggKHNoaXApIHtcclxuICAgICAgICBjYXNlIGNhcnJpZXI6XHJcbiAgICAgICAgICBtYXJrZXIgPSBcImNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgYmF0dGxlc2hpcDpcclxuICAgICAgICAgIG1hcmtlciA9IFwiYlwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBkZXN0cm95ZXI6XHJcbiAgICAgICAgICBtYXJrZXIgPSBcImRcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc3VibWFyaW5lOlxyXG4gICAgICAgICAgbWFya2VyID0gXCJzXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHBhdHJvbDpcclxuICAgICAgICAgIG1hcmtlciA9IFwicFwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xyXG4gICAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiBzaGlwIHBsYWNlbWVudCBkb2VzIG5vdCBleGNlZWQgZWRnZSBvZiBnYW1lYm9hcmRcclxuICAgICAgICBjb25zdCBjb29yZFN0cmluZyA9IGNvb3JkaW5hdGUudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBwYXJzZUludChjb29yZFN0cmluZ1tjb29yZFN0cmluZy5sZW5ndGggLSAxXSkgKyBzaGlwLmhlYWx0aC5sZW5ndGggPD1cclxuICAgICAgICAgIDlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oZWFsdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmQuc3BsaWNlKGNvb3JkaW5hdGUgKyBpLCAxLCBtYXJrZXIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIG1vdmUuIHNoaXAgY2Fubm90IHBhc3MgZWRnZSBvZiBib2FyZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHZlcnRpY2FsIHBsYWNlbWVudFxyXG4gICAgICAgIGlmIChjb29yZGluYXRlICsgc2hpcC5oZWFsdGgubGVuZ3RoICogMTAgPD0gOTkpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oZWFsdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmQuc3BsaWNlKGNvb3JkaW5hdGUgKyBpICogMTAsIDEsIG1hcmtlcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgbW92ZS4gc2hpcCBjYW5ub3QgcGFzcyBlZGdlIG9mIGJvYXJkIVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gZGFtYWdlKG1hcmspIHtcclxuICAgICAgY29uc3QgZmlsdGVyQm9hcmQgPSBib2FyZC5maWx0ZXIobGV0dGVyID0+IGxldHRlciA9PT0gbWFyayk7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJCb2FyZC5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gIT09IFwieFwiICYmIGJvYXJkW2Nvb3JkaW5hdGVdICE9PSBcInNob3RcIikge1xyXG4gICAgICBpZiAoYm9hcmRbY29vcmRpbmF0ZV0gPT09IFwiXCIpIHtcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XHJcbiAgICAgICAgYm9hcmQuc3BsaWNlKGNvb3JkaW5hdGUsIDEsIFwic2hvdFwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzd2l0Y2ggKGJvYXJkW2Nvb3JkaW5hdGVdKSB7XHJcbiAgICAgICAgICBjYXNlIFwiY1wiOlxyXG4gICAgICAgICAgICBjYXJyaWVyLmhpdChkYW1hZ2UoXCJjXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiYlwiOlxyXG4gICAgICAgICAgICBiYXR0bGVzaGlwLmhpdChkYW1hZ2UoXCJiXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlIFwiZFwiOlxyXG4gICAgICAgICAgICBkZXN0cm95ZXIuaGl0KGRhbWFnZShcImRcIikpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJzXCI6XHJcbiAgICAgICAgICAgIHN1Ym1hcmluZS5oaXQoZGFtYWdlKFwic1wiKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInBcIjpcclxuICAgICAgICAgICAgcGF0cm9sLmhpdChkYW1hZ2UoXCJwXCIpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICBcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBib2FyZFtjb29yZGluYXRlXS5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcclxuICAgICAgICBib2FyZC5zcGxpY2UoY29vcmRpbmF0ZSwgMSwgXCJ4XCIpO1xyXG4gICAgICAgIGlmIChiYXR0bGVzaGlwLmlzU3VuaygpICYmIGNhcnJpZXIuaXNTdW5rKCkgJiYgZGVzdHJveWVyLmlzU3VuaygpICYmIHN1Ym1hcmluZS5pc1N1bmsoKSAmJiBwYXRyb2wuaXNTdW5rKCkpIHtcclxuICAgICAgICAgIHNoaXBzU3VuayA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGF0dGFjayB0aGUgc2FtZSBzcXVhcmUgdHdpY2UhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgYm9hcmQsXHJcbiAgICBuYW1lLFxyXG4gICAgY2FycmllcixcclxuICAgIGJhdHRsZXNoaXAsXHJcbiAgICBkZXN0cm95ZXIsXHJcbiAgICBzdWJtYXJpbmUsXHJcbiAgICBwYXRyb2wsXHJcbiAgICBwbGFjZVNoaXAsXHJcbiAgICByZWNlaXZlQXR0YWNrLFxyXG4gICAgc2hpcHNTdW5rXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdhbWVCb2FyZDtcclxuIiwiY29uc3QgZ3JpZEdlbiA9IChudW0pID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspe1xyXG4gICAgICAgIGxldCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcclxuICAgICAgICBncmlkLmRhdGFzZXQuaWQgPSBpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcclxuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdyaWRHZW47XHJcbiIsImNvbnN0IHBsYXllciA9IChuYW1lKSA9PiB7XHJcbiAgICBsZXQgaXNUdXJuID0gZmFsc2U7XHJcbiAgICByZXR1cm4ge25hbWUsIGlzVHVybn1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGxheWVyOyIsImZ1bmN0aW9uIHNoaXAobGVuZ3RoKSB7XHJcbiAgY29uc3QgaGVhbHRoID0gW107XHJcbiAgLy8gZmlsbCBoZWFsdGggYXJyYXlcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBoZWFsdGgucHVzaChcIlwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGhpdCA9IChudW0pID0+IHtcclxuICAgIHJldHVybiBoZWFsdGguc3BsaWNlKG51bSAtIDEsIDEsIFwieFwiKTtcclxuICB9O1xyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiAhaGVhbHRoLmluY2x1ZGVzKFwiXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHsgaGVhbHRoLCBoaXQsIGlzU3VuayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hpcDtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLyogaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDI1cmVtOyAqL1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbXtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2sgO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaGlwe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5taXNze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogOTV2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7bUJBQ2U7SUFDZix1Q0FBdUM7SUFDdkMsb0NBQW9DO0lBQ3BDLE1BQU07SUFDTiw4QkFBOEI7SUFDOUIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ncmlkLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgLyogaGVpZ2h0OiAyNXJlbTtcXHJcXG4gICAgd2lkdGg6IDI1cmVtOyAqL1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBhdXRvKTtcXHJcXG4gICAgZ2FwOiAwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWQtaXRlbXtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2sgO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zaGlwe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5taXNze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2Rpc3BsYXl7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogOTV2aDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdiIGZyb20gJy4vZ2FtZWJvYXJkJztcclxuaW1wb3J0IHNoaXAgZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHBsYXllciBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCBncmlkIGZyb20gJy4vZ3JpZC1nZW4nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgcGxheWVyMSA9IHBsYXllcihwbGF5ZXIxKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZ2IocGxheWVyQm9hcmQpO1xyXG4gICAgY29uc3QgY29tcHV0ZXIgPSBwbGF5ZXIoY29tcHV0ZXIpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGdiKGNvbXB1dGVyQm9hcmQpO1xyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5KTtcclxuICAgIGRpc3BsYXkuaWQgPSAnZGlzcGxheSc7XHJcbiAgICBkaXNwbGF5LmFwcGVuZChncmlkKHBsYXllckJvYXJkLmJvYXJkLmxlbmd0aCksIGdyaWQoY29tcHV0ZXJCb2FyZC5ib2FyZC5sZW5ndGgpKTtcclxuICAgIC8vIFdBUk5JTkc6IHBvdGVudGlhbCBidWcgY291bGQgYXJpc2UgaGVyZSBpZiBudW1iZXIgb2YgZGlzcGxheSBjaGlsZHJlbiBjaGFuZ2VzXHJcbiAgICBjb25zdCBncmlkMSA9IGRpc3BsYXkuZmlyc3RDaGlsZFxyXG4gICAgY29uc3QgZ3JpZDIgPSBkaXNwbGF5Lmxhc3RDaGlsZFxyXG4gICAgLy8gdGVtcG9yYXJpbHkgaGFyZGNvZGUgc2hpcHMgaW50byBwbGFjZVxyXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgMCwgcGxheWVyQm9hcmQuY2Fycmllcik7XHJcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAxMCwgcGxheWVyQm9hcmQuYmF0dGxlc2hpcCk7XHJcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAyMCwgcGxheWVyQm9hcmQuZGVzdHJveWVyKTtcclxuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDMwLCBwbGF5ZXJCb2FyZC5zdWJtYXJpbmUpO1xyXG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKCdob3Jpem9udGFsJywgNDAsIHBsYXllckJvYXJkLnBhdHJvbCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDAsIGNvbXB1dGVyQm9hcmQuY2Fycmllcik7XHJcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgnaG9yaXpvbnRhbCcsIDEwLCBjb21wdXRlckJvYXJkLmJhdHRsZXNoaXApO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAyMCwgY29tcHV0ZXJCb2FyZC5kZXN0cm95ZXIpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCAzMCwgY29tcHV0ZXJCb2FyZC5zdWJtYXJpbmUpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoJ2hvcml6b250YWwnLCA0MCwgY29tcHV0ZXJCb2FyZC5wYXRyb2wpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkMS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZDEuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZ3JpZCcpO1xyXG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5ib2FyZFtpXSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBncmlkMS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkMi5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZ3JpZDIuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKCdjb21wdXRlci1ncmlkJyk7XHJcbiAgICAgICAgLy8gdGVtcG9yYXJpbHkgZGlzcGxheSBwb3NpdGlvbnMgb2YgY29tcHV0ZXIgc2hpcHMgZm9yIHRlc3RpbmdcclxuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZC5ib2FyZFtpXSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBncmlkMS5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuICAgIC8vIG1haW4gbG9vcFxyXG4gICAgd2hpbGUoIXBsYXllckJvYXJkLnNoaXBzU3VuayAmJiAhY29tcHV0ZXJCb2FyZC5zaGlwc1N1bmspIHtcclxuICAgICAgICAvLyBzZXQgZmlyc3QgcGxheWVyIHRvIG1ha2UgZmlyc3QgbW92ZVxyXG4gICAgICAgIGlmICghcGxheWVyMS5pc1R1cm4gJiYgIWNvbXB1dGVyLmlzVHVybikge1xyXG4gICAgICAgICAgICBwbGF5ZXIxLmlzVHVybiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2NvbXB1dGVyLWdyaWQnICYmIHBsYXllcjEuaXNUdXJuKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2soZS5kYXRhc2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllcjEuaXNUdXJuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjb21wdXRlci5pc1R1cm4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3BsYXllci1ncmlkJyAmJiBjb21wdXRlci5pc1R1cm4pIHtcclxuICAgICAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soZS5kYXRhc2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllcjEuaXNUdXJuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVyLmlzVHVybiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic29tZXRoaW5nIHdyb25nIHdpdGggZXZlbnQgbGlzdGVuZXJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIHRlc3Qgd2hlbiBleGl0aW5nIHdoaWxlIGxvb3BcclxuICAgIGNvbnNvbGUubG9nKCdnYW1lIGZpbmlzaGVkJyk7XHJcbn0pKCk7XHJcblxyXG5nYW1lKCk7Il0sIm5hbWVzIjpbInNoaXAiLCJnYW1lQm9hcmQiLCJuYW1lIiwic2hpcHNTdW5rIiwiYm9hcmQiLCJpIiwicHVzaCIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sIiwicGxhY2VTaGlwIiwiZGlyZWN0aW9uIiwiY29vcmRpbmF0ZSIsIkVycm9yIiwibWFya2VyIiwiY29vcmRTdHJpbmciLCJ0b1N0cmluZyIsInBhcnNlSW50IiwibGVuZ3RoIiwiaGVhbHRoIiwic3BsaWNlIiwicmVjZWl2ZUF0dGFjayIsImRhbWFnZSIsIm1hcmsiLCJmaWx0ZXJCb2FyZCIsImZpbHRlciIsImxldHRlciIsImNsYXNzTGlzdCIsImFkZCIsImhpdCIsImlzU3VuayIsImdyaWRHZW4iLCJudW0iLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJncmlkIiwiZGF0YXNldCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXIiLCJpc1R1cm4iLCJpbmNsdWRlcyIsImdiIiwiZ2FtZSIsInBsYXllcjEiLCJwbGF5ZXJCb2FyZCIsImNvbXB1dGVyIiwiY29tcHV0ZXJCb2FyZCIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kIiwiZ3JpZDEiLCJmaXJzdENoaWxkIiwiZ3JpZDIiLCJsYXN0Q2hpbGQiLCJjaGlsZE5vZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==