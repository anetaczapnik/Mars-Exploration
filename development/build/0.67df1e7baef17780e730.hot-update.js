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
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);



var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
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
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c12296a937d3acf7622")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC42N2RmMWU3YmFlZjE3NzgwZTczMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0Y7QUFDVTtBQUVsQyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBSTtFQUFBLG9CQUNOO0lBQUssU0FBUyxFQUFDO0VBQU0sZ0JBQ2pCLDJEQUFDLDRDQUFHLE9BQUcsZUFDUCwyREFBQyxpREFBUSxPQUFHLENBQ1Y7QUFBQSxDQUNUO0FBRUQsaUVBQWVBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hxQjtBQUNKO0FBQ1Y7QUFFMUIsSUFBTUQsUUFBUSxHQUFHLFNBQVhBLFFBQVEsR0FBUztFQUNuQixnQkFBNEJFLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBcENHLE1BQU07SUFBRUMsU0FBUztFQUV4QixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0lBQ3JCRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxvQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFvQixnQkFDL0I7SUFBSyxTQUFTLEVBQUM7RUFBeUIsZ0JBQ3BDLHFGQUNJO0lBQUksU0FBUyxFQUFDO0VBQU8sR0FBQyxxQkFBbUIsQ0FBSyxlQUM5QztJQUFJLFNBQVMsRUFBQztFQUFVLEdBQUMsa0NBQWdDLHFGQUFLLG9CQUFnQixDQUFLLENBQ2pGLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxFQUFPLGVBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2hCO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxPQUFPLEVBQUVFO0VBQVcsR0FBQyx3QkFBc0IsQ0FBSSxFQUN0RUYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSSxPQUFHLENBQ2pCLENBQ0osZUFDTjtJQUFLLFNBQVMsRUFBQztFQUEwQixnQkFDckM7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVMsT0FBRSxDQUNWLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVMsT0FBRSxDQUNWLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBeUIsZ0JBQ3BDLDJEQUFDLGtEQUFTLE9BQUUsZUFDWjtJQUFLLFNBQVMsRUFBQztFQUFnQixFQUFPLENBQ3BDLENBQ0osQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZUwsUUFBUTs7Ozs7Ozs7VUN4Q3ZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvSGVyby5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9NYWluUGFnZS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTWFpblBhZ2VcIjtcblxuY29uc3QgSGVybyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8TWFpblBhZ2UgLz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9QYXJhZ3JhcGhcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWFpbldyYXBwZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpc2NvdmVyIHRoZSBHYWxheHk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Gcm9tIEVhcnRoIHRvIE1hcnMhIFN0ZXAgYnkgc3RlcDxici8+LS0gdW50aWwgTmVwdHVuZTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWNvcmF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhLXRleHRcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT5TdGFydCBteSBKb3VybmV5IFRvZGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxIHBhcldyYXBwZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcjNiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNjMTIyOTZhOTM3ZDNhY2Y3NjIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2IiwiTWFpblBhZ2UiLCJIZXJvIiwidXNlU3RhdGUiLCJQYXJhZ3JhcGgiLCJGb3JtIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=