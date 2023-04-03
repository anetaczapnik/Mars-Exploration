self["webpackHotUpdatees6_react"](0,{

/***/ 190:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anetaczapnik/Websites/Mars-Exploration/development/js/Form1.js: Missing initializer in destructuring declaration. (21:27)\n\n\u001b[0m \u001b[90m 19 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m     \u001b[36mconst\u001b[39m [sub\u001b[33m,\u001b[39m setSub] \u001b[33m=\u001b[39m useState(\u001b[36mfalse\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 |\u001b[39m     \u001b[36mconst\u001b[39m [array\u001b[33m,\u001b[39m setArray] \u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                            \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 |\u001b[39m     \u001b[36mconst\u001b[39m toggleForm \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m         props\u001b[33m.\u001b[39mhandleClose()\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:362:12)\n    at JSXParserMixin.raise (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3254:19)\n    at JSXParserMixin.parseVar (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13179:16)\n    at JSXParserMixin.parseVarStatement (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13015:10)\n    at JSXParserMixin.parseStatementContent (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12620:23)\n    at JSXParserMixin.parseStatementLike (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12534:17)\n    at JSXParserMixin.parseStatementListItem (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12521:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13104:61)\n    at JSXParserMixin.parseBlockBody (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13097:10)");

/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form1__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MainPage = function MainPage(_ref) {
  var candidates = _ref.candidates,
    updateCandidates = _ref.updateCandidates;
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
  }, "From Earth to Mars! Step by step", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "-- until Neptune")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "decoration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-text",
    onClick: toggleForm
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Form1__WEBPACK_IMPORTED_MODULE_2___default()), {
    handleClose: toggleForm,
    candidates: candidates,
    updateCandidates: updateCandidates
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1 parWrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "par3background"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form1__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Nav = function Nav(_ref) {
  var candidates = _ref.candidates,
    updateCandidates = _ref.updateCandidates;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink navLink1",
    href: "#home"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink",
    href: "#tours"
  }, "Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink",
    href: "#contact"
  }, "Contact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Form1__WEBPACK_IMPORTED_MODULE_2___default()), {
    handleClose: toggleForm,
    candidates: candidates,
    updateCandidates: updateCandidates
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("353b3ecedf3f06fe50bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixFQUFFQztFQUFpQixFQUFFLENBQ3RHLENBQ0osQ0FDUDtBQUVYLENBQUM7QUFFRCxpRUFBZUksR0FBRzs7Ozs7Ozs7VUMvQmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTmF2LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL1BhcmFncmFwaFwiO1xuaW1wb3J0IEZvcm0xIGZyb20gXCIuL0Zvcm0xXCI7XG5cbmNvbnN0IE1haW5QYWdlID0gKHsgY2FuZGlkYXRlcywgdXBkYXRlQ2FuZGlkYXRlcyB9KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWFpbldyYXBwZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpc2NvdmVyIHRoZSBHYWxheHk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Gcm9tIEVhcnRoIHRvIE1hcnMhIFN0ZXAgYnkgc3RlcDxici8+LS0gdW50aWwgTmVwdHVuZTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWNvcmF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhLXRleHRcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT5TdGFydCBteSBKb3VybmV5IFRvZGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtMSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gY2FuZGlkYXRlcz17Y2FuZGlkYXRlc30gdXBkYXRlQ2FuZGlkYXRlcz17dXBkYXRlQ2FuZGlkYXRlc30vPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWFpbldyYXBwZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMSBwYXJXcmFwcGVyMlwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXIzYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblBhZ2U7XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgRm9ybTEgZnJvbSBcIi4vRm9ybTFcIjtcblxuY29uc3QgTmF2ID0gKHsgY2FuZGlkYXRlcywgdXBkYXRlQ2FuZGlkYXRlcyB9KSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZXcmFwcGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPk5BU0E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibmF2TGluayBuYXZMaW5rMVwiIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIiN0b3Vyc1wiPlRvdXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9hPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtMSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gY2FuZGlkYXRlcz17Y2FuZGlkYXRlc30gdXBkYXRlQ2FuZGlkYXRlcz17dXBkYXRlQ2FuZGlkYXRlc30vPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNTNiM2VjZWRmM2YwNmZlNTBiZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUGFyYWdyYXBoIiwiRm9ybTEiLCJNYWluUGFnZSIsImNhbmRpZGF0ZXMiLCJ1cGRhdGVDYW5kaWRhdGVzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSIsIk5hdiJdLCJzb3VyY2VSb290IjoiIn0=