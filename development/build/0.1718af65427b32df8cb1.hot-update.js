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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:3005/users").then(function (r) {
      return r.json();
    }).then(function (rr) {
      return console.log(rr[0].name);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca43aea3b00082b56b36")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNzE4YWY2NTQyN2IzMmRmOGNiMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUM5RCxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBSyxHQUFTO0VBRWhCLGdCQUFXRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0VBRXZCQyxnREFBUyxDQUFDLFlBQUs7SUFFWEUsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQy9CQyxJQUFJLENBQUMsVUFBQUMsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNuQkYsSUFBSSxDQUFDLFVBQUFHLEVBQUU7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDRyxJQUFJLENBQUM7SUFBQSxFQUFDLFNBQzlCLENBQUMsVUFBQUMsR0FBRztNQUFBLE9BQUlILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3ZDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSSx1SUFFSSxzRUFFSyxDQUNOO0FBRVgsQ0FBQztBQUNELGlFQUFlVCxLQUFLOzs7Ozs7OztVQ3RCcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl80Xy1fUHJhY2FfZG9tb3dhLzAxX1phZGFuaWUvanMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBVc2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG5cbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcnNcIilcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyciA9PiBjb25zb2xlLmxvZyhyclswXS5uYW1lKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPD5cblxuICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYTQzYWVhM2IwMDA4MmI1NmIzNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVXNlcnMiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsInJyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9