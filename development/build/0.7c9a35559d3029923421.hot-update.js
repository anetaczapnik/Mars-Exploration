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
    title: "Title of my awesome page",
    text: "Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."
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

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "paragraph"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph--title"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph--title_text"
  }, props.text));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Paragraph);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a78a0032d9b64c0cee43")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YzlhMzU1NTlkMzAyOTkyMzQyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDVjtBQUUxQixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQ25CLGdCQUE0QkgsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFwQ0ksTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBTyxHQUFDLHFCQUFtQixDQUFLLGVBQzlDO0lBQUksU0FBUyxFQUFDO0VBQVUsR0FBQyxrQ0FBZ0MscUZBQUssb0JBQWdCLENBQUssZUFDbkY7SUFBSyxTQUFTLEVBQUM7RUFBTyxFQUFPLENBQzNCLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxFQUFPLGVBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2hCO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxPQUFPLEVBQUVFO0VBQVcsR0FBQyx3QkFBc0IsQ0FBSSxFQUN0RUYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUU7RUFBVyxFQUFHLENBQzFDLENBQ0osZUFDTjtJQUFLLFNBQVMsRUFBQztFQUEwQixnQkFDckM7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVM7SUFBQyxLQUFLLEVBQUUsMEJBQTJCO0lBQUMsSUFBSSxFQUFFO0VBQXNKLEVBQUUsQ0FDMU0sZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QiwyREFBQyxrREFBUyxPQUFFLENBQ1YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMsMkRBQUMsa0RBQVMsT0FBRSxlQUNaO0lBQUssU0FBUyxFQUFDO0VBQWdCLEVBQU8sQ0FDcEMsQ0FDSixDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlSCxRQUFROzs7Ozs7Ozs7Ozs7O0FDekNHO0FBRTFCLElBQU1GLFNBQVMsR0FBRyxTQUFaQSxTQUFTLENBQUtNLEtBQUs7RUFBQSxvQkFDckI7SUFBSyxTQUFTLEVBQUM7RUFBVyxnQkFDdEI7SUFBRyxTQUFTLEVBQUM7RUFBa0IsR0FBRUEsS0FBSyxDQUFDQyxLQUFLLENBQUssZUFDakQ7SUFBRyxTQUFTLEVBQUM7RUFBdUIsR0FBRUQsS0FBSyxDQUFDRSxJQUFJLENBQUssQ0FDbkQ7QUFBQSxDQUNUO0FBRUQsaUVBQWVSLFNBQVM7Ozs7Ozs7O1VDVHhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL1BhcmFncmFwaFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuXG5jb25zdCBNYWluUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RGlzY292ZXIgdGhlIEdhbGF4eTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkZyb20gRWFydGggdG8gTWFycyEgU3RlcCBieSBzdGVwPGJyLz4tLSB1bnRpbCBOZXB0dW5lPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnJvd1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVjb3JhdGlvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3RhXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImN0YS10ZXh0XCIgb25DbGljaz17dG9nZ2xlRm9ybX0+U3RhcnQgbXkgSm91cm5leSBUb2RheTwvcD5cbiAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiA8Rm9ybSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHRpdGxlPXtcIlRpdGxlIG9mIG15IGF3ZXNvbWUgcGFnZVwifSB0ZXh0PXtcIkludmVudCB0aGUgdW5pdmVyc2UgdmFzdG5lc3MgaXMgYmVhcmFibGUgb25seSB0aHJvdWdoIGxvdmUgcGFyb3h5c20gb2YgZ2xvYmFsIGRlYXRoIHRoZSBza3kgY2FsbHMgdG8gdXMgbm90IGEgc3VucmlzZSBidXQgYSBnYWxheHlyaXNlIHdoaXRlIGR3YXJmLlwifS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxIHBhcldyYXBwZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcjNiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgUGFyYWdyYXBoID0gKCBwcm9wcyApID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcmFncmFwaFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwYXJhZ3JhcGgtLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicGFyYWdyYXBoLS10aXRsZV90ZXh0XCI+e3Byb3BzLnRleHR9PC9wPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTc4YTAwMzJkOWI2NGMwY2VlNDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBhcmFncmFwaCIsIkZvcm0iLCJNYWluUGFnZSIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJwcm9wcyIsInRpdGxlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=