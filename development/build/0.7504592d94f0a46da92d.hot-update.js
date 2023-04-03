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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("e3c0fa1c321a1c2f8288")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43NTA0NTkyZDk0ZjBhNDZkYTkyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUksQ0FBS0MsS0FBSyxFQUFNO0VBRXRCQyxLQUFLLG9DQUFvQyxDQUNwQ0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7SUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtFQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7SUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztFQUNyQixDQUFDLENBQUMsU0FDSSxDQUFDLFVBQUFHLEtBQUssRUFBSTtJQUNaRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztFQUdOLG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUMzQjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QixxRkFDSSxzRUFFSyxlQUVMLDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsUUFBUSxFQUFDLE9BQU87SUFBQyxPQUFPLEVBQUVSLEtBQUssQ0FBQ1M7RUFBWSxFQUFFLENBQ2hGLENBQ0osQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZVYsSUFBSTs7Ozs7Ozs7VUM5Qm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvVG91ci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcblxuY29uc3QgVG91ciA9ICggcHJvcHMgKSA9PiB7XG5cbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA1L2NhbmRpZGF0ZXNgKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlUm91bmRlZEljb24gY2xhc3NOYW1lPVwiY2xvc2VcIiBmb250U2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUzYzBmYTFjMzIxYTFjMmY4Mjg4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiVG91ciIsInByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==