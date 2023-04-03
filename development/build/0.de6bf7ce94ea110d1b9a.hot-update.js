"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MainPage = function MainPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Discover the Galaxy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "subtitle"
  }, "From Earth to Mars! Step by step", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "-- until Neptune"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "decoration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-text",
    onClick: toggleForm
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: "Title of my awesome page"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1 parWrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "par3background"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined;

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraph"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph--title"
  }, _this.props.text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph--title_text"
  }, "Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4eea10d23273bb352a31")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kZTZiZjdjZTk0ZWExMTBkMWI5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDVjtBQUUxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQ25CLGdCQUE0QkgsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFwQ0ksTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBTyxHQUFDLHFCQUFtQixDQUFLLGVBQzlDO0lBQUksU0FBUyxFQUFDO0VBQVUsR0FBQyxrQ0FBZ0MscUZBQUssb0JBQWdCLENBQUssZUFDbkY7SUFBSyxTQUFTLEVBQUM7RUFBTyxFQUFPLENBQzNCLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxFQUFPLGVBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2hCO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxPQUFPLEVBQUVFO0VBQVcsR0FBQyx3QkFBc0IsQ0FBSSxFQUN0RUYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUU7RUFBVyxFQUFHLENBQzFDLENBQ0osZUFDTjtJQUFLLFNBQVMsRUFBQztFQUEwQixnQkFDckM7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVM7SUFBQyxJQUFJLEVBQUU7RUFBMkIsRUFBRSxDQUM1QyxlQUNOO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCLDJEQUFDLGtEQUFTLE9BQUUsQ0FDVixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQXlCLGdCQUNwQywyREFBQyxrREFBUyxPQUFFLGVBQ1o7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsRUFBTyxDQUNwQyxDQUNKLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVILFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDekNHO0FBRTFCLElBQU1GLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUtNLEtBQUs7RUFBQSxvQkFDckI7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDdEI7SUFBRyxTQUFTLEVBQUM7RUFBa0IsR0FBRSxLQUFJLENBQUNBLEtBQUssQ0FBQ0MsSUFBSSxDQUFLLGVBQ3JEO0lBQUcsU0FBUyxFQUFDO0VBQXVCLEdBQUMscUpBQW1KLENBQUksQ0FDMUw7QUFBQSxDQUNUO0FBRUQsaUVBQWVQLFNBQVM7Ozs7Ozs7O1VDVHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL1BhcmFncmFwaFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuXG5jb25zdCBNYWluUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RGlzY292ZXIgdGhlIEdhbGF4eTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkZyb20gRWFydGggdG8gTWFycyEgU3RlcCBieSBzdGVwPGJyLz4tLSB1bnRpbCBOZXB0dW5lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVjb3JhdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YS10ZXh0XCIgb25DbGljaz17dG9nZ2xlRm9ybX0+U3RhcnQgbXkgSm91cm5leSBUb2RheTwvcD5cbiAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiA8Rm9ybSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHRleHQ9e1wiVGl0bGUgb2YgbXkgYXdlc29tZSBwYWdlXCJ9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjEgcGFyV3JhcHBlcjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyM2JhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQYXJhZ3JhcGggPSAoIHByb3BzICkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyYWdyYXBoXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBhcmFncmFwaC0tdGl0bGVcIj57dGhpcy5wcm9wcy50ZXh0fTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoLS10aXRsZV90ZXh0XCI+SW52ZW50IHRoZSB1bml2ZXJzZSB2YXN0bmVzcyBpcyBiZWFyYWJsZSBvbmx5IHRocm91Z2ggbG92ZSBwYXJveHlzbSBvZiBnbG9iYWwgZGVhdGggdGhlIHNreSBjYWxscyB0byB1cyBub3QgYSBzdW5yaXNlIGJ1dCBhIGdhbGF4eXJpc2Ugd2hpdGUgZHdhcmYuPC9wPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGVlYTEwZDIzMjczYmIzNTJhMzFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhcmFncmFwaCIsIkZvcm0iLCJNYWluUGFnZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJwcm9wcyIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9