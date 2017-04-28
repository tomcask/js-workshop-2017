/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by thram on 25/04/17.
 */
var random = exports.random = function random() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 99;
  return Math.round((max - min) * Math.random() + min);
};

var isEmpty = exports.isEmpty = function isEmpty() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return !Object.keys(obj).length;
};

var forEach = exports.forEach = function forEach(obj, callback) {
  return Array.isArray(obj) ? obj.forEach(callback) : Object.keys(obj).forEach(function (key) {
    return callback(obj[key], key);
  });
};

var reduce = exports.reduce = function reduce(obj, callback, init) {
  return Array.isArray(obj) ? obj.reduce(callback, init) : Object.keys(obj).reduce(function (acc, key) {
    return callback(acc, obj[key], key);
  }, init);
};

var times = exports.times = function times(number, callback) {
  return new Array(number).join('.').split('.').map(function (value, index) {
    return callback(index);
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.span = exports.label = exports.button = exports.option = exports.select = exports.img = exports.h2 = exports.h1 = exports.div = undefined;

var _tools = __webpack_require__(0);

var setAttr = function setAttr(attr) {
  return function (el, value) {
    return el.setAttribute(attr, value);
  };
};
var setAttrs = function setAttrs(el, attrs) {
  return (0, _tools.forEach)(attrs, function (value, attr) {
    return setAttr(attr)(el, value);
  });
};

var addEvents = function addEvents(el, events) {
  return (0, _tools.forEach)(events, function (callback, event) {
    return el.addEventListener(event, callback);
  });
};

var createTag = function createTag(tag) {
  return function () {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var $element = document.createElement(tag);
    setAttrs($element, attrs);
    addEvents($element, events);
    return $element;
  };
};

var div = exports.div = createTag('div');
var h1 = exports.h1 = createTag('h1');
var h2 = exports.h2 = createTag('h2');
var img = exports.img = createTag('img');
var select = exports.select = createTag('select');
var option = exports.option = createTag('option');
var button = exports.button = createTag('button');
var label = exports.label = createTag('label');
var span = exports.span = createTag('span');

exports.default = { div: div, h1: h1, h2: h2, img: img, select: select, option: option, button: button, label: label, span: span };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomCharacter = exports.getCharacter = exports.getCharacters = exports.getAlignments = undefined;

var _tools = __webpack_require__(0);

var _data = __webpack_require__(6);

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var cleanList = _data2.default.filter(function (item) {
  return !(0, _tools.isEmpty)(item.stats);
});

var addToAlignment = function addToAlignment() {
  var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var item = arguments[1];
  return init.concat(item);
};

var byAlignment = function byAlignment() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return data.reduce(function (result, item) {
    var alignment = item.biography.alignment;
    return Object.assign({}, result, _defineProperty({}, alignment, addToAlignment(result[alignment], item)));
  }, {});
};

var getAlignments = exports.getAlignments = function getAlignments() {
  return byAlignment(cleanList);
};

var getCharacters = exports.getCharacters = function getCharacters() {
  return Object.assign({}, cleanList);
};
var getCharacter = exports.getCharacter = function getCharacter(id) {
  return cleanList.filter(function (character) {
    return character.id === id;
  })[0];
};
var getRandomCharacter = exports.getRandomCharacter = function getRandomCharacter() {
  return cleanList[(0, _tools.random)(0, cleanList.length - 1)];
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fight = exports.throwDice = undefined;

var _tools = __webpack_require__(0);

var BATTLES = 6;

var throwDice = exports.throwDice = function throwDice() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return (0, _tools.random)(0, max);
};

var fight = exports.fight = function fight(rivals) {
  var stats = Object.keys(rivals[0].stats);
  var totalStats = stats.length;

  var selectStat = function selectStat(rival) {
    var stat = stats[(0, _tools.random)(0, totalStats - 1)];
    return { id: rival.id, stat: stat, value: throwDice(rival.stats[stat]) };
  };

  var battleResult = function battleResult(res, rival) {
    return rival.value === res.value ? { id: 'draw', value: -1 } : Object.assign({}, res, rival.value > res.value ? rival : {});
  };

  var matchResult = function matchResult(res, battle) {
    res[battle.id] = (res[battle.id] || 0) + 1;
    return res;
  };

  var battles = (0, _tools.times)(BATTLES, function () {
    return rivals.map(selectStat).reduce(battleResult, { id: 'draw', value: -1 });
  });
  var result = battles.reduce(matchResult, {});

  return [(0, _tools.reduce)(result, function (res, value, key) {
    return value > res.score ? { winner: key, score: value } : res;
  }, { score: -1 }), battles];
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$stats = exports.$card = exports.$column = undefined;

var _tools = __webpack_require__(0);

var _dom = __webpack_require__(1);

var $column = exports.$column = function $column(title, items, onChange) {
  var $title = (0, _dom.h2)();
  $title.innerHTML = title;

  var $select = (0, _dom.select)({ class: 'selector' }, {
    change: function change(ev) {
      return onChange(items.filter(function (item) {
        return item.id === ev.target.value;
      })[0]);
    }
  });
  items.forEach(function (item) {
    var $option = (0, _dom.option)({ value: item.id });
    $option.innerHTML = item.name;
    $select.appendChild($option);
  });

  var $container = (0, _dom.div)({ class: 'column' });
  $container.appendChild($title);
  $container.appendChild($select);
  return $container;
};

var $card = exports.$card = function $card(_ref) {
  var name = _ref.name,
      realName = _ref.realName,
      portrait = _ref.portrait;

  var $name = (0, _dom.h2)({ class: 'name' });
  $name.innerHTML = name;

  var $realName = (0, _dom.h2)({ class: 'real-name' });
  $realName.innerHTML = realName;

  var $portrait = (0, _dom.img)({ class: 'portrait', src: portrait });

  var $container = (0, _dom.div)({ class: 'card' });
  $container.appendChild($name);
  $container.appendChild($realName);
  $container.appendChild($portrait);
  return $container;
};

var $stats = exports.$stats = function $stats(stats) {
  var $container = (0, _dom.div)({ class: 'stats' });
  (0, _tools.forEach)(stats, function (value, key) {
    var $stat = (0, _dom.div)();
    var $name = (0, _dom.label)();
    var $value = (0, _dom.span)({ style: 'width: ' + value + '%;' });
    $name.innerText = key + ': ' + value;
    $stat.appendChild($name);
    $stat.appendChild($value);
    $container.appendChild($stat);
  });
  return $container;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * EXERCISE 5: (Wrap up)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Finish the app, implement the game API and the following widgets:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - Stats
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  <div class="stats">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    <div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *      <label>${name}</label>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *      <span style="width: ${value}%"></span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - Fight Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  <button class="fight" onclick="onClick">Fight!</button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - Random Button
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  <button class="random" onclick="onClick"></button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - Winner Banner
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  <h2 class="result">${name}</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Events:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  - Fight onClick: Run fight function from the API and display the result
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  - Random onClick: Select 2 random fighters
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */

var _data = __webpack_require__(2);

var _tools = __webpack_require__(0);

var _dom = __webpack_require__(1);

var _widgets = __webpack_require__(4);

var _game = __webpack_require__(3);

var RIVALS = 2;

var alignments = (0, _data.getAlignments)();
var rivals = (0, _tools.times)(RIVALS, function () {
  return {
    $character: (0, _dom.div)({ class: 'group rival' }),
    $stats: (0, _dom.div)({ class: 'group' })
  };
});
var $arena = (0, _dom.div)({ class: 'group arena' });

var lastSelected = -1;
var selectCharacter = function selectCharacter(characters) {
  return function (character) {
    var selected = lastSelected !== 0 ? 0 : 1;
    var rival = characters[selected];
    rival.item = character;
    rival.$character.innerHTML = '';
    rival.$character.appendChild((0, _widgets.$card)(character));
    rival.$stats.innerHTML = '';
    rival.$stats.appendChild((0, _widgets.$stats)(character.stats));
    lastSelected = selected;
  };
};

var selectRival = selectCharacter(rivals);

var selectRandom = function selectRandom() {
  selectRival((0, _data.getRandomCharacter)());
  selectRival((0, _data.getRandomCharacter)());
};

selectRandom();

var $banner = void 0;

var removeBanner = function removeBanner() {
  if ($banner) {
    $arena.removeChild($banner);
    $banner = undefined;
  }
};

var setBanner = function setBanner(name) {
  removeBanner();
  $banner = (0, _dom.h2)({ class: 'result' });
  $banner.innerHTML = name;
  $arena.appendChild($banner);
};

var $fight = (0, _dom.button)({ class: 'fight' }, {
  click: function click() {
    var _fight = (0, _game.fight)(rivals.map(function ($rival) {
      return $rival.item;
    })),
        _fight2 = _slicedToArray(_fight, 2),
        result = _fight2[0],
        battles = _fight2[1];

    var character = (0, _data.getCharacter)(result.winner);
    setBanner(character.name);
    console.log(battles);
  }
});
$fight.innerHTML = 'Fight!';
$arena.appendChild($fight);

var $random = (0, _dom.button)({ class: 'random' }, {
  click: function click() {
    removeBanner();
    selectRandom();
  }
});
$arena.appendChild($random);

var $left = (0, _dom.div)({ class: 'column' });
$left.appendChild(rivals[0].$character);
$left.appendChild(rivals[0].$stats);
$arena.appendChild($left);

var $right = (0, _dom.div)({ class: 'column' });
$right.appendChild(rivals[1].$character);
$right.appendChild(rivals[1].$stats);
$arena.appendChild($right);

var $lists = (0, _dom.div)({ class: 'group' });
(0, _tools.forEach)(alignments, function (value, key) {
  return $lists.appendChild((0, _widgets.$column)(key, value, selectRival));
});

var $mainTitle = (0, _dom.h1)({ class: 'main-title' });
$mainTitle.innerHTML = 'Who will win this time?';
var $root = document.getElementById('workshop');

$root.appendChild($mainTitle);
$root.appendChild($arena);
$root.appendChild($lists);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = [
	{
		"id": "a-bomb",
		"name": "A-Bomb",
		"realName": "Richard Milhouse Jones",
		"stats": {
			"intelligence": 38,
			"strength": 100,
			"speed": 17,
			"durability": 80,
			"power": 24,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/a-bomb.jpg",
		"biography": {
			"full_name": "Richard Milhouse Jones",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rick Jones"
			],
			"place_of_birth": "Scarsdale, Arizona",
			"first_appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'8 // 203 cm",
			"weight": "980 lb // 441 kg",
			"eye_color": "Yellow",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Musician",
				"adventurer",
				"author",
				"formerly talk show host"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Hulk Family",
				"Excelsior (sponsor)",
				"Avengers (honorary member)",
				"formerly partner of the Hulk",
				"Captain America and Captain Marvel",
				"Teen Brigade",
				"ally of Rom"
			],
			"relatives": [
				"Marlo Chandler-Jones (wife)",
				"Polly (aunt)",
				"Mrs. Chandler (mother-in-law)",
				"Keith Chandler",
				"Ray Chandler",
				"three unidentified others (brothers-in-law)",
				"unidentified father (deceased)",
				"Jackie Shorr (alleged mother",
				"unconfirmed)"
			]
		}
	},
	{
		"id": "abe-sapien",
		"name": "Abe Sapien",
		"realName": "Abraham Sapien",
		"stats": {
			"intelligence": 88,
			"strength": 28,
			"speed": 35,
			"durability": 65,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/abe-sapien.jpg",
		"biography": {
			"full_name": "Abraham Sapien",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Langdon Everett Caul",
				"Abraham Sapien",
				"Langdon Caul"
			],
			"place_of_birth": "-",
			"first_appearance": "Hellboy: Seed of Destruction (1993)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Icthyo Sapien",
			"height": "6'3 // 191 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Paranormal Investigator"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Bureau for Paranormal Research and Defense"
			],
			"relatives": [
				"Edith Howard (wife",
				"deceased)"
			]
		}
	},
	{
		"id": "abin-sur",
		"name": "Abin Sur",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 90,
			"speed": 53,
			"durability": 64,
			"power": 99,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/abin-sur.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lagzia"
			],
			"place_of_birth": "Ungara",
			"first_appearance": "Showcase #22 (October, 1959)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Ungaran",
			"height": "6'1 // 185 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"Green Lantern",
				"former history professor"
			],
			"base": [
				"Oa"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"Black Lantern Corps"
			],
			"relatives": [
				"Amon Sur (son)",
				"Arin Sur (sister)",
				"Thaal Sinestro (brother-in-law)",
				"Soranik Natu (niece)"
			]
		}
	},
	{
		"id": "abomination",
		"name": "Abomination",
		"realName": "Emil Blonsky",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 53,
			"durability": 90,
			"power": 62,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/abomination.jpg",
		"biography": {
			"full_name": "Emil Blonsky",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Agent R-7",
				"Ravager of Worlds"
			],
			"place_of_birth": "Zagreb, Yugoslavia",
			"first_appearance": "Tales to Astonish #90",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "6'8 // 203 cm",
			"weight": "980 lb // 441 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Ex-Spy"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"former member of the crew of the Andromeda Starship",
				"ally of the Abominations and Forgotten"
			],
			"relatives": [
				"Nadia Dornova Blonsky (wife",
				"separated)"
			]
		}
	},
	{
		"id": "abraxas",
		"name": "Abraxas",
		"realName": "Abraxas",
		"stats": {
			"intelligence": 88,
			"strength": 63,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/abraxas.jpg",
		"biography": {
			"full_name": "Abraxas",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Within Eternity",
			"first_appearance": "Fantastic Four Annual #2001",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cosmic Entity",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Dimensional destroyer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Cosmic Beings"
			],
			"relatives": [
				"Eternity (\"Father\")"
			]
		}
	},
	{
		"id": "absorbing-man",
		"name": "Absorbing Man",
		"realName": "Carl Creel",
		"stats": {
			"intelligence": 38,
			"strength": 80,
			"speed": 25,
			"durability": 100,
			"power": 98,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/absorbing-man.jpg",
		"biography": {
			"full_name": "Carl Creel",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Greithoth",
				"\"Crusher\" Creel",
				"Rocky Davis",
				"Dynamite Davis",
				"Lightningbolt",
				"Prisoner #24957"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'4 // 193 cm",
			"weight": "270 lb // 122 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"former professional boxer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Masters of Evil",
				"Lethal Legion",
				"formerly Worthy",
				"Frightful Four: former agent of Loki and They Who Wield Power"
			],
			"relatives": [
				"Mary MacPherran (Titania) (wife)",
				"Jerry Sledge (son)",
				"Rockwell \"Rocky\" Davis (Hi-Llite) (cousin)"
			]
		}
	},
	{
		"id": "adam-monroe",
		"name": "Adam Monroe",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 12,
			"durability": 100,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/adam-monroe.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Takezo Kensei",
				"Richard Sanders"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S02E01 - Four Months Later...",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"former samurai swordsman",
				"former British mercenary commander",
				"former soldier in the Confederate Army"
			],
			"base": [
				"U.S.",
				"formerly Diedenshausen, Germany",
				"Milan, Italy",
				"Paris, France",
				"Japan",
				"England",
				"Atlanta, GA",
				"Montreal, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "adam-strange",
		"name": "Adam Strange",
		"realName": "Adam Strange",
		"stats": {
			"intelligence": 69,
			"strength": 10,
			"speed": 33,
			"durability": 40,
			"power": 37,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/adam-strange.jpg",
		"biography": {
			"full_name": "Adam Strange",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Warrior of Two Worlds",
				"Savior of Rann"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "Outsiders #6 (April, 1986)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"archaelogist",
				"ambassador"
			],
			"base": [
				"Rann, Alpha Centauri System"
			]
		},
		"connections": {
			"group_affiliation": [
				"Omega Men",
				"L.E.G.I.O.N.",
				"R.E.B.E.L.S.",
				"formerly Seven Soldiers of Victory"
			],
			"relatives": [
				"Alanna Strange (wife)",
				"Aleea Strange (daughter)",
				"Sardath (father-in-law)",
				"Janey Strange (sister)",
				"Todd Strange (brother",
				"deceased)",
				"Bantteir (mother-in-law)",
				"Adam Strange II (descendent)"
			]
		}
	},
	{
		"id": "agent-13",
		"name": "Agent 13",
		"realName": "Sharon Carter",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/agent-13.jpg",
		"biography": {
			"full_name": "Sharon Carter",
			"alter_egos": [
				"Sharon Carter"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales of Suspense #75",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Agent of SHIELD"
			],
			"base": [
				"S.H.I.E.L.D. Headquarters, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Agent of SHIELD.",
				"former member of the Femme Force"
			],
			"relatives": [
				"Harrison Carter (father)",
				"Amanda Carter (mother)",
				"Margaret \"Peggy\" Carter (sister)"
			]
		}
	},
	{
		"id": "agent-bob",
		"name": "Agent Bob",
		"realName": "Bob",
		"stats": {
			"intelligence": 10,
			"strength": 8,
			"speed": 13,
			"durability": 5,
			"power": 5,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/agent-bob.jpg",
		"biography": {
			"full_name": "Bob",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bob",
				"agent of Hydra",
				"Bob",
				"agent of A.I.M"
			],
			"place_of_birth": "-",
			"first_appearance": "Cable & Deadpool #38 (May, 2007)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "181 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"janitor",
				"former pirate",
				"terrorist"
			],
			"base": [
				"Mobile",
				"formerly Manhattan, Hellcarrier"
			]
		},
		"connections": {
			"group_affiliation": [
				"A.I.M.",
				"Deadpool",
				"formerly Agency X",
				"Hydra"
			],
			"relatives": [
				"Allison (ex-wife)",
				"Terry and Howie (sons)"
			]
		}
	},
	{
		"id": "agent-zero",
		"name": "Agent Zero",
		"realName": "Christoph Nord",
		"stats": {
			"intelligence": 75,
			"strength": 28,
			"speed": 38,
			"durability": 80,
			"power": 72,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/agent-zero.jpg",
		"biography": {
			"full_name": "Christoph Nord",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Maverick"
			],
			"place_of_birth": "Unrevealed location in former East Germany",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"former government operative",
				"freedom fighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Weapon X",
				"Weapon Plus",
				"Team X",
				"Cell Six",
				"former bodyguard of Psi-Borg",
				"former agent of Major Barrington"
			],
			"relatives": [
				"Unidentified parents (deceased)",
				"Andreas Nord (brother",
				"deceased)",
				"Ginetta Lucia Barsalini (wife",
				"deceased)",
				"unnamed child (deceased)"
			]
		}
	},
	{
		"id": "air-walker",
		"name": "Air-Walker",
		"realName": "Gabriel Lan",
		"stats": {
			"intelligence": 50,
			"strength": 85,
			"speed": 100,
			"durability": 85,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/air-walker.jpg",
		"biography": {
			"full_name": "Gabriel Lan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Xandar, a planet in the Tranta system, Andromeda galaxy",
			"first_appearance": "Fantastic Four #120",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Former starship captain",
				"Herald of Galactus"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of Nova Corps",
				"Heralds of Galactus"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ajax",
		"name": "Ajax",
		"realName": "Francis",
		"stats": {
			"intelligence": 56,
			"strength": 48,
			"speed": 35,
			"durability": 80,
			"power": 34,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ajax.jpg",
		"biography": {
			"full_name": "Francis",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"\"Frankie\"",
				"the A-Man",
				"the Attending"
			],
			"place_of_birth": "-",
			"first_appearance": "Deadpool #14 (March, 1998)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "6'4 // 193 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Weapon X"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "alan-scott",
		"name": "Alan Scott",
		"realName": "Alan Ladd Wellington Scott",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 23,
			"durability": 90,
			"power": 100,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/alan-scott.jpg",
		"biography": {
			"full_name": "Alan Ladd Wellington Scott",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern",
				"White King",
				"Sentinal"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "All-American Comics 16 (1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "201 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City and New York City",
				"Formerly Capitol City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America",
				"Formerly Checkmate",
				"the Sentinels of Magic",
				"Formerly All-Star Squadron"
			],
			"relatives": [
				"Harlequin (Molly Mayne-Scott) (wife)",
				"Thorn (Rose Canton) (first wife",
				"deceased)",
				"Todd Rice (Obsidian",
				"son)",
				"Jennie-Lynn Hayden (Jade",
				"daughter",
				"deceased)"
			]
		}
	},
	{
		"id": "alex-mercer",
		"name": "Alex Mercer",
		"realName": "Alexander J. Mercer",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 42,
			"durability": 90,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/alex-mercer.jpg",
		"biography": {
			"full_name": "Alexander J. Mercer",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Prototype",
				"Zues",
				"Blacklight"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Wildstorm",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Gentek",
				"The Infected"
			],
			"relatives": [
				"Dana Mercer (sister)"
			]
		}
	},
	{
		"id": "alex-woolsly",
		"name": "Alex Woolsly",
		"realName": "Alex Woolsly",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/alex-woolsly.jpg",
		"biography": {
			"full_name": "Alex Woolsly",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S02E16 - Building 26",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Employee at Sam's Comics"
			],
			"base": [
				"Costa Verde, CA"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mr. Woolsly",
				"Mrs. Woolsly",
				"sister"
			]
		}
	},
	{
		"id": "alfred-pennyworth",
		"name": "Alfred Pennyworth",
		"realName": "Alfred Thaddeus Crane Pennyworth",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 17,
			"durability": 10,
			"power": 7,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/alfred-pennyworth.jpg",
		"biography": {
			"full_name": "Alfred Thaddeus Crane Pennyworth",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Alfred Beagle"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #16 (April, 1943)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Butler",
				"Caretaker",
				"former Actor",
				"Field Medic",
				"Government Agent"
			],
			"base": [
				"Wayne Manor",
				"Batcave",
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Outsiders"
			],
			"relatives": [
				"Jarvis Pennyworth (father",
				"deceased)",
				"Wilfred Pennyworth (older brother)",
				"Daphne Pennyworth (niece)",
				"Bruce Wayne (Batman",
				"legal ward)"
			]
		}
	},
	{
		"id": "alien",
		"name": "Alien",
		"realName": "Xenomorph",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 42,
			"durability": 90,
			"power": 57,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/alien.jpg",
		"biography": {
			"full_name": "Xenomorph",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Your chest :)",
			"first_appearance": "Alien (1979)",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Xenomorph XX121",
			"height": "8'0 // 244 cm",
			"weight": "375 lb // 169 kg",
			"eye_color": "-",
			"hair_color": "No Hair",
			"skin_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Alien Queen (mother)"
			]
		}
	},
	{
		"id": "allan-quatermain",
		"name": "Allan Quatermain",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/allan-quatermain.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "(original version) King Solomon's Mines; (this version) League of Extraordinary Gentlemen #1 (America's Best Comics)",
			"publisher": "Wildstorm",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"(former) hunter",
				"(current) agent of the British government"
			],
			"base": [
				"The Secret Wing of the British Museum, London"
			]
		},
		"connections": {
			"group_affiliation": [
				"League of Extraordinary Gentlemen"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "amazo",
		"name": "Amazo",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/amazo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Professor Ivos Amazing Android",
				"Timazo",
				"Humazo",
				"Hourmazo"
			],
			"place_of_birth": "-",
			"first_appearance": "Brave and the Bold #30 (July, 1960)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "8'5 // 257 cm",
			"weight": "385 lb // 173 kg",
			"eye_color": "Red",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly the Secret Society of Super Villains"
			],
			"relatives": [
				"Professor Ivo (creator)",
				"Kid Amazo (cyborg offspring)"
			]
		}
	},
	{
		"id": "ammo",
		"name": "Ammo",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/ammo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Daredevil #252 (March, 1988)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Gang leader",
				"criminal",
				"former soldier"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"former leader of the Wildboys"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ando-masahashi",
		"name": "Ando Masahashi",
		"realName": "Ando Masahashi",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/ando-masahashi.jpg",
		"biography": {
			"full_name": "Ando Masahashi",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Huggerz69",
				"Sidekick"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Yamagato Industries computer programmer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "angel",
		"name": "Angel",
		"realName": "Warren Kenneth Worthington III",
		"stats": {
			"intelligence": 63,
			"strength": 13,
			"speed": 46,
			"durability": 64,
			"power": 28,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/angel.jpg",
		"biography": {
			"full_name": "Warren Kenneth Worthington III",
			"alter_egos": [
				"Archangel"
			],
			"aliases": [
				"Formerly Death",
				"Dark Angel",
				"Angel",
				"Avenging Angel",
				"Archangel"
			],
			"place_of_birth": "Centerport, Long Island, New York",
			"first_appearance": "X-Men #54-56 (1969)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"chairman & principal stockholder of Worthington Industries",
				"former terrorist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"Mutantes Sans Fronti�res",
				"Hellfire Club",
				"formerly Secret Defenders",
				"X-Factor/X-Terminators",
				"Horsemen of Apocalypse",
				"Defenders",
				"Death's champions",
				"Champions of Los Angeles"
			],
			"relatives": [
				"Warren Kenneth Worthington Sr. (grandfather",
				"deceased)",
				"Warren Kenneth Worthington Jr. (father",
				"deceased)",
				"Kathryn Worthington (mother",
				"deceased)",
				"Burtram \"Burt\" Worthington (Dazzler",
				"paternal uncle)",
				"unnamed cousin"
			]
		}
	},
	{
		"id": "angel",
		"name": "Angel",
		"realName": "Liam",
		"stats": {
			"intelligence": 75,
			"strength": 30,
			"speed": 58,
			"durability": 90,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/angel.jpg",
		"biography": {
			"full_name": "Liam",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Angelus",
				"Twilight"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Vampire",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Kathy (sister)",
				"Connor (son)",
				"Twilight (\"child\")"
			]
		}
	},
	{
		"id": "angel-dust",
		"name": "Angel Dust",
		"realName": "Christina",
		"stats": {
			"intelligence": 38,
			"strength": 55,
			"speed": 23,
			"durability": 42,
			"power": 17,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/angel-dust.jpg",
		"biography": {
			"full_name": "Christina",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Angel",
				"Dusty"
			],
			"place_of_birth": "-",
			"first_appearance": "Morlocks #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'5 // 165 cm",
			"weight": "126 lb // 57 kg",
			"eye_color": "Yellow",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Chicago, Illinois"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "angel-salvadore",
		"name": "Angel Salvadore",
		"realName": "Angel Salvadore Bohusk",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 28,
			"durability": 28,
			"power": 56,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/angel-salvadore.jpg",
		"biography": {
			"full_name": "Angel Salvadore Bohusk",
			"alter_egos": [
				"Tempest"
			],
			"aliases": [
				"Tempest"
			],
			"place_of_birth": "-",
			"first_appearance": "New X-Men #118 (November, 2001)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'4 // 163 cm",
			"weight": "121 lb // 54 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly New Warriors",
				"Special Class"
			],
			"relatives": [
				"Tito Bohusk (son)",
				"Axel Bohusk (son)",
				"Kara Bohusk (daughter)",
				"three other unidentified children",
				""
			]
		}
	},
	{
		"id": "angela",
		"name": "Angela",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/angela.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "animal-man",
		"name": "Animal Man",
		"realName": "Bernhard Baker",
		"stats": {
			"intelligence": 56,
			"strength": 48,
			"speed": 47,
			"durability": 85,
			"power": 73,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/animal-man.jpg",
		"biography": {
			"full_name": "Bernhard Baker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Human Zoo",
				"A-Man",
				"The Man with Animal Powers"
			],
			"place_of_birth": "-",
			"first_appearance": "Strange Adventures #180 (September, 1965)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"San Diego, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Animal Masters",
				"Forgotten Heroes",
				"Justice League of America",
				"Justice League Europe"
			],
			"relatives": [
				"Ellen Frazier (wife)",
				"Cliff Baker (son)",
				"Maxine Baker (daughter)",
				"unnamed second daughter",
				"Frank Baker",
				"Jr. (father)",
				"Phyllis Baker (mother)",
				"unnamed sister",
				"Frank",
				"Sr (grandfather)",
				"Teddy (great grandfather)",
				"Sherman (great-great grandfather)",
				"Jack (great-great-great grandfather)",
				"Mary Frazier (mother-in-law)",
				"Dudley (uncle-in-law)",
				"Annie Cassidy (mother of second daughter)",
				"Lucy Cassidy (half-sister of second daughter)"
			]
		}
	},
	{
		"id": "annihilus",
		"name": "Annihilus",
		"realName": "Annihilus",
		"stats": {
			"intelligence": 75,
			"strength": 80,
			"speed": 47,
			"durability": 56,
			"power": 59,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/annihilus.jpg",
		"biography": {
			"full_name": "Annihilus",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Living Death That Walks",
				"Lord of the Negative Zone"
			],
			"place_of_birth": "Planet of Arthros, Sector 17A, Negative Zone",
			"first_appearance": "Fantastic Four Annual #6 (1968)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Conqueror",
				"scavenger"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sometime ally of Blastaar"
			],
			"relatives": [
				"Annihilus is a series of clonal scions"
			]
		}
	},
	{
		"id": "ant-man",
		"name": "Ant-Man",
		"realName": "Hank Pym",
		"stats": {
			"intelligence": 100,
			"strength": 18,
			"speed": 23,
			"durability": 28,
			"power": 32,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ant-man.jpg",
		"biography": {
			"full_name": "Henry Jonathan Pym",
			"alter_egos": [
				"Giant-Man",
				"Goliath",
				"Wasp II",
				"Yellowjacket"
			],
			"aliases": [
				"Hank Pym",
				"Doctor Pym",
				"Ant-Man",
				"Goliath",
				"Yellowjacket",
				"Wasp",
				"Earth's Scientist Supreme"
			],
			"place_of_birth": "Elmsford, New York",
			"first_appearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'11 // 211 cm",
			"weight": "270 lb // 122 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Biochemist",
				"former manager of Avengers Compound"
			],
			"base": [
				"Avengers Compound, Los Angeles",
				"formerly Infinite Avengers Mansion",
				"Captive aboard a Skrull ship",
				"Avengers Mansion, New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers Academy",
				"Secret Avengers",
				"formerly Mighty Avengers",
				"Avengers (founding member)",
				"Defenders",
				"Future Iron Man's Team"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ant-man-ii",
		"name": "Ant-Man II",
		"realName": "Scott Lang",
		"stats": {
			"intelligence": 75,
			"strength": 18,
			"speed": 17,
			"durability": 40,
			"power": 53,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ant-man-ii.jpg",
		"biography": {
			"full_name": "Scott Lang",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Myrmidon",
				"Scott Edward Harris Lang"
			],
			"place_of_birth": "Coral Gables, Florida",
			"first_appearance": "Avengers Vol 1 #181 (March, 1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Electronics Technician",
				""
			],
			"base": [
				"South Beach, Miami, Florida",
				"formerly Farmingdale, Long Island, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ant-Man Security Solutions",
				"formerly Future Foundation (leader)",
				"Fantastic Four (leader)",
				"Defenders",
				"Avengers",
				"Heroes For Hire",
				"Stark Industries"
			],
			"relatives": [
				"Cassandra Eleanor Lang (daughter)",
				"Ruth (sister)",
				"Carl (brother-in-law)",
				"Peggy Rae (ex-wife)"
			]
		}
	},
	{
		"id": "anti-monitor",
		"name": "Anti-Monitor",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 50,
			"durability": 100,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/anti-monitor.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Monitor",
				"Mobius"
			],
			"place_of_birth": "Moon of Qward",
			"first_appearance": "Crisis on Infinite Earths #4",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "200 // 61.0 meters",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Qward, Antimatter Universe"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinestro Corps",
				"Weaponers of Qward",
				"Thunderers of Qward",
				"Shadow Demons"
			],
			"relatives": [
				"Monitor (\"brother\")",
				"The Monitors"
			]
		}
	},
	{
		"id": "anti-spawn",
		"name": "Anti-Spawn",
		"realName": "Jason Wynn",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/anti-spawn.jpg",
		"biography": {
			"full_name": "Jason Wynn",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Redeemer"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #16",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "anti-venom",
		"name": "Anti-Venom",
		"realName": "Eddie Brock",
		"stats": {
			"intelligence": 75,
			"strength": 60,
			"speed": 65,
			"durability": 90,
			"power": 96,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/anti-venom.jpg",
		"biography": {
			"full_name": "Edward Charles Allan Brock",
			"alter_egos": [
				"Toxin",
				"Venom"
			],
			"aliases": [
				"Eddie",
				"Edwin Brock",
				"Venom",
				"Lethal Protector",
				"White Venom",
				"998th"
			],
			"place_of_birth": "San Francisco, California",
			"first_appearance": "Amazing Spider-Man #569 (as Anti-Venom)",
			"publisher": "Marvel Comics",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "7'6 // 229 cm",
			"weight": "795 lb // 358 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"former journalist for the Daily Globe"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Carl Brock (father",
				"estranged)",
				"Janine Brock (mother",
				"deceased)",
				"Mary Brock (sister)",
				"Ann Weying (ex-wife",
				"deceased)",
				"Symbiotes' relatives: Toxin Symbiote (current symbiote",
				"former grandson)",
				"Venom Symbiote (former symbiote",
				"grandfather",
				"former brother)",
				"Agony",
				"Phage",
				"Riot",
				"Lasher (uncles",
				"former sons)",
				"Scorn (sister",
				"former niece)",
				"Carnage (father",
				"former son)",
				"Scream (aunt",
				"former daughter",
				"deceased)",
				"Hybrid (uncle",
				"former son",
				"deceased)"
			]
		}
	},
	{
		"id": "apocalypse",
		"name": "Apocalypse",
		"realName": "En Sabah Nur",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/apocalypse.jpg",
		"biography": {
			"full_name": "En Sabah Nur",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Eternal One",
				"the High Lord",
				"Set",
				"Huitxilopochti",
				"Sauru",
				"Kali-Ma"
			],
			"place_of_birth": "Akkaba, Egypt",
			"first_appearance": "X-Factor #5 (June, 1986)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "7'0 // 213 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Red",
			"hair_color": "Black",
			"skin_color": "Grey"
		},
		"work": {
			"occupation": [
				"Student",
				"formerly Conqueror",
				"Scientist"
			],
			"base": [
				"Celestial Ship, mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Clan Akkaba",
				"employer of Apocalypse's Horsemen",
				"Dark Riders",
				"former employer of the Alliance of Evil",
				"198"
			],
			"relatives": [
				"Baal of the Crimson Sands (adopted father",
				"deceased)"
			]
		}
	},
	{
		"id": "aquababy",
		"name": "Aquababy",
		"realName": "Arthur Curry, Jr.",
		"stats": {
			"intelligence": 10,
			"strength": 16,
			"speed": 12,
			"durability": 14,
			"power": 37,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/aquababy.jpg",
		"biography": {
			"full_name": "Arthur Curry, Jr.",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Aquaman #23 (October, 1965)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Aquaman Family"
			],
			"relatives": [
				"Aquaman (Orin/Arthur Curry) (father)",
				"Mera (mother)",
				"Koryak (half-brother)",
				"A.J. (half-brother)",
				"Atlan (grandfather)",
				"Tom Curry (adoptive grandfather",
				"deceased)",
				"Orm Marius (uncle)",
				"Kordax (ancestor",
				"deceased)",
				"Arthur Joseph Curry (adoptive cousin)"
			]
		}
	},
	{
		"id": "aqualad",
		"name": "Aqualad",
		"realName": "Garth",
		"stats": {
			"intelligence": 63,
			"strength": 44,
			"speed": 42,
			"durability": 75,
			"power": 84,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/aqualad.jpg",
		"biography": {
			"full_name": "Garth",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Poseidonis, Atlantis",
			"first_appearance": "Adventure Comics #269 (February, 1960)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Atlantean",
			"height": "5'10 // 178 cm",
			"weight": "235 lb // 106 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Magician",
				"former Sidekick"
			],
			"base": [
				"Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Aquaman Family",
				"formerly Black Lantern Corps",
				"Sentinels of Magic",
				"Teen Titans"
			],
			"relatives": [
				"Cerdian (son)",
				"Dolphin (wife)",
				"Berra (mother)",
				"Thar (father)",
				"Slizzath (uncle) Donna (grand-daughter)"
			]
		}
	},
	{
		"id": "aquaman",
		"name": "Aquaman",
		"realName": "Orin",
		"stats": {
			"intelligence": 69,
			"strength": 85,
			"speed": 79,
			"durability": 80,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/aquaman.jpg",
		"biography": {
			"full_name": "Orin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dweller in the Depths",
				"Swimmer",
				"Waterbearer",
				"Mental Man",
				"Aquaboy",
				"Water Wraith"
			],
			"place_of_birth": "Atlantis",
			"first_appearance": "More Fun Comics #73 (November, 1941)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Atlantean",
			"height": "6'1 // 185 cm",
			"weight": "325 lb // 146 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Protector of the Seas and Oceans",
				"King of Poseidonis"
			],
			"base": [
				"Atlantean Royal Palace",
				"Poseidonis, Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League",
				"Aquaman Family",
				"Atlantean Royal Family",
				"formerly Black Lantern Corps",
				"Justice League International",
				"Justice League Detroit",
				"U.N."
			],
			"relatives": [
				"Koryak (son)",
				"Arthur Curry",
				"Jr. (son)",
				"A.J. (son)",
				"Orm Marius (half-brother)",
				"Debbie Perkins (half-sister)",
				"Drin (adopted brother)",
				"Atlanna (mother)",
				"Atlan (father)",
				"Atlena (aunt)",
				"Porm (adopted mother)",
				"Tom Curry (adopted father)",
				"Mera (wife)",
				"Hila (sister-in-law)",
				"Haumond (uncle)",
				"Kraken (uncle)",
				"Honsu (grandfather)",
				"Lorelei (grandmother)",
				"Manu (ancestor)",
				"Nala (ancestor)",
				"Fatima (ancestor)",
				"Kalunga (ancestor)",
				"Gana (ancestor)",
				"Fiona (ancestor)",
				"Regin (ancestor)",
				"Kordax (ancestor)",
				"Bazil (ancestor)",
				"Cora (ancestor)",
				"Illya (ancestor)",
				"Dardanus (ancestor)",
				"Alloroc (ancestor)",
				"Cole (ancestor)",
				"Narmea (ancestor)",
				"Orin (ancestor)",
				"Loma (ancestor)",
				"Shalako (ancestor)",
				"Thorvall (ancestor)"
			]
		}
	},
	{
		"id": "arachne",
		"name": "Arachne",
		"realName": "Julia Carpenter",
		"stats": {
			"intelligence": 50,
			"strength": 48,
			"speed": 50,
			"durability": 70,
			"power": 71,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/arachne.jpg",
		"biography": {
			"full_name": "Julia Carpenter",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spider-Woman",
				"Madame Web"
			],
			"place_of_birth": "Los Angeles, California",
			"first_appearance": "Marvel Super Heroes Secret Wars #6",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"fugitive",
				"former government agent"
			],
			"base": [
				"Mobile",
				"formerly Denver, Colorado",
				"formerly Avengers Compound, Los Angeles, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Omega Flight",
				"formerly Commission on Superhuman Activities",
				"Freedom Force",
				"Avengers",
				"Secret Defenders",
				"Force Works",
				"Queen�s Vengeance",
				"West Coast Avengers",
				"Secret Avengers (Civil War)"
			],
			"relatives": [
				"Rachel Carpenter (daughter)",
				"Walter Cornwall (father)",
				"Elizabeth Cornwall (mother)",
				"Larry Carpenter (ex-husband",
				"deceased)"
			]
		}
	},
	{
		"id": "archangel",
		"name": "Archangel",
		"realName": "Warren Kenneth Worthington III ",
		"stats": {
			"intelligence": 63,
			"strength": 13,
			"speed": 58,
			"durability": 64,
			"power": 35,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/archangel.jpg",
		"biography": {
			"full_name": "Warren Kenneth Worthington III",
			"alter_egos": [
				"Angel"
			],
			"aliases": [
				"War",
				"Dark Angel",
				"Death",
				"Avenging Angel"
			],
			"place_of_birth": "Centerport, Long Island, New York",
			"first_appearance": "X-Men #1 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Blond",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Chairman & principal stockholder of Worthington Industries",
				"Multi-Millionaire",
				"Heir",
				"former terrorist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (founding member)",
				"X-Force",
				"Mutantes Sans Fronti�res",
				"Hellfire Club",
				"formerly X-Club (founding member)",
				"Death's champions",
				"Secret Defenders",
				"X-Factor/X-Terminators (founding member)",
				"Horsemen of Apocalypse",
				"Defenders",
				"Champions of Los Angeles (fou"
			],
			"relatives": [
				"Wallace Worthington (paternal ancestor",
				"deceased)",
				"Warren Worthington Sr. (paternal grandfather",
				"deceased)",
				"Warren Worthington Jr. (father",
				"deceased)",
				"Kathryn Worthington (mother",
				"deceased)",
				"Burt Worthington (paternal uncle)",
				"Mimi (maternal aunt)",
				"unnamed distant cousin"
			]
		}
	},
	{
		"id": "arclight",
		"name": "Arclight",
		"realName": "Philippa Sontag",
		"stats": {
			"intelligence": 38,
			"strength": 63,
			"speed": 23,
			"durability": 42,
			"power": 52,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/arclight.jpg",
		"biography": {
			"full_name": "Philippa Sontag",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Vietnam",
			"first_appearance": "(In shadow) Uncanny X-Men #210 (1986), (fully) X-Factor #10 (1986)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "126 lb // 57 kg",
			"eye_color": "Violet",
			"hair_color": "Purple"
		},
		"work": {
			"occupation": [
				"Terrorist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Marauders formerly",
				"198",
				"Femizons"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ardina",
		"name": "Ardina",
		"realName": "Ardina",
		"stats": {
			"intelligence": 63,
			"strength": 100,
			"speed": 100,
			"durability": 80,
			"power": 100,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ardina.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "The Order #4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Alien",
			"height": "6'4 // 193 cm",
			"weight": "218 lb // 98 kg",
			"eye_color": "White",
			"hair_color": "Orange",
			"skin_color": "Gold"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Norrin Radd (Silver Surfer",
				"clonal source)",
				"Clea (creator)"
			]
		}
	},
	{
		"id": "ares",
		"name": "Ares",
		"realName": "",
		"stats": {
			"intelligence": 75,
			"strength": 82,
			"speed": 35,
			"durability": 80,
			"power": 84,
			"combat": 101
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ares.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"God of War",
				"Mister Talon",
				"Mars",
				"Warhawk"
			],
			"place_of_birth": "-",
			"first_appearance": "Thor #129",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "600 lb // 270 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Avengers Tower, formerly Olympus"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"Mighty Avengers",
				"Olympic Pantheon",
				"Warhawks"
			],
			"relatives": [
				"Zeus (father)",
				"Hera (mother)",
				"Enyo (wife)",
				"Deimos",
				"Phobos",
				"Alexander (sons)",
				"Neptune",
				"Pluto (uncles)",
				"Demeter",
				"Hestia (aunts)",
				"Hephaestus (brother)",
				"Apollo",
				"Dionysus",
				"Hercules",
				"Hermes(half-brothers)",
				"Artemis",
				"Pallas Athena",
				"Venus",
				"(half-sisters)"
			]
		}
	},
	{
		"id": "ariel",
		"name": "Ariel",
		"realName": "Ariel",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 94,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ariel.jpg",
		"biography": {
			"full_name": "Ariel",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Fallen Angels #1 (1987)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Purple",
			"hair_color": "Pink"
		},
		"work": {
			"occupation": [
				"Leader",
				"refugee alien",
				"former alien mutant-hunter and hedonist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"Formerly Fallen Angels"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "armor",
		"name": "Armor",
		"realName": "Hisako Ichiki",
		"stats": {
			"intelligence": 50,
			"strength": 63,
			"speed": 12,
			"durability": 80,
			"power": 55,
			"combat": 54
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/armor.jpg",
		"biography": {
			"full_name": "Hisako Ichiki",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"X-Girl",
				"Kid"
			],
			"place_of_birth": "-",
			"first_appearance": "Astonishing X-Men #4 (2004)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'4 // 163 cm",
			"weight": "112 lb // 50 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly: Xavier Institute Student Body",
				"New X-Men"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "arsenal",
		"name": "Arsenal",
		"realName": "Roy William Harper, Jr.",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/arsenal.jpg",
		"biography": {
			"full_name": "Roy William Harper, Jr.",
			"alter_egos": [
				"Speedy"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "astro-boy",
		"name": "Astro Boy",
		"realName": "Atom",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/astro-boy.jpg",
		"biography": {
			"full_name": "Atom",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "atlas",
		"name": "Atlas",
		"realName": "Erik Josten",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 25,
			"durability": 100,
			"power": 98,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/atlas.jpg",
		"biography": {
			"full_name": "Erik Stephan Josten",
			"alter_egos": [
				"Goliath",
				"Power Man",
				"Smuggler"
			],
			"aliases": [
				"Power Man",
				"Smuggler",
				"Goliath",
				"Shatterfist",
				"Intruder from Beyond",
				"Edward Jantzen"
			],
			"place_of_birth": "Milwaukee, Wisconsin",
			"first_appearance": "Incredible Hulk #449",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former professional criminal",
				"mercenary",
				"dock worker",
				"soldier"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts",
				"formerly Revengers",
				"Defenders (New Jersey Initiative team)",
				"Masters of Evil",
				"Maggia",
				"Grim Reaper's Lethal Legion",
				"Mandarin's Minions",
				"Emissaries of Evil",
				"former partner of Citizen V (Dallas Riordan) and Swordsman",
				"Count Nefaria's Lethal Legi"
			],
			"relatives": [
				"Unidentified parents (deceased)",
				"Carl (brother",
				"deceased)",
				"Conrad (brother)",
				"Lindy (sister",
				"deceased)"
			]
		}
	},
	{
		"id": "atlas",
		"name": "Atlas",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 100,
			"speed": 42,
			"durability": 100,
			"power": 27,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/atlas.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Atlas the Great",
				"Atlas the Untamed"
			],
			"place_of_birth": "Crystal Mountain",
			"first_appearance": "Action Comics #121",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "6'6 // 198 cm",
			"weight": "280 lb // 126 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Formely",
				"Hyssa, Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "atom",
		"name": "Atom",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "atom-girl",
		"name": "Atom Girl",
		"realName": "Salu Digby",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 38,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom-girl.jpg",
		"biography": {
			"full_name": "Salu Digby",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Shrinking Violet"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1 (2004)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"United Planets, 31st century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "atom-i",
		"name": "Atom I",
		"realName": "Albert Pratt",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom-i.jpg",
		"biography": {
			"full_name": "Albert Pratt",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Little Superman",
				"the Mighty Mite"
			],
			"place_of_birth": "-",
			"first_appearance": "All American Comics #19",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Retired Professor of Nuclear Physics"
			],
			"base": [
				"GBS Building, Gotham City (former) Calvin College on Earth-Two"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Justice Society of America",
				"formerly All-Star Squadron"
			],
			"relatives": [
				"Mary James (wife",
				"deceased)",
				"Grant Albert Emerson (Damage",
				"son)",
				"Albert Rothstein (aka Nuklon / Atom-Smasher",
				"godson)"
			]
		}
	},
	{
		"id": "atom-ii",
		"name": "Atom II",
		"realName": "Ray Palmer",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 33,
			"durability": 45,
			"power": 40,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom-ii.jpg",
		"biography": {
			"full_name": "Raymond Palmer",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Mighty Mite",
				"the Tiny Titan",
				"the World's Smallest Hero"
			],
			"place_of_birth": "-",
			"first_appearance": "Showcase #34",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Physics Professor"
			],
			"base": [
				"Ivy Town"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"formerly",
				"Suicide Squad",
				"Teen Titans"
			],
			"relatives": [
				"Jean Loring (ex-wife",
				"deceased)",
				"Princess Laethwen (wife",
				"deceased)",
				"Danny Palmer (brother",
				"deceased)",
				"David Palmer (father)",
				"Susan Palmer (mother",
				"deceased)",
				"David Palmer (uncle)"
			]
		}
	},
	{
		"id": "atom-iii",
		"name": "Atom III",
		"realName": "Adam Cray",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom-iii.jpg",
		"biography": {
			"full_name": "Adam Cray",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Suicide Squad (Volume 1) #44",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Suicide Squad"
			],
			"relatives": [
				"Senator Cray (father",
				"deceased)"
			]
		}
	},
	{
		"id": "atom-iv",
		"name": "Atom IV",
		"realName": "Ryan Choi",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/atom-iv.jpg",
		"biography": {
			"full_name": "Ryan Choi",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Brave New World #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Professor of nuclear physics at Ivy University"
			],
			"base": [
				"Ivy Town"
			]
		},
		"connections": {
			"group_affiliation": [
				"Lighter Than Air Society"
			],
			"relatives": [
				"Professor Choi (father)",
				"mother (deceased)",
				"sister (unnamed)",
				"Jia Choi (descendent)."
			]
		}
	},
	{
		"id": "aurora",
		"name": "Aurora",
		"realName": "Jeanne-Marie Beaubier",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 96,
			"durability": 60,
			"power": 74,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/aurora.jpg",
		"biography": {
			"full_name": "Jeanne-Marie Beaubier",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sister Beaubier"
			],
			"place_of_birth": "Montreal, Quebec, Canada",
			"first_appearance": "X-Men #121 (1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'11 // 180 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former terrorist",
				"nun",
				"history/geography teacher"
			],
			"base": [
				"Laval, Quebec, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Flight",
				"Alpha Flight (Space Program)",
				"Royal Canadian Mounted Police",
				"formerly Weapon X",
				"ally of the Havok's Brotherhood",
				"Headbangers",
				"Children of the Vault",
				"X-Men (interim member)"
			],
			"relatives": [
				"Jean-Baptiste Beaubier (father",
				"deceased)",
				"unidentified mother (deceased)",
				"Jean-Paul Beaubier (Northstar",
				"twin brother) Joanna Beaubier (adopted niece",
				"deceased)",
				"Lois and Genevieve Martin (first cousins once removed/adopted parents",
				"deceased)"
			]
		}
	},
	{
		"id": "azazel",
		"name": "Azazel",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 11,
			"speed": 47,
			"durability": 95,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/azazel.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Semihazah",
				"Duma",
				"Keriel",
				"Mastema",
				"Beliar",
				"Gadreel",
				"Beelzebub",
				"Satan"
			],
			"place_of_birth": "Isla des Demonas, Caribbean Sea",
			"first_appearance": "Uncanny X-Men #428 (2003)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Neyaphem",
			"height": "6'0 // 183 cm",
			"weight": "149 lb // 67 kg",
			"eye_color": "Yellow",
			"hair_color": "Black",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"Leader of the Neyaphem"
			],
			"base": [
				"Brimstone Dimension",
				"formerly La Isla des Demonas, Bermuda"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Kurt Wagner (Nightcrawler",
				"son)",
				"Nils Styger (Abyss",
				"son)",
				"Kiwi Black (son)",
				"numberous other offspring (deceased)"
			]
		}
	},
	{
		"id": "azrael",
		"name": "Azrael",
		"realName": "Michael Washington Lane",
		"stats": {
			"intelligence": 63,
			"strength": 18,
			"speed": 17,
			"durability": 20,
			"power": 35,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/azrael.jpg",
		"biography": {
			"full_name": "Michael Washington Lane",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bat-Devil",
				"Bat-Ghost"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "Batman #672 (February, 2008)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Police Officer",
				"vigilante"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Order of St. Dumas",
				"formerly Gotham City Police Department",
				"Three Ghosts of Batman"
			],
			"relatives": [
				"Mitchell Lane (father",
				"deceased)",
				"Barbara Lane (mother",
				"deceased)",
				"Marion Lane (brother",
				"deceased)",
				"Gwendolyn Lane (sister",
				"deceased)",
				"Chante Coles (wife",
				"deceased)",
				"Henry Mitchell Lane (son",
				"deceased)",
				"Jenny Lane (Sister-in-law)"
			]
		}
	},
	{
		"id": "aztar",
		"name": "Aztar",
		"realName": "Aztar",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/aztar.jpg",
		"biography": {
			"full_name": "Aztar",
			"alter_egos": [
				"Spectre"
			],
			"aliases": [
				"Spirit of Vengeance"
			],
			"place_of_birth": "-",
			"first_appearance": "More Fun Comics #52 (February 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Presence"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bane",
		"name": "Bane",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 38,
			"speed": 23,
			"durability": 56,
			"power": 51,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bane.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman: Vengeance of Bane #1 (January, 1993)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'8 // 203 cm",
			"weight": "400 lb // 180 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Santa Prisca"
			]
		},
		"connections": {
			"group_affiliation": [
				"Suicide Squad",
				"The Secret Society of Super Villains"
			],
			"relatives": [
				"King Snake (father)"
			]
		}
	},
	{
		"id": "banshee",
		"name": "Banshee",
		"realName": "Sean Cassidy",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 58,
			"durability": 40,
			"power": 63,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/banshee.jpg",
		"biography": {
			"full_name": "Sean Cassidy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Death"
			],
			"place_of_birth": "Cassidy Keep, Ireland",
			"first_appearance": "X-Men #28 (January, 1967)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Green",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"Currently founder and director of operation for X-Corps",
				"formerly Adventurer and Headmaster at the Massachusetts Academy",
				"in charge of Generation X",
				"Interpol Inspector and Agent",
				"freelance detective",
				"professional criminal",
				"involuntary operative for Factor"
			],
			"base": [
				"Muir Island, off the coast of Scotland. formerly Massachusetts Academy",
				"Xavier Institute"
			]
		},
		"connections": {
			"group_affiliation": [
				"Currently X-Corps",
				"formerly Generation X",
				"Factor Three",
				"X-Men"
			],
			"relatives": [
				"Maeve Rourke Cassidy (wife",
				"deceased)",
				"Thomas (Black Tom",
				"cousin)",
				"Theresa Rourke (Siryn",
				"daughter)"
			]
		}
	},
	{
		"id": "bantam",
		"name": "Bantam",
		"realName": "Roberto Velasquez",
		"stats": {
			"intelligence": 25,
			"strength": 53,
			"speed": 23,
			"durability": 54,
			"power": 21,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bantam.jpg",
		"biography": {
			"full_name": "Roberto Velasquez",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Civil War: Front Line #3 (September, 2006)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "119 lb // 54 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"boxing trainer",
				"former boxer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Captain America",
				"Pro-Registration forces"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "batgirl",
		"name": "Batgirl",
		"realName": "Barbara Gordon",
		"stats": {
			"intelligence": 88,
			"strength": 11,
			"speed": 33,
			"durability": 40,
			"power": 34,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl.jpg",
		"biography": {
			"full_name": "Barbara Gordon",
			"alter_egos": [
				"Oracle"
			],
			"aliases": [
				"Oracle",
				"Bluebelle"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #359",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "126 lb // 57 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City, formerly Metropolis, Platinum Flats"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"James Gordon (father) � Barbara Eileen (mother) � James Gordon",
				"Jr. (brother)"
			]
		}
	},
	{
		"id": "batgirl-i",
		"name": "Batgirl I",
		"realName": "Mary Elizabeth Kane",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl-i.jpg",
		"biography": {
			"full_name": "Mary Elizabeth Kane",
			"alter_egos": [
				"Hawkfire"
			],
			"aliases": [
				"Bette Kane",
				"Bat-Girl"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #139",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Crime-fighter"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former associated partner of Batman and Robin of Earth-One",
				"Partner of Katherine Kane"
			],
			"relatives": [
				"Katherine Kane (Batwoman I",
				"Aunt)"
			]
		}
	},
	{
		"id": "batgirl-iii",
		"name": "Batgirl III",
		"realName": "Helena Rosa Bertinelli",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl-iii.jpg",
		"biography": {
			"full_name": "Helena Rosa Bertinelli",
			"alter_egos": [
				"Huntress"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "batgirl-iv",
		"name": "Batgirl IV",
		"realName": "Cassandra Cain",
		"stats": {
			"intelligence": 69,
			"strength": 12,
			"speed": 27,
			"durability": 56,
			"power": 46,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl-iv.jpg",
		"biography": {
			"full_name": "Cassandra Cain",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kasumi",
				"various mundane persona",
				""
			],
			"place_of_birth": "League of Assassins (exact base is unknown)",
			"first_appearance": "Batman: Legends of the Dark Knight #120",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City",
				"Bl�dhaven",
				"Tibet",
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Titans East",
				"League of Assassins",
				"Batman Family",
				"Justice League Elite",
				"Young Justice"
			],
			"relatives": [
				"David Cain (father)",
				"Lady Shiva (mother)",
				"Carolyn (aunt",
				"deceased)",
				"Annalea (sibling",
				"deceased)",
				"'The Mad Dog' (sibling)"
			]
		}
	},
	{
		"id": "batgirl-v",
		"name": "Batgirl V",
		"realName": "Charlotte Gage-Radcliffe",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl-v.jpg",
		"biography": {
			"full_name": "Charlotte Gage-Radcliffe",
			"alter_egos": [
				"Misfit"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "batgirl-vi",
		"name": "Batgirl VI",
		"realName": "Stephanie Brown",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 22,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batgirl-vi.jpg",
		"biography": {
			"full_name": "Stephanie Brown",
			"alter_egos": [
				"Spoiler"
			],
			"aliases": [
				"Steph",
				"Robin",
				"Marion Todd",
				"Spoiler"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"College student at Gotham University"
			],
			"base": [
				"Gotham Heights, Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Batman Family",
				"formerly the Birds of Prey",
				"Tim Drake (on-and-off boyfriend)"
			],
			"relatives": [
				"Arthur Brown (The Cluemaster",
				"father)",
				"Crystal Brown (mother)",
				"unnamed daughter (given up for adoption)"
			]
		}
	},
	{
		"id": "batman",
		"name": "Batman",
		"realName": "Bruce Wayne",
		"stats": {
			"intelligence": 100,
			"strength": 26,
			"speed": 27,
			"durability": 50,
			"power": 47,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batman.jpg",
		"biography": {
			"full_name": "Bruce Wayne",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Insider",
				"Matches Malone"
			],
			"place_of_birth": "Crest Hill, Bristol Township; Gotham County",
			"first_appearance": "Detective Comics #27",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "blue",
			"hair_color": "black"
		},
		"work": {
			"occupation": [
				"Businessman"
			],
			"base": [
				"Batcave, Stately Wayne Manor, Gotham City",
				"Hall of Justice, Justice League Watchtower"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Batman Incorporated",
				"Justice League",
				"Outsiders",
				"Wayne Enterprises",
				"Club of Heroes",
				"formerly White Lantern Corps",
				"Sinestro Corps"
			],
			"relatives": [
				"Damian Wayne (son)",
				"Dick Grayson (adopted son)",
				"Tim Drake (adopted son)",
				"Jason Todd (adopted son)",
				"Cassandra Cain (adopted ward)\nMartha Wayne (mother",
				"deceased)",
				"Thomas Wayne (father",
				"deceased)",
				"Alfred Pennyworth (former guardian)",
				"Roderick Kane (grandfather",
				"deceased)",
				"Elizabeth Kane (grandmother",
				"deceased)",
				"Nathan Kane (uncle",
				"deceased)",
				"Simon Hurt (ancestor)",
				"Wayne Family"
			]
		}
	},
	{
		"id": "batman",
		"name": "Batman",
		"realName": "Terry McGinnis",
		"stats": {
			"intelligence": 81,
			"strength": 40,
			"speed": 29,
			"durability": 55,
			"power": 63,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batman.jpg",
		"biography": {
			"full_name": "Terrence McGinnis",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Batman II",
				"The Tomorrow Knight",
				"The second Dark Knight",
				"The Dark Knight of Tomorrow",
				"Batman Beyond"
			],
			"place_of_birth": "Gotham City, 25th Century",
			"first_appearance": "Batman Beyond #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"21st Century Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Justice League Unlimited"
			],
			"relatives": [
				"Bruce Wayne (biological father)",
				"Warren McGinnis (father",
				"deceased)",
				"Mary McGinnis (mother)",
				"Matt McGinnis (brother)"
			]
		}
	},
	{
		"id": "batman-ii",
		"name": "Batman II",
		"realName": "Dick Grayson",
		"stats": {
			"intelligence": 88,
			"strength": 11,
			"speed": 33,
			"durability": 28,
			"power": 36,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batman-ii.jpg",
		"biography": {
			"full_name": "Richard John Grayson",
			"alter_egos": [
				"Nightwing",
				"Robin I"
			],
			"aliases": [
				"Dick Grayson"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City",
				"formerly Bludhaven, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League Of America",
				"Batman Family"
			],
			"relatives": [
				"John Grayson (father",
				"deceased)",
				"Mary Grayson (mother",
				"deceased)",
				"Bruce Wayne / Batman (adoptive father)",
				"Damian Wayne / Robin (foster brother)",
				"Jason Todd / Red Hood (adoptive brother)",
				"Tim Drake / Red Robin (adoptive brother)",
				"Cassandra Cain / Batgirl IV (adoptive sister)"
			]
		}
	},
	{
		"id": "battlestar",
		"name": "Battlestar",
		"realName": "Lemar Hoskins ",
		"stats": {
			"intelligence": 50,
			"strength": 53,
			"speed": 35,
			"durability": 74,
			"power": 48,
			"combat": 74
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/battlestar.jpg",
		"biography": {
			"full_name": "Lemar Hoskins",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bucky"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "Captain America #323 (1986); (as Bucky)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'6 // 198 cm",
			"weight": "295 lb // 133 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former wrestler",
				"federal operative"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Wild Pack",
				"Bold Urban Commandos (Buckies)",
				"former partner of U.S.Agent",
				"operative of the Commission on Superhuman Activities"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "batwoman-v",
		"name": "Batwoman V",
		"realName": "Katherine Rebecca Kane",
		"stats": {
			"intelligence": 81,
			"strength": 8,
			"speed": 29,
			"durability": 25,
			"power": 27,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/batwoman-v.jpg",
		"biography": {
			"full_name": "Katherine Rebecca Kane",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "52 #7 (June, 2006)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family (unofficially)",
				"D.E.O",
				"Unknowns"
			],
			"relatives": [
				"Jacob Kane (father)",
				"Gabi Kane (mother",
				"deceased)",
				"Beth Kane (twin sister)",
				"Mary Elizabeth \"Bette\" Kane (cousin)",
				"Catherine Hamilton-Kane (stepmother)",
				"Philip Kane (uncle)",
				"Kane Family"
			]
		}
	},
	{
		"id": "beak",
		"name": "Beak",
		"realName": "Barnell Bohusk ",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/beak.jpg",
		"biography": {
			"full_name": "Barnell Bohusk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Blackwing"
			],
			"place_of_birth": "Cheverly, Maryland",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Black",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly New Warriors",
				"Exiles",
				"Brotherhood Of Mutants",
				"Xavier Institute Student Body"
			],
			"relatives": [
				"Charles (father)",
				"Kathy (mother)",
				"Angel Salvadore (wife)",
				"Tito (son)",
				"Axel (son)",
				"Kara (daughter)",
				"three unidentified children"
			]
		}
	},
	{
		"id": "beast",
		"name": "Beast",
		"realName": "Henry Philip McCoy",
		"stats": {
			"intelligence": 94,
			"strength": 48,
			"speed": 38,
			"durability": 60,
			"power": 43,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/beast.jpg",
		"biography": {
			"full_name": "Henry Philip McCoy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dr. McCoy",
				"Hanko",
				"Kreature",
				"Mutate #666",
				"Magilla Gorilla",
				"Golden Armed Boy"
			],
			"place_of_birth": "Dunfee, Illinois",
			"first_appearance": "X-MEN Vol. 1 #1, (in furry ape form) AMAZING ADVENTURES #11, (in current feline form) NEW X-MEN Vol. 1 #114",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'11 // 180 cm",
			"weight": "402 lb // 181 kg",
			"eye_color": "Blue",
			"hair_color": "Blue",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Biochemist",
				"formerly Xavier Institute for Higher Learning science and math Instructor",
				"mutant activist",
				"college lecturer",
				"researcher",
				"professional wrestler"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Avengers",
				"S.W.O.R.D.",
				"formerly X-Men (founding member)",
				"X-Club (founding member)",
				"Initiative",
				"198",
				"X-Treme X-Men",
				"Acolytes (while mind-controlled)",
				"Queen's Vengeance",
				"X-Factor/X-Terminators (founding member)",
				"Rejects",
				"Defenders",
				"Avengers"
			],
			"relatives": [
				"Sadie McCoy (paternal grandmother)",
				"Norton McCoy (father)",
				"Edna McCoy (mother)",
				"Robert McCoy (paternal great-uncle)",
				"John McCoy (uncle)"
			]
		}
	},
	{
		"id": "beast-boy",
		"name": "Beast Boy",
		"realName": "Garfield Mark Logan",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 50,
			"durability": 70,
			"power": 79,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/beast-boy.jpg",
		"biography": {
			"full_name": "Garfield Mark Logan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Changeling",
				"Beast-Brat",
				"Green Jeans",
				"Salad-head",
				"Sprout",
				"Tork",
				"Craig Logan"
			],
			"place_of_birth": "-",
			"first_appearance": "Doom Patrol #99 (November, 1965)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'8 // 173 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Green",
			"hair_color": "Green",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Struggling Actor"
			],
			"base": [
				"Prague",
				"formerly Hollywood, California",
				"formerly Manhattan, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"former member of the original Doom Patrol",
				"Titans West"
			],
			"relatives": [
				"Mark Logan (father",
				"deceased)",
				"Marie Logan (mother",
				"deceased)",
				"Steve Dayton/Mento (adoptive father)",
				"Rita Farr/Elasti-Girl (adoptive mother)",
				"Matt Logan (cousin)"
			]
		}
	},
	{
		"id": "beetle",
		"name": "Beetle",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/beetle.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ben-10",
		"name": "Ben 10",
		"realName": "Benjamin Kirby Tennyson",
		"stats": {
			"intelligence": 10,
			"strength": 7,
			"speed": 8,
			"durability": 10,
			"power": 90,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ben-10.jpg",
		"biography": {
			"full_name": "Benjamin Kirby Tennyson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ben Ten"
			],
			"place_of_birth": "-",
			"first_appearance": "Ben 10 S01E01",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "beta-ray-bill",
		"name": "Beta Ray Bill",
		"realName": "Beta Ray Bill (translation of his Korbinite name)",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 35,
			"durability": 95,
			"power": 100,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/beta-ray-bill.jpg",
		"biography": {
			"full_name": "Beta Ray Bill (translation of his Korbinite name)",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Beta Ray Thor",
				"Simon Walters"
			],
			"place_of_birth": "Burning Galaxy",
			"first_appearance": "Thor #337",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'7 // 201 cm",
			"weight": "480 lb // 216 kg",
			"eye_color": "-",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Guardian of the Korbinite race"
			],
			"base": [
				"currently New York City, formerly Asgard, formerly the fleet of Korbinite ships."
			]
		},
		"connections": {
			"group_affiliation": [
				"ally of the Asgardians",
				"Thor Corps",
				"Star Masters"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "beyonder",
		"name": "Beyonder",
		"realName": "",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/beyonder.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ataxi",
				"The Beyond Realm",
				"Frank",
				"Goblin Force",
				"Goblin King",
				"Goblyn King",
				"Goblin Queen",
				"The One From Beyond",
				"God",
				"Kosmos",
				"Maker"
			],
			"place_of_birth": "Created in the Beyond",
			"first_appearance": "Marvel Super-Heroes Secret Wars #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Former student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Was once in a merged form with the Molecule Man but is no longer merged with him."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "big-barda",
		"name": "Big Barda",
		"realName": "Barda Free",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 79,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/big-barda.jpg",
		"biography": {
			"full_name": "Barda Free",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Barda",
				"the Strongest Woman in the World"
			],
			"place_of_birth": "-",
			"first_appearance": "Mister Miracle (Volume 1) #4",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "New God",
			"height": "6'2 // 188 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City, New Genesis, formerly Apokolips"
			]
		},
		"connections": {
			"group_affiliation": [
				"Apocalypse",
				"New Gods",
				"Birds of Prey",
				"formerly Female Furies",
				"formerly Justice League of America"
			],
			"relatives": [
				"Big Breeda (mother)",
				"Scott Free (Mister Miricle",
				"husband)",
				"Highfather Izaya (father-in-law",
				"deceased)"
			]
		}
	},
	{
		"id": "big-daddy",
		"name": "Big Daddy",
		"realName": "Damon Macready",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 12,
			"durability": 32,
			"power": 22,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/big-daddy.jpg",
		"biography": {
			"full_name": "Damon Macready",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Kick-Ass #4",
			"publisher": "Icon Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Hit-Girl (daughter)"
			]
		}
	},
	{
		"id": "big-man",
		"name": "Big Man",
		"realName": "Frederick Foswell",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 23,
			"durability": 28,
			"power": 19,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/big-man.jpg",
		"biography": {
			"full_name": "Frederick Foswell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Patch"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man # 10 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "157 lb // 71 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Reporter",
				"professional criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Daily Bugle",
				"the Enforcers"
			],
			"relatives": [
				"Janice Foswell (daughter)",
				"unnamed wife"
			]
		}
	},
	{
		"id": "bill-harken",
		"name": "Bill Harken",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 36,
			"speed": 33,
			"durability": 60,
			"power": 27,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bill-harken.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "SyFy",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alpha",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alphas"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "billy-kincaid",
		"name": "Billy Kincaid",
		"realName": "Billy Kincaid",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/billy-kincaid.jpg",
		"biography": {
			"full_name": "Billy Kincaid",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #5 (October 1992)",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "binary",
		"name": "Binary",
		"realName": "Carol Danvers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/binary.jpg",
		"biography": {
			"full_name": "Carol Susan Jane Danvers",
			"alter_egos": [
				"Captain Marvel",
				"Warbird"
			],
			"aliases": [
				"Ms. Marvel",
				"Binary"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former National Aeronautics and Space Administration security Chief",
				"former magazine editor",
				"former freelance writer",
				"former military intelligence officer."
			],
			"base": [
				"Avengers Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"currently Avengers",
				"former companion to the X-Men (as Carol Danvers)",
				"former member of the Starjammers (as Binary)",
				"Former Avenger (as Ms. Marvel)"
			],
			"relatives": [
				"Joseph (father)",
				"Marie (mother)",
				"Steve (brother",
				"deceased)",
				""
			]
		}
	},
	{
		"id": "bionic-woman",
		"name": "Bionic Woman",
		"realName": "Jamie Sommers",
		"stats": {
			"intelligence": 56,
			"strength": 37,
			"speed": 33,
			"durability": 40,
			"power": 20,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bionic-woman.jpg",
		"biography": {
			"full_name": "Jamie Wells Sommers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Clarissa Whyte"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Cyborg",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bird-brain",
		"name": "Bird-Brain",
		"realName": "",
		"stats": {
			"intelligence": 25,
			"strength": 10,
			"speed": 35,
			"durability": 28,
			"power": 21,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bird-brain.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bird-Boy"
			],
			"place_of_birth": "-",
			"first_appearance": "The New Mutants #56 (October, 1987)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Mutants",
				"Ani-Mate"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bird-man",
		"name": "Bird-Man",
		"realName": "Henry Hawk",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bird-man.jpg",
		"biography": {
			"full_name": "Henry Hawk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Daredevil #10 (October, 1965)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ani-Men"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bird-man-ii",
		"name": "Bird-Man II",
		"realName": "Achille DiBacco",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bird-man-ii.jpg",
		"biography": {
			"full_name": "Achille DiBacco",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "The Bar with No Name, Medina County, Ohio",
			"first_appearance": "Daredevil #157 (March, 1979)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ani-Men"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "birdman",
		"name": "Birdman",
		"realName": "Ray Randal",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/birdman.jpg",
		"biography": {
			"full_name": "Ray Randal",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bird-Man",
				"Harvey Birdman",
				"Ray Randal",
				"Harvey Birdman Attorney at Law",
				"Harry",
				"Henry",
				"Birdbath",
				"Bootyliciuos"
			],
			"place_of_birth": "-",
			"first_appearance": "Birdman and the Galaxy Trio (1967)",
			"publisher": "Hanna-Barbera",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bishop",
		"name": "Bishop",
		"realName": "Lucas Bishop",
		"stats": {
			"intelligence": 63,
			"strength": 14,
			"speed": 23,
			"durability": 75,
			"power": 100,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bishop.jpg",
		"biography": {
			"full_name": "Lucas Bishop",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Archbishop"
			],
			"place_of_birth": "A mutant relocation camp in an undisclosed location on an alternate 21st Century Earth",
			"first_appearance": "Uncanny X-Men #282 (November, 1991)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'6 // 198 cm",
			"weight": "275 lb // 124 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"(current) Adventurer",
				"(former) Commander in the XSE (Xavier's Security Enforcers)"
			],
			"base": [
				"Formerly Xavier Institute for Higher Learning, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"\"Clean City\"",
				"formerly Stryfe",
				"X-Men",
				"X.S.E. (Storm's team)",
				"X-Treme X-Men",
				"X.S.E. (Hecate'e's team)",
				"The Twelve"
			],
			"relatives": [
				"Burnum Bishop (father",
				"deceased)",
				"Kadee Bishop (mother",
				"deceased)",
				"Shard (sister",
				"deceased)",
				"unnamed grandmother",
				"Gateway (great-grandfather)",
				"Aliyah Bishop (alternate reality daughter)",
				""
			]
		}
	},
	{
		"id": "bizarro",
		"name": "Bizarro",
		"realName": "Bizarro",
		"stats": {
			"intelligence": 38,
			"strength": 95,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bizarro.jpg",
		"biography": {
			"full_name": "Bizarro",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Superboy Vol. 1 #68 (1958)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Bizarro",
			"height": "6'3 // 191 cm",
			"weight": "345 lb // 155 kg",
			"eye_color": "Black",
			"hair_color": "Black",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Bizarro World"
			]
		},
		"connections": {
			"group_affiliation": [
				"Superman Revenge Squad",
				"Bizarros of Bizarro World",
				"former associate of the Secret Society of Super-Villains",
				"Joker League of Anarchy",
				"former partner of Batzarro"
			],
			"relatives": [
				"Bizarro-Lois No. 1 (wife",
				"Pre-Crisis only)",
				"Bizarro",
				"Jr. (son",
				"Pre-Crisis only)",
				"Bizarro-Lois",
				"Jr. (daughter",
				"Pre-Crisis only)"
			]
		}
	},
	{
		"id": "black-abbott",
		"name": "Black Abbott",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-abbott.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lord Abbott"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Team Up #146 (1984)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Cult leader",
				"former monk"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "black-adam",
		"name": "Black Adam",
		"realName": "Teth-Adam",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 92,
			"durability": 100,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-adam.jpg",
		"biography": {
			"full_name": "Teth-Adam",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Hassan Bari",
				"Theo Adam",
				"Mighty Adam",
				"Khem-Adam"
			],
			"place_of_birth": "Kahndaq, Egypt",
			"first_appearance": "Marvel Family #1 (December, 1945)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "250 lb // 113 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Mobile",
				"Formerly Kahndaq",
				"Fawcett City",
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"Formerly the Black Marvel Family",
				"Society of Villains",
				"Injustice Society",
				"Justice Society of America"
			],
			"relatives": [
				"Shiruta (wife",
				"deceased)",
				"Gon and Hurut (sons",
				"deceased) Theo Adam (descendant",
				"currently in control of his body)",
				"Sarah Primm (descendant",
				"Theo's sister)",
				"Adrianna Tomaz (wife. deceased)",
				"Amon Tomaz (brother-in-law",
				"deceased)"
			]
		}
	},
	{
		"id": "black-bolt",
		"name": "Black Bolt",
		"realName": "Blackagar Boltagon",
		"stats": {
			"intelligence": 75,
			"strength": 67,
			"speed": 100,
			"durability": 84,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-bolt.jpg",
		"biography": {
			"full_name": "Blackagar Boltagon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Attilan, Atlantic Ocean",
			"first_appearance": "Fantastic Four #45 (December, 1965)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Inhuman",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"King of the Inhumans"
			],
			"base": [
				"Attilan, Blue Area of the Moon"
			]
		},
		"connections": {
			"group_affiliation": [
				"Universal Inhumans",
				"Inhuman Royal Family",
				"formerly Illuminati"
			],
			"relatives": [
				"Medusa (wife and first cousin)",
				"Ahura (son)",
				"Agon (father",
				"deceased)",
				"Rynda(mother",
				"deceased)",
				"Maximus (brother)",
				"Crystal (sister-in-law)",
				"Gorgon",
				"Karnak",
				"Triton (cousins)"
			]
		}
	},
	{
		"id": "black-canary",
		"name": "Black Canary",
		"realName": "Dinah Drake Lance",
		"stats": {
			"intelligence": 63,
			"strength": 8,
			"speed": 33,
			"durability": 15,
			"power": 45,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-canary.jpg",
		"biography": {
			"full_name": "Dinah Drake Lance",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Comics #86 (August, 1947)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "128 lb // 58 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Florist",
				"former private investigator"
			],
			"base": [
				"Gotham City, Park City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America"
			],
			"relatives": [
				"Richard Drake (father)",
				"Lawrence Lance (husband)",
				"Dinah Laurel Lance (Black Canary",
				"daughter)",
				"Oliver Queen (Green Arrow",
				"son-in-law)"
			]
		}
	},
	{
		"id": "black-canary",
		"name": "Black Canary",
		"realName": "Laurel Lance",
		"stats": {
			"intelligence": 63,
			"strength": 8,
			"speed": 33,
			"durability": 20,
			"power": 52,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-canary.jpg",
		"biography": {
			"full_name": "Dinah Laurel Lance",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dinah Laurel Lance Queen",
				"Dinah Laurel Lance-Windrow"
			],
			"place_of_birth": "-",
			"first_appearance": "Justice League of America (Volume 1) #75",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Metahuman",
			"height": "5'7 // 170 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Detective/Crime-fighter",
				"Chairperson of the Justice League of America",
				"former florist",
				"judo instructor"
			],
			"base": [
				"Formerly Oracle's clock tower in Gotham City",
				"formerly Seattle, Washington",
				"formerly Star City, California",
				"formerly New York City, New York (as a member of the JSA)",
				"currently mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Birds of Prey",
				"formerly Justice League of America",
				"Justice Society of America",
				"Justice League Task Force",
				"Justice League International",
				"Team Arrow"
			],
			"relatives": [
				"Larry Lance (father",
				"deceased)",
				"Dinah Drake Lance (Black Canary",
				"mother",
				"deceased)",
				"Oliver Queen (Green Arrow",
				"husband)",
				"Craig Windrow (ex-husband)",
				"Sin (adoptive daughter)"
			]
		}
	},
	{
		"id": "black-cat",
		"name": "Black Cat",
		"realName": "Felicia Hardy",
		"stats": {
			"intelligence": 75,
			"strength": 16,
			"speed": 33,
			"durability": 10,
			"power": 23,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-cat.jpg",
		"biography": {
			"full_name": "Felicia Hardy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Felicity Harmon"
			],
			"place_of_birth": "Queens, New York",
			"first_appearance": "Amazing Spider-Man #194 (July, 1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Cat burglar",
				"Private investigator",
				"founder of Cat's Eye Investigations."
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Heroes for Hire"
			],
			"relatives": [
				"Walter Hardy (father",
				"deceased)",
				"Lydia Hardy (mother)"
			]
		}
	},
	{
		"id": "black-flash",
		"name": "Black Flash",
		"realName": "",
		"stats": {
			"intelligence": 44,
			"strength": 10,
			"speed": 100,
			"durability": 80,
			"power": 100,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-flash.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Barry Allen",
				"Flashback",
				"Slow Lightning",
				"Black Racer",
				"Death Flash",
				"God of Death"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Vol 2 #138",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "black-goliath",
		"name": "Black Goliath",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-goliath.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "black-knight-iii",
		"name": "Black Knight III",
		"realName": "Dane Whitman",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 8,
			"durability": 70,
			"power": 43,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-knight-iii.jpg",
		"biography": {
			"full_name": "Dane Whitman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Pendragon",
				"Gann Josin",
				"Eobar Garrington"
			],
			"place_of_birth": "Gloucester, Massachusetts",
			"first_appearance": "Avengers #47 (1967)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"scientist",
				"former crusader"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"MI-13",
				"formerly Avengers",
				"Masters of Evil (as a mole)",
				"Excalibur",
				"Heroes for Hire",
				"Ultraforce (in the Ultraverse)",
				"Defenders",
				"Knights of Wundagore",
				"Queen's Vengeance",
				"King Richard's Army"
			],
			"relatives": [
				"Nathan Garrett (Black Knight II",
				"uncle",
				"deceased)",
				"Sir Percy of Scandia (Black Knight)",
				"Sir Raston",
				"Eobar Garrington (Black Knights of past eras",
				"ancestors",
				"deceased)",
				"Lady Rosamund",
				"Edward",
				"Geoffrey (ancestral relations",
				"presumed deceased)",
				"Dafydd ap Iowerth",
				"Arthur Pendragon",
				"Mordred the Evil",
				"Morgan Le Fay (distant ancestral relations)"
			]
		}
	},
	{
		"id": "black-lightning",
		"name": "Black Lightning",
		"realName": "Jefferson Pierce",
		"stats": {
			"intelligence": 50,
			"strength": 11,
			"speed": 53,
			"durability": 28,
			"power": 70,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-lightning.jpg",
		"biography": {
			"full_name": "Jefferson Pierce",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Black Lightning #1 (April 1977)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Crime Fighter",
				"High School teacher",
				"Former gold-medal-winning Olympic Decathlete",
				"formerly Secretary of Education under Presidents Pete Ross and Lex Luthor."
			],
			"base": [
				"Chicago, Illinois",
				"Metropolis, The Hall & The JLA Watchtower"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America (current)",
				"formerly Presidential Cabinet",
				"The Outsiders (sporadically)",
				"Batman's Brother Eye attack group"
			],
			"relatives": [
				"Unnamed father (deceased)",
				"Lynn Stewart (ex-wife)",
				"Joanna Pierce (niece",
				"deceased)",
				"Anissa Pierce (Thunder",
				"daughter)",
				"Jennifer Pierce (Lightning",
				"daughter)"
			]
		}
	},
	{
		"id": "black-mamba",
		"name": "Black Mamba",
		"realName": "Tanya Sealy",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 35,
			"durability": 42,
			"power": 88,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-mamba.jpg",
		"biography": {
			"full_name": "Tanya Sealy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tanya Sweet"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "Marvel Two-In-One #64",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"professional criminal",
				"former call girl"
			],
			"base": [
				"Mobile, formerly Serpent Citadel"
			]
		},
		"connections": {
			"group_affiliation": [
				"Serpent Squad",
				"Serpent Society",
				"BAD Girls"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "black-manta",
		"name": "Black Manta",
		"realName": "David",
		"stats": {
			"intelligence": 75,
			"strength": 28,
			"speed": 50,
			"durability": 60,
			"power": 76,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-manta.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Devil Ray",
				"Scourge of the Seven Seas",
				"Yellow Lantern"
			],
			"place_of_birth": "-",
			"first_appearance": "Aquaman #35 (August, 1967)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "205 lb // 92 kg",
			"eye_color": "Black",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "black-panther",
		"name": "Black Panther",
		"realName": "T'Challa",
		"stats": {
			"intelligence": 88,
			"strength": 16,
			"speed": 30,
			"durability": 60,
			"power": 41,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-panther.jpg",
		"biography": {
			"full_name": "T'Challa",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mr. Okonkwo",
				"The Man Without Fear",
				"Luke Charles",
				"Black Leopard",
				"the Client",
				"Coal Tiger",
				"has impersonated Daredevil and others on occasion"
			],
			"place_of_birth": "Wakanda, Africa",
			"first_appearance": "Fantastic Four Vol. 1 #52 (1966)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"King and Chieftain of Wakanda",
				"scientist",
				"former school teacher"
			],
			"base": [
				"Wakanda, Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Fantastic Four",
				"Secret Avengers",
				"Avengers",
				"Pendragons",
				"Queen's Vengeance",
				"former Fantastic Force financier"
			],
			"relatives": [
				"Bashenga (paternal ancestor",
				"deceased)",
				"Azzuri the Wise (paternal grandfather",
				"deceased)",
				"Nanali (paternal grandmother",
				"deceased)",
				"Chanda (paternal grandfather",
				"presumably deceased)",
				"T�Chaka (father",
				"deceased)",
				"S'Yan (uncle",
				"deceased)",
				"N�Yami (mother",
				"deceased)",
				"Ramonda (stepmother)",
				"Hunter (adopted brother)",
				"Jakarra (half-brother)",
				"Shuri (sister)",
				"Ororo Munroe (wife)",
				"Joshua Itobo",
				"Ishanta",
				"Zuni",
				"M'Koni",
				"T'Shan (cousins)",
				"Wheeler (cousin by marriage",
				"deceased)",
				"Billy Wheeler (1st cousin once removed)"
			]
		}
	},
	{
		"id": "black-widow",
		"name": "Black Widow",
		"realName": "Natasha Romanoff",
		"stats": {
			"intelligence": 75,
			"strength": 13,
			"speed": 33,
			"durability": 30,
			"power": 36,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-widow.jpg",
		"biography": {
			"full_name": "Natalia Alianovna Romanova",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Yelena Belova",
				"Natasha Romanoff",
				"Natasha",
				"Tasha",
				"Madame Natasha",
				"Nancy Rushman",
				"Laura Matthers",
				"Nadine Roman",
				"\"Oktober\"",
				"Black Pearl",
				"Ebon Flame"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales of Suspense #52",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "131 lb // 59 kg",
			"eye_color": "Green",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Intelligence agent",
				"former ballerina"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Avengers",
				"formerly Thunderbolts (as Yelena Belova)",
				"Nick Fury",
				"Mighty Avengers",
				"S.H.I.E.L.D.",
				"Avengers",
				"Champions of Los Angeles",
				"Lady Liberators",
				"KGB",
				"\"Marvel Knights\"",
				"partner of Daredevil",
				"Hawkeye",
				"Boris Turgenov",
				"Logan"
			],
			"relatives": [
				"Unnamed parents (presumed deceased)",
				"Alexi Shostakov (Red Guardian",
				"estranged husband)",
				"Vindiktor (alleged brother",
				"deceased)"
			]
		}
	},
	{
		"id": "black-widow-ii",
		"name": "Black Widow II",
		"realName": "Yelena Belova",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/black-widow-ii.jpg",
		"biography": {
			"full_name": "Yelena Belova",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7' // 170 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blackout",
		"name": "Blackout",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 45,
			"durability": 80,
			"power": 45,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blackout.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Ghost Rider Vol 3 #2 (June, 1990)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "6'3 // 191 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Red",
			"hair_color": "White",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"Assassin",
				"enforcer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Lilin",
				"Deathwatch",
				"Hood's gang"
			],
			"relatives": [
				"Lilith (Great Grandmother)"
			]
		}
	},
	{
		"id": "blackwing",
		"name": "Blackwing",
		"realName": "Joseph Manfredi",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 35,
			"durability": 32,
			"power": 20,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blackwing.jpg",
		"biography": {
			"full_name": "Joseph Manfredi",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Blackwing",
				"Joe Manfredi",
				"Joe Silvermane",
				"Guiseppi Manfredi"
			],
			"place_of_birth": "Professional Criminal",
			"first_appearance": "Daredevil #118 (February, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Heavy Mettle",
				"(formerly) Masters of Evil",
				"Skeleton Crew",
				"Circus of Crime",
				"(formerly) division leader of Hydra"
			],
			"relatives": [
				"Silvio Manfredi (Silvermane",
				"father)",
				"Caterina Manfredi (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "blackwulf",
		"name": "Blackwulf",
		"realName": "Lucian",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 8,
			"durability": 30,
			"power": 69,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blackwulf.jpg",
		"biography": {
			"full_name": "Lucian",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pelops",
				"Black Wolf"
			],
			"place_of_birth": "Armechadon",
			"first_appearance": "Thunderstrike #6 (March, 1994)",
			"publisher": "Marvel Comics",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alien",
			"height": "6'2 // 188 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Red",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Freedom Fighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Underground Legion"
			],
			"relatives": [
				"Tantalus (father)",
				"Nirvana (mother)",
				"Pelops (brother",
				"deceased)"
			]
		}
	},
	{
		"id": "blade",
		"name": "Blade",
		"realName": "Eric Brooks",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 38,
			"durability": 50,
			"power": 40,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blade.jpg",
		"biography": {
			"full_name": "Eric Brooks",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Switchblade",
				"Frank Blade",
				"Daywalker"
			],
			"place_of_birth": "Soho, London,England",
			"first_appearance": "Tomb of Dracula Vol. 1 #10 (1973)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Vampire",
			"height": "6'2 // 188 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Vampire hunter",
				"former private investigator."
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Noah van Helsing's vampire hunters",
				"Nightstalkers",
				"Midnight Sons",
				"the Nine",
				"Quincy Harker's vampire hunters",
				"Ogun Strong's vampire hunters",
				"Bloodshadows gang"
			],
			"relatives": [
				"Tara Brooks (mother)"
			]
		}
	},
	{
		"id": "blaquesmith",
		"name": "Blaquesmith",
		"realName": "-",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blaquesmith.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Vertigo II"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Inventor"
			],
			"base": [
				"Baltimore, Maryland"
			]
		},
		"connections": {
			"group_affiliation": [
				"Clan Askani/Clan Chosen"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bling",
		"name": "Bling!",
		"realName": "Roxanne Washington ",
		"stats": {
			"intelligence": 69,
			"strength": 14,
			"speed": 12,
			"durability": 90,
			"power": 52,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bling.jpg",
		"biography": {
			"full_name": "Roxanne Washington",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men #171 (2005)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "152 lb // 68 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Utopia",
				"formerly Graymalkin Industries, San Francisco, California",
				"Xavier Institute, Salem Center, New York State"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Roy \"Daddy Libido\" Washington (father)",
				"Angel \"Sexy Mutha\" Depres (mother)"
			]
		}
	},
	{
		"id": "blink",
		"name": "Blink",
		"realName": "Clarice Ferguson",
		"stats": {
			"intelligence": 50,
			"strength": 8,
			"speed": 20,
			"durability": 28,
			"power": 77,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blink.jpg",
		"biography": {
			"full_name": "Clarice Ferguson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Bahamas",
			"first_appearance": "Uncanny X-Men #317 (October, 1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'5 // 165 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Green",
			"hair_color": "Magenta",
			"skin_color": "Pink"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"freedom fighter"
			],
			"base": [
				"Jean Grey School for Higher Learning, Salem Center, Westchester County, New York",
				"formerly Black Rome, Necrosha"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Mutants",
				"formerly X-Men",
				"Selene's Inner Circle"
			],
			"relatives": [
				"Apocalypse (ancestor",
				"deceased)",
				"Margaret Slade (ancestor",
				"deceased)",
				"Hamilton Slade (distant relative",
				"deceased)",
				"Frederick Slade (great-great-grandfather)",
				"Ms. Ferguson (great-great-grandmother",
				"deceased)",
				"Chamber (distant cousin)",
				"Clan Akkaba (relatives)"
			]
		}
	},
	{
		"id": "blizzard",
		"name": "Blizzard",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blizzard.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blizzard-i",
		"name": "Blizzard I",
		"realName": "Gregor Shapanka",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blizzard-i.jpg",
		"biography": {
			"full_name": "Gregor Shapanka",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jack Frost"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales of Suspense #45",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"mercenary",
				"engineer",
				"former scientist"
			],
			"base": [
				"New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former employee of Justin Hammer",
				"partner of Blacklash and Melter"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blizzard-ii",
		"name": "Blizzard II",
		"realName": "Donald Gill",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 27,
			"durability": 42,
			"power": 47,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blizzard-ii.jpg",
		"biography": {
			"full_name": "Donald Gill",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Newark, Delaware",
			"first_appearance": "Iron Man #223 (1987)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former mercenary and professional criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Thunderbolts",
				"Hammer Industries"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blob",
		"name": "Blob",
		"realName": "Frederick J. Dukes",
		"stats": {
			"intelligence": 10,
			"strength": 83,
			"speed": 23,
			"durability": 95,
			"power": 28,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blob.jpg",
		"biography": {
			"full_name": "Frederick J. Dukes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Lubbock, Texas",
			"first_appearance": "X-Men #3 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "510 lb // 230 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Former criminal",
				"terrorist",
				"government agent",
				"carnival performer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Cell",
				"formerly X-Corps",
				"Magneto's army",
				"Brotherhood Of Evil Mutants",
				"Freedom Force",
				"Factor Three",
				"former partner of Unus"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bloodaxe",
		"name": "Bloodaxe",
		"realName": "Jackie Lukus",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 33,
			"durability": 80,
			"power": 100,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bloodaxe.jpg",
		"biography": {
			"full_name": "Jackie Lukus",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Jackie Lukus) Thor #392 (as Bloodaxe) Thor #449",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "7'2 // 218 cm",
			"weight": "1100 lb // 495 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Architect",
				"former vigilante"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bloodhawk",
		"name": "Bloodhawk",
		"realName": "Lemuel Krug",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 50,
			"durability": 80,
			"power": 80,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bloodhawk.jpg",
		"biography": {
			"full_name": "Lemuel Krug",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lemuel Halcon"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men (2099) #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Peditioners",
				"formerly X-Men",
				"Halo City Protectorate",
				"Oasis"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bloodwraith",
		"name": "Bloodwraith",
		"realName": "Sean Dolan",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bloodwraith.jpg",
		"biography": {
			"full_name": "Sean Dolan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Black Wraith",
				"Blood Wraith"
			],
			"place_of_birth": "-",
			"first_appearance": "(Dolan) Black Knight #2 (1990); (Bloodwraith) Avengers Annual #22 (1993)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "100'0 // 30.5 meters",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Former squire"
			],
			"base": [
				"Slorenia"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blue-beetle",
		"name": "Blue Beetle",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blue-beetle.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "blue-beetle-i",
		"name": "Blue Beetle I",
		"realName": "Daniel Garrett",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blue-beetle-i.jpg",
		"biography": {
			"full_name": "Daniel Garrett",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Daniel Garret (spelling variation)"
			],
			"place_of_birth": "-",
			"first_appearance": "Mystery Men Comics #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Archaeologist",
				"professor of archaeology"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Danielle Garrett (granddaughter)"
			]
		}
	},
	{
		"id": "blue-beetle-ii",
		"name": "Blue Beetle II",
		"realName": "Theodore Kord",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/blue-beetle-ii.jpg",
		"biography": {
			"full_name": "Theodore Kord",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "CAPTAIN ATOM Vol. 1 #83 (1966) (Published by Charlton Comics)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Inventor",
				"President of Kord Omniversal",
				"Crimefighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Justice League of America",
				"formerly the L.A.W.",
				"formerly Super Buddies"
			],
			"relatives": [
				"Jarvis Kord (uncle)"
			]
		}
	},
	{
		"id": "blue-beetle-iii",
		"name": "Blue Beetle III",
		"realName": "Jaime Reyes",
		"stats": {
			"intelligence": 50,
			"strength": 34,
			"speed": 58,
			"durability": 80,
			"power": 100,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/blue-beetle-iii.jpg",
		"biography": {
			"full_name": "Jaime Reyes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Scooter"
			],
			"place_of_birth": "Presumed to be El Paso",
			"first_appearance": "Infinite Crisis #3 (2006)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"El Paso, Texas"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League International",
				"Posse",
				"Teen Titans"
			],
			"relatives": [
				"Alberto Reyes (father)",
				"Bianca Reyes (mother)",
				"Milagro Reyes (younger sister)",
				"Alejandro Reyes (grandfather",
				"deceased)",
				"Elena Leal (maternal grandmother)"
			]
		}
	},
	{
		"id": "boba-fett",
		"name": "Boba Fett",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 38,
			"durability": 36,
			"power": 68,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/boba-fett.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Teff",
				"Sava Brek Madak",
				"Jaster Mereel",
				"Mandalore",
				"Mand'alor"
			],
			"place_of_birth": "Kamino",
			"first_appearance": "-",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Clone",
			"height": "6'0 // 183 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Bounty Hunter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bolt",
		"name": "Bolt",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bolt.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bomb-queen",
		"name": "Bomb Queen",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bomb-queen.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Bomb Queen (2006) #1",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Dictator of New Port City",
				"The Four Queens"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "boom-boom",
		"name": "Boom-Boom",
		"realName": "Tabitha Smith",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 12,
			"durability": 42,
			"power": 57,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/boom-boom.jpg",
		"biography": {
			"full_name": "Tabitha Smith",
			"alter_egos": [
				"Meltdown"
			],
			"aliases": [
				"Time Bomb",
				"Boomer",
				"Meltdown",
				"Tabby",
				"Firecracker",
				"Mutate #35",
				"Nancy Forrester"
			],
			"place_of_birth": "-",
			"first_appearance": "Secret Wars II #5",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'5 // 165 cm",
			"weight": "122 lb // 55 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former student",
				"thief"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Utopians",
				"X-Men (New Charles Xavier School member)",
				"X-Force",
				"X-Men",
				"Nextwave",
				"The Underground",
				"Genoshan Mutates",
				"New Mutants",
				"X-Terminators (founding member)",
				"X-Factor (trainee)",
				"Fallen Angels",
				"Beyonder (associate)"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "boomer",
		"name": "Boomer",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/boomer.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "booster-gold",
		"name": "Booster Gold",
		"realName": "Michael Jon Carter",
		"stats": {
			"intelligence": 69,
			"strength": 85,
			"speed": 42,
			"durability": 70,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/booster-gold.jpg",
		"biography": {
			"full_name": "Michael Jon Carter",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bharjwarj",
				"Bloodspot",
				"Boosteroo",
				"Booster",
				"the Boy Wonder",
				"Buster",
				"Deathstroke",
				"Goldstar",
				"Greatest Hero You've Never Heard Of",
				"Guardian of the Multiverse",
				"Jesus Alvarez",
				"Kid",
				"Killer Moth",
				"The King",
				"Loser Gold",
				"Major Idiot",
				"Man of Gold",
				"Michael Carter",
				"Blac"
			],
			"place_of_birth": "Gotham City, 25th Century",
			"first_appearance": "Booster Gold #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'5 // 196 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Superhero",
				"Founder",
				"C.E.O & Chairman of Booster Gold International"
			],
			"base": [
				"Metropolis, Earth, 21st Century, formerly Gotham City, 25th Century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League International",
				"Time Masters",
				"formerly Conglomerate",
				"Extreme Justice",
				"Super Buddies"
			],
			"relatives": [
				"Jonar Carter (father)",
				"Ellen Carter (mother",
				"deceased)",
				"Michelle Carter (aka Goldstar) (twin sister)",
				"Rip Hunter (son) · Rani (adopted daughter)",
				"Daniel Carter (21st century ancestor)",
				"Rose Levin (ancestor)"
			]
		}
	},
	{
		"id": "box",
		"name": "Box",
		"realName": "Roger Bochs",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/box.jpg",
		"biography": {
			"full_name": "Roger Bochs",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Omega"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "box-iii",
		"name": "Box III",
		"realName": "Dr. Walter Langowski",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/box-iii.jpg",
		"biography": {
			"full_name": "Dr. Walter Langowski",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Box III",
				"Wanda"
			],
			"place_of_birth": "British Columbia",
			"first_appearance": "First appearance unknown",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'4 // 193 cm",
			"weight": "245 lb // 110 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Physics professor",
				"former NFL player"
			],
			"base": [
				"Base of operations unknown"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Flight"
			],
			"relatives": [
				"No known relatives"
			]
		}
	},
	{
		"id": "box-iv",
		"name": "Box IV",
		"realName": "Madison Jeffries",
		"stats": {
			"intelligence": 50,
			"strength": 75,
			"speed": 23,
			"durability": 28,
			"power": 11,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/box-iv.jpg",
		"biography": {
			"full_name": "Madison Jeffries",
			"alter_egos": [
				"Gemini V"
			],
			"aliases": [
				"Gemini",
				"Jack-In-The-Box"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "Alpha Flight #16",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown / Black"
		},
		"work": {
			"occupation": [
				"Inventor",
				"former soldier"
			],
			"base": [
				"Base of operations unknown"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Flight",
				"Gamma Flight",
				"Zodiac",
				"Team_Weapon_X"
			],
			"relatives": [
				"Scramble (Lionel Jeffries",
				"brother",
				"deceased)",
				"Diamond Lil (wife)"
			]
		}
	},
	{
		"id": "brainiac",
		"name": "Brainiac",
		"realName": "Vril Dox",
		"stats": {
			"intelligence": 100,
			"strength": 95,
			"speed": 63,
			"durability": 90,
			"power": 60,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/brainiac.jpg",
		"biography": {
			"full_name": "Vril Dox",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Milton Fine"
			],
			"place_of_birth": "-",
			"first_appearance": "Action Comics #242 (July 1958)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'6 // 198 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Green",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Lex Luthor"
			],
			"relatives": [
				"Vril Dox II (son)",
				"Brainiac 5 (descendant)"
			]
		}
	},
	{
		"id": "brainiac-5",
		"name": "Brainiac 5",
		"realName": "Querl Dox",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 60,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/brainiac-5.jpg",
		"biography": {
			"full_name": "Querl Dox",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Brainiac 5's primary invention is his personal force-shield generator. Brainiac 5 re-discovered the technical process behind original Brainiac's force-shield belt, which is capable of generating a virtually impervious field of protection. The belt must be",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"Unnamed mother",
				"Brainiac (ancestor)"
			]
		}
	},
	{
		"id": "brother-voodoo",
		"name": "Brother Voodoo",
		"realName": "Jericho Drumm",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/brother-voodoo.jpg",
		"biography": {
			"full_name": "Jericho Drumm",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Doctor Voodoo",
				"Sorcerer Supreme"
			],
			"place_of_birth": "Port-au-Prince, Haiti",
			"first_appearance": "Strange Tales #169 (September, 1973)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "Brown",
			"hair_color": "Brown / White"
		},
		"work": {
			"occupation": [
				"Psychologist Houngan (voodoo priest)"
			],
			"base": [
				"Port-au-Prince, Haiti"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Daniel Drumm (brother deceased)",
				"Matilda Drumm (aunt)"
			]
		}
	},
	{
		"id": "brundlefly",
		"name": "Brundlefly",
		"realName": "Seth Brundle",
		"stats": {
			"intelligence": 69,
			"strength": 32,
			"speed": 25,
			"durability": 40,
			"power": 27,
			"combat": 15
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/brundlefly.jpg",
		"biography": {
			"full_name": "Sethaniel Brundle",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Fly"
			],
			"place_of_birth": "-",
			"first_appearance": "The Fly (1986)",
			"publisher": "",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'4 // 193 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "buffy",
		"name": "Buffy",
		"realName": "Buffy Anne Summers",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 42,
			"durability": 70,
			"power": 48,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/buffy.jpg",
		"biography": {
			"full_name": "Buffy Anne Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Anne",
				"The Chosen One",
				"The Vampire Slayer",
				"The Slayer",
				"Buff",
				"B",
				"The Buffster",
				"Belinda",
				"Joan"
			],
			"place_of_birth": "-",
			"first_appearance": "Dark Horse Presents 1998 Annual",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'2 // 157 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Slayer",
				"(formerly) Waitress",
				"DoubleMeat Palace employee",
				"Sunnydale High Counselor"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Slayer Army",
				"Scooby Gang",
				"(formerly) The Initiative",
				"Watchers Council"
			],
			"relatives": [
				"Joyce Summers (mother",
				"deceased)",
				"Hank Summers (father)",
				"Dawn Summers (sister)",
				"Celia (cousin",
				"deceased)",
				"Arlene (aunt)"
			]
		}
	},
	{
		"id": "bullseye",
		"name": "Bullseye",
		"realName": "Lester",
		"stats": {
			"intelligence": 50,
			"strength": 11,
			"speed": 25,
			"durability": 70,
			"power": 20,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bullseye.jpg",
		"biography": {
			"full_name": "Lester",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Benjamin Poindexter",
				"Daredevil",
				"Punisher",
				"Bullseye",
				"Hawkeye",
				"pitcher"
			],
			"place_of_birth": "-",
			"first_appearance": "Daredevil #131 (March, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "blue",
			"hair_color": "blond"
		},
		"work": {
			"occupation": [
				"Assassin",
				"professional criminal",
				"former mercenary"
			],
			"base": [
				"Formerly Avengers Tower",
				"Thunderbolts Mountain"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Dark Avengers",
				"Thunderbolts",
				"employee of Kingpin",
				"Purple Man",
				"Eric Slaughter",
				"Mysterio",
				"formerly US Army"
			],
			"relatives": [
				"Kingmaker (father)"
			]
		}
	},
	{
		"id": "bumblebee",
		"name": "Bumblebee",
		"realName": "Karen Beecher-Duncan",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 25,
			"durability": 10,
			"power": 45,
			"combat": 35
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bumblebee.jpg",
		"biography": {
			"full_name": "Karen Beecher-Duncan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans #45 (December, 1976)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"San Francisco, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Doom Patrol",
				"S.T.A.R. Labs",
				"Formerly Teen Titans"
			],
			"relatives": [
				"Mal Duncan (husband)"
			]
		}
	},
	{
		"id": "bumbleboy",
		"name": "Bumbleboy",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/bumbleboy.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "New X-Men #153",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "bushido",
		"name": "Bushido",
		"realName": "Ryuko Orsono",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 8,
			"durability": 10,
			"power": 19,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/bushido.jpg",
		"biography": {
			"full_name": "Ryuko Orsono",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Titans: Secret Files & Origins #2",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cable",
		"name": "Cable",
		"realName": "Nathan Summers",
		"stats": {
			"intelligence": 88,
			"strength": 48,
			"speed": 23,
			"durability": 56,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cable.jpg",
		"biography": {
			"full_name": "Nathan Christopher Charles Summers Dayspring",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Chosen One",
				"Soldier X",
				"Nathan Dayspring",
				"Askani'son",
				"Nathan Dayspring Summers",
				"Nathan Winters",
				"The Traveller",
				"The Saviour"
			],
			"place_of_birth": "Unrevealed location in the 20th Century United States",
			"first_appearance": "New Mutants #86 (as Cable)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'8 // 203 cm",
			"weight": "350 lb // 158 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"(current) Adventurer",
				"(former) freedom fighter",
				"United States government agent",
				"mercenary",
				"combat instructor for X-Force"
			],
			"base": [
				"The Xavier Institute, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Force",
				"(former) X-Men",
				"Clan Askani",
				"Clan Chosen",
				"Six Pack (formerly Wild Pack II)"
			],
			"relatives": [
				"Scott Summers (Cyclops",
				"father)",
				"Madelyne Pryor-Summers (Goblin Queen",
				"mother",
				"deceased)",
				"Jean Grey (Phoenix",
				"stepmother)",
				"Alexander Summers (Havok",
				"uncle)",
				"Christopher Summers (Corsair",
				"paternal grandfather)",
				"Katherine Anne Summers (paternal grandmother",
				"deceased)",
				"Philip Summers (great-grandfather)",
				"Deborah Summers (great-grandmother)",
				"Jenskot (Aliya",
				"wife",
				"deceased)",
				"Tyler (Genesis",
				"son",
				"deceased)",
				"Stryfe (clone",
				"deceased)",
				"Gabriel Summers (Vulcan",
				"uncle)"
			]
		}
	},
	{
		"id": "callisto",
		"name": "Callisto",
		"realName": "Callisto",
		"stats": {
			"intelligence": 63,
			"strength": 53,
			"speed": 23,
			"durability": 42,
			"power": 52,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/callisto.jpg",
		"biography": {
			"full_name": "Callisto",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-MEN (first series) #169",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"The Xavier Institute, Salem Center, Westchester County, New York State, (former) The Alley (beneath Manhattan's surface), X-Factor I's sentient starship"
			]
		},
		"connections": {
			"group_affiliation": [
				"Excalibur",
				"Morlocks",
				"Gene Nation"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cameron-hicks",
		"name": "Cameron Hicks",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 51,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cameron-hicks.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "SyFy",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alpha",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alphas"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cannonball",
		"name": "Cannonball",
		"realName": "Samuel Zachery Guthrie",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 67,
			"durability": 99,
			"power": 94,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cannonball.jpg",
		"biography": {
			"full_name": "Samuel Zachery Guthrie",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Formerly Samson Guthry",
				"Sam Guthrie",
				"Jet-Ass"
			],
			"place_of_birth": "Cumberland County, Kentucky",
			"first_appearance": "Marvel Graphic Novel #4 (1982)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "181 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"peacekeeper",
				"former student",
				"mercenary",
				"miner"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly X.S.E.",
				"Mutant Liberation Front",
				"X-Treme X-Men",
				"X-Corporation",
				"X-Force",
				"New Mutants",
				"Hellions",
				"Hellfire Club"
			],
			"relatives": [
				"Thomas Zebulon (father",
				"deceased)",
				"Lucinda (mother)",
				"Lucas Bartholemew (uncle)",
				"Paige (Husk",
				"sister)",
				"Joshua \"Jay\" (Icarus",
				"brother",
				"deceased)",
				"Joelle (sister)",
				"Elizabeth (sister)",
				"Melody (Aero",
				"sister)",
				"Jebediah (brother)",
				"Lewis (brother)",
				"two other unnamed siblings",
				"Ray Jr. (adopted brother)"
			]
		}
	},
	{
		"id": "captain-america",
		"name": "Captain America",
		"realName": "Steve Rogers",
		"stats": {
			"intelligence": 69,
			"strength": 19,
			"speed": 38,
			"durability": 55,
			"power": 60,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-america.jpg",
		"biography": {
			"full_name": "Steven Grant Rogers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nomad",
				"The Captain"
			],
			"place_of_birth": "Manhattan, New York City, New York",
			"first_appearance": "Captain America Comics #1 (March 1941)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "blue",
			"hair_color": "blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"federal official",
				"intelligence operative",
				"former soldier",
				"Hydra agent",
				"liaison between S.H.I.E.L.D. and the Avengers",
				"police officer",
				"teacher",
				"sparring partner."
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Avengers (Black OPS Unit Formerly",
				"The Avengers",
				"Secret Avengers (Civil War)",
				"New Avengers",
				"formerly The Invaders",
				"Secret Defenders The Redeemers",
				"formerly partner of Bucky",
				"Golden Girl",
				"Rick Jones",
				"Falcon",
				"Demolition-Man and Nomad (Jack Monroe)"
			],
			"relatives": [
				"Joseph (father",
				"deceased)",
				"Sara (mother",
				"deceased)",
				"Ian Zola (Nomad) (adopted son)"
			]
		}
	},
	{
		"id": "captain-atom",
		"name": "Captain Atom",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-atom.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "captain-britain",
		"name": "Captain Britain",
		"realName": "Brian Braddock",
		"stats": {
			"intelligence": 75,
			"strength": 77,
			"speed": 50,
			"durability": 60,
			"power": 31,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-britain.jpg",
		"biography": {
			"full_name": "Brian Braddock",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Britannic",
				"Black Bishop",
				"Jungle Man",
				"King of Otherworld",
				"Merlinson"
			],
			"place_of_birth": "Braddock Manor, England",
			"first_appearance": "Captain Britain #1 (October, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'6 // 198 cm",
			"weight": "257 lb // 116 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly King of Otherworld",
				"scientist"
			],
			"base": [
				"Lighthouse, Earth Orbit",
				"Starlight Citadel, Otherworld",
				"formerly Braddock Manor",
				"Braddock Lighthouse, England",
				"New York City (during exchange trip, specifically Peter Parker's Manhattan apartment)",
				"flat near Thames University, London"
			]
		},
		"connections": {
			"group_affiliation": [
				"Braddock Academy",
				"Captain Britain Corps",
				"MI-13",
				"formerly Excalibur",
				"Hellfire Club (London Branch)",
				"Secret Avengers",
				"Court of Otherworld",
				"Knights of Pendragon's ally",
				"Future Iron Man's Team"
			],
			"relatives": [
				"John Braddock (ancestor",
				"possibly grandfather)",
				"James Braddock",
				"Sr. (father",
				"deceased)",
				"Lady Elizabeth Braddock (mother",
				"deceased)",
				"James Braddock",
				"Jr. (brother)",
				"Elizabeth Braddock (twin sister)",
				"Meggan (wife)",
				"William Puceanu (father-in-law)"
			]
		}
	},
	{
		"id": "captain-cold",
		"name": "Captain Cold",
		"realName": "Leonard Snart",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 17,
			"durability": 20,
			"power": 28,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-cold.jpg",
		"biography": {
			"full_name": "Leonard Snart",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Citizen Cold",
				"Kid Kold",
				"Len Snart",
				"Leonard Snart",
				"Leonards Wynters",
				"The Man Who Mastered Absolute Zero"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Vol 4 #6 (April, 2012)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional Criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League",
				"Rogues",
				"formerly Secret Society of Super-Villains",
				"Injustice League"
			],
			"relatives": [
				"Lisa Snart (sister)"
			]
		}
	},
	{
		"id": "captain-epic",
		"name": "Captain Epic",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-epic.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Canada",
			"first_appearance": "World War II",
			"publisher": "Team Epic TV",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Superhero"
			],
			"base": [
				"Toronto"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team Epic",
				"The Canadian Shield Alliance (CSA)"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "captain-hindsight",
		"name": "Captain Hindsight",
		"realName": "Jack Brolin",
		"stats": {
			"intelligence": 25,
			"strength": 10,
			"speed": 83,
			"durability": 30,
			"power": 10,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-hindsight.jpg",
		"biography": {
			"full_name": "Jack Brolin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "South Park S14 E11 \"Coon 2: Hindsight\"",
			"publisher": "South Park",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Superhero",
				"News Reporter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "captain-mar-vell",
		"name": "Captain Mar-vell",
		"realName": "Mar-Vell",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-mar-vell.jpg",
		"biography": {
			"full_name": "Mar-Vell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Captain Marvel",
				"Dr. Walter Lawson"
			],
			"place_of_birth": "The city of Rad-Nam on the planet Kree-Lar in the Kree Galaxy (Greater Magellanic Cloud)",
			"first_appearance": "MARVEL SUPERHEROES #18",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2' // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Captain in the Kree space fleet",
				"later adventurer",
				"later \"Protector of the Universe\""
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"Mar-Vell (father-deceased)",
				"Elysius (mother-deceased)"
			]
		}
	},
	{
		"id": "captain-marvel",
		"name": "Captain Marvel",
		"realName": "Carol Danvers",
		"stats": {
			"intelligence": 84,
			"strength": 88,
			"speed": 71,
			"durability": 95,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-marvel.jpg",
		"biography": {
			"full_name": "Carol Susan Jane Danvers",
			"alter_egos": [
				"Binary",
				"Warbird"
			],
			"aliases": [
				"Ace",
				"Binary",
				"Lady Marvel",
				"Warbird",
				"others used during her espionage career"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "Ms. Marvel #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human-Kree",
			"height": "5'11 // 180 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former National Aeronautics and Space Administration security Chief",
				"former magazine editor",
				"former freelance writer",
				"former military intelligence officer."
			],
			"base": [
				"Avengers Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"currently Avengers",
				"former companion to the X-Men (as Carol Danvers)",
				"former member of the Starjammers (as Binary)",
				"Former Avenger (as Ms. Marvel)"
			],
			"relatives": [
				"Marie Danvers (mother)",
				"Joseph Danvers",
				"Sr. (father)",
				"Joseph Danvers",
				"Jr. (brother)",
				"Steve Danvers (brother",
				"deceased)",
				"Marcus Immortus (Danvers) (\"son\"",
				"deceased)"
			]
		}
	},
	{
		"id": "captain-marvel",
		"name": "Captain Marvel",
		"realName": "Billy Batson",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 88,
			"durability": 95,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-marvel.jpg",
		"biography": {
			"full_name": "William Joseph Batson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The World's Mightiest Mortal",
				"The Big Red Cheese",
				"Captain Thunder",
				"Shazam"
			],
			"place_of_birth": "Fawcett City, United States",
			"first_appearance": "Whiz Comics no. 2 (1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'4 // 193 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Marvel Family",
				"Justice Society of America"
			],
			"relatives": [
				"C.C. Batson (father",
				"deceased)",
				"Marilyn Batson (mother",
				"deceased)",
				"Ebenezer Batson (uncle)",
				"Mary Batson (Mary Marvel",
				"sister)"
			]
		}
	},
	{
		"id": "captain-marvel-ii",
		"name": "Captain Marvel II",
		"realName": "Frederick Christopher Freeman",
		"stats": {
			"intelligence": 75,
			"strength": 81,
			"speed": 27,
			"durability": 90,
			"power": 34,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-marvel-ii.jpg",
		"biography": {
			"full_name": "Frederick Christopher Freeman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Captain Marvel Jr.",
				"CM3"
			],
			"place_of_birth": "-",
			"first_appearance": "Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Primarily Fawcett City."
			]
		},
		"connections": {
			"group_affiliation": [
				"Marvel Family",
				"formerly Outsiders and Teen Titans."
			],
			"relatives": [
				"parents",
				"deceased",
				"Jacob Freeman (granfather",
				"deceased)",
				"Timothy Karnes (Sabbac",
				"foster brother",
				"deceased)"
			]
		}
	},
	{
		"id": "captain-midnight",
		"name": "Captain Midnight",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-midnight.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Major Midnight",
				"Red",
				"Space-Sovereign",
				"The Skyway Sovereign",
				"The Sky-Lord",
				"The Lord of the Overworld",
				"The Space Sentinel",
				"Jim Albright"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "captain-planet",
		"name": "Captain Planet",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 88,
			"speed": 75,
			"durability": 80,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-planet.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Captain",
				"CP",
				"Planet"
			],
			"place_of_birth": "-",
			"first_appearance": "Captain Planet and the Planeteers (TV Series)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Red",
			"hair_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Planeteers"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "captain-universe",
		"name": "Captain Universe",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/captain-universe.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Guardian of Eternity",
				"The Avenging Angel",
				"The Hero That Could Be You"
			],
			"place_of_birth": "-",
			"first_appearance": "Micronauts #8 (August, 1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "carnage",
		"name": "Carnage",
		"realName": "Cletus Kasady",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 70,
			"durability": 84,
			"power": 88,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/carnage.jpg",
		"biography": {
			"full_name": "Cletus Kasady",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mass Carnage",
				"999th"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #344 (February, 1991)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "6'1 // 185 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Maximum Carnage: (Carrion",
				"Shriek",
				"Demogoblin",
				"Doppelganger)"
			],
			"relatives": [
				"Venom (\"father\")",
				"Shriek (\"wife\")",
				"Hybrid",
				"Lasher",
				"Phage",
				"Riot (\"brothers\")",
				"Agony",
				"Scream (\"sisters\")",
				"Carrion",
				"Demogoblin",
				"Doppelganger",
				"Toxin (\"sons\")",
				"Scorn (\"Daughter\")"
			]
		}
	},
	{
		"id": "cat",
		"name": "Cat",
		"realName": "Shirlee Bryant",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cat.jpg",
		"biography": {
			"full_name": "Shirlee Bryant",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "The Cat #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Model"
			],
			"base": [
				"Chicago, Illinois"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cat-ii",
		"name": "Cat II",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cat-ii.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "catwoman",
		"name": "Catwoman",
		"realName": "Selina Kyle",
		"stats": {
			"intelligence": 69,
			"strength": 11,
			"speed": 33,
			"durability": 28,
			"power": 27,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/catwoman.jpg",
		"biography": {
			"full_name": "Selina Kyle",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Cat",
				"Irena Dubrovna",
				"Elva Barr",
				"Sadie Kelowski",
				"Madame Moderne",
				"Marguerite Tone"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "Detective Comics #569",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Thief"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Outsiders",
				"formerly Birds of Prey",
				"Injustice League",
				"Secret Society of Super-Villains"
			],
			"relatives": [
				"Brian Kyle (father",
				"deceased)",
				"Maria Kyle (mother",
				"deceased)",
				"Maggie Kyle (sister)",
				"Helena Kyle (daughter)"
			]
		}
	},
	{
		"id": "cecilia-reyes",
		"name": "Cecilia Reyes",
		"realName": "Dr. Cecilia Reyes",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cecilia-reyes.jpg",
		"biography": {
			"full_name": "Dr. Cecilia Reyes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "X-Men #65 (1997)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "138 lb // 62 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Doctor in private practice"
			],
			"base": [
				"Salem Center"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "century",
		"name": "Century",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 80,
			"speed": 53,
			"durability": 64,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/century.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Force Works #1 (July, 1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alien",
			"height": "6'7 // 201 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "White",
			"hair_color": "White",
			"skin_color": "Grey"
		},
		"work": {
			"occupation": [
				"Tracker",
				"adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Force Works"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cerebra",
		"name": "Cerebra",
		"realName": "Shakti Haddad",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cerebra.jpg",
		"biography": {
			"full_name": "Shakti Haddad",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men 2099 #1 (October, 1993)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (2099)",
				"Halo City Protectorate",
				"X-Nation"
			],
			"relatives": [
				"Zail Haddad (father)"
			]
		}
	},
	{
		"id": "chamber",
		"name": "Chamber",
		"realName": "Jonothon Evan Starsmore",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 20,
			"durability": 80,
			"power": 57,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/chamber.jpg",
		"biography": {
			"full_name": "Jonothon Evan Starsmore",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Decibel",
				"Jono",
				"Jono Hex"
			],
			"place_of_birth": "United Kingdom",
			"first_appearance": "Generation X #1 (November, 1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'9 // 175 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Utopia",
				"formerly New Warriors HQ",
				"Xavier Institute for Higher Learning, Salem Center, Westchester County, New York",
				"Massachusetts Academy, Snow Valley, Massachusetts"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly New Warriors",
				"Clan Akkaba",
				"Weapon X",
				"Generation X"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "chameleon",
		"name": "Chameleon",
		"realName": "Dmitri Anatoly Smerdyakov Kravinoff",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 28,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/chameleon.jpg",
		"biography": {
			"full_name": "Dmitri Anatoly Smerdyakov Kravinoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dr. Ashley Kafka",
				"Dr. Turner",
				"J. Jonah Jameson",
				"Torpedo",
				"Rick Jones",
				"Dr. Henry Pym",
				"Peter Parker",
				"Captain George Stacy",
				"Dr. Robert Bruce Banner",
				"General"
			],
			"place_of_birth": "Russia",
			"first_appearance": "Amazing Spider-Man #1",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Exterminators",
				"formerly Sinister Six",
				"Sinister Twelve"
			],
			"relatives": [
				"Kravinoff Patriarch (father",
				"deceased)",
				"mother (unnamed)",
				"Sergei Kravinoff (Kraven I",
				"half-brother",
				"deceased)",
				"Vladimir Kravinoff (The Grim Hunter",
				"nephew",
				"deceased)",
				"Alyosha Kravinoff (Kraven the Hunter",
				"nephew)",
				"Ned Tannengarden (nephew",
				"deceased)"
			]
		}
	},
	{
		"id": "changeling",
		"name": "Changeling",
		"realName": "Kevin Sidney",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 23,
			"durability": 42,
			"power": 64,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/changeling.jpg",
		"biography": {
			"full_name": "Kevin Sidney",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Professor X",
				"Professor Charles Xavier"
			],
			"place_of_birth": "-",
			"first_appearance": "Uncanny X-Men #35 (August, 1967)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former substitute teacher",
				"adventurer",
				"subversive"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Humed",
				"X-Men",
				"Factor Three"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cheetah-i",
		"name": "Cheetah I",
		"realName": "Priscilla Rich",
		"stats": {
			"intelligence": 38,
			"strength": 8,
			"speed": 42,
			"durability": 20,
			"power": 32,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cheetah-i.jpg",
		"biography": {
			"full_name": "Priscilla Rich",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kay Carlton",
				"The Cheetah"
			],
			"place_of_birth": "-",
			"first_appearance": "Wonder Woman Vol1 #6 (Fall 1943)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'4 // 163 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Villainy Inc"
			],
			"relatives": [
				"Claudia Rich (cousin)",
				"Debi Domaine (niece)"
			]
		}
	},
	{
		"id": "cheetah-ii",
		"name": "Cheetah II",
		"realName": "Deborah Domaine",
		"stats": {
			"intelligence": 38,
			"strength": 20,
			"speed": 42,
			"durability": 20,
			"power": 39,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cheetah-ii.jpg",
		"biography": {
			"full_name": "Deborah Domaine",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Debbi",
				"The Cheetah"
			],
			"place_of_birth": "-",
			"first_appearance": "Wonder Woman Vol1 #274 (Dec 1980)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "122 lb // 55 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Chesapeake Bay, Maryland"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of the Organization For Ecological Sanity · former member of the Secret Society of Super-Villains"
			],
			"relatives": [
				"Priscilla Rich (Cheetah I",
				"aunt)",
				"Claudia Rich (aunt)"
			]
		}
	},
	{
		"id": "cheetah-iii",
		"name": "Cheetah III",
		"realName": "Barbara Minerva",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 88,
			"durability": 80,
			"power": 78,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cheetah-iii.jpg",
		"biography": {
			"full_name": "Barbara Ann Minerva",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Barbara Minerva",
				"Bride of Urzkartaga",
				"Priscilla Rich",
				"Deborah Domaine",
				"Sabrina Ballesteros"
			],
			"place_of_birth": "-",
			"first_appearance": "Wonder Woman Vol2 #7 (Sept 1987)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Archaeologist",
				"Anthropologist"
			],
			"base": [
				"Nottingham, England"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Society",
				"Injustice League"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "chromos",
		"name": "Chromos",
		"realName": "Bernard Embers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/chromos.jpg",
		"biography": {
			"full_name": "Bernard Embers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "London, England",
			"first_appearance": "Team Epic Episode 101",
			"publisher": "Team Epic TV",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Brown",
			"hair_color": "Red / Grey"
		},
		"work": {
			"occupation": [
				"Bar owner and Entertainer",
				"President of V.E.",
				"Lieutenant in the G.V.W."
			],
			"base": [
				"Toronto, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Guardian Villain�s Ward (G.V.W.)",
				"Villain�s Equity (V.E.)",
				"and A.S.C. (Anti-Super Conspirators)"
			],
			"relatives": [
				"Hi-Jaq (daughter)",
				"Exile (son)"
			]
		}
	},
	{
		"id": "chuck-norris",
		"name": "Chuck Norris",
		"realName": "Carlos Ray Norris",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 47,
			"durability": 56,
			"power": 42,
			"combat": 99
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/chuck-norris.jpg",
		"biography": {
			"full_name": "Carlos Ray Norris",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Chuck"
			],
			"place_of_birth": "Ryan, Oklahoma, United States",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "citizen-steel",
		"name": "Citizen Steel",
		"realName": "Nathan Heywood",
		"stats": {
			"intelligence": 50,
			"strength": 95,
			"speed": 33,
			"durability": 100,
			"power": 23,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/citizen-steel.jpg",
		"biography": {
			"full_name": "Nathaniel Heywood",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Buckeye",
				"Uncle Nate",
				"Uncle Nathan"
			],
			"place_of_birth": "-",
			"first_appearance": "Justice Society of America Vol 3 #2 (March, 2007)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "378 lb // 170 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former Professional Football Player"
			],
			"base": [
				"Battery Park, New York City, formerly Franklin County, Ohio"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America"
			],
			"relatives": [
				"Hank Heywood",
				"Sr. (Commander Steel",
				"grandfather",
				"deceased) � Hank Heywood",
				"Jr. (uncle",
				"deceased) � Hank Heywood III (Steel",
				"cousin",
				"deceased) � Kirk Heywood (brother",
				"deceased)",
				"Nicole (cousin)"
			]
		}
	},
	{
		"id": "claire-bennet",
		"name": "Claire Bennet",
		"realName": "Claire Bennet",
		"stats": {
			"intelligence": 38,
			"strength": 9,
			"speed": 12,
			"durability": 100,
			"power": 90,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/claire-bennet.jpg",
		"biography": {
			"full_name": "Claire Bennet",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Vivian Lewis",
				"Claire Butler"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E01",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"High school student",
				"cheerleader"
			],
			"base": [
				"formerly Odessa, TX, Costa Verde, CA"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Adoptive parents: Sandra Bennet",
				"Noah Bennet",
				"Biological parents: Meredith Gordon",
				"Nathan Petrelli",
				"Younger adoptive brother: Lyle Bennet",
				"Younger half brothers: Simon Petrelli",
				"Monty Petrelli"
			]
		}
	},
	{
		"id": "clea",
		"name": "Clea",
		"realName": "Clea",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/clea.jpg",
		"biography": {
			"full_name": "Clea",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "The Dark Dimension",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Former ruler and Sorceress Supreme of the Dark Dimension",
				"former apprentice of Doctor Strange"
			],
			"base": [
				"Base of operations unknown"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Dormammu (uncle)",
				"Umar (mother)"
			]
		}
	},
	{
		"id": "cloak",
		"name": "Cloak",
		"realName": "Tyrone Johnson",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 47,
			"durability": 64,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cloak.jpg",
		"biography": {
			"full_name": "Tyrone Johnson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "South Boston, Massachusetts",
			"first_appearance": "Spectacular Spiderman #64",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "7'5 // 226 cm",
			"weight": "155 lb // 70 kg",
			"eye_color": "brown",
			"hair_color": "black"
		},
		"work": {
			"occupation": [
				"Vigilante"
			],
			"base": [
				"Holy Ghost Church, 42nd Street, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Cloak and Dagger",
				"New Warriors",
				"Marvel Knights"
			],
			"relatives": [
				"Smokin' Joe (rumored grandfather)"
			]
		}
	},
	{
		"id": "clock-king",
		"name": "Clock King",
		"realName": "William Tockman",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 17,
			"durability": 10,
			"power": 7,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/clock-king.jpg",
		"biography": {
			"full_name": "William Tockman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tempus Fugit"
			],
			"place_of_birth": "-",
			"first_appearance": "World's Finest #111 (August, 1960)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "173 lb // 78 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Clockwatchers",
				"Justice League Antarctica",
				"Suicide Squad",
				"Time Foes"
			],
			"relatives": [
				"Beverly (sister",
				"deceased)"
			]
		}
	},
	{
		"id": "cogliostro",
		"name": "Cogliostro",
		"realName": "Cain",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cogliostro.jpg",
		"biography": {
			"full_name": "Cain",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nicholas Cogliostro",
				"Cog",
				"The Count"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #9",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "colin-wagner",
		"name": "Colin Wagner",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/colin-wagner.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Grey",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "colossal-boy",
		"name": "Colossal Boy",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/colossal-boy.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "colossus",
		"name": "Colossus",
		"realName": "Piotr Nikolaievitch Rasputin",
		"stats": {
			"intelligence": 63,
			"strength": 83,
			"speed": 33,
			"durability": 100,
			"power": 45,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/colossus.jpg",
		"biography": {
			"full_name": "Piotr Nikolaievitch Rasputin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pete",
				"Peter Nicholas",
				"The Proletarian",
				"Little Brother"
			],
			"place_of_birth": "Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia",
			"first_appearance": "Giant-Size X-Men #1 (May, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "7'5 // 226 cm",
			"weight": "500 lb // 225 kg",
			"eye_color": "Silver",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"(current) Adventurer",
				"student",
				"(former) Artist"
			],
			"base": [
				"(current) Professor Charles Xavier's Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,",
				"a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly Excalibur",
				"Acolytes",
				"Defender"
			],
			"relatives": [
				"Grigory Efimovich Rasputin (great-grandfather",
				"deceased)",
				"Elena (great-grandmother",
				"deceased)",
				"Ivan Rasputin (great-grand uncle",
				"deceased)",
				"Grigory Rasputin (grandfather",
				"deceased)",
				"Nikolai Rasputin (father",
				"deceased)",
				"Alexandra Rasputina (mother",
				"deceased)",
				"Vladimir Rasputin (uncle",
				"deceased)",
				"unidentified aunt & uncle (deceased)",
				"Illyana Nikolievna Rasputina (Magik",
				"sister",
				"deceased)",
				"Mikhail Rasputin (brother)",
				"Peter Jr. (son)",
				"Larissa Mishchenko (cousin",
				"deceased)",
				"Konstantin (cousin",
				"deceased)",
				"Klara (cousin",
				"deceased)",
				"Dimitriy (cousin",
				"deceased)"
			]
		}
	},
	{
		"id": "copycat",
		"name": "Copycat",
		"realName": "Vanessa Carlysle",
		"stats": {
			"intelligence": 56,
			"strength": 10,
			"speed": 21,
			"durability": 25,
			"power": 54,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/copycat.jpg",
		"biography": {
			"full_name": "Vanessa Carlysle",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nurse Veronica",
				"Patricia Muggins",
				"Titania",
				"Garrison Kane",
				"Christina Valentino",
				"Domino",
				"Cheryl Marks",
				"Debbie",
				"Marguerite",
				"Amy"
			],
			"place_of_birth": "-",
			"first_appearance": "New Mutants #98 (February, 1991)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "148 lb // 67 kg",
			"eye_color": "Red",
			"hair_color": "White",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Mobile",
				"formerly Adirondack Mountains, Xavier's School for Gifted Youngsters"
			]
		},
		"connections": {
			"group_affiliation": [
				"Weapon X/Weapon Plus and Six Pack (as Copycat)",
				"X-Force and New Mutants (as Domino)"
			],
			"relatives": [
				"Burt Carlysle (father",
				"deceased)",
				"Dorothy Carlysle (mother)"
			]
		}
	},
	{
		"id": "corsair",
		"name": "Corsair",
		"realName": "Christopher Summers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/corsair.jpg",
		"biography": {
			"full_name": "Christopher Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Uncanny X-Men #107",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Pirate",
				"former pilot"
			],
			"base": [
				"The Starjammer, Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Starjammers (leader)",
				"formerly N.A.S.A",
				"U.S.A.F."
			],
			"relatives": [
				"Philip Summers (father)",
				"Deborah Summers (mother)",
				"Katherine Anne Summers (wife",
				"deceased)",
				"Hepzibah (mate)",
				"Scott Summers (Cyclops",
				"son)",
				"Alexander Summers (Havok",
				"son)",
				"Gabriel Summers (Vulcan",
				"son)",
				"Madelyne Pryor-Summers (daughter-in-law",
				"deceased)",
				"Jean Grey-Summers (Phoenix",
				"daughter-in-law)",
				"Nathan Christopher Summers (Cable",
				"grandson)",
				"Stryfe (clone grandson",
				"deceased)",
				"Tyler Dayspring (Genesis",
				"great-grandson",
				"deceased)",
				"Rachel Grey (Marvel Girl",
				"alternate timeline granddaughter)"
			]
		}
	},
	{
		"id": "cottonmouth",
		"name": "Cottonmouth",
		"realName": "Burchell Clemens",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 8,
			"durability": 10,
			"power": 27,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cottonmouth.jpg",
		"biography": {
			"full_name": "Burchell Clemens",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Quincy McIver"
			],
			"place_of_birth": "-",
			"first_appearance": "Captain America #310 (October, 1985)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Professional criminal"
			],
			"base": [
				"Serpent Citadel"
			]
		},
		"connections": {
			"group_affiliation": [
				"Serpent Society"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "crimson-crusader",
		"name": "Crimson Crusader",
		"realName": "Rory Destine",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/crimson-crusader.jpg",
		"biography": {
			"full_name": "Rory Destine",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Ravenscroft, England",
			"first_appearance": "ClanDestine #1 (1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"ClanDestine"
			],
			"relatives": [
				"Adam Destine (father)",
				"unnamed genie (mother)",
				"Albert Destine (brother)",
				"Samantha Destine (Argent",
				"sister)",
				"William Destine (Cap'n Oz",
				"brother)",
				"Kay Cera (Cuckoo",
				"sister)",
				"Florence Destine (sister",
				"deceased)",
				"Gracie Destine (sister",
				"deceased)",
				"Dominic Destine (Hex",
				"brother)",
				"Pandora Destine (Imp",
				"sister)",
				"Maurice Destine (brother",
				"deceased)",
				"Newton Destine (brother)",
				"Vincent Destine (brother",
				"deceased)",
				"Walter Destine (Wallop",
				"brother)"
			]
		}
	},
	{
		"id": "crimson-dynamo-i",
		"name": "Crimson Dynamo I",
		"realName": "Anton Vanko",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/crimson-dynamo-i.jpg",
		"biography": {
			"full_name": "Anton Vanko",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Krashni Denamit"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales of Suspense #46 (Oct 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"Stark Industries plant, Long Island, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "crystal",
		"name": "Crystal",
		"realName": "Crystallia Amaquelin",
		"stats": {
			"intelligence": 63,
			"strength": 16,
			"speed": 12,
			"durability": 14,
			"power": 61,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/crystal.jpg",
		"biography": {
			"full_name": "Crystallia Amaquelin Maximoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Crys",
				"Exquisite Elemental"
			],
			"place_of_birth": "Attilan",
			"first_appearance": "Fantastic Four #45 (1965)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Inhuman",
			"height": "5'6 // 168 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Mother",
				"adventuress"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Inhumans (Royal Family)",
				"formerly Fantastic Four",
				"Avengers",
				"Queen's Vengeance"
			],
			"relatives": [
				"Quelin (father)",
				"Ambur (mother)",
				"Medusa (sister)",
				"Gorgon",
				"Karnak",
				"Triton (cousins)",
				"Black Bolt (cousin",
				"brother-in-law)",
				"Pietro Maximoff (Quicksilver",
				"estranged husband)",
				"Luna (daughter)",
				"Ahura (nephew)",
				"extensive extended family"
			]
		}
	},
	{
		"id": "curse",
		"name": "Curse",
		"realName": "Phillip Krahn",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/curse.jpg",
		"biography": {
			"full_name": "Phillip Krahn",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #25",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cy-gor",
		"name": "Cy-Gor",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cy-gor.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "cyborg",
		"name": "Cyborg",
		"realName": "Victor Stone",
		"stats": {
			"intelligence": 75,
			"strength": 53,
			"speed": 42,
			"durability": 85,
			"power": 71,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cyborg.jpg",
		"biography": {
			"full_name": "Victor Stone",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Cyberion Technis",
				"Omegadrome",
				"Planet Cyberion"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "DC Comics Presents #26 (October, 1980)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "6'6 // 198 cm",
			"weight": "385 lb // 173 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Teen Titan"
			],
			"base": [
				"San Francisco"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League",
				"formerly Teen Titans",
				"Titans",
				"Titans East",
				"New Teen Titans"
			],
			"relatives": [
				"Silas Stone (father)",
				"Elinore Stone (mother)",
				"Tucker Stone (grandfather)",
				"Maude Stone (grandmother)"
			]
		}
	},
	{
		"id": "cyborg-superman",
		"name": "Cyborg Superman",
		"realName": "Henry Henshaw",
		"stats": {
			"intelligence": 75,
			"strength": 93,
			"speed": 92,
			"durability": 100,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cyborg-superman.jpg",
		"biography": {
			"full_name": "Henry Henshaw",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Grandmaster of the Manhunters",
				"Herald of the Anti-Monitor",
				"Alpha-Prime of the Alpha Lanterns"
			],
			"place_of_birth": "-",
			"first_appearance": "Adventures of Superman #466 (May, 1990)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Lantern Corps",
				"Manhunters",
				"Warworld",
				"formerly Apokolips and Sinestro Corps"
			],
			"relatives": [
				"Terri Henshaw (wife",
				"deceased)"
			]
		}
	},
	{
		"id": "cyclops",
		"name": "Cyclops",
		"realName": "Scott Summers",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 23,
			"durability": 42,
			"power": 76,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/cyclops.jpg",
		"biography": {
			"full_name": "Scott Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Scotty",
				"Cyke",
				"Slim",
				"Fearless Leader",
				"One-Eye",
				"Erik the Red",
				"Slym Dayspring",
				"Mutate 007",
				"Apocalypse"
			],
			"place_of_birth": "Anchorage, Alaska",
			"first_appearance": "X-Men #1 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'3 // 191 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Leader of mutant race",
				"adventurer",
				"headmaster",
				"former student",
				"radio announcer"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (leader",
				"founding member)",
				"formerly X-Force (founder)",
				"Corsairs (squad leader)",
				"The Twelve",
				"X-Factor/X-Terminators (founding member)",
				"198"
			],
			"relatives": [
				"Oscar Summers (adoptive paternal distant ancestor",
				"deceased)",
				"Daniel Summers (paternal distant ancestor",
				"deceased)",
				"Amanda Mueller (Black Womb) (paternal distant ancestor)",
				"unnamed great-grandfather",
				"deceased",
				"Gloria Dayne (Fontanelle) (paternal distant ancestor)",
				"Philip Summers (paternal grandfather)",
				"Deborah Summers (paternal grandmother)",
				"Christopher Summers (Corsair) (father",
				"deceased)",
				"Katherine Ann Summers (mother",
				"deceased)",
				"Jack Winters (Jack O'Diamonds) (former foster father)",
				"Alexander Summers (Havok) (brother)",
				"Gabriel Summers (Vulcan) (brother",
				"deceased)",
				"Madelyne Pryor-Summers (Red Queen) (first wife/second wife's clone",
				"deceased)",
				"Jean Grey-Summers (Phoenix) (second wife",
				"deceased)",
				"Nathan Summers (Cable) (son",
				"deceased)",
				"Gailyn Bailey (niece",
				"deceased)",
				"Joseph Bailey (nephew",
				"deceased)",
				"Adam Neramani (X-Treme) (nephew",
				"alleged half-brother)",
				"Hope Summers (adoptive granddaughter)",
				"Stryfe (son's clone)",
				"Summers and Grey Family Tree (more relatives)"
			]
		}
	},
	{
		"id": "cypher",
		"name": "Cypher",
		"realName": "Douglas Aaron Ramsey",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/cypher.jpg",
		"biography": {
			"full_name": "Douglas Aaron Ramsey",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "New Mutants (Vol. 1) #13",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "5'9' // 175 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Student",
				"Adventurer"
			],
			"base": [
				"Professor Charles Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Mutants"
			],
			"relatives": [
				"Phillip Ramsey (father)",
				"Sheila Ramsey (mother)"
			]
		}
	},
	{
		"id": "dagger",
		"name": "Dagger",
		"realName": "Tandy Bowen",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 35,
			"durability": 42,
			"power": 52,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dagger.jpg",
		"biography": {
			"full_name": "Tandy Bowen",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lady Light"
			],
			"place_of_birth": "Shaker Heights, Ohio",
			"first_appearance": "Spectacular Spiderman #64",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "116 lb // 52 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Vigilante"
			],
			"base": [
				"Holy Ghost Church, 42nd Street, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Cloak and Dagger",
				"Defenders",
				"League of Losers",
				"Marvel Knights",
				"New Warriors",
				"Secret Avengers"
			],
			"relatives": [
				"Melissa Bowen (mother)",
				"unnamed father",
				"Phillip Carlisle (stepfather)",
				"Father Michael Bowen (uncle)"
			]
		}
	},
	{
		"id": "danny-cooper",
		"name": "Danny Cooper",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/danny-cooper.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "daphne-powell",
		"name": "Daphne Powell",
		"realName": "Daphne Powell",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 8,
			"durability": 10,
			"power": 56,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/daphne-powell.jpg",
		"biography": {
			"full_name": "Daphne Powell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "No Ordinary Family S01E01 (2010)",
			"publisher": "ABC Studios",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Jim Powell and Stephanie Powell (parents)",
				"JJ Powell (brother)"
			]
		}
	},
	{
		"id": "daredevil",
		"name": "Daredevil",
		"realName": "Matt Murdock",
		"stats": {
			"intelligence": 75,
			"strength": 13,
			"speed": 25,
			"durability": 35,
			"power": 61,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/daredevil.jpg",
		"biography": {
			"full_name": "Matthew Michael Murdock",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Matt",
				"Jack Batlin",
				"Kingpin of Crime",
				"Laurent LeVasseur",
				"Michael \"Mike\" Murdock",
				"Scarlet Swashbuckler",
				"Nameless One",
				"Kingpin of Hell's Kitchen",
				"The Man Without Fear",
				"The Guardian Devil",
				"DD",
				"Red",
				"Hornhead",
				"Cooper Peyton",
				"Captain Universe"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "Daredevil #1 (April, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"vigilante",
				"Attorney at Law"
			],
			"base": [
				"Hell's Kitchen, New York, New York, Shadowland (formerly)"
			]
		},
		"connections": {
			"group_affiliation": [
				"none",
				"Formerly: partner of Black Widow (Natasha Romanoff)",
				"Defenders",
				"S.H.I.E.L.D.",
				"Marvel Knights",
				"Secret Avengers (Civil War)",
				"Hand leader."
			],
			"relatives": [
				"Jonathan \"Battling Jack\" Murdock (Father",
				"deceased)",
				"Maggie Murdock (aka Sister Maggie",
				"Mother)",
				"Milla Donovan (ex-wife)"
			]
		}
	},
	{
		"id": "darkhawk",
		"name": "Darkhawk",
		"realName": "Christopher Powell",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 33,
			"durability": 70,
			"power": 74,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darkhawk.jpg",
		"biography": {
			"full_name": "Christopher Powell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bucket-Head",
				"Edge-Man",
				"Powell"
			],
			"place_of_birth": "Queens, New York",
			"first_appearance": "Darkhawk #1 (March, 1991)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Retired Superhero"
			],
			"base": [
				"Los Angeles, California",
				"formerly New York City and Avengers Compound"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Loners",
				"New Warriors",
				"Avengers West Coast (reservist)",
				"Secret Defenders (founder)"
			],
			"relatives": [
				"Michael Powell (father)",
				"Grace Powell (mother)",
				"Jonathon and Jason Powell (brothers)"
			]
		}
	},
	{
		"id": "darkman",
		"name": "Darkman",
		"realName": "Peyton Westlake",
		"stats": {
			"intelligence": 75,
			"strength": 14,
			"speed": 23,
			"durability": 85,
			"power": 12,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darkman.jpg",
		"biography": {
			"full_name": "Peyton Westlake",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Darkman (August 24, 1990)",
			"publisher": "Universal Studios",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Julie Hastings (girlfriend)"
			]
		}
	},
	{
		"id": "darkseid",
		"name": "Darkseid",
		"realName": "Uxas",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darkseid.jpg",
		"biography": {
			"full_name": "Uxas",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dark God"
			],
			"place_of_birth": "-",
			"first_appearance": "Superman's Pal Jimmy Olsen #134 (November 1970)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "New God",
			"height": "8'9 // 267 cm",
			"weight": "1815 lb // 817 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Grey"
		},
		"work": {
			"occupation": [
				"Dictator of Apokolips"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Gods of Apokolips(ruler)",
				"Secret Society of Supervillains"
			],
			"relatives": [
				"Zonuz (father)",
				"Izaya (brother)",
				"Avia (sister",
				"deceased)",
				"Grail (daughter)",
				"Kalibak (son)",
				"Orion (son)",
				"Deathspawn (son)",
				"Scot (nephew/adopted son)"
			]
		}
	},
	{
		"id": "darkside",
		"name": "Darkside",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/darkside.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "darkstar",
		"name": "Darkstar",
		"realName": "Laynia Petrovna",
		"stats": {
			"intelligence": 38,
			"strength": 8,
			"speed": 35,
			"durability": 42,
			"power": 79,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darkstar.jpg",
		"biography": {
			"full_name": "Laynia Petrovna",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tyomni Zvesda"
			],
			"place_of_birth": "Minks, USSR",
			"first_appearance": "Champions #7 (August, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'6 // 168 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Occupation unknown"
			],
			"base": [
				"(before death) Paris, France (formerly) Moscow, USSR",
				"Los Angeles, California, United States"
			]
		},
		"connections": {
			"group_affiliation": [
				"(at death)X-Corps (formerly) Champions",
				"Winter Guard",
				"Soviet Super Soldiers"
			],
			"relatives": [
				"Nicolai Krylenko a.k.a. Vanguard (brother)",
				"Sergi Krylov a.k.a. The Presence (father)",
				"Marya Krylova (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "darth-maul",
		"name": "Darth Maul",
		"realName": "",
		"stats": {
			"intelligence": 56,
			"strength": 48,
			"speed": 50,
			"durability": 30,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darth-maul.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sith",
				"Master Of The Double-Bladed Lightsaber"
			],
			"place_of_birth": "Dathomir",
			"first_appearance": "Star Wars Episode I: The Phantom Menace (1999)",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Dathomirian Zabrak",
			"height": "5'7 // 170 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow / Red",
			"hair_color": "-",
			"skin_color": "Red / Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Darth Sidious (Master)"
			]
		}
	},
	{
		"id": "darth-vader",
		"name": "Darth Vader",
		"realName": "Anakin Skywalker",
		"stats": {
			"intelligence": 69,
			"strength": 48,
			"speed": 33,
			"durability": 35,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/darth-vader.jpg",
		"biography": {
			"full_name": "Anakin Skywalker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lord Vader"
			],
			"place_of_birth": "Tatooine",
			"first_appearance": "Star Wars: Episode IV - A New Hope (1977)",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "6'6 // 198 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Yellow",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Sith Lord",
				"Supreme Commander of the Imperial Fleet"
			],
			"base": [
				"Death Star"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sith",
				"Galactic Empire"
			],
			"relatives": [
				"Luke Skywalker (Son)",
				"Princess Leia (Daughter)"
			]
		}
	},
	{
		"id": "dash",
		"name": "Dash",
		"realName": "Dashiell Robert Parr",
		"stats": {
			"intelligence": 25,
			"strength": 12,
			"speed": 92,
			"durability": 60,
			"power": 20,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dash.jpg",
		"biography": {
			"full_name": "Dashiell Robert Parr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Fastest Kid on Earth",
				"The Dash"
			],
			"place_of_birth": "-",
			"first_appearance": "The Incredibles (Movies, 2004)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "4'0 // 122 cm",
			"weight": "60 lb // 27 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Incredible Family (genetic member)",
				"National Supers Agency (ties)",
				"Edna Mode (receives costumes and gadgets from her)",
				"Frozone (long-time friend)",
				"Mirage (ally)"
			],
			"relatives": [
				"Robert Parr (Mr Incredible",
				"father)",
				"Helen Parr (Elastigirl",
				"mother)",
				"Violet Parr(Violet",
				"sister)",
				"",
				"Jack-jack (brother)"
			]
		}
	},
	{
		"id": "data",
		"name": "Data",
		"realName": "Data",
		"stats": {
			"intelligence": 100,
			"strength": 32,
			"speed": 21,
			"durability": 40,
			"power": 56,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/data.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"B-4"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Star Trek",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Lieutenant commander"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Dr. Noonian Soong (creator)"
			]
		}
	},
	{
		"id": "dazzler",
		"name": "Dazzler",
		"realName": "Alison Blaire",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 33,
			"durability": 60,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dazzler.jpg",
		"biography": {
			"full_name": "Alison Blaire",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ali",
				"The Disco Dazzler",
				"Songbird",
				"Dazz",
				"Kimberly Schau",
				"Ally"
			],
			"place_of_birth": "Gardendale, Long Island, New York",
			"first_appearance": "X-Men #130 (1980)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'8 // 173 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"singer",
				"former actress",
				"model",
				"revolutionary"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Excalibur",
				"X-Babies (guardian)",
				"Mojoverse Rebellion",
				"X-Men",
				"Cat's Laughing",
				"Gladiators"
			],
			"relatives": [
				"Bella Blaire (paternal grandmother)",
				"Carter Blaire (father",
				"deceased)",
				"Katherine Blaire-Brown (Barbara London",
				"mother)",
				"Nicholas Brown (step-father)",
				"Lois London (half-sister)",
				"Longshot (husband)"
			]
		}
	},
	{
		"id": "deadman",
		"name": "Deadman",
		"realName": "Boston Brand",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/deadman.jpg",
		"biography": {
			"full_name": "Boston Brand",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Strange Adventures #205 (October, 1967)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "201 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Wandering Spirit",
				"Former Circus Aerialist"
			],
			"base": [
				"Mobile, Realm of the Just Dead"
			]
		},
		"connections": {
			"group_affiliation": [
				"White Lantern Corps",
				"formerly Sentinels of Magic",
				"Seven Soldiers of Victory",
				"Justice League of Apostles"
			],
			"relatives": [
				"Cleveland Brand (twin brother",
				"deceased)",
				"Lita Brand (niece)",
				"Unnamed parents"
			]
		}
	},
	{
		"id": "deadpool",
		"name": "Deadpool",
		"realName": "Wade Wilson",
		"stats": {
			"intelligence": 69,
			"strength": 32,
			"speed": 50,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/deadpool.jpg",
		"biography": {
			"full_name": "Wade Winston Wilson",
			"alter_egos": [
				"Evil Deadpool",
				"Venompool"
			],
			"aliases": [
				"Wade Wilson",
				"Jack",
				"Chiyonosake (\"the Wolf of the Rice Wine\")",
				"Rhodes",
				"Corpus",
				"Lopez",
				"Hobgoblin",
				"Thom Cruz",
				"Peter Parker"
			],
			"place_of_birth": "Canada",
			"first_appearance": "New Mutants #98 (February, 1991)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"former enforcer",
				"government operative",
				"sumo wrestler",
				"soldier",
				"assassin",
				"anti-hero",
				"others"
			],
			"base": [
				"Cavern-X, Sedona, Arizona, Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts (Strike Team)",
				"shares body with Agent Preston",
				"formerly X-Force",
				"Deadpool Corps",
				"Agency X",
				"S.H.I.E.L.D.",
				"Code Red",
				"Six Pack",
				"One World Church",
				"DP Inc.",
				"Weapon X",
				"Weapon Plus",
				"Heroes for Hire",
				"Secret Defenders",
				"Frightful Four",
				"Team Deadpool",
				"L"
			],
			"relatives": [
				"Thomas \"Mickey\" Wilson (father",
				"deceased)",
				"Hailey Wilson (mother",
				"deceased)",
				"Gretchen Wilson",
				"Orksa (ex-wives)",
				"Evil Deadpool (clone)",
				"Widdle Wade (clone)"
			]
		}
	},
	{
		"id": "deadshot",
		"name": "Deadshot",
		"realName": "Floyd Lawton",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 55,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/deadshot.jpg",
		"biography": {
			"full_name": "Floyd Lawton",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Man Who Never Misses",
				"Worlds Finest Assassin",
				"Orlando Furioso"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #59 (June, 1950)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "202 lb // 91 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "deathlok",
		"name": "Deathlok",
		"realName": "Luther Manning",
		"stats": {
			"intelligence": 69,
			"strength": 32,
			"speed": 30,
			"durability": 70,
			"power": 40,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/deathlok.jpg",
		"biography": {
			"full_name": "Luther Manning",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Demolisher"
			],
			"place_of_birth": "-",
			"first_appearance": "Astonishing Tales #25 (August, 1974)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "6'4 // 193 cm",
			"weight": "395 lb // 178 kg",
			"eye_color": "Brown",
			"hair_color": "Grey"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"New York area"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of the CIA",
				"Project: Alpha-Mech",
				"US Army",
				"ally of Godwulf's Redeemers"
			],
			"relatives": [
				"Janice (Wife",
				"seperated)",
				"Richard (son)"
			]
		}
	},
	{
		"id": "deathstroke",
		"name": "Deathstroke",
		"realName": "Slade Joseph Wilson",
		"stats": {
			"intelligence": 75,
			"strength": 30,
			"speed": 35,
			"durability": 100,
			"power": 47,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/deathstroke.jpg",
		"biography": {
			"full_name": "Slade Joseph Wilson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Slade Wilson",
				"Deathstroke the Terminator",
				"Batman"
			],
			"place_of_birth": "-",
			"first_appearance": "New Teen Titans #2 (December, 1980)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'4 // 193 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"Former Soldier",
				"Big-Game Hunter"
			],
			"base": [
				"The Labyrinth (exact location is currently unknown)"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Society",
				"Titans",
				"Formerly Tartarus",
				"The Injustice League"
			],
			"relatives": [
				"Wade LaFarge (Ravager III",
				"half-brother",
				"deceased)",
				"Adeline Kane (ex-wife",
				"deceased)",
				"Grant Wilson (Ravager I",
				"son",
				"deceased)",
				"Joseph Wilson (Jericho",
				"son)",
				"Rose Wilson (Ravager IV",
				"daughter)"
			]
		}
	},
	{
		"id": "demogoblin",
		"name": "Demogoblin",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 48,
			"speed": 42,
			"durability": 35,
			"power": 62,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/demogoblin.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jason Macendale Jr"
			],
			"place_of_birth": "-",
			"first_appearance": "Web of Spider-Man #86 (March, 1992)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "6'1 // 185 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Demonic Redeemer"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "destroyer",
		"name": "Destroyer",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 95,
			"speed": 58,
			"durability": 98,
			"power": 85,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/destroyer.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Created in Asgard",
			"first_appearance": "Journey into Mystery #118 (1965)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "850 lb // 383 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "diamondback",
		"name": "Diamondback",
		"realName": "Willis Stryker",
		"stats": {
			"intelligence": 44,
			"strength": 16,
			"speed": 23,
			"durability": 28,
			"power": 45,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/diamondback.jpg",
		"biography": {
			"full_name": "Willis Stryker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Luke Cage, Hero for Hire#1 (1972)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'4 // 193 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Syndicate",
				"formerly Bloods"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "dl-hawkins",
		"name": "DL Hawkins",
		"realName": "Daniel Lawrence Hawkins",
		"stats": {
			"intelligence": 50,
			"strength": 12,
			"speed": 12,
			"durability": 56,
			"power": 48,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dl-hawkins.jpg",
		"biography": {
			"full_name": "Daniel Lawrence Hawkins",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E05 - Hiros",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Construction worker",
				"Firefighter"
			],
			"base": [
				"Las Vegas, NV"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Niki Sanders (wife)",
				"Micah Sanders (son)",
				"Paulette Hawkins (mother)",
				"Monica Dawson (cousin)",
				"Damon Dawson (cousin)"
			]
		}
	},
	{
		"id": "doc-samson",
		"name": "Doc Samson",
		"realName": "Leonard Samson",
		"stats": {
			"intelligence": 75,
			"strength": 80,
			"speed": 33,
			"durability": 80,
			"power": 36,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doc-samson.jpg",
		"biography": {
			"full_name": "Leonard Samson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Tulsa, Oklahoma",
			"first_appearance": "Incredible Hulk #141 (July, 1971)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "6'6 // 198 cm",
			"weight": "380 lb // 171 kg",
			"eye_color": "Blue",
			"hair_color": "Green"
		},
		"work": {
			"occupation": [
				"Psychiatrist",
				"teacher",
				"adventurer",
				"former special consultant to Gamma Base"
			],
			"base": [
				"Mobile, formerly Gamma Base, New Mexico"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Leonard Skivorski (father)",
				"Ricky Myers (son)",
				""
			]
		}
	},
	{
		"id": "doctor-doom",
		"name": "Doctor Doom",
		"realName": "Victor von Doom",
		"stats": {
			"intelligence": 100,
			"strength": 32,
			"speed": 20,
			"durability": 100,
			"power": 100,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doctor-doom.jpg",
		"biography": {
			"full_name": "Victor von Doom",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Master",
				"Invincible Man"
			],
			"place_of_birth": "Haasenstadt, Latveria",
			"first_appearance": "Fantastic Four #5 (July 1962)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'7 // 201 cm",
			"weight": "415 lb // 187 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Monarch"
			],
			"base": [
				"Castle Doom, Doomstadt, Latveria"
			]
		},
		"connections": {
			"group_affiliation": [
				"Future Foundation",
				"Formerly Cabal",
				"Knights of the Atomic Table",
				"Acts of Vengeance Prime Movers",
				"partner of Namor",
				"employer of the Terrible Trio",
				"Fantastic Four (leader)"
			],
			"relatives": [
				"Werner von Doom (father",
				"deceased)",
				"Cynthia von Doom (mother",
				"deceased)",
				"Kang the Conqueror",
				"his counterparts",
				"and offspring (alleged descendants)",
				"Kristoff Vernard (Doctor Doom II",
				"adopted son)",
				"Dr Bob Doom (distant cousin)",
				"Boris (unofficially adoptive father/guardian)",
				"Valeria von Doom (daughter from alternate universe",
				"became baby of Susan Richards and is now called Valeria Richards)"
			]
		}
	},
	{
		"id": "doctor-doom-ii",
		"name": "Doctor Doom II",
		"realName": "Kristoff Vernard",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/doctor-doom-ii.jpg",
		"biography": {
			"full_name": "Kristoff Vernard",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Victor Von Doom",
				"Dr Doom"
			],
			"place_of_birth": "Doomstadt, Latveria",
			"first_appearance": "Fantastic Four #247 (1982, as Kristoff), Fantastic Four #278 (1985, as Doctor Doom)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'7 // 201 cm",
			"weight": "293 lb // 132 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Former monarch, would-be conqueror"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"unnamed mother (deceased)",
				"Mister Fantastic (alleged half-brother)",
				"Valeria Richards (alleged niece)",
				"Victor von Doom (aka Doctor Doom",
				"adopted father)"
			]
		}
	},
	{
		"id": "doctor-fate",
		"name": "Doctor Fate",
		"realName": "Kent Nelson",
		"stats": {
			"intelligence": 81,
			"strength": 16,
			"speed": 25,
			"durability": 80,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doctor-fate.jpg",
		"biography": {
			"full_name": "Kent Nelson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nabu"
			],
			"place_of_birth": "-",
			"first_appearance": "More Fun Comics #55 (May, 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "197 lb // 89 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Tower of Fate, Salem, Massachusetts"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly All-Star Squadron",
				"Justice Society of America",
				"Justice League International",
				"Black Lantern Corps"
			],
			"relatives": [
				"Inza Cramer (wife)",
				"Sven Nelson (father",
				"deceased)",
				"Celestine Babcock (mother)",
				"Kent Nelson",
				"Jr. (son)",
				"Aaron Babcock (uncle)",
				"Kent V. Nelson (grand-nephew)",
				"Laryn Nelson (great grand-niece)"
			]
		}
	},
	{
		"id": "doctor-octopus",
		"name": "Doctor Octopus",
		"realName": "Otto Octavius",
		"stats": {
			"intelligence": 94,
			"strength": 48,
			"speed": 33,
			"durability": 40,
			"power": 53,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doctor-octopus.jpg",
		"biography": {
			"full_name": "Otto Octavius",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Doctor Octopus",
				"Doc Ock",
				"The Master Planner",
				"The Master Programmer",
				"Peter Benjamin Parker",
				"Superior Spider-Man",
				"Venom",
				"Superior Venom"
			],
			"place_of_birth": "Schenectady, New York",
			"first_appearance": "Amazing Spider-Man #3 (July 1963)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "245 lb // 110 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Former atomic-research consultant",
				"criminal mastermind"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts Army",
				"Former leader of the Sinister Six and the Masters of Evil V",
				"Former partner of Green Goblin"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "doctor-strange",
		"name": "Doctor Strange",
		"realName": "Stephen Strange",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 12,
			"durability": 84,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doctor-strange.jpg",
		"biography": {
			"full_name": "Stephen Vincent Strange",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sorcerer Supreme",
				"Master of the Mystic Arts",
				"Stephen Sanders",
				"Captain Universe",
				"Vincent Stevens"
			],
			"place_of_birth": "Philadelphia, Pennsylvania",
			"first_appearance": "Strange Tales #110 (July, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Grey",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Sorcerer Supreme",
				"retired neurosurgeon"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Defenders",
				"underground Avengers",
				"formerly the Order",
				"Midnight Sons",
				"former disciple of the Ancient One"
			],
			"relatives": [
				"Eugene (father",
				"deceased)",
				"Beverly (mother",
				"deceased)",
				"Victor (Khiron",
				"brother",
				"apparently deceased)",
				"Donna (sister",
				"deceased)",
				"Clea (wife",
				"estranged)",
				"Umar (mother-in-law)",
				"Orini (father-in-law)",
				"Dormammu (uncle-in-law)"
			]
		}
	},
	{
		"id": "domino",
		"name": "Domino",
		"realName": "Neena Thurman",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 27,
			"durability": 28,
			"power": 49,
			"combat": 74
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/domino.jpg",
		"biography": {
			"full_name": "Neena Thurman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dom",
				"Samantha Wu",
				"Tamara Winter",
				"Elena Vladescu",
				"Jessica Marie Costello",
				"Luisa Mendoza",
				"Beatrice",
				"Christina Elizabeth Alioso",
				"Priscilla Sutherland",
				"Hope Eldridge"
			],
			"place_of_birth": "Project: Armageddon base, Everglades, Florida",
			"first_appearance": "X-Force #8 (March, 1992)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'8 // 173 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Black",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly X-Force",
				"198",
				"X-Corporation",
				"The Underground",
				"X-Force",
				"Six Pack"
			],
			"relatives": [
				"Beatrice (mother)",
				"Lazarus (brother)",
				"Milo Thurman (husband",
				"deceased)"
			]
		}
	},
	{
		"id": "donatello",
		"name": "Donatello",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 14,
			"speed": 46,
			"durability": 60,
			"power": 58,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/donatello.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Don",
				"Donnie"
			],
			"place_of_birth": "-",
			"first_appearance": "Teenage Mutant Ninja Turtles #1",
			"publisher": "IDW Publishing",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Leonardo (brother)",
				"Michelangelo (brother)",
				"Raphael (brother)"
			]
		}
	},
	{
		"id": "donna-troy",
		"name": "Donna Troy",
		"realName": "Donna Hinckley Stacey Troy",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/donna-troy.jpg",
		"biography": {
			"full_name": "Donna Hinckley Stacey Troy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Donna Troy",
				"Wonder Girl",
				"Darkstar",
				"Wonder Woman",
				"Troia"
			],
			"place_of_birth": "-",
			"first_appearance": "The Brave and the Bold Vol. 1 #60 (1965)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Amazon",
			"height": "5'9 // 175 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Titans of Myth",
				"Teen Titans",
				"Darkstars"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "doomsday",
		"name": "Doomsday",
		"realName": "Doomsday",
		"stats": {
			"intelligence": 75,
			"strength": 100,
			"speed": 67,
			"durability": 100,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doomsday.jpg",
		"biography": {
			"full_name": "Doomsday",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Ultimate Lifeform"
			],
			"place_of_birth": "Krypton",
			"first_appearance": "Superman: The Man of Steel #17 (Nov 1992)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alien",
			"height": "8'0 // 244 cm",
			"weight": "915 lb // 412 kg",
			"eye_color": "Red",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Destroyer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Society of Super Villains",
				"Suicide Squad",
				"Apokolips"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "doppelganger",
		"name": "Doppelganger",
		"realName": "",
		"stats": {
			"intelligence": 8,
			"strength": 63,
			"speed": 60,
			"durability": 95,
			"power": 69,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/doppelganger.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Spider-Man Doppelganger",
				"Spider-Doppelganger",
				"Mindless One"
			],
			"place_of_birth": "The Dimension of Manifestations",
			"first_appearance": "Infinity War #1 (1992)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'5 // 196 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "White",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Carnage Family",
				"Magus' doppelgangers",
				"operative of Demogoblin"
			],
			"relatives": [
				"Anthropomorpho (creator)",
				"Hellspawn",
				"Moonshade",
				"many other doppelgangers (brethren)"
			]
		}
	},
	{
		"id": "dormammu",
		"name": "Dormammu",
		"realName": "Dormammu",
		"stats": {
			"intelligence": 88,
			"strength": 95,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dormammu.jpg",
		"biography": {
			"full_name": "Dormammu",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Dread One",
				"Eater of Souls",
				"Lord of Chaos",
				"Lord of Darkness",
				"the Great Enigma",
				"Flyx"
			],
			"place_of_birth": "Faltine Dimension",
			"first_appearance": "Strange Tales #126 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Despot",
				"conqueror"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Lords of the Splinter Realms",
				"Lords of the Netherworlds",
				"allied with Umar",
				"Loki",
				"Doctor Doom",
				"Underchild",
				"others"
			],
			"relatives": [
				"Sinifer (parent/genitor)",
				"Umar (sister)",
				"Clea (niece)",
				"Doctor Strange (nephew-in-law)",
				"Satannish (alleged offspring)"
			]
		}
	},
	{
		"id": "dr-manhattan",
		"name": "Dr Manhattan",
		"realName": "Jonathan Osterman",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 42,
			"durability": 100,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/dr-manhattan.jpg",
		"biography": {
			"full_name": "Jonathan Osterman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jon Osterman",
				"Doctor Manhattan"
			],
			"place_of_birth": "-",
			"first_appearance": "Watchmen #1 (September, 1986)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Cosmic",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"New York City",
				"formerly Mars"
			]
		},
		"connections": {
			"group_affiliation": [
				"Watchmen",
				"Crimebusters"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "drax-the-destroyer",
		"name": "Drax the Destroyer",
		"realName": "Arthur Sampson Douglas",
		"stats": {
			"intelligence": 56,
			"strength": 80,
			"speed": 25,
			"durability": 85,
			"power": 46,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/drax-the-destroyer.jpg",
		"biography": {
			"full_name": "Arthur Sampson Douglas",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Burbank, California",
			"first_appearance": "Iron Man #55 (February, 1973)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Altered",
			"height": "6'4 // 193 cm",
			"weight": "680 lb // 306 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"C.I.T.T.",
				"formerly Monster Isle and Titan"
			]
		},
		"connections": {
			"group_affiliation": [
				"Guardians of the Galaxy",
				"formerly Infinity Watch",
				"Secret Defenders",
				"United Front",
				"Selects of the Phalanx"
			],
			"relatives": [
				"Yvette Steckley Douglas (wife",
				"deceased)",
				"Heather Douglas (aka Moondragon",
				"daughter)",
				"Pamela Douglas (aka Sundragon",
				"niece)",
				"Cammille Benally (foster daughter)",
				"Venom (former symbiote)"
			]
		}
	},
	{
		"id": "ego",
		"name": "Ego",
		"realName": "Ego",
		"stats": {
			"intelligence": 88,
			"strength": 80,
			"speed": 83,
			"durability": 99,
			"power": 71,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ego.jpg",
		"biography": {
			"full_name": "Ego",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Living Planet"
			],
			"place_of_birth": "The Black Galaxy",
			"first_appearance": "THOR #132",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Inapplicable"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Inapplicable"
			]
		}
	},
	{
		"id": "elastigirl",
		"name": "Elastigirl",
		"realName": "Helen Parr",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 33,
			"durability": 95,
			"power": 52,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/elastigirl.jpg",
		"biography": {
			"full_name": "Helen Parr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mrs Incredible"
			],
			"place_of_birth": "-",
			"first_appearance": "The Incredibles (Movies, 2004)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Incredible Family (co-leader)",
				"National Supers Agency (ties)",
				"Edna Mode (receives costumes and gadgets from her)",
				"Frozone (long-time friend)",
				"Mirage (ally)",
				"Snug Porter (receives aircraft from him)"
			],
			"relatives": [
				"Robert Parr(Mr Incredible",
				"husband)",
				"Violet Parr(Violet",
				"daughter)",
				"Dashiell Parr (Dash",
				"son)",
				"Jack-jack (son)"
			]
		}
	},
	{
		"id": "electro",
		"name": "Electro",
		"realName": "Maxwell Dillon",
		"stats": {
			"intelligence": 69,
			"strength": 10,
			"speed": 50,
			"durability": 56,
			"power": 67,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/electro.jpg",
		"biography": {
			"full_name": "Maxwell Dillon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #9 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Professional criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinister Six formerly Emissaries of Evil",
				"Frightful Four and Sinister Twelve"
			],
			"relatives": [
				"Norma Lynn Dillon (ex-wife)",
				"Jonathan Dillon (father",
				"deceased)",
				"Anita Dillon (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "elektra",
		"name": "Elektra",
		"realName": "Elektra Natchios",
		"stats": {
			"intelligence": 63,
			"strength": 11,
			"speed": 30,
			"durability": 28,
			"power": 59,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/elektra.jpg",
		"biography": {
			"full_name": "Elektra Natchios",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Erynys (evil self)"
			],
			"place_of_birth": "-",
			"first_appearance": "Daredevil #168",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Assassin",
				"adventurer",
				"mercenary",
				"former student",
				"dancer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"S.H.I.E.L.D.",
				"formerly Thunderbolts",
				"Hand",
				"Chaste",
				"Heroes For Hire",
				"Code Red",
				"partner of Daredevil and Deadpool"
			],
			"relatives": [
				"Hugo Kostas Natchios (father",
				"deceased)",
				"Christina Natchios (mother",
				"deceased)",
				"Orestez Natchios (older brother)",
				"Demetrios Natchios (Uncle)",
				"Alexia Natchios (Aunt)"
			]
		}
	},
	{
		"id": "elle-bishop",
		"name": "Elle Bishop",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 8,
			"speed": 12,
			"durability": 42,
			"power": 63,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/elle-bishop.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Cindy"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S02E05 - Fight or Flight",
			"publisher": "NBC - Heroes",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Agent of the Company"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Bob Bishop (Father)"
			]
		}
	},
	{
		"id": "elongated-man",
		"name": "Elongated Man",
		"realName": "Ralph Dibny",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 33,
			"durability": 90,
			"power": 44,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/elongated-man.jpg",
		"biography": {
			"full_name": "Ralph Dibny",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Alvin Burgson",
				"Molder"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash #112 (1960)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "178 lb // 80 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Detective"
			],
			"base": [
				"Opal City, Central City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"Justice League Europe",
				"Super Buddies",
				"Outsiders",
				"Croatoans",
				"Black Lantern Corps"
			],
			"relatives": [
				"Sue Dibny (wife",
				"deceased)",
				"Ken Dibny (brother)",
				"Jake Dibny (uncle)",
				"Jim (uncle-in-law)"
			]
		}
	},
	{
		"id": "emma-frost",
		"name": "Emma Frost",
		"realName": "Emma Frost",
		"stats": {
			"intelligence": 75,
			"strength": 63,
			"speed": 35,
			"durability": 90,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/emma-frost.jpg",
		"biography": {
			"full_name": "Emma Frost",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Storm",
				"White Queen"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "UNCANNY X-MEN #132",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10' // 178 cm",
			"weight": "144 lb // 65 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"(current) Emma Frost operates from the Massachusetts Academy, Snow Valley, Massachusetts, (former) Hellfire Club mansion in New York City, a home in the Berkshire Mountains in Massachusetts (near the Massachusetts Academy), and places of residence in vari"
			]
		},
		"connections": {
			"group_affiliation": [
				"Active member of the X-Men",
				"Instructor for Generation X",
				"The Inner Circle of the Hellfire Club"
			],
			"relatives": [
				"Winston Frost (father)",
				"Hazel Frost (mother)",
				"Christian Frost (brother) Adrienne Frost (sister",
				"deceased",
				") Cordelia Frost (sister)"
			]
		}
	},
	{
		"id": "enchantress",
		"name": "Enchantress",
		"realName": "June Moone",
		"stats": {
			"intelligence": 63,
			"strength": 14,
			"speed": 25,
			"durability": 60,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/enchantress.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Anita Soulfeeda",
				"Soulsinger"
			],
			"place_of_birth": "-",
			"first_appearance": "Strange Adventures #187",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "126 lb // 57 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Artist",
				"Magician"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Forgotten Villains",
				"Sentinels of Magic",
				"Shadowpact",
				"Suicide Squad"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "energy",
		"name": "Energy",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/energy.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "erg-1",
		"name": "ERG-1",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/erg-1.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ethan-hunt",
		"name": "Ethan Hunt",
		"realName": "Ethan Hunt",
		"stats": {
			"intelligence": 75,
			"strength": 11,
			"speed": 29,
			"durability": 30,
			"power": 26,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ethan-hunt.jpg",
		"biography": {
			"full_name": "Ethan Matthew Hunt",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Madison, Wisconsin, United States of America",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"IMF Agent",
				"Training Officer (former)",
				"Field Agent",
				"Field Team Leader"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly: United States Army"
			],
			"relatives": [
				"Nathan Hunt (Father)",
				"Margaret Hunt (Mother)",
				"Donald Hunt (Uncle)"
			]
		}
	},
	{
		"id": "etrigan",
		"name": "Etrigan",
		"realName": "Jason Blood",
		"stats": {
			"intelligence": 50,
			"strength": 85,
			"speed": 17,
			"durability": 100,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/etrigan.jpg",
		"biography": {
			"full_name": "Jason Blood",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Demon"
			],
			"place_of_birth": "Hell",
			"first_appearance": "Demon #1 (September, 1972)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "6'4 // 193 cm",
			"weight": "452 lb // 203 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Yellow"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Hell"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Justice League of America",
				"Spirit Squad"
			],
			"relatives": [
				"Belial (father)",
				"Raan va Daath (mother)",
				"Merlin (half Brother)"
			]
		}
	},
	{
		"id": "evil-deadpool",
		"name": "Evil Deadpool",
		"realName": "Wade Wilson",
		"stats": {
			"intelligence": 69,
			"strength": 32,
			"speed": 50,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/evil-deadpool.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Deadpool",
				"Venompool"
			],
			"aliases": [
				"Dreadpool"
			],
			"place_of_birth": "-",
			"first_appearance": "Deadpool Vol 2 #44 (December, 2011)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "White",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"Assasin"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Evil Deadpool Corps"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "evilhawk",
		"name": "Evilhawk",
		"realName": "Dargin Bokk ",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 33,
			"durability": 70,
			"power": 85,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/evilhawk.jpg",
		"biography": {
			"full_name": "Dargin Bokk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Darkhawk #20 (October, 1992)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alien",
			"height": "6'3 // 191 cm",
			"weight": "235 lb // 106 kg",
			"eye_color": "Red",
			"hair_color": "Black",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Crimelord"
			],
			"base": [
				"(Formerly) planet Luq"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "exodus",
		"name": "Exodus",
		"realName": "Bennet du Paris ",
		"stats": {
			"intelligence": 63,
			"strength": 81,
			"speed": 28,
			"durability": 28,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/exodus.jpg",
		"biography": {
			"full_name": "Bennet du Paris",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Paris Bennet"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Factor #92 (July, 1993)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Blue",
			"hair_color": "Black",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"Terrorist",
				"would-be conqueror",
				"Former leader of the Acolytes",
				"Crusader"
			],
			"base": [
				"Currently mobile, Formerly Avalon"
			]
		},
		"connections": {
			"group_affiliation": [
				"Acolytes",
				"formerly Brotherhood and Marauders"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "fabian-cortez",
		"name": "Fabian Cortez",
		"realName": "Fabian Cortez",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/fabian-cortez.jpg",
		"biography": {
			"full_name": "Fabian Cortez",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "X-Men (Vol. 2) #1",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'5 // 196 cm",
			"weight": "214 lb // 96 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Unknown"
			],
			"base": [
				"Genosha at time of death",
				"Formerly Asteroid M"
			]
		},
		"connections": {
			"group_affiliation": [
				"Acolytes at time of death",
				"Formerly Upstarts"
			],
			"relatives": [
				"Annemarie Cortez (sister",
				"deceased)"
			]
		}
	},
	{
		"id": "falcon",
		"name": "Falcon",
		"realName": "Sam Wilson",
		"stats": {
			"intelligence": 38,
			"strength": 13,
			"speed": 50,
			"durability": 28,
			"power": 22,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/falcon.jpg",
		"biography": {
			"full_name": "Samuel Thomas Wilson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sam Wilson",
				"(formerly) Captain America",
				"Blackbird",
				"Blackwing",
				"Brother Superhero"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "Captain America #117 (September, 1969)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Crimefighter",
				"(former) freelance artist"
			],
			"base": [
				"New York, New York",
				"formerly Avengers Mansion, New York City, New York",
				"S.H.I.E.L.D. Helicarrier."
			]
		},
		"connections": {
			"group_affiliation": [
				"Mighty Avengers",
				"Avengers",
				"S.H.I.E.L.D.",
				"partner of Redwing",
				"formerly Heroes For Hire",
				"partner of Captain America",
				"Secret Avengers",
				"S.H.I.E.L.D. Super-Agents (leader)",
				"Defenders",
				"ally of Secret Warriors",
				"Defenders for a Day"
			],
			"relatives": [
				"Paul Wilson (father",
				"deceased)",
				"Darlene Wilson (mother",
				"deceased)",
				"Sarah Wilson (sister)",
				"Gideon Wilson (brother)",
				"Jim Wilson (nephew",
				"deceased)",
				"Jody Casper (nephew)"
			]
		}
	},
	{
		"id": "fallen-one-ii",
		"name": "Fallen One II",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 85,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/fallen-one-ii.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "Blue"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Heralds of Galactus"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "faora",
		"name": "Faora",
		"realName": "Faora Hu-Ul",
		"stats": {
			"intelligence": 88,
			"strength": 95,
			"speed": 75,
			"durability": 100,
			"power": 94,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/faora.jpg",
		"biography": {
			"full_name": "Faora Hu-Ul",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Katie"
			],
			"place_of_birth": "-",
			"first_appearance": "Action Comics #471 (May, 1977)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Kryptonian",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Serial killer"
			],
			"base": [
				"Phantom Zone",
				"formerly Krypton"
			]
		},
		"connections": {
			"group_affiliation": [
				"Phantom Zone Criminals"
			],
			"relatives": [
				"Hu-Ul (father",
				"presumably deceased)"
			]
		}
	},
	{
		"id": "feral",
		"name": "Feral",
		"realName": "Maria Callasantos",
		"stats": {
			"intelligence": 38,
			"strength": 28,
			"speed": 45,
			"durability": 28,
			"power": 27,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/feral.jpg",
		"biography": {
			"full_name": "Maria Callasantos",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "NEW MUTANTS #99",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Yellow (without irises)",
			"hair_color": "Orange / White"
		},
		"work": {
			"occupation": [
				"Formerly Adventurer",
				"Terrorist"
			],
			"base": [
				"Base of operations unknown"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Morlocks",
				"X-Force",
				"Mutant Liberation Front"
			],
			"relatives": [
				"Mr. Callasantos (father",
				"first name unrevealed",
				"deceased)",
				"Marcella Callasantos (mother",
				"deceased)",
				"Lucia Callasantos (Thornn",
				"sister)",
				"Matteo Callasantos (brother",
				"deceased)",
				"Carolina Callasantos (sister",
				"deceased)"
			]
		}
	},
	{
		"id": "fighting-spirit",
		"name": "Fighting Spirit",
		"realName": "Carol Carter",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/fighting-spirit.jpg",
		"biography": {
			"full_name": "Carol Carter",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Yankette",
				"Fighting Yank II"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"SMASH HQ, Antarctica, Earth",
				"New Lancaster"
			]
		},
		"connections": {
			"group_affiliation": [
				"Fighting Yank I",
				"SMASH"
			],
			"relatives": [
				"Bruce Carter (father)"
			]
		}
	},
	{
		"id": "fin-fang-foom",
		"name": "Fin Fang Foom",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 81,
			"speed": 23,
			"durability": 100,
			"power": 75,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/fin-fang-foom.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"He Whose Limbs Shatter Mountains and Whose Back Scrapes the Sun (translation)"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Kakarantharaian",
			"height": "32'0 // 975 cm",
			"weight": "40000 lb // 18 tons",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"New York, formerly Valley of the Sleeping Dragon in China"
			]
		},
		"connections": {
			"group_affiliation": [
				"Affiliation \"Fin Fang Four",
				"\" former ally of the Mandarin",
				"pawn of Doctor Vault",
				"member of starship crew"
			],
			"relatives": [
				"Fraktur (cousin)"
			]
		}
	},
	{
		"id": "firebird",
		"name": "Firebird",
		"realName": "Bonita Juarez",
		"stats": {
			"intelligence": 38,
			"strength": 8,
			"speed": 40,
			"durability": 14,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/firebird.jpg",
		"biography": {
			"full_name": "Bonita Juarez",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pajaro Del Fuego",
				"La Espirita",
				"Firemaiden"
			],
			"place_of_birth": "Buena Vista, New Mexico",
			"first_appearance": "INCREDIBLE HULK Vol. 2 #265",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5' // 165 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Social worker",
				"adventurer"
			],
			"base": [
				"New Mexico"
			]
		},
		"connections": {
			"group_affiliation": [
				"Catholic Church",
				"formerly the Rangers",
				"provisional member of the Avengers West Coast",
				"Queen's Vengeance"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "firelord",
		"name": "Firelord",
		"realName": "Pyreus Kril",
		"stats": {
			"intelligence": 38,
			"strength": 63,
			"speed": 75,
			"durability": 90,
			"power": 52,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/firelord.jpg",
		"biography": {
			"full_name": "Pyreus Kril",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nova Centurion"
			],
			"place_of_birth": "Xander, planet in Tranta System, Andromeda Galaxy",
			"first_appearance": "THOR Vol. 1 #225",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'4' // 193 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "White",
			"hair_color": "Yellow"
		},
		"work": {
			"occupation": [
				"Former starship captain",
				"former herald of Galactus"
			],
			"base": [
				"Mobile",
				"usually in space"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Nova Corps",
				"Guardians of the Galaxy (in an alternate future)"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "firestar",
		"name": "Firestar",
		"realName": "Angelica Jones",
		"stats": {
			"intelligence": 50,
			"strength": 8,
			"speed": 54,
			"durability": 55,
			"power": 71,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/firestar.jpg",
		"biography": {
			"full_name": "Angelica Jones",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Angel",
				"Anj",
				"Lady Comet"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "Uncanny X-Men #193 (May, 1985)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'8 // 173 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"New Warriors Crash Pad, New York City, New York State",
				"Avengers Mansion, New York City, New York State",
				"and formerly Massachusetts Academy, Snow Valley, Massachusetts"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Warriors Reservist",
				"Avengers Reservist",
				"and Former Hellion and student of the White Queen"
			],
			"relatives": [
				"Bartholomew Jones (father)",
				"Nana (grandmother)"
			]
		}
	},
	{
		"id": "firestorm",
		"name": "Firestorm",
		"realName": "Jason Rusch",
		"stats": {
			"intelligence": 50,
			"strength": 53,
			"speed": 58,
			"durability": 56,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/firestorm.jpg",
		"biography": {
			"full_name": "Jason Rusch",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Nuclear Man"
			],
			"place_of_birth": "-",
			"first_appearance": "Firestorm (Volume 3) #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"University student",
				"former food server at Bryson's Family Treat",
				"former mascot at Ho-Ho Charlie's Chicken Shack",
				"former intern at S.T.A.R. Labs"
			],
			"base": [
				"Detroit, Michigan"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"formerly Lexcorp"
			],
			"relatives": [
				"Alvin Rusch (father)"
			]
		}
	},
	{
		"id": "firestorm",
		"name": "Firestorm",
		"realName": "Ronald Raymond",
		"stats": {
			"intelligence": 38,
			"strength": 80,
			"speed": 58,
			"durability": 80,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/firestorm.jpg",
		"biography": {
			"full_name": "Ronald Raymond",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ronnie",
				"Roy",
				"Ronald Rockwell",
				"Flamehead"
			],
			"place_of_birth": "-",
			"first_appearance": "Firestorm #1 (March, 1978)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "202 lb // 91 kg",
			"eye_color": "Blue",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former employee of Bun 'n Run"
			],
			"base": [
				"Formerly Manhattan, New York City",
				"Ivy University, Ivy Town",
				"Pittsburgh, Pennsylvania"
			]
		},
		"connections": {
			"group_affiliation": [
				"Firestorm Matrix",
				"Justice League",
				"formerly Black Lantern Corps",
				"Power Company",
				"White Lantern Corps"
			],
			"relatives": [
				"Edward Raymond (father)",
				"Elaine Rockwell (mother",
				"deceased)",
				"Felicity Smoak-Raymond (stepmother)",
				"Richard Dare (grandfather)"
			]
		}
	},
	{
		"id": "fixer",
		"name": "Fixer",
		"realName": "Paul Norbert Ebersol",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/fixer.jpg",
		"biography": {
			"full_name": "Paul Norbert Ebersol",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Fixer"
			],
			"place_of_birth": "Dayton, Ohio",
			"first_appearance": "(as Fixer) STRANGE TALES #141",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Criminal inventor"
			],
			"base": [
				"Mount Charteris"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Thunderbolts",
				"Redeemers"
			],
			"relatives": [
				"No known relatives"
			]
		}
	},
	{
		"id": "flash-gordon",
		"name": "Flash Gordon",
		"realName": "Steven Gordon",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/flash-gordon.jpg",
		"biography": {
			"full_name": "Steven Gordon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Gordon #1 (september 1966)",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "flash-i",
		"name": "Flash I",
		"realName": "Jay Garrick",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 100,
			"durability": 50,
			"power": 68,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/flash-i.jpg",
		"biography": {
			"full_name": "Jason Peter Garrick",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jay Garrick",
				"Siegfreid the Speedster"
			],
			"place_of_birth": "Hibbardsville, Kansas",
			"first_appearance": "Flash Comics #1 (January 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "179 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Brown / White"
		},
		"work": {
			"occupation": [
				"Research Scientist",
				"part-time Director of Garrick Laboratories"
			],
			"base": [
				"Keystone City, Kansas"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America",
				"Flash Family",
				"formerly All-Star Squadron"
			],
			"relatives": [
				"Joseph Garrick (father)",
				"Joan Williams (wife)",
				"Arthur Williams (father-in-law)",
				"unnamed adopted son (deceased)",
				"Bart Allen (Flash II",
				"ward)"
			]
		}
	},
	{
		"id": "flash-ii",
		"name": "Flash II",
		"realName": "Barry Allen",
		"stats": {
			"intelligence": 88,
			"strength": 48,
			"speed": 100,
			"durability": 60,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/flash-ii.jpg",
		"biography": {
			"full_name": "Bartholomew Henry Allen",
			"alter_egos": [
				"Black Racer"
			],
			"aliases": [
				"The Scarlet Speedster",
				"the Fastest Man Alive",
				"the Monarch of Motion",
				"the Sultan of Speed"
			],
			"place_of_birth": "Fallville, Iowa",
			"first_appearance": "Showcase #4 (October, 1956)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Forensic Scientist"
			],
			"base": [
				"Central City, Missouri"
			]
		},
		"connections": {
			"group_affiliation": [
				"Flash Family",
				"Justice League of America",
				"formerly Blue Lantern Corps"
			],
			"relatives": [
				"Henry and Nora (parents)",
				"Malcolm Thawne (twin)",
				"Iris West Allen (wife)",
				"Wally West (Flash III",
				"nephew)",
				"Don and Dawn Allen (son and daughter)",
				"Bart Allen (Flash IV",
				"grandson)",
				"Jenni Ognats (granddaughter)"
			]
		}
	},
	{
		"id": "flash-iii",
		"name": "Flash III",
		"realName": "Wally West",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 100,
			"durability": 60,
			"power": 100,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/flash-iii.jpg",
		"biography": {
			"full_name": "Wallace Rudolph West",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Fastest Man Alive",
				"The Scarlet Speedster",
				"formerly",
				"Kid Flash I"
			],
			"place_of_birth": "Blue Valley, Nebraska",
			"first_appearance": "Flash #110 (January, 1960)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Mechanic for the KCPD"
			],
			"base": [
				"Keystone City, Kansas"
			]
		},
		"connections": {
			"group_affiliation": [
				"Flash Family",
				"Justice League of America",
				"Titans",
				"formerly Teen Titans"
			],
			"relatives": [
				"Rudolph and Mary West (parents)",
				"Ira West (grandfather)",
				"Iris Allen (aunt)",
				"Barry Allen (Flash II",
				"uncle)",
				"Linda Park West (wife)",
				"Jai and Iris West (twin children)"
			]
		}
	},
	{
		"id": "flash-iv",
		"name": "Flash IV",
		"realName": "Bartholomew Allen II",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 100,
			"durability": 32,
			"power": 100,
			"combat": 48
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/flash-iv.jpg",
		"biography": {
			"full_name": "Bartholomew Allen II",
			"alter_egos": [
				"Impulse",
				"Kid Flash II"
			],
			"aliases": [
				"Impulse",
				"Kid Flash II"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Impulse) Flash v.2 #91 (June 1994)* (as Kid Flash) Teen Titans v.3 #4 (December 2003)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'2 // 157 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Yellow",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Police trainee"
			],
			"base": [
				"Los Angeles, California (previously Manchester, Alabama, briefly Denver, Colorado, then Keystone City, Kansas)"
			]
		},
		"connections": {
			"group_affiliation": [
				"Flash Family",
				"Teen Titans",
				"Legion of Super-Heroes",
				"formerly Young Justice"
			],
			"relatives": [
				"Barry Allen (Flash II",
				"grandfather)",
				"Iris West Allen (grandmother)",
				"Don Allen (father)",
				"Meloni Thawne (mother)",
				"President Thawne (grandfather)",
				"Dawn Allen (aunt)",
				"Jenni Ognats (cousin)",
				"Thaddeus Thawne (clone)",
				"Owen Mercer (half-brother)",
				"Max Crandall (guardian)"
			]
		}
	},
	{
		"id": "forge",
		"name": "Forge",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 20,
			"combat": 48
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/forge.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Maker",
				"Cheyenne"
			],
			"place_of_birth": "Unrevealed, presumably in the American West",
			"first_appearance": "Uncanny X-Men #184",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Inventor working for the U.S. government",
				"former soldier"
			],
			"base": [
				"Arlington, Virginia"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Factor"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "franklin-richards",
		"name": "Franklin Richards",
		"realName": "Franklin  Richards",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 50,
			"durability": 60,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/franklin-richards.jpg",
		"biography": {
			"full_name": "Franklin Benjamin Richards",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Franklin Benjamin",
				"Tattletale",
				"Psi-Lord",
				"Ego-Spawn",
				"Avatar"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "Fantastic Four Annual #6",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "4'8 // 142 cm",
			"weight": "100 lb // 45 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"Baxter Building, New York, New York (formerly) Four Freedoms Plaza",
				"Pier 4",
				"Massachusetts Academy"
			]
		},
		"connections": {
			"group_affiliation": [
				"Future Foundation",
				"formerly Power Pack",
				"Generation X",
				"Daydreamers"
			],
			"relatives": [
				"Reed Richards (Mister Fantastic",
				"father)",
				"Susan Storm Richards (Invisible Woman",
				"mother)",
				"Valeria Richards (sister)",
				"Jonathan Storm (Human Torch",
				"uncle)",
				"Nathaniel Richards (paternal grandfather)",
				"Franklin Storm (maternal grandfather",
				"deceased)",
				"Evelyn Richards",
				"Mary Storm (grandmothers (paternal and maternal respectively)",
				"deceased)",
				"Benjamin J. Grimm (Thing",
				"godfather)",
				"Alicia Masters (godmother)."
			]
		}
	},
	{
		"id": "franklin-storm",
		"name": "Franklin Storm",
		"realName": "Dr. Franklin Storm",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 1,
			"durability": 1,
			"power": 0,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/franklin-storm.jpg",
		"biography": {
			"full_name": "Dr. Franklin Storm",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Franklin Storm was erroneously believed to be the first Invincible Man"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "FANTASTIC FOUR #31",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'2' // 188 cm",
			"weight": "205 lb // 92 kg",
			"eye_color": "Blue",
			"hair_color": "Grey"
		},
		"work": {
			"occupation": [
				"Surgeon"
			],
			"base": [
				"Inapplicable"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mary Storm (wife",
				"deceased)",
				"Susan Storm Richards (Invisible Woman",
				"daughter)",
				"Jonathan Storm (Human Torch",
				"son)",
				"Franklin Richards (grandson)",
				"Reed Richards (Mister Fantastic",
				"son-in-law)"
			]
		}
	},
	{
		"id": "frenzy",
		"name": "Frenzy",
		"realName": "Joanna Cargill",
		"stats": {
			"intelligence": 63,
			"strength": 53,
			"speed": 35,
			"durability": 100,
			"power": 38,
			"combat": 52
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/frenzy.jpg",
		"biography": {
			"full_name": "Joanna Cargill",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Factor Vol 1 #4",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "6'11 // 211 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Mercenary"
			],
			"base": [
				"Mobile",
				"formerly Avalon in Earth orbit",
				"Genosha",
				"California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Acolytes",
				"formerly Alliance of Evil",
				"temporarily X-Men while controlled by Jean Grey",
				"Femizons"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "frigga",
		"name": "Frigga",
		"realName": "Frigga",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/frigga.jpg",
		"biography": {
			"full_name": "Frigga",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Fricka"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "JOURNEY INTO MYSTERY #92",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11' // 180 cm",
			"weight": "370 lb // 167 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Queen of Asgard",
				"goddess of marriage"
			],
			"base": [
				"Asgard"
			]
		},
		"connections": {
			"group_affiliation": [
				"Gods of Asgard"
			],
			"relatives": [
				"Odin (husband)",
				"Loki",
				"Thor (foster sons)"
			]
		}
	},
	{
		"id": "galactus",
		"name": "Galactus",
		"realName": "Galan",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/galactus.jpg",
		"biography": {
			"full_name": "Galan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Maker",
				"Devourer of Worlds",
				"Eater-of-Worlds",
				"Ravager of Worlds"
			],
			"place_of_birth": "(Galan) Taa; (Galactus) the Cosmic Egg",
			"first_appearance": "Fantastic Four #48 (March 1966)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cosmic Entity",
			"height": "28'9 // 876 cm",
			"weight": "36400 lb // 16 tons",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Planet Devourer",
				"Third Force of the Universe - balance between Eternity and Death",
				"Nullifying Abraxas' Influence on the Multiverse",
				"Third Face of the Living Tribunal - representing Equity"
			],
			"base": [
				"Worldship (aka Taa II)",
				"though he is generally mobile throughout the universe via his spherical starship in search of suitable planets to consume."
			]
		},
		"connections": {
			"group_affiliation": [
				"Heralds of Galactus",
				"formerly God Squad"
			],
			"relatives": [
				"Galan (\"father\")",
				"Galacta (daughter)"
			]
		}
	},
	{
		"id": "gambit",
		"name": "Gambit",
		"realName": "Remy Etienne LeBeau",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 55,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gambit.jpg",
		"biography": {
			"full_name": "Remy Etienne LeBeau",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Death",
				"Le Diable Blanc",
				"formerly Robert Lord",
				"Cajun"
			],
			"place_of_birth": "New Orleans, Louisiana",
			"first_appearance": "(as Gambit) Uncanny X-Men #266 (1990), (as Death) X-Men #184 (2006)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'1 // 185 cm",
			"weight": "179 lb // 81 kg",
			"eye_color": "Red",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Jean Grey School for Higher Learning",
				"Salem Center",
				"Westchester County",
				"New York",
				"formerly Utopia",
				"San Francisco Bay",
				"California",
				"Xavier Institute",
				"Salem Center",
				"Westchester County",
				"New York",
				"New Orleans",
				"Paris",
				"Cairo",
				"Illinois"
			],
			"base": [
				"(current) Xavier Institute, Salem Center, Westchester County, New York",
				"(former) New Orleans, Louisiana",
				"Paris, France",
				"Cairo, Illinois",
				""
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (Team Wolverine)",
				"formerly Marauders",
				"Horsemen of Apocalypse",
				"Chevaliers",
				"X-Treme X-Men",
				"Thieves & Unified Guild's of New Orleans",
				"Crimson Pirates"
			],
			"relatives": [
				"Jean-Luc LeBeau (father)",
				"Belladonna (aka Bella Donna Boudreaux) (wife",
				"separated)"
			]
		}
	},
	{
		"id": "gamora",
		"name": "Gamora",
		"realName": "Gamora Zen Whoberi Ben Titan",
		"stats": {
			"intelligence": 75,
			"strength": 85,
			"speed": 42,
			"durability": 85,
			"power": 53,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gamora.jpg",
		"biography": {
			"full_name": "Gamora Zen Whoberi Ben Titan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Deadliest Woman In The Universe",
				"The Most Dangerous Woman in the Galaxy"
			],
			"place_of_birth": "Planet Zen Whoberi, Silican System, Milky Way",
			"first_appearance": "Strange Tales #180 (June, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Zen-Whoberian",
			"height": "6'0 // 183 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Yellow",
			"hair_color": "Black",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Assassin",
				"mercenary",
				"adventurer"
			],
			"base": [
				"C.I.T.T.",
				"formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem",
				"Earth-7528"
			]
		},
		"connections": {
			"group_affiliation": [
				"Guardians of the Galaxy",
				"formerly Phalanx's Selects",
				"Graces (Leader)",
				"Infinity Watch",
				"United Front",
				"former minion of Thanos",
				"ally of Adam Warlock and Pip the Troll"
			],
			"relatives": [
				"Thanos (foster father)",
				"Thane (foster brother)",
				"Unnamed former Symbiote"
			]
		}
	},
	{
		"id": "garbage-man",
		"name": "Garbage Man",
		"realName": "Richard Ethan Morse",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/garbage-man.jpg",
		"biography": {
			"full_name": "Richard Ethan Morse",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Richard Morse"
			],
			"place_of_birth": "-",
			"first_appearance": "Weird Worlds #1 (2011)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "gary-bell",
		"name": "Gary Bell",
		"realName": "Gary Bell",
		"stats": {
			"intelligence": 63,
			"strength": 5,
			"speed": 8,
			"durability": 10,
			"power": 54,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gary-bell.jpg",
		"biography": {
			"full_name": "Gary Bell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "SyFy",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alpha",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alphas"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "general-zod",
		"name": "General Zod",
		"realName": "Dru-Zod",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 96,
			"durability": 100,
			"power": 100,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/general-zod.jpg",
		"biography": {
			"full_name": "Dru-Zod",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dru-Zod (possible first name)"
			],
			"place_of_birth": "Krypton",
			"first_appearance": "Action Comics #845",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Kryptonian",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Formerly Krypton",
				"formerly the Phantom Zone",
				"currently Earth"
			]
		},
		"connections": {
			"group_affiliation": [
				"Phantom Zone criminals",
				"former member of the Kryptonian Defense Council"
			],
			"relatives": [
				"Ursa (mate/wife)",
				"Lor-Zod (son)",
				"Admiral Zod (possible ancestor)"
			]
		}
	},
	{
		"id": "genesis",
		"name": "Genesis",
		"realName": "Tyler Dayspring",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/genesis.jpg",
		"biography": {
			"full_name": "Tyler Dayspring",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tolliver"
			],
			"place_of_birth": "-",
			"first_appearance": "As Tolliver, mentioned) New Mutants #98 (1991), (as Tolliver, seen) X-Force #5 (1991), (as Genesis) Cable #18 (1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "191 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former would-be world conqueror",
				"arms dealer",
				"soldier",
				"freedom fighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Dark Riders (leader)",
				"former servant of Stryfe",
				"formerly New Canaanites",
				"Clan Chosen"
			],
			"relatives": [
				"Nathan Christopher Summers (Cable",
				"adopted father)",
				"Aliya Jenskot (mother",
				"deceased)",
				"Stryfe (cloned uncle",
				"deceased)",
				"Rachel Summers (Marvel Girl",
				"alternate timeline aunt)",
				"Scott Summers (Cyclops",
				"grandfather)",
				"Madelyne Pryor-Summers (grandmother",
				"deceased)",
				"Alexander Summers (Havok",
				"great-uncle)",
				"Gabriel Summers (Vulcan",
				"great-uncle)",
				"Christopher Summers (Corsair",
				"great-grandfather)",
				"Katherine Anne Summers (great-grandmother",
				"deceased)",
				"Philip Summers (great-great-grandfather)",
				"Deborah Summers (great-great-grandmother)"
			]
		}
	},
	{
		"id": "ghost-rider",
		"name": "Ghost Rider",
		"realName": "Johnny Blaze",
		"stats": {
			"intelligence": 50,
			"strength": 55,
			"speed": 25,
			"durability": 100,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ghost-rider.jpg",
		"biography": {
			"full_name": "Jonathan Blaze",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Waukegan, Illinois",
			"first_appearance": "Marvel Spotlight #5 (August, 1972)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "6'2 // 188 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Former stunt motorcyclist"
			],
			"base": [
				"Mobile, Quentin Carnival"
			]
		},
		"connections": {
			"group_affiliation": [
				"Quentin Carnival Formerly Midnight Sons",
				"Legion of Monsters",
				"The Champions"
			],
			"relatives": [
				"Barton (father",
				"deceased)",
				"Clara (mother",
				"deceased)",
				"Craig \"Crash\" Simpson (stepfather",
				"deceased)",
				"Mona Simpson (stepmother",
				"deceased)",
				"Roxanne Simpson (wife)"
			]
		}
	},
	{
		"id": "ghost-rider-ii",
		"name": "Ghost Rider II",
		"realName": "Daniel Ketch",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/ghost-rider-ii.jpg",
		"biography": {
			"full_name": "Daniel Ketch",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Ghost Rider Vol. 2 #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Midnight Sons"
			],
			"relatives": [
				"Barbara Ketch (sister",
				"deceased) Ghost Rider (Johnny Blaze) (brother)",
				"Jennifer Kale (distant cousin)  Noble Kale and Naomi Kale (ancestors)"
			]
		}
	},
	{
		"id": "giant-man",
		"name": "Giant-Man",
		"realName": "Hank Pym",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/giant-man.jpg",
		"biography": {
			"full_name": "Henry Jonathan Pym",
			"alter_egos": [
				"Ant-Man",
				"Goliath",
				"Wasp II",
				"Yellowjacket"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "giant-man-ii",
		"name": "Giant-Man II",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/giant-man-ii.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "giganta",
		"name": "Giganta",
		"realName": "Doris Zuel",
		"stats": {
			"intelligence": 81,
			"strength": 89,
			"speed": 23,
			"durability": 85,
			"power": 32,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/giganta.jpg",
		"biography": {
			"full_name": "Doris Zuel",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Wonder Woman (Volume 1) #9 (1944)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "205 // 62.5 meters",
			"weight": "1400 lb // 630 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Criminal",
				"former Scientist",
				"Professor at Ivy University"
			],
			"base": [
				"Ivy Town"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Injustice League",
				"formerly The Society",
				"Villainy",
				"Inc.",
				"The Legion of Doom"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "gladiator",
		"name": "Gladiator",
		"realName": "Kallark",
		"stats": {
			"intelligence": 50,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 73,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gladiator.jpg",
		"biography": {
			"full_name": "Kallark",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Majestor",
				"Praetor",
				"Captain Universe"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men Vol 1 #107 October, 1977",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Strontian",
			"height": "6'6 // 198 cm",
			"weight": "595 lb // 268 kg",
			"eye_color": "Blue",
			"hair_color": "Blue",
			"skin_color": "Purple"
		},
		"work": {
			"occupation": [
				"Majestor of the Shi'ar Empire",
				"Former Praetor of the Imperial Guard",
				"possibly former Herald of Galactus"
			],
			"base": [
				"Chandilar, Shi'ar Galaxy",
				"mobile throughout the Shi'ar Empire and surrounding galaxies."
			]
		},
		"connections": {
			"group_affiliation": [
				"Galactic Council",
				"Annihilators",
				"formerly Imperial Guard",
				"possibly Heralds of Galactus"
			],
			"relatives": [
				"Kubark (Kid Gladiator) (son)",
				"Xenith (The Strontian) (cousin)"
			]
		}
	},
	{
		"id": "goblin-queen",
		"name": "Goblin Queen",
		"realName": "Madelyne Jennifer Pryor",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 65,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/goblin-queen.jpg",
		"biography": {
			"full_name": "Madelyne Jennifer Pryor",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Anodyne",
				"Maddie",
				"Lyne",
				"Red",
				"Madelyne Pryor-Summers"
			],
			"place_of_birth": "Created in Sinister's Labs, Nebraska",
			"first_appearance": "Uncanny X-Men #168",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Mobile",
				"formerly Anchorage, Alaska",
				"Reaver Base, Australian Outback, Australia",
				"Empire State Building, New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former ally of X-Men",
				"partner of N'Astirh"
			],
			"relatives": [
				"Mister Sinister (creator)",
				"Jean Grey (Phoenix",
				"genetic template)",
				"Scott Summers (Cyclops",
				"husband)",
				"Nathan Christopher Summers (Cable",
				"son)",
				"Christopher Summers (Corsair",
				"father-in-law)",
				"Alex Summers (Havok",
				"brother-in-law)"
			]
		}
	},
	{
		"id": "godzilla",
		"name": "Godzilla",
		"realName": "Gojira",
		"stats": {
			"intelligence": 44,
			"strength": 100,
			"speed": 54,
			"durability": 100,
			"power": 100,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/godzilla.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Legendary Godzilla",
				"King of the Monsters",
				"Gigantis",
				"Monster Zero-One",
				"God of Destruction",
				"Alpha Predator"
			],
			"place_of_birth": "-",
			"first_appearance": "Godzilla (1954)",
			"publisher": "",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "Kaiju",
			"height": "354'4 // 108.0 meters",
			"weight": "200000000 lb // 90,000 tons",
			"eye_color": "-",
			"hair_color": "-",
			"skin_color": "Grey"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "gog",
		"name": "Gog",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 34,
			"speed": 47,
			"durability": 72,
			"power": 39,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gog.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nephut-Sha",
				"Hassan Kareem"
			],
			"place_of_birth": "-",
			"first_appearance": "Incredible Hulk #257 (1981)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinister Six"
			],
			"relatives": [
				"Seth (creator)",
				"Magog (\"brother\")"
			]
		}
	},
	{
		"id": "goku",
		"name": "Goku",
		"realName": "Kakarot",
		"stats": {
			"intelligence": 56,
			"strength": 100,
			"speed": 75,
			"durability": 90,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/goku.jpg",
		"biography": {
			"full_name": "Kakarot",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ultimate Defender",
				"Sayain Monkey",
				"Super Sayain",
				"Z-Fighter",
				"Son-Goku",
				"Lower-Class Sayain",
				"Goku Son"
			],
			"place_of_birth": "-",
			"first_appearance": "Dragon Ball #1",
			"publisher": "Shueisha",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Saiyan",
			"height": "5'9 // 175 cm",
			"weight": "137 lb // 62 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Saiyajin",
				"Son family",
				"Z-Fighters"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "goliath",
		"name": "Goliath",
		"realName": "Erik Josten",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/goliath.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Atlas",
				"Power Man",
				"Smuggler"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "goliath",
		"name": "Goliath",
		"realName": "Hank Pym",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/goliath.jpg",
		"biography": {
			"full_name": "Henry Jonathan Pym",
			"alter_egos": [
				"Ant-Man",
				"Giant-Man",
				"Wasp II",
				"Yellowjacket"
			],
			"aliases": [
				"Hank Pym"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "goliath",
		"name": "Goliath",
		"realName": "Clint Barton",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/goliath.jpg",
		"biography": {
			"full_name": "Clinton Francis Barton",
			"alter_egos": [
				"Hawkeye",
				"Ronin"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "goliath-iv",
		"name": "Goliath IV",
		"realName": "William Barrett Foster",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/goliath-iv.jpg",
		"biography": {
			"full_name": "William Barrett Foster",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Giant-Man",
				"Black Goliath"
			],
			"place_of_birth": "Watts, Los Angeles, California",
			"first_appearance": "(As Foster) Avengers #32 (1966); (as Black Goliath) Luke Cage, Power Man #24 (1975); (as Giant-Man) Marvel Two-in-One #55 (1979); (as Goliath) Thing #1 (2006)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Biochemist",
				"inventor",
				"research scientist",
				"adventurer",
				"(formerly) circus performer",
				"soldier"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Secret Avengers",
				"former Avengers associate",
				"formerly Stark West",
				"Project: PEGASUS",
				"\"Defenders for a Day",
				"\" Champions (of Los Angeles) (unofficial)",
				"Circus of Crime",
				"U.S. military"
			],
			"relatives": [
				"Claire Temple (ex-wife)"
			]
		}
	},
	{
		"id": "gorilla-grodd",
		"name": "Gorilla Grodd",
		"realName": "Grodd",
		"stats": {
			"intelligence": 81,
			"strength": 53,
			"speed": 33,
			"durability": 70,
			"power": 100,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gorilla-grodd.jpg",
		"biography": {
			"full_name": "Grodd",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"William Dawson",
				"King Grodd",
				"Gorilla Grodd",
				"Grodd-Son"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash #106 (May, 1959)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Gorilla",
			"height": "6'6 // 198 cm",
			"weight": "600 lb // 270 kg",
			"eye_color": "Yellow",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gorilla City, Africa"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Boka (wife",
				"separated)",
				"Gorbzil Mammit (son)",
				"Sam Simeon (grandson)"
			]
		}
	},
	{
		"id": "granny-goodness",
		"name": "Granny Goodness",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/granny-goodness.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Athena"
			],
			"place_of_birth": "Apokolips",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "256 lb // 115 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Female Furies",
				"Darkseid's Elite"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "gravity",
		"name": "Gravity",
		"realName": "Greg Willis",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 33,
			"durability": 40,
			"power": 69,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/gravity.jpg",
		"biography": {
			"full_name": "Greg Willis",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Protector of the Universe"
			],
			"place_of_birth": "Sheboygan, Wisconsin",
			"first_appearance": "Gravity #1 (August, 2005)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Young Allies",
				"Formerly Great Lakes Initiative",
				"Heavy Hitters"
			],
			"relatives": [
				"Richard Willis (father)",
				"Mary Willis (mother)"
			]
		}
	},
	{
		"id": "greedo",
		"name": "Greedo",
		"realName": "Greedo",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 13,
			"durability": 15,
			"power": 31,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/greedo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Rodia",
			"first_appearance": "-",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Rodian",
			"height": "5'7 // 170 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Purple",
			"hair_color": "-",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Bounty Hunter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "green-arrow",
		"name": "Green Arrow",
		"realName": "Oliver Queen",
		"stats": {
			"intelligence": 81,
			"strength": 12,
			"speed": 35,
			"durability": 28,
			"power": 39,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/green-arrow.jpg",
		"biography": {
			"full_name": "Oliver Jonas Queen",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Emerald Archer",
				"Battling Bowman"
			],
			"place_of_birth": "-",
			"first_appearance": "More Fun Comics #73 (November 1941)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Professional Crime-fighter",
				"Multi-Billionaire"
			],
			"base": [
				"Star City, California",
				"Formerly Seattle, Washington"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League Reserve",
				"Connor Hawke",
				"Mia Dearden",
				"Arsenal",
				"Green Arrows of the World",
				"Black Canary",
				"Green Lantern Hal Jordan",
				"Shado",
				"Eddie Fyers",
				"Justice League Elite",
				"Seven Soldiers of Victory",
				"All-Star Squadron"
			],
			"relatives": [
				"Conner Hawke (son)",
				"Robert (son)",
				"Cissie King (possible daughter)",
				"Roy Harper - Red Arrow (adoptive son)",
				"Dinah Laurel Lance (wife)",
				"Dinah Drake Lance (mother-in-law",
				"deceased)",
				"Larry Lance (father-in-law",
				"deceased)"
			]
		}
	},
	{
		"id": "green-goblin",
		"name": "Green Goblin",
		"realName": "Norman Osborn",
		"stats": {
			"intelligence": 100,
			"strength": 48,
			"speed": 38,
			"durability": 60,
			"power": 48,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/green-goblin.jpg",
		"biography": {
			"full_name": "Norman Virgil Osborn",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Normie",
				"Green Goblin",
				"Goblin Lord",
				"Overlord",
				"the Goblin",
				"\"Gobby\"",
				"Scrier",
				"Commander Osborn",
				"Director Osborn",
				"Iron Patriot"
			],
			"place_of_birth": "Hartford, Connecticut",
			"first_appearance": "Amazing Spider-Man #14 (July, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"owner and president of Osborn Industries"
			],
			"base": [
				"H.A.M.M.E.R. base",
				"formerly Avengers Tower, New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"H.A.M.M.E.R.",
				"leader of the Dark Avengers",
				"formerly Thunderbolts",
				"The Cabal",
				"Former leader of the Sinister Twelve",
				"partner of Mendell Stromm",
				"Crime Master",
				"employer of the Enforcers",
				"Hellfire Club"
			],
			"relatives": [
				"Alton Osborn",
				"Sr. (paternal great-grandfather",
				"deceased)",
				"Alton Osborn",
				"Jr. (paternal grandfather",
				"deceased)",
				"Amberson Osborn (father",
				"deceased)",
				"Emily Osborn (wife",
				"deceased)",
				"Gabriel Stacy (son)",
				"Sarah Stacy (daughter)",
				"Harry Osborn (Green Goblin II",
				"son)",
				"Liz Allan (ex-daughter-in-law)",
				"Normie Osborn (grandson)",
				"Stanley Osborn (grandson)",
				""
			]
		}
	},
	{
		"id": "green-goblin-ii",
		"name": "Green Goblin II",
		"realName": "Harold Osborn",
		"stats": {
			"intelligence": 75,
			"strength": 55,
			"speed": 37,
			"durability": 50,
			"power": 44,
			"combat": 26
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/green-goblin-ii.jpg",
		"biography": {
			"full_name": "Harold Osborn",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "New York City",
			"first_appearance": "Amzing Spide-Man #31",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Blue",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Formerly New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Liz Allen-Osborn (Wife",
				") Norman III (son",
				")Norman Osborn II - Green Goblin (father)"
			]
		}
	},
	{
		"id": "green-goblin-iii",
		"name": "Green Goblin III",
		"realName": "Barton Hamilton",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/green-goblin-iii.jpg",
		"biography": {
			"full_name": "Barton Hamilton",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "As Dr. Barton Hamilton in Amazing Spider-Man #167 as Green Goblin III in Amazing Spider-Man #176",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Psychiatrist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "green-goblin-iv",
		"name": "Green Goblin IV",
		"realName": "Phillip Benjamin Urich",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/green-goblin-iv.jpg",
		"biography": {
			"full_name": "Phillip Benjamin Urich",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "(As Urich) Web of Spider-Man #125 (1995); (as Green Goblin) Green Goblin #1 (1995)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"College student",
				"former vigilante",
				"intern at Daily Bugle"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Arnold Urich (father)",
				"Mindy Urich (mother)",
				"Kenneth Urich (brother)",
				"Ben Urich (uncle)",
				"Doris Urich (aunt)"
			]
		}
	},
	{
		"id": "groot",
		"name": "Groot",
		"realName": "Groot",
		"stats": {
			"intelligence": 75,
			"strength": 85,
			"speed": 33,
			"durability": 70,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/groot.jpg",
		"biography": {
			"full_name": "Groot",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Monster from Planet X",
				"His Divine Majesty King Groot the 23rd",
				"Monarch of Planet X",
				"custodian of the branch worlds",
				"ruler of all the shades",
				"Flora colossus Information-silk"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales to Astonish #13 (November, 1960)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Flora Colossus",
			"height": "23'0 // 701 cm",
			"weight": "8200 lb // 4 tons",
			"eye_color": "Yellow",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Area 13 (the Howling Commandos' base)"
			]
		},
		"connections": {
			"group_affiliation": [
				"Guardians of the Galaxy",
				"Unnamed Kree covert ops team",
				"formerly Galactic Council",
				"Howling Commandos"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "guardian",
		"name": "Guardian",
		"realName": "James Hudson",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/guardian.jpg",
		"biography": {
			"full_name": "Dr. James McDonald Hudson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Weapon Alpha",
				"Antiguard",
				"Vindicator",
				"Mac",
				"Jimmy"
			],
			"place_of_birth": "London, Ontario, Canada",
			"first_appearance": "X-Men Vol.1  #109 (as Weapon Alpha)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Engineer",
				"government agent",
				"adventurer"
			],
			"base": [
				"Ottawa, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Flight"
			],
			"relatives": [
				"Vindicator II (Heather Hudson)",
				"wife"
			]
		}
	},
	{
		"id": "guy-gardner",
		"name": "Guy Gardner",
		"realName": "Guy Gardner",
		"stats": {
			"intelligence": 38,
			"strength": 90,
			"speed": 53,
			"durability": 64,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/guy-gardner.jpg",
		"biography": {
			"full_name": "Guy Darrin Gardner",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern",
				"Red Lantern",
				"Warrior"
			],
			"place_of_birth": "Baltimore, Maryland",
			"first_appearance": "Green Lantern Vol 2 #59",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human-Vuldarian",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Former High School gym teacher",
				"former bar owner",
				"currently Honor guard of the Green Lantern Corps"
			],
			"base": [
				"Formerly New York City",
				"currently Oa"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"Formerly Justice League of America"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hal-jordan",
		"name": "Hal Jordan",
		"realName": "Hal Jordan",
		"stats": {
			"intelligence": 69,
			"strength": 90,
			"speed": 75,
			"durability": 80,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hal-jordan.jpg",
		"biography": {
			"full_name": "Harold Jordan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Parallax",
				"Spectre",
				"Green Lantern"
			],
			"place_of_birth": "Coast City, California",
			"first_appearance": "Showcase #22",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Air Force Test Pilot"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"Justice League of America",
				"Justice League Europe",
				"frequently teamed with the second Flash and the original Green Arrow"
			],
			"relatives": [
				"Martin H. \"Marty\" Jordan (father",
				"deceased)",
				"Jessica Jordan (mother",
				"deceased)",
				"Jim Jordan (younger brother)",
				"Jack Jordan (older brother",
				"deceased)",
				"Jan Jordan (sister-in-law",
				"deceased)",
				"Helen Jordan (neice)",
				"Larry Jordan (Air Wave I - cousin",
				"deceased)",
				"Hal Jordan (Air Wave II - cousin)"
			]
		}
	},
	{
		"id": "han-solo",
		"name": "Han Solo",
		"realName": "Han Solo",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 17,
			"durability": 20,
			"power": 43,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/han-solo.jpg",
		"biography": {
			"full_name": "Han Solo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Corellia",
			"first_appearance": "Star Wars: Episode IV - A New Hope (1977)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "176 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hancock",
		"name": "Hancock",
		"realName": "John Hancock",
		"stats": {
			"intelligence": 63,
			"strength": 90,
			"speed": 67,
			"durability": 100,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hancock.jpg",
		"biography": {
			"full_name": "John Hancock",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Sony Pictures",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "harley-quinn",
		"name": "Harley Quinn",
		"realName": "Harley Quinn",
		"stats": {
			"intelligence": 88,
			"strength": 12,
			"speed": 33,
			"durability": 65,
			"power": 55,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/harley-quinn.jpg",
		"biography": {
			"full_name": "Harleen Francis Quinzel",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Harleen Quinzel",
				"Harl",
				"Cupid of Crime",
				"Jane Wisakedjak",
				"Elise Archer",
				"Pumpkin Pooh"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman: Harley Quinn (October, 1999)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Psychiatrist"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly The Quintets",
				"The Joker",
				"Poison Ivy",
				"Secret Six"
			],
			"relatives": [
				"Barry Quinzel (brother)",
				"Sharon Quinzel (mother)",
				"Nick Quinzel (father)",
				"Jenny Quinzel (niece)",
				"Nicky Quinzel (nephew)"
			]
		}
	},
	{
		"id": "harry-potter",
		"name": "Harry Potter",
		"realName": "Harry James Potter",
		"stats": {
			"intelligence": 75,
			"strength": 7,
			"speed": 21,
			"durability": 10,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/harry-potter.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Triwizard Champion",
				"Seeker",
				"Quidditch Captain",
				"Leader of Dumbledore's Army",
				"Master of Death"
			],
			"place_of_birth": "-",
			"first_appearance": "Harry Potter and the Philosopher's Stone",
			"publisher": "J. K. Rowling",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Head of the Department of Magical Law Enforcement["
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "havok",
		"name": "Havok",
		"realName": "Alexander Summers",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 25,
			"durability": 60,
			"power": 71,
			"combat": 45
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/havok.jpg",
		"biography": {
			"full_name": "Alexander Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mutant X",
				"Goblin Prince"
			],
			"place_of_birth": "Honolulu, Hawaii",
			"first_appearance": "X-MEN #58",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6' // 183 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Currently Adventurer",
				"formerly Graduate student in geophysics"
			],
			"base": [
				"Alexandria, Virginia"
			]
		},
		"connections": {
			"group_affiliation": [
				"Uncanny Avengers",
				"formerly X-Men",
				"Starjammers",
				"X-Factor Investigations",
				"Six",
				"Brotherhood",
				"X-Factor",
				"Dark Descendants",
				"Genoshan Magistrates",
				"Defenders for a Day"
			],
			"relatives": [
				"Oscar Summers (adoptive paternal distant ancestor",
				"deceased)",
				"Daniel Summers (paternal distant ancestor",
				"deceased)",
				"Amanda Mueller (Black Womb) (paternal distant ancestor)",
				"unnamed paternal great-grandfather",
				"deceased",
				"Gloria Dayne (Fontanelle) (paternal distant ancestor)",
				"Philip Summers (paternal grandfather)",
				"Deborah Summers (paternal grandmother)",
				"Christopher Summers (Corsair) (father",
				"deceased)",
				"Katherine Summers (mother",
				"deceased)",
				"Andrew Blanding (adoptive father)",
				"Joanna Blanding (adoptive mother)",
				"Scott Summers (Cyclops) (brother)",
				"Gabriel Summers (Vulcan) (brother",
				"deceased)",
				"Ahmet Abdol (Living Monolith) (\"brother\" via X-Gene transfer)",
				"Haley Blanding (adoptive sister)",
				"Todd Blanding (adoptive brother",
				"deceased)",
				"Madelyne Pryor-Summers (Red Queen) (sister-in-law/clone of second sister-in-law",
				"deceased)",
				"Jean Grey-Summers (Phoenix) (sister-in-law",
				"deceased)",
				"Cal'syee Neramani (Deathbird) (sister-in-law)",
				"Nathan Summers (Cable) (nephew)",
				"Adam Neramani (X-Treme) (nephew",
				"alleged half-brother)",
				"Aliya Dayspring (Jenskot) (niece",
				"deceased)",
				"Hope Summers (niece",
				"deceased)",
				"Madelyne Pryor (Earth-1298) (Marvel Woman) (alternate reality wife)",
				"Scott Summers (Earth-1298) (alternate reality son)",
				"Rachel Grey (Marvel Girl) (alternate reality niece)",
				"Rachel Summers (Mother Askani) (alternate reality niece",
				"deceased)",
				"Nathaniel Grey (X-Man) (alternate reality nephew)",
				"Stryfe (nephew's clone",
				"deceased)",
				"Tyler Dayspring (Genesis) (great-nephew",
				"deceased)",
				"Hope Summers (adoptive great-niece)",
				"Janet van Dyne (Wasp) (wife)",
				"Katie Summers (daughter)"
			]
		}
	},
	{
		"id": "hawk",
		"name": "Hawk",
		"realName": "Henry Hall",
		"stats": {
			"intelligence": 38,
			"strength": 38,
			"speed": 35,
			"durability": 95,
			"power": 43,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawk.jpg",
		"biography": {
			"full_name": "Henry Hall",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Monarch",
				"Extant"
			],
			"place_of_birth": "-",
			"first_appearance": "Showcase #75 (June, 1968)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "197 lb // 89 kg",
			"eye_color": "Red",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Lantern Corps",
				"Teen Titans",
				"Hawk and Dove",
				"Titans West"
			],
			"relatives": [
				"Don Hall (brother",
				"deceased)",
				"Irwin Hall (father)",
				"Rae Penfield (mother)",
				"James Penfield (uncle)"
			]
		}
	},
	{
		"id": "hawkeye",
		"name": "Hawkeye",
		"realName": "Clint Barton",
		"stats": {
			"intelligence": 56,
			"strength": 12,
			"speed": 21,
			"durability": 10,
			"power": 29,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkeye.jpg",
		"biography": {
			"full_name": "Clinton Francis Barton",
			"alter_egos": [
				"Goliath",
				"Ronin"
			],
			"aliases": [
				"Ronin",
				"Goliath",
				"Golden Archer",
				"the Marksman",
				"Father Time",
				"Longbow"
			],
			"place_of_birth": "Waverly, Iowa",
			"first_appearance": "Tales of Suspense #57 (September, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'3 // 191 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"Thunderbolts",
				"Avengers West Coast",
				"Great Lakes Avengers",
				"Shadows",
				"Chain Gang",
				"former partner of the Black Widow"
			],
			"relatives": [
				"Harold Barton (father",
				"deceased)",
				"Edith Barton (mother",
				"deceased)",
				"Bernard Barton (brother",
				"deceased)",
				"Barbara Morse (wife",
				"deceased)"
			]
		}
	},
	{
		"id": "hawkeye-ii",
		"name": "Hawkeye II",
		"realName": "Katherine Elizabeth Bishop",
		"stats": {
			"intelligence": 50,
			"strength": 6,
			"speed": 8,
			"durability": 10,
			"power": 24,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkeye-ii.jpg",
		"biography": {
			"full_name": "Katherine Elizabeth Bishop",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kate Bishop"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "Young Avengers #1 (April, 2005)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "126 lb // 57 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student",
				"Adventurer",
				"Fugitive"
			],
			"base": [
				"Bishop Publishing, New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Young Avengers",
				"partner of Hawkeye (Clint Barton)",
				"formerly Secret Avengers"
			],
			"relatives": [
				"Derek Bishop (father)",
				"Eleanor Bishop (mother",
				"deceased)",
				"Susan Bishop (sister)",
				""
			]
		}
	},
	{
		"id": "hawkgirl",
		"name": "Hawkgirl",
		"realName": "Kendra Saunders",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 53,
			"durability": 99,
			"power": 96,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkgirl.jpg",
		"biography": {
			"full_name": "Kendra Saunders",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Chay-Ara",
				"Sheila Carr",
				"Lady Celia Penbrook",
				"Kate Manser",
				"Shiera Sanders"
			],
			"place_of_birth": "-",
			"first_appearance": "JSA Secret Files #1 (August 1999)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Film School Student",
				"Temp Curator of the Stonechat Museum"
			],
			"base": [
				"St. Roch, Louisiana, JLA Watchtower",
				"formerly Manhattan, New York (as a member of the JSA)"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"formerly a member of the JSA",
				"Birds of Prey"
			],
			"relatives": [
				"Michael Saunders (father",
				"deceased)",
				"Trina Saunders (mother",
				"deceased)",
				"Cyril \"Speed\" Saunders (grandfather)",
				"Mia Saunders (daughter)",
				"Shiera Hall (Hawkgirl",
				"great-aunt",
				"deceased)",
				"Carter Hall (Hawkman",
				"great-uncle)",
				"Hector Hall (Dr. Fate",
				"2nd cousin)",
				"Northwind (cousin through adoption)",
				"Hippolyta Hall (Fury",
				"cousin through marriage)",
				"Sandman (Daniel Hall",
				"3rd cousin)",
				"Death",
				"Destiny",
				"Destruction",
				"Delirium",
				"Desire (3rd cousins)"
			]
		}
	},
	{
		"id": "hawkman",
		"name": "Hawkman",
		"realName": "Carter Hall",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkman.jpg",
		"biography": {
			"full_name": "Carter Hall",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "FLASH COMICS #1 (January 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America",
				"Justice League of America",
				"All-Star Squadron"
			],
			"relatives": [
				"Shiera Sanders Hall (wife",
				"deceased",
				"soul currently inhabiting the body of Kendra Saunders)",
				"Hector Hall (son",
				"deceased)",
				"Daniel Hall (grandson)",
				"Lyta Trevor Hall (daughter-in-law",
				"deceased)"
			]
		}
	},
	{
		"id": "hawkwoman-i",
		"name": "Hawkwoman I",
		"realName": "Shayera Hol",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkwoman-i.jpg",
		"biography": {
			"full_name": "Shayera Hol",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Shayera Hall",
				"Hawkgirl"
			],
			"place_of_birth": "-",
			"first_appearance": "The Brave and the Bold #34 (February-March 1961)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Midway City, Michigan",
				"Justice League Satellite I"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hawkwoman-ii",
		"name": "Hawkwoman II",
		"realName": "Sharon Parker",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkwoman-ii.jpg",
		"biography": {
			"full_name": "Sharon Parker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hawkwoman-iii",
		"name": "Hawkwoman III",
		"realName": "Shayera Thal",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hawkwoman-iii.jpg",
		"biography": {
			"full_name": "Shayera Thal",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Police Officer"
			],
			"base": [
				"Detroit",
				"Thanagar"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "heat-wave",
		"name": "Heat Wave",
		"realName": "Mick Rory",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 17,
			"durability": 45,
			"power": 27,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/heat-wave.jpg",
		"biography": {
			"full_name": "Mick Rory",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rory Calhoun"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash #140 (November, 1963)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "179 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Professional Criminal"
			],
			"base": [
				"Central City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Rogues",
				"formerly Secret Society of Super-Villains",
				"Legion of Doom"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hela",
		"name": "Hela",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 100,
			"speed": 46,
			"durability": 100,
			"power": 100,
			"combat": 45
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hela.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Goddess of Death"
			],
			"place_of_birth": "-",
			"first_appearance": "Journey into Mystery #102",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Asgardian",
			"height": "7'0 // 213 cm",
			"weight": "500 lb // 225 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Asgardian Goddess of Death",
				"former Ruler of Hel and Niffleheim"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Loki (father)",
				"Thor (Uncle)"
			]
		}
	},
	{
		"id": "hellboy",
		"name": "Hellboy",
		"realName": "Anung Un Rama",
		"stats": {
			"intelligence": 63,
			"strength": 53,
			"speed": 21,
			"durability": 95,
			"power": 68,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hellboy.jpg",
		"biography": {
			"full_name": "Anung Un Rama",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"World Destroyer",
				"The Great Beast"
			],
			"place_of_birth": "-",
			"first_appearance": "Dime Press #4 (May 1, 1993)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "8'6 // 259 cm",
			"weight": "350 lb // 158 kg",
			"eye_color": "Gold",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Abe Sapien",
				"Liz Sherman",
				"Roger the Homunculus",
				"Savage Dragon",
				"the Goon",
				"Batman",
				"Starman",
				"Ghost",
				"Painkiller Jane",
				"Lobster Johnson",
				"Torch of Liberty"
			],
			"relatives": [
				"Catherine Tanner-Tremaine (mother",
				"deceased)",
				"two unnamed maternal half-siblings (deceased)",
				"Professor Trevor Bruttenholm (foster father)"
			]
		}
	},
	{
		"id": "hellcat",
		"name": "Hellcat",
		"realName": "Patricia Walker",
		"stats": {
			"intelligence": 63,
			"strength": 11,
			"speed": 33,
			"durability": 45,
			"power": 46,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hellcat.jpg",
		"biography": {
			"full_name": "Patricia Walker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Patsy Walker",
				"Patricia Hellstrom",
				"The Cat"
			],
			"place_of_birth": "Centerville, CA USA",
			"first_appearance": "Avengers #144 (February, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'8 // 173 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Housemaker",
				"model",
				"adventurer",
				"supernatural investigator"
			],
			"base": [
				"San Francisco, CA USA"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Alaskan-based Initiative agent",
				"Lady Liberators",
				"Avengers",
				"Defenders",
				"Legion of the Unliving"
			],
			"relatives": [
				"Joshua Walker (father)",
				"Dorothy Walker (mother",
				"deceased)",
				"Sophia (maternal aunt)",
				"Bea (step-mother)",
				"Mickey Walker (brother)",
				"Robert \"Buzz\" Baxter (aka Mad-Dog",
				"ex-husband)",
				"Daimon Hellstrom (aka Hellstorm",
				"ex-husband)",
				"Percy Walker"
			]
		}
	},
	{
		"id": "hellstorm",
		"name": "Hellstorm",
		"realName": "Daimon Hellstrom",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hellstorm.jpg",
		"biography": {
			"full_name": "Daimon Hellstrom",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Antichrist",
				"Black Halo",
				"the Devil",
				"King of Hell",
				"Prince of Lies",
				"Satan",
				"Son of Satan."
			],
			"place_of_birth": "Greentown, Massachusetts",
			"first_appearance": "(as Hellstorm) West Coast Avengers (second series) #14",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1' // 185 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Red",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Ruler of Hell",
				"former Demonologist",
				"occult investigator",
				"exorcist and priest"
			],
			"base": [
				"Hell, formerly San Francisco, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Hell-Lords",
				"formerly Hellstrom and Hellstrom",
				"Paranormal Investigation",
				"member of the Defenders"
			],
			"relatives": [
				"Hellcat (Patricia Walker",
				"wife",
				"deceased)",
				"Marduk Kurios (father (and son)",
				"aka Satan)",
				"Victoria Wingate Hellstrom (mother",
				"deceased)",
				"Satana (sister)",
				"Jaine Cutter (consort)"
			]
		}
	},
	{
		"id": "hercules",
		"name": "Hercules",
		"realName": "Heracles",
		"stats": {
			"intelligence": 63,
			"strength": 100,
			"speed": 46,
			"durability": 85,
			"power": 89,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hercules.jpg",
		"biography": {
			"full_name": "Heracles",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spider-Herc",
				"The Lion of Olympus",
				"The Defender of Olympus",
				"The Scion of Olympus",
				"Prince of Power",
				"Alcaeus",
				"Herakles",
				"Herc",
				"Harry Cleese",
				"Victor Tegler",
				"Agent 74"
			],
			"place_of_birth": "Thebes, Greece",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demi-God",
			"height": "6'5 // 196 cm",
			"weight": "325 lb // 146 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Olympian God of Strength and Labor",
				"later Olympian God of Heroes"
			],
			"base": [
				"Brooklyn",
				"formerly Infinite Avengers Mansion, Mount Olympus, Avengers Mansion, Hydrobase"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly God Squad",
				"Council of Godheads",
				"Olympia Corp.",
				"Mighty Avengers",
				"Renegades",
				"Secret Avengers",
				"Avengers",
				"Champions of Los Angeles",
				"Defenders",
				"Heroes for Hire",
				"Damage Control",
				"Olympian Gods",
				"Argonauts",
				"Defenders for a Day"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hiro-nakamura",
		"name": "Hiro Nakamura",
		"realName": "Hiro Nakamura",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hiro-nakamura.jpg",
		"biography": {
			"full_name": "Hiro Nakamura",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jotaro Kujo",
				"Takezo Kensei"
			],
			"place_of_birth": "Tokyo, Japan",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Office worker"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Kaito Nakamura (deceased)",
				"Ishi Nakamura (deceased)",
				"Kimiko Nakamura (older sister)"
			]
		}
	},
	{
		"id": "hit-girl",
		"name": "Hit-Girl",
		"realName": "Mindy McCready",
		"stats": {
			"intelligence": 56,
			"strength": 7,
			"speed": 29,
			"durability": 20,
			"power": 27,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hit-girl.jpg",
		"biography": {
			"full_name": "Mindy McCready",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Hit Girl",
				"Hitgirl"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Icon Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hobgoblin",
		"name": "Hobgoblin",
		"realName": "Roderick Kingsley",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hobgoblin.jpg",
		"biography": {
			"full_name": "Roderick Kingsley",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Grey"
		},
		"work": {
			"occupation": [
				"Fashion designer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Daniel Kingsley (brother)"
			]
		}
	},
	{
		"id": "hollow",
		"name": "Hollow",
		"realName": "Monet St. Croix",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/hollow.jpg",
		"biography": {
			"full_name": "Monet St. Croix",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Penace",
				"M",
				"Monet St. Croix",
				"Penny",
				"Yvette"
			],
			"place_of_birth": "-",
			"first_appearance": "Generation X #1 (1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Massachusetts Academy",
				"Phil Urich's aprtment"
			]
		},
		"connections": {
			"group_affiliation": [
				"Generation X",
				"The Loners"
			],
			"relatives": [
				"M",
				"Emplate",
				"St. Croix Twins"
			]
		}
	},
	{
		"id": "hope-summers",
		"name": "Hope Summers",
		"realName": "Hope Summers",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 12,
			"durability": 32,
			"power": 89,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hope-summers.jpg",
		"biography": {
			"full_name": "Hope Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mutant Messiah",
				"Messiah Child",
				"Hub",
				"Throat Slicer",
				"Little Girl",
				"Little Momma"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men Vol 2 #205 (2008)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "106 lb // 48 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly Cable"
			],
			"relatives": [
				"Louise Spalding (mother",
				"deceased)",
				"unknown biological father",
				"Mrs. Spalding (maternal grandmother)",
				"Cable (adoptive father",
				"deceased)",
				"Hope (adoptive mother",
				"deceased)",
				"Cyclops (adoptive grandfather)",
				"Red Queen / Phoenix (adoptive grandmothers",
				"deceased?)",
				"X-Man (adoptive uncle)",
				"Marvel Girl (adoptive aunt)",
				"Havok (adoptive granduncle)",
				"Vulcan (adoptive granduncle",
				"deceased)",
				"Deathbird (adoptive grandaunt)"
			]
		}
	},
	{
		"id": "howard-the-duck",
		"name": "Howard the Duck",
		"realName": "Howard (Last name unrevealed)",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/howard-the-duck.jpg",
		"biography": {
			"full_name": "Howard (Last name unrevealed)",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Duckman",
				"Iron Duck",
				"Pondhopper",
				"Shang-Op",
				"Cheap Ducktective",
				"Duckboy",
				"Dark Mallard of the Night"
			],
			"place_of_birth": "New Stork, New Stork, Duckworld",
			"first_appearance": "FEAR #19",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "2'7' // 79 cm",
			"weight": "40 lb // 18 kg",
			"eye_color": "Brown",
			"hair_color": "Yellow"
		},
		"work": {
			"occupation": [
				"Many and various",
				"including former candidate for the United States presidency but usually unemployed"
			],
			"base": [
				"Cleveland, Ohio"
			]
		},
		"connections": {
			"group_affiliation": [
				"No known group affiliation"
			],
			"relatives": [
				"(according to one account) Ronald (father)",
				"Henrietta (mother)",
				"Theresa (sister)",
				"Orville (brother)"
			]
		}
	},
	{
		"id": "hulk",
		"name": "Hulk",
		"realName": "Bruce Banner",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 63,
			"durability": 100,
			"power": 98,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hulk.jpg",
		"biography": {
			"full_name": "Robert Bruce Banner",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Annihilator",
				"Captain Universe",
				"Joe Fixit",
				"Mr. Fixit",
				"Mechano",
				"Professor",
				"Jade Jaws",
				"Golly Green Giant"
			],
			"place_of_birth": "Dayton, Ohio",
			"first_appearance": "Incredible Hulk #1 (May, 1962)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "8'0 // 244 cm",
			"weight": "1400 lb // 630 kg",
			"eye_color": "Green",
			"hair_color": "Green",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Nuclear physicist",
				"Agent of S.H.I.E.L.D."
			],
			"base": [
				"(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
			]
		},
		"connections": {
			"group_affiliation": [
				"Defenders",
				"former leader of the new Hulkbusters",
				"member of the Avengers",
				"Pantheon",
				"Titans Three",
				"the Order",
				"Hulkbusters of Counter-Earth-Franklin",
				"alternate Fantastic Four"
			],
			"relatives": [
				"Betty Ross Talbot Banner (wife)",
				"Brian Banner (father",
				"apparently deceased)",
				"Rebecca Banner (mother",
				"deceased)",
				"Morris Walters (uncle)",
				"Elaine Banner Walters (aunt",
				"deceased)",
				"Jennifer Walters (She-Hulk",
				"cousin)",
				"Thaddeus E. 'Thunderbolt' Ross (father"
			]
		}
	},
	{
		"id": "human-torch",
		"name": "Human Torch",
		"realName": "Johnny Storm",
		"stats": {
			"intelligence": 63,
			"strength": 11,
			"speed": 63,
			"durability": 70,
			"power": 87,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/human-torch.jpg",
		"biography": {
			"full_name": "Jonathan Lowell Spencer Storm",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Matchstick Johnny",
				"Doug Brown"
			],
			"place_of_birth": "Glenville, Long Island, New York",
			"first_appearance": "Fantastic Four #1 (1961)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "5'10 // 178 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Pier Four, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Fantastic Four"
			],
			"relatives": [
				"Susan Richards - Invisible Woman (sister)",
				"Franklin Richards (nephew)",
				"Reed Richards - Mister Fantastic (brother-in-law) Lyja (ex-wife)"
			]
		}
	},
	{
		"id": "huntress",
		"name": "Huntress",
		"realName": "Helena Rosa Bertinelli",
		"stats": {
			"intelligence": 69,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 34,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/huntress.jpg",
		"biography": {
			"full_name": "Helena Rosa Bertinelli",
			"alter_egos": [
				"Batgirl III"
			],
			"aliases": [
				"Batgirl",
				"Sicilian",
				"Mafia Princess"
			],
			"place_of_birth": "-",
			"first_appearance": "Huntress #1 (April 1989)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"High school English teacher"
			],
			"base": [
				"Mobile",
				"primarily Gotham City and Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Birds of Prey",
				"formerly Checkmate",
				"Justice League of America",
				"Outsiders"
			],
			"relatives": [
				"Giuseppe Bertinelli (great-grandfather",
				"deceased)",
				"Alfredo Bertinelli (grandfather",
				"deceased)",
				"Franco Bertinelli (father",
				"deceased)",
				"Maria Panessa Bertinelli (mother",
				"deceased)",
				"Santo Cassamento (biological father",
				"deceased)",
				"Pino Bertinelli (brother",
				"deceased)",
				"Freddy Caldone (cousin",
				"deceased)",
				"Tomaso Panessa (uncle)",
				"Graziella Panessa (aunt)",
				"Monica Simonetta Panessa (cousin)",
				"Claudio Panessa (cousin",
				"deceased)"
			]
		}
	},
	{
		"id": "husk",
		"name": "Husk",
		"realName": "Paige Elisabeth Guthrie",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 35,
			"durability": 78,
			"power": 48,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/husk.jpg",
		"biography": {
			"full_name": "Paige Elisabeth Guthrie",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Hayseed"
			],
			"place_of_birth": "Cumberland, Kentucky",
			"first_appearance": "Rom Annual #3 (November, 1984)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'7 // 170 cm",
			"weight": "128 lb // 58 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly student",
				"activist"
			],
			"base": [
				"Base of operations unknown",
				"formerly Xavier Institute, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"X-Corp",
				"Generation X"
			],
			"relatives": [
				"Thomas Zebulon Guthrie (father",
				"deceased)",
				"Lucinda Guthrie (mother)",
				"Samuel Zachery Guthrie (brother",
				"Cannonball)",
				"Joshua 'Jay' Guthrie (brother",
				"Icarus)",
				"Joella Guthrie (sister)",
				"Elizabeth Guthrie (sister)",
				"Melody Guthrie (sister)",
				"Jeb Guthrie (brother)",
				"Lewis Guth"
			]
		}
	},
	{
		"id": "hybrid",
		"name": "Hybrid",
		"realName": "Scott Washington",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 58,
			"durability": 75,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hybrid.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Guardsman Number Six",
				"Terror of Brooklyn",
				"Riot",
				"Phage",
				"Lasher",
				"Agony"
			],
			"place_of_birth": "Bedford-Stuyvesant, Brooklyn, New York City",
			"first_appearance": "Venom Along Came A Spider #2 (as Hybrid)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "5'9 // 175 cm",
			"weight": "172 lb // 77 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Bedford-Stuyvesant, Brooklyn, New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Warriors",
				"Guardsmen",
				"NYPD"
			],
			"relatives": [
				"Unnamed mother",
				"Derek Washington (brother",
				"deceased)",
				"Hybrid (\"former symbiote\"",
				"defused)"
			]
		}
	},
	{
		"id": "hydro-man",
		"name": "Hydro-Man",
		"realName": "Morris Bench",
		"stats": {
			"intelligence": 38,
			"strength": 13,
			"speed": 25,
			"durability": 80,
			"power": 66,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hydro-man.jpg",
		"biography": {
			"full_name": "Morris Bench",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Morrie"
			],
			"place_of_birth": "Bronx, New York",
			"first_appearance": "Amazing Spider-Man #212 (January, 1981)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "265 lb // 119 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional Criminal",
				"former crewman of cargo ship"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Member of the Masters of Evil",
				"formerly Sinister Syndicate",
				"Frightful Four",
				"Sinister Six",
				"Sinister Twelve"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "hyperion",
		"name": "Hyperion",
		"realName": "Mark Milton",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 100,
			"durability": 95,
			"power": 83,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/hyperion.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mark Milton",
				"Zhib-Ran",
				"Mr. Kant",
				"Marcus Milton"
			],
			"place_of_birth": "-",
			"first_appearance": "Avengers #85",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Eternal",
			"height": "6'0 // 183 cm",
			"weight": "460 lb // 207 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"(Formerly) Cartoonist",
				"government agent"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Squadron Supreme",
				"(Formerly) Star Masters",
				"ally of Exiles"
			],
			"relatives": [
				"Mr. and Mrs. Hamilton (foster parents)"
			]
		}
	},
	{
		"id": "iceman",
		"name": "Iceman",
		"realName": "Bobby Drake",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 53,
			"durability": 100,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/iceman.jpg",
		"biography": {
			"full_name": "Robert Louis Drake",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bobby Drake",
				"Mister Friese",
				"Drake Roberts",
				"Rampage",
				"Frozen One",
				"Iceface"
			],
			"place_of_birth": "Fort Washington, Long Island, New York",
			"first_appearance": "X-Men #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'8 // 173 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly teacher",
				"accountant",
				"student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (Jean Grey School member",
				"founding member)",
				"formerly Murder Circus (brainwashed)",
				"Excelsiors (squad leader)",
				"The Twelve",
				"X-Factor/X-Terminators (founding member)",
				"Chosen (Dualers)",
				"Secret Defenders",
				"Defenders",
				"Champions (founder and founding member)"
			],
			"relatives": [
				"William Robert Drake (father)",
				"Madeline Beatrice Bass Drake (mother)",
				"Mary (cousin)",
				"Joel (cousin)",
				"Anne (aunt)"
			]
		}
	},
	{
		"id": "impulse",
		"name": "Impulse",
		"realName": "Bartholomew Allen II",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 100,
			"durability": 60,
			"power": 74,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/impulse.jpg",
		"biography": {
			"full_name": "Bartholomew Allen II",
			"alter_egos": [
				"Flash IV",
				"Kid Flash II"
			],
			"aliases": [
				"Flash IV",
				"Kid Flash II"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Vol 2 #92 (July, 1994)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Yellow",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Student"
			],
			"base": [
				"San Francisco, formerly Los Angeles, Keystone City, Manchester, Alabama"
			]
		},
		"connections": {
			"group_affiliation": [
				"Flash Family",
				"Teen Titans",
				"formerly Legion of Super-Heroes",
				"Young Justice"
			],
			"relatives": [
				"Don Allen (father)",
				"Meloni Thawne (mother)",
				"Barry Allen (grandfather)",
				"Iris West-Allen (grandmother)",
				"President Thawne (grandfather)",
				"Captain Boomerang (Owen Mercer) (half-brother)",
				"Allen Family"
			]
		}
	},
	{
		"id": "indiana-jones",
		"name": "Indiana Jones",
		"realName": "Indiana Jones",
		"stats": {
			"intelligence": 69,
			"strength": 10,
			"speed": 17,
			"durability": 30,
			"power": 19,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/indiana-jones.jpg",
		"biography": {
			"full_name": "Henry Walton Jones Jr.",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Indy"
			],
			"place_of_birth": "Princeton, New Jersey",
			"first_appearance": "Raiders of the Lost Ark (1981)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "176 lb // 79 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Archaeologist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "indigo",
		"name": "Indigo",
		"realName": "Iroque",
		"stats": {
			"intelligence": 75,
			"strength": 63,
			"speed": 50,
			"durability": 50,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/indigo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Indigo-1"
			],
			"place_of_birth": "-",
			"first_appearance": "Green Lantern Vol 4 #25 (January, 2008)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Female",
			"race": "Alien",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Purple"
		},
		"work": {
			"occupation": [
				"Leader of the Indigo Tribe"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Indigo Tribe",
				"formerly the New Guardians"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ink",
		"name": "Ink",
		"realName": "Eric Gitter",
		"stats": {
			"intelligence": 38,
			"strength": 28,
			"speed": 17,
			"durability": 40,
			"power": 73,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ink.jpg",
		"biography": {
			"full_name": "Eric Gitter",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Young X-Men #1 (May, 2008)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'11 // 180 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men",
				"Young X-Men"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "invisible-woman",
		"name": "Invisible Woman",
		"realName": "Susan Storm Richards",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 27,
			"durability": 85,
			"power": 93,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/invisible-woman.jpg",
		"biography": {
			"full_name": "Susan Storm Richards",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Invisible Girl"
			],
			"place_of_birth": "Glenville, Long Island, New York",
			"first_appearance": "FANTASTIC FOUR #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human / Radiation",
			"height": "5'6 // 168 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Member of the Fantastic Four",
				"financial manager for Fantastic Four Inc",
				"occasional model and actress"
			],
			"base": [
				"Pier Four, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Fantastic Four",
				"formerly",
				"Secret Avengers",
				"Avengers",
				"Brides of Set",
				"Pawns of Death"
			],
			"relatives": [
				"Reed Richards (Mister Fantastic",
				"husband)",
				"Franklin Richards (son)",
				"Valeria Richards (daughter)",
				"Johnny Storm (Human Torch",
				"brother)",
				"Franklin Storm (father",
				"deceased)",
				"Mary Storm (mother",
				"deceased)",
				"Marygay Jewel Dinkins (aunt)",
				"\"Bones\" (cousin)",
				"Evelyn Richards (mother-in-law",
				"deceased)",
				"Nathaniel Richards (father-in-law)",
				"Cassandra Richards (Warlord",
				"mother-in-law",
				"deceased)",
				"unnamed child of Nathaniel Richards (brother-in-law)",
				"Tara Richards (Huntara",
				"sister-in-law)",
				"Kristoff Vernard (alleged brother-in-law)",
				"Lyja (sister-in-law)"
			]
		}
	},
	{
		"id": "iron-fist",
		"name": "Iron Fist",
		"realName": "Danny Rand",
		"stats": {
			"intelligence": 75,
			"strength": 55,
			"speed": 33,
			"durability": 50,
			"power": 95,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/iron-fist.jpg",
		"biography": {
			"full_name": "Daniel Thomas Rand-K'ai",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Daredevil",
				"Daniel Thomas Rand",
				"the Living Weapon",
				"Young Dragon",
				"Danny Rand"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Premiere #15 (May 1974)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly co-owner of Rand-Meachum",
				"Inc.",
				"bodyguard",
				"private investigator",
				"research assistant",
				"warrior"
			],
			"base": [
				"New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Avengers",
				"Heroes for Hire",
				"Inc.",
				"Secret Defenders",
				"Defenders",
				"Misty Knight",
				"Luke Cage"
			],
			"relatives": [
				"Wendell Rand-K'ai (father",
				"deceased)",
				"Heather Duncan Rand (mother",
				"deceased)",
				"Yu-Ti (adopted uncle)",
				"Miranda Rand-K'ai (half-sister)",
				"Lord Tuan (adopted paternal grandfather",
				"deceased)",
				"Lady Ming (adopted paternal grandmother",
				"deceased)",
				"Thomas Duncan (maternal grandfather)"
			]
		}
	},
	{
		"id": "iron-man",
		"name": "Iron Man",
		"realName": "Tony Stark",
		"stats": {
			"intelligence": 100,
			"strength": 85,
			"speed": 58,
			"durability": 85,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/iron-man.jpg",
		"biography": {
			"full_name": "Anthony Edward Stark",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Iron Knight",
				"Hogan Potts",
				"Spare Parts Man",
				"Cobalt Man II",
				"Crimson Dynamo",
				"Ironman"
			],
			"place_of_birth": "Long Island, New York",
			"first_appearance": "Tales of Suspence #39 (March, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'6 // 198 cm",
			"weight": "425 lb // 191 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Inventor",
				"Industrialist",
				"former United States Secretary of Defense"
			],
			"base": [
				"Seattle, Washington"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"Illuminati",
				"Stark Resilient",
				"formerly S.H.I.E.L.D.",
				"leader of Stark Enterprises",
				"the Pro-Registration Superhero Unit",
				"New Avengers",
				"Mighty Avengers",
				"Hellfire Club",
				"Force Works",
				"Avengers West Coast",
				"United States Department of Defense."
			],
			"relatives": [
				"Howard Anthony Stark (father",
				"deceased)",
				"Maria Stark (mother",
				"deceased)",
				"Morgan Stark (cousin)",
				"Isaac Stark (ancestor)"
			]
		}
	},
	{
		"id": "iron-monger",
		"name": "Iron Monger",
		"realName": "Obadiah Stane",
		"stats": {
			"intelligence": 88,
			"strength": 63,
			"speed": 25,
			"durability": 90,
			"power": 57,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/iron-monger.jpg",
		"biography": {
			"full_name": "Obadiah Stane",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "4230 lb // 2 tons",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"CEO Stane International"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Stane International"
			],
			"relatives": [
				"Zebediah (father",
				"deceased)",
				"unnamed mother (deceased)",
				"Ezekiel Stane (son)"
			]
		}
	},
	{
		"id": "isis",
		"name": "Isis",
		"realName": "Adrianna Tomaz",
		"stats": {
			"intelligence": 75,
			"strength": 48,
			"speed": 75,
			"durability": 46,
			"power": 50,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/isis.jpg",
		"biography": {
			"full_name": "Adrianna Tomaz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Adrianna) 52 Week Three; (as Isis) 52 Week Twelve",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly First Lady of Kahndaq",
				"former slave"
			],
			"base": [
				"Shiruta, Kahndaq"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Marvel Family"
			],
			"relatives": [
				"Amon Tomaz (brother",
				"deceased)",
				"Black Adam (husband)"
			]
		}
	},
	{
		"id": "jack-bauer",
		"name": "Jack Bauer",
		"realName": "Kiefer Sutherland",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/jack-bauer.jpg",
		"biography": {
			"full_name": "Kiefer Sutherland",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Enola, Pennsylvania",
			"first_appearance": "24: Season 1",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jack-of-hearts",
		"name": "Jack of Hearts",
		"realName": "Jonathan Hart",
		"stats": {
			"intelligence": 63,
			"strength": 55,
			"speed": 100,
			"durability": 30,
			"power": 77,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jack-of-hearts.jpg",
		"biography": {
			"full_name": "Jonathan Hart",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "New Haven, Connecticut",
			"first_appearance": "Deadly Hands of Kung Fu #22 (March, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'1 // 155 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue / White",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Avengers Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"Defenders for a Day"
			],
			"relatives": [
				"Philip (father",
				"deceased)",
				"Marie (mother)"
			]
		}
	},
	{
		"id": "jack-jack",
		"name": "Jack-Jack",
		"realName": "Jack-Jack Parr",
		"stats": {
			"intelligence": 6,
			"strength": 34,
			"speed": 67,
			"durability": 80,
			"power": 100,
			"combat": 6
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jack-jack.jpg",
		"biography": {
			"full_name": "Jac-jack Parr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "The Incredibles (Movie, 2004)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "2'4 // 71 cm",
			"weight": "30 lb // 14 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Incredible Family (genetic member)",
				"National Supers Agency (ties)",
				"Edna Mode (receives costumes and gadgets from her)",
				"Frozone (long-time friend)"
			],
			"relatives": [
				"Robert Parr(Mr Incredible",
				"father)",
				"Helen Parr (Elastigirl",
				"mother)",
				"Violet Parr(Violet",
				"sister)",
				"Dashiell Parr (Dash",
				"brother)"
			]
		}
	},
	{
		"id": "james-bond",
		"name": "James Bond",
		"realName": "James Bond",
		"stats": {
			"intelligence": 88,
			"strength": 13,
			"speed": 17,
			"durability": 35,
			"power": 25,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/james-bond.jpg",
		"biography": {
			"full_name": "James Bond",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"007",
				"Commander Bond"
			],
			"place_of_birth": "-",
			"first_appearance": "Casino Royale, 1953 novel",
			"publisher": "Titan Books",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"00 Agent"
			],
			"base": [
				"London"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Intelligence Service",
				"MI6",
				"C.I.A.",
				"Royal Navy"
			],
			"relatives": [
				"Andrew Bond (father)",
				"Monique Delacroix (mother)"
			]
		}
	},
	{
		"id": "james-t-kirk",
		"name": "James T. Kirk",
		"realName": "James T. Kirk",
		"stats": {
			"intelligence": 69,
			"strength": 11,
			"speed": 17,
			"durability": 30,
			"power": 30,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/james-t-kirk.jpg",
		"biography": {
			"full_name": "James Tiberius Kirk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jim",
				"Captain Kirk"
			],
			"place_of_birth": "Riverside, Iowa, Earth",
			"first_appearance": "Star Trek S01E01: The Man Trap",
			"publisher": "Star Trek",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Hazel",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Captain"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Federation",
				"Starfleet"
			],
			"relatives": [
				"Winona Kirk (mother)",
				"George Kirk (father)",
				"George Samuel Kirk (brother)",
				"Michele Suzanne Kirk (sister)"
			]
		}
	},
	{
		"id": "jar-jar-binks",
		"name": "Jar Jar Binks",
		"realName": "Jar Jar Binks",
		"stats": {
			"intelligence": 10,
			"strength": 6,
			"speed": 33,
			"durability": 10,
			"power": 21,
			"combat": 15
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jar-jar-binks.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Naboo",
			"first_appearance": "-",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Gungan",
			"height": "6'4 // 193 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow",
			"hair_color": "-",
			"skin_color": "Orange / White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jason-bourne",
		"name": "Jason Bourne",
		"realName": "Jason Bourne",
		"stats": {
			"intelligence": 88,
			"strength": 12,
			"speed": 29,
			"durability": 30,
			"power": 26,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jason-bourne.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jean-grey",
		"name": "Jean Grey",
		"realName": "Jean Grey",
		"stats": {
			"intelligence": 94,
			"strength": 80,
			"speed": 21,
			"durability": 20,
			"power": 92,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jean-grey.jpg",
		"biography": {
			"full_name": "Jean Grey-Summers",
			"alter_egos": [
				"Phoenix"
			],
			"aliases": [
				"Redd Dayspring",
				"Marvel Girl"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men #1 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'6 // 168 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Xavier Institute of Higher Learning, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men (founding member)",
				"Clan Rebellion",
				"Muir Island X-Men",
				"X-Factor/X-Terminators (founding member)",
				"Brides of Set"
			],
			"relatives": [
				"Rachel Summers (daughter from an alternate universe)",
				"X-Man (son from an alternate universe)",
				"Cyclops (ex-husband)",
				"Havok (former brother-in-law)",
				"Corsair (former father-in-law)",
				"Madelyne Pryor (clone)",
				"Cable (adoptive/biological son)",
				"Stryfe (cloned biological son)",
				"Genesis (grandson)"
			]
		}
	},
	{
		"id": "jean-luc-picard",
		"name": "Jean-Luc Picard",
		"realName": "Jean-Luc Picard",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 17,
			"durability": 30,
			"power": 26,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jean-luc-picard.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Locutus"
			],
			"place_of_birth": "La Barre, France, Earth",
			"first_appearance": "Star Trek: The Next Generation (1987)",
			"publisher": "Star Trek",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Commanding officer USS Enterprise (NCC-1701-E)"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Maurice Picard (father)",
				"Yvette Picard (mother)",
				"Robert Picard (brother)",
				"Shinzon (clone)"
			]
		}
	},
	{
		"id": "jennifer-kale",
		"name": "Jennifer Kale",
		"realName": "Jennifer Kale",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 35,
			"durability": 42,
			"power": 69,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jennifer-kale.jpg",
		"biography": {
			"full_name": "Jennifer Kale",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Wendy the Good Little Witch"
			],
			"place_of_birth": "Citrusville, Florida",
			"first_appearance": "(Adventures into) Fear#11 (1972)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "122 lb // 55 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Sorceress",
				"student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Witches",
				"Legion of the Night"
			],
			"relatives": [
				"Andrew Jackson Kale (brother",
				"deceased)",
				"Joshua Kale (grandfather",
				"deceased)",
				"Naomi Kale (aunt)",
				"Johnny Blaze ( Ghost Rider )",
				"Barbara and Daniel Ketch (cousins)",
				"Illyana Kale",
				"Noble and pastor Kale",
				"Magdalena (ancestors)"
			]
		}
	},
	{
		"id": "jesse-quick",
		"name": "Jesse Quick",
		"realName": "Jesse Chambers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/jesse-quick.jpg",
		"biography": {
			"full_name": "Jessica Belle Chambers",
			"alter_egos": [
				"Liberty Belle II"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jessica-cruz",
		"name": "Jessica Cruz",
		"realName": "Jessica Cruz",
		"stats": {
			"intelligence": 56,
			"strength": 90,
			"speed": 46,
			"durability": 50,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jessica-cruz.jpg",
		"biography": {
			"full_name": "Jessica Viviana Cruz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern",
				"Power Ring"
			],
			"place_of_birth": "-",
			"first_appearance": "Green Lantern Vol 5 #20 (July, 2013)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Sara Cruz (sister)"
			]
		}
	},
	{
		"id": "jessica-jones",
		"name": "Jessica Jones",
		"realName": "Jessica Campbell Jones Cage",
		"stats": {
			"intelligence": 56,
			"strength": 44,
			"speed": 50,
			"durability": 70,
			"power": 18,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jessica-jones.jpg",
		"biography": {
			"full_name": "Jessica Campbell Jones Cage",
			"alter_egos": [
				"Power Woman"
			],
			"aliases": [
				"Knightress",
				"Madeline",
				"Jewel",
				"Power Woman"
			],
			"place_of_birth": "Forrest Hills, New York City",
			"first_appearance": "Amazing Spider-Man #4 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "124 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Special Consultant to \"The Pulse\"",
				"a Daily Bugle supplement",
				"formerly private investigator",
				"adventurer",
				"short-time vigilante"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly New Avengers",
				"Daily Bugle",
				"Alias Investigations"
			],
			"relatives": [
				"unnamed mother (deceased)",
				"Dave Cambell (father",
				"deceased)",
				"Phillip Cambell (brother",
				"deceased)",
				"unnamed adoptive mother",
				"unnamed adoptive father",
				"unnamed adoptive sister",
				"Jenny (adoptive aunt)",
				"Luke Cage (husband)",
				"Danielle Cage (daughter)",
				""
			]
		}
	},
	{
		"id": "jessica-sanders",
		"name": "Jessica Sanders",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/jessica-sanders.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jigsaw",
		"name": "Jigsaw",
		"realName": "Billy Russo",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/jigsaw.jpg",
		"biography": {
			"full_name": "Billy Russo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Billy the Beaut",
				"Jigsaw Punisher"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #162 (Nov. 1976)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "250 lb // 113 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Professional mobster"
			],
			"base": [
				"Manhattan, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Maggia crime family",
				"The Costa crime family"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "jim-powell",
		"name": "Jim Powell",
		"realName": "Jim Powell",
		"stats": {
			"intelligence": 38,
			"strength": 38,
			"speed": 23,
			"durability": 80,
			"power": 23,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jim-powell.jpg",
		"biography": {
			"full_name": "Jim Powell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "No Ordinary Family S01E01 (2010)",
			"publisher": "ABC Studios",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Police Sketch Artist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Stephanie Powell (wife)",
				"Daphne Powell (duaghter) and JJ Powell (son)"
			]
		}
	},
	{
		"id": "jj-powell",
		"name": "JJ Powell",
		"realName": "JJ Powell ",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 8,
			"durability": 10,
			"power": 14,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jj-powell.jpg",
		"biography": {
			"full_name": "JJ Powell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "No Ordinary Family S01E01 (2010)",
			"publisher": "ABC Studios",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Jim Powell and Stephanie Powell (parents)",
				"Daphne Powell (sister)"
			]
		}
	},
	{
		"id": "johann-krauss",
		"name": "Johann Krauss",
		"realName": "Johann Krauss",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/johann-krauss.jpg",
		"biography": {
			"full_name": "Johann Krauss",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "B.P.R.D. - Hollow Earth and Other Stories (2003)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Bureau for Paranormal Research and Defense"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "john-constantine",
		"name": "John Constantine",
		"realName": "John Constantine",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 8,
			"durability": 40,
			"power": 49,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/john-constantine.jpg",
		"biography": {
			"full_name": "John Constantine",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Hellblazer"
			],
			"place_of_birth": "-",
			"first_appearance": "Swamp Thing Vol 2 #37 (June, 1985)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League Dark",
				"Justice League"
			],
			"relatives": [
				"Thomas Constantine (father",
				"deceased)",
				"Cheryl Constantine (sister",
				"deceased)"
			]
		}
	},
	{
		"id": "john-stewart",
		"name": "John Stewart",
		"realName": "John Stewart",
		"stats": {
			"intelligence": 56,
			"strength": 85,
			"speed": 42,
			"durability": 64,
			"power": 100,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/john-stewart.jpg",
		"biography": {
			"full_name": "John Stewart",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern"
			],
			"place_of_birth": "-",
			"first_appearance": "Green Lantern Vol 2 #87",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "201 lb // 90 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Architect"
			],
			"base": [
				"Detroit, Michigan · Oa · formerly New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"formerly Justice League of America",
				"Darkstars"
			],
			"relatives": [
				"Roy Stewart (grandfather",
				"deceased)",
				"Addie Stewart (grandmother",
				"deceased)",
				"Loretta Stewart (aunt",
				"deceased)",
				"Katma Tui (wife",
				"deceased)"
			]
		}
	},
	{
		"id": "john-wraith",
		"name": "John Wraith",
		"realName": "John Wraith",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 35,
			"durability": 28,
			"power": 87,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/john-wraith.jpg",
		"biography": {
			"full_name": "John Wraith",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Wraith-Man",
				"Kestrel",
				"Expediter",
				"Guardian",
				"Vindicator"
			],
			"place_of_birth": "-",
			"first_appearance": "Wolverine Vol 2 #60 (September, 1992)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Spy",
				"Government Operative",
				"Mercenary",
				"Soldier"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Weapon X Program",
				"Team X",
				"C.I.A."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "joker",
		"name": "Joker",
		"realName": "Jack Napier",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 12,
			"durability": 60,
			"power": 43,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/joker.jpg",
		"biography": {
			"full_name": "Jack Napier",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Red Hood I",
				"Clown Prince of Crime",
				"Harlequin of Hate",
				"Jack Napier",
				"Joe Kerr",
				"Mr. J"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #1 (Spring 1940)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'5 // 196 cm",
			"weight": "192 lb // 86 kg",
			"eye_color": "Green",
			"hair_color": "Green",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Arkham Asylum, Gotham City",
				"Ha-Hacienda"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Glove",
				"Injustice Gang",
				"Injustice League",
				"Joker League of Anarchy"
			],
			"relatives": [
				"Jeannie (wife",
				"deceased)",
				"Unborn son (deceased)",
				"Melvin Reipan (cousin",
				"deceased)"
			]
		}
	},
	{
		"id": "jolt",
		"name": "Jolt",
		"realName": "Helen Takahama",
		"stats": {
			"intelligence": 63,
			"strength": 12,
			"speed": 27,
			"durability": 32,
			"power": 31,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jolt.jpg",
		"biography": {
			"full_name": "Helen Takahama",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Holly Tsuruta",
				"Hallie Shimosato"
			],
			"place_of_birth": "Ojai, California",
			"first_appearance": "Thunderbolts #1 (1997)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "109 lb // 49 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Young Allies",
				"formerly Redeemers",
				"Thunderbolts"
			],
			"relatives": [
				"Robert (father",
				"deceased)",
				"Jane (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "jubilee",
		"name": "Jubilee",
		"realName": "Jubilation Lee",
		"stats": {
			"intelligence": 56,
			"strength": 8,
			"speed": 22,
			"durability": 20,
			"power": 66,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/jubilee.jpg",
		"biography": {
			"full_name": "Jubilation Lee",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jubes"
			],
			"place_of_birth": "Beverly Hills, California",
			"first_appearance": "Uncanny X-Men #244 (May, 1989)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'5 // 165 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student",
				"Adventurer"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Currently Generation X",
				"formerly X-Men"
			],
			"relatives": [
				"Dr. and Mrs. Lee (parents",
				"deceased)"
			]
		}
	},
	{
		"id": "judge-dredd",
		"name": "Judge Dredd",
		"realName": "Joseph Dredd",
		"stats": {
			"intelligence": 75,
			"strength": 18,
			"speed": 38,
			"durability": 50,
			"power": 52,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/judge-dredd.jpg",
		"biography": {
			"full_name": "Joseph Dredd",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Dead Man",
				"Joe"
			],
			"place_of_birth": "Mega City One",
			"first_appearance": "2000 AD no. 2 (5 March 1977)",
			"publisher": "Rebellion",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Mega-City Judge"
			],
			"base": [
				"Mega City One"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Rico Dredd (brother)",
				"Judge Kraken (clone)",
				"Vienna (niece)",
				""
			]
		}
	},
	{
		"id": "juggernaut",
		"name": "Juggernaut",
		"realName": "Cain Marko",
		"stats": {
			"intelligence": 44,
			"strength": 100,
			"speed": 42,
			"durability": 100,
			"power": 85,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/juggernaut.jpg",
		"biography": {
			"full_name": "Cain Marko",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kuurth",
				"Captain Universe"
			],
			"place_of_birth": "Berkeley, California",
			"first_appearance": "X-Men #12 (July, 1965)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "9'5 // 287 cm",
			"weight": "1900 lb // 855 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer formerly Professional criminal",
				"mercenary",
				"soldier"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Worthy",
				"Thunderbolts",
				"X-Men",
				"Excalibur",
				"Black Tom Cassidy (partner)",
				"Exemplars",
				"Brotherhood of Evil Mutants",
				"New World Order",
				"Exiles",
				"U.S. Army"
			],
			"relatives": [
				"Kurt Marko (father",
				"deceased)",
				"Marjorie Marko (mother",
				"deceased)",
				"Sharon Xavier (step-mother",
				"deceased)",
				"Charles Xavier (Professor X",
				"step-brother)"
			]
		}
	},
	{
		"id": "junkpile",
		"name": "Junkpile",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 38,
			"speed": 17,
			"durability": 90,
			"power": 81,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/junkpile.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men 2099 #1 (October, 1993)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"Former member of S.H.I.E.L.D."
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of X-Men",
				"former member of S.H.I.E.L.D."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "justice",
		"name": "Justice",
		"realName": "Vance Astrovik",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 33,
			"durability": 70,
			"power": 55,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/justice.jpg",
		"biography": {
			"full_name": "Vance Astrovik",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Marvel Boy",
				"Manglin' John Mahoney",
				"Astounding Astrovik",
				"Superhuman Penitentiary Prisoner 344678",
				"\"Super Tights\""
			],
			"place_of_birth": "-",
			"first_appearance": "Giant-Size Defenders #5 (July, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Hazel",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Mobile, formerly New Warriors and Avengers Headquarters, Camp Hammond"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Warriors",
				"formerly Avengers Academy",
				"Initiative",
				"partner of Firestar",
				"Avengers",
				"Triune Understanding",
				"Unlimited Class Wrestling Federation",
				"Taskmaster's Circus",
				"Secret Avengers (Civil War)"
			],
			"relatives": [
				"Jerzy Astroyevicht (aka Jerry Astrovik",
				"paternal grandfather)",
				"Katerina Astroyevicht (aka Katerina Astrovik",
				"paternal grandmother)",
				"Arnold Astrovik (father",
				"deceased)",
				"Norma Astrovik (mother)",
				""
			]
		}
	},
	{
		"id": "jyn-erso",
		"name": "Jyn Erso",
		"realName": "Jyn Erso",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/jyn-erso.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Star Wars : Rogue One (2016)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "k-2so",
		"name": "K-2SO",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/k-2so.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kaytoo Esso",
				"Kay-Tuesso"
			],
			"place_of_birth": "Galactic Empire",
			"first_appearance": "Rogue One: A Star Wars Story (2016)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "7'0 // 213 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair",
			"skin_color": "Gray"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kang",
		"name": "Kang",
		"realName": "Nathaniel Richards",
		"stats": {
			"intelligence": 100,
			"strength": 48,
			"speed": 58,
			"durability": 70,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kang.jpg",
		"biography": {
			"full_name": "Nathaniel Richards",
			"alter_egos": [
				"Iron Lad"
			],
			"aliases": [
				"Blue Man",
				"Victor Timely",
				"Blue Totem",
				"Scarlet Centurion",
				"Rama-Tut",
				"King of Kings",
				"Master of Men",
				"Lord of the Seven Suns"
			],
			"place_of_birth": "Other Earth, 31st century",
			"first_appearance": "(As Rama-Tut) Fantastic Four #19 (1963); (as Kang) Avengers #8 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly the Council of Kangs",
				"Cross-Time Kangs"
			],
			"relatives": [
				"Cassandra Richards",
				"their unnamed son",
				"and matriarch of the Eyriennes",
				"Tara Richards",
				"Reed Richards ( Mister Fantastic )",
				"Franklin Richards",
				"Valeria Richards (all ancestors)",
				"various Eyriennes (common ancestry)",
				"Victor Von Doom (Doctor Doom",
				"alleged ancestor)",
				"Ramades (son)",
				"Marcus Kang I-XXIII (sons",
				"deceased)",
				"Immortus",
				"Iron Lad",
				"and numerous other alternate dimensional counterparts and their offspring"
			]
		}
	},
	{
		"id": "karate-kid",
		"name": "Karate Kid",
		"realName": "Val Armorr",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 67,
			"durability": 20,
			"power": 49,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/karate-kid.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Wes Holloway",
				"Trident",
				"Wes Holloway"
			],
			"place_of_birth": "Orando",
			"first_appearance": "Adventure Comics #346",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'8 // 173 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"Kirau Nezumi (father)",
				"Valentina Armorr (mother)",
				"Sensei (adoptive father)",
				"Projectra (wife)"
			]
		}
	},
	{
		"id": "kathryn-janeway",
		"name": "Kathryn Janeway",
		"realName": "Kathryn Janeway",
		"stats": {
			"intelligence": 75,
			"strength": 8,
			"speed": 21,
			"durability": 25,
			"power": 21,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kathryn-janeway.jpg",
		"biography": {
			"full_name": "Kathryn M. Janeway",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Bloomington, Indiana, Earth",
			"first_appearance": "-",
			"publisher": "Star Trek",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Fleet Commander"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Edward Janeway (father)",
				"Gretchen Janeway (mother)"
			]
		}
	},
	{
		"id": "katniss-everdeen",
		"name": "Katniss Everdeen",
		"realName": "Katniss Everdeen",
		"stats": {
			"intelligence": 56,
			"strength": 8,
			"speed": 21,
			"durability": 25,
			"power": 24,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/katniss-everdeen.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kevin-11",
		"name": "Kevin 11",
		"realName": "Kevin Ethan Levin",
		"stats": {
			"intelligence": 25,
			"strength": 7,
			"speed": 12,
			"durability": 14,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kevin-11.jpg",
		"biography": {
			"full_name": "Kevin Ethan Levin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kevin 11",
				"000",
				"Curtis",
				"Osmosian",
				"Kev",
				"Kevin Ethan",
				"Levin",
				"Ultimate Kevin",
				"Doofus",
				"An Empty Shell",
				"Kevin E. Levin"
			],
			"place_of_birth": "-",
			"first_appearance": "Ben 10 S01",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mrs. Levin (mother)",
				"Devlin Levin (alternate future son)",
				"Ben Tennyson (Ben 10",
				"best friend)",
				"Harvey Hackett (Stepfather)",
				"Gwen Tennyson(girlfriend)"
			]
		}
	},
	{
		"id": "kick-ass",
		"name": "Kick-Ass",
		"realName": "Dave Lizewski",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 35,
			"power": 22,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kick-ass.jpg",
		"biography": {
			"full_name": "Dave Lizewski",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kickass"
			],
			"place_of_birth": "New York City",
			"first_appearance": "Kick Ass #1",
			"publisher": "Icon Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mother (unnamed",
				"deceased)",
				"Father (unnamed)"
			]
		}
	},
	{
		"id": "kid-flash",
		"name": "Kid Flash",
		"realName": "Wallace Rudolph West",
		"stats": {
			"intelligence": 25,
			"strength": 4,
			"speed": 92,
			"durability": 42,
			"power": 20,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kid-flash.jpg",
		"biography": {
			"full_name": "Wallace Rudolph West",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kid Lantern"
			],
			"place_of_birth": "Blue Valley, Nebraska",
			"first_appearance": "Flash #110 (January, 1960)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Flash Family",
				"Teen Titans",
				"New Teen Titans"
			],
			"relatives": [
				"Rudolph and Mary West (parents)",
				"Ira West (grandfather)",
				"Iris Allen (aunt)",
				"Barry Allen (uncle)",
				"Linda Park West (wife)",
				"Jai and Iris West (twin children)"
			]
		}
	},
	{
		"id": "kid-flash-ii",
		"name": "Kid Flash II",
		"realName": "Bartholomew Allen II",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/kid-flash-ii.jpg",
		"biography": {
			"full_name": "Bartholomew Allen II",
			"alter_egos": [
				"Flash IV",
				"Impulse"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "killer-croc",
		"name": "Killer Croc",
		"realName": "Waylon Jones",
		"stats": {
			"intelligence": 19,
			"strength": 53,
			"speed": 35,
			"durability": 90,
			"power": 53,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/killer-croc.jpg",
		"biography": {
			"full_name": "Waylon Jones",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #357 (March, 1983)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Metahuman",
			"height": "8'0 // 244 cm",
			"weight": "790 lb // 356 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Society of Super-Villains"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "killer-frost",
		"name": "Killer Frost",
		"realName": "Caitlin Snow",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 13,
			"durability": 35,
			"power": 59,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/killer-frost.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Fury of Firestorm: The Nuclear Men #19",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"Pittsburgh"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kilowog",
		"name": "Kilowog",
		"realName": "",
		"stats": {
			"intelligence": 81,
			"strength": 90,
			"speed": 53,
			"durability": 42,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kilowog.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kilo Wog",
				"Green Lantern 674.1",
				"Dark Lantern",
				"The Green Lantern drill sergeant",
				"\"Poozer\"",
				"Lantern"
			],
			"place_of_birth": "Bolovax Vik",
			"first_appearance": "Green Lantern Corps #201 (June, 1986)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Bolovaxian",
			"height": "7'8 // 234 cm",
			"weight": "720 lb // 324 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Pink"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Oa, formerly Earth, Bolovax Vik"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"formerly New Guardians",
				"Justice League International"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "king-kong",
		"name": "King Kong",
		"realName": "King Kong",
		"stats": {
			"intelligence": 56,
			"strength": 100,
			"speed": 71,
			"durability": 75,
			"power": 47,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/king-kong.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"the 8th Wonder of the World",
				"King of Skull Island"
			],
			"place_of_birth": "Skull Island",
			"first_appearance": "King Kong (1933)",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Animal",
			"height": "100'0 // 30.5 meters",
			"weight": "20000000 lb // 9,000 tons",
			"eye_color": "Yellow",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Skull Island"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "king-shark",
		"name": "King Shark",
		"realName": "Nanaue",
		"stats": {
			"intelligence": 50,
			"strength": 88,
			"speed": 50,
			"durability": 90,
			"power": 86,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/king-shark.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Superboy Vol 4 #0",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Animal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Professional Criminal"
			],
			"base": [
				"Honolulu, Hawaii"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kingpin",
		"name": "Kingpin",
		"realName": "Wilson Grant Fisk",
		"stats": {
			"intelligence": 75,
			"strength": 18,
			"speed": 25,
			"durability": 40,
			"power": 13,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kingpin.jpg",
		"biography": {
			"full_name": "Wilson Grant Fisk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Brain Washer",
				"Harold Howard",
				"Wilbur"
			],
			"place_of_birth": "New York City area",
			"first_appearance": "Amazing Spider-Man #50 (July, 1967)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'7 // 201 cm",
			"weight": "450 lb // 203 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Criminal organizer and mastermind",
				"president and owner of legitimate businesses"
			],
			"base": [
				"A penthouse in New York City",
				"formerly Fisk Tower in New York City, a mansion in Westchester County, Las Vegas."
			]
		},
		"connections": {
			"group_affiliation": [
				"Leader of The Hand",
				"leader of a coalition of East Coast non-Maggia criminal organizations",
				"former director of Las Vegas HYDRA faction."
			],
			"relatives": [
				"Anatoly Fyskov (ancestor)",
				"Vanessa Fisk (wife",
				"deceased)",
				"Rose (Richard Fisk) (son",
				"deceased)",
				""
			]
		}
	},
	{
		"id": "klaw",
		"name": "Klaw",
		"realName": "Ulysses Klaw",
		"stats": {
			"intelligence": 63,
			"strength": 38,
			"speed": 33,
			"durability": 100,
			"power": 62,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/klaw.jpg",
		"biography": {
			"full_name": "Ulysses Klaw",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Vlaardingen, Netherlands",
			"first_appearance": "Fantastic Four #53 (August, 1966)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "216 lb // 97 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"Criminal",
				"former Scientist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of the Masters of Evil",
				"Fearsome Foursome",
				"and Frightful Four",
				"Former ally of Solarr",
				"Molecule Man",
				"and Doctor Doom"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kool-aid-man",
		"name": "Kool-Aid Man",
		"realName": "",
		"stats": {
			"intelligence": 25,
			"strength": 18,
			"speed": 8,
			"durability": 10,
			"power": 9,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kool-aid-man.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pitcher Man"
			],
			"place_of_birth": "-",
			"first_appearance": "As Pitcher-Man in 1954",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "No Hair",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kraven-ii",
		"name": "Kraven II",
		"realName": "Alyosha Kravinoff",
		"stats": {
			"intelligence": 50,
			"strength": 34,
			"speed": 23,
			"durability": 28,
			"power": 43,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kraven-ii.jpg",
		"biography": {
			"full_name": "Alyosha Kravinoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Spectacular Spider-Man #243 (1997)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'3 // 191 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly the Sinister Six"
			],
			"relatives": [
				"Sergei Kravinoff (Kraven the Hunter",
				"father",
				"deceased)",
				"unidentified mother",
				"Vladimir Kravinoff (Grim Hunter",
				"half-brother",
				"deceased)",
				"Nedrocci Tannengarden (half-brother",
				"deceased)",
				"Dmitri Smerdyakov"
			]
		}
	},
	{
		"id": "kraven-the-hunter",
		"name": "Kraven the Hunter",
		"realName": "Sergei Kravinoff",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 35,
			"durability": 42,
			"power": 25,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kraven-the-hunter.jpg",
		"biography": {
			"full_name": "Sergei Kravinoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kraven the Hunter",
				"World's Greatest Hunter",
				"the Grim Hunter"
			],
			"place_of_birth": "Volgograd (formerly Stalingrad), Russia",
			"first_appearance": "The Amazing Spider-Man #15 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "235 lb // 106 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Professional game hunter",
				"mercenary"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"(formerly) The Sinister Six"
			],
			"relatives": [
				"Nikolai & Anna Makarova Kravinoff (parents",
				"deceased)",
				"Dmitri Smerdyakov (Chameleon",
				"half-brother)",
				"Vladimir Kravinoff (Grim Hunter",
				"son",
				"deceased)",
				"Aloysha \"Al\" Kravinoff (Kraven II",
				"son)",
				"Ned Tannengarden (son",
				"deceased)"
			]
		}
	},
	{
		"id": "krypto",
		"name": "Krypto",
		"realName": "Krypto the Superdog",
		"stats": {
			"intelligence": 9,
			"strength": 80,
			"speed": 100,
			"durability": 90,
			"power": 78,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/krypto.jpg",
		"biography": {
			"full_name": "Krypto the Superdog",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Adventure Comics #210 (March, 1955)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Kryptonian",
			"height": "0'25 // 64 cm",
			"weight": "40 lb // 18 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Smallville, Kansas"
			]
		},
		"connections": {
			"group_affiliation": [
				"Superman"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "kyle-rayner",
		"name": "Kyle Rayner",
		"realName": "Kyle Rayner",
		"stats": {
			"intelligence": 69,
			"strength": 90,
			"speed": 50,
			"durability": 60,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kyle-rayner.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ion",
				"Kyle Vasquez",
				"Parallax",
				"Torch Bearer",
				"Honor Guard",
				"The Last Green Lantern"
			],
			"place_of_birth": "North Hollywood, Los Angeles, California",
			"first_appearance": "Green Lantern Vol 3 #48",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Green Lantern",
				"Adventurer",
				"Artist"
			],
			"base": [
				"Oa,formerly New York City, Los Angeles"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps",
				"New Guardians",
				"formerly Challengers From Beyond",
				"Sinestro Corps",
				"Justice League of America",
				"Blue Lantern Corps",
				"Titans"
			],
			"relatives": [
				"Aaron Rayner (father)",
				"Maura Rayner (mother",
				"deceased)",
				"Zachary Rayner (uncle",
				"deceased)",
				"Roderick \"Snowy\" Rayner (grandfather",
				"deceased)",
				"unnamed maternal great-grandfather (deceased)",
				"Kathleen (aunt)",
				"Cary Wren (descendant)"
			]
		}
	},
	{
		"id": "kylo-ren",
		"name": "Kylo Ren",
		"realName": "Ben Solo",
		"stats": {
			"intelligence": 56,
			"strength": 44,
			"speed": 33,
			"durability": 30,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/kylo-ren.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Star Wars: Episode VII - The Force Awakens (2015)",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Han Solo (Father)",
				"Princess Leia (Mother)",
				"Luke Skywalker (Uncle)"
			]
		}
	},
	{
		"id": "lady-bullseye",
		"name": "Lady Bullseye",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/lady-bullseye.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "lady-deathstrike",
		"name": "Lady Deathstrike",
		"realName": "Yuriko Oyama",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 42,
			"durability": 85,
			"power": 48,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lady-deathstrike.jpg",
		"biography": {
			"full_name": "Yuriko Oyama",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ana Cortes"
			],
			"place_of_birth": "Osaka, Japan",
			"first_appearance": "Alpha Flight Vol. 1 #33 (1985)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Cyborg",
			"height": "5'9 // 175 cm",
			"weight": "128 lb // 58 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ally of Reverend William Stryker",
				"former employee of Sabretooth",
				"formerly Reavers"
			],
			"relatives": [
				"Kenji Oyama (Lord Dark Wind",
				"father",
				"deceased)",
				"two unnamed brothers (deceased)"
			]
		}
	},
	{
		"id": "leader",
		"name": "Leader",
		"realName": "Samuel Sterns",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 59,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/leader.jpg",
		"biography": {
			"full_name": "Samuel Sterns",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Boise, Idaho",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Leader of Freehold"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "leech",
		"name": "Leech",
		"realName": "",
		"stats": {
			"intelligence": 25,
			"strength": 5,
			"speed": 12,
			"durability": 14,
			"power": 62,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/leech.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Uncanny X-Men #179",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Survivor",
				"former student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"198",
				"formerly Generation X",
				"Daydreamers",
				"Morlocks",
				"X-Factor (trainee)"
			],
			"relatives": [
				"Annalee (foster mother",
				"deceased)"
			]
		}
	},
	{
		"id": "legion",
		"name": "Legion",
		"realName": "David Haller",
		"stats": {
			"intelligence": 50,
			"strength": 100,
			"speed": 42,
			"durability": 30,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/legion.jpg",
		"biography": {
			"full_name": "David Charles Haller",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jack Wayne",
				"Cyndi",
				"Jemail Karami",
				"Daniel Lucas Haller",
				"Daniel Haller",
				"Rodney",
				"Ian",
				"Lucas",
				"Fanya",
				"Boris",
				"Zachary",
				"Sylvester",
				"God-Mutant"
			],
			"place_of_birth": "Israel",
			"first_appearance": "New Mutants #25 (March, 1985)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'9 // 175 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Green / Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Student"
			],
			"base": [
				"formerly Ruth Aldine's mind, Utopia, San Francisco Bay, California",
				"Westcliffe, Colorado",
				"\"No-Time\"",
				"Moira MacTaggart's Mutant Research Center, Muir Island, off the coast of Scotland",
				"Haifa",
				"Paris, France"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men",
				"Muir Island X-Men"
			],
			"relatives": [
				"Charles Graymalkin (paternal collateral ancestor)",
				"Marcia Graymalkin (paternal collateral ancestor)",
				"Jonas Graymalkin (paternal collateral ancestor)",
				"Brian Xavier (paternal grandfather)",
				"Sharon Xavier (paternal grandmother)",
				"Kurt Marko (paternal step-grandfather)",
				"Cain Marko (paternal step-uncle)",
				"Cassandra Nova Xavier (paternal aunt)",
				"Charles Xavier (father)",
				"Gabrielle Haller (mother)",
				"Daniel Shomron (stepfather)",
				"Xavier Family (paternal relatives)",
				"Ruth Aldine (lover/current body)"
			]
		}
	},
	{
		"id": "leonardo",
		"name": "Leonardo",
		"realName": "Leonardo",
		"stats": {
			"intelligence": 75,
			"strength": 16,
			"speed": 50,
			"durability": 65,
			"power": 59,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/leonardo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Leo",
				"Ghost of the Jungle",
				"Splinter Jr."
			],
			"place_of_birth": "-",
			"first_appearance": "Teenage Mutant Ninja Turtles #1",
			"publisher": "IDW Publishing",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Ninja"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Donatello (brother)",
				"Michelangelo (brother)",
				"Raphael (brother)"
			]
		}
	},
	{
		"id": "lex-luthor",
		"name": "Lex Luthor",
		"realName": "Lex Luthor",
		"stats": {
			"intelligence": 100,
			"strength": 53,
			"speed": 25,
			"durability": 65,
			"power": 68,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lex-luthor.jpg",
		"biography": {
			"full_name": "Alexander 'Lex' Joseph Luthor",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Action Comics #23",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2' // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Owner of LexCorp"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Injustice Gang",
				"Injustice League",
				"Society of Supervillains"
			],
			"relatives": [
				"Casey and Elaine Griggs (foster parents",
				"deceased)",
				"Lena Luthor (sister pre-Crisis",
				"daughter post-Crisis)",
				"Elizabeth Perske (ex-wife)",
				"Perry J. White Jr. (son",
				"deceased)",
				"Contessa Erica Alexandra del Portenza (wife",
				"assumed deceased)"
			]
		}
	},
	{
		"id": "light-lass",
		"name": "Light Lass",
		"realName": "Ayla Ranzz",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 35,
			"durability": 28,
			"power": 67,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/light-lass.jpg",
		"biography": {
			"full_name": "Ayla Ranzz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"United Planets"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes",
				"formerly the Wanderers"
			],
			"relatives": [
				"Unnamd parents",
				"Garth Ranzz (Lightning Lad",
				"twin brother)",
				"Mekt Ranzz (older brother)"
			]
		}
	},
	{
		"id": "lightning-lad",
		"name": "Lightning Lad",
		"realName": "Garth Ranzz",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 60,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lightning-lad.jpg",
		"biography": {
			"full_name": "Garth Ranzz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lightning Boy",
				"Live Wire"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'1 // 155 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Legionnaire"
			],
			"base": [
				"Earth, 31st century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "lightning-lord",
		"name": "Lightning Lord",
		"realName": "Mekt Ranzz",
		"stats": {
			"intelligence": 44,
			"strength": 10,
			"speed": 23,
			"durability": 42,
			"power": 66,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lightning-lord.jpg",
		"biography": {
			"full_name": "Mekt Ranzz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Supergirl and the Legion of Super-Heroes #25 (Feb. 2007)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Wanderers",
				"former ally of the Legion of Super-Heroes."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "living-brain",
		"name": "Living Brain",
		"realName": "",
		"stats": {
			"intelligence": 75,
			"strength": 53,
			"speed": 35,
			"durability": 56,
			"power": 31,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/living-brain.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #8 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'6 // 198 cm",
			"weight": "800 lb // 360 kg",
			"eye_color": "Yellow",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Robot"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "living-tribunal",
		"name": "Living Tribunal",
		"realName": "",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/living-tribunal.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Living Trinity",
				"Magistrate",
				"High Judge of The Multiverse",
				"Sir"
			],
			"place_of_birth": "-",
			"first_appearance": "Strange Tales #157",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "-",
			"race": "Cosmic Entity",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair",
			"skin_color": "Gold"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"One-Above-All (creator)"
			]
		}
	},
	{
		"id": "liz-sherman",
		"name": "Liz Sherman",
		"realName": "Elizabeth Anne Sherman",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/liz-sherman.jpg",
		"biography": {
			"full_name": "Elizabeth Anne Sherman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"B.P.R.D."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "lizard",
		"name": "Lizard",
		"realName": "Curtis Connors",
		"stats": {
			"intelligence": 50,
			"strength": 51,
			"speed": 27,
			"durability": 70,
			"power": 63,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lizard.jpg",
		"biography": {
			"full_name": "Curtis Connors",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Coral Gables, Florida",
			"first_appearance": "Amazing Spider-Man #6",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'8 // 203 cm",
			"weight": "510 lb // 230 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Research biologist"
			],
			"base": [
				"Florida"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Martha (wife",
				"deceased)",
				"Billy (son)",
				"unnamed sister"
			]
		}
	},
	{
		"id": "lobo",
		"name": "Lobo",
		"realName": "Lobo",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 54,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/lobo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Main Man",
				"The 'Bo",
				"Master Frag",
				"Mister Machete",
				"Popebo",
				"He-Who-Devours-Your-Entrails-And-Thoroughly-Enjoys-It"
			],
			"place_of_birth": "-",
			"first_appearance": "Omega Men # 3",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Czarnian",
			"height": "7'6 // 229 cm",
			"weight": "640 lb // 288 kg",
			"eye_color": "Red",
			"hair_color": "Black",
			"skin_color": "Blue-White"
		},
		"work": {
			"occupation": [
				"Assassin",
				"Bounty Hunter",
				"Priest"
			],
			"base": [
				"Mobile throughout several galaxies"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly LEGION",
				"Young Justice",
				"First Celestial Church of the Triple Fish-God"
			],
			"relatives": [
				"Slobo (clone)"
			]
		}
	},
	{
		"id": "loki",
		"name": "Loki",
		"realName": "Loki Laufeyson",
		"stats": {
			"intelligence": 88,
			"strength": 63,
			"speed": 46,
			"durability": 85,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/loki.jpg",
		"biography": {
			"full_name": "Loki Laufeyson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"God of Mischief",
				"Gem-Keeper",
				"Walter Lawson",
				"Lester",
				"Loren Olsen",
				"Tyfon",
				"Father Williams",
				"Willie",
				"Tso Zhung",
				"has also impersonated hundreds of others."
			],
			"place_of_birth": "Jotunheim, Asgard",
			"first_appearance": "Journey into Mystery Vol. 1 #85",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Asgardian",
			"height": "6'4 // 193 cm",
			"weight": "525 lb // 236 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"God of evil",
				"former god of mischief and madness"
			],
			"base": [
				"Asgard"
			]
		},
		"connections": {
			"group_affiliation": [
				"Asgardians",
				"Karnilla",
				"Enchantress",
				"Skurge the Executioner",
				"Cobra",
				"Mister Hyde",
				"Absorbing Man",
				"Igron",
				"Tyr",
				"Lorelei",
				"Hela",
				"Ulik",
				"Frost Giants",
				"Storm Giants (former)",
				"Dormammu",
				"\"Acts of Vengeance\" prime movers (Dr. Doom",
				"Magneto",
				"Red Skull",
				"Mandari"
			],
			"relatives": [
				"Laufey (father",
				"deceased)",
				"Farbauti (mother",
				"deceased)",
				"Sigyn (wife",
				"deceased)",
				"Odin (foster father",
				"deceased)",
				"Frigga (foster mother",
				"deceased)",
				"Thor",
				"Vidar (foster brothers",
				"deceased)",
				"Hela",
				"Fenris (Wolf)",
				"Jordmungand (Midgard Serpent) (children",
				"deceased)",
				"Arkin (cousin",
				"deceased)"
			]
		}
	},
	{
		"id": "longshot",
		"name": "Longshot",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 27,
			"durability": 10,
			"power": 71,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/longshot.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Lost Messiah",
				"The Lucky One"
			],
			"place_of_birth": "-",
			"first_appearance": "Longshot #1 (September, 1985)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "80 lb // 36 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"freedom fighter",
				"stuntman rebel",
				"adventurer"
			],
			"base": [
				"X-Factor Investigations Headquarters, New York City, New York",
				"formerly Detroit, Michigan",
				"mobile",
				"Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York",
				"Mojoverse",
				"Cooterman's Creek, Australian Outback, Australia",
				"Alcatraz I"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Factor Investigations",
				"rebel forces on his homeworld",
				"formerly Exiles",
				"X-Men"
			],
			"relatives": [
				"Arize (creator)",
				"Alison Blaire (Dazzler) (wife)",
				"Gaveedra Seven (Shatterstar) (alleged son)"
			]
		}
	},
	{
		"id": "luke-cage",
		"name": "Luke Cage",
		"realName": "Luke Cage",
		"stats": {
			"intelligence": 50,
			"strength": 63,
			"speed": 29,
			"durability": 95,
			"power": 44,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/luke-cage.jpg",
		"biography": {
			"full_name": "Luke Cage",
			"alter_egos": [
				"Power Man"
			],
			"aliases": [
				"Carl Lucas",
				"Power Man",
				"Mark Lucas",
				"Hero for Hire",
				"Ace of Spades"
			],
			"place_of_birth": "Harlem, New York City",
			"first_appearance": "Hero for Hire #1 (1972)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'6 // 198 cm",
			"weight": "425 lb // 191 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"bar owner",
				"bodyguard",
				"mercenary",
				"formerly theater owner",
				"private investigator",
				"various odd jobs"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Underground Avengers (formerly Daredevil's Unnamed Super-Hero Team)",
				"Secret Defenders",
				"Heroes for Hire",
				"Nightwing Restorations",
				"Fantastic Four",
				"Defenders",
				"Bloods"
			],
			"relatives": [
				"Jessica Jones (wife)",
				"James Leonard Lucas (father)",
				"Esther (mother",
				"deceased)",
				"James Jr. (Coldfire",
				"brother)",
				"unnamed daughter"
			]
		}
	},
	{
		"id": "luke-campbell",
		"name": "Luke Campbell",
		"realName": "Luke Campbell",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/luke-campbell.jpg",
		"biography": {
			"full_name": "Luke Campbell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Newark, NJ"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Unnamed father (estranged)",
				"Mary Campbell"
			]
		}
	},
	{
		"id": "luke-skywalker",
		"name": "Luke Skywalker",
		"realName": "Luke Skywalker",
		"stats": {
			"intelligence": 69,
			"strength": 38,
			"speed": 42,
			"durability": 25,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/luke-skywalker.jpg",
		"biography": {
			"full_name": "Luke Skywalker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"General Skywalker",
				"Master Luke",
				"Jedi"
			],
			"place_of_birth": "Tatooine",
			"first_appearance": "Star Wars: Episode IV - A New Hope (1977)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alliance to Restore the Republic",
				"Jedi Order",
				"Alliance of Free Planets",
				"Bright Tree Village",
				"New Republic",
				"New Jedi Order"
			],
			"relatives": [
				"Darth Vader (father)",
				"Princes Leia (Sister)",
				"Yoda (Master)",
				"Obi-Wan Kenobi (Master)"
			]
		}
	},
	{
		"id": "luna",
		"name": "Luna",
		"realName": "Luna Maximoff",
		"stats": {
			"intelligence": 38,
			"strength": 6,
			"speed": 83,
			"durability": 14,
			"power": 53,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/luna.jpg",
		"biography": {
			"full_name": "Luna Maximoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Attilan, Blue Area of the Moon",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Quicksilver (Pietro Maximoff",
				"father)",
				"Magneto (grandfather)",
				"Crystal (mother)",
				"Scarlet Witch",
				"(aunt)",
				"Polaris (aunt)"
			]
		}
	},
	{
		"id": "lyja",
		"name": "Lyja",
		"realName": "Lyja",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/lyja.jpg",
		"biography": {
			"full_name": "Lyja",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Alicia Masters",
				"Lyja The Lazerfist",
				"Laura Green"
			],
			"place_of_birth": "-",
			"first_appearance": "Fantastic Four #265 (as Alicia), Fantastic Four #357 (as Lyja)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Green"
		},
		"work": {
			"occupation": [
				"Former Skrull Liason Officer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former lover of Paibok",
				"Former ally of the Fantastic Four",
				"Former wife of the Human Torch"
			],
			"relatives": [
				"Johnny Storm - Human Torch (ex-husband)",
				"Susan Storm - Invisible Woman (ex-sister-in-law)"
			]
		}
	},
	{
		"id": "mach-iv",
		"name": "Mach-IV",
		"realName": "Abner Jenkins",
		"stats": {
			"intelligence": 75,
			"strength": 36,
			"speed": 60,
			"durability": 84,
			"power": 60,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mach-iv.jpg",
		"biography": {
			"full_name": "Abner Jenkins",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Beetle",
				"MACH-I",
				"MACH-II",
				"MACH-III",
				"Matthew"
			],
			"place_of_birth": "Baltimore, Maryland",
			"first_appearance": "(Beetle) Strange Tales #123 (1964); (MACH-I) Incredible Hulk #449 (1997); (MACH-II) Thunderbolts #37 (2000); (MACH-III) Thunderbolts #57 (2001); (MACH-IV) New Thunderbolts #1 (2005)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former master mechanic",
				"professional criminal",
				"mercenary"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Thunderbolts",
				"Masters of Evil",
				"Sinister Syndicate",
				"Justin Hammer's Hit Squad",
				"Maggia",
				"Sinister Seven",
				"Commission on Superhuman Activities",
				"Defenders impersonators",
				"Burton Canyon Police Department"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "machine-man",
		"name": "Machine Man",
		"realName": "X-51, Aaron Stack",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 35,
			"durability": 84,
			"power": 51,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/machine-man.jpg",
		"biography": {
			"full_name": "X-51, Aaron Stack",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sir McHinery",
				"Mister Machine.Machine Man"
			],
			"place_of_birth": "Central City, California",
			"first_appearance": "First appearance unknown",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "850 lb // 383 kg",
			"eye_color": "Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Insurance Investigator"
			],
			"base": [
				"Garvin's Garage, Queens, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"Dr. Able Stack",
				"'father'"
			]
		}
	},
	{
		"id": "magneto",
		"name": "Magneto",
		"realName": "Erik Magnus Lensherr",
		"stats": {
			"intelligence": 88,
			"strength": 80,
			"speed": 27,
			"durability": 84,
			"power": 91,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/magneto.jpg",
		"biography": {
			"full_name": "Erik Magnus Lensherr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Creator",
				"Erik Magnus Lehnsherr",
				"Michael Xavier",
				"White Pilgrim",
				"Erik the RedThe Master of Magnetism"
			],
			"place_of_birth": "Unrevealed, probably somewhere in Northern Europe",
			"first_appearance": "X-MEN Vol. 1 #1",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'2 // 188 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Grey",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Currently Revolutionary and Conqueror",
				"formerly Volunteer Orderly",
				"Secret Agent"
			],
			"base": [
				"Currently unrevealed, formerly Asteroid M",
				"various hidden bases on Earth including one in Antarctica",
				"an island in the Bermuda Triangle",
				"Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Currently None",
				"formerly Brotherhood of Evil Mutants I and II",
				"X-Men",
				"teacher of the New Mutants",
				"Lords Cardinal of the Hellfire Club",
				"leader of the Acolytes"
			],
			"relatives": [
				"Magda (wife",
				"deceased)",
				"Anya (daughter",
				"deceased)",
				"Pietro Maximoff (Quicksilver",
				"son)",
				"Wanda Maximoff (Scarlet Witch",
				"daughter)",
				"Lorna Dane (Polaris",
				"daughter)",
				"Joseph (clone",
				"deceased)",
				"Luna (granddaughter)"
			]
		}
	},
	{
		"id": "magog",
		"name": "Magog",
		"realName": "David Reid",
		"stats": {
			"intelligence": 50,
			"strength": 48,
			"speed": 23,
			"durability": 64,
			"power": 66,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/magog.jpg",
		"biography": {
			"full_name": "David Reid",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Justice Society of America",
				"formerally United States Marine Corps"
			],
			"relatives": [
				"Franklin Delano Roosevelt (great-grandfather",
				"deceased)"
			]
		}
	},
	{
		"id": "magus",
		"name": "Magus",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 70,
			"durability": 99,
			"power": 100,
			"combat": 74
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/magus.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Warlock's Father"
			],
			"place_of_birth": "Kvch (Technarchy�s home planet)",
			"first_appearance": "New Mutants #18 (1984)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Ruler of the Technarchy"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Warlock (son",
				"deceased)"
			]
		}
	},
	{
		"id": "man-of-miracles",
		"name": "Man of Miracles",
		"realName": "",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/man-of-miracles.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mother Of Existence"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #75",
			"publisher": "Image Comics",
			"alignment": "-"
		},
		"appearance": {
			"gender": "-",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Silver"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "man-bat",
		"name": "Man-Bat",
		"realName": "Robert Kirkland Langstrom",
		"stats": {
			"intelligence": 38,
			"strength": 18,
			"speed": 50,
			"durability": 70,
			"power": 33,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/man-bat.jpg",
		"biography": {
			"full_name": "Robert Kirkland Langstrom",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kirk Langstrom"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "Detective Comics #400 (June, 1970)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Zoologist"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Spirit Squad",
				"The Network"
			],
			"relatives": [
				"Francine Langstrom (wife)",
				"Rebecca Elizabeth Langtrom (daughter)",
				"Aaron Langstrom (son)",
				"Britt Langstrom (sister)",
				"Ted Friedel (brother-in-law)"
			]
		}
	},
	{
		"id": "man-thing",
		"name": "Man-Thing",
		"realName": "Dr. Theodore Sallis ",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 8,
			"durability": 100,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/man-thing.jpg",
		"biography": {
			"full_name": "Dr. Theodore Sallis",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"the Vagornus Koth",
				"the Swamp Walker",
				"Mr. Salad",
				"Walking Mulch Heap"
			],
			"place_of_birth": "-",
			"first_appearance": "Savage Tales #1 (May, 1971)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "7'0 // 213 cm",
			"weight": "500 lb // 225 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Man-Thing's Swamp, Citrusville, Florida"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts",
				"Legion of Monsters",
				"Daydreamers"
			],
			"relatives": [
				"Ellen Brandt (ex-wife) Job Burke (son)"
			]
		}
	},
	{
		"id": "man-wolf",
		"name": "Man-Wolf",
		"realName": "John Jameson",
		"stats": {
			"intelligence": 63,
			"strength": 44,
			"speed": 35,
			"durability": 42,
			"power": 45,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/man-wolf.jpg",
		"biography": {
			"full_name": "John Jameson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Stargod",
				"Vanwolf",
				"Skywolf"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2' // 188 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Brown",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Employed by Dept. of Social Services",
				"Queens",
				"former astronaut",
				"test pilot",
				"security chief for Ravenscroft Institute"
			],
			"base": [
				"Queens"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ravencroft Insitute Staff",
				"Avengers Support Crew",
				"NASA",
				"USAF"
			],
			"relatives": [
				"J. Jonah (father)",
				"Joan (mother",
				"deceased)",
				"Marla Madison (stepmother)",
				"David (paternal grandfather",
				"presumed deceased)",
				"Betty (paternal grandmother",
				"presumed deceased)"
			]
		}
	},
	{
		"id": "mandarin",
		"name": "Mandarin",
		"realName": "Khan",
		"stats": {
			"intelligence": 100,
			"strength": 28,
			"speed": 23,
			"durability": 28,
			"power": 100,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mandarin.jpg",
		"biography": {
			"full_name": "Khan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tem Borjigin",
				"Gene Kahn",
				"Master Khan",
				"Zhang Tong",
				"Mandy"
			],
			"place_of_birth": "China",
			"first_appearance": "Tales of Suspense #50 (February, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Would-be conqueror",
				"former janitor",
				"businessman and crimelord",
				"government administrator"
			],
			"base": [
				"Prometheus Corporation",
				"formerly Dragon of Heaven",
				"Palace of the Star Dragon in the Valley of Spirits."
			]
		},
		"connections": {
			"group_affiliation": [
				"current CEO of Prometheus Corporation",
				"has employed the Avatars",
				"Living Laser",
				"Power Man",
				"Swordsman",
				"Enchantress",
				"Executioner",
				"Sandman",
				"and Ladykiller."
			],
			"relatives": [
				"Unidentified father",
				"mother",
				"paternal aunt (all deceased). Mei-Ling (fianc�e",
				"deceased)",
				"Temujin (son)",
				"Genghis Khan (alleged ancestor",
				"deceased)"
			]
		}
	},
	{
		"id": "martian-manhunter",
		"name": "Martian Manhunter",
		"realName": "J'onn J'onzz",
		"stats": {
			"intelligence": 100,
			"strength": 95,
			"speed": 92,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/martian-manhunter.jpg",
		"biography": {
			"full_name": "J'onn J'onzz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"ohn Jones",
				"J'Onn J'Onzz (alternate spelling)",
				"Big Green Buddy",
				"J.J.",
				"Jolly Green Giant",
				"Light to the Light",
				"Manhunter",
				"Manhunter from Mars",
				"Son of Mars",
				"Bronze Wraith",
				"Bloodwynd",
				"many others"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #225 (1955)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Martian",
			"height": "6'7 // 201 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Darkstars",
				"Justice League of Aliens",
				"Justice League Of America",
				"Justice League Task Force",
				"Justice League Unlimited",
				"Martians",
				"Outsiders"
			],
			"relatives": [
				"M'yrnn J'onzz (father",
				"deceased)",
				"Sha'sheen J'onzz (mother",
				"deceased)",
				"M'yri'ah (wife",
				"deceased)",
				"K'hym (daughter",
				"deceased)",
				"Ma'alefa'ak (twin brother)",
				"D'all (father-in-law",
				"deceased)",
				"J'ahrl J'onzz (ancestor",
				"deceased)"
			]
		}
	},
	{
		"id": "marvel-girl",
		"name": "Marvel Girl",
		"realName": "Rachel Anne Summers",
		"stats": {
			"intelligence": 63,
			"strength": 85,
			"speed": 47,
			"durability": 42,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/marvel-girl.jpg",
		"biography": {
			"full_name": "Rachel Anne Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rachel Grey",
				"formerly Phoenix",
				"Mother Askani",
				"Bright Lady",
				"Aly'zrn Summerset"
			],
			"place_of_birth": "-",
			"first_appearance": "UNCANNY X-MEN #141",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7' // 170 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Xavier Institute of Higher Learning, Salem Center, Westchester County, New York (formerly) Braddock Lighthouse, England"
			]
		},
		"connections": {
			"group_affiliation": [
				"Starjammers",
				"formerly X-Men",
				"former servant of Elias Bogan",
				"formerly Clan Askani (leader)",
				"Excalibur",
				"former servant of Ahab"
			],
			"relatives": [
				"Scott Summers (Cyclops",
				"alternate timeline father",
				"deceased in own time)",
				"Jean Grey-Summers (Phoenix",
				"alternate timeline mother",
				"deceased in own time)",
				"Alex Summers (Havok",
				"alternate timeline uncle)",
				"Franklin Richards (alternate future husband)",
				"Jonathan Reed Richards (Hyperstorm",
				"alternate future son)",
				"David Richards (alternate future son)"
			]
		}
	},
	{
		"id": "master-brood",
		"name": "Master Brood",
		"realName": "Currently Colin Wood",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/master-brood.jpg",
		"biography": {
			"full_name": "Currently Colin Wood",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Brood"
			],
			"place_of_birth": "Perhaps England",
			"first_appearance": "Team Epic Episode 101",
			"publisher": "Team Epic TV",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Toronto, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team Epic"
			],
			"relatives": [
				"Deceased"
			]
		}
	},
	{
		"id": "master-chief",
		"name": "Master Chief",
		"realName": "John-117",
		"stats": {
			"intelligence": 75,
			"strength": 73,
			"speed": 35,
			"durability": 80,
			"power": 69,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/master-chief.jpg",
		"biography": {
			"full_name": "John-117",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Blue 1",
				"Sierra 117",
				"Spartan 117",
				"Demon"
			],
			"place_of_birth": "Elysium City, Eridanus II",
			"first_appearance": "-",
			"publisher": "Microsoft",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Altered",
			"height": "7' // 213 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Master Chief Petty Officer of the Navy"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"United Nations Space Command",
				"Navy"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "match",
		"name": "Match",
		"realName": "Kent Connor",
		"stats": {
			"intelligence": 75,
			"strength": 95,
			"speed": 83,
			"durability": 85,
			"power": 97,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/match.jpg",
		"biography": {
			"full_name": "Kent Connor",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Superboy",
				"Superman"
			],
			"place_of_birth": "-",
			"first_appearance": "Superboy Vol 4 #35 (January, 1997)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Titans East",
				"the Agenda",
				"Project Cadmus"
			],
			"relatives": [
				"Superman (genetic template via Superboy)",
				"Lex Luthor (genetic Template via Superboy)",
				"Superboy (genetic template)"
			]
		}
	},
	{
		"id": "matt-parkman",
		"name": "Matt Parkman",
		"realName": "Matthew Parkman",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 59,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/matt-parkman.jpg",
		"biography": {
			"full_name": "Matthew Parkman",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E02 - Don't Look Back",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"NYPD detective"
			],
			"base": [
				"New York, NY",
				"formerly Los Angeles, CA"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Maury Parkman (father)",
				"Janice Parkman (ex-wife)"
			]
		}
	},
	{
		"id": "maverick",
		"name": "Maverick",
		"realName": "Christopher Bradley ",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 12,
			"durability": 42,
			"power": 60,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/maverick.jpg",
		"biography": {
			"full_name": "Christopher Bradley",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Chris",
				"Bolt"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men Unlimited #8 (1995)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'4 // 193 cm",
			"weight": "244 lb // 110 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"former adventurer",
				"student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"(As Maverick) Formerly Gene Nation",
				"Cable�s Underground",
				"(as Bolt) formerly New Warriors"
			],
			"relatives": [
				"Robert Bradley (Frank Johnson",
				"father)",
				"Marion Bradley (Rose Johnson",
				"mother)",
				"Catherine Bradley (Jennifer Johnson",
				"sister)"
			]
		}
	},
	{
		"id": "maxima",
		"name": "Maxima",
		"realName": "",
		"stats": {
			"intelligence": 75,
			"strength": 90,
			"speed": 35,
			"durability": 56,
			"power": 81,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/maxima.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Queen Maxima",
				"Empress of the Almeracian Empire"
			],
			"place_of_birth": "Almerac",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Brown",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Queen of the Almerac Empire"
			],
			"base": [
				"Imperial Royal Palace"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League Task Force",
				"Extreme Justice"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "maya-herrera",
		"name": "Maya Herrera",
		"realName": "Maya Herrera",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 60,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/maya-herrera.jpg",
		"biography": {
			"full_name": "Maya Herrera",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Dominican Republic",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Alejandro (twin brother)"
			]
		}
	},
	{
		"id": "medusa",
		"name": "Medusa",
		"realName": "Medusalith Amaquelin Boltagon",
		"stats": {
			"intelligence": 75,
			"strength": 34,
			"speed": 35,
			"durability": 70,
			"power": 37,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/medusa.jpg",
		"biography": {
			"full_name": "Medusalith Amaquelin Boltagon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Madam Medusa",
				"Queen Medusa"
			],
			"place_of_birth": "Island of Attilan, Atlantic Ocean",
			"first_appearance": "Fantastic Four Vol. 1 #36 (1965)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Inhuman",
			"height": "5'11 // 180 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Queen",
				"Royal interpreter"
			],
			"base": [
				"Attilan"
			]
		},
		"connections": {
			"group_affiliation": [
				"Inhumans",
				"Fantastic Four"
			],
			"relatives": [
				"Kobar",
				"La (maternal grandparents)",
				"Azur (maternal aunt)",
				"Mander (maternal uncle-by-marriage)",
				"Quelin (father)",
				"Ambur (mother)",
				"Crystal (sister)",
				"Black Bolt (husband",
				"second cousin)",
				"Ahura (son)",
				"Karnak (cousin)",
				"Triton (cousin)",
				"Psynapse (second cousin)",
				"Maximus (brother-in-law",
				"second cousin)",
				"Ronan the Accuser (brother-in-law)",
				"Quicksilver (ex-brother-in-law)",
				"Luna (niece)"
			]
		}
	},
	{
		"id": "meltdown",
		"name": "Meltdown",
		"realName": "Tabitha Smith ",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 12,
			"durability": 42,
			"power": 62,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/meltdown.jpg",
		"biography": {
			"full_name": "Tabitha Smith",
			"alter_egos": [
				"Boom-Boom"
			],
			"aliases": [
				"Boom-Boom",
				"Boomer",
				"Meltdown",
				"Mutate #35",
				"Time Bomb",
				"Nancy Forrester"
			],
			"place_of_birth": "Roanoke, Virginia",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former student",
				"thief"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Nextwave",
				"X-Force",
				"Genoshan Mutates",
				"New Mutants",
				"X-Terminators",
				"X-Factor (trainee)",
				"Fallen Angels"
			],
			"relatives": [
				"Martin Louis Smith (father)",
				"Mandy Smith (step-mother)",
				"Wanda Jo Bialowsky-Smith (step-mother)"
			]
		}
	},
	{
		"id": "mephisto",
		"name": "Mephisto",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 85,
			"speed": 35,
			"durability": 95,
			"power": 100,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mephisto.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Satan",
				"Mephistopheles",
				"Lord of Evil",
				"Prince of Devils",
				"Prince of Lies",
				"Lord of the Lower Depths",
				"Satan",
				"Beelzebub",
				"the Devil",
				"Maya",
				"Lucifer",
				"Nick Scratch",
				"the Friend",
				"Legion",
				"numerous others",
				"impersonated Don Blake",
				"many others"
			],
			"place_of_birth": "Hell",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'6 // 198 cm",
			"weight": "310 lb // 140 kg",
			"eye_color": "White",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Lord of a realm of Hell"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Hell-lords",
				"Lords of the Splinter Realms",
				"formerly manipulator of the Six-Fingered Hand"
			],
			"relatives": [
				"Blackheart (son)",
				"Mephista (daughter)",
				"presumptive relationship to other Hell-lords",
				"quasi-paternal relationship to Mikal Drakonmegas (Hellfire) and Daimon (Hellstorm) and Satana Hellstrom",
				"formerly engaged to unidentified demoness"
			]
		}
	},
	{
		"id": "mera",
		"name": "Mera",
		"realName": "Mera",
		"stats": {
			"intelligence": 56,
			"strength": 62,
			"speed": 79,
			"durability": 60,
			"power": 92,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mera.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Queen of Atlantis",
				"Aquawoman",
				"Aquagirl",
				"Water-Woman"
			],
			"place_of_birth": "-",
			"first_appearance": "Aquaman #11 (October, 1963)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Atlantean",
			"height": "5'9 // 175 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Former queen of Atlantis",
				"Former queen of Dimension Aqua"
			],
			"base": [
				"Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Aquaman Family",
				"formerly Red Lantern Corps"
			],
			"relatives": [
				"Aquaman (husband)",
				"Aquababy (son",
				"deceased)",
				"A.J. (son)",
				"Siren (Hila",
				"twin sister)"
			]
		}
	},
	{
		"id": "metallo",
		"name": "Metallo",
		"realName": "John Corben",
		"stats": {
			"intelligence": 75,
			"strength": 53,
			"speed": 23,
			"durability": 95,
			"power": 86,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/metallo.jpg",
		"biography": {
			"full_name": "John Corben",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Superman Vol 2 #1 (January, 1987)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'5 // 196 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional criminal"
			],
			"base": [
				"Mobile, though he generally operates out of Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Superman Revenge Squad"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "metamorpho",
		"name": "Metamorpho",
		"realName": "Rex Mason",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/metamorpho.jpg",
		"biography": {
			"full_name": "Rex Mason",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Element Man"
			],
			"place_of_birth": "-",
			"first_appearance": "Brave and the Bold #57",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Black",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former Soldier of Fortune"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Outsiders",
				"formerly Doom Patrol",
				"Justice League Europe",
				"Seven Soldiers of Victory"
			],
			"relatives": [
				"Unnamed parents (deceased)",
				"Sapphire Stagg Mason (wife)",
				"Joseph (son)",
				"Simon Stagg (father-in-law)"
			]
		}
	},
	{
		"id": "meteorite",
		"name": "Meteorite",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/meteorite.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "metron",
		"name": "Metron",
		"realName": "Metron",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 47,
			"durability": 56,
			"power": 100,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/metron.jpg",
		"biography": {
			"full_name": "Metron",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "New Gods vol. 1 #1 (February-March, 1971)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Scientist",
				"seeker of knowledge"
			],
			"base": [
				"Supertown, New Genesis"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Gods"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "micah-sanders",
		"name": "Micah Sanders",
		"realName": "Micah Sanders",
		"stats": {
			"intelligence": 63,
			"strength": 8,
			"speed": 12,
			"durability": 14,
			"power": 57,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/micah-sanders.jpg",
		"biography": {
			"full_name": "Micah Sanders",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"MicahSanders500"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Elementary school student"
			],
			"base": [
				"New Orleans, LA"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Niki Sanders (Mother)",
				"DL Hawkins (Father)",
				"Paulette Hawkins (paternal grandmother)",
				"Hal Sanders (maternal grandfather)",
				"Nana Dawson (Guardian)\nNana Dawson (Great-aunt)",
				"Monica Dawson (Cousin)",
				"Damon Dawson (Cousin)"
			]
		}
	},
	{
		"id": "michelangelo",
		"name": "Michelangelo",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 14,
			"speed": 50,
			"durability": 65,
			"power": 59,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/michelangelo.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mike",
				"Mikey",
				"Mikester",
				"Michaelangelo"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "IDW Publishing",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "-",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Leonardo (brother)",
				"Donatello (brother)",
				"Raphael (brother)"
			]
		}
	},
	{
		"id": "micro-lad",
		"name": "Micro Lad",
		"realName": "Gim Allon",
		"stats": {
			"intelligence": 38,
			"strength": 28,
			"speed": 27,
			"durability": 28,
			"power": 44,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/micro-lad.jpg",
		"biography": {
			"full_name": "Gim Allon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Colossal Boy (mostly known as Colossal Boy",
				"although he dislikes that name himself)"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1 (2004)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Grey",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"United Planets, 31st century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mimic",
		"name": "Mimic",
		"realName": "Calvin Montgomery Rankin",
		"stats": {
			"intelligence": 63,
			"strength": 67,
			"speed": 47,
			"durability": 56,
			"power": 79,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mimic.jpg",
		"biography": {
			"full_name": "Calvin Montgomery Rankin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Cal",
				"Wolverine",
				"Calvin Rankin"
			],
			"place_of_birth": "Passiac, New Jersey",
			"first_appearance": "Uncanny X-Men #19",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Brotherhood Of Mutants",
				"Excalibur",
				"X-Men",
				"former agent of Onslaught and Sledge"
			],
			"relatives": [
				"Ronald Rankin (father",
				"deceased)"
			]
		}
	},
	{
		"id": "minna-murray",
		"name": "Minna Murray",
		"realName": "Wilhelmina Harker",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/minna-murray.jpg",
		"biography": {
			"full_name": "Wilhelmina Harker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Wildstorm",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "misfit",
		"name": "Misfit",
		"realName": "Charlotte Gage-Radcliffe",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 23,
			"durability": 80,
			"power": 91,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/misfit.jpg",
		"biography": {
			"full_name": "Charlotte Gage-Radcliffe",
			"alter_egos": [
				"Batgirl V"
			],
			"aliases": [
				"Batgirl"
			],
			"place_of_birth": "-",
			"first_appearance": "Birds of Prey #96",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Dalten Towers, Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Birds of Prey"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "miss-martian",
		"name": "Miss Martian",
		"realName": "M'gann M'orzz",
		"stats": {
			"intelligence": 63,
			"strength": 85,
			"speed": 58,
			"durability": 100,
			"power": 100,
			"combat": 45
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/miss-martian.jpg",
		"biography": {
			"full_name": "M'gann M'orzz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Megan Morse",
				"M'Gann M'Orzz (alternate spelling)",
				"Martian Girlhunter",
				"Martian Manhunter (Titans Tomorrow alias)",
				"Star-Spangled Kid"
			],
			"place_of_birth": "Mars",
			"first_appearance": "Teen Titans Vol 3 #37 (August, 2006)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Red",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Arizona",
				"San Francisco, California",
				"formerly the Tanami Desert, Australia"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mister-fantastic",
		"name": "Mister Fantastic",
		"realName": "Reed Richards",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 18,
			"durability": 70,
			"power": 33,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-fantastic.jpg",
		"biography": {
			"full_name": "Reed Richards",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mr Fantastic"
			],
			"place_of_birth": "Central City, California",
			"first_appearance": "FANTASTIC FOUR #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "6'1 // 185 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Scientist",
				"adventurer"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Fantastic Four"
			],
			"relatives": [
				"Nathaniai (father)",
				"Evelyn (mother",
				"deceased)",
				"Susan Storm - Invisible Woman (wife)",
				"Franklin (son)",
				"Johnny Storm - Human Torch (brother-inlaw)",
				"Cassandra (stepmother",
				"deceased)",
				"Immortus (father's descendant",
				"see Immortus",
				"Kang",
				"Rama-Tut)."
			]
		}
	},
	{
		"id": "mister-freeze",
		"name": "Mister Freeze",
		"realName": "Victor Fries",
		"stats": {
			"intelligence": 75,
			"strength": 32,
			"speed": 12,
			"durability": 70,
			"power": 37,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-freeze.jpg",
		"biography": {
			"full_name": "Victor Fries",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mister Zero",
				"Doctor Zero",
				"Doctor Schimmell"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #121 (Feb. 1959)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Assorted Batman rogues",
				"The Society"
			],
			"relatives": [
				"Nora Fries (wife",
				"deceased",
				"then resurrected as Lazara)",
				"Charles (Father) and Lorraine Fries (Mother)"
			]
		}
	},
	{
		"id": "mister-knife",
		"name": "Mister Knife",
		"realName": "J'son",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 17,
			"durability": 30,
			"power": 13,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-knife.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jason of Spartax",
				"Jason of Sparta",
				"Star-Lord",
				"Mr Knife"
			],
			"place_of_birth": "Spartax, Spartoi Empire, near the Shi'ar Galaxy",
			"first_appearance": "Inhumans Vol 3 #2 (July, 2000)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Spartoi",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Crimelord",
				"former emperor",
				"prince"
			],
			"base": [
				"Formerly Spartax, Spartoi Empire, near the Shi'ar Galaxy"
			]
		},
		"connections": {
			"group_affiliation": [
				"Slaughter Lords (leader)",
				"formerly Galactic Council",
				"ruler of the Spartoi Empire"
			],
			"relatives": [
				"Eson (father",
				"deceased)",
				"Peter Quill (Star-Lord",
				"son)",
				"Victoria (daughter)"
			]
		}
	},
	{
		"id": "mister-mxyzptlk",
		"name": "Mister Mxyzptlk",
		"realName": "Mr. Mxyzptlk",
		"stats": {
			"intelligence": 100,
			"strength": 85,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-mxyzptlk.jpg",
		"biography": {
			"full_name": "Mr. Mxyzptlk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Superman #30",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mister-sinister",
		"name": "Mister Sinister",
		"realName": "Nathaniel Essex",
		"stats": {
			"intelligence": 100,
			"strength": 48,
			"speed": 46,
			"durability": 90,
			"power": 100,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-sinister.jpg",
		"biography": {
			"full_name": "Dr. Nathaniel Essex",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sinister",
				"Robert Windsor",
				"Arnold Bocklin",
				"Mike Milbury",
				"Apocalypse",
				"Steven Shaffran",
				"Edmond Atkinson",
				"Nate",
				"Administrator Pearson",
				"Nosferatu",
				"Nathan Milbury",
				"Pale Man"
			],
			"place_of_birth": "London, England",
			"first_appearance": "Uncanny X-Men #221 (September, 1987)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Altered",
			"height": "6'5 // 196 cm",
			"weight": "285 lb // 128 kg",
			"eye_color": "Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Geneticist",
				"Criminal",
				"biologist and mutant-supremacist"
			],
			"base": [
				"Many bases throughout the world including his State Home for Foundlings and the Center for Homo Superior Medical Care."
			]
		},
		"connections": {
			"group_affiliation": [
				"Marauders (founder)",
				"Nasty Boys (founder)",
				"formerly Weapon X",
				"Third Reich"
			],
			"relatives": [
				"Rebecca Essex (wife",
				"deceased)",
				"Adam Stanislaus Essex (son",
				"deceased)",
				"N2 (creation",
				"deceased)",
				"Madelyne Pryor (creation",
				"deceased)",
				"Claudine Renko (clone \"daughter\")"
			]
		}
	},
	{
		"id": "mister-zsasz",
		"name": "Mister Zsasz",
		"realName": "Victor Zsasz",
		"stats": {
			"intelligence": 88,
			"strength": 22,
			"speed": 33,
			"durability": 28,
			"power": 18,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mister-zsasz.jpg",
		"biography": {
			"full_name": "Victor Zsasz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mr Zsasz"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Serial Killer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mockingbird",
		"name": "Mockingbird",
		"realName": "Barbara Morse",
		"stats": {
			"intelligence": 75,
			"strength": 31,
			"speed": 38,
			"durability": 20,
			"power": 48,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mockingbird.jpg",
		"biography": {
			"full_name": "Barbara Morse",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Barbara Morse-Barton",
				"Roberta Morse",
				"Agent 19",
				"Huntress",
				"Bobbi Van Dyne",
				"once posed as Shooting Star"
			],
			"place_of_birth": "San Diego, California",
			"first_appearance": "Astonishing Tales #6 (June, 1971)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former counter-terrorist agent",
				"private investigator",
				"government operative",
				"S.H.I.E.L.D. agent",
				"biologist"
			],
			"base": [
				"New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"World Counterterrorism Agency",
				"formerly Secret Avengers",
				"New Avengers",
				"West Coast Avengers",
				"Avengers",
				"Great Lakes Avengers",
				"S.H.I.E.L.D.",
				"partner of Hawkeye",
				"associate of Dr. Wilma Calvin"
			],
			"relatives": [
				"Susan Morse (mother)",
				"Ben Morse (brother)",
				"Hawkeye (Clint Barton) (ex-husband)"
			]
		}
	},
	{
		"id": "modok",
		"name": "MODOK",
		"realName": "George Tarleton",
		"stats": {
			"intelligence": 100,
			"strength": 18,
			"speed": 25,
			"durability": 25,
			"power": 79,
			"combat": 15
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/modok.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"M.O.D.O.K.",
				"Mental Organism Designed Only for Killing"
			],
			"place_of_birth": "-",
			"first_appearance": "Tales of Suspense #93",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "12'0 // 366 cm",
			"weight": "750 lb // 338 kg",
			"eye_color": "White",
			"hair_color": "Brownn"
		},
		"work": {
			"occupation": [
				"Would-be conqueror",
				"AIM leader",
				"terrorist",
				"former AIM agent",
				"technician"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"M.O.D.O.K. Superior (clone)",
				"Head Case (son)",
				"Number None (son)"
			]
		}
	},
	{
		"id": "mogo",
		"name": "Mogo",
		"realName": "Mogo",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/mogo.jpg",
		"biography": {
			"full_name": "Mogo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Green Lantern Vol 2 #188 (May, 1985)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Planet",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Green Lantern"
			],
			"base": [
				"Sector 2261"
			]
		},
		"connections": {
			"group_affiliation": [
				"Green Lantern Corps"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mohinder-suresh",
		"name": "Mohinder Suresh",
		"realName": "Mohinder Suresh",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/mohinder-suresh.jpg",
		"biography": {
			"full_name": "Mohinder Suresh",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "India",
			"first_appearance": "Heroes S01E01 - Genesis",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Former agent of Pinehearst Company",
				"former Company medical professional & agent",
				"former taxi driver",
				"former genetics professor"
			],
			"base": [
				"Apartment in Brooklyn, NY"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"formerly Maya Herrera",
				"formerly Mira Shenoy",
				"Chandra Suresh (deceased)",
				"Unnamed mother",
				"Shanti Suresh"
			]
		}
	},
	{
		"id": "moloch",
		"name": "Moloch",
		"realName": "Edgar William Jacobi",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/moloch.jpg",
		"biography": {
			"full_name": "Edgar William Jacobi",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"William Edgar Bright",
				"Moloch the Mystic"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "molten-man",
		"name": "Molten Man",
		"realName": "Mark Raxton",
		"stats": {
			"intelligence": 50,
			"strength": 73,
			"speed": 23,
			"durability": 84,
			"power": 53,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/molten-man.jpg",
		"biography": {
			"full_name": "Mark Raxton",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #28 (1965)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'5 // 196 cm",
			"weight": "550 lb // 248 kg",
			"eye_color": "Gold",
			"hair_color": "Gold"
		},
		"work": {
			"occupation": [
				"Security guard for Osborn industries",
				"former criminal",
				"lab assistant"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Exterminators"
			],
			"relatives": [
				"Doris Raxton (mother)",
				"Liz Allan Osborn (step-sister)",
				"Harry Osborn (Green Goblin II",
				"step-brother-in-law",
				"deceased)",
				"Norman Osborn Jr. (Green Goblin I",
				"step-nephew)"
			]
		}
	},
	{
		"id": "monarch",
		"name": "Monarch",
		"realName": "Nathaniel Christopher Adam",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/monarch.jpg",
		"biography": {
			"full_name": "Nathaniel Christopher Adam",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Monarch",
				"Allen Adam",
				"Cameron Scott",
				"Captain Atom"
			],
			"place_of_birth": "-",
			"first_appearance": "Captain Atom #1 (D.C., March, 1987)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'4 // 193 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former U.S. Special Agent",
				"former U.S. Air Force Captain"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"formally Justice League",
				"Extreme Justice",
				"Super Buddies",
				"L.A.W.",
				"United States Air Force"
			],
			"relatives": [
				"Angela Adams (wife",
				"deceased)",
				"Margaret Eiling (daughter)",
				"Randall Eiling (son)"
			]
		}
	},
	{
		"id": "monica-dawson",
		"name": "Monica Dawson",
		"realName": "Monica Dawson",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 35,
			"durability": 14,
			"power": 48,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/monica-dawson.jpg",
		"biography": {
			"full_name": "Monica Dawson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S02E04 - The Kindness of Strangers",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Fast food service"
			],
			"base": [
				"New Orleans, LA"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Nana Dawson (Grandmother)",
				"Damon (brother)",
				"DL Hawkins (cousin)",
				"Niki Sanders (cousin-in-law once removed)",
				"Micah Sanders (second cousin)"
			]
		}
	},
	{
		"id": "moon-knight",
		"name": "Moon Knight",
		"realName": "Marc Spector ",
		"stats": {
			"intelligence": 50,
			"strength": 36,
			"speed": 23,
			"durability": 42,
			"power": 28,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/moon-knight.jpg",
		"biography": {
			"full_name": "Marc Spector",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jake Lockley",
				"Steven Grant",
				"Yitzak Topol",
				"Fist of Khonshu",
				"Crescent Crusader",
				"Lunar Legionnaire"
			],
			"place_of_birth": "Chicago, Illinois",
			"first_appearance": "Werewolf by Night #32 (August, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"entrepreneur",
				"former prize fighter",
				"spy",
				"soldier",
				"mercenary",
				"cab driver"
			],
			"base": [
				"New York City",
				"formerly Spector Mansion, Long Island, Avengers Compound, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Avengers",
				"formerly: US Marine Corps",
				"Central Intelligence Agency (CIA)",
				"partner of Jean-Paul du Champ",
				"partner of Raoul Bushman",
				"partner of Midnight",
				"West Coast Avengers",
				"Marvel Knights",
				"Defenders"
			],
			"relatives": [
				"Shadowknight (Randall Spector) (brother",
				"deceased)",
				"Elias (father",
				"deceased)",
				"Seth Phalkon (alleged great-great-grandfather)"
			]
		}
	},
	{
		"id": "moonstone",
		"name": "Moonstone",
		"realName": "Karla Sofen",
		"stats": {
			"intelligence": 56,
			"strength": 67,
			"speed": 47,
			"durability": 52,
			"power": 74,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/moonstone.jpg",
		"biography": {
			"full_name": "Dr. Karla Sofen",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Meteorite",
				"Kate Sorenson"
			],
			"place_of_birth": "Van Nuys, California",
			"first_appearance": "Captain America Vol. 1 #192 (December, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"former Adventurer",
				"Psychiatrist"
			],
			"base": [
				"formerly Mount Charteris",
				"Four Freedoms Plaza"
			]
		},
		"connections": {
			"group_affiliation": [
				"Dark Avengers",
				"Formerly",
				"Thunderbolts",
				"Femizons",
				"Masters of Evil",
				"Doctor Faustus",
				"the Corporation",
				"former partner of Blackout (Marcus Daniels)"
			],
			"relatives": [
				"Karl August Sofen (father)",
				"Marion Sofen (mother)",
				"unnamed maternal grandparents (only mentioned )"
			]
		}
	},
	{
		"id": "morlun",
		"name": "Morlun",
		"realName": "Morlun",
		"stats": {
			"intelligence": 63,
			"strength": 60,
			"speed": 35,
			"durability": 42,
			"power": 74,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/morlun.jpg",
		"biography": {
			"full_name": "Morlun",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #30 (2001)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "White / Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "morph",
		"name": "Morph",
		"realName": "Kevin Sydney",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/morph.jpg",
		"biography": {
			"full_name": "Kevin Sydney",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Pittsburgh, Pennsylvania",
			"first_appearance": "Exiles #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "White",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"reality traveler"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Exiles",
				"(Formerly) X-Men",
				"New Mutants",
				"Avengers all of his home reality"
			],
			"relatives": [
				"Unnamed mother (deceased)",
				"Unnamed father"
			]
		}
	},
	{
		"id": "moses-magnum",
		"name": "Moses Magnum",
		"realName": "Moses Magnum",
		"stats": {
			"intelligence": 75,
			"strength": 28,
			"speed": 12,
			"durability": 42,
			"power": 55,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/moses-magnum.jpg",
		"biography": {
			"full_name": "Moses Magnum",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Magnum Force",
				""
			],
			"place_of_birth": "-",
			"first_appearance": "Giant-Size Spider-Man #4 (1975)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "159 lb // 72 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Terrorist",
				"president of Magnum Munitions",
				"former ruler of Canaan"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Magnum Force (leader)",
				"agent of Apocalypse",
				"former agent of They Who Wield Power"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mr-immortal",
		"name": "Mr Immortal",
		"realName": "Craig Hollis",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 8,
			"durability": 100,
			"power": 69,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mr-immortal.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "West Coast Avengers Vol 2 #46",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'2 // 188 cm",
			"weight": "156 lb // 70 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "mr-incredible",
		"name": "Mr Incredible",
		"realName": "Robert Parr",
		"stats": {
			"intelligence": 50,
			"strength": 83,
			"speed": 33,
			"durability": 95,
			"power": 29,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mr-incredible.jpg",
		"biography": {
			"full_name": "Robert Parr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mr. I",
				"The Hero's Hero",
				"Bob Parr"
			],
			"place_of_birth": "-",
			"first_appearance": "The Incredibles (Movies, 2004)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'7 // 201 cm",
			"weight": "350 lb // 158 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Incredible Family"
			],
			"relatives": [
				"Helen Parr (Elastigirl",
				"wife)",
				"Violet Parr(Violet",
				"daughter)",
				"Dashiell Parr (Dash",
				"son)",
				"Jack-jack (son)"
			]
		}
	},
	{
		"id": "ms-marvel-ii",
		"name": "Ms Marvel II",
		"realName": "Sharon Ventura",
		"stats": {
			"intelligence": 38,
			"strength": 63,
			"speed": 23,
			"durability": 84,
			"power": 11,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ms-marvel-ii.jpg",
		"biography": {
			"full_name": "Sharon Ventura",
			"alter_egos": [
				"She-Thing"
			],
			"aliases": [
				"She-Thing"
			],
			"place_of_birth": "Pullman, Washington",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Wanderer",
				"former adventurer",
				"wrestler",
				"stunt woman",
				"scuba diver",
				"motorcycle performer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of the Fantastic Four",
				"Frightful Four",
				"Unlimited Class Wrestling Federation",
				"Thunderiders"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "multiple-man",
		"name": "Multiple Man",
		"realName": "James Arthur",
		"stats": {
			"intelligence": 63,
			"strength": 11,
			"speed": 23,
			"durability": 70,
			"power": 28,
			"combat": 62
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/multiple-man.jpg",
		"biography": {
			"full_name": "James Arthur",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Los Alamos, New Mexico",
			"first_appearance": "GIANT-SIZE FANTASTIC FOUR #4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11' // 180 cm",
			"weight": "155 lb // 70 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Private investigator (formerly) Farmer",
				"Adventurer"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Factor Investigations (formerly) X-Factor",
				"Fallen Angels",
				"X-Corps",
				"X-Corporation"
			],
			"relatives": [
				"Dr. Daniel Madrox (father",
				"deceased)",
				"Joan Madrox (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "mysterio",
		"name": "Mysterio",
		"realName": "Quentin Beck",
		"stats": {
			"intelligence": 81,
			"strength": 10,
			"speed": 17,
			"durability": 40,
			"power": 77,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mysterio.jpg",
		"biography": {
			"full_name": "Quentin Beck",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nicholas Macabes",
				"Rudolph Hines",
				"Gerdes",
				"Doctor Ludwig Rinehart"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "Amazing Spider-Man #13 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Criminal",
				"former Hollywood special effects designer and stunt man"
			],
			"base": [
				"New York City, New York State (Earth-1610) formerly New York City, New York (Earth-616)"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"Former Sinister Six"
			],
			"relatives": [
				"Henrietta Beck (mother)",
				"Elmore Beck (father)",
				"Vincent (uncle)",
				"Maguire Beck (Jack O'Lantern) (cousin)"
			]
		}
	},
	{
		"id": "mystique",
		"name": "Mystique",
		"realName": "Raven Darkholme",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 23,
			"durability": 64,
			"power": 64,
			"combat": 74
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/mystique.jpg",
		"biography": {
			"full_name": "Raven Darkholme",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mallory Brickman"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'10 // 178 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Yellow (without irises)",
			"hair_color": "Red / Orange",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"Special operative for Germany and the United States governments",
				"(former) German Freedom Fighter",
				"special operative in the Weapon X Project Team"
			],
			"base": [
				"Arlington, Virginia"
			]
		},
		"connections": {
			"group_affiliation": [
				"Founder and leader of the third Brotherhood of Evil Mutants",
				"now known as Freedom Force",
				"X-Factor",
				"X-Men"
			],
			"relatives": [
				"Rogue (unofficial foster daughter)",
				"Ralph Brickman (husband)",
				"Gloria Brickman (daughter)",
				"Graydon Creed (son",
				"deceased)"
			]
		}
	},
	{
		"id": "namor",
		"name": "Namor",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/namor.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "namor",
		"name": "Namor",
		"realName": "Namor McKenzie",
		"stats": {
			"intelligence": 69,
			"strength": 95,
			"speed": 58,
			"durability": 70,
			"power": 73,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/namor.jpg",
		"biography": {
			"full_name": "Namor McKenzie",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Imperius Rex",
				"Dr. G.W. Falton",
				"Sub-Mariner",
				"\"Subby\"",
				"Namor the First",
				"Avenging Son",
				"Old Man",
				"Rex",
				"Joe Pierre",
				"Lord of the Seven Seas",
				"the Scion of the Deep",
				"Phoenix"
			],
			"place_of_birth": "Atlantis",
			"first_appearance": "Motion Picture Funnies Weekly #1 (April, 1939)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Atlantean",
			"height": "6'2 // 188 cm",
			"weight": "278 lb // 125 kg",
			"eye_color": "Grey",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"King of Atlantis",
				"Adventurer",
				"former warrior",
				"commando",
				"CEO"
			],
			"base": [
				"Ultimate Universe",
				"formerly New Atlantis, Utopia, San Francisco Bay, California",
				"Atlantis",
				"Necropolis, Wakanda",
				"occasionally mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Cabal (founder)",
				"Invaders",
				"Atlantis",
				"formerly Illuminati",
				"X-Men",
				"Extinction Team",
				"Phoenix Five",
				"Defenders",
				"Osborn's X-Men",
				"Osborn's Cabal",
				"Avengers",
				"All-Winners Squad",
				"Titans Three",
				"Fantastic Four",
				"Oracle Inc.",
				"Order",
				"Deep Six (founder and leader)",
				"ally o"
			],
			"relatives": [
				"Elanna (maternal ancestor)",
				"Tanas (maternal ancestor)",
				"Zartra (maternal ancestor)",
				"Orrek (maternal distant relative)",
				"Stegor (maternal ancestor)",
				"Kamuu (maternal ancestor)",
				"Harran (maternal ancestor)",
				"Kalen (maternal ancestor)",
				"Ossem (maternal ancestor)",
				"Balaal (maternal ancestor)",
				"Thallo (maternal ancestor)",
				"Immanu (maternal great-grandfather-in-law",
				"deceased)",
				"Thakorr (maternal grandfather",
				"deceased)",
				"Korra (maternal grandmother)",
				"Wa-Korr (grandfather-in-law",
				"presumed deceased)",
				"Wathan (father-in-law",
				"presumed deceased)",
				"Tom Smallwood (father-in-law)",
				"Gladys Smallwood (mother-in-law)",
				"Zarina (maternal aunt)",
				"Namora's father (uncle)",
				"Daka (maternal uncle)",
				"Brynn (aunt-by-marriage/step-grandmother)",
				"Fen (mother",
				"deceased)",
				"Leonard McKenzie (father",
				"deceased)",
				"Experiment N2 (clone)",
				"Lawrence McKenzie (paternal half-brother)",
				"Dorma (wife / distant cousin",
				"deceased)",
				"Marrina (wife)",
				"three unnamed children (by Marrina)",
				"Kamar (son",
				"deceased)",
				"Black Moray (Leon McKenzie) (paternal half-nephew)",
				"Llyron McKenzie (paternal great-nephew)",
				"Dan Smallwood (brother-in-law)",
				"Namora (maternal cousin)",
				"Beemer (maternal cousin)",
				"Bobo (maternal cousin)",
				"Byrrahna (maternal cousin)",
				"Namita (maternal cousin)",
				"Daro (maternal cousin)",
				"Dara (maternal cousin)",
				"Seth (maternal cousin)",
				"Argus (maternal cousin)",
				"Arkus (maternal cousin)",
				"Byrrah (maternal cousin)",
				"Namorita (maternal 1st cousin once removed)."
			]
		}
	},
	{
		"id": "namora",
		"name": "Namora",
		"realName": "Aquaria Nautica Neptunia",
		"stats": {
			"intelligence": 50,
			"strength": 85,
			"speed": 42,
			"durability": 42,
			"power": 48,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/namora.jpg",
		"biography": {
			"full_name": "Aquaria Nautica Neptunia",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sub-Mariner",
				"Avenging Daughter",
				"the Sea Beauty"
			],
			"place_of_birth": "Unnamed Atlantean outpost",
			"first_appearance": "Marvel Mystery Comics #82 (1947)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "189 lb // 85 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Agents of Atlas",
				"Long-time ally of Namor",
				"Monster Hunters",
				"Invaders",
				"All Winners Squad",
				"At one time or another was partnered with FBI Agent Jimmy Woo",
				"Sun Girl",
				"Venus",
				"Golden Girl",
				"Hulk"
			],
			"relatives": [
				"Namor (cousin)",
				"Talan (husband",
				"deceased)",
				"Namorita (\"daughter\" cloned)"
			]
		}
	},
	{
		"id": "namorita",
		"name": "Namorita",
		"realName": "Namorita Prentiss",
		"stats": {
			"intelligence": 50,
			"strength": 72,
			"speed": 47,
			"durability": 70,
			"power": 37,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/namorita.jpg",
		"biography": {
			"full_name": "Namorita Prentiss",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kymaera",
				"Hard"
			],
			"place_of_birth": "Atlantis Outskirts",
			"first_appearance": "SUB-MARINER Vol. 2 #50 (1972)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Superhero",
				"formerly Leader of Atlantis"
			],
			"base": [
				"Mobile, formerly New Warriors headquarters and Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Council of Three",
				"New Warriors",
				"Fantastic Four",
				"Soldiers of Misfortune",
				"Water Children"
			],
			"relatives": [
				"Namora (mother)",
				"Talan (father",
				"deceased)",
				"Namor",
				"Byrrah",
				"Dara",
				"Arkus (first cousins once removed)",
				"Fen (great-aunt",
				"deceased)",
				"Thakorr (great-grandfather",
				"deceased)",
				"Korra (great-grandmother",
				"presumed deceased)",
				"large extended family",
				"Betty Prentiss (legal guardian",
				"deceased)"
			]
		}
	},
	{
		"id": "naruto-uzumaki",
		"name": "Naruto Uzumaki",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 32,
			"durability": 80,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/naruto-uzumaki.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Shueisha",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "121 lb // 54 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Konohagakure"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team 7"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "nathan-petrelli",
		"name": "Nathan Petrelli",
		"realName": "Nathan Petrelli",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/nathan-petrelli.jpg",
		"biography": {
			"full_name": "Nathan Petrelli",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E01",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"formerly a U.S. Congressman",
				"formerly a district attorney",
				"formerly a Navy officer"
			],
			"base": [
				"Mansion in Hyde Park, NY"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Angela Petrelli (mother)",
				"unnamed father (deceased)",
				"Peter Petrelli (younger brother)",
				"Simon Petrelli (son)",
				"Monty Petrelli (son)",
				"Claire Bennet (daughter)"
			]
		}
	},
	{
		"id": "nebula",
		"name": "Nebula",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 52,
			"speed": 13,
			"durability": 50,
			"power": 42,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nebula.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Avengers #257 (July, 1985)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Luphomoid",
			"height": "6'1 // 185 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Graces",
				"United Front",
				"former leader of a mercenary band"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "negasonic-teenage-warhead",
		"name": "Negasonic Teenage Warhead",
		"realName": "Ellie Phimister",
		"stats": {
			"intelligence": 50,
			"strength": 7,
			"speed": 8,
			"durability": 10,
			"power": 45,
			"combat": 35
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/negasonic-teenage-warhead.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Warhead"
			],
			"place_of_birth": "-",
			"first_appearance": "New X-Men #115",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "nick-fury",
		"name": "Nick Fury",
		"realName": "Nicholas Joseph Fury",
		"stats": {
			"intelligence": 75,
			"strength": 11,
			"speed": 23,
			"durability": 42,
			"power": 25,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nick-fury.jpg",
		"biography": {
			"full_name": "Nicholas Joseph Fury",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Doyle",
				"The Mystery in the Mask",
				"Patch",
				"Scorpio"
			],
			"place_of_birth": "New York City",
			"first_appearance": "Sgt. Fury and His Howling Commandos #1 (1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "221 lb // 99 kg",
			"eye_color": "Brown",
			"hair_color": "Brown / White"
		},
		"work": {
			"occupation": [
				"S.H.I.E.L.D. director",
				"former S.H.I.E.L.D. agent",
				"intelligence agent",
				"soldier and commando leader",
				"parachuting instructor",
				"stunt flyer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Avengers",
				"SHIELD (both incarnations)",
				"formerly Team Valkyrie",
				"C.I.A.",
				"liaison to MI-5",
				"O.S.S.",
				"Howling Commandos",
				"U.S. Army"
			],
			"relatives": [
				"Jack Fury (father",
				"deceased)",
				"unnamed mother",
				"unnamed stepmother (deceased)",
				"Dawn Fury (half-sister)",
				"Jake Fury (half-brother)",
				"Mikel Fury (son",
				"deceased)",
				"Jerry Sapristi (cousin)",
				"Tina Sapristi (cousin by marriage)",
				"Ernesto",
				"Pietro",
				"Giovanni",
				"Maria",
				"Rosa and Gabriella (1st cousins once removed)",
				""
			]
		}
	},
	{
		"id": "nightcrawler",
		"name": "Nightcrawler",
		"realName": "Kurt Wagner",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 47,
			"durability": 14,
			"power": 76,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nightcrawler.jpg",
		"biography": {
			"full_name": "Kurt Wagner",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Somewhere in the Bavarian Alps",
			"first_appearance": "GIANT-SIZE X-MEN #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9' // 175 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Yellow",
			"hair_color": "Indigo"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Teacher"
			],
			"base": [
				"Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland",
				"Braddock Lighthouse"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly Excalibur"
			],
			"relatives": [
				"Eric Wagner (father",
				"deceased)",
				"Margali Szardos (foster mother)",
				"Jimaine Szardos (Daytripper",
				"alias Amanda Sefton",
				"foster sister)",
				"Stefan Szardos (foster brother",
				"deceased)",
				"Mystique (mother)",
				"Graydon Creed (half-brother",
				"deceased)."
			]
		}
	},
	{
		"id": "nightwing",
		"name": "Nightwing",
		"realName": "Dick Grayson",
		"stats": {
			"intelligence": 88,
			"strength": 11,
			"speed": 33,
			"durability": 28,
			"power": 36,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nightwing.jpg",
		"biography": {
			"full_name": "Richard John Grayson",
			"alter_egos": [
				"Batman II",
				"Robin I"
			],
			"aliases": [
				"Freddie Dinardo",
				"Freddy Loyd",
				"The Target",
				"Renegade",
				"The Worlds Greatest Acrobat",
				"The Aerial Avenger",
				"Pixie Boots",
				"The Boy / Teen Wonder",
				"The Worlds Greatest Detective",
				"The Caped Crusader"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "as Dick Grayson and Robin) Detective Comics #38, (as Nightwing) Tales of the Teen Titans #44, (as Batman) Batman #512",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Vigilante and detective",
				"former police officer",
				"former Circus Acrobat"
			],
			"base": [
				"Wayne Tower, Gotham City",
				"formerly the Batcave",
				"formerly Bludhaven",
				"formerly New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family and the JLA",
				"formerly the Teen Titans",
				"the New Titans",
				"the Titans and the Outsiders"
			],
			"relatives": [
				"John Grayson (father",
				"deceased)",
				"Mary Grayson (mother",
				"deceased)",
				"Bruce Wayne / Batman (adoptive father)",
				"Damian Wayne / Robin (foster brother)",
				"Jason Todd / Red Hood (adoptive brother)",
				"Tim Drake / Red Robin (adoptive brother)",
				"Cassandra Cain / Batgirl IV (adoptive sister)"
			]
		}
	},
	{
		"id": "niki-sanders",
		"name": "Niki Sanders",
		"realName": "Nicole Sanders",
		"stats": {
			"intelligence": 63,
			"strength": 52,
			"speed": 35,
			"durability": 28,
			"power": 37,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/niki-sanders.jpg",
		"biography": {
			"full_name": "Nicole Sanders",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jessica",
				"Gina"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E01 - Genesis",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former casino worker and online webcam operator",
				"currently an agent of the Company"
			],
			"base": [
				"Las Vegas, NV"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"DL Hawkins (husband)",
				"Hal Sanders (father)",
				"Micah Sanders (son)",
				"Jessica Sanders (sister",
				"deceased)",
				"Monica Dawson (cousin-in-law)",
				"Damon Dawson (cousin-in-law)",
				"Paulette Hawkins (mother-in-law)"
			]
		}
	},
	{
		"id": "nina-theroux",
		"name": "Nina Theroux",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 5,
			"speed": 8,
			"durability": 10,
			"power": 68,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nina-theroux.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "SyFy",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Alpha",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alphas"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "nite-owl-ii",
		"name": "Nite Owl II",
		"realName": "Daniel Dreiberg",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/nite-owl-ii.jpg",
		"biography": {
			"full_name": "Daniel Dreiberg",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Watchmen"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "northstar",
		"name": "Northstar",
		"realName": "Jean-Paul Beaubier",
		"stats": {
			"intelligence": 50,
			"strength": 18,
			"speed": 83,
			"durability": 56,
			"power": 65,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/northstar.jpg",
		"biography": {
			"full_name": "Jean-Paul Beaubier",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jean-Paul Martin"
			],
			"place_of_birth": "Montreal, Qu�bec, Canada",
			"first_appearance": "X-Men #120 (1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former terrorist",
				"adventurer",
				"teacher",
				"businessman",
				"novelist",
				"professional skier",
				"trapeze artist",
				"thief"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"formerly Hydra",
				"Xavier Institute Faculty/Alpha Squadron (teacher/advisor)",
				"X-Men",
				"Alpha Flight",
				"Front de Lib�ration du Qu�bec/Cell Combattre"
			],
			"relatives": [
				"Jean-Baptiste Beaubier (father",
				"deceased)",
				"unnamed mother (deceased)",
				"Louis Martin (adoptive father",
				"deceased)",
				"unnamed adoptive mother (deceased)",
				"Jeanne-Marie Beaubier (Aurora",
				"sister)",
				"Joanne Beaubier (adopted daughter",
				"deceased)"
			]
		}
	},
	{
		"id": "nova",
		"name": "Nova",
		"realName": "Richard Rider",
		"stats": {
			"intelligence": 100,
			"strength": 85,
			"speed": 75,
			"durability": 100,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nova.jpg",
		"biography": {
			"full_name": "Richard Rider",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rich",
				"Bucket-Head",
				"Human Rocket",
				"Kid Nova",
				"",
				"Nova Prime",
				"Quasar"
			],
			"place_of_birth": "Queens, NY",
			"first_appearance": "NOVA Vol. 1 #1 (September, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Superhero",
				"also works parttime at Marvel Burger"
			],
			"base": [
				"Mobile & Xandar, also formerly New Warriors headquarters"
			]
		},
		"connections": {
			"group_affiliation": [
				"Nova Corps formely United Front (Leader)",
				"New Warriors",
				"Champions of Xandar",
				"Secret Defenders",
				"Defender for a day"
			],
			"relatives": [
				"Charles Rider (Father)",
				"Gloria Rider (Mother)",
				"Robbie Rider (Brother)",
				"Ralph Rider (Uncle",
				"deceased)",
				"Ellen (aunt)"
			]
		}
	},
	{
		"id": "nova",
		"name": "Nova",
		"realName": "Frankie Raye",
		"stats": {
			"intelligence": 63,
			"strength": 60,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 35
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/nova.jpg",
		"biography": {
			"full_name": "Frankie Raye",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Frances Hyatt",
				"Human Torch"
			],
			"place_of_birth": "-",
			"first_appearance": "Fantastic Four #164 (November, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human / Cosmic",
			"height": "5'4 // 163 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "White",
			"hair_color": "Red",
			"skin_color": "Gold"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"World-ship of Galactus"
			]
		},
		"connections": {
			"group_affiliation": [
				"Defenders (Valkyrior)",
				"formerly Heralds of Galactus",
				"Fantastic Four"
			],
			"relatives": [
				"\"Thomas Raye\" (Phineas T. Horton",
				"stepfather",
				"deceased)",
				"Thomas Raymond (Toro",
				"possible biological father)",
				"Lanette Raye (mother)"
			]
		}
	},
	{
		"id": "odin",
		"name": "Odin",
		"realName": "Odin Borson",
		"stats": {
			"intelligence": 100,
			"strength": 83,
			"speed": 67,
			"durability": 95,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/odin.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"All-Father",
				"Sky-Father",
				"Atum-Re",
				"Woden",
				"Wotan",
				"Oden",
				"Orrin",
				"Harbard",
				"King of Asgard"
			],
			"place_of_birth": "Asgard",
			"first_appearance": "Journey into Mystery #85",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "6'9 // 206 cm",
			"weight": "650 lb // 293 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Deity",
				"Monarch of Asgard",
				"Asgardian God of the Sky",
				"Wind",
				"Wisdom",
				"Crafts",
				"Time",
				"and the Dead",
				"Warrior"
			],
			"base": [
				"City of Asgard, Asgard"
			]
		},
		"connections": {
			"group_affiliation": [
				"Asgardians",
				"Council of Godheads"
			],
			"relatives": [
				"Buri (Tiwaz) (paternal grandfather)",
				"Bolthorn (maternal grandfather)",
				"Bor Burison (father",
				"deceased)",
				"Bestla (mother)",
				"Mimir Burison (paternal uncle)",
				"Njord (paternal uncle)",
				"Vili",
				"Ve",
				"Cul (brothers)",
				"Frigga (wife)",
				"Freyr (father-in-law)",
				"Gullveig (sister-in-law)",
				"Thor (son by Jord)",
				"Vidar (son by Grid)",
				"Balder (son by Frigga)",
				"Tyr",
				"Hermod (allegedly sons by Frigga)",
				"Angela (daughter by Frigga)",
				"Laussa (daughter by Frigga and Surtur)",
				"Loki (foster son)",
				"Hoder (nephew)",
				"Skadi (niece)"
			]
		}
	},
	{
		"id": "offspring",
		"name": "Offspring",
		"realName": "Luke O'Brian",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 35,
			"durability": 99,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/offspring.jpg",
		"biography": {
			"full_name": "Luke O'Brian",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ernie McDunnagh",
				"Plastic Lad"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "omega-red",
		"name": "Omega Red",
		"realName": "Arkady Gregorivich",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/omega-red.jpg",
		"biography": {
			"full_name": "Arkady Gregorivich",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Arkady Rossovich",
				"Vasyliev Arkady"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'11 // 211 cm",
			"weight": "425 lb // 191 kg",
			"eye_color": "Red",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Crimelord",
				"former mercenary",
				"KGB agent"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Red Mafia (kingpin)",
				"former employee of Sabretooth",
				"The General",
				"Ivan Pushkin",
				"and Matsu'o Tsurayaba",
				"formerly KGB"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "omniscient",
		"name": "Omniscient",
		"realName": "Omniscient is the closest English word that compares to his alien tongue.",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/omniscient.jpg",
		"biography": {
			"full_name": "Omniscient is the closest English word that compares to his alien tongue.",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Another Unknown World",
			"first_appearance": "Team Epic Episode 101",
			"publisher": "Team Epic TV",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Superhero",
				"Grade 9 physics teacher"
			],
			"base": [
				"Toronto, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team Epic"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "one-punch-man",
		"name": "One Punch Man",
		"realName": "Saitama",
		"stats": {
			"intelligence": 38,
			"strength": 100,
			"speed": 83,
			"durability": 95,
			"power": 55,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/one-punch-man.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Caped Baldy"
			],
			"place_of_birth": "-",
			"first_appearance": "One Punch - Chapter 1, Volume 1",
			"publisher": "Shueisha",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "154 lb // 69 kg",
			"eye_color": "-",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Superhero",
				"Sensei"
			],
			"base": [
				"Z-City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Genos (partner)"
			]
		}
	},
	{
		"id": "one-above-all",
		"name": "One-Above-All",
		"realName": "",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/one-above-all.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"One Above All"
			],
			"place_of_birth": "-",
			"first_appearance": "Doctor Strange Vol 2 #13",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "-",
			"race": "Cosmic Entity",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Living Tribunal (creation)"
			]
		}
	},
	{
		"id": "onslaught",
		"name": "Onslaught",
		"realName": "Onslaught",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/onslaught.jpg",
		"biography": {
			"full_name": "Onslaught",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Charlie Silus",
				"Sir David The Great",
				"Charles Xavier",
				"Magneto",
				"That Which Shall Survive",
				"the Entity",
				"Dark Xavier"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Man Vol 1 #15 (May, 1996)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "10'0 // 305 cm",
			"weight": "900 lb // 405 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Would-be destroyer"
			],
			"base": [
				"Central Park Citadel, Astral Fortress"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Professor Charles Xavier (fusee",
				"deceased)",
				"Magneto (fusee)"
			]
		}
	},
	{
		"id": "oracle",
		"name": "Oracle",
		"realName": "Barbara Gordon",
		"stats": {
			"intelligence": 75,
			"strength": 11,
			"speed": 23,
			"durability": 28,
			"power": 19,
			"combat": 76
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/oracle.jpg",
		"biography": {
			"full_name": "Barbara Gordon",
			"alter_egos": [
				"Batgirl"
			],
			"aliases": [
				"Batgirl",
				"Babs",
				"Barbie Doll",
				"O",
				"The Masked Maiden",
				"the Dark Knight Damsel"
			],
			"place_of_birth": "-",
			"first_appearance": "Suicide Squad #23 (Jan.1989)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "132 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Computer hacker and Coordinator of the Birds of Prey",
				"Former student",
				"former librarian",
				"former vigilante"
			],
			"base": [
				"Metropolis, formerly Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Birds of Prey",
				"Batman Family",
				"Seven Soldiers of Victory",
				"Suicide Squad",
				"Justice League"
			],
			"relatives": [
				"Roger C. Gordon (father",
				"deceased)",
				"Thelma (mother",
				"deceased)",
				"James Gordon (uncle/adoptive father)",
				"Barbara Eileen Gordon (aunt/adoptive mother)",
				"James Gordon Jr. (cousin)"
			]
		}
	},
	{
		"id": "osiris",
		"name": "Osiris",
		"realName": "Amon Tomaz",
		"stats": {
			"intelligence": 75,
			"strength": 85,
			"speed": 60,
			"durability": 95,
			"power": 65,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/osiris.jpg",
		"biography": {
			"full_name": "Amon Tomaz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Shiruta, Kahndaq"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Isis (Sister",
				"deceased)",
				"Black Adam (Brother-in-Law)"
			]
		}
	},
	{
		"id": "overtkill",
		"name": "Overtkill",
		"realName": "Nicholas Rocca",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/overtkill.jpg",
		"biography": {
			"full_name": "Nicholas Rocca",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"OvertWar"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Mafia",
				"Antonio'Tony Twist' Twistelli",
				"Jason Wynn"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ozymandias",
		"name": "Ozymandias",
		"realName": "Adrian Veidt",
		"stats": {
			"intelligence": 100,
			"strength": 18,
			"speed": 33,
			"durability": 20,
			"power": 49,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ozymandias.jpg",
		"biography": {
			"full_name": "Adrian Alexander Veidt",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The World's Smartest Man"
			],
			"place_of_birth": "-",
			"first_appearance": "Watchmen #1",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly The Crimebusters"
			],
			"relatives": [
				"Friedrich Werner Veidt (father)",
				"Ingrid Renata Veidt (mother)"
			]
		}
	},
	{
		"id": "parademon",
		"name": "Parademon",
		"realName": "",
		"stats": {
			"intelligence": 9,
			"strength": 28,
			"speed": 17,
			"durability": 50,
			"power": 53,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/parademon.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Apokalips",
			"first_appearance": "New Gods #1",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "-",
			"race": "Parademon",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Darkseid"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "paul-blart",
		"name": "Paul Blart",
		"realName": "Paul Blart",
		"stats": {
			"intelligence": 8,
			"strength": 11,
			"speed": 21,
			"durability": 50,
			"power": 7,
			"combat": 5
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/paul-blart.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mall Cop"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Sony Pictures",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "penance",
		"name": "Penance",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/penance.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "penance-i",
		"name": "Penance I",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/penance-i.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "penance-ii",
		"name": "Penance II",
		"realName": "Robert Baldwin",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/penance-ii.jpg",
		"biography": {
			"full_name": "Robert Baldwin",
			"alter_egos": [
				"Speedball"
			],
			"aliases": [
				"Formerly Speedball",
				"Masked Marvel"
			],
			"place_of_birth": "Springdale, Connecticut",
			"first_appearance": "(as Speedball) Amazing Spider-Man Annual #22 (1988); (as Penance) Civil War: Front Line #10 (2007)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6' // 183 cm",
			"weight": "197 lb // 89 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Government operative",
				"former adventurer",
				"reality TV star",
				"student",
				"television show intern",
				"engineering intern",
				"lab worker"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts",
				"formerly New Warriors"
			],
			"relatives": [
				"Justin Baldwin (father)",
				"Madeline Naylor (mother)"
			]
		}
	},
	{
		"id": "penguin",
		"name": "Penguin",
		"realName": "Oswald Chesterfield Cobblepot",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 30,
			"combat": 45
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/penguin.jpg",
		"biography": {
			"full_name": "Oswald Chesterfield Cobblepot",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "DETECTIVE COMICS #58 (December, 1941)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'2 // 157 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Trader"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Miranda Cobblepot (Aunt)",
				"Miranda (Mother",
				"deceased)",
				"Father (deceased)"
			]
		}
	},
	{
		"id": "peter-petrelli",
		"name": "Peter Petrelli",
		"realName": "Peter Petrelli",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 23,
			"durability": 28,
			"power": 69,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/peter-petrelli.jpg",
		"biography": {
			"full_name": "Peter Petrelli",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Heroes S01E01",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"former home hospice nurse"
			],
			"base": [
				"New York, NY"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Angela Petrelli (mother)",
				"unnamed father",
				"Nathan Petrelli (older brother)",
				"Claire Bennet (Niece)",
				"Simon Petrelli",
				"Monty Petrelli (Nephews)"
			]
		}
	},
	{
		"id": "phantom",
		"name": "Phantom",
		"realName": "Christopher Walker",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/phantom.jpg",
		"biography": {
			"full_name": "Christopher Walker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Mr Walker",
				"Christopher Standish"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "phantom-girl",
		"name": "Phantom Girl",
		"realName": "Tinya Wazzo",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 53,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/phantom-girl.jpg",
		"biography": {
			"full_name": "Tinya Wazzo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1 (2004)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"United Planets, Bgztl"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "phoenix",
		"name": "Phoenix",
		"realName": "Jean Grey",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/phoenix.jpg",
		"biography": {
			"full_name": "Jean Grey-Summers",
			"alter_egos": [
				"Jean Grey"
			],
			"aliases": [
				"Redd Dayspring",
				"Marvel Girl"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men #1 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'6 // 168 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Xavier Institute of Higher Learning, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men (founding member)",
				"Clan Rebellion",
				"Muir Island X-Men",
				"X-Factor/X-Terminators (founding member)",
				"Brides of Set"
			],
			"relatives": [
				"Rachel Summers (daughter from an alternate universe)",
				"X-Man (son from an alternate universe)",
				"Cyclops (ex-husband)",
				"Havok (former brother-in-law)",
				"Corsair (former father-in-law)",
				"Madelyne Pryor (clone)",
				"Cable (adoptive/biological son)",
				"Stryfe (cloned biological son)",
				"Genesis (grandson)"
			]
		}
	},
	{
		"id": "plantman",
		"name": "Plantman",
		"realName": "Samuel Smithers",
		"stats": {
			"intelligence": 63,
			"strength": 60,
			"speed": 25,
			"durability": 55,
			"power": 61,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/plantman.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Blackheath"
			],
			"place_of_birth": "London, England",
			"first_appearance": "Strange Tales #113 (October, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "193 lb // 87 kg",
			"eye_color": "Green",
			"hair_color": "Grey"
		},
		"work": {
			"occupation": [
				"Professional Criminal",
				"formerly Gardner"
			],
			"base": [
				"A submarine somewhere in the Atlantic Ocean, formerly London, United Kingdom"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Thunderbolts (as Blackheath)",
				"Crime Wave",
				"Defenders (Villains)",
				"New Enforcers",
				"former associate of the Maggia under Count Nefaria",
				"ally of Wizard."
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "plastic-lad",
		"name": "Plastic Lad",
		"realName": "Luke O'Brian",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/plastic-lad.jpg",
		"biography": {
			"full_name": "Luke O'Brian",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Offspring"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "plastic-man",
		"name": "Plastic Man",
		"realName": "Patrick O'Brian",
		"stats": {
			"intelligence": 50,
			"strength": 63,
			"speed": 23,
			"durability": 100,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/plastic-man.jpg",
		"biography": {
			"full_name": "Patrick O'Brian",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Police Comics #1 (August, 1941)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "178 lb // 80 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Government Agent"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The FBI",
				"formerly the Justice League of America",
				"the All-Star Squadron and the Freedom Fighters"
			],
			"relatives": [
				"Offspring (son)"
			]
		}
	},
	{
		"id": "plastique",
		"name": "Plastique",
		"realName": "Bette Sans Souci",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 60,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/plastique.jpg",
		"biography": {
			"full_name": "Bette Sans Souci",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Fury of Firestorm #7",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "123 lb // 55 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Government Agent",
				"former Terrorist",
				"Mercenary"
			],
			"base": [
				"Mobile",
				"formerly Quebec, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Suicide Squad",
				"formerly Bomb Squad",
				"Extreme Justice"
			],
			"relatives": [
				"Nathaniel Adam (Captain Atom",
				"husband)",
				"Margaret Eiling (step-daughter)",
				"Randall Eiling (step-son)"
			]
		}
	},
	{
		"id": "poison-ivy",
		"name": "Poison Ivy",
		"realName": "Pamela Isley",
		"stats": {
			"intelligence": 81,
			"strength": 14,
			"speed": 21,
			"durability": 40,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/poison-ivy.jpg",
		"biography": {
			"full_name": "Pamela Lillian Isley",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Seattle, Washington",
			"first_appearance": "Batman #181 (June 1966)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Green",
			"hair_color": "Red",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Criminal",
				"Botanist"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Injustice Gang",
				"Suicide Squad",
				"Harley Quinn",
				"Secret Society of Super Villains",
				"Joker League of Anarchy"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "polaris",
		"name": "Polaris",
		"realName": "Lorna Dane",
		"stats": {
			"intelligence": 63,
			"strength": 73,
			"speed": 42,
			"durability": 50,
			"power": 100,
			"combat": 45
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/polaris.jpg",
		"biography": {
			"full_name": "Lorna Sally Dane",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pestilence",
				"formerly Malice",
				"Polarity",
				"Magnetrix",
				"M-2",
				"Magneto the Second"
			],
			"place_of_birth": "Presumably northern California - not confirmed",
			"first_appearance": "X-Men #49 (October, 1968)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'7 // 170 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Green",
			"hair_color": "Green"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former U.S. government operative",
				"former graduate student in geophysics"
			],
			"base": [
				"Serval Industries, Virginia",
				"formerly X-Factor Investigations Headquarters, Starjammer",
				"Xavier Institute for Higher Learning, Salem Center, Westchester County, New York",
				"Genosha",
				"X-Factor HQ, Washington D.C., Maryland",
				"Mutant Research Center, Muir Island",
				""
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Factor (Serval Industries)",
				"formerly X-Factor Investigations",
				"Starjammers",
				"X-Men",
				"Horsemen of Apocalypse",
				"Genoshan Cabinet",
				"X-Factor (Government)",
				"The Twelve",
				"Acolytes",
				"Muir Island X-Men",
				"Defenders for a Day",
				"Marauders (possessed by Malice)"
			],
			"relatives": [
				"Joseph (father's clone/paternal uncle",
				"deceased)",
				"Magneto (father)",
				"Magda Lehnsherr (step-mother",
				"deceased)",
				"Zaladane (sister",
				"status uncertain)",
				"Anya Lehnsherr (paternal half-sister",
				"deceased)",
				"Scarlet Witch (paternal half-sister)",
				"Quicksilver (paternal half-brother)",
				"Nightcrawler (half-brother-in-law)",
				"Vision (half-brother-in-law)",
				"Crystal (half-sister-in-law)",
				"Nocturne (half-niece)",
				"Speed (half-nephew)",
				"Wiccan (half-nephew)",
				"Luna Maximoff (half-niece)"
			]
		}
	},
	{
		"id": "power-girl",
		"name": "Power Girl",
		"realName": "Kara Zor-L",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/power-girl.jpg",
		"biography": {
			"full_name": "Kara Zor-L",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Karen Starr",
				"Nightwing"
			],
			"place_of_birth": "-",
			"first_appearance": "All-Star Comics #58 (January/February 1976)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Kryptonian",
			"height": "5'11 // 180 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "blue",
			"hair_color": "blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America",
				"Justice League Europe",
				"Infinity",
				"Inc.",
				"Sovereign Seven"
			],
			"relatives": [
				"Zor-L (father",
				"deceased)",
				"Allura (mother",
				"deceased)",
				"Jor-L (uncle",
				"deceased)",
				"Lora (aunt",
				"deceased)",
				"Kal-L (Earth-Two Superman",
				"cousin and adopted father",
				"deceased)",
				"Earth-Two Lois Lane (adopted mother",
				"deceased)",
				"Equinox (son",
				"deceased)",
				"Kara Zor-El (alternate universe version)"
			]
		}
	},
	{
		"id": "power-man",
		"name": "Power Man",
		"realName": "Luke Cage",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/power-man.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Luke Cage"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "predator",
		"name": "Predator",
		"realName": "Yautja",
		"stats": {
			"intelligence": 63,
			"strength": 30,
			"speed": 25,
			"durability": 85,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/predator.jpg",
		"biography": {
			"full_name": "Yautja",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Hunters",
				"Yautja",
				"Hish"
			],
			"place_of_birth": "Yautja Prime",
			"first_appearance": "Predator (1987)",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Yautja",
			"height": "7'0 // 213 cm",
			"weight": "520 lb // 234 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "professor-x",
		"name": "Professor X",
		"realName": "Charles Francis Xavier",
		"stats": {
			"intelligence": 100,
			"strength": 8,
			"speed": 12,
			"durability": 14,
			"power": 100,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/professor-x.jpg",
		"biography": {
			"full_name": "Charles Francis Xavier",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Prof",
				"Dr. X",
				"Professor Xavier",
				"formerly Prisoner M-13"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "X-Men #1 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6' // 183 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Mutant leader",
				"mutant rights activist",
				"geneticist",
				"teacher",
				"adventurer",
				"heir",
				"formerly headmaster",
				"soldier (US Army)"
			],
			"base": [
				"Formerly Utopia, San Francisco Bay, California",
				"Genosha",
				"Xavier Institute, Salem Center, Westchester County, New York",
				"Imperial Palace, Chandilar, Shi'ar Empire",
				"Columbia University, Manhattan, New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men (founder",
				"formerly teacher & leader)",
				"Illuminati",
				"Genoshan Excalibur",
				"Brotherhood of Evil Mutants (leader)",
				"Cadre K",
				"Generation X (founder)",
				"Starjammers",
				"The Twelve",
				"New Mutants (founder",
				"teacher & leader)",
				"United States Army",
				"X-Corporation"
			],
			"relatives": [
				"Brian Xavier (father",
				"deceased)",
				"Sharon Xavier (mother",
				"deceased)",
				"Cassandra Nova (sister)",
				"Kurt Marko (stepfather",
				"deceased)",
				"Cain Marko (Juggernaut",
				"stepbrother)",
				"Lilandra (ex-wife)",
				"David Charles Haller (Legion",
				"son",
				"deceased)"
			]
		}
	},
	{
		"id": "professor-zoom",
		"name": "Professor Zoom",
		"realName": "Eobard Thawne",
		"stats": {
			"intelligence": 94,
			"strength": 10,
			"speed": 100,
			"durability": 20,
			"power": 83,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/professor-zoom.jpg",
		"biography": {
			"full_name": "Eobard Thawne",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Reverse Flash",
				"Black Flash",
				"Adrian Zoom",
				"Mister Zyx"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash #139 (September, 1963)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "179 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Central Cityplex, 25th Century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Secret Society of Super-Villains",
				"Black Lantern Corps",
				"White Lantern Corps"
			],
			"relatives": [
				"Robern Thawne (brother)",
				"Malcolm Thawne (Cobalt Blue) (distant ancestor)",
				"President Thawne",
				"Meloni Thawne",
				"Bart Allen",
				"Owen Mercer (descendants) - see Allen Family for complete family tree"
			]
		}
	},
	{
		"id": "proto-goblin",
		"name": "Proto-Goblin",
		"realName": "Nels Van Adder",
		"stats": {
			"intelligence": 63,
			"strength": 38,
			"speed": 23,
			"durability": 48,
			"power": 22,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/proto-goblin.jpg",
		"biography": {
			"full_name": "Nels Van Adder",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Goblin"
			],
			"place_of_birth": "-",
			"first_appearance": "Spider-Man #-1 (1990)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Scientist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "psylocke",
		"name": "Psylocke",
		"realName": "Elizabeth Braddock",
		"stats": {
			"intelligence": 63,
			"strength": 33,
			"speed": 25,
			"durability": 40,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/psylocke.jpg",
		"biography": {
			"full_name": "Elizabeth Braddock",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Betsy",
				"Captain Britain",
				"Lady Mandarin"
			],
			"place_of_birth": "Braddock Manor, England",
			"first_appearance": "Captain Britain #8 (December, 1976) / New Mutants Annual #2 (October, 1986) (US)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'11 // 180 cm",
			"weight": "155 lb // 70 kg",
			"eye_color": "Blue",
			"hair_color": "Purple"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly a STRIKE operative",
				"fashion model"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York formerly Braddock Manor, United Kingdom",
				"Australian Outback"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly agent of S.T.R.I.K.E.",
				"ally of R.C.X.",
				"partner of Captain U.K."
			],
			"relatives": [
				"John Braddock (ancestor",
				"possibly grandfather)",
				"Sir James Braddock (father",
				"deceased)",
				"Lady Elizabeth Braddock (mother",
				"deceased)",
				"Brian Braddock (Captain Britain) (twin brother)",
				"Jamie Braddock (brother",
				"deceased)",
				"Meggan Braddock (sister-in-law)",
				""
			]
		}
	},
	{
		"id": "punisher",
		"name": "Punisher",
		"realName": "Frank Castle",
		"stats": {
			"intelligence": 69,
			"strength": 16,
			"speed": 21,
			"durability": 45,
			"power": 42,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/punisher.jpg",
		"biography": {
			"full_name": "Francis Castiglione",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Big Nothing",
				"Major Bateman",
				"Ted Bishop",
				"Cliff Callador",
				"Castigo",
				"Chaloner",
				"Fred D'Amato",
				"Eastman",
				"Charles Fort",
				"Frank Loomis",
				"McRook",
				"Melchior",
				"Joe Rainey",
				"Frank Rook",
				"Richard Rook",
				"Tony Knowlen Ross",
				"Francis Stronghold",
				"Johnny Tower",
				"Dmitri Velikoff",
				"Fra"
			],
			"place_of_birth": "Queens, New York",
			"first_appearance": "AMAZING SPIDER-MAN #129",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0' // 183 cm",
			"weight": "200 lb // 90 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former United States Marine turned professional vigilante"
			],
			"base": [
				"Mobile, usually in New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"Formerly Secret Avengers",
				"Daredevil's Unnamed Super-Hero Team",
				"Green Berets",
				"U.S. Marine Corps"
			],
			"relatives": [
				"Maria Castle (Wife",
				"deceased)",
				"Christie Castle (Daughter",
				"deceased)",
				"Frank Castle Junior (Son",
				"deceased)",
				"Mario Castle (Father",
				"deceased)",
				"Louisa Castle (Mother",
				"deceased)",
				"Rocco Castiglione (Uncle",
				"deceased)",
				"Esmerelda Castiglione (Aunt",
				"deceased)",
				"Michael Castle (Brother",
				"stillborn",
				"deceased)."
			]
		}
	},
	{
		"id": "purple-man",
		"name": "Purple Man",
		"realName": "Zebediah Killgrave",
		"stats": {
			"intelligence": 56,
			"strength": 10,
			"speed": 8,
			"durability": 30,
			"power": 92,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/purple-man.jpg",
		"biography": {
			"full_name": "Zebediah Killgrave",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kilgrave"
			],
			"place_of_birth": "-",
			"first_appearance": "Daredevil #4 (October, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Purple",
			"hair_color": "Purple",
			"skin_color": "Purple"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"Megalomaniac",
				"Former spy"
			],
			"base": [
				"New York City, New York, USA",
				"formerly Canada, Croatia, formerly Yugoslavia"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Purple Children (leader and father)",
				"Villains for Hire",
				"Hood's gang",
				"partner of Electro",
				"his own band of criminals"
			],
			"relatives": [
				"Melanie Killgrave (ex-wife)",
				"Persuasion (Kara Killgrave) (daughter)",
				"Joe (son)",
				"Shallah (daughter)",
				"Connor (son)",
				"Jamie (son)",
				"Unnamed daughter"
			]
		}
	},
	{
		"id": "pyro",
		"name": "Pyro",
		"realName": "St. John Allerdyce",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 54,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/pyro.jpg",
		"biography": {
			"full_name": "St. John Allerdyce",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Sydney, Australia",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former government agent",
				"terrorist",
				"bodyguard",
				"novelist",
				"journalist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Freedom Force",
				"Brotherhood of Evil Mutants"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "q",
		"name": "Q",
		"realName": "Q",
		"stats": {
			"intelligence": 100,
			"strength": 12,
			"speed": 17,
			"durability": 100,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/q.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Q Continuum"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Star Trek",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "quantum",
		"name": "Quantum",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/quantum.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "question",
		"name": "Question",
		"realName": "Charles Victor Szasz",
		"stats": {
			"intelligence": 81,
			"strength": 14,
			"speed": 27,
			"durability": 35,
			"power": 20,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/question.jpg",
		"biography": {
			"full_name": "Charles Victor Szasz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Vic Sage"
			],
			"place_of_birth": "-",
			"first_appearance": "Blue Beetle (Charlton) Vol 4 #1 (June, 1967)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former Television Investigative Journalist"
			],
			"base": [
				"Hub City",
				"Chicago, Gotham City, Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly L.A.W.",
				"JLA",
				"Black Lantern Corps"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "quicksilver",
		"name": "Quicksilver",
		"realName": "Pietro Django Maximoff",
		"stats": {
			"intelligence": 63,
			"strength": 28,
			"speed": 100,
			"durability": 60,
			"power": 81,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/quicksilver.jpg",
		"biography": {
			"full_name": "Pietro Django Maximoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pietro Frank",
				"Gypsy Davey",
				"Mateo Maximoff"
			],
			"place_of_birth": "Wundagore Mountain, Transia (in Eastern Europe)",
			"first_appearance": "X-MEN Vol. 1 #4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Silver"
		},
		"work": {
			"occupation": [
				"(current) Adventurer",
				"(former) Terrorist",
				"officer of the Inhumans militia",
				"United States government operative"
			],
			"base": [
				"Currently a castle on the Hudson River in upstate New York that is owned by the High Evolutionary",
				"(former) Transia",
				"Avengers Mansion, Manhattan",
				"Avengers Compound, Palos Verdes, California",
				"X-Factor headquarters, Washington D. C."
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"unofficial member of the Royal Family of the Inhumans",
				"(former) Brotherhood of Evil Mutants I",
				"X-Factor II"
			],
			"relatives": [
				"Wanda Maximoff (Scarlet Witch",
				"sister)",
				"Magnus (Magneto",
				"father)",
				"Magda (mother",
				"deceased)",
				"Django Maximoff (adoptive father)",
				"Marya Maximoff (adoptive mother",
				"deceased)",
				"Crystal (wife)",
				"Maximoff",
				"Luna (daughter)",
				"Medusa (sister-in-law)",
				"Black Bolt",
				"Gorgon",
				"Karnak",
				"Triton",
				"Maximus (cousins by marriage)",
				"Vision (ex-brother-in-law)"
			]
		}
	},
	{
		"id": "quill",
		"name": "Quill",
		"realName": "Maxwell Jordan",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 23,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/quill.jpg",
		"biography": {
			"full_name": "Maxwell Jordan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Max"
			],
			"place_of_birth": "-",
			"first_appearance": "New X-Men: Academy X #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'4 // 163 cm",
			"weight": "124 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"X-Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"Corsairs"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ras-al-ghul",
		"name": "Ra's Al Ghul",
		"realName": "Ra's Al Ghul",
		"stats": {
			"intelligence": 100,
			"strength": 28,
			"speed": 32,
			"durability": 42,
			"power": 27,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ras-al-ghul.jpg",
		"biography": {
			"full_name": "Ra's Al Ghul",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Demon's Head"
			],
			"place_of_birth": "Egypt",
			"first_appearance": "Batman #232 (June, 1971)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'4 // 193 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "Green",
			"hair_color": "Grey"
		},
		"work": {
			"occupation": [
				"Eco Terrorist",
				"Businessman",
				"Cult Leader"
			],
			"base": [
				"mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"League of Assassins"
			],
			"relatives": [
				"The Sensei (father)",
				"White Ghost (Dusan al Ghul) (son)",
				"Talia al Ghul (daughter)",
				"Nyssa Raatko (daughter)",
				"Robin V (Damian Wayne) (grandson)"
			]
		}
	},
	{
		"id": "rachel-pirzad",
		"name": "Rachel Pirzad",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 4,
			"speed": 8,
			"durability": 10,
			"power": 52,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rachel-pirzad.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "SyFy",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Alpha",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alphas"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "rambo",
		"name": "Rambo",
		"realName": "John Rambo",
		"stats": {
			"intelligence": 63,
			"strength": 14,
			"speed": 25,
			"durability": 30,
			"power": 30,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rambo.jpg",
		"biography": {
			"full_name": "John J. Rambo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Raven",
				"Lone Wolf"
			],
			"place_of_birth": "Bowie, Arizona",
			"first_appearance": "First Blood (Novel, 1972)",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"United States Army soldier (former)"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"United States Army (former)"
			],
			"relatives": [
				"R. Rambo (father)",
				"Marie Drago (mother)",
				"Col. Sam Trautman (close-friend",
				"father-figure",
				"trainer",
				"best-friend until death)"
			]
		}
	},
	{
		"id": "raphael",
		"name": "Raphael",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 17,
			"speed": 50,
			"durability": 65,
			"power": 59,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/raphael.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Teenage Mutant Ninja Turtles #1",
			"publisher": "IDW Publishing",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Leonardo (brother)",
				"Donatello (brother)",
				"Michelangelo (brother)"
			]
		}
	},
	{
		"id": "raven",
		"name": "Raven",
		"realName": "Rachel Roth",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 29,
			"durability": 70,
			"power": 84,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/raven.jpg",
		"biography": {
			"full_name": "Rachel Roth",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pride",
				"Dark Raven"
			],
			"place_of_birth": "Azarath",
			"first_appearance": "DC Comics Presents #26 (October, 1980)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Indigo",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"high school student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"formerly Sentinels of Magic"
			],
			"relatives": [
				"Trigon (father)",
				"Angela Roth (mother",
				"deceased)",
				"Gluttony",
				"Greed",
				"Lust",
				"Wrath",
				"Envy",
				"Sloth (half-brothers",
				"status unknown)"
			]
		}
	},
	{
		"id": "ray",
		"name": "Ray",
		"realName": "Ray Terrill",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 92,
			"durability": 100,
			"power": 100,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ray.jpg",
		"biography": {
			"full_name": "Raymond C. Terrill",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Ray #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "155 lb // 70 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Freelance Computer Programmer and Software Designer"
			],
			"base": [
				"Philadelphia, Pennsylvania"
			]
		},
		"connections": {
			"group_affiliation": [
				"Freedom Fighters",
				"formerly Justice League of America",
				"Justice League Task Force",
				"Young Justice",
				"JSA Reserves",
				"Forgotten Heroes",
				"Justice League Internationa"
			],
			"relatives": [
				"Happy Terrill (father)",
				"Nadine Terrill (mother)",
				"Joshua Terrill (Spitfire",
				"brother)",
				"Thomas Terrill (uncle/foster father",
				"deceased)",
				"Hank Terrill (cousin)"
			]
		}
	},
	{
		"id": "razor-fist-ii",
		"name": "Razor-Fist II",
		"realName": "Douglas Scott",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/razor-fist-ii.jpg",
		"biography": {
			"full_name": "Douglas Scott",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Razorfist"
			],
			"place_of_birth": "-",
			"first_appearance": "Master of Kung Fu I#105 (October, 1981)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"assassin",
				"bodyguard",
				"enforcer"
			],
			"base": [
				"the House of Razor, unrevealed location. Formerly, Roche's estate, Madripoor. Formerly, Carlton Velcro's mansion on an island in the Marquesas"
			]
		},
		"connections": {
			"group_affiliation": [
				"S.H.I.E.L.D. Deltite Conspiracy",
				"Leader of a band of followers (Anton",
				"Lulu",
				"Mary",
				"Perkins",
				"Piranha Tots",
				"Samantha",
				"others)",
				"Architect",
				"Batroc",
				"Bobcat",
				"Brothers Grimm",
				"Bullet Biker",
				"Crossfire",
				"Death-Throws",
				"Inquisitor",
				"Mad Dog",
				"Roche",
				"Sapphire Styx",
				"Shoc"
			],
			"relatives": [
				"William Scott (aka Razor-Fist III",
				"brother",
				"deceased)"
			]
		}
	},
	{
		"id": "red-arrow",
		"name": "Red Arrow",
		"realName": "Roy Harper",
		"stats": {
			"intelligence": 63,
			"strength": 16,
			"speed": 25,
			"durability": 20,
			"power": 23,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-arrow.jpg",
		"biography": {
			"full_name": "Roy William Harper, Jr.",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Arsenal",
				"Speedy"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Speedy) More Fun Comics # 73(Nov. 1941); (as Arsenal) The New Titans # 99 (July 1993); (as Red Arrow) Justice League of America Vol. 2 # 7 (May 2007)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"intelligence agent",
				"musician"
			],
			"base": [
				"The Hall & JLA Watchtower",
				"New York City",
				"formerly Titans Tower, Station Markovia, and Gabriel's Horn"
			]
		},
		"connections": {
			"group_affiliation": [
				"Titans",
				"Justice League of America",
				"formerly Outsiders",
				"Teen Titans",
				"Checkmate",
				"Central Bureau of Investigations"
			],
			"relatives": [
				"Roy William Harper",
				"Sr. (father",
				"deceased)",
				"Brave Bow (adoptive father",
				"deceased)",
				"Oliver \"Ollie\" Queen (Green Arrow - adoptive father)",
				"Jim Harper (Guardian- great-uncle)",
				"Lian Harper (daughter)",
				"Vandal Savage (ancestor)"
			]
		}
	},
	{
		"id": "red-hood",
		"name": "Red Hood",
		"realName": "Jason Todd",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 23,
			"durability": 28,
			"power": 35,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-hood.jpg",
		"biography": {
			"full_name": "Jason Peter Todd",
			"alter_egos": [
				"Robin II"
			],
			"aliases": [
				"Robin",
				"Red Robin",
				"Batman",
				"Nightwing",
				"Arkham Knight"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #635",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Mercenary",
				"Vigilante"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly Batman Family",
				"Teen Titans"
			],
			"relatives": [
				"Willis Todd (father",
				"deceased)",
				"Sheila Haywood (mother",
				"deceased)",
				"Catherine Ann Todd (adoptive mother",
				"deceased)",
				"Bruce Wayne (adoptive father)",
				"Dick Grayson and Tim Drake (adoptive brothers)"
			]
		}
	},
	{
		"id": "red-hulk",
		"name": "Red Hulk",
		"realName": "Thaddeus E. Ross",
		"stats": {
			"intelligence": 50,
			"strength": 100,
			"speed": 47,
			"durability": 85,
			"power": 82,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-hulk.jpg",
		"biography": {
			"full_name": "Thaddeus E. Ross",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rulk",
				"Hulk",
				"Thunderbolt",
				"General Ross"
			],
			"place_of_birth": "-",
			"first_appearance": "Incredible Hulk #1 (May, 1962)(as General Ross), Hulk Vol 2 #1 (March, 2008) (as Red Hulk)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "7'0 // 213 cm",
			"weight": "1400 lb // 630 kg",
			"eye_color": "Yellow",
			"hair_color": "Black",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"Lieutenant general in US Air Force"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Code Red",
				"AIM",
				"Formerly Offenders"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "red-mist",
		"name": "Red Mist",
		"realName": "Chris Genovese",
		"stats": {
			"intelligence": 25,
			"strength": 10,
			"speed": 23,
			"durability": 14,
			"power": 20,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-mist.jpg",
		"biography": {
			"full_name": "Chris Genovese",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Red Mist"
			],
			"place_of_birth": "-",
			"first_appearance": "Kick-Ass #5",
			"publisher": "Icon Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Johnny G (father)"
			]
		}
	},
	{
		"id": "red-robin",
		"name": "Red Robin",
		"realName": "Tim Drake",
		"stats": {
			"intelligence": 81,
			"strength": 11,
			"speed": 27,
			"durability": 32,
			"power": 29,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-robin.jpg",
		"biography": {
			"full_name": "Timothy Jackson Drake",
			"alter_egos": [
				"Robin III"
			],
			"aliases": [
				"Alvin Draper",
				"Batman",
				"Robin",
				"Timothy Wayne",
				"Time Drake"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "Batman #436 (August, 1989)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City",
				"Titans Tower, San Francisco"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"Batman Family",
				"Batman Inc.",
				"Wayne Enterprises",
				"formerly Young Justice"
			],
			"relatives": [
				"Jack Drake (father",
				"deceased)",
				"Janet Drake (mother",
				"deceased)",
				"Dana Winters Drake (step-mother",
				"status unknown)",
				"Bruce Wayne (adoptive father)",
				"Damian Wayne (adoptive brother)",
				"Dick Grayson (adoptive brother)",
				"Jason Todd (adoptive brother)",
				"Cassandra Cain (adoptive sister)"
			]
		}
	},
	{
		"id": "red-skull",
		"name": "Red Skull",
		"realName": "Johann Shmidt",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 19,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-skull.jpg",
		"biography": {
			"full_name": "Johann Shmidt",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Dell Rusk",
				"Bettman P. Lyles",
				"the Agent of a Thousand Faces",
				"The Man",
				"Cyrus Fenton",
				"Teacher",
				"Tod March",
				"John Smith",
				"Aleksander Lukin."
			],
			"place_of_birth": "An unidentified village in Germany",
			"first_appearance": "Captain America Comics #1 (1941), (modern) Tales of Suspense #66 (1965)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Special operative in the government of Germany's Third Reich",
				"former leader of most currently active Nazi subversives throughout the world",
				"former ally of THEM and A.I.M.",
				"former leader of the Nevada-based fragment of Hydra",
				"leader of the People's Militia"
			],
			"relatives": [
				"Hermann Shmidt (father",
				"deceased)",
				"Martha Shmidt (mother",
				"deceased)",
				"Sinthea Shmidt (Mother Superior/Sin",
				"daughter)"
			]
		}
	},
	{
		"id": "red-tornado",
		"name": "Red Tornado",
		"realName": "John Smith",
		"stats": {
			"intelligence": 75,
			"strength": 38,
			"speed": 67,
			"durability": 60,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/red-tornado.jpg",
		"biography": {
			"full_name": "John Smith",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ulthoon",
				"Tornado Tyrant of Rann",
				"Tornado Champion",
				"Tornado Man Dreaming",
				"\"Reddy\""
			],
			"place_of_birth": "-",
			"first_appearance": "As Red Tornado: Justice League of America #64, As Ulthoon: Mystery in Space #61",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'1 // 185 cm",
			"weight": "325 lb // 146 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Happy Harbor, Rhode Island"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"formerly Parliament of Vapors",
				"T.O. Morrow",
				"Justice Society of America",
				"Young Justice",
				"Primal Force",
				"Leymen",
				"Donna Troy"
			],
			"relatives": [
				"T.O. Morrow (creator/father)",
				"Red Volcano (brother",
				"deceased)",
				"Red Inferno (brother",
				"deceased)",
				"Red Torpedo (sister",
				"deceased)",
				"Tomorrow Woman (\"sister\")",
				"Kathy Sutton (wife)",
				"Traya Sutton (adoptive daughter)"
			]
		}
	},
	{
		"id": "redeemer-ii",
		"name": "Redeemer II",
		"realName": "Phil Timper",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/redeemer-ii.jpg",
		"biography": {
			"full_name": "Phil Timper",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Spawn #31",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "redeemer-iii",
		"name": "Redeemer III",
		"realName": "Eddie Frank",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/redeemer-iii.jpg",
		"biography": {
			"full_name": "Eddie Frank",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "renata-soliz",
		"name": "Renata Soliz",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/renata-soliz.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "rey",
		"name": "Rey",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 8,
			"speed": 21,
			"durability": 10,
			"power": 87,
			"combat": 35
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rey.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Jakku",
			"first_appearance": "Star Wars: Episode VII - The Force Awakens (2015)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'57 // 297 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Hazel",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Scavenger"
			],
			"base": [
				"Jakku"
			]
		},
		"connections": {
			"group_affiliation": [
				"Resistence"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "rhino",
		"name": "Rhino",
		"realName": "Aleksei Mikhailovich Sytsevich",
		"stats": {
			"intelligence": 25,
			"strength": 80,
			"speed": 43,
			"durability": 90,
			"power": 36,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rhino.jpg",
		"biography": {
			"full_name": "Aleksei Mikhailovich Sytsevich",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Alex O'Hirn",
				"Mecha-Rhino"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #41",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "6'5 // 196 cm",
			"weight": "710 lb // 320 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional Criminal",
				"Henchman of the Russian Mafia"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinister Syndicate"
			],
			"relatives": [
				"Miriam Sytsevich (mother",
				"deceased)",
				"Alexia (niece",
				"lastname unrevealed)",
				"unnamed grandmother"
			]
		}
	},
	{
		"id": "rick-flag",
		"name": "Rick Flag",
		"realName": "Richard Rogers Flag",
		"stats": {
			"intelligence": 88,
			"strength": 11,
			"speed": 23,
			"durability": 28,
			"power": 19,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rick-flag.jpg",
		"biography": {
			"full_name": "Richard Rogers Flag",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Brave and the Bold #25 (September 1959)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "189 lb // 85 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Government Agent",
				"Covert Ops field Commander"
			],
			"base": [
				"Belle Reve, Louisiana"
			]
		},
		"connections": {
			"group_affiliation": [
				"Suicide Squad",
				"Task Force X"
			],
			"relatives": [
				"Richard Flag",
				"Sr. (father",
				"deceased)",
				"Richard Flag III (son)",
				"Karin Grace (mother of child)"
			]
		}
	},
	{
		"id": "riddler",
		"name": "Riddler",
		"realName": "Edward Nigma",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 10,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/riddler.jpg",
		"biography": {
			"full_name": "Edward Nigma",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"E. Nigma",
				"Edward E. Nigma"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #140 (1948)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "rip-hunter",
		"name": "Rip Hunter",
		"realName": "Richard Hunter",
		"stats": {
			"intelligence": 100,
			"strength": 8,
			"speed": 8,
			"durability": 10,
			"power": 100,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rip-hunter.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Time Lord",
				"Time Master",
				"Boppy",
				"Dr. Hunter",
				"Mr",
				"Hunter",
				"Carter"
			],
			"place_of_birth": "-",
			"first_appearance": "Showcase #20",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Time Lab, Arizona"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly leader of the Time Masters",
				"former member of the Forgotten Heroes",
				"former member of the Linear Men",
				"Booster Gold International (BGI)"
			],
			"relatives": [
				"Michael Carter",
				"(Booster Gold",
				"father)",
				"Unknown (mother)",
				"Jonar Carter (grandfather)",
				"Ellen Carter (grandmother",
				"deceased)",
				"Michelle Carter (Goldstar) (aunt)",
				"Daniel Carter (21st century ancestor)",
				"Rose Levin (ancestor)",
				"Dan Hunter (cousin)",
				""
			]
		}
	},
	{
		"id": "ripcord",
		"name": "Ripcord",
		"realName": "Miranda Leevald",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/ripcord.jpg",
		"biography": {
			"full_name": "Miranda Leevald",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly prostitute."
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "robin-i",
		"name": "Robin I",
		"realName": "Dick Grayson",
		"stats": {
			"intelligence": 88,
			"strength": 11,
			"speed": 27,
			"durability": 28,
			"power": 32,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/robin-i.jpg",
		"biography": {
			"full_name": "Richard John Grayson",
			"alter_egos": [
				"Batman II",
				"Nightwing"
			],
			"aliases": [
				"Renegade",
				"The Target",
				"Freddie Dinardo"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #38 (April, 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Wayne Tower, Gotham City",
				"formerly the Batcave",
				"formerly Bl�dhaven",
				"formerly New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Batman Incorporated",
				"Justice League",
				"formerly Teen Titans",
				"Outsiders",
				"Bludhaven Police Department",
				"Secret Society of Super-Villains"
			],
			"relatives": [
				"John Grayson (father)",
				"Mary Grayson (mother)",
				"Bruce Wayne (adoptive father)",
				"Damian Wayne (adoptive brother)",
				"Jason Todd (adoptive brother)",
				"Tim Drake (adoptive brother)",
				"Cassandra Cain (adoptive sister)"
			]
		}
	},
	{
		"id": "robin-ii",
		"name": "Robin II",
		"realName": "Jason Todd",
		"stats": {
			"intelligence": 75,
			"strength": 11,
			"speed": 27,
			"durability": 28,
			"power": 28,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/robin-ii.jpg",
		"biography": {
			"full_name": "Jason Peter Todd",
			"alter_egos": [
				"Red Hood"
			],
			"aliases": [
				"Red Hood",
				"Red Robin",
				"Batman",
				"Nightwing",
				"Wingman",
				"Jaybird",
				"Arkham Knight"
			],
			"place_of_birth": "-",
			"first_appearance": "Detective Comics #524",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Teen Titans",
				"Challengers from Beyond"
			],
			"relatives": [
				"Willis Todd (father)",
				"Sheila Haywood (mother)",
				"Catherine Todd (step-mother)",
				"Bruce Wayne (Batman",
				"adoptive father)",
				"Damian Wayne (Robin V",
				"adoptive brother)",
				"Dick Grayson (Robin I",
				"adoptive brother)",
				"Timothy Drake (Robin III",
				"adoptive brother)",
				"Cassandra Cain (Batgirl IV",
				"adoptive sister)"
			]
		}
	},
	{
		"id": "robin-iii",
		"name": "Robin III",
		"realName": "Tim Drake",
		"stats": {
			"intelligence": 81,
			"strength": 11,
			"speed": 27,
			"durability": 28,
			"power": 29,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/robin-iii.jpg",
		"biography": {
			"full_name": "Timothy Jackson Drake",
			"alter_egos": [
				"Red Robin"
			],
			"aliases": [
				"Alvin Draper",
				"Batman",
				"Robin",
				"Timothy Wayne"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman #436 (August, 1989)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"High School Student"
			],
			"base": [
				"Gotham City",
				"Titans Tower, San Francisco"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"Batman Family",
				"Batman Inc.",
				"Wayne Enterprises",
				"formerly Young Justice"
			],
			"relatives": [
				"Jack Drake (father",
				"deceased)",
				"Janet Drake (mother",
				"deceased)",
				"Dana Winters Drake (step-mother",
				"status unknown)",
				"Bruce Wayne (Batman",
				"adoptive father)",
				"Damian Wayne (Robin V",
				"adoptive brother)",
				"Dick Grayson (Robin I",
				"adoptive brother)",
				"Jason Todd (Robin II",
				"adoptive brother)",
				"Cassandra Cain (Batgirl IV",
				"adoptive sister)"
			]
		}
	},
	{
		"id": "robin-v",
		"name": "Robin V",
		"realName": "Damian Wayne",
		"stats": {
			"intelligence": 69,
			"strength": 8,
			"speed": 33,
			"durability": 16,
			"power": 29,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/robin-v.jpg",
		"biography": {
			"full_name": "Damian Wayne",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Batman",
				"Damian al Ghul",
				"Ibn al Xu'ffasch",
				"Redbird"
			],
			"place_of_birth": "-",
			"first_appearance": "Batman: Son of the Demon",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "4'6 // 137 cm",
			"weight": "84 lb // 38 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Batman Family",
				"Batman Inc.",
				"Wayne Enterprises",
				"formerly Teen Titans",
				"League of Assassins"
			],
			"relatives": [
				"Talia al Ghul (mother)",
				"Bruce Wayne (Batman",
				"father)",
				"Ra's Al Ghul (maternal grandfather)",
				"Melisande (maternal grandmother)",
				"Thomas Wayne (paternal grandfather)",
				"Martha Wayne (paternal grandmother)",
				"Sensei (great-grandfather)",
				"Simon Hurt (ancestor)",
				"Nyssa Raatko (aunt",
				"deceased)",
				"Dusan al Ghul (White Ghost",
				"uncle",
				"deceased)",
				"Richard Grayson (Nightwing",
				"adoptive brother)",
				"Tim Drake (Red Robin",
				"adoptive brother)",
				"Cassandra Cain (Batgirl IV",
				"adoptive sister)",
				"Jason Todd (Red Hood",
				"adoptive brother)",
				"Patrick Wayne (great-grandfather",
				"deceased)",
				"Charles Wayne (great-great-grandfather",
				"deceased)",
				"Constance Wayne (great-great-grandmother",
				"deceased)",
				"Alan Wayne (ancestor",
				"deceased)",
				"Solomon Wayne (ancestor",
				"deceased)",
				"Darius Wayne (ancestor",
				"deceased)",
				"Joshua Wayne (ancestor",
				"deceased)"
			]
		}
	},
	{
		"id": "robin-vi",
		"name": "Robin VI",
		"realName": "Carrie Kelley",
		"stats": {
			"intelligence": 50,
			"strength": 8,
			"speed": 25,
			"durability": 20,
			"power": 17,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/robin-vi.jpg",
		"biography": {
			"full_name": "Carrie Kelley",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "rocket-raccoon",
		"name": "Rocket Raccoon",
		"realName": "Rocket Raccoon",
		"stats": {
			"intelligence": 50,
			"strength": 5,
			"speed": 23,
			"durability": 28,
			"power": 28,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rocket-raccoon.jpg",
		"biography": {
			"full_name": "Rocket Raccoon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sharpshooting Space Racoon",
				"Rocky Raccoon",
				"Ranger Rocket"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Preview #7 (June, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Animal",
			"height": "4'0 // 122 cm",
			"weight": "55 lb // 25 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Law enforcement officer",
				"security guard",
				"member of the Guardians of the Galaxy"
			],
			"base": [
				"Knowhere",
				"Formerly Hala, mobile aboard the Rakk'n'Ruin Halfworld, Keystone Quadrant"
			]
		},
		"connections": {
			"group_affiliation": [
				"Guardians of the Galaxy",
				"Formerly Star-Lord's unnamed commando team"
			],
			"relatives": [
				"Lylla (mate)"
			]
		}
	},
	{
		"id": "rogue",
		"name": "Rogue",
		"realName": "Anna Marie",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 80,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rogue.jpg",
		"biography": {
			"full_name": "Anna Marie",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Anna Raven",
				"Doctor Kellogg",
				"Mutate 9602",
				"Irene Adler",
				"Miss Smith"
			],
			"place_of_birth": "Caldecott County, Mississippi",
			"first_appearance": "Avengers Annual #10 (1981)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Green",
			"hair_color": "Brown / White"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former mechanic",
				"waitress",
				"terrorist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly X-Treme Sanctions Executive",
				"X-Treme X-Men",
				"Brotherhood of Evil Mutants"
			],
			"relatives": [
				"Owen (father)",
				"Priscilla (mother)",
				"Carrie (aunt)",
				"Raven Darkh�lme (Mystique",
				"foster mother)",
				"Kurt Wagner (Nightcrawler",
				"foster brother)",
				"Graydon Creed (foster brother",
				"deceased)"
			]
		}
	},
	{
		"id": "ronin",
		"name": "Ronin",
		"realName": "Clint Barton",
		"stats": {
			"intelligence": 56,
			"strength": 12,
			"speed": 21,
			"durability": 10,
			"power": 13,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ronin.jpg",
		"biography": {
			"full_name": "Clinton Francis Barton",
			"alter_egos": [
				"Goliath",
				"Hawkeye"
			],
			"aliases": [
				"Formerly Hawkeye",
				"the Marksman",
				"'Br'er Hawkeye'",
				"Superhuman Cellblock Prisoner 334556",
				"Longbow",
				"Goliath",
				"Father Time",
				"Louis",
				"Robin Hood",
				"the Hawkeye Kid",
				"Golden Archer",
				"'Purple Man'",
				"impersonated Constrictor & Dreadknight"
			],
			"place_of_birth": "Waverly, Iowa",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'3 // 191 cm",
			"weight": "230 lb // 104 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Outlaw adventurer",
				"revolutionary",
				"former professional super hero",
				"fugitive",
				"unnoficial S.H.I.E.L.D. operative",
				"federal inmate",
				"CTE security chief",
				"ranch hand",
				"archery tutor",
				"carnival performer",
				"roustabout",
				"butcher shop worker"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"formerly founding member of Avengers West Coast and first chairman",
				"Thunderbolts",
				"S.H.I.E.L.D. (unofficial)",
				"Chain Gang 421-011",
				"Shadows",
				"Great Lakes Avengers",
				"Cross Technological Enterprises",
				"Defenders",
				"Carson Carnival of Traveling Wonders",
				"Ti"
			],
			"relatives": [
				"Harold Barton (father)",
				"Edith Barton (mother)",
				"Charles Bernard \"Barney\" Barton (brother)",
				"Barbara Morse 'Bobbi' Barton (Mockingbird",
				"wife)",
				"Brett Barton (ancestor)",
				"Mack Barton (ancestor)",
				"all deceased"
			]
		}
	},
	{
		"id": "rorschach",
		"name": "Rorschach",
		"realName": "Walter Joseph Kovacs",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 29,
			"durability": 20,
			"power": 23,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/rorschach.jpg",
		"biography": {
			"full_name": "Walter Joseph Kovacs",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Watchmen #1 (September, 1986)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'6 // 168 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"former garment worker"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Crimebusters"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sabretooth",
		"name": "Sabretooth",
		"realName": "Victor Creed",
		"stats": {
			"intelligence": 56,
			"strength": 48,
			"speed": 38,
			"durability": 90,
			"power": 50,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sabretooth.jpg",
		"biography": {
			"full_name": "Victor Creed",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Slasher",
				"El Tigre"
			],
			"place_of_birth": "-",
			"first_appearance": "Iron Fist #14 (August, 1977)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'6 // 198 cm",
			"weight": "380 lb // 171 kg",
			"eye_color": "Amber",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"mercenary",
				"professional criminal",
				"assassin",
				"serial killer"
			],
			"base": [
				"mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Weapon X",
				"Marauders",
				"Brotherhood of Evil Mutants"
			],
			"relatives": [
				"Grayden Creed (son",
				"deceased)"
			]
		}
	},
	{
		"id": "sage",
		"name": "Sage",
		"realName": "Tessa",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 28,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sage.jpg",
		"biography": {
			"full_name": "Tessa",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "X-MEN Vol. 1 #132",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'7' // 170 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Soldier"
			],
			"base": [
				"Base of operations unknown"
			]
		},
		"connections": {
			"group_affiliation": [
				"Excalibur",
				"formerly X-Men",
				"X-Treme Sanctions Executive",
				"X-Treme X-Men",
				"Hellfire Club"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sandman",
		"name": "Sandman",
		"realName": "William Baker",
		"stats": {
			"intelligence": 44,
			"strength": 75,
			"speed": 46,
			"durability": 90,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sandman.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Flint Marko",
				"Sylvester Mann",
				"Quarryman"
			],
			"place_of_birth": "Queens, New York",
			"first_appearance": "Amazing Spider-Man #4 (September, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "450 lb // 203 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional Criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"(Formerly) Sinister Twelve",
				"the Sinister Six",
				"the Frightful Four",
				"the Outlaws and the Wild Pack",
				"reserve member of the Avengers"
			],
			"relatives": [
				"Mrs. Baker (mother)",
				"unidentified cousin"
			]
		}
	},
	{
		"id": "sasquatch",
		"name": "Sasquatch",
		"realName": "Walter Langkowski",
		"stats": {
			"intelligence": 75,
			"strength": 80,
			"speed": 23,
			"durability": 56,
			"power": 15,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sasquatch.jpg",
		"biography": {
			"full_name": "Walter Langkowski",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Box",
				"Wanda Langkowski"
			],
			"place_of_birth": "Edmonton, Alberta, Canada",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "10' // 305 cm",
			"weight": "2000 lb // 900 kg",
			"eye_color": "Red",
			"hair_color": "Orange"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"bio-physicist",
				"government operative",
				"former college lecturer",
				"professional football player"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Omega Flight",
				"formerly Alpha Flight",
				"Beta Flight",
				"Gamma Flight",
				"Howling Commandos"
			],
			"relatives": [
				"Veronica Langkowsi (ex-wife)",
				"unidentified son",
				"Lillian von Loont (Gilded Lily",
				"great-aunt",
				"deceased)"
			]
		}
	},
	{
		"id": "sauron",
		"name": "Sauron",
		"realName": "Sauron",
		"stats": {
			"intelligence": 88,
			"strength": 85,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sauron.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Annatar",
				"Gorthaur the Cruel",
				"Sauron the Dark",
				"The Necromancer",
				"Dark Lord of Mordor",
				"Lord of the Rings",
				"The Great Eye"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "J. R. R. Tolkien",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Maiar",
			"height": "9'2 // 279 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "savage-dragon",
		"name": "Savage Dragon",
		"realName": "Kurr",
		"stats": {
			"intelligence": 63,
			"strength": 70,
			"speed": 54,
			"durability": 85,
			"power": 66,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/savage-dragon.jpg",
		"biography": {
			"full_name": "Kurr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Image Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Liberty League",
				"Chicago Police Department",
				"Special Operations Strikeforce (S.O.S.)"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "scarecrow",
		"name": "Scarecrow",
		"realName": "Jonathan Crane",
		"stats": {
			"intelligence": 81,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 48,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scarecrow.jpg",
		"biography": {
			"full_name": "Jonathan Crane",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "WORLD'S FINEST COMICS #3 (Fall, 1941)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Special Professional Criminal"
			],
			"base": [
				"Gotham City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Injustice Gang"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "scarlet-spider",
		"name": "Scarlet Spider",
		"realName": "Benjamin Reilly",
		"stats": {
			"intelligence": 75,
			"strength": 53,
			"speed": 60,
			"durability": 74,
			"power": 46,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scarlet-spider.jpg",
		"biography": {
			"full_name": "Benjamin Reilly",
			"alter_egos": [
				"Spider-Carnage"
			],
			"aliases": [
				"Spider-Clone",
				"Spider-Man"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "Amazing Spider-Man # 149 (as Spider-Clone); Web of Spider-Man # 117 (as Ben Reilly)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10' // 178 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Crime-fighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"formerly New Warriors"
			],
			"relatives": [
				"Peter Parker (clone of)",
				"May Parker (Aunt)",
				"Ben Parker (Uncle)"
			]
		}
	},
	{
		"id": "scarlet-spider-ii",
		"name": "Scarlet Spider II",
		"realName": "Kaine Parker",
		"stats": {
			"intelligence": 88,
			"strength": 55,
			"speed": 60,
			"durability": 40,
			"power": 37,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scarlet-spider-ii.jpg",
		"biography": {
			"full_name": "Kaine Parker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Tarantula",
				"Kaine",
				"Ara�a Escarlata"
			],
			"place_of_birth": "-",
			"first_appearance": "Web of Spider-Man #119 (December, 1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Clone",
			"height": "6'4 // 193 cm",
			"weight": "250 lb // 113 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Fugitive"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Miles Warren (creator)",
				"Peter Parker (Spider-Man",
				"genetic template)",
				"Ben Reilly (Scarlet Spider",
				"fellow clone",
				"deceased)",
				"Spidercide (fellow clone",
				"allegedly deceased)",
				"Guardian (fellow clone",
				"deceased)",
				"Jack (fellow clone",
				"deceased)"
			]
		}
	},
	{
		"id": "scarlet-witch",
		"name": "Scarlet Witch",
		"realName": "Wanda Maximoff",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 29,
			"durability": 70,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scarlet-witch.jpg",
		"biography": {
			"full_name": "Wanda Maximoff",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Wanda Frank",
				"Wanda Magnus",
				"Ana Maximoff",
				"Gypsy Witch",
				"The Witch"
			],
			"place_of_birth": "Wundagore Mountain, Transia",
			"first_appearance": "Uncanny X-Men #4 (March, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'7 // 170 cm",
			"weight": "132 lb // 59 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly witchcraft tutor",
				"housewife",
				"terrorist"
			],
			"base": [
				"Mobile",
				"formerly The Works",
				"Avengers Compound, California",
				"Avengers Mansion, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"Formerly Avengers",
				"Avengers West Coast",
				"Force Works",
				"Queen's Vengeance",
				"Secret Defenders",
				"Lady Liberators",
				"Brotherhood of Evil Mutants"
			],
			"relatives": [
				"Pietro (Quicksilver",
				"twin brother)",
				"Magnus (Magneto",
				"father)",
				"Magda Lehnsherr (mother",
				"deceased)",
				"Anya (half-sister",
				"deceased)",
				"Lorna Dane (Polaris",
				"half-sister)",
				"Vision (estranged husband)",
				"Django Maximoff (foster father",
				"deceased)",
				"Marya Maximoff (foster mother",
				"deceased)",
				"Crystal (sister-in-law)",
				"Luna (niece)",
				"Tommy & Billy (reincarnated sons)",
				"Talia Wagner (Nocturne",
				"alternate reality daughter)"
			]
		}
	},
	{
		"id": "scorpia",
		"name": "Scorpia",
		"realName": "Elaine Coll",
		"stats": {
			"intelligence": 38,
			"strength": 28,
			"speed": 42,
			"durability": 28,
			"power": 34,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scorpia.jpg",
		"biography": {
			"full_name": "Elaine Coll",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Spider-Man: Power of Terror limited series #2 (1995)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Professional criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Hells Kitchen Mob",
				"formerly Sinister Seven",
				"allied with Silvermane"
			],
			"relatives": [
				"Vincent Coll (grandfather",
				"deceased)"
			]
		}
	},
	{
		"id": "scorpion",
		"name": "Scorpion",
		"realName": "MacDonald Gargan",
		"stats": {
			"intelligence": 50,
			"strength": 52,
			"speed": 60,
			"durability": 85,
			"power": 49,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/scorpion.jpg",
		"biography": {
			"full_name": "MacDonald Gargan",
			"alter_egos": [
				"Venom III"
			],
			"aliases": [
				"Venom",
				"Spider-Man"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #19 (1964)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'11 // 211 cm",
			"weight": "689 lb // 310 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"U.S. government agent",
				"former professional criminal",
				"assassin",
				"private detective"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers (Osborn's team)",
				"formerly Thunderbolts",
				"Masters of Evil",
				"\"Spider-Man Revenge League\"",
				"Sinister Twelve",
				"formerly partners with Mister Hyde and Delilah"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sebastian-shaw",
		"name": "Sebastian Shaw",
		"realName": "Sebastian Hiram Shaw",
		"stats": {
			"intelligence": 63,
			"strength": 85,
			"speed": 12,
			"durability": 95,
			"power": 36,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sebastian-shaw.jpg",
		"biography": {
			"full_name": "Sebastian Hiram Shaw",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sentry",
		"name": "Sentry",
		"realName": "Robert Reynolds",
		"stats": {
			"intelligence": 75,
			"strength": 100,
			"speed": 100,
			"durability": 84,
			"power": 100,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sentry.jpg",
		"biography": {
			"full_name": "Robert Reynolds",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Void",
				"Bob",
				"Golden Guardian of Good",
				"John Victor Williams",
				"Scout"
			],
			"place_of_birth": "-",
			"first_appearance": "Sentry #1 (September, 2000)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'2 // 188 cm",
			"weight": "194 lb // 87 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"The Watchtower (on top of Stark Tower, where it was formerly located before all memory of him disappeared)"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Horsemen of Death",
				"Osborn's Avengers",
				"Mighty Avengers",
				"New Avengers",
				"partner of Scout"
			],
			"relatives": [
				"Lindy Reynolds (wife",
				"deceased)",
				"Mrs. Reynolds (mother)"
			]
		}
	},
	{
		"id": "shadow-king",
		"name": "Shadow King",
		"realName": "Amahl Farouk",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 27,
			"durability": 100,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shadow-king.jpg",
		"biography": {
			"full_name": "Amahl Farouk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Professor X",
				"Ananasi",
				"Amahl Farouk",
				"Evil One",
				"Master of the Games",
				"he also impersonated the following mind-controlled subjects (in chronological order): Alexander Flynn",
				"Karma",
				"Cypher",
				"Jacob Reisz",
				"Donald Pierce and probably others"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men #117 (1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "330 lb // 149 kg",
			"eye_color": "Red",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"The Astral Plane",
				"Formerly Cairo, Egypt."
			]
		},
		"connections": {
			"group_affiliation": [
				"Shadow Mob",
				"former head of the Gladiators and the Cairo�s Thieves Quarter"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "shadow-lass",
		"name": "Shadow Lass",
		"realName": "Tasmia Mallor",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 67,
			"durability": 20,
			"power": 79,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shadow-lass.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Talok VIII",
			"first_appearance": "Adventure Comics #365",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Talokite",
			"height": "5'8 // 173 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Black",
			"hair_color": "Black",
			"skin_color": "Blue"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "shadowcat",
		"name": "Shadowcat",
		"realName": "Kitty Pryde",
		"stats": {
			"intelligence": 88,
			"strength": 8,
			"speed": 21,
			"durability": 25,
			"power": 69,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shadowcat.jpg",
		"biography": {
			"full_name": "Katherine Pryde",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kitty Pryde",
				"Ariel",
				"Sprite",
				"Cat"
			],
			"place_of_birth": "Deerfield, Illinois",
			"first_appearance": "X-Men #129 (January, 1980)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'6 // 168 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Hazel",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Teacher",
				"Adventurer",
				"former student"
			],
			"base": [
				"Xavier Insitute for Higher Learning, Salem Center, New York, formerly Muir Island off the coast of Scotland, formerly Excalibur's Lighthouse, formerly Braddock Manor, England"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (New Charles Xavier School member)",
				"X-Men (Past) (tutor)",
				"formerly X-Men",
				"Murder Circus (brainwashed)",
				"Lights (liaison)",
				"Paladins Squad",
				"S.H.I.E.L.D.",
				"Gladiators",
				"Excalibur (founding member)",
				"New Mutants",
				"Knights of Wundagore"
			],
			"relatives": [
				"Kate (maternal great-grandmother)",
				"Samuel Prydeman (paternal grandfather",
				"deceased)",
				"Chava Rosanoff (paternal great-aunt",
				"deceased)",
				"Mr. Rosanoff (paternal great-uncle",
				"apparently deceased)",
				"Nina (aunt)",
				"Carmen Pryde (father",
				"deceased)",
				"Theresa Pryde (mother)",
				"Kenny (cousin)"
			]
		}
	},
	{
		"id": "shang-chi",
		"name": "Shang-Chi",
		"realName": "Shang-Chi",
		"stats": {
			"intelligence": 63,
			"strength": 12,
			"speed": 30,
			"durability": 50,
			"power": 29,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shang-chi.jpg",
		"biography": {
			"full_name": "Shang-Chi",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Master of Kung Fu",
				"The Rising and Advancing of the Spirit",
				"Chinaman (by Jack Tarr)"
			],
			"place_of_birth": "-",
			"first_appearance": "Special Marvel Edition #15 (December, 1973)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"MI-5",
				"MI-6",
				"\"Marvel Knights\"",
				"Heroes For Hire",
				"Freelance Restorations",
				"Si-Fan",
				"Secret Avengers"
			],
			"relatives": [
				"Fu Manchu",
				"father",
				"unnamed mother",
				"Fah Lo Suee",
				"(half-sister)",
				"Whispering Shadow (half-brother",
				"deceased)"
			]
		}
	},
	{
		"id": "shatterstar",
		"name": "Shatterstar",
		"realName": "Gaveedra Seven",
		"stats": {
			"intelligence": 63,
			"strength": 48,
			"speed": 45,
			"durability": 64,
			"power": 49,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shatterstar.jpg",
		"biography": {
			"full_name": "Gaveedra Seven",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Benjamin Russell"
			],
			"place_of_birth": "Mojoworld",
			"first_appearance": "New Mutants #99",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'3 // 191 cm",
			"weight": "195 lb // 88 kg",
			"eye_color": "Brown",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Warrior"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Force",
				"Blood Cadre Alliance (former member)"
			],
			"relatives": [
				"Longshot (father)",
				"Dazzler (mother)",
				"Mojo V"
			]
		}
	},
	{
		"id": "she-hulk",
		"name": "She-Hulk",
		"realName": "Jennifer Walters",
		"stats": {
			"intelligence": 81,
			"strength": 100,
			"speed": 42,
			"durability": 100,
			"power": 40,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/she-hulk.jpg",
		"biography": {
			"full_name": "Jennifer Walters",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Jade Giantess"
			],
			"place_of_birth": "Los Angeles, California",
			"first_appearance": "She-Hulk (Vol. 1) #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "6'7 // 201 cm",
			"weight": "700 lb // 315 kg",
			"eye_color": "Green",
			"hair_color": "Green"
		},
		"work": {
			"occupation": [
				"Lawyer",
				"Magistra of the Living Tribunal"
			],
			"base": [
				"Law offices of Goodman, Lieber, Kurtzberg, & Holliway",
				"formerly Avengers Mansion",
				"Baxter Building, Four Freedoms Plaza"
			]
		},
		"connections": {
			"group_affiliation": [
				"Goodman",
				"Lieber",
				"Kurtzberg",
				"& Holliway",
				"formerly Avengers",
				"Fantastic Four",
				"Heroes for Hire"
			],
			"relatives": [
				"Bruce Banner (Hulk",
				"cousin)"
			]
		}
	},
	{
		"id": "she-thing",
		"name": "She-Thing",
		"realName": "Sharon Ventura",
		"stats": {
			"intelligence": 69,
			"strength": 72,
			"speed": 21,
			"durability": 80,
			"power": 23,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/she-thing.jpg",
		"biography": {
			"full_name": "Sharon Ventura",
			"alter_egos": [
				"Ms Marvel II"
			],
			"aliases": [
				"Thing",
				"Ms Marvel"
			],
			"place_of_birth": "-",
			"first_appearance": "Thing #27",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human / Radiation",
			"height": "6'0 // 183 cm",
			"weight": "340 lb // 153 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Prisoner",
				"former adventurer",
				"wrestler",
				"stuntwoman",
				"scuba diver",
				"motorcycle performer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Frightful Four",
				"formerly Fantastic Four",
				"Unlimited Class Wrestling Federation",
				"Thunderiders"
			],
			"relatives": [
				"Jack Ventura (father",
				"deceased)",
				"Mrs. Ventura (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "shocker",
		"name": "Shocker",
		"realName": "Herman Schultz",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 23,
			"durability": 70,
			"power": 79,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shocker.jpg",
		"biography": {
			"full_name": "Herman Schultz",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #46",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Professional thief",
				"hired assassin"
			],
			"base": [
				"New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Masters of Evil",
				"Sinister Syndicate",
				"Sinister Seven",
				"Sinister Twelve"
			],
			"relatives": [
				"Mr. & Mrs. Schultz (parents)"
			]
		}
	},
	{
		"id": "shriek",
		"name": "Shriek",
		"realName": "Frances Louise Barrison",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 45,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/shriek.jpg",
		"biography": {
			"full_name": "Frances Louise Barrison",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sandra Deel"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Yellow / Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former partner of Carnage",
				"Carrion (Malcolm McBride)",
				"Demogoblin and Doppelganger). Before she became Shriek",
				"she was a rock band groupie and drug dealer."
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Carnage Family"
			],
			"relatives": [
				"Carnage (adopted husband)",
				"Carrion (Malcolm McBride) and Demogoblin (adopted sons)",
				"Doppelganger (adopted pet)"
			]
		}
	},
	{
		"id": "shrinking-violet",
		"name": "Shrinking Violet",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/shrinking-violet.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sif",
		"name": "Sif",
		"realName": "Sif",
		"stats": {
			"intelligence": 63,
			"strength": 90,
			"speed": 67,
			"durability": 80,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sif.jpg",
		"biography": {
			"full_name": "Sif",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lady Sif",
				"Erika Velez",
				"Mrs. Chambers",
				"Sybil"
			],
			"place_of_birth": "-",
			"first_appearance": "Journey into Mystery #102 (March, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Asgardian",
			"height": "6'2 // 188 cm",
			"weight": "425 lb // 191 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Broxton/Asgard",
				"Formerly New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Gods of Asgard"
			],
			"relatives": [
				"Heimdall (brother)"
			]
		}
	},
	{
		"id": "silk",
		"name": "Silk",
		"realName": "Cindy Moon",
		"stats": {
			"intelligence": 75,
			"strength": 48,
			"speed": 71,
			"durability": 70,
			"power": 71,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/silk.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man Vol 3 #4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"intern at Fact Channel News",
				"adventurer",
				"former student"
			],
			"base": [
				"Sims Tower, Times Square, Manhattan, New York City, New York",
				"formerly Sims Tower, Times Square, Manhattan, New York City, New York, Earth-3145",
				"Central Park, Manhattan, New York City, New York, Earth-13"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Cat's Gang",
				"Fact Channel News",
				"formerly Spider-Army",
				"partner of Spider-Man",
				"Ezekiel Sims"
			],
			"relatives": [
				"Albert Moon. Sr. (father",
				"estranged)",
				"unnamed mother (estranged)",
				"Albert Moon",
				"Jr. (brother",
				"estranged)",
				"Spider-Man (Peter Parker",
				"bit by same spider)"
			]
		}
	},
	{
		"id": "silk-spectre-i",
		"name": "Silk Spectre I",
		"realName": "Sally Juspeczyk",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/silk-spectre-i.jpg",
		"biography": {
			"full_name": "Sally Juspeczyk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sally Jupiter"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Watchmen",
				"Minutemen"
			],
			"relatives": [
				"Silk Spectre II (daughter)"
			]
		}
	},
	{
		"id": "silk-spectre-ii",
		"name": "Silk Spectre II",
		"realName": "Laurie Juspeczyk",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/silk-spectre-ii.jpg",
		"biography": {
			"full_name": "Laurie Juspeczyk",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Watchmen"
			],
			"relatives": [
				"Silk Spectre I (mother)"
			]
		}
	},
	{
		"id": "silver-surfer",
		"name": "Silver Surfer",
		"realName": "Norrin Radd",
		"stats": {
			"intelligence": 56,
			"strength": 100,
			"speed": 100,
			"durability": 90,
			"power": 100,
			"combat": 32
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/silver-surfer.jpg",
		"biography": {
			"full_name": "Norrin Radd",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Zenn-La",
			"first_appearance": "Fantastic Four, Vol. 1 #48",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Alien",
			"height": "6'4 // 193 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "White",
			"hair_color": "No Hair",
			"skin_color": "Silver"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"formerly Galactus' Herald"
			],
			"base": [
				"mobile throughout the universe"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of Defenders",
				"former member of the Star Masters"
			],
			"relatives": [
				"Jartran Radd (father",
				"deceased)",
				"Elmar Radd (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "silverclaw",
		"name": "Silverclaw",
		"realName": "Maria de Guadalupe Santiago",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 35,
			"durability": 42,
			"power": 34,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/silverclaw.jpg",
		"biography": {
			"full_name": "Maria de Guadalupe Santiago",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"La Garra Argentado",
				"Daughter of the Volcano God",
				""
			],
			"place_of_birth": "The village of Kamekeri, Costa Verde",
			"first_appearance": "Avengers #8 (1998)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'2 // 157 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"University student",
				"adventurer"
			],
			"base": [
				"Empire State University and Avengers Mansion, New York City, NY"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Secret Avengers",
				"formerly reserve member of the Avengers"
			],
			"relatives": [
				"Jaime Santiago (father)",
				"Peliali (mother)",
				"Edwin Jarvis (\"uncle\")"
			]
		}
	},
	{
		"id": "simon-baz",
		"name": "Simon Baz",
		"realName": "Simoon Baz",
		"stats": {
			"intelligence": 56,
			"strength": 90,
			"speed": 42,
			"durability": 55,
			"power": 100,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/simon-baz.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern",
				"White Lantern"
			],
			"place_of_birth": "Dearborn, Michigan",
			"first_appearance": "The New 52: FCBD Special Edition #1 (June, 2012)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Bown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Sira Baz (sister)",
				"Farid Amar (nephew)",
				"Nazir Amar (brother in-law)"
			]
		}
	},
	{
		"id": "sinestro",
		"name": "Sinestro",
		"realName": "Thaal Sinestro",
		"stats": {
			"intelligence": 75,
			"strength": 85,
			"speed": 53,
			"durability": 64,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sinestro.jpg",
		"biography": {
			"full_name": "Thaal Sinestro",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Lantern",
				"White Lantern",
				"Yellow Lantern",
				"Parallax",
				"Indigo Lantern"
			],
			"place_of_birth": "Korugar City, Korugar",
			"first_appearance": "Green Lantern Vol 2 #7",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Korugaran",
			"height": "6'7 // 201 cm",
			"weight": "205 lb // 92 kg",
			"eye_color": "Black",
			"hair_color": "Black",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Ranx, Warworld. formerly New Korugar, Qward, Oa"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinestro Corps",
				"formerly Green Lantern Corps",
				"Secret Society",
				"Injustice League"
			],
			"relatives": [
				"Witch Queen (sister",
				"pre-Crisis)",
				"Soranik Natu (daughter)",
				"Arin Sur (wife",
				"deceased)",
				"Abin Sur (brother-in-law",
				"deceased)",
				"Amon Sur (nephew)"
			]
		}
	},
	{
		"id": "siren",
		"name": "Siren",
		"realName": "Hila",
		"stats": {
			"intelligence": 56,
			"strength": 62,
			"speed": 79,
			"durability": 60,
			"power": 92,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/siren.jpg",
		"biography": {
			"full_name": "Hila",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Aquaman #22 (August, 1965)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Atlantean",
			"height": "5'9 // 175 cm",
			"weight": "160 lb // 72 kg",
			"eye_color": "Blue",
			"hair_color": "Purple"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"formely Atlantis"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mera (twin sister)",
				"Aquaman (brother-in-law)"
			]
		}
	},
	{
		"id": "siren-ii",
		"name": "Siren II",
		"realName": "La Sirene la Bailene",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/siren-ii.jpg",
		"biography": {
			"full_name": "La Sirene la Bailene",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Atlantis",
			"first_appearance": "The Titans #5 (1999)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "siryn",
		"name": "Siryn",
		"realName": "Theresa Rourke Cassidy",
		"stats": {
			"intelligence": 38,
			"strength": 8,
			"speed": 47,
			"durability": 28,
			"power": 50,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/siryn.jpg",
		"biography": {
			"full_name": "Theresa Rourke Cassidy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Theresa Rourke"
			],
			"place_of_birth": "Cassidy Keep, County Mayo, Ireland",
			"first_appearance": "Spider-Woman (first series) #37",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"(current) Adventurer (former) Professional Criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"(Current) X-Factor (former) Ally of Black Tom and the Juggernaut",
				"Fallen Angels",
				"X-Force"
			],
			"relatives": [
				"Sean Cassidy (Banshee",
				"father)",
				"Maeve Rourke (mother",
				"deceased)",
				"Black Tom Cassidy (cousin)"
			]
		}
	},
	{
		"id": "skaar",
		"name": "Skaar",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 85,
			"speed": 27,
			"durability": 90,
			"power": 69,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/skaar.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Savior",
				"Son of Hulk",
				"WorldBreaker",
				"Long Hair",
				"Little Monster",
				"Conan"
			],
			"place_of_birth": "Sakaar",
			"first_appearance": "World War Hulk #5, 2007",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'6 // 198 cm",
			"weight": "400 lb // 180 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Warrior"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Morris Walters (granduncle)",
				"Elaine Banner-Walters (paternal grandaunt",
				"deceased)",
				"Brian Banner (paternal grandfather",
				"deceased)",
				"Rebecca Banner (paternal grandmother",
				"deceased)",
				"She-Hulk (1st cousin once removed)",
				"Hulk (father)",
				"Caiera the Oldstrong (mother",
				"deceased)",
				"Hiro-Kala (Twin brother)",
				"Lyra (half-sister)"
			]
		}
	},
	{
		"id": "snake-eyes",
		"name": "Snake-Eyes",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/snake-eyes.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Xanthian Boulder Crusher"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Team-Up Annual Vol 1 #7 October, 1984",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Animal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "snowbird",
		"name": "Snowbird",
		"realName": "Narya",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 27,
			"durability": 42,
			"power": 70,
			"combat": 52
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/snowbird.jpg",
		"biography": {
			"full_name": "Narya",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Anne McKenzie-Thompson"
			],
			"place_of_birth": "Near Resolute Bay, Northwest Territories, Canada",
			"first_appearance": "Uncanny X-Men #120",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10' // 178 cm",
			"weight": "108 lb // 49 kg",
			"eye_color": "White",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Goddess",
				"adventurer",
				"former records officer"
			],
			"base": [
				"formerly Department H"
			]
		},
		"connections": {
			"group_affiliation": [
				"God Squad",
				"formerly Alpha Flight",
				"Eskimo Gods",
				"Royal Canadian Mounted Police",
				"The Flight"
			],
			"relatives": [
				"Hodiak (grandfather)",
				"Nelvanna (mother)",
				"Richard Lawrence Easton (father",
				"deceased)",
				"Michael Twoyoungmen (Shaman",
				"foster father)",
				"Douglas Thompson (husband",
				"deceased)",
				"unnamed son (deceased)"
			]
		}
	},
	{
		"id": "sobek",
		"name": "Sobek",
		"realName": "Yurrd the Unknown",
		"stats": {
			"intelligence": 50,
			"strength": 34,
			"speed": 23,
			"durability": 46,
			"power": 20,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sobek.jpg",
		"biography": {
			"full_name": "Yurrd the Unknown",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sobek the Talking Crocodile",
				"The Unknown in Formless Time Before Time",
				"Famine"
			],
			"place_of_birth": "Nile River; Bioengineered at Oolong Island",
			"first_appearance": "52 Week Twenty-Six",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Kahndaq"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Marvel Family",
				"Four Horsemen"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "solomon-grundy",
		"name": "Solomon Grundy",
		"realName": "Cyrus Gold",
		"stats": {
			"intelligence": 9,
			"strength": 93,
			"speed": 13,
			"durability": 100,
			"power": 92,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/solomon-grundy.jpg",
		"biography": {
			"full_name": "Cyrus Gold",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Marshland Monster"
			],
			"place_of_birth": "Gotham City",
			"first_appearance": "All-American Comics #61 (October, 1944)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Zombie",
			"height": "9'2 // 279 cm",
			"weight": "971 lb // 437 kg",
			"eye_color": "Black",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly",
				"Injustice Society",
				"Injustice League",
				"the Society",
				"Infinity",
				"Inc",
				"Injustice Unlimited",
				"Black Lantern Corps"
			],
			"relatives": [
				"Unnamed wife (deceased)",
				"Karin Rykel (possible descendant",
				"deceased)",
				"Chrissie Cavendish (possible descendant)"
			]
		}
	},
	{
		"id": "songbird",
		"name": "Songbird",
		"realName": "Melissa Joan Gold",
		"stats": {
			"intelligence": 75,
			"strength": 36,
			"speed": 27,
			"durability": 42,
			"power": 55,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/songbird.jpg",
		"biography": {
			"full_name": "Melissa Joan Gold",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Screaming Mimi",
				"Mimi Schwartz",
				"Margie Green"
			],
			"place_of_birth": "Shoshoni, Wyoming",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "145 lb // 65 kg",
			"eye_color": "Green",
			"hair_color": "Red / White"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former criminal and wrestler"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Thunderbolts",
				"Masters of Evil",
				"Unlimited Class Wrestling Federation",
				"Grapplers"
			],
			"relatives": [
				"Mimi Gold (mother)",
				"Mr. Gold (father)"
			]
		}
	},
	{
		"id": "space-ghost",
		"name": "Space Ghost",
		"realName": "Thaddeus Bach",
		"stats": {
			"intelligence": 38,
			"strength": 18,
			"speed": 33,
			"durability": 40,
			"power": 95,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/space-ghost.jpg",
		"biography": {
			"full_name": "Thaddeus Bach",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ted Ghostel",
				"Tad Ghostal"
			],
			"place_of_birth": "-",
			"first_appearance": "Space Ghost (1966)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "250 lb // 113 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Galactic Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spawn",
		"name": "Spawn",
		"realName": "Al Simmons",
		"stats": {
			"intelligence": 75,
			"strength": 60,
			"speed": 50,
			"durability": 90,
			"power": 100,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spawn.jpg",
		"biography": {
			"full_name": "Al Simmons",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The One",
				"Hellspawn"
			],
			"place_of_birth": "Detroit, Michigan (8th level of Hell after rebirth)",
			"first_appearance": "Spawn #1 (May, 1992)",
			"publisher": "Image Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Demon",
			"height": "6'11 // 211 cm",
			"weight": "900 lb // 405 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Hell"
			]
		},
		"connections": {
			"group_affiliation": [
				"Eighth Circle of Hell",
				"formerly (as Al Simmons) CIA (U.S. Security Service)",
				"U.S. Secret Service",
				"U.S. Marine Corps"
			],
			"relatives": [
				"Wanda (widow)",
				"Cyan (widow's daughter)"
			]
		}
	},
	{
		"id": "spectre",
		"name": "Spectre",
		"realName": "Aztar",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spectre.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Aztar"
			],
			"aliases": [
				"Spirit of Vengeance",
				"Wrath of God",
				"Spirit of Redemption",
				"Raguel",
				"James Corrigan",
				"Hal Jordan",
				"Cripus Allen"
			],
			"place_of_birth": "-",
			"first_appearance": "More Fun Comics #52 (February, 1940)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "speedball",
		"name": "Speedball",
		"realName": "Robert Baldwin",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/speedball.jpg",
		"biography": {
			"full_name": "Robert Baldwin",
			"alter_egos": [
				"Penance II"
			],
			"aliases": [
				"Penance",
				"Masked Marvel"
			],
			"place_of_birth": "Springdale, Connecticut",
			"first_appearance": "Amazing Spider-Man Annual #22, (chronologically) Speedball #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Student",
				"superhero"
			],
			"base": [
				"Mobile",
				"formerly New Warriors Headquarters"
			]
		},
		"connections": {
			"group_affiliation": [
				"New Warriors"
			],
			"relatives": [
				"Maddie Baldwin (mother)",
				"Justin Baldwin (father)"
			]
		}
	},
	{
		"id": "speedy",
		"name": "Speedy",
		"realName": "Roy William Harper, Jr.",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/speedy.jpg",
		"biography": {
			"full_name": "Roy William Harper, Jr.",
			"alter_egos": [
				"Arsenal"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "speedy",
		"name": "Speedy",
		"realName": "Thea Queen",
		"stats": {
			"intelligence": 50,
			"strength": 6,
			"speed": 33,
			"durability": 20,
			"power": 26,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/speedy.jpg",
		"biography": {
			"full_name": "Thea Dearden Queen",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Thea Merlyn",
				"Mia",
				"Red Arrow"
			],
			"place_of_birth": "Starling City",
			"first_appearance": "Arrow (TV Series) - \"Pilot\"",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Green",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Nightclub Owner"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team Arrow"
			],
			"relatives": [
				"Moira Queen (mother",
				"deceased)",
				"Robert Queen (foster father",
				"deceased)",
				"Walter Steele (step-father",
				"formerly)",
				"Malcolm Merlyn (biological father)",
				"Oliver Queen (Green Arrow",
				"half-brother)",
				"Tommy Merlyn (half-brother",
				"deceased)",
				"William Clayton (nephew)"
			]
		}
	},
	{
		"id": "spider-carnage",
		"name": "Spider-Carnage",
		"realName": "Benjamin Reilly",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-carnage.jpg",
		"biography": {
			"full_name": "Benjamin Reilly",
			"alter_egos": [
				"Scarlet Spider"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spider-girl",
		"name": "Spider-Girl",
		"realName": "May 'Mayday' Parker",
		"stats": {
			"intelligence": 63,
			"strength": 38,
			"speed": 60,
			"durability": 65,
			"power": 53,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-girl.jpg",
		"biography": {
			"full_name": "May 'Mayday' Parker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "What If? Vol 2 #105 (February, 1998)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "119 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"New York City, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spider-gwen",
		"name": "Spider-Gwen",
		"realName": "Gwen Stacy",
		"stats": {
			"intelligence": 75,
			"strength": 55,
			"speed": 63,
			"durability": 70,
			"power": 66,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-gwen.jpg",
		"biography": {
			"full_name": "Gwendolyne Stacy",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spider-Woman"
			],
			"place_of_birth": "-",
			"first_appearance": "Edge of Spider-Verse #2",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Warriors of the Great Web",
				"formerly Mary Janes",
				"Spider-Army"
			],
			"relatives": [
				"George Stacy (father)",
				"Helen Stacy (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "spider-man",
		"name": "Spider-Man",
		"realName": "Peter Parker",
		"stats": {
			"intelligence": 90,
			"strength": 55,
			"speed": 67,
			"durability": 75,
			"power": 74,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-man.jpg",
		"biography": {
			"full_name": "Peter Benjamin Parker",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spiderman",
				"Bag-Man",
				"Black Marvel",
				"Captain Universe",
				"Dusk",
				"Green Hood",
				"Hornet",
				"Mad Dog 336",
				"Peter Palmer",
				"Prodigy",
				"Ricochet",
				"Scarlet Spider",
				"Spider-Boy",
				"Spider-Hulk",
				"Spider-Morphosis"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "Amazing Fantasy #15",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Hazel",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Freelance photographer",
				"teacher"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Member of the Avengers",
				"formerly member of Outlaws",
				"alternate Fantastic Four"
			],
			"relatives": [
				"Richard Parker (father",
				"deceased)",
				"Mary Parker(mother",
				"deceased)",
				"Benjamin Parker (uncle",
				"deceased)",
				"May Parker (aunt)",
				"Mary Jane Watson-Parker (wife)",
				"May Parker (daughter",
				"allegedly deceased)"
			]
		}
	},
	{
		"id": "spider-man",
		"name": "Spider-Man",
		"realName": "Miguel O'Hara",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-man.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spider-Man 2099",
				"Spiderman"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #365 (August, 1992)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Red",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"CEO of Alchemax Corporation",
				"Executive Assistant"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spider-man",
		"name": "Spider-Man",
		"realName": "Miles Morales",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-man.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spiderman"
			],
			"place_of_birth": "-",
			"first_appearance": "Ultimate Comics Fallout #4 (October, 2011)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'2 // 157 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student",
				"adventurer",
				"vigilante"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spider-woman",
		"name": "Spider-Woman",
		"realName": "Jessica Drew",
		"stats": {
			"intelligence": 56,
			"strength": 42,
			"speed": 42,
			"durability": 60,
			"power": 68,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-woman.jpg",
		"biography": {
			"full_name": "Jessica Drew",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Arachne",
				"Ariadne Hyde",
				"Dark Angel",
				"Dark Angel of San Francisco"
			],
			"place_of_birth": "London, England",
			"first_appearance": "Marvel Spotlight #32 (February, 1977)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Form agent of HYDRA",
				"former bounty hunter",
				"private investigator",
				"adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former agent of HYDRA"
			],
			"relatives": [
				"Jonathan (father",
				"deceased)",
				"Merriem (mother",
				"deceased)"
			]
		}
	},
	{
		"id": "spider-woman-ii",
		"name": "Spider-Woman II",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-woman-ii.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spider-woman-iii",
		"name": "Spider-Woman III",
		"realName": "Martha Franklin",
		"stats": {
			"intelligence": 50,
			"strength": 48,
			"speed": 27,
			"durability": 42,
			"power": 60,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-woman-iii.jpg",
		"biography": {
			"full_name": "Martha Franklin",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Rochester, New York",
			"first_appearance": "(cameo) Spectacular Spider-Man #263 (1998); (full) Amazing Spider-Man #441 (1998)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "123 lb // 55 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Gathering of the Five"
			],
			"relatives": [
				"Jeremy Franklin (father",
				"deceased)",
				"Bernice Franklin (mother",
				"deceased)",
				"J. Jonah Jameson (foster father)",
				"Marla Madison (foster mother)"
			]
		}
	},
	{
		"id": "spider-woman-iv",
		"name": "Spider-Woman IV",
		"realName": "Charlotte Witter",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/spider-woman-iv.jpg",
		"biography": {
			"full_name": "Charlotte Witter",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Spider-Woman"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man Volume 2 #5 (# 446)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "128 lb // 58 kg",
			"eye_color": "Red",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Fashion designer",
				"professional criminal"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Cassandra Webb (aka Madame Web",
				"grandmother)"
			]
		}
	},
	{
		"id": "spock",
		"name": "Spock",
		"realName": "S'chn T'gai Spock",
		"stats": {
			"intelligence": 81,
			"strength": 18,
			"speed": 17,
			"durability": 40,
			"power": 56,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spock.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Star Trek S01E01: The Man Trap",
			"publisher": "Star Trek",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human-Vulcan",
			"height": "6'1 // 185 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "spyke",
		"name": "Spyke",
		"realName": "Evan Daniels",
		"stats": {
			"intelligence": 50,
			"strength": 12,
			"speed": 17,
			"durability": 60,
			"power": 48,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/spyke.jpg",
		"biography": {
			"full_name": "Evan Daniels",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Porcupine",
				"Armadillo"
			],
			"place_of_birth": "-",
			"first_appearance": "\"Speed & Spyke\" (December 9, 2000)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'0 // 183 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Brown",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Morlocks",
				"Formerly: X-Men"
			],
			"relatives": [
				"Mr. Daniels (father)",
				"Vivian Munroe-Daniels (mother)",
				"Storm (maternal aunt)"
			]
		}
	},
	{
		"id": "stacy-x",
		"name": "Stacy X",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/stacy-x.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "star-lord",
		"name": "Star-Lord",
		"realName": "Peter Jason Quill",
		"stats": {
			"intelligence": 69,
			"strength": 20,
			"speed": 33,
			"durability": 50,
			"power": 25,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/star-lord.jpg",
		"biography": {
			"full_name": "Peter Jason Quill",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Starlord"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Preview #4 (January, 1976)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human-Spartoi",
			"height": "6'2 // 188 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Royal Prince of Spartax"
			],
			"base": [
				"C.I.T.T.",
				"formerly Kree space",
				"Hala, Daedalus 5"
			]
		},
		"connections": {
			"group_affiliation": [
				"Guardians of the Galaxy (leader)",
				"formerly unnamed commando team",
				"United Front",
				"Imperial Guard",
				"partner of Ship",
				"NASA"
			],
			"relatives": [
				"Eson (grandfather",
				"deceased)",
				"Gareth (great-uncle",
				"deceased)",
				"Jason of Sparta (father)",
				"Meredith Quill (mother",
				"deceased)",
				"Victoria (half-sister)",
				"Kip Holm (adopted brother)",
				"Sandy (adopted sister in-law)",
				"Alain (adopted niece)",
				"Rhys",
				"Robyn (adopted nephews)",
				"Kitty Pryde (fiance)",
				"Unnamed former Symbiote"
			]
		}
	},
	{
		"id": "stardust",
		"name": "Stardust",
		"realName": "",
		"stats": {
			"intelligence": 88,
			"strength": 85,
			"speed": 100,
			"durability": 110,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/stardust.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Entity Lambda-Zero"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Herald of Galactus"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Heralds of Galactus",
				"Formerly United Front"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "starfire",
		"name": "Starfire",
		"realName": "Koriand'r",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 33,
			"durability": 85,
			"power": 59,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/starfire.jpg",
		"biography": {
			"full_name": "Koriand'r",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Princess Koriand'r",
				"Kory Anders",
				"Nova"
			],
			"place_of_birth": "Tamaran",
			"first_appearance": "DC Comics Presents #26 (October, 1980)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Tamaranean",
			"height": "6'4 // 193 cm",
			"weight": "158 lb // 71 kg",
			"eye_color": "Green",
			"hair_color": "Auburn",
			"skin_color": "Orange"
		},
		"work": {
			"occupation": [
				"Model"
			],
			"base": [
				"Formerly Titans Island, New York City",
				"Titans Tower, San Francisco"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly R.E.B.E.L.S.",
				"Justice League of America",
				"Teen Titans",
				"Outsiders"
			],
			"relatives": [
				"King Myand'r (father)",
				"Queen Luand'r (mother)",
				"Queen Komand'r (sister",
				"Blackfire)",
				"Ryand'r (brother)",
				"Prince Karras (husband",
				"deceased)",
				"Ph'yzzon (husband",
				"deceased)"
			]
		}
	},
	{
		"id": "stargirl",
		"name": "Stargirl",
		"realName": "Courtney Whitmore",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 25,
			"durability": 90,
			"power": 87,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/stargirl.jpg",
		"biography": {
			"full_name": "Courtney Whitmore",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Star-Spangled Kid",
				"Star",
				"Stars"
			],
			"place_of_birth": "-",
			"first_appearance": "Stars and S.T.R.I.P.E. #0 (July, 1999)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "137 lb // 62 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Manhattan, New York City",
				"Formerly Beverly Hills, California",
				"later Blue Valley, Nebraska",
				"later Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice Society of America"
			],
			"relatives": [
				"Barbara Whitmore-Dugan (mother)",
				"Sam Kurtis (father",
				"deceased)",
				"Pat Dugan (S.T.R.I.P.E.",
				"Stepfather)",
				"Mike Dugan (stepbrother)",
				"Patricia Dugan (sister)"
			]
		}
	},
	{
		"id": "static",
		"name": "Static",
		"realName": "Virgil Hawkins",
		"stats": {
			"intelligence": 69,
			"strength": 8,
			"speed": 42,
			"durability": 50,
			"power": 90,
			"combat": 40
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/static.jpg",
		"biography": {
			"full_name": "Virgil Ovid Hawkins",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Sparky",
				"Virg",
				"V",
				"V-Man"
			],
			"place_of_birth": "Paris Island, Dakota City",
			"first_appearance": "Static #1 (June, 1993)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'7 // 170 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"Titans Tower, formerly Abandoned Gas Station of Solitude, Dakota City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Shadow Cabinet",
				"Heroes",
				"Teen Titans"
			],
			"relatives": [
				"Robert Hawkins (father)",
				"Jean Hawkins (mother)",
				"Sharon Hawkins (sister)",
				"Homer Hawkins (grandfather)",
				"Teshom� Hawkins (uncle",
				"deceased)",
				""
			]
		}
	},
	{
		"id": "steel",
		"name": "Steel",
		"realName": "John Henry Irons",
		"stats": {
			"intelligence": 81,
			"strength": 82,
			"speed": 53,
			"durability": 90,
			"power": 64,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/steel.jpg",
		"biography": {
			"full_name": "John Henry Irons",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Man of Steel",
				"Henry Johnson"
			],
			"place_of_birth": "Washington, D.C.",
			"first_appearance": "Adventures of Superman #500 (1993)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'7 // 201 cm",
			"weight": "290 lb // 131 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Weapons designer",
				"former steelworker"
			],
			"base": [
				"Steelworks, Metropolis",
				"formerly Jersey City and Washington D.C."
			]
		},
		"connections": {
			"group_affiliation": [
				"Reserve member of the Justice League of America"
			],
			"relatives": [
				"Mrs. Irons (mother",
				"deceased)",
				"Mr. Irons (father",
				"deceased)",
				"Maternal Grandmother (deceased)",
				"maternal grandfather (deceased)",
				"Butter (grandfather)",
				"Bess (grandmother",
				"deceased)",
				"Clay Irons (brother)",
				"Jemahl Irons (nephew)",
				"Blondell Irons (sister-in-law)",
				"Natasha Irons (Starlight",
				"niece)",
				"Paco (nephew)",
				"Tyke (former foster nephew)"
			]
		}
	},
	{
		"id": "stephanie-powell",
		"name": "Stephanie Powell",
		"realName": "Stephanie Powell",
		"stats": {
			"intelligence": 69,
			"strength": 10,
			"speed": 54,
			"durability": 10,
			"power": 24,
			"combat": 10
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/stephanie-powell.jpg",
		"biography": {
			"full_name": "Stephanie Powell",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "No Ordinary Family S01E01 (2010)",
			"publisher": "ABC Studios",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Executive Vice President of Research at Global Tech"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Jim Powell (husband)",
				"Daphne Powell (daughter)",
				"JJ Powell (son)"
			]
		}
	},
	{
		"id": "steppenwolf",
		"name": "Steppenwolf",
		"realName": "",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/steppenwolf.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Steppenwulf"
			],
			"place_of_birth": "-",
			"first_appearance": "The New Gods #7",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "New God",
			"height": "6'0 // 183 cm",
			"weight": "203 lb // 91 kg",
			"eye_color": "Red",
			"hair_color": "Black",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "storm",
		"name": "Storm",
		"realName": "Ororo Munroe",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 47,
			"durability": 30,
			"power": 88,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/storm.jpg",
		"biography": {
			"full_name": "Ororo Munroe",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ororo Iqadi T'Challa",
				"Queen Ororo",
				"Ororo Komo Wakandas",
				"White Queen",
				"Weather Witch",
				"Windrider",
				"Goddess",
				"Mistress of the Elements",
				"Princess of N'Dare",
				"High Priestess Windrider",
				"Goddess",
				"Mistress of the Elements",
				"Princess of N'Dare",
				"High Priestess"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "Giant-Size X-Men #1 (May, 1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant",
			"height": "5'11 // 180 cm",
			"weight": "127 lb // 57 kg",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York State"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (Jean Grey School member",
				"leader)",
				"formerly X-Force (Strike Team)",
				"Murder Circus (brainwashed)",
				"Extinction Team",
				"Avengers[3]",
				"Fantastic Four",
				"X.S.E.",
				"X-Treme X-Men",
				"Tokyo Arena",
				"The Twelve",
				"Seven Brides of Set",
				"Hellfire Club (Inner Circle)",
				"Morlocks"
			],
			"relatives": [
				"Ayesha of Balobedu (ancestor)",
				"Ashake of Egypt (ancestor)",
				"Ashake of Mero� (ancestor)",
				"unnamed ancestor",
				"Harriet Munroe (paternal grandmother)",
				"unnamed paternal grandfather",
				"unnamed maternal grandmother",
				"David Munroe (father",
				"deceased)",
				"N'Dar� Munroe (mother",
				"deceased)",
				"Ainet (unofficial foster mother)",
				"Achmed El Gib�r (unofficial foster father)",
				"Colonel Shetani (maternal uncle)",
				"unnamed paternal aunt (deceased)",
				"David Munroe",
				"Jr. (cousin)",
				"Munroe Family (relatives)",
				"Black Panther (T'Challa) (ex-husband",
				"marriage annulled)"
			]
		}
	},
	{
		"id": "stormtrooper",
		"name": "Stormtrooper",
		"realName": "",
		"stats": {
			"intelligence": 10,
			"strength": 8,
			"speed": 8,
			"durability": 15,
			"power": 5,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/stormtrooper.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Star Wars: Episode IV - A New Hope (1977)",
			"publisher": "George Lucas",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sunspot",
		"name": "Sunspot",
		"realName": "Roberto DaCosta",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 35,
			"durability": 25,
			"power": 90,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sunspot.jpg",
		"biography": {
			"full_name": "Roberto DaCosta",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Robert DaCosta",
				"Bobby",
				"Black Rook",
				"Black King",
				"Reignfire"
			],
			"place_of_birth": "Rio de Janeiro, Brazil",
			"first_appearance": "Marvel Graphic Novel #4 (October, 1982)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'8 // 173 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "brown",
			"hair_color": "black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"businessman"
			],
			"base": [
				"1128 Mission Street, San Francisco, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers",
				"formerly X-Men",
				"New Mutants",
				"Young X-Men",
				"X-Corporation (Los Angeles branch)",
				"MLF",
				"X-Force",
				"Fallen Angels",
				"Hellfire Club",
				"Bratpack"
			],
			"relatives": [
				"Emmanuel da Costa (father",
				"deceased)",
				"Nina da Costa (mother)",
				"Reignfire (genetic copy",
				"deceased)"
			]
		}
	},
	{
		"id": "superboy",
		"name": "Superboy",
		"realName": "Kon-El / Conner Kent",
		"stats": {
			"intelligence": 75,
			"strength": 95,
			"speed": 83,
			"durability": 90,
			"power": 91,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/superboy.jpg",
		"biography": {
			"full_name": "Kon-El / Conner Kent",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Experiment 13",
				"Superman",
				"Project: Superman",
				"Carl Krummett",
				"Project: Lionel Luthor",
				"The Metropolis Kid",
				"Superman"
			],
			"place_of_birth": "Project Cadmus cloning facility",
			"first_appearance": "Adventures of Superman #500 (June, 1993)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'7 // 170 cm",
			"weight": "150 lb // 68 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"San Francisco",
				"Smallville",
				"Formerly Metropolis",
				"Formerly Honolulu"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"Legion of Super-Heroes",
				"Team Superman",
				"Formerly Young Justice",
				"Project Cadmus",
				"Ravers"
			],
			"relatives": [
				"Superman (Kryptonian genetic template)",
				"Lex Luthor (Human genetic template)",
				"Match (clone)"
			]
		}
	},
	{
		"id": "superboy-prime",
		"name": "Superboy-Prime",
		"realName": "Kal-El",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/superboy-prime.jpg",
		"biography": {
			"full_name": "Kal-El",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Superman-Prime",
				"Prime",
				"Superboy",
				"Clark Kent",
				"Clarkie",
				"Time Trapper"
			],
			"place_of_birth": "Krypton (Earth-Prime)",
			"first_appearance": "DC Comics Presents #87 (November, 1985)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Kryptonian",
			"height": "5'11 // 180 cm",
			"weight": "170 lb // 77 kg",
			"eye_color": "Blue",
			"hair_color": "Black / Blue"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"currently a recreation of Earth-Prime, formerly Qward, Anti-Matter Universe."
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Black Lantern Corps",
				"Legion of Super-Villains",
				"Sinestro Corps"
			],
			"relatives": [
				"Jor-El (father",
				"deceased)",
				"Lara (mother",
				"deceased)",
				"Jerry Kent (adoptive father)",
				"Naomi Kent (adoptive mother)"
			]
		}
	},
	{
		"id": "supergirl",
		"name": "Supergirl",
		"realName": "Kara Zor-El",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/supergirl.jpg",
		"biography": {
			"full_name": "Kara Zor-El",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Linda Lang",
				"Kara-El",
				"Kara Kent",
				"Flamebird",
				"Trinity Child",
				"Teen of Tomorrow",
				"The Girl of Steel",
				"The Maid of Might",
				"The Princess of Power",
				"Mighty Maid",
				"Claire Connors",
				"Bluebird"
			],
			"place_of_birth": "Argo City, Krypton",
			"first_appearance": "Superman/Batman #8 (May, 2004)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Kryptonian",
			"height": "5'5 // 165 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Intern",
				"Adventurer",
				"Student",
				"Crime-Fighter"
			],
			"base": [
				"Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Justice League of America",
				"Supermen of America",
				"Justice League of Amazons",
				"Kent Family",
				"Superman Family",
				"Kryptonian Science Guild",
				"Teen Titans",
				"Legion of Super-Heroes",
				"Outsiders"
			],
			"relatives": [
				"Zor-El (father)",
				"Allura In-Ze (mother)",
				"Jor-El II (uncle",
				"deceased)",
				"Lara Lor-Van (aunt",
				"deceased)",
				"Kal-El (Superman",
				"Clark Kent",
				"cousin)",
				"Lois Lane (cousin-in-law)",
				"Jonathan Kent (adopted uncle)",
				"Martha Kent (adopted aunt)",
				"Kon-El (Superboy",
				"Conner Kent",
				"clone cousin",
				"deceased)",
				"Nim-El (uncle)",
				"Dondra Klu-Ta (aunt)",
				"Don-El (cousin)",
				"Jor-El I (praternal grandfather",
				"deceased)",
				"Nimda An-Dor (paternal grandmother",
				"deceased)",
				"Lar-Van (maternal grandfather",
				"deceased)",
				"Lara Rok-Var (maternal grandmother",
				"deceased)",
				"Val-El",
				"Sul-El",
				"Tala-El",
				"Hatu-El",
				"Gam-El (ancestors",
				"deceased)"
			]
		}
	},
	{
		"id": "superman",
		"name": "Superman",
		"realName": "Clark Kent (Kal-El)",
		"stats": {
			"intelligence": 94,
			"strength": 100,
			"speed": 100,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/superman.jpg",
		"biography": {
			"full_name": "Clark Joseph Kent (Kal-El)",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Clark Joseph Kent",
				"The Man of Steel",
				"the Man of Tomorrow",
				"the Last Son of Krypton",
				"Big Blue",
				"the Metropolis Marvel",
				"the Action Ace"
			],
			"place_of_birth": "Krypton",
			"first_appearance": "ACTION COMICS #1 (June, 1938)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Kryptonian",
			"height": "6'3 // 191 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Reporter for the Daily Planet and novelist"
			],
			"base": [
				"Metropolis"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"The Legion of Super-Heroes (pre-Crisis as Superboy)",
				"Justice Society of America (pre-Crisis Earth-2 version)",
				"All-Star Squadron (pre-Crisis Earth-2 version)"
			],
			"relatives": [
				"Lois Lane (wife)",
				"Jor-El (father",
				"deceased)",
				"Lara (mother",
				"deceased)",
				"Jonathan Kent (adoptive father)",
				"Martha Kent (adoptive mother)",
				"Seyg-El (paternal grandfather",
				"deceased)",
				"Zor-El (uncle",
				"deceased)",
				"Alura (aunt",
				"deceased)",
				"Supergirl (Kara Zor-El",
				"cousin)",
				"Superboy (Kon-El/Conner Kent",
				"partial clone)"
			]
		}
	},
	{
		"id": "swamp-thing",
		"name": "Swamp Thing",
		"realName": "Alec Holland",
		"stats": {
			"intelligence": 88,
			"strength": 95,
			"speed": 25,
			"durability": 100,
			"power": 100,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/swamp-thing.jpg",
		"biography": {
			"full_name": "Alec Holland",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Green Man",
				"Swampy",
				"the Weed",
				"Le Bon Gumbo",
				"Smalsh-Yegger (on Rann)"
			],
			"place_of_birth": "-",
			"first_appearance": "Swamp Thing #1 (November, 1972)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Planet Elemental",
				"former Biochemist"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"formerly (Parliament of Trees",
				"Parliament of Stones",
				"Parliament of Flames",
				"Parliament of Waves",
				"and Parliament of Vapors)",
				"The Parliament of Worlds"
			],
			"relatives": [
				"Larry Holland (father",
				"deceased)",
				"Alice Holland (mother",
				"deceased)",
				"Edward Holland (brother)",
				"Linda Holland (first wife",
				"deceased)",
				"Abigail Holland (second wife)",
				"Tef� Holland (daughter)",
				"Gregori Arcane (father-in-law",
				"deceased)"
			]
		}
	},
	{
		"id": "swarm",
		"name": "Swarm",
		"realName": "Fritz von Meyer",
		"stats": {
			"intelligence": 75,
			"strength": 18,
			"speed": 50,
			"durability": 90,
			"power": 38,
			"combat": 35
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/swarm.jpg",
		"biography": {
			"full_name": "Fritz von Meyer",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Champions #14 (July, 1977)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "6'5 // 196 cm",
			"weight": "104 lb // 47 kg",
			"eye_color": "Yellow",
			"hair_color": "No Hair",
			"skin_color": "Yellow"
		},
		"work": {
			"occupation": [
				"Ph.D. in toxicology & entomology"
			],
			"base": [
				"Formerly South Africa"
			]
		},
		"connections": {
			"group_affiliation": [
				"Leader of the All-New Sinister Six",
				"formerly Exterminators",
				"Nazi Party"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "sylar",
		"name": "Sylar",
		"realName": "Gabriel Gray",
		"stats": {
			"intelligence": 75,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 91,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/sylar.jpg",
		"biography": {
			"full_name": "Gabriel Gray",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Gabriel Sylar",
				"Drew O'Grady",
				"Dr. Suresh",
				"Zane Taylor",
				"Isaac Mendez"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Timepiece restorer"
			],
			"base": [
				"New York, NY"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Virginia Gray (mother)"
			]
		}
	},
	{
		"id": "synch",
		"name": "Synch",
		"realName": "Everett Thomas",
		"stats": {
			"intelligence": 75,
			"strength": 67,
			"speed": 23,
			"durability": 28,
			"power": 74,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/synch.jpg",
		"biography": {
			"full_name": "Everett Thomas",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "X-Men #36 (1994)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'11 // 180 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"Massachusetts Academy"
			]
		},
		"connections": {
			"group_affiliation": [
				"Generation X"
			],
			"relatives": [
				"Stan Thomas (father)",
				"Ida Thomas (mother)",
				"Kim Ho Twae (adopted sister)"
			]
		}
	},
	{
		"id": "t-1000",
		"name": "T-1000",
		"realName": "Cyberdyne Systems Series 1000 Terminator",
		"stats": {
			"intelligence": 75,
			"strength": 34,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/t-1000.jpg",
		"biography": {
			"full_name": "Cyberdyne Systems Series 1000 Terminator",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"T-1001",
				"T-1002"
			],
			"place_of_birth": "-",
			"first_appearance": "Terminator 2: Judgment Day",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'0 // 183 cm",
			"weight": "325 lb // 146 kg",
			"eye_color": "-",
			"hair_color": "-",
			"skin_color": "Silver"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Skynet"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "t-800",
		"name": "T-800",
		"realName": "Cyberdyne Systems Series 800 Terminator Model 101",
		"stats": {
			"intelligence": 75,
			"strength": 34,
			"speed": 17,
			"durability": 60,
			"power": 73,
			"combat": 65
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/t-800.jpg",
		"biography": {
			"full_name": "Cyberdyne Systems Series 800 Terminator Model 101",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Terminator"
			],
			"place_of_birth": "-",
			"first_appearance": "The Terminator (1984)",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "- // 0 cm",
			"weight": "390 lb // 176 kg",
			"eye_color": "Red",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Assassin"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Skynet"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "t-850",
		"name": "T-850",
		"realName": "Cyberdyne Systems Series 850 Terminator",
		"stats": {
			"intelligence": 75,
			"strength": 80,
			"speed": 25,
			"durability": 90,
			"power": 83,
			"combat": 75
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/t-850.jpg",
		"biography": {
			"full_name": "Cyberdyne Systems Series 850 Terminator",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Terminator"
			],
			"place_of_birth": "-",
			"first_appearance": "Terminator 3: Rise of the Machines (2003)",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Cyborg",
			"height": "- // 0 cm",
			"weight": "440 lb // 198 kg",
			"eye_color": "Red",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Assassin"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Skynet"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "t-x",
		"name": "T-X",
		"realName": "Cyberdyne Systems Series X Terminator",
		"stats": {
			"intelligence": 75,
			"strength": 63,
			"speed": 29,
			"durability": 85,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/t-x.jpg",
		"biography": {
			"full_name": "Cyberdyne Systems Series X Terminator",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Dark Horse Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Cyborg",
			"height": "- // 0 cm",
			"weight": "330 lb // 149 kg",
			"eye_color": "-",
			"hair_color": "-",
			"skin_color": "Silver"
		},
		"work": {
			"occupation": [
				"Assassin / Genesis Overseer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Skynet"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "taskmaster",
		"name": "Taskmaster",
		"realName": "Tony Masters",
		"stats": {
			"intelligence": 75,
			"strength": 12,
			"speed": 50,
			"durability": 20,
			"power": 63,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/taskmaster.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Avengers #195",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "220 lb // 99 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Sheriff",
				"Assassin",
				"Mercenary",
				"formerly Military Trainer",
				"Combat Instructor",
				"Head of Initiative training camp"
			],
			"base": [
				"Bagalia",
				"A.I.M Island, Taskmaster's Academy"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Mercedes Merced (wife)",
				"Jeanne Foucault (Finesse",
				"alleged daughter)"
			]
		}
	},
	{
		"id": "tempest",
		"name": "Tempest",
		"realName": "Angel Salvadore Bohusk",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 45,
			"durability": 28,
			"power": 66,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/tempest.jpg",
		"biography": {
			"full_name": "Angel Salvadore Bohusk",
			"alter_egos": [
				"Angel Salvadore"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "New X-Men #118 (November, 2001)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'4 // 163 cm",
			"weight": "121 lb // 54 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly New Warriors",
				"Special Class"
			],
			"relatives": [
				"Tito Bohusk (son)",
				"Axel Bohusk (son)",
				"Kara Bohusk (daughter)",
				"three other unidentified children",
				""
			]
		}
	},
	{
		"id": "thanos",
		"name": "Thanos",
		"realName": "Thanos",
		"stats": {
			"intelligence": 100,
			"strength": 100,
			"speed": 33,
			"durability": 100,
			"power": 100,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thanos.jpg",
		"biography": {
			"full_name": "Thanos",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Mad Titan",
				"Masterlord",
				"The Overmaster",
				"Chins"
			],
			"place_of_birth": "Titan",
			"first_appearance": "Iron Man #55",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Eternal",
			"height": "6'7 // 201 cm",
			"weight": "985 lb // 443 kg",
			"eye_color": "Red",
			"hair_color": "No Hair",
			"skin_color": "Purple"
		},
		"work": {
			"occupation": [
				"Conqueror",
				"worshiper of Death"
			],
			"base": [
				"Mobile, formerly Sanctuary II, Titan"
			]
		},
		"connections": {
			"group_affiliation": [
				"Zodiac (ally)",
				"formerly Infinity Watch",
				"Defenders"
			],
			"relatives": [
				"A'Lars (father): Sui-San (mother",
				"deceased",
				"Eros (brother)",
				"Kronos (paternal Grandfather",
				"deceased)",
				"Daina (paternal grandmother",
				"deceased)",
				"Zuras (uncle",
				"deceased)",
				"Thena (cousin)",
				"Gamora (foster daughter)",
				"Nebula (alleged granddaughter)",
				"Rot (\"child\" by Death)",
				""
			]
		}
	},
	{
		"id": "the-cape",
		"name": "The Cape",
		"realName": "Vince Faraday",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 32,
			"power": 22,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/the-cape.jpg",
		"biography": {
			"full_name": "Vince Faraday",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Cape"
			],
			"place_of_birth": "-",
			"first_appearance": "The Cape S01E01 (2011)",
			"publisher": "",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Trip Faraday (son)",
				"Dana Thompson-Faraday (wife)"
			]
		}
	},
	{
		"id": "the-comedian",
		"name": "The Comedian",
		"realName": "Edward Morgen Blake",
		"stats": {
			"intelligence": 63,
			"strength": 14,
			"speed": 17,
			"durability": 10,
			"power": 12,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/the-comedian.jpg",
		"biography": {
			"full_name": "Edward Morgen Blake",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Eddie Blake"
			],
			"place_of_birth": "-",
			"first_appearance": "Watchmen #1 (September, 1986)",
			"publisher": "DC Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'2 // 188 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Adventurer",
				"Government Agent"
			],
			"base": [
				"New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Crimebusters",
				"Minutemen"
			],
			"relatives": [
				"Silk Spectre (Laurel \"Laurie\" Juspeczyk) (daughter)"
			]
		}
	},
	{
		"id": "thing",
		"name": "Thing",
		"realName": "Ben Grimm",
		"stats": {
			"intelligence": 75,
			"strength": 84,
			"speed": 21,
			"durability": 100,
			"power": 38,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thing.jpg",
		"biography": {
			"full_name": "Benjamin Jacob Grimm",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Blackbeard the Pirate",
				"Grim Ben",
				"Dr. Josiah Verpoorteen"
			],
			"place_of_birth": "New York City, New York",
			"first_appearance": "Fantastic Four #1 (November, 1961)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human / Radiation",
			"height": "6'0 // 183 cm",
			"weight": "500 lb // 225 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former Air Force test pilot"
			],
			"base": [
				"Baxter Building, New York City, New York (formerly) Four Freedoms Plaza, Pier Four",
				""
			]
		},
		"connections": {
			"group_affiliation": [
				"Fantastic Four formerly Avengers West Coast",
				"Unlimited Class Wrestling Federation",
				"Thunderiders"
			],
			"relatives": [
				"Daniel (father",
				"deceased)",
				"Elsie (mother",
				"deceased)",
				"Daniel Jr. (brother",
				"deceased)",
				"Jacob ('Jake",
				"' uncle)",
				"Alyce (aunt",
				"deceased)",
				"Pentunia ('Penny",
				"' aunt",
				"Jacob's second wife)"
			]
		}
	},
	{
		"id": "thor",
		"name": "Thor",
		"realName": "Thor Odinson",
		"stats": {
			"intelligence": 69,
			"strength": 100,
			"speed": 83,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thor.jpg",
		"biography": {
			"full_name": "Thor Odinson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Donald Blake",
				"Sigurd Jarlson",
				"Jake Olsen",
				"Donar the Mighty"
			],
			"place_of_birth": "Asgard",
			"first_appearance": "Journey into Mystery #83 (August, 1962)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Asgardian",
			"height": "6'6 // 198 cm",
			"weight": "640 lb // 288 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"King of Asgard",
				"formerly EMS Technician",
				"Physician"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"Odin (father)",
				"Gaea (mother)",
				"Frigga (step-mother)",
				"Loki (step-brother)",
				"Vidar (half-brother)",
				"Buri (paternal great-grandfather)",
				"Bolthorn (maternal great grandfather)",
				"Bor (grandfather)",
				"Bestla (grandmother)",
				"Vili (uncle)",
				"Ve (uncle)",
				"Sigyn (former sister-in-law)",
				"Hela (alleged niece)",
				"Jormungand (alleged nephew)",
				"Fernis Wolf (alleged nephew)"
			]
		}
	},
	{
		"id": "thor-girl",
		"name": "Thor Girl",
		"realName": "Tarene",
		"stats": {
			"intelligence": 75,
			"strength": 83,
			"speed": 70,
			"durability": 84,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thor-girl.jpg",
		"biography": {
			"full_name": "Tarene",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Asgard Lass",
				"the Designate",
				"the Destroyer",
				"Hammerette",
				"Hammer Girl",
				"Hammer Lass",
				"Tara Olson",
				"Spirit of the Jewel",
				"the Supreme",
				"Thoreta",
				"Thorita",
				"Thor Lass"
			],
			"place_of_birth": "-",
			"first_appearance": "Thor, Volume 2, #22; (as Thor Girl) Thor, Volume 2, #33",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Asgardian",
			"height": "5'9 // 175 cm",
			"weight": "317 lb // 143 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Camp Hammond",
				"FormerlyNew York City, Formerly Asgard"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ally of the Asgardians"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "thunderbird",
		"name": "Thunderbird",
		"realName": "John Proudstar",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 27,
			"durability": 32,
			"power": 13,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thunderbird.jpg",
		"biography": {
			"full_name": "John Proudstar",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Camp Verde, Arizona",
			"first_appearance": "Giant-Size X-Men #1 (1975)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "225 lb // 101 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former adventurer",
				"student",
				"Marine"
			],
			"base": [
				"Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly US Marine Corp"
			],
			"relatives": [
				"Unidentified grandfather (deceased)",
				"Neal Proudstar (father",
				"deceased)",
				"Maria Proudstar (mother",
				"deceased)",
				"James Proudstar (Warpath",
				"brother)"
			]
		}
	},
	{
		"id": "thunderbird-ii",
		"name": "Thunderbird II",
		"realName": "James Proudstar",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/thunderbird-ii.jpg",
		"biography": {
			"full_name": "James Proudstar",
			"alter_egos": [
				"Warpath"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "thunderbird-iii",
		"name": "Thunderbird III",
		"realName": "Neal Shaara",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/thunderbird-iii.jpg",
		"biography": {
			"full_name": "Neal Shaara",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Bangladesh",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9' // 175 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"None",
				"formerly X-Men",
				"X-Corporation"
			],
			"relatives": [
				"Sanjit (brother",
				"deceased)"
			]
		}
	},
	{
		"id": "thunderstrike",
		"name": "Thunderstrike",
		"realName": "Eric Kevin Masterson",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 70,
			"durability": 84,
			"power": 42,
			"combat": 72
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thunderstrike.jpg",
		"biography": {
			"full_name": "Eric Kevin Masterson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Thor"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Masterson) Thor #391; (as Thor) Thor #432; (as Thunderstrike) Thunderstrike #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'6 // 198 cm",
			"weight": "640 lb // 288 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"(as Thunderstrike) Adventurer",
				"crimefighter",
				"(as Masterson) Architect"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"(At time of death) Avengers",
				"(Formerly) Legion of the Unliving",
				"Thor Corps"
			],
			"relatives": [
				"Marcy Masterson Steele (wife",
				"divorced)",
				"Kevin Masterson (son)"
			]
		}
	},
	{
		"id": "thundra",
		"name": "Thundra",
		"realName": "Thundra",
		"stats": {
			"intelligence": 38,
			"strength": 81,
			"speed": 32,
			"durability": 64,
			"power": 26,
			"combat": 54
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/thundra.jpg",
		"biography": {
			"full_name": "Thundra",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Fantastic Four #129 (December, 1972)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "7'2 // 218 cm",
			"weight": "350 lb // 158 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"Ruler",
				"warrior"
			],
			"base": [
				"Mobile",
				"United Sisterhood Republic of North America"
			]
		},
		"connections": {
			"group_affiliation": [
				"Lady Liberators",
				"Empress of the Sisterhood",
				"formerly Frightful Four",
				"Fantastic Four",
				"former agent of Roxxon Oil Corporation"
			],
			"relatives": [
				"Superia (alleged ancestor)",
				"Arkon (consort) Lyra (alternate reality daughter)"
			]
		}
	},
	{
		"id": "tiger-shark",
		"name": "Tiger Shark",
		"realName": "Todd Arliss",
		"stats": {
			"intelligence": 38,
			"strength": 72,
			"speed": 46,
			"durability": 70,
			"power": 51,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/tiger-shark.jpg",
		"biography": {
			"full_name": "Todd Arliss",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Arlys Tigershark"
			],
			"place_of_birth": "Pasadena, California",
			"first_appearance": "Sub-Mariner #5 (September, 1968)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "450 lb // 203 kg",
			"eye_color": "Grey",
			"hair_color": "No Hair",
			"skin_color": "Grey"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Villains for Hire",
				"Lethal Legion",
				"Dr. Dorcas",
				"Masters of Evil",
				"Namor's Deep Six",
				"Attuma's Deep Six",
				"Offenders"
			],
			"relatives": [
				"Diane Newell (sister)",
				"Mara (wife",
				"deceased)",
				"Walter Newell (brother-in-law)",
				""
			]
		}
	},
	{
		"id": "tigra",
		"name": "Tigra",
		"realName": "Greer Grant Nelson",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 53,
			"durability": 38,
			"power": 33,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/tigra.jpg",
		"biography": {
			"full_name": "Greer Grant Nelson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Cat",
				"Greer Sorenson"
			],
			"place_of_birth": "Presumably Chicago Illinois USA",
			"first_appearance": "The Cat #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10 // 178 cm",
			"weight": "180 lb // 81 kg",
			"eye_color": "Green",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Laboratory assistant",
				"model",
				"adventurer",
				"NYC police"
			],
			"base": [
				"New York City, New York USA"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"Mr. Grant (father)",
				"Mrs. Grant (mother",
				"deceased)",
				"William Nelson (husband",
				"deceased)"
			]
		}
	},
	{
		"id": "tinkerer",
		"name": "Tinkerer",
		"realName": "Phineas Mason",
		"stats": {
			"intelligence": 100,
			"strength": 10,
			"speed": 23,
			"durability": 14,
			"power": 10,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/tinkerer.jpg",
		"biography": {
			"full_name": "Phineas Mason",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Amazing Spider-Man #2 (1963)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'4 // 163 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Brown",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Inventor and technician serving the underworld"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Deborah Watts Mason (wife",
				"deceased)",
				"Rick Mason (aka Agent",
				"son",
				"deceased)"
			]
		}
	},
	{
		"id": "titan",
		"name": "Titan",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/titan.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "HarperCollins",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "toad",
		"name": "Toad",
		"realName": "Mortimer Toynbee",
		"stats": {
			"intelligence": 50,
			"strength": 34,
			"speed": 58,
			"durability": 56,
			"power": 70,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/toad.jpg",
		"biography": {
			"full_name": "Mortimer Toynbee",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Terrible Toad-King"
			],
			"place_of_birth": "York, England",
			"first_appearance": "X-Men #4 (March, 1964)",
			"publisher": "Marvel Comics",
			"alignment": "neutral"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'9 // 175 cm",
			"weight": "169 lb // 76 kg",
			"eye_color": "Black",
			"hair_color": "Brown",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"Former criminal"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"198",
				"(formerly) Brotherhood of Evil Mutants",
				"Misfits",
				"(formerly) associate of Gideon",
				"Emma Frost"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "toxin",
		"name": "Toxin",
		"realName": "Patrick Mulligan",
		"stats": {
			"intelligence": 56,
			"strength": 73,
			"speed": 70,
			"durability": 84,
			"power": 82,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/toxin.jpg",
		"biography": {
			"full_name": "Patrick Mulligan",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Larry"
			],
			"place_of_birth": "New York City",
			"first_appearance": "Venom vs. Carnage #1 (2004)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "6'2 // 188 cm",
			"weight": "215 lb // 97 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Police officer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ally of Spider-Man and Black Cat"
			],
			"relatives": [
				"Gina Mulligan (wife)",
				"Edward Mulligan (son)",
				"Mr. Mulligan (father)",
				"Mrs. Mulligan (mother)",
				"Carnage (\"father\")",
				"Venom (\"grandfather\")"
			]
		}
	},
	{
		"id": "toxin",
		"name": "Toxin",
		"realName": "Eddie Brock",
		"stats": {
			"intelligence": 75,
			"strength": 80,
			"speed": 42,
			"durability": 85,
			"power": 97,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/toxin.jpg",
		"biography": {
			"full_name": "Edward Charles Allan Brock",
			"alter_egos": [
				"Anti-Venom",
				"Venom"
			],
			"aliases": [
				"Eddie",
				"Sister Edwina",
				"\"Ed\"",
				"Edwin Brock",
				"Venom",
				"Lethal Protector",
				"998th",
				"Anti-Venom",
				"White Venom"
			],
			"place_of_birth": "San Francisco, California",
			"first_appearance": "Venom Vol 2 #17",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "6'3 // 191 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "Black",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"former symbiote hunter",
				"shelter attendant",
				"government operative",
				"journalist for the Daily Globe"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly",
				"temporary partner of Agent Venom",
				"Savage Six",
				"Sinister Six",
				"Revengers",
				"former partner of Vengeance",
				"Spider-Man",
				"Scarlet Spider. Volunteer at F.E.A.S.T."
			],
			"relatives": [
				"Carl Brock (father",
				"estranged)",
				"Janine Brock (mother",
				"deceased)",
				"Mary Brock (sister)",
				"Ann Weying (ex-wife",
				"deceased)",
				"Symbiotes' relatives: Anti-Venom Symbiote (former symbiote",
				"uncle and former brother",
				"deceased)",
				"Venom Symbiote (former symbiote",
				"grandfather",
				"former brother)",
				"Agony",
				"Phage",
				"Riot",
				"Lasher (uncles",
				"former sons)",
				"Scorn (sister",
				"former niece)",
				"Carnage (father",
				"former son)",
				"Scream (aunt",
				"former daughter",
				"deceased)",
				"Hybrid (uncle",
				"former son",
				"deceased)"
			]
		}
	},
	{
		"id": "tracy-strauss",
		"name": "Tracy Strauss",
		"realName": "Tracy Strauss",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/tracy-strauss.jpg",
		"biography": {
			"full_name": "Tracy Strauss",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Ice Queen"
			],
			"place_of_birth": "Beverly Hills, CA",
			"first_appearance": "-",
			"publisher": "NBC - Heroes",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Former aide to Senator Nathan Petrelli",
				"Former Pinehearst consultant",
				"former political adviser to Governor Robert Malden"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Niki Sanders (estranged triplet sister",
				"deceased)",
				"Barbara (estranged triplet sister)",
				"W. Strauss (father)",
				"Rebecca Rosenthal (mother)"
			]
		}
	},
	{
		"id": "trickster",
		"name": "Trickster",
		"realName": "Giovanni Giuseppe",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/trickster.jpg",
		"biography": {
			"full_name": "Giovanni Giuseppe",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"James Jesse"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash #113 (July, 1960)",
			"publisher": "DC Comics",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "179 lb // 81 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Special effects designer",
				"con artist"
			],
			"base": [
				"Keystone City"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "trigon",
		"name": "Trigon",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/trigon.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Lucifer",
				"Satan",
				"The Devil",
				"Lord Trigon",
				"Master Trigon",
				"King Trigon",
				"Conqueror of Worlds",
				"Ruler of the Five Under Realms"
			],
			"place_of_birth": "-",
			"first_appearance": "New Teen Titans #5 (March, 1981)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "God / Eternal",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Yellow",
			"hair_color": "Black",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Belial (son)",
				"Ruskoff (son)",
				"Suge (son)",
				"Raven (daughter)"
			]
		}
	},
	{
		"id": "triplicate-girl",
		"name": "Triplicate Girl",
		"realName": "Luornu Durgo",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 23,
			"durability": 42,
			"power": 44,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/triplicate-girl.jpg",
		"biography": {
			"full_name": "Luornu Durgo",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Duo Damsel",
				"Una",
				"Triad"
			],
			"place_of_birth": "-",
			"first_appearance": "Teen Titans/Legion Special #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "130 lb // 59 kg",
			"eye_color": "Purple",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Earth, 31st century"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "triton",
		"name": "Triton",
		"realName": "Triton",
		"stats": {
			"intelligence": 56,
			"strength": 63,
			"speed": 50,
			"durability": 65,
			"power": 35,
			"combat": 55
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/triton.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Island of Attilan, Atlantic Ocean",
			"first_appearance": "Fantastic Four #45 (December, 1965)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Inhuman",
			"height": "6'2 // 188 cm",
			"weight": "190 lb // 86 kg",
			"eye_color": "Green",
			"hair_color": "No Hair",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Inhuman Royal Family",
				"Universal Inhumans",
				"Royal Guard",
				"New Inhuman Elite",
				"formerly Shi'ar Army Elite Corps & Imperial Guard[citation needed]",
				"Namor's Deep Six"
			],
			"relatives": [
				"Mander",
				"Azur (parents",
				"deceased)",
				"Karnak (brother",
				"deceased)",
				"Magnar",
				"Zeta (paternal grandparents)",
				"Kobar",
				"La (maternal grandparents)",
				"Rynda (paternal aunt)",
				"Ambur (maternal aunt)",
				"Black Bolt",
				"Maximus",
				"Medusa",
				"Crystal (cousins)"
			]
		}
	},
	{
		"id": "two-face",
		"name": "Two-Face",
		"realName": "Harvey Dent",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 12,
			"durability": 14,
			"power": 9,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/two-face.jpg",
		"biography": {
			"full_name": "Harvey Dent",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Apollo"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'0 // 183 cm",
			"weight": "182 lb // 82 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Reformed criminal",
				"former district attorney"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Duela Dent (Daughter)",
				"Gilda Dent (Wife)",
				"Poison Ivy (Fianc�e)",
				"Rachel Dawes (Girlfriend)"
			]
		}
	},
	{
		"id": "ultragirl",
		"name": "Ultragirl",
		"realName": "Tsu-Zana",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 35,
			"durability": 70,
			"power": 35,
			"combat": 80
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ultragirl.jpg",
		"biography": {
			"full_name": "Tsu-Zana",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Suzy Sherman",
				"Ultra-Girl"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6 // 168 cm",
			"weight": "233 lb // 105 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Model"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Initiative",
				"New Warriors"
			],
			"relatives": [
				"Toby Sherman (father)"
			]
		}
	},
	{
		"id": "ultron",
		"name": "Ultron",
		"realName": "Ultron",
		"stats": {
			"intelligence": 88,
			"strength": 83,
			"speed": 42,
			"durability": 100,
			"power": 100,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ultron.jpg",
		"biography": {
			"full_name": "Ultron",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Crimson Cowl",
				"Great Devil",
				"Great Ultron",
				"Iron Man",
				"Mark",
				"Omega",
				"Ultimate Ultron",
				"Ultron-5 (and hundreds of other sequential numerical designations)",
				"Ultron Mark Twelve",
				"Ho Yinsen"
			],
			"place_of_birth": "Created in Cresskill, New Jersey",
			"first_appearance": "Avengers #54 (July, 1968)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'9 // 206 cm",
			"weight": "735 lb // 331 kg",
			"eye_color": "Red",
			"hair_color": "-",
			"skin_color": "Silver"
		},
		"work": {
			"occupation": [
				"Mass murderer",
				"scientist",
				"would-be world conqueror",
				"ruler of Phalanx"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Phalanx",
				"formerly Sons of Yinsen",
				"Lethal Legion",
				"Masters of Evil"
			],
			"relatives": [
				"Hank Pym (Yellowjacket",
				"creator",
				"\"father\")",
				"Janet Van Dyne (Wasp",
				"regarded by Ultron as \"mother\" due to marriage to Pym)",
				"Jocasta (creation",
				"former mate)",
				"Alkhema (creation",
				"former mate",
				"deactivated)",
				"Vision (creation",
				"\"son\")",
				"Victor Mancha (creation",
				"son)",
				"Rex (creation",
				"pet",
				"deactivated)",
				"Robos & Bio-Synthezoids (creations of Alkhema",
				"\"grandchildren\"",
				"",
				"destroyed)",
				"Simon Williams (Wonder Man)",
				"Eric Williams (Grim Reaper) & Wanda Maximoff (Scarlet Witch)",
				"all regarded by Ultron as part of his \"extended family\" due to their familial connections with the Vision"
			]
		}
	},
	{
		"id": "utgard-loki",
		"name": "Utgard-Loki",
		"realName": "",
		"stats": {
			"intelligence": 50,
			"strength": 80,
			"speed": 23,
			"durability": 84,
			"power": 80,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/utgard-loki.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Jotunheim",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Frost Giant",
			"height": "50'0 // 15.2 meters",
			"weight": "128000 lb // 58 tons",
			"eye_color": "Blue",
			"hair_color": "White"
		},
		"work": {
			"occupation": [
				"Monarch"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Giants of Jotunheim"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vagabond",
		"name": "Vagabond",
		"realName": "Priscilla Lyons",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/vagabond.jpg",
		"biography": {
			"full_name": "Priscilla Lyons",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "(as Lyons) CAPTAIN AMERICA #325, (as Vagabond) CAPTAIN AMERICA #342",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6' // 168 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former partner of Nomad"
			],
			"relatives": [
				"Phil (brother)"
			]
		}
	},
	{
		"id": "valerie-hart",
		"name": "Valerie Hart",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/valerie-hart.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "East Coast, Canada",
			"first_appearance": "Team Epic Episode 101",
			"publisher": "Team Epic TV",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "125 lb // 56 kg",
			"eye_color": "Hazel",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"Superhero"
			],
			"base": [
				"Toronto"
			]
		},
		"connections": {
			"group_affiliation": [
				"Team Epic"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "valkyrie",
		"name": "Valkyrie",
		"realName": "Brunnhilde (also spelled Brunnhilda)",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/valkyrie.jpg",
		"biography": {
			"full_name": "Brunnhilde (also spelled Brunnhilda)",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Barbara Norriss",
				"Samantha Parrington"
			],
			"place_of_birth": "Presumably Asgard",
			"first_appearance": "(Enchantress in Valkyrie's form) AVENGERS #87, (Samantha Parrington in Valkyrie's form) INCREDIBLE HULK #142, (Brunnhilde in Barbara Norriss's body) DEFENDERS #3, (Brunnhilde in her own body) DEFENDERS #109",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "6'3' // 191 cm",
			"weight": "475 lb // 214 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Chooser of the Slain",
				"Adventurer"
			],
			"base": [
				"Asgard, later New York City area, later Defenders Mansion, Colorado."
			]
		},
		"connections": {
			"group_affiliation": [
				"Gods at Asgard",
				"Valkyrior",
				"Defenders"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vanisher",
		"name": "Vanisher",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 10,
			"speed": 75,
			"durability": 56,
			"power": 61,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vanisher.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Telford Porter"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "X-Men (Vol 1) #2",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'5 // 165 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Green",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"former subversive"
			],
			"base": [
				"former) Factor Three headquarters, Europe",
				"Beat Street Club, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"(former) Outer Circle of Enforcers II",
				"Factor Three",
				"Fallen Angels"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vegeta",
		"name": "Vegeta",
		"realName": "Vegeta",
		"stats": {
			"intelligence": 81,
			"strength": 100,
			"speed": 92,
			"durability": 95,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vegeta.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Prince Vegeta",
				"The Saiyan Prince",
				"The Prince of all Saiyans",
				"Majin Vegeta",
				"Bejiita",
				"Bejiita no Ouji",
				"Vejita",
				"Vegita",
				"Captain Vegeta",
				"Vegeta-Sama",
				"Makita (Hebrew dub)",
				"Bezita (Malaysian dub)",
				"Super Vegeta"
			],
			"place_of_birth": "-",
			"first_appearance": "Dragon Ball #17",
			"publisher": "Shueisha",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Saiyan",
			"height": "5'6 // 168 cm",
			"weight": "163 lb // 73 kg",
			"eye_color": "-",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "venom",
		"name": "Venom",
		"realName": "Eddie Brock",
		"stats": {
			"intelligence": 75,
			"strength": 57,
			"speed": 65,
			"durability": 84,
			"power": 86,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/venom.jpg",
		"biography": {
			"full_name": "Edward Charles Allan Brock",
			"alter_egos": [
				"Anti-Venom",
				"Toxin"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "New York, New York",
			"first_appearance": "(as alien costume) Secret Wars #8, (behind the scenes) Web of Spider-Man #18, (actual appearance) Amazing Spider-Man #300",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "6'3 // 191 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"Vigilante",
				"former journalist for the Daily Globe",
				"government operative"
			],
			"base": [
				"New York, New York"
			]
		},
		"connections": {
			"group_affiliation": [
				"Sinister Six (formerly)"
			],
			"relatives": [
				"Eddie Brock: Carl Brock (father)",
				"Jamie Brock (mother)",
				"Anne Weying (She-Venom",
				"ex wife",
				"deceased)",
				"Venom symbiote: Carnage (bonded to Cletus Kasidy",
				"1st generation offspring)",
				"five forced offspring - one independant (bonded to Donna",
				"last name unrevealed",
				"1st generation offspring)",
				"four forming a composite symbiote (Hybrid (bonded to Scott Washington",
				"1st generation offspring)",
				"Toxin (bonded to Patrick Mulligan",
				"2nd generation offspring)"
			]
		}
	},
	{
		"id": "venom-ii",
		"name": "Venom II",
		"realName": "Angelo Fortunato",
		"stats": {
			"intelligence": 50,
			"strength": 57,
			"speed": 47,
			"durability": 70,
			"power": 54,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/venom-ii.jpg",
		"biography": {
			"full_name": "Angelo Fortunato",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Marvel Knights Spider-Man #7 (2005)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Vincente Paolo Fortunato (father)",
				"unidentified mother (deceased)",
				"Giacomo Fortunato (Jimmy-Six",
				"brother)",
				"Anna Fortunato (sister)",
				"Mary Fortunato (sister-in-law)",
				"James Fortunato (nephew)",
				"other unidentified neices or nephews"
			]
		}
	},
	{
		"id": "venom-iii",
		"name": "Venom III",
		"realName": "MacDonald Gargan",
		"stats": {
			"intelligence": 63,
			"strength": 73,
			"speed": 35,
			"durability": 90,
			"power": 73,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/venom-iii.jpg",
		"biography": {
			"full_name": "MacDonald Gargan",
			"alter_egos": [
				"Scorpion"
			],
			"aliases": [
				"Scorpion"
			],
			"place_of_birth": "-",
			"first_appearance": "(As Gargan) Amazing Spider-Man #19 (1964); (as Scorpion) Amazing Spider-Man #20 (1965); (as Venom) Marvel Knights: Spider-Man #10 (2005)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "7'6 // 229 cm",
			"weight": "742 lb // 334 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Government operative",
				"former professional criminal",
				"private eye"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Thunderbolts",
				"formerly (as Scorpion) Masters of Evil",
				"\"Spider-Man Revenge League\"",
				"(as Venom) Sinister Twelve"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "venompool",
		"name": "Venompool",
		"realName": "Wade Wilson",
		"stats": {
			"intelligence": 69,
			"strength": 57,
			"speed": 63,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/venompool.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Deadpool",
				"Evil Deadpool"
			],
			"aliases": [
				"Deadpool"
			],
			"place_of_birth": "-",
			"first_appearance": "What If? Iron Man: Demon in an Armor #1 (February, 2011)",
			"publisher": "Marvel Comics",
			"alignment": "-"
		},
		"appearance": {
			"gender": "Male",
			"race": "Symbiote",
			"height": "7'5 // 226 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"Conqueror",
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vertigo-ii",
		"name": "Vertigo II",
		"realName": "-",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/vertigo-ii.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"Blaquesmith"
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "The Savage Land",
			"first_appearance": "MARVEL FANFARE #1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'6' // 168 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Blue",
			"hair_color": "Silver"
		},
		"work": {
			"occupation": [
				"Assassin"
			],
			"base": [
				"Formerly the Savage Land, now mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former member of the Savage Land Mutates",
				"later a member of the Marauders"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vibe",
		"name": "Vibe",
		"realName": "Cisco Ramon",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 17,
			"durability": 30,
			"power": 99,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vibe.jpg",
		"biography": {
			"full_name": "Francisco Paco Ramon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "The New 52: FCBD Special Edition #1",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'10 // 178 cm",
			"weight": "157 lb // 71 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Rapture (Armando Ramon",
				"brother)",
				"Dante Ramon (brother)"
			]
		}
	},
	{
		"id": "vindicator",
		"name": "Vindicator",
		"realName": "Heather Hudson",
		"stats": {
			"intelligence": 63,
			"strength": 63,
			"speed": 53,
			"durability": 64,
			"power": 58,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vindicator.jpg",
		"biography": {
			"full_name": "Heather McNeil Hudson",
			"alter_egos": [
				"Vindicator II"
			],
			"aliases": [
				"Guardian"
			],
			"place_of_birth": "Calgary, Alberta, Canada",
			"first_appearance": "X-Men #139 (November, 1980)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Green",
			"hair_color": "Red"
		},
		"work": {
			"occupation": [
				"former secretary",
				"researcher"
			],
			"base": [
				"Ottawa, Canada"
			]
		},
		"connections": {
			"group_affiliation": [
				"Alpha Flight"
			],
			"relatives": [
				"Guardian",
				"husband"
			]
		}
	},
	{
		"id": "vindicator",
		"name": "Vindicator",
		"realName": "Dr. James McDonald Hudson",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/vindicator.jpg",
		"biography": {
			"full_name": "Dr. James McDonald Hudson",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "violator",
		"name": "Violator",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/violator.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Clown"
			],
			"place_of_birth": "-",
			"first_appearance": "as Clown (Spawn #1), as Violator (Spawn #2)",
			"publisher": "Image Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "violet-parr",
		"name": "Violet Parr",
		"realName": "Violet Parr",
		"stats": {
			"intelligence": 56,
			"strength": 9,
			"speed": 13,
			"durability": 50,
			"power": 79,
			"combat": 15
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/violet-parr.jpg",
		"biography": {
			"full_name": "Violet Parr",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Vi (nickname)",
				"The Queen of the Unseen",
				"Invisagirl (InvisaVi)"
			],
			"place_of_birth": "-",
			"first_appearance": "The Incredibles (Movies, 2004)",
			"publisher": "Dark Horse Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "4'6 // 137 cm",
			"weight": "90 lb // 41 kg",
			"eye_color": "Violet",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Incredible Family",
				"National Supers Agency"
			],
			"relatives": [
				"Robert Parr (Mr Incredible",
				"father)",
				"Helen Parr (Elastigirl",
				"mother)",
				"Dashiel Parr(Dash",
				"brother)",
				"Jack-jack (brother)"
			]
		}
	},
	{
		"id": "vision",
		"name": "Vision",
		"realName": "Vision",
		"stats": {
			"intelligence": 100,
			"strength": 72,
			"speed": 54,
			"durability": 95,
			"power": 100,
			"combat": 70
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vision.jpg",
		"biography": {
			"full_name": "Vision",
			"alter_egos": [
				"Anti-Vision",
				"Vision II"
			],
			"aliases": [
				"Victor Shade"
			],
			"place_of_birth": "-",
			"first_appearance": "Avengers Vol.1 #57, Young Avengers # 4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Android",
			"height": "6'3 // 191 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Gold",
			"hair_color": "No Hair",
			"skin_color": "Red"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
			]
		},
		"connections": {
			"group_affiliation": [
				"Young Avengers",
				"formerly",
				"Avengers",
				"West Coast Avengers",
				"Defenders",
				"Queen's Vengeance"
			],
			"relatives": [
				"Wanda Maximoff (Scarlet Witch",
				"ex-wife)",
				"Thomas Shepherd (Speed",
				"son)",
				"William Kaplan (Wiccan",
				"son)",
				"Ultron (\"father\")",
				"Henry Pym (Ant-Man",
				"\"grandfather\")",
				"Pietro Maximoff (Quicksilver",
				"ex-brother-in-law)",
				"Erik Magnus Lensher (Magneto",
				"ex-father-in-law)",
				"Jocasta (fellow creation",
				"\"sister\")",
				"Simon Williams (Wonder Man",
				"\"brother\")",
				"Victor Mancha (fellow creation",
				"half brother)",
				"Alkhema (fellow creation",
				"\"stepmother\")"
			]
		}
	},
	{
		"id": "vision-ii",
		"name": "Vision II",
		"realName": "Vision",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/vision-ii.jpg",
		"biography": {
			"full_name": "Vision",
			"alter_egos": [
				"Anti-Vision",
				"Vision"
			],
			"aliases": [
				"Victor Shade",
				"Ghost of Stone"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "Avengers (Vol. 1) #57",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "6'3' // 191 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Red",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"Avengers Mansion, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "vixen",
		"name": "Vixen",
		"realName": "Mari McCabe",
		"stats": {
			"intelligence": 50,
			"strength": 38,
			"speed": 50,
			"durability": 50,
			"power": 62,
			"combat": 25
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vixen.jpg",
		"biography": {
			"full_name": "Mari Jiwe McCabe",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Zambesi",
			"first_appearance": "Action Comics #521 (July, 1981)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "140 lb // 63 kg",
			"eye_color": "Amber",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former Model"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Suicide Squad",
				"Checkmate",
				"Ultramarines",
				"Birds of Prey",
				"Justice League of America"
			],
			"relatives": [
				"Reverend Richard Jiwe (father",
				"deceased)",
				"Jeanne-Mari Jiwe (mother",
				"deceased)",
				"General Mustapha Maksai (uncle",
				"deceased)",
				"Tantu (ancestor)"
			]
		}
	},
	{
		"id": "vulcan",
		"name": "Vulcan",
		"realName": "Gabriel Summers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/vulcan.jpg",
		"biography": {
			"full_name": "Gabriel Summers",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Kid Vulcan"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Black",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men"
			],
			"relatives": [
				"Philip Summers (grandfather)",
				"Deborah Summers (grandmother)",
				"Christopher Summers (Father)",
				"Katherine Anne Summers (Mother)",
				"Scott Summers (Cyclops",
				"brother)",
				"Alexander Summers (Havok",
				"brother)",
				"Jean Grey-Summers (Phoenix",
				"sister-in-law",
				"deceased)",
				"Madelyne Pryor-Summers (ex-sister-in-law",
				"deceased)",
				"Nathan Christopher Summers (Cable",
				"nephew)",
				"Aliya Jenskot (niece-in-law",
				"deceased)",
				"Tyler Dayspring (Genesis",
				"grandnephew",
				"deceased)",
				"Stryfe (clone nephew",
				"deceased)",
				"Rachel Summers (Marvel Girl",
				"alternate timeline niece)"
			]
		}
	},
	{
		"id": "vulture",
		"name": "Vulture",
		"realName": "Adrian Toomes",
		"stats": {
			"intelligence": 75,
			"strength": 22,
			"speed": 42,
			"durability": 25,
			"power": 26,
			"combat": 30
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/vulture.jpg",
		"biography": {
			"full_name": "Adrian Toomes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Staten Island, New York City",
			"first_appearance": "Amazing Spider-Man #2",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'11 // 180 cm",
			"weight": "175 lb // 79 kg",
			"eye_color": "Brown",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Professional criminal",
				"formerly electronics engineer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Sinister Twelve",
				"Sinister Six"
			],
			"relatives": [
				"Marcus (brother",
				"possibly deceased)",
				"Malachi Toomes (nephew",
				"deceased)",
				"Valeria Toomes (daughter)",
				"unnamed son",
				"Ramona (daughter-in-law)",
				"unnamed grandson"
			]
		}
	},
	{
		"id": "walrus",
		"name": "Walrus",
		"realName": "Hubert Carpent",
		"stats": {
			"intelligence": 50,
			"strength": 28,
			"speed": 8,
			"durability": 50,
			"power": 11,
			"combat": 20
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/walrus.jpg",
		"biography": {
			"full_name": "Hubert Carpent",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Brooklyn, New York",
			"first_appearance": "Defenders #131 (May, 1984)",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'0 // 183 cm",
			"weight": "360 lb // 162 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Cab driver"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Humbert Carpenter (uncle)"
			]
		}
	},
	{
		"id": "war-machine",
		"name": "War Machine",
		"realName": "James Rupert Rhodes",
		"stats": {
			"intelligence": 63,
			"strength": 80,
			"speed": 63,
			"durability": 100,
			"power": 100,
			"combat": 85
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/war-machine.jpg",
		"biography": {
			"full_name": "James Rupert Rhodes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Rhodey",
				"Iron Man",
				"Jim Rhodes"
			],
			"place_of_birth": "Philadelphia, Pennsylvania",
			"first_appearance": "Iron Man #118 (1979)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6'1 // 185 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Initiative instructor",
				"adventurer",
				"government agent",
				"formerly: Sentinel Squad O*N*E combat instructor",
				"soldier",
				"pilot"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Initiative",
				"formerly: Sentinel Squad O*N*E",
				"Office of National Emergency (O*N*E)",
				"Crew",
				"Secret Defenders",
				"Worldwatch",
				"Stark Enterprises",
				"Force Works",
				"West Coast Avengers",
				"U.S. Marine Corps"
			],
			"relatives": [
				"David Rhodes (father)",
				"Roberta Rhodes (mother)",
				"Jeanette Rhodes (sister",
				"deceased)",
				"Josh (uncle",
				"last name unrevealed)",
				"unnamed alleged son"
			]
		}
	},
	{
		"id": "warbird",
		"name": "Warbird",
		"realName": "Carol Danvers",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/warbird.jpg",
		"biography": {
			"full_name": "Carol Susan Jane Danvers",
			"alter_egos": [
				"Binary",
				"Captain Marvel"
			],
			"aliases": [
				"Ms. Marvel",
				"Binary"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'11' // 180 cm",
			"weight": "120 lb // 54 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Former National Aeronautics and Space Administration security Chief",
				"former magazine editor",
				"former freelance writer",
				"former military intelligence officer."
			],
			"base": [
				"Avengers Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"currently Avengers",
				"former companion to the X-Men (as Carol Danvers)",
				"former member of the Starjammers (as Binary)",
				"Former Avenger (as Ms. Marvel)"
			],
			"relatives": [
				"Joseph (father)",
				"Marie (mother)",
				"Steve (brother",
				"deceased)",
				""
			]
		}
	},
	{
		"id": "warlock",
		"name": "Warlock",
		"realName": "Adam Warlock",
		"stats": {
			"intelligence": 88,
			"strength": 36,
			"speed": 79,
			"durability": 95,
			"power": 71,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/warlock.jpg",
		"biography": {
			"full_name": "Adam Warlock",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Him",
				"(in an alternate future) the Magus"
			],
			"place_of_birth": "The Beehive, Shard Island, Atlantic Ocean",
			"first_appearance": "Fantastic Four #66",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2' // 188 cm",
			"weight": "240 lb // 108 kg",
			"eye_color": "Red",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Avenger",
				"savior of worlds"
			],
			"base": [
				"Counter-Earth, later mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Infinity Watch",
				"(as the Magus) head of Universal Church of Truth in an alternate future"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "warp",
		"name": "Warp",
		"realName": "Emil LaSalle",
		"stats": {
			"intelligence": 38,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 85,
			"combat": 50
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/warp.jpg",
		"biography": {
			"full_name": "Emil LaSalle",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "The New Teen Titans #14 (December 1981)",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'8 // 173 cm",
			"weight": "148 lb // 67 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Brotherhood of Evil",
				"The Society"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "warpath",
		"name": "Warpath",
		"realName": "James Proudstar",
		"stats": {
			"intelligence": 38,
			"strength": 72,
			"speed": 47,
			"durability": 70,
			"power": 26,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/warpath.jpg",
		"biography": {
			"full_name": "James Proudstar",
			"alter_egos": [
				"Thunderbird II"
			],
			"aliases": [
				"Thunderbird"
			],
			"place_of_birth": "Camp Verde, Arizona",
			"first_appearance": "New Mutants #16 (June, 1984)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "7'2 // 218 cm",
			"weight": "350 lb // 158 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men (Team Cyclops)",
				"Security Recon",
				"formerly X-Force (Strike Team)",
				"X-Corporation",
				"X-Force",
				"New Mutants",
				"Hellions"
			],
			"relatives": [
				"Thunderbird (John Proudstar",
				"brother",
				"deceased)",
				"Maria Proudstar (mother",
				"deceased)",
				"Neal Proudstar (father",
				"deceased)"
			]
		}
	},
	{
		"id": "wasp",
		"name": "Wasp",
		"realName": "Janet Van Dyne",
		"stats": {
			"intelligence": 63,
			"strength": 17,
			"speed": 58,
			"durability": 52,
			"power": 29,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wasp.jpg",
		"biography": {
			"full_name": "Janet Van Dyne",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Pixie"
			],
			"place_of_birth": "Cresskill, New Jersey",
			"first_appearance": "TALES TO ASTONISH #44",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'4 // 163 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Blue",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"fashion designer",
				"independently wealthy socialite"
			],
			"base": [
				"Avengers Mansion"
			]
		},
		"connections": {
			"group_affiliation": [
				"Avengers"
			],
			"relatives": [
				"Vernon Van Dyne (father",
				"deceased)",
				"unnamed mother (deceased)",
				"Henry \"Hank\" Pym (ex-husband)"
			]
		}
	},
	{
		"id": "watcher",
		"name": "Watcher",
		"realName": "Uatu",
		"stats": {
			"intelligence": 100,
			"strength": 80,
			"speed": 67,
			"durability": 89,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/watcher.jpg",
		"biography": {
			"full_name": "Uatu",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Fantastic Four #13 (April, 1963)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Watchers",
				"Friend and Ally of the Fantastic Four",
				"among other Earth heroes"
			],
			"relatives": [
				"Ikor (father)",
				"Aron (nephew)",
				"Qyre",
				"Zoma (cousins)"
			]
		}
	},
	{
		"id": "weapon-xi",
		"name": "Weapon XI",
		"realName": "Weapon XI",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/weapon-xi.jpg",
		"biography": {
			"full_name": "Weapon XI",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"weapon 10"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "white-canary",
		"name": "White Canary",
		"realName": "",
		"stats": {
			"intelligence": 63,
			"strength": 7,
			"speed": 33,
			"durability": 15,
			"power": 49,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/white-canary.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Silk Sister",
				"Sara Lance"
			],
			"place_of_birth": "-",
			"first_appearance": "Birds of Prey #1",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "white-queen",
		"name": "White Queen",
		"realName": "Emma Grace Frost",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/white-queen.jpg",
		"biography": {
			"full_name": "Emma Grace Frost",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"White Queen"
			],
			"place_of_birth": "Boston, Massachusetts",
			"first_appearance": "UNCANNY X-MEN #129",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "5'10' // 178 cm",
			"weight": "144 lb // 65 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Co-Headmistress of Xavier Institute",
				"Chairperson of the Board and Chief Executive of Frost International"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester, New York",
				"formerly Massachusetts Academy"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men formerly Generation X headmistress",
				"Hellions controller",
				"Hellfire Club Inner Circle"
			],
			"relatives": [
				"Winston (father)",
				"Hazel (mother)",
				"Cordelia (sister)",
				"Adrienne (sister",
				"deceased)",
				"Christian (brother)",
				"Steven (brother-in-law",
				"deceased)",
				"Jocasta (cousin)"
			]
		}
	},
	{
		"id": "wildfire",
		"name": "Wildfire",
		"realName": "Drake Burroughs",
		"stats": {
			"intelligence": 50,
			"strength": 32,
			"speed": 23,
			"durability": 100,
			"power": 77,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wildfire.jpg",
		"biography": {
			"full_name": "Drake Burroughs",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"ERG-1",
				"Atom'x",
				"Randall Burroughs",
				"Jahr-Drake Nigle"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Legion of Super-Heroes"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "winter-soldier",
		"name": "Winter Soldier",
		"realName": "Bucky Barnes",
		"stats": {
			"intelligence": 56,
			"strength": 32,
			"speed": 35,
			"durability": 65,
			"power": 60,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/winter-soldier.jpg",
		"biography": {
			"full_name": "James Buchanan Barnes",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Bucky",
				"Captain America"
			],
			"place_of_birth": "-",
			"first_appearance": "Captain America Vol 5 #1 (January, 2005) (as Winter Soldier)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "5'9 // 175 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "Brown",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former SHIELD operative",
				"Assassin (See Note under \"Winter Soldier\" article)",
				"Army Mascot",
				"Student"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Black Widow (partner)",
				"Nick Fury (employer)",
				"formerly Avengers",
				"New Avengers",
				"Invaders",
				"Kid Commandos",
				"Liberty Legion",
				"Young Allies",
				"Crazy S.U.E.S.",
				"Captain America (partner)",
				"Falcon (partner)"
			],
			"relatives": [
				"George M. Barnes (father",
				"deceased)",
				"Winifred C. Barnes (mother",
				"deceased)",
				"Rebecca P. Barnes Proctor (sister)",
				"Ida (aunt",
				"presumed deceased)",
				"Mr. Proctor (brother-in-law)",
				"unidentified niece and nephew",
				"Scott Proctor (grandnephew)",
				"Kimberly Proctor (grandniece)"
			]
		}
	},
	{
		"id": "wiz-kid",
		"name": "Wiz Kid",
		"realName": "Takashi Matsuya",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/wiz-kid.jpg",
		"biography": {
			"full_name": "Takashi Matsuya",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Place of birth unknown",
			"first_appearance": "X-TERMINATORS # 1",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "-",
			"race": "-",
			"height": "4'7' // 140 cm",
			"weight": "87 lb // 39 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Student"
			],
			"base": [
				"Saint Simons Academy, New Hampshire"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Terminators"
			],
			"relatives": [
				"Unnamed parents deceased"
			]
		}
	},
	{
		"id": "wolfsbane",
		"name": "Wolfsbane",
		"realName": "Rahne Sinclair",
		"stats": {
			"intelligence": 38,
			"strength": 16,
			"speed": 35,
			"durability": 42,
			"power": 26,
			"combat": 42
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wolfsbane.jpg",
		"biography": {
			"full_name": "Rahne Sinclair",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Grimfang",
				"Mutate #490"
			],
			"place_of_birth": "Somewhere in Ross and Cromarty, Scotland",
			"first_appearance": "Marvel Graphic Novel #4: New Mutants",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "12' // 366 cm",
			"weight": "1050 lb // 473 kg",
			"eye_color": "Green",
			"hair_color": "Auburn"
		},
		"work": {
			"occupation": [
				"Teacher"
			],
			"base": [
				"(current) X-Factor Investigations, New York City (former)Professor Xavier's School of Gifted Youngsters, Salem Center, Westchester County, New York",
				"Muir Island, Scotland",
				"X-Factor headquarters, Embassy Row, Washington, D.C.",
				"X-Factor Headquarters, New Yo"
			]
		},
		"connections": {
			"group_affiliation": [
				"(current) X-Factor Investigations",
				"(former) X-Factor",
				"New Mutants",
				"Hellions",
				"Excalibur"
			],
			"relatives": [
				"Reverand Craig (father)",
				"Moira MacTaggert (surrogate mother",
				"deceased)"
			]
		}
	},
	{
		"id": "wolverine",
		"name": "Wolverine",
		"realName": "Logan",
		"stats": {
			"intelligence": 63,
			"strength": 32,
			"speed": 50,
			"durability": 100,
			"power": 89,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wolverine.jpg",
		"biography": {
			"full_name": "James Howlett",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Weapon X",
				"Weapon Ten",
				"Death",
				"Mutate 9601",
				"Jim Logan",
				"Emilio Garra",
				"Weapon Chi",
				"Experiment X",
				"Agent Ten",
				"Peter Richards",
				"Mai kethLogan",
				"Mr. Patch"
			],
			"place_of_birth": "Alberta, Canada",
			"first_appearance": "Incredible Hulk Vol. 2 #180",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Mutant",
			"height": "5'3 // 160 cm",
			"weight": "300 lb // 135 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"instructor",
				"former bartender",
				"bouncer",
				"spy",
				"government operative",
				"mercenary",
				"soldier",
				"sailor",
				"miner"
			],
			"base": [
				"Xavier Institute, Salem Center, Westchester County, New York",
				"Avengers Tower, New York City"
			]
		},
		"connections": {
			"group_affiliation": [
				"X-Men",
				"formerly Horsemen of Apocalypse",
				"Fantastic Four",
				"Secret Defenders",
				"Clan Yashida",
				"Department H",
				"Alpha Flight",
				"Department K",
				"Team X",
				"Team_Weapon_X",
				"Devil's Brigade",
				"Canadian Army"
			],
			"relatives": [
				"John Howlett Sr. (father",
				"deceased)",
				"Elizabeth Howlett (mother",
				"deceased)",
				"John Howlett Jr. (brother",
				"allegedly deceased)",
				"Viper (ex-wife)",
				"Amiko (foster daughter)",
				"Erista (son)",
				"X-23 (clone)"
			]
		}
	},
	{
		"id": "wonder-girl",
		"name": "Wonder Girl",
		"realName": "Cassandra Elizabeth Sandsmark",
		"stats": {
			"intelligence": 75,
			"strength": 90,
			"speed": 25,
			"durability": 80,
			"power": 39,
			"combat": 60
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wonder-girl.jpg",
		"biography": {
			"full_name": "Cassandra Elizabeth Sandsmark",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Cassandra Sandsmark",
				"Cassie",
				"Helen Troy",
				"Wonder Woman",
				"Cassie Sandsmark"
			],
			"place_of_birth": "-",
			"first_appearance": "Wonder Woman (vol. 2) #105 (January 1996)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Demi-God",
			"height": "5'5 // 165 cm",
			"weight": "114 lb // 51 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Teen Titans",
				"Young Justice",
				"Themyscira"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "wonder-man",
		"name": "Wonder Man",
		"realName": "Simon Williams",
		"stats": {
			"intelligence": 75,
			"strength": 100,
			"speed": 53,
			"durability": 90,
			"power": 64,
			"combat": 64
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wonder-man.jpg",
		"biography": {
			"full_name": "Simon Williams",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Wondie",
				"JQ-272712-K"
			],
			"place_of_birth": "Paterson, New Jersey",
			"first_appearance": "AVENGERS #9",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "380 lb // 171 kg",
			"eye_color": "Red",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Former industrialist",
				"now stuntman",
				"actor",
				"adventurer"
			],
			"base": [
				"Mobile"
			]
		},
		"connections": {
			"group_affiliation": [
				"Former ally of the original Masters of Evil",
				"former member of the East Coast Avengers",
				"current member of the West Coast Avengers"
			],
			"relatives": [
				"Sanford (father",
				"deceased) Martha (mother)",
				"Eric (alias the Grim Reaper",
				"brother",
				"deceased)",
				"Vision II ('brother')"
			]
		}
	},
	{
		"id": "wonder-woman",
		"name": "Wonder Woman",
		"realName": "Diana Prince",
		"stats": {
			"intelligence": 88,
			"strength": 100,
			"speed": 79,
			"durability": 100,
			"power": 100,
			"combat": 100
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wonder-woman.jpg",
		"biography": {
			"full_name": "Diana of Themyscira",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Princess Diana",
				"Princess of the Amazons",
				"Goddess of Truth",
				"Wondy",
				"Wonder Girl",
				"The Amazon Princess"
			],
			"place_of_birth": "Themyscira",
			"first_appearance": "All-Star Comics #8 (December, 1941)",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Amazon",
			"height": "6'0 // 183 cm",
			"weight": "165 lb // 74 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Emissary to the world of Man",
				"Protector of Paradise Island",
				"former Goddess of Truth"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Justice League of America",
				"Justice Society of America (pre-Crisis Earth-2 version)",
				"All-Star Squadron (pre-Crisis Earth-2 version)"
			],
			"relatives": [
				"Queen Hippolyta (mother",
				"deceased)",
				"Donna Troy (Troia) (magically-created duplicate)"
			]
		}
	},
	{
		"id": "wondra",
		"name": "Wondra",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/wondra.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "-",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "-",
			"height": "- // 0 cm",
			"weight": "- lb // 0 kg",
			"eye_color": "-",
			"hair_color": "-"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "wyatt-wingfoot",
		"name": "Wyatt Wingfoot",
		"realName": "Wyatt Wingfoot",
		"stats": {
			"intelligence": 10,
			"strength": 10,
			"speed": 12,
			"durability": 1,
			"power": 1,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/wyatt-wingfoot.jpg",
		"biography": {
			"full_name": "Wyatt Wingfoot",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "Keewazi Reservation, Oklahoma",
			"first_appearance": "FANTASTIC FOUR #50",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'5' // 196 cm",
			"weight": "260 lb // 117 kg",
			"eye_color": "Brown",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Occasional adventurer"
			],
			"base": [
				"Fantastic Four headquarters, New York City, and Keewazi Reservation, Oklahoma"
			]
		},
		"connections": {
			"group_affiliation": [
				"Ally and companion of the Fantastic Four"
			],
			"relatives": [
				"Will Wingfoot (father",
				"deceased)",
				"Chief Silent Fox (grandfather",
				"deceased)"
			]
		}
	},
	{
		"id": "x-23",
		"name": "X-23",
		"realName": "Laura Kinney",
		"stats": {
			"intelligence": 75,
			"strength": 24,
			"speed": 42,
			"durability": 100,
			"power": 55,
			"combat": 95
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/x-23.jpg",
		"biography": {
			"full_name": "Laura Kinney",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Laura Logan",
				"Laura Howlett",
				"Laura X",
				"Talon",
				"Wolverine",
				"X23"
			],
			"place_of_birth": "The Facility, location unrevealed",
			"first_appearance": "NYX #3",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Mutant / Clone",
			"height": "5'1 // 155 cm",
			"weight": "110 lb // 50 kg",
			"eye_color": "Green",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Student",
				"former",
				"Assassin",
				"Prostitute"
			],
			"base": [
				"Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
			]
		},
		"connections": {
			"group_affiliation": [
				"New X-Men",
				"formerly Xavier Institute Student Body",
				"The Facility"
			],
			"relatives": [
				"Sarah Kinney (surrogate mother",
				"deceased)",
				"James Howlett (Wolverine",
				"genetic progenitor)"
			]
		}
	},
	{
		"id": "x-man",
		"name": "X-Man",
		"realName": "Nate Grey",
		"stats": {
			"intelligence": 88,
			"strength": 53,
			"speed": 53,
			"durability": 95,
			"power": 100,
			"combat": 84
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/x-man.jpg",
		"biography": {
			"full_name": "Nate Grey",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Nate the Great"
			],
			"place_of_birth": "American Northeast of Earth-295",
			"first_appearance": "X-Man #1 (1995)",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "5'9 // 175 cm",
			"weight": "135 lb // 61 kg",
			"eye_color": "Blue",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"Former shaman",
				"adventurer",
				"freedom fighter"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly X-Men",
				"Brotherhood of Mutants",
				"Forge's resistance"
			],
			"relatives": [
				"Scott Summers of Earth-295 (Cyclops",
				"genetic template)",
				"Jean Grey of Earth-295 (genetic template)"
			]
		}
	},
	{
		"id": "yellow-claw",
		"name": "Yellow Claw",
		"realName": "",
		"stats": {},
		"portrait": "http://www.superherodb.com/pictures/portraits/yellow-claw.jpg",
		"biography": {
			"full_name": "-",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"The Claw"
			],
			"place_of_birth": "Somewhere in mainland China",
			"first_appearance": "(historical) YELLOW CLAW #1; (modern) (telepathic 'voice' of Yellow Claw) STRANGE TALES #160, (robot Yellow Claw) STRANGE TALES # 161, (actual Yellow Claw)CAPTAIN AMERICA #164",
			"publisher": "Marvel Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'2 // 188 cm",
			"weight": "210 lb // 95 kg",
			"eye_color": "Blue",
			"hair_color": "No Hair"
		},
		"work": {
			"occupation": [
				"Would-be conqueror"
			],
			"base": [
				"Various hidden bases throughout the world"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "yellowjacket",
		"name": "Yellowjacket",
		"realName": "Hank Pym",
		"stats": {
			"intelligence": 88,
			"strength": 10,
			"speed": 12,
			"durability": 28,
			"power": 12,
			"combat": 14
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/yellowjacket.jpg",
		"biography": {
			"full_name": "Henry Jonathan Pym",
			"alter_egos": [
				"Ant-Man",
				"Giant-Man",
				"Goliath",
				"Wasp II"
			],
			"aliases": [
				"Hank Pym"
			],
			"place_of_birth": "Elmsford, New York",
			"first_appearance": "(as Pym) TALES TO ASTONISH #27, (as Ant-Man) TALES TO ASTONISH #35, (as Giant-Man) TALES TO ASTONISH #49, (as Goliath) AVENGERS #28, (as Yellowjacket) AVENGERS #59",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Human",
			"height": "6' // 183 cm",
			"weight": "185 lb // 83 kg",
			"eye_color": "Blue",
			"hair_color": "Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"Biochemist",
				"former manager of Avengers Compound"
			],
			"base": [
				"Avengers Mansion, New York City, New York, (formerly)Avengers Compound, Los Angeles, California"
			]
		},
		"connections": {
			"group_affiliation": [
				"The Avengers",
				"The West Coast Avengers",
				"Secret Defenders"
			],
			"relatives": [
				"Maria Trovaya (first wife",
				"deceased)",
				"Janet Van Dyne a.k.a. The Wasp (second wife",
				"divorced)",
				"Ultron (creation",
				"\"son\")",
				"Jocasta (\"first daughter-in-law\")",
				"Alkhema (\"second daughter-in-law\")",
				"Vision (\"grandson\")",
				"Scarlet Witch (former granddaughter-in-law)",
				"Victor Mancha (\"grandson\")"
			]
		}
	},
	{
		"id": "yellowjacket-ii",
		"name": "Yellowjacket II",
		"realName": "Rita DeMara",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 35,
			"durability": 28,
			"power": 31,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/yellowjacket-ii.jpg",
		"biography": {
			"full_name": "Rita DeMara",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Avengers #264",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'5 // 165 cm",
			"weight": "115 lb // 52 kg",
			"eye_color": "Blue",
			"hair_color": "Strawberry Blond"
		},
		"work": {
			"occupation": [
				"Adventurer",
				"former criminal",
				"electronics engineer"
			],
			"base": [
				"New York City area"
			]
		},
		"connections": {
			"group_affiliation": [
				"Formerly Guardians of the Galaxy",
				"Avengers",
				"Masters of Evil"
			],
			"relatives": [
				"-"
			]
		}
	},
	{
		"id": "ymir",
		"name": "Ymir",
		"realName": "Ymir",
		"stats": {
			"intelligence": 50,
			"strength": 100,
			"speed": 27,
			"durability": 100,
			"power": 98,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/ymir.jpg",
		"biography": {
			"full_name": "Ymir",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"Aurgelmir"
			],
			"place_of_birth": "Niffleheim",
			"first_appearance": "JOURNEY INTO MYSTERY #97",
			"publisher": "Marvel Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Frost Giant",
			"height": "1000 // 304.8 meters",
			"weight": "- lb // 0 kg",
			"eye_color": "White",
			"hair_color": "No Hair",
			"skin_color": "White"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Niffleheim"
			]
		},
		"connections": {
			"group_affiliation": [
				"-"
			],
			"relatives": [
				"Utgard-Loki",
				"Loki",
				"and the race of Frost Giants (descendants)"
			]
		}
	},
	{
		"id": "yoda",
		"name": "Yoda",
		"realName": "Yoda",
		"stats": {
			"intelligence": 88,
			"strength": 52,
			"speed": 33,
			"durability": 25,
			"power": 100,
			"combat": 90
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/yoda.jpg",
		"biography": {
			"full_name": "Yoda",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Star Wars: Episode V - The Empire Strikes Back (1980)",
			"publisher": "George Lucas",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Male",
			"race": "Yoda's species",
			"height": "2'2 // 66 cm",
			"weight": "38 lb // 17 kg",
			"eye_color": "Brown",
			"hair_color": "White",
			"skin_color": "Green"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Jedi Order",
				"Jedi High Counsl",
				"Galactic Republic"
			],
			"relatives": [
				"Master: N'Kata Del Gormo",
				"Apprentices: Dooku",
				"Cin Drallig",
				"Ikrit",
				"Rahm Kota",
				"Ki-Adi-Mundi",
				"Oppo Rancisis",
				"Luke Skywalker"
			]
		}
	},
	{
		"id": "zatanna",
		"name": "Zatanna",
		"realName": "Zatanna Zatara",
		"stats": {
			"intelligence": 81,
			"strength": 10,
			"speed": 23,
			"durability": 28,
			"power": 100,
			"combat": 56
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/zatanna.jpg",
		"biography": {
			"full_name": "Zatanna Zatara",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Hawkman #4",
			"publisher": "DC Comics",
			"alignment": "good"
		},
		"appearance": {
			"gender": "Female",
			"race": "Human",
			"height": "5'7 // 170 cm",
			"weight": "127 lb // 57 kg",
			"eye_color": "Blue",
			"hair_color": "Black"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"-"
			]
		},
		"connections": {
			"group_affiliation": [
				"Misty Kilgore",
				"Seven Soldiers of Victory",
				"Justice League",
				"Sentinels of Magic"
			],
			"relatives": [
				"Giovanni \"John\" Zatara (father",
				"deceased)",
				"Sindella (mother",
				"deceased)",
				"Leonardo da Vinci (paternal ancestor",
				"deceased)"
			]
		}
	},
	{
		"id": "zoom",
		"name": "Zoom",
		"realName": "Hunter Zolomon",
		"stats": {
			"intelligence": 50,
			"strength": 10,
			"speed": 100,
			"durability": 28,
			"power": 100,
			"combat": 28
		},
		"portrait": "http://www.superherodb.com/pictures/portraits/zoom.jpg",
		"biography": {
			"full_name": "Hunter Zolomon",
			"alter_egos": [
				"No alter egos found."
			],
			"aliases": [
				"-"
			],
			"place_of_birth": "-",
			"first_appearance": "Flash Secret Files #3",
			"publisher": "DC Comics",
			"alignment": "bad"
		},
		"appearance": {
			"gender": "Male",
			"race": "-",
			"height": "6'1 // 185 cm",
			"weight": "181 lb // 81 kg",
			"eye_color": "Red",
			"hair_color": "Brown"
		},
		"work": {
			"occupation": [
				"-"
			],
			"base": [
				"Keystone City, Kansas"
			]
		},
		"connections": {
			"group_affiliation": [
				"Secret Society of Super Villains",
				"formerly Keystone Police Department",
				"F.B.I."
			],
			"relatives": [
				"Ashley Zolomon (ex-wife)"
			]
		}
	}
];

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map