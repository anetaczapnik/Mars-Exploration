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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Motivation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Motivation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, tab.map(function (el, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: ind
    }, el.firstName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, tab.map(function (el, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: ind
    }, el.lastName);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, tab.map(function (el, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: ind
    }, el.email);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, tab.map(function (el, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: ind
    }, el.motivation);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("7d45f6c3307e69f59e40")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xNDYwYWFmNTZlZGI3YzAxYWVjYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYTtBQUVoRSxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBSSxDQUFLQyxLQUFLLEVBQU07RUFDdEIsZ0JBQXNCSiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBO0lBQTNCSyxHQUFHO0lBQUVDLE1BQU07RUFFbEJMLGdEQUFTLENBQUMsWUFBTTtJQUNaTSxLQUFLLG9DQUFvQyxDQUNwQ0MsSUFBSSxDQUFDLFVBQUFDLFFBQVE7TUFBQSxPQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtJQUFBLEVBQUMsQ0FDakNGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztNQUNqQkwsTUFBTSxDQUFDSyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFBRyxLQUFLLEVBQUk7TUFDWkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUssQ0FBQztJQUN0QixDQUFDLENBQUM7RUFDVixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ3hCLHFGQUNJLHVFQUFJLFlBQVUsQ0FBSyxlQUNuQjtJQUFPLFNBQVMsRUFBQztFQUFZLGdCQUN6QixvRkFDSSx1RUFBSSxZQUFVLENBQUssZUFDbkIsdUVBQUksV0FBUyxDQUFLLGVBQ2xCLHVFQUFJLE9BQUssQ0FBSyxlQUNkLHVFQUFJLFlBQVUsQ0FBSyxDQUNsQixlQUNMLG9GQUNJLHVFQUFJLFlBQVUsQ0FBSyxlQUNuQix1RUFBSSxXQUFTLENBQUssZUFDbEIsdUVBQUksT0FBSyxDQUFLLGVBQ2QsdUVBQUksWUFBVSxDQUFLLENBQ2xCLGVBQ0wsd0VBQ0tULEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO0lBQ2xCLG9CQUFPO01BQUcsR0FBRyxFQUFFQTtJQUFJLEdBQUVELEVBQUUsQ0FBQ0UsU0FBUyxDQUFLO0VBQzFDLENBQUMsQ0FBQyxDQUNBLGVBQ04sd0VBQ0tiLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO0lBQ2xCLG9CQUFPO01BQUcsR0FBRyxFQUFFQTtJQUFJLEdBQUVELEVBQUUsQ0FBQ0csUUFBUSxDQUFLO0VBQ3pDLENBQUMsQ0FBQyxDQUNBLGVBQ04sd0VBQ0tkLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO0lBQ2xCLG9CQUFPO01BQUcsR0FBRyxFQUFFQTtJQUFJLEdBQUVELEVBQUUsQ0FBQ0ksS0FBSyxDQUFLO0VBQ3RDLENBQUMsQ0FBQyxDQUNBLGVBQ04sd0VBQ0tmLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDLFVBQUNDLEVBQUUsRUFBRUMsR0FBRyxFQUFLO0lBQ2xCLG9CQUFPO01BQUcsR0FBRyxFQUFFQTtJQUFJLEdBQUVELEVBQUUsQ0FBQ0ssVUFBVSxDQUFLO0VBQzNDLENBQUMsQ0FBQyxDQUNBLENBQ0YsZUFDUiwyREFBQyx3RUFBZ0I7SUFBQyxTQUFTLEVBQUMsT0FBTztJQUFDLFFBQVEsRUFBQyxPQUFPO0lBQUMsT0FBTyxFQUFFakIsS0FBSyxDQUFDa0I7RUFBWSxFQUFFLENBQ2hGLENBQ0osQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZW5CLElBQUk7Ozs7Ozs7O1VDaEVuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL1RvdXIuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcblxuY29uc3QgVG91ciA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDUvY2FuZGlkYXRlc2ApXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICBzZXRUYWIoZGF0YSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5DYW5kaWRhdGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImNhbmRpZGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Rmlyc3QgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkxhc3QgbmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TW90aXZhdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GaXJzdCBuYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TGFzdCBuYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1haWw8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nb3RpdmF0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIubWFwKChlbCwgaW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZH0+e2VsLmZpcnN0TmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5tYXAoKGVsLCBpbmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kfT57ZWwubGFzdE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIubWFwKChlbCwgaW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZH0+e2VsLmVtYWlsfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFiLm1hcCgoZWwsIGluZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHAga2V5PXtpbmR9PntlbC5tb3RpdmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvdXI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Q0NWY2YzMzMDdlNjlmNTllNDBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkNsb3NlUm91bmRlZEljb24iLCJUb3VyIiwicHJvcHMiLCJ0YWIiLCJzZXRUYWIiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWFwIiwiZWwiLCJpbmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==