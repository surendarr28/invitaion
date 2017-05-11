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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heart = function (_mojs$CustomShape) {
    _inherits(Heart, _mojs$CustomShape);

    function Heart() {
        _classCallCheck(this, Heart);

        return _possibleConstructorReturn(this, (Heart.__proto__ || Object.getPrototypeOf(Heart)).apply(this, arguments));
    }

    _createClass(Heart, [{
        key: 'getShape',
        value: function getShape() {
            return '<path d="M92.5939814,7.35914503 C82.6692916,-2.45304834 66.6322927,-2.45304834 56.7076029,7.35914503 L52.3452392,11.6965095 C51.0327802,12.9714696 48.9328458,12.9839693 47.6203869,11.6715103 L47.6203869,11.6715103 L43.2705228,7.35914503 C33.3833318,-2.45304834 17.3213337,-2.45304834 7.43414268,7.35914503 C-2.47804756,17.1963376 -2.47804756,33.12084 7.43414268,42.9205337 L29.7959439,65.11984 C29.7959439,65.1323396 29.8084435,65.1323396 29.8084435,65.1448392 L43.2580232,78.4819224 C46.9704072,82.1818068 52.9952189,82.1818068 56.7076029,78.4819224 L70.1696822,65.1448392 C70.1696822,65.1448392 70.1696822,65.1323396 70.1821818,65.1323396 L92.5939814,42.9205337 C102.468673,33.12084 102.468673,17.1963376 92.5939814,7.35914503 L92.5939814,7.35914503 Z"></path>';
        }
    }]);

    return Heart;
}(mojs.CustomShape);

mojs.addShape('heart', Heart);

var burst = new mojs.Burst({
    radius: { 0: 200 },
    count: 20,
    children: {
        shape: 'heart',
        fill: { 'pink': 'deeppink' },
        stroke: { 'pink': 'deeppink' },
        strokeWidth: 10,
        duration: 2000,
        delay: 'stagger(0, 100)',
        repeat: 999,
        easing: 'cubic.out',
        isYoyo: true
    }
}).play();

var heart = new mojs.Shape({
    shape: 'heart',
    fill: 'deeppink',
    stroke: { 'deeppink': 'deeppink' },
    scale: { 0.5: 1.2 },
    strokeWidth: { 5: 6 },
    duration: 2000,
    delay: 1000,
    easing: 'cubic.out',
    repeat: 999,
    isYoyo: true
}).play();

var clickBurst1 = new mojs.Burst({
    left: 0, top: 0,
    radius: { 4: 100 },
    count: 20,
    shape: 'heart',
    children: {
        shape: 'heart',
        fill: [{ '#9EC9F5': '#9ED8C6' }, { '#91D3F7': '#9AE4CF' }, { '#DC93CF': '#E3D36B' }, { '#CF8EEF': '#CBEB98' }, { '#87E9C6': '#1FCC93' }, { '#A7ECD0': '#9AE4CF' }, { '#87E9C6': '#A635D9' }, { '#D58EB3': '#E0B6F5' }, { '#F48BA2': '#CF8EEF' }, { '#91D3F7': '#A635D9' }, { '#CF8EEF': '#CBEB98' }, { '#87E9C6': '#A635D9' }],
        scale: { 2: 0, easing: 'cubic.out' },
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [1000, 1500],
        strokeWidth: 50,
        easing: 'cubic.out'

    }
});

var clickheart1 = new mojs.Shape({
    left: 0, top: 0,
    shape: 'heart',
    fill: 'deeppink',
    scale: { 0.5: 0, easing: 'cubic.out' },
    duration: 1000,
    strokeWidth: 50,
    easing: 'cubic.out',
    delay: 'stagger(0, 100)'
});

var clickBurst = new mojs.Burst({
    left: 0, top: 0,
    radius: { 4: 100 },
    count: 20,
    shape: 'heart',
    children: {
        shape: 'heart',
        fill: [{ '#9EC9F5': '#9ED8C6' }, { '#91D3F7': '#9AE4CF' }, { '#DC93CF': '#E3D36B' }, { '#CF8EEF': '#CBEB98' }, { '#87E9C6': '#1FCC93' }, { '#A7ECD0': '#9AE4CF' }, { '#87E9C6': '#A635D9' }, { '#D58EB3': '#E0B6F5' }, { '#F48BA2': '#CF8EEF' }, { '#91D3F7': '#A635D9' }, { '#CF8EEF': '#CBEB98' }, { '#87E9C6': '#A635D9' }],
        scale: { 2: 0, easing: 'cubic.out' },
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [1000, 1500],
        strokeWidth: 50,
        easing: 'cubic.out'

    }
});

