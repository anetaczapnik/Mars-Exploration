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
      return console.log(rr[0]);
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
/******/ 	__webpack_require__.h = () => ("1718af65427b32df8cb1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMzllODViOTE2MDU0OWU3NDM3Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE4RDtBQUM5RCxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBSyxHQUFTO0VBRWhCLGdCQUFXRiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0VBRXZCQyxnREFBUyxDQUFDLFlBQUs7SUFFWEUsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQy9CQyxJQUFJLENBQUMsVUFBQUMsQ0FBQztNQUFBLE9BQUlBLENBQUMsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNuQkYsSUFBSSxDQUFDLFVBQUFHLEVBQUU7TUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUEsRUFBQyxTQUN6QixDQUFDLFVBQUFHLEdBQUc7TUFBQSxPQUFJRixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO0lBQUEsRUFBQztFQUN2QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0ksdUlBRUksc0VBRUssQ0FDTjtBQUVYLENBQUM7QUFDRCxpRUFBZVIsS0FBSzs7Ozs7Ozs7VUN0QnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDhfRHppZW5fNF8tX1ByYWNhX2RvbW93YS8wMV9aYWRhbmllL2pzL1VzZXJzLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+e1xuXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJzXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocnIgPT4gY29uc29sZS5sb2cocnJbMF0pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8dWw+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3MThhZjY1NDI3YjMyZGY4Y2IxXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VycyIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicnIiLCJjb25zb2xlIiwibG9nIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==