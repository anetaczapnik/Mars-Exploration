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
  return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.target.name, event.target.value));
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
/******/ 	__webpack_require__.h = () => ("c9ebdac1d63f91dc1f71")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xMjg4NDA0NzBmM2NlYTI5OGIwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUVuRCxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUVDLEtBQUssRUFBSztFQUNsQyx1Q0FDT0QsS0FBSywyQkFDUEMsS0FBSyxDQUFDQyxNQUFNLENBQUNDLElBQUksRUFBR0YsS0FBSyxDQUFDQyxNQUFNLENBQUNFLEtBQUs7QUFFL0MsQ0FBQztBQUVELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFJLEdBQVM7RUFDZixrQkFBZ0NSLGlEQUFVLENBQUNFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUFBO0lBQXBETyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsZ0JBQXNCVCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTlCVSxHQUFHO0lBQUVDLE1BQU07RUFFbEIsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBR1QsS0FBSyxFQUFJO0lBQzFCQSxLQUFLLENBQUNVLGNBQWMsRUFBRTtJQUN0QkYsTUFBTSxDQUFDLElBQUksQ0FBQztJQUVaRyxVQUFVLENBQUMsWUFBTTtNQUNiSCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFDaEI7RUFDSSxDQUFDOztFQUVELG9CQUFRO0lBQUssU0FBUyxFQUFDO0VBQWEsZ0JBQ2hDLHVFQUFJLGFBQVcsQ0FBSyxFQUNuQkQsR0FBRyxpQkFDQSx3RUFBSyxtQkFBaUIsQ0FBTSxlQUVoQztJQUFNLFFBQVEsRUFBRUU7RUFBYSxnQkFDekIsMEZBQ0ksdUZBQ0ksc0VBQUcsWUFBVSxDQUFJLGVBQ2pCO0lBQU8sSUFBSSxFQUFDLE1BQU07SUFBQyxRQUFRLEVBQUVIO0VBQVksRUFBRSxDQUN2QyxlQUNSLHVGQUNJLHNFQUFHLFdBQVMsQ0FBSSxlQUNoQjtJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsUUFBUSxFQUFFQTtFQUFZLEVBQUUsQ0FDdkMsZUFDUix1RkFDSSxzRUFBRyxlQUFhLENBQUksZUFDcEI7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFFBQVEsRUFBRUE7RUFBWSxFQUFFLENBQ3ZDLGVBQ1IsdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFDaEM7SUFBTyxJQUFJLEVBQUMsTUFBTTtJQUFDLFFBQVEsRUFBRUE7RUFBWSxFQUFFLENBQ3ZDLENBQ0QsZUFDWDtJQUFRLElBQUksRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFTLENBQ25DLENBQ0w7QUFDVixDQUFDO0FBRUQsaUVBQWVGLElBQUk7Ozs7Ozs7O1VDcERuQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZm9ybVJlZHVjZXIgPSAoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH1cbn1cblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVJlZHVjZXIoZm9ybVJlZHVjZXIsIHt9KTtcbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICB9LCAyNTAwKVxuLyogICAgICAgIGFsZXJ0KFwiT25lIHN0ZXAgY2xvc2VyIHRvIE1hcnNcIikqL1xuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICA8aDM+U2lnbiB1cCBub3c8L2gzPlxuICAgICAgICB7c3ViICYmXG4gICAgICAgICAgICA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17c2V0Rm9ybURhdGF9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17c2V0Rm9ybURhdGF9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e3NldEZvcm1EYXRhfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjOWViZGFjMWQ2M2Y5MWRjMWY3MVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsImZvcm1SZWR1Y2VyIiwic3RhdGUiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3ViIiwic2V0U3ViIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==