var clickheart = new mojs.Shape({
    left: 0, top: 0,
    shape: 'heart',
    fill: 'deeppink',
    scale: { 0.5: 0, easing: 'cubic.out' },
    duration: 1000,
    strokeWidth: 50,
    easing: 'cubic.out',
    delay: 'stagger(0, 100)'
});

document.addEventListener('click', function (e) {
    var coords = { x: e.pageX, y: e.pageY };
    clickBurst1.tune(coords).replay();

    clickheart1.tune(coords).replay();
});

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 1500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 1500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 1500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 2500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 2500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 3500);

setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 3500);
setInterval(function () {
    var coords = { x: Math.floor(Math.random() * window.innerWidth) + 10, y: Math.floor(Math.random() * 300) + 10 };
    clickBurst.tune(coords).replay();

    clickheart.tune(coords).replay();
}, 3500);

var BUST_OPTS = {
    count: 'rand(5,10)',
    degree: 10,
    angle: -5,
    radius: { 80: 100 },
    children: {
        shape: 'heart',
        fill: 'red',
        radius: 'rand(5, 10)',
        pathScale: ['rand(20, 50)', 'rand(0, 0)'],
        degreeShift: 'rand(400, 500)',
        swirlFrequency: 'rand(0, 1)',
        direction: [5, -1000],
        isSwirl: true,
        duration: 50000,
        easing: 'cubic.out',
        isForce3d: true,
        repeat: 999
    }
};

var burst0 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 0,
    y: { 0: 0 }
}));

var burst1 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 50,
    y: { 0: 0 }
}));

var burst2 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 100,
    y: { 0: 0 }
}));

var burst3 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 150,
    y: { 0: 0 }
}));

var burst4 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 200,
    y: { 0: 0 }
}));

var burst5 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 250,
    y: { 0: 0 }
}));

var burst6 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 300,
    y: { 0: 0 }
}));

var burst7 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 350,
    y: { 0: 0 }
}));

var burst8 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 400,
    y: { 0: 0 }
}));

var burst9 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 450,
    y: { 0: 0 }
}));

var burst10 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 500,
    y: { 0: 0 }
}));

var burst11 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 550,
    y: { 0: 0 }
}));

var burst12 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 600,
    y: { 0: 0 }
}));

var burst13 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 650,
    y: { 0: 0 }
}));

var burst14 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 700,
    y: { 0: 0 }
}));

var burst15 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 750,
    y: { 0: 0 }
}));

var burst16 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 800,
    y: { 0: 0 }
}));

var burst17 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 850,
    y: { 0: 0 }
}));

var burst18 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 900,
    y: { 0: 0 }
}));

var burst19 = new mojs.Burst(_extends({}, BUST_OPTS, {
    left: -120,
    top: 950,
    y: { 0: 0 }
}));

// const timeline = new mojs.Timeline({ speed: .5 });
// timeline.add(burst0, burst1, burst2, burst3, burst4, burst5, burst6, burst7, burst8, burst9, burst10, burst11, burst12, burst13, burst14, burst15, burst16, burst17, burst18, burst19);

// timeline.play();


var calcNewYear = setInterval(function () {
    var date_future = new Date("06/05/2017");
    var date_now = new Date();

    var seconds = Math.floor((date_future - date_now) / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

    //var timeElemet = document.getElementById('timeleft');

    //$("#timeleft").text("Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds);
    if (!days) {
        $("#dayBlock").hide();
    }
    if (!days && !hours) {
        $("#hrsBlock").hide();
    }

    if (!days && !hours && !minutes) {
        $("#minBlock").hide();
    }

    if (!days && !hours && !minutes && !seconds) {
        $("#secBlock").hide();
    }
    $("#timeleftDay").text(days);
    $("#timeleftHours").text(hours);
    $("#timeleftMin").text(minutes);
    $("#timeleftSecond").text(seconds);
}, 1000);

/***/ })
/******/ ]);