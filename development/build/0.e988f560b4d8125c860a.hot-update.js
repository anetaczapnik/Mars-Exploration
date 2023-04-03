"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 46:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(248);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(262);
/* harmony import */ var _mui_base_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(164);
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






//form reseting on sumbit

var formReducer = function formReducer(state, event) {
  if (event.reset) {
    return {
      firstName: '',
      lastName: '',
      email: '',
      motivation: ''
    };
  }
  return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, event.name, event.value));
};
var Form = function Form(props) {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formReducer, {
      firstName: '',
      lastName: '',
      email: '',
      motivation: ''
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    form = _useReducer2[0],
    setForm = _useReducer2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sub = _useState2[0],
    setSub = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    toggleForm();
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
    }, 2500);
  };
  var handleChange = function handleChange(event) {
    setForm({
      name: event.target.name
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formBackground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "standard-basic",
    variant: "standard",
    color: "info",
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "filled-basic",
    variant: "filled",
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.email || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_base_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "motivation",
    onChange: handleChange,
    value: form.motivation || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    variant: "contained"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "close",
    fontSize: "large",
    onClick: props.handleClose
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4efc8f2c6234fef4239")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsK0RBQVM7SUFDTixJQUFJLEVBQUMsT0FBTztJQUNaLElBQUksRUFBQyxPQUFPO0lBQ1osUUFBUSxFQUFFaUIsWUFBYTtJQUN2QixLQUFLLEVBQUVWLElBQUksQ0FBQ04sS0FBSyxJQUFJO0VBQUcsRUFDMUIsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLDJCQUF5QixDQUFJLGVBRWhDLDJEQUFDLGtFQUFnQjtJQUFDLElBQUksRUFBQyxZQUFZO0lBQUMsUUFBUSxFQUFFZ0IsWUFBYTtJQUFDLEtBQUssRUFBRVYsSUFBSSxDQUFDTCxVQUFVLElBQUk7RUFBRyxFQUFHLENBQ3hGLENBQ0QsZUFDWCwyREFBQyw0REFBTTtJQUFDLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFDO0VBQVcsR0FBQyxTQUFPLENBQVMsZUFDMUQsMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUksS0FBSyxDQUFDYTtFQUFZLEVBQUUsQ0FDL0UsQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlZCxJQUFJOzs7Ozs7OztVQ3pHbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlciwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XG5pbXBvcnQgQ2xvc2VSb3VuZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlUm91bmRlZCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbXVpL2Jhc2UvVGV4dGFyZWFBdXRvc2l6ZSc7XG5cbi8vZm9ybSByZXNldGluZyBvbiBzdW1iaXRcblxuY29uc3QgZm9ybVJlZHVjZXIgPSAoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnJlc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbZXZlbnQubmFtZV06IGV2ZW50LnZhbHVlLFxuICAgIH07XG59O1xuXG5jb25zdCBGb3JtID0gKCBwcm9wcyApID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VSZWR1Y2VyKGZvcm1SZWR1Y2VyLCB7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1YihmYWxzZSk7XG4gICAgICAgICAgICBzZXRGb3JtKHsgcmVzZXQ6IHRydWUgfSk7XG4gICAgICAgIH0sIDI1MDApO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0Rm9ybSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7c3ViICYmIDxkaXY+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cImZpbGxlZC1iYXNpY1wiIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgc2hvdWxkIHdlIGNob29zZSBZT1U/PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemUgbmFtZT1cIm1vdGl2YXRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlNpZ24gdXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlUm91bmRlZEljb24gY2xhc3NOYW1lPVwiY2xvc2VcIiBmb250U2l6ZT1cImxhcmdlXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xvc2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNGVmYzhmMmM2MjM0ZmVmNDIzOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlRleHRGaWVsZCIsIkNsb3NlUm91bmRlZEljb24iLCJUZXh0YXJlYUF1dG9zaXplIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJwcm9wcyIsImZvcm0iLCJzZXRGb3JtIiwic3ViIiwic2V0U3ViIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImhhbmRsZUNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==