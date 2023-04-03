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
  if (event.reset) {
    return {
      firsName: '',
      lastName: '',
      email: '',
      'visited': false
    };
  }
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
      setFormData({
        reset: true
      });
    }, 2500);
    /*        alert("One step closer to Mars")*/
  };

  var handleChange = function handleChange(event) {
    var isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sign up now"), sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstName",
    onChange: setFormData,
    value: formData.name || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "lastName",
    onChange: setFormData,
    value: formData.name || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    onChange: setFormData,
    value: formData.email || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Have you ever been to space?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "visited",
    onChange: handleChange,
    checked: formData['visited'] || false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "motivation",
    onChange: setFormData,
    value: formData.name || ''
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
/******/ 	__webpack_require__.h = () => ("21b93ecc163dc6061444")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkFDSSxzRUFBRywyQkFBeUIsQ0FBSSxlQUNoQztJQUFPLElBQUksRUFBQyxNQUFNO0lBQUMsSUFBSSxFQUFDLFlBQVk7SUFBQyxRQUFRLEVBQUVDLFdBQVk7SUFBQyxLQUFLLEVBQUVELFFBQVEsQ0FBQ0gsSUFBSSxJQUFJO0VBQUcsRUFBRSxDQUNyRixDQUNELGVBQ1g7SUFBUSxJQUFJLEVBQUM7RUFBUSxHQUFDLFNBQU8sQ0FBUyxDQUNuQyxDQUNMO0FBQ1YsQ0FBQztBQUVELGlFQUFlRSxJQUFJOzs7Ozs7OztVQzNFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGZvcm1SZWR1Y2VyID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnJlc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzTmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAndmlzaXRlZCc6IGZhbHNlLFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbZXZlbnQubmFtZV06IGV2ZW50LnZhbHVlXG4gICAgfVxufVxuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge30pO1xuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1YihmYWxzZSk7XG4gICAgICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDI1MDApO1xuLyogICAgICAgIGFsZXJ0KFwiT25lIHN0ZXAgY2xvc2VyIHRvIE1hcnNcIikqL1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgICAgICBzZXRGb3JtRGF0YSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBpc0NoZWNrYm94ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICA8aDM+U2lnbiB1cCBub3c8L2gzPlxuICAgICAgICB7c3ViICYmXG4gICAgICAgICAgICA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e3NldEZvcm1EYXRhfSB2YWx1ZT17Zm9ybURhdGEubmFtZSB8fCAnJ30vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJsYXN0TmFtZVwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0gdmFsdWU9e2Zvcm1EYXRhLm5hbWUgfHwgJyd9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0gdmFsdWU9e2Zvcm1EYXRhLmVtYWlsIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgYmVlbiB0byBzcGFjZT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidmlzaXRlZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNoZWNrZWQ9e2Zvcm1EYXRhWyd2aXNpdGVkJ10gfHwgZmFsc2V9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1vdGl2YXRpb25cIiBvbkNoYW5nZT17c2V0Rm9ybURhdGF9IHZhbHVlPXtmb3JtRGF0YS5uYW1lIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIxYjkzZWNjMTYzZGM2MDYxNDQ0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzTmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInN1YiIsInNldFN1YiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImhhbmRsZUNoYW5nZSIsImlzQ2hlY2tib3giLCJ0YXJnZXQiLCJ0eXBlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=