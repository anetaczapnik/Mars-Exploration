"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Content = function Content(_ref) {
  var contentClasses = _ref.contentClasses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: contentClasses[0]
  }, "Discover the Galaxy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: contentClasses[1]
  }, "From Earth to Mars"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Nav = function Nav(_ref) {
  var navClasses = _ref.navClasses;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: navClasses[0]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "LOGO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Tours")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#"
  }, "Contact"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);





var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    navClasses: ["container", "b", "c", "d", "e"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    contentClasses: ["main", "main2"]
  }));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 43:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.main2 {\n  background-color: red;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container {\n  height: 15%;\n  width: 100vw;\n}", "",{"version":3,"sources":["webpack://./development/scss/elements/_content.scss","webpack://./development/scss/main.scss","webpack://./development/scss/elements/_nav.scss"],"names":[],"mappings":"AAAA;EACE,uBAAA;EACA,4BAAA;EACA,2BAAA;ACCF;;ADEA;EACE,qBAAA;EACA,4BAAA;EACA,2BAAA;ACCF;;ACVA;EACE,WAAA;EACA,YAAA;ADaF","sourcesContent":[".main {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.main2 {\n  background-color: red;\n  background-repeat: no-repeat;\n  background-position: center;\n}",".main {\n  background-color: black;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.main2 {\n  background-color: red;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.container {\n  height: 15%;\n  width: 100vw;\n}",".container {\n  height: 15%;\n  width: 100vw;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8462aed3ce48a66113eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jZjgzYmJmMmRiM2RmM2IyYTI5Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBTztFQUFBLElBQU1DLGNBQWMsUUFBZEEsY0FBYztFQUFBLG9CQUM3Qix1SUFDSTtJQUFJLFNBQVMsRUFBRUEsY0FBYyxDQUFDLENBQUM7RUFBRSxHQUFDLHFCQUFtQixDQUFLLGVBQzFEO0lBQUksU0FBUyxFQUFFQSxjQUFjLENBQUMsQ0FBQztFQUFFLEdBQUMsb0JBQWtCLENBQUssQ0FDMUQ7QUFBQSxDQUNOO0FBRUQsaUVBQWVELE9BQU87Ozs7Ozs7Ozs7Ozs7QUNUbUI7QUFFekMsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUc7RUFBQSxJQUFNQyxVQUFVLFFBQVZBLFVBQVU7RUFBQSxvQkFDckIsdUlBQ0k7SUFBSyxTQUFTLEVBQUVBLFVBQVUsQ0FBQyxDQUFDO0VBQUUsZ0JBQzFCLHdFQUFLLE1BQUksQ0FBTSxlQUNmLHFGQUNJLG9GQUNJLG9GQUFJO0lBQUcsSUFBSSxFQUFDO0VBQUcsR0FBQyxNQUFJLENBQUksQ0FBSyxlQUM3QixvRkFBSTtJQUFHLElBQUksRUFBQztFQUFHLEdBQUMsT0FBSyxDQUFJLENBQUssZUFDOUIsb0ZBQUk7SUFBRyxJQUFJLEVBQUM7RUFBRyxHQUFDLFNBQU8sQ0FBSSxDQUFLLENBQy9CLENBQ0gsQ0FDSixDQUNQO0FBQUEsQ0FDTjtBQUVELGlFQUFlRCxHQUFHOzs7Ozs7Ozs7Ozs7OztBQ2pCUTtBQUNvQjtBQUN0QjtBQUNRO0FBQ047QUFHMUIsSUFBTUcsR0FBRyxHQUFHLFNBQU5BLEdBQUc7RUFBQSxvQkFDTCx1SUFDSSwyREFBQyw0Q0FBRztJQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO0VBQUUsRUFBRSxlQUNyRCwyREFBQyxnREFBTztJQUFDLGNBQWMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPO0VBQUUsRUFBRSxDQUM5QztBQUFBLENBQ047QUFFRCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdMLDREQUFVLENBQUNFLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMsMkRBQUMsR0FBRyxPQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCcEI7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGlEQUFpRCw0QkFBNEIsaUNBQWlDLGdDQUFnQyxHQUFHLFlBQVksMEJBQTBCLGlDQUFpQyxnQ0FBZ0MsR0FBRyxnQkFBZ0IsZ0JBQWdCLGlCQUFpQixHQUFHLE9BQU8scU1BQXFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLGdDQUFnQyw0QkFBNEIsaUNBQWlDLGdDQUFnQyxHQUFHLFlBQVksMEJBQTBCLGlDQUFpQyxnQ0FBZ0MsR0FBRyxVQUFVLDRCQUE0QixpQ0FBaUMsZ0NBQWdDLEdBQUcsWUFBWSwwQkFBMEIsaUNBQWlDLGdDQUFnQyxHQUFHLGdCQUFnQixnQkFBZ0IsaUJBQWlCLEdBQUcsZUFBZSxnQkFBZ0IsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQy9wQztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNQdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Db250ZW50LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL05hdi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbnRlbnQgPSAoeyBjb250ZW50Q2xhc3NlcyB9KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y29udGVudENsYXNzZXNbMF19PkRpc2NvdmVyIHRoZSBHYWxheHk8L2gxPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjb250ZW50Q2xhc3Nlc1sxXX0+RnJvbSBFYXJ0aCB0byBNYXJzPC9oMj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTmF2ID0gKHsgbmF2Q2xhc3NlcyB9KSA9PiAoXG4gICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e25hdkNsYXNzZXNbMF19PlxuICAgICAgICAgICAgPGRpdj5MT0dPPC9kaXY+XG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Ub3VyczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vQ29udGVudFwiO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgICA8PlxuICAgICAgICA8TmF2IG5hdkNsYXNzZXM9e1tcImNvbnRhaW5lclwiLCBcImJcIiwgXCJjXCIsIFwiZFwiLCBcImVcIl19Lz5cbiAgICAgICAgPENvbnRlbnQgY29udGVudENsYXNzZXM9e1tcIm1haW5cIiwgXCJtYWluMlwiXX0vPlxuICAgIDwvPlxuKVxuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKTtcbmNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGNvbnRhaW5lcik7XG5yb290LnJlbmRlcig8QXBwIC8+KTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNSU7XFxuICB3aWR0aDogMTAwdnc7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2RldmVsb3BtZW50L3Njc3MvZWxlbWVudHMvX2NvbnRlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vZGV2ZWxvcG1lbnQvc2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL2RldmVsb3BtZW50L3Njc3MvZWxlbWVudHMvX25hdi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QUNWQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FEYUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWFpbjIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XCIsXCIubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tYWluMiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTUlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cIixcIi5jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNSU7XFxuICB3aWR0aDogMTAwdnc7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4NDYyYWVkM2NlNDhhNjYxMTNlYlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRlbnQiLCJjb250ZW50Q2xhc3NlcyIsIkNvbXBvbmVudCIsIk5hdiIsIm5hdkNsYXNzZXMiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9