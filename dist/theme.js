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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/theme.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/theme.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/theme.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".app {\n  background: black;\n  padding: 0; }\n\n.component.card {\n  background: none;\n  color: white; }\n  .component.card > .component-body {\n    padding: 0; }\n\nh3 {\n  font-size: 120%;\n  margin-bottom: 0; }\n\n.react-grid-item > .react-resizable-handle::after {\n  border-right: 2px solid white;\n  border-bottom: 2px solid white; }\n\n.highcharts-solidgauge-series .highcharts-data-label {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles/theme.scss"],"names":[],"mappings":"AAAA;EACI,iBAAiB;EACjB,UAAU,EAAA;;AAGd;EACI,gBAAgB;EAChB,YAAY,EAAA;EAFhB;IAKQ,UAAU,EAAA;;AAIlB;EACI,eAAe;EACf,gBAAgB,EAAA;;AAGpB;EACI,6BAA6B;EAC7B,8BAA8B,EAAA;;AAGlC;EACI,aAAa,EAAA","sourcesContent":[".app {\r\n    background: black;\r\n    padding: 0;\r\n}\r\n\r\n.component.card {\r\n    background: none;\r\n    color: white;\r\n\r\n    & > .component-body {\r\n        padding: 0;\r\n    }\r\n}\r\n\r\nh3 {\r\n    font-size: 120%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.react-grid-item > .react-resizable-handle::after {\r\n    border-right: 2px solid white;\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n.highcharts-solidgauge-series .highcharts-data-label {\r\n    display: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/highcharts-react-official/dist/highcharts-react.min.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/highcharts-react-official/dist/highcharts-react.min.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "react"),__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")):undefined}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e){return i(e)||u(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(1),s=r.n(a),f=r(2),p=r.n(f),l="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,d=Object(a.forwardRef)(function(e,t){var r=Object(a.useRef)(),c=Object(a.useRef)();return l(function(){function t(){var t=e.highcharts||p.a,n=e.constructorType||"chart";t?t[n]?e.options?c.current=t[n](r.current,e.options,e.callback?e.callback:void 0):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(c.current){if(!1!==e.allowChartUpdate)if(!e.immutable&&c.current){var n;(n=c.current).update.apply(n,[e.options].concat(o(e.updateArgs||[!0,!0])))}else t()}else t()}),l(function(){return function(){c.current&&(c.current.destroy(),c.current=null)}},[]),Object(a.useImperativeHandle)(t,function(){return{get chart(){return c.current},container:r}},[]),s.a.createElement("div",n({},e.containerProps,{ref:r}))});t.default=Object(a.memo)(d)},function(t,r){t.exports=e},function(e,r){e.exports=t}])});
//# sourceMappingURL=highcharts-react.min.js.map

/***/ }),

/***/ "./node_modules/highcharts/highcharts-more.js":
/*!****************************************************!*\
  !*** ./node_modules/highcharts/highcharts-more.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(e){ true&&module.exports?(e["default"]=e,module.exports=e): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(z){e(z);e.Highcharts=z;return e}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(e){function z(e,d,h,c){e.hasOwnProperty(d)||(e[d]=c.apply(null,h))}e=e?e._modules:{};z(e,"Extensions/Pane.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Pointer.js"],e["Core/Utilities.js"],
e["Mixins/CenteredSeries.js"]],function(e,d,h,c,a,n){function k(b,a,f){return Math.sqrt(Math.pow(b-f[0],2)+Math.pow(a-f[1],2))<=f[2]/2}var t=a.addEvent,q=a.extend,y=a.merge,b=a.pick,f=a.splat;e.prototype.collectionsWithUpdate.push("pane");a=function(){function b(b,a){this.options=this.chart=this.center=this.background=void 0;this.coll="pane";this.defaultOptions={center:["50%","50%"],size:"85%",innerSize:"0%",startAngle:0};this.defaultBackgroundOptions={shape:"circle",borderWidth:1,borderColor:h.neutralColor20,
backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,h.backgroundColor],[1,h.neutralColor10]]},from:-Number.MAX_VALUE,innerRadius:0,to:Number.MAX_VALUE,outerRadius:"105%"};this.init(b,a)}b.prototype.init=function(b,a){this.chart=a;this.background=[];a.pane.push(this);this.setOptions(b)};b.prototype.setOptions=function(b){this.options=y(this.defaultOptions,this.chart.angular?{background:{}}:void 0,b)};b.prototype.render=function(){var b=this.options,a=this.options.background,m=this.chart.renderer;
this.group||(this.group=m.g("pane-group").attr({zIndex:b.zIndex||0}).add());this.updateCenter();if(a)for(a=f(a),b=Math.max(a.length,this.background.length||0),m=0;m<b;m++)a[m]&&this.axis?this.renderBackground(y(this.defaultBackgroundOptions,a[m]),m):this.background[m]&&(this.background[m]=this.background[m].destroy(),this.background.splice(m,1))};b.prototype.renderBackground=function(b,a){var f="animate",m={"class":"highcharts-pane "+(b.className||"")};this.chart.styledMode||q(m,{fill:b.backgroundColor,
stroke:b.borderColor,"stroke-width":b.borderWidth});this.background[a]||(this.background[a]=this.chart.renderer.path().add(this.group),f="attr");this.background[a][f]({d:this.axis.getPlotBandPath(b.from,b.to,b)}).attr(m)};b.prototype.updateCenter=function(b){this.center=(b||this.axis||{}).center=n.getCenter.call(this)};b.prototype.update=function(b,a){y(!0,this.options,b);y(!0,this.chart.options.pane,b);this.setOptions(this.options);this.render();this.chart.axes.forEach(function(b){b.pane===this&&
(b.pane=null,b.update({},a))},this)};return b}();e.prototype.getHoverPane=function(b){var a=this,f;b&&a.pane.forEach(function(m){var M=b.chartX-a.plotLeft,d=b.chartY-a.plotTop;k(a.inverted?d:M,a.inverted?M:d,m.center)&&(f=m)});return f};t(e,"afterIsInsidePlot",function(b){this.polar&&(b.isInsidePlot=this.pane.some(function(a){return k(b.x,b.y,a.center)}))});t(c,"beforeGetHoverData",function(a){var f=this.chart;f.polar?(f.hoverPane=f.getHoverPane(a),a.filter=function(m){return m.visible&&!(!a.shared&&
m.directTouch)&&b(m.options.enableMouseTracking,!0)&&(!f.hoverPane||m.xAxis.pane===f.hoverPane)}):f.hoverPane=void 0});t(c,"afterGetHoverData",function(b){var a=this.chart;b.hoverPoint&&b.hoverPoint.plotX&&b.hoverPoint.plotY&&a.hoverPane&&!k(b.hoverPoint.plotX,b.hoverPoint.plotY,a.hoverPane.center)&&(b.hoverPoint=void 0)});d.Pane=a;return d.Pane});z(e,"Core/Axis/HiddenAxis.js",[],function(){return function(){function e(){}e.init=function(d){d.getOffset=function(){};d.redraw=function(){this.isDirty=
!1};d.render=function(){this.isDirty=!1};d.createLabelCollector=function(){return function(){}};d.setScale=function(){};d.setCategories=function(){};d.setTitle=function(){};d.isHidden=!0};return e}()});z(e,"Core/Axis/RadialAxis.js",[e["Core/Axis/Axis.js"],e["Core/Axis/Tick.js"],e["Core/Axis/HiddenAxis.js"],e["Core/Utilities.js"]],function(e,d,h,c){var a=c.addEvent,n=c.correctFloat,k=c.defined,t=c.extend,q=c.fireEvent,y=c.merge,b=c.pick,f=c.relativeLength,m=c.wrap;c=function(){function d(){}d.init=
function(a){var m=e.prototype;a.setOptions=function(b){b=this.options=y(a.constructor.defaultOptions,this.defaultPolarOptions,b);b.plotBands||(b.plotBands=[]);q(this,"afterSetOptions")};a.getOffset=function(){m.getOffset.call(this);this.chart.axisOffset[this.side]=0};a.getLinePath=function(a,f,u){a=this.pane.center;var r=this.chart,l=b(f,a[2]/2-this.offset),g=this.left||0,x=this.top||0;"undefined"===typeof u&&(u=this.horiz?0:this.center&&-this.center[3]/2);u&&(l+=u);this.isCircular||"undefined"!==
typeof f?(f=this.chart.renderer.symbols.arc(g+a[0],x+a[1],l,l,{start:this.startAngleRad,end:this.endAngleRad,open:!0,innerR:0}),f.xBounds=[g+a[0]],f.yBounds=[x+a[1]-l]):(f=this.postTranslate(this.angleRad,l),f=[["M",this.center[0]+r.plotLeft,this.center[1]+r.plotTop],["L",f.x,f.y]]);return f};a.setAxisTranslation=function(){m.setAxisTranslation.call(this);this.center&&(this.transA=this.isCircular?(this.endAngleRad-this.startAngleRad)/(this.max-this.min||1):(this.center[2]-this.center[3])/2/(this.max-
this.min||1),this.minPixelPadding=this.isXAxis?this.transA*this.minPointOffset:0)};a.beforeSetTickPositions=function(){this.autoConnect=this.isCircular&&"undefined"===typeof b(this.userMax,this.options.max)&&n(this.endAngleRad-this.startAngleRad)===n(2*Math.PI);!this.isCircular&&this.chart.inverted&&this.max++;this.autoConnect&&(this.max+=this.categories&&1||this.pointRange||this.closestPointRange||0)};a.setAxisSize=function(){m.setAxisSize.call(this);if(this.isRadial){this.pane.updateCenter(this);
var a=this.center=this.pane.center.slice();if(this.isCircular)this.sector=this.endAngleRad-this.startAngleRad;else{var f=this.postTranslate(this.angleRad,a[3]/2);a[0]=f.x-this.chart.plotLeft;a[1]=f.y-this.chart.plotTop}this.len=this.width=this.height=(a[2]-a[3])*b(this.sector,1)/2}};a.getPosition=function(a,f){a=this.translate(a);return this.postTranslate(this.isCircular?a:this.angleRad,b(this.isCircular?f:0>a?0:a,this.center[2]/2)-this.offset)};a.postTranslate=function(b,a){var f=this.chart,r=this.center;
b=this.startAngleRad+b;return{x:f.plotLeft+r[0]+Math.cos(b)*a,y:f.plotTop+r[1]+Math.sin(b)*a}};a.getPlotBandPath=function(a,f,u){var r=function(g){if("string"===typeof g){var l=parseInt(g,10);m.test(g)&&(l=l*x/100);return l}return g},l=this.center,g=this.startAngleRad,x=l[2]/2,p=Math.min(this.offset,0),C=this.left||0,A=this.top||0,m=/%$/;var d=this.isCircular;var k=b(r(u.outerRadius),x),c=r(u.innerRadius);r=b(r(u.thickness),10);if("polygon"===this.options.gridLineInterpolation)p=this.getPlotLinePath({value:a}).concat(this.getPlotLinePath({value:f,
reverse:!0}));else{a=Math.max(a,this.min);f=Math.min(f,this.max);a=this.translate(a);f=this.translate(f);d||(k=a||0,c=f||0);if("circle"!==u.shape&&d)u=g+(a||0),g+=f||0;else{u=-Math.PI/2;g=1.5*Math.PI;var h=!0}k-=p;p=this.chart.renderer.symbols.arc(C+l[0],A+l[1],k,k,{start:Math.min(u,g),end:Math.max(u,g),innerR:b(c,k-(r-p)),open:h});d&&(d=(g+u)/2,C=C+l[0]+l[2]/2*Math.cos(d),p.xBounds=d>-Math.PI/2&&d<Math.PI/2?[C,this.chart.plotWidth]:[0,C],p.yBounds=[A+l[1]+l[2]/2*Math.sin(d)],p.yBounds[0]+=d>-Math.PI&&
0>d||d>Math.PI?-10:10)}return p};a.getCrosshairPosition=function(b,a,f){var r=b.value,l=this.pane.center;if(this.isCircular){if(k(r))b.point&&(g=b.point.shapeArgs||{},g.start&&(r=this.chart.inverted?this.translate(b.point.rectPlotY,!0):b.point.x));else{var g=b.chartX||0;var x=b.chartY||0;r=this.translate(Math.atan2(x-f,g-a)-this.startAngleRad,!0)}b=this.getPosition(r);g=b.x;x=b.y}else k(r)||(g=b.chartX,x=b.chartY),k(g)&&k(x)&&(f=l[1]+this.chart.plotTop,r=this.translate(Math.min(Math.sqrt(Math.pow(g-
a,2)+Math.pow(x-f,2)),l[2]/2)-l[3]/2,!0));return[r,g||0,x||0]};a.getPlotLinePath=function(b){var a=this,u=a.pane.center,r=a.chart,l=r.inverted,g=b.value,x=b.reverse,p=a.getPosition(g),C=a.pane.options.background?a.pane.options.background[0]||a.pane.options.background:{},A=C.innerRadius||"0%",d=C.outerRadius||"100%";C=u[0]+r.plotLeft;var m=u[1]+r.plotTop,k=p.x,c=p.y,h=a.height;p=u[3]/2;var t;b.isCrosshair&&(c=this.getCrosshairPosition(b,C,m),g=c[0],k=c[1],c=c[2]);if(a.isCircular)g=Math.sqrt(Math.pow(k-
C,2)+Math.pow(c-m,2)),x="string"===typeof A?f(A,1):A/g,r="string"===typeof d?f(d,1):d/g,u&&p&&(g=p/g,x<g&&(x=g),r<g&&(r=g)),u=[["M",C+x*(k-C),m-x*(m-c)],["L",k-(1-r)*(k-C),c+(1-r)*(m-c)]];else if((g=a.translate(g))&&(0>g||g>h)&&(g=0),"circle"===a.options.gridLineInterpolation)u=a.getLinePath(0,g,p);else if(u=[],r[l?"yAxis":"xAxis"].forEach(function(g){g.pane===a.pane&&(t=g)}),t)for(C=t.tickPositions,t.autoConnect&&(C=C.concat([C[0]])),x&&(C=C.slice().reverse()),g&&(g+=p),k=0;k<C.length;k++)m=t.getPosition(C[k],
g),u.push(k?["L",m.x,m.y]:["M",m.x,m.y]);return u};a.getTitlePosition=function(){var b=this.center,a=this.chart,f=this.options.title;return{x:a.plotLeft+b[0]+(f.x||0),y:a.plotTop+b[1]-{high:.5,middle:.25,low:0}[f.align]*b[2]+(f.y||0)}};a.createLabelCollector=function(){var b=this;return function(){if(b.isRadial&&b.tickPositions&&!0!==b.options.labels.allowOverlap)return b.tickPositions.map(function(a){return b.ticks[a]&&b.ticks[a].label}).filter(function(b){return!!b})}}};d.compose=function(c,e){a(c,
"init",function(b){var a=this.chart,f=a.inverted,r=a.angular,l=a.polar,g=this.isXAxis,x=this.coll,p=r&&g,C,A=a.options;b=b.userOptions.pane||0;b=this.pane=a.pane&&a.pane[b];if("colorAxis"===x)this.isRadial=!1;else{if(r){if(p?h.init(this):d.init(this),C=!g)this.defaultPolarOptions=d.defaultRadialGaugeOptions}else l&&(d.init(this),this.defaultPolarOptions=(C=this.horiz)?d.defaultCircularOptions:y("xAxis"===x?c.defaultOptions:c.defaultYAxisOptions,d.defaultRadialOptions),f&&"yAxis"===x&&(this.defaultPolarOptions.stackLabels=
c.defaultYAxisOptions.stackLabels,this.defaultPolarOptions.reversedStacks=!0));r||l?(this.isRadial=!0,A.chart.zoomType=null,this.labelCollector||(this.labelCollector=this.createLabelCollector()),this.labelCollector&&a.labelCollectors.push(this.labelCollector)):this.isRadial=!1;b&&C&&(b.axis=this);this.isCircular=C}});a(c,"afterInit",function(){var a=this.chart,f=this.options,u=this.pane,r=u&&u.options;a.angular&&this.isXAxis||!u||!a.angular&&!a.polar||(this.angleRad=(f.angle||0)*Math.PI/180,this.startAngleRad=
(r.startAngle-90)*Math.PI/180,this.endAngleRad=(b(r.endAngle,r.startAngle+360)-90)*Math.PI/180,this.offset=f.offset||0)});a(c,"autoLabelAlign",function(b){this.isRadial&&(b.align=void 0,b.preventDefault())});a(c,"destroy",function(){if(this.chart&&this.chart.labelCollectors){var b=this.labelCollector?this.chart.labelCollectors.indexOf(this.labelCollector):-1;0<=b&&this.chart.labelCollectors.splice(b,1)}});a(c,"initialAxisTranslation",function(){this.isRadial&&this.beforeSetTickPositions()});a(e,"afterGetPosition",
function(b){this.axis.getPosition&&t(b.pos,this.axis.getPosition(this.pos))});a(e,"afterGetLabelPosition",function(a){var m=this.axis,u=this.label;if(u){var r=u.getBBox(),l=m.options.labels,g=l.y,x=20,p=l.align,C=(m.translate(this.pos)+m.startAngleRad+Math.PI/2)/Math.PI*180%360,A=Math.round(C),d="end",c=0>A?A+360:A,h=c,t=0,e=0,y=k(g)?0:.3*-r.height;if(m.isRadial){var q=m.getPosition(this.pos,m.center[2]/2+f(b(l.distance,-25),m.center[2]/2,-m.center[2]/2));"auto"===l.rotation?u.attr({rotation:C}):
k(g)||(g=m.chart.renderer.fontMetrics(u.styles&&u.styles.fontSize).b-r.height/2);k(p)||(m.isCircular?(r.width>m.len*m.tickInterval/(m.max-m.min)&&(x=0),p=C>x&&C<180-x?"left":C>180+x&&C<360-x?"right":"center"):p="center",u.attr({align:p}));if("auto"===p&&2===m.tickPositions.length&&m.isCircular){90<c&&180>c?c=180-c:270<c&&360>=c&&(c=540-c);180<h&&360>=h&&(h=360-h);if(m.pane.options.startAngle===A||m.pane.options.startAngle===A+360||m.pane.options.startAngle===A-360)d="start";p=-90<=A&&90>=A||-360<=
A&&-270>=A||270<=A&&360>=A?"start"===d?"right":"left":"start"===d?"left":"right";70<h&&110>h&&(p="center");15>c||180<=c&&195>c?t=.3*r.height:15<=c&&35>=c?t="start"===d?0:.75*r.height:195<=c&&215>=c?t="start"===d?.75*r.height:0:35<c&&90>=c?t="start"===d?.25*-r.height:r.height:215<c&&270>=c&&(t="start"===d?r.height:.25*-r.height);15>h?e="start"===d?.15*-r.height:.15*r.height:165<h&&180>=h&&(e="start"===d?.15*r.height:.15*-r.height);u.attr({align:p});u.translate(e,t+y)}a.pos.x=q.x+(l.x||0);a.pos.y=q.y+
(g||0)}}});m(e.prototype,"getMarkPath",function(b,a,f,r,l,g,x){var p=this.axis;p.isRadial?(b=p.getPosition(this.pos,p.center[2]/2+r),a=["M",a,f,"L",b.x,b.y]):a=b.call(this,a,f,r,l,g,x);return a})};d.defaultCircularOptions={gridLineWidth:1,labels:{align:void 0,distance:15,x:0,y:void 0,style:{textOverflow:"none"}},maxPadding:0,minPadding:0,showLastLabel:!1,tickLength:0};d.defaultRadialGaugeOptions={labels:{align:"center",x:0,y:void 0},minorGridLineWidth:0,minorTickInterval:"auto",minorTickLength:10,
minorTickPosition:"inside",minorTickWidth:1,tickLength:10,tickPosition:"inside",tickWidth:2,title:{rotation:0},zIndex:2};d.defaultRadialOptions={gridLineInterpolation:"circle",gridLineWidth:1,labels:{align:"right",x:-3,y:-2},showLastLabel:!1,title:{x:4,text:null,rotation:90}};return d}();c.compose(e,d);return c});z(e,"Series/AreaRange/AreaRangePoint.js",[e["Series/Area/AreaSeries.js"],e["Core/Series/Point.js"],e["Core/Utilities.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=function(d,
c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return a(d,c)};return function(d,c){function b(){this.constructor=d}a(d,c);d.prototype=null===c?Object.create(c):(b.prototype=c.prototype,new b)}}(),a=d.prototype,n=h.defined,k=h.isNumber;return function(d){function h(){var a=null!==d&&d.apply(this,arguments)||this;a.high=void 0;a.low=void 0;a.options=void 0;a.plotHigh=void 0;a.plotLow=void 0;a.plotHighX=
void 0;a.plotLowX=void 0;a.plotX=void 0;a.series=void 0;return a}c(h,d);h.prototype.setState=function(){var d=this.state,b=this.series,f=b.chart.polar;n(this.plotHigh)||(this.plotHigh=b.yAxis.toPixels(this.high,!0));n(this.plotLow)||(this.plotLow=this.plotY=b.yAxis.toPixels(this.low,!0));b.stateMarkerGraphic&&(b.lowerStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.upperStateMarkerGraphic);this.graphic=this.upperGraphic;this.plotY=this.plotHigh;f&&(this.plotX=this.plotHighX);a.setState.apply(this,
arguments);this.state=d;this.plotY=this.plotLow;this.graphic=this.lowerGraphic;f&&(this.plotX=this.plotLowX);b.stateMarkerGraphic&&(b.upperStateMarkerGraphic=b.stateMarkerGraphic,b.stateMarkerGraphic=b.lowerStateMarkerGraphic,b.lowerStateMarkerGraphic=void 0);a.setState.apply(this,arguments)};h.prototype.haloPath=function(){var d=this.series.chart.polar,b=[];this.plotY=this.plotLow;d&&(this.plotX=this.plotLowX);this.isInside&&(b=a.haloPath.apply(this,arguments));this.plotY=this.plotHigh;d&&(this.plotX=
this.plotHighX);this.isTopInside&&(b=b.concat(a.haloPath.apply(this,arguments)));return b};h.prototype.isValid=function(){return k(this.low)&&k(this.high)};return h}(e.prototype.pointClass)});z(e,"Series/AreaRange/AreaRangeSeries.js",[e["Series/AreaRange/AreaRangePoint.js"],e["Series/Area/AreaSeries.js"],e["Series/Column/ColumnSeries.js"],e["Core/Globals.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a,n,k){var t=this&&this.__extends||function(){var b=
function(a,f){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,l){b.__proto__=l}||function(b,l){for(var g in l)l.hasOwnProperty(g)&&(b[g]=l[g])};return b(a,f)};return function(a,f){function r(){this.constructor=a}b(a,f);a.prototype=null===f?Object.create(f):(r.prototype=f.prototype,new r)}}(),q=d.prototype,y=h.prototype;h=c.noop;var b=a.prototype,f=k.defined,m=k.extend,v=k.isArray,w=k.pick,L=k.merge;a=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=
void 0;b.options=void 0;b.points=void 0;b.lowerStateMarkerGraphic=void 0;b.xAxis=void 0;return b}t(c,a);c.prototype.toYData=function(b){return[b.low,b.high]};c.prototype.highToXY=function(b){var a=this.chart,l=this.xAxis.postTranslate(b.rectPlotX||0,this.yAxis.len-b.plotHigh);b.plotHighX=l.x-a.plotLeft;b.plotHigh=l.y-a.plotTop;b.plotLowX=b.plotX};c.prototype.translate=function(){var b=this,a=b.yAxis,l=!!b.modifyValue;q.translate.apply(b);b.points.forEach(function(g){var x=g.high,p=g.plotY;g.isNull?
g.plotY=null:(g.plotLow=p,g.plotHigh=a.translate(l?b.modifyValue(x,g):x,0,1,0,1),l&&(g.yBottom=g.plotHigh))});this.chart.polar&&this.points.forEach(function(g){b.highToXY(g);g.tooltipPos=[(g.plotHighX+g.plotLowX)/2,(g.plotHigh+g.plotLow)/2]})};c.prototype.getGraphPath=function(b){var a=[],l=[],g,x=q.getGraphPath;var p=this.options;var C=this.chart.polar,f=C&&!1!==p.connectEnds,d=p.connectNulls,m=p.step;b=b||this.points;for(g=b.length;g--;){var c=b[g];var k=C?{plotX:c.rectPlotX,plotY:c.yBottom,doCurve:!1}:
{plotX:c.plotX,plotY:c.plotY,doCurve:!1};c.isNull||f||d||b[g+1]&&!b[g+1].isNull||l.push(k);var h={polarPlotY:c.polarPlotY,rectPlotX:c.rectPlotX,yBottom:c.yBottom,plotX:w(c.plotHighX,c.plotX),plotY:c.plotHigh,isNull:c.isNull};l.push(h);a.push(h);c.isNull||f||d||b[g-1]&&!b[g-1].isNull||l.push(k)}b=x.call(this,b);m&&(!0===m&&(m="left"),p.step={left:"right",center:"center",right:"left"}[m]);a=x.call(this,a);l=x.call(this,l);p.step=m;p=[].concat(b,a);!this.chart.polar&&l[0]&&"M"===l[0][0]&&(l[0]=["L",
l[0][1],l[0][2]]);this.graphPath=p;this.areaPath=b.concat(l);p.isArea=!0;p.xMap=b.xMap;this.areaPath.xMap=b.xMap;return p};c.prototype.drawDataLabels=function(){var a=this.points,f=a.length,l,g=[],x=this.options.dataLabels,p,C=this.chart.inverted;if(x){if(v(x)){var A=x[0]||{enabled:!1};var c=x[1]||{enabled:!1}}else A=m({},x),A.x=x.xHigh,A.y=x.yHigh,c=m({},x),c.x=x.xLow,c.y=x.yLow;if(A.enabled||this._hasPointLabels){for(l=f;l--;)if(p=a[l]){var d=A.inside?p.plotHigh<p.plotLow:p.plotHigh>p.plotLow;p.y=
p.high;p._plotY=p.plotY;p.plotY=p.plotHigh;g[l]=p.dataLabel;p.dataLabel=p.dataLabelUpper;p.below=d;C?A.align||(A.align=d?"right":"left"):A.verticalAlign||(A.verticalAlign=d?"top":"bottom")}this.options.dataLabels=A;b.drawDataLabels&&b.drawDataLabels.apply(this,arguments);for(l=f;l--;)if(p=a[l])p.dataLabelUpper=p.dataLabel,p.dataLabel=g[l],delete p.dataLabels,p.y=p.low,p.plotY=p._plotY}if(c.enabled||this._hasPointLabels){for(l=f;l--;)if(p=a[l])d=c.inside?p.plotHigh<p.plotLow:p.plotHigh>p.plotLow,p.below=
!d,C?c.align||(c.align=d?"left":"right"):c.verticalAlign||(c.verticalAlign=d?"bottom":"top");this.options.dataLabels=c;b.drawDataLabels&&b.drawDataLabels.apply(this,arguments)}if(A.enabled)for(l=f;l--;)if(p=a[l])p.dataLabels=[p.dataLabelUpper,p.dataLabel].filter(function(g){return!!g});this.options.dataLabels=x}};c.prototype.alignDataLabel=function(){y.alignDataLabel.apply(this,arguments)};c.prototype.drawPoints=function(){var a=this.points.length,r;b.drawPoints.apply(this,arguments);for(r=0;r<a;){var l=
this.points[r];l.origProps={plotY:l.plotY,plotX:l.plotX,isInside:l.isInside,negative:l.negative,zone:l.zone,y:l.y};l.lowerGraphic=l.graphic;l.graphic=l.upperGraphic;l.plotY=l.plotHigh;f(l.plotHighX)&&(l.plotX=l.plotHighX);l.y=w(l.high,l.origProps.y);l.negative=l.y<(this.options.threshold||0);this.zones.length&&(l.zone=l.getZone());this.chart.polar||(l.isInside=l.isTopInside="undefined"!==typeof l.plotY&&0<=l.plotY&&l.plotY<=this.yAxis.len&&0<=l.plotX&&l.plotX<=this.xAxis.len);r++}b.drawPoints.apply(this,
arguments);for(r=0;r<a;)l=this.points[r],l.upperGraphic=l.graphic,l.graphic=l.lowerGraphic,l.origProps&&(m(l,l.origProps),delete l.origProps),r++};c.defaultOptions=L(d.defaultOptions,{lineWidth:1,threshold:null,tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},trackByArea:!0,dataLabels:{align:void 0,verticalAlign:void 0,xLow:0,xHigh:0,yLow:0,yHigh:0}});return c}(d);m(a.prototype,{pointArrayMap:["low","high"],pointValKey:"low",
deferTranslatePolar:!0,pointClass:e,setStackedPoints:h});n.registerSeriesType("arearange",a);"";return a});z(e,"Series/AreaSplineRange/AreaSplineRangeSeries.js",[e["Series/AreaRange/AreaRangeSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return a(c,d)};
return function(c,d){function b(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(b.prototype=d.prototype,new b)}}(),a=d.seriesTypes.spline,n=h.merge;h=h.extend;var k=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.options=void 0;c.data=void 0;c.points=void 0;return c}c(d,a);d.defaultOptions=n(e.defaultOptions);return d}(e);h(k.prototype,{getPointSpline:a.prototype.getPointSpline});d.registerSeriesType("areasplinerange",k);"";return k});z(e,"Series/ColumnRange/ColumnRangePoint.js",
[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d){var h=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])};return a(c,d)};return function(c,d){function k(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(k.prototype=d.prototype,new k)}}(),c=e.seriesTypes;e=c.column.prototype.pointClass;var a=d.extend,n=d.isNumber;
d=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c.series=void 0;c.options=void 0;c.barX=void 0;c.pointWidth=void 0;c.shapeType=void 0;return c}h(c,a);c.prototype.isValid=function(){return n(this.low)};return c}(c.arearange.prototype.pointClass);a(d.prototype,{setState:e.prototype.setState});return d});z(e,"Series/ColumnRange/ColumnRangeSeries.js",[e["Series/ColumnRange/ColumnRangePoint.js"],e["Core/Globals.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,
d,h,c){var a=this&&this.__extends||function(){var b=function(a,f){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)a.hasOwnProperty(f)&&(b[f]=a[f])};return b(a,f)};return function(a,f){function c(){this.constructor=a}b(a,f);a.prototype=null===f?Object.create(f):(c.prototype=f.prototype,new c)}}();d=d.noop;var n=h.seriesTypes,k=n.arearange,t=n.column,q=t.prototype,y=k.prototype,b=c.clamp,f=c.merge,m=c.pick;c=c.extend;var v={pointRange:null,
marker:null,states:{hover:{halo:!1}}};n=function(c){function d(){var b=null!==c&&c.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;return b}a(d,c);d.prototype.setOptions=function(){f(!0,arguments[0],{stacking:void 0});return y.setOptions.apply(this,arguments)};d.prototype.translate=function(){var a=this,f=a.yAxis,c=a.xAxis,d=c.startAngleRad,l,g=a.chart,x=a.xAxis.isRadial,p=Math.max(g.chartWidth,g.chartHeight)+999,C;q.translate.apply(a);a.points.forEach(function(r){var A=
r.shapeArgs||{},k=a.options.minPointLength;r.plotHigh=C=b(f.translate(r.high,0,1,0,1),-p,p);r.plotLow=b(r.plotY,-p,p);var h=C;var e=m(r.rectPlotY,r.plotY)-C;Math.abs(e)<k?(k-=e,e+=k,h-=k/2):0>e&&(e*=-1,h-=e);x?(l=r.barX+d,r.shapeType="arc",r.shapeArgs=a.polarArc(h+e,h,l,l+r.pointWidth)):(A.height=e,A.y=h,k=A.x,k=void 0===k?0:k,A=A.width,A=void 0===A?0:A,r.tooltipPos=g.inverted?[f.len+f.pos-g.plotLeft-h-e/2,c.len+c.pos-g.plotTop-k-A/2,e]:[c.left-g.plotLeft+k+A/2,f.pos-g.plotTop+h+e/2,e])})};d.prototype.crispCol=
function(){return q.crispCol.apply(this,arguments)};d.prototype.drawPoints=function(){return q.drawPoints.apply(this,arguments)};d.prototype.drawTracker=function(){return q.drawTracker.apply(this,arguments)};d.prototype.getColumnMetrics=function(){return q.getColumnMetrics.apply(this,arguments)};d.prototype.pointAttribs=function(){return q.pointAttribs.apply(this,arguments)};d.prototype.adjustForMissingColumns=function(){return q.adjustForMissingColumns.apply(this,arguments)};d.prototype.animate=
function(){return q.animate.apply(this,arguments)};d.prototype.translate3dPoints=function(){return q.translate3dPoints.apply(this,arguments)};d.prototype.translate3dShapes=function(){return q.translate3dShapes.apply(this,arguments)};d.defaultOptions=f(t.defaultOptions,k.defaultOptions,v);return d}(k);c(n.prototype,{directTouch:!0,trackerGroups:["group","dataLabelsGroup"],drawGraph:d,getSymbol:d,polarArc:function(){return q.polarArc.apply(this,arguments)},pointClass:e});h.registerSeriesType("columnrange",
n);"";return n});z(e,"Series/ColumnPyramid/ColumnPyramidSeries.js",[e["Series/Column/ColumnSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return a(c,b)};return function(c,b){function f(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):(f.prototype=
b.prototype,new f)}}(),a=e.prototype,n=h.clamp,k=h.merge,t=h.pick;h=function(d){function h(){var b=null!==d&&d.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}c(h,d);h.prototype.translate=function(){var b=this,c=b.chart,d=b.options,k=b.dense=2>b.closestPointRange*b.xAxis.transA;k=b.borderWidth=t(d.borderWidth,k?0:1);var h=b.yAxis,e=d.threshold,q=b.translatedThreshold=h.getThreshold(e),y=t(d.minPointLength,5),u=b.getColumnMetrics(),r=u.width,l=b.barW=Math.max(r,
1+2*k),g=b.pointXOffset=u.offset;c.inverted&&(q-=.5);d.pointPadding&&(l=Math.ceil(l));a.translate.apply(b);b.points.forEach(function(a){var p=t(a.yBottom,q),f=999+Math.abs(p),x=n(a.plotY,-f,h.len+f);f=a.plotX+g;var m=l/2,k=Math.min(x,p);p=Math.max(x,p)-k;var u;a.barX=f;a.pointWidth=r;a.tooltipPos=c.inverted?[h.len+h.pos-c.plotLeft-x,b.xAxis.len-f-m,p]:[f+m,x+h.pos-c.plotTop,p];x=e+(a.total||a.y);"percent"===d.stacking&&(x=e+(0>a.y)?-100:100);x=h.toPixels(x,!0);var F=(u=c.plotHeight-x-(c.plotHeight-
q))?m*(k-x)/u:0;var v=u?m*(k+p-x)/u:0;u=f-F+m;F=f+F+m;var w=f+v+m;v=f-v+m;var H=k-y;var G=k+p;0>a.y&&(H=k,G=k+p+y);c.inverted&&(w=c.plotWidth-k,u=x-(c.plotWidth-q),F=m*(x-w)/u,v=m*(x-(w-p))/u,u=f+m+F,F=u-2*F,w=f-v+m,v=f+v+m,H=k,G=k+p-y,0>a.y&&(G=k+p+y));a.shapeType="path";a.shapeArgs={x:u,y:H,width:F-u,height:p,d:[["M",u,H],["L",F,H],["L",w,G],["L",v,G],["Z"]]}})};h.defaultOptions=k(e.defaultOptions,{});return h}(e);d.registerSeriesType("columnpyramid",h);"";return h});z(e,"Series/Gauge/GaugePoint.js",
[e["Core/Series/SeriesRegistry.js"]],function(e){var d=this&&this.__extends||function(){var d=function(c,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return d(c,a)};return function(c,a){function h(){this.constructor=c}d(c,a);c.prototype=null===a?Object.create(a):(h.prototype=a.prototype,new h)}}();return function(h){function c(){var a=null!==h&&h.apply(this,arguments)||this;a.options=void 0;
a.series=void 0;a.shapeArgs=void 0;return a}d(c,h);c.prototype.setState=function(a){this.state=a};return c}(e.series.prototype.pointClass)});z(e,"Series/Gauge/GaugeSeries.js",[e["Series/Gauge/GaugePoint.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a){var n=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();d=d.noop;var k=c.series,t=c.seriesTypes.column,q=a.clamp,y=a.isNumber,b=a.extend,f=a.merge,m=a.pick,v=a.pInt;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.points=void 0;a.options=void 0;a.yAxis=void 0;return a}n(a,b);a.prototype.translate=function(){var a=this.yAxis,b=this.options,c=a.center;this.generatePoints();
this.points.forEach(function(d){var l=f(b.dial,d.dial),g=v(m(l.radius,"80%"))*c[2]/200,x=v(m(l.baseLength,"70%"))*g/100,p=v(m(l.rearLength,"10%"))*g/100,r=l.baseWidth||3,A=l.topWidth||1,k=b.overshoot,h=a.startAngleRad+a.translate(d.y,null,null,null,!0);if(y(k)||!1===b.wrap)k=y(k)?k/180*Math.PI:0,h=q(h,a.startAngleRad-k,a.endAngleRad+k);h=180*h/Math.PI;d.shapeType="path";d.shapeArgs={d:l.path||[["M",-p,-r/2],["L",x,-r/2],["L",g,-A/2],["L",g,A/2],["L",x,r/2],["L",-p,r/2],["Z"]],translateX:c[0],translateY:c[1],
rotation:h};d.plotX=c[0];d.plotY=c[1]})};a.prototype.drawPoints=function(){var a=this,b=a.chart,c=a.yAxis.center,d=a.pivot,l=a.options,g=l.pivot,x=b.renderer;a.points.forEach(function(g){var c=g.graphic,p=g.shapeArgs,d=p.d,r=f(l.dial,g.dial);c?(c.animate(p),p.d=d):g.graphic=x[g.shapeType](p).attr({rotation:p.rotation,zIndex:1}).addClass("highcharts-dial").add(a.group);if(!b.styledMode)g.graphic[c?"animate":"attr"]({stroke:r.borderColor||"none","stroke-width":r.borderWidth||0,fill:r.backgroundColor||
h.neutralColor100})});d?d.animate({translateX:c[0],translateY:c[1]}):(a.pivot=x.circle(0,0,m(g.radius,5)).attr({zIndex:2}).addClass("highcharts-pivot").translate(c[0],c[1]).add(a.group),b.styledMode||a.pivot.attr({"stroke-width":g.borderWidth||0,stroke:g.borderColor||h.neutralColor20,fill:g.backgroundColor||h.neutralColor100}))};a.prototype.animate=function(a){var b=this;a||b.points.forEach(function(a){var c=a.graphic;c&&(c.attr({rotation:180*b.yAxis.startAngleRad/Math.PI}),c.animate({rotation:a.shapeArgs.rotation},
b.options.animation))})};a.prototype.render=function(){this.group=this.plotGroup("group","series",this.visible?"visible":"hidden",this.options.zIndex,this.chart.seriesGroup);k.prototype.render.call(this);this.group.clip(this.chart.clipRect)};a.prototype.setData=function(a,b){k.prototype.setData.call(this,a,!1);this.processData();this.generatePoints();m(b,!0)&&this.chart.redraw()};a.prototype.hasData=function(){return!!this.points.length};a.defaultOptions=f(k.defaultOptions,{dataLabels:{borderColor:h.neutralColor20,
borderRadius:3,borderWidth:1,crop:!1,defer:!1,enabled:!0,verticalAlign:"top",y:15,zIndex:2},dial:{},pivot:{},tooltip:{headerFormat:""},showInLegend:!1});return a}(k);b(a.prototype,{angular:!0,directTouch:!0,drawGraph:d,drawTracker:t.prototype.drawTracker,fixedBox:!0,forceDL:!0,noSharedTooltip:!0,pointClass:e,trackerGroups:["group","dataLabelsGroup"]});c.registerSeriesType("gauge",a);"";return a});z(e,"Series/BoxPlot/BoxPlotSeries.js",[e["Series/Column/ColumnSeries.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],
e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a){var n=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();d=d.noop;var k=a.extend,t=a.merge,q=a.pick;a=function(a){function b(){var b=
null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}n(b,a);b.prototype.pointAttribs=function(){return{}};b.prototype.translate=function(){var b=this.yAxis,c=this.pointArrayMap;a.prototype.translate.apply(this);this.points.forEach(function(a){c.forEach(function(c){null!==a[c]&&(a[c+"Plot"]=b.translate(a[c],0,1,0,1))});a.plotHigh=a.highPlot})};b.prototype.drawPoints=function(){var a=this,b=a.options,c=a.chart,d=c.renderer,k,h,e,u,r,l,g=0,x,p,C,A,t=!1!==a.doQuartiles,
n,y=a.options.whiskerLength;a.points.forEach(function(f){var m=f.graphic,J=m?"animate":"attr",v=f.shapeArgs,I={},F={},w={},K={},B=f.color||a.color;"undefined"!==typeof f.plotY&&(x=Math.round(v.width),p=Math.floor(v.x),C=p+x,A=Math.round(x/2),k=Math.floor(t?f.q1Plot:f.lowPlot),h=Math.floor(t?f.q3Plot:f.lowPlot),e=Math.floor(f.highPlot),u=Math.floor(f.lowPlot),m||(f.graphic=m=d.g("point").add(a.group),f.stem=d.path().addClass("highcharts-boxplot-stem").add(m),y&&(f.whiskers=d.path().addClass("highcharts-boxplot-whisker").add(m)),
t&&(f.box=d.path(void 0).addClass("highcharts-boxplot-box").add(m)),f.medianShape=d.path(void 0).addClass("highcharts-boxplot-median").add(m)),c.styledMode||(F.stroke=f.stemColor||b.stemColor||B,F["stroke-width"]=q(f.stemWidth,b.stemWidth,b.lineWidth),F.dashstyle=f.stemDashStyle||b.stemDashStyle||b.dashStyle,f.stem.attr(F),y&&(w.stroke=f.whiskerColor||b.whiskerColor||B,w["stroke-width"]=q(f.whiskerWidth,b.whiskerWidth,b.lineWidth),w.dashstyle=f.whiskerDashStyle||b.whiskerDashStyle||b.dashStyle,f.whiskers.attr(w)),
t&&(I.fill=f.fillColor||b.fillColor||B,I.stroke=b.lineColor||B,I["stroke-width"]=b.lineWidth||0,I.dashstyle=f.boxDashStyle||b.boxDashStyle||b.dashStyle,f.box.attr(I)),K.stroke=f.medianColor||b.medianColor||B,K["stroke-width"]=q(f.medianWidth,b.medianWidth,b.lineWidth),K.dashstyle=f.medianDashStyle||b.medianDashStyle||b.dashStyle,f.medianShape.attr(K)),l=f.stem.strokeWidth()%2/2,g=p+A+l,m=[["M",g,h],["L",g,e],["M",g,k],["L",g,u]],f.stem[J]({d:m}),t&&(l=f.box.strokeWidth()%2/2,k=Math.floor(k)+l,h=Math.floor(h)+
l,p+=l,C+=l,m=[["M",p,h],["L",p,k],["L",C,k],["L",C,h],["L",p,h],["Z"]],f.box[J]({d:m})),y&&(l=f.whiskers.strokeWidth()%2/2,e+=l,u+=l,n=/%$/.test(y)?A*parseFloat(y)/100:y/2,m=[["M",g-n,e],["L",g+n,e],["M",g-n,u],["L",g+n,u]],f.whiskers[J]({d:m})),r=Math.round(f.medianPlot),l=f.medianShape.strokeWidth()%2/2,r+=l,m=[["M",p,r],["L",C,r]],f.medianShape[J]({d:m}))})};b.prototype.toYData=function(a){return[a.low,a.q1,a.median,a.q3,a.high]};b.defaultOptions=t(e.defaultOptions,{threshold:null,tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'},
whiskerLength:"50%",fillColor:h.backgroundColor,lineWidth:1,medianWidth:2,whiskerWidth:2});return b}(e);k(a.prototype,{pointArrayMap:["low","q1","median","q3","high"],pointValKey:"high",drawDataLabels:d,setStackedPoints:d});c.registerSeriesType("boxplot",a);"";return a});z(e,"Series/ErrorBar/ErrorBarSeries.js",[e["Series/BoxPlot/BoxPlotSeries.js"],e["Series/Column/ColumnSeries.js"],e["Core/Color/Palette.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a){var n=this&&
this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),k=c.seriesTypes.arearange,t=a.merge;a=a.extend;var q=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;
b.points=void 0;return b}n(b,a);b.prototype.getColumnMetrics=function(){return this.linkedParent&&this.linkedParent.columnMetrics||d.prototype.getColumnMetrics.call(this)};b.prototype.drawDataLabels=function(){var a=this.pointValKey;k&&(k.prototype.drawDataLabels.call(this),this.data.forEach(function(b){b.y=b[a]}))};b.prototype.toYData=function(a){return[a.low,a.high]};b.defaultOptions=t(e.defaultOptions,{color:h.neutralColor100,grouping:!1,linkedTo:":previous",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'},
whiskerWidth:null});return b}(e);a(q.prototype,{pointArrayMap:["low","high"],pointValKey:"high",doQuartiles:!1});c.registerSeriesType("errorbar",q);"";return q});z(e,"Core/Axis/WaterfallAxis.js",[e["Extensions/Stacking.js"],e["Core/Utilities.js"]],function(e,d){var h=d.addEvent,c=d.objectEach,a;(function(a){function d(){var a=this.waterfall.stacks;a&&(a.changed=!1,delete a.alreadyChanged)}function t(){var a=this.options.stackLabels;a&&a.enabled&&this.waterfall.stacks&&this.waterfall.renderStackTotals()}
function n(){for(var a=this.axes,b=this.series,c=b.length;c--;)b[c].options.stacking&&(a.forEach(function(a){a.isXAxis||(a.waterfall.stacks.changed=!0)}),c=0)}function y(){this.waterfall||(this.waterfall=new b(this))}var b=function(){function a(a){this.axis=a;this.stacks={changed:!1}}a.prototype.renderStackTotals=function(){var a=this.axis,b=a.waterfall.stacks,d=a.stacking&&a.stacking.stackTotalGroup,f=new e(a,a.options.stackLabels,!1,0,void 0);this.dummyStackItem=f;c(b,function(a){c(a,function(a){f.total=
a.stackTotal;a.label&&(f.label=a.label);e.prototype.render.call(f,d);a.label=f.label;delete f.label})});f.total=null};return a}();a.Composition=b;a.compose=function(a,b){h(a,"init",y);h(a,"afterBuildStacks",d);h(a,"afterRender",t);h(b,"beforeRedraw",n)}})(a||(a={}));return a});z(e,"Series/Waterfall/WaterfallPoint.js",[e["Series/Column/ColumnSeries.js"],e["Core/Series/Point.js"],e["Core/Utilities.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return a(c,d)};return function(c,d){function h(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(h.prototype=d.prototype,new h)}}(),a=h.isNumber;return function(h){function e(){var a=null!==h&&h.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}c(e,h);e.prototype.getClassName=function(){var a=d.prototype.getClassName.call(this);this.isSum?
a+=" highcharts-sum":this.isIntermediateSum&&(a+=" highcharts-intermediate-sum");return a};e.prototype.isValid=function(){return a(this.y)||this.isSum||!!this.isIntermediateSum};return e}(e.prototype.pointClass)});z(e,"Series/Waterfall/WaterfallSeries.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"],e["Core/Axis/WaterfallAxis.js"],e["Series/Waterfall/WaterfallPoint.js"]],function(e,d,h,c,a,n,k){var t=this&&this.__extends||
function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,g){a.__proto__=g}||function(a,g){for(var b in g)g.hasOwnProperty(b)&&(a[b]=g[b])};return a(b,c)};return function(b,c){function l(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(l.prototype=c.prototype,new l)}}(),q=c.seriesTypes,y=q.column,b=q.line,f=a.arrayMax,m=a.arrayMin,v=a.correctFloat;q=a.extend;var w=a.merge,B=a.objectEach,z=a.pick;a=function(a){function c(){var b=null!==a&&
a.apply(this,arguments)||this;b.chart=void 0;b.data=void 0;b.options=void 0;b.points=void 0;b.stackedYNeg=void 0;b.stackedYPos=void 0;b.stackKey=void 0;b.xData=void 0;b.yAxis=void 0;b.yData=void 0;return b}t(c,a);c.prototype.generatePoints=function(){var a;y.prototype.generatePoints.apply(this);var b=0;for(a=this.points.length;b<a;b++){var g=this.points[b];var c=this.processedYData[b];if(g.isIntermediateSum||g.isSum)g.y=v(c)}};c.prototype.translate=function(){var a=this.options,b=this.yAxis,g,c=z(a.minPointLength,
5),d=c/2,f=a.threshold,A=a.stacking,h=b.waterfall.stacks[this.stackKey];y.prototype.translate.apply(this);var e=g=f;var k=this.points;var m=0;for(a=k.length;m<a;m++){var t=k[m];var u=this.processedYData[m];var n=t.shapeArgs;var v=[0,u];var q=t.y;if(A){if(h){v=h[m];if("overlap"===A){var w=v.stackState[v.stateIndex--];w=0<=q?w:w-q;Object.hasOwnProperty.call(v,"absolutePos")&&delete v.absolutePos;Object.hasOwnProperty.call(v,"absoluteNeg")&&delete v.absoluteNeg}else 0<=q?(w=v.threshold+v.posTotal,v.posTotal-=
q):(w=v.threshold+v.negTotal,v.negTotal-=q,w-=q),!v.posTotal&&Object.hasOwnProperty.call(v,"absolutePos")&&(v.posTotal=v.absolutePos,delete v.absolutePos),!v.negTotal&&Object.hasOwnProperty.call(v,"absoluteNeg")&&(v.negTotal=v.absoluteNeg,delete v.absoluteNeg);t.isSum||(v.connectorThreshold=v.threshold+v.stackTotal);b.reversed?(u=0<=q?w-q:w+q,q=w):(u=w,q=w-q);t.below=u<=z(f,0);n.y=b.translate(u,0,1,0,1);n.height=Math.abs(n.y-b.translate(q,0,1,0,1));if(q=b.waterfall.dummyStackItem)q.x=m,q.label=h[m].label,
q.setOffset(this.pointXOffset||0,this.barW||0,this.stackedYNeg[m],this.stackedYPos[m])}}else w=Math.max(e,e+q)+v[0],n.y=b.translate(w,0,1,0,1),t.isSum?(n.y=b.translate(v[1],0,1,0,1),n.height=Math.min(b.translate(v[0],0,1,0,1),b.len)-n.y):t.isIntermediateSum?(0<=q?(u=v[1]+g,q=g):(u=g,q=v[1]+g),b.reversed&&(u^=q,q^=u,u^=q),n.y=b.translate(u,0,1,0,1),n.height=Math.abs(n.y-Math.min(b.translate(q,0,1,0,1),b.len)),g+=v[1]):(n.height=0<u?b.translate(e,0,1,0,1)-n.y:b.translate(e,0,1,0,1)-b.translate(e-u,
0,1,0,1),e+=u,t.below=e<z(f,0)),0>n.height&&(n.y+=n.height,n.height*=-1);t.plotY=n.y=Math.round(n.y)-this.borderWidth%2/2;n.height=Math.max(Math.round(n.height),.001);t.yBottom=n.y+n.height;n.height<=c&&!t.isNull?(n.height=c,n.y-=d,t.plotY=n.y,t.minPointLengthOffset=0>t.y?-d:d):(t.isNull&&(n.width=0),t.minPointLengthOffset=0);n=t.plotY+(t.negative?n.height:0);this.chart.inverted?t.tooltipPos[0]=b.len-n:t.tooltipPos[1]=n}};c.prototype.processData=function(b){var c=this.options,g=this.yData,d=c.data,
p=g.length,f=c.threshold||0,r,e,h,k,m;for(m=e=r=h=k=0;m<p;m++){var t=g[m];var n=d&&d[m]?d[m]:{};"sum"===t||n.isSum?g[m]=v(e):"intermediateSum"===t||n.isIntermediateSum?(g[m]=v(r),r=0):(e+=t,r+=t);h=Math.min(e,h);k=Math.max(e,k)}a.prototype.processData.call(this,b);c.stacking||(this.dataMin=h+f,this.dataMax=k)};c.prototype.toYData=function(a){return a.isSum?"sum":a.isIntermediateSum?"intermediateSum":a.y};c.prototype.updateParallelArrays=function(b,c){a.prototype.updateParallelArrays.call(this,b,c);
if("sum"===this.yData[0]||"intermediateSum"===this.yData[0])this.yData[0]=null};c.prototype.pointAttribs=function(a,b){var g=this.options.upColor;g&&!a.options.color&&(a.color=0<a.y?g:null);a=y.prototype.pointAttribs.call(this,a,b);delete a.dashstyle;return a};c.prototype.getGraphPath=function(){return[["M",0,0]]};c.prototype.getCrispPath=function(){var a=this.data,b=this.yAxis,g=a.length,c=Math.round(this.graph.strokeWidth())%2/2,d=Math.round(this.borderWidth)%2/2,f=this.xAxis.reversed,e=this.yAxis.reversed,
h=this.options.stacking,k=[],m;for(m=1;m<g;m++){var t=a[m].shapeArgs;var n=a[m-1];var v=a[m-1].shapeArgs;var u=b.waterfall.stacks[this.stackKey];var q=0<n.y?-v.height:0;u&&v&&t&&(u=u[m-1],h?(u=u.connectorThreshold,q=Math.round(b.translate(u,0,1,0,1)+(e?q:0))-c):q=v.y+n.minPointLengthOffset+d-c,k.push(["M",(v.x||0)+(f?0:v.width||0),q],["L",(t.x||0)+(f?t.width||0:0),q]));v&&k.length&&(!h&&0>n.y&&!e||0<n.y&&e)&&((n=k[k.length-2])&&"number"===typeof n[2]&&(n[2]+=v.height||0),(n=k[k.length-1])&&"number"===
typeof n[2]&&(n[2]+=v.height||0))}return k};c.prototype.drawGraph=function(){b.prototype.drawGraph.call(this);this.graph.attr({d:this.getCrispPath()})};c.prototype.setStackedPoints=function(){function a(a,b,g,c){if(z)for(g;g<z;g++)w.stackState[g]+=c;else w.stackState[0]=a,z=w.stackState.length;w.stackState.push(w.stackState[z-1]+b)}var b=this.options,g=this.yAxis.waterfall.stacks,c=b.threshold,d=c||0,f=d,e=this.stackKey,h=this.xData,k=h.length,m,n,t;this.yAxis.stacking.usePercentage=!1;var v=n=t=
d;if(this.visible||!this.chart.options.chart.ignoreHiddenSeries){var u=g.changed;(m=g.alreadyChanged)&&0>m.indexOf(e)&&(u=!0);g[e]||(g[e]={});m=g[e];for(var q=0;q<k;q++){var y=h[q];if(!m[y]||u)m[y]={negTotal:0,posTotal:0,stackTotal:0,threshold:0,stateIndex:0,stackState:[],label:u&&m[y]?m[y].label:void 0};var w=m[y];var B=this.yData[q];0<=B?w.posTotal+=B:w.negTotal+=B;var D=b.data[q];y=w.absolutePos=w.posTotal;var L=w.absoluteNeg=w.negTotal;w.stackTotal=y+L;var z=w.stackState.length;D&&D.isIntermediateSum?
(a(t,n,0,t),t=n,n=c,d^=f,f^=d,d^=f):D&&D.isSum?(a(c,v,z),d=c):(a(d,B,0,v),D&&(v+=B,n+=B));w.stateIndex++;w.threshold=d;d+=w.stackTotal}g.changed=!1;g.alreadyChanged||(g.alreadyChanged=[]);g.alreadyChanged.push(e)}};c.prototype.getExtremes=function(){var a=this.options.stacking;if(a){var b=this.yAxis;b=b.waterfall.stacks;var g=this.stackedYNeg=[];var c=this.stackedYPos=[];"overlap"===a?B(b[this.stackKey],function(a){g.push(m(a.stackState));c.push(f(a.stackState))}):B(b[this.stackKey],function(a){g.push(a.negTotal+
a.threshold);c.push(a.posTotal+a.threshold)});return{dataMin:m(g),dataMax:f(c)}}return{dataMin:this.dataMin,dataMax:this.dataMax}};c.defaultOptions=w(y.defaultOptions,{dataLabels:{inside:!0},lineWidth:1,lineColor:h.neutralColor80,dashStyle:"Dot",borderColor:h.neutralColor80,states:{hover:{lineWidthPlus:0}}});return c}(y);q(a.prototype,{getZonesGraphs:b.prototype.getZonesGraphs,pointValKey:"y",showLine:!0,pointClass:k});c.registerSeriesType("waterfall",a);n.compose(d.Axis,e);"";return a});z(e,"Series/Polygon/PolygonSeries.js",
[e["Core/Globals.js"],e["Mixins/LegendSymbol.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c){var a=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();e=e.noop;var n=h.series,
k=h.seriesTypes,t=k.area,q=k.line,y=k.scatter;k=c.extend;var b=c.merge;c=function(c){function d(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}a(d,c);d.prototype.getGraphPath=function(){for(var a=q.prototype.getGraphPath.call(this),b=a.length+1;b--;)(b===a.length||"M"===a[b][0])&&0<b&&a.splice(b,0,["Z"]);return this.areaPath=a};d.prototype.drawGraph=function(){this.options.fillColor=this.color;t.prototype.drawGraph.call(this)};d.defaultOptions=
b(y.defaultOptions,{marker:{enabled:!1,states:{hover:{enabled:!1}}},stickyTracking:!1,tooltip:{followPointer:!0,pointFormat:""},trackByArea:!0});return d}(y);k(c.prototype,{type:"polygon",drawLegendSymbol:d.drawRectangle,drawTracker:n.prototype.drawTracker,setStackedPoints:e});h.registerSeriesType("polygon",c);"";return c});z(e,"Series/Bubble/BubblePoint.js",[e["Core/Series/Point.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=
function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(c,d)};return function(c,d){function e(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e)}}();h=h.extend;d=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.options=void 0;c.series=void 0;return c}c(d,a);d.prototype.haloPath=function(a){return e.prototype.haloPath.call(this,
0===a?0:(this.marker?this.marker.radius||0:0)+a)};return d}(d.seriesTypes.scatter.prototype.pointClass);h(d.prototype,{ttBelow:!1});return d});z(e,"Series/Bubble/BubbleLegend.js",[e["Core/Chart/Chart.js"],e["Core/Color/Color.js"],e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Legend.js"],e["Core/Options.js"],e["Core/Color/Palette.js"],e["Core/Series/Series.js"],e["Core/Utilities.js"]],function(e,d,h,c,a,n,k,t,q){var y=d.parse,b=c.noop;n=n.setOptions;d=q.addEvent;var f=q.arrayMax,m=q.arrayMin,
v=q.isNumber,w=q.merge,B=q.objectEach,z=q.pick,E=q.stableSort;q=q.wrap;"";n({legend:{bubbleLegend:{borderColor:void 0,borderWidth:2,className:void 0,color:void 0,connectorClassName:void 0,connectorColor:void 0,connectorDistance:60,connectorWidth:1,enabled:!1,labels:{className:void 0,allowOverlap:!1,format:"",formatter:void 0,align:"right",style:{fontSize:"10px",color:k.neutralColor100},x:0,y:0},maxSize:60,minSize:10,legendIndex:0,ranges:{value:void 0,borderColor:void 0,color:void 0,connectorColor:void 0},
sizeBy:"area",sizeByAbsoluteValue:!1,zIndex:1,zThreshold:0}}});k=function(){function a(a,c){this.options=this.symbols=this.visible=this.ranges=this.movementX=this.maxLabel=this.legendSymbol=this.legendItemWidth=this.legendItemHeight=this.legendItem=this.legendGroup=this.legend=this.fontMetrics=this.chart=void 0;this.setState=b;this.init(a,c)}a.prototype.init=function(a,b){this.options=a;this.visible=!0;this.chart=b.chart;this.legend=b};a.prototype.addToLegend=function(a){a.splice(this.options.legendIndex,
0,this)};a.prototype.drawLegendSymbol=function(a){var b=this.chart,g=this.options,c=z(a.options.itemDistance,20),d=g.ranges;var f=g.connectorDistance;this.fontMetrics=b.renderer.fontMetrics(g.labels.style.fontSize);d&&d.length&&v(d[0].value)?(E(d,function(a,b){return b.value-a.value}),this.ranges=d,this.setOptions(),this.render(),b=this.getMaxLabelSize(),d=this.ranges[0].radius,a=2*d,f=f-d+b.width,f=0<f?f:0,this.maxLabel=b,this.movementX="left"===g.labels.align?f:0,this.legendItemWidth=a+f+c,this.legendItemHeight=
a+this.fontMetrics.h/2):a.options.bubbleLegend.autoRanges=!0};a.prototype.setOptions=function(){var a=this.ranges,b=this.options,g=this.chart.series[b.seriesIndex],c=this.legend.baseline,d={zIndex:b.zIndex,"stroke-width":b.borderWidth},f={zIndex:b.zIndex,"stroke-width":b.connectorWidth},e={align:this.legend.options.rtl||"left"===b.labels.align?"right":"left",zIndex:b.zIndex},h=g.options.marker.fillOpacity,m=this.chart.styledMode;a.forEach(function(l,p){m||(d.stroke=z(l.borderColor,b.borderColor,g.color),
d.fill=z(l.color,b.color,1!==h?y(g.color).setOpacity(h).get("rgba"):g.color),f.stroke=z(l.connectorColor,b.connectorColor,g.color));a[p].radius=this.getRangeRadius(l.value);a[p]=w(a[p],{center:a[0].radius-a[p].radius+c});m||w(!0,a[p],{bubbleAttribs:w(d),connectorAttribs:w(f),labelAttribs:e})},this)};a.prototype.getRangeRadius=function(a){var b=this.options;return this.chart.series[this.options.seriesIndex].getRadius.call(this,b.ranges[b.ranges.length-1].value,b.ranges[0].value,b.minSize,b.maxSize,
a)};a.prototype.render=function(){var a=this.chart.renderer,b=this.options.zThreshold;this.symbols||(this.symbols={connectors:[],bubbleItems:[],labels:[]});this.legendSymbol=a.g("bubble-legend");this.legendItem=a.g("bubble-legend-item");this.legendSymbol.translateX=0;this.legendSymbol.translateY=0;this.ranges.forEach(function(a){a.value>=b&&this.renderRange(a)},this);this.legendSymbol.add(this.legendItem);this.legendItem.add(this.legendGroup);this.hideOverlappingLabels()};a.prototype.renderRange=
function(a){var b=this.options,g=b.labels,c=this.chart,d=c.series[b.seriesIndex],f=c.renderer,e=this.symbols;c=e.labels;var h=a.center,m=Math.abs(a.radius),k=b.connectorDistance||0,r=g.align;k=this.legend.options.rtl||"left"===r?-k:k;var n=b.connectorWidth,t=this.ranges[0].radius||0,v=h-m-b.borderWidth/2+n/2,u=this.fontMetrics;u=u.f/2-(u.h-u.f)/2;var q=f.styledMode;"center"===r&&(k=0,b.connectorDistance=0,a.labelAttribs.align="center");r=v+b.labels.y;var w=t+k+b.labels.x;e.bubbleItems.push(f.circle(t,
h+((v%1?1:.5)-(n%2?0:.5)),m).attr(q?{}:a.bubbleAttribs).addClass((q?"highcharts-color-"+d.colorIndex+" ":"")+"highcharts-bubble-legend-symbol "+(b.className||"")).add(this.legendSymbol));e.connectors.push(f.path(f.crispLine([["M",t,v],["L",t+k,v]],b.connectorWidth)).attr(q?{}:a.connectorAttribs).addClass((q?"highcharts-color-"+this.options.seriesIndex+" ":"")+"highcharts-bubble-legend-connectors "+(b.connectorClassName||"")).add(this.legendSymbol));a=f.text(this.formatLabel(a),w,r+u).attr(q?{}:a.labelAttribs).css(q?
{}:g.style).addClass("highcharts-bubble-legend-labels "+(b.labels.className||"")).add(this.legendSymbol);c.push(a);a.placed=!0;a.alignAttr={x:w,y:r+u}};a.prototype.getMaxLabelSize=function(){var a,b;this.symbols.labels.forEach(function(g){b=g.getBBox(!0);a=a?b.width>a.width?b:a:b});return a||{}};a.prototype.formatLabel=function(a){var b=this.options,g=b.labels.formatter;b=b.labels.format;var c=this.chart.numberFormatter;return b?h.format(b,a):g?g.call(a):c(a.value,1)};a.prototype.hideOverlappingLabels=
function(){var a=this.chart,b=this.symbols;!this.options.labels.allowOverlap&&b&&(a.hideOverlappingLabels(b.labels),b.labels.forEach(function(a,c){a.newOpacity?a.newOpacity!==a.oldOpacity&&b.connectors[c].show():b.connectors[c].hide()}))};a.prototype.getRanges=function(){var a=this.legend.bubbleLegend,b=a.options.ranges,g,c=Number.MAX_VALUE,d=-Number.MAX_VALUE;a.chart.series.forEach(function(a){a.isBubble&&!a.ignoreSeries&&(g=a.zData.filter(v),g.length&&(c=z(a.options.zMin,Math.min(c,Math.max(m(g),
!1===a.options.displayNegative?a.options.zThreshold:-Number.MAX_VALUE))),d=z(a.options.zMax,Math.max(d,f(g)))))});var e=c===d?[{value:d}]:[{value:c},{value:(c+d)/2},{value:d,autoRanges:!0}];b.length&&b[0].radius&&e.reverse();e.forEach(function(a,g){b&&b[g]&&(e[g]=w(b[g],a))});return e};a.prototype.predictBubbleSizes=function(){var a=this.chart,b=this.fontMetrics,g=a.legend.options,c="horizontal"===g.layout,d=c?a.legend.lastLineHeight:0,f=a.plotSizeX,e=a.plotSizeY,h=a.series[this.options.seriesIndex];
a=Math.ceil(h.minPxSize);var m=Math.ceil(h.maxPxSize);h=h.options.maxSize;var k=Math.min(e,f);if(g.floating||!/%$/.test(h))b=m;else if(h=parseFloat(h),b=(k+d-b.h/2)*h/100/(h/100+1),c&&e-b>=f||!c&&f-b>=e)b=m;return[a,Math.ceil(b)]};a.prototype.updateRanges=function(a,b){var g=this.legend.options.bubbleLegend;g.minSize=a;g.maxSize=b;g.ranges=this.getRanges()};a.prototype.correctSizes=function(){var a=this.legend,b=this.chart.series[this.options.seriesIndex];1<Math.abs(Math.ceil(b.maxPxSize)-this.options.maxSize)&&
(this.updateRanges(this.options.minSize,b.maxPxSize),a.render())};return a}();d(a,"afterGetAllItems",function(a){var b=this.bubbleLegend,d=this.options,g=d.bubbleLegend,f=this.chart.getVisibleBubbleSeriesIndex();b&&b.ranges&&b.ranges.length&&(g.ranges.length&&(g.autoRanges=!!g.ranges[0].autoRanges),this.destroyItem(b));0<=f&&d.enabled&&g.enabled&&(g.seriesIndex=f,this.bubbleLegend=new c.BubbleLegend(g,this),this.bubbleLegend.addToLegend(a.allItems))});e.prototype.getVisibleBubbleSeriesIndex=function(){for(var a=
this.series,b=0;b<a.length;){if(a[b]&&a[b].isBubble&&a[b].visible&&a[b].zData.length)return b;b++}return-1};a.prototype.getLinesHeights=function(){var a=this.allItems,b=[],c=a.length,g,d=0;for(g=0;g<c;g++)if(a[g].legendItemHeight&&(a[g].itemHeight=a[g].legendItemHeight),a[g]===a[c-1]||a[g+1]&&a[g]._legendItemPos[1]!==a[g+1]._legendItemPos[1]){b.push({height:0});var f=b[b.length-1];for(d;d<=g;d++)a[d].itemHeight>f.height&&(f.height=a[d].itemHeight);f.step=g}return b};a.prototype.retranslateItems=function(a){var b,
c,g,d=this.options.rtl,f=0;this.allItems.forEach(function(l,p){b=l.legendGroup.translateX;c=l._legendItemPos[1];if((g=l.movementX)||d&&l.ranges)g=d?b-l.options.maxSize/2:b+g,l.legendGroup.attr({translateX:g});p>a[f].step&&f++;l.legendGroup.attr({translateY:Math.round(c+a[f].height/2)});l._legendItemPos[1]=c+a[f].height/2})};d(t,"legendItemClick",function(){var a=this.chart,b=this.visible,c=this.chart.legend;c&&c.bubbleLegend&&(this.visible=!b,this.ignoreSeries=b,a=0<=a.getVisibleBubbleSeriesIndex(),
c.bubbleLegend.visible!==a&&(c.update({bubbleLegend:{enabled:a}}),c.bubbleLegend.visible=a),this.visible=b)});q(e.prototype,"drawChartBox",function(a,b,c){var g=this.legend,d=0<=this.getVisibleBubbleSeriesIndex();if(g&&g.options.enabled&&g.bubbleLegend&&g.options.bubbleLegend.autoRanges&&d){var f=g.bubbleLegend.options;d=g.bubbleLegend.predictBubbleSizes();g.bubbleLegend.updateRanges(d[0],d[1]);f.placed||(g.group.placed=!1,g.allItems.forEach(function(a){a.legendGroup.translateY=null}));g.render();
this.getMargins();this.axes.forEach(function(a){a.visible&&a.render();f.placed||(a.setScale(),a.updateNames(),B(a.ticks,function(a){a.isNew=!0;a.isNewLabel=!0}))});f.placed=!0;this.getMargins();a.call(this,b,c);g.bubbleLegend.correctSizes();g.retranslateItems(g.getLinesHeights())}else a.call(this,b,c),g&&g.options.enabled&&g.bubbleLegend&&(g.render(),g.retranslateItems(g.getLinesHeights()))});c.BubbleLegend=k;return c.BubbleLegend});z(e,"Series/Bubble/BubbleSeries.js",[e["Core/Axis/Axis.js"],e["Series/Bubble/BubblePoint.js"],
e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a,n,k){var t=this&&this.__extends||function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])};return a(b,g)};return function(b,g){function c(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(c.prototype=g.prototype,
new c)}}(),q=h.parse;h=c.noop;var y=n.seriesTypes;c=y.column;var b=y.scatter,f=k.arrayMax,m=k.arrayMin,v=k.clamp,w=k.extend,B=k.isNumber,z=k.merge,E=k.pick,u=k.pInt;k=function(c){function d(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.maxPxSize=void 0;a.minPxSize=void 0;a.options=void 0;a.points=void 0;a.radii=void 0;a.yData=void 0;a.zData=void 0;return a}t(d,c);d.prototype.animate=function(a){!a&&this.points.length<this.options.animationLimit&&this.points.forEach(function(a){var b=
a.graphic;b&&b.width&&(this.hasRendered||b.attr({x:a.plotX,y:a.plotY,width:1,height:1}),b.animate(this.markerAttribs(a),this.options.animation))},this)};d.prototype.getRadii=function(a,b,c){var g=this.zData,d=this.yData,f=c.minPxSize,l=c.maxPxSize,e=[];var p=0;for(c=g.length;p<c;p++){var h=g[p];e.push(this.getRadius(a,b,f,l,h,d[p]))}this.radii=e};d.prototype.getRadius=function(a,b,c,d,f,l){var g=this.options,e="width"!==g.sizeBy,p=g.zThreshold,h=b-a,m=.5;if(null===l||null===f)return null;if(B(f)){g.sizeByAbsoluteValue&&
(f=Math.abs(f-p),h=Math.max(b-p,Math.abs(a-p)),a=0);if(f<a)return c/2-1;0<h&&(m=(f-a)/h)}e&&0<=m&&(m=Math.sqrt(m));return Math.ceil(c+m*(d-c))/2};d.prototype.hasData=function(){return!!this.processedXData.length};d.prototype.pointAttribs=function(b,c){var g=this.options.marker.fillOpacity;b=a.prototype.pointAttribs.call(this,b,c);1!==g&&(b.fill=q(b.fill).setOpacity(g).get("rgba"));return b};d.prototype.translate=function(){var a,b=this.data,d=this.radii;c.prototype.translate.call(this);for(a=b.length;a--;){var f=
b[a];var l=d?d[a]:0;B(l)&&l>=this.minPxSize/2?(f.marker=w(f.marker,{radius:l,width:2*l,height:2*l}),f.dlBox={x:f.plotX-l,y:f.plotY-l,width:2*l,height:2*l}):f.shapeArgs=f.plotY=f.dlBox=void 0}};d.defaultOptions=z(b.defaultOptions,{dataLabels:{formatter:function(){return this.point.z},inside:!0,verticalAlign:"middle"},animationLimit:250,marker:{lineColor:null,lineWidth:1,fillOpacity:.5,radius:null,states:{hover:{radiusPlus:0}},symbol:"circle"},minSize:8,maxSize:"20%",softThreshold:!1,states:{hover:{halo:{size:5}}},
tooltip:{pointFormat:"({point.x}, {point.y}), Size: {point.z}"},turboThreshold:0,zThreshold:0,zoneAxis:"z"});return d}(b);w(k.prototype,{alignDataLabel:c.prototype.alignDataLabel,applyZones:h,bubblePadding:!0,buildKDTree:h,directTouch:!0,isBubble:!0,pointArrayMap:["y","z"],pointClass:d,parallelArrays:["x","y","z"],trackerGroups:["group","dataLabelsGroup"],specialGroup:"group",zoneAxis:"z"});e.prototype.beforePadding=function(){var a=this,b=this.len,g=this.chart,c=0,d=b,e=this.isXAxis,h=e?"xData":
"yData",k=this.min,n={},t=Math.min(g.plotWidth,g.plotHeight),q=Number.MAX_VALUE,w=-Number.MAX_VALUE,y=this.max-k,z=b/y,G=[];this.series.forEach(function(b){var c=b.options;!b.bubblePadding||!b.visible&&g.options.chart.ignoreHiddenSeries||(a.allowZoomOutside=!0,G.push(b),e&&(["minSize","maxSize"].forEach(function(a){var b=c[a],g=/%$/.test(b);b=u(b);n[a]=g?t*b/100:b}),b.minPxSize=n.minSize,b.maxPxSize=Math.max(n.maxSize,n.minSize),b=b.zData.filter(B),b.length&&(q=E(c.zMin,v(m(b),!1===c.displayNegative?
c.zThreshold:-Number.MAX_VALUE,q)),w=E(c.zMax,Math.max(w,f(b))))))});G.forEach(function(b){var g=b[h],f=g.length;e&&b.getRadii(q,w,b);if(0<y)for(;f--;)if(B(g[f])&&a.dataMin<=g[f]&&g[f]<=a.max){var l=b.radii?b.radii[f]:0;c=Math.min((g[f]-k)*z-l,c);d=Math.max((g[f]-k)*z+l,d)}});G.length&&0<y&&!this.logarithmic&&(d-=b,z*=(b+Math.max(0,c)-Math.min(d,b))/b,[["min","userMin",c],["max","userMax",d]].forEach(function(b){"undefined"===typeof E(a.options[b[0]],a[b[1]])&&(a[b[0]]+=b[2]/z)}))};n.registerSeriesType("bubble",
k);"";"";return k});z(e,"Series/PackedBubble/PackedBubblePoint.js",[e["Core/Chart/Chart.js"],e["Core/Series/Point.js"],e["Core/Series/SeriesRegistry.js"]],function(e,d,h){var c=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(c,d)};return function(c,d){function e(){this.constructor=c}a(c,d);c.prototype=null===d?Object.create(d):(e.prototype=
d.prototype,new e)}}();return function(a){function h(){var c=null!==a&&a.apply(this,arguments)||this;c.degree=NaN;c.mass=NaN;c.radius=NaN;c.options=void 0;c.series=void 0;c.value=null;return c}c(h,a);h.prototype.destroy=function(){this.series.layout&&this.series.layout.removeElementFromCollection(this,this.series.layout.nodes);return d.prototype.destroy.apply(this,arguments)};h.prototype.firePointEvent=function(){var a=this.series.options;if(this.isParentNode&&a.parentNode){var c=a.allowPointSelect;
a.allowPointSelect=a.parentNode.allowPointSelect;d.prototype.firePointEvent.apply(this,arguments);a.allowPointSelect=c}else d.prototype.firePointEvent.apply(this,arguments)};h.prototype.select=function(){var a=this.series.chart;this.isParentNode?(a.getSelectedPoints=a.getSelectedParentNodes,d.prototype.select.apply(this,arguments),a.getSelectedPoints=e.prototype.getSelectedPoints):d.prototype.select.apply(this,arguments)};return h}(h.seriesTypes.bubble.prototype.pointClass)});z(e,"Series/Networkgraph/DraggableNodes.js",
[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,d,h){var c=h.addEvent;d.dragNodesMixin={onMouseDown:function(a,c){c=this.chart.pointer.normalize(c);a.fixedPosition={chartX:c.chartX,chartY:c.chartY,plotX:a.plotX,plotY:a.plotY};a.inDragMode=!0},onMouseMove:function(a,c){if(a.fixedPosition&&a.inDragMode){var d=this.chart,e=d.pointer.normalize(c);c=a.fixedPosition.chartX-e.chartX;e=a.fixedPosition.chartY-e.chartY;var h=void 0,n=void 0,b=d.graphLayoutsLookup;if(5<Math.abs(c)||
5<Math.abs(e))h=a.fixedPosition.plotX-c,n=a.fixedPosition.plotY-e,d.isInsidePlot(h,n)&&(a.plotX=h,a.plotY=n,a.hasDragged=!0,this.redrawHalo(a),b.forEach(function(a){a.restartSimulation()}))}},onMouseUp:function(a,c){a.fixedPosition&&(a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}};
c(e,"load",function(){var a=this,d,e,h;a.container&&(d=c(a.container,"mousedown",function(d){var k=a.hoverPoint;k&&k.series&&k.series.hasDraggableNodes&&k.series.options.draggable&&(k.series.onMouseDown(k,d),e=c(a.container,"mousemove",function(a){return k&&k.series&&k.series.onMouseMove(k,a)}),h=c(a.container.ownerDocument,"mouseup",function(a){e();h();return k&&k.series&&k.series.onMouseUp(k,a)}))}));c(a,"destroy",function(){d()})})});z(e,"Series/Networkgraph/Integrations.js",[e["Core/Globals.js"]],
function(e){e.networkgraphIntegrations={verlet:{attractiveForceFunction:function(d,e){return(e-d)/d},repulsiveForceFunction:function(d,e){return(e-d)/d*(e>d?1:0)},barycenter:function(){var d=this.options.gravitationalConstant,e=this.barycenter.xFactor,c=this.barycenter.yFactor;e=(e-(this.box.left+this.box.width)/2)*d;c=(c-(this.box.top+this.box.height)/2)*d;this.nodes.forEach(function(a){a.fixedPosition||(a.plotX-=e/a.mass/a.degree,a.plotY-=c/a.mass/a.degree)})},repulsive:function(d,e,c){e=e*this.diffTemperature/
d.mass/d.degree;d.fixedPosition||(d.plotX+=c.x*e,d.plotY+=c.y*e)},attractive:function(d,e,c){var a=d.getMass(),h=-c.x*e*this.diffTemperature;e=-c.y*e*this.diffTemperature;d.fromNode.fixedPosition||(d.fromNode.plotX-=h*a.fromNode/d.fromNode.degree,d.fromNode.plotY-=e*a.fromNode/d.fromNode.degree);d.toNode.fixedPosition||(d.toNode.plotX+=h*a.toNode/d.toNode.degree,d.toNode.plotY+=e*a.toNode/d.toNode.degree)},integrate:function(d,e){var c=-d.options.friction,a=d.options.maxSpeed,h=(e.plotX+e.dispX-e.prevX)*
c;c*=e.plotY+e.dispY-e.prevY;var k=Math.abs,t=k(h)/(h||1);k=k(c)/(c||1);h=t*Math.min(a,Math.abs(h));c=k*Math.min(a,Math.abs(c));e.prevX=e.plotX+e.dispX;e.prevY=e.plotY+e.dispY;e.plotX+=h;e.plotY+=c;e.temperature=d.vectorLength({x:h,y:c})},getK:function(d){return Math.pow(d.box.width*d.box.height/d.nodes.length,.5)}},euler:{attractiveForceFunction:function(d,e){return d*d/e},repulsiveForceFunction:function(d,e){return e*e/d},barycenter:function(){var d=this.options.gravitationalConstant,e=this.barycenter.xFactor,
c=this.barycenter.yFactor;this.nodes.forEach(function(a){if(!a.fixedPosition){var h=a.getDegree();h*=1+h/2;a.dispX+=(e-a.plotX)*d*h/a.degree;a.dispY+=(c-a.plotY)*d*h/a.degree}})},repulsive:function(d,e,c,a){d.dispX+=c.x/a*e/d.degree;d.dispY+=c.y/a*e/d.degree},attractive:function(d,e,c,a){var h=d.getMass(),k=c.x/a*e;e*=c.y/a;d.fromNode.fixedPosition||(d.fromNode.dispX-=k*h.fromNode/d.fromNode.degree,d.fromNode.dispY-=e*h.fromNode/d.fromNode.degree);d.toNode.fixedPosition||(d.toNode.dispX+=k*h.toNode/
d.toNode.degree,d.toNode.dispY+=e*h.toNode/d.toNode.degree)},integrate:function(d,e){e.dispX+=e.dispX*d.options.friction;e.dispY+=e.dispY*d.options.friction;var c=e.temperature=d.vectorLength({x:e.dispX,y:e.dispY});0!==c&&(e.plotX+=e.dispX/c*Math.min(Math.abs(e.dispX),d.temperature),e.plotY+=e.dispY/c*Math.min(Math.abs(e.dispY),d.temperature))},getK:function(d){return Math.pow(d.box.width*d.box.height/d.nodes.length,.3)}}}});z(e,"Series/Networkgraph/QuadTree.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],
function(e,d){d=d.extend;var h=e.QuadTreeNode=function(c){this.box=c;this.boxSize=Math.min(c.width,c.height);this.nodes=[];this.body=this.isInternal=!1;this.isEmpty=!0};d(h.prototype,{insert:function(c,a){this.isInternal?this.nodes[this.getBoxPosition(c)].insert(c,a-1):(this.isEmpty=!1,this.body?a?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,a-1),this.body=!0),this.nodes[this.getBoxPosition(c)].insert(c,a-1)):(a=new h({top:c.plotX,
left:c.plotY,width:.1,height:.1}),a.body=c,a.isInternal=!1,this.nodes.push(a)):(this.isInternal=!1,this.body=c))},updateMassAndCenter:function(){var c=0,a=0,d=0;this.isInternal?(this.nodes.forEach(function(e){e.isEmpty||(c+=e.mass,a+=e.plotX*e.mass,d+=e.plotY*e.mass)}),a/=c,d/=c):this.body&&(c=this.body.mass,a=this.body.plotX,d=this.body.plotY);this.mass=c;this.plotX=a;this.plotY=d},divideBox:function(){var c=this.box.width/2,a=this.box.height/2;this.nodes[0]=new h({left:this.box.left,top:this.box.top,
width:c,height:a});this.nodes[1]=new h({left:this.box.left+c,top:this.box.top,width:c,height:a});this.nodes[2]=new h({left:this.box.left+c,top:this.box.top+a,width:c,height:a});this.nodes[3]=new h({left:this.box.left,top:this.box.top+a,width:c,height:a})},getBoxPosition:function(c){var a=c.plotY<this.box.top+this.box.height/2;return c.plotX<this.box.left+this.box.width/2?a?0:3:a?1:2}});e=e.QuadTree=function(c,a,d,e){this.box={left:c,top:a,width:d,height:e};this.maxDepth=25;this.root=new h(this.box,
"0");this.root.isInternal=!0;this.root.isRoot=!0;this.root.divideBox()};d(e.prototype,{insertNodes:function(c){c.forEach(function(a){this.root.insert(a,this.maxDepth)},this)},visitNodeRecursive:function(c,a,d){var e;c||(c=this.root);c===this.root&&a&&(e=a(c));!1!==e&&(c.nodes.forEach(function(c){if(c.isInternal){a&&(e=a(c));if(!1===e)return;this.visitNodeRecursive(c,a,d)}else c.body&&a&&a(c.body);d&&d(c)},this),c===this.root&&d&&d(c))},calculateMassAndCenter:function(){this.visitNodeRecursive(null,
null,function(c){c.updateMassAndCenter()})}})});z(e,"Series/Networkgraph/Layouts.js",[e["Core/Chart/Chart.js"],e["Core/Animation/AnimationUtilities.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,d,h,c){var a=d.setAnimation;d=c.addEvent;var n=c.clamp,k=c.defined,t=c.extend,q=c.isFunction,y=c.pick;h.layouts={"reingold-fruchterman":function(){}};t(h.layouts["reingold-fruchterman"].prototype,{init:function(a){this.options=a;this.nodes=[];this.links=[];this.series=[];this.box={x:0,y:0,width:0,
height:0};this.setInitialRendering(!0);this.integration=h.networkgraphIntegrations[a.integration];this.enableSimulation=a.enableSimulation;this.attractiveForce=y(a.attractiveForce,this.integration.attractiveForceFunction);this.repulsiveForce=y(a.repulsiveForce,this.integration.repulsiveForceFunction);this.approximation=a.approximation},updateSimulation:function(a){this.enableSimulation=y(a,this.options.enableSimulation)},start:function(){var a=this.series,c=this.options;this.currentStep=0;this.forces=
a[0]&&a[0].forces||[];this.chart=a[0]&&a[0].chart;this.initialRendering&&(this.initPositions(),a.forEach(function(a){a.finishedAnimating=!0;a.render()}));this.setK();this.resetSimulation(c);this.enableSimulation&&this.step()},step:function(){var a=this,c=this.series;a.currentStep++;"barnes-hut"===a.approximation&&(a.createQuadTree(),a.quadTree.calculateMassAndCenter());a.forces.forEach(function(b){a[b+"Forces"](a.temperature)});a.applyLimits(a.temperature);a.temperature=a.coolDown(a.startTemperature,
a.diffTemperature,a.currentStep);a.prevSystemTemperature=a.systemTemperature;a.systemTemperature=a.getSystemTemperature();a.enableSimulation&&(c.forEach(function(a){a.chart&&a.render()}),a.maxIterations--&&isFinite(a.temperature)&&!a.isStable()?(a.simulation&&h.win.cancelAnimationFrame(a.simulation),a.simulation=h.win.requestAnimationFrame(function(){a.step()})):a.simulation=!1)},stop:function(){this.simulation&&h.win.cancelAnimationFrame(this.simulation)},setArea:function(a,c,d,e){this.box={left:a,
top:c,width:d,height:e}},setK:function(){this.k=this.options.linkLength||this.integration.getK(this)},addElementsToCollection:function(a,c){a.forEach(function(a){-1===c.indexOf(a)&&c.push(a)})},removeElementFromCollection:function(a,c){a=c.indexOf(a);-1!==a&&c.splice(a,1)},clear:function(){this.nodes.length=0;this.links.length=0;this.series.length=0;this.resetSimulation()},resetSimulation:function(){this.forcedStop=!1;this.systemTemperature=0;this.setMaxIterations();this.setTemperature();this.setDiffTemperature()},
restartSimulation:function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))},setMaxIterations:function(a){this.maxIterations=y(a,this.options.maxIterations)},setTemperature:function(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)},setDiffTemperature:function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)},
setInitialRendering:function(a){this.initialRendering=a},createQuadTree:function(){this.quadTree=new h.QuadTree(this.box.left,this.box.top,this.box.width,this.box.height);this.quadTree.insertNodes(this.nodes)},initPositions:function(){var a=this.options.initialPositions;q(a)?(a.call(this),this.nodes.forEach(function(a){k(a.prevX)||(a.prevX=a.plotX);k(a.prevY)||(a.prevY=a.plotY);a.dispX=0;a.dispY=0})):"circle"===a?this.setCircularPositions():this.setRandomPositions()},setCircularPositions:function(){function a(b){b.linksFrom.forEach(function(b){t[b.toNode.id]||
(t[b.toNode.id]=!0,k.push(b.toNode),a(b.toNode))})}var c=this.box,d=this.nodes,e=2*Math.PI/(d.length+1),h=d.filter(function(a){return 0===a.linksTo.length}),k=[],t={},q=this.options.initialPositionRadius;h.forEach(function(b){k.push(b);a(b)});k.length?d.forEach(function(a){-1===k.indexOf(a)&&k.push(a)}):k=d;k.forEach(function(a,b){a.plotX=a.prevX=y(a.plotX,c.width/2+q*Math.cos(b*e));a.plotY=a.prevY=y(a.plotY,c.height/2+q*Math.sin(b*e));a.dispX=0;a.dispY=0})},setRandomPositions:function(){function a(a){a=
a*a/Math.PI;return a-=Math.floor(a)}var c=this.box,d=this.nodes,e=d.length+1;d.forEach(function(b,d){b.plotX=b.prevX=y(b.plotX,c.width*a(d));b.plotY=b.prevY=y(b.plotY,c.height*a(e+d));b.dispX=0;b.dispY=0})},force:function(a){this.integration[a].apply(this,Array.prototype.slice.call(arguments,1))},barycenterForces:function(){this.getBarycenter();this.force("barycenter")},getBarycenter:function(){var a=0,c=0,d=0;this.nodes.forEach(function(b){c+=b.plotX*b.mass;d+=b.plotY*b.mass;a+=b.mass});return this.barycenter=
{x:c,y:d,xFactor:c/a,yFactor:d/a}},barnesHutApproximation:function(a,c){var b=this.getDistXY(a,c),d=this.vectorLength(b);if(a!==c&&0!==d)if(c.isInternal)if(c.boxSize/d<this.options.theta&&0!==d){var e=this.repulsiveForce(d,this.k);this.force("repulsive",a,e*c.mass,b,d);var f=!1}else f=!0;else e=this.repulsiveForce(d,this.k),this.force("repulsive",a,e*c.mass,b,d);return f},repulsiveForces:function(){var a=this;"barnes-hut"===a.approximation?a.nodes.forEach(function(b){a.quadTree.visitNodeRecursive(null,
function(c){return a.barnesHutApproximation(b,c)})}):a.nodes.forEach(function(b){a.nodes.forEach(function(c){if(b!==c&&!b.fixedPosition){var d=a.getDistXY(b,c);var e=a.vectorLength(d);if(0!==e){var f=a.repulsiveForce(e,a.k);a.force("repulsive",b,f*c.mass,d,e)}}})})},attractiveForces:function(){var a=this,c,d,e;a.links.forEach(function(b){b.fromNode&&b.toNode&&(c=a.getDistXY(b.fromNode,b.toNode),d=a.vectorLength(c),0!==d&&(e=a.attractiveForce(d,a.k),a.force("attractive",b,e,c,d)))})},applyLimits:function(){var a=
this;a.nodes.forEach(function(b){b.fixedPosition||(a.integration.integrate(a,b),a.applyLimitBox(b,a.box),b.dispX=0,b.dispY=0)})},applyLimitBox:function(a,c){var b=a.radius;a.plotX=n(a.plotX,c.left+b,c.width-b);a.plotY=n(a.plotY,c.top+b,c.height-b)},coolDown:function(a,c,d){return a-c*d},isStable:function(){return.00001>Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature},getSystemTemperature:function(){return this.nodes.reduce(function(a,c){return a+c.temperature},0)},
vectorLength:function(a){return Math.sqrt(a.x*a.x+a.y*a.y)},getDistR:function(a,c){a=this.getDistXY(a,c);return this.vectorLength(a)},getDistXY:function(a,c){var b=a.plotX-c.plotX;a=a.plotY-c.plotY;return{x:b,y:a,absX:Math.abs(b),absY:Math.abs(a)}}});d(e,"predraw",function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(a){a.stop()})});d(e,"render",function(){function b(a){a.maxIterations--&&isFinite(a.temperature)&&!a.isStable()&&!a.enableSimulation&&(a.beforeStep&&a.beforeStep(),
a.step(),d=!1,c=!0)}var c=!1;if(this.graphLayoutsLookup){a(!1,this);for(this.graphLayoutsLookup.forEach(function(a){a.start()});!d;){var d=!0;this.graphLayoutsLookup.forEach(b)}c&&this.series.forEach(function(a){a&&a.layout&&a.render()})}});d(e,"beforePrint",function(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(function(a){a.updateSimulation(!1)}),this.redraw())});d(e,"afterPrint",function(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(a){a.updateSimulation()});
this.redraw()})});z(e,"Series/PackedBubble/PackedBubbleComposition.js",[e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,d,h){var c=d.layouts["reingold-fruchterman"],a=h.addEvent,n=h.extendClass,k=h.pick;e.prototype.getSelectedParentNodes=function(){var a=[];this.series.forEach(function(c){c.parentNode&&c.parentNode.selected&&a.push(c.parentNode)});return a};d.networkgraphIntegrations.packedbubble={repulsiveForceFunction:function(a,c,d,b){return Math.min(a,(d.marker.radius+
b.marker.radius)/2)},barycenter:function(){var a=this,c=a.options.gravitationalConstant,d=a.box,b=a.nodes,e,h;b.forEach(function(f){a.options.splitSeries&&!f.isParentNode?(e=f.series.parentNode.plotX,h=f.series.parentNode.plotY):(e=d.width/2,h=d.height/2);f.fixedPosition||(f.plotX-=(f.plotX-e)*c/(f.mass*Math.sqrt(b.length)),f.plotY-=(f.plotY-h)*c/(f.mass*Math.sqrt(b.length)))})},repulsive:function(a,c,d,b){var e=c*this.diffTemperature/a.mass/a.degree;c=d.x*e;d=d.y*e;a.fixedPosition||(a.plotX+=c,a.plotY+=
d);b.fixedPosition||(b.plotX-=c,b.plotY-=d)},integrate:d.networkgraphIntegrations.verlet.integrate,getK:d.noop};d.layouts.packedbubble=n(c,{beforeStep:function(){this.options.marker&&this.series.forEach(function(a){a&&a.calculateParentRadius()})},isStable:function(){var a=Math.abs(this.prevSystemTemperature-this.systemTemperature);return 1>Math.abs(10*this.systemTemperature/Math.sqrt(this.nodes.length))&&.00001>a||0>=this.temperature},setCircularPositions:function(){var a=this,c=a.box,d=a.nodes,b=
2*Math.PI/(d.length+1),e,h,n=a.options.initialPositionRadius;d.forEach(function(d,f){a.options.splitSeries&&!d.isParentNode?(e=d.series.parentNode.plotX,h=d.series.parentNode.plotY):(e=c.width/2,h=c.height/2);d.plotX=d.prevX=k(d.plotX,e+n*Math.cos(d.index||f*b));d.plotY=d.prevY=k(d.plotY,h+n*Math.sin(d.index||f*b));d.dispX=0;d.dispY=0})},repulsiveForces:function(){var a=this,c,d,b,e=a.options.bubblePadding;a.nodes.forEach(function(f){f.degree=f.mass;f.neighbours=0;a.nodes.forEach(function(h){c=0;
f===h||f.fixedPosition||!a.options.seriesInteraction&&f.series!==h.series||(b=a.getDistXY(f,h),d=a.vectorLength(b)-(f.marker.radius+h.marker.radius+e),0>d&&(f.degree+=.01,f.neighbours++,c=a.repulsiveForce(-d/Math.sqrt(f.neighbours),a.k,f,h)),a.force("repulsive",f,c*h.mass,b,h,d))})})},applyLimitBox:function(a){if(this.options.splitSeries&&!a.isParentNode&&this.options.parentNodeLimit){var d=this.getDistXY(a,a.series.parentNode);var e=a.series.parentNodeRadius-a.marker.radius-this.vectorLength(d);
0>e&&e>-2*a.marker.radius&&(a.plotX-=.01*d.x,a.plotY-=.01*d.y)}c.prototype.applyLimitBox.apply(this,arguments)}});a(e,"beforeRedraw",function(){this.allDataPoints&&delete this.allDataPoints})});z(e,"Series/PackedBubble/PackedBubbleSeries.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Series/PackedBubble/PackedBubblePoint.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,d,h,c,a){var n=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function g(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(g.prototype=c.prototype,new g)}}(),k=e.parse,t=c.series,q=c.seriesTypes.bubble,y=a.addEvent,b=a.clamp,f=a.defined,m=a.extend,v=a.fireEvent,w=a.isArray,z=a.isNumber,B=a.merge,E=a.pick,u=d.dragNodesMixin;e=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.chart=void 0;
b.data=void 0;b.layout=void 0;b.options=void 0;b.points=void 0;b.xData=void 0;return b}n(c,a);c.prototype.accumulateAllPoints=function(a){var b=a.chart,c=[],g,d;for(g=0;g<b.series.length;g++)if(a=b.series[g],a.is("packedbubble")&&a.visible||!b.options.chart.ignoreHiddenSeries)for(d=0;d<a.yData.length;d++)c.push([null,null,a.yData[d],a.index,d,{id:d,marker:{radius:0}}]);return c};c.prototype.addLayout=function(){var a=this.options.layoutAlgorithm,b=this.chart.graphLayoutsStorage,c=this.chart.graphLayoutsLookup,
e=this.chart.options.chart;b||(this.chart.graphLayoutsStorage=b={},this.chart.graphLayoutsLookup=c=[]);var l=b[a.type];l||(a.enableSimulation=f(e.forExport)?!e.forExport:a.enableSimulation,b[a.type]=l=new d.layouts[a.type],l.init(a),c.splice(l.index,0,l));this.layout=l;this.points.forEach(function(a){a.mass=2;a.degree=1;a.collisionNmb=1});l.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight);l.addElementsToCollection([this],l.series);l.addElementsToCollection(this.points,l.nodes)};c.prototype.addSeriesLayout=
function(){var a=this.options.layoutAlgorithm,b=this.chart.graphLayoutsStorage,c=this.chart.graphLayoutsLookup,e=B(a,a.parentNodeOptions,{enableSimulation:this.layout.options.enableSimulation});var f=b[a.type+"-series"];f||(b[a.type+"-series"]=f=new d.layouts[a.type],f.init(e),c.splice(f.index,0,f));this.parentNodeLayout=f;this.createParentNodes()};c.prototype.calculateParentRadius=function(){var a=this.seriesBox();this.parentNodeRadius=b(Math.sqrt(2*this.parentNodeMass/Math.PI)+20,20,a?Math.max(Math.sqrt(Math.pow(a.width,
2)+Math.pow(a.height,2))/2+20,20):Math.sqrt(2*this.parentNodeMass/Math.PI)+20);this.parentNode&&(this.parentNode.marker.radius=this.parentNode.radius=this.parentNodeRadius)};c.prototype.calculateZExtremes=function(){var a=this.options.zMin,b=this.options.zMax,c=Infinity,d=-Infinity;if(a&&b)return[a,b];this.chart.series.forEach(function(a){a.yData.forEach(function(a){f(a)&&(a>d&&(d=a),a<c&&(c=a))})});a=E(a,c);b=E(b,d);return[a,b]};c.prototype.checkOverlap=function(a,b){var c=a[0]-b[0],d=a[1]-b[1];
return-.001>Math.sqrt(c*c+d*d)-Math.abs(a[2]+b[2])};c.prototype.createParentNodes=function(){var a=this,b=a.chart,c=a.parentNodeLayout,d,e=a.parentNode,f=a.pointClass;a.parentNodeMass=0;a.points.forEach(function(b){a.parentNodeMass+=Math.PI*Math.pow(b.marker.radius,2)});a.calculateParentRadius();c.nodes.forEach(function(b){b.seriesIndex===a.index&&(d=!0)});c.setArea(0,0,b.plotWidth,b.plotHeight);d||(e||(e=(new f).init(this,{mass:a.parentNodeRadius/2,marker:{radius:a.parentNodeRadius},dataLabels:{inside:!1},
dataLabelOnNull:!0,degree:a.parentNodeRadius,isParentNode:!0,seriesIndex:a.index})),a.parentNode&&(e.plotX=a.parentNode.plotX,e.plotY=a.parentNode.plotY),a.parentNode=e,c.addElementsToCollection([a],c.series),c.addElementsToCollection([e],c.nodes))};c.prototype.deferLayout=function(){var a=this.options.layoutAlgorithm;this.visible&&(this.addLayout(),a.splitSeries&&this.addSeriesLayout())};c.prototype.destroy=function(){this.chart.graphLayoutsLookup&&this.chart.graphLayoutsLookup.forEach(function(a){a.removeElementFromCollection(this,
a.series)},this);this.parentNode&&this.parentNodeLayout&&(this.parentNodeLayout.removeElementFromCollection(this.parentNode,this.parentNodeLayout.nodes),this.parentNode.dataLabel&&(this.parentNode.dataLabel=this.parentNode.dataLabel.destroy()));t.prototype.destroy.apply(this,arguments)};c.prototype.drawDataLabels=function(){var a=this.options.dataLabels.textPath,b=this.points;t.prototype.drawDataLabels.apply(this,arguments);this.parentNode&&(this.parentNode.formatPrefix="parentNode",this.points=[this.parentNode],
this.options.dataLabels.textPath=this.options.dataLabels.parentNodeTextPath,t.prototype.drawDataLabels.apply(this,arguments),this.points=b,this.options.dataLabels.textPath=a)};c.prototype.drawGraph=function(){if(this.layout&&this.layout.options.splitSeries){var a=this.chart;var b=this.layout.options.parentNodeOptions.marker;var c={fill:b.fillColor||k(this.color).brighten(.4).get(),opacity:b.fillOpacity,stroke:b.lineColor||this.color,"stroke-width":b.lineWidth};this.parentNodesGroup||(this.parentNodesGroup=
this.plotGroup("parentNodesGroup","parentNode",this.visible?"inherit":"hidden",.1,a.seriesGroup),this.group.attr({zIndex:2}));this.calculateParentRadius();b=B({x:this.parentNode.plotX-this.parentNodeRadius,y:this.parentNode.plotY-this.parentNodeRadius,width:2*this.parentNodeRadius,height:2*this.parentNodeRadius},c);this.parentNode.graphic||(this.graph=this.parentNode.graphic=a.renderer.symbol(c.symbol).add(this.parentNodesGroup));this.parentNode.graphic.attr(b)}};c.prototype.drawTracker=function(){var b=
this.parentNode;a.prototype.drawTracker.call(this);if(b){var c=w(b.dataLabels)?b.dataLabels:b.dataLabel?[b.dataLabel]:[];b.graphic&&(b.graphic.element.point=b);c.forEach(function(a){a.div?a.div.point=b:a.element.point=b})}};c.prototype.getPointRadius=function(){var a=this,c=a.chart,d=a.options,e=d.useSimulation,f=Math.min(c.plotWidth,c.plotHeight),l={},h=[],k=c.allDataPoints,m,n,q,r;["minSize","maxSize"].forEach(function(a){var b=parseInt(d[a],10),c=/%$/.test(d[a]);l[a]=c?f*b/100:b*Math.sqrt(k.length)});
c.minRadius=m=l.minSize/Math.sqrt(k.length);c.maxRadius=n=l.maxSize/Math.sqrt(k.length);var t=e?a.calculateZExtremes():[m,n];(k||[]).forEach(function(c,d){q=e?b(c[2],t[0],t[1]):c[2];r=a.getRadius(t[0],t[1],m,n,q);0===r&&(r=null);k[d][2]=r;h.push(r)});a.radii=h};c.prototype.init=function(){t.prototype.init.apply(this,arguments);this.eventsToUnbind.push(y(this,"updatedData",function(){this.chart.series.forEach(function(a){a.type===this.type&&(a.isDirty=!0)},this)}));return this};c.prototype.onMouseUp=
function(a){if(a.fixedPosition&&!a.removed){var b,c,d=this.layout,g=this.parentNodeLayout;g&&d.options.dragBetweenSeries&&g.nodes.forEach(function(g){a&&a.marker&&g!==a.series.parentNode&&(b=d.getDistXY(a,g),c=d.vectorLength(b)-g.marker.radius-a.marker.radius,0>c&&(g.series.addPoint(B(a.options,{plotX:a.plotX,plotY:a.plotY}),!1),d.removeElementFromCollection(a,d.nodes),a.remove()))});u.onMouseUp.apply(this,arguments)}};c.prototype.placeBubbles=function(a){var b=this.checkOverlap,c=this.positionBubble,
d=[],g=1,e=0,f=0;var l=[];var h;a=a.sort(function(a,b){return b[2]-a[2]});if(a.length){d.push([[0,0,a[0][2],a[0][3],a[0][4]]]);if(1<a.length)for(d.push([[0,0-a[1][2]-a[0][2],a[1][2],a[1][3],a[1][4]]]),h=2;h<a.length;h++)a[h][2]=a[h][2]||1,l=c(d[g][e],d[g-1][f],a[h]),b(l,d[g][0])?(d.push([]),f=0,d[g+1].push(c(d[g][e],d[g][0],a[h])),g++,e=0):1<g&&d[g-1][f+1]&&b(l,d[g-1][f+1])?(f++,d[g].push(c(d[g][e],d[g-1][f],a[h])),e++):(e++,d[g].push(l));this.chart.stages=d;this.chart.rawPositions=[].concat.apply([],
d);this.resizeRadius();l=this.chart.rawPositions}return l};c.prototype.positionBubble=function(a,b,c){var d=Math.sqrt,g=Math.asin,e=Math.acos,f=Math.pow,l=Math.abs;d=d(f(a[0]-b[0],2)+f(a[1]-b[1],2));e=e((f(d,2)+f(c[2]+b[2],2)-f(c[2]+a[2],2))/(2*(c[2]+b[2])*d));g=g(l(a[0]-b[0])/d);a=(0>a[1]-b[1]?0:Math.PI)+e+g*(0>(a[0]-b[0])*(a[1]-b[1])?1:-1);return[b[0]+(b[2]+c[2])*Math.sin(a),b[1]-(b[2]+c[2])*Math.cos(a),c[2],c[3],c[4]]};c.prototype.render=function(){var a=[];t.prototype.render.apply(this,arguments);
this.options.dataLabels.allowOverlap||(this.data.forEach(function(b){w(b.dataLabels)&&b.dataLabels.forEach(function(b){a.push(b)})}),this.options.useSimulation&&this.chart.hideOverlappingLabels(a))};c.prototype.resizeRadius=function(){var a=this.chart,b=a.rawPositions,c=Math.min,d=Math.max,e=a.plotLeft,f=a.plotTop,l=a.plotHeight,h=a.plotWidth,k,m,n;var q=k=Number.POSITIVE_INFINITY;var r=m=Number.NEGATIVE_INFINITY;for(n=0;n<b.length;n++){var t=b[n][2];q=c(q,b[n][0]-t);r=d(r,b[n][0]+t);k=c(k,b[n][1]-
t);m=d(m,b[n][1]+t)}n=[r-q,m-k];c=c.apply([],[(h-e)/n[0],(l-f)/n[1]]);if(1e-10<Math.abs(c-1)){for(n=0;n<b.length;n++)b[n][2]*=c;this.placeBubbles(b)}else a.diffY=l/2+f-k-(m-k)/2,a.diffX=h/2+e-q-(r-q)/2};c.prototype.seriesBox=function(){var a=this.chart,b=Math.max,c=Math.min,d,e=[a.plotLeft,a.plotLeft+a.plotWidth,a.plotTop,a.plotTop+a.plotHeight];this.data.forEach(function(a){f(a.plotX)&&f(a.plotY)&&a.marker.radius&&(d=a.marker.radius,e[0]=c(e[0],a.plotX-d),e[1]=b(e[1],a.plotX+d),e[2]=c(e[2],a.plotY-
d),e[3]=b(e[3],a.plotY+d))});return z(e.width/e.height)?e:null};c.prototype.setVisible=function(){var a=this;t.prototype.setVisible.apply(a,arguments);a.parentNodeLayout&&a.graph?a.visible?(a.graph.show(),a.parentNode.dataLabel&&a.parentNode.dataLabel.show()):(a.graph.hide(),a.parentNodeLayout.removeElementFromCollection(a.parentNode,a.parentNodeLayout.nodes),a.parentNode.dataLabel&&a.parentNode.dataLabel.hide()):a.layout&&(a.visible?a.layout.addElementsToCollection(a.points,a.layout.nodes):a.points.forEach(function(b){a.layout.removeElementFromCollection(b,
a.layout.nodes)}))};c.prototype.translate=function(){var a=this.chart,b=this.data,c=this.index,d,e=this.options.useSimulation;this.processedXData=this.xData;this.generatePoints();f(a.allDataPoints)||(a.allDataPoints=this.accumulateAllPoints(this),this.getPointRadius());if(e)var l=a.allDataPoints;else l=this.placeBubbles(a.allDataPoints),this.options.draggable=!1;for(d=0;d<l.length;d++)if(l[d][3]===c){var h=b[l[d][4]];var k=E(l[d][2],void 0);e||(h.plotX=l[d][0]-a.plotLeft+a.diffX,h.plotY=l[d][1]-a.plotTop+
a.diffY);z(k)&&(h.marker=m(h.marker,{radius:k,width:2*k,height:2*k}),h.radius=k)}e&&this.deferLayout();v(this,"afterTranslate")};c.defaultOptions=B(q.defaultOptions,{minSize:"10%",maxSize:"50%",sizeBy:"area",zoneAxis:"y",crisp:!1,tooltip:{pointFormat:"Value: {point.value}"},draggable:!0,useSimulation:!0,parentNode:{allowPointSelect:!1},dataLabels:{formatter:function(){return this.point.value},parentNodeFormatter:function(){return this.name},parentNodeTextPath:{enabled:!0},padding:0,style:{transition:"opacity 2000ms"}},
layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:20,bubblePadding:5,parentNodeLimit:!1,seriesInteraction:!0,dragBetweenSeries:!1,parentNodeOptions:{maxIterations:400,gravitationalConstant:.03,maxSpeed:50,initialPositionRadius:100,seriesInteraction:!0,marker:{fillColor:null,fillOpacity:1,lineWidth:1,lineColor:null,symbol:"circle"}},enableSimulation:!0,type:"packedbubble",integration:"packedbubble",maxIterations:1E3,splitSeries:!1,maxSpeed:5,gravitationalConstant:.01,friction:-.981}});
return c}(q);m(e.prototype,{alignDataLabel:t.prototype.alignDataLabel,axisTypes:[],directTouch:!0,forces:["barycenter","repulsive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,onMouseDown:u.onMouseDown,onMouseMove:u.onMouseMove,pointArrayMap:["value"],pointClass:h,pointValKey:"value",redrawHalo:u.redrawHalo,requireSorting:!1,searchPoint:d.noop,trackerGroups:["group","dataLabelsGroup","parentNodesGroup"]});c.registerSeriesType("packedbubble",e);"";"";return e});z(e,"Extensions/Polar.js",
[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Extensions/Pane.js"],e["Core/Pointer.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(e,d,h,c,a,n,k,t,q){var y=e.animObject;k=k.seriesTypes;var b=q.addEvent,f=q.defined,m=q.find,v=q.isNumber,w=q.pick,z=q.splat,B=q.uniqueKey;e=q.wrap;var E=n.prototype;a=a.prototype;E.searchPointByAngle=function(a){var b=this.chart,c=this.xAxis.pane.center;
return this.searchKDTree({clientX:180+-180/Math.PI*Math.atan2(a.chartX-c[0]-b.plotLeft,a.chartY-c[1]-b.plotTop)})};E.getConnectors=function(a,b,c,d){var e=d?1:0;var g=0<=b&&b<=a.length-1?b:0>b?a.length-1+b:0;b=0>g-1?a.length-(1+e):g-1;e=g+1>a.length-1?e:g+1;var f=a[b];e=a[e];var l=f.plotX;f=f.plotY;var h=e.plotX;var k=e.plotY;e=a[g].plotX;g=a[g].plotY;l=(1.5*e+l)/2.5;f=(1.5*g+f)/2.5;h=(1.5*e+h)/2.5;var p=(1.5*g+k)/2.5;k=Math.sqrt(Math.pow(l-e,2)+Math.pow(f-g,2));var m=Math.sqrt(Math.pow(h-e,2)+Math.pow(p-
g,2));l=Math.atan2(f-g,l-e);p=Math.PI/2+(l+Math.atan2(p-g,h-e))/2;Math.abs(l-p)>Math.PI/2&&(p-=Math.PI);l=e+Math.cos(p)*k;f=g+Math.sin(p)*k;h=e+Math.cos(Math.PI+p)*m;p=g+Math.sin(Math.PI+p)*m;e={rightContX:h,rightContY:p,leftContX:l,leftContY:f,plotX:e,plotY:g};c&&(e.prevPointCont=this.getConnectors(a,b,!1,d));return e};E.toXY=function(a){var b=this.chart,c=this.xAxis,d=this.yAxis,e=a.plotX,f=a.plotY,l=a.series,h=b.inverted,k=a.y,m=h?e:d.len-f;h&&l&&!l.isRadialBar&&(a.plotY=f="number"===typeof k?
d.translate(k)||0:0);a.rectPlotX=e;a.rectPlotY=f;d.center&&(m+=d.center[3]/2);v(f)&&(d=h?d.postTranslate(f,m):c.postTranslate(e,m),a.plotX=a.polarPlotX=d.x-b.plotLeft,a.plotY=a.polarPlotY=d.y-b.plotTop);this.kdByAngle?(b=(e/Math.PI*180+c.pane.options.startAngle)%360,0>b&&(b+=360),a.clientX=b):a.clientX=a.plotX};k.spline&&(e(k.spline.prototype,"getPointSpline",function(a,b,c,d){this.chart.polar?d?(a=this.getConnectors(b,d,!0,this.connectEnds),b=a.prevPointCont&&a.prevPointCont.rightContX,c=a.prevPointCont&&
a.prevPointCont.rightContY,a=["C",v(b)?b:a.plotX,v(c)?c:a.plotY,v(a.leftContX)?a.leftContX:a.plotX,v(a.leftContY)?a.leftContY:a.plotY,a.plotX,a.plotY]):a=["M",c.plotX,c.plotY]:a=a.call(this,b,c,d);return a}),k.areasplinerange&&(k.areasplinerange.prototype.getPointSpline=k.spline.prototype.getPointSpline));b(n,"afterTranslate",function(){var a=this.chart;if(a.polar&&this.xAxis){(this.kdByAngle=a.tooltip&&a.tooltip.shared)?this.searchPoint=this.searchPointByAngle:this.options.findNearestPointBy="xy";
if(!this.preventPostTranslate)for(var c=this.points,d=c.length;d--;)this.toXY(c[d]),!a.hasParallelCoordinates&&!this.yAxis.reversed&&c[d].y<this.yAxis.min&&(c[d].isNull=!0);this.hasClipCircleSetter||(this.hasClipCircleSetter=!!this.eventsToUnbind.push(b(this,"afterRender",function(){if(a.polar){var b=this.yAxis.pane.center;this.clipCircle?this.clipCircle.animate({x:b[0],y:b[1],r:b[2]/2,innerR:b[3]/2}):this.clipCircle=a.renderer.clipCircle(b[0],b[1],b[2]/2,b[3]/2);this.group.clip(this.clipCircle);
this.setClip=h.noop}})))}},{order:2});e(k.line.prototype,"getGraphPath",function(a,b){var c=this,d;if(this.chart.polar){b=b||this.points;for(d=0;d<b.length;d++)if(!b[d].isNull){var e=d;break}if(!1!==this.options.connectEnds&&"undefined"!==typeof e){this.connectEnds=!0;b.splice(b.length,0,b[e]);var g=!0}b.forEach(function(a){"undefined"===typeof a.polarPlotY&&c.toXY(a)})}d=a.apply(this,[].slice.call(arguments,1));g&&b.pop();return d});var u=function(a,b){var c=this,d=this.chart,e=this.options.animation,
g=this.group,f=this.markerGroup,l=this.xAxis.center,k=d.plotLeft,m=d.plotTop,n,q,r,t;if(d.polar)if(c.isRadialBar)b||(c.startAngleRad=w(c.translatedThreshold,c.xAxis.startAngleRad),h.seriesTypes.pie.prototype.animate.call(c,b));else{if(d.renderer.isSVG)if(e=y(e),c.is("column")){if(!b){var u=l[3]/2;c.points.forEach(function(a){n=a.graphic;r=(q=a.shapeArgs)&&q.r;t=q&&q.innerR;n&&q&&(n.attr({r:u,innerR:u}),n.animate({r:r,innerR:t},c.options.animation))})}}else b?(a={translateX:l[0]+k,translateY:l[1]+
m,scaleX:.001,scaleY:.001},g.attr(a),f&&f.attr(a)):(a={translateX:k,translateY:m,scaleX:1,scaleY:1},g.animate(a,e),f&&f.animate(a,e))}else a.call(this,b)};e(E,"animate",u);if(k.column){var r=k.arearange.prototype;k=k.column.prototype;k.polarArc=function(a,b,c,d){var e=this.xAxis.center,g=this.yAxis.len,f=e[3]/2;b=g-b+f;a=g-w(a,g)+f;this.yAxis.reversed&&(0>b&&(b=f),0>a&&(a=f));return{x:e[0],y:e[1],r:b,innerR:a,start:c,end:d}};e(k,"animate",u);e(k,"translate",function(a){var b=this.options,c=b.stacking,
d=this.chart,e=this.xAxis,h=this.yAxis,l=h.reversed,k=h.center,m=e.startAngleRad,n=e.endAngleRad-m;this.preventPostTranslate=!0;a.call(this);if(e.isRadial){a=this.points;e=a.length;var r=h.translate(h.min);var t=h.translate(h.max);b=b.threshold||0;if(d.inverted&&v(b)){var u=h.translate(b);f(u)&&(0>u?u=0:u>n&&(u=n),this.translatedThreshold=u+m)}for(;e--;){b=a[e];var w=b.barX;var y=b.x;var z=b.y;b.shapeType="arc";if(d.inverted){b.plotY=h.translate(z);if(c&&h.stacking){if(z=h.stacking.stacks[(0>z?"-":
"")+this.stackKey],this.visible&&z&&z[y]&&!b.isNull){var B=z[y].points[this.getStackIndicator(void 0,y,this.index).key];var D=h.translate(B[0]);B=h.translate(B[1]);f(D)&&(D=q.clamp(D,0,n))}}else D=u,B=b.plotY;D>B&&(B=[D,D=B][0]);if(!l)if(D<r)D=r;else if(B>t)B=t;else{if(B<r||D>t)D=B=0}else if(B>r)B=r;else if(D<t)D=t;else if(D>r||B<t)D=B=n;h.min>h.max&&(D=B=l?n:0);D+=m;B+=m;k&&(b.barX=w+=k[3]/2);y=Math.max(w,0);z=Math.max(w+b.pointWidth,0);b.shapeArgs={x:k&&k[0],y:k&&k[1],r:z,innerR:y,start:D,end:B};
b.opacity=D===B?0:void 0;b.plotY=(f(this.translatedThreshold)&&(D<this.translatedThreshold?D:B))-m}else D=w+m,b.shapeArgs=this.polarArc(b.yBottom,b.plotY,D,D+b.pointWidth);this.toXY(b);d.inverted?(w=h.postTranslate(b.rectPlotY,w+b.pointWidth/2),b.tooltipPos=[w.x-d.plotLeft,w.y-d.plotTop]):b.tooltipPos=[b.plotX,b.plotY];k&&(b.ttBelow=b.plotY>k[1])}}});k.findAlignments=function(a,b){null===b.align&&(b.align=20<a&&160>a?"left":200<a&&340>a?"right":"center");null===b.verticalAlign&&(b.verticalAlign=45>
a||315<a?"bottom":135<a&&225>a?"top":"middle");return b};r&&(r.findAlignments=k.findAlignments);e(k,"alignDataLabel",function(a,b,c,d,e,f){var g=this.chart,h=w(d.inside,!!this.options.stacking);g.polar?(a=b.rectPlotX/Math.PI*180,g.inverted?(this.forceDL=g.isInsidePlot(b.plotX,Math.round(b.plotY)),h&&b.shapeArgs?(e=b.shapeArgs,e=this.yAxis.postTranslate(((e.start||0)+(e.end||0))/2-this.xAxis.startAngleRad,b.barX+b.pointWidth/2),e={x:e.x-g.plotLeft,y:e.y-g.plotTop}):b.tooltipPos&&(e={x:b.tooltipPos[0],
y:b.tooltipPos[1]}),d.align=w(d.align,"center"),d.verticalAlign=w(d.verticalAlign,"middle")):this.findAlignments&&(d=this.findAlignments(a,d)),E.alignDataLabel.call(this,b,c,d,e,f),this.isRadialBar&&b.shapeArgs&&b.shapeArgs.start===b.shapeArgs.end&&c.hide(!0)):a.call(this,b,c,d,e,f)})}e(a,"getCoordinates",function(a,b){var c=this.chart,d={xAxis:[],yAxis:[]};c.polar?c.axes.forEach(function(a){var e=a.isXAxis,f=a.center;if("colorAxis"!==a.coll){var g=b.chartX-f[0]-c.plotLeft;f=b.chartY-f[1]-c.plotTop;
d[e?"xAxis":"yAxis"].push({axis:a,value:a.translate(e?Math.PI-Math.atan2(g,f):Math.sqrt(Math.pow(g,2)+Math.pow(f,2)),!0)})}}):d=a.call(this,b);return d});t.prototype.clipCircle=function(a,b,c,d){var e=B(),f=this.createElement("clipPath").attr({id:e}).add(this.defs);a=d?this.arc(a,b,c,d,0,2*Math.PI).add(f):this.circle(a,b,c).add(f);a.id=e;a.clipPath=f;return a};b(d,"getAxes",function(){this.pane||(this.pane=[]);z(this.options.pane).forEach(function(a){new c(a,this)},this)});b(d,"afterDrawChartBox",
function(){this.pane.forEach(function(a){a.render()})});b(n,"afterInit",function(){var a=this.chart;a.inverted&&a.polar&&(this.isRadialSeries=!0,this.is("column")&&(this.isRadialBar=!0))});e(d.prototype,"get",function(a,b){return m(this.pane||[],function(a){return a.options.id===b})||a.call(this,b)})});z(e,"masters/highcharts-more.src.js",[],function(){})});
//# sourceMappingURL=highcharts-more.js.map

/***/ }),

/***/ "./node_modules/highcharts/highcharts.js":
/*!***********************************************!*\
  !*** ./node_modules/highcharts/highcharts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(W,O){ true&&module.exports?(O["default"]=O,module.exports=W.document?O(W):O): true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return O(W)}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):(undefined)})("undefined"!==typeof window?window:this,function(W){function O(D,b,e,z){D.hasOwnProperty(b)||(D[b]=z.apply(null,e))}var e={};O(e,"Core/Globals.js",[],function(){var D="undefined"!==typeof W?W:"undefined"!==typeof window?window:{},b;(function(b){b.SVG_NS=
"http://www.w3.org/2000/svg";b.product="Highcharts";b.version="9.1.0";b.win=D;b.doc=b.win.document;b.svg=b.doc&&b.doc.createElementNS&&!!b.doc.createElementNS(b.SVG_NS,"svg").createSVGRect;b.userAgent=b.win.navigator&&b.win.navigator.userAgent||"";b.isChrome=-1!==b.userAgent.indexOf("Chrome");b.isFirefox=-1!==b.userAgent.indexOf("Firefox");b.isMS=/(edge|msie|trident)/i.test(b.userAgent)&&!b.win.opera;b.isSafari=!b.isChrome&&-1!==b.userAgent.indexOf("Safari");b.isTouchDevice=/(Mobile|Android|Windows Phone)/.test(b.userAgent);
b.isWebKit=-1!==b.userAgent.indexOf("AppleWebKit");b.deg2rad=2*Math.PI/360;b.hasBidiBug=b.isFirefox&&4>parseInt(b.userAgent.split("Firefox/")[1],10);b.hasTouch=!!b.win.TouchEvent;b.marginNames=["plotTop","marginRight","marginBottom","plotLeft"];b.noop=function(){};b.supportsPassiveEvents=function(){var D=!1;if(!b.isMS){var e=Object.defineProperty({},"passive",{get:function(){D=!0}});b.win.addEventListener&&b.win.removeEventListener&&(b.win.addEventListener("testPassive",b.noop,e),b.win.removeEventListener("testPassive",
b.noop,e))}return D}();b.charts=[];b.dateFormats={};b.seriesTypes={};b.symbolSizes={}})(b||(b={}));return b});O(e,"Core/Utilities.js",[e["Core/Globals.js"]],function(D){function b(a,c,h,r){var y=c?"Highcharts error":"Highcharts warning";32===a&&(a=y+": Deprecated member");var d=w(a),M=d?y+" #"+a+": www.highcharts.com/errors/"+a+"/":a.toString();if("undefined"!==typeof r){var t="";d&&(M+="?");n(r,function(p,a){t+="\n - "+a+": "+p;d&&(M+=encodeURI(a)+"="+encodeURI(p))});M+=t}E(Highcharts,"displayError",
{chart:h,code:a,message:M,params:r},function(){if(c)throw Error(M);g.console&&-1===b.messages.indexOf(M)&&console.warn(M)});b.messages.push(M)}function e(a,c){var y={};n(a,function(g,h){if(C(a[h],!0)&&!a.nodeType&&c[h])g=e(a[h],c[h]),Object.keys(g).length&&(y[h]=g);else if(C(a[h])||a[h]!==c[h])y[h]=a[h]});return y}function z(a,c){return parseInt(a,c||10)}function H(a){return"string"===typeof a}function G(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===
a}function C(a,c){return!!a&&"object"===typeof a&&(!c||!G(a))}function B(a){return C(a)&&"number"===typeof a.nodeType}function x(a){var c=a&&a.constructor;return!(!C(a,!0)||B(a)||!c||!c.name||"Object"===c.name)}function w(a){return"number"===typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a}function v(a){return"undefined"!==typeof a&&null!==a}function f(a,c,g){var y;H(c)?v(g)?a.setAttribute(c,g):a&&a.getAttribute&&((y=a.getAttribute(c))||"class"!==c||(y=a.getAttribute(c+"Name"))):n(c,function(c,y){a.setAttribute(y,
c)});return y}function d(a,c){var y;a||(a={});for(y in c)a[y]=c[y];return a}function q(){for(var a=arguments,c=a.length,g=0;g<c;g++){var h=a[g];if("undefined"!==typeof h&&null!==h)return h}}function k(a,c){D.isMS&&!D.svg&&c&&"undefined"!==typeof c.opacity&&(c.filter="alpha(opacity="+100*c.opacity+")");d(a.style,c)}function l(a,g,h,r,m){a=c.createElement(a);g&&d(a,g);m&&k(a,{padding:"0",border:"none",margin:"0"});h&&k(a,h);r&&r.appendChild(a);return a}function N(a,c){return parseFloat(a.toPrecision(c||
14))}function u(a,c,h){var y=D.getStyle||u;if("width"===c)return c=Math.min(a.offsetWidth,a.scrollWidth),h=a.getBoundingClientRect&&a.getBoundingClientRect().width,h<c&&h>=c-1&&(c=Math.floor(h)),Math.max(0,c-(y(a,"padding-left",!0)||0)-(y(a,"padding-right",!0)||0));if("height"===c)return Math.max(0,Math.min(a.offsetHeight,a.scrollHeight)-(y(a,"padding-top",!0)||0)-(y(a,"padding-bottom",!0)||0));g.getComputedStyle||b(27,!0);if(a=g.getComputedStyle(a,void 0)){var r=a.getPropertyValue(c);q(h,"opacity"!==
c)&&(r=z(r))}return r}function n(a,c,g){for(var h in a)Object.hasOwnProperty.call(a,h)&&c.call(g||a[h],a[h],h,a)}function J(a,c,g){function h(t,p){var c=a.removeEventListener||D.removeEventListenerPolyfill;c&&c.call(a,t,p,!1)}function y(t){var p;if(a.nodeName){if(c){var g={};g[c]=!0}else g=t;n(g,function(a,c){if(t[c])for(p=t[c].length;p--;)h(c,t[c][p].fn)})}}var r="function"===typeof a&&a.prototype||a;if(Object.hasOwnProperty.call(r,"hcEvents")){var M=r.hcEvents;c?(r=M[c]||[],g?(M[c]=r.filter(function(a){return g!==
a.fn}),h(c,g)):(y(M),M[c]=[])):(y(M),delete r.hcEvents)}}function E(a,g,h,r){h=h||{};if(c.createEvent&&(a.dispatchEvent||a.fireEvent&&a!==D)){var y=c.createEvent("Events");y.initEvent(g,!0,!0);h=d(y,h);a.dispatchEvent?a.dispatchEvent(h):a.fireEvent(g,h)}else if(a.hcEvents){h.target||d(h,{preventDefault:function(){h.defaultPrevented=!0},target:a,type:g});y=[];for(var m=a,M=!1;m.hcEvents;)Object.hasOwnProperty.call(m,"hcEvents")&&m.hcEvents[g]&&(y.length&&(M=!0),y.unshift.apply(y,m.hcEvents[g])),m=
Object.getPrototypeOf(m);M&&y.sort(function(a,p){return a.order-p.order});y.forEach(function(t){!1===t.fn.call(a,h)&&h.preventDefault()})}r&&!h.defaultPrevented&&r.call(a,h)}var m=D.charts,c=D.doc,g=D.win;"";(b||(b={})).messages=[];var a;Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};var h=Array.prototype.find?function(a,c){return a.find(c)}:function(a,c){var g,h=a.length;for(g=0;g<h;g++)if(c(a[g],g))return a[g]};n({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},
function(a,c){D[c]=function(g){var h;b(32,!1,void 0,(h={},h["Highcharts."+c]="use Array."+a,h));return Array.prototype[a].apply(g,[].slice.call(arguments,1))}});var r,A=function(){var a=Math.random().toString(36).substring(2,9)+"-",c=0;return function(){return"highcharts-"+(r?"":a)+c++}}();g.jQuery&&(g.jQuery.fn.highcharts=function(){var a=[].slice.call(arguments);if(this[0])return a[0]?(new (D[H(a[0])?a.shift():"Chart"])(this[0],a[0],a[1]),this):m[f(this[0],"data-highcharts-chart")]});return{addEvent:function(a,
c,g,h){void 0===h&&(h={});var r="function"===typeof a&&a.prototype||a;Object.hasOwnProperty.call(r,"hcEvents")||(r.hcEvents={});r=r.hcEvents;D.Point&&a instanceof D.Point&&a.series&&a.series.chart&&(a.series.chart.runTrackerClick=!0);var y=a.addEventListener||D.addEventListenerPolyfill;y&&y.call(a,c,g,D.supportsPassiveEvents?{passive:void 0===h.passive?-1!==c.indexOf("touch"):h.passive,capture:!1}:!1);r[c]||(r[c]=[]);r[c].push({fn:g,order:"number"===typeof h.order?h.order:Infinity});r[c].sort(function(a,
t){return a.order-t.order});return function(){J(a,c,g)}},arrayMax:function(a){for(var c=a.length,g=a[0];c--;)a[c]>g&&(g=a[c]);return g},arrayMin:function(a){for(var c=a.length,g=a[0];c--;)a[c]<g&&(g=a[c]);return g},attr:f,clamp:function(a,c,g){return a>c?a<g?a:g:c},cleanRecursively:e,clearTimeout:function(a){v(a)&&clearTimeout(a)},correctFloat:N,createElement:l,css:k,defined:v,destroyObjectProperties:function(a,c){n(a,function(g,h){g&&g!==c&&g.destroy&&g.destroy();delete a[h]})},discardElement:function(c){a||
(a=l("div"));c&&a.appendChild(c);a.innerHTML=""},erase:function(a,c){for(var g=a.length;g--;)if(a[g]===c){a.splice(g,1);break}},error:b,extend:d,extendClass:function(a,c){var g=function(){};g.prototype=new a;d(g.prototype,c);return g},find:h,fireEvent:E,getMagnitude:function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))},getNestedProperty:function(a,c){for(a=a.split(".");a.length&&v(c);){var h=a.shift();if("undefined"===typeof h||"__proto__"===h)return;c=c[h];if(!v(c)||"function"===typeof c||
"number"===typeof c.nodeType||c===g)return}return c},getStyle:u,inArray:function(a,c,g){b(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return c.indexOf(a,g)},isArray:G,isClass:x,isDOMElement:B,isFunction:function(a){return"function"===typeof a},isNumber:w,isObject:C,isString:H,keys:function(a){b(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(a)},merge:function(){var a,c=arguments,g={},h=function(a,c){"object"!==typeof a&&(a={});n(c,function(t,p){"__proto__"!==p&&
"constructor"!==p&&(!C(t,!0)||x(t)||B(t)?a[p]=c[p]:a[p]=h(a[p]||{},t))});return a};!0===c[0]&&(g=c[1],c=Array.prototype.slice.call(c,2));var r=c.length;for(a=0;a<r;a++)g=h(g,c[a]);return g},normalizeTickInterval:function(a,c,g,h,r){var d=a;g=q(g,1);var M=a/g;c||(c=r?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===h&&(1===g?c=c.filter(function(a){return 0===a%1}):.1>=g&&(c=[1/g])));for(h=0;h<c.length&&!(d=c[h],r&&d*g>=a||!r&&M<=(c[h]+(c[h+1]||c[h]))/2);h++);return d=N(d*g,-Math.round(Math.log(.001)/
Math.LN10))},objectEach:n,offset:function(a){var h=c.documentElement;a=a.parentElement||a.parentNode?a.getBoundingClientRect():{top:0,left:0,width:0,height:0};return{top:a.top+(g.pageYOffset||h.scrollTop)-(h.clientTop||0),left:a.left+(g.pageXOffset||h.scrollLeft)-(h.clientLeft||0),width:a.width,height:a.height}},pad:function(a,c,g){return Array((c||2)+1-String(a).replace("-","").length).join(g||"0")+a},pick:q,pInt:z,relativeLength:function(a,c,g){return/%$/.test(a)?c*parseFloat(a)/100+(g||0):parseFloat(a)},
removeEvent:J,splat:function(a){return G(a)?a:[a]},stableSort:function(a,c){var g=a.length,h,r;for(r=0;r<g;r++)a[r].safeI=r;a.sort(function(a,g){h=c(a,g);return 0===h?a.safeI-g.safeI:h});for(r=0;r<g;r++)delete a[r].safeI},syncTimeout:function(a,c,g){if(0<c)return setTimeout(a,c,g);a.call(0,g);return-1},timeUnits:{millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},uniqueKey:A,useSerialIds:function(a){return r=q(a,r)},wrap:function(a,c,g){var h=a[c];a[c]=
function(){var a=Array.prototype.slice.call(arguments),c=arguments,r=this;r.proceed=function(){h.apply(r,arguments.length?arguments:c)};a.unshift(h);a=g.apply(this,a);r.proceed=null;return a}}}});O(e,"Core/Color/Color.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(D,b){var e=b.isNumber,z=b.merge,H=b.pInt;"";b=function(){function b(e){this.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(b){return[H(b[1]),H(b[2]),
H(b[3]),parseFloat(b[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(b){return[H(b[1]),H(b[2]),H(b[3]),1]}}];this.rgba=[];if(D.Color!==b)return new D.Color(e);if(!(this instanceof b))return new b(e);this.init(e)}b.parse=function(e){return new b(e)};b.prototype.init=function(e){var B,x;if((this.input=e=b.names[e&&e.toLowerCase?e.toLowerCase():""]||e)&&e.stops)this.stops=e.stops.map(function(f){return new b(f[1])});else{if(e&&e.charAt&&"#"===e.charAt()){var w=
e.length;e=parseInt(e.substr(1),16);7===w?B=[(e&16711680)>>16,(e&65280)>>8,e&255,1]:4===w&&(B=[(e&3840)>>4|(e&3840)>>8,(e&240)>>4|e&240,(e&15)<<4|e&15,1])}if(!B)for(x=this.parsers.length;x--&&!B;){var v=this.parsers[x];(w=v.regex.exec(e))&&(B=v.parse(w))}}this.rgba=B||[]};b.prototype.get=function(b){var B=this.input,x=this.rgba;if("undefined"!==typeof this.stops){var w=z(B);w.stops=[].concat(w.stops);this.stops.forEach(function(v,f){w.stops[f]=[w.stops[f][0],v.get(b)]})}else w=x&&e(x[0])?"rgb"===
b||!b&&1===x[3]?"rgb("+x[0]+","+x[1]+","+x[2]+")":"a"===b?x[3]:"rgba("+x.join(",")+")":B;return w};b.prototype.brighten=function(b){var B,x=this.rgba;if(this.stops)this.stops.forEach(function(w){w.brighten(b)});else if(e(b)&&0!==b)for(B=0;3>B;B++)x[B]+=H(255*b),0>x[B]&&(x[B]=0),255<x[B]&&(x[B]=255);return this};b.prototype.setOpacity=function(b){this.rgba[3]=b;return this};b.prototype.tweenTo=function(b,e){var x=this.rgba,w=b.rgba;w.length&&x&&x.length?(b=1!==w[3]||1!==x[3],e=(b?"rgba(":"rgb(")+Math.round(w[0]+
(x[0]-w[0])*(1-e))+","+Math.round(w[1]+(x[1]-w[1])*(1-e))+","+Math.round(w[2]+(x[2]-w[2])*(1-e))+(b?","+(w[3]+(x[3]-w[3])*(1-e)):"")+")"):e=b.input||"none";return e};b.names={white:"#ffffff",black:"#000000"};return b}();D.Color=b;D.color=b.parse;return b});O(e,"Core/Color/Palette.js",[],function(){return{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),backgroundColor:"#ffffff",neutralColor100:"#000000",neutralColor80:"#333333",neutralColor60:"#666666",
neutralColor40:"#999999",neutralColor20:"#cccccc",neutralColor10:"#e6e6e6",neutralColor5:"#f2f2f2",neutralColor3:"#f7f7f7",highlightColor100:"#003399",highlightColor80:"#335cad",highlightColor60:"#6685c2",highlightColor20:"#ccd6eb",highlightColor10:"#e6ebf5",positiveColor:"#06b535",negativeColor:"#f21313"}});O(e,"Core/Time.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b){var D=e.win,z=b.defined,H=b.error,G=b.extend,C=b.isObject,B=b.merge,x=b.objectEach,w=b.pad,v=b.pick,f=b.splat,d=
b.timeUnits;"";b=function(){function q(d){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=D.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(d)}q.prototype.get=function(d,l){if(this.variableTimezone||this.timezoneOffset){var k=l.getTime(),u=k-this.getTimezoneOffset(l);l.setTime(u);d=l["getUTC"+d]();l.setTime(k);return d}return this.useUTC?l["getUTC"+d]():l["get"+d]()};q.prototype.set=function(d,l,f){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===
d||"Seconds"===d||"Minutes"===d&&0===this.getTimezoneOffset(l)%36E5)return l["setUTC"+d](f);var u=this.getTimezoneOffset(l);u=l.getTime()-u;l.setTime(u);l["setUTC"+d](f);d=this.getTimezoneOffset(l);u=l.getTime()+d;return l.setTime(u)}return this.useUTC?l["setUTC"+d](f):l["set"+d](f)};q.prototype.update=function(d){var l=v(d&&d.useUTC,!0);this.options=d=B(!0,this.options||{},d);this.Date=d.Date||D.Date||Date;this.timezoneOffset=(this.useUTC=l)&&d.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();
this.variableTimezone=l&&!(!d.getTimezoneOffset&&!d.timezone)};q.prototype.makeTime=function(d,l,f,u,n,q){if(this.useUTC){var k=this.Date.UTC.apply(0,arguments);var m=this.getTimezoneOffset(k);k+=m;var c=this.getTimezoneOffset(k);m!==c?k+=c-m:m-36E5!==this.getTimezoneOffset(k-36E5)||e.isSafari||(k-=36E5)}else k=(new this.Date(d,l,v(f,1),v(u,0),v(n,0),v(q,0))).getTime();return k};q.prototype.timezoneOffsetFunction=function(){var d=this,l=this.options,f=l.moment||D.moment;if(!this.useUTC)return function(d){return 6E4*
(new Date(d.toString())).getTimezoneOffset()};if(l.timezone){if(f)return function(d){return 6E4*-f.tz(d,l.timezone).utcOffset()};H(25)}return this.useUTC&&l.getTimezoneOffset?function(d){return 6E4*l.getTimezoneOffset(d.valueOf())}:function(){return 6E4*(d.timezoneOffset||0)}};q.prototype.dateFormat=function(d,f,q){if(!z(f)||isNaN(f))return e.defaultOptions.lang&&e.defaultOptions.lang.invalidDate||"";d=v(d,"%Y-%m-%d %H:%M:%S");var l=this,n=new this.Date(f),k=this.get("Hours",n),N=this.get("Day",n),
m=this.get("Date",n),c=this.get("Month",n),g=this.get("FullYear",n),a=e.defaultOptions.lang,h=a&&a.weekdays,r=a&&a.shortWeekdays;n=G({a:r?r[N]:h[N].substr(0,3),A:h[N],d:w(m),e:w(m,2," "),w:N,b:a.shortMonths[c],B:a.months[c],m:w(c+1),o:c+1,y:g.toString().substr(2,2),Y:g,H:w(k),k:k,I:w(k%12||12),l:k%12||12,M:w(this.get("Minutes",n)),p:12>k?"AM":"PM",P:12>k?"am":"pm",S:w(n.getSeconds()),L:w(Math.floor(f%1E3),3)},e.dateFormats);x(n,function(a,c){for(;-1!==d.indexOf("%"+c);)d=d.replace("%"+c,"function"===
typeof a?a.call(l,f):a)});return q?d.substr(0,1).toUpperCase()+d.substr(1):d};q.prototype.resolveDTLFormat=function(d){return C(d,!0)?d:(d=f(d),{main:d[0],from:d[1],to:d[2]})};q.prototype.getTimeTicks=function(f,l,q,u){var n=this,k=[],N={};var m=new n.Date(l);var c=f.unitRange,g=f.count||1,a;u=v(u,1);if(z(l)){n.set("Milliseconds",m,c>=d.second?0:g*Math.floor(n.get("Milliseconds",m)/g));c>=d.second&&n.set("Seconds",m,c>=d.minute?0:g*Math.floor(n.get("Seconds",m)/g));c>=d.minute&&n.set("Minutes",m,
c>=d.hour?0:g*Math.floor(n.get("Minutes",m)/g));c>=d.hour&&n.set("Hours",m,c>=d.day?0:g*Math.floor(n.get("Hours",m)/g));c>=d.day&&n.set("Date",m,c>=d.month?1:Math.max(1,g*Math.floor(n.get("Date",m)/g)));if(c>=d.month){n.set("Month",m,c>=d.year?0:g*Math.floor(n.get("Month",m)/g));var h=n.get("FullYear",m)}c>=d.year&&n.set("FullYear",m,h-h%g);c===d.week&&(h=n.get("Day",m),n.set("Date",m,n.get("Date",m)-h+u+(h<u?-7:0)));h=n.get("FullYear",m);u=n.get("Month",m);var r=n.get("Date",m),A=n.get("Hours",m);
l=m.getTime();!n.variableTimezone&&n.useUTC||!z(q)||(a=q-l>4*d.month||n.getTimezoneOffset(l)!==n.getTimezoneOffset(q));l=m.getTime();for(m=1;l<q;)k.push(l),l=c===d.year?n.makeTime(h+m*g,0):c===d.month?n.makeTime(h,u+m*g):!a||c!==d.day&&c!==d.week?a&&c===d.hour&&1<g?n.makeTime(h,u,r,A+m*g):l+c*g:n.makeTime(h,u,r+m*g*(c===d.day?1:7)),m++;k.push(l);c<=d.hour&&1E4>k.length&&k.forEach(function(a){0===a%18E5&&"000000000"===n.dateFormat("%H%M%S%L",a)&&(N[a]="day")})}k.info=G(f,{higherRanks:N,totalRange:c*
g});return k};return q}();e.Time=b;return e.Time});O(e,"Core/Options.js",[e["Core/Globals.js"],e["Core/Color/Color.js"],e["Core/Color/Palette.js"],e["Core/Time.js"],e["Core/Utilities.js"]],function(e,b,I,z,H){var D=e.isTouchDevice,C=e.svg;b=b.parse;var B=H.merge;"";var x={colors:I.colors,symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:{panning:{enabled:!1,type:"x"},styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",
x:-10,y:10}},zoomBySingleTouch:!1,width:null,height:null,borderColor:I.highlightColor80,backgroundColor:I.backgroundColor,plotBorderColor:I.neutralColor20},title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:I.neutralColor80}},legend:{enabled:!0,align:"center",alignColumns:!0,layout:"horizontal",labelFormatter:function(){return this.name},
borderColor:I.neutralColor40,borderRadius:0,navigation:{activeColor:I.highlightColor100,inactiveColor:I.neutralColor20},itemStyle:{color:I.neutralColor80,cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:I.neutralColor100},itemHiddenStyle:{color:I.neutralColor20},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",
position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:I.backgroundColor,opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:C,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:D?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
backgroundColor:b(I.neutralColor3).setOpacity(.85).get(),borderWidth:1,shadow:!0,style:{color:I.neutralColor80,cursor:"default",fontSize:"12px",whiteSpace:"nowrap"}},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:I.neutralColor40,fontSize:"9px"},text:"Highcharts.com"}};x.chart.styledMode=!1;"";var w=new z(B(x.global,x.time));return{defaultOptions:x,defaultTime:w,getOptions:function(){return x},
setOptions:function(v){B(!0,x,v);if(v.time||v.global)e.time?e.time.update(B(x.global,x.time,v.global,v.time)):e.time=w;return x}}});O(e,"Core/Animation/Fx.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b,I){var D=e.parse,H=b.win,G=I.isNumber,C=I.objectEach;return function(){function b(b,w,v){this.pos=NaN;this.options=w;this.elem=b;this.prop=v}b.prototype.dSetter=function(){var b=this.paths,w=b&&b[0];b=b&&b[1];var v=this.now||0,f=[];if(1!==v&&w&&b)if(w.length===
b.length&&1>v)for(var d=0;d<b.length;d++){for(var q=w[d],k=b[d],l=[],N=0;N<k.length;N++){var u=q[N],n=k[N];G(u)&&G(n)&&("A"!==k[0]||4!==N&&5!==N)?l[N]=u+v*(n-u):l[N]=n}f.push(l)}else f=b;else f=this.toD||[];this.elem.attr("d",f,void 0,!0)};b.prototype.update=function(){var b=this.elem,w=this.prop,v=this.now,f=this.options.step;if(this[w+"Setter"])this[w+"Setter"]();else b.attr?b.element&&b.attr(w,v,null,!0):b.style[w]=v+this.unit;f&&f.call(b,v,this)};b.prototype.run=function(e,w,v){var f=this,d=f.options,
q=function(d){return q.stopped?!1:f.step(d)},k=H.requestAnimationFrame||function(d){setTimeout(d,13)},l=function(){for(var d=0;d<b.timers.length;d++)b.timers[d]()||b.timers.splice(d--,1);b.timers.length&&k(l)};e!==w||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=e,this.end=w,this.unit=v,this.now=this.start,this.pos=0,q.elem=this.elem,q.prop=this.prop,q()&&1===b.timers.push(q)&&k(l)):(delete d.curAnim[this.prop],d.complete&&0===Object.keys(d.curAnim).length&&d.complete.call(this.elem))};
b.prototype.step=function(b){var w=+new Date,v=this.options,f=this.elem,d=v.complete,q=v.duration,k=v.curAnim;if(f.attr&&!f.element)b=!1;else if(b||w>=q+this.startTime){this.now=this.end;this.pos=1;this.update();var l=k[this.prop]=!0;C(k,function(d){!0!==d&&(l=!1)});l&&d&&d.call(f);b=!1}else this.pos=v.easing((w-this.startTime)/q),this.now=this.start+(this.end-this.start)*this.pos,this.update(),b=!0;return b};b.prototype.initPath=function(b,w,v){function f(d,m){for(;d.length<J;){var c=d[0],g=m[J-
d.length];g&&"M"===c[0]&&(d[0]="C"===g[0]?["C",c[1],c[2],c[1],c[2],c[1],c[2]]:["L",c[1],c[2]]);d.unshift(c);l&&(c=d.pop(),d.push(d[d.length-1],c))}}function d(d,m){for(;d.length<J;)if(m=d[Math.floor(d.length/N)-1].slice(),"C"===m[0]&&(m[1]=m[5],m[2]=m[6]),l){var c=d[Math.floor(d.length/N)].slice();d.splice(d.length/2,0,m,c)}else d.push(m)}var q=b.startX,k=b.endX;v=v.slice();var l=b.isArea,N=l?2:1;w=w&&w.slice();if(!w)return[v,v];if(q&&k&&k.length){for(b=0;b<q.length;b++)if(q[b]===k[0]){var u=b;break}else if(q[0]===
k[k.length-q.length+b]){u=b;var n=!0;break}else if(q[q.length-1]===k[k.length-q.length+b]){u=q.length-b;break}"undefined"===typeof u&&(w=[])}if(w.length&&G(u)){var J=v.length+u*N;n?(f(w,v),d(v,w)):(f(v,w),d(w,v))}return[w,v]};b.prototype.fillSetter=function(){b.prototype.strokeSetter.apply(this,arguments)};b.prototype.strokeSetter=function(){this.elem.attr(this.prop,D(this.start).tweenTo(D(this.end),this.pos),null,!0)};b.timers=[];return b}()});O(e,"Core/Animation/AnimationUtilities.js",[e["Core/Animation/Fx.js"],
e["Core/Utilities.js"]],function(e,b){function D(d){return x(d)?w({duration:500,defer:0},d):{duration:d?500:0,defer:0}}function z(d,f){for(var q=e.timers.length;q--;)e.timers[q].elem!==d||f&&f!==e.timers[q].prop||(e.timers[q].stopped=!0)}var H=b.defined,G=b.getStyle,C=b.isArray,B=b.isNumber,x=b.isObject,w=b.merge,v=b.objectEach,f=b.pick;return{animate:function(d,f,k){var l,q="",u,n;if(!x(k)){var b=arguments;k={duration:b[2],easing:b[3],complete:b[4]}}B(k.duration)||(k.duration=400);k.easing="function"===
typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=w(f);v(f,function(b,m){z(d,m);n=new e(d,k,m);u=void 0;"d"===m&&C(f.d)?(n.paths=n.initPath(d,d.pathArray,f.d),n.toD=f.d,l=0,u=1):d.attr?l=d.attr(m):(l=parseFloat(G(d,m))||0,"opacity"!==m&&(q="px"));u||(u=b);"string"===typeof u&&u.match("px")&&(u=u.replace(/px/g,""));n.run(l,u,q)})},animObject:D,getDeferredAnimation:function(d,f,b){var l=D(f),q=0,u=0;(b?[b]:d.series).forEach(function(d){d=D(d.options.animation);q=f&&H(f.defer)?l.defer:
Math.max(q,d.duration+d.defer);u=Math.min(l.duration,d.duration)});d.renderer.forExport&&(q=0);return{defer:Math.max(0,q-u),duration:Math.min(q,u)}},setAnimation:function(d,q){q.renderer.globalAnimation=f(d,q.options.chart.animation,!0)},stop:z}});O(e,"Core/Renderer/HTML/AST.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b){var D=e.SVG_NS,z=b.attr,H=b.createElement,G=b.discardElement,C=b.error,B=b.isString,x=b.objectEach,w=b.splat;"";var v=!1;try{v=!!(new DOMParser).parseFromString("",
"text/html")}catch(f){}return function(){function f(d){this.nodes="string"===typeof d?this.parseMarkup(d):d}f.filterUserAttributes=function(d){x(d,function(q,b){var l=!0;-1===f.allowedAttributes.indexOf(b)&&(l=!1);-1!==["background","dynsrc","href","lowsrc","src"].indexOf(b)&&(l=B(q)&&f.allowedReferences.some(function(d){return 0===q.indexOf(d)}));l||(C("Highcharts warning: Invalid attribute '"+b+"' in config"),delete d[b])});return d};f.setElementHTML=function(d,q){d.innerHTML="";q&&(new f(q)).addToDOM(d)};
f.prototype.addToDOM=function(d){function q(d,l){var b;w(d).forEach(function(d){var n=d.tagName,u=d.textContent?e.doc.createTextNode(d.textContent):void 0;if(n)if("#text"===n)var k=u;else if(-1!==f.allowedTags.indexOf(n)){n=e.doc.createElementNS("svg"===n?D:l.namespaceURI||D,n);var m=d.attributes||{};x(d,function(c,g){"tagName"!==g&&"attributes"!==g&&"children"!==g&&"textContent"!==g&&(m[g]=c)});z(n,f.filterUserAttributes(m));u&&n.appendChild(u);q(d.children||[],n);k=n}else C("Highcharts warning: Invalid tagName '"+
n+"' in config");k&&l.appendChild(k);b=k});return b}return q(this.nodes,d)};f.prototype.parseMarkup=function(d){var f=[];if(v)d=(new DOMParser).parseFromString(d,"text/html");else{var b=H("div");b.innerHTML=d;d={body:b}}var l=function(d,f){var n=d.nodeName.toLowerCase(),b={tagName:n};if("#text"===n){n=d.textContent||"";if(/^[\s]*$/.test(n))return;b.textContent=n}if(n=d.attributes){var u={};[].forEach.call(n,function(c){u[c.name]=c.value});b.attributes=u}if(d.childNodes.length){var m=[];[].forEach.call(d.childNodes,
function(c){l(c,m)});m.length&&(b.children=m)}f.push(b)};[].forEach.call(d.body.childNodes,function(d){return l(d,f)});b&&G(b);return f};f.allowedTags="a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");f.allowedAttributes=
"aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" ");
f.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" ");return f}()});O(e,"Core/FormatUtilities.js",[e["Core/Options.js"],e["Core/Utilities.js"]],function(e,b){function D(b,v,f,d){b=+b||0;v=+v;var q=z.lang,k=(b.toString().split(".")[1]||"").split("e")[0].length,l=b.toString().split("e"),N=v;if(-1===v)v=Math.min(k,20);else if(!C(v))v=2;else if(v&&l[1]&&0>l[1]){var u=v+ +l[1];0<=u?(l[0]=(+l[0]).toExponential(u).split("e")[0],v=u):(l[0]=l[0].split(".")[0]||0,b=20>v?(l[0]*Math.pow(10,l[1])).toFixed(v):
0,l[1]=0)}u=(Math.abs(l[1]?l[0]:b)+Math.pow(10,-Math.max(v,k)-1)).toFixed(v);k=String(x(u));var n=3<k.length?k.length%3:0;f=B(f,q.decimalPoint);d=B(d,q.thousandsSep);b=(0>b?"-":"")+(n?k.substr(0,n)+d:"");b=0>+l[1]&&!N?"0":b+k.substr(n).replace(/(\d{3})(?=\d)/g,"$1"+d);v&&(b+=f+u.slice(-v));l[1]&&0!==+b&&(b+="e"+l[1]);return b}var z=e.defaultOptions,H=e.defaultTime,G=b.getNestedProperty,C=b.isNumber,B=b.pick,x=b.pInt;return{dateFormat:function(b,v,f){return H.dateFormat(b,v,f)},format:function(b,v,
f){var d="{",q=!1,k=/f$/,l=/\.([0-9])/,N=z.lang,u=f&&f.time||H;f=f&&f.numberFormatter||D;for(var n=[];b;){var J=b.indexOf(d);if(-1===J)break;var E=b.slice(0,J);if(q){E=E.split(":");d=G(E.shift()||"",v);if(E.length&&"number"===typeof d)if(E=E.join(":"),k.test(E)){var m=parseInt((E.match(l)||["","-1"])[1],10);null!==d&&(d=f(d,m,N.decimalPoint,-1<E.indexOf(",")?N.thousandsSep:""))}else d=u.dateFormat(E,d);n.push(d)}else n.push(E);b=b.slice(J+1);d=(q=!q)?"}":"{"}n.push(b);return n.join("")},numberFormat:D}});
O(e,"Core/Renderer/SVG/SVGElement.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Renderer/HTML/AST.js"],e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G){var D=e.animate,B=e.animObject,x=e.stop,w=z.deg2rad,v=z.doc,f=z.noop,d=z.svg,q=z.SVG_NS,k=z.win,l=G.addEvent,N=G.attr,u=G.createElement,n=G.css,J=G.defined,E=G.erase,m=G.extend,c=G.fireEvent,g=G.isArray,a=G.isFunction,h=G.isNumber,r=G.isString,A=G.merge,y=G.objectEach,L=
G.pick,P=G.pInt,R=G.syncTimeout,V=G.uniqueKey;e=function(){function e(){this.element=void 0;this.onEvents={};this.opacity=1;this.renderer=void 0;this.SVG_NS=q;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ")}e.prototype._defaultGetter=function(a){a=L(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a};e.prototype._defaultSetter=function(a,t,p){p.setAttribute(t,a)};e.prototype.add=
function(a){var t=this.renderer,p=this.element;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&t.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)var c=this.zIndexSetter();c||(a?a.element:t.box).appendChild(p);if(this.onAdd)this.onAdd();return this};e.prototype.addClass=function(a,t){var p=t?"":this.attr("class")||"";a=(a||"").split(/ /g).reduce(function(a,t){-1===p.indexOf(t)&&a.push(t);return a},p?[p]:[]).join(" ");
a!==p&&this.attr("class",a);return this};e.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};e.prototype.align=function(a,t,p){var c={},g=this.renderer,d=g.alignedObjects,F,h,K;if(a){if(this.alignOptions=a,this.alignByTranslate=t,!p||r(p))this.alignTo=F=p||"renderer",E(d,this),d.push(this),p=void 0}else a=this.alignOptions,t=this.alignByTranslate,F=this.alignTo;p=L(p,g[F],"scrollablePlotBox"===F?g.plotBox:void 0,g);F=a.align;var M=a.verticalAlign;g=
(p.x||0)+(a.x||0);d=(p.y||0)+(a.y||0);"right"===F?h=1:"center"===F&&(h=2);h&&(g+=(p.width-(a.width||0))/h);c[t?"translateX":"x"]=Math.round(g);"bottom"===M?K=1:"middle"===M&&(K=2);K&&(d+=(p.height-(a.height||0))/K);c[t?"translateY":"y"]=Math.round(d);this[this.placed?"animate":"attr"](c);this.placed=!0;this.alignAttr=c;return this};e.prototype.alignSetter=function(a){var t={left:"start",center:"middle",right:"end"};t[a]&&(this.alignValue=a,this.element.setAttribute("text-anchor",t[a]))};e.prototype.animate=
function(a,t,p){var c=this,g=B(L(t,this.renderer.globalAnimation,!0));t=g.defer;L(v.hidden,v.msHidden,v.webkitHidden,!1)&&(g.duration=0);0!==g.duration?(p&&(g.complete=p),R(function(){c.element&&D(c,a,g)},t)):(this.attr(a,void 0,p),y(a,function(a,p){g.step&&g.step.call(this,a,{prop:p,pos:1,elem:this})},this));return this};e.prototype.applyTextOutline=function(a){var t=this.element;-1!==a.indexOf("contrast")&&(a=a.replace(/contrast/g,this.renderer.getContrast(t.style.fill)));var p=a.split(" ");a=p[p.length-
1];if((p=p[0])&&"none"!==p&&z.svg){this.fakeTS=!0;this.ySetter=this.xSetter;p=p.replace(/(^[\d\.]+)(.*?)$/g,function(a,p,t){return 2*Number(p)+t});this.removeTextOutline();var c=v.createElementNS(q,"tspan");N(c,{"class":"highcharts-text-outline",fill:a,stroke:a,"stroke-width":p,"stroke-linejoin":"round"});[].forEach.call(t.childNodes,function(a){var p=a.cloneNode(!0);p.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(function(a){return p.removeAttribute(a)});c.appendChild(p)});var g=
v.createElementNS(q,"tspan");g.textContent="\u200b";["x","y"].forEach(function(a){var p=t.getAttribute(a);p&&g.setAttribute(a,p)});c.appendChild(g);t.insertBefore(c,t.firstChild)}};e.prototype.attr=function(a,t,p,c){var g=this.element,d=this.symbolCustomAttribs,h,r=this,K,m;if("string"===typeof a&&"undefined"!==typeof t){var M=a;a={};a[M]=t}"string"===typeof a?r=(this[a+"Getter"]||this._defaultGetter).call(this,a,g):(y(a,function(p,t){K=!1;c||x(this,t);this.symbolName&&-1!==d.indexOf(t)&&(h||(this.symbolAttr(a),
h=!0),K=!0);!this.rotation||"x"!==t&&"y"!==t||(this.doTransform=!0);K||(m=this[t+"Setter"]||this._defaultSetter,m.call(this,p,t,g),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(t)&&this.updateShadows(t,p,m))},this),this.afterSetters());p&&p.call(this);return r};e.prototype.clip=function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")};e.prototype.crisp=function(a,t){t=t||a.strokeWidth||0;var p=Math.round(t)%2/2;a.x=Math.floor(a.x||
this.x||0)+p;a.y=Math.floor(a.y||this.y||0)+p;a.width=Math.floor((a.width||this.width||0)-2*p);a.height=Math.floor((a.height||this.height||0)-2*p);J(a.strokeWidth)&&(a.strokeWidth=t);return a};e.prototype.complexColor=function(a,t,p){var d=this.renderer,h,r,F,m,K,M,f,b,l,n,u=[],q;c(this.renderer,"complexColor",{args:arguments},function(){a.radialGradient?r="radialGradient":a.linearGradient&&(r="linearGradient");if(r){F=a[r];K=d.gradients;M=a.stops;l=p.radialReference;g(F)&&(a[r]=F={x1:F[0],y1:F[1],
x2:F[2],y2:F[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===r&&l&&!J(F.gradientUnits)&&(m=F,F=A(F,d.getRadialAttr(l,m),{gradientUnits:"userSpaceOnUse"}));y(F,function(a,p){"id"!==p&&u.push(p,a)});y(M,function(a){u.push(a)});u=u.join(",");if(K[u])n=K[u].attr("id");else{F.id=n=V();var c=K[u]=d.createElement(r).attr(F).add(d.defs);c.radAttr=m;c.stops=[];M.forEach(function(a){0===a[1].indexOf("rgba")?(h=I.parse(a[1]),f=h.get("rgb"),b=h.get("a")):(f=a[1],b=1);a=d.createElement("stop").attr({offset:a[0],
"stop-color":f,"stop-opacity":b}).add(c);c.stops.push(a)})}q="url("+d.url+"#"+n+")";p.setAttribute(t,q);p.gradient=u;a.toString=function(){return q}}})};e.prototype.css=function(a){var t=this.styles,p={},c=this.element,g=["textOutline","textOverflow","width"],h="",F=!t;a&&a.color&&(a.fill=a.color);t&&y(a,function(a,c){t&&t[c]!==a&&(p[c]=a,F=!0)});if(F){t&&(a=m(t,p));if(a)if(null===a.width||"auto"===a.width)delete this.textWidth;else if("text"===c.nodeName.toLowerCase()&&a.width)var r=this.textWidth=
P(a.width);this.styles=a;r&&!d&&this.renderer.forExport&&delete a.width;if(c.namespaceURI===this.SVG_NS){var K=function(a,p){return"-"+p.toLowerCase()};y(a,function(a,p){-1===g.indexOf(p)&&(h+=p.replace(/([A-Z])/g,K)+":"+a+";")});h&&N(c,"style",h)}else n(c,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline))}return this};e.prototype.dashstyleSetter=function(a){var t=this["stroke-width"];"inherit"===t&&(t=1);if(a=a&&a.toLowerCase()){var p=
a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(a=p.length;a--;)p[a]=""+P(p[a])*L(t,NaN);a=p.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}};e.prototype.destroy=function(){var a=this,t=a.element||{},p=a.renderer,c=t.ownerSVGElement,g=p.isSVG&&"SPAN"===t.nodeName&&a.parentGroup||
void 0;t.onclick=t.onmouseout=t.onmouseover=t.onmousemove=t.point=null;x(a);if(a.clipPath&&c){var d=a.clipPath;[].forEach.call(c.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){-1<a.getAttribute("clip-path").indexOf(d.element.id)&&a.removeAttribute("clip-path")});a.clipPath=d.destroy()}if(a.stops){for(c=0;c<a.stops.length;c++)a.stops[c].destroy();a.stops.length=0;a.stops=void 0}a.safeRemoveChild(t);for(p.styledMode||a.destroyShadows();g&&g.div&&0===g.div.childNodes.length;)t=g.parentGroup,
a.safeRemoveChild(g.div),delete g.div,g=t;a.alignTo&&E(p.alignedObjects,a);y(a,function(p,c){a[c]&&a[c].parentGroup===a&&a[c].destroy&&a[c].destroy();delete a[c]})};e.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(a){this.safeRemoveChild(a)},this);this.shadows=void 0};e.prototype.destroyTextPath=function(a,c){var p=a.getElementsByTagName("text")[0];if(p){if(p.removeAttribute("dx"),p.removeAttribute("dy"),c.element.setAttribute("id",""),this.textPathWrapper&&p.getElementsByTagName("textPath").length){for(a=
this.textPathWrapper.element.childNodes;a.length;)p.appendChild(a[0]);p.removeChild(this.textPathWrapper.element)}}else if(a.getAttribute("dx")||a.getAttribute("dy"))a.removeAttribute("dx"),a.removeAttribute("dy");this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())};e.prototype.dSetter=function(a,c,p){g(a)&&("string"===typeof a[0]&&(a=this.renderer.pathToSegments(a)),this.pathArray=a,a=a.reduce(function(a,p,c){return p&&p.join?(c?a+" ":"")+p.join(" "):(p||"").toString()},""));
/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[c]!==a&&(p.setAttribute(c,a),this[c]=a)};e.prototype.fadeOut=function(a){var c=this;c.animate({opacity:0},{duration:L(a,150),complete:function(){c.attr({y:-9999}).hide()}})};e.prototype.fillSetter=function(a,c,p){"string"===typeof a?p.setAttribute(c,a):a&&this.complexColor(a,c,p)};e.prototype.getBBox=function(c,t){var p=this.renderer,g=this.element,d=this.styles,h=this.textStr,F=p.cache,r=p.cacheKeys,K=g.namespaceURI===this.SVG_NS;t=L(t,this.rotation,0);var A=
p.styledMode?g&&e.prototype.getStyle.call(g,"font-size"):d&&d.fontSize,f;if(J(h)){var b=h.toString();-1===b.indexOf("<")&&(b=b.replace(/[0-9]/g,"0"));b+=["",t,A,this.textWidth,d&&d.textOverflow,d&&d.fontWeight].join()}b&&!c&&(f=F[b]);if(!f){if(K||p.forExport){try{var y=this.fakeTS&&function(a){var p=g.querySelector(".highcharts-text-outline");p&&n(p,{display:a})};a(y)&&y("none");f=g.getBBox?m({},g.getBBox()):{width:g.offsetWidth,height:g.offsetHeight};a(y)&&y("")}catch(Y){""}if(!f||0>f.width)f={width:0,
height:0}}else f=this.htmlGetBBox();p.isSVG&&(c=f.width,p=f.height,K&&(f.height=p={"11px,17":14,"13px,20":16}[d&&d.fontSize+","+Math.round(p)]||p),t&&(d=t*w,f.width=Math.abs(p*Math.sin(d))+Math.abs(c*Math.cos(d)),f.height=Math.abs(p*Math.cos(d))+Math.abs(c*Math.sin(d))));if(b&&0<f.height){for(;250<r.length;)delete F[r.shift()];F[b]||r.push(b);F[b]=f}}return f};e.prototype.getStyle=function(a){return k.getComputedStyle(this.element||this,"").getPropertyValue(a)};e.prototype.hasClass=function(a){return-1!==
(""+this.attr("class")).split(" ").indexOf(a)};e.prototype.hide=function(a){a?this.attr({y:-9999}):this.attr({visibility:"hidden"});return this};e.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};e.prototype.init=function(a,t){this.element="span"===t?u(t):v.createElementNS(this.SVG_NS,t);this.renderer=a;c(this,"afterInit")};e.prototype.invert=function(a){this.inverted=a;this.updateTransform();return this};e.prototype.on=function(a,c){var p=this.onEvents;if(p[a])p[a]();p[a]=l(this.element,
a,c);return this};e.prototype.opacitySetter=function(a,c,p){this.opacity=a=Number(Number(a).toFixed(3));p.setAttribute(c,a)};e.prototype.removeClass=function(a){return this.attr("class",(""+this.attr("class")).replace(r(a)?new RegExp("(^| )"+a+"( |$)"):a," ").replace(/ +/g," ").trim())};e.prototype.removeTextOutline=function(){var a=this.element.querySelector("tspan.highcharts-text-outline");a&&this.safeRemoveChild(a)};e.prototype.safeRemoveChild=function(a){var c=a.parentNode;c&&c.removeChild(a)};
e.prototype.setRadialReference=function(a){var c=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=a;c&&c.radAttr&&c.animate(this.renderer.getRadialAttr(a,c.radAttr));return this};e.prototype.setTextPath=function(a,c){var p=this.element,t=this.text?this.text.element:p,g={textAnchor:"text-anchor"},d=!1,F=this.textPathWrapper,r=!F;c=A(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},c);var K=b.filterUserAttributes(c.attributes);
if(a&&c&&c.enabled){F&&null===F.element.parentNode?(r=!0,F=F.destroy()):F&&this.removeTextOutline.call(F.parentGroup);this.options&&this.options.padding&&(K.dx=-this.options.padding);F||(this.textPathWrapper=F=this.renderer.createElement("textPath"),d=!0);var m=F.element;(c=a.element.getAttribute("id"))||a.element.setAttribute("id",c=V());if(r)for(t.setAttribute("y",0),h(K.dx)&&t.setAttribute("x",-K.dx),a=[].slice.call(t.childNodes),r=0;r<a.length;r++){var l=a[r];l.nodeType!==Node.TEXT_NODE&&"tspan"!==
l.nodeName||m.appendChild(l)}d&&F&&F.add({element:t});m.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+c);J(K.dy)&&(m.parentNode.setAttribute("dy",K.dy),delete K.dy);J(K.dx)&&(m.parentNode.setAttribute("dx",K.dx),delete K.dx);y(K,function(a,p){m.setAttribute(g[p]||p,a)});p.removeAttribute("transform");this.removeTextOutline.call(F);this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0});this.applyTextOutline=this.updateTransform=f}else F&&(delete this.updateTransform,
delete this.applyTextOutline,this.destroyTextPath(p,a),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this};e.prototype.shadow=function(a,c,p){var t=[],g=this.element,d=this.oldShadowOptions,h={color:H.neutralColor100,offsetX:1,offsetY:1,opacity:.15,width:3},r=!1,K;!0===a?K=h:"object"===typeof a&&(K=m(h,a));K&&(K&&d&&y(K,function(a,p){a!==d[p]&&(r=!0)}),r&&this.destroyShadows(),this.oldShadowOptions=K);if(!K)this.destroyShadows();
else if(!this.shadows){var A=K.opacity/K.width;var f=this.parentInverted?"translate(-1,-1)":"translate("+K.offsetX+", "+K.offsetY+")";for(h=1;h<=K.width;h++){var b=g.cloneNode(!1);var l=2*K.width+1-2*h;N(b,{stroke:a.color||H.neutralColor100,"stroke-opacity":A*h,"stroke-width":l,transform:f,fill:"none"});b.setAttribute("class",(b.getAttribute("class")||"")+" highcharts-shadow");p&&(N(b,"height",Math.max(N(b,"height")-l,0)),b.cutHeight=l);c?c.element.appendChild(b):g.parentNode&&g.parentNode.insertBefore(b,
g);t.push(b)}this.shadows=t}return this};e.prototype.show=function(a){return this.attr({visibility:a?"inherit":"visible"})};e.prototype.strokeSetter=function(a,c,p){this[c]=a;this.stroke&&this["stroke-width"]?(e.prototype.fillSetter.call(this,this.stroke,"stroke",p),p.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===c&&0===a&&this.hasStroke?(p.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(p.setAttribute("stroke-width",
this["stroke-width"]),this.hasStroke=!0)};e.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var a=this.getStyle("stroke-width"),c=0;if(a.indexOf("px")===a.length-2)c=P(a);else if(""!==a){var p=v.createElementNS(q,"rect");N(p,{width:a,"stroke-width":0});this.element.parentNode.appendChild(p);c=p.getBBox().width;p.parentNode.removeChild(p)}return c};e.prototype.symbolAttr=function(a){var c=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(p){c[p]=
L(a[p],c[p])});c.attr({d:c.renderer.symbols[c.symbolName](c.x,c.y,c.width,c.height,c)})};e.prototype.textSetter=function(a){a!==this.textStr&&(delete this.textPxLength,this.textStr=a,this.added&&this.renderer.buildText(this))};e.prototype.titleSetter=function(a){var c=this.element,p=c.getElementsByTagName("title")[0]||v.createElementNS(this.SVG_NS,"title");c.insertBefore?c.insertBefore(p,c.firstChild):c.appendChild(p);p.textContent=String(L(a,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,
">")};e.prototype.toFront=function(){var a=this.element;a.parentNode.appendChild(a);return this};e.prototype.translate=function(a,c){return this.attr({translateX:a,translateY:c})};e.prototype.updateShadows=function(a,c,p){var t=this.shadows;if(t)for(var g=t.length;g--;)p.call(t[g],"height"===a?Math.max(c-(t[g].cutHeight||0),0):"d"===a?this.d:c,a,t[g])};e.prototype.updateTransform=function(){var a=this.scaleX,c=this.scaleY,p=this.inverted,g=this.rotation,d=this.matrix,h=this.element,F=this.translateX||
0,r=this.translateY||0;p&&(F+=this.width,r+=this.height);F=["translate("+F+","+r+")"];J(d)&&F.push("matrix("+d.join(",")+")");p?F.push("rotate(90) scale(-1,1)"):g&&F.push("rotate("+g+" "+L(this.rotationOriginX,h.getAttribute("x"),0)+" "+L(this.rotationOriginY,h.getAttribute("y")||0)+")");(J(a)||J(c))&&F.push("scale("+L(a,1)+" "+L(c,1)+")");F.length&&h.setAttribute("transform",F.join(" "))};e.prototype.visibilitySetter=function(a,c,p){"inherit"===a?p.removeAttribute(c):this[c]!==a&&p.setAttribute(c,
a);this[c]=a};e.prototype.xGetter=function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)};e.prototype.zIndexSetter=function(a,c){var p=this.renderer,g=this.parentGroup,t=(g||p).element||p.box,d=this.element;p=t===p.box;var h=!1;var r=this.added;var K;J(a)?(d.setAttribute("data-z-index",a),a=+a,this[c]===a&&(r=!1)):J(this[c])&&d.removeAttribute("data-z-index");this[c]=a;if(r){(a=this.zIndex)&&g&&(g.handleZ=!0);c=t.childNodes;for(K=c.length-1;0<=
K&&!h;K--){g=c[K];r=g.getAttribute("data-z-index");var m=!J(r);if(g!==d)if(0>a&&m&&!p&&!K)t.insertBefore(d,c[K]),h=!0;else if(P(r)<=a||m&&(!J(a)||0<=a))t.insertBefore(d,c[K+1]||null),h=!0}h||(t.insertBefore(d,c[p?3:0]||null),h=!0)}return h};return e}();e.prototype["stroke-widthSetter"]=e.prototype.strokeSetter;e.prototype.yGetter=e.prototype.xGetter;e.prototype.matrixSetter=e.prototype.rotationOriginXSetter=e.prototype.rotationOriginYSetter=e.prototype.rotationSetter=e.prototype.scaleXSetter=e.prototype.scaleYSetter=
e.prototype.translateXSetter=e.prototype.translateYSetter=e.prototype.verticalAlignSetter=function(a,c){this[c]=a;this.doTransform=!0};"";return e});O(e,"Core/Renderer/SVG/SVGLabel.js",[e["Core/Renderer/SVG/SVGElement.js"],e["Core/Utilities.js"]],function(e,b){function D(b,f){C(b)?b!==this[f]&&(this[f]=b,this.updateTextPadding()):this[f]=void 0}var z=this&&this.__extends||function(){var b=function(f,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,
b){for(var f in b)b.hasOwnProperty(f)&&(d[f]=b[f])};return b(f,d)};return function(f,d){function q(){this.constructor=f}b(f,d);f.prototype=null===d?Object.create(d):(q.prototype=d.prototype,new q)}}(),H=b.defined,G=b.extend,C=b.isNumber,B=b.merge,x=b.pick,w=b.removeEvent;return function(b){function f(d,q,k,l,e,u,n,v,E,m){var c=b.call(this)||this;c.paddingSetter=D;c.paddingLeftSetter=D;c.paddingRightSetter=D;c.init(d,"g");c.textStr=q;c.x=k;c.y=l;c.anchorX=u;c.anchorY=n;c.baseline=E;c.className=m;"button"!==
m&&c.addClass("highcharts-label");m&&c.addClass("highcharts-"+m);c.text=d.text("",0,0,v).attr({zIndex:1});if("string"===typeof e){var g=/^url\((.*?)\)$/.test(e);if(c.renderer.symbols[e]||g)c.symbolKey=e}c.bBox=f.emptyBBox;c.padding=3;c.baselineOffset=0;c.needsBox=d.styledMode||g;c.deferredAttr={};c.alignFactor=0;return c}z(f,b);f.prototype.alignSetter=function(d){d={left:0,center:.5,right:1}[d];d!==this.alignFactor&&(this.alignFactor=d,this.bBox&&C(this.xSetting)&&this.attr({x:this.xSetting}))};f.prototype.anchorXSetter=
function(d,b){this.anchorX=d;this.boxAttr(b,Math.round(d)-this.getCrispAdjust()-this.xSetting)};f.prototype.anchorYSetter=function(d,b){this.anchorY=d;this.boxAttr(b,d-this.ySetting)};f.prototype.boxAttr=function(d,b){this.box?this.box.attr(d,b):this.deferredAttr[d]=b};f.prototype.css=function(d){if(d){var b={},k=void 0;d=B(d);f.textProps.forEach(function(f){"undefined"!==typeof d[f]&&(b[f]=d[f],delete d[f])});this.text.css(b);k="width"in b;"fontSize"in b||"fontWeight"in b?this.updateTextPadding():
k&&this.updateBoxSize()}return e.prototype.css.call(this,d)};f.prototype.destroy=function(){w(this.element,"mouseenter");w(this.element,"mouseleave");this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());e.prototype.destroy.call(this)};f.prototype.fillSetter=function(d,b){d&&(this.needsBox=!0);this.fill=d;this.boxAttr(b,d)};f.prototype.getBBox=function(){this.textStr&&0===this.bBox.width&&0===this.bBox.height&&this.updateBoxSize();var d=this.padding,b=x(this.paddingLeft,d);return{width:this.width,
height:this.height,x:this.bBox.x-b,y:this.bBox.y-d}};f.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};f.prototype.heightSetter=function(d){this.heightSetting=d};f.prototype.on=function(d,b){var f=this,l=f.text,q=l&&"SPAN"===l.element.tagName?l:void 0;if(q){var u=function(l){("mouseenter"===d||"mouseleave"===d)&&l.relatedTarget instanceof Element&&(f.element.compareDocumentPosition(l.relatedTarget)&
Node.DOCUMENT_POSITION_CONTAINED_BY||q.element.compareDocumentPosition(l.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||b.call(f.element,l)};q.on(d,u)}e.prototype.on.call(f,d,u||b);return f};f.prototype.onAdd=function(){var d=this.textStr;this.text.add(this);this.attr({text:H(d)?d:"",x:this.x,y:this.y});this.box&&H(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};f.prototype.rSetter=function(d,b){this.boxAttr(b,d)};f.prototype.shadow=function(d){d&&!this.renderer.styledMode&&
(this.updateBoxSize(),this.box&&this.box.shadow(d));return this};f.prototype.strokeSetter=function(d,b){this.stroke=d;this.boxAttr(b,d)};f.prototype["stroke-widthSetter"]=function(d,b){d&&(this.needsBox=!0);this["stroke-width"]=d;this.boxAttr(b,d)};f.prototype["text-alignSetter"]=function(d){this.textAlign=d};f.prototype.textSetter=function(d){"undefined"!==typeof d&&this.text.attr({text:d});this.updateTextPadding()};f.prototype.updateBoxSize=function(){var d=this.text.element.style,b={},e=this.padding,
l=this.bBox=C(this.widthSetting)&&C(this.heightSetting)&&!this.textAlign||!H(this.text.textStr)?f.emptyBBox:this.text.getBBox();this.width=this.getPaddedWidth();this.height=(this.heightSetting||l.height||0)+2*e;this.baselineOffset=e+Math.min(this.renderer.fontMetrics(d&&d.fontSize,this.text).b,l.height||Infinity);this.needsBox&&(this.box||(d=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),d.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?
" highcharts-"+this.className+"-box":"")),d.add(this)),d=this.getCrispAdjust(),b.x=d,b.y=(this.baseline?-this.baselineOffset:0)+d,b.width=Math.round(this.width),b.height=Math.round(this.height),this.box.attr(G(b,this.deferredAttr)),this.deferredAttr={})};f.prototype.updateTextPadding=function(){var d=this.text;this.updateBoxSize();var b=this.baseline?0:this.baselineOffset,f=x(this.paddingLeft,this.padding);H(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(f+=
{center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(f!==d.x||b!==d.y)d.attr("x",f),d.hasBoxWidthChanged&&(this.bBox=d.getBBox(!0)),"undefined"!==typeof b&&d.attr("y",b);d.x=f;d.y=b};f.prototype.widthSetter=function(d){this.widthSetting=C(d)?d:void 0};f.prototype.getPaddedWidth=function(){var d=this.padding,b=x(this.paddingLeft,d);d=x(this.paddingRight,d);return(this.widthSetting||this.bBox.width||0)+b+d};f.prototype.xSetter=function(d){this.x=d;this.alignFactor&&(d-=this.alignFactor*
this.getPaddedWidth(),this["forceAnimate:x"]=!0);this.xSetting=Math.round(d);this.attr("translateX",this.xSetting)};f.prototype.ySetter=function(d){this.ySetting=this.y=Math.round(d);this.attr("translateY",this.ySetting)};f.emptyBBox={width:0,height:0,x:0,y:0};f.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");return f}(e)});O(e,"Core/Renderer/SVG/TextBuilder.js",[e["Core/Globals.js"],e["Core/Utilities.js"],
e["Core/Renderer/HTML/AST.js"]],function(e,b,I){var D=e.doc,H=e.SVG_NS,G=b.attr,C=b.isString,B=b.objectEach,x=b.pick;return function(){function b(b){var f=b.styles;this.renderer=b.renderer;this.svgElement=b;this.width=b.textWidth;this.textLineHeight=f&&f.lineHeight;this.textOutline=f&&f.textOutline;this.ellipsis=!(!f||"ellipsis"!==f.textOverflow);this.noWrap=!(!f||"nowrap"!==f.whiteSpace);this.fontSize=f&&f.fontSize}b.prototype.buildSVG=function(){var b=this.svgElement,f=b.element,d=b.renderer,e=
x(b.textStr,"").toString(),k=-1!==e.indexOf("<"),l=f.childNodes,N=l.length;d=this.width&&!b.added&&d.box;var u=/<br.*?>/g;var n=[e,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,this.fontSize,this.width].join();if(n!==b.textCache){b.textCache=n;for(delete b.actualWidth;N--;)f.removeChild(l[N]);k||this.ellipsis||this.width||-1!==e.indexOf(" ")&&(!this.noWrap||u.test(e))?""!==e&&(d&&d.appendChild(f),e=new I(e),this.modifyTree(e.nodes),e.addToDOM(b.element),this.modifyDOM(),this.ellipsis&&
-1!==(f.textContent||"").indexOf("\u2026")&&b.attr("title",this.unescapeEntities(b.textStr||"",["&lt;","&gt;"])),d&&d.removeChild(f)):f.appendChild(D.createTextNode(this.unescapeEntities(e)));C(this.textOutline)&&b.applyTextOutline&&b.applyTextOutline(this.textOutline)}};b.prototype.modifyDOM=function(){var b=this,f=this.svgElement,d=G(f.element,"x");[].forEach.call(f.element.querySelectorAll("tspan.highcharts-br"),function(f){f.nextSibling&&f.previousSibling&&G(f,{dy:b.getLineHeight(f.nextSibling),
x:d})});var e=this.width||0;if(e){var k=function(l,u){var n=l.textContent||"",k=n.replace(/([^\^])-/g,"$1- ").split(" "),q=!b.noWrap&&(1<k.length||1<f.element.childNodes.length),m=b.getLineHeight(u),c=0,g=f.actualWidth;if(b.ellipsis)n&&b.truncate(l,n,void 0,0,Math.max(0,e-parseInt(b.fontSize||12,10)),function(a,c){return a.substring(0,c)+"\u2026"});else if(q){n=[];for(q=[];u.firstChild&&u.firstChild!==l;)q.push(u.firstChild),u.removeChild(u.firstChild);for(;k.length;)k.length&&!b.noWrap&&0<c&&(n.push(l.textContent||
""),l.textContent=k.join(" ").replace(/- /g,"-")),b.truncate(l,void 0,k,0===c?g||0:0,e,function(a,c){return k.slice(0,c).join(" ").replace(/- /g,"-")}),g=f.actualWidth,c++;q.forEach(function(a){u.insertBefore(a,l)});n.forEach(function(a){u.insertBefore(D.createTextNode(a),l);a=D.createElementNS(H,"tspan");a.textContent="\u200b";G(a,{dy:m,x:d});u.insertBefore(a,l)})}},l=function(d){[].slice.call(d.childNodes).forEach(function(b){b.nodeType===Node.TEXT_NODE?k(b,d):(-1!==b.className.baseVal.indexOf("highcharts-br")&&
(f.actualWidth=0),l(b))})};l(f.element)}};b.prototype.getLineHeight=function(b){var f;b=b.nodeType===Node.TEXT_NODE?b.parentElement:b;this.renderer.styledMode||(f=b&&/(px|em)$/.test(b.style.fontSize)?b.style.fontSize:this.fontSize||this.renderer.style.fontSize||12);return this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(f,b||this.svgElement.element).h};b.prototype.modifyTree=function(b){var f=this,d=function(e,k){var l=e.tagName,q=f.renderer.styledMode,u=e.attributes||
{};if("b"===l||"strong"===l)q?u["class"]="highcharts-strong":u.style="font-weight:bold;"+(u.style||"");else if("i"===l||"em"===l)q?u["class"]="highcharts-emphasized":u.style="font-style:italic;"+(u.style||"");C(u.style)&&(u.style=u.style.replace(/(;| |^)color([ :])/,"$1fill$2"));"br"===l&&(u["class"]="highcharts-br",e.textContent="\u200b",(k=b[k+1])&&k.textContent&&(k.textContent=k.textContent.replace(/^ +/gm,"")));"#text"!==l&&"a"!==l&&(e.tagName="tspan");e.attributes=u;e.children&&e.children.filter(function(d){return"#text"!==
d.tagName}).forEach(d)};for(b.forEach(d);b[0]&&"tspan"===b[0].tagName&&!b[0].children;)b.splice(0,1)};b.prototype.truncate=function(b,f,d,e,k,l){var q=this.svgElement,u=q.renderer,n=q.rotation,J=[],E=d?1:0,m=(f||d||"").length,c=m,g,a=function(a,c){c=c||a;var g=b.parentNode;if(g&&"undefined"===typeof J[c])if(g.getSubStringLength)try{J[c]=e+g.getSubStringLength(0,d?c+1:c)}catch(L){""}else u.getSpanWidth&&(b.textContent=l(f||d,a),J[c]=e+u.getSpanWidth(q,b));return J[c]};q.rotation=0;var h=a(b.textContent.length);
if(e+h>k){for(;E<=m;)c=Math.ceil((E+m)/2),d&&(g=l(d,c)),h=a(c,g&&g.length-1),E===m?E=m+1:h>k?m=c-1:E=c;0===m?b.textContent="":f&&m===f.length-1||(b.textContent=g||l(f||d,c))}d&&d.splice(0,c);q.actualWidth=h;q.rotation=n};b.prototype.unescapeEntities=function(b,f){B(this.renderer.escapes,function(d,e){f&&-1!==f.indexOf(d)||(b=b.toString().replace(new RegExp(d,"g"),e))});return b};return b}()});O(e,"Core/Renderer/SVG/SVGRenderer.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],
e["Core/Renderer/SVG/SVGElement.js"],e["Core/Renderer/SVG/SVGLabel.js"],e["Core/Renderer/HTML/AST.js"],e["Core/Renderer/SVG/TextBuilder.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C,B){var x=B.addEvent,w=B.attr,v=B.createElement,f=B.css,d=B.defined,q=B.destroyObjectProperties,k=B.extend,l=B.isArray,N=B.isNumber,u=B.isObject,n=B.isString,J=B.merge,E=B.pick,m=B.pInt,c=B.uniqueKey,g=b.charts,a=b.deg2rad,h=b.doc,r=b.isFirefox,A=b.isMS,y=b.isWebKit,L=b.noop,P=b.SVG_NS,R=b.symbolSizes,V=b.win,Q;B=
function(){function t(a,c,g,t,d,h,r){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(a,c,g,t,d,h,r)}t.prototype.init=function(a,c,g,t,d,b,K){var p=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"});K||p.css(this.getStyle(t));t=p.element;a.appendChild(t);w(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&w(t,
"xmlns",this.SVG_NS);this.isSVG=!0;this.box=t;this.boxWrapper=p;this.alignedObjects=[];this.url=this.getReferenceURL();this.createElement("desc").add().element.appendChild(h.createTextNode("Created with Highcharts 9.1.0"));this.defs=this.createElement("defs").add();this.allowHTML=b;this.forExport=d;this.styledMode=K;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(c,g,!1);var F;r&&a.getBoundingClientRect&&(c=function(){f(a,{left:0,top:0});F=a.getBoundingClientRect();
f(a,{left:Math.ceil(F.left)-F.left+"px",top:Math.ceil(F.top)-F.top+"px"})},c(),this.unSubPixelFix=x(V,"resize",c))};t.prototype.definition=function(a){return(new G([a])).addToDOM(this.defs.element)};t.prototype.getReferenceURL=function(){if((r||y)&&h.getElementsByTagName("base").length){if(!d(Q)){var a=c();a=(new G([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:a},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",
attributes:{id:"hitme",width:8,height:8,"clip-path":"url(#"+a+")",fill:"rgba(0,0,0,0.001)"}}]}])).addToDOM(h.body);f(a,{position:"fixed",top:0,left:0,zIndex:9E5});var g=h.elementFromPoint(6,6);Q="hitme"===(g&&g.id);h.body.removeChild(a)}if(Q)return V.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""};t.prototype.getStyle=function(a){return this.style=k({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
a)};t.prototype.setStyle=function(a){this.boxWrapper.css(this.getStyle(a))};t.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};t.prototype.destroy=function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();q(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};t.prototype.createElement=function(a){var c=new this.Element;c.init(this,a);return c};t.prototype.getRadialAttr=
function(a,c){return{cx:a[0]-a[2]/2+(c.cx||0)*a[2],cy:a[1]-a[2]/2+(c.cy||0)*a[2],r:(c.r||0)*a[2]}};t.prototype.buildText=function(a){(new C(a)).buildSVG()};t.prototype.getContrast=function(a){a=e.parse(a).rgba;a[0]*=1;a[1]*=1.2;a[2]*=.5;return 459<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"};t.prototype.button=function(a,c,g,t,d,h,r,b,m,f){var p=this.label(a,c,g,m,void 0,void 0,f,void 0,"button"),F=0,K=this.styledMode,y=d?J(d):{};a=y&&y.style||{};y=G.filterUserAttributes(y);p.attr(J({padding:8,r:2},y));if(!K){y=
J({fill:I.neutralColor3,stroke:I.neutralColor20,"stroke-width":1,style:{color:I.neutralColor80,cursor:"pointer",fontWeight:"normal"}},{style:a},y);var l=y.style;delete y.style;h=J(y,{fill:I.neutralColor10},G.filterUserAttributes(h||{}));var S=h.style;delete h.style;r=J(y,{fill:I.highlightColor10,style:{color:I.neutralColor100,fontWeight:"bold"}},G.filterUserAttributes(r||{}));var u=r.style;delete r.style;b=J(y,{style:{color:I.neutralColor20}},G.filterUserAttributes(b||{}));var n=b.style;delete b.style}x(p.element,
A?"mouseover":"mouseenter",function(){3!==F&&p.setState(1)});x(p.element,A?"mouseout":"mouseleave",function(){3!==F&&p.setState(F)});p.setState=function(a){1!==a&&(p.state=F=a);p.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);K||p.attr([y,h,r,b][a||0]).css([l,S,u,n][a||0])};K||p.attr(y).css(k({cursor:"default"},l));return p.on("touchstart",function(a){return a.stopPropagation()}).on("click",function(a){3!==
F&&t.call(p,a)})};t.prototype.crispLine=function(a,c,g){void 0===g&&(g="round");var p=a[0],t=a[1];p[1]===t[1]&&(p[1]=t[1]=Math[g](p[1])-c%2/2);p[2]===t[2]&&(p[2]=t[2]=Math[g](p[2])+c%2/2);return a};t.prototype.path=function(a){var c=this.styledMode?{}:{fill:"none"};l(a)?c.d=a:u(a)&&k(c,a);return this.createElement("path").attr(c)};t.prototype.circle=function(a,c,g){a=u(a)?a:"undefined"===typeof a?{}:{x:a,y:c,r:g};c=this.createElement("circle");c.xSetter=c.ySetter=function(a,c,p){p.setAttribute("c"+
c,a)};return c.attr(a)};t.prototype.arc=function(a,c,g,t,d,h){u(a)?(t=a,c=t.y,g=t.r,a=t.x):t={innerR:t,start:d,end:h};a=this.symbol("arc",a,c,g,g,t);a.r=g;return a};t.prototype.rect=function(a,c,g,t,d,h){d=u(a)?a.r:d;var p=this.createElement("rect");a=u(a)?a:"undefined"===typeof a?{}:{x:a,y:c,width:Math.max(g,0),height:Math.max(t,0)};this.styledMode||("undefined"!==typeof h&&(a["stroke-width"]=h,a=p.crisp(a)),a.fill="none");d&&(a.r=d);p.rSetter=function(a,c,g){p.r=a;w(g,{rx:a,ry:a})};p.rGetter=function(){return p.r||
0};return p.attr(a)};t.prototype.setSize=function(a,c,g){this.width=a;this.height=c;this.boxWrapper.animate({width:a,height:c},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:E(g,!0)?void 0:0});this.alignElements()};t.prototype.g=function(a){var c=this.createElement("g");return a?c.attr({"class":"highcharts-"+a}):c};t.prototype.image=function(a,c,g,t,d,h){var p={preserveAspectRatio:"none"},r=function(a,c){a.setAttributeNS?a.setAttributeNS("http://www.w3.org/1999/xlink",
"href",c):a.setAttribute("hc-svg-href",c)},F=function(c){r(b.element,a);h.call(b,c)};1<arguments.length&&k(p,{x:c,y:g,width:t,height:d});var b=this.createElement("image").attr(p);h?(r(b.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),p=new V.Image,x(p,"load",F),p.src=a,p.complete&&F({})):r(b.element,a);return b};t.prototype.symbol=function(a,c,t,r,F,b){var p=this,m=/^url\((.*?)\)$/,A=m.test(a),y=!A&&(this.symbols[a]?a:"circle"),l=y&&this.symbols[y],u;if(l){"number"===
typeof c&&(u=l.call(this.symbols,Math.round(c||0),Math.round(t||0),r||0,F||0,b));var n=this.path(u);p.styledMode||n.attr("fill","none");k(n,{symbolName:y,x:c,y:t,width:r,height:F});b&&k(n,b)}else if(A){var e=a.match(m)[1];n=this.image(e);n.imgwidth=E(R[e]&&R[e].width,b&&b.width);n.imgheight=E(R[e]&&R[e].height,b&&b.height);var S=function(){n.attr({width:n.width,height:n.height})};["width","height"].forEach(function(a){n[a+"Setter"]=function(a,c){var p=this["img"+c];this[c]=a;d(p)&&(b&&"within"===
b.backgroundSize&&this.width&&this.height&&(p=Math.round(p*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(c,p),this.alignByTranslate||(a=((this[c]||0)-p)/2,this.attr("width"===c?{translateX:a}:{translateY:a})))}});d(c)&&n.attr({x:c,y:t});n.isImg=!0;d(n.imgwidth)&&d(n.imgheight)?S():(n.attr({width:0,height:0}),v("img",{onload:function(){var a=g[p.chartIndex];0===this.width&&(f(this,{position:"absolute",top:"-999em"}),h.body.appendChild(this));
R[e]={width:this.width,height:this.height};n.imgwidth=this.width;n.imgheight=this.height;n.element&&S();this.parentNode&&this.parentNode.removeChild(this);p.imgCount--;if(!p.imgCount&&a&&!a.hasLoaded)a.onload()},src:e}),this.imgCount++)}return n};t.prototype.clipRect=function(a,g,t,d){var p=c()+"-",h=this.createElement("clipPath").attr({id:p}).add(this.defs);a=this.rect(a,g,t,d,0).add(h);a.id=p;a.clipPath=h;a.count=0;return a};t.prototype.text=function(a,c,g,t){var p={};if(t&&(this.allowHTML||!this.forExport))return this.html(a,
c,g);p.x=Math.round(c||0);g&&(p.y=Math.round(g));d(a)&&(p.text=a);a=this.createElement("text").attr(p);t||(a.xSetter=function(a,c,p){var g=p.getElementsByTagName("tspan"),t=p.getAttribute(c),d;for(d=0;d<g.length;d++){var h=g[d];h.getAttribute(c)===t&&h.setAttribute(c,a)}p.setAttribute(c,a)});return a};t.prototype.fontMetrics=function(a,c){a=!this.styledMode&&/px/.test(a)||!V.getComputedStyle?a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize:c&&z.prototype.getStyle.call(c,"font-size");
a=/px/.test(a)?m(a):12;c=24>a?a+3:Math.round(1.2*a);return{h:c,b:Math.round(.8*c),f:a}};t.prototype.rotCorr=function(c,g,t){var p=c;g&&t&&(p=Math.max(p*Math.cos(g*a),4));return{x:-c/3*Math.sin(g*a),y:p}};t.prototype.pathToSegments=function(a){for(var c=[],g=[],p={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},t=0;t<a.length;t++)n(g[0])&&N(a[t])&&g.length===p[g[0].toUpperCase()]&&a.splice(t,0,g[0].replace("M","L").replace("m","l")),"string"===typeof a[t]&&(g.length&&c.push(g.slice(0)),g.length=0),g.push(a[t]);
c.push(g.slice(0));return c};t.prototype.label=function(a,c,g,t,d,h,r,b,m){return new H(this,a,c,g,t,d,h,r,b,m)};t.prototype.alignElements=function(){this.alignedObjects.forEach(function(a){return a.align()})};return t}();B.prototype.Element=z;B.prototype.SVG_NS=P;B.prototype.draw=L;B.prototype.escapes={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"};var M=function(a,c,g,d,h){h=h&&h.r||0;return[["M",a+h,c],["L",a+g-h,c],["C",a+g,c,a+g,c,a+g,c+h],["L",a+g,c+d-h],["C",a+g,c+d,a+g,c+d,a+
g-h,c+d],["L",a+h,c+d],["C",a,c+d,a,c+d,a,c+d-h],["L",a,c+h],["C",a,c,a,c,a+h,c]]};L=function(a,c,g,d,h){return h&&h.r?M(a,c,g,d,h):[["M",a,c],["L",a+g,c],["L",a+g,c+d],["L",a,c+d],["Z"]]};B.prototype.symbols={circle:function(a,c,g,d){return this.arc(a+g/2,c+d/2,g/2,d/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},rect:L,square:L,triangle:function(a,c,g,d){return[["M",a+g/2,c],["L",a+g,c+d],["L",a,c+d],["Z"]]},"triangle-down":function(a,c,g,d){return[["M",a,c],["L",a+g,c],["L",a+g/2,c+d],["Z"]]},
diamond:function(a,c,g,d){return[["M",a+g/2,c],["L",a+g,c+d/2],["L",a+g/2,c+d],["L",a,c+d/2],["Z"]]},arc:function(a,c,g,h,r){var t=[];if(r){var p=r.start||0,b=E(r.r,g);g=E(r.r,h||g);var m=(r.end||0)-.001;h=r.innerR;var f=E(r.open,.001>Math.abs((r.end||0)-p-2*Math.PI)),A=Math.cos(p),y=Math.sin(p),l=Math.cos(m),n=Math.sin(m);p=E(r.longArc,.001>m-p-Math.PI?0:1);t.push(["M",a+b*A,c+g*y],["A",b,g,0,p,E(r.clockwise,1),a+b*l,c+g*n]);d(h)&&t.push(f?["M",a+h*l,c+h*n]:["L",a+h*l,c+h*n],["A",h,h,0,p,d(r.clockwise)?
1-r.clockwise:0,a+h*A,c+h*y]);f||t.push(["Z"])}return t},callout:function(a,c,g,d,h){var p=Math.min(h&&h.r||0,g,d),t=p+6,r=h&&h.anchorX;h=h&&h.anchorY||0;var b=M(a,c,g,d,{r:p});if(!N(r))return b;a+r>=g?h>c+t&&h<c+d-t?b.splice(3,1,["L",a+g,h-6],["L",a+g+6,h],["L",a+g,h+6],["L",a+g,c+d-p]):b.splice(3,1,["L",a+g,d/2],["L",r,h],["L",a+g,d/2],["L",a+g,c+d-p]):0>=a+r?h>c+t&&h<c+d-t?b.splice(7,1,["L",a,h+6],["L",a-6,h],["L",a,h-6],["L",a,c+p]):b.splice(7,1,["L",a,d/2],["L",r,h],["L",a,d/2],["L",a,c+p]):
h&&h>d&&r>a+t&&r<a+g-t?b.splice(5,1,["L",r+6,c+d],["L",r,c+d+6],["L",r-6,c+d],["L",a+p,c+d]):h&&0>h&&r>a+t&&r<a+g-t&&b.splice(1,1,["L",r-6,c],["L",r,c-6],["L",r+6,c],["L",g-p,c]);return b}};b.SVGRenderer=B;b.Renderer=b.SVGRenderer;return b.Renderer});O(e,"Core/Renderer/HTML/HTMLElement.js",[e["Core/Globals.js"],e["Core/Renderer/SVG/SVGElement.js"],e["Core/Utilities.js"]],function(e,b,I){var D=e.isFirefox,H=e.isMS,G=e.isWebKit,C=e.win,B=I.css,x=I.defined,w=I.extend,v=I.pick,f=I.pInt;w(b.prototype,
{htmlCss:function(d){var b="SPAN"===this.element.tagName&&d&&"width"in d,f=v(b&&d.width,void 0);if(b){delete d.width;this.textWidth=f;var l=!0}d&&"ellipsis"===d.textOverflow&&(d.whiteSpace="nowrap",d.overflow="hidden");this.styles=w(this.styles,d);B(this.element,d);l&&this.htmlUpdateTransform();return this},htmlGetBBox:function(){var d=this.element;return{x:d.offsetLeft,y:d.offsetTop,width:d.offsetWidth,height:d.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var d=this.renderer,b=this.element,
e=this.translateX||0,l=this.translateY||0,N=this.x||0,u=this.y||0,n=this.textAlign||"left",J={left:0,center:.5,right:1}[n],E=this.styles;E=E&&E.whiteSpace;B(b,{marginLeft:e,marginTop:l});!d.styledMode&&this.shadows&&this.shadows.forEach(function(a){B(a,{marginLeft:e+1,marginTop:l+1})});this.inverted&&[].forEach.call(b.childNodes,function(a){d.invertChild(a,b)});if("SPAN"===b.tagName){var m=this.rotation,c=void 0;c=this.textWidth&&f(this.textWidth);var g=[m,n,b.innerHTML,this.textWidth,this.textAlign].join(),
a;(a=c!==this.oldTextWidth)&&!(a=c>this.oldTextWidth)&&((a=this.textPxLength)||(B(b,{width:"",whiteSpace:E||"nowrap"}),a=b.offsetWidth),a=a>c);a&&(/[ \-]/.test(b.textContent||b.innerText)||"ellipsis"===b.style.textOverflow)?(B(b,{width:c+"px",display:"block",whiteSpace:E||"normal"}),this.oldTextWidth=c,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1;g!==this.cTT&&(c=d.fontMetrics(b.style.fontSize,b).b,!x(m)||m===(this.oldRotation||0)&&n===this.oldAlign||this.setSpanRotation(m,J,c),this.getSpanCorrection(!x(m)&&
this.textPxLength||b.offsetWidth,c,J,m,n));B(b,{left:N+(this.xCorr||0)+"px",top:u+(this.yCorr||0)+"px"});this.cTT=g;this.oldRotation=m;this.oldAlign=n}}else this.alignOnAdd=!0},setSpanRotation:function(d,b,f){var l={},e=H&&!/Edge/.test(C.navigator.userAgent)?"-ms-transform":G?"-webkit-transform":D?"MozTransform":C.opera?"-o-transform":void 0;e&&(l[e]=l.transform="rotate("+d+"deg)",l[e+(D?"Origin":"-origin")]=l.transformOrigin=100*b+"% "+f+"px",B(this.element,l))},getSpanCorrection:function(d,b,f){this.xCorr=
-d*f;this.yCorr=-b}});return b});O(e,"Core/Renderer/HTML/HTMLRenderer.js",[e["Core/Renderer/HTML/AST.js"],e["Core/Renderer/SVG/SVGElement.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=z.attr,G=z.createElement,C=z.extend,B=z.pick;C(I.prototype,{html:function(x,w,v){var f=this.createElement("span"),d=f.element,q=f.renderer,k=q.isSVG,l=function(d,f){["opacity","visibility"].forEach(function(l){d[l+"Setter"]=function(n,e,m){var c=d.div?d.div.style:f;b.prototype[l+
"Setter"].call(this,n,e,m);c&&(c[e]=n)}});d.addedSetters=!0};f.textSetter=function(d){d!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,e.setElementHTML(this.element,B(d,"")),this.textStr=d,f.doTransform=!0)};k&&l(f,f.element.style);f.xSetter=f.ySetter=f.alignSetter=f.rotationSetter=function(d,b){"align"===b?f.alignValue=f.textAlign=d:f[b]=d;f.doTransform=!0};f.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};f.attr({text:x,x:Math.round(w),y:Math.round(v)}).css({position:"absolute"});
q.styledMode||f.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});d.style.whiteSpace="nowrap";f.css=f.htmlCss;k&&(f.add=function(b){var e=q.box.parentNode,n=[];if(this.parentGroup=b){var k=b.div;if(!k){for(;b;)n.push(b),b=b.parentGroup;n.reverse().forEach(function(d){function b(c,g){d[g]=c;"translateX"===g?a.left=c+"px":a.top=c+"px";d.doTransform=!0}var c=D(d.element,"class"),g=d.styles||{};k=d.div=d.div||G("div",c?{className:c}:void 0,{position:"absolute",left:(d.translateX||0)+
"px",top:(d.translateY||0)+"px",display:d.display,opacity:d.opacity,cursor:g.cursor,pointerEvents:g.pointerEvents},k||e);var a=k.style;C(d,{classSetter:function(a){return function(c){this.element.setAttribute("class",c);a.className=c}}(k),on:function(){n[0].div&&f.on.apply({element:n[0].div,onEvents:f.onEvents},arguments);return d},translateXSetter:b,translateYSetter:b});d.addedSetters||l(d)})}}else k=e;k.appendChild(d);f.added=!0;f.alignOnAdd&&f.htmlUpdateTransform();return f});return f}});return I});
O(e,"Core/Axis/Tick.js",[e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b,I){var D=b.deg2rad,H=I.clamp,G=I.correctFloat,C=I.defined,B=I.destroyObjectProperties,x=I.extend,w=I.fireEvent,v=I.isNumber,f=I.merge,d=I.objectEach,q=I.pick;"";I=function(){function b(d,b,f,e,k){this.isNewLabel=this.isNew=!0;this.axis=d;this.pos=b;this.type=f||"";this.parameters=k||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;w(this,"init");
f||e||this.addLabel()}b.prototype.addLabel=function(){var d=this,b=d.axis,f=b.options,n=b.chart,k=b.categories,E=b.logarithmic,m=b.names,c=d.pos,g=q(d.options&&d.options.labels,f.labels),a=b.tickPositions,h=c===a[0],r=c===a[a.length-1],A=d.label,y=(!g.step||1===g.step)&&1===b.tickInterval;a=a.info;var L,P;k=this.parameters.category||(k?q(k[c],m[c],c):c);E&&v(k)&&(k=G(E.lin2log(k)));if(b.dateTime&&a){var R=n.time.resolveDTLFormat(f.dateTimeLabelFormats[!f.grid&&a.higherRanks[c]||a.unitName]);var V=
R.main}d.isFirst=h;d.isLast=r;var Q={axis:b,chart:n,dateTimeLabelFormat:V,isFirst:h,isLast:r,pos:c,tick:d,tickPositionInfo:a,value:k};w(this,"labelFormat",Q);var M=function(a){return g.formatter?g.formatter.call(a,a):g.format?(a.text=b.defaultLabelFormatter.call(a),e.format(g.format,a,n)):b.defaultLabelFormatter.call(a,a)};f=M.call(Q,Q);if(P=R&&R.list)d.shortenLabel=function(){for(L=0;L<P.length;L++)if(x(Q,{dateTimeLabelFormat:P[L]}),A.attr({text:M.call(Q,Q)}),A.getBBox().width<b.getSlotWidth(d)-
2*g.padding)return;A.attr({text:""})};y&&b._addedPlotLB&&d.moveLabel(f,g);C(A)||d.movedLabel?A&&A.textStr!==f&&!y&&(!A.textWidth||g.style.width||A.styles.width||A.css({width:null}),A.attr({text:f}),A.textPxLength=A.getBBox().width):(d.label=A=d.createLabel({x:0,y:0},f,g),d.rotation=0)};b.prototype.createLabel=function(d,b,e){var n=this.axis,l=n.chart;if(d=C(b)&&e.enabled?l.renderer.text(b,d.x,d.y,e.useHTML).add(n.labelGroup):null)l.styledMode||d.css(f(e.style)),d.textPxLength=d.getBBox().width;return d};
b.prototype.destroy=function(){B(this,this.axis)};b.prototype.getPosition=function(d,b,f,e){var n=this.axis,l=n.chart,m=e&&l.oldChartHeight||l.chartHeight;d={x:d?G(n.translate(b+f,null,null,e)+n.transB):n.left+n.offset+(n.opposite?(e&&l.oldChartWidth||l.chartWidth)-n.right-n.left:0),y:d?m-n.bottom+n.offset-(n.opposite?n.height:0):G(m-n.translate(b+f,null,null,e)-n.transB)};d.y=H(d.y,-1E5,1E5);w(this,"afterGetPosition",{pos:d});return d};b.prototype.getLabelPosition=function(d,b,f,e,k,q,m,c){var g=
this.axis,a=g.transA,h=g.isLinked&&g.linkedParent?g.linkedParent.reversed:g.reversed,r=g.staggerLines,A=g.tickRotCorr||{x:0,y:0},y=k.y,n=e||g.reserveSpaceDefault?0:-g.labelOffset*("center"===g.labelAlign?.5:1),l={};C(y)||(y=0===g.side?f.rotation?-8:-f.getBBox().height:2===g.side?A.y+8:Math.cos(f.rotation*D)*(A.y-f.getBBox(!1,0).height/2));d=d+k.x+n+A.x-(q&&e?q*a*(h?-1:1):0);b=b+y-(q&&!e?q*a*(h?1:-1):0);r&&(f=m/(c||1)%r,g.opposite&&(f=r-f-1),b+=g.labelOffset/r*f);l.x=d;l.y=Math.round(b);w(this,"afterGetLabelPosition",
{pos:l,tickmarkOffset:q,index:m});return l};b.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};b.prototype.getMarkPath=function(d,b,f,e,k,q){return q.crispLine([["M",d,b],["L",d+(k?0:-f),b+(k?f:0)]],e)};b.prototype.handleOverflow=function(d){var b=this.axis,f=b.options.labels,e=d.x,l=b.chart.chartWidth,k=b.chart.spacing,m=q(b.labelLeft,Math.min(b.pos,k[3]));k=q(b.labelRight,Math.max(b.isRadial?0:b.pos+b.len,l-k[1]));var c=this.label,g=this.rotation,
a={left:0,center:.5,right:1}[b.labelAlign||c.attr("align")],h=c.getBBox().width,r=b.getSlotWidth(this),A=r,y=1,L,P={};if(g||"justify"!==f.overflow)0>g&&e-a*h<m?L=Math.round(e/Math.cos(g*D)-m):0<g&&e+a*h>k&&(L=Math.round((l-e)/Math.cos(g*D)));else if(l=e+(1-a)*h,e-a*h<m?A=d.x+A*(1-a)-m:l>k&&(A=k-d.x+A*a,y=-1),A=Math.min(r,A),A<r&&"center"===b.labelAlign&&(d.x+=y*(r-A-a*(r-Math.min(h,A)))),h>A||b.autoRotation&&(c.styles||{}).width)L=A;L&&(this.shortenLabel?this.shortenLabel():(P.width=Math.floor(L)+
"px",(f.style||{}).textOverflow||(P.textOverflow="ellipsis"),c.css(P)))};b.prototype.moveLabel=function(b,f){var e=this,n=e.label,l=!1,k=e.axis,m=k.reversed;n&&n.textStr===b?(e.movedLabel=n,l=!0,delete e.label):d(k.ticks,function(c){l||c.isNew||c===e||!c.label||c.label.textStr!==b||(e.movedLabel=c.label,l=!0,c.labelPos=e.movedLabel.xy,delete c.label)});if(!l&&(e.labelPos||n)){var c=e.labelPos||n.xy;n=k.horiz?m?0:k.width+k.left:c.x;k=k.horiz?c.y:m?k.width+k.left:0;e.movedLabel=e.createLabel({x:n,y:k},
b,f);e.movedLabel&&e.movedLabel.attr({opacity:0})}};b.prototype.render=function(d,b,f){var e=this.axis,l=e.horiz,k=this.pos,m=q(this.tickmarkOffset,e.tickmarkOffset);k=this.getPosition(l,k,m,b);m=k.x;var c=k.y;e=l&&m===e.pos+e.len||!l&&c===e.pos?-1:1;l=q(f,this.label&&this.label.newOpacity,1);f=q(f,1);this.isActive=!0;this.renderGridLine(b,f,e);this.renderMark(k,f,e);this.renderLabel(k,b,l,d);this.isNew=!1;w(this,"afterRender")};b.prototype.renderGridLine=function(d,b,f){var e=this.axis,l=e.options,
k=this.gridLine,m={},c=this.pos,g=this.type,a=q(this.tickmarkOffset,e.tickmarkOffset),h=e.chart.renderer,r=l.gridLineWidth,A=l.gridLineColor,y=l.gridLineDashStyle;"minor"===this.type&&(r=l.minorGridLineWidth,A=l.minorGridLineColor,y=l.minorGridLineDashStyle);k||(e.chart.styledMode||(m.stroke=A,m["stroke-width"]=r||0,m.dashstyle=y),g||(m.zIndex=1),d&&(b=0),this.gridLine=k=h.path().attr(m).addClass("highcharts-"+(g?g+"-":"")+"grid-line").add(e.gridGroup));if(k&&(f=e.getPlotLinePath({value:c+a,lineWidth:k.strokeWidth()*
f,force:"pass",old:d})))k[d||this.isNew?"attr":"animate"]({d:f,opacity:b})};b.prototype.renderMark=function(d,b,f){var e=this.axis,l=e.options,k=e.chart.renderer,m=this.type,c=e.tickSize(m?m+"Tick":"tick"),g=this.mark,a=!g,h=d.x;d=d.y;var r=q(l["minor"!==m?"tickWidth":"minorTickWidth"],!m&&e.isXAxis?1:0);l=l["minor"!==m?"tickColor":"minorTickColor"];c&&(e.opposite&&(c[0]=-c[0]),a&&(this.mark=g=k.path().addClass("highcharts-"+(m?m+"-":"")+"tick").add(e.axisGroup),e.chart.styledMode||g.attr({stroke:l,
"stroke-width":r})),g[a?"attr":"animate"]({d:this.getMarkPath(h,d,c[0],g.strokeWidth()*f,e.horiz,k),opacity:b}))};b.prototype.renderLabel=function(d,b,f,e){var l=this.axis,n=l.horiz,m=l.options,c=this.label,g=m.labels,a=g.step;l=q(this.tickmarkOffset,l.tickmarkOffset);var h=!0,r=d.x;d=d.y;c&&v(r)&&(c.xy=d=this.getLabelPosition(r,d,c,n,g,l,e,a),this.isFirst&&!this.isLast&&!m.showFirstLabel||this.isLast&&!this.isFirst&&!m.showLastLabel?h=!1:!n||g.step||g.rotation||b||0===f||this.handleOverflow(d),a&&
e%a&&(h=!1),h&&v(d.y)?(d.opacity=f,c[this.isNewLabel?"attr":"animate"](d),this.isNewLabel=!1):(c.attr("y",-9999),this.isNewLabel=!0))};b.prototype.replaceMovedLabel=function(){var d=this.label,b=this.axis,f=b.reversed;if(d&&!this.isNew){var e=b.horiz?f?b.left:b.width+b.left:d.xy.x;f=b.horiz?d.xy.y:f?b.width+b.top:b.top;d.animate({x:e,y:f,opacity:0},void 0,d.destroy);delete this.label}b.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return b}();b.Tick=I;return b.Tick});O(e,"Core/Axis/Axis.js",
[e["Core/Animation/AnimationUtilities.js"],e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Options.js"],e["Core/Axis/Tick.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C){var B=e.animObject,x=H.defaultOptions,w=C.addEvent,v=C.arrayMax,f=C.arrayMin,d=C.clamp,q=C.correctFloat,k=C.defined,l=C.destroyObjectProperties,N=C.erase,u=C.error,n=C.extend,J=C.fireEvent,E=C.getMagnitude,m=C.isArray,c=C.isFunction,g=C.isNumber,a=C.isString,h=C.merge,r=C.normalizeTickInterval,
A=C.objectEach,y=C.pick,L=C.relativeLength,P=C.removeEvent,R=C.splat,V=C.syncTimeout;"";var Q=I.deg2rad;e=function(){function e(a,c){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=
this.paddedTicks=this.overlap=this.options=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0;this.init(a,c)}e.prototype.init=function(a,d){var b=d.isX,h=this;h.chart=a;h.horiz=a.inverted&&!h.isZAxis?!b:b;h.isXAxis=b;
h.coll=h.coll||(b?"xAxis":"yAxis");J(this,"init",{userOptions:d});h.opposite=y(d.opposite,h.opposite);h.side=y(d.side,h.side,h.horiz?h.opposite?0:2:h.opposite?1:3);h.setOptions(d);var p=this.options,t=p.labels,r=p.type;h.userOptions=d;h.minPixelPadding=0;h.reversed=y(p.reversed,h.reversed);h.visible=p.visible;h.zoomEnabled=p.zoomEnabled;h.hasNames="category"===r||!0===p.categories;h.categories=p.categories||h.hasNames;h.names||(h.names=[],h.names.keys={});h.plotLinesAndBandsGroups={};h.positiveValuesOnly=
!!h.logarithmic;h.isLinked=k(p.linkedTo);h.ticks={};h.labelEdge=[];h.minorTicks={};h.plotLinesAndBands=[];h.alternateBands={};h.len=0;h.minRange=h.userMinRange=p.minRange||p.maxZoom;h.range=p.range;h.offset=p.offset||0;h.max=null;h.min=null;d=y(p.crosshair,R(a.options.tooltip.crosshairs)[b?0:1]);h.crosshair=!0===d?{}:d;d=h.options.events;-1===a.axes.indexOf(h)&&(b?a.axes.splice(a.xAxis.length,0,h):a.axes.push(h),a[h.coll].push(h));h.series=h.series||[];a.inverted&&!h.isZAxis&&b&&"undefined"===typeof h.reversed&&
(h.reversed=!0);h.labelRotation=g(t.rotation)?t.rotation:void 0;A(d,function(a,d){c(a)&&w(h,d,a)});J(this,"afterInit")};e.prototype.setOptions=function(a){this.options=h(e.defaultOptions,"yAxis"===this.coll&&e.defaultYAxisOptions,[e.defaultTopAxisOptions,e.defaultRightAxisOptions,e.defaultBottomAxisOptions,e.defaultLeftAxisOptions][this.side],h(x[this.coll],a));J(this,"afterSetOptions",{userOptions:a})};e.prototype.defaultLabelFormatter=function(){var a=this.axis,c=g(this.value)?this.value:NaN,d=
a.chart.time,h=this.dateTimeLabelFormat,b=x.lang,r=b.numericSymbols;b=b.numericSymbolMagnitude||1E3;var e=r&&r.length,f=a.logarithmic?Math.abs(c):a.tickInterval,m=this.chart.numberFormatter;if(a.categories)var A=""+this.value;else if(h)A=d.dateFormat(h,c);else if(e&&1E3<=f)for(;e--&&"undefined"===typeof A;)a=Math.pow(b,e+1),f>=a&&0===10*c%a&&null!==r[e]&&0!==c&&(A=m(c/a,-1)+r[e]);"undefined"===typeof A&&(A=1E4<=Math.abs(c)?m(c,-1):m(c,-1,void 0,""));return A};e.prototype.getSeriesExtremes=function(){var a=
this,c=a.chart,d;J(this,"getSeriesExtremes",null,function(){a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.stacking&&a.stacking.buildStacks();a.series.forEach(function(h){if(h.visible||!c.options.chart.ignoreHiddenSeries){var b=h.options,p=b.threshold;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=p&&(p=null);if(a.isXAxis){if(b=h.xData,b.length){b=a.logarithmic?b.filter(a.validatePositiveValue):b;d=h.getXExtremes(b);var t=d.min;var r=d.max;g(t)||t instanceof
Date||(b=b.filter(g),d=h.getXExtremes(b),t=d.min,r=d.max);b.length&&(a.dataMin=Math.min(y(a.dataMin,t),t),a.dataMax=Math.max(y(a.dataMax,r),r))}}else if(h=h.applyExtremes(),g(h.dataMin)&&(t=h.dataMin,a.dataMin=Math.min(y(a.dataMin,t),t)),g(h.dataMax)&&(r=h.dataMax,a.dataMax=Math.max(y(a.dataMax,r),r)),k(p)&&(a.threshold=p),!b.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})});J(this,"afterGetSeriesExtremes")};e.prototype.translate=function(a,c,d,h,b,r){var p=this.linkedParent||this,t=1,e=
0,f=h&&p.old?p.old.transA:p.transA;h=h&&p.old?p.old.min:p.min;var F=p.minPixelPadding;b=(p.isOrdinal||p.brokenAxis&&p.brokenAxis.hasBreaks||p.logarithmic&&b)&&p.lin2val;f||(f=p.transA);d&&(t*=-1,e=p.len);p.reversed&&(t*=-1,e-=t*(p.sector||p.len));c?(a=(a*t+e-F)/f+h,b&&(a=p.lin2val(a))):(b&&(a=p.val2lin(a)),a=g(h)?t*(a-h)*f+e+t*F+(g(r)?f*r:0):void 0);return a};e.prototype.toPixels=function(a,c){return this.translate(a,!1,!this.horiz,null,!0)+(c?0:this.pos)};e.prototype.toValue=function(a,c){return this.translate(a-
(c?0:this.pos),!0,!this.horiz,null,!0)};e.prototype.getPlotLinePath=function(a){function c(a,c,g){if("pass"!==l&&a<c||a>g)l?a=d(a,c,g):v=!0;return a}var h=this,b=h.chart,t=h.left,r=h.top,e=a.old,f=a.value,m=a.translatedValue,A=a.lineWidth,l=a.force,n,k,u,L,q=e&&b.oldChartHeight||b.chartHeight,P=e&&b.oldChartWidth||b.chartWidth,v,da=h.transB;a={value:f,lineWidth:A,old:e,force:l,acrossPanes:a.acrossPanes,translatedValue:m};J(this,"getPlotLinePath",a,function(a){m=y(m,h.translate(f,null,null,e));m=d(m,
-1E5,1E5);n=u=Math.round(m+da);k=L=Math.round(q-m-da);g(m)?h.horiz?(k=r,L=q-h.bottom,n=u=c(n,t,t+h.width)):(n=t,u=P-h.right,k=L=c(k,r,r+h.height)):(v=!0,l=!1);a.path=v&&!l?null:b.renderer.crispLine([["M",n,k],["L",u,L]],A||1)});return a.path};e.prototype.getLinearTickPositions=function(a,c,d){var g=q(Math.floor(c/a)*a);d=q(Math.ceil(d/a)*a);var h=[],b;q(g+a)===g&&(b=20);if(this.single)return[c];for(c=g;c<=d;){h.push(c);c=q(c+a,b);if(c===p)break;var p=c}return h};e.prototype.getMinorTickInterval=function(){var a=
this.options;return!0===a.minorTicks?y(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval};e.prototype.getMinorTickPositions=function(){var a=this.options,c=this.tickPositions,d=this.minorTickInterval,g=[],h=this.pointRangePadding||0,b=this.min-h;h=this.max+h;var r=h-b;if(r&&r/d<this.len/3){var e=this.logarithmic;if(e)this.paddedTicks.forEach(function(a,c,h){c&&g.push.apply(g,e.getLogTickPositions(d,h[c-1],h[c],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())g=
g.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(d),b,h,a.startOfWeek));else for(a=b+(c[0]-b)%d;a<=h&&a!==g[0];a+=d)g.push(a)}0!==g.length&&this.trimTicks(g);return g};e.prototype.adjustForMinRange=function(){var a=this.options,c=this.min,d=this.max,g=this.logarithmic,h=0,b,r,e,m;this.isXAxis&&"undefined"===typeof this.minRange&&!g&&(k(a.min)||k(a.max)?this.minRange=null:(this.series.forEach(function(a){e=a.xData;m=a.xIncrement?1:e.length-1;if(1<e.length)for(b=m;0<b;b--)if(r=e[b]-
e[b-1],!h||r<h)h=r}),this.minRange=Math.min(5*h,this.dataMax-this.dataMin)));if(d-c<this.minRange){var A=this.dataMax-this.dataMin>=this.minRange;var l=this.minRange;var n=(l-d+c)/2;n=[c-n,y(a.min,c-n)];A&&(n[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);c=v(n);d=[c+l,y(a.max,c+l)];A&&(d[2]=g?g.log2lin(this.dataMax):this.dataMax);d=f(d);d-c<l&&(n[0]=d-l,n[1]=y(a.min,d-l),c=v(n))}this.min=c;this.max=d};e.prototype.getClosest=function(){var a;this.categories?a=1:this.series.forEach(function(c){var d=
c.closestPointRange,g=c.visible||!c.chart.options.chart.ignoreHiddenSeries;!c.noSharedTooltip&&k(d)&&g&&(a=k(a)?Math.min(a,d):d)});return a};e.prototype.nameToX=function(a){var c=m(this.categories),d=c?this.categories:this.names,g=a.options.x;a.series.requireSorting=!1;k(g)||(g=this.options.uniqueNames?c?d.indexOf(a.name):y(d.keys[a.name],-1):a.series.autoIncrement());if(-1===g){if(!c)var h=d.length}else h=g;"undefined"!==typeof h&&(this.names[h]=a.name,this.names.keys[a.name]=h);return h};e.prototype.updateNames=
function(){var a=this,c=this.names;0<c.length&&(Object.keys(c.keys).forEach(function(a){delete c.keys[a]}),c.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(c){c.xIncrement=null;if(!c.points||c.isDirtyData)a.max=Math.max(a.max,c.xData.length-1),c.processData(),c.generatePoints();c.data.forEach(function(d,g){if(d&&d.options&&"undefined"!==typeof d.name){var h=a.nameToX(d);"undefined"!==typeof h&&h!==d.x&&(d.x=h,c.xData[g]=h)}})}))};e.prototype.setAxisTranslation=function(){var c=
this,d=c.max-c.min,g=c.axisPointRange||0,h=0,b=0,r=c.linkedParent,e=!!c.categories,f=c.transA,m=c.isXAxis;if(m||e||g){var A=c.getClosest();r?(h=r.minPointOffset,b=r.pointRangePadding):c.series.forEach(function(d){var p=e?1:m?y(d.options.pointRange,A,0):c.axisPointRange||0,r=d.options.pointPlacement;g=Math.max(g,p);if(!c.single||e)d=d.is("xrange")?!m:m,h=Math.max(h,d&&a(r)?0:p/2),b=Math.max(b,d&&"on"===r?0:p)});r=c.ordinal&&c.ordinal.slope&&A?c.ordinal.slope/A:1;c.minPointOffset=h*=r;c.pointRangePadding=
b*=r;c.pointRange=Math.min(g,c.single&&e?1:d);m&&(c.closestPointRange=A)}c.translationSlope=c.transA=f=c.staticScale||c.len/(d+b||1);c.transB=c.horiz?c.left:c.bottom;c.minPixelPadding=f*h;J(this,"afterSetAxisTranslation")};e.prototype.minFromRange=function(){return this.max-this.range};e.prototype.setTickInterval=function(a){var c=this,d=c.chart,h=c.logarithmic,b=c.options,e=c.isXAxis,t=c.isLinked,f=b.maxPadding,m=b.minPadding,A=b.tickInterval,l=b.tickPixelInterval,n=c.categories,L=g(c.threshold)?
c.threshold:null,P=c.softThreshold;c.dateTime||n||t||this.getTickAmount();var v=y(c.userMin,b.min);var w=y(c.userMax,b.max);if(t){c.linkedParent=d[c.coll][b.linkedTo];var R=c.linkedParent.getExtremes();c.min=y(R.min,R.dataMin);c.max=y(R.max,R.dataMax);b.type!==c.linkedParent.options.type&&u(11,1,d)}else{if(P&&k(L))if(c.dataMin>=L)R=L,m=0;else if(c.dataMax<=L){var Q=L;f=0}c.min=y(v,R,c.dataMin);c.max=y(w,Q,c.dataMax)}h&&(c.positiveValuesOnly&&!a&&0>=Math.min(c.min,y(c.dataMin,c.min))&&u(10,1,d),c.min=
q(h.log2lin(c.min),16),c.max=q(h.log2lin(c.max),16));c.range&&k(c.max)&&(c.userMin=c.min=v=Math.max(c.dataMin,c.minFromRange()),c.userMax=w=c.max,c.range=null);J(c,"foundExtremes");c.beforePadding&&c.beforePadding();c.adjustForMinRange();!(n||c.axisPointRange||c.stacking&&c.stacking.usePercentage||t)&&k(c.min)&&k(c.max)&&(d=c.max-c.min)&&(!k(v)&&m&&(c.min-=d*m),!k(w)&&f&&(c.max+=d*f));g(c.userMin)||(g(b.softMin)&&b.softMin<c.min&&(c.min=v=b.softMin),g(b.floor)&&(c.min=Math.max(c.min,b.floor)));g(c.userMax)||
(g(b.softMax)&&b.softMax>c.max&&(c.max=w=b.softMax),g(b.ceiling)&&(c.max=Math.min(c.max,b.ceiling)));P&&k(c.dataMin)&&(L=L||0,!k(v)&&c.min<L&&c.dataMin>=L?c.min=c.options.minRange?Math.min(L,c.max-c.minRange):L:!k(w)&&c.max>L&&c.dataMax<=L&&(c.max=c.options.minRange?Math.max(L,c.min+c.minRange):L));g(c.min)&&g(c.max)&&!this.chart.polar&&c.min>c.max&&(k(c.options.min)?c.max=c.min:k(c.options.max)&&(c.min=c.max));c.tickInterval=c.min===c.max||"undefined"===typeof c.min||"undefined"===typeof c.max?1:
t&&c.linkedParent&&!A&&l===c.linkedParent.options.tickPixelInterval?A=c.linkedParent.tickInterval:y(A,this.tickAmount?(c.max-c.min)/Math.max(this.tickAmount-1,1):void 0,n?1:(c.max-c.min)*l/Math.max(c.len,l));e&&!a&&c.series.forEach(function(a){a.processData(c.min!==(c.old&&c.old.min)||c.max!==(c.old&&c.old.max))});c.setAxisTranslation();J(this,"initialAxisTranslation");c.pointRange&&!A&&(c.tickInterval=Math.max(c.pointRange,c.tickInterval));a=y(b.minTickInterval,c.dateTime&&!c.series.some(function(a){return a.noSharedTooltip})?
c.closestPointRange:0);!A&&c.tickInterval<a&&(c.tickInterval=a);c.dateTime||c.logarithmic||A||(c.tickInterval=r(c.tickInterval,void 0,E(c.tickInterval),y(b.allowDecimals,.5>c.tickInterval||void 0!==this.tickAmount),!!this.tickAmount));this.tickAmount||(c.tickInterval=c.unsquish());this.setTickPositions()};e.prototype.setTickPositions=function(){var a=this.options,c=a.tickPositions;var d=this.getMinorTickInterval();var g=a.tickPositioner,h=this.hasVerticalPanning(),b="colorAxis"===this.coll,r=(b||
!h)&&a.startOnTick;h=(b||!h)&&a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===d&&this.tickInterval?this.tickInterval/5:d;this.single=this.min===this.max&&k(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=d=c&&c.slice();!d&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?d=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
a.units),this.min,this.max,a.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(d=[this.min,this.max],u(19,!1,this.chart)),d.length>this.len&&(d=[d[0],d.pop()],d[0]===d[1]&&(d.length=1)),this.tickPositions=d,g&&(g=g.apply(this,[this.min,this.max])))&&(this.tickPositions=d=g);this.paddedTicks=d.slice(0);this.trimTicks(d,
r,h);this.isLinked||(this.single&&2>d.length&&!this.categories&&!this.series.some(function(a){return a.is("heatmap")&&"between"===a.options.pointPlacement})&&(this.min-=.5,this.max+=.5),c||g||this.adjustTickAmount());J(this,"afterSetTickPositions")};e.prototype.trimTicks=function(a,c,d){var g=a[0],h=a[a.length-1],b=!this.isOrdinal&&this.minPointOffset||0;J(this,"trimTicks");if(!this.isLinked){if(c&&-Infinity!==g)this.min=g;else for(;this.min-b>a[0];)a.shift();if(d)this.max=h;else for(;this.max+b<
a[a.length-1];)a.pop();0===a.length&&k(g)&&!this.options.tickPositions&&a.push((h+g)/2)}};e.prototype.alignToOthers=function(){var a={},c,d=this.options;!1!==this.chart.options.chart.alignTicks&&d.alignTicks&&!1!==d.startOnTick&&!1!==d.endOnTick&&!this.logarithmic&&this.chart[this.coll].forEach(function(d){var g=d.options;g=[d.horiz?g.left:g.top,g.width,g.height,g.pane].join();d.series.length&&(a[g]?c=!0:a[g]=1)});return c};e.prototype.getTickAmount=function(){var a=this.options,c=a.tickAmount,d=
a.tickPixelInterval;!k(a.tickInterval)&&!c&&this.len<d&&!this.isRadial&&!this.logarithmic&&a.startOnTick&&a.endOnTick&&(c=2);!c&&this.alignToOthers()&&(c=Math.ceil(this.len/d)+1);4>c&&(this.finalTickAmt=c,c=5);this.tickAmount=c};e.prototype.adjustTickAmount=function(){var a=this.options,c=this.tickInterval,d=this.tickPositions,h=this.tickAmount,b=this.finalTickAmt,r=d&&d.length,e=y(this.threshold,this.softThreshold?0:null);if(this.hasData()&&g(this.min)&&g(this.max)){if(r<h){for(;d.length<h;)d.length%
2||this.min===e?d.push(q(d[d.length-1]+c)):d.unshift(q(d[0]-c));this.transA*=(r-1)/(h-1);this.min=a.startOnTick?d[0]:Math.min(this.min,d[0]);this.max=a.endOnTick?d[d.length-1]:Math.max(this.max,d[d.length-1])}else r>h&&(this.tickInterval*=2,this.setTickPositions());if(k(b)){for(c=a=d.length;c--;)(3===b&&1===c%2||2>=b&&0<c&&c<a-1)&&d.splice(c,1);this.finalTickAmt=void 0}}};e.prototype.setScale=function(){var a,c=!1,d=!1;this.series.forEach(function(a){c=c||a.isDirtyData||a.isDirty;d=d||a.xAxis&&a.xAxis.isDirty||
!1});this.setAxisSize();(a=this.len!==(this.old&&this.old.len))||c||d||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=a||this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max))):this.stacking&&this.stacking.cleanStacks();c&&this.panningState&&(this.panningState.isDirty=
!0);J(this,"afterSetScale")};e.prototype.setExtremes=function(a,c,d,g,h){var b=this,r=b.chart;d=y(d,!0);b.series.forEach(function(a){delete a.kdTree});h=n(h,{min:a,max:c});J(b,"setExtremes",h,function(){b.userMin=a;b.userMax=c;b.eventArgs=h;d&&r.redraw(g)})};e.prototype.zoom=function(a,c){var d=this,g=this.dataMin,h=this.dataMax,b=this.options,r=Math.min(g,y(b.min,g)),e=Math.max(h,y(b.max,h));a={newMin:a,newMax:c};J(this,"zoom",a,function(a){var c=a.newMin,b=a.newMax;if(c!==d.min||b!==d.max)d.allowZoomOutside||
(k(g)&&(c<r&&(c=r),c>e&&(c=e)),k(h)&&(b<r&&(b=r),b>e&&(b=e))),d.displayBtn="undefined"!==typeof c||"undefined"!==typeof b,d.setExtremes(c,b,!1,void 0,{trigger:"zoom"});a.zoomed=!0});return a.zoomed};e.prototype.setAxisSize=function(){var a=this.chart,c=this.options,d=c.offsets||[0,0,0,0],g=this.horiz,h=this.width=Math.round(L(y(c.width,a.plotWidth-d[3]+d[1]),a.plotWidth)),b=this.height=Math.round(L(y(c.height,a.plotHeight-d[0]+d[2]),a.plotHeight)),r=this.top=Math.round(L(y(c.top,a.plotTop+d[0]),a.plotHeight,
a.plotTop));c=this.left=Math.round(L(y(c.left,a.plotLeft+d[3]),a.plotWidth,a.plotLeft));this.bottom=a.chartHeight-b-r;this.right=a.chartWidth-h-c;this.len=Math.max(g?h:b,0);this.pos=g?c:r};e.prototype.getExtremes=function(){var a=this.logarithmic;return{min:a?q(a.lin2log(this.min)):this.min,max:a?q(a.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}};e.prototype.getThreshold=function(a){var c=this.logarithmic,d=c?c.lin2log(this.min):this.min;
c=c?c.lin2log(this.max):this.max;null===a||-Infinity===a?a=d:Infinity===a?a=c:d>a?a=d:c<a&&(a=c);return this.translate(a,0,1,0,1)};e.prototype.autoLabelAlign=function(a){var c=(y(a,0)-90*this.side+720)%360;a={align:"center"};J(this,"autoLabelAlign",a,function(a){15<c&&165>c?a.align="right":195<c&&345>c&&(a.align="left")});return a.align};e.prototype.tickSize=function(a){var c=this.options,d=c["tick"===a?"tickLength":"minorTickLength"],g=y(c["tick"===a?"tickWidth":"minorTickWidth"],"tick"===a&&this.isXAxis&&
!this.categories?1:0);if(g&&d){"inside"===c[a+"Position"]&&(d=-d);var h=[d,g]}a={tickSize:h};J(this,"afterTickSize",a);return a.tickSize};e.prototype.labelMetrics=function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[a]&&this.ticks[a].label)};e.prototype.unsquish=function(){var a=this.options.labels,c=this.horiz,d=this.tickInterval,h=d,b=this.len/(((this.categories?1:0)+this.max-this.min)/d),r,e=a.rotation,
f=this.labelMetrics(),m,A=Number.MAX_VALUE,l=Math.max(this.max-this.min,0),n=function(a){var c=a/(b||1);c=1<c?Math.ceil(c):1;c*d>l&&Infinity!==a&&Infinity!==b&&l&&(c=Math.ceil(l/d));return q(c*d)};if(c){if(!a.staggerLines&&!a.step)if(g(e))var k=[e];else b<a.autoRotationLimit&&(k=a.autoRotation);k&&k.forEach(function(a){if(a===e||a&&-90<=a&&90>=a){m=n(Math.abs(f.h/Math.sin(Q*a)));var c=m+Math.abs(a/360);c<A&&(A=c,r=a,h=m)}})}else a.step||(h=n(f.h));this.autoRotation=k;this.labelRotation=y(r,g(e)?e:
0);return h};e.prototype.getSlotWidth=function(a){var c=this.chart,d=this.horiz,h=this.options.labels,b=Math.max(this.tickPositions.length-(this.categories?0:1),1),r=c.margin[3];if(a&&g(a.slotWidth))return a.slotWidth;if(d&&2>h.step)return h.rotation?0:(this.staggerLines||1)*this.len/b;if(!d){a=h.style.width;if(void 0!==a)return parseInt(String(a),10);if(r)return r-c.spacing[3]}return.33*c.chartWidth};e.prototype.renderUnsquish=function(){var c=this.chart,d=c.renderer,g=this.tickPositions,h=this.ticks,
b=this.options.labels,r=b.style,e=this.horiz,f=this.getSlotWidth(),m=Math.max(1,Math.round(f-2*b.padding)),A={},y=this.labelMetrics(),l=r.textOverflow,n=0;a(b.rotation)||(A.rotation=b.rotation||0);g.forEach(function(a){a=h[a];a.movedLabel&&a.replaceMovedLabel();a&&a.label&&a.label.textPxLength>n&&(n=a.label.textPxLength)});this.maxLabelLength=n;if(this.autoRotation)n>m&&n>y.h?A.rotation=this.labelRotation:this.labelRotation=0;else if(f){var k=m;if(!l){var L="clip";for(m=g.length;!e&&m--;){var u=g[m];
if(u=h[u].label)u.styles&&"ellipsis"===u.styles.textOverflow?u.css({textOverflow:"clip"}):u.textPxLength>f&&u.css({width:f+"px"}),u.getBBox().height>this.len/g.length-(y.h-y.f)&&(u.specificTextOverflow="ellipsis")}}}A.rotation&&(k=n>.5*c.chartHeight?.33*c.chartHeight:n,l||(L="ellipsis"));if(this.labelAlign=b.align||this.autoLabelAlign(this.labelRotation))A.align=this.labelAlign;g.forEach(function(a){var c=(a=h[a])&&a.label,d=r.width,g={};c&&(c.attr(A),a.shortenLabel?a.shortenLabel():k&&!d&&"nowrap"!==
r.whiteSpace&&(k<c.textPxLength||"SPAN"===c.element.tagName)?(g.width=k+"px",l||(g.textOverflow=c.specificTextOverflow||L),c.css(g)):c.styles&&c.styles.width&&!g.width&&!d&&c.css({width:null}),delete c.specificTextOverflow,a.rotation=A.rotation)},this);this.tickRotCorr=d.rotCorr(y.b,this.labelRotation||0,0!==this.side)};e.prototype.hasData=function(){return this.series.some(function(a){return a.hasData()})||this.options.showEmpty&&k(this.min)&&k(this.max)};e.prototype.addTitle=function(a){var c=this.chart.renderer,
d=this.horiz,g=this.opposite,b=this.options.title,r,e=this.chart.styledMode;this.axisTitle||((r=b.textAlign)||(r=(d?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[b.align]),this.axisTitle=c.text(b.text||"",0,0,b.useHTML).attr({zIndex:7,rotation:b.rotation,align:r}).addClass("highcharts-axis-title"),e||this.axisTitle.css(h(b.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);e||b.style.width||this.isRadial||this.axisTitle.css({width:this.len+
"px"});this.axisTitle[a?"show":"hide"](a)};e.prototype.generateTick=function(a){var c=this.ticks;c[a]?c[a].addLabel():c[a]=new G(this,a)};e.prototype.getOffset=function(){var a=this,c=this,d=c.chart,g=d.renderer,h=c.options,b=c.tickPositions,r=c.ticks,e=c.horiz,f=c.side,m=d.inverted&&!c.isZAxis?[1,0,3,2][f]:f,l,n=0,L=0,u=h.title,P=h.labels,q=0,v=d.axisOffset;d=d.clipOffset;var w=[-1,1,1,-1][f],da=h.className,ia=c.axisParent;var E=c.hasData();c.showAxis=l=E||h.showEmpty;c.staggerLines=c.horiz&&P.staggerLines||
void 0;if(!c.axisGroup){var R=function(c,d,h){return g.g(c).attr({zIndex:h}).addClass("highcharts-"+a.coll.toLowerCase()+d+" "+(a.isRadial?"highcharts-radial-axis"+d+" ":"")+(da||"")).add(ia)};c.gridGroup=R("grid","-grid",h.gridZIndex);c.axisGroup=R("axis","",h.zIndex);c.labelGroup=R("axis-labels","-labels",P.zIndex)}E||c.isLinked?(b.forEach(function(a,d){c.generateTick(a,d)}),c.renderUnsquish(),c.reserveSpaceDefault=0===f||2===f||{1:"left",3:"right"}[f]===c.labelAlign,y(P.reserveSpace,"center"===
c.labelAlign?!0:null,c.reserveSpaceDefault)&&b.forEach(function(a){q=Math.max(r[a].getLabelSize(),q)}),c.staggerLines&&(q*=c.staggerLines),c.labelOffset=q*(c.opposite?-1:1)):A(r,function(a,c){a.destroy();delete r[c]});if(u&&u.text&&!1!==u.enabled&&(c.addTitle(l),l&&!1!==u.reserveSpace)){c.titleOffset=n=c.axisTitle.getBBox()[e?"height":"width"];var Q=u.offset;L=k(Q)?0:y(u.margin,e?5:10)}c.renderLine();c.offset=w*y(h.offset,v[f]?v[f]+(h.margin||0):0);c.tickRotCorr=c.tickRotCorr||{x:0,y:0};u=0===f?-c.labelMetrics().h:
2===f?c.tickRotCorr.y:0;L=Math.abs(q)+L;q&&(L=L-u+w*(e?y(P.y,c.tickRotCorr.y+8*w):P.x));c.axisTitleMargin=y(Q,L);c.getMaxLabelDimensions&&(c.maxLabelDimensions=c.getMaxLabelDimensions(r,b));e=this.tickSize("tick");v[f]=Math.max(v[f],(c.axisTitleMargin||0)+n+w*c.offset,L,b&&b.length&&e?e[0]+w*c.offset:0);h=h.offset?0:2*Math.floor(c.axisLine.strokeWidth()/2);d[m]=Math.max(d[m],h);J(this,"afterGetOffset")};e.prototype.getLinePath=function(a){var c=this.chart,d=this.opposite,g=this.offset,h=this.horiz,
b=this.left+(d?this.width:0)+g;g=c.chartHeight-this.bottom-(d?this.height:0)+g;d&&(a*=-1);return c.renderer.crispLine([["M",h?this.left:b,h?g:this.top],["L",h?c.chartWidth-this.right:b,h?g:c.chartHeight-this.bottom]],a)};e.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};e.prototype.getTitlePosition=
function(){var a=this.horiz,c=this.left,d=this.top,g=this.len,h=this.options.title,b=a?c:d,r=this.opposite,e=this.offset,f=h.x,m=h.y,A=this.axisTitle,y=this.chart.renderer.fontMetrics(h.style.fontSize,A);A=Math.max(A.getBBox(null,0).height-y.h-1,0);g={low:b+(a?0:g),middle:b+g/2,high:b+(a?g:0)}[h.align];c=(a?d+this.height:c)+(a?1:-1)*(r?-1:1)*this.axisTitleMargin+[-A,A,y.f,-A][this.side];a={x:a?g+f:c+(r?this.width:0)+e+f,y:a?c+m-(r?this.height:0)+e:g+m};J(this,"afterGetTitlePosition",{titlePosition:a});
return a};e.prototype.renderMinorTick=function(a){var c=this.chart.hasRendered&&this.old,d=this.minorTicks;d[a]||(d[a]=new G(this,a,"minor"));c&&d[a].isNew&&d[a].render(null,!0);d[a].render(null,!1,1)};e.prototype.renderTick=function(a,c){var d=this.ticks,g=this.chart.hasRendered&&this.old;if(!this.isLinked||a>=this.min&&a<=this.max||this.grid&&this.grid.isColumn)d[a]||(d[a]=new G(this,a)),g&&d[a].isNew&&d[a].render(c,!0,-1),d[a].render(c)};e.prototype.render=function(){var a=this,c=a.chart,d=a.logarithmic,
h=a.options,b=a.isLinked,r=a.tickPositions,e=a.axisTitle,f=a.ticks,m=a.minorTicks,y=a.alternateBands,l=h.stackLabels,n=h.alternateGridColor,k=a.tickmarkOffset,L=a.axisLine,u=a.showAxis,q=B(c.renderer.globalAnimation),P,v;a.labelEdge.length=0;a.overlap=!1;[f,m,y].forEach(function(a){A(a,function(a){a.isActive=!1})});if(a.hasData()||b)a.minorTickInterval&&!a.categories&&a.getMinorTickPositions().forEach(function(c){a.renderMinorTick(c)}),r.length&&(r.forEach(function(c,d){a.renderTick(c,d)}),k&&(0===
a.min||a.single)&&(f[-1]||(f[-1]=new G(a,-1,null,!0)),f[-1].render(-1))),n&&r.forEach(function(g,h){v="undefined"!==typeof r[h+1]?r[h+1]+k:a.max-k;0===h%2&&g<a.max&&v<=a.max+(c.polar?-k:k)&&(y[g]||(y[g]=new I.PlotLineOrBand(a)),P=g+k,y[g].options={from:d?d.lin2log(P):P,to:d?d.lin2log(v):v,color:n,className:"highcharts-alternate-grid"},y[g].render(),y[g].isActive=!0)}),a._addedPlotLB||(a._addedPlotLB=!0,(h.plotLines||[]).concat(h.plotBands||[]).forEach(function(c){a.addPlotBandOrLine(c)}));[f,m,y].forEach(function(a){var d,
g=[],h=q.duration;A(a,function(a,c){a.isActive||(a.render(c,!1,0),a.isActive=!1,g.push(c))});V(function(){for(d=g.length;d--;)a[g[d]]&&!a[g[d]].isActive&&(a[g[d]].destroy(),delete a[g[d]])},a!==y&&c.hasRendered&&h?h:0)});L&&(L[L.isPlaced?"animate":"attr"]({d:this.getLinePath(L.strokeWidth())}),L.isPlaced=!0,L[u?"show":"hide"](u));e&&u&&(h=a.getTitlePosition(),g(h.y)?(e[e.isNew?"attr":"animate"](h),e.isNew=!1):(e.attr("y",-9999),e.isNew=!0));l&&l.enabled&&a.stacking&&a.stacking.renderStackTotals();
a.old={len:a.len,max:a.max,min:a.min,transA:a.transA,userMax:a.userMax,userMin:a.userMin};a.isDirty=!1;J(this,"afterRender")};e.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(a){a.render()}));this.series.forEach(function(a){a.isDirty=!0})};e.prototype.getKeepProps=function(){return this.keepProps||e.keepProps};e.prototype.destroy=function(a){var c=this,d=c.plotLinesAndBands,g;J(this,"destroy",{keepEvents:a});a||P(c);[c.ticks,c.minorTicks,c.alternateBands].forEach(function(a){l(a)});
if(d)for(a=d.length;a--;)d[a].destroy();"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(a){c[a]&&(c[a]=c[a].destroy())});for(g in c.plotLinesAndBandsGroups)c.plotLinesAndBandsGroups[g]=c.plotLinesAndBandsGroups[g].destroy();A(c,function(a,d){-1===c.getKeepProps().indexOf(d)&&delete c[d]})};e.prototype.drawCrosshair=function(a,c){var d=this.crosshair,g=y(d&&d.snap,!0),h,r=this.cross,e=this.chart;J(this,"drawCrosshair",{e:a,point:c});a||(a=this.cross&&
this.cross.e);if(d&&!1!==(k(c)||!g)){g?k(c)&&(h=y("colorAxis"!==this.coll?c.crosshairPos:null,this.isXAxis?c.plotX:this.len-c.plotY)):h=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos);if(k(h)){var f={value:c&&(this.isXAxis?c.x:y(c.stackY,c.y)),translatedValue:h};e.polar&&n(f,{isCrosshair:!0,chartX:a&&a.chartX,chartY:a&&a.chartY,point:c});f=this.getPlotLinePath(f)||null}if(!k(f)){this.hideCrosshair();return}g=this.categories&&!this.isRadial;r||(this.cross=r=e.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(g?"category ":"thin ")+(d.className||"")).attr({zIndex:y(d.zIndex,2)}).add(),e.styledMode||(r.attr({stroke:d.color||(g?b.parse(z.highlightColor20).setOpacity(.25).get():z.neutralColor20),"stroke-width":y(d.width,1)}).css({"pointer-events":"none"}),d.dashStyle&&r.attr({dashstyle:d.dashStyle})));r.show().attr({d:f});g&&!d.width&&r.attr({"stroke-width":this.transA});this.cross.e=a}else this.hideCrosshair();J(this,"afterDrawCrosshair",{e:a,point:c})};e.prototype.hideCrosshair=function(){this.cross&&
this.cross.hide();J(this,"afterHideCrosshair")};e.prototype.hasVerticalPanning=function(){var a=this.chart.options.chart.panning;return!!(a&&a.enabled&&/y/.test(a.type))};e.prototype.validatePositiveValue=function(a){return g(a)&&0<a};e.prototype.update=function(a,c){var d=this.chart,g=a&&a.events||{};a=h(this.userOptions,a);A(d.options[this.coll].events,function(a,c){"undefined"===typeof g[c]&&(g[c]=void 0)});this.destroy(!0);this.init(d,n(a,{events:g}));d.isDirtyBox=!0;y(c,!0)&&d.redraw()};e.prototype.remove=
function(a){for(var c=this.chart,d=this.coll,g=this.series,h=g.length;h--;)g[h]&&g[h].remove(!1);N(c.axes,this);N(c[d],this);c[d].forEach(function(a,c){a.options.index=a.userOptions.index=c});this.destroy();c.isDirtyBox=!0;y(a,!0)&&c.redraw()};e.prototype.setTitle=function(a,c){this.update({title:a},c)};e.prototype.setCategories=function(a,c){this.update({categories:a},c)};e.defaultOptions={alignTicks:!0,allowDecimals:void 0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",
range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",gridZIndex:1,labels:{autoRotation:void 0,autoRotationLimit:80,distance:void 0,enabled:!0,indentation:10,overflow:"justify",padding:5,reserveSpace:void 0,rotation:void 0,staggerLines:0,step:0,useHTML:!1,x:0,zIndex:7,style:{color:z.neutralColor60,cursor:"default",fontSize:"11px"}},
maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,minorTickPosition:"outside",minPadding:.01,offset:void 0,opposite:!1,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",rotation:0,useHTML:!1,x:0,y:0,style:{color:z.neutralColor60}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:z.neutralColor5,minorGridLineWidth:1,
minorTickColor:z.neutralColor40,lineColor:z.highlightColor20,lineWidth:1,gridLineColor:z.neutralColor10,gridLineWidth:void 0,tickColor:z.highlightColor20};e.defaultYAxisOptions={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total,-1)},
style:{color:z.neutralColor100,fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};e.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};e.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};e.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};e.keepProps="extKey hcEvents names series userMax userMin".split(" ");return e}();
I.Axis=e;return I.Axis});O(e,"Core/Axis/DateTimeAxis.js",[e["Core/Axis/Axis.js"],e["Core/Utilities.js"]],function(e,b){var D=b.addEvent,z=b.getMagnitude,H=b.normalizeTickInterval,G=b.timeUnits,C=function(){function b(b){this.axis=b}b.prototype.normalizeTimeTickInterval=function(b,e){var v=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];e=v[v.length-
1];var f=G[e[0]],d=e[1],q;for(q=0;q<v.length&&!(e=v[q],f=G[e[0]],d=e[1],v[q+1]&&b<=(f*d[d.length-1]+G[v[q+1][0]])/2);q++);f===G.year&&b<5*f&&(d=[1,2,5]);b=H(b/f,d,"year"===e[0]?Math.max(z(b/f),1):1);return{unitRange:f,count:b,unitName:e[0]}};return b}();b=function(){function b(){}b.compose=function(b){b.keepProps.push("dateTime");b.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};D(b,"init",function(b){"datetime"!==b.userOptions.type?this.dateTime=
void 0:this.dateTime||(this.dateTime=new C(this))})};b.AdditionsClass=C;return b}();b.compose(e);return b});O(e,"Core/Axis/LogarithmicAxis.js",[e["Core/Axis/Axis.js"],e["Core/Utilities.js"]],function(e,b){var D=b.addEvent,z=b.getMagnitude,H=b.normalizeTickInterval,G=b.pick,C=function(){function b(b){this.axis=b}b.prototype.getLogTickPositions=function(b,e,v,f){var d=this.axis,q=d.len,k=d.options,l=[];f||(this.minorAutoInterval=void 0);if(.5<=b)b=Math.round(b),l=d.getLinearTickPositions(b,e,v);else if(.08<=
b){var w=Math.floor(e),u,n=k=void 0;for(q=.3<b?[1,2,4]:.15<b?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];w<v+1&&!n;w++){var J=q.length;for(u=0;u<J&&!n;u++){var E=this.log2lin(this.lin2log(w)*q[u]);E>e&&(!f||k<=v)&&"undefined"!==typeof k&&l.push(k);k>v&&(n=!0);k=E}}}else e=this.lin2log(e),v=this.lin2log(v),b=f?d.getMinorTickInterval():k.tickInterval,b=G("auto"===b?null:b,this.minorAutoInterval,k.tickPixelInterval/(f?5:1)*(v-e)/((f?q/d.tickPositions.length:q)||1)),b=H(b,void 0,z(b)),l=d.getLinearTickPositions(b,
e,v).map(this.log2lin),f||(this.minorAutoInterval=b/5);f||(d.tickInterval=b);return l};b.prototype.lin2log=function(b){return Math.pow(10,b)};b.prototype.log2lin=function(b){return Math.log(b)/Math.LN10};return b}();b=function(){function b(){}b.compose=function(b){b.keepProps.push("logarithmic");D(b,"init",function(b){var e=this.logarithmic;"logarithmic"!==b.userOptions.type?this.logarithmic=void 0:e||(this.logarithmic=new C(this))});D(b,"afterInit",function(){var b=this.logarithmic;b&&(this.lin2val=
function(e){return b.lin2log(e)},this.val2lin=function(e){return b.log2lin(e)})})};return b}();b.compose(e);return b});O(e,"Core/Axis/PlotLineOrBand.js",[e["Core/Axis/Axis.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=z.arrayMax,G=z.arrayMin,C=z.defined,B=z.destroyObjectProperties,x=z.erase,w=z.extend,v=z.fireEvent,f=z.isNumber,d=z.merge,q=z.objectEach,k=z.pick;z=function(){function b(d,b){this.axis=d;b&&(this.options=b,this.id=b.id)}b.prototype.render=
function(){v(this,"render");var b=this,e=b.axis,f=e.horiz,l=e.logarithmic,E=b.options,m=E.label,c=b.label,g=E.to,a=E.from,h=E.value,r=C(a)&&C(g),A=C(h),y=b.svgElem,L=!y,P=[],R=E.color,w=k(E.zIndex,0),Q=E.events;P={"class":"highcharts-plot-"+(r?"band ":"line ")+(E.className||"")};var M={},t=e.chart.renderer,p=r?"bands":"lines";l&&(a=l.log2lin(a),g=l.log2lin(g),h=l.log2lin(h));e.chart.styledMode||(A?(P.stroke=R||I.neutralColor40,P["stroke-width"]=k(E.width,1),E.dashStyle&&(P.dashstyle=E.dashStyle)):
r&&(P.fill=R||I.highlightColor10,E.borderWidth&&(P.stroke=E.borderColor,P["stroke-width"]=E.borderWidth)));M.zIndex=w;p+="-"+w;(l=e.plotLinesAndBandsGroups[p])||(e.plotLinesAndBandsGroups[p]=l=t.g("plot-"+p).attr(M).add());L&&(b.svgElem=y=t.path().attr(P).add(l));if(A)P=e.getPlotLinePath({value:h,lineWidth:y.strokeWidth(),acrossPanes:E.acrossPanes});else if(r)P=e.getPlotBandPath(a,g,E);else return;!b.eventsAdded&&Q&&(q(Q,function(a,c){y.on(c,function(a){Q[c].apply(b,[a])})}),b.eventsAdded=!0);(L||
!y.d)&&P&&P.length?y.attr({d:P}):y&&(P?(y.show(!0),y.animate({d:P})):y.d&&(y.hide(),c&&(b.label=c=c.destroy())));m&&(C(m.text)||C(m.formatter))&&P&&P.length&&0<e.width&&0<e.height&&!P.isFlat?(m=d({align:f&&r&&"center",x:f?!r&&4:10,verticalAlign:!f&&r&&"middle",y:f?r?16:10:r?6:-4,rotation:f&&!r&&90},m),this.renderLabel(m,P,r,w)):c&&c.hide();return b};b.prototype.renderLabel=function(d,b,e,f){var l=this.label,m=this.axis.chart.renderer;l||(l={align:d.textAlign||d.align,rotation:d.rotation,"class":"highcharts-plot-"+
(e?"band":"line")+"-label "+(d.className||"")},l.zIndex=f,f=this.getLabelText(d),this.label=l=m.text(f,0,0,d.useHTML).attr(l).add(),this.axis.chart.styledMode||l.css(d.style));m=b.xBounds||[b[0][1],b[1][1],e?b[2][1]:b[0][1]];b=b.yBounds||[b[0][2],b[1][2],e?b[2][2]:b[0][2]];e=G(m);f=G(b);l.align(d,!1,{x:e,y:f,width:D(m)-e,height:D(b)-f});l.show(!0)};b.prototype.getLabelText=function(d){return C(d.formatter)?d.formatter.call(this):d.text};b.prototype.destroy=function(){x(this.axis.plotLinesAndBands,
this);delete this.axis;B(this)};return b}();w(e.prototype,{getPlotBandPath:function(d,b,e){void 0===e&&(e=this.options);var l=this.getPlotLinePath({value:b,force:!0,acrossPanes:e.acrossPanes});e=this.getPlotLinePath({value:d,force:!0,acrossPanes:e.acrossPanes});var k=[],q=this.horiz,m=1;d=!f(this.min)||!f(this.max)||d<this.min&&b<this.min||d>this.max&&b>this.max;if(e&&l){if(d){var c=e.toString()===l.toString();m=0}for(d=0;d<e.length;d+=2){b=e[d];var g=e[d+1],a=l[d],h=l[d+1];"M"!==b[0]&&"L"!==b[0]||
"M"!==g[0]&&"L"!==g[0]||"M"!==a[0]&&"L"!==a[0]||"M"!==h[0]&&"L"!==h[0]||(q&&a[1]===b[1]?(a[1]+=m,h[1]+=m):q||a[2]!==b[2]||(a[2]+=m,h[2]+=m),k.push(["M",b[1],b[2]],["L",g[1],g[2]],["L",h[1],h[2]],["L",a[1],a[2]],["Z"]));k.isFlat=c}}return k},addPlotBand:function(d){return this.addPlotBandOrLine(d,"plotBands")},addPlotLine:function(d){return this.addPlotBandOrLine(d,"plotLines")},addPlotBandOrLine:function(d,e){var f=this,l=new b.PlotLineOrBand(this,d),k=this.userOptions;this.visible&&(l=l.render());
if(l){this._addedPlotLB||(this._addedPlotLB=!0,(k.plotLines||[]).concat(k.plotBands||[]).forEach(function(d){f.addPlotBandOrLine(d)}));if(e){var q=k[e]||[];q.push(d);k[e]=q}this.plotLinesAndBands.push(l)}return l},removePlotBandOrLine:function(d){for(var b=this.plotLinesAndBands,e=this.options,f=this.userOptions,l=b.length;l--;)b[l].id===d&&b[l].destroy();[e.plotLines||[],f.plotLines||[],e.plotBands||[],f.plotBands||[]].forEach(function(b){for(l=b.length;l--;)(b[l]||{}).id===d&&x(b,b[l])})},removePlotBand:function(d){this.removePlotBandOrLine(d)},
removePlotLine:function(d){this.removePlotBandOrLine(d)}});b.PlotLineOrBand=z;return b.PlotLineOrBand});O(e,"Core/Tooltip.js",[e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=e.format,G=b.doc,C=z.clamp,B=z.css,x=z.defined,w=z.discardElement,v=z.extend,f=z.fireEvent,d=z.isArray,q=z.isNumber,k=z.isString,l=z.merge,N=z.pick,u=z.splat,n=z.syncTimeout,J=z.timeUnits;"";e=function(){function e(d,c){this.container=void 0;this.crosshairs=
[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=d;this.init(d,c)}e.prototype.applyFilter=function(){var d=this.chart;d.renderer.definition({tagName:"filter",attributes:{id:"drop-shadow-"+d.index,opacity:.5},children:[{tagName:"feGaussianBlur",attributes:{"in":"SourceAlpha",stdDeviation:1}},{tagName:"feOffset",attributes:{dx:1,dy:1}},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"linear",slope:.3}}]},{tagName:"feMerge",
children:[{tagName:"feMergeNode"},{tagName:"feMergeNode",attributes:{"in":"SourceGraphic"}}]}]});d.renderer.definition({tagName:"style",textContent:".highcharts-tooltip-"+d.index+"{filter:url(#drop-shadow-"+d.index+")}"})};e.prototype.bodyFormatter=function(d){return d.map(function(c){var d=c.series.tooltipOptions;return(d[(c.point.formatPrefix||"point")+"Formatter"]||c.point.tooltipFormatter).call(c.point,d[(c.point.formatPrefix||"point")+"Format"]||"")})};e.prototype.cleanSplit=function(d){this.chart.series.forEach(function(c){var b=
c&&c.tt;b&&(!b.isActive||d?c.tt=b.destroy():b.isActive=!1)})};e.prototype.defaultFormatter=function(d){var c=this.points||u(this);var b=[d.tooltipFooterHeaderFormatter(c[0])];b=b.concat(d.bodyFormatter(c));b.push(d.tooltipFooterHeaderFormatter(c[0],!0));return b};e.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());this.renderer&&(this.renderer=this.renderer.destroy(),w(this.container));z.clearTimeout(this.hideTimer);
z.clearTimeout(this.tooltipTimeout)};e.prototype.getAnchor=function(d,c){var b=this.chart;var a=b.pointer;var h=b.inverted,e=b.plotTop,f=b.plotLeft,m=0,l=0,k,n;d=u(d);this.followPointer&&c?("undefined"===typeof c.chartX&&(c=a.normalize(c)),a=[c.chartX-f,c.chartY-e]):d[0].tooltipPos?a=d[0].tooltipPos:(d.forEach(function(a){k=a.series.yAxis;n=a.series.xAxis;m+=a.plotX||0;l+=a.plotLow?(a.plotLow+(a.plotHigh||0))/2:a.plotY||0;n&&k&&(h?(m+=e+b.plotHeight-n.len-n.pos,l+=f+b.plotWidth-k.len-k.pos):(m+=n.pos-
f,l+=k.pos-e))}),m/=d.length,l/=d.length,a=[h?b.plotWidth-l:m,h?b.plotHeight-m:l],this.shared&&1<d.length&&c&&(h?a[0]=c.chartX-f:a[1]=c.chartY-e));return a.map(Math.round)};e.prototype.getDateFormat=function(d,c,b,a){var h=this.chart.time,g=h.dateFormat("%m-%d %H:%M:%S.%L",c),e={millisecond:15,second:12,minute:9,hour:6,day:3},f="millisecond";for(m in J){if(d===J.week&&+h.dateFormat("%w",c)===b&&"00:00:00.000"===g.substr(6)){var m="week";break}if(J[m]>d){m=f;break}if(e[m]&&g.substr(e[m])!=="01-01 00:00:00.000".substr(e[m]))break;
"week"!==m&&(f=m)}if(m)var l=h.resolveDTLFormat(a[m]).main;return l};e.prototype.getLabel=function(){var d=this,c=this.chart.renderer,g=this.chart.styledMode,a=this.options,h="tooltip"+(x(a.className)?" "+a.className:""),e=a.style&&a.style.pointerEvents||(!this.followPointer&&a.stickOnContact?"auto":"none"),f,y=function(){d.inContact=!0},l=function(){var a=d.chart.hoverSeries;d.inContact=!1;if(a&&a.onMouseOut)a.onMouseOut()};if(!this.label){if(this.outside){var k=this.chart.options.chart.style;this.container=
f=b.doc.createElement("div");f.className="highcharts-tooltip-container";B(f,{position:"absolute",top:"1px",pointerEvents:e,zIndex:Math.max(this.options.style&&this.options.style.zIndex||0,(k&&k.zIndex||0)+3)});b.doc.body.appendChild(f);this.renderer=c=new b.Renderer(f,0,0,k,void 0,void 0,c.styledMode)}this.split?this.label=c.g(h):(this.label=c.label("",0,0,a.shape||"callout",null,null,a.useHTML,null,h).attr({padding:a.padding,r:a.borderRadius}),g||this.label.attr({fill:a.backgroundColor,"stroke-width":a.borderWidth}).css(a.style).css({pointerEvents:e}).shadow(a.shadow));
g&&(this.applyFilter(),this.label.addClass("highcharts-tooltip-"+this.chart.index));if(d.outside&&!d.split){var n=this.label,q=n.xSetter,u=n.ySetter;n.xSetter=function(a){q.call(n,d.distance);f.style.left=a+"px"};n.ySetter=function(a){u.call(n,d.distance);f.style.top=a+"px"}}this.label.on("mouseenter",y).on("mouseleave",l).attr({zIndex:8}).add()}return this.label};e.prototype.getPosition=function(d,c,b){var a=this.chart,h=this.distance,g={},e=a.inverted&&b.h||0,f,m=this.outside,l=m?G.documentElement.clientWidth-
2*h:a.chartWidth,k=m?Math.max(G.body.scrollHeight,G.documentElement.scrollHeight,G.body.offsetHeight,G.documentElement.offsetHeight,G.documentElement.clientHeight):a.chartHeight,n=a.pointer.getChartPosition(),q=function(g){var e="x"===g;return[g,e?l:k,e?d:c].concat(m?[e?d*n.scaleX:c*n.scaleY,e?n.left-h+(b.plotX+a.plotLeft)*n.scaleX:n.top-h+(b.plotY+a.plotTop)*n.scaleY,0,e?l:k]:[e?d:c,e?b.plotX+a.plotLeft:b.plotY+a.plotTop,e?a.plotLeft:a.plotTop,e?a.plotLeft+a.plotWidth:a.plotTop+a.plotHeight])},u=
q("y"),t=q("x"),p=!this.followPointer&&N(b.ttBelow,!a.inverted===!!b.negative),v=function(a,c,d,b,r,f,A){var y=m?"y"===a?h*n.scaleY:h*n.scaleX:h,l=(d-b)/2,F=b<r-h,k=r+h+b<c,K=r-y-d+l;r=r+y-l;if(p&&k)g[a]=r;else if(!p&&F)g[a]=K;else if(F)g[a]=Math.min(A-b,0>K-e?K:K-e);else if(k)g[a]=Math.max(f,r+e+d>c?r:r+e);else return!1},w=function(a,c,d,b,e){var r;e<h||e>c-h?r=!1:g[a]=e<d/2?1:e>c-b/2?c-b-2:e-d/2;return r},E=function(a){var c=u;u=t;t=c;f=a},F=function(){!1!==v.apply(0,u)?!1!==w.apply(0,t)||f||(E(!0),
F()):f?g.x=g.y=0:(E(!0),F())};(a.inverted||1<this.len)&&E();F();return g};e.prototype.getXDateFormat=function(d,c,b){c=c.dateTimeLabelFormats;var a=b&&b.closestPointRange;return(a?this.getDateFormat(a,d.x,b.options.startOfWeek,c):c.day)||c.year};e.prototype.hide=function(d){var c=this;z.clearTimeout(this.hideTimer);d=N(d,this.options.hideDelay,500);this.isHidden||(this.hideTimer=n(function(){c.getLabel().fadeOut(d?void 0:d);c.isHidden=!0},d))};e.prototype.init=function(d,c){this.chart=d;this.options=
c;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=c.split&&!d.inverted&&!d.polar;this.shared=c.shared||this.split;this.outside=N(c.outside,!(!d.scrollablePixelsX&&!d.scrollablePixelsY))};e.prototype.isStickyOnContact=function(){return!(this.followPointer||!this.options.stickOnContact||!this.inContact)};e.prototype.move=function(d,c,b,a){var h=this,g=h.now,e=!1!==h.options.animation&&!h.isHidden&&(1<Math.abs(d-g.x)||1<Math.abs(c-g.y)),f=h.followPointer||1<h.len;v(g,{x:e?(2*g.x+d)/
3:d,y:e?(g.y+c)/2:c,anchorX:f?void 0:e?(2*g.anchorX+b)/3:b,anchorY:f?void 0:e?(g.anchorY+a)/2:a});h.getLabel().attr(g);h.drawTracker();e&&(z.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){h&&h.move(d,c,b,a)},32))};e.prototype.refresh=function(b,c){var g=this.chart,a=this.options,h=u(b),e=h[0],m={},y=[],l=a.formatter||this.defaultFormatter;m=this.shared;var k=g.styledMode;if(a.enabled){z.clearTimeout(this.hideTimer);this.followPointer=!this.split&&e.series.tooltipOptions.followPointer;
var n=this.getAnchor(b,c);var q=n[0];var v=n[1];!m||!d(b)&&b.series&&b.series.noSharedTooltip?m=e.getLabelConfig():(g.pointer.applyInactiveState(h),h.forEach(function(a){a.setState("hover");y.push(a.getLabelConfig())}),m={x:e.category,y:e.y},m.points=y);this.len=y.length;b=l.call(m,this);l=e.series;this.distance=N(l.tooltipOptions.distance,16);if(!1===b)this.hide();else{if(this.split)this.renderSplit(b,h);else if(h=q,m=v,c&&g.pointer.isDirectTouch&&(h=c.chartX-g.plotLeft,m=c.chartY-g.plotTop),g.polar||
!1===l.options.clip||l.shouldShowTooltip(h,m))c=this.getLabel(),a.style.width&&!k||c.css({width:this.chart.spacingBox.width+"px"}),c.attr({text:b&&b.join?b.join(""):b}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+N(e.colorIndex,l.colorIndex)),k||c.attr({stroke:a.borderColor||e.color||l.color||I.neutralColor60}),this.updatePosition({plotX:q,plotY:v,negative:e.negative,ttBelow:e.ttBelow,h:n[2]||0});else{this.hide();return}this.isHidden&&this.label&&this.label.attr({opacity:1}).show();
this.isHidden=!1}f(this,"refresh")}};e.prototype.renderSplit=function(d,c){function g(c,d,b,g,h){void 0===h&&(h=!0);b?(d=X?0:ba,c=C(c-g/2,S.left,S.right-g-(a.outside?U:0))):(d-=B,c=h?c-g-J:c+J,c=C(c,h?c:S.left,S.right));return{x:c,y:d}}var a=this,h=a.chart,e=a.chart,f=e.chartWidth,m=e.chartHeight,l=e.plotHeight,n=e.plotLeft,q=e.plotTop,u=e.pointer,w=e.scrollablePixelsY;w=void 0===w?0:w;var E=e.scrollablePixelsX,t=e.scrollingContainer;t=void 0===t?{scrollLeft:0,scrollTop:0}:t;var p=t.scrollLeft;t=
t.scrollTop;var x=e.styledMode,J=a.distance,D=a.options,F=a.options.positioner,S=a.outside&&"number"!==typeof E?G.documentElement.getBoundingClientRect():{left:p,right:p+f,top:t,bottom:t+m},K=a.getLabel(),T=this.renderer||h.renderer,X=!(!h.xAxis[0]||!h.xAxis[0].opposite);h=u.getChartPosition();var U=h.left;h=h.top;var B=q+t,z=0,ba=l-w;k(d)&&(d=[!1,d]);d=d.slice(0,c.length+1).reduce(function(d,b,h){if(!1!==b&&""!==b){h=c[h-1]||{isHeader:!0,plotX:c[0].plotX,plotY:l,series:{}};var e=h.isHeader,r=e?a:
h.series;b=b.toString();var f=r.tt,m=h.isHeader;var A=h.series;var y="highcharts-color-"+N(h.colorIndex,A.colorIndex,"none");f||(f={padding:D.padding,r:D.borderRadius},x||(f.fill=D.backgroundColor,f["stroke-width"]=D.borderWidth),f=T.label("",0,0,D[m?"headerShape":"shape"]||"callout",void 0,void 0,D.useHTML).addClass((m?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+y).attr(f).add(K));f.isActive=!0;f.attr({text:b});x||f.css(D.style).shadow(D.shadow).attr({stroke:D.borderColor||h.color||
A.color||I.neutralColor80});r=r.tt=f;m=r.getBBox();b=m.width+r.strokeWidth();e&&(z=m.height,ba+=z,X&&(B-=z));A=h.plotX;A=void 0===A?0:A;y=h.plotY;y=void 0===y?0:y;f=h.series;if(h.isHeader){A=n+A;var k=q+l/2}else{var p=f.xAxis,t=f.yAxis;A=p.pos+C(A,-J,p.len+J);f.shouldShowTooltip(0,t.pos-q+y,{ignoreX:!0})&&(k=t.pos+y)}A=C(A,S.left-J,S.right+J);"number"===typeof k?(m=m.height+1,y=F?F.call(a,b,m,h):g(A,k,e,b),d.push({align:F?0:void 0,anchorX:A,anchorY:k,boxWidth:b,point:h,rank:N(y.rank,e?1:0),size:m,
target:y.y,tt:r,x:y.x})):r.isActive=!1}return d},[]);!F&&d.some(function(c){var d=(a.outside?U:0)+c.anchorX;return d<S.left&&d+c.boxWidth<S.right?!0:d<U-S.left+c.boxWidth&&S.right-d>d})&&(d=d.map(function(a){var c=g(a.anchorX,a.anchorY,a.point.isHeader,a.boxWidth,!1);return v(a,{target:c.y,x:c.x})}));a.cleanSplit();b.distribute(d,ba);var H=U,ca=U;d.forEach(function(c){var d=c.x,b=c.boxWidth;c=c.isHeader;c||(a.outside&&U+d<H&&(H=U+d),!c&&a.outside&&H+b>ca&&(ca=U+d))});d.forEach(function(c){var d=c.x,
b=c.anchorX,h=c.pos,g=c.point.isHeader;h={visibility:"undefined"===typeof h?"hidden":"inherit",x:d,y:h+B,anchorX:b,anchorY:c.anchorY};if(a.outside&&d<b){var e=U-H;0<e&&(g||(h.x=d+e,h.anchorX=b+e),g&&(h.x=(ca-H)/2,h.anchorX=b+e))}c.tt.attr(h)});d=a.container;w=a.renderer;a.outside&&d&&w&&(e=K.getBBox(),w.setSize(e.width+e.x,e.height+e.y,!1),d.style.left=H+"px",d.style.top=h+"px")};e.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();
else{var d=this.chart,c=this.label,b=d.hoverPoint;if(c&&b){var a={x:0,y:0,width:0,height:0};b=this.getAnchor(b);var h=c.getBBox();b[0]+=d.plotLeft-c.translateX;b[1]+=d.plotTop-c.translateY;a.x=Math.min(0,b[0]);a.y=Math.min(0,b[1]);a.width=0>b[0]?Math.max(Math.abs(b[0]),h.width-b[0]):Math.max(Math.abs(b[0]),h.width);a.height=0>b[1]?Math.max(Math.abs(b[1]),h.height-Math.abs(b[1])):Math.max(Math.abs(b[1]),h.height);this.tracker?this.tracker.attr(a):(this.tracker=c.renderer.rect(a).addClass("highcharts-tracker").add(c),
d.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}};e.prototype.styledModeFormat=function(d){return d.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')};e.prototype.tooltipFooterHeaderFormatter=function(d,c){var b=c?"footer":"header",a=d.series,h=a.tooltipOptions,e=h.xDateFormat,m=a.xAxis,l=m&&"datetime"===m.options.type&&q(d.key),k=h[b+"Format"];c={isFooter:c,labelConfig:d};f(this,"headerFormatter",
c,function(c){l&&!e&&(e=this.getXDateFormat(d,h,m));l&&e&&(d.point&&d.point.tooltipDateKeys||["key"]).forEach(function(a){k=k.replace("{point."+a+"}","{point."+a+":"+e+"}")});a.chart.styledMode&&(k=this.styledModeFormat(k));c.text=D(k,{point:d,series:a},this.chart)});return c.text};e.prototype.update=function(d){this.destroy();l(!0,this.chart.options.tooltip.userOptions,d);this.init(this.chart,l(!0,this.options,d))};e.prototype.updatePosition=function(d){var c=this.chart,b=c.pointer,a=this.getLabel(),
h=d.plotX+c.plotLeft;c=d.plotY+c.plotTop;b=b.getChartPosition();d=(this.options.positioner||this.getPosition).call(this,a.width,a.height,d);if(this.outside){var e=(this.options.borderWidth||0)+2*this.distance;this.renderer.setSize(a.width+e,a.height+e,!1);if(1!==b.scaleX||1!==b.scaleY)B(this.container,{transform:"scale("+b.scaleX+", "+b.scaleY+")"}),h*=b.scaleX,c*=b.scaleY;h+=b.left-d.x;c+=b.top-d.y}this.move(Math.round(d.x),Math.round(d.y||0),h,c)};return e}();b.Tooltip=e;return b.Tooltip});O(e,
"Core/Pointer.js",[e["Core/Color/Color.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Tooltip.js"],e["Core/Utilities.js"]],function(e,b,I,z,H){var D=e.parse,C=b.charts,B=b.noop,x=H.addEvent,w=H.attr,v=H.css,f=H.defined,d=H.extend,q=H.find,k=H.fireEvent,l=H.isNumber,N=H.isObject,u=H.objectEach,n=H.offset,J=H.pick,E=H.splat;"";e=function(){function e(c,d){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.eventsToUnbind=[];this.chart=c;this.hasDragged=!1;this.options=
d;this.init(c,d)}e.prototype.applyInactiveState=function(c){var d=[],a;(c||[]).forEach(function(c){a=c.series;d.push(a);a.linkedParent&&d.push(a.linkedParent);a.linkedSeries&&(d=d.concat(a.linkedSeries));a.navigatorSeries&&d.push(a.navigatorSeries)});this.chart.series.forEach(function(a){-1===d.indexOf(a)?a.setState("inactive",!0):a.options.inactiveOtherPoints&&a.setAllPointsToState("inactive")})};e.prototype.destroy=function(){var c=this;this.eventsToUnbind.forEach(function(c){return c()});this.eventsToUnbind=
[];b.chartCount||(b.unbindDocumentMouseUp&&(b.unbindDocumentMouseUp=b.unbindDocumentMouseUp()),b.unbindDocumentTouchEnd&&(b.unbindDocumentTouchEnd=b.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);u(c,function(d,a){c[a]=void 0})};e.prototype.drag=function(c){var d=this.chart,a=d.options.chart,b=c.chartX,e=c.chartY,f=this.zoomHor,l=this.zoomVert,m=d.plotLeft,k=d.plotTop,n=d.plotWidth,q=d.plotHeight,u=this.selectionMarker,v=this.mouseDownX||0,t=this.mouseDownY||0,p=N(a.panning)?a.panning&&
a.panning.enabled:a.panning,w=a.panKey&&c[a.panKey+"Key"];if(!u||!u.touch)if(b<m?b=m:b>m+n&&(b=m+n),e<k?e=k:e>k+q&&(e=k+q),this.hasDragged=Math.sqrt(Math.pow(v-b,2)+Math.pow(t-e,2)),10<this.hasDragged){var E=d.isInsidePlot(v-m,t-k,{visiblePlotOnly:!0});d.hasCartesianSeries&&(this.zoomX||this.zoomY)&&E&&!w&&!u&&(this.selectionMarker=u=d.renderer.rect(m,k,f?1:n,l?1:q,0).attr({"class":"highcharts-selection-marker",zIndex:7}).add(),d.styledMode||u.attr({fill:a.selectionMarkerFill||D(I.highlightColor80).setOpacity(.25).get()}));
u&&f&&(b-=v,u.attr({width:Math.abs(b),x:(0<b?0:b)+v}));u&&l&&(b=e-t,u.attr({height:Math.abs(b),y:(0<b?0:b)+t}));E&&!u&&p&&d.pan(c,a.panning)}};e.prototype.dragStart=function(c){var d=this.chart;d.mouseIsDown=c.type;d.cancelClick=!1;d.mouseDownX=this.mouseDownX=c.chartX;d.mouseDownY=this.mouseDownY=c.chartY};e.prototype.drop=function(c){var b=this,a=this.chart,h=this.hasPinched;if(this.selectionMarker){var e={originalEvent:c,xAxis:[],yAxis:[]},A=this.selectionMarker,m=A.attr?A.attr("x"):A.x,n=A.attr?
A.attr("y"):A.y,q=A.attr?A.attr("width"):A.width,u=A.attr?A.attr("height"):A.height,w;if(this.hasDragged||h)a.axes.forEach(function(a){if(a.zoomEnabled&&f(a.min)&&(h||b[{xAxis:"zoomX",yAxis:"zoomY"}[a.coll]])&&l(m)&&l(n)){var d=a.horiz,g="touchend"===c.type?a.minPixelPadding:0,r=a.toValue((d?m:n)+g);d=a.toValue((d?m+q:n+u)-g);e[a.coll].push({axis:a,min:Math.min(r,d),max:Math.max(r,d)});w=!0}}),w&&k(a,"selection",e,function(c){a.zoom(d(c,h?{animation:!1}:null))});l(a.index)&&(this.selectionMarker=
this.selectionMarker.destroy());h&&this.scaleGroups()}a&&l(a.index)&&(v(a.container,{cursor:a._cursor}),a.cancelClick=10<this.hasDragged,a.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};e.prototype.findNearestKDPoint=function(c,d,a){var b=this.chart,g=b.hoverPoint;b=b.tooltip;if(g&&b&&b.isStickyOnContact())return g;var e;c.forEach(function(c){var b=!(c.noSharedTooltip&&d)&&0>c.options.findNearestPointBy.indexOf("y");c=c.searchPoint(a,b);if((b=N(c,!0)&&c.series)&&!(b=!N(e,!0))){b=
e.distX-c.distX;var h=e.dist-c.dist,g=(c.series.group&&c.series.group.zIndex)-(e.series.group&&e.series.group.zIndex);b=0<(0!==b&&d?b:0!==h?h:0!==g?g:e.series.index>c.series.index?-1:1)}b&&(e=c)});return e};e.prototype.getChartCoordinatesFromPoint=function(c,d){var a=c.series,b=a.xAxis;a=a.yAxis;var g=c.shapeArgs;if(b&&a){var e=J(c.clientX,c.plotX),f=c.plotY||0;c.isNode&&g&&l(g.x)&&l(g.y)&&(e=g.x,f=g.y);return d?{chartX:a.len+a.pos-f,chartY:b.len+b.pos-e}:{chartX:e+b.pos,chartY:f+a.pos}}if(g&&g.x&&
g.y)return{chartX:g.x,chartY:g.y}};e.prototype.getChartPosition=function(){if(this.chartPosition)return this.chartPosition;var c=this.chart.container,d=n(c);this.chartPosition={left:d.left,top:d.top,scaleX:1,scaleY:1};var a=c.offsetWidth;c=c.offsetHeight;2<a&&2<c&&(this.chartPosition.scaleX=d.width/a,this.chartPosition.scaleY=d.height/c);return this.chartPosition};e.prototype.getCoordinates=function(c){var d={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(a){d[a.isXAxis?"xAxis":"yAxis"].push({axis:a,
value:a.toValue(c[a.horiz?"chartX":"chartY"])})});return d};e.prototype.getHoverData=function(c,d,a,b,e,f){var h,g=[];b=!(!b||!c);var r=d&&!d.stickyTracking,l={chartX:f?f.chartX:void 0,chartY:f?f.chartY:void 0,shared:e};k(this,"beforeGetHoverData",l);r=r?[d]:a.filter(function(a){return l.filter?l.filter(a):a.visible&&!(!e&&a.directTouch)&&J(a.options.enableMouseTracking,!0)&&a.stickyTracking});d=(h=b||!f?c:this.findNearestKDPoint(r,e,f))&&h.series;h&&(e&&!d.noSharedTooltip?(r=a.filter(function(a){return l.filter?
l.filter(a):a.visible&&!(!e&&a.directTouch)&&J(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),r.forEach(function(a){var c=q(a.points,function(a){return a.x===h.x&&!a.isNull});N(c)&&(a.chart.isBoosting&&(c=a.getPoint(c)),g.push(c))})):g.push(h));l={hoverPoint:h};k(this,"afterGetHoverData",l);return{hoverPoint:l.hoverPoint,hoverSeries:d,hoverPoints:g}};e.prototype.getPointFromEvent=function(c){c=c.target;for(var d;c&&!d;)d=c.point,c=c.parentNode;return d};e.prototype.onTrackerMouseOut=function(c){c=
c.relatedTarget||c.toElement;var d=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!d||!c||d.stickyTracking||this.inClass(c,"highcharts-tooltip")||this.inClass(c,"highcharts-series-"+d.index)&&this.inClass(c,"highcharts-tracker")))d.onMouseOut()};e.prototype.inClass=function(c,d){for(var a;c;){if(a=w(c,"class")){if(-1!==a.indexOf(d))return!0;if(-1!==a.indexOf("highcharts-container"))return!1}c=c.parentNode}};e.prototype.init=function(c,d){this.options=d;this.chart=c;this.runChartClick=!(!d.chart.events||
!d.chart.events.click);this.pinchDown=[];this.lastValidTouch={};z&&(c.tooltip=new z(c,d.tooltip),this.followTouchMove=J(d.tooltip.followTouchMove,!0));this.setDOMEvents()};e.prototype.normalize=function(c,b){var a=c.touches,h=a?a.length?a.item(0):J(a.changedTouches,c.changedTouches)[0]:c;b||(b=this.getChartPosition());a=h.pageX-b.left;h=h.pageY-b.top;a/=b.scaleX;h/=b.scaleY;return d(c,{chartX:Math.round(a),chartY:Math.round(h)})};e.prototype.onContainerClick=function(c){var b=this.chart,a=b.hoverPoint;
c=this.normalize(c);var h=b.plotLeft,e=b.plotTop;b.cancelClick||(a&&this.inClass(c.target,"highcharts-tracker")?(k(a.series,"click",d(c,{point:a})),b.hoverPoint&&a.firePointEvent("click",c)):(d(c,this.getCoordinates(c)),b.isInsidePlot(c.chartX-h,c.chartY-e,{visiblePlotOnly:!0})&&k(b,"click",c)))};e.prototype.onContainerMouseDown=function(c){var d=1===((c.buttons||c.button)&1);c=this.normalize(c);if(b.isFirefox&&0!==c.button)this.onContainerMouseMove(c);if("undefined"===typeof c.button||d)this.zoomOption(c),
d&&c.preventDefault&&c.preventDefault(),this.dragStart(c)};e.prototype.onContainerMouseLeave=function(c){var d=C[J(b.hoverChartIndex,-1)],a=this.chart.tooltip;c=this.normalize(c);d&&(c.relatedTarget||c.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=void 0);a&&!a.isHidden&&this.reset()};e.prototype.onContainerMouseEnter=function(c){delete this.chartPosition};e.prototype.onContainerMouseMove=function(c){var d=this.chart;c=this.normalize(c);this.setHoverChartIndex();c.preventDefault||(c.returnValue=
!1);("mousedown"===d.mouseIsDown||this.touchSelect(c))&&this.drag(c);d.openMenu||!this.inClass(c.target,"highcharts-tracker")&&!d.isInsidePlot(c.chartX-d.plotLeft,c.chartY-d.plotTop,{visiblePlotOnly:!0})||this.runPointActions(c)};e.prototype.onDocumentTouchEnd=function(c){C[b.hoverChartIndex]&&C[b.hoverChartIndex].pointer.drop(c)};e.prototype.onContainerTouchMove=function(c){if(this.touchSelect(c))this.onContainerMouseMove(c);else this.touch(c)};e.prototype.onContainerTouchStart=function(c){if(this.touchSelect(c))this.onContainerMouseDown(c);
else this.zoomOption(c),this.touch(c,!0)};e.prototype.onDocumentMouseMove=function(c){var d=this.chart,a=this.chartPosition;c=this.normalize(c,a);var b=d.tooltip;!a||b&&b.isStickyOnContact()||d.isInsidePlot(c.chartX-d.plotLeft,c.chartY-d.plotTop,{visiblePlotOnly:!0})||this.inClass(c.target,"highcharts-tracker")||this.reset()};e.prototype.onDocumentMouseUp=function(c){var d=C[J(b.hoverChartIndex,-1)];d&&d.pointer.drop(c)};e.prototype.pinch=function(c){var b=this,a=b.chart,h=b.pinchDown,e=c.touches||
[],f=e.length,l=b.lastValidTouch,m=b.hasZoom,k=b.selectionMarker,n={},q=1===f&&(b.inClass(c.target,"highcharts-tracker")&&a.runTrackerClick||b.runChartClick),u={};1<f&&(b.initiated=!0);m&&b.initiated&&!q&&!1!==c.cancelable&&c.preventDefault();[].map.call(e,function(a){return b.normalize(a)});"touchstart"===c.type?([].forEach.call(e,function(a,c){h[c]={chartX:a.chartX,chartY:a.chartY}}),l.x=[h[0].chartX,h[1]&&h[1].chartX],l.y=[h[0].chartY,h[1]&&h[1].chartY],a.axes.forEach(function(c){if(c.zoomEnabled){var d=
a.bounds[c.horiz?"h":"v"],b=c.minPixelPadding,h=c.toPixels(Math.min(J(c.options.min,c.dataMin),c.dataMin)),e=c.toPixels(Math.max(J(c.options.max,c.dataMax),c.dataMax)),g=Math.max(h,e);d.min=Math.min(c.pos,Math.min(h,e)-b);d.max=Math.max(c.pos+c.len,g+b)}}),b.res=!0):b.followTouchMove&&1===f?this.runPointActions(b.normalize(c)):h.length&&(k||(b.selectionMarker=k=d({destroy:B,touch:!0},a.plotBox)),b.pinchTranslate(h,e,n,k,u,l),b.hasPinched=m,b.scaleGroups(n,u),b.res&&(b.res=!1,this.reset(!1,0)))};e.prototype.pinchTranslate=
function(c,d,a,b,e,f){this.zoomHor&&this.pinchTranslateDirection(!0,c,d,a,b,e,f);this.zoomVert&&this.pinchTranslateDirection(!1,c,d,a,b,e,f)};e.prototype.pinchTranslateDirection=function(c,d,a,b,e,f,l,m){var h=this.chart,g=c?"x":"y",r=c?"X":"Y",k="chart"+r,n=c?"width":"height",A=h["plot"+(c?"Left":"Top")],y,q,u=m||1,L=h.inverted,F=h.bounds[c?"h":"v"],v=1===d.length,K=d[0][k],w=a[0][k],E=!v&&d[1][k],x=!v&&a[1][k];a=function(){"number"===typeof x&&20<Math.abs(K-E)&&(u=m||Math.abs(w-x)/Math.abs(K-E));
q=(A-w)/u+K;y=h["plot"+(c?"Width":"Height")]/u};a();d=q;if(d<F.min){d=F.min;var J=!0}else d+y>F.max&&(d=F.max-y,J=!0);J?(w-=.8*(w-l[g][0]),"number"===typeof x&&(x-=.8*(x-l[g][1])),a()):l[g]=[w,x];L||(f[g]=q-A,f[n]=y);f=L?1/u:u;e[n]=y;e[g]=d;b[L?c?"scaleY":"scaleX":"scale"+r]=u;b["translate"+r]=f*A+(w-f*K)};e.prototype.reset=function(c,d){var a=this.chart,b=a.hoverSeries,e=a.hoverPoint,g=a.hoverPoints,f=a.tooltip,l=f&&f.shared?g:e;c&&l&&E(l).forEach(function(a){a.series.isCartesian&&"undefined"===
typeof a.plotX&&(c=!1)});if(c)f&&l&&E(l).length&&(f.refresh(l),f.shared&&g?g.forEach(function(a){a.setState(a.state,!0);a.series.isCartesian&&(a.series.xAxis.crosshair&&a.series.xAxis.drawCrosshair(null,a),a.series.yAxis.crosshair&&a.series.yAxis.drawCrosshair(null,a))}):e&&(e.setState(e.state,!0),a.axes.forEach(function(a){a.crosshair&&e.series[a.coll]===a&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();g&&g.forEach(function(a){a.setState()});if(b)b.onMouseOut();f&&f.hide(d);this.unDocMouseMove&&
(this.unDocMouseMove=this.unDocMouseMove());a.axes.forEach(function(a){a.hideCrosshair()});this.hoverX=a.hoverPoints=a.hoverPoint=null}};e.prototype.runPointActions=function(c,d){var a=this.chart,h=a.tooltip&&a.tooltip.options.enabled?a.tooltip:void 0,e=h?h.shared:!1,g=d||a.hoverPoint,f=g&&g.series||a.hoverSeries;f=this.getHoverData(g,f,a.series,(!c||"touchmove"!==c.type)&&(!!d||f&&f.directTouch&&this.isDirectTouch),e,c);g=f.hoverPoint;var l=f.hoverPoints;d=(f=f.hoverSeries)&&f.tooltipOptions.followPointer&&
!f.tooltipOptions.split;e=e&&f&&!f.noSharedTooltip;if(g&&(g!==a.hoverPoint||h&&h.isHidden)){(a.hoverPoints||[]).forEach(function(a){-1===l.indexOf(a)&&a.setState()});if(a.hoverSeries!==f)f.onMouseOver();this.applyInactiveState(l);(l||[]).forEach(function(a){a.setState("hover")});a.hoverPoint&&a.hoverPoint.firePointEvent("mouseOut");if(!g.series)return;a.hoverPoints=l;a.hoverPoint=g;g.firePointEvent("mouseOver");h&&h.refresh(e?l:g,c)}else d&&h&&!h.isHidden&&(g=h.getAnchor([{}],c),a.isInsidePlot(g[0],
g[1],{visiblePlotOnly:!0})&&h.updatePosition({plotX:g[0],plotY:g[1]}));this.unDocMouseMove||(this.unDocMouseMove=x(a.container.ownerDocument,"mousemove",function(a){var c=C[b.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(a)}),this.eventsToUnbind.push(this.unDocMouseMove));a.axes.forEach(function(d){var b=J((d.crosshair||{}).snap,!0),h;b&&((h=a.hoverPoint)&&h.series[d.coll]===d||(h=q(l,function(a){return a.series[d.coll]===d})));h||!b?d.drawCrosshair(c,h):d.hideCrosshair()})};e.prototype.scaleGroups=
function(c,d){var a=this.chart,b;a.series.forEach(function(h){b=c||h.getPlotBox();h.xAxis&&h.xAxis.zoomEnabled&&h.group&&(h.group.attr(b),h.markerGroup&&(h.markerGroup.attr(b),h.markerGroup.clip(d?a.clipRect:null)),h.dataLabelsGroup&&h.dataLabelsGroup.attr(b))});a.clipRect.attr(d||a.clipBox)};e.prototype.setDOMEvents=function(){var c=this,d=this.chart.container,a=d.ownerDocument;d.onmousedown=this.onContainerMouseDown.bind(this);d.onmousemove=this.onContainerMouseMove.bind(this);d.onclick=this.onContainerClick.bind(this);
this.eventsToUnbind.push(x(d,"mouseenter",this.onContainerMouseEnter.bind(this)));this.eventsToUnbind.push(x(d,"mouseleave",this.onContainerMouseLeave.bind(this)));b.unbindDocumentMouseUp||(b.unbindDocumentMouseUp=x(a,"mouseup",this.onDocumentMouseUp.bind(this)));for(var h=this.chart.renderTo.parentElement;h&&"BODY"!==h.tagName;)this.eventsToUnbind.push(x(h,"scroll",function(){delete c.chartPosition})),h=h.parentElement;b.hasTouch&&(this.eventsToUnbind.push(x(d,"touchstart",this.onContainerTouchStart.bind(this),
{passive:!1})),this.eventsToUnbind.push(x(d,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1})),b.unbindDocumentTouchEnd||(b.unbindDocumentTouchEnd=x(a,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))};e.prototype.setHoverChartIndex=function(){var c=this.chart,d=b.charts[J(b.hoverChartIndex,-1)];if(d&&d!==c)d.pointer.onContainerMouseLeave({relatedTarget:!0});d&&d.mouseIsDown||(b.hoverChartIndex=c.index)};e.prototype.touch=function(c,d){var a=this.chart,b;this.setHoverChartIndex();
if(1===c.touches.length)if(c=this.normalize(c),(b=a.isInsidePlot(c.chartX-a.plotLeft,c.chartY-a.plotTop,{visiblePlotOnly:!0}))&&!a.openMenu){d&&this.runPointActions(c);if("touchmove"===c.type){d=this.pinchDown;var e=d[0]?4<=Math.sqrt(Math.pow(d[0].chartX-c.chartX,2)+Math.pow(d[0].chartY-c.chartY,2)):!1}J(e,!0)&&this.pinch(c)}else d&&this.reset();else 2===c.touches.length&&this.pinch(c)};e.prototype.touchSelect=function(c){return!(!this.chart.options.chart.zoomBySingleTouch||!c.touches||1!==c.touches.length)};
e.prototype.zoomOption=function(c){var d=this.chart,a=d.options.chart,b=a.zoomType||"";d=d.inverted;/touch/.test(c.type)&&(b=J(a.pinchType,b));this.zoomX=c=/x/.test(b);this.zoomY=b=/y/.test(b);this.zoomHor=c&&!d||b&&d;this.zoomVert=b&&!d||c&&d;this.hasZoom=c||b};return e}();return b.Pointer=e});O(e,"Core/MSPointer.js",[e["Core/Globals.js"],e["Core/Pointer.js"],e["Core/Utilities.js"]],function(e,b,I){function D(){var d=[];d.item=function(d){return this[d]};f(q,function(b){d.push({pageX:b.pageX,pageY:b.pageY,
target:b.target})});return d}function H(d,b,f,k){"touch"!==d.pointerType&&d.pointerType!==d.MSPOINTER_TYPE_TOUCH||!C[e.hoverChartIndex]||(k(d),k=C[e.hoverChartIndex].pointer,k[b]({type:f,target:d.currentTarget,preventDefault:x,touches:D()}))}var G=this&&this.__extends||function(){var d=function(b,e){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e])};return d(b,e)};return function(b,e){function f(){this.constructor=
b}d(b,e);b.prototype=null===e?Object.create(e):(f.prototype=e.prototype,new f)}}(),C=e.charts,B=e.doc,x=e.noop,w=I.addEvent,v=I.css,f=I.objectEach,d=I.removeEvent,q={},k=!!e.win.PointerEvent;return function(b){function e(){return null!==b&&b.apply(this,arguments)||this}G(e,b);e.prototype.batchMSEvents=function(d){d(this.chart.container,k?"pointerdown":"MSPointerDown",this.onContainerPointerDown);d(this.chart.container,k?"pointermove":"MSPointerMove",this.onContainerPointerMove);d(B,k?"pointerup":
"MSPointerUp",this.onDocumentPointerUp)};e.prototype.destroy=function(){this.batchMSEvents(d);b.prototype.destroy.call(this)};e.prototype.init=function(d,e){b.prototype.init.call(this,d,e);this.hasZoom&&v(d.container,{"-ms-touch-action":"none","touch-action":"none"})};e.prototype.onContainerPointerDown=function(d){H(d,"onContainerTouchStart","touchstart",function(d){q[d.pointerId]={pageX:d.pageX,pageY:d.pageY,target:d.currentTarget}})};e.prototype.onContainerPointerMove=function(d){H(d,"onContainerTouchMove",
"touchmove",function(d){q[d.pointerId]={pageX:d.pageX,pageY:d.pageY};q[d.pointerId].target||(q[d.pointerId].target=d.currentTarget)})};e.prototype.onDocumentPointerUp=function(d){H(d,"onDocumentTouchEnd","touchend",function(d){delete q[d.pointerId]})};e.prototype.setDOMEvents=function(){b.prototype.setDOMEvents.call(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(w)};return e}(b)});O(e,"Core/Series/Point.js",[e["Core/Renderer/HTML/AST.js"],e["Core/Animation/AnimationUtilities.js"],
e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Options.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G){var D=b.animObject,B=I.format,x=H.defaultOptions,w=G.addEvent,v=G.defined,f=G.erase,d=G.extend,q=G.fireEvent,k=G.getNestedProperty,l=G.isArray,N=G.isFunction,u=G.isNumber,n=G.isObject,J=G.merge,E=G.objectEach,m=G.pick,c=G.syncTimeout,g=G.removeEvent,a=G.uniqueKey;"";b=function(){function b(){this.colorIndex=this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;
this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.series=void 0;this.visible=!0;this.x=void 0}b.prototype.animateBeforeDestroy=function(){var a=this,c={x:a.startXPos,opacity:0},b,e=a.getGraphicalProps();e.singular.forEach(function(d){b="dataLabel"===d;a[d]=a[d].animate(b?{x:a[d].startXPos,y:a[d].startYPos,opacity:0}:c)});e.plural.forEach(function(c){a[c].forEach(function(c){c.element&&c.animate(d({x:a.startXPos},c.startYPos?{x:c.startXPos,y:c.startYPos}:{}))})})};b.prototype.applyOptions=
function(a,c){var e=this.series,h=e.options.pointValKey||e.pointValKey;a=b.prototype.optionsToObject.call(this,a);d(this,a);this.options=this.options?d(this.options,a):a;a.group&&delete this.group;a.dataLabels&&delete this.dataLabels;h&&(this.y=b.prototype.getNestedProperty.call(this,h));this.formatPrefix=(this.isNull=m(this.isValid&&!this.isValid(),null===this.x||!u(this.y)))?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&e.xAxis&&e.xAxis.hasNames&&(this.x=
e.xAxis.nameToX(this));"undefined"===typeof this.x&&e&&(this.x="undefined"===typeof c?e.autoIncrement(this):c);return this};b.prototype.destroy=function(){function a(){if(d.graphic||d.dataLabel||d.dataLabels)g(d),d.destroyElements();for(m in d)d[m]=null}var d=this,b=d.series,e=b.chart;b=b.options.dataSorting;var h=e.hoverPoints,l=D(d.series.chart.renderer.globalAnimation),m;d.legendItem&&e.legend.destroyItem(d);h&&(d.setState(),f(h,d),h.length||(e.hoverPoints=null));if(d===e.hoverPoint)d.onMouseOut();
b&&b.enabled?(this.animateBeforeDestroy(),c(a,l.duration)):a();e.pointCount--};b.prototype.destroyElements=function(a){var c=this;a=c.getGraphicalProps(a);a.singular.forEach(function(a){c[a]=c[a].destroy()});a.plural.forEach(function(a){c[a].forEach(function(a){a.element&&a.destroy()});delete c[a]})};b.prototype.firePointEvent=function(a,c,d){var b=this,e=this.series.options;(e.point.events[a]||b.options&&b.options.events&&b.options.events[a])&&b.importEvents();"click"===a&&e.allowPointSelect&&(d=
function(a){b.select&&b.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});q(b,a,c,d)};b.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};
b.prototype.getGraphicalProps=function(a){var c=this,d=[],b,e={singular:[],plural:[]};a=a||{graphic:1,dataLabel:1};a.graphic&&d.push("graphic","upperGraphic","shadowGroup");a.dataLabel&&d.push("dataLabel","dataLabelUpper","connector");for(b=d.length;b--;){var h=d[b];c[h]&&e.singular.push(h)}["dataLabel","connector"].forEach(function(d){var b=d+"s";a[d]&&c[b]&&e.plural.push(b)});return e};b.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,
key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};b.prototype.getNestedProperty=function(a){if(a)return 0===a.indexOf("custom.")?k(a,this.options):this[a]};b.prototype.getZone=function(){var a=this.series,c=a.zones;a=a.zoneAxis||"y";var d=0,b;for(b=c[d];this[a]>=b.value;)b=c[++d];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=b&&b.color&&!this.options.color?b.color:this.nonZonedColor;return b};b.prototype.hasNewShapeType=
function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};b.prototype.init=function(c,d,b){this.series=c;this.applyOptions(d,b);this.id=v(this.id)?this.id:a();this.resolveColor();c.chart.pointCount++;q(this,"afterInit");return this};b.prototype.optionsToObject=function(a){var c={},d=this.series,e=d.options.keys,h=e||d.pointArrayMap||["y"],g=h.length,f=0,r=0;if(u(a)||null===a)c[h[0]]=a;else if(l(a))for(!e&&a.length>g&&(d=typeof a[0],"string"===d?c.name=
a[0]:"number"===d&&(c.x=a[0]),f++);r<g;)e&&"undefined"===typeof a[f]||(0<h[r].indexOf(".")?b.prototype.setNestedProperty(c,a[f],h[r]):c[h[r]]=a[f]),f++,r++;else"object"===typeof a&&(c=a,a.dataLabels&&(d._hasPointLabels=!0),a.marker&&(d._hasPointMarkers=!0));return c};b.prototype.resolveColor=function(){var a=this.series;var c=a.chart.options.chart.colorCount;var d=a.chart.styledMode;delete this.nonZonedColor;if(a.options.colorByPoint){if(!d){c=a.options.colors||a.chart.options.colors;var b=c[a.colorCounter];
c=c.length}d=a.colorCounter;a.colorCounter++;a.colorCounter===c&&(a.colorCounter=0)}else d||(b=a.color),d=a.colorIndex;this.colorIndex=m(this.options.colorIndex,d);this.color=m(this.options.color,b)};b.prototype.setNestedProperty=function(a,c,d){d.split(".").reduce(function(a,d,b,e){a[d]=e.length-1===b?c:n(a[d],!0)?a[d]:{};return a[d]},a);return a};b.prototype.tooltipFormatter=function(a){var c=this.series,d=c.tooltipOptions,b=m(d.valueDecimals,""),e=d.valuePrefix||"",h=d.valueSuffix||"";c.chart.styledMode&&
(a=c.chart.tooltip.styledModeFormat(a));(c.pointArrayMap||["y"]).forEach(function(c){c="{point."+c;if(e||h)a=a.replace(RegExp(c+"}","g"),e+c+"}"+h);a=a.replace(RegExp(c+"}","g"),c+":,."+b+"f}")});return B(a,{point:this,series:this.series},c.chart)};b.prototype.update=function(a,c,d,b){function e(){h.applyOptions(a);var b=f&&h.hasDummyGraphic;b=null===h.y?!b:b;f&&b&&(h.graphic=f.destroy(),delete h.hasDummyGraphic);n(a,!0)&&(f&&f.element&&a&&a.marker&&"undefined"!==typeof a.marker.symbol&&(h.graphic=
f.destroy()),a&&a.dataLabels&&h.dataLabel&&(h.dataLabel=h.dataLabel.destroy()),h.connector&&(h.connector=h.connector.destroy()));r=h.index;g.updateParallelArrays(h,r);k.data[r]=n(k.data[r],!0)||n(a,!0)?h.options:m(a,k.data[r]);g.isDirty=g.isDirtyData=!0;!g.fixedBox&&g.hasCartesianSeries&&(l.isDirtyBox=!0);"point"===k.legendType&&(l.isDirtyLegend=!0);c&&l.redraw(d)}var h=this,g=h.series,f=h.graphic,r,l=g.chart,k=g.options;c=m(c,!0);!1===b?e():h.firePointEvent("update",{options:a},e)};b.prototype.remove=
function(a,c){this.series.removePoint(this.series.data.indexOf(this),a,c)};b.prototype.select=function(a,c){var d=this,b=d.series,e=b.chart;this.selectedStaging=a=m(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:c},function(){d.selected=d.options.selected=a;b.options.data[b.data.indexOf(d)]=d.options;d.setState(a&&"select");c||e.getSelectedPoints().forEach(function(a){var c=a.series;a.selected&&a!==d&&(a.selected=a.options.selected=!1,c.options.data[c.data.indexOf(a)]=a.options,
a.setState(e.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),a.firePointEvent("unselect"))})});delete this.selectedStaging};b.prototype.onMouseOver=function(a){var c=this.series.chart,d=c.pointer;a=a?d.normalize(a):d.getChartCoordinatesFromPoint(this,c.inverted);d.runPointActions(a,this)};b.prototype.onMouseOut=function(){var a=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(a.hoverPoints||[]).forEach(function(a){a.setState()});a.hoverPoints=a.hoverPoint=
null};b.prototype.importEvents=function(){if(!this.hasImportedEvents){var a=this,c=J(a.series.options.point,a.options).events;a.events=c;E(c,function(c,d){N(c)&&w(a,d,c)});this.hasImportedEvents=!0}};b.prototype.setState=function(a,c){var b=this.series,h=this.state,g=b.options.states[a||"normal"]||{},f=x.plotOptions[b.type].marker&&b.options.marker,r=f&&!1===f.enabled,l=f&&f.states&&f.states[a||"normal"]||{},k=!1===l.enabled,n=b.stateMarkerGraphic,p=this.marker||{},A=b.chart,v=b.halo,w,F=f&&b.markerAttribs;
a=a||"";if(!(a===this.state&&!c||this.selected&&"select"!==a||!1===g.enabled||a&&(k||r&&!1===l.enabled)||a&&p.states&&p.states[a]&&!1===p.states[a].enabled)){this.state=a;F&&(w=b.markerAttribs(this,a));if(this.graphic&&!this.hasDummyGraphic){h&&this.graphic.removeClass("highcharts-point-"+h);a&&this.graphic.addClass("highcharts-point-"+a);if(!A.styledMode){var S=b.pointAttribs(this,a);var K=m(A.options.chart.animation,g.animation);b.options.inactiveOtherPoints&&u(S.opacity)&&((this.dataLabels||[]).forEach(function(a){a&&
a.animate({opacity:S.opacity},K)}),this.connector&&this.connector.animate({opacity:S.opacity},K));this.graphic.animate(S,K)}w&&this.graphic.animate(w,m(A.options.chart.animation,l.animation,f.animation));n&&n.hide()}else{if(a&&l){h=p.symbol||b.symbol;n&&n.currentSymbol!==h&&(n=n.destroy());if(w)if(n)n[c?"animate":"attr"]({x:w.x,y:w.y});else h&&(b.stateMarkerGraphic=n=A.renderer.symbol(h,w.x,w.y,w.width,w.height).add(b.markerGroup),n.currentSymbol=h);!A.styledMode&&n&&n.attr(b.pointAttribs(this,a))}n&&
(n[a&&this.isInside?"show":"hide"](),n.element.point=this)}g=g.halo;w=(n=this.graphic||n)&&n.visibility||"inherit";g&&g.size&&n&&"hidden"!==w&&!this.isCluster?(v||(b.halo=v=A.renderer.path().add(n.parentGroup)),v.show()[c?"animate":"attr"]({d:this.haloPath(g.size)}),v.attr({"class":"highcharts-halo highcharts-color-"+m(this.colorIndex,b.colorIndex)+(this.className?" "+this.className:""),visibility:w,zIndex:-1}),v.point=this,A.styledMode||v.attr(d({fill:this.color||b.color,"fill-opacity":g.opacity},
e.filterUserAttributes(g.attributes||{})))):v&&v.point&&v.point.haloPath&&v.animate({d:v.point.haloPath(0)},null,v.hide);q(this,"afterSetState",{state:a})}};b.prototype.haloPath=function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)};return b}();return z.Point=b});O(e,"Core/Legend.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Series/Point.js"],e["Core/Utilities.js"]],function(e,b,I,z,H){var D=
e.animObject,C=e.setAnimation,B=b.format;e=I.isFirefox;var x=I.marginNames;b=I.win;var w=H.addEvent,v=H.createElement,f=H.css,d=H.defined,q=H.discardElement,k=H.find,l=H.fireEvent,N=H.isNumber,u=H.merge,n=H.pick,J=H.relativeLength,E=H.stableSort,m=H.syncTimeout;H=H.wrap;var c=function(){function c(a,c){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=
this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options={};this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=a;this.init(a,c)}c.prototype.init=function(a,c){this.chart=a;this.setOptions(c);c.enabled&&(this.render(),w(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=w(this.chart,
"render",function(){this.legend.proximatePositions();this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};c.prototype.setOptions=function(a){var c=n(a.padding,8);this.options=a;this.chart.styledMode||(this.itemStyle=a.itemStyle,this.itemHiddenStyle=u(this.itemStyle,a.itemHiddenStyle));this.itemMarginTop=a.itemMarginTop||0;this.itemMarginBottom=a.itemMarginBottom||0;this.padding=c;this.initialItemY=c-5;this.symbolWidth=n(a.symbolWidth,16);this.pages=[];this.proximate="proximate"===
a.layout&&!this.chart.inverted;this.baseline=void 0};c.prototype.update=function(a,c){var d=this.chart;this.setOptions(u(!0,this.options,a));this.destroy();d.isDirtyLegend=d.isDirtyBox=!0;n(c,!0)&&d.redraw();l(this,"afterUpdate")};c.prototype.colorizeItem=function(a,c){a.legendGroup[c?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var d=this.options,b=a.legendItem,e=a.legendLine,h=a.legendSymbol,g=this.itemHiddenStyle.color;d=c?d.itemStyle.color:g;var f=c?a.color||
g:g,m=a.options&&a.options.marker,k={fill:f};b&&b.css({fill:d,color:d});e&&e.attr({stroke:f});h&&(m&&h.isMarker&&(k=a.pointAttribs(),c||(k.stroke=k.fill=g)),h.attr(k))}l(this,"afterColorizeItem",{item:a,visible:c})};c.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};c.prototype.positionItem=function(a){var c=this,b=this.options,e=b.symbolPadding,g=!b.rtl,f=a._legendItemPos;b=f[0];f=f[1];var k=a.checkbox,m=a.legendGroup;
m&&m.element&&(e={translateX:g?b:this.legendWidth-b-2*e-4,translateY:f},g=function(){l(c,"afterPositionItem",{item:a})},d(m.translateY)?m.animate(e,void 0,g):(m.attr(e),g()));k&&(k.x=b,k.y=f)};c.prototype.destroyItem=function(a){var c=a.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(c){a[c]&&(a[c]=a[c].destroy())});c&&q(a.checkbox)};c.prototype.destroy=function(){function a(a){this[a]&&(this[a]=this[a].destroy())}this.getAllItems().forEach(function(c){["legendItem",
"legendGroup"].forEach(a,c)});"clipRect up down pager nav box title group".split(" ").forEach(a,this);this.display=null};c.prototype.positionCheckboxes=function(){var a=this.group&&this.group.alignAttr,c=this.clipHeight||this.legendHeight,d=this.titleHeight;if(a){var b=a.translateY;this.allItems.forEach(function(e){var h=e.checkbox;if(h){var g=b+d+h.y+(this.scrollOffset||0)+3;f(h,{left:a.translateX+e.checkboxOffset+h.x-20+"px",top:g+"px",display:this.proximate||g>b-6&&g<b+c-6?"":"none"})}},this)}};
c.prototype.renderTitle=function(){var a=this.options,c=this.padding,d=a.title,b=0;d.text&&(this.title||(this.title=this.chart.renderer.label(d.text,c-3,c-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(d.style),this.title.add(this.group)),d.width||this.title.css({width:this.maxLegendWidth+"px"}),a=this.title.getBBox(),b=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:b}));this.titleHeight=b};c.prototype.setText=function(a){var c=
this.options;a.legendItem.attr({text:c.labelFormat?B(c.labelFormat,a,this.chart):c.labelFormatter.call(a)})};c.prototype.renderItem=function(a){var c=this.chart,d=c.renderer,b=this.options,e=this.symbolWidth,g=b.symbolPadding||0,f=this.itemStyle,l=this.itemHiddenStyle,k="horizontal"===b.layout?n(b.itemDistance,20):0,m=!b.rtl,q=a.legendItem,t=!a.series,p=!t&&a.series.drawLegendSymbol?a.series:a,v=p.options,w=this.createCheckboxForItem&&v&&v.showCheckbox;v=e+g+k+(w?20:0);var E=b.useHTML,F=a.options.className;
q||(a.legendGroup=d.g("legend-item").addClass("highcharts-"+p.type+"-series highcharts-color-"+a.colorIndex+(F?" "+F:"")+(t?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=q=d.text("",m?e+g:-g,this.baseline||0,E),c.styledMode||q.css(u(a.visible?f:l)),q.attr({align:m?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(this.fontMetrics=d.fontMetrics(c.styledMode?12:f.fontSize,q),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,q.attr("y",this.baseline),
this.symbolHeight=b.symbolHeight||this.fontMetrics.f,b.squareSymbol&&(this.symbolWidth=n(b.symbolWidth,Math.max(this.symbolHeight,16)),v=this.symbolWidth+g+k+(w?20:0),m&&q.attr("x",this.symbolWidth+g))),p.drawLegendSymbol(this,a),this.setItemEvents&&this.setItemEvents(a,q,E));w&&!a.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(a);this.colorizeItem(a,a.visible);!c.styledMode&&f.width||q.css({width:(b.itemWidth||this.widthOption||c.spacingBox.width)-v+"px"});this.setText(a);c=q.getBBox();
a.itemWidth=a.checkboxOffset=b.itemWidth||a.legendItemWidth||c.width+v;this.maxItemWidth=Math.max(this.maxItemWidth,a.itemWidth);this.totalItemWidth+=a.itemWidth;this.itemHeight=a.itemHeight=Math.round(a.legendItemHeight||c.height||this.symbolHeight)};c.prototype.layoutItem=function(a){var c=this.options,d=this.padding,b="horizontal"===c.layout,e=a.itemHeight,g=this.itemMarginBottom,f=this.itemMarginTop,l=b?n(c.itemDistance,20):0,m=this.maxLegendWidth;c=c.alignColumns&&this.totalItemWidth>m?this.maxItemWidth:
a.itemWidth;b&&this.itemX-d+c>m&&(this.itemX=d,this.lastLineHeight&&(this.itemY+=f+this.lastLineHeight+g),this.lastLineHeight=0);this.lastItemY=f+this.itemY+g;this.lastLineHeight=Math.max(e,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];b?this.itemX+=c:(this.itemY+=f+e+g,this.lastLineHeight=e);this.offsetWidth=this.widthOption||Math.max((b?this.itemX-d-(a.checkbox?0:l):c)+d,this.offsetWidth)};c.prototype.getAllItems=function(){var a=[];this.chart.series.forEach(function(c){var b=c&&
c.options;c&&n(b.showInLegend,d(b.linkedTo)?!1:void 0,!0)&&(a=a.concat(c.legendItems||("point"===b.legendType?c.data:c)))});l(this,"afterGetAllItems",{allItems:a});return a};c.prototype.getAlignment=function(){var a=this.options;return this.proximate?a.align.charAt(0)+"tv":a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)};c.prototype.adjustMargins=function(a,c){var b=this.chart,e=this.options,h=this.getAlignment();h&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(g,
f){g.test(h)&&!d(a[f])&&(b[x[f]]=Math.max(b[x[f]],b.legend[(f+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][f]*e[f%2?"x":"y"]+n(e.margin,12)+c[f]+(b.titleOffset[f]||0)))})};c.prototype.proximatePositions=function(){var a=this.chart,c=[],d="left"===this.options.align;this.allItems.forEach(function(b){var e;var h=d;if(b.yAxis){b.xAxis.options.reversed&&(h=!h);b.points&&(e=k(h?b.points:b.points.slice(0).reverse(),function(a){return N(a.plotY)}));h=this.itemMarginTop+b.legendItem.getBBox().height+this.itemMarginBottom;
var g=b.yAxis.top-a.plotTop;b.visible?(e=e?e.plotY:b.yAxis.height,e+=g-.3*h):e=g+b.yAxis.height;c.push({target:e,size:h,item:b})}},this);I.distribute(c,a.plotHeight);c.forEach(function(c){c.item._legendItemPos[1]=a.plotTop-a.spacing[0]+c.pos})};c.prototype.render=function(){var a=this.chart,c=a.renderer,d=this.group,b=this.box,e=this.options,g=this.padding;this.itemX=g;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;this.widthOption=J(e.width,a.spacingBox.width-g);var f=a.spacingBox.width-
2*g-e.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(f/=2);this.maxLegendWidth=this.widthOption||f;d||(this.group=d=c.g("legend").attr({zIndex:7}).add(),this.contentGroup=c.g().attr({zIndex:1}).add(d),this.scrollGroup=c.g().add(this.contentGroup));this.renderTitle();var m=this.getAllItems();E(m,function(a,c){return(a.options&&a.options.legendIndex||0)-(c.options&&c.options.legendIndex||0)});e.reversed&&m.reverse();this.allItems=m;this.display=f=!!m.length;this.itemHeight=this.totalItemWidth=
this.maxItemWidth=this.lastLineHeight=0;m.forEach(this.renderItem,this);m.forEach(this.layoutItem,this);m=(this.widthOption||this.offsetWidth)+g;var k=this.lastItemY+this.lastLineHeight+this.titleHeight;k=this.handleOverflow(k);k+=g;b||(this.box=b=c.rect().addClass("highcharts-legend-box").attr({r:e.borderRadius}).add(d),b.isNew=!0);a.styledMode||b.attr({stroke:e.borderColor,"stroke-width":e.borderWidth||0,fill:e.backgroundColor||"none"}).shadow(e.shadow);0<m&&0<k&&(b[b.isNew?"attr":"animate"](b.crisp.call({},
{x:0,y:0,width:m,height:k},b.strokeWidth())),b.isNew=!1);b[f?"show":"hide"]();a.styledMode&&"none"===d.getStyle("display")&&(m=k=0);this.legendWidth=m;this.legendHeight=k;f&&this.align();this.proximate||this.positionItems();l(this,"afterRender")};c.prototype.align=function(a){void 0===a&&(a=this.chart.spacingBox);var c=this.chart,d=this.options,b=a.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<c.titleOffset[0]?b+=c.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<c.titleOffset[2]&&(b-=c.titleOffset[2]);
b!==a.y&&(a=u(a,{y:b}));this.group.align(u(d,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":d.verticalAlign}),!0,a)};c.prototype.handleOverflow=function(a){var c=this,d=this.chart,b=d.renderer,e=this.options,g=e.y,f=this.padding;g=d.spacingBox.height+("top"===e.verticalAlign?-g:g)-f;var m=e.maxHeight,k,l=this.clipRect,q=e.navigation,t=n(q.animation,!0),p=q.arrowSize||12,u=this.nav,v=this.pages,w,F=this.allItems,S=function(a){"number"===typeof a?l.attr({height:a}):
l&&(c.clipRect=l.destroy(),c.contentGroup.clip());c.contentGroup.div&&(c.contentGroup.div.style.clip=a?"rect("+f+"px,9999px,"+(f+a)+"px,0)":"auto")},K=function(a){c[a]=b.circle(0,0,1.3*p).translate(p/2,p/2).add(u);d.styledMode||c[a].attr("fill","rgba(0,0,0,0.0001)");return c[a]};"horizontal"!==e.layout||"middle"===e.verticalAlign||e.floating||(g/=2);m&&(g=Math.min(g,m));v.length=0;a&&0<g&&a>g&&!1!==q.enabled?(this.clipHeight=k=Math.max(g-20-this.titleHeight-f,0),this.currentPage=n(this.currentPage,
1),this.fullHeight=a,F.forEach(function(a,c){var d=a._legendItemPos[1],b=Math.round(a.legendItem.getBBox().height),e=v.length;if(!e||d-v[e-1]>k&&(w||d)!==v[e-1])v.push(w||d),e++;a.pageIx=e-1;w&&(F[c-1].pageIx=e-1);c===F.length-1&&d+b-v[e-1]>k&&d!==w&&(v.push(d),a.pageIx=e);d!==w&&(w=d)}),l||(l=c.clipRect=b.clipRect(0,f,9999,0),c.contentGroup.clip(l)),S(k),u||(this.nav=u=b.g().attr({zIndex:1}).add(this.group),this.up=b.symbol("triangle",0,0,p,p).add(u),K("upTracker").on("click",function(){c.scroll(-1,
t)}),this.pager=b.text("",15,10).addClass("highcharts-legend-navigation"),d.styledMode||this.pager.css(q.style),this.pager.add(u),this.down=b.symbol("triangle-down",0,0,p,p).add(u),K("downTracker").on("click",function(){c.scroll(1,t)})),c.scroll(0),a=g):u&&(S(),this.nav=u.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a};c.prototype.scroll=function(a,c){var d=this,b=this.chart,e=this.pages,h=e.length,g=this.currentPage+a;a=this.clipHeight;var f=this.options.navigation,k=
this.pager,q=this.padding;g>h&&(g=h);0<g&&("undefined"!==typeof c&&C(c,b),this.nav.attr({translateX:q,translateY:a+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(a){a.attr({"class":1===g?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),k.attr({text:g+"/"+h}),[this.down,this.downTracker].forEach(function(a){a.attr({x:18+this.pager.getBBox().width,"class":g===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),
b.styledMode||(this.up.attr({fill:1===g?f.inactiveColor:f.activeColor}),this.upTracker.css({cursor:1===g?"default":"pointer"}),this.down.attr({fill:g===h?f.inactiveColor:f.activeColor}),this.downTracker.css({cursor:g===h?"default":"pointer"})),this.scrollOffset=-e[g-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=g,this.positionCheckboxes(),c=D(n(c,b.renderer.globalAnimation,!0)),m(function(){l(d,"afterScroll",{currentPage:g})},c.duration))};c.prototype.setItemEvents=
function(a,c,d){var b=this,e=b.chart.renderer.boxWrapper,h=a instanceof z,g="highcharts-legend-"+(h?"point":"series")+"-active",f=b.chart.styledMode;(d?[c,a.legendSymbol]:[a.legendGroup]).forEach(function(d){if(d)d.on("mouseover",function(){a.visible&&b.allItems.forEach(function(c){a!==c&&c.setState("inactive",!h)});a.setState("hover");a.visible&&e.addClass(g);f||c.css(b.options.itemHoverStyle)}).on("mouseout",function(){b.chart.styledMode||c.css(u(a.visible?b.itemStyle:b.itemHiddenStyle));b.allItems.forEach(function(c){a!==
c&&c.setState("",!h)});e.removeClass(g);a.setState()}).on("click",function(c){var d=function(){a.setVisible&&a.setVisible();b.allItems.forEach(function(c){a!==c&&c.setState(a.visible?"inactive":"",!h)})};e.removeClass(g);c={browserEvent:c};a.firePointEvent?a.firePointEvent("legendItemClick",c,d):l(a,"legendItemClick",c,d)})})};c.prototype.createCheckboxForItem=function(a){a.checkbox=v("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,
this.chart.container);w(a.checkbox,"click",function(c){l(a.series||a,"checkboxClick",{checked:c.target.checked,item:a},function(){a.select()})})};return c}();(/Trident\/7\.0/.test(b.navigator&&b.navigator.userAgent)||e)&&H(c.prototype,"positionItem",function(c,a){var d=this,b=function(){a._legendItemPos&&c.call(d,a)};b();d.bubbleLegend||setTimeout(b)});I.Legend=c;return I.Legend});O(e,"Core/Series/SeriesRegistry.js",[e["Core/Globals.js"],e["Core/Options.js"],e["Core/Series/Point.js"],e["Core/Utilities.js"]],
function(e,b,I,z){var D=b.defaultOptions,G=z.error,C=z.extendClass,B=z.merge,x;(function(b){function v(e,d){var f=D.plotOptions||{},k=d.defaultOptions;d.prototype.pointClass||(d.prototype.pointClass=I);d.prototype.type=e;k&&(f[e]=k);b.seriesTypes[e]=d}b.seriesTypes=e.seriesTypes;b.getSeries=function(e,d){void 0===d&&(d={});var f=e.options.chart;f=d.type||f.type||f.defaultSeriesType||"";var k=b.seriesTypes[f];b||G(17,!0,e,{missingModuleFor:f});f=new k;"function"===typeof f.init&&f.init(e,d);return f};
b.registerSeriesType=v;b.seriesType=function(e,d,q,k,l){var f=D.plotOptions||{};d=d||"";f[e]=B(f[d],q);v(e,C(b.seriesTypes[d]||function(){},k));b.seriesTypes[e].prototype.type=e;l&&(b.seriesTypes[e].prototype.pointClass=C(I,l));return b.seriesTypes[e]}})(x||(x={}));e.seriesType=x.seriesType;return x});O(e,"Core/Chart/Chart.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Axis/Axis.js"],e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Legend.js"],e["Core/MSPointer.js"],e["Core/Options.js"],
e["Core/Color/Palette.js"],e["Core/Pointer.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Time.js"],e["Core/Utilities.js"],e["Core/Renderer/HTML/AST.js"]],function(e,b,I,z,H,G,C,B,x,w,v,f,d){var q=e.animate,k=e.animObject,l=e.setAnimation,D=I.numberFormat,u=z.charts,n=z.doc,J=z.win,E=C.defaultOptions,m=C.defaultTime,c=w.seriesTypes,g=f.addEvent,a=f.attr,h=f.cleanRecursively,r=f.createElement,A=f.css,y=f.defined,L=f.discardElement,P=f.erase,R=f.error,V=f.extend,Q=f.find,M=f.fireEvent,t=f.getStyle,
p=f.isArray,O=f.isFunction,Z=f.isNumber,ea=f.isObject,F=f.isString,S=f.merge,K=f.objectEach,T=f.pick,X=f.pInt,U=f.relativeLength,fa=f.removeEvent,Y=f.splat,ba=f.syncTimeout,ha=f.uniqueKey,ca=z.marginNames,aa=function(){function e(a,c,d){this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.container=this.colorCounter=
this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.sharedClips={};this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=void 0;this.getArgs(a,c,d)}e.prototype.getArgs=function(a,c,d){F(a)||a.nodeName?(this.renderTo=a,this.init(c,d)):this.init(a,c)};e.prototype.init=function(a,c){var d=a.plotOptions||{};M(this,"init",{args:arguments},function(){var b=S(E,a),e=b.chart;K(b.plotOptions,function(a,
c){ea(a)&&(a.tooltip=d[c]&&S(d[c].tooltip)||void 0)});b.tooltip.userOptions=a.chart&&a.chart.forExport&&a.tooltip.userOptions||a.tooltip;this.userOptions=a;var h=e.events;this.margin=[];this.spacing=[];this.bounds={h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=b;this.axes=[];this.series=[];this.time=a.time&&Object.keys(a.time).length?new v(a.time):z.time;this.numberFormatter=e.numberFormatter||D;this.styledMode=e.styledMode;this.hasCartesianSeries=e.showAxes;var f=
this;f.index=u.length;u.push(f);z.chartCount++;h&&K(h,function(a,c){O(a)&&g(f,c,a)});f.xAxis=[];f.yAxis=[];f.pointCount=f.colorCounter=f.symbolCounter=0;M(f,"afterInit");f.firstRender()})};e.prototype.initSeries=function(a){var d=this.options.chart;d=a.type||d.type||d.defaultSeriesType;var b=c[d];b||R(17,!0,this,{missingModuleFor:d});d=new b;"function"===typeof d.init&&d.init(this,a);return d};e.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(a){a.points||a.data||
!a.enabledDataSorting||a.setData(a.options.data,!1)})};e.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(a,c){return a.linkedSeries.length||c.linkedSeries.length?c.linkedSeries.length-a.linkedSeries.length:0})};e.prototype.orderSeries=function(a){var c=this.series;for(a=a||0;a<c.length;a++)c[a]&&(c[a].index=a,c[a].name=c[a].getName())};e.prototype.isInsidePlot=function(a,c,d){void 0===d&&(d={});var b=this.inverted,e=this.plotBox,h=this.plotLeft,g=this.plotTop,
f=this.scrollablePlotBox,m=this.scrollingContainer;m=void 0===m?{scrollLeft:0,scrollTop:0}:m;var k=m.scrollLeft;m=m.scrollTop;var l=d.series;e=d.visiblePlotOnly&&f||e;f=d.inverted?c:a;c=d.inverted?a:c;a={x:f,y:c,isInsidePlot:!0};if(!d.ignoreX){var F=l&&(b?l.yAxis:l.xAxis)||{pos:h,len:Infinity};f=d.paneCoordinates?F.pos+f:h+f;f>=Math.max(k+h,F.pos)&&f<=Math.min(k+h+e.width,F.pos+F.len)||(a.isInsidePlot=!1)}!d.ignoreY&&a.isInsidePlot&&(b=l&&(b?l.xAxis:l.yAxis)||{pos:g,len:Infinity},d=d.paneCoordinates?
b.pos+c:g+c,d>=Math.max(m+g,b.pos)&&d<=Math.min(m+g+e.height,b.pos+b.len)||(a.isInsidePlot=!1));M(this,"afterIsInsidePlot",a);return a.isInsidePlot};e.prototype.redraw=function(a){M(this,"beforeRedraw");var c=this.hasCartesianSeries?this.axes:this.colorAxis||[],d=this.series,b=this.pointer,e=this.legend,h=this.userOptions.legend,g=this.isDirtyLegend,f=this.isDirtyBox,m=this.renderer,k=m.isHidden(),F=[];this.setResponsive&&this.setResponsive(!1);l(this.hasRendered?a:!1,this);k&&this.temporaryDisplay();
this.layOutTitles();for(a=d.length;a--;){var n=d[a];if(n.options.stacking||n.options.centerInCategory){var r=!0;if(n.isDirty){var K=!0;break}}}if(K)for(a=d.length;a--;)n=d[a],n.options.stacking&&(n.isDirty=!0);d.forEach(function(a){a.isDirty&&("point"===a.options.legendType?("function"===typeof a.updateTotals&&a.updateTotals(),g=!0):h&&(h.labelFormatter||h.labelFormat)&&(g=!0));a.isDirtyData&&M(a,"updatedData")});g&&e&&e.options.enabled&&(e.render(),this.isDirtyLegend=!1);r&&this.getStacks();c.forEach(function(a){a.updateNames();
a.setScale()});this.getMargins();c.forEach(function(a){a.isDirty&&(f=!0)});c.forEach(function(a){var c=a.min+","+a.max;a.extKey!==c&&(a.extKey=c,F.push(function(){M(a,"afterSetExtremes",V(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(f||r)&&a.redraw()});f&&this.drawChartBox();M(this,"predraw");d.forEach(function(a){(f||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});b&&b.reset(!0);m.draw();M(this,"redraw");M(this,"render");k&&this.temporaryDisplay(!0);F.forEach(function(a){a.call()})};
e.prototype.get=function(a){function c(c){return c.id===a||c.options&&c.options.id===a}var d=this.series,b;var e=Q(this.axes,c)||Q(this.series,c);for(b=0;!e&&b<d.length;b++)e=Q(d[b].points||[],c);return e};e.prototype.getAxes=function(){var a=this,c=this.options,d=c.xAxis=Y(c.xAxis||{});c=c.yAxis=Y(c.yAxis||{});M(this,"getAxes");d.forEach(function(a,c){a.index=c;a.isX=!0});c.forEach(function(a,c){a.index=c});d.concat(c).forEach(function(c){new b(a,c)});M(this,"afterGetAxes")};e.prototype.getSelectedPoints=
function(){var a=[];this.series.forEach(function(c){a=a.concat(c.getPointsCollection().filter(function(a){return T(a.selectedStaging,a.selected)}))});return a};e.prototype.getSelectedSeries=function(){return this.series.filter(function(a){return a.selected})};e.prototype.setTitle=function(a,c,d){this.applyDescription("title",a);this.applyDescription("subtitle",c);this.applyDescription("caption",void 0);this.layOutTitles(d)};e.prototype.applyDescription=function(a,c){var d=this,b="title"===a?{color:B.neutralColor80,
fontSize:this.options.isStock?"16px":"18px"}:{color:B.neutralColor60};b=this.options[a]=S(!this.styledMode&&{style:b},this.options[a],c);var e=this[a];e&&c&&(this[a]=e=e.destroy());b&&!e&&(e=this.renderer.text(b.text,0,0,b.useHTML).attr({align:b.align,"class":"highcharts-"+a,zIndex:b.zIndex||4}).add(),e.update=function(c){d[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[a]](c)},this.styledMode||e.css(b.style),this[a]=e)};e.prototype.layOutTitles=function(a){var c=[0,0,0],d=this.renderer,
b=this.spacingBox;["title","subtitle","caption"].forEach(function(a){var e=this[a],h=this.options[a],g=h.verticalAlign||"top";a="title"===a?-3:"top"===g?c[0]+2:0;if(e){if(!this.styledMode)var f=h.style.fontSize;f=d.fontMetrics(f,e).b;e.css({width:(h.width||b.width+(h.widthAdjust||0))+"px"});var m=Math.round(e.getBBox(h.useHTML).height);e.align(V({y:"bottom"===g?f:a+f,height:m},h),!1,"spacingBox");h.floating||("top"===g?c[0]=Math.ceil(c[0]+m):"bottom"===g&&(c[2]=Math.ceil(c[2]+m)))}},this);c[0]&&"top"===
(this.options.title.verticalAlign||"top")&&(c[0]+=this.options.title.margin);c[2]&&"bottom"===this.options.caption.verticalAlign&&(c[2]+=this.options.caption.margin);var e=!this.titleOffset||this.titleOffset.join(",")!==c.join(",");this.titleOffset=c;M(this,"afterLayOutTitles");!this.isDirtyBox&&e&&(this.isDirtyBox=this.isDirtyLegend=e,this.hasRendered&&T(a,!0)&&this.isDirtyBox&&this.redraw())};e.prototype.getChartSize=function(){var a=this.options.chart,c=a.width;a=a.height;var d=this.renderTo;y(c)||
(this.containerWidth=t(d,"width"));y(a)||(this.containerHeight=t(d,"height"));this.chartWidth=Math.max(0,c||this.containerWidth||600);this.chartHeight=Math.max(0,U(a,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};e.prototype.temporaryDisplay=function(a){var c=this.renderTo;if(a)for(;c&&c.style;)c.hcOrigStyle&&(A(c,c.hcOrigStyle),delete c.hcOrigStyle),c.hcOrigDetached&&(n.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){n.body.contains(c)||c.parentNode||
(c.hcOrigDetached=!0,n.body.appendChild(c));if("none"===t(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},a={display:"block",overflow:"hidden"},c!==this.renderTo&&(a.height=0),A(c,a),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;if(c===n.body)break}};e.prototype.setClassName=function(a){this.container.className="highcharts-container "+(a||"")};e.prototype.getContainer=function(){var c=this.options,
d=c.chart;var b=this.renderTo;var e=ha(),h,g;b||(this.renderTo=b=d.renderTo);F(b)&&(this.renderTo=b=n.getElementById(b));b||R(13,!0,this);var f=X(a(b,"data-highcharts-chart"));Z(f)&&u[f]&&u[f].hasRendered&&u[f].destroy();a(b,"data-highcharts-chart",this.index);b.innerHTML="";d.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();f=this.chartWidth;var m=this.chartHeight;A(b,{overflow:"hidden"});this.styledMode||(h=V({position:"relative",overflow:"hidden",width:f+"px",height:m+"px",
textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},d.style||{}));this.container=b=r("div",{id:e},h,b);this._cursor=b.style.cursor;this.renderer=new (z[d.renderer]||z.Renderer)(b,f,m,null,d.forExport,c.exporting&&c.exporting.allowHTML,this.styledMode);l(void 0,this);this.setClassName(d.className);if(this.styledMode)for(g in c.defs)this.renderer.definition(c.defs[g]);else this.renderer.setStyle(d.style);
this.renderer.chartIndex=this.index;M(this,"afterGetContainer")};e.prototype.getMargins=function(a){var c=this.spacing,d=this.margin,b=this.titleOffset;this.resetMargins();b[0]&&!y(d[0])&&(this.plotTop=Math.max(this.plotTop,b[0]+c[0]));b[2]&&!y(d[2])&&(this.marginBottom=Math.max(this.marginBottom,b[2]+c[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(d,c);M(this,"getMargins");a||this.getAxisMargins()};e.prototype.getAxisMargins=function(){var a=this,c=a.axisOffset=[0,0,0,0],d=a.colorAxis,
b=a.margin,e=function(a){a.forEach(function(a){a.visible&&a.getOffset()})};a.hasCartesianSeries?e(a.axes):d&&d.length&&e(d);ca.forEach(function(d,e){y(b[e])||(a[d]+=c[e])});a.setChartSize()};e.prototype.reflow=function(a){var c=this,d=c.options.chart,b=c.renderTo,e=y(d.width)&&y(d.height),h=d.width||t(b,"width");d=d.height||t(b,"height");b=a?a.target:J;delete c.pointer.chartPosition;if(!e&&!c.isPrinting&&h&&d&&(b===J||b===n)){if(h!==c.containerWidth||d!==c.containerHeight)f.clearTimeout(c.reflowTimeout),
c.reflowTimeout=ba(function(){c.container&&c.setSize(void 0,void 0,!1)},a?100:0);c.containerWidth=h;c.containerHeight=d}};e.prototype.setReflow=function(a){var c=this;!1===a||this.unbindReflow?!1===a&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=g(J,"resize",function(a){c.options&&c.reflow(a)}),g(this,"destroy",this.unbindReflow))};e.prototype.setSize=function(a,c,d){var b=this,e=b.renderer;b.isResizing+=1;l(d,b);d=e.globalAnimation;b.oldChartHeight=b.chartHeight;
b.oldChartWidth=b.chartWidth;"undefined"!==typeof a&&(b.options.chart.width=a);"undefined"!==typeof c&&(b.options.chart.height=c);b.getChartSize();b.styledMode||(d?q:A)(b.container,{width:b.chartWidth+"px",height:b.chartHeight+"px"},d);b.setChartSize(!0);e.setSize(b.chartWidth,b.chartHeight,d);b.axes.forEach(function(a){a.isDirty=!0;a.setScale()});b.isDirtyLegend=!0;b.isDirtyBox=!0;b.layOutTitles();b.getMargins();b.redraw(d);b.oldChartHeight=null;M(b,"resize");ba(function(){b&&M(b,"endResize",null,
function(){--b.isResizing})},k(d).duration)};e.prototype.setChartSize=function(a){var c=this.inverted,d=this.renderer,b=this.chartWidth,e=this.chartHeight,h=this.options.chart,g=this.spacing,f=this.clipOffset,m,l,k,F;this.plotLeft=m=Math.round(this.plotLeft);this.plotTop=l=Math.round(this.plotTop);this.plotWidth=k=Math.max(0,Math.round(b-m-this.marginRight));this.plotHeight=F=Math.max(0,Math.round(e-l-this.marginBottom));this.plotSizeX=c?F:k;this.plotSizeY=c?k:F;this.plotBorderWidth=h.plotBorderWidth||
0;this.spacingBox=d.spacingBox={x:g[3],y:g[0],width:b-g[3]-g[1],height:e-g[0]-g[2]};this.plotBox=d.plotBox={x:m,y:l,width:k,height:F};e=2*Math.floor(this.plotBorderWidth/2);c=Math.ceil(Math.max(e,f[3])/2);b=Math.ceil(Math.max(e,f[0])/2);this.clipBox={x:c,y:b,width:Math.floor(this.plotSizeX-Math.max(e,f[1])/2-c),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(e,f[2])/2-b))};a||(this.axes.forEach(function(a){a.setAxisSize();a.setAxisTranslation()}),d.alignElements());M(this,"afterSetChartSize",
{skipAxes:a})};e.prototype.resetMargins=function(){M(this,"resetMargins");var a=this,c=a.options.chart;["margin","spacing"].forEach(function(d){var b=c[d],e=ea(b)?b:[b,b,b,b];["Top","Right","Bottom","Left"].forEach(function(b,h){a[d][h]=T(c[d+b],e[h])})});ca.forEach(function(c,d){a[c]=T(a.margin[d],a.spacing[d])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]};e.prototype.drawChartBox=function(){var a=this.options.chart,c=this.renderer,d=this.chartWidth,b=this.chartHeight,e=this.chartBackground,h=
this.plotBackground,g=this.plotBorder,f=this.styledMode,m=this.plotBGImage,k=a.backgroundColor,l=a.plotBackgroundColor,F=a.plotBackgroundImage,n,r=this.plotLeft,K=this.plotTop,q=this.plotWidth,p=this.plotHeight,u=this.plotBox,v=this.clipRect,t=this.clipBox,w="animate";e||(this.chartBackground=e=c.rect().addClass("highcharts-background").add(),w="attr");if(f)var y=n=e.strokeWidth();else{y=a.borderWidth||0;n=y+(a.shadow?8:0);k={fill:k||"none"};if(y||e["stroke-width"])k.stroke=a.borderColor,k["stroke-width"]=
y;e.attr(k).shadow(a.shadow)}e[w]({x:n/2,y:n/2,width:d-n-y%2,height:b-n-y%2,r:a.borderRadius});w="animate";h||(w="attr",this.plotBackground=h=c.rect().addClass("highcharts-plot-background").add());h[w](u);f||(h.attr({fill:l||"none"}).shadow(a.plotShadow),F&&(m?(F!==m.attr("href")&&m.attr("href",F),m.animate(u)):this.plotBGImage=c.image(F,r,K,q,p).add()));v?v.animate({width:t.width,height:t.height}):this.clipRect=c.clipRect(t);w="animate";g||(w="attr",this.plotBorder=g=c.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());
f||g.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||0,fill:"none"});g[w](g.crisp({x:r,y:K,width:q,height:p},-g.strokeWidth()));this.isDirtyBox=!1;M(this,"afterDrawChartBox")};e.prototype.propFromSeries=function(){var a=this,d=a.options.chart,b,e=a.options.series,h,g;["inverted","angular","polar"].forEach(function(f){b=c[d.type||d.defaultSeriesType];g=d[f]||b&&b.prototype[f];for(h=e&&e.length;!g&&h--;)(b=c[e[h].type])&&b.prototype[f]&&(g=!0);a[f]=g})};e.prototype.linkSeries=function(){var a=
this,c=a.series;c.forEach(function(a){a.linkedSeries.length=0});c.forEach(function(c){var d=c.options.linkedTo;F(d)&&(d=":previous"===d?a.series[c.index-1]:a.get(d))&&d.linkedParent!==c&&(d.linkedSeries.push(c),c.linkedParent=d,d.enabledDataSorting&&c.setDataSortingOptions(),c.visible=T(c.options.visible,d.options.visible,c.visible))});M(this,"afterLinkSeries")};e.prototype.renderSeries=function(){this.series.forEach(function(a){a.translate();a.render()})};e.prototype.renderLabels=function(){var a=
this,c=a.options.labels;c.items&&c.items.forEach(function(d){var b=V(c.style,d.style),e=X(b.left)+a.plotLeft,h=X(b.top)+a.plotTop+12;delete b.left;delete b.top;a.renderer.text(d.html,e,h).attr({zIndex:2}).css(b).add()})};e.prototype.render=function(){var a=this.axes,c=this.colorAxis,d=this.renderer,b=this.options,e=0,h=function(a){a.forEach(function(a){a.visible&&a.render()})};this.setTitle();this.legend=new H(this,b.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();
b=this.plotWidth;a.some(function(a){if(a.horiz&&a.visible&&a.options.labels.enabled&&a.series.length)return e=21,!0});var g=this.plotHeight=Math.max(this.plotHeight-e,0);a.forEach(function(a){a.setScale()});this.getAxisMargins();var f=1.1<b/this.plotWidth;var m=1.05<g/this.plotHeight;if(f||m)a.forEach(function(a){(a.horiz&&f||!a.horiz&&m)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?h(a):c&&c.length&&h(c);this.seriesGroup||(this.seriesGroup=d.g("series-group").attr({zIndex:3}).add());
this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0};e.prototype.addCredits=function(a){var c=this,d=S(!0,this.options.credits,a);d.enabled&&!this.credits&&(this.credits=this.renderer.text(d.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){d.href&&(J.location.href=d.href)}).attr({align:d.position.align,zIndex:8}),c.styledMode||this.credits.css(d.style),this.credits.add().align(d.position),this.credits.update=
function(a){c.credits=c.credits.destroy();c.addCredits(a)})};e.prototype.destroy=function(){var a=this,c=a.axes,d=a.series,b=a.container,e,h=b&&b.parentNode;M(a,"destroy");a.renderer.forExport?P(u,a):u[a.index]=void 0;z.chartCount--;a.renderTo.removeAttribute("data-highcharts-chart");fa(a);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=d.length;e--;)d[e]=d[e].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(c){var d=
a[c];d&&d.destroy&&(a[c]=d.destroy())});b&&(b.innerHTML="",fa(b),h&&L(b));K(a,function(c,d){delete a[d]})};e.prototype.firstRender=function(){var a=this,c=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();(p(c.series)?c.series:[]).forEach(function(c){a.initSeries(c)});a.linkSeries();a.setSeriesData();M(a,"beforeRender");x&&(a.pointer=z.hasTouch||!J.PointerEvent&&!J.MSPointerEvent?new x(a,c):new G(a,c));a.render();
a.pointer.getChartPosition();if(!a.renderer.imgCount&&!a.hasLoaded)a.onload();a.temporaryDisplay(!0)}};e.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(a){a&&"undefined"!==typeof this.index&&a.apply(this,[this])},this);M(this,"load");M(this,"render");y(this.index)&&this.setReflow(this.options.chart.reflow);this.hasLoaded=!0};e.prototype.addSeries=function(a,c,d){var b,e=this;a&&(c=T(c,!0),M(e,"addSeries",{options:a},function(){b=e.initSeries(a);e.isDirtyLegend=
!0;e.linkSeries();b.enabledDataSorting&&b.setData(a.data,!1);M(e,"afterAddSeries",{series:b});c&&e.redraw(d)}));return b};e.prototype.addAxis=function(a,c,d,b){return this.createAxis(c?"xAxis":"yAxis",{axis:a,redraw:d,animation:b})};e.prototype.addColorAxis=function(a,c,d){return this.createAxis("colorAxis",{axis:a,redraw:c,animation:d})};e.prototype.createAxis=function(a,c){var d="colorAxis"===a,e=c.redraw,h=c.animation;a=S(c.axis,{index:this[a].length,isX:"xAxis"===a});a=d?new z.ColorAxis(this,
a):new b(this,a);d&&(this.isDirtyLegend=!0,this.axes.forEach(function(a){a.series=[]}),this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0}));T(e,!0)&&this.redraw(h);return a};e.prototype.showLoading=function(a){var c=this,b=c.options,e=c.loadingDiv,h=c.loadingSpan,f=b.loading,m=function(){e&&A(e,{left:c.plotLeft+"px",top:c.plotTop+"px",width:c.plotWidth+"px",height:c.plotHeight+"px"})};e||(c.loadingDiv=e=r("div",{className:"highcharts-loading highcharts-loading-hidden"},null,c.container));
h||(c.loadingSpan=h=r("span",{className:"highcharts-loading-inner"},null,e),g(c,"redraw",m));e.className="highcharts-loading";d.setElementHTML(h,T(a,b.lang.loading,""));c.styledMode||(A(e,V(f.style,{zIndex:10})),A(h,f.labelStyle),c.loadingShown||(A(e,{opacity:0,display:""}),q(e,{opacity:f.style.opacity||.5},{duration:f.showDuration||0})));c.loadingShown=!0;m()};e.prototype.hideLoading=function(){var a=this.options,c=this.loadingDiv;c&&(c.className="highcharts-loading highcharts-loading-hidden",this.styledMode||
q(c,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){A(c,{display:"none"})}}));this.loadingShown=!1};e.prototype.update=function(a,c,d,b){var e=this,g={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},f,k,l,n=a.isResponsiveOptions,r=[];M(e,"update",{options:a});n||e.setResponsive(!1,!0);a=h(a,e.options);e.userOptions=S(e.userOptions,a);if(f=a.chart){S(!0,e.options.chart,f);"className"in f&&e.setClassName(f.className);"reflow"in f&&e.setReflow(f.reflow);
if("inverted"in f||"polar"in f||"type"in f){e.propFromSeries();var q=!0}"alignTicks"in f&&(q=!0);K(f,function(a,c){-1!==e.propsRequireUpdateSeries.indexOf("chart."+c)&&(k=!0);-1!==e.propsRequireDirtyBox.indexOf(c)&&(e.isDirtyBox=!0);-1!==e.propsRequireReflow.indexOf(c)&&(n?e.isDirtyBox=!0:l=!0)});!e.styledMode&&"style"in f&&e.renderer.setStyle(f.style)}!e.styledMode&&a.colors&&(this.options.colors=a.colors);a.time&&(this.time===m&&(this.time=new v(a.time)),S(!0,e.options.time,a.time));K(a,function(c,
d){if(e[d]&&"function"===typeof e[d].update)e[d].update(c,!1);else if("function"===typeof e[g[d]])e[g[d]](c);else"colors"!==d&&-1===e.collectionsWithUpdate.indexOf(d)&&S(!0,e.options[d],a[d]);"chart"!==d&&-1!==e.propsRequireUpdateSeries.indexOf(d)&&(k=!0)});this.collectionsWithUpdate.forEach(function(c){if(a[c]){var b=[];e[c].forEach(function(a,c){a.options.isInternal||b.push(T(a.options.index,c))});Y(a[c]).forEach(function(a,h){var g=y(a.id),f;g&&(f=e.get(a.id));!f&&e[c]&&(f=e[c][b?b[h]:h])&&g&&
y(f.options.id)&&(f=void 0);f&&f.coll===c&&(f.update(a,!1),d&&(f.touched=!0));!f&&d&&e.collectionsWithInit[c]&&(e.collectionsWithInit[c][0].apply(e,[a].concat(e.collectionsWithInit[c][1]||[]).concat([!1])).touched=!0)});d&&e[c].forEach(function(a){a.touched||a.options.isInternal?delete a.touched:r.push(a)})}});r.forEach(function(a){a.chart&&a.remove(!1)});q&&e.axes.forEach(function(a){a.update({},!1)});k&&e.getSeriesOrderByLinks().forEach(function(a){a.chart&&a.update({},!1)},this);q=f&&f.width;f=
f&&f.height;F(f)&&(f=U(f,q||e.chartWidth));l||Z(q)&&q!==e.chartWidth||Z(f)&&f!==e.chartHeight?e.setSize(q,f,b):T(c,!0)&&e.redraw(b);M(e,"afterUpdate",{options:a,redraw:c,animation:b})};e.prototype.setSubtitle=function(a,c){this.applyDescription("subtitle",a);this.layOutTitles(c)};e.prototype.setCaption=function(a,c){this.applyDescription("caption",a);this.layOutTitles(c)};e.prototype.showResetZoom=function(){function a(){c.zoomOut()}var c=this,d=E.lang,b=c.options.chart.resetZoomButton,e=b.theme,
h=e.states,g="chart"===b.relativeTo||"spacingBox"===b.relativeTo?null:"scrollablePlotBox";M(this,"beforeShowResetZoom",null,function(){c.resetZoomButton=c.renderer.button(d.resetZoom,null,null,a,e,h&&h.hover).attr({align:b.position.align,title:d.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(b.position,!1,g)});M(this,"afterShowResetZoom")};e.prototype.zoomOut=function(){M(this,"selection",{resetSelection:!0},this.zoom)};e.prototype.zoom=function(a){var c=this,d,b=c.pointer,e=!1,h=
c.inverted?b.mouseDownX:b.mouseDownY;!a||a.resetSelection?(c.axes.forEach(function(a){d=a.zoom()}),b.initiated=!1):a.xAxis.concat(a.yAxis).forEach(function(a){var g=a.axis,f=c.inverted?g.left:g.top,m=c.inverted?f+g.width:f+g.height,k=g.isXAxis,l=!1;if(!k&&h>=f&&h<=m||k||!y(h))l=!0;b[k?"zoomX":"zoomY"]&&l&&(d=g.zoom(a.min,a.max),g.displayBtn&&(e=!0))});var g=c.resetZoomButton;e&&!g?c.showResetZoom():!e&&ea(g)&&(c.resetZoomButton=g.destroy());d&&c.redraw(T(c.options.chart.animation,a&&a.animation,100>
c.pointCount))};e.prototype.pan=function(a,c){var d=this,b=d.hoverPoints,e=d.options.chart,h=d.options.mapNavigation&&d.options.mapNavigation.enabled,g;c="object"===typeof c?c:{enabled:c,type:"x"};e&&e.panning&&(e.panning=c);var f=c.type;M(this,"pan",{originalEvent:a},function(){b&&b.forEach(function(a){a.setState()});var c=[1];"xy"===f?c=[1,0]:"y"===f&&(c=[0]);c.forEach(function(c){var b=d[c?"xAxis":"yAxis"][0],e=b.horiz,m=a[e?"chartX":"chartY"];e=e?"mouseDownX":"mouseDownY";var k=d[e],l=(b.pointRange||
0)/2,F=b.reversed&&!d.inverted||!b.reversed&&d.inverted?-1:1,n=b.getExtremes(),r=b.toValue(k-m,!0)+l*F;F=b.toValue(k+b.len-m,!0)-l*F;var K=F<r;k=K?F:r;r=K?r:F;F=b.hasVerticalPanning();var q=b.panningState;!F||c||q&&!q.isDirty||b.series.forEach(function(a){var c=a.getProcessedData(!0);c=a.getExtremes(c.yData,!0);q||(q={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});Z(c.dataMin)&&Z(c.dataMax)&&(q.startMin=Math.min(T(a.options.threshold,Infinity),c.dataMin,q.startMin),q.startMax=Math.max(T(a.options.threshold,
-Infinity),c.dataMax,q.startMax))});c=Math.min(T(q&&q.startMin,n.dataMin),l?n.min:b.toValue(b.toPixels(n.min)-b.minPixelPadding));l=Math.max(T(q&&q.startMax,n.dataMax),l?n.max:b.toValue(b.toPixels(n.max)+b.minPixelPadding));b.panningState=q;b.isOrdinal||(F=c-k,0<F&&(r+=F,k=c),F=r-l,0<F&&(r=l,k-=F),b.series.length&&k!==n.min&&r!==n.max&&k>=c&&r<=l&&(b.setExtremes(k,r,!1,!1,{trigger:"pan"}),d.resetZoomButton||h||k===c||r===l||!f.match("y")||(d.showResetZoom(),b.displayBtn=!1),g=!0),d[e]=m)});g&&d.redraw(!1);
A(d.container,{cursor:"move"})})};return e}();V(aa.prototype,{callbacks:[],collectionsWithInit:{xAxis:[aa.prototype.addAxis,[!0]],yAxis:[aa.prototype.addAxis,[!1]],series:[aa.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","zAxis","series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")});z.chart=function(a,c,d){return new aa(a,c,d)};z.Chart=aa;"";return aa});O(e,"Mixins/LegendSymbol.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b){var D=b.merge,z=b.pick;return e.LegendSymbolMixin={drawRectangle:function(b,e){var D=b.symbolHeight,B=b.options.squareSymbol;e.legendSymbol=this.chart.renderer.rect(B?(b.symbolWidth-D)/2:0,b.baseline-D+1,B?
D:b.symbolWidth,D,z(b.options.symbolRadius,D/2)).addClass("highcharts-point").attr({zIndex:3}).add(e.legendGroup)},drawLineMarker:function(b){var e=this.options,C=e.marker,B=b.symbolWidth,x=b.symbolHeight,w=x/2,v=this.chart.renderer,f=this.legendGroup;b=b.baseline-Math.round(.3*b.fontMetrics.b);var d={};this.chart.styledMode||(d={"stroke-width":e.lineWidth||0},e.dashStyle&&(d.dashstyle=e.dashStyle));this.legendLine=v.path([["M",0,b],["L",B,b]]).addClass("highcharts-graph").attr(d).add(f);C&&!1!==
C.enabled&&B&&(e=Math.min(z(C.radius,w),w),0===this.symbol.indexOf("url")&&(C=D(C,{width:x,height:x}),e=0),this.legendSymbol=C=v.symbol(this.symbol,B/2-e,b-e,2*e,2*e,C).addClass("highcharts-point").add(f),C.isMarker=!0)}}});O(e,"Core/Series/Series.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Globals.js"],e["Mixins/LegendSymbol.js"],e["Core/Options.js"],e["Core/Color/Palette.js"],e["Core/Series/Point.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Renderer/SVG/SVGElement.js"],e["Core/Utilities.js"]],
function(e,b,I,z,H,G,C,B,x){var w=e.animObject,v=e.setAnimation,f=b.hasTouch,d=b.svg,q=b.win,k=z.defaultOptions,l=C.seriesTypes,D=x.addEvent,u=x.arrayMax,n=x.arrayMin,J=x.clamp,E=x.cleanRecursively,m=x.correctFloat,c=x.defined,g=x.erase,a=x.error,h=x.extend,r=x.find,A=x.fireEvent,y=x.getNestedProperty,L=x.isArray,P=x.isFunction,R=x.isNumber,V=x.isString,Q=x.merge,M=x.objectEach,t=x.pick,p=x.removeEvent,O=x.splat,Z=x.syncTimeout;e=function(){function b(){this.zones=this.yAxis=this.xAxis=this.userOptions=
this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}b.prototype.init=function(a,c){A(this,"init",{options:c});var d=this,b=a.series,e;this.eventOptions=this.eventOptions||{};this.eventsToUnbind=[];d.chart=a;d.options=d.setOptions(c);var g=d.options;d.linkedSeries=[];d.bindAxes();h(d,{name:g.name,state:"",visible:!1!==g.visible,selected:!0===g.selected});c=g.events;
M(c,function(a,c){P(a)&&d.eventOptions[c]!==a&&(P(d.eventOptions[c])&&p(d,c,d.eventOptions[c]),d.eventOptions[c]=a,D(d,c,a))});if(c&&c.click||g.point&&g.point.events&&g.point.events.click||g.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();d.parallelArrays.forEach(function(a){d[a+"Data"]||(d[a+"Data"]=[])});d.isCartesian&&(a.hasCartesianSeries=!0);b.length&&(e=b[b.length-1]);d._i=t(e&&e._i,-1)+1;d.opacity=d.options.opacity;a.orderSeries(this.insert(b));g.dataSorting&&g.dataSorting.enabled?
d.setDataSortingOptions():d.points||d.data||d.setData(g.data,!1);A(this,"afterInit")};b.prototype.is=function(a){return l[a]&&this instanceof l[a]};b.prototype.insert=function(a){var c=this.options.index,d;if(R(c)){for(d=a.length;d--;)if(c>=t(a[d].options.index,a[d]._i)){a.splice(d+1,0,this);break}-1===d&&a.unshift(this);d+=1}else a.push(this);return t(d,a.length-1)};b.prototype.bindAxes=function(){var c=this,d=c.options,b=c.chart,e;A(this,"bindAxes",null,function(){(c.axisTypes||[]).forEach(function(h){var g=
0;b[h].forEach(function(a){e=a.options;if(d[h]===g&&!e.isInternal||"undefined"!==typeof d[h]&&d[h]===e.id||"undefined"===typeof d[h]&&0===e.index)c.insert(a.series),c[h]=a,a.isDirty=!0;e.isInternal||g++});c[h]||c.optionalAxis===h||a(18,!0,b)})});A(this,"afterBindAxes")};b.prototype.updateParallelArrays=function(a,c){var d=a.series,b=arguments,e=R(c)?function(b){var e="y"===b&&d.toYData?d.toYData(a):a[b];d[b+"Data"][c]=e}:function(a){Array.prototype[c].apply(d[a+"Data"],Array.prototype.slice.call(b,
2))};d.parallelArrays.forEach(e)};b.prototype.hasData=function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length};b.prototype.autoIncrement=function(){var a=this.options,c=this.xIncrement,d,b=a.pointIntervalUnit,e=this.chart.time;c=t(c,a.pointStart,0);this.pointInterval=d=t(this.pointInterval,a.pointInterval,1);b&&(a=new e.Date(c),"day"===b?e.set("Date",a,e.get("Date",a)+d):"month"===b?e.set("Month",a,e.get("Month",
a)+d):"year"===b&&e.set("FullYear",a,e.get("FullYear",a)+d),d=a.getTime()-c);this.xIncrement=c+d;return c};b.prototype.setDataSortingOptions=function(){var a=this.options;h(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});c(a.pointRange)||(a.pointRange=1)};b.prototype.setOptions=function(a){var d=this.chart,b=d.options,e=b.plotOptions,h=d.userOptions||{};a=Q(a);d=d.styledMode;var g={plotOptions:e,userOptions:a};A(this,"setOptions",g);var f=g.plotOptions[this.type],m=h.plotOptions||
{};this.userOptions=g.userOptions;h=Q(f,e.series,h.plotOptions&&h.plotOptions[this.type],a);this.tooltipOptions=Q(k.tooltip,k.plotOptions.series&&k.plotOptions.series.tooltip,k.plotOptions[this.type].tooltip,b.tooltip.userOptions,e.series&&e.series.tooltip,e[this.type].tooltip,a.tooltip);this.stickyTracking=t(a.stickyTracking,m[this.type]&&m[this.type].stickyTracking,m.series&&m.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:h.stickyTracking);null===f.marker&&delete h.marker;
this.zoneAxis=h.zoneAxis;b=this.zones=(h.zones||[]).slice();!h.negativeColor&&!h.negativeFillColor||h.zones||(e={value:h[this.zoneAxis+"Threshold"]||h.threshold||0,className:"highcharts-negative"},d||(e.color=h.negativeColor,e.fillColor=h.negativeFillColor),b.push(e));b.length&&c(b[b.length-1].value)&&b.push(d?{}:{color:this.color,fillColor:this.fillColor});A(this,"afterSetOptions",{options:h});return h};b.prototype.getName=function(){return t(this.options.name,"Series "+(this.index+1))};b.prototype.getCyclic=
function(a,d,b){var e=this.chart,h=this.userOptions,g=a+"Index",f=a+"Counter",m=b?b.length:t(e.options.chart[a+"Count"],e[a+"Count"]);if(!d){var k=t(h[g],h["_"+g]);c(k)||(e.series.length||(e[f]=0),h["_"+g]=k=e[f]%m,e[f]+=1);b&&(d=b[k])}"undefined"!==typeof k&&(this[g]=k);this[a]=d};b.prototype.getColor=function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color=H.neutralColor20:this.getCyclic("color",this.options.color||k.plotOptions[this.type].color,this.chart.options.colors)};
b.prototype.getPointsCollection=function(){return(this.hasGroupedData?this.points:this.data)||[]};b.prototype.getSymbol=function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)};b.prototype.findPointIndex=function(a,c){var d=a.id,b=a.x,e=this.points,h,g=this.options.dataSorting;if(d)var f=this.chart.get(d);else if(this.linkedParent||this.enabledDataSorting){var m=g&&g.matchByName?"name":"index";f=r(e,function(c){return!c.touched&&c[m]===a[m]});if(!f)return}if(f){var k=
f&&f.index;"undefined"!==typeof k&&(h=!0)}"undefined"===typeof k&&R(b)&&(k=this.xData.indexOf(b,c));-1!==k&&"undefined"!==typeof k&&this.cropped&&(k=k>=this.cropStart?k-this.cropStart:k);!h&&e[k]&&e[k].touched&&(k=void 0);return k};b.prototype.updateData=function(a,d){var b=this.options,e=b.dataSorting,h=this.points,g=[],f,k,m,l=this.requireSorting,n=a.length===h.length,r=!0;this.xIncrement=null;a.forEach(function(a,d){var k=c(a)&&this.pointClass.prototype.optionsToObject.call({series:this},a)||{};
var r=k.x;if(k.id||R(r)){if(r=this.findPointIndex(k,m),-1===r||"undefined"===typeof r?g.push(a):h[r]&&a!==b.data[r]?(h[r].update(a,!1,null,!1),h[r].touched=!0,l&&(m=r+1)):h[r]&&(h[r].touched=!0),!n||d!==r||e&&e.enabled||this.hasDerivedData)f=!0}else g.push(a)},this);if(f)for(a=h.length;a--;)(k=h[a])&&!k.touched&&k.remove&&k.remove(!1,d);else!n||e&&e.enabled?r=!1:(a.forEach(function(a,c){h[c].update&&a!==h[c].y&&h[c].update(a,!1,null,!1)}),g.length=0);h.forEach(function(a){a&&(a.touched=!1)});if(!r)return!1;
g.forEach(function(a){this.addPoint(a,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=u(this.xData),this.autoIncrement());return!0};b.prototype.setData=function(c,d,b,e){var h=this,g=h.points,f=g&&g.length||0,k,m=h.options,l=h.chart,r=m.dataSorting,n=null,q=h.xAxis;n=m.turboThreshold;var F=this.xData,p=this.yData,u=(k=h.pointArrayMap)&&k.length,v=m.keys,K=0,w=1,y;c=c||[];k=c.length;d=t(d,!0);r&&r.enabled&&(c=this.sortData(c));!1!==e&&k&&f&&!h.cropped&&
!h.hasGroupedData&&h.visible&&!h.isSeriesBoosting&&(y=this.updateData(c,b));if(!y){h.xIncrement=null;h.colorCounter=0;this.parallelArrays.forEach(function(a){h[a+"Data"].length=0});if(n&&k>n)if(n=h.getFirstValidPoint(c),R(n))for(b=0;b<k;b++)F[b]=this.autoIncrement(),p[b]=c[b];else if(L(n))if(u)for(b=0;b<k;b++)e=c[b],F[b]=e[0],p[b]=e.slice(1,u+1);else for(v&&(K=v.indexOf("x"),w=v.indexOf("y"),K=0<=K?K:0,w=0<=w?w:1),b=0;b<k;b++)e=c[b],F[b]=e[K],p[b]=e[w];else a(12,!1,l);else for(b=0;b<k;b++)"undefined"!==
typeof c[b]&&(e={series:h},h.pointClass.prototype.applyOptions.apply(e,[c[b]]),h.updateParallelArrays(e,b));p&&V(p[0])&&a(14,!0,l);h.data=[];h.options.data=h.userOptions.data=c;for(b=f;b--;)g[b]&&g[b].destroy&&g[b].destroy();q&&(q.minRange=q.userMinRange);h.isDirty=l.isDirtyBox=!0;h.isDirtyData=!!g;b=!1}"point"===m.legendType&&(this.processData(),this.generatePoints());d&&l.redraw(b)};b.prototype.sortData=function(a){var d=this,b=d.options.dataSorting.sortKey||"y",e=function(a,d){return c(d)&&a.pointClass.prototype.optionsToObject.call({series:a},
d)||{}};a.forEach(function(c,b){a[b]=e(d,c);a[b].index=b},this);a.concat().sort(function(a,c){a=y(b,a);c=y(b,c);return c<a?-1:c>a?1:0}).forEach(function(a,c){a.x=c},this);d.linkedSeries&&d.linkedSeries.forEach(function(c){var d=c.options,b=d.data;d.dataSorting&&d.dataSorting.enabled||!b||(b.forEach(function(d,h){b[h]=e(c,d);a[h]&&(b[h].x=a[h].x,b[h].index=h)}),c.setData(b,!1))});return a};b.prototype.getProcessedData=function(c){var d=this.xData,b=this.yData,e=d.length;var h=0;var g=this.xAxis,f=
this.options;var k=f.cropThreshold;var m=c||this.getExtremesFromAll||f.getExtremesFromAll,l=this.isCartesian;c=g&&g.val2lin;f=!(!g||!g.logarithmic);var n=this.requireSorting;if(g){g=g.getExtremes();var r=g.min;var q=g.max}if(l&&this.sorted&&!m&&(!k||e>k||this.forceCrop))if(d[e-1]<r||d[0]>q)d=[],b=[];else if(this.yData&&(d[0]<r||d[e-1]>q)){h=this.cropData(this.xData,this.yData,r,q);d=h.xData;b=h.yData;h=h.start;var F=!0}for(k=d.length||1;--k;)if(e=f?c(d[k])-c(d[k-1]):d[k]-d[k-1],0<e&&("undefined"===
typeof p||e<p))var p=e;else 0>e&&n&&(a(15,!1,this.chart),n=!1);return{xData:d,yData:b,cropped:F,cropStart:h,closestPointRange:p}};b.prototype.processData=function(a){var c=this.xAxis;if(this.isCartesian&&!this.isDirty&&!c.isDirty&&!this.yAxis.isDirty&&!a)return!1;a=this.getProcessedData();this.cropped=a.cropped;this.cropStart=a.cropStart;this.processedXData=a.xData;this.processedYData=a.yData;this.closestPointRange=this.basePointRange=a.closestPointRange};b.prototype.cropData=function(a,c,d,b,e){var h=
a.length,g=0,f=h,k;e=t(e,this.cropShoulder);for(k=0;k<h;k++)if(a[k]>=d){g=Math.max(0,k-e);break}for(d=k;d<h;d++)if(a[d]>b){f=d+e;break}return{xData:a.slice(g,f),yData:c.slice(g,f),start:g,end:f}};b.prototype.generatePoints=function(){var a=this.options,c=a.data,d=this.data,b,e=this.processedXData,g=this.processedYData,f=this.pointClass,k=e.length,m=this.cropStart||0,l=this.hasGroupedData,n=a.keys,r=[],q;a=a.dataGrouping&&a.dataGrouping.groupAll?m:0;d||l||(d=[],d.length=c.length,d=this.data=d);n&&
l&&(this.options.keys=!1);for(q=0;q<k;q++){var p=m+q;if(l){var u=(new f).init(this,[e[q]].concat(O(g[q])));u.dataGroup=this.groupMap[a+q];u.dataGroup.options&&(u.options=u.dataGroup.options,h(u,u.dataGroup.options),delete u.dataLabels)}else(u=d[p])||"undefined"===typeof c[p]||(d[p]=u=(new f).init(this,c[p],e[q]));u&&(u.index=l?a+q:p,r[q]=u)}this.options.keys=n;if(d&&(k!==(b=d.length)||l))for(q=0;q<b;q++)q!==m||l||(q+=k),d[q]&&(d[q].destroyElements(),d[q].plotX=void 0);this.data=d;this.points=r;A(this,
"afterGeneratePoints")};b.prototype.getXExtremes=function(a){return{min:n(a),max:u(a)}};b.prototype.getExtremes=function(a,c){var d=this.xAxis,b=this.yAxis,e=this.processedXData||this.xData,h=[],g=0,f=0;var k=0;var m=this.requireSorting?this.cropShoulder:0,l=b?b.positiveValuesOnly:!1,r;a=a||this.stackedYData||this.processedYData||[];b=a.length;d&&(k=d.getExtremes(),f=k.min,k=k.max);for(r=0;r<b;r++){var q=e[r];var p=a[r];var F=(R(p)||L(p))&&(p.length||0<p||!l);q=c||this.getExtremesFromAll||this.options.getExtremesFromAll||
this.cropped||!d||(e[r+m]||q)>=f&&(e[r-m]||q)<=k;if(F&&q)if(F=p.length)for(;F--;)R(p[F])&&(h[g++]=p[F]);else h[g++]=p}a={dataMin:n(h),dataMax:u(h)};A(this,"afterGetExtremes",{dataExtremes:a});return a};b.prototype.applyExtremes=function(){var a=this.getExtremes();this.dataMin=a.dataMin;this.dataMax=a.dataMax;return a};b.prototype.getFirstValidPoint=function(a){for(var c=null,d=a.length,b=0;null===c&&b<d;)c=a[b],b++;return c};b.prototype.translate=function(){this.processedXData||this.processData();
this.generatePoints();var a=this.options,d=a.stacking,b=this.xAxis,e=b.categories,h=this.enabledDataSorting,g=this.yAxis,f=this.points,k=f.length,l=!!this.modifyValue,r,n=this.pointPlacementToXValue(),q=!!n,p=a.threshold,u=a.startFromThreshold?p:0,v,w=this.zoneAxis||"y",y=Number.MAX_VALUE;for(r=0;r<k;r++){var E=f[r],x=E.x,D=E.y,B=E.low,P=d&&g.stacking&&g.stacking.stacks[(this.negStacks&&D<(u?0:p)?"-":"")+this.stackKey],N=void 0,C=void 0;if(g.positiveValuesOnly&&!g.validatePositiveValue(D)||b.positiveValuesOnly&&
!b.validatePositiveValue(x))E.isNull=!0;E.plotX=v=m(J(b.translate(x,0,0,0,1,n,"flags"===this.type),-1E5,1E5));if(d&&this.visible&&P&&P[x]){var z=this.getStackIndicator(z,x,this.index);E.isNull||(N=P[x],C=N.points[z.key])}L(C)&&(B=C[0],D=C[1],B===u&&z.key===P[x].base&&(B=t(R(p)&&p,g.min)),g.positiveValuesOnly&&0>=B&&(B=null),E.total=E.stackTotal=N.total,E.percentage=N.total&&E.y/N.total*100,E.stackY=D,this.irregularWidths||N.setOffset(this.pointXOffset||0,this.barW||0));E.yBottom=c(B)?J(g.translate(B,
0,1,0,1),-1E5,1E5):null;l&&(D=this.modifyValue(D,E));E.plotY=void 0;R(D)&&(D=g.translate(D,!1,!0,!1,!0),"undefined"!==typeof D&&(E.plotY=J(D,-1E5,1E5)));E.isInside=this.isPointInside(E);E.clientX=q?m(b.translate(x,0,0,0,1,n)):v;E.negative=E[w]<(a[w+"Threshold"]||p||0);E.category=e&&"undefined"!==typeof e[E.x]?e[E.x]:E.x;if(!E.isNull&&!1!==E.visible){"undefined"!==typeof M&&(y=Math.min(y,Math.abs(v-M)));var M=v}E.zone=this.zones.length&&E.getZone();!E.graphic&&this.group&&h&&(E.isNew=!0)}this.closestPointRangePx=
y;A(this,"afterTranslate")};b.prototype.getValidPoints=function(a,c,d){var b=this.chart;return(a||this.points||[]).filter(function(a){return c&&!b.isInsidePlot(a.plotX,a.plotY,{inverted:b.inverted})?!1:!1!==a.visible&&(d||!a.isNull)})};b.prototype.getClipBox=function(a,c){var d=this.options,b=this.chart,e=b.inverted,h=this.xAxis,g=h&&this.yAxis,f=b.options.chart.scrollablePlotArea||{};a&&!1===d.clip&&g?a=e?{y:-b.chartWidth+g.len+g.pos,height:b.chartWidth,width:b.chartHeight,x:-b.chartHeight+h.len+
h.pos}:{y:-g.pos,height:b.chartHeight,width:b.chartWidth,x:-h.pos}:(a=this.clipBox||b.clipBox,c&&(a.width=b.plotSizeX,a.x=(b.scrollablePixelsX||0)*(f.scrollPositionX||0)));return c?{width:a.width,x:a.x}:a};b.prototype.getSharedClipKey=function(a){if(this.sharedClipKey)return this.sharedClipKey;var c=[a&&a.duration,a&&a.easing,a&&a.defer,this.getClipBox(a).height,this.options.xAxis,this.options.yAxis].join();if(!1!==this.options.clip||a)this.sharedClipKey=c;return c};b.prototype.setClip=function(a){var c=
this.chart,d=this.options,b=c.renderer,e=c.inverted,h=this.clipBox,g=this.getClipBox(a),f=this.getSharedClipKey(a),k=c.sharedClips[f],m=c.sharedClips[f+"m"];a&&(g.width=0,e&&(g.x=c.plotHeight+(!1!==d.clip?0:c.plotTop)));k?c.hasLoaded||k.attr(g):(a&&(c.sharedClips[f+"m"]=m=b.clipRect(e?(c.plotSizeX||0)+99:-99,e?-c.plotLeft:-c.plotTop,99,e?c.chartWidth:c.chartHeight)),c.sharedClips[f]=k=b.clipRect(g),k.count={length:0});a&&!k.count[this.index]&&(k.count[this.index]=!0,k.count.length+=1);if(!1!==d.clip||
a)this.group.clip(a||h?k:c.clipRect),this.markerGroup.clip(m);a||(k.count[this.index]&&(delete k.count[this.index],--k.count.length),0===k.count.length&&(h||(c.sharedClips[f]=k.destroy()),m&&(c.sharedClips[f+"m"]=m.destroy())))};b.prototype.animate=function(a){var c=this.chart,d=w(this.options.animation),b=this.sharedClipKey;if(a)this.setClip(d);else if(b){a=c.sharedClips[b];b=c.sharedClips[b+"m"];var e=this.getClipBox(d,!0);a&&a.animate(e,d);b&&b.animate({width:e.width+99,x:e.x-(c.inverted?0:99)},
d)}};b.prototype.afterAnimate=function(){this.setClip();A(this,"afterAnimate");this.finishedAnimating=!0};b.prototype.drawPoints=function(){var a=this.points,c=this.chart,d,b,e=this.options.marker,h=this[this.specialGroup]||this.markerGroup,g=this.xAxis,f=t(e.enabled,!g||g.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius);if(!1!==e.enabled||this._hasPointMarkers)for(d=0;d<a.length;d++){var k=a[d];var m=(b=k.graphic)?"animate":"attr";var l=k.marker||{};var r=!!k.marker;if((f&&
"undefined"===typeof l.enabled||l.enabled)&&!k.isNull&&!1!==k.visible){var n=t(l.symbol,this.symbol);var q=this.markerAttribs(k,k.selected&&"select");this.enabledDataSorting&&(k.startXPos=g.reversed?-(q.width||0):g.width);var p=!1!==k.isInside;b?b[p?"show":"hide"](p).animate(q):p&&(0<(q.width||0)||k.hasImage)&&(k.graphic=b=c.renderer.symbol(n,q.x,q.y,q.width,q.height,r?l:e).add(h),this.enabledDataSorting&&c.hasRendered&&(b.attr({x:k.startXPos}),m="animate"));b&&"animate"===m&&b[p?"show":"hide"](p).animate(q);
if(b&&!c.styledMode)b[m](this.pointAttribs(k,k.selected&&"select"));b&&b.addClass(k.getClassName(),!0)}else b&&(k.graphic=b.destroy())}};b.prototype.markerAttribs=function(a,c){var d=this.options,b=d.marker,e=a.marker||{},h=e.symbol||b.symbol,g=t(e.radius,b.radius);c&&(b=b.states[c],c=e.states&&e.states[c],g=t(c&&c.radius,b&&b.radius,g+(b&&b.radiusPlus||0)));a.hasImage=h&&0===h.indexOf("url");a.hasImage&&(g=0);a={x:d.crisp?Math.floor(a.plotX-g):a.plotX-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a};
b.prototype.pointAttribs=function(a,c){var d=this.options.marker,b=a&&a.options,e=b&&b.marker||{},h=this.color,g=b&&b.color,f=a&&a.color;b=t(e.lineWidth,d.lineWidth);var k=a&&a.zone&&a.zone.color;a=1;h=g||k||f||h;g=e.fillColor||d.fillColor||h;h=e.lineColor||d.lineColor||h;c=c||"normal";d=d.states[c];c=e.states&&e.states[c]||{};b=t(c.lineWidth,d.lineWidth,b+t(c.lineWidthPlus,d.lineWidthPlus,0));g=c.fillColor||d.fillColor||g;h=c.lineColor||d.lineColor||h;a=t(c.opacity,d.opacity,a);return{stroke:h,"stroke-width":b,
fill:g,opacity:a}};b.prototype.destroy=function(a){var c=this,d=c.chart,b=/AppleWebKit\/533/.test(q.navigator.userAgent),e,h,f=c.data||[],k,m;A(c,"destroy");this.removeEvents(a);(c.axisTypes||[]).forEach(function(a){(m=c[a])&&m.series&&(g(m.series,c),m.isDirty=m.forceRedraw=!0)});c.legendItem&&c.chart.legend.destroyItem(c);for(h=f.length;h--;)(k=f[h])&&k.destroy&&k.destroy();c.clips&&c.clips.forEach(function(a){return a.destroy()});x.clearTimeout(c.animationTimeout);M(c,function(a,c){a instanceof
B&&!a.survive&&(e=b&&"group"===c?"hide":"destroy",a[e]())});d.hoverSeries===c&&(d.hoverSeries=void 0);g(d.series,c);d.orderSeries();M(c,function(d,b){a&&"hcEvents"===b||delete c[b]})};b.prototype.applyZones=function(){var a=this,c=this.chart,d=c.renderer,b=this.zones,e,h,g=this.clips||[],f,k=this.graph,m=this.area,l=Math.max(c.chartWidth,c.chartHeight),r=this[(this.zoneAxis||"y")+"Axis"],n=c.inverted,q,p,u,v=!1,w,y;if(b.length&&(k||m)&&r&&"undefined"!==typeof r.min){var E=r.reversed;var A=r.horiz;
k&&!this.showLine&&k.hide();m&&m.hide();var x=r.getExtremes();b.forEach(function(b,F){e=E?A?c.plotWidth:0:A?0:r.toPixels(x.min)||0;e=J(t(h,e),0,l);h=J(Math.round(r.toPixels(t(b.value,x.max),!0)||0),0,l);v&&(e=h=r.toPixels(x.max));q=Math.abs(e-h);p=Math.min(e,h);u=Math.max(e,h);r.isXAxis?(f={x:n?u:p,y:0,width:q,height:l},A||(f.x=c.plotHeight-f.x)):(f={x:0,y:n?u:p,width:l,height:q},A&&(f.y=c.plotWidth-f.y));n&&d.isVML&&(f=r.isXAxis?{x:0,y:E?p:u,height:f.width,width:c.chartWidth}:{x:f.y-c.plotLeft-c.spacingBox.x,
y:0,width:f.height,height:c.chartHeight});g[F]?g[F].animate(f):g[F]=d.clipRect(f);w=a["zone-area-"+F];y=a["zone-graph-"+F];k&&y&&y.clip(g[F]);m&&w&&w.clip(g[F]);v=b.value>x.max;a.resetZones&&0===h&&(h=void 0)});this.clips=g}else a.visible&&(k&&k.show(!0),m&&m.show(!0))};b.prototype.invertGroups=function(a){function c(){["group","markerGroup"].forEach(function(c){d[c]&&(b.renderer.isVML&&d[c].attr({width:d.yAxis.len,height:d.xAxis.len}),d[c].width=d.yAxis.len,d[c].height=d.xAxis.len,d[c].invert(d.isRadialSeries?
!1:a))})}var d=this,b=d.chart;d.xAxis&&(d.eventsToUnbind.push(D(b,"resize",c)),c(),d.invertGroups=c)};b.prototype.plotGroup=function(a,d,b,e,h){var g=this[a],f=!g;b={visibility:b,zIndex:e||.1};"undefined"===typeof this.opacity||this.chart.styledMode||"inactive"===this.state||(b.opacity=this.opacity);f&&(this[a]=g=this.chart.renderer.g().add(h));g.addClass("highcharts-"+d+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(c(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":
"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr(b)[f?"attr":"animate"](this.getPlotBox());return g};b.prototype.getPlotBox=function(){var a=this.chart,c=this.xAxis,d=this.yAxis;a.inverted&&(c=d,d=this.xAxis);return{translateX:c?c.left:a.plotLeft,translateY:d?d.top:a.plotTop,scaleX:1,scaleY:1}};b.prototype.removeEvents=function(a){a||p(this);this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(a){a()}),this.eventsToUnbind.length=
0)};b.prototype.render=function(){var a=this,c=a.chart,d=a.options,b=w(d.animation),e=!a.finishedAnimating&&c.renderer.isSVG&&b.duration,h=a.visible?"inherit":"hidden",g=d.zIndex,f=a.hasRendered,k=c.seriesGroup,m=c.inverted;A(this,"render");var l=a.plotGroup("group","series",h,g,k);a.markerGroup=a.plotGroup("markerGroup","markers",h,g,k);e&&a.animate&&a.animate(!0);l.inverted=t(a.invertible,a.isCartesian)?m:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.visible&&a.drawPoints();a.drawDataLabels&&
a.drawDataLabels();a.redrawPoints&&a.redrawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(m);!1===d.clip||a.sharedClipKey||f||l.clip(c.clipRect);e&&a.animate&&a.animate();f||(e&&b.defer&&(e+=b.defer),a.animationTimeout=Z(function(){a.afterAnimate()},e||0));a.isDirty=!1;a.hasRendered=!0;A(a,"afterRender")};b.prototype.redraw=function(){var a=this.chart,c=this.isDirty||this.isDirtyData,d=this.group,b=this.xAxis,e=this.yAxis;d&&(a.inverted&&d.attr({width:a.plotWidth,
height:a.plotHeight}),d.animate({translateX:t(b&&b.left,a.plotLeft),translateY:t(e&&e.top,a.plotTop)}));this.translate();this.render();c&&delete this.kdTree};b.prototype.searchPoint=function(a,c){var d=this.xAxis,b=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?d.len-a.chartY+d.pos:a.chartX-d.pos,plotY:e?b.len-a.chartX+b.pos:a.chartY-b.pos},c,a)};b.prototype.buildKDTree=function(a){function c(a,b,e){var h;if(h=a&&a.length){var g=d.kdAxisArray[b%e];a.sort(function(a,c){return a[g]-
c[g]});h=Math.floor(h/2);return{point:a[h],left:c(a.slice(0,h),b+1,e),right:c(a.slice(h+1),b+1,e)}}}this.buildingKdTree=!0;var d=this,b=-1<d.options.findNearestPointBy.indexOf("y")?2:1;delete d.kdTree;Z(function(){d.kdTree=c(d.getValidPoints(null,!d.directTouch),b,b);d.buildingKdTree=!1},d.options.kdNow||a&&"touchstart"===a.type?0:1)};b.prototype.searchKDTree=function(a,d,b){function e(a,d,b,m){var l=d.point,r=h.kdAxisArray[b%m],n=l;var q=c(a[g])&&c(l[g])?Math.pow(a[g]-l[g],2):null;var p=c(a[f])&&
c(l[f])?Math.pow(a[f]-l[f],2):null;p=(q||0)+(p||0);l.dist=c(p)?Math.sqrt(p):Number.MAX_VALUE;l.distX=c(q)?Math.sqrt(q):Number.MAX_VALUE;r=a[r]-l[r];p=0>r?"left":"right";q=0>r?"right":"left";d[p]&&(p=e(a,d[p],b+1,m),n=p[k]<n[k]?p:l);d[q]&&Math.sqrt(r*r)<n[k]&&(a=e(a,d[q],b+1,m),n=a[k]<n[k]?a:n);return n}var h=this,g=this.kdAxisArray[0],f=this.kdAxisArray[1],k=d?"distX":"dist";d=-1<h.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(b);if(this.kdTree)return e(a,
this.kdTree,d,d)};b.prototype.pointPlacementToXValue=function(){var a=this.options,c=a.pointRange,d=this.xAxis;a=a.pointPlacement;"between"===a&&(a=d.reversed?-.5:.5);return R(a)?a*(c||d.pointRange):0};b.prototype.isPointInside=function(a){return"undefined"!==typeof a.plotY&&"undefined"!==typeof a.plotX&&0<=a.plotY&&a.plotY<=this.yAxis.len&&0<=a.plotX&&a.plotX<=this.xAxis.len};b.prototype.drawTracker=function(){var a=this,c=a.options,b=c.trackByArea,e=[].concat(b?a.areaPath:a.graphPath),h=a.chart,
g=h.pointer,k=h.renderer,m=h.options.tooltip.snap,l=a.tracker,r=function(c){if(h.hoverSeries!==a)a.onMouseOver()},n="rgba(192,192,192,"+(d?.0001:.002)+")";l?l.attr({d:e}):a.graph&&(a.tracker=k.path(e).attr({visibility:a.visible?"visible":"hidden",zIndex:2}).addClass(b?"highcharts-tracker-area":"highcharts-tracker-line").add(a.group),h.styledMode||a.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:n,fill:b?n:"none","stroke-width":a.graph.strokeWidth()+(b?0:2*m)}),[a.tracker,
a.markerGroup,a.dataLabelsGroup].forEach(function(a){if(a&&(a.addClass("highcharts-tracker").on("mouseover",r).on("mouseout",function(a){g.onTrackerMouseOut(a)}),c.cursor&&!h.styledMode&&a.css({cursor:c.cursor}),f))a.on("touchstart",r)}));A(this,"afterDrawTracker")};b.prototype.addPoint=function(a,c,d,b,e){var h=this.options,g=this.data,f=this.chart,k=this.xAxis;k=k&&k.hasNames&&k.names;var m=h.data,l=this.xData,r;c=t(c,!0);var n={series:this};this.pointClass.prototype.applyOptions.apply(n,[a]);var q=
n.x;var p=l.length;if(this.requireSorting&&q<l[p-1])for(r=!0;p&&l[p-1]>q;)p--;this.updateParallelArrays(n,"splice",p,0,0);this.updateParallelArrays(n,p);k&&n.name&&(k[q]=n.name);m.splice(p,0,a);r&&(this.data.splice(p,0,null),this.processData());"point"===h.legendType&&this.generatePoints();d&&(g[0]&&g[0].remove?g[0].remove(!1):(g.shift(),this.updateParallelArrays(n,"shift"),m.shift()));!1!==e&&A(this,"addPoint",{point:n});this.isDirtyData=this.isDirty=!0;c&&f.redraw(b)};b.prototype.removePoint=function(a,
c,d){var b=this,e=b.data,h=e[a],g=b.points,f=b.chart,k=function(){g&&g.length===e.length&&g.splice(a,1);e.splice(a,1);b.options.data.splice(a,1);b.updateParallelArrays(h||{series:b},"splice",a,1);h&&h.destroy();b.isDirty=!0;b.isDirtyData=!0;c&&f.redraw()};v(d,f);c=t(c,!0);h?h.firePointEvent("remove",null,k):k()};b.prototype.remove=function(a,c,d,b){function e(){h.destroy(b);g.isDirtyLegend=g.isDirtyBox=!0;g.linkSeries();t(a,!0)&&g.redraw(c)}var h=this,g=h.chart;!1!==d?A(h,"remove",null,e):e()};b.prototype.update=
function(c,d){c=E(c,this.userOptions);A(this,"update",{options:c});var b=this,e=b.chart,g=b.userOptions,f=b.initialType||b.type,k=e.options.plotOptions,m=c.type||g.type||e.options.chart.type,r=!(this.hasDerivedData||m&&m!==this.type||"undefined"!==typeof c.pointStart||"undefined"!==typeof c.pointInterval||b.hasOptionChanged("dataGrouping")||b.hasOptionChanged("pointStart")||b.hasOptionChanged("pointInterval")||b.hasOptionChanged("pointIntervalUnit")||b.hasOptionChanged("keys")),n=l[f].prototype,q,
p=["eventOptions","navigatorSeries","baseSeries"],u=b.finishedAnimating&&{animation:!1},v={};m=m||f;r&&(p.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","clips","nodes","layout","mapMap","mapData","minY","maxY","minX","maxX"),!1!==c.visible&&p.push("area","graph"),b.parallelArrays.forEach(function(a){p.push(a+"Data")}),c.data&&(c.dataSorting&&h(b.options.dataSorting,c.dataSorting),this.setData(c.data,!1)));c=Q(g,u,{index:"undefined"===
typeof g.index?b.index:g.index,pointStart:t(k&&k.series&&k.series.pointStart,g.pointStart,b.xData[0])},!r&&{data:b.options.data},c);r&&c.data&&(c.data=b.options.data);p=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(p);p.forEach(function(a){p[a]=b[a];delete b[a]});g=!1;if(l[m]){if(g=m!==b.type,b.remove(!1,!1,!1,!0),g)if(Object.setPrototypeOf)Object.setPrototypeOf(b,l[m].prototype);else{k=Object.hasOwnProperty.call(b,"hcEvents")&&b.hcEvents;for(q in n)b[q]=void 0;h(b,l[m].prototype);
k?b.hcEvents=k:delete b.hcEvents}}else a(17,!0,e,{missingModuleFor:m});p.forEach(function(a){b[a]=p[a]});b.init(e,c);if(r&&this.points){var w=b.options;!1===w.visible?(v.graphic=1,v.dataLabel=1):b._hasPointLabels||(c=w.marker,m=w.dataLabels,c&&(!1===c.enabled||"symbol"in c)&&(v.graphic=1),m&&!1===m.enabled&&(v.dataLabel=1));this.points.forEach(function(a){a&&a.series&&(a.resolveColor(),Object.keys(v).length&&a.destroyElements(v),!1===w.showInLegend&&a.legendItem&&e.legend.destroyItem(a))},this)}b.initialType=
f;e.linkSeries();g&&b.linkedSeries.length&&(b.isDirtyData=!0);A(this,"afterUpdate");t(d,!0)&&e.redraw(r?void 0:!1)};b.prototype.setName=function(a){this.name=this.options.name=this.userOptions.name=a;this.chart.isDirtyLegend=!0};b.prototype.hasOptionChanged=function(a){var c=this.options[a],d=this.chart.options.plotOptions,b=this.userOptions[a];return b?c!==b:c!==t(d&&d[this.type]&&d[this.type][a],d&&d.series&&d.series[a],c)};b.prototype.onMouseOver=function(){var a=this.chart,c=a.hoverSeries;a.pointer.setHoverChartIndex();
if(c&&c!==this)c.onMouseOut();this.options.events.mouseOver&&A(this,"mouseOver");this.setState("hover");a.hoverSeries=this};b.prototype.onMouseOut=function(){var a=this.options,c=this.chart,d=c.tooltip,b=c.hoverPoint;c.hoverSeries=null;if(b)b.onMouseOut();this&&a.events.mouseOut&&A(this,"mouseOut");!d||this.stickyTracking||d.shared&&!this.noSharedTooltip||d.hide();c.series.forEach(function(a){a.setState("",!0)})};b.prototype.setState=function(a,c){var d=this,b=d.options,e=d.graph,h=b.inactiveOtherPoints,
g=b.states,f=b.lineWidth,k=b.opacity,m=t(g[a||"normal"]&&g[a||"normal"].animation,d.chart.options.chart.animation);b=0;a=a||"";if(d.state!==a&&([d.group,d.markerGroup,d.dataLabelsGroup].forEach(function(c){c&&(d.state&&c.removeClass("highcharts-series-"+d.state),a&&c.addClass("highcharts-series-"+a))}),d.state=a,!d.chart.styledMode)){if(g[a]&&!1===g[a].enabled)return;a&&(f=g[a].lineWidth||f+(g[a].lineWidthPlus||0),k=t(g[a].opacity,k));if(e&&!e.dashstyle)for(g={"stroke-width":f},e.animate(g,m);d["zone-graph-"+
b];)d["zone-graph-"+b].animate(g,m),b+=1;h||[d.group,d.markerGroup,d.dataLabelsGroup,d.labelBySeries].forEach(function(a){a&&a.animate({opacity:k},m)})}c&&h&&d.points&&d.setAllPointsToState(a||void 0)};b.prototype.setAllPointsToState=function(a){this.points.forEach(function(c){c.setState&&c.setState(a)})};b.prototype.setVisible=function(a,c){var d=this,b=d.chart,e=d.legendItem,h=b.options.chart.ignoreHiddenSeries,g=d.visible;var f=(d.visible=a=d.options.visible=d.userOptions.visible="undefined"===
typeof a?!g:a)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(a){if(d[a])d[a][f]()});if(b.hoverSeries===d||(b.hoverPoint&&b.hoverPoint.series)===d)d.onMouseOut();e&&b.legend.colorizeItem(d,a);d.isDirty=!0;d.options.stacking&&b.series.forEach(function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});d.linkedSeries.forEach(function(c){c.setVisible(a,!1)});h&&(b.isDirtyBox=!0);A(d,f);!1!==c&&b.redraw()};b.prototype.show=function(){this.setVisible(!0)};b.prototype.hide=
function(){this.setVisible(!1)};b.prototype.select=function(a){this.selected=a=this.options.selected="undefined"===typeof a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);A(this,a?"select":"unselect")};b.prototype.shouldShowTooltip=function(a,c,d){void 0===d&&(d={});d.series=this;d.visiblePlotOnly=!0;return this.chart.isInsidePlot(a,c,d)};b.defaultOptions={lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:H.backgroundColor,
lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:H.neutralColor20,lineColor:H.neutralColor100,lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",defer:!0,formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},
cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"};return b}();h(e.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,drawLegendSymbol:I.drawLineMarker,isCartesian:!0,kdAxisArray:["clientX","plotY"],
parallelArrays:["x","y"],pointClass:G,requireSorting:!0,sorted:!0});C.series=e;"";"";return e});O(e,"Extensions/ScrollablePlotArea.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Axis/Axis.js"],e["Core/Chart/Chart.js"],e["Core/Series/Series.js"],e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G){var D=e.stop,B=G.addEvent,x=G.createElement,w=G.merge,v=G.pick;"";B(I,"afterSetChartSize",function(b){var d=this.options.chart.scrollablePlotArea,e=d&&d.minWidth;d=d&&d.minHeight;if(!this.renderer.forExport){if(e){if(this.scrollablePixelsX=
e=Math.max(0,e-this.chartWidth)){this.scrollablePlotBox=this.renderer.scrollablePlotBox=w(this.plotBox);this.plotBox.width=this.plotWidth+=e;this.inverted?this.clipBox.height+=e:this.clipBox.width+=e;var f={1:{name:"right",value:e}}}}else d&&(this.scrollablePixelsY=e=Math.max(0,d-this.chartHeight))&&(this.scrollablePlotBox=this.renderer.scrollablePlotBox=w(this.plotBox),this.plotBox.height=this.plotHeight+=e,this.inverted?this.clipBox.width+=e:this.clipBox.height+=e,f={2:{name:"bottom",value:e}});
f&&!b.skipAxes&&this.axes.forEach(function(d){f[d.side]?d.getPlotLinePath=function(){var b=f[d.side].name,e=this[b];this[b]=e-f[d.side].value;var k=H.Axis.prototype.getPlotLinePath.apply(this,arguments);this[b]=e;return k}:(d.setAxisSize(),d.setAxisTranslation())})}});B(I,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});I.prototype.setUpScrolling=function(){var b=this,d={WebkitOverflowScrolling:"touch",
overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(d.overflowX="auto");this.scrollablePixelsY&&(d.overflowY="auto");this.scrollingParent=x("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo);this.scrollingContainer=x("div",{className:"highcharts-scrolling"},d,this.scrollingParent);B(this.scrollingContainer,"scroll",function(){b.pointer&&delete b.pointer.chartPosition});this.innerContainer=x("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);
this.innerContainer.appendChild(this.container);this.setUpScrolling=null};I.prototype.moveFixedElements=function(){var b=this.container,d=this.fixedRenderer,e=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),k;this.scrollablePixelsX&&
!this.inverted?k=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?k=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?k=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(k=".highcharts-yaxis");k&&e.push(k+":not(.highcharts-radial-axis)",k+"-labels:not(.highcharts-radial-axis-labels)");e.forEach(function(e){[].forEach.call(b.querySelectorAll(e),function(b){(b.namespaceURI===d.SVG_NS?d.box:d.box.parentNode).appendChild(b);b.style.pointerEvents="auto"})})};I.prototype.applyFixed=
function(){var b=!this.fixedDiv;var d=this.options.chart;var e=d.scrollablePlotArea;b?(this.fixedDiv=x("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(d.style&&d.style.zIndex||0)+2,top:0},null,!0),this.scrollingContainer&&this.scrollingContainer.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=d=new H.Renderer(this.fixedDiv,this.chartWidth,this.chartHeight,this.options.chart.style),
this.scrollableMask=d.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":v(e.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),B(this,"afterShowResetZoom",this.moveFixedElements),B(this,"afterDrilldown",this.moveFixedElements),B(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);if(this.scrollableDirty||b)this.scrollableDirty=!1,this.moveFixedElements();d=this.chartWidth+(this.scrollablePixelsX||
0);var k=this.chartHeight+(this.scrollablePixelsY||0);D(this.container);this.container.style.width=d+"px";this.container.style.height=k+"px";this.renderer.boxWrapper.attr({width:d,height:k,viewBox:[0,0,d,k].join(" ")});this.chartBackground.attr({width:d,height:k});this.scrollingContainer.style.height=this.chartHeight+"px";b&&(e.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*e.scrollPositionX),e.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*
e.scrollPositionY));k=this.axisOffset;b=this.plotTop-k[0]-1;e=this.plotLeft-k[3]-1;d=this.plotTop+this.plotHeight+k[2]+1;k=this.plotLeft+this.plotWidth+k[1]+1;var l=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),w=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);b=this.scrollablePixelsX?[["M",0,b],["L",this.plotLeft-1,b],["L",this.plotLeft-1,d],["L",0,d],["Z"],["M",l,b],["L",this.chartWidth,b],["L",this.chartWidth,d],["L",l,d],["Z"]]:this.scrollablePixelsY?[["M",e,0],["L",e,this.plotTop-
1],["L",k,this.plotTop-1],["L",k,0],["Z"],["M",e,w],["L",e,this.chartHeight],["L",k,this.chartHeight],["L",k,w],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:b})};B(b,"afterInit",function(){this.chart.scrollableDirty=!0});B(z,"show",function(){this.chart.scrollableDirty=!0})});O(e,"Core/Axis/StackingAxis.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Utilities.js"]],function(e,b){var D=e.getDeferredAnimation,z=b.addEvent,H=b.destroyObjectProperties,G=
b.fireEvent,C=b.isNumber,B=b.objectEach,x=function(){function b(b){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=b}b.prototype.buildStacks=function(){var b=this.axis,e=b.series,d=b.options.reversedStacks,q=e.length,k;if(!b.isXAxis){this.usePercentage=!1;for(k=q;k--;){var l=e[d?k:q-k-1];l.setStackedPoints();l.setGroupedPoints()}for(k=0;k<q;k++)e[k].modifyStacks();G(b,"afterBuildStacks")}};b.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var b=this.stacks=
this.oldStacks;B(b,function(b){B(b,function(d){d.cumulative=d.total})})}};b.prototype.resetStacks=function(){var b=this,e=this.stacks;this.axis.isXAxis||B(e,function(d){B(d,function(e,f){C(e.touched)&&e.touched<b.stacksTouched?(e.destroy(),delete d[f]):(e.total=null,e.cumulative=null)})})};b.prototype.renderStackTotals=function(){var b=this.axis,e=b.chart,d=e.renderer,q=this.stacks;b=D(e,b.options.stackLabels&&b.options.stackLabels.animation||!1);var k=this.stackTotalGroup=this.stackTotalGroup||d.g("stack-labels").attr({visibility:"visible",
zIndex:6,opacity:0}).add();k.translate(e.plotLeft,e.plotTop);B(q,function(d){B(d,function(d){d.render(k)})});k.animate({opacity:1},b)};return b}();return function(){function b(){}b.compose=function(e){z(e,"init",b.onInit);z(e,"destroy",b.onDestroy)};b.onDestroy=function(){var b=this.stacking;if(b){var e=b.stacks;B(e,function(d,b){H(d);e[b]=null});b&&b.stackTotalGroup&&b.stackTotalGroup.destroy()}};b.onInit=function(){this.stacking||(this.stacking=new x(this))};return b}()});O(e,"Extensions/Stacking.js",
[e["Core/Axis/Axis.js"],e["Core/Chart/Chart.js"],e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Series/Series.js"],e["Core/Axis/StackingAxis.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C){var D=I.format,x=C.correctFloat,w=C.defined,v=C.destroyObjectProperties,f=C.isArray,d=C.isNumber,q=C.objectEach,k=C.pick;"";var l=function(){function b(d,b,e,f,k){var c=d.chart.inverted;this.axis=d;this.isNegative=e;this.options=b=b||{};this.x=f;this.total=null;this.points={};this.hasValidPoints=
!1;this.stack=k;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(c?e?"left":"right":"center"),verticalAlign:b.verticalAlign||(c?"middle":e?"bottom":"top"),y:b.y,x:b.x};this.textAlign=b.textAlign||(c?e?"right":"left":"center")}b.prototype.destroy=function(){v(this,this.axis)};b.prototype.render=function(d){var b=this.axis.chart,e=this.options,f=e.format;f=f?D(f,this,b):e.formatter.call(this);this.label?this.label.attr({text:f,visibility:"hidden"}):(this.label=b.renderer.label(f,
null,null,e.shape,null,null,e.useHTML,!1,"stack-labels"),f={r:e.borderRadius||0,text:f,rotation:e.rotation,padding:k(e.padding,5),visibility:"hidden"},b.styledMode||(f.fill=e.backgroundColor,f.stroke=e.borderColor,f["stroke-width"]=e.borderWidth,this.label.css(e.style)),this.label.attr(f),this.label.added||this.label.add(d));this.label.labelrank=b.plotSizeY};b.prototype.setOffset=function(b,e,f,l,m){var c=this.axis,g=c.chart;l=c.translate(c.stacking.usePercentage?100:l?l:this.total,0,0,0,1);f=c.translate(f?
f:0);f=w(l)&&Math.abs(l-f);b=k(m,g.xAxis[0].translate(this.x))+b;c=w(l)&&this.getStackBox(g,this,b,l,e,f,c);e=this.label;f=this.isNegative;b="justify"===k(this.options.overflow,"justify");var a=this.textAlign;e&&c&&(m=e.getBBox(),l=e.padding,a="left"===a?g.inverted?-l:l:"right"===a?m.width:g.inverted&&"center"===a?m.width/2:g.inverted?f?m.width+l:-l:m.width/2,f=g.inverted?m.height/2:f?-l:m.height,this.alignOptions.x=k(this.options.x,0),this.alignOptions.y=k(this.options.y,0),c.x-=a,c.y-=f,e.align(this.alignOptions,
null,c),g.isInsidePlot(e.alignAttr.x+a-this.alignOptions.x,e.alignAttr.y+f-this.alignOptions.y)?e.show():(e.alignAttr.y=-9999,b=!1),b&&H.prototype.justifyDataLabel.call(this.axis,e,this.alignOptions,e.alignAttr,m,c),e.attr({x:e.alignAttr.x,y:e.alignAttr.y}),k(!b&&this.options.crop,!0)&&((g=d(e.x)&&d(e.y)&&g.isInsidePlot(e.x-l+e.width,e.y)&&g.isInsidePlot(e.x+l,e.y))||e.hide()))};b.prototype.getStackBox=function(d,b,e,f,k,c,g){var a=b.axis.reversed,h=d.inverted,m=g.height+g.pos-(h?d.plotLeft:d.plotTop);
b=b.isNegative&&!a||!b.isNegative&&a;return{x:h?b?f-g.right:f-c+g.pos-d.plotLeft:e+d.xAxis[0].transB-d.plotLeft,y:h?g.height-e-k:b?m-f-c:m-f,width:h?c:k,height:h?k:c}};return b}();b.prototype.getStacks=function(){var d=this,b=d.inverted;d.yAxis.forEach(function(d){d.stacking&&d.stacking.stacks&&d.hasVisibleSeries&&(d.stacking.oldStacks=d.stacking.stacks)});d.series.forEach(function(e){var f=e.xAxis&&e.xAxis.options||{};!e.options.stacking||!0!==e.visible&&!1!==d.options.chart.ignoreHiddenSeries||
(e.stackKey=[e.type,k(e.options.stack,""),b?f.top:f.left,b?f.height:f.width].join())})};G.compose(e);H.prototype.setGroupedPoints=function(){var d=this.yAxis.stacking;this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length?H.prototype.setStackedPoints.call(this,"group"):d&&q(d.stacks,function(b,e){"group"===e.slice(-5)&&(q(b,function(d){return d.destroy()}),delete d.stacks[e])})};H.prototype.setStackedPoints=function(d){var b=
d||this.options.stacking;if(b&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var e=this.processedXData,q=this.processedYData,v=[],m=q.length,c=this.options,g=c.threshold,a=k(c.startFromThreshold&&g,0);c=c.stack;d=d?this.type+","+b:this.stackKey;var h="-"+d,r=this.negStacks,A=this.yAxis,y=A.stacking.stacks,D=A.stacking.oldStacks,B,C;A.stacking.stacksTouched+=1;for(C=0;C<m;C++){var z=e[C];var Q=q[C];var M=this.getStackIndicator(M,z,this.index);var t=M.key;var p=(B=r&&Q<(a?0:
g))?h:d;y[p]||(y[p]={});y[p][z]||(D[p]&&D[p][z]?(y[p][z]=D[p][z],y[p][z].total=null):y[p][z]=new l(A,A.options.stackLabels,B,z,c));p=y[p][z];null!==Q?(p.points[t]=p.points[this.index]=[k(p.cumulative,a)],w(p.cumulative)||(p.base=t),p.touched=A.stacking.stacksTouched,0<M.index&&!1===this.singleStacks&&(p.points[t][0]=p.points[this.index+","+z+",0"][0])):p.points[t]=p.points[this.index]=null;"percent"===b?(B=B?d:h,r&&y[B]&&y[B][z]?(B=y[B][z],p.total=B.total=Math.max(B.total,p.total)+Math.abs(Q)||0):
p.total=x(p.total+(Math.abs(Q)||0))):"group"===b?(f(Q)&&(Q=Q[0]),null!==Q&&(p.total=(p.total||0)+1)):p.total=x(p.total+(Q||0));p.cumulative="group"===b?(p.total||1)-1:k(p.cumulative,a)+(Q||0);null!==Q&&(p.points[t].push(p.cumulative),v[C]=p.cumulative,p.hasValidPoints=!0)}"percent"===b&&(A.stacking.usePercentage=!0);"group"!==b&&(this.stackedYData=v);A.stacking.oldStacks={}}};H.prototype.modifyStacks=function(){var d=this,b=d.stackKey,e=d.yAxis.stacking.stacks,f=d.processedXData,k,m=d.options.stacking;
d[m+"Stacker"]&&[b,"-"+b].forEach(function(c){for(var b=f.length,a,h;b--;)if(a=f[b],k=d.getStackIndicator(k,a,d.index,c),h=(a=e[c]&&e[c][a])&&a.points[k.key])d[m+"Stacker"](h,a,b)})};H.prototype.percentStacker=function(d,b,e){b=b.total?100/b.total:0;d[0]=x(d[0]*b);d[1]=x(d[1]*b);this.stackedYData[e]=d[1]};H.prototype.getStackIndicator=function(d,b,e,f){!w(d)||d.x!==b||f&&d.key!==f?d={x:b,index:0,key:f}:d.index++;d.key=[e,b,d.index].join();return d};z.StackItem=l;return z.StackItem});O(e,"Series/Line/LineSeries.js",
[e["Core/Color/Palette.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=this&&this.__extends||function(){var b=function(e,w){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var d in e)e.hasOwnProperty(d)&&(b[d]=e[d])};return b(e,w)};return function(e,w){function v(){this.constructor=e}b(e,w);e.prototype=null===w?Object.create(w):(v.prototype=w.prototype,new v)}}(),G=z.defined,
C=z.merge;z=function(B){function x(){var b=null!==B&&B.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}D(x,B);x.prototype.drawGraph=function(){var b=this,v=this.options,f=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,q=[["graph","highcharts-graph"]];d||q[0].push(v.lineColor||this.color||e.neutralColor20,v.dashStyle);q=b.getZonesGraphs(q);q.forEach(function(e,l){var k=e[0],q=b[k],n=q?"animate":"attr";q?(q.endX=b.preventGraphAnimation?null:
f.xMap,q.animate({d:f})):f.length&&(b[k]=q=b.chart.renderer.path(f).addClass(e[1]).attr({zIndex:1}).add(b.group));q&&!d&&(k={stroke:e[2],"stroke-width":v.lineWidth,fill:b.fillGraph&&b.color||"none"},e[3]?k.dashstyle=e[3]:"square"!==v.linecap&&(k["stroke-linecap"]=k["stroke-linejoin"]="round"),q[n](k).shadow(2>l&&v.shadow));q&&(q.startX=f.xMap,q.isArea=f.isArea)})};x.prototype.getGraphPath=function(b,e,f){var d=this,q=d.options,k=q.step,l,v=[],u=[],n;b=b||d.points;(l=b.reversed)&&b.reverse();(k={right:1,
center:2}[k]||k&&3)&&l&&(k=4-k);b=this.getValidPoints(b,!1,!(q.connectNulls&&!e&&!f));b.forEach(function(l,w){var m=l.plotX,c=l.plotY,g=b[w-1];(l.leftCliff||g&&g.rightCliff)&&!f&&(n=!0);l.isNull&&!G(e)&&0<w?n=!q.connectNulls:l.isNull&&!e?n=!0:(0===w||n?w=[["M",l.plotX,l.plotY]]:d.getPointSpline?w=[d.getPointSpline(b,l,w)]:k?(w=1===k?[["L",g.plotX,c]]:2===k?[["L",(g.plotX+m)/2,g.plotY],["L",(g.plotX+m)/2,c]]:[["L",m,g.plotY]],w.push(["L",m,c])):w=[["L",m,c]],u.push(l.x),k&&(u.push(l.x),2===k&&u.push(l.x)),
v.push.apply(v,w),n=!1)});v.xMap=u;return d.graphPath=v};x.prototype.getZonesGraphs=function(b){this.zones.forEach(function(e,f){f=["zone-graph-"+f,"highcharts-graph highcharts-zone-graph-"+f+" "+(e.className||"")];this.chart.styledMode||f.push(e.color||this.color,e.dashStyle||this.options.dashStyle);b.push(f)},this);return b};x.defaultOptions=C(b.defaultOptions,{});return x}(b);I.registerSeriesType("line",z);"";return z});O(e,"Series/Area/AreaSeries.js",[e["Core/Color/Color.js"],e["Mixins/LegendSymbol.js"],
e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=this&&this.__extends||function(){var b=function(e,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d}||function(b,d){for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])};return b(e,d)};return function(e,d){function f(){this.constructor=e}b(e,d);e.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),G=e.parse,C=I.seriesTypes.line;e=z.extend;var B=z.merge,x=z.objectEach,
w=z.pick;z=function(b){function e(){var d=null!==b&&b.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}D(e,b);e.prototype.drawGraph=function(){this.areaPath=[];b.prototype.drawGraph.apply(this);var d=this,e=this.areaPath,f=this.options,l=[["area","highcharts-area",this.color,f.fillColor]];this.zones.forEach(function(b,e){l.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+e+" "+b.className,b.color||d.color,b.fillColor||f.fillColor])});l.forEach(function(b){var k=
b[0],l=d[k],q=l?"animate":"attr",v={};l?(l.endX=d.preventGraphAnimation?null:e.xMap,l.animate({d:e})):(v.zIndex=0,l=d[k]=d.chart.renderer.path(e).addClass(b[1]).add(d.group),l.isArea=!0);d.chart.styledMode||(v.fill=w(b[3],G(b[2]).setOpacity(w(f.fillOpacity,.75)).get()));l[q](v);l.startX=e.xMap;l.shiftUnit=f.step?2:1})};e.prototype.getGraphPath=function(b){var d=C.prototype.getGraphPath,e=this.options,f=e.stacking,v=this.yAxis,u,n=[],x=[],E=this.index,m=v.stacking.stacks[this.stackKey],c=e.threshold,
g=Math.round(v.getThreshold(e.threshold));e=w(e.connectNulls,"percent"===f);var a=function(a,d,e){var h=b[a];a=f&&m[h.x].points[E];var k=h[e+"Null"]||0;e=h[e+"Cliff"]||0;h=!0;if(e||k){var l=(k?a[0]:a[1])+e;var q=a[0]+e;h=!!k}else!f&&b[d]&&b[d].isNull&&(l=q=c);"undefined"!==typeof l&&(x.push({plotX:r,plotY:null===l?g:v.getThreshold(l),isNull:h,isCliff:!0}),n.push({plotX:r,plotY:null===q?g:v.getThreshold(q),doCurve:!1}))};b=b||this.points;f&&(b=this.getStackPoints(b));for(u=0;u<b.length;u++){f||(b[u].leftCliff=
b[u].rightCliff=b[u].leftNull=b[u].rightNull=void 0);var h=b[u].isNull;var r=w(b[u].rectPlotX,b[u].plotX);var A=f?w(b[u].yBottom,g):g;if(!h||e)e||a(u,u-1,"left"),h&&!f&&e||(x.push(b[u]),n.push({x:u,plotX:r,plotY:A})),e||a(u,u+1,"right")}u=d.call(this,x,!0,!0);n.reversed=!0;h=d.call(this,n,!0,!0);(A=h[0])&&"M"===A[0]&&(h[0]=["L",A[1],A[2]]);h=u.concat(h);h.length&&h.push(["Z"]);d=d.call(this,x,!1,e);h.xMap=u.xMap;this.areaPath=h;return d};e.prototype.getStackPoints=function(b){var d=this,e=[],f=[],
v=this.xAxis,u=this.yAxis,n=u.stacking.stacks[this.stackKey],D={},E=u.series,m=E.length,c=u.options.reversedStacks?1:-1,g=E.indexOf(d);b=b||this.points;if(this.options.stacking){for(var a=0;a<b.length;a++)b[a].leftNull=b[a].rightNull=void 0,D[b[a].x]=b[a];x(n,function(a,c){null!==a.total&&f.push(c)});f.sort(function(a,c){return a-c});var h=E.map(function(a){return a.visible});f.forEach(function(a,b){var k=0,l,r;if(D[a]&&!D[a].isNull)e.push(D[a]),[-1,1].forEach(function(e){var k=1===e?"rightNull":
"leftNull",q=0,t=n[f[b+e]];if(t)for(var p=g;0<=p&&p<m;){var v=E[p].index;l=t.points[v];l||(v===d.index?D[a][k]=!0:h[p]&&(r=n[a].points[v])&&(q-=r[1]-r[0]));p+=c}D[a][1===e?"rightCliff":"leftCliff"]=q});else{for(var q=g;0<=q&&q<m;){if(l=n[a].points[E[q].index]){k=l[1];break}q+=c}k=w(k,0);k=u.translate(k,0,1,0,1);e.push({isNull:!0,plotX:v.translate(a,0,0,0,1),x:a,plotY:k,yBottom:k})}})}return e};e.defaultOptions=B(C.defaultOptions,{threshold:0});return e}(C);e(z.prototype,{singleStacks:!1,drawLegendSymbol:b.drawRectangle});
I.registerSeriesType("area",z);"";return z});O(e,"Series/Spline/SplineSeries.js",[e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b){var D=this&&this.__extends||function(){var b=function(e,x){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])};return b(e,x)};return function(e,x){function w(){this.constructor=e}b(e,x);e.prototype=null===x?Object.create(x):(w.prototype=x.prototype,
new w)}}(),z=e.seriesTypes.line,H=b.merge,G=b.pick;b=function(b){function e(){var e=null!==b&&b.apply(this,arguments)||this;e.data=void 0;e.options=void 0;e.points=void 0;return e}D(e,b);e.prototype.getPointSpline=function(b,e,v){var f=e.plotX||0,d=e.plotY||0,q=b[v-1];v=b[v+1];if(q&&!q.isNull&&!1!==q.doCurve&&!e.isCliff&&v&&!v.isNull&&!1!==v.doCurve&&!e.isCliff){b=q.plotY||0;var k=v.plotX||0;v=v.plotY||0;var l=0;var w=(1.5*f+(q.plotX||0))/2.5;var u=(1.5*d+b)/2.5;k=(1.5*f+k)/2.5;var n=(1.5*d+v)/2.5;
k!==w&&(l=(n-u)*(k-f)/(k-w)+d-n);u+=l;n+=l;u>b&&u>d?(u=Math.max(b,d),n=2*d-u):u<b&&u<d&&(u=Math.min(b,d),n=2*d-u);n>v&&n>d?(n=Math.max(v,d),u=2*d-n):n<v&&n<d&&(n=Math.min(v,d),u=2*d-n);e.rightContX=k;e.rightContY=n}e=["C",G(q.rightContX,q.plotX,0),G(q.rightContY,q.plotY,0),G(w,f,0),G(u,d,0),f,d];q.rightContX=q.rightContY=void 0;return e};e.defaultOptions=H(z.defaultOptions);return e}(z);e.registerSeriesType("spline",b);"";return b});O(e,"Series/AreaSpline/AreaSplineSeries.js",[e["Series/Area/AreaSeries.js"],
e["Series/Spline/SplineSeries.js"],e["Mixins/LegendSymbol.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z,H){var D=this&&this.__extends||function(){var b=function(e,f){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var d in e)e.hasOwnProperty(d)&&(b[d]=e[d])};return b(e,f)};return function(e,f){function d(){this.constructor=e}b(e,f);e.prototype=null===f?Object.create(f):(d.prototype=f.prototype,new d)}}(),C=
e.prototype,B=H.extend,x=H.merge;H=function(w){function v(){var b=null!==w&&w.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;return b}D(v,w);v.defaultOptions=x(b.defaultOptions,e.defaultOptions);return v}(b);B(H.prototype,{getGraphPath:C.getGraphPath,getStackPoints:C.getStackPoints,drawGraph:C.drawGraph,drawLegendSymbol:I.drawRectangle});z.registerSeriesType("areaspline",H);"";return H});O(e,"Series/Column/ColumnSeries.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Color/Color.js"],
e["Core/Globals.js"],e["Mixins/LegendSymbol.js"],e["Core/Color/Palette.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C,B){var x=this&&this.__extends||function(){var c=function(b,a){c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)c.hasOwnProperty(b)&&(a[b]=c[b])};return c(b,a)};return function(b,a){function d(){this.constructor=b}c(b,a);b.prototype=null===a?Object.create(a):
(d.prototype=a.prototype,new d)}}(),w=e.animObject,v=b.parse,f=I.hasTouch;e=I.noop;var d=B.clamp,q=B.css,k=B.defined,l=B.extend,D=B.fireEvent,u=B.isArray,n=B.isNumber,J=B.merge,E=B.pick,m=B.objectEach;B=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a.borderWidth=void 0;a.data=void 0;a.group=void 0;a.options=void 0;a.points=void 0;return a}x(b,c);b.prototype.animate=function(a){var c=this,b=this.yAxis,e=c.options,g=this.chart.inverted,f={},k=g?"translateX":"translateY";if(a)f.scaleY=
.001,a=d(b.toPixels(e.threshold),b.pos,b.pos+b.len),g?f.translateX=a-b.len:f.translateY=a,c.clipBox&&c.setClip(),c.group.attr(f);else{var m=Number(c.group.attr(k));c.group.animate({scaleY:1},l(w(c.options.animation),{step:function(a,d){c.group&&(f[k]=m+d.pos*(b.pos-m),c.group.attr(f))}}))}};b.prototype.init=function(a,b){c.prototype.init.apply(this,arguments);var d=this;a=d.chart;a.hasRendered&&a.series.forEach(function(a){a.type===d.type&&(a.isDirty=!0)})};b.prototype.getColumnMetrics=function(){var a=
this,c=a.options,b=a.xAxis,d=a.yAxis,e=b.options.reversedStacks;e=b.reversed&&!e||!b.reversed&&e;var g,f={},k=0;!1===c.grouping?k=1:a.chart.series.forEach(function(c){var b=c.yAxis,e=c.options;if(c.type===a.type&&(c.visible||!a.chart.options.chart.ignoreHiddenSeries)&&d.len===b.len&&d.pos===b.pos){if(e.stacking&&"group"!==e.stacking){g=c.stackKey;"undefined"===typeof f[g]&&(f[g]=k++);var h=f[g]}else!1!==e.grouping&&(h=k++);c.columnIndex=h}});var m=Math.min(Math.abs(b.transA)*(b.ordinal&&b.ordinal.slope||
c.pointRange||b.closestPointRange||b.tickInterval||1),b.len),l=m*c.groupPadding,n=(m-2*l)/(k||1);c=Math.min(c.maxPointWidth||b.len,E(c.pointWidth,n*(1-2*c.pointPadding)));a.columnMetrics={width:c,offset:(n-c)/2+(l+((a.columnIndex||0)+(e?1:0))*n-m/2)*(e?-1:1),paddedWidth:n,columnCount:k};return a.columnMetrics};b.prototype.crispCol=function(a,c,b,d){var e=this.chart,h=this.borderWidth,g=-(h%2?.5:0);h=h%2?.5:1;e.inverted&&e.renderer.isVML&&(h+=1);this.options.crisp&&(b=Math.round(a+b)+g,a=Math.round(a)+
g,b-=a);d=Math.round(c+d)+h;g=.5>=Math.abs(c)&&.5<d;c=Math.round(c)+h;d-=c;g&&d&&(--c,d+=1);return{x:a,y:c,width:b,height:d}};b.prototype.adjustForMissingColumns=function(a,c,b,d){var e=this,h=this.options.stacking;if(!b.isNull&&1<d.columnCount){var g=0,f=0;m(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(a){if("number"===typeof b.x&&(a=a[b.x.toString()])){var c=a.points[e.index],d=a.total;h?(c&&(g=f),a.hasValidPoints&&f++):u(c)&&(g=c[1],f=d||0)}});a=(b.plotX||0)+((f-1)*d.paddedWidth+c)/
2-c-g*d.paddedWidth}return a};b.prototype.translate=function(){var a=this,c=a.chart,b=a.options,e=a.dense=2>a.closestPointRange*a.xAxis.transA;e=a.borderWidth=E(b.borderWidth,e?0:1);var g=a.xAxis,f=a.yAxis,m=b.threshold,l=a.translatedThreshold=f.getThreshold(m),q=E(b.minPointLength,5),v=a.getColumnMetrics(),u=v.width,t=a.barW=Math.max(u,1+2*e),p=a.pointXOffset=v.offset,w=a.dataMin,x=a.dataMax;c.inverted&&(l-=.5);b.pointPadding&&(t=Math.ceil(t));G.prototype.translate.apply(a);a.points.forEach(function(e){var h=
E(e.yBottom,l),r=999+Math.abs(h),y=u,A=e.plotX||0;r=d(e.plotY,-r,f.len+r);A+=p;var D=t,B=Math.min(r,h),z=Math.max(r,h)-B;if(q&&Math.abs(z)<q){z=q;var C=!f.reversed&&!e.negative||f.reversed&&e.negative;n(m)&&n(x)&&e.y===m&&x<=m&&(f.min||0)<m&&(w!==x||(f.max||0)<=m)&&(C=!C);B=Math.abs(B-l)>q?h-q:l-(C?q:0)}k(e.options.pointWidth)&&(y=D=Math.ceil(e.options.pointWidth),A-=Math.round((y-u)/2));b.centerInCategory&&(A=a.adjustForMissingColumns(A,y,e,v));e.barX=A;e.pointWidth=y;e.tooltipPos=c.inverted?[d(f.len+
f.pos-c.plotLeft-r,f.pos-c.plotLeft,f.len+f.pos-c.plotLeft),g.len+g.pos-c.plotTop-A-D/2,z]:[g.left-c.plotLeft+A+D/2,d(r+f.pos-c.plotTop,f.pos-c.plotTop,f.len+f.pos-c.plotTop),z];e.shapeType=a.pointClass.prototype.shapeType||"rect";e.shapeArgs=a.crispCol.apply(a,e.isNull?[A,l,D,0]:[A,B,D,z])})};b.prototype.drawGraph=function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")};b.prototype.pointAttribs=function(a,c){var b=this.options,d=this.pointAttrToOptions||{};var e=d.stroke||
"borderColor";var h=d["stroke-width"]||"borderWidth",g=a&&a.color||this.color,f=a&&a[e]||b[e]||g,k=a&&a[h]||b[h]||this[h]||0;d=a&&a.options.dashStyle||b.dashStyle;var m=E(a&&a.opacity,b.opacity,1);if(a&&this.zones.length){var l=a.getZone();g=a.options.color||l&&(l.color||a.nonZonedColor)||this.color;l&&(f=l.borderColor||f,d=l.dashStyle||d,k=l.borderWidth||k)}c&&a&&(a=J(b.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,g=a.color||"undefined"!==typeof c&&v(g).brighten(a.brightness).get()||
g,f=a[e]||f,k=a[h]||k,d=a.dashStyle||d,m=E(a.opacity,m));e={fill:g,stroke:f,"stroke-width":k,opacity:m};d&&(e.dashstyle=d);return e};b.prototype.drawPoints=function(){var a=this,c=this.chart,b=a.options,d=c.renderer,e=b.animationLimit||250,g;a.points.forEach(function(h){var f=h.graphic,k=!!f,m=f&&c.pointCount<e?"animate":"attr";if(n(h.plotY)&&null!==h.y){g=h.shapeArgs;f&&h.hasNewShapeType()&&(f=f.destroy());a.enabledDataSorting&&(h.startXPos=a.xAxis.reversed?-(g?g.width||0:0):a.xAxis.width);f||(h.graphic=
f=d[h.shapeType](g).add(h.group||a.group))&&a.enabledDataSorting&&c.hasRendered&&c.pointCount<e&&(f.attr({x:h.startXPos}),k=!0,m="animate");if(f&&k)f[m](J(g));if(b.borderRadius)f[m]({r:b.borderRadius});c.styledMode||f[m](a.pointAttribs(h,h.selected&&"select")).shadow(!1!==h.allowShadow&&b.shadow,null,b.stacking&&!b.borderRadius);f&&(f.addClass(h.getClassName(),!0),f.attr({visibility:h.visible?"inherit":"hidden"}))}else f&&(h.graphic=f.destroy())})};b.prototype.drawTracker=function(){var a=this,c=
a.chart,b=c.pointer,d=function(a){var c=b.getPointFromEvent(a);"undefined"!==typeof c&&(b.isDirectTouch=!0,c.onMouseOver(a))},e;a.points.forEach(function(a){e=u(a.dataLabels)?a.dataLabels:a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);e.forEach(function(c){c.div?c.div.point=a:c.element.point=a})});a._hasTracking||(a.trackerGroups.forEach(function(e){if(a[e]){a[e].addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(f)a[e].on("touchstart",
d);!c.styledMode&&a.options.cursor&&a[e].css(q).css({cursor:a.options.cursor})}}),a._hasTracking=!0);D(this,"afterDrawTracker")};b.prototype.remove=function(){var a=this,c=a.chart;c.hasRendered&&c.series.forEach(function(c){c.type===a.type&&(c.isDirty=!0)});G.prototype.remove.apply(a,arguments)};b.defaultOptions=J(G.defaultOptions,{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
select:{color:H.neutralColor20,borderColor:H.neutralColor100}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:H.backgroundColor});return b}(G);l(B.prototype,{cropShoulder:0,directTouch:!0,drawLegendSymbol:z.drawRectangle,getSymbol:e,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]});C.registerSeriesType("column",B);"";"";return B});O(e,"Series/Bar/BarSeries.js",[e["Series/Column/ColumnSeries.js"],e["Core/Series/SeriesRegistry.js"],
e["Core/Utilities.js"]],function(e,b,I){var D=this&&this.__extends||function(){var b=function(e,x){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,e){b.__proto__=e}||function(b,e){for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])};return b(e,x)};return function(e,x){function w(){this.constructor=e}b(e,x);e.prototype=null===x?Object.create(x):(w.prototype=x.prototype,new w)}}(),H=I.extend,G=I.merge;I=function(b){function B(){var e=null!==b&&b.apply(this,arguments)||this;e.data=void 0;
e.options=void 0;e.points=void 0;return e}D(B,b);B.defaultOptions=G(e.defaultOptions,{});return B}(e);H(I.prototype,{inverted:!0});b.registerSeriesType("bar",I);"";return I});O(e,"Series/Scatter/ScatterSeries.js",[e["Series/Column/ColumnSeries.js"],e["Series/Line/LineSeries.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z){var D=this&&this.__extends||function(){var b=function(e,v){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d}||
function(b,d){for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])};return b(e,v)};return function(e,v){function f(){this.constructor=e}b(e,v);e.prototype=null===v?Object.create(v):(f.prototype=v.prototype,new f)}}(),G=z.addEvent,C=z.extend,B=z.merge;z=function(e){function w(){var b=null!==e&&e.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}D(w,e);w.prototype.applyJitter=function(){var b=this,e=this.options.jitter,d=this.points.length;e&&this.points.forEach(function(f,
k){["x","y"].forEach(function(l,q){var v="plot"+l.toUpperCase();if(e[l]&&!f.isNull){var n=b[l+"Axis"];var w=e[l]*n.transA;if(n&&!n.isLog){var E=Math.max(0,f[v]-w);n=Math.min(n.len,f[v]+w);q=1E4*Math.sin(k+q*d);f[v]=E+(n-E)*(q-Math.floor(q));"x"===l&&(f.clientX=f.plotX)}}})})};w.prototype.drawGraph=function(){(this.options.lineWidth||0===this.options.lineWidth&&this.graph&&this.graph.strokeWidth())&&e.prototype.drawGraph.call(this)};w.defaultOptions=B(b.defaultOptions,{lineWidth:0,findNearestPointBy:"xy",
jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}});return w}(b);C(z.prototype,{drawTracker:e.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1});G(z,"afterTranslate",function(){this.applyJitter()});I.registerSeriesType("scatter",
z);"";return z});O(e,"Mixins/CenteredSeries.js",[e["Core/Globals.js"],e["Core/Series/Series.js"],e["Core/Utilities.js"]],function(e,b,I){var D=I.isNumber,H=I.pick,G=I.relativeLength,C=e.deg2rad;return e.CenteredSeriesMixin={getCenter:function(){var e=this.options,D=this.chart,w=2*(e.slicedOffset||0),v=D.plotWidth-2*w,f=D.plotHeight-2*w,d=e.center,q=Math.min(v,f),k=e.size,l=e.innerSize||0;"string"===typeof k&&(k=parseFloat(k));"string"===typeof l&&(l=parseFloat(l));e=[H(d[0],"50%"),H(d[1],"50%"),H(k&&
0>k?void 0:e.size,"100%"),H(l&&0>l?void 0:e.innerSize||0,"0%")];!D.angular||this instanceof b||(e[3]=0);for(d=0;4>d;++d)k=e[d],D=2>d||2===d&&/%$/.test(k),e[d]=G(k,[v,f,q,e[2]][d])+(D?w:0);e[3]>e[2]&&(e[3]=e[2]);return e},getStartAndEndRadians:function(b,e){b=D(b)?b:0;e=D(e)&&e>b&&360>e-b?e:b+360;return{start:C*(b+-90),end:C*(e+-90)}}}});O(e,"Series/Pie/PiePoint.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Series/Point.js"],e["Core/Utilities.js"]],function(e,b,I){var D=this&&this.__extends||
function(){var b=function(e,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d}||function(b,d){for(var e in d)d.hasOwnProperty(e)&&(b[e]=d[e])};return b(e,d)};return function(e,d){function f(){this.constructor=e}b(e,d);e.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),H=e.setAnimation,G=I.addEvent,C=I.defined;e=I.extend;var B=I.isNumber,x=I.pick,w=I.relativeLength;I=function(e){function f(){var b=null!==e&&e.apply(this,arguments)||this;
b.labelDistance=void 0;b.options=void 0;b.series=void 0;return b}D(f,e);f.prototype.getConnectorPath=function(){var b=this.labelPosition,e=this.series.options.dataLabels,f=e.connectorShape,l=this.connectorShapes;l[f]&&(f=l[f]);return f.call(this,{x:b.final.x,y:b.final.y,alignment:b.alignment},b.connectorPosition,e)};f.prototype.getTranslate=function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}};f.prototype.haloPath=function(b){var d=this.shapeArgs;return this.sliced||!this.visible?
[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+b,d.r+b,{innerR:d.r-1,start:d.start,end:d.end})};f.prototype.init=function(){b.prototype.init.apply(this,arguments);var d=this;d.name=x(d.name,"Slice");var e=function(b){d.slice("select"===b.type)};G(d,"select",e);G(d,"unselect",e);return d};f.prototype.isValid=function(){return B(this.y)&&0<=this.y};f.prototype.setVisible=function(b,e){var d=this,f=d.series,q=f.chart,v=f.options.ignoreHiddenPoint;e=x(e,v);b!==d.visible&&(d.visible=d.options.visible=
b="undefined"===typeof b?!d.visible:b,f.options.data[f.data.indexOf(d)]=d.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(e){if(d[e])d[e][b?"show":"hide"](b)}),d.legendItem&&q.legend.colorizeItem(d,b),b||"hover"!==d.state||d.setState(""),v&&(f.isDirty=!0),e&&q.redraw())};f.prototype.slice=function(b,e,f){var d=this.series;H(f,d.chart);x(e,!0);this.sliced=this.options.sliced=C(b)?b:!this.sliced;d.options.data[d.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())};return f}(b);e(I.prototype,{connectorShapes:{fixedOffset:function(b,e,d){var f=e.breakAt;e=e.touchingSliceAt;return[["M",b.x,b.y],d.softConnector?["C",b.x+("left"===b.alignment?-5:5),b.y,2*f.x-e.x,2*f.y-e.y,f.x,f.y]:["L",f.x,f.y],["L",e.x,e.y]]},straight:function(b,e){e=e.touchingSliceAt;return[["M",b.x,b.y],["L",e.x,e.y]]},crookedLine:function(b,e,d){e=e.touchingSliceAt;var f=this.series,k=f.center[0],l=f.chart.plotWidth,v=f.chart.plotLeft;
f=b.alignment;var u=this.shapeArgs.r;d=w(d.crookDistance,1);l="left"===f?k+u+(l+v-k-u)*(1-d):v+(k-u)*d;d=["L",l,b.y];k=!0;if("left"===f?l>b.x||l<e.x:l<b.x||l>e.x)k=!1;b=[["M",b.x,b.y]];k&&b.push(d);b.push(["L",e.x,e.y]);return b}}});return I});O(e,"Series/Pie/PieSeries.js",[e["Mixins/CenteredSeries.js"],e["Series/Column/ColumnSeries.js"],e["Core/Globals.js"],e["Mixins/LegendSymbol.js"],e["Core/Color/Palette.js"],e["Series/Pie/PiePoint.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],
e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C,B,x,w){var v=this&&this.__extends||function(){var b=function(d,e){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,c){b.__proto__=c}||function(b,c){for(var d in c)c.hasOwnProperty(d)&&(b[d]=c[d])};return b(d,e)};return function(d,e){function f(){this.constructor=d}b(d,e);d.prototype=null===e?Object.create(e):(f.prototype=e.prototype,new f)}}(),f=e.getStartAndEndRadians;I=I.noop;var d=w.clamp,q=
w.extend,k=w.fireEvent,l=w.merge,D=w.pick,u=w.relativeLength;w=function(b){function e(){var d=null!==b&&b.apply(this,arguments)||this;d.center=void 0;d.data=void 0;d.maxLabelDistance=void 0;d.options=void 0;d.points=void 0;return d}v(e,b);e.prototype.animate=function(b){var d=this,c=d.points,e=d.startAngleRad;b||c.forEach(function(a){var c=a.graphic,b=a.shapeArgs;c&&b&&(c.attr({r:D(a.startR,d.center&&d.center[3]/2),start:e,end:e}),c.animate({r:b.r,start:b.start,end:b.end},d.options.animation))})};
e.prototype.drawEmpty=function(){var b=this.startAngleRad,d=this.endAngleRad,c=this.options;if(0===this.total&&this.center){var e=this.center[0];var a=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(e,a,this.center[1]/2,0,b,d).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:x.prototype.symbols.arc(e,a,this.center[2]/2,0,{start:b,end:d,innerR:this.center[3]/2})});this.chart.styledMode||this.graph.attr({"stroke-width":c.borderWidth,fill:c.fillColor||"none",stroke:c.color||
H.neutralColor20})}else this.graph&&(this.graph=this.graph.destroy())};e.prototype.drawPoints=function(){var b=this.chart.renderer;this.points.forEach(function(d){d.graphic&&d.hasNewShapeType()&&(d.graphic=d.graphic.destroy());d.graphic||(d.graphic=b[d.shapeType](d.shapeArgs).add(d.series.group),d.delayedRendering=!0)})};e.prototype.generatePoints=function(){b.prototype.generatePoints.call(this);this.updateTotals()};e.prototype.getX=function(b,e,c){var g=this.center,a=this.radii?this.radii[c.index]||
0:g[2]/2;b=Math.asin(d((b-g[1])/(a+c.labelDistance),-1,1));return g[0]+(e?-1:1)*Math.cos(b)*(a+c.labelDistance)+(0<c.labelDistance?(e?-1:1)*this.options.dataLabels.padding:0)};e.prototype.hasData=function(){return!!this.processedXData.length};e.prototype.redrawPoints=function(){var b=this,d=b.chart,c=d.renderer,e,a,h,f,k=b.options.shadow;this.drawEmpty();!k||b.shadowGroup||d.styledMode||(b.shadowGroup=c.g("shadow").attr({zIndex:-1}).add(b.group));b.points.forEach(function(g){var m={};a=g.graphic;
if(!g.isNull&&a){var r=void 0;f=g.shapeArgs;e=g.getTranslate();d.styledMode||(r=g.shadowGroup,k&&!r&&(r=g.shadowGroup=c.g("shadow").add(b.shadowGroup)),r&&r.attr(e),h=b.pointAttribs(g,g.selected&&"select"));g.delayedRendering?(a.setRadialReference(b.center).attr(f).attr(e),d.styledMode||a.attr(h).attr({"stroke-linejoin":"round"}).shadow(k,r),g.delayedRendering=!1):(a.setRadialReference(b.center),d.styledMode||l(!0,m,h),l(!0,m,f,e),a.animate(m));a.attr({visibility:g.visible?"inherit":"hidden"});a.addClass(g.getClassName(),
!0)}else a&&(g.graphic=a.destroy())})};e.prototype.sortByAngle=function(b,d){b.sort(function(c,b){return"undefined"!==typeof c.angle&&(b.angle-c.angle)*d})};e.prototype.translate=function(b){this.generatePoints();var d=0,c=this.options,e=c.slicedOffset,a=e+(c.borderWidth||0),h=f(c.startAngle,c.endAngle),l=this.startAngleRad=h.start;h=(this.endAngleRad=h.end)-l;var n=this.points,q=c.dataLabels.distance;c=c.ignoreHiddenPoint;var v,w=n.length;b||(this.center=b=this.getCenter());for(v=0;v<w;v++){var x=
n[v];var E=l+d*h;!x.isValid()||c&&!x.visible||(d+=x.percentage/100);var z=l+d*h;var B={x:b[0],y:b[1],r:b[2]/2,innerR:b[3]/2,start:Math.round(1E3*E)/1E3,end:Math.round(1E3*z)/1E3};x.shapeType="arc";x.shapeArgs=B;x.labelDistance=D(x.options.dataLabels&&x.options.dataLabels.distance,q);x.labelDistance=u(x.labelDistance,B.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,x.labelDistance);z=(z+E)/2;z>1.5*Math.PI?z-=2*Math.PI:z<-Math.PI/2&&(z+=2*Math.PI);x.slicedTranslation={translateX:Math.round(Math.cos(z)*
e),translateY:Math.round(Math.sin(z)*e)};B=Math.cos(z)*b[2]/2;var t=Math.sin(z)*b[2]/2;x.tooltipPos=[b[0]+.7*B,b[1]+.7*t];x.half=z<-Math.PI/2||z>Math.PI/2?1:0;x.angle=z;E=Math.min(a,x.labelDistance/5);x.labelPosition={natural:{x:b[0]+B+Math.cos(z)*x.labelDistance,y:b[1]+t+Math.sin(z)*x.labelDistance},"final":{},alignment:0>x.labelDistance?"center":x.half?"right":"left",connectorPosition:{breakAt:{x:b[0]+B+Math.cos(z)*E,y:b[1]+t+Math.sin(z)*E},touchingSliceAt:{x:b[0]+B,y:b[1]+t}}}}k(this,"afterTranslate")};
e.prototype.updateTotals=function(){var b,d=0,c=this.points,e=c.length,a=this.options.ignoreHiddenPoint;for(b=0;b<e;b++){var h=c[b];!h.isValid()||a&&!h.visible||(d+=h.y)}this.total=d;for(b=0;b<e;b++)h=c[b],h.percentage=0<d&&(h.visible||!a)?h.y/d*100:0,h.total=d};e.defaultOptions=l(C.defaultOptions,{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?
void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:H.backgroundColor,borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}});return e}(C);q(w.prototype,{axisTypes:[],directTouch:!0,drawGraph:void 0,drawLegendSymbol:z.drawRectangle,drawTracker:b.prototype.drawTracker,getCenter:e.getCenter,getSymbol:I,isCartesian:!1,
noSharedTooltip:!0,pointAttribs:b.prototype.pointAttribs,pointClass:G,requireSorting:!1,searchPoint:I,trackerGroups:["group","dataLabelsGroup"]});B.registerSeriesType("pie",w);"";return w});O(e,"Core/Series/DataLabels.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/FormatUtilities.js"],e["Core/Globals.js"],e["Core/Color/Palette.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,b,I,z,H,G,C){var D=e.getDeferredAnimation,x=b.format;e=I.noop;
G=G.seriesTypes;var w=C.arrayMax,v=C.clamp,f=C.defined,d=C.extend,q=C.fireEvent,k=C.isArray,l=C.merge,N=C.objectEach,u=C.pick,n=C.relativeLength,J=C.splat,E=C.stableSort;"";I.distribute=function(b,c,d){function a(a,c){return a.target-c.target}var e,g=!0,f=b,k=[];var l=0;var m=f.reducedLen||c;for(e=b.length;e--;)l+=b[e].size;if(l>m){E(b,function(a,c){return(c.rank||0)-(a.rank||0)});for(l=e=0;l<=m;)l+=b[e].size,e++;k=b.splice(e-1,b.length)}E(b,a);for(b=b.map(function(a){return{size:a.size,targets:[a.target],
align:u(a.align,.5)}});g;){for(e=b.length;e--;)g=b[e],l=(Math.min.apply(0,g.targets)+Math.max.apply(0,g.targets))/2,g.pos=v(l-g.size*g.align,0,c-g.size);e=b.length;for(g=!1;e--;)0<e&&b[e-1].pos+b[e-1].size>b[e].pos&&(b[e-1].size+=b[e].size,b[e-1].targets=b[e-1].targets.concat(b[e].targets),b[e-1].align=.5,b[e-1].pos+b[e-1].size>c&&(b[e-1].pos=c-b[e-1].size),b.splice(e,1),g=!0)}f.push.apply(f,k);e=0;b.some(function(a){var b=0;if(a.targets.some(function(){f[e].pos=a.pos+b;if("undefined"!==typeof d&&
Math.abs(f[e].pos-f[e].target)>d)return f.slice(0,e+1).forEach(function(a){delete a.pos}),f.reducedLen=(f.reducedLen||c)-.1*c,f.reducedLen>.1*c&&I.distribute(f,c,d),!0;b+=f[e].size;e++}))return!0});E(f,a)};H.prototype.drawDataLabels=function(){function b(a,c){var b=c.filter;return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function c(a,c){var b=[],d;if(k(a)&&!k(c))b=a.map(function(a){return l(a,c)});
else if(k(c)&&!k(a))b=c.map(function(c){return l(a,c)});else if(k(a)||k(c))for(d=Math.max(a.length,c.length);d--;)b[d]=l(a[d],c[d]);else b=l(a,c);return b}var d=this,a=d.chart,e=d.options,r=e.dataLabels,n=d.points,v,w=d.hasRendered||0,E=r.animation;E=r.defer?D(a,E,d):{defer:0,duration:0};var B=a.renderer;r=c(c(a.options.plotOptions&&a.options.plotOptions.series&&a.options.plotOptions.series.dataLabels,a.options.plotOptions&&a.options.plotOptions[d.type]&&a.options.plotOptions[d.type].dataLabels),
r);q(this,"drawDataLabels");if(k(r)||r.enabled||d._hasPointLabels){var C=d.plotGroup("dataLabelsGroup","data-labels",w?"inherit":"hidden",r.zIndex||6);C.attr({opacity:+w});!w&&(w=d.dataLabelsGroup)&&(d.visible&&C.show(!0),w[e.animation?"animate":"attr"]({opacity:1},E));n.forEach(function(g){v=J(c(r,g.dlOptions||g.options&&g.options.dataLabels));v.forEach(function(c,h){var k=c.enabled&&(!g.isNull||g.dataLabelOnNull)&&b(g,c),l=g.dataLabels?g.dataLabels[h]:g.dataLabel,m=g.connectors?g.connectors[h]:
g.connector,r=u(c.distance,g.labelDistance),n=!l;if(k){var q=g.getLabelConfig();var t=u(c[g.formatPrefix+"Format"],c.format);q=f(t)?x(t,q,a):(c[g.formatPrefix+"Formatter"]||c.formatter).call(q,c);t=c.style;var v=c.rotation;a.styledMode||(t.color=u(c.color,t.color,d.color,z.neutralColor100),"contrast"===t.color?(g.contrastColor=B.getContrast(g.color||d.color),t.color=!f(r)&&c.inside||0>r||e.stacking?g.contrastColor:z.neutralColor100):delete g.contrastColor,e.cursor&&(t.cursor=e.cursor));var w={r:c.borderRadius||
0,rotation:v,padding:c.padding,zIndex:1};a.styledMode||(w.fill=c.backgroundColor,w.stroke=c.borderColor,w["stroke-width"]=c.borderWidth);N(w,function(a,c){"undefined"===typeof a&&delete w[c]})}!l||k&&f(q)?k&&f(q)&&(l?w.text=q:(g.dataLabels=g.dataLabels||[],l=g.dataLabels[h]=v?B.text(q,0,-9999,c.useHTML).addClass("highcharts-data-label"):B.label(q,0,-9999,c.shape,null,null,c.useHTML,null,"data-label"),h||(g.dataLabel=l),l.addClass(" highcharts-data-label-color-"+g.colorIndex+" "+(c.className||"")+
(c.useHTML?" highcharts-tracker":""))),l.options=c,l.attr(w),a.styledMode||l.css(t).shadow(c.shadow),l.added||l.add(C),c.textPath&&!c.useHTML&&(l.setTextPath(g.getDataLabelPath&&g.getDataLabelPath(l)||g.graphic,c.textPath),g.dataLabelPath&&!c.textPath.enabled&&(g.dataLabelPath=g.dataLabelPath.destroy())),d.alignDataLabel(g,l,c,null,n)):(g.dataLabel=g.dataLabel&&g.dataLabel.destroy(),g.dataLabels&&(1===g.dataLabels.length?delete g.dataLabels:delete g.dataLabels[h]),h||delete g.dataLabel,m&&(g.connector=
g.connector.destroy(),g.connectors&&(1===g.connectors.length?delete g.connectors:delete g.connectors[h])))})})}q(this,"afterDrawDataLabels")};H.prototype.alignDataLabel=function(b,c,e,a,f){var g=this,h=this.chart,k=this.isCartesian&&h.inverted,l=this.enabledDataSorting,m=u(b.dlBox&&b.dlBox.centerX,b.plotX,-9999),n=u(b.plotY,-9999),q=c.getBBox(),v=e.rotation,w=e.align,t=h.isInsidePlot(m,Math.round(n),{inverted:k,paneCoordinates:!0,series:g}),p="justify"===u(e.overflow,l?"none":"justify"),D=this.visible&&
!1!==b.visible&&(b.series.forceDL||l&&!p||t||u(e.inside,!!this.options.stacking)&&a&&h.isInsidePlot(m,k?a.x+1:a.y+a.height-1,{inverted:k,paneCoordinates:!0,series:g}));var x=function(a){l&&g.xAxis&&!p&&g.setDataLabelStartPos(b,c,f,t,a)};if(D){var z=h.renderer.fontMetrics(h.styledMode?void 0:e.style.fontSize,c).b;a=d({x:k?this.yAxis.len-n:m,y:Math.round(k?this.xAxis.len-m:n),width:0,height:0},a);d(e,{width:q.width,height:q.height});v?(p=!1,m=h.renderer.rotCorr(z,v),m={x:a.x+(e.x||0)+a.width/2+m.x,
y:a.y+(e.y||0)+{top:0,middle:.5,bottom:1}[e.verticalAlign]*a.height},x(m),c[f?"attr":"animate"](m).attr({align:w}),x=(v+720)%360,x=180<x&&360>x,"left"===w?m.y-=x?q.height:0:"center"===w?(m.x-=q.width/2,m.y-=q.height/2):"right"===w&&(m.x-=q.width,m.y-=x?0:q.height),c.placed=!0,c.alignAttr=m):(x(a),c.align(e,void 0,a),m=c.alignAttr);p&&0<=a.height?this.justifyDataLabel(c,e,m,q,a,f):u(e.crop,!0)&&(D=h.isInsidePlot(m.x,m.y,{paneCoordinates:!0,series:g})&&h.isInsidePlot(m.x+q.width,m.y+q.height,{paneCoordinates:!0,
series:g}));if(e.shape&&!v)c[f?"attr":"animate"]({anchorX:k?h.plotWidth-b.plotY:b.plotX,anchorY:k?h.plotHeight-b.plotX:b.plotY})}f&&l&&(c.placed=!1);D||l&&!p||(c.hide(!0),c.placed=!1)};H.prototype.setDataLabelStartPos=function(b,c,d,a,e){var g=this.chart,f=g.inverted,h=this.xAxis,k=h.reversed,l=f?c.height/2:c.width/2;b=(b=b.pointWidth)?b/2:0;h=f?e.x:k?-l-b:h.width-l+b;e=f?k?this.yAxis.height-l+b:-l-b:e.y;c.startXPos=h;c.startYPos=e;a?"hidden"===c.visibility&&(c.show(),c.attr({opacity:0}).animate({opacity:1})):
c.attr({opacity:1}).animate({opacity:0},void 0,c.hide);g.hasRendered&&(d&&c.attr({x:c.startXPos,y:c.startYPos}),c.placed=!0)};H.prototype.justifyDataLabel=function(b,c,d,a,e,f){var g=this.chart,h=c.align,k=c.verticalAlign,l=b.box?0:b.padding||0,m=c.x;m=void 0===m?0:m;var n=c.y;var r=void 0===n?0:n;n=(d.x||0)+l;if(0>n){"right"===h&&0<=m?(c.align="left",c.inside=!0):m-=n;var q=!0}n=(d.x||0)+a.width-l;n>g.plotWidth&&("left"===h&&0>=m?(c.align="right",c.inside=!0):m+=g.plotWidth-n,q=!0);n=d.y+l;0>n&&
("bottom"===k&&0<=r?(c.verticalAlign="top",c.inside=!0):r-=n,q=!0);n=(d.y||0)+a.height-l;n>g.plotHeight&&("top"===k&&0>=r?(c.verticalAlign="bottom",c.inside=!0):r+=g.plotHeight-n,q=!0);q&&(c.x=m,c.y=r,b.placed=!f,b.align(c,void 0,e));return q};G.pie&&(G.pie.prototype.dataLabelPositioners={radialDistributionY:function(b){return b.top+b.distributeBox.pos},radialDistributionX:function(b,c,d,a){return b.getX(d<c.top+2||d>c.bottom-2?a:d,c.half,c)},justify:function(b,c,d){return d[0]+(b.half?-1:1)*(c+b.labelDistance)},
alignToPlotEdges:function(b,c,d,a){b=b.getBBox().width;return c?b+a:d-b-a},alignToConnectors:function(b,c,d,a){var e=0,g;b.forEach(function(a){g=a.dataLabel.getBBox().width;g>e&&(e=g)});return c?e+a:d-e-a}},G.pie.prototype.drawDataLabels=function(){var b=this,c=b.data,d,a=b.chart,e=b.options.dataLabels||{},k=e.connectorPadding,n,q=a.plotWidth,v=a.plotHeight,x=a.plotLeft,D=Math.round(a.chartWidth/3),E,B=b.center,C=B[2]/2,t=B[1],p,G,J,N,F=[[],[]],O,K,T,X,U=[0,0,0,0],W=b.dataLabelPositioners,Y;b.visible&&
(e.enabled||b._hasPointLabels)&&(c.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),H.prototype.drawDataLabels.apply(b),c.forEach(function(a){a.dataLabel&&(a.visible?(F[a.half].push(a),a.dataLabel._pos=null,!f(e.style.width)&&!f(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>D&&(a.dataLabel.css({width:Math.round(.7*
D)+"px"}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&delete a.dataLabels))}),F.forEach(function(c,g){var h=c.length,l=[],m;if(h){b.sortByAngle(c,g-.5);if(0<b.maxLabelDistance){var n=Math.max(0,t-C-b.maxLabelDistance);var r=Math.min(t+C+b.maxLabelDistance,a.plotHeight);c.forEach(function(b){0<b.labelDistance&&b.dataLabel&&(b.top=Math.max(0,t-C-b.labelDistance),b.bottom=Math.min(t+C+b.labelDistance,a.plotHeight),m=b.dataLabel.getBBox().height||
21,b.distributeBox={target:b.labelPosition.natural.y-b.top+m/2,size:m,rank:b.y},l.push(b.distributeBox))});n=r+m-n;I.distribute(l,n,n/5)}for(X=0;X<h;X++){d=c[X];J=d.labelPosition;p=d.dataLabel;T=!1===d.visible?"hidden":"inherit";K=n=J.natural.y;l&&f(d.distributeBox)&&("undefined"===typeof d.distributeBox.pos?T="hidden":(N=d.distributeBox.size,K=W.radialDistributionY(d)));delete d.positionIndex;if(e.justify)O=W.justify(d,C,B);else switch(e.alignTo){case "connectors":O=W.alignToConnectors(c,g,q,x);
break;case "plotEdges":O=W.alignToPlotEdges(p,g,q,x);break;default:O=W.radialDistributionX(b,d,K,n)}p._attr={visibility:T,align:J.alignment};Y=d.options.dataLabels||{};p._pos={x:O+u(Y.x,e.x)+({left:k,right:-k}[J.alignment]||0),y:K+u(Y.y,e.y)-10};J.final.x=O;J.final.y=K;u(e.crop,!0)&&(G=p.getBBox().width,n=null,O-G<k&&1===g?(n=Math.round(G-O+k),U[3]=Math.max(n,U[3])):O+G>q-k&&0===g&&(n=Math.round(O+G-q+k),U[1]=Math.max(n,U[1])),0>K-N/2?U[0]=Math.max(Math.round(-K+N/2),U[0]):K+N/2>v&&(U[2]=Math.max(Math.round(K+
N/2-v),U[2])),p.sideOverflow=n)}}}),0===w(U)||this.verifyDataLabelOverflow(U))&&(this.placeDataLabels(),this.points.forEach(function(c){Y=l(e,c.options.dataLabels);if(n=u(Y.connectorWidth,1)){var d;E=c.connector;if((p=c.dataLabel)&&p._pos&&c.visible&&0<c.labelDistance){T=p._attr.visibility;if(d=!E)c.connector=E=a.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+c.colorIndex+(c.className?" "+c.className:"")).add(b.dataLabelsGroup),a.styledMode||E.attr({"stroke-width":n,
stroke:Y.connectorColor||c.color||z.neutralColor60});E[d?"attr":"animate"]({d:c.getConnectorPath()});E.attr("visibility",T)}else E&&(c.connector=E.destroy())}}))},G.pie.prototype.placeDataLabels=function(){this.points.forEach(function(b){var c=b.dataLabel,d;c&&b.visible&&((d=c._pos)?(c.sideOverflow&&(c._attr.width=Math.max(c.getBBox().width-c.sideOverflow,0),c.css({width:c._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),c.shortened=!0),c.attr(c._attr),
c[c.moved?"animate":"attr"](d),c.moved=!0):c&&c.attr({y:-9999}));delete b.distributeBox},this)},G.pie.prototype.alignDataLabel=e,G.pie.prototype.verifyDataLabelOverflow=function(b){var c=this.center,d=this.options,a=d.center,e=d.minSize||80,f=null!==d.size;if(!f){if(null!==a[0])var k=Math.max(c[2]-Math.max(b[1],b[3]),e);else k=Math.max(c[2]-b[1]-b[3],e),c[0]+=(b[3]-b[1])/2;null!==a[1]?k=v(k,e,c[2]-Math.max(b[0],b[2])):(k=v(k,e,c[2]-b[0]-b[2]),c[1]+=(b[0]-b[2])/2);k<c[2]?(c[2]=k,c[3]=Math.min(n(d.innerSize||
0,k),k),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):f=!0}return f});G.column&&(G.column.prototype.alignDataLabel=function(b,c,d,a,e){var f=this.chart.inverted,g=b.series,h=b.dlBox||b.shapeArgs,k=u(b.below,b.plotY>u(this.translatedThreshold,g.yAxis.len)),m=u(d.inside,!!this.options.stacking);h&&(a=l(h),0>a.y&&(a.height+=a.y,a.y=0),h=a.y+a.height-g.yAxis.len,0<h&&h<a.height&&(a.height-=h),f&&(a={x:g.yAxis.len-a.y-a.height,y:g.xAxis.len-a.x-a.width,width:a.height,height:a.width}),m||
(f?(a.x+=k?0:a.width,a.width=0):(a.y+=k?a.height:0,a.height=0)));d.align=u(d.align,!f||m?"center":k?"right":"left");d.verticalAlign=u(d.verticalAlign,f||m?"middle":k?"top":"bottom");H.prototype.alignDataLabel.call(this,b,c,d,a,e);d.inside&&b.contrastColor&&c.css({color:b.contrastColor})})});O(e,"Extensions/OverlappingDataLabels.js",[e["Core/Chart/Chart.js"],e["Core/Utilities.js"]],function(e,b){function D(b,e){var f=!1;if(b){var d=b.newOpacity;b.oldOpacity!==d&&(b.alignAttr&&b.placed?(b[d?"removeClass":
"addClass"]("highcharts-data-label-hidden"),f=!0,b.alignAttr.opacity=d,b[b.isOld?"animate":"attr"](b.alignAttr,null,function(){e.styledMode||b.css({pointerEvents:d?"auto":"none"});b.visibility=d?"inherit":"hidden"}),H(e,"afterHideOverlappingLabel")):b.attr({opacity:d}));b.isOld=!0}return f}var z=b.addEvent,H=b.fireEvent,G=b.isArray,C=b.isNumber,B=b.objectEach,x=b.pick;z(e,"render",function(){var b=this,e=[];(this.labelCollectors||[]).forEach(function(b){e=e.concat(b())});(this.yAxis||[]).forEach(function(b){b.stacking&&
b.options.stackLabels&&!b.options.stackLabels.allowOverlap&&B(b.stacking.stacks,function(b){B(b,function(b){e.push(b.label)})})});(this.series||[]).forEach(function(f){var d=f.options.dataLabels;f.visible&&(!1!==d.enabled||f._hasPointLabels)&&(d=function(d){return d.forEach(function(d){d.visible&&(G(d.dataLabels)?d.dataLabels:d.dataLabel?[d.dataLabel]:[]).forEach(function(f){var k=f.options;f.labelrank=x(k.labelrank,d.labelrank,d.shapeArgs&&d.shapeArgs.height);k.allowOverlap?(f.oldOpacity=f.opacity,
f.newOpacity=1,D(f,b)):e.push(f)})})},d(f.nodes||[]),d(f.points))});this.hideOverlappingLabels(e)});e.prototype.hideOverlappingLabels=function(b){var e=this,f=b.length,d=e.renderer,q,k,l,w=!1;var u=function(b){var e,c=b.box?0:b.padding||0,f=e=0,a;if(b&&(!b.alignAttr||b.placed)){var h=b.alignAttr||{x:b.attr("x"),y:b.attr("y")};var k=b.parentGroup;b.width||(e=b.getBBox(),b.width=e.width,b.height=e.height,e=d.fontMetrics(null,b.element).h);var l=b.width-2*c;(a={left:"0",center:"0.5",right:"1"}[b.alignValue])?
f=+a*l:C(b.x)&&Math.round(b.x)!==b.translateX&&(f=b.x-b.translateX);return{x:h.x+(k.translateX||0)+c-(f||0),y:h.y+(k.translateY||0)+c-e,width:b.width-2*c,height:b.height-2*c}}};for(k=0;k<f;k++)if(q=b[k])q.oldOpacity=q.opacity,q.newOpacity=1,q.absoluteBox=u(q);b.sort(function(b,d){return(d.labelrank||0)-(b.labelrank||0)});for(k=0;k<f;k++){var n=(u=b[k])&&u.absoluteBox;for(q=k+1;q<f;++q){var x=(l=b[q])&&l.absoluteBox;!n||!x||u===l||0===u.newOpacity||0===l.newOpacity||x.x>=n.x+n.width||x.x+x.width<=
n.x||x.y>=n.y+n.height||x.y+x.height<=n.y||((u.labelrank<l.labelrank?u:l).newOpacity=0)}}b.forEach(function(b){D(b,e)&&(w=!0)});w&&H(e,"afterHideAllOverlappingLabels")}});O(e,"Core/Responsive.js",[e["Core/Chart/Chart.js"],e["Core/Utilities.js"]],function(e,b){var D=b.find,z=b.isArray,H=b.isObject,G=b.merge,C=b.objectEach,B=b.pick,x=b.splat,w=b.uniqueKey;e.prototype.setResponsive=function(b,e){var d=this.options.responsive,f=[],k=this.currentResponsive;!e&&d&&d.rules&&d.rules.forEach(function(b){"undefined"===
typeof b._id&&(b._id=w());this.matchResponsiveRule(b,f)},this);e=G.apply(0,f.map(function(b){return D(d.rules,function(d){return d._id===b}).chartOptions}));e.isResponsiveOptions=!0;f=f.toString()||void 0;f!==(k&&k.ruleIds)&&(k&&this.update(k.undoOptions,b,!0),f?(k=this.currentOptions(e),k.isResponsiveOptions=!0,this.currentResponsive={ruleIds:f,mergedOptions:e,undoOptions:k},this.update(e,b,!0)):this.currentResponsive=void 0)};e.prototype.matchResponsiveRule=function(b,e){var d=b.condition;(d.callback||
function(){return this.chartWidth<=B(d.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=B(d.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=B(d.minWidth,0)&&this.chartHeight>=B(d.minHeight,0)}).call(this)&&e.push(b._id)};e.prototype.currentOptions=function(b){function e(b,f,q,u){var k;C(b,function(b,l){if(!u&&-1<d.collectionsWithUpdate.indexOf(l)&&f[l])for(b=x(b),q[l]=[],k=0;k<Math.max(b.length,f[l].length);k++)f[l][k]&&(void 0===b[k]?q[l][k]=f[l][k]:(q[l][k]={},e(b[k],f[l][k],q[l][k],u+1)));else H(b)?
(q[l]=z(b)?[]:{},e(b,f[l]||{},q[l],u+1)):q[l]="undefined"===typeof f[l]?null:f[l]})}var d=this,q={};e(b,this.options,q,0);return q}});O(e,"masters/highcharts.src.js",[e["Core/Globals.js"],e["Core/Utilities.js"],e["Core/Options.js"],e["Core/Animation/Fx.js"],e["Core/Animation/AnimationUtilities.js"],e["Core/Renderer/HTML/AST.js"],e["Core/FormatUtilities.js"],e["Core/Renderer/SVG/SVGElement.js"],e["Core/Series/Series.js"]],function(e,b,I,z,H,G,C,B,x){e.animate=H.animate;e.animObject=H.animObject;e.getDeferredAnimation=
H.getDeferredAnimation;e.setAnimation=H.setAnimation;e.stop=H.stop;e.timers=z.timers;e.AST=G;e.Fx=z;e.Series=x;e.SVGElement=B;e.dateFormat=C.dateFormat;e.format=C.format;e.numberFormat=C.numberFormat;e.defaultOptions=I.defaultOptions;e.getOptions=I.getOptions;e.time=I.defaultTime;e.setOptions=I.setOptions;e.addEvent=b.addEvent;e.arrayMax=b.arrayMax;e.arrayMin=b.arrayMin;e.attr=b.attr;e.clearTimeout=b.clearTimeout;e.correctFloat=b.correctFloat;e.createElement=b.createElement;e.css=b.css;e.defined=
b.defined;e.destroyObjectProperties=b.destroyObjectProperties;e.discardElement=b.discardElement;e.erase=b.erase;e.error=b.error;e.extend=b.extend;e.extendClass=b.extendClass;e.find=b.find;e.fireEvent=b.fireEvent;e.getMagnitude=b.getMagnitude;e.getStyle=b.getStyle;e.inArray=b.inArray;e.isArray=b.isArray;e.isClass=b.isClass;e.isDOMElement=b.isDOMElement;e.isFunction=b.isFunction;e.isNumber=b.isNumber;e.isObject=b.isObject;e.isString=b.isString;e.keys=b.keys;e.merge=b.merge;e.normalizeTickInterval=b.normalizeTickInterval;
e.objectEach=b.objectEach;e.offset=b.offset;e.pad=b.pad;e.pick=b.pick;e.pInt=b.pInt;e.relativeLength=b.relativeLength;e.removeEvent=b.removeEvent;e.splat=b.splat;e.stableSort=b.stableSort;e.syncTimeout=b.syncTimeout;e.timeUnits=b.timeUnits;e.uniqueKey=b.uniqueKey;e.useSerialIds=b.useSerialIds;e.wrap=b.wrap;return e});e["masters/highcharts.src.js"]._modules=e;return e["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map

/***/ }),

/***/ "./node_modules/highcharts/modules/solid-gauge.js":
/*!********************************************************!*\
  !*** ./node_modules/highcharts/modules/solid-gauge.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v9.1.0 (2021-05-03)

 Solid angular gauge module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){ true&&module.exports?(a["default"]=a,module.exports=a): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js"),__webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(l){a(l);a.Highcharts=l;return a}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(a){function l(a,e,f,c){a.hasOwnProperty(e)||(a[e]=c.apply(null,f))}a=a?a._modules:{};l(a,"Core/Axis/SolidGaugeAxis.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,e){var f=
a.parse,c=e.extend,l=e.merge,b;(function(a){var b={initDataClasses:function(a){var c=this.chart,m,p=0,h=this.options;this.dataClasses=m=[];a.dataClasses.forEach(function(b,d){b=l(b);m.push(b);b.color||("category"===h.dataClassColor?(d=c.options.colors,b.color=d[p++],p===d.length&&(p=0)):b.color=f(h.minColor).tweenTo(f(h.maxColor),d/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=f(a[1])})},
toColor:function(a,c){var b=this.stops,f=this.dataClasses,h;if(f)for(h=f.length;h--;){var e=f[h];var d=e.from;b=e.to;if(("undefined"===typeof d||a>=d)&&("undefined"===typeof b||a<=b)){var k=e.color;c&&(c.dataClass=h);break}}else{this.logarithmic&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(h=b.length;h--&&!(a>b[h][0]););d=b[h]||b[h+1];b=b[h+1]||d;a=1-(b[0]-a)/(b[0]-d[0]||1);k=d.color.tweenTo(b.color,a)}return k}};a.init=function(a){c(a,b)}})(b||(b={}));return b});l(a,"Series/SolidGauge/SolidGaugeComposition.js",
[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,e){e=e.wrap;e(a.Renderer.prototype.symbols,"arc",function(a,c,e,b,l,k){a=a(c,e,b,l,k);k.rounded&&(b=((k.r||b)-(k.innerR||0))/2,c=a[0],k=a[2],"M"===c[0]&&"L"===k[0]&&(c=["A",b,b,0,1,1,c[1],c[2]],a[2]=["A",b,b,0,1,1,k[1],k[2]],a[4]=c));return a})});l(a,"Series/SolidGauge/SolidGaugeSeries.js",[a["Mixins/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Axis/SolidGaugeAxis.js"],a["Core/Utilities.js"]],function(a,e,l,c){var f=this&&this.__extends||
function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)b.hasOwnProperty(g)&&(a[g]=b[g])};return a(b,g)};return function(b,g){function c(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(c.prototype=g.prototype,new c)}}(),b=e.seriesTypes,n=b.gauge,k=b.pie.prototype,p=c.clamp,u=c.extend,m=c.isNumber,w=c.merge,h=c.pick,v=c.pInt,d={colorByPoint:!0,dataLabels:{y:0}};c=function(a){function b(){var b=
null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;b.axis=void 0;b.yAxis=void 0;b.startAngleRad=void 0;b.thresholdAngleRad=void 0;return b}f(b,a);b.prototype.translate=function(){var a=this.yAxis;l.init(a);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);n.prototype.translate.call(this)};b.prototype.drawPoints=function(){var a=this,b=a.yAxis,c=b.center,e=a.options,l=a.chart.renderer,d=e.overshoot,k=m(d)?d/180*Math.PI:0,
f;m(e.threshold)&&(f=b.startAngleRad+b.translate(e.threshold,null,null,null,!0));this.thresholdAngleRad=h(f,b.startAngleRad);a.points.forEach(function(d){if(!d.isNull){var f=d.graphic,g=b.startAngleRad+b.translate(d.y,null,null,null,!0),m=v(h(d.options.radius,e.radius,100))*c[2]/200,q=v(h(d.options.innerRadius,e.innerRadius,60))*c[2]/200,r=b.toColor(d.y,d),t=Math.min(b.startAngleRad,b.endAngleRad),n=Math.max(b.startAngleRad,b.endAngleRad);"none"===r&&(r=d.color||a.color||"none");"none"!==r&&(d.color=
r);g=p(g,t-k,n+k);!1===e.wrap&&(g=p(g,t,n));t=Math.min(g,a.thresholdAngleRad);g=Math.max(g,a.thresholdAngleRad);g-t>2*Math.PI&&(g=t+2*Math.PI);d.shapeArgs=q={x:c[0],y:c[1],r:m,innerR:q,start:t,end:g,rounded:e.rounded};d.startR=m;f?(m=q.d,f.animate(u({fill:r},q)),m&&(q.d=m)):d.graphic=f=l.arc(q).attr({fill:r,"sweep-flag":0}).add(a.group);a.chart.styledMode||("square"!==e.linecap&&f.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),f.attr({stroke:e.borderColor||"none","stroke-width":e.borderWidth||
0}));f&&f.addClass(d.getClassName(),!0)}})};b.prototype.animate=function(a){a||(this.startAngleRad=this.thresholdAngleRad,k.animate.call(this,a))};b.defaultOptions=w(n.defaultOptions,d);return b}(n);u(c.prototype,{drawLegendSymbol:a.drawRectangle});e.registerSeriesType("solidgauge",c);"";return c});l(a,"masters/modules/solid-gauge.src.js",[],function(){})});
//# sourceMappingURL=solid-gauge.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/Draggable.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/Draggable.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggableCore", {
  enumerable: true,
  get: function get() {
    return _DraggableCore.default;
  }
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _DraggableCore = _interopRequireDefault(__webpack_require__(/*! ./DraggableCore */ "./node_modules/react-draggable/build/cjs/DraggableCore.js"));

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
// Define <Draggable>
//
var Draggable = /*#__PURE__*/function (_React$Component) {
  _inherits(Draggable, _React$Component);

  var _super = _createSuper(Draggable);

  _createClass(Draggable, null, [{
    key: "getDerivedStateFromProps",
    // React 16.3+
    // Arity (props, state)
    value: function getDerivedStateFromProps(_ref, _ref2) {
      var position = _ref.position;
      var prevPropsPosition = _ref2.prevPropsPosition;

      // Set x/y if a new position is provided in props that is different than the previous.
      if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
        (0, _log.default)('Draggable: getDerivedStateFromProps %j', {
          position: position,
          prevPropsPosition: prevPropsPosition
        });
        return {
          x: position.x,
          y: position.y,
          prevPropsPosition: _objectSpread({}, position)
        };
      }

      return null;
    }
  }]);

  function Draggable(props
  /*: DraggableProps*/
  ) {
    var _this;

    _classCallCheck(this, Draggable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e, coreData) {
      (0, _log.default)('Draggable: onDragStart: %j', coreData); // Short-circuit if user's callback killed it.

      var shouldStart = _this.props.onStart(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData)); // Kills start event on core as well, so move handlers are never bound.


      if (shouldStart === false) return false;

      _this.setState({
        dragging: true,
        dragged: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDrag", function (e, coreData) {
      if (!_this.state.dragging) return false;
      (0, _log.default)('Draggable: onDrag: %j', coreData);
      var uiData = (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        x: uiData.x,
        y: uiData.y
      }; // Keep within bounds.

      if (_this.props.bounds) {
        // Save original x and y.
        var x = newState.x,
            y = newState.y; // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY; // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = (0, _positionFns.getBoundPosition)(_assertThisInitialized(_this), newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY; // Recalculate slack by noting how much was shaved by the boundPosition handler.

        newState.slackX = _this.state.slackX + (x - newState.x);
        newState.slackY = _this.state.slackY + (y - newState.y); // Update the event we fire to reflect what really happened after bounds took effect.

        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      } // Short-circuit if user's callback killed it.


      var shouldUpdate = _this.props.onDrag(e, uiData);

      if (shouldUpdate === false) return false;

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStop", function (e, coreData) {
      if (!_this.state.dragging) return false; // Short-circuit if user's callback killed it.

      var shouldContinue = _this.props.onStop(e, (0, _positionFns.createDraggableData)(_assertThisInitialized(_this), coreData));

      if (shouldContinue === false) return false;
      (0, _log.default)('Draggable: onDragStop: %j', coreData);
      var newState
      /*: $Shape<DraggableState>*/
      = {
        dragging: false,
        slackX: 0,
        slackY: 0
      }; // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.

      var controlled = Boolean(_this.props.position);

      if (controlled) {
        var _this$props$position = _this.props.position,
            x = _this$props$position.x,
            y = _this$props$position.y;
        newState.x = x;
        newState.y = y;
      }

      _this.setState(newState);
    });

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,
      // Whether or not we have been dragged before.
      dragged: false,
      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,
      prevPropsPosition: _objectSpread({}, props.position),
      // Used for compensating for out-of-bounds drags
      slackX: 0,
      slackY: 0,
      // Can only determine if SVG after mounting
      isElementSVG: false
    };

    if (props.position && !(props.onDrag || props.onStop)) {
      // eslint-disable-next-line no-console
      console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
    }

    return _this;
  }

  _createClass(Draggable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && this.findDOMNode() instanceof window.SVGElement) {
        this.setState({
          isElementSVG: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setState({
        dragging: false
      }); // prevents invariant if unmounted while dragging
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render()
    /*: ReactElement<any>*/
    {
      var _classNames;

      var _this$props = this.props,
          axis = _this$props.axis,
          bounds = _this$props.bounds,
          children = _this$props.children,
          defaultPosition = _this$props.defaultPosition,
          defaultClassName = _this$props.defaultClassName,
          defaultClassNameDragging = _this$props.defaultClassNameDragging,
          defaultClassNameDragged = _this$props.defaultClassNameDragged,
          position = _this$props.position,
          positionOffset = _this$props.positionOffset,
          scale = _this$props.scale,
          draggableCoreProps = _objectWithoutProperties(_this$props, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"]);

      var style = {};
      var svgTransform = null; // If this is controlled, we don't want to move it - unless it's dragging.

      var controlled = Boolean(position);
      var draggable = !controlled || this.state.dragging;
      var validPosition = position || defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
        // Set top if vertical drag is enabled
        y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
      }; // If this element was SVG, we use the `transform` attribute.

      if (this.state.isElementSVG) {
        svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
      } // Mark with class while dragging


      var className = (0, _classnames.default)(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames)); // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)

      return /*#__PURE__*/React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
        onStart: this.onDragStart,
        onDrag: this.onDrag,
        onStop: this.onDragStop
      }), React.cloneElement(React.Children.only(children), {
        className: className,
        style: _objectSpread(_objectSpread({}, children.props.style), style),
        transform: svgTransform
      }));
    }
  }]);

  return Draggable;
}(React.Component);

exports.default = Draggable;

_defineProperty(Draggable, "displayName", 'Draggable');

_defineProperty(Draggable, "propTypes", _objectSpread(_objectSpread({}, _DraggableCore.default.propTypes), {}, {
  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: _propTypes.default.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
    left: _propTypes.default.number,
    right: _propTypes.default.number,
    top: _propTypes.default.number,
    bottom: _propTypes.default.number
  }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
  defaultClassName: _propTypes.default.string,
  defaultClassNameDragging: _propTypes.default.string,
  defaultClassNameDragged: _propTypes.default.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),
  positionOffset: _propTypes.default.shape({
    x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
}));

_defineProperty(Draggable, "defaultProps", _objectSpread(_objectSpread({}, _DraggableCore.default.defaultProps), {}, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: {
    x: 0,
    y: 0
  },
  position: null,
  scale: 1
}));

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/DraggableCore.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/DraggableCore.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _domFns = __webpack_require__(/*! ./utils/domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

var _positionFns = __webpack_require__(/*! ./utils/positionFns */ "./node_modules/react-draggable/build/cjs/utils/positionFns.js");

var _shims = __webpack_require__(/*! ./utils/shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _log = _interopRequireDefault(__webpack_require__(/*! ./utils/log */ "./node_modules/react-draggable/build/cjs/utils/log.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Simple abstraction for dragging events names.
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
}; // Default to mouse events.

var dragEventFor = eventsFor.mouse;
/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/

/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/

/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/

/*:: export type ControlPosition = {x: number, y: number};*/

/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  nodeRef?: ?React.ElementRef<any>,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
  scale: number,
};*/

//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//
var DraggableCore = /*#__PURE__*/function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  var _super = _createSuper(DraggableCore);

  function DraggableCore() {
    var _this;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN,
      lastY: NaN,
      touchIdentifier: null
    });

    _defineProperty(_assertThisInitialized(_this), "mounted", false);

    _defineProperty(_assertThisInitialized(_this), "handleDragStart", function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e); // Only accept left-clicks.


      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false; // Get nodes. Be sure to grab relative document (could be iframed)

      var thisNode = _this.findDOMNode();

      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }

      var ownerDocument = thisNode.ownerDocument; // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.handle, thisNode) || _this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, _this.props.cancel, thisNode)) {
        return;
      } // Prevent scrolling on mobile devices, like ipad/iphone.
      // Important that this is after handle/cancel.


      if (e.type === 'touchstart') e.preventDefault(); // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.

      var touchIdentifier = (0, _domFns.getTouchIdentifier)(e);

      _this.setState({
        touchIdentifier: touchIdentifier
      }); // Get the current drag point from the event. This is used as the offset.


      var position = (0, _positionFns.getControlPosition)(e, touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return; // not possible but satisfies flow

      var x = position.x,
          y = position.y; // Create an event object with all the data parents need to make a decision here.

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDragStart: %j', coreEvent); // Call event handler. If it returns explicit false, cancel.

      (0, _log.default)('calling', _this.props.onStart);

      var shouldUpdate = _this.props.onStart(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) return; // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.

      if (_this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument); // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.

      _this.setState({
        dragging: true,
        lastX: x,
        lastY: y
      }); // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.


      (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, _this.handleDrag);
      (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDrag", function (e) {
      // Get the current drag point from the event. This is used as the offset.
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y; // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var deltaX = x - _this.state.lastX,
            deltaY = y - _this.state.lastY;

        var _snapToGrid = (0, _positionFns.snapToGrid)(_this.props.grid, deltaX, deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        deltaX = _snapToGrid2[0];
        deltaY = _snapToGrid2[1];
        if (!deltaX && !deltaY) return; // skip useless drag

        x = _this.state.lastX + deltaX, y = _this.state.lastY + deltaY;
      }

      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y);
      (0, _log.default)('DraggableCore: handleDrag: %j', coreEvent); // Call event handler. If it returns explicit false, trigger end.

      var shouldUpdate = _this.props.onDrag(e, coreEvent);

      if (shouldUpdate === false || _this.mounted === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents')
          /*: any*/
          )
          /*: MouseTouchEvent*/
          ); // I see why this insanity was deprecated
          // $FlowIgnore

          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

          _this.handleDragStop(event);
        }

        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragStop", function (e) {
      if (!_this.state.dragging) return;
      var position = (0, _positionFns.getControlPosition)(e, _this.state.touchIdentifier, _assertThisInitialized(_this));
      if (position == null) return;
      var x = position.x,
          y = position.y;
      var coreEvent = (0, _positionFns.createCoreData)(_assertThisInitialized(_this), x, y); // Call event handler

      var shouldContinue = _this.props.onStop(e, coreEvent);

      if (shouldContinue === false || _this.mounted === false) return false;

      var thisNode = _this.findDOMNode();

      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
      }

      (0, _log.default)('DraggableCore: handleDragStop: %j', coreEvent); // Reset the el.

      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      if (thisNode) {
        // Remove event handlers
        (0, _log.default)('DraggableCore: Removing handlers');
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      dragEventFor = eventsFor.mouse;
      return _this.handleDragStop(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStart(e);
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;
      return _this.handleDragStop(e);
    });

    return _this;
  }

  _createClass(DraggableCore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true; // Touch handlers must be added with {passive: false} to be cancelable.
      // https://developers.google.com/web/updates/2017/01/scrolling-intervention

      var thisNode = this.findDOMNode();

      if (thisNode) {
        (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false; // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.

      var thisNode = this.findDOMNode();

      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
          passive: false
        });
        if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
      }
    } // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.

  }, {
    key: "findDOMNode",
    value: function findDOMNode()
    /*: ?HTMLElement*/
    {
      return this.props.nodeRef ? this.props.nodeRef.current : _reactDom.default.findDOMNode(this);
    }
  }, {
    key: "render",
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return React.cloneElement(React.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See 
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(React.Component);

exports.default = DraggableCore;

_defineProperty(DraggableCore, "displayName", 'DraggableCore');

_defineProperty(DraggableCore, "propTypes", {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: _propTypes.default.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: _propTypes.default.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: _propTypes.default.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props
  /*: DraggableCoreProps*/
  , propName
  /*: $Keys<DraggableCoreProps>*/
  ) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: _propTypes.default.arrayOf(_propTypes.default.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: _propTypes.default.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: _propTypes.default.string,

  /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
   * Unfortunately, in order for <Draggable> to work properly, we need raw access
   * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
   * as in this example:
   *
   * function MyComponent() {
   *   const nodeRef = React.useRef(null);
   *   return (
   *     <Draggable nodeRef={nodeRef}>
   *       <div ref={nodeRef}>Example Target</div>
   *     </Draggable>
   *   );
   * }
   *
   * This can be used for arbitrarily nested components, so long as the ref ends up
   * pointing to the actual child DOM node and not a custom component.
   */
  nodeRef: _propTypes.default.object,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: _propTypes.default.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: _propTypes.default.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: _propTypes.default.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: _propTypes.default.func,

  /**
   * `scale`, if set, applies scaling while dragging an element
   */
  scale: _propTypes.default.number,

  /**
   * These properties should be defined on the child, not here.
   */
  className: _shims.dontSetMe,
  style: _shims.dontSetMe,
  transform: _shims.dontSetMe
});

_defineProperty(DraggableCore, "defaultProps", {
  allowAnyClick: false,
  // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {},
  scale: 1
});

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/cjs.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/cjs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ./Draggable */ "./node_modules/react-draggable/build/cjs/Draggable.js"),
    Draggable = _require.default,
    DraggableCore = _require.DraggableCore; // Previous versions of this lib exported <Draggable> as the root export. As to no-// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266


module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = DraggableCore;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/domFns.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/domFns.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchesSelector = matchesSelector;
exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
exports.addEvent = addEvent;
exports.removeEvent = removeEvent;
exports.outerHeight = outerHeight;
exports.outerWidth = outerWidth;
exports.innerHeight = innerHeight;
exports.innerWidth = innerWidth;
exports.offsetXYFromParent = offsetXYFromParent;
exports.createCSSTransform = createCSSTransform;
exports.createSVGTransform = createSVGTransform;
exports.getTranslation = getTranslation;
exports.getTouch = getTouch;
exports.getTouchIdentifier = getTouchIdentifier;
exports.addUserSelectStyles = addUserSelectStyles;
exports.removeUserSelectStyles = removeUserSelectStyles;
exports.addClassName = addClassName;
exports.removeClassName = removeClassName;

var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _getPrefix = _interopRequireWildcard(__webpack_require__(/*! ./getPrefix */ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var matchesSelectorFunc = '';

function matchesSelector(el
/*: Node*/
, selector
/*: string*/
)
/*: boolean*/
{
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = (0, _shims.findInArray)(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return (0, _shims.isFunction)(el[method]);
    });
  } // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable


  if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false; // $FlowIgnore: Doesn't think elements are indexable

  return el[matchesSelectorFunc](selector);
} // Works up the tree to the draggable itself attempting to match selector.


function matchesSelectorAndParentsTo(el
/*: Node*/
, selector
/*: string*/
, baseNode
/*: Node*/
)
/*: boolean*/
{
  var node = el;

  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el
/*: ?Node*/
, event
/*: string*/
, handler
/*: Function*/
, inputOptions
/*: Object*/
)
/*: void*/
{
  if (!el) return;

  var options = _objectSpread({
    capture: true
  }, inputOptions);

  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function outerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += (0, _shims.int)(computedStyle.borderTopWidth);
  height += (0, _shims.int)(computedStyle.borderBottomWidth);
  return height;
}

function outerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += (0, _shims.int)(computedStyle.borderLeftWidth);
  width += (0, _shims.int)(computedStyle.borderRightWidth);
  return width;
}

function innerHeight(node
/*: HTMLElement*/
)
/*: number*/
{
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= (0, _shims.int)(computedStyle.paddingTop);
  height -= (0, _shims.int)(computedStyle.paddingBottom);
  return height;
}

function innerWidth(node
/*: HTMLElement*/
)
/*: number*/
{
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= (0, _shims.int)(computedStyle.paddingLeft);
  width -= (0, _shims.int)(computedStyle.paddingRight);
  return width;
} // Get from offsetParent


function offsetXYFromParent(evt
/*: {clientX: number, clientY: number}*/
, offsetParent
/*: HTMLElement*/
, scale
/*: number*/
)
/*: ControlPosition*/
{
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x: x,
    y: y
  };
}

function createCSSTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: Object*/
{
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, (0, _getPrefix.browserPrefixToKey)('transform', _getPrefix.default), translation);
}

function createSVGTransform(controlPos
/*: ControlPosition*/
, positionOffset
/*: PositionOffsetControlPosition*/
)
/*: string*/
{
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}

function getTranslation(_ref2, positionOffset
/*: PositionOffsetControlPosition*/
, unitSuffix
/*: string*/
)
/*: string*/
{
  var x = _ref2.x,
      y = _ref2.y;
  var translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");

  if (positionOffset) {
    var defaultX = "".concat(typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = "".concat(typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
  }

  return translation;
}

function getTouch(e
/*: MouseTouchEvent*/
, identifier
/*: number*/
)
/*: ?{clientX: number, clientY: number}*/
{
  return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e
/*: MouseTouchEvent*/
)
/*: ?number*/
{
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
} // User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.
// Note we're passing `document` b/c we could be iframed


function addUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');

  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {all: inherit;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }

  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc
/*: ?Document*/
) {
  if (!doc) return;

  try {
    if (doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection'); // $FlowIgnore: IE

    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      // Remove selection caused by scroll, unless it's a focused input
      // (we use doc.defaultView in case we're in an iframe)
      var selection = (doc.defaultView || window).getSelection();

      if (selection && selection.type !== 'Caret') {
        selection.removeAllRanges();
      }
    }
  } catch (e) {// probably IE
  }
}

function addClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
      el.className += " ".concat(className);
    }
  }
}

function removeClassName(el
/*: HTMLElement*/
, className
/*: string*/
) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), 'g'), '');
  }
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/getPrefix.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/getPrefix.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrefix = getPrefix;
exports.browserPrefixToKey = browserPrefixToKey;
exports.browserPrefixToStyle = browserPrefixToStyle;
exports.default = void 0;
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];

function getPrefix()
/*: string*/
{
  var prop
  /*: string*/
  = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';
  var style = window.document.documentElement.style;
  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
}

function browserPrefixToStyle(prop
/*: string*/
, prefix
/*: string*/
)
/*: string*/
{
  return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
}

function kebabToTitleCase(str
/*: string*/
)
/*: string*/
{
  var out = '';
  var shouldCapitalize = true;

  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }

  return out;
} // Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`


var _default = getPrefix();

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/log.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (undefined) (_console = console).log.apply(_console, arguments);
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/positionFns.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/positionFns.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoundPosition = getBoundPosition;
exports.snapToGrid = snapToGrid;
exports.canDragX = canDragX;
exports.canDragY = canDragY;
exports.getControlPosition = getControlPosition;
exports.createCoreData = createCoreData;
exports.createDraggableData = createDraggableData;

var _shims = __webpack_require__(/*! ./shims */ "./node_modules/react-draggable/build/cjs/utils/shims.js");

var _domFns = __webpack_require__(/*! ./domFns */ "./node_modules/react-draggable/build/cjs/utils/domFns.js");

function getBoundPosition(draggable
/*: Draggable*/
, x
/*: number*/
, y
/*: number*/
)
/*: [number, number]*/
{
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y]; // Clone new bounds

  var bounds = draggable.props.bounds;
  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode;

    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }

    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }

    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode); // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.

    bounds = {
      left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
      top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
      right: (0, _domFns.innerWidth)(boundNode) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
      bottom: (0, _domFns.innerHeight)(boundNode) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
    };
  } // Keep x and y below right and bottom limits...


  if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
  if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom); // But above left and top limits.

  if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
  if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
  return [x, y];
}

function snapToGrid(grid
/*: [number, number]*/
, pendingX
/*: number*/
, pendingY
/*: number*/
)
/*: [number, number]*/
{
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable
/*: Draggable*/
)
/*: boolean*/
{
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
} // Get {x, y} positions from event.


function getControlPosition(e
/*: MouseTouchEvent*/
, touchIdentifier
/*: ?number*/
, draggableCore
/*: DraggableCore*/
)
/*: ?ControlPosition*/
{
  var touchObj = typeof touchIdentifier === 'number' ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch

  var node = findDOMNode(draggableCore); // User can provide an offsetParent if desired.

  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
} // Create an data object exposed by <DraggableCore>'s events


function createCoreData(draggable
/*: DraggableCore*/
, x
/*: number*/
, y
/*: number*/
)
/*: DraggableData*/
{
  var state = draggable.state;
  var isStart = !(0, _shims.isNum)(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x: x,
      y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX,
      deltaY: y - state.lastY,
      lastX: state.lastX,
      lastY: state.lastY,
      x: x,
      y: y
    };
  }
} // Create an data exposed by <Draggable>'s events


function createDraggableData(draggable
/*: Draggable*/
, coreData
/*: DraggableData*/
)
/*: DraggableData*/
{
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
} // A lot faster than stringify/parse


function cloneBounds(bounds
/*: Bounds*/
)
/*: Bounds*/
{
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable
/*: Draggable | DraggableCore*/
)
/*: HTMLElement*/
{
  var node = draggable.findDOMNode();

  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  } // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME


  return node;
}

/***/ }),

/***/ "./node_modules/react-draggable/build/cjs/utils/shims.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-draggable/build/cjs/utils/shims.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findInArray = findInArray;
exports.isFunction = isFunction;
exports.isNum = isNum;
exports.int = int;
exports.dontSetMe = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array
/*: Array<any> | TouchList*/
, callback
/*: Function*/
)
/*: any*/
{
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func
/*: any*/
)
/*: boolean %checks*/
{
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num
/*: any*/
)
/*: boolean %checks*/
{
  return typeof num === 'number' && !isNaN(num);
}

function int(a
/*: string*/
)
/*: number*/
{
  return parseInt(a, 10);
}

function dontSetMe(props
/*: Object*/
, propName
/*: string*/
, componentName
/*: string*/
) {
  if (props[propName]) {
    return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
  }
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/DoughnutWidget.jsx":
/*!*******************************************!*\
  !*** ./src/components/DoughnutWidget.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/charts */ "./src/utils/charts.js");
/* harmony import */ var _charts_DoughnutOrGauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/DoughnutOrGauge */ "./src/components/charts/DoughnutOrGauge.jsx");




function _createOptions(config, layoutConfig, channelData) {
  return {
    colors: [Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["frontColor"])(config)],
    chart: {
      type: 'column',
      inverted: true,
      polar: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      margin: [0, 0, 0, 0],
      spacing: [0, 0, 0, 0],
      events: {
        load: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["loadDoughnutOrGauge"])(config, layoutConfig),
        redraw: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["redrawDoughnutOrGauge"])(config, layoutConfig, channelData)
      },
      animation: {
        duration: 500
      }
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: ''
    },
    pane: {
      center: ['50%', '50%'],
      size: '100%',
      background: {
        outerRadius: '100%',
        innerRadius: '76%',
        borderWidth: 0,
        backgroundColor: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["backColor"])(config)
      }
    },
    legend: {
      // no legend
      enabled: false
    },
    tooltip: {
      // no tooltip on hover
      enabled: false
    },
    xAxis: {
      // no borders, ticks what so ever
      visible: false
    },
    yAxis: {
      max: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["maxValue"])(config, channelData, 'maxValue'),
      // no borders, ticks what so ever
      visible: false
    },
    plotOptions: {
      series: {
        // necessary so that the start animation won't cause weird re-renderings
        // due to unfinished animations
        animation: false
      },
      column: {
        // remove border from bar
        borderWidth: 0
      }
    },
    series: [{
      data: [0]
    }]
  };
}

function DoughnutWidget(props) {
  return /*#__PURE__*/React.createElement(_charts_DoughnutOrGauge__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    createOptions: function createOptions() {
      return _createOptions.apply(void 0, arguments);
    },
    extractMaxValue: function extractMaxValue() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _utils_charts__WEBPACK_IMPORTED_MODULE_1__["maxValue"].apply(void 0, args.concat(['maxValue']));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DoughnutWidget);

/***/ }),

/***/ "./src/components/Fraction.jsx":
/*!*************************************!*\
  !*** ./src/components/Fraction.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
var LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function Fraction(props) {
  var config = props.config;
  var dividend = mobro.utils.component.useBasicChannelListener(config === null || config === void 0 ? void 0 : config.dividend);
  var divisor = mobro.utils.component.useBasicChannelListener(config === null || config === void 0 ? void 0 : config.divisor);

  if (!dividend || !divisor && !(config !== null && config !== void 0 && config.divisorManual)) {
    return /*#__PURE__*/React.createElement(AlignCenter, null, /*#__PURE__*/React.createElement(LoadingIndicator, {
      className: "small"
    }));
  }

  var divisorDisplay = config !== null && config !== void 0 && config.divisorManual ? config.divisorManual : "".concat(mobro.utils.channelData.extractValue(divisor)).concat(mobro.utils.channelData.extractRawUnit(divisor));
  return /*#__PURE__*/React.createElement("span", {
    className: "w-100 d-flex align-items-center justify-content-center"
  }, mobro.utils.channelData.extractValue(dividend), " / ", divisorDisplay);
}

/* harmony default export */ __webpack_exports__["default"] = (Fraction);

/***/ }),

/***/ "./src/components/GaugeWidget.jsx":
/*!****************************************!*\
  !*** ./src/components/GaugeWidget.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/charts */ "./src/utils/charts.js");
/* harmony import */ var _charts_DoughnutOrGauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/DoughnutOrGauge */ "./src/components/charts/DoughnutOrGauge.jsx");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/color */ "./src/utils/color.js");




var colorGreen = '#00ff1e';
var colorYellow = '#ffff1e';
var colorRed = '#ff0000';
var defaultMinMaxSettings = {
  min: 0,
  warning: 65,
  critical: 80,
  max: 100
};

function findMinMaxSettings(channelData, settings) {
  var minMaxSettings = defaultMinMaxSettings;

  if (mobro["enum"].channelData.SENSOR_TYPE_TEMPERATURE !== (channelData === null || channelData === void 0 ? void 0 : channelData.sensortype)) {
    return minMaxSettings;
  }

  settings.hardware.temperature.forEach(function (item) {
    var _channelData$_hardwar;

    if (item.hardwaretype === (channelData === null || channelData === void 0 ? void 0 : (_channelData$_hardwar = channelData._hardware) === null || _channelData$_hardwar === void 0 ? void 0 : _channelData$_hardwar.hardwaretype)) {
      minMaxSettings = item;
    }
  });
  return minMaxSettings;
}

function _createOptions(configRef, layoutConfigRef, channelDataRef, settings) {
  var max = Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["maxValue"])(configRef, channelDataRef, "max");
  var minMaxSettings = findMinMaxSettings(channelDataRef.current, settings);
  return {
    colors: [colorGreen],
    chart: {
      type: 'solidgauge',
      backgroundColor: 'rgba(0, 0, 0, 0)',
      margin: [0, 0, 0, 0],
      spacing: [0, 0, 0, 0],
      events: {
        load: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["loadDoughnutOrGauge"])(configRef, layoutConfigRef, _utils_charts__WEBPACK_IMPORTED_MODULE_1__["basicTextColor"], function () {
          return colorGreen;
        }),
        redraw: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["redrawDoughnutOrGauge"])(configRef, layoutConfigRef, channelDataRef, _utils_charts__WEBPACK_IMPORTED_MODULE_1__["basicTextColor"], function () {
          return colorGreen;
        })
      },
      animation: {
        duration: 500
      }
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: ''
    },
    pane: {
      center: ['50%', '50%'],
      size: '100%',
      startAngle: -145,
      endAngle: 145,
      background: {
        backgroundColor: Object(_utils_charts__WEBPACK_IMPORTED_MODULE_1__["backColor"])(configRef),
        innerRadius: '70%',
        outerRadius: '90%',
        borderWidth: 0,
        shape: 'arc'
      }
    },
    tooltip: {
      enabled: false
    },
    xAxis: {
      max: max,
      visible: false
    },
    yAxis: {
      length: 5,
      lineWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      tickLength: 0,
      labels: {
        enabled: false
      },
      min: 0,
      max: 100,
      plotBands: [{
        thickness: 5,
        from: 0,
        to: parseInt(configRef.current.warning || minMaxSettings.warning),
        color: Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["colorToRgba"])(configRef.current.baseColor, colorGreen)
      }, {
        thickness: 5,
        from: parseInt(configRef.current.warning || minMaxSettings.warning),
        to: parseInt(configRef.current.danger || minMaxSettings.critical),
        color: Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["colorToRgba"])(configRef.current.warningColor, colorYellow)
      }, {
        thickness: 5,
        from: parseInt(configRef.current.danger || minMaxSettings.critical),
        to: parseInt(max),
        color: Object(_utils_color__WEBPACK_IMPORTED_MODULE_3__["colorToRgba"])(configRef.current.dangerColor, colorRed)
      }]
    },
    plotOptions: {
      solidgauge: {
        innerRadius: '70%',
        radius: '90%',
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true
        },
        series: {
          animation: {
            duration: 200
          }
        }
      },
      series: {
        // necessary so that the start animation won't cause weird re-renderings
        // due to unfinished animations
        animation: false
      },
      column: {
        // remove border from bar
        borderWidth: 0
      }
    },
    series: [{
      data: [80]
    }]
  };
}

function GaugeWidget(props) {
  return /*#__PURE__*/React.createElement(_charts_DoughnutOrGauge__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    createOptions: function createOptions() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _createOptions.apply(void 0, args.concat([props.settings]));
    },
    extractMaxValue: function extractMaxValue() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _utils_charts__WEBPACK_IMPORTED_MODULE_1__["maxValue"].apply(void 0, args.concat(['max']));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (GaugeWidget);

/***/ }),

/***/ "./src/components/HardwareTitle.jsx":
/*!******************************************!*\
  !*** ./src/components/HardwareTitle.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
var LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function HardwareTitle(props) {
  var _channelData$_hardwar;

  var config = props.config;
  var channelData = mobro.utils.component.useBasicChannelListener(config === null || config === void 0 ? void 0 : config.channel);

  if (!channelData) {
    return /*#__PURE__*/React.createElement(AlignCenter, null, /*#__PURE__*/React.createElement(LoadingIndicator, {
      className: "small"
    }));
  }

  return /*#__PURE__*/React.createElement("span", {
    className: "w-100 d-flex align-items-center justify-content-center"
  }, channelData === null || channelData === void 0 ? void 0 : (_channelData$_hardwar = channelData._hardware) === null || _channelData$_hardwar === void 0 ? void 0 : _channelData$_hardwar.title);
}

/* harmony default export */ __webpack_exports__["default"] = (HardwareTitle);

/***/ }),

/***/ "./src/components/LineChartWidget.jsx":
/*!********************************************!*\
  !*** ./src/components/LineChartWidget.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _charts_Chart_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts/Chart.container */ "./src/components/charts/Chart.container.js");
/* harmony import */ var _utils_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/charts */ "./src/utils/charts.js");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/color */ "./src/utils/color.js");






var defaultLineColor = 'rgba(15, 150, 200, 1)';

function createOptions(configRef, layoutConfigRef, channelDataRef, settings, optionsRef) {
  var _configRef$current, _optionsRef$current$s, _optionsRef$current, _optionsRef$current$s2, _optionsRef$current$s3;

  var min = Object(_utils_charts__WEBPACK_IMPORTED_MODULE_4__["minValue"])(configRef, 'min', null);
  var max = Object(_utils_charts__WEBPACK_IMPORTED_MODULE_4__["maxValue"])(configRef, null, 'max', null);
  return {
    colors: [Object(_utils_color__WEBPACK_IMPORTED_MODULE_5__["colorToRgba"])((_configRef$current = configRef.current) === null || _configRef$current === void 0 ? void 0 : _configRef$current.lineColor, defaultLineColor)],
    chart: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      // margin: [0, 0, 0, 0],
      // spacing: [0, 0, 0, 0],
      animation: {
        duration: 500
      }
    },
    title: {
      text: undefined,
      floating: true
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    xAxis: {
      visible: false
    },
    yAxis: {
      endOnTick: true,
      gridLineWidth: 0,
      startOnTick: true,
      tickAmount: 2,
      tickWidth: 0,
      min: min,
      max: max,
      title: {
        text: undefined
      }
    },
    plotOptions: {
      series: {
        // necessary so that the start animation won't cause weird re-renderings
        // due to unfinished animations
        animation: false
      },
      column: {
        // remove border from bar
        borderWidth: 0
      }
    },
    series: [{
      marker: {
        enabled: false
      },
      enableMouseTracking: false,
      data: (_optionsRef$current$s = (_optionsRef$current = optionsRef.current) === null || _optionsRef$current === void 0 ? void 0 : (_optionsRef$current$s2 = _optionsRef$current.series) === null || _optionsRef$current$s2 === void 0 ? void 0 : (_optionsRef$current$s3 = _optionsRef$current$s2[0]) === null || _optionsRef$current$s3 === void 0 ? void 0 : _optionsRef$current$s3.data) !== null && _optionsRef$current$s !== void 0 ? _optionsRef$current$s : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
  };
}

function ChartValue(props) {
  var config = props.config;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      channelData = _useState2[0],
      setChannelData = _useState2[1];

  mobro.utils.component.useChannelListener(config === null || config === void 0 ? void 0 : config.channel, function (data) {
    setChannelData(data);
  });
  var label = config !== null && config !== void 0 && config.label ? config === null || config === void 0 ? void 0 : config.label : channelData === null || channelData === void 0 ? void 0 : channelData.label;
  return /*#__PURE__*/React.createElement("div", {
    className: 'w-100 d-flex align-items-center justify-content-between mb-2'
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-left d-block"
  }, label, "\xA0-\xA0", /*#__PURE__*/React.createElement("span", null, mobro.utils.channelData.extractRawUnit(channelData))), /*#__PURE__*/React.createElement("h3", {
    className: "text-right"
  }, mobro.utils.channelData.extractValue(channelData)));
}

function LineChartWidget(props) {
  var chartProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props);

  return /*#__PURE__*/React.createElement("div", {
    className: 'd-flex flex-column w-100'
  }, /*#__PURE__*/React.createElement(ChartValue, {
    config: chartProps.config
  }), /*#__PURE__*/React.createElement(_charts_Chart_container__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, chartProps, {
    createOptions: createOptions,
    configKeyToListen: ['min', 'max', 'width', 'height', 'lineColor'],
    writeDataToSeries: function writeDataToSeries(channelDataRef, optionsRef, configRef, layoutConfigRef, chartRef) {
      var _chartRef$current, _chartRef$current$cha, _chartRef$current$cha2, _chartRef$current$cha3, _chartRef$current2, _chartRef$current2$ch;

      (_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : (_chartRef$current$cha = _chartRef$current.chart) === null || _chartRef$current$cha === void 0 ? void 0 : (_chartRef$current$cha2 = _chartRef$current$cha.series) === null || _chartRef$current$cha2 === void 0 ? void 0 : (_chartRef$current$cha3 = _chartRef$current$cha2[0]) === null || _chartRef$current$cha3 === void 0 ? void 0 : _chartRef$current$cha3.addPoint(parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current)), false, true);
      (_chartRef$current2 = chartRef.current) === null || _chartRef$current2 === void 0 ? void 0 : (_chartRef$current2$ch = _chartRef$current2.chart) === null || _chartRef$current2$ch === void 0 ? void 0 : _chartRef$current2$ch.redraw();
    },
    adaptOptions: function adaptOptions() {}
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (LineChartWidget);

/***/ }),

/***/ "./src/components/charts/Chart.container.js":
/*!**************************************************!*\
  !*** ./src/components/charts/Chart.container.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_components_charts_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme/components/charts/Chart */ "./src/components/charts/Chart.jsx");


var mapStateToProps = function mapStateToProps(state) {
  return {
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state),
    settings: mobro.reducers.settings.getSettings(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (mobro.lib.component.container.create('theme.charts.chart', theme_components_charts_Chart__WEBPACK_IMPORTED_MODULE_0__["default"]).connect(mapStateToProps).generate());

/***/ }),

/***/ "./src/components/charts/Chart.jsx":
/*!*****************************************!*\
  !*** ./src/components/charts/Chart.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-react-official */ "./node_modules/highcharts-react-official/dist/highcharts-react.min.js");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
var LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function Chart(props) {
  var config = props.config,
      layoutConfig = props.layoutConfig,
      settings = props.settings,
      _props$createOptions = props.createOptions,
      createOptions = _props$createOptions === void 0 ? function () {} : _props$createOptions,
      _props$configKeyToLis = props.configKeyToListen,
      configKeyToListen = _props$configKeyToLis === void 0 ? [] : _props$configKeyToLis,
      _props$writeDataToSer = props.writeDataToSeries,
      writeDataToSeries = _props$writeDataToSer === void 0 ? function () {} : _props$writeDataToSer,
      _props$adaptOptions = props.adaptOptions,
      adaptOptions = _props$adaptOptions === void 0 ? function () {} : _props$adaptOptions;
  var channelData = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var configRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(config);
  var layoutConfigRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(config);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var optionsRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(options);
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var dependencies = configKeyToListen.map(function (key) {
    return config === null || config === void 0 ? void 0 : config[key];
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _chartRef$current, _chartRef$current$cha;

    layoutConfigRef.current = layoutConfig;
    configRef.current = config;
    optionsRef.current = createOptions(configRef, layoutConfigRef, channelData, settings, optionsRef);
    (_chartRef$current = chartRef.current) === null || _chartRef$current === void 0 ? void 0 : (_chartRef$current$cha = _chartRef$current.chart) === null || _chartRef$current$cha === void 0 ? void 0 : _chartRef$current$cha.reflow();
    adaptOptions(channelData, optionsRef, configRef, layoutConfigRef, chartRef);
    setOptions(_objectSpread({}, optionsRef.current));
  }, dependencies);
  mobro.utils.component.useChannelListener(config === null || config === void 0 ? void 0 : config.channel, function (data) {
    channelData.current = data;
    writeDataToSeries(channelData, optionsRef, configRef, layoutConfigRef, chartRef);
    setOptions(_objectSpread({}, optionsRef.current));
  });

  if (!options) {
    return /*#__PURE__*/React.createElement(AlignCenter, null, /*#__PURE__*/React.createElement(LoadingIndicator, null));
  }

  return /*#__PURE__*/React.createElement(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default.a, {
    highcharts: highcharts__WEBPACK_IMPORTED_MODULE_4___default.a,
    ref: chartRef,
    options: options,
    containerProps: {
      style: {
        width: '100%',
        height: '100%'
      }
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Chart);

/***/ }),

/***/ "./src/components/charts/DoughnutOrGauge.jsx":
/*!***************************************************!*\
  !*** ./src/components/charts/DoughnutOrGauge.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/charts */ "./src/utils/charts.js");
/* harmony import */ var _Chart_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chart.container */ "./src/components/charts/Chart.container.js");





function DoughnutOrGauge(props) {
  var _props$extractMaxValu = props.extractMaxValue,
      extractMaxValue = _props$extractMaxValu === void 0 ? _utils_charts__WEBPACK_IMPORTED_MODULE_2__["maxValue"] : _props$extractMaxValu,
      chartProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, ["extractMaxValue"]);

  return /*#__PURE__*/React.createElement(_Chart_container__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, chartProps, {
    configKeyToListen: ['label', 'maxValue', 'max', 'warning', 'danger', 'widgetFontColor', 'backColor', 'baseColor', 'warningColor', 'dangerColor'],
    writeDataToSeries: function writeDataToSeries(channelDataRef, optionsRef) {
      optionsRef.current.series[0].data = [parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current))];
    },
    adaptOptions: function adaptOptions(channelDataRef, optionsRef, configRef) {
      optionsRef.current.yAxis.max = extractMaxValue(configRef, channelDataRef);
      optionsRef.current.pane.background.backgroundColor = Object(_utils_charts__WEBPACK_IMPORTED_MODULE_2__["backColor"])(configRef);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DoughnutOrGauge);

/***/ }),

/***/ "./src/hooks/component/base-component.js":
/*!***********************************************!*\
  !*** ./src/hooks/component/base-component.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
 // map the layoutConfig prop from the redux store to the base component that surrounds every widget

mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.redux.mapStateToProps("widget.base-component", function (event) {
  event.mergeMapStateToProps({
    layoutConfig: mobro__WEBPACK_IMPORTED_MODULE_0___default.a.reducers.layout.getLayoutConfig(event.getState())
  });
}); // override the base component to add the background color and border option from the global config

mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.component("widget.base-component", function () {
  return function (props) {
    var type = props.type,
        path = props.path,
        config = props.config,
        Component = props.Component,
        layoutMode = props.layoutMode,
        layoutConfig = props.layoutConfig,
        selectedComponent = props.selectedComponent,
        _props$selectComponen = props.selectComponent,
        selectComponent = _props$selectComponen === void 0 ? noop : _props$selectComponen;
    var renderConfig = mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.getWidgetRenderConfig(type);
    var baseClassNames = !(renderConfig !== null && renderConfig !== void 0 && renderConfig.ignoreBaseClassNames) ? "component card" : "";
    var defaultClasses = "";
    var doSelectComponent = mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.helper.noop;
    var toggleEditSidebar = mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.helper.noop;

    if (mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.layout.isEditMode(layoutMode)) {
      defaultClasses = "clickable";

      doSelectComponent = function doSelectComponent() {
        return selectComponent(path);
      };

      toggleEditSidebar = mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.component.withEditSidebar({
        path: path,
        type: type,
        config: config
      });
    }

    var style = {};
    var widgetBackgroundColor = (config === null || config === void 0 ? void 0 : config.widgetBackgroundColor) || (layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.widgetBackgroundColor);
    var widgetFontSize = config === null || config === void 0 ? void 0 : config.widgetFontSize;
    var widgetFontColor = (config === null || config === void 0 ? void 0 : config.widgetFontColor) || (layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.widgetFontColor);
    var widgetPadding = (config === null || config === void 0 ? void 0 : config.widgetPadding) || (layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.widgetPadding);

    if (widgetBackgroundColor) {
      style.backgroundColor = "rgba(".concat(widgetBackgroundColor === null || widgetBackgroundColor === void 0 ? void 0 : widgetBackgroundColor.r, ", ").concat(widgetBackgroundColor === null || widgetBackgroundColor === void 0 ? void 0 : widgetBackgroundColor.g, ", ").concat(widgetBackgroundColor === null || widgetBackgroundColor === void 0 ? void 0 : widgetBackgroundColor.b, ", ").concat(widgetBackgroundColor === null || widgetBackgroundColor === void 0 ? void 0 : widgetBackgroundColor.a, ")");
    }

    if (widgetFontColor) {
      style.color = "rgba(".concat(widgetFontColor === null || widgetFontColor === void 0 ? void 0 : widgetFontColor.r, ", ").concat(widgetFontColor === null || widgetFontColor === void 0 ? void 0 : widgetFontColor.g, ", ").concat(widgetFontColor === null || widgetFontColor === void 0 ? void 0 : widgetFontColor.b, ", ").concat(widgetFontColor === null || widgetFontColor === void 0 ? void 0 : widgetFontColor.a, ")");
    }

    if (widgetFontSize) {
      style.fontSize = "".concat(widgetFontSize, "px");
    }

    if (layoutConfig !== null && layoutConfig !== void 0 && layoutConfig.disableWidgetBorder) {
      defaultClasses += " border-0";
    }

    if (widgetPadding) {
      style.padding = "".concat(widgetPadding, "px");
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(defaultClasses, " ").concat(baseClassNames, " ").concat(renderConfig === null || renderConfig === void 0 ? void 0 : renderConfig.baseClassNames, " ").concat(selectedComponent === path ? "selection-indicator" : ""),
      onClick: doSelectComponent,
      onDoubleClick: toggleEditSidebar,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: "component-body card-body position-relative"
    }, /*#__PURE__*/React.createElement(Component, {
      path: path,
      config: config
    })));
  };
});

/***/ }),

/***/ "./src/hooks/component/entry.js":
/*!**************************************!*\
  !*** ./src/hooks/component/entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);

var BaseComponent = mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.getComponent("widget.base-component");

mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.redux.mapStateToProps("entry", function (event) {
  event.mergeMapStateToProps({
    layoutConfig: mobro__WEBPACK_IMPORTED_MODULE_0___default.a.reducers.layout.getLayoutConfig(event.getState()),
    layoutMode: mobro__WEBPACK_IMPORTED_MODULE_0___default.a.reducers.layout.getLayoutMode(event.getState())
  });
});
mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.redux.mapDispatchToProps("entry", function (event) {
  event.mergeMapDispatchToProps({
    layoutEdit: function layoutEdit(_ref) {
      var path = _ref.path,
          name = _ref.name,
          data = _ref.data;
      return event.dispatch(mobro__WEBPACK_IMPORTED_MODULE_0___default.a.actions.layout.layoutEdit({
        path: path,
        name: name,
        data: data
      }));
    }
  });
});
mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.component("entry", function () {
  return function (props) {
    var layout = props.layout,
        layoutConfig = props.layoutConfig,
        layoutEdit = props.layoutEdit,
        layoutMode = props.layoutMode;
    var style = {};

    if (layoutConfig !== null && layoutConfig !== void 0 && layoutConfig.widgetFontSize) {
      style.fontSize = "".concat(layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.widgetFontSize, "px");
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "position-relative w-100",
      style: style
    }, mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.component.renderComponents(mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.component.getComponentsFromConfig(layout), "", function (_ref2) {
      var Component = _ref2.Component,
          type = _ref2.type,
          path = _ref2.path,
          config = _ref2.config,
          i = _ref2.i;
      var componentStyle = {
        width: ((config === null || config === void 0 ? void 0 : config.width) || 300) + "px",
        height: ((config === null || config === void 0 ? void 0 : config.height) || 100) + "px",
        zIndex: i
      };

      if (!mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.layout.isEditMode(layoutMode)) {
        var _config$coordinates, _config$coordinates2;

        componentStyle.left = (config === null || config === void 0 ? void 0 : (_config$coordinates = config.coordinates) === null || _config$coordinates === void 0 ? void 0 : _config$coordinates.x) + "px";
        componentStyle.top = (config === null || config === void 0 ? void 0 : (_config$coordinates2 = config.coordinates) === null || _config$coordinates2 === void 0 ? void 0 : _config$coordinates2.y) + "px";
      }

      var content = /*#__PURE__*/React.createElement("div", {
        key: i.toString(),
        className: "position-absolute d-flex",
        style: componentStyle
      }, /*#__PURE__*/React.createElement(BaseComponent, {
        type: type,
        path: path,
        config: config,
        Component: Component
      }));

      if (mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.layout.isEditMode(layoutMode)) {
        var _config$coordinates3, _config$coordinates4, _config$coordinates5, _config$coordinates6;

        content = /*#__PURE__*/React.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
          key: i.toString(),
          defaultPosition: {
            x: (config === null || config === void 0 ? void 0 : (_config$coordinates3 = config.coordinates) === null || _config$coordinates3 === void 0 ? void 0 : _config$coordinates3.x) || 0,
            y: (config === null || config === void 0 ? void 0 : (_config$coordinates4 = config.coordinates) === null || _config$coordinates4 === void 0 ? void 0 : _config$coordinates4.y) || 0
          },
          position: {
            x: (config === null || config === void 0 ? void 0 : (_config$coordinates5 = config.coordinates) === null || _config$coordinates5 === void 0 ? void 0 : _config$coordinates5.x) || 0,
            y: (config === null || config === void 0 ? void 0 : (_config$coordinates6 = config.coordinates) === null || _config$coordinates6 === void 0 ? void 0 : _config$coordinates6.y) || 0
          },
          onStop: function onStop(event, data) {
            layoutEdit({
              path: path,
              name: "coordinates",
              data: {
                x: data.x,
                y: data.y
              }
            });
          }
        }, content);
      }

      return content;
    }));
  };
});

/***/ }),

/***/ "./src/hooks/global-config.js":
/*!************************************!*\
  !*** ./src/hooks/global-config.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);

mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.globalConfig(function (event) {
  event.setEditConfig({
    tabs: {
      type: "tabs",
      children: [{
        label: "General",
        children: event.getEditConfig() // original edit config in general tab

      }, {
        label: "Widgets",
        children: {
          widgetFontSize: {
            type: "numeric"
          },
          widgetPadding: {
            type: "numeric"
          },
          widgetFontColor: {
            type: "color"
          },
          widgetBackgroundColor: {
            type: "color"
          },
          disableWidgetBorder: {
            type: "checkbox"
          }
        }
      }]
    }
  });
});

/***/ }),

/***/ "./src/hooks/global-edit-modificator.js":
/*!**********************************************!*\
  !*** ./src/hooks/global-edit-modificator.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


mobro__WEBPACK_IMPORTED_MODULE_1___default.a.hooks.addGlobalEditModificator(function (config) {
  return {
    tabs: {
      type: "tabs",
      children: [{
        label: "General",
        children: _objectSpread({
          positioning: {
            type: "fieldset",
            label: "Positioning",
            children: {
              coordinates: {
                type: "coordinates"
              },
              widthAndHeight: {
                type: "field-container",
                children: [{
                  width: 6,
                  children: {
                    width: {
                      type: "numeric",
                      min: 0
                    }
                  }
                }, {
                  width: 6,
                  children: {
                    height: {
                      type: "numeric",
                      min: 0
                    }
                  }
                }]
              }
            }
          }
        }, config)
      }, {
        label: "Styling",
        children: {
          widgetFontSize: {
            type: "numeric"
          },
          widgetPadding: {
            type: "numeric"
          },
          widgetFontColor: {
            type: "color"
          },
          widgetBackgroundColor: {
            type: "color"
          }
        }
      }]
    }
  };
});

/***/ }),

/***/ "./src/hooks/widget/doughnut.js":
/*!**************************************!*\
  !*** ./src/hooks/widget/doughnut.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_components_DoughnutWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/DoughnutWidget */ "./src/components/DoughnutWidget.jsx");


mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.addWidget({
  name: "doughnut",
  label: "Doughnut",
  icon: "widget.gauge",
  component: theme_components_DoughnutWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
  config: {
    label: {
      type: "input"
    },
    channel: {
      type: "channel"
    },
    maxValue: {
      type: "numeric"
    },
    colors: {
      type: "fieldset",
      label: "Colors",
      children: {
        frontColor: {
          type: "color"
        },
        backColor: {
          type: "color"
        }
      }
    }
  }
});

/***/ }),

/***/ "./src/hooks/widget/fraction.js":
/*!**************************************!*\
  !*** ./src/hooks/widget/fraction.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_components_Fraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/Fraction */ "./src/components/Fraction.jsx");


mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.addWidget({
  name: "fraction",
  label: "Fraction (x / y)",
  icon: "widget.data_value",
  component: theme_components_Fraction__WEBPACK_IMPORTED_MODULE_1__["default"],
  config: {
    dividend: {
      info: "Symbolizes the used amount (x / 14Gb)",
      type: "channel"
    },
    divisor: {
      info: "Symbolizes the maximum value which can be achieved (4 / xGb)",
      type: "channel"
    },
    divisorManual: {
      info: "If you don't have a value for divisor, you can use this to set the value manually",
      type: "input"
    }
  }
});

/***/ }),

/***/ "./src/hooks/widget/gauge.js":
/*!***********************************!*\
  !*** ./src/hooks/widget/gauge.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_icons_chart_gauge_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/icons/chart_gauge.svg */ "./src/icons/chart_gauge.svg");
/* harmony import */ var theme_icons_chart_gauge_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_icons_chart_gauge_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_components_GaugeWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/components/GaugeWidget */ "./src/components/GaugeWidget.jsx");



mobro__WEBPACK_IMPORTED_MODULE_0___default.a.utils.icons.addIcon("widget.gauge", theme_icons_chart_gauge_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.addWidget({
  name: "gauge",
  label: "Gauge",
  icon: "widget.gauge",
  component: theme_components_GaugeWidget__WEBPACK_IMPORTED_MODULE_2__["default"],
  config: {
    label: {
      type: "input"
    },
    channel: {
      type: "channel"
    },
    limits: {
      type: "fieldset",
      label: "Limits",
      collapsible: true,
      collapsed: true,
      children: {
        baseColor: {
          type: "color"
        },
        warning: {
          type: "numeric",
          info: "Threshold for yellow (warning)."
        },
        warningColor: {
          type: "color"
        },
        danger: {
          type: "numeric",
          info: "Threshold for red (danger)."
        },
        dangerColor: {
          type: "color"
        },
        max: {
          type: "numeric",
          info: "Override maximum value"
        }
      }
    },
    backColor: {
      type: "color"
    }
  }
});

/***/ }),

/***/ "./src/hooks/widget/hardware-title.js":
/*!********************************************!*\
  !*** ./src/hooks/widget/hardware-title.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobro */ "mobro");
/* harmony import */ var mobro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_components_HardwareTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/HardwareTitle */ "./src/components/HardwareTitle.jsx");


mobro__WEBPACK_IMPORTED_MODULE_0___default.a.hooks.addWidget({
  name: "hardware-title",
  label: "Hardware Title",
  icon: "widget.text",
  component: theme_components_HardwareTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
  config: {
    channel: {
      info: "Choose the first data value of the hardware, which's name you want to display",
      type: "channel"
    }
  }
});

/***/ }),

/***/ "./src/hooks/widget/line-chart.js":
/*!****************************************!*\
  !*** ./src/hooks/widget/line-chart.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_icons_chart_line_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme/icons/chart_line.svg */ "./src/icons/chart_line.svg");
/* harmony import */ var theme_icons_chart_line_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_icons_chart_line_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_components_LineChartWidget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/components/LineChartWidget */ "./src/components/LineChartWidget.jsx");


mobro.utils.icons.addIcon("widget.line_chart", theme_icons_chart_line_svg__WEBPACK_IMPORTED_MODULE_0___default.a);
mobro.hooks.addWidget({
  name: "line-chart",
  label: "Line Chart",
  icon: "widget.line_chart",
  component: theme_components_LineChartWidget__WEBPACK_IMPORTED_MODULE_1__["default"],
  config: {
    label: {
      type: "input"
    },
    channel: {
      type: "channel"
    },
    limits: {
      type: "fieldset",
      label: "Limits",
      collapsible: true,
      collapsed: true,
      children: {
        minAndMax: {
          type: "field-container",
          children: [{
            width: 6,
            children: {
              min: {
                type: "numeric"
              }
            }
          }, {
            width: 6,
            children: {
              max: {
                type: "numeric"
              }
            }
          }]
        }
      }
    },
    lineColor: {
      type: "color"
    }
  }
});

/***/ }),

/***/ "./src/hooks/widgets.js":
/*!******************************!*\
  !*** ./src/hooks/widgets.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var theme_hooks_widget_doughnut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme/hooks/widget/doughnut */ "./src/hooks/widget/doughnut.js");
/* harmony import */ var theme_hooks_widget_fraction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme/hooks/widget/fraction */ "./src/hooks/widget/fraction.js");
/* harmony import */ var theme_hooks_widget_gauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme/hooks/widget/gauge */ "./src/hooks/widget/gauge.js");
/* harmony import */ var theme_hooks_widget_hardware_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme/hooks/widget/hardware-title */ "./src/hooks/widget/hardware-title.js");
/* harmony import */ var theme_hooks_widget_line_chart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme/hooks/widget/line-chart */ "./src/hooks/widget/line-chart.js");






/***/ }),

/***/ "./src/icons/chart_gauge.svg":
/*!***********************************!*\
  !*** ./src/icons/chart_gauge.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\"><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_2-2\" data-name=\"Layer 2\"><path d=\"M3.74,19.38a10,10,0,1,1,18.57-.11\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></path><path d=\"M13,19.38,6.32,12.5\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></path><rect x=\"12\" y=\"18.38\" width=\"2\" height=\"2\" rx=\"1\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></rect></g><g id=\"Layer_3\" data-name=\"Layer 3\"><rect width=\"26\" height=\"26\" style=\"fill:none\"></rect></g></g></svg>"

/***/ }),

/***/ "./src/icons/chart_line.svg":
/*!**********************************!*\
  !*** ./src/icons/chart_line.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 26 26\"><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_2-2\" data-name=\"Layer 2\"><polyline points=\"23.15 8.32 15.87 18.66 8.84 10.21 3.15 17.32\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></polyline><rect x=\"7.84\" y=\"9.68\" width=\"2\" height=\"2\" rx=\"1\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round\"></rect><rect x=\"2.15\" y=\"16.32\" width=\"2\" height=\"2\" rx=\"1\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></rect><rect x=\"14.9\" y=\"17.66\" width=\"2\" height=\"2\" rx=\"1\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round\"></rect><rect x=\"21.85\" y=\"7.68\" width=\"2\" height=\"2\" rx=\"1\" style=\"fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:2px\"></rect></g><g id=\"Layer_3\" data-name=\"Layer 3\"><rect width=\"26\" height=\"26\" style=\"fill:none\"></rect></g></g></svg>"

/***/ }),

/***/ "./src/styles/theme.scss":
/*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./theme.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/theme.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/theme.jsx":
/*!***********************!*\
  !*** ./src/theme.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_styles_theme_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme/styles/theme.scss */ "./src/styles/theme.scss");
/* harmony import */ var theme_hooks_global_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme/hooks/global-config */ "./src/hooks/global-config.js");
/* harmony import */ var theme_hooks_global_edit_modificator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme/hooks/global-edit-modificator */ "./src/hooks/global-edit-modificator.js");
/* harmony import */ var theme_hooks_component_entry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! theme/hooks/component/entry */ "./src/hooks/component/entry.js");
/* harmony import */ var theme_hooks_component_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme/hooks/component/base-component */ "./src/hooks/component/base-component.js");
/* harmony import */ var theme_hooks_widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme/hooks/widgets */ "./src/hooks/widgets.js");
 // highcharts setup




highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_3___default.a);
highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_3___default.a); // styles

 // hooks







/***/ }),

/***/ "./src/utils/charts.js":
/*!*****************************!*\
  !*** ./src/utils/charts.js ***!
  \*****************************/
/*! exports provided: defaultFontColor, defaultFrontColor, defaultBackColor, basicTextColor, valueTextColor, frontColor, backColor, maxValue, minValue, redrawDoughnutOrGauge, loadDoughnutOrGauge, configureChartJS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFontColor", function() { return defaultFontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFrontColor", function() { return defaultFrontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBackColor", function() { return defaultBackColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicTextColor", function() { return basicTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueTextColor", function() { return valueTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frontColor", function() { return frontColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backColor", function() { return backColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValue", function() { return maxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValue", function() { return minValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redrawDoughnutOrGauge", function() { return redrawDoughnutOrGauge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDoughnutOrGauge", function() { return loadDoughnutOrGauge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureChartJS", function() { return configureChartJS; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/utils/color.js");


var defaultFontColor = 'white';
var defaultFrontColor = 'rgb(0 255 255)';
var defaultBackColor = 'rgba(100, 100, 100, 0.5)';
function basicTextColor(configRef, layoutConfigRef) {
  return Object(_color__WEBPACK_IMPORTED_MODULE_1__["colorToRgba"])(configRef.current.widgetFontColor, Object(_color__WEBPACK_IMPORTED_MODULE_1__["colorToRgba"])(layoutConfigRef.current.widgetFontColor, defaultFontColor));
}
function valueTextColor(configRef) {
  return Object(_color__WEBPACK_IMPORTED_MODULE_1__["colorToRgba"])(configRef.current.frontColor, defaultFrontColor);
}
function frontColor(configRef) {
  return valueTextColor(configRef);
}
function backColor(configRef) {
  return Object(_color__WEBPACK_IMPORTED_MODULE_1__["colorToRgba"])(configRef.current.backColor, defaultBackColor);
}
function maxValue(configRef, channelData) {
  var _configRef$current;

  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'max';
  var fallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;

  if (key && (_configRef$current = configRef.current) !== null && _configRef$current !== void 0 && _configRef$current[key]) {
    return parseInt(configRef.current[key]);
  }

  if (channelData !== null && channelData !== void 0 && channelData.current) {
    if (mobro.utils.channelData.isPercentageData(channelData.current)) {
      return 100;
    }

    return mobro.utils.channelData.extractRawMaxValue(channelData.current);
  }

  return fallback;
}
function minValue(configRef) {
  var _configRef$current2;

  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'min';
  var fallback = arguments.length > 2 ? arguments[2] : undefined;

  if (key && (_configRef$current2 = configRef.current) !== null && _configRef$current2 !== void 0 && _configRef$current2[key]) {
    return parseInt(configRef.current[key]);
  }

  return fallback;
}
function redrawDoughnutOrGauge(configRef, layoutConfigRef, channelData) {
  var basicTextFontColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : basicTextColor;
  var valueTextFontColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : valueTextColor;
  return function () {
    var _configRef$current$la, _channelData$current;

    if (!channelData.current) {
      return;
    }

    var centerX = this.plotWidth / 2 + this.plotLeft;
    var centerY = this.plotHeight / 2 + this.plotTop;
    var valueFontSize = Math.min(this.plotWidth, this.plotHeight) / 5;
    var labelFontSize = valueFontSize / 2.5;
    this.widgetLabel.attr({
      text: (_configRef$current$la = configRef.current.label) !== null && _configRef$current$la !== void 0 ? _configRef$current$la : (_channelData$current = channelData.current) === null || _channelData$current === void 0 ? void 0 : _channelData$current.label,
      x: centerX,
      y: centerY - this.plotHeight / 6
    }).css({
      color: basicTextFontColor(configRef, layoutConfigRef),
      fontSize: "".concat(labelFontSize, "px")
    });
    this.widgetValue.attr({
      text: mobro.utils.channelData.extractValue(channelData.current),
      x: centerX,
      y: centerY + valueFontSize / 3
    }).css({
      color: valueTextFontColor(configRef),
      fontSize: "".concat(valueFontSize, "px")
    });
    this.widgetUnit.attr({
      text: mobro.utils.channelData.extractRawUnit(channelData.current),
      x: centerX,
      y: centerY + valueFontSize / 3 + this.plotHeight / 6
    }).css({
      color: basicTextFontColor(configRef, layoutConfigRef),
      fontSize: "".concat(labelFontSize, "px")
    });
  };
}
function loadDoughnutOrGauge(configRef, layoutConfigRef) {
  var basicTextFontColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : basicTextColor;
  var valueTextFontColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : valueTextColor;
  return function () {
    this.widgetLabel = this.renderer.text('').attr({
      align: 'center',
      zIndex: 1
    }).css({
      color: basicTextFontColor(configRef, layoutConfigRef)
    }).add();
    this.widgetValue = this.renderer.text('').attr({
      align: 'center',
      zIndex: 2
    }).css({
      color: valueTextFontColor(configRef)
    }).add();
    this.widgetUnit = this.renderer.text('').attr({
      align: 'center',
      zIndex: 1
    }).css({
      color: basicTextFontColor(configRef, layoutConfigRef)
    }).add();
  };
}
function configureChartJS() {
  Chart.defaults.global.legend.display = false;
  Chart.defaults.global.tooltips.enabled = false;
  Chart.defaults.global.hover.mode = null;
  Chart.pluginService.register({
    beforeDraw: function beforeDraw(chart) {
      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx,
          type = chart.config.type;

      if (type == 'line') {
        var _chart$config$data, _chart$config$data$da, _chart$config$data2, _chart$config$data2$d;

        var min = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()((_chart$config$data = chart.config.data) === null || _chart$config$data === void 0 ? void 0 : (_chart$config$data$da = _chart$config$data.datasets[0]) === null || _chart$config$data$da === void 0 ? void 0 : _chart$config$data$da.data));
        var max = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()((_chart$config$data2 = chart.config.data) === null || _chart$config$data2 === void 0 ? void 0 : (_chart$config$data2$d = _chart$config$data2.datasets[0]) === null || _chart$config$data2$d === void 0 ? void 0 : _chart$config$data2$d.data));

        if (chart.canvas.getAttribute('data-min') && chart.canvas.getAttribute('data-min') !== '' && chart.canvas.getAttribute('data-min') != null && chart.canvas.getAttribute('data-min') !== 'undefined') {
          min = chart.canvas.getAttribute('data-min');
        }

        if (chart.canvas.getAttribute('data-max') && chart.canvas.getAttribute('data-max') !== '' && chart.canvas.getAttribute('data-max') != null && chart.canvas.getAttribute('data-max') !== 'undefined') {
          max = chart.canvas.getAttribute('data-max');
        }

        min = parseFloat(min);
        max = parseFloat(max);

        if (max - min >= 1) {
          chart.config.options.scales.yAxes[0].ticks.stepSize = max;
          chart.config.options.scales.yAxes[0].ticks.max = max;
          chart.config.options.scales.yAxes[0].ticks.min = min;
        } else {
          chart.config.options.scales.yAxes[0].ticks.stepSize = max + 1;
          chart.config.options.scales.yAxes[0].ticks.max = max + 1;
          chart.config.options.scales.yAxes[0].ticks.min = Math.max(min, 0);
        }
      }

      if (type == 'doughnut') {
        var _chart$config$data3, _chart$config$data3$d, _chart$config$data3$d2, _chart$config$data4, _chart$config$data4$d;

        var oldFill = ctx.fillStyle;
        var fontSize = (height / 4).toFixed(2);
        ctx.restore();
        ctx.textBaseline = 'middle';
        var textX = Math.round(width / 2),
            textY = (height + chart.chartArea.top) / 2;
        ctx.font = fontSize / 3 + 'px sans-serif';
        ctx.fillStyle = chart.canvas.getAttribute('data-label-color') || '#FFF';
        ctx.textAlign = 'center';
        var text_name = chart.canvas.getAttribute('data-name');
        ctx.fillText(text_name, Math.round(width / 2), textY - height / 5);
        var text_unit = chart.canvas.getAttribute('data-unit');
        ctx.fillText(text_unit, Math.round(width / 2), textY + height / 4);
        ctx.font = fontSize + 'px sans-serif';
        ctx.fillStyle = (_chart$config$data3 = chart.config.data) === null || _chart$config$data3 === void 0 ? void 0 : (_chart$config$data3$d = _chart$config$data3.datasets) === null || _chart$config$data3$d === void 0 ? void 0 : (_chart$config$data3$d2 = _chart$config$data3$d[0]) === null || _chart$config$data3$d2 === void 0 ? void 0 : _chart$config$data3$d2.backgroundColor[0];
        ctx.textAlign = 'center';
        ctx.fillText((_chart$config$data4 = chart.config.data) === null || _chart$config$data4 === void 0 ? void 0 : (_chart$config$data4$d = _chart$config$data4.datasets[0]) === null || _chart$config$data4$d === void 0 ? void 0 : _chart$config$data4$d.data[0], textX, textY + height / 30);
        ctx.fillStyle = oldFill;
        ctx.save();
      }
    },
    afterDraw: function afterDraw(chart) {
      var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx,
          type = chart.config.type;

      if (type == 'doughnut' && chart.canvas.getAttribute('data-border') === 'margins') {
        var lineWidth = chart.radiusLength / 4;
        ctx.lineWidth = lineWidth;
        var max = parseInt(chart.canvas.getAttribute('data-max')) || 100; //green path

        ctx.strokeStyle = chart.chart.config.options.breakpointColors.base;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / max);
        ctx.stroke(); //yellow path

        ctx.strokeStyle = chart.chart.config.options.breakpointColors.warning;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / max, chart.chart.config.options.circumference * 0.10);
        ctx.stroke(); //red path

        ctx.strokeStyle = chart.chart.config.options.breakpointColors.danger;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.red / max, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
        ctx.stroke();
        var spaceWidth = chart.radiusLength / 6;
        ctx.strokeStyle = '#000'; //red

        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2 + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2 - spaceWidth / 1.5, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
        ctx.stroke();
        ctx.save();
      }
    }
  });
}

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/*! exports provided: colorToRgba */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorToRgba", function() { return colorToRgba; });
function colorToRgba(color) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!color) {
    return fallback;
  }

  return "rgba(".concat(color === null || color === void 0 ? void 0 : color.r, ", ").concat(color === null || color === void 0 ? void 0 : color.g, ", ").concat(color === null || color === void 0 ? void 0 : color.b, ", ").concat(color === null || color === void 0 ? void 0 : color.a, ")");
}

/***/ }),

/***/ "mobro":
/*!************************!*\
  !*** external "mobro" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = mobro;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=theme.js.map