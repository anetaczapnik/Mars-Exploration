self["webpackHotUpdatees6_react"](0,{

/***/ 46:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anetaczapnik/Websites/Mars-Exploration/development/js/Form.js: Missing initializer in const declaration. (50:21)\n\n\u001b[0m \u001b[90m 48 |\u001b[39m         event\u001b[33m.\u001b[39mpreventDefault()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 49 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 50 |\u001b[39m         \u001b[36mconst\u001b[39m setData\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 51 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 52 |\u001b[39m         setSub(\u001b[36mtrue\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 53 |\u001b[39m\u001b[0m\n    at instantiate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:362:12)\n    at JSXParserMixin.raise (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3254:19)\n    at JSXParserMixin.parseVar (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13184:16)\n    at JSXParserMixin.parseVarStatement (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13015:10)\n    at JSXParserMixin.parseStatementContent (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12620:23)\n    at JSXParserMixin.parseStatementLike (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12534:17)\n    at JSXParserMixin.parseStatementListItem (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12521:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13104:61)\n    at JSXParserMixin.parseBlockBody (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13097:10)");

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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form__WEBPACK_IMPORTED_MODULE_2__);
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
  }, "From Earth to Mars! Step by step", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "-- until Neptune")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "decoration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-text",
    onClick: toggleForm
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
    handleClose: toggleForm
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
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Form__WEBPACK_IMPORTED_MODULE_2__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Form__WEBPACK_IMPORTED_MODULE_2___default()), {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Form__WEBPACK_IMPORTED_MODULE_6__);







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6233bf4710a6142fdec3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUcsZUFDZCwyREFBQywrQ0FBTSxPQUFHLENBQ1g7QUFBQSxDQUNOO0FBRUQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHUiw0REFBVSxDQUFDSyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRyxDQUFDOzs7Ozs7OztVQ25CcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL1BhcmFncmFwaFwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuXG5jb25zdCBNYWluUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RGlzY292ZXIgdGhlIEdhbGF4eTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkZyb20gRWFydGggdG8gTWFycyEgU3RlcCBieSBzdGVwPGJyLz4tLSB1bnRpbCBOZXB0dW5lPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlY29yYXRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGEtdGV4dFwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PlN0YXJ0IG15IEpvdXJuZXkgVG9kYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPEZvcm0gaGFuZGxlQ2xvc2U9e3RvZ2dsZUZvcm19Lz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjEgcGFyV3JhcHBlcjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyM2JhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZXcmFwcGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPk5BU0E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibmF2TGluayBuYXZMaW5rMVwiIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIiN0b3Vyc1wiPlRvdXI8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rXCIgaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9hPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfS8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5pbXBvcnQgU2Vjb25kUGFnZSBmcm9tIFwiLi9TZWNvbmRQYWdlXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8SGVybyAvPlxuICAgICAgICA8U2Vjb25kUGFnZSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4pXG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYyMzNiZjQ3MTBhNjE0MmZkZWMzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQYXJhZ3JhcGgiLCJGb3JtIiwiTWFpblBhZ2UiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVGb3JtIiwiTmF2IiwiY3JlYXRlUm9vdCIsIkhlcm8iLCJTZWNvbmRQYWdlIiwiRm9vdGVyIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9