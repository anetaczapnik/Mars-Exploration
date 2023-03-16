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
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Users = function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  // const [users, setUsers] = useState([]);

  var handleAdd = function handleAdd(dat) {
    fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dat)
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      return setData(function (prev) {
        return [].concat(_toConsumableArray(prev), [data]);
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:3005/users").then(function (r) {
      return r.json();
    }).then(function (rr) {
      return setData(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(rr));
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
    add: handleAdd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, data.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, el.id, " ", el.name, " ", el.surname, " ", el.age, " ", el.city, " ", el.gender);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c2862edd966d3591c78d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNmFmODNjNzcxMGQ2ODQyZmU1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlCO0FBQ2hDLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFLLEdBQVM7RUFDaEIsZ0JBQXdCSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTdCSSxJQUFJO0lBQUVDLE9BQU87RUFDckI7O0VBRUMsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVMsQ0FBSUMsR0FBRyxFQUFLO0lBQ3ZCQyxLQUFLLENBQUMsNkJBQTZCLEVBQUU7TUFDakNDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRTtNQUNwQixDQUFDO01BQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNOLEdBQUc7SUFDNUIsQ0FBQyxDQUFDLENBQ0dPLElBQUksQ0FBQyxVQUFBQyxDQUFDO01BQUEsT0FBSUEsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7SUFBQSxFQUFDLENBQ25CRixJQUFJLENBQUMsVUFBQVYsSUFBSTtNQUFBLE9BQUlDLE9BQU8sQ0FBQyxVQUFBWSxJQUFJO1FBQUEsb0NBQVFBLElBQUksSUFBRWIsSUFBSTtNQUFBLENBQUMsQ0FBQztJQUFBLEVBQUMsU0FDekMsQ0FBQyxVQUFBYyxHQUFHO01BQUEsT0FBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEdBQUcsQ0FBQztJQUFBLEVBQUM7RUFDdkMsQ0FBQztFQUVEakIsZ0RBQVMsQ0FBQyxZQUFLO0lBQ1hPLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUMvQk0sSUFBSSxDQUFDLFVBQUFDLENBQUM7TUFBQSxPQUFJQSxDQUFDLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDbEJGLElBQUksQ0FBQyxVQUFBTyxFQUFFO01BQUEsT0FBSWhCLE9BQU8sQ0FBQyxVQUFBWSxJQUFJO1FBQUEsb0NBQVFBLElBQUksc0JBQUtJLEVBQUU7TUFBQSxDQUFDLENBQUM7SUFBQSxFQUFDLFNBQ3pDLENBQUMsVUFBQUgsR0FBRztNQUFBLE9BQUlDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUM7SUFBQSxFQUFDO0VBQ3ZDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixvQkFDSSx1SUFDSSwyREFBQyxnREFBTztJQUFDLEdBQUcsRUFBRVo7RUFBVSxFQUFXLGVBQ25DLHVFQUNLRixJQUFJLENBQUNrQixHQUFHLENBQUMsVUFBQUMsRUFBRTtJQUFBLG9CQUFJLHVFQUNYQSxFQUFFLENBQUNDLEVBQUUsRUFBQyxHQUFDLEVBQUNELEVBQUUsQ0FBQ0UsSUFBSSxFQUFDLEdBQUMsRUFBQ0YsRUFBRSxDQUFDRyxPQUFPLEVBQUMsR0FBQyxFQUFDSCxFQUFFLENBQUNJLEdBQUcsRUFBQyxHQUFDLEVBQUNKLEVBQUUsQ0FBQ0ssSUFBSSxFQUFDLEdBQUMsRUFBQ0wsRUFBRSxDQUFDTSxNQUFNLENBQzNEO0VBQUEsRUFBQyxDQUNMLENBQ047QUFFWCxDQUFDO0FBQ0QsaUVBQWUxQixLQUFLOzs7Ozs7OztVQ3BDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl80Xy1fUHJhY2FfZG9tb3dhLzAxX1phZGFuaWUvanMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWRkVXNlciBmcm9tIFwiLi9BZGRVc2VyXCI7XG5jb25zdCBVc2VycyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAvLyBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZUFkZCA9IChkYXQpID0+IHtcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcnNcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdClcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldERhdGEocHJldiA9PiBbLi4ucHJldiwgZGF0YV0pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PntcbiAgICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDUvdXNlcnNcIilcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAgLnRoZW4ocnIgPT4gc2V0RGF0YShwcmV2ID0+IFsuLi5wcmV2LCAuLi5ycl0pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH0sIFtdKVxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBZGRVc2VyIGFkZD17aGFuZGxlQWRkfT48L0FkZFVzZXI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKGVsID0+IDxsaT5cbiAgICAgICAgICAgICAgICAgICAge2VsLmlkfSB7ZWwubmFtZX0ge2VsLnN1cm5hbWV9IHtlbC5hZ2V9IHtlbC5jaXR5fSB7ZWwuZ2VuZGVyfVxuICAgICAgICAgICAgICAgIDwvbGk+KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFVzZXJzOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMyODYyZWRkOTY2ZDM1OTFjNzhkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBZGRVc2VyIiwiVXNlcnMiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUFkZCIsImRhdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJqc29uIiwicHJldiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyciIsIm1hcCIsImVsIiwiaWQiLCJuYW1lIiwic3VybmFtZSIsImFnZSIsImNpdHkiLCJnZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9