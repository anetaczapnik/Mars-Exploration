"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var formReducer = function formReducer(state, event) {
  return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.name, event.value));
};
var Form = function Form() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formReducer, {}),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    formData = _useReducer2[0],
    setFormData = _useReducer2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sub = _useState2[0],
    setSub = _useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setTimeout(function () {
      setSub(false);
    }, 2500);
    /*        alert("One step closer to Mars")*/
  };

  var handleChange = function handleChange(event) {
    setFormData({
      name: event.target.name,
      value: event.target.value
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sign up now"), sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    onChange: setFormData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    onChange: setFormData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    onChange: setFormData
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Have you ever been to space?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "AAAAAAAA",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    name: "name",
    onChange: setFormData
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Sign up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("64bff5aaf82c50889d09")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45NWFlMWI1NDIxYzAzNmJhMTM3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUVDLEtBQUssRUFBSztFQUNsQyx1Q0FDT0QsS0FBSywyQkFDUEMsS0FBSyxDQUFDQyxJQUFJLEVBQUdELEtBQUssQ0FBQ0UsS0FBSztBQUVqQyxDQUFDO0FBRUQsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQUksR0FBUztFQUNmLGtCQUFnQ1AsaURBQVUsQ0FBQ0UsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQUE7SUFBcERNLFFBQVE7SUFBRUMsV0FBVztFQUM1QixnQkFBc0JSLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBOUJTLEdBQUc7SUFBRUMsTUFBTTtFQUVsQixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFHUixLQUFLLEVBQUk7SUFDMUJBLEtBQUssQ0FBQ1MsY0FBYyxFQUFFO0lBQ3RCRixNQUFNLENBQUMsSUFBSSxDQUFDO0lBRVpHLFVBQVUsQ0FBQyxZQUFNO01BQ2JILE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNoQjtFQUNJLENBQUM7O0VBRUQsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBR1gsS0FBSyxFQUFJO0lBQzFCSyxXQUFXLENBQUM7TUFDUkosSUFBSSxFQUFFRCxLQUFLLENBQUNZLE1BQU0sQ0FBQ1gsSUFBSTtNQUN2QkMsS0FBSyxFQUFFRixLQUFLLENBQUNZLE1BQU0sQ0FBQ1Y7SUFDeEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUFRO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ2hDLHVFQUFJLGFBQVcsQ0FBSyxFQUNuQkksR0FBRyxpQkFDQSx3RUFBSyxtQkFBaUIsQ0FBTSxlQUVoQztJQUFNLFFBQVEsRUFBRUU7RUFBYSxnQkFDekIsMEZBQ0ksdUZBQ0ksc0VBQUcsWUFBVSxDQUFJLGVBQ2pCO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxRQUFRLEVBQUVIO0VBQVksRUFBRSxDQUN2QyxlQUNSLHVGQUNJLHNFQUFHLFdBQVMsQ0FBSSxlQUNoQjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsUUFBUSxFQUFFQTtFQUFZLEVBQUUsQ0FDdkMsZUFDUix1RkFDSSxzRUFBRyxlQUFhLENBQUksZUFDcEI7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFFBQVEsRUFBRUE7RUFBWSxFQUFFLENBQ3ZDLGVBQ1IsdUZBQ0ksc0VBQUcsOEJBQTRCLENBQUksZUFDbkM7SUFBTyxJQUFJLEVBQUMsVUFBVTtJQUFDLElBQUksRUFBQyxVQUFVO0lBQUMsUUFBUSxFQUFFTTtFQUFhLEVBQUcsQ0FDN0QsZUFDUix1RkFDSSxzRUFBRywyQkFBeUIsQ0FBSSxlQUNoQztJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsUUFBUSxFQUFFTjtFQUFZLEVBQUUsQ0FDdkMsQ0FDRCxlQUNYO0lBQVEsSUFBSSxFQUFDO0VBQVEsR0FBQyxTQUFPLENBQVMsQ0FDbkMsQ0FDTDtBQUNWLENBQUM7QUFFRCxpRUFBZUYsSUFBSTs7Ozs7Ozs7VUMvRG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZVxuICAgIH1cbn1cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVJlZHVjZXIoZm9ybVJlZHVjZXIsIHt9KTtcbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICB9LCAyNTAwKVxuLyogICAgICAgIGFsZXJ0KFwiT25lIHN0ZXAgY2xvc2VyIHRvIE1hcnNcIikqL1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgPGgzPlNpZ24gdXAgbm93PC9oMz5cbiAgICAgICAge3N1YiAmJlxuICAgICAgICAgICAgPGRpdj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3NldEZvcm1EYXRhfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3NldEZvcm1EYXRhfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5IYXZlIHlvdSBldmVyIGJlZW4gdG8gc3BhY2U/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIkFBQUFBQUFBXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3NldEZvcm1EYXRhfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY0YmZmNWFhZjgyYzUwODg5ZDA5XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwibmFtZSIsInZhbHVlIiwiRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJzdWIiLCJzZXRTdWIiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9