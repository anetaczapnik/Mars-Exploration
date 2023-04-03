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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(187);
/* harmony import */ var _Tour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(186);
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
    to: "/",
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink navLink1"
  }, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    onClick: toggleTour,
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Tour"))), isTourOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Tour__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleClose: toggleTour
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    to: "/contact",
    style: {
      textDecoration: 'none'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navLink"
  }, "Contact"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up for a Tour"), isFormOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bd62f46d0c738a63860")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iMWI1YWFiNjljN2QyMzRkODdjYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNBO0FBUUE7QUFDRDtBQUV6QixJQUFNVSxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2QsZ0JBQW9DVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTVDVSxVQUFVO0lBQUVDLGFBQWE7RUFDaEMsaUJBQW9DWCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTVDWSxVQUFVO0lBQUVDLGFBQWE7RUFFaEMsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkgsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztFQUM5QixDQUFDO0VBRUQsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkYsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztFQUM5QixDQUFDO0VBRUQsb0JBQ0ksdUlBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEI7SUFBSyxTQUFTLEVBQUM7RUFBTSxHQUFDLE1BQUksQ0FBTSxlQUNoQyxxRkFDSTtJQUFJLFNBQVMsRUFBQztFQUFLLGdCQUNmLG9GQUFJLDJEQUFDLHFEQUFPO0lBQUMsRUFBRSxFQUFFLEdBQUk7SUFBQyxLQUFLLEVBQUU7TUFBRUksY0FBYyxFQUFFO0lBQU87RUFBRSxHQUFDLEdBQUM7SUFBSyxTQUFTLEVBQUM7RUFBa0IsR0FBQyxNQUFJLENBQU0sQ0FBVSxDQUFLLGVBQ3JILG9GQUFJLDJEQUFDLHFEQUFPO0lBQUMsT0FBTyxFQUFFRCxVQUFXO0lBQUMsS0FBSyxFQUFFO01BQUVDLGNBQWMsRUFBRTtJQUFPO0VBQUUsR0FBQyxHQUFDO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FBQyxNQUFJLENBQU0sQ0FBVSxDQUFLLEVBQ3ZISixVQUFVLGlCQUFJLDJEQUFDLDZDQUFJO0lBQUMsV0FBVyxFQUFFRztFQUFXLEVBQUcsZUFDaEQsb0ZBQUksMkRBQUMscURBQU87SUFBQyxFQUFFLEVBQUUsVUFBVztJQUFDLEtBQUssRUFBRTtNQUFFQyxjQUFjLEVBQUU7SUFBTztFQUFFLEdBQUMsR0FBQztJQUFLLFNBQVMsRUFBQztFQUFTLEdBQUMsU0FBTyxDQUFNLENBQVUsQ0FBSyxDQUNySCxDQUNILGVBQ04scUZBQ0k7SUFBUSxTQUFTLEVBQUMsU0FBUztJQUFDLE9BQU8sRUFBRUY7RUFBVyxnQkFBQyx5RUFBTSxRQUFRLENBQU8sc0JBQWtCLENBQVMsRUFDaEdKLFVBQVUsaUJBQUksMkRBQUMsNkNBQUk7SUFBQyxXQUFXLEVBQUVJO0VBQVcsRUFBRyxDQUM5QyxDQUNKLENBQ1A7QUFFWCxDQUFDO0FBRUQsaUVBQWVMLEdBQUc7Ozs7Ozs7O1VDOUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL05hdi5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xuaW1wb3J0IHtcbiAgICBIYXNoUm91dGVyLFxuICAgIFJvdXRlLFxuICAgIFJvdXRlcyxcbiAgICBMaW5rLFxuICAgIE5hdkxpbmssXG4gICAgT3V0bGV0XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFRvdXIgZnJvbSBcIi4vVG91clwiXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbaXNGb3JtT3Blbiwgc2V0SXNGb3JtT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzVG91ck9wZW4sIHNldElzVG91ck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNGb3JtT3BlbighaXNGb3JtT3Blbik7XG4gICAgfVxuXG4gICAgY29uc3QgdG9nZ2xlVG91ciA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNUb3VyT3BlbighaXNUb3VyT3Blbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2V3JhcHBpbmdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5OQVNBPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIHRvPXtcIi9cIn0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246ICdub25lJyB9fT4gPGRpdiBjbGFzc05hbWU9XCJuYXZMaW5rIG5hdkxpbmsxXCI+SG9tZTwvZGl2PjwvTmF2TGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxOYXZMaW5rIG9uQ2xpY2s9e3RvZ2dsZVRvdXJ9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+IDxkaXYgY2xhc3NOYW1lPVwibmF2TGlua1wiPlRvdXI8L2Rpdj48L05hdkxpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc1RvdXJPcGVuICYmIDxUb3VyIGhhbmRsZUNsb3NlPXt0b2dnbGVUb3VyfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48TmF2TGluayB0bz17XCIvY29udGFjdFwifSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PiA8ZGl2IGNsYXNzTmFtZT1cIm5hdkxpbmtcIj5Db250YWN0PC9kaXY+PC9OYXZMaW5rPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJqb3VybmV5XCIgb25DbGljaz17dG9nZ2xlRm9ybX0+PHNwYW4+JiMxMDIzMDs8L3NwYW4+U2lnbiB1cCBmb3IgYSBUb3VyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtpc0Zvcm1PcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfSAvPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YmQ2MmY0NmQwYzczOGE2Mzg2MFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRm9ybSIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIkxpbmsiLCJOYXZMaW5rIiwiT3V0bGV0IiwiVG91ciIsIk5hdiIsImlzRm9ybU9wZW4iLCJzZXRJc0Zvcm1PcGVuIiwiaXNUb3VyT3BlbiIsInNldElzVG91ck9wZW4iLCJ0b2dnbGVGb3JtIiwidG9nZ2xlVG91ciIsInRleHREZWNvcmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==