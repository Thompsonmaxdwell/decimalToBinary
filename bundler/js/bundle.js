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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/binary.js":
/*!*****************************!*\
  !*** ./public/js/binary.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet form = document.querySelector('form')\nlet output = document.querySelector('.output');\nconst typeSelected = ()=>{\n    \n    form.addEventListener('submit', (e)=>{\n        e.preventDefault()\n       let input=  form.querySelector('input').value\n       let select = form.querySelector('select').value\n        \n        if(select === 'Binary'){\n            output.innerHTML = Number(input).toString(2)\n\n        } else if(select === 'Octal'){\n            output.innerHTML = Number(input).toString(8)\n\n        } else if(select === 'Hexa'){\n            output.innerHTML = Number(input).toString(16)\n       }\n\n\n        \n    })\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeSelected);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvanMvYmluYXJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcHVibGljL2pzL2JpbmFyeS5qcz80NjNlIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpXG5sZXQgb3V0cHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dCcpO1xuY29uc3QgdHlwZVNlbGVjdGVkID0gKCk9PntcbiAgICBcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICBsZXQgaW5wdXQ9ICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWVcbiAgICAgICBsZXQgc2VsZWN0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS52YWx1ZVxuICAgICAgICBcbiAgICAgICAgaWYoc2VsZWN0ID09PSAnQmluYXJ5Jyl7XG4gICAgICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gTnVtYmVyKGlucHV0KS50b1N0cmluZygyKVxuXG4gICAgICAgIH0gZWxzZSBpZihzZWxlY3QgPT09ICdPY3RhbCcpe1xuICAgICAgICAgICAgb3V0cHV0LmlubmVySFRNTCA9IE51bWJlcihpbnB1dCkudG9TdHJpbmcoOClcblxuICAgICAgICB9IGVsc2UgaWYoc2VsZWN0ID09PSAnSGV4YScpe1xuICAgICAgICAgICAgb3V0cHV0LmlubmVySFRNTCA9IE51bWJlcihpbnB1dCkudG9TdHJpbmcoMTYpXG4gICAgICAgfVxuXG5cbiAgICAgICAgXG4gICAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVTZWxlY3RlZDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/js/binary.js\n");

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_binary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/js/binary.js */ \"./public/js/binary.js\");\n\n\n\nObject(_public_js_binary_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9pbmRleC5qcz9kNzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlU2VsZWN0ZWQgZnJvbSAnLi4vLi4vcHVibGljL2pzL2JpbmFyeS5qcydcblxuXG50eXBlU2VsZWN0ZWQoKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/index.js\n");

/***/ })

/******/ });