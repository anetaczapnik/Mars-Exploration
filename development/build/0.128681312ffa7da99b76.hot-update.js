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
  }, "Tour"))), isTourOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tour__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Tour = function Tour(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    tab = _useState2[0],
    setTab = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:3005/candidates").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      setTab(data);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formBackground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Candidates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "candidates"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Motivation")), tab.map(function (el, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: ind
    }, el.firstName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: ind
    }, el.lastName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: ind
    }, el.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      key: ind
    }, el.motivation));
  }), ")} /*", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "Motivation"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("6cdeafe2e8c2c3e337dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxVQUFDQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztJQUNsQixvQkFDSSxvRkFDQTtNQUFJLEdBQUcsRUFBRUE7SUFBSSxHQUFFRCxFQUFFLENBQUNFLFNBQVMsQ0FBTSxlQUNqQztNQUFJLEdBQUcsRUFBRUQ7SUFBSSxHQUFFRCxFQUFFLENBQUNHLFFBQVEsQ0FBTSxlQUNoQztNQUFJLEdBQUcsRUFBRUY7SUFBSSxHQUFFRCxFQUFFLENBQUNJLEtBQUssQ0FBTSxlQUM3QjtNQUFJLEdBQUcsRUFBRUg7SUFBSSxHQUFFRCxFQUFFLENBQUNLLFVBQVUsQ0FBTSxDQUNqQztFQUNULENBQUMsQ0FBQyxFQUFDLE9BRUQsbUdBQ0UsdUVBQUksWUFBVSxDQUFLLGVBQ25CLHVFQUFJLFdBQVMsQ0FBSyxlQUNsQix1RUFBSSxPQUFLLENBQUssZUFDZCx1RUFBSSxZQUFVLENBQUssQ0FDbEIsQ0FzQkQsZUFDUiwyREFBQyx3RUFBZ0I7SUFBQyxTQUFTLEVBQUMsT0FBTztJQUFDLFFBQVEsRUFBQyxPQUFPO0lBQUMsT0FBTyxFQUFFakIsS0FBSyxDQUFDa0I7RUFBWSxFQUFFLENBQ2hGLENBQ0osQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZTVCLElBQUk7Ozs7Ozs7O1VDNUVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL05hdi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Ub3VyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzLFxuICAgIExpbmssXG4gICAgTmF2TGluayxcbiAgICBPdXRsZXRcbn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVG91ciBmcm9tIFwiLi9Ub3VyXCJcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc0Zvcm1PcGVuLCBzZXRJc0Zvcm1PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNUb3VyT3Blbiwgc2V0SXNUb3VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc0Zvcm1PcGVuKCFpc0Zvcm1PcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGVUb3VyID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RvdXJPcGVuKCFpc1RvdXJPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZXcmFwcGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPk5BU0E8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PE5hdkxpbmsgdG89e1wiL1wifT4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rIG5hdkxpbmsxXCI+SG9tZTwvZGl2PjwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17dG9nZ2xlVG91cn0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPlRvdXI8L2Rpdj48L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzVG91ck9wZW4gJiYgPFRvdXIgaGFuZGxlQ2xvc2U9e3RvZ2dsZVRvdXJ9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9jb250YWN0XCJ9PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5Db250YWN0PC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqb3VybmV5XCIgb25DbGljaz17dG9nZ2xlRm9ybX0+PHNwYW4+JiMxMDIzMDs8L3NwYW4+U2lnbiB1cCBUT0RBWTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7aXNGb3JtT3BlbiAmJiA8Rm9ybSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xvc2VSb3VuZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlUm91bmRlZCc7XG5cbmNvbnN0IFRvdXIgPSAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA1L2NhbmRpZGF0ZXNgKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0VGFiKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICA8aDM+Q2FuZGlkYXRlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJjYW5kaWRhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZpcnN0IG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5MYXN0IG5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5FbWFpbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk1vdGl2YXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5tYXAoKGVsLCBpbmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZH0+e2VsLmZpcnN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpbmR9PntlbC5sYXN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpbmR9PntlbC5lbWFpbH08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQga2V5PXtpbmR9PntlbC5tb3RpdmF0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX0pfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKjx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+Rmlyc3QgbmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkxhc3QgbmFtZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVtYWlsPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TW90aXZhdGlvbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIHt0YWIubWFwKChlbCwgaW5kKSA9PiB7Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIHJldHVybiA8cCBrZXk9e2luZH0+e2VsLmZpcnN0TmFtZX08L3A+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgfSl9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2Rpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAge3RhYi5tYXAoKGVsLCBpbmQpID0+IHsqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kfT57ZWwubGFzdE5hbWV9PC9wPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIH0pfSovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIHt0YWIubWFwKChlbCwgaW5kKSA9PiB7Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIHJldHVybiA8cCBrZXk9e2luZH0+e2VsLmVtYWlsfTwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICB9KX0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICB7dGFiLm1hcCgoZWwsIGluZCkgPT4geyovfVxuICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICByZXR1cm4gPHAga2V5PXtpbmR9PntlbC5tb3RpdmF0aW9ufTwvcD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICB9KX0qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvdXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmNkZWFmZTJlOGMyYzNlMzM3ZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZvcm0iLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIlRvdXIiLCJOYXYiLCJpc0Zvcm1PcGVuIiwic2V0SXNGb3JtT3BlbiIsImlzVG91ck9wZW4iLCJzZXRJc1RvdXJPcGVuIiwidG9nZ2xlRm9ybSIsInRvZ2dsZVRvdXIiLCJ1c2VFZmZlY3QiLCJDbG9zZVJvdW5kZWRJY29uIiwicHJvcHMiLCJ0YWIiLCJzZXRUYWIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWFwIiwiZWwiLCJpbmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==