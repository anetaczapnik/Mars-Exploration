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
      firs: '',
      count: 0,
      name: '',
      'gift-wrap': false
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
    name: "Yes",
    onChange: handleChange,
    checked: formData['yes'] || false
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
/******/ 	__webpack_require__.h = () => ("4ba26f03bce99675c69a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUMsSUFBSSxFQUFDLFlBQVk7SUFBQyxRQUFRLEVBQUVDLFdBQVk7SUFBQyxLQUFLLEVBQUVELFFBQVEsQ0FBQ0gsSUFBSSxJQUFJO0VBQUcsRUFBRSxDQUNyRixDQUNELGVBQ1g7SUFBUSxJQUFJLEVBQUM7RUFBUSxHQUFDLFNBQU8sQ0FBUyxDQUNuQyxDQUNMO0FBQ1YsQ0FBQztBQUVELGlFQUFlRSxJQUFJOzs7Ozs7OztVQ3hFbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGZvcm1SZWR1Y2VyID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGlmKGV2ZW50LnJlc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzOiAnJyxcbiAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAnZ2lmdC13cmFwJzogZmFsc2UsXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC5uYW1lXTogZXZlbnQudmFsdWVcbiAgICB9XG59XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VSZWR1Y2VyKGZvcm1SZWR1Y2VyLCB7fSk7XG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgfSwgMjUwMClcbi8qICAgICAgICBhbGVydChcIk9uZSBzdGVwIGNsb3NlciB0byBNYXJzXCIpKi9cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2hlY2tib3ggPSBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JztcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXNDaGVja2JveCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgPGgzPlNpZ24gdXAgbm93PC9oMz5cbiAgICAgICAge3N1YiAmJlxuICAgICAgICAgICAgPGRpdj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImZpcnN0TmFtZVwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0gdmFsdWU9e2Zvcm1EYXRhLm5hbWUgfHwgJyd9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdE5hbWVcIiBvbkNoYW5nZT17c2V0Rm9ybURhdGF9IHZhbHVlPXtmb3JtRGF0YS5uYW1lIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17c2V0Rm9ybURhdGF9IHZhbHVlPXtmb3JtRGF0YS5lbWFpbCB8fCAnJ30vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5IYXZlIHlvdSBldmVyIGJlZW4gdG8gc3BhY2U/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIlllc1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNoZWNrZWQ9e2Zvcm1EYXRhWyd5ZXMnXSB8fCBmYWxzZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5XaHkgc2hvdWxkIHdlIGNob29zZSBZT1U/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibW90aXZhdGlvblwiIG9uQ2hhbmdlPXtzZXRGb3JtRGF0YX0gdmFsdWU9e2Zvcm1EYXRhLm5hbWUgfHwgJyd9Lz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGJhMjZmMDNiY2U5OTY3NWM2OWFcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJmb3JtUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJyZXNldCIsImZpcnMiLCJjb3VudCIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwic3ViIiwic2V0U3ViIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwiaXNDaGVja2JveCIsInRhcmdldCIsInR5cGUiLCJjaGVja2VkIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9