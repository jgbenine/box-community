/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/file-size-check.js":
/*!*******************************************!*\
  !*** ./src/js/modules/file-size-check.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FileEdit)
/* harmony export */ });
class FileEdit {
    constructor(selectFile, menssageFile) {
        this.selectFile = document.querySelector(selectFile);
        this.menssageFile = document.querySelector(menssageFile);
    }

    verifySize() {
        this.selectFile.addEventListener('change', () => {
            if (this.selectFile.files[0].size > (1024 * 1024 * 2)) {
                this.menssageFile.innerHTML = "Arquivo excedeu tamanho permitido, suportamos até 2 MB.";
                this.menssageFile.style.color = "#FF1E0F";
            } else {
                this.menssageFile.innerHTML = ("Arquivo adicionado com sucesso!" + "</br> Tipo de arquivo: " + this.selectFile.files[0].type);
                this.menssageFile.style.color = "#F7E752";

            }
        });
    }

    init() {
        this.verifySize();
        return this;
    }

}

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
    constructor(btnAbrir, btnFechar, containerModal) {
        this.btnAbrir = document.querySelector(btnAbrir)
        this.btnFechar = document.querySelector(btnFechar)
        this.containerModal = document.querySelector(containerModal)

        //Bind this ao "callback" para
        //fazer referência ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);

    }

    //ToggleModal
    toggleModal() {
        this.containerModal.classList.toggle('modal--active');
    }

    //Adiciona o evento de toggle no modal.
    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    //Fecha modal quando clica fora da mesma.
    cliqueForaModal(event) {
        if (event.target === this.containerModal) {
            this.toggleModal(event);
        }
    }

    //Adiciona os eventos nos elementos do modal.
    addModalEvents() {
        this.btnAbrir.addEventListener('click', this.eventToggleModal);
        this.btnFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.cliqueForaModal);
    }

    init() {
        if (this.btnAbrir && this.btnFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }
}

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/***/ (() => {


function searchManipulation() {
        const btnSearch = document.querySelector(".header__search span");
        const inputSearch = document.querySelector(".header__search input");
        btnSearch.addEventListener("click", showInput);

        function showInput() {
            console.log(inputSearch);

            inputSearch.style.display = "block";
            inputSearch.style.animation = "moveCrescent 0.7s ease";
        }
    }

    searchManipulation();

/***/ }),

/***/ "./src/js/modules/tab-navegation.js":
/*!******************************************!*\
  !*** ./src/js/modules/tab-navegation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TabNav)
/* harmony export */ });
class TabNav {
    constructor(menu, sectionContent) {
        this.tabMenu = document.querySelectorAll(menu);
        this.sectionContent = document.querySelectorAll(sectionContent);
        this.activeClass = 'active';
    }

    //Ativa a tab de acordo com index indicado
    activeTab(index) {
        this.sectionContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });

        this.sectionContent[index].classList.add(this.activeClass);
    }

    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => { this.activeTab(index) });
        });
    }

    init() {
        if (this.tabMenu.length && this.sectionContent.length) {
            this.activeTab(0);
            this.addTabNavEvent();
        }
    }
}

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tab-navegation */ "./src/js/modules/tab-navegation.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_file_size_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/file-size-check */ "./src/js/modules/file-size-check.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/search */ "./src/js/modules/search.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_search__WEBPACK_IMPORTED_MODULE_3__);








const tabNav = new _modules_tab_navegation__WEBPACK_IMPORTED_MODULE_0__["default"]('.nav-options > li', '.content-support > section')
tabNav.init();

const modalConfig = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-modal-config', '.close-modal-config', '.modal-config');
modalConfig.init();

const modalDownload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-download', '.close-modal-download', '.modal-download');
modalDownload.init();

const modalUpload = new _modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"]('.btn-upload', '.close-modal-upload', '.modal-upload');
modalUpload.init();

