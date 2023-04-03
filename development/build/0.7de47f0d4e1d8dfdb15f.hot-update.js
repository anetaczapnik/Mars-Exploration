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
    onClick: toggleForm
  }, "Sign up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f83981eba51fcda07043")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDZixJQUFJLEVBQUMsU0FBUztJQUNkLFFBQVEsRUFBRWMsWUFBYTtJQUN2QixPQUFPLEVBQUVSLElBQUksQ0FBQ0wsT0FBTyxJQUFJO0VBQU0sRUFDakMsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLDJCQUF5QixDQUFJLGVBRWhDO0lBQVUsSUFBSSxFQUFDLFlBQVk7SUFBQyxRQUFRLEVBQUVhLFlBQWE7SUFBQyxLQUFLLEVBQUVSLElBQUksQ0FBQ0osVUFBVSxJQUFJO0VBQUcsRUFBRyxDQUNwRixDQUNELGVBQ1g7SUFBUSxJQUFJLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBRWlCO0VBQVcsR0FBQyxTQUFPLENBQVMsQ0FDeEQsQ0FDTDtBQUNWLENBQUM7QUFFRCxpRUFBZWQsSUFBSTs7Ozs7Ozs7VUNsR25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZSxcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VSZWR1Y2VyKGZvcm1SZWR1Y2VyLCB7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2hlY2tib3ggPSBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JztcbiAgICAgICAgc2V0Rm9ybSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBpc0NoZWNrYm94ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICB7c3ViICYmIDxkaXY+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGF2ZSB5b3UgZXZlciBiZWVuIHRvIHNwYWNlPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc2l0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybS52aXNpdGVkIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtb3RpdmF0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PlNpZ24gdXA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2Pilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjgzOTgxZWJhNTFmY2RhMDcwNDNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlzaXRlZCIsIm1vdGl2YXRpb24iLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwiZm9ybSIsInNldEZvcm0iLCJ1c2VTdGF0ZSIsInN1YiIsInNldFN1YiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsImhhbmRsZUNoYW5nZSIsImlzQ2hlY2tib3giLCJ0YXJnZXQiLCJ0eXBlIiwiY2hlY2tlZCIsInRvZ2dsZUZvcm0iXSwic291cmNlUm9vdCI6IiJ9