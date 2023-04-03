"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);


var Tour = function Tour(props) {
  fetch("http://localhost:3005/candidates").then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data);
  })["catch"](function (error) {
    console.log(error);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formBackground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Candidates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "close",
    fontSize: "large",
    onClick: props.handleClose
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tour);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c27055d01703773453a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ZDEyN2E3MDBlMWNiM2VkMmUyYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUksQ0FBS0MsS0FBSyxFQUFNO0VBRXRCQyxLQUFLLG9DQUFvQyxDQUNwQ0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7SUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFHLEtBQUssRUFBSTtJQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztFQUdOLG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUMzQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QixxRkFDSSx1RUFBSSxZQUFVLENBQUssZUFJbkIsMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRVIsS0FBSyxDQUFDUztFQUFZLEVBQUUsQ0FDaEYsQ0FDSixDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlVixJQUFJOzs7Ozs7OztVQzlCbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Ub3VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBUb3VyID0gKCBwcm9wcyApID0+IHtcblxuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDUvY2FuZGlkYXRlc2ApXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+Q2FuZGlkYXRlczwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlUm91bmRlZEljb24gY2xhc3NOYW1lPVwiY2xvc2VcIiBmb250U2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyNzA1NWQwMTcwMzc3MzQ1M2E0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiVG91ciIsInByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==