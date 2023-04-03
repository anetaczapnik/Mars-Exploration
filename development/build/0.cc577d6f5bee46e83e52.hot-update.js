"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 47:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
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
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setForm({
      name: name,
      value: value
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sub = _useState2[0],
    setSub = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var toggleForm = function toggleForm() {
    console.log("dupa");
    setIsOpen(function (prev) {
      return !prev;
    });
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    toggleForm();
    console.log("dupa");
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
      toggleForm();
    }, 2500);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formBackground"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "booking"
  }, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "form__FirstSecondName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    id: "standard-basic",
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    id: "filled-basic",
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.email || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why should we choose YOU?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form__formTextarea",
    name: "motivation",
    onChange: handleChange,
    value: form.motivation || ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "submitBtn",
    type: "submit"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/******/ 	__webpack_require__.h = () => ("fac5eefbbd7d84e87f7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzU3N2Q2ZjViZWU0NmU4M2U1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDRjtBQUNnQjtBQUNOOztBQUUxRDs7QUFFQSxJQUFNTSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUVDLEtBQUssRUFBSztFQUNsQyxJQUFJQSxLQUFLLENBQUNDLEtBQUssRUFBRTtJQUNiLE9BQU87TUFDSEMsU0FBUyxFQUFFLEVBQUU7TUFDYkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsVUFBVSxFQUFFO0lBQ2hCLENBQUM7RUFDTDtFQUNBLHVDQUNPTixLQUFLLDJCQUNQQyxLQUFLLENBQUNNLElBQUksRUFBR04sS0FBSyxDQUFDTyxLQUFLO0FBRWpDLENBQUM7QUFFRCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxDQUFLQyxLQUFLLEVBQU07RUFDdEIsa0JBQXdCaEIsaURBQVUsQ0FBQ0ssV0FBVyxFQUFFO01BQzVDSSxTQUFTLEVBQUUsRUFBRTtNQUNiQyxRQUFRLEVBQUUsRUFBRTtNQUNaQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0lBQUE7SUFMS0ssSUFBSTtJQUFFQyxPQUFPO0VBT3BCLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlaLEtBQUssRUFBSztJQUM1QixvQkFBd0JBLEtBQUssQ0FBQ2EsTUFBTTtNQUE1QlAsSUFBSSxpQkFBSkEsSUFBSTtNQUFFQyxLQUFLLGlCQUFMQSxLQUFLO0lBQ25CSSxPQUFPLENBQUM7TUFDSkwsSUFBSSxFQUFKQSxJQUFJO01BQ0pDLEtBQUssRUFBTEE7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBRUQsZ0JBQXNCYiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBO0lBQTlCb0IsR0FBRztJQUFFQyxNQUFNO0VBRWxCLGlCQUE0QnJCLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE7SUFBbkNzQixNQUFNO0lBQUVDLFNBQVM7RUFFeEIsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25CSCxTQUFTLENBQUMsVUFBQUksSUFBSTtNQUFBLE9BQUksQ0FBQ0EsSUFBSTtJQUFBLEVBQUM7RUFDNUIsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUl0QixLQUFLLEVBQUs7SUFDNUJBLEtBQUssQ0FBQ3VCLGNBQWMsRUFBRTtJQUV0QlIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUVaRyxVQUFVLEVBQUU7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQ25CSSxVQUFVLENBQUMsWUFBTTtNQUNiVCxNQUFNLENBQUMsS0FBSyxDQUFDO01BQ2JKLE9BQU8sQ0FBQztRQUFFVixLQUFLLEVBQUU7TUFBSyxDQUFDLENBQUM7TUFDeEJpQixVQUFVLEVBQUU7SUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUM7RUFFRCxvQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFnQixnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxHQUN2QkosR0FBRyxpQkFBSTtJQUFLLFNBQVMsRUFBQztFQUFTLEdBQUMsbUJBQWlCLENBQU0sZUFDeEQ7SUFBTSxRQUFRLEVBQUVRO0VBQWEsZ0JBQ3pCO0lBQVUsU0FBUyxFQUFDO0VBQU0sZ0JBQ3RCO0lBQUssU0FBUyxFQUFDO0VBQXVCLGdCQUNsQyx1RkFDSSxzRUFBRyxZQUFVLENBQUksZUFDakI7SUFDSSxTQUFTLEVBQUMsaUJBQWlCO0lBQzNCLEVBQUUsRUFBQyxnQkFBZ0I7SUFDbkIsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsV0FBVztJQUNoQixRQUFRLEVBQUVWLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNSLFNBQVMsSUFBSTtFQUFHLEVBQzlCLENBQ0UsZUFDUix1RkFDSSxzRUFBRyxXQUFTLENBQUksZUFDaEI7SUFDSSxTQUFTLEVBQUMsaUJBQWlCO0lBQzNCLEVBQUUsRUFBQyxjQUFjO0lBQ2pCLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLFVBQVU7SUFDZixRQUFRLEVBQUVVLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNQLFFBQVEsSUFBSTtFQUFHLEVBQzdCLENBQ0UsZUFDUix1RkFDSSxzRUFBRyxlQUFhLENBQUksZUFDcEI7SUFDSSxTQUFTLEVBQUMsaUJBQWlCO0lBQzNCLElBQUksRUFBQyxPQUFPO0lBQ1osSUFBSSxFQUFDLE9BQU87SUFDWixRQUFRLEVBQUVTLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNOLEtBQUssSUFBSTtFQUFHLEVBQzFCLENBQ0UsQ0FDTixlQUNOLHVGQUNJLHNFQUFHLDJCQUF5QixDQUFJLGVBQ2hDO0lBQ0ksU0FBUyxFQUFDLG9CQUFvQjtJQUM5QixJQUFJLEVBQUMsWUFBWTtJQUNqQixRQUFRLEVBQUVRLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNMLFVBQVUsSUFBSTtFQUFHLEVBQzNCLENBQ0YsQ0FDRCxlQUNYO0lBQVEsU0FBUyxFQUFDLFdBQVc7SUFBQyxJQUFJLEVBQUM7RUFBUSxHQUFDLFNBQU8sQ0FBUyxlQUM1RCwyREFBQyx3RUFBZ0I7SUFBQyxTQUFTLEVBQUMsT0FBTztJQUFDLFFBQVEsRUFBQyxPQUFPO0lBQUMsT0FBTyxFQUFFSSxLQUFLLENBQUNnQjtFQUFZLEVBQzlFLENBQ0MsQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlakIsSUFBSTs7Ozs7Ozs7VUN4SG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZHVjZXIsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtdWkvYmFzZS9UZXh0YXJlYUF1dG9zaXplJztcblxuLy9mb3JtIHJlc2V0aW5nIG9uIHN1bWJpdFxuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC5uYW1lXTogZXZlbnQudmFsdWUsXG4gICAgfTtcbn07XG5cbmNvbnN0IEZvcm0gPSAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVJlZHVjZXIoZm9ybVJlZHVjZXIsIHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkdXBhXCIpXG4gICAgICAgIHNldElzT3BlbihwcmV2ID0+ICFwcmV2KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImR1cGFcIilcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIH0sIDI1MDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fRmlyc3RTZWNvbmROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybVRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdGl2YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYWM1ZWVmYmJkN2Q4NGU4N2Y3ZFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIlRleHRGaWVsZCIsIkNsb3NlUm91bmRlZEljb24iLCJUZXh0YXJlYUF1dG9zaXplIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsIm5hbWUiLCJ2YWx1ZSIsIkZvcm0iLCJwcm9wcyIsImZvcm0iLCJzZXRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0Iiwic3ViIiwic2V0U3ViIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9