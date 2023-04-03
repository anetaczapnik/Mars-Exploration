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
      firstName: '',
      lastName: '',
      email: '',
      visited: false,
      motivation: ''
    };
  }
  return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.name, event.value));
};
var Form = function Form() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formReducer, {
      firstName: '',
      lastName: '',
      email: '',
      visited: false,
      motivation: ''
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    form = _useReducer2[0],
    setForm = _useReducer2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sub = _useState2[0],
    setSub = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    name = _useState4[0],
    setName = _useState4[1];
  /*    const [age, setAge] = useState(25);*/

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setForm(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, event.target.value));
    });
    setTimeout(function () {
      setSub(false);
      form({
        reset: true
      });
    }, 2500);
    /*        alert("One step closer to Mars")*/
  };

  var handleChange = function handleChange(event) {
    var _setForm;
    var isCheckbox = event.target.type === 'checkbox';
    setForm((_setForm = {}, _defineProperty(_setForm, event.target.name, event.target.value), _defineProperty(_setForm, "value", isCheckbox ? event.target.checked : event.target.value), _setForm));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sign up now"), sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", _defineProperty({
    type: "text",
    value: "lastName",
    onChange: handleChange
  }, "value", form.lastName || ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.name || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Have you ever been to space?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "visited",
    onChange: handleChange,
    checked: form['visited'] || false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "motivation",
    onChange: handleChange,
    value: form.motivation || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Sign up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50);







var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9bfc2543c676766078dd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5yZXNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC5uYW1lXTogZXZlbnQudmFsdWVcbiAgICB9XG59XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuLyogICAgY29uc3QgW2FnZSwgc2V0QWdlXSA9IHVzZVN0YXRlKDI1KTsqL1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgc2V0Rm9ybShwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICAgICAgW25hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgZm9ybSh7XG4gICAgICAgICAgICAgICAgcmVzZXQ6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDI1MDApO1xuLyogICAgICAgIGFsZXJ0KFwiT25lIHN0ZXAgY2xvc2VyIHRvIE1hcnNcIikqL1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgICAgICBzZXRGb3JtKHtcbiAgICAgICAgICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBpc0NoZWNrYm94ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICA8aDM+U2lnbiB1cCBub3c8L2gzPlxuICAgICAgICB7c3ViICYmXG4gICAgICAgICAgICA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3ROYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0uZmlyc3ROYW1lIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJsYXN0TmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS5uYW1lIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgYmVlbiB0byBzcGFjZT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwidmlzaXRlZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNoZWNrZWQ9e2Zvcm1bJ3Zpc2l0ZWQnXSB8fCBmYWxzZX0vPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cD5XaHkgc2hvdWxkIHdlIGNob29zZSBZT1U/PC9wPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1vdGl2YXRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcbmltcG9ydCBTZWNvbmRQYWdlIGZyb20gXCIuL1NlY29uZFBhZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5cblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICAgIDw+XG4gICAgICAgIDxIZXJvIC8+XG4gICAgICAgIDxTZWNvbmRQYWdlIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPEZvcm0gLz5cbiAgICA8Lz5cbilcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWJmYzI1NDNjNjc2NzY2MDc4ZGRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJmb3JtUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJyZXNldCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ2aXNpdGVkIiwibW90aXZhdGlvbiIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsInNldE5hbWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0ZSIsInRhcmdldCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrYm94IiwidHlwZSIsImNoZWNrZWQiLCJjcmVhdGVSb290IiwiSGVybyIsIlNlY29uZFBhZ2UiLCJGb290ZXIiLCJBcHAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=