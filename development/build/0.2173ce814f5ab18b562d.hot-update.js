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
  }, sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "booking"
  }, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "standard-basic",
    variant: "standard",
    label: "Filled",
    color: "info",
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "filled-basic",
    label: "Filled",
    variant: "filled",
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Filled",
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.email || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_base_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Filled",
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
/******/ 	__webpack_require__.h = () => ("6afb36476d13c0f45094")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxJQUFJO0VBQUcsRUFDN0IsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLGVBQWEsQ0FBSSxlQUNwQiwyREFBQywrREFBUztJQUFDLEtBQUssRUFBQyxRQUFRO0lBQ3JCLElBQUksRUFBQyxPQUFPO0lBQ1osSUFBSSxFQUFDLE9BQU87SUFDWixRQUFRLEVBQUVpQixZQUFhO0lBQ3ZCLEtBQUssRUFBRVYsSUFBSSxDQUFDTixLQUFLLElBQUk7RUFBRyxFQUMxQixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFFaEMsMkRBQUMsa0VBQWdCO0lBQUMsS0FBSyxFQUFDLFFBQVE7SUFBQyxJQUFJLEVBQUMsWUFBWTtJQUFDLFFBQVEsRUFBRWdCLFlBQWE7SUFBQyxLQUFLLEVBQUVWLElBQUksQ0FBQ0wsVUFBVSxJQUFJO0VBQUcsRUFBRyxDQUN2RyxDQUNELGVBQ1gsMkRBQUMsNERBQU07SUFBQyxJQUFJLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBQztFQUFXLEdBQUMsU0FBTyxDQUFTLGVBQzFELDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsUUFBUSxFQUFDLE9BQU87SUFBQyxPQUFPLEVBQUVJLEtBQUssQ0FBQ2E7RUFBWSxFQUFFLENBQy9FLENBQ0wsQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZWQsSUFBSTs7Ozs7Ozs7VUN6R25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG11aS9iYXNlL1RleHRhcmVhQXV0b3NpemUnO1xuXG4vL2Zvcm0gcmVzZXRpbmcgb24gc3VtYml0XG5cbmNvbnN0IGZvcm1SZWR1Y2VyID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5yZXNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZSxcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICB0b2dnbGVGb3JtKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEZvcm0oe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgbGFiZWw9XCJGaWxsZWRcIiBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJmaWxsZWQtYmFzaWNcIiBsYWJlbD1cIkZpbGxlZFwiIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZSBsYWJlbD1cIkZpbGxlZFwiIG5hbWU9XCJtb3RpdmF0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5TaWduIHVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZVJvdW5kZWRJY29uIGNsYXNzTmFtZT1cImNsb3NlXCIgZm9udFNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfS8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmFmYjM2NDc2ZDEzYzBmNDUwOTRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJDbG9zZVJvdW5kZWRJY29uIiwiVGV4dGFyZWFBdXRvc2l6ZSIsImZvcm1SZWR1Y2VyIiwic3RhdGUiLCJldmVudCIsInJlc2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwicHJvcHMiLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJoYW5kbGVDbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=