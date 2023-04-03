"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);



var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(190);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Nav = function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navWrapping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, "NASA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink navLink1"
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Tour"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink",
    href: "contact"
  }, "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6b73958b0bc4f2beb973")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42ZDdlZmVlZTE4ZGMyN2M1ODVlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0Y7QUFDVTtBQUVsQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSTtFQUFBLG9CQUNOO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ2pCLDJEQUFDLDRDQUFHLE9BQUcsZUFDUCwyREFBQyxpREFBUSxPQUFHLENBQ1Y7QUFBQSxDQUNUO0FBRUQsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUI7QUFDZDtBQUNBO0FBUUE7QUFFMUIsSUFBTUYsR0FBRyxHQUFHLFNBQU5BLEdBQUcsR0FBUztFQUNkLGdCQUE0QkcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFwQ1EsTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJLHVJQUNJO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCO0lBQUssU0FBUyxFQUFDO0VBQU0sR0FBQyxNQUFJLENBQU0sZUFDaEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDZixvRkFBSSwyREFBQyxxREFBTyxRQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsR0FBQyxNQUFJLENBQU0sQ0FBVSxDQUFLLGVBQ3pFLG9GQUFJLDJEQUFDLHFEQUFPLFFBQUMsR0FBQztJQUFLLFNBQVMsRUFBQztFQUFTLEdBQUMsTUFBSSxDQUFNLENBQVUsQ0FBSyxlQUNoRSxvRkFBSSwyREFBQyxxREFBTyxRQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUMsU0FBUztJQUFDLElBQUksRUFBQztFQUFTLEdBQUMsU0FBTyxDQUFNLENBQVUsQ0FBSyxDQUNqRixDQUNILGVBQ04scUZBQ0k7SUFBRyxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRUU7RUFBVyxnQkFBQyx5RUFBTSxRQUFRLENBQU8saUJBQWEsQ0FBSSxFQUNqRkYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUU7RUFBVyxFQUFHLENBQzFDLENBQ0osQ0FDUDtBQUVYLENBQUM7QUFFRCxpRUFBZWIsR0FBRzs7Ozs7Ozs7VUN2Q2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvSGVyby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gXCIuL01haW5QYWdlXCI7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPE1haW5QYWdlIC8+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2V3JhcHBpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5OQVNBPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rPiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmsgbmF2TGluazFcIj5Ib21lPC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbms+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPlRvdXI8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluaz4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cImNvbnRhY3RcIj5Db250YWN0PC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiam91cm5leVwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PjxzcGFuPiYjMTAyMzA7PC9zcGFuPlNpZ24gdXAgVE9EQVk8L2E+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPEZvcm0gaGFuZGxlQ2xvc2U9e3RvZ2dsZUZvcm19IC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZiNzM5NThiMGJjNGYyYmViOTczXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiTWFpblBhZ2UiLCJIZXJvIiwidXNlU3RhdGUiLCJGb3JtIiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==