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
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(248);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
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
var Form = function Form(props) {
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

  /*    const [isOpen, setIsOpen] = useState(true);
  
      const toggleForm = () => {
          setIsOpen(!isOpen);
      }*/

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
    }, 2500);
    toggleForm();
  };
  var handleChange = function handleChange(event) {
    var isCheckbox = event.target.type === 'checkbox';
    setForm({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Have you ever been to space?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    name: "visited",
    onChange: handleChange,
    checked: form.visited || false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    name: "motivation",
    onChange: handleChange,
    value: form.motivation || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    variant: "contained"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "close",
    onClick: props.handleClose
  }, " X "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1cf3bc9c6cd517343a32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxJQUFJO0VBQUcsRUFDN0IsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLGVBQWEsQ0FBSSxlQUNwQiwyREFBQywrREFBUztJQUNOLElBQUksRUFBQyxPQUFPO0lBQ1osSUFBSSxFQUFDLE9BQU87SUFDWixRQUFRLEVBQUVnQixZQUFhO0lBQ3ZCLEtBQUssRUFBRVIsSUFBSSxDQUFDUCxLQUFLLElBQUk7RUFBRyxFQUMxQixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsOEJBQTRCLENBQUksZUFDbkM7SUFDSSxJQUFJLEVBQUMsVUFBVTtJQUNmLElBQUksRUFBQyxTQUFTO0lBQ2QsUUFBUSxFQUFFZSxZQUFhO0lBQ3ZCLE9BQU8sRUFBRVIsSUFBSSxDQUFDTixPQUFPLElBQUk7RUFBTSxFQUNqQyxDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFFaEM7SUFBVSxJQUFJLEVBQUMsWUFBWTtJQUFDLFFBQVEsRUFBRWMsWUFBYTtJQUFDLEtBQUssRUFBRVIsSUFBSSxDQUFDTCxVQUFVLElBQUk7RUFBRyxFQUFHLENBQ3BGLENBQ0csZUFDWCwyREFBQyw0REFBTTtJQUFDLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFDO0VBQVcsR0FBQyxTQUFPLENBQVMsZUFDMUQ7SUFBRyxTQUFTLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUksS0FBSyxDQUFDYztFQUFZLEdBQUMsS0FBRyxDQUFJLENBQ3JELENBQ0wsQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZWYsSUFBSTs7Ozs7Ozs7VUNqSG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5cbmNvbnN0IGZvcm1SZWR1Y2VyID0gKHN0YXRlLCBldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5yZXNldCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHZpc2l0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBbZXZlbnQubmFtZV06IGV2ZW50LnZhbHVlLFxuICAgIH07XG59O1xuXG5jb25zdCBGb3JtID0gKCBwcm9wcyApID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VSZWR1Y2VyKGZvcm1SZWR1Y2VyLCB7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4vKiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oIWlzT3Blbik7XG4gICAgfSovXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG5cbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgICAgICBzZXRGb3JtKHtcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGlzQ2hlY2tib3ggPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUJhY2tncm91bmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICB7c3ViICYmIDxkaXY+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiIHZhcmlhbnQ9XCJzdGFuZGFyZFwiIGNvbG9yPVwiaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cImZpbGxlZC1iYXNpY1wiIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5IYXZlIHlvdSBldmVyIGJlZW4gdG8gc3BhY2U/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzaXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm0udmlzaXRlZCB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgc2hvdWxkIHdlIGNob29zZSBZT1U/PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtb3RpdmF0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlNpZ24gdXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX0+IFggPC9wPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFjZjNiYzljNmNkNTE3MzQzYTMyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlzaXRlZCIsIm1vdGl2YXRpb24iLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwicHJvcHMiLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrYm94IiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJoYW5kbGVDbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=