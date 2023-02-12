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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4QmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1QkFBdUI7QUFDOUUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDVjtBQUNhO0FBQ1g7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0RBQU07QUFDekI7QUFDQTtBQUNBLHdCQUF3QixzREFBSztBQUM3QjtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFLO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUs7QUFDN0I7QUFDQTtBQUNBLDRCQUE0QixnRUFBUTtBQUNwQzs7Ozs7Ozs7Ozs7QUNyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbW9kdWxlcy9maWxlLXNpemUtY2hlY2suanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkLy4vc3JjL2pzL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC8uL3NyYy9qcy9tb2R1bGVzL3RhYi1uYXZlZ2F0aW9uLmpzIiwid2VicGFjazovL2Nkb3dubG9hZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Rvd25sb2FkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly9jZG93bmxvYWQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzP2Y4M2EiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUVkaXQge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0RmlsZSwgbWVuc3NhZ2VGaWxlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RGaWxlKTtcclxuICAgICAgICB0aGlzLm1lbnNzYWdlRmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobWVuc3NhZ2VGaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICB2ZXJpZnlTaXplKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEZpbGUuZmlsZXNbMF0uc2l6ZSA+ICgxMDI0ICogMTAyNCAqIDIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnNzYWdlRmlsZS5pbm5lckhUTUwgPSBcIkFycXVpdm8gZXhjZWRldSB0YW1hbmhvIHBlcm1pdGlkbywgc3Vwb3J0YW1vcyBhdMOpIDIgTUIuXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnNzYWdlRmlsZS5zdHlsZS5jb2xvciA9IFwiI0ZGMUUwRlwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW5zc2FnZUZpbGUuaW5uZXJIVE1MID0gKFwiQXJxdWl2byBhZGljaW9uYWRvIGNvbSBzdWNlc3NvIVwiICsgXCI8L2JyPiBUaXBvIGRlIGFycXVpdm86IFwiICsgdGhpcy5zZWxlY3RGaWxlLmZpbGVzWzBdLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW5zc2FnZUZpbGUuc3R5bGUuY29sb3IgPSBcIiNGN0U3NTJcIjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMudmVyaWZ5U2l6ZSgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcclxuICAgIGNvbnN0cnVjdG9yKGJ0bkFicmlyLCBidG5GZWNoYXIsIGNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgdGhpcy5idG5BYnJpciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnRuQWJyaXIpXHJcbiAgICAgICAgdGhpcy5idG5GZWNoYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ0bkZlY2hhcilcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJNb2RhbClcclxuXHJcbiAgICAgICAgLy9CaW5kIHRoaXMgYW8gXCJjYWxsYmFja1wiIHBhcmFcclxuICAgICAgICAvL2ZhemVyIHJlZmVyw6puY2lhIGFvIG9iamV0byBkYSBjbGFzc2VcclxuICAgICAgICB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwgPSB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsaXF1ZUZvcmFNb2RhbCA9IHRoaXMuY2xpcXVlRm9yYU1vZGFsLmJpbmQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vVG9nZ2xlTW9kYWxcclxuICAgIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnbW9kYWwtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWRpY2lvbmEgbyBldmVudG8gZGUgdG9nZ2xlIG5vIG1vZGFsLlxyXG4gICAgZXZlbnRUb2dnbGVNb2RhbChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRmVjaGEgbW9kYWwgcXVhbmRvIGNsaWNhIGZvcmEgZGEgbWVzbWEuXHJcbiAgICBjbGlxdWVGb3JhTW9kYWwoZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNvbnRhaW5lck1vZGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlTW9kYWwoZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0FkaWNpb25hIG9zIGV2ZW50b3Mgbm9zIGVsZW1lbnRvcyBkbyBtb2RhbC5cclxuICAgIGFkZE1vZGFsRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWJyaXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmV2ZW50VG9nZ2xlTW9kYWwpO1xyXG4gICAgICAgIHRoaXMuYnRuRmVjaGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ldmVudFRvZ2dsZU1vZGFsKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lck1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlxdWVGb3JhTW9kYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYnRuQWJyaXIgJiYgdGhpcy5idG5GZWNoYXIgJiYgdGhpcy5jb250YWluZXJNb2RhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZE1vZGFsRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59IiwiXHJcbmZ1bmN0aW9uIHNlYXJjaE1hbmlwdWxhdGlvbigpIHtcclxuICAgICAgICBjb25zdCBidG5TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fc2VhcmNoIHNwYW5cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fc2VhcmNoIGlucHV0XCIpO1xyXG4gICAgICAgIGJ0blNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0lucHV0KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvd0lucHV0KCkge1xyXG4gICAgICAgICAgICBpbnB1dFNlYXJjaC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBpbnB1dFNlYXJjaC5zdHlsZS5hbmltYXRpb24gPSBcIm1vdmVDcmVzY2VudCAwLjdzIGVhc2VcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoTWFuaXB1bGF0aW9uKCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiTmF2IHtcclxuICAgIGNvbnN0cnVjdG9yKG1lbnUsIHNlY3Rpb25Db250ZW50KSB7XHJcbiAgICAgICAgdGhpcy50YWJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChtZW51KTtcclxuICAgICAgICB0aGlzLnNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWN0aW9uQ29udGVudCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVDbGFzcyA9ICdhY3RpdmUnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQXRpdmEgYSB0YWIgZGUgYWNvcmRvIGNvbSBpbmRleCBpbmRpY2Fkb1xyXG4gICAgYWN0aXZlVGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudC5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9uQ29udGVudFtpbmRleF0uY2xhc3NMaXN0LmFkZCh0aGlzLmFjdGl2ZUNsYXNzKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYWJOYXZFdmVudCgpIHtcclxuICAgICAgICB0aGlzLnRhYk1lbnUuZm9yRWFjaCgoaXRlbU1lbnUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW1NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmFjdGl2ZVRhYihpbmRleCkgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy50YWJNZW51Lmxlbmd0aCAmJiB0aGlzLnNlY3Rpb25Db250ZW50Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYigwKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRUYWJOYXZFdmVudCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVGFiTmF2IGZyb20gJy4vbW9kdWxlcy90YWItbmF2ZWdhdGlvbic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xyXG5pbXBvcnQgRmlsZUVkaXQgZnJvbSAnLi9tb2R1bGVzL2ZpbGUtc2l6ZS1jaGVjayc7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0YWJOYXYgPSBuZXcgVGFiTmF2KCcubmF2LW9wdGlvbnMgPiBsaScsICcuY29udGVudC1zdXBwb3J0ID4gc2VjdGlvbicpXHJcbnRhYk5hdi5pbml0KCk7XHJcblxyXG5jb25zdCBtb2RhbENvbmZpZyA9IG5ldyBNb2RhbCgnLmJ0bi1tb2RhbC1jb25maWcnLCAnLmNsb3NlLW1vZGFsLWNvbmZpZycsICcubW9kYWwtY29uZmlnJyk7XHJcbm1vZGFsQ29uZmlnLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsRG93bmxvYWQgPSBuZXcgTW9kYWwoJy5idG4tZG93bmxvYWQnLCAnLmNsb3NlLW1vZGFsLWRvd25sb2FkJywgJy5tb2RhbC1kb3dubG9hZCcpO1xyXG5tb2RhbERvd25sb2FkLmluaXQoKTtcclxuXHJcbmNvbnN0IG1vZGFsVXBsb2FkID0gbmV3IE1vZGFsKCcuYnRuLXVwbG9hZCcsICcuY2xvc2UtbW9kYWwtdXBsb2FkJywgJy5tb2RhbC11cGxvYWQnKTtcclxubW9kYWxVcGxvYWQuaW5pdCgpO1xyXG5cclxuY29uc3QgY2hlY2tTaXplVXBsb2FkID0gbmV3IEZpbGVFZGl0KCcjZmlsZS11cGxvYWQnLCAnLnJlc3BvbnNlLWZpbGUnKTtcclxuY2hlY2tTaXplVXBsb2FkLmluaXQoKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9