const checkSizeUpload = new _modules_file_size_check__WEBPACK_IMPORTED_MODULE_2__["default"]('#file-upload', '.response-file');
checkSizeUpload.init();

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsdUJBQXVCO0FBQzlFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQzVCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1Y7QUFDYTtBQUNYO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtEQUFNO0FBQ3pCO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUs7QUFDN0I7QUFDQTtBQUNBLDBCQUEwQixzREFBSztBQUMvQjtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFLO0FBQzdCO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVE7QUFDcEM7Ozs7Ozs7Ozs7O0FDckJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21vZHVsZXMvZmlsZS1zaXplLWNoZWNrLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy90YWItbmF2ZWdhdGlvbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RGaWxlLCBtZW5zc2FnZUZpbGUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdEZpbGUpO1xyXG4gICAgICAgIHRoaXMubWVuc3NhZ2VGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihtZW5zc2FnZUZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZlcmlmeVNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0RmlsZS5maWxlc1swXS5zaXplID4gKDEwMjQgKiAxMDI0ICogMikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVuc3NhZ2VGaWxlLmlubmVySFRNTCA9IFwiQXJxdWl2byBleGNlZGV1IHRhbWFuaG8gcGVybWl0aWRvLCBzdXBvcnRhbW9zIGF0w6kgMiBNQi5cIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVuc3NhZ2VGaWxlLnN0eWxlLmNvbG9yID0gXCIjRkYxRTBGXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnNzYWdlRmlsZS5pbm5lckhUTUwgPSAoXCJBcnF1aXZvIGFkaWNpb25hZG8gY29tIHN1Y2Vzc28hXCIgKyBcIjwvYnI+IFRpcG8gZGUgYXJxdWl2bzogXCIgKyB0aGlzLnNlbGVjdEZpbGUuZmlsZXNbMF0udHlwZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnNzYWdlRmlsZS5zdHlsZS5jb2xvciA9IFwiI0Y3RTc1MlwiO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52ZXJpZnlTaXplKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xyXG4gICAgY29uc3RydWN0b3IoYnRuQWJyaXIsIGJ0bkZlY2hhciwgY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICB0aGlzLmJ0bkFicmlyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihidG5BYnJpcilcclxuICAgICAgICB0aGlzLmJ0bkZlY2hhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuRmVjaGFyKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lck1vZGFsKVxyXG5cclxuICAgICAgICAvL0JpbmQgdGhpcyBhbyBcImNhbGxiYWNrXCIgcGFyYVxyXG4gICAgICAgIC8vZmF6ZXIgcmVmZXLDqm5jaWEgYW8gb2JqZXRvIGRhIGNsYXNzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCA9IHRoaXMuZXZlbnRUb2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2xpcXVlRm9yYU1vZGFsID0gdGhpcy5jbGlxdWVGb3JhTW9kYWwuYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9Ub2dnbGVNb2RhbFxyXG4gICAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC0tYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGljaW9uYSBvIGV2ZW50byBkZSB0b2dnbGUgbm8gbW9kYWwuXHJcbiAgICBldmVudFRvZ2dsZU1vZGFsKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GZWNoYSBtb2RhbCBxdWFuZG8gY2xpY2EgZm9yYSBkYSBtZXNtYS5cclxuICAgIGNsaXF1ZUZvcmFNb2RhbChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMuY29udGFpbmVyTW9kYWwpIHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVNb2RhbChldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vQWRpY2lvbmEgb3MgZXZlbnRvcyBub3MgZWxlbWVudG9zIGRvIG1vZGFsLlxyXG4gICAgYWRkTW9kYWxFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5idG5BYnJpci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZXZlbnRUb2dnbGVNb2RhbCk7XHJcbiAgICAgICAgdGhpcy5idG5GZWNoYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaXF1ZUZvcmFNb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5idG5BYnJpciAmJiB0aGlzLmJ0bkZlY2hhciAmJiB0aGlzLmNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTW9kYWxFdmVudHMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0iLCJcclxuZnVuY3Rpb24gc2VhcmNoTWFuaXB1bGF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGJ0blNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19zZWFyY2ggc3BhblwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19zZWFyY2ggaW5wdXRcIik7XHJcbiAgICAgICAgYnRuU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93SW5wdXQpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93SW5wdXQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlucHV0U2VhcmNoKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0U2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGlucHV0U2VhcmNoLnN0eWxlLmFuaW1hdGlvbiA9IFwibW92ZUNyZXNjZW50IDAuN3MgZWFzZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hNYW5pcHVsYXRpb24oKTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJOYXYge1xyXG4gICAgY29uc3RydWN0b3IobWVudSwgc2VjdGlvbkNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLnRhYk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1lbnUpO1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlY3Rpb25Db250ZW50KTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUNsYXNzID0gJ2FjdGl2ZSc7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BdGl2YSBhIHRhYiBkZSBhY29yZG8gY29tIGluZGV4IGluZGljYWRvXHJcbiAgICBhY3RpdmVUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50LmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50W2luZGV4XS5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhYk5hdkV2ZW50KCkge1xyXG4gICAgICAgIHRoaXMudGFiTWVudS5mb3JFYWNoKChpdGVtTWVudSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuYWN0aXZlVGFiKGluZGV4KSB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRhYk1lbnUubGVuZ3RoICYmIHRoaXMuc2VjdGlvbkNvbnRlbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiKDApO1xyXG4gICAgICAgICAgICB0aGlzLmFkZFRhYk5hdkV2ZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYWJOYXYgZnJvbSAnLi9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vbW9kdWxlcy9tb2RhbCc7XHJcbmltcG9ydCBGaWxlRWRpdCBmcm9tICcuL21vZHVsZXMvZmlsZS1zaXplLWNoZWNrJztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL21vZHVsZXMvc2VhcmNoJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHRhYk5hdiA9IG5ldyBUYWJOYXYoJy5uYXYtb3B0aW9ucyA+IGxpJywgJy5jb250ZW50LXN1cHBvcnQgPiBzZWN0aW9uJylcclxudGFiTmF2LmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsQ29uZmlnID0gbmV3IE1vZGFsKCcuYnRuLW1vZGFsLWNvbmZpZycsICcuY2xvc2UtbW9kYWwtY29uZmlnJywgJy5tb2RhbC1jb25maWcnKTtcclxubW9kYWxDb25maWcuaW5pdCgpO1xyXG5cclxuY29uc3QgbW9kYWxEb3dubG9hZCA9IG5ldyBNb2RhbCgnLmJ0bi1kb3dubG9hZCcsICcuY2xvc2UtbW9kYWwtZG93bmxvYWQnLCAnLm1vZGFsLWRvd25sb2FkJyk7XHJcbm1vZGFsRG93bmxvYWQuaW5pdCgpO1xyXG5cclxuY29uc3QgbW9kYWxVcGxvYWQgPSBuZXcgTW9kYWwoJy5idG4tdXBsb2FkJywgJy5jbG9zZS1tb2RhbC11cGxvYWQnLCAnLm1vZGFsLXVwbG9hZCcpO1xyXG5tb2RhbFVwbG9hZC5pbml0KCk7XHJcblxyXG5jb25zdCBjaGVja1NpemVVcGxvYWQgPSBuZXcgRmlsZUVkaXQoJyNmaWxlLXVwbG9hZCcsICcucmVzcG9uc2UtZmlsZScpO1xyXG5jaGVja1NpemVVcGxvYWQuaW5pdCgpO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=