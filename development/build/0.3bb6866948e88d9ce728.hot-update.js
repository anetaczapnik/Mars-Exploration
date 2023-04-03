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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sub = _React$useState2[0],
    setSub = _React$useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
    }, 2500);
  };
  var handleChange = function handleChange(event) {
    var isCheckbox = event.target.type === 'checkbox';
    setForm({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isClose = _useState2[0],
    setIsClose = _useState2[1];
  var closeForm = function closeForm() {
    setIsClose(!isClose);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.email || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Have you ever been to space?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "visited",
    onChange: handleChange,
    checked: form.visited || false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "motivation",
    onChange: handleChange,
    value: form.motivation || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: closeForm
  }, "Sign up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da987eea46b9ea3cafc4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsT0FBTztJQUNaLFFBQVEsRUFBRWMsWUFBYTtJQUN2QixLQUFLLEVBQUVQLElBQUksQ0FBQ04sS0FBSyxJQUFJO0VBQUcsRUFDMUIsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLDhCQUE0QixDQUFJLGVBQ25DO0lBQ0ksSUFBSSxFQUFDLFVBQVU7SUFDZixJQUFJLEVBQUMsU0FBUztJQUNkLFFBQVEsRUFBRWEsWUFBYTtJQUN2QixPQUFPLEVBQUVQLElBQUksQ0FBQ0wsT0FBTyxJQUFJO0VBQU0sRUFDakMsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLDJCQUF5QixDQUFJLGVBRWhDO0lBQVUsSUFBSSxFQUFDLFlBQVk7SUFBQyxRQUFRLEVBQUVZLFlBQWE7SUFBQyxLQUFLLEVBQUVQLElBQUksQ0FBQ0osVUFBVSxJQUFJO0VBQUcsRUFBRyxDQUNwRixDQUNELGVBQ1g7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBRWtCO0VBQVUsR0FBQyxTQUFPLENBQVMsQ0FDdkQsQ0FDTDtBQUNWLENBQUM7QUFFRCxpRUFBZWYsSUFBSTs7Ozs7Ozs7VUN4R25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGZvcm1SZWR1Y2VyID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5yZXNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbZXZlbnQubmFtZV06IGV2ZW50LnZhbHVlLFxuICAgIH07XG59O1xuXG5jb25zdCBGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVJlZHVjZXIoZm9ybVJlZHVjZXIsIHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICB9KTtcbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1YihmYWxzZSk7XG4gICAgICAgICAgICBzZXRGb3JtKHsgcmVzZXQ6IHRydWUgfSk7XG4gICAgICAgIH0sIDI1MDApO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgICAgICBzZXRGb3JtKHtcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGlzQ2hlY2tib3ggPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtpc0Nsb3NlLCBzZXRJc0Nsb3NlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNDbG9zZSghaXNDbG9zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAge3N1YiAmJiA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+fVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgYmVlbiB0byBzcGFjZT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXNpdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm0udmlzaXRlZCB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibW90aXZhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtLm1vdGl2YXRpb24gfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXtjbG9zZUZvcm19PlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGE5ODdlZWE0NmI5ZWEzY2FmYzRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJmb3JtUmVkdWNlciIsInN0YXRlIiwiZXZlbnQiLCJyZXNldCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ2aXNpdGVkIiwibW90aXZhdGlvbiIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImhhbmRsZUNoYW5nZSIsImlzQ2hlY2tib3giLCJ0YXJnZXQiLCJ0eXBlIiwiY2hlY2tlZCIsImlzQ2xvc2UiLCJzZXRJc0Nsb3NlIiwiY2xvc2VGb3JtIl0sInNvdXJjZVJvb3QiOiIifQ==