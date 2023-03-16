"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Users = function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:3005/users").then(function (r) {
      return r.json();
    }).then(function (rr) {
      return setData(rr[0]);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, data)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aad57f6fc552822e08a7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMTE0MzU0Mzk2ODcwZTBjMTJlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUM5RCxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBSyxHQUFTO0VBRWhCLGdCQUF3QkYsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBO0lBQTdCRyxJQUFJO0lBQUVDLE9BQU87RUFFcEJILGdEQUFTLENBQUMsWUFBSztJQUVYSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FDL0JDLElBQUksQ0FBQyxVQUFBQyxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ25CRixJQUFJLENBQUMsVUFBQUcsRUFBRTtNQUFBLE9BQUlMLE9BQU8sQ0FBQ0ssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsRUFBQyxTQUNyQixDQUFDLFVBQUFDLEdBQUc7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0ksdUlBRUksb0ZBRUksdUVBQUtQLElBQUksQ0FBTSxDQUNkLENBQ047QUFFWCxDQUFDO0FBQ0QsaUVBQWVELEtBQUs7Ozs7Ozs7O1VDdkJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA4X0R6aWVuXzRfLV9QcmFjYV9kb21vd2EvMDFfWmFkYW5pZS9qcy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFVzZXJzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJzXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocnIgPT4gc2V0RGF0YShyclswXSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDx1bD5cblxuICAgICAgICAgICAgICAgIDxsaT57ZGF0YX08L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWFkNTdmNmZjNTUyODIyZTA4YTdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVzZXJzIiwiZGF0YSIsInNldERhdGEiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsInJyIiwiZXJyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=