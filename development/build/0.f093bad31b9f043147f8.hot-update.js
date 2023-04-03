"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(267);
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(268));
var _jsxRuntime = __webpack_require__(51);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
}), 'CloseRounded');
exports["default"] = _default;

/***/ }),

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
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(279);
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
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "close",
    onClick: props.handleClose
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d16a59c1485b2d9e6d8d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mMDkzYmFkMzFiOWYwNDMxNDdmOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLEdBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsR0FBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsRUFBbUI7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCxrQkFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ptQztBQUNSO0FBQ007QUFDZ0I7O0FBRWhFOztBQUVBLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFXLENBQUlDLEtBQUssRUFBRUMsS0FBSyxFQUFLO0VBQ2xDLElBQUlBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO0lBQ2IsT0FBTztNQUNIQyxTQUFTLEVBQUUsRUFBRTtNQUNiQyxRQUFRLEVBQUUsRUFBRTtNQUNaQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxPQUFPLEVBQUUsS0FBSztNQUNkQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQztFQUNMO0VBQ0EsdUNBQ09QLEtBQUssMkJBQ1BDLEtBQUssQ0FBQ08sSUFBSSxFQUFHUCxLQUFLLENBQUNRLEtBQUs7QUFFakMsQ0FBQztBQUVELElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFJLENBQUtDLEtBQUssRUFBTTtFQUN0QixrQkFBd0JqQixpREFBVSxDQUFDSyxXQUFXLEVBQUU7TUFDNUNJLFNBQVMsRUFBRSxFQUFFO01BQ2JDLFFBQVEsRUFBRSxFQUFFO01BQ1pDLEtBQUssRUFBRSxFQUFFO01BQ1RDLE9BQU8sRUFBRSxLQUFLO01BQ2RDLFVBQVUsRUFBRTtJQUNoQixDQUFDLENBQUM7SUFBQTtJQU5LSyxJQUFJO0lBQUVDLE9BQU87RUFRcEIsZ0JBQXNCbEIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5Qm1CLEdBQUc7SUFBRUMsTUFBTTtFQUVsQixpQkFBNEJwQiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBO0lBQW5DcUIsTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlsQixLQUFLLEVBQUs7SUFDNUJBLEtBQUssQ0FBQ21CLGNBQWMsRUFBRTtJQUV0QkwsTUFBTSxDQUFDLElBQUksQ0FBQztJQUVaRyxVQUFVLEVBQUU7SUFFWkcsVUFBVSxDQUFDLFlBQU07TUFDYk4sTUFBTSxDQUFDLEtBQUssQ0FBQztNQUNiRixPQUFPLENBQUM7UUFBRVgsS0FBSyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDWixDQUFDO0VBRUQsSUFBTW9CLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlyQixLQUFLLEVBQUs7SUFDNUIsSUFBTXNCLFVBQVUsR0FBR3RCLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ0MsSUFBSSxLQUFLLFVBQVU7SUFDbkRaLE9BQU8sQ0FBQztNQUNKTCxJQUFJLEVBQUVQLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ2hCLElBQUk7TUFDdkJDLEtBQUssRUFBRWMsVUFBVSxHQUFHdEIsS0FBSyxDQUFDdUIsTUFBTSxDQUFDRSxPQUFPLEdBQUd6QixLQUFLLENBQUN1QixNQUFNLENBQUNmO0lBQzVELENBQUMsQ0FBQztFQUNOLENBQUM7RUFFRCxvQkFDSTtJQUFLLFNBQVMsRUFBQztFQUFnQixnQkFDM0I7SUFBSyxTQUFTLEVBQUM7RUFBYSxHQUN2QkssR0FBRyxpQkFBSSx3RUFBSyxtQkFBaUIsQ0FBTSxlQUNwQztJQUFNLFFBQVEsRUFBRUs7RUFBYSxnQkFDekIsMEZBQ0ksdUZBQ0ksc0VBQUcsWUFBVSxDQUFJLGVBQ2pCLDJEQUFDLCtEQUFTO0lBQUMsRUFBRSxFQUFDLGdCQUFnQjtJQUFDLE9BQU8sRUFBQyxVQUFVO0lBQUMsS0FBSyxFQUFDLE1BQU07SUFDMUQsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsV0FBVztJQUNoQixRQUFRLEVBQUVHLFlBQWE7SUFDdkIsS0FBSyxFQUFFVixJQUFJLENBQUNULFNBQVMsSUFBSTtFQUFHLEVBQzlCLENBQ0UsZUFDUix1RkFDSSxzRUFBRyxXQUFTLENBQUksZUFDaEIsMkRBQUMsK0RBQVM7SUFBQyxFQUFFLEVBQUMsY0FBYztJQUFDLE9BQU8sRUFBQyxRQUFRO0lBQ3pDLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLFVBQVU7SUFDZixRQUFRLEVBQUVtQixZQUFhO0lBQ3ZCLEtBQUssRUFBRVYsSUFBSSxDQUFDUixRQUFRLElBQUk7RUFBRyxFQUM3QixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsZUFBYSxDQUFJLGVBQ3BCLDJEQUFDLCtEQUFTO0lBQ04sSUFBSSxFQUFDLE9BQU87SUFDWixJQUFJLEVBQUMsT0FBTztJQUNaLFFBQVEsRUFBRWtCLFlBQWE7SUFDdkIsS0FBSyxFQUFFVixJQUFJLENBQUNQLEtBQUssSUFBSTtFQUFHLEVBQzFCLENBQ0UsZUFDUix1RkFDSSxzRUFBRyw4QkFBNEIsQ0FBSSxlQUNuQztJQUNJLElBQUksRUFBQyxVQUFVO0lBQ2YsSUFBSSxFQUFDLFNBQVM7SUFDZCxRQUFRLEVBQUVpQixZQUFhO0lBQ3ZCLE9BQU8sRUFBRVYsSUFBSSxDQUFDTixPQUFPLElBQUk7RUFBTSxFQUNqQyxDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFFaEM7SUFBVSxJQUFJLEVBQUMsWUFBWTtJQUFDLFFBQVEsRUFBRWdCLFlBQWE7SUFBQyxLQUFLLEVBQUVWLElBQUksQ0FBQ0wsVUFBVSxJQUFJO0VBQUcsRUFBRyxDQUNoRixDQUNELGVBQ1gsMkRBQUMsNERBQU07SUFBQyxJQUFJLEVBQUMsUUFBUTtJQUFDLE9BQU8sRUFBQztFQUFXLEdBQUMsU0FBTyxDQUFTLGVBQzFELDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsT0FBTyxFQUFFSSxLQUFLLENBQUNnQjtFQUFZLEVBQUUsQ0FDOUQsQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlakIsSUFBSTs7Ozs7Ozs7VUNySG5CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE4LjMgNS43MWEuOTk1OS45OTU5IDAgMCAwLTEuNDEgMEwxMiAxMC41OSA3LjExIDUuN2EuOTk1OS45OTU5IDAgMCAwLTEuNDEgMGMtLjM5LjM5LS4zOSAxLjAyIDAgMS40MUwxMC41OSAxMiA1LjcgMTYuODljLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDEuMzkuMzkgMS4wMi4zOSAxLjQxIDBMMTIgMTMuNDFsNC44OSA0Ljg5Yy4zOS4zOSAxLjAyLjM5IDEuNDEgMCAuMzktLjM5LjM5LTEuMDIgMC0xLjQxTDEzLjQxIDEybDQuODktNC44OWMuMzgtLjM4LjM4LTEuMDIgMC0xLjR6XCJcbn0pLCAnQ2xvc2VSb3VuZGVkJyk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcblxuLy9mb3JtIHJlc2V0aW5nIG9uIHN1bWJpdFxuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZSxcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NoZWNrYm94ID0gZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCc7XG4gICAgICAgIHNldEZvcm0oe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXNDaGVja2JveCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpcnN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBpZD1cInN0YW5kYXJkLWJhc2ljXCIgdmFyaWFudD1cInN0YW5kYXJkXCIgY29sb3I9XCJpbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwiZmlsbGVkLWJhc2ljXCIgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubGFzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgYmVlbiB0byBzcGFjZT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXNpdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybS52aXNpdGVkIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1vdGl2YXRpb25cIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlNpZ24gdXA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlUm91bmRlZEljb24gY2xhc3NOYW1lPVwiY2xvc2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX0vPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxNmE1OWMxNDg1YjJkOWU2ZDhkXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiQ2xvc2VSb3VuZGVkSWNvbiIsImZvcm1SZWR1Y2VyIiwic3RhdGUiLCJldmVudCIsInJlc2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInZpc2l0ZWQiLCJtb3RpdmF0aW9uIiwibmFtZSIsInZhbHVlIiwiRm9ybSIsInByb3BzIiwiZm9ybSIsInNldEZvcm0iLCJzdWIiLCJzZXRTdWIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0b2dnbGVGb3JtIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hhbmdlIiwiaXNDaGVja2JveCIsInRhcmdldCIsInR5cGUiLCJjaGVja2VkIiwiaGFuZGxlQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9