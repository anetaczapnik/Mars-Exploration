"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(187);
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Nav = function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFormOpen = _useState2[0],
    setIsFormOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isTourOpen = _useState4[0],
    setIsTourOpen = _useState4[1];
  var toggleForm = function toggleForm() {
    setIsFormOpen(!isFormOpen);
  };
  var toggleTour = function toggleTour() {
    setIsTourOpen(!isTourOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navWrapping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, "NASA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink navLink1"
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    onClick: toggleTour
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Tour"))), isTourOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tour__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: toggleTour
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/contact"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isFormOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(187);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(189);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(192);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);










/*export const AppContext = createContext(null);*/

var App = function App() {
  /*    const [candidates, setCandidates] = useState([
          {
              firstName: "Anna",
              lastName: "Kowalik",
              email: "anna.kowalik@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Katarzyna",
              lastName: "Piotrowska",
              email: "k.piotrowska@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Marcin",
              lastName: "Mulicki",
              email: "mm2589@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Adam",
              lastName: "Wolecki",
              email: "a.woleckik@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
      ]);*/

  return (
    /*#__PURE__*/
    /*        <AppContext.Provider value={{candidates, setCandidates}}>*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/contact",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], null))
    })))
    /*        </AppContext.Provider>*/
  );
};

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3540f92cd0abd426323c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsT0FBRyxDQUFDOzs7Ozs7OztVQ25FcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBPdXRsZXRcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVG91ciBmcm9tIFwiLi9Ub3VyXCJcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0Zvcm1PcGVuLCBzZXRJc0Zvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNUb3VyT3Blbiwgc2V0SXNUb3VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Zvcm1PcGVuKCFpc0Zvcm1PcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVUb3VyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RvdXJPcGVuKCFpc1RvdXJPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZXcmFwcGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPk5BU0E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifT4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rIG5hdkxpbmsxXCI+SG9tZTwvZGl2PjwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIG9uQ2xpY2s9e3RvZ2dsZVRvdXJ9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5Ub3VyPC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNUb3VyT3BlbiAmJiA8VG91ciBoYW5kbGVDbG9zZT17dG9nZ2xlVG91cn0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL2NvbnRhY3RcIn0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPkNvbnRhY3Q8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtpc0Zvcm1PcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXNcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IFNlY29uZFBhZ2UgZnJvbSBcIi4vU2Vjb25kUGFnZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuL0NvbnRhY3RcIjtcblxuLypleHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7Ki9cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuLyogICAgY29uc3QgW2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQW5uYVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiS293YWxpa1wiLFxuICAgICAgICAgICAgZW1haWw6IFwiYW5uYS5rb3dhbGlrQHdwLnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJLYXRhcnp5bmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIlBpb3Ryb3dza2FcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImsucGlvdHJvd3NrYUBvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJNYXJjaW5cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIk11bGlja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIm1tMjU4OUB3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQWRhbVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiV29sZWNraVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiYS53b2xlY2tpa0BvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgXSk7Ki9cblxuICAgIHJldHVybihcbi8qICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXN9fT4qL1xuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy8nIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRQYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fSAvPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD0nL2NvbnRhY3QnIGVsZW1lbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cbi8qICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+Ki9cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjM1NDBmOTJjZDBhYmQ0MjYzMjNjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJUb3VyIiwiTmF2IiwiaXNGb3JtT3BlbiIsInNldElzRm9ybU9wZW4iLCJpc1RvdXJPcGVuIiwic2V0SXNUb3VyT3BlbiIsInRvZ2dsZUZvcm0iLCJ0b2dnbGVUb3VyIiwiY3JlYXRlQ29udGV4dCIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJIZXJvIiwiU2Vjb25kUGFnZSIsIkZvb3RlciIsIkNvbnRhY3QiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=