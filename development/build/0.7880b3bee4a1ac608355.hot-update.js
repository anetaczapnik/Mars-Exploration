"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  var toggleTour = function toggleTour() {
    setIsOpen(!isOpen);
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
  }, "Tour"))), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tour__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: toggleTour
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/contact"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("f916e48cdff7cd6d759d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43ODgwYjNiZWU0YTFhYzYwODM1NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNBO0FBUUE7QUFDRDtBQUV6QixJQUFNVSxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2QsZ0JBQTRCVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQXBDVSxNQUFNO0lBQUVDLFNBQVM7RUFFeEIsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkQsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztFQUN0QixDQUFDO0VBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkYsU0FBUyxDQUFDLENBQUNELE1BQU0sQ0FBQztFQUN0QixDQUFDO0VBRUQsb0JBQ0ksdUlBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxHQUFDLE1BQUksQ0FBTSxlQUNoQyxxRkFDSTtJQUFJLFNBQVMsRUFBQztFQUFLLGdCQUNmLG9GQUFJLDJEQUFDLHFEQUFPO0lBQUMsRUFBRSxFQUFFO0VBQUksR0FBQyxHQUFDO0lBQUssU0FBUyxFQUFDO0VBQWtCLEdBQUMsTUFBSSxDQUFNLENBQVUsQ0FBSyxlQUNsRixvRkFBSTtJQUFRLE9BQU8sRUFBRUc7RUFBVyxHQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUM7RUFBUyxHQUFDLE1BQUksQ0FBTSxDQUFTLENBQUssRUFDbEZILE1BQU0saUJBQUksMkRBQUMsNkNBQUk7SUFBQyxXQUFXLEVBQUVHO0VBQVcsRUFBRyxlQUM1QyxvRkFBSSwyREFBQyxxREFBTztJQUFDLEVBQUUsRUFBRTtFQUFXLEdBQUMsR0FBQztJQUFLLFNBQVMsRUFBQztFQUFTLEdBQUMsU0FBTyxDQUFNLENBQVUsQ0FBSyxDQUNsRixDQUNILGVBQ04scUZBQ0k7SUFBUSxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRUQ7RUFBVyxnQkFBQyx5RUFBTSxRQUFRLENBQU8saUJBQWEsQ0FBUyxFQUMzRkYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUU7RUFBVyxFQUFHLENBQzFDLENBQ0osQ0FDUDtBQUVYLENBQUM7QUFFRCxpRUFBZUgsR0FBRzs7Ozs7Ozs7Ozs7Ozs7QUM3Q3NCO0FBQ3dCO0FBRWhFLElBQU1ELElBQUksR0FBRyxTQUFQQSxJQUFJLENBQUtPLEtBQUssRUFBTTtFQUV0QkMsS0FBSyxvQ0FBb0MsQ0FDcENDLElBQUksQ0FBQyxVQUFBQyxRQUFRO0lBQUEsT0FBSUEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7RUFBQSxFQUFDLENBQ2pDRixJQUFJLENBQUMsVUFBQUcsSUFBSSxFQUFJO0lBQ1ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7RUFDckIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBRyxLQUFLLEVBQUk7SUFDWkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztFQUN0QixDQUFDLENBQUM7RUFHTixvQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFnQixnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIscUZBQ0ksMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRVIsS0FBSyxDQUFDUztFQUFZLEVBQUUsQ0FDaEYsQ0FDSixDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlaEIsSUFBSTs7Ozs7Ozs7VUMxQm5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvTmF2LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL1RvdXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcbmltcG9ydCB7XG4gICAgSGFzaFJvdXRlcixcbiAgICBSb3V0ZSxcbiAgICBSb3V0ZXMsXG4gICAgTGluayxcbiAgICBOYXZMaW5rLFxuICAgIE91dGxldFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBUb3VyIGZyb20gXCIuL1RvdXJcIlxuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVUb3VyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2V3JhcHBpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5OQVNBPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9cIn0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGluayBuYXZMaW5rMVwiPkhvbWU8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVRvdXJ9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5Ub3VyPC9kaXY+PC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPFRvdXIgaGFuZGxlQ2xvc2U9e3RvZ2dsZVRvdXJ9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9jb250YWN0XCJ9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5Db250YWN0PC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqb3VybmV5XCIgb25DbGljaz17dG9nZ2xlRm9ybX0+PHNwYW4+JiMxMDIzMDs8L3NwYW4+U2lnbiB1cCBUT0RBWTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xvc2VSb3VuZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlUm91bmRlZCc7XG5cbmNvbnN0IFRvdXIgPSAoIHByb3BzICkgPT4ge1xuXG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYW5kaWRhdGVzYClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZVJvdW5kZWRJY29uIGNsYXNzTmFtZT1cImNsb3NlXCIgZm9udFNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG91cjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmOTE2ZTQ4Y2RmZjdjZDZkNzU5ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiVG91ciIsIk5hdiIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJ0b2dnbGVUb3VyIiwiQ2xvc2VSb3VuZGVkSWNvbiIsInByb3BzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==