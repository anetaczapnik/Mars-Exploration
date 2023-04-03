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



var Hero = function Hero(_ref) {
  var candidates = _ref.candidates,
    updateCandidates = _ref.updateCandidates;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    candidates: candidates,
    updateCandidates: updateCandidates
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    candidates: candidates,
    updateCandidates: updateCandidates
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ 186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190);
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
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form1__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(190);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form1__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
/******/ 	__webpack_require__.h = () => ("b52464b7f36ae52038bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtJQUFHLFNBQVMsRUFBQyxTQUFTO0lBQUMsSUFBSSxFQUFDO0VBQVEsR0FBQyxNQUFJLENBQUksQ0FBSyxlQUN0RCxvRkFBSTtJQUFHLFNBQVMsRUFBQyxTQUFTO0lBQUMsSUFBSSxFQUFDO0VBQVUsR0FBQyxTQUFPLENBQUksQ0FBSyxDQUMxRCxDQUNILGVBQ04scUZBQ0k7SUFBRyxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRUU7RUFBVyxnQkFBQyx5RUFBTSxRQUFRLENBQU8saUJBQWEsQ0FBSSxFQUNqRkYsTUFBTSxpQkFBSSwyREFBQyw4Q0FBSztJQUFDLFdBQVcsRUFBRUUsVUFBVztJQUFDLFVBQVUsRUFBRVAsVUFBVztJQUFDLGdCQUFnQixFQUFFQztFQUFpQixFQUFFLENBQ3RHLENBQ0osQ0FDUDtBQUVYLENBQUM7QUFFRCxpRUFBZUosR0FBRzs7Ozs7Ozs7VUMvQmxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvSGVyby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gXCIuL01haW5QYWdlXCI7XG5cbmNvbnN0IEhlcm8gPSAoeyBjYW5kaWRhdGVzLCB1cGRhdGVDYW5kaWRhdGVzIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPE5hdiBjYW5kaWRhdGVzPXtjYW5kaWRhdGVzfSB1cGRhdGVDYW5kaWRhdGVzPXt1cGRhdGVDYW5kaWRhdGVzfS8+XG4gICAgICAgIDxNYWluUGFnZSBjYW5kaWRhdGVzPXtjYW5kaWRhdGVzfSB1cGRhdGVDYW5kaWRhdGVzPXt1cGRhdGVDYW5kaWRhdGVzfS8+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vUGFyYWdyYXBoXCI7XG5pbXBvcnQgRm9ybTEgZnJvbSBcIi4vRm9ybTFcIjtcblxuY29uc3QgTWFpblBhZ2UgPSAoeyBjYW5kaWRhdGVzLCB1cGRhdGVDYW5kaWRhdGVzIH0pID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudE1haW5XcmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RGlzY292ZXIgdGhlIEdhbGF4eTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkZyb20gRWFydGggdG8gTWFycyEgU3RlcCBieSBzdGVwPGJyLz4tLSB1bnRpbCBOZXB0dW5lPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlY29yYXRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGEtdGV4dFwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PlN0YXJ0IG15IEpvdXJuZXkgVG9kYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPEZvcm0xIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSBjYW5kaWRhdGVzPXtjYW5kaWRhdGVzfSB1cGRhdGVDYW5kaWRhdGVzPXt1cGRhdGVDYW5kaWRhdGVzfS8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxIHBhcldyYXBwZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcjNiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBGb3JtMSBmcm9tIFwiLi9Gb3JtMVwiO1xuXG5jb25zdCBOYXYgPSAoeyBjYW5kaWRhdGVzLCB1cGRhdGVDYW5kaWRhdGVzIH0pID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdldyYXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+TkFTQTwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rIG5hdkxpbmsxXCIgaHJlZj1cIiNob21lXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm5hdkxpbmtcIiBocmVmPVwiI3RvdXJzXCI+VG91cjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm5hdkxpbmtcIiBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiam91cm5leVwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PjxzcGFuPiYjMTAyMzA7PC9zcGFuPlNpZ24gdXAgVE9EQVk8L2E+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPEZvcm0xIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSBjYW5kaWRhdGVzPXtjYW5kaWRhdGVzfSB1cGRhdGVDYW5kaWRhdGVzPXt1cGRhdGVDYW5kaWRhdGVzfS8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI1MjQ2NGI3ZjM2YWU1MjAzOGJmXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiTWFpblBhZ2UiLCJIZXJvIiwiY2FuZGlkYXRlcyIsInVwZGF0ZUNhbmRpZGF0ZXMiLCJ1c2VTdGF0ZSIsIlBhcmFncmFwaCIsIkZvcm0xIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=