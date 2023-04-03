self["webpackHotUpdatees6_react"](0,{

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(190);
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(194);
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tour__WEBPACK_IMPORTED_MODULE_3__);
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
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: toggleTour
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Tour"))), isTourOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Tour__WEBPACK_IMPORTED_MODULE_3___default()), {
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

/***/ 194:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anetaczapnik/Websites/Mars-Exploration/development/js/Tour.js: Unterminated regular expression. (69:22)\n\n\u001b[0m \u001b[90m 67 |\u001b[39m \u001b[90m                            })}\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 68 |\u001b[39m \u001b[90m                        </div>*/\u001b[39m}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 69 |\u001b[39m                     \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mtable\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 70 |\u001b[39m                     \u001b[33m<\u001b[39m\u001b[33mCloseRoundedIcon\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"close\"\u001b[39m fontSize\u001b[33m=\u001b[39m\u001b[32m\"large\"\u001b[39m onClick\u001b[33m=\u001b[39m{props\u001b[33m.\u001b[39mhandleClose}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 71 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 72 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at instantiate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:362:12)\n    at JSXParserMixin.raise (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3254:19)\n    at JSXParserMixin.readRegexp (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:2940:20)\n    at JSXParserMixin.parseExprAtom (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:11091:16)\n    at JSXParserMixin.parseExprAtom (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6996:20)\n    at JSXParserMixin.parseExprSubscripts (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:10847:23)\n    at JSXParserMixin.parseUpdate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:10830:21)\n    at JSXParserMixin.parseMaybeUnary (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:10806:23)\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:10644:61)");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c8500d4da0ad2279808e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZDQ1ZjZjMzMwN2U2OWY1OWU0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDQTtBQVFBO0FBQ0Q7QUFFekIsSUFBTVUsR0FBRyxHQUFHLFNBQU5BLEdBQUcsR0FBUztFQUNkLGdCQUFvQ1QsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE1Q1UsVUFBVTtJQUFFQyxhQUFhO0VBQ2hDLGlCQUFvQ1gsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE1Q1ksVUFBVTtJQUFFQyxhQUFhO0VBRWhDLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJILGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7RUFDOUIsQ0FBQztFQUVELElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJGLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7RUFDOUIsQ0FBQztFQUVELG9CQUNJLHVJQUNJO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCO0lBQUssU0FBUyxFQUFDO0VBQU0sR0FBQyxNQUFJLENBQU0sZUFDaEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBSyxnQkFDZixvRkFBSSwyREFBQyxxREFBTztJQUFDLEVBQUUsRUFBRTtFQUFJLEdBQUMsR0FBQztJQUFLLFNBQVMsRUFBQztFQUFrQixHQUFDLE1BQUksQ0FBTSxDQUFVLENBQUssZUFDbEYsb0ZBQUk7SUFBUSxPQUFPLEVBQUVHO0VBQVcsR0FBQyxHQUFDO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FBQyxNQUFJLENBQU0sQ0FBUyxDQUFLLEVBQ2xGSCxVQUFVLGlCQUFJLDJEQUFDLDhDQUFJO0lBQUMsV0FBVyxFQUFFRztFQUFXLEVBQUcsZUFDaEQsb0ZBQUksMkRBQUMscURBQU87SUFBQyxFQUFFLEVBQUU7RUFBVyxHQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUM7RUFBUyxHQUFDLFNBQU8sQ0FBTSxDQUFVLENBQUssQ0FDbEYsQ0FDSCxlQUNOLHFGQUNJO0lBQVEsU0FBUyxFQUFDLFNBQVM7SUFBQyxPQUFPLEVBQUVEO0VBQVcsZ0JBQUMseUVBQU0sUUFBUSxDQUFPLGlCQUFhLENBQVMsRUFDM0ZKLFVBQVUsaUJBQUksMkRBQUMsNkNBQUk7SUFBQyxXQUFXLEVBQUVJO0VBQVcsRUFBRyxDQUM5QyxDQUNKLENBQ1A7QUFFWCxDQUFDO0FBRUQsaUVBQWVMLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztVQzlDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBUb3VyIGZyb20gXCIuL1RvdXJcIlxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzRm9ybU9wZW4sIHNldElzRm9ybU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc1RvdXJPcGVuLCBzZXRJc1RvdXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzRm9ybU9wZW4oIWlzRm9ybU9wZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZ2dsZVRvdXIgPSAoKSA9PiB7XG4gICAgICAgIHNldElzVG91ck9wZW4oIWlzVG91ck9wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdldyYXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+TkFTQTwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvXCJ9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmsgbmF2TGluazFcIj5Ib21lPC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVUb3VyfT4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rXCI+VG91cjwvZGl2PjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNUb3VyT3BlbiAmJiA8VG91ciBoYW5kbGVDbG9zZT17dG9nZ2xlVG91cn0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL2NvbnRhY3RcIn0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPkNvbnRhY3Q8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtpc0Zvcm1PcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjODUwMGQ0ZGEwYWQyMjc5ODA4ZVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiVG91ciIsIk5hdiIsImlzRm9ybU9wZW4iLCJzZXRJc0Zvcm1PcGVuIiwiaXNUb3VyT3BlbiIsInNldElzVG91ck9wZW4iLCJ0b2dnbGVGb3JtIiwidG9nZ2xlVG91ciJdLCJzb3VyY2VSb290IjoiIn0=