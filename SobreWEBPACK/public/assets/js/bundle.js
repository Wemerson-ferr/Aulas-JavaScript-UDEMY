/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moduloA.js":
/*!************************!*\
  !*** ./src/moduloA.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conecta: () => (/* binding */ conecta)
/* harmony export */ });
function conecta() {
  console.log('nova conexão realida.....');
}

/***/ }),

/***/ "./src/moduloB.js":
/*!************************!*\
  !*** ./src/moduloB.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   funcaoQualquer: () => (/* binding */ funcaoQualquer),
/* harmony export */   nome: () => (/* binding */ nome)
/* harmony export */ });
function funcaoQualquer() {
  console.log('Qualquer função .........................');
}
var nome = 'Wemerson';


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
/* harmony import */ var _moduloB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduloB */ "./src/moduloB.js");
/* harmony import */ var _moduloA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduloA */ "./src/moduloA.js");
//Para saber mais meios de exportar e importar veja a documentação oficial.



var nomeImportado = _moduloB__WEBPACK_IMPORTED_MODULE_0__.nome;
console.log(nomeImportado);
(0,_moduloB__WEBPACK_IMPORTED_MODULE_0__.funcaoQualquer)();
(0,_moduloA__WEBPACK_IMPORTED_MODULE_1__.conecta)(); //Mudamos o nome da função ao importar, para evitar possíveis conflitos
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map