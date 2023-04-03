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
    to: "/",
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink navLink1"
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    onClick: toggleTour,
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Tour"))), isTourOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tour__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: toggleTour
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/contact",
    style: {
      textDecoration: 'none'
    }
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c6c72b81a830cf2fa0ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zZGE5N2Y3NTFlY2IyNWYzOWM3Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNBO0FBUUE7QUFDRDtBQUV6QixJQUFNVSxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2QsZ0JBQW9DVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTVDVSxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQW9DWCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTVDWSxVQUFVO0lBQUVDLGFBQWE7RUFFaEMsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkgsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztFQUM5QixDQUFDO0VBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkYsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztFQUM5QixDQUFDO0VBRUQsb0JBQ0ksdUlBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxHQUFDLE1BQUksQ0FBTSxlQUNoQyxxRkFDSTtJQUFJLFNBQVMsRUFBQztFQUFLLGdCQUNmLG9GQUFJLDJEQUFDLHFEQUFPO0lBQUMsRUFBRSxFQUFFLEdBQUk7SUFBQyxLQUFLLEVBQUU7TUFBRUksY0FBYyxFQUFFO0lBQU87RUFBRSxHQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsR0FBQyxNQUFJLENBQU0sQ0FBVSxDQUFLLGVBQ3JILG9GQUFJLDJEQUFDLHFEQUFPO0lBQUMsT0FBTyxFQUFFRCxVQUFXO0lBQUMsS0FBSyxFQUFFO01BQUVDLGNBQWMsRUFBRTtJQUFPO0VBQUUsR0FBQyxHQUFDO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FBQyxNQUFJLENBQU0sQ0FBVSxDQUFLLEVBQ3ZISixVQUFVLGlCQUFJLDJEQUFDLDZDQUFJO0lBQUMsV0FBVyxFQUFFRztFQUFXLEVBQUcsZUFDaEQsb0ZBQUksMkRBQUMscURBQU87SUFBQyxFQUFFLEVBQUUsVUFBVztJQUFDLEtBQUssRUFBRTtNQUFFQyxjQUFjLEVBQUU7SUFBTztFQUFFLEdBQUMsR0FBQztJQUFLLFNBQVMsRUFBQztFQUFTLEdBQUMsU0FBTyxDQUFNLENBQVUsQ0FBSyxDQUNySCxDQUNILGVBQ04scUZBQ0k7SUFBUSxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRUY7RUFBVyxnQkFBQyx5RUFBTSxRQUFRLENBQU8saUJBQWEsQ0FBUyxFQUMzRkosVUFBVSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUk7RUFBVyxFQUFHLENBQzlDLENBQ0osQ0FDUDtBQUVYLENBQUM7QUFFRCxpRUFBZUwsR0FBRzs7Ozs7Ozs7VUM5Q2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTmF2LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBPdXRsZXRcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVG91ciBmcm9tIFwiLi9Ub3VyXCJcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0Zvcm1PcGVuLCBzZXRJc0Zvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNUb3VyT3Blbiwgc2V0SXNUb3VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Zvcm1PcGVuKCFpc0Zvcm1PcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVUb3VyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RvdXJPcGVuKCFpc1RvdXJPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZXcmFwcGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPk5BU0E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmsgbmF2TGluazFcIj5Ib21lPC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgb25DbGljaz17dG9nZ2xlVG91cn0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rXCI+VG91cjwvZGl2PjwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzVG91ck9wZW4gJiYgPFRvdXIgaGFuZGxlQ2xvc2U9e3RvZ2dsZVRvdXJ9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9jb250YWN0XCJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPkNvbnRhY3Q8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtpc0Zvcm1PcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNmM3MmI4MWE4MzBjZjJmYTBjZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiVG91ciIsIk5hdiIsImlzRm9ybU9wZW4iLCJzZXRJc0Zvcm1PcGVuIiwiaXNUb3VyT3BlbiIsInNldElzVG91ck9wZW4iLCJ0b2dnbGVGb3JtIiwidG9nZ2xlVG91ciIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==