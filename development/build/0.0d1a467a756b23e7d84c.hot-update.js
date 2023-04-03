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
    return isOpen ? isOpen : !isOpen;
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
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "close",
    onClick: props.handleClose
  }, " X "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ 262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(263);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MainPage = function MainPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleForm = function toggleForm() {
    setIsOpen(isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Discover the Galaxy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "subtitle"
  }, "From Earth to Mars! Step by step", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "-- until Neptune")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "decoration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-text",
    onClick: toggleForm
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1 parWrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "par3background"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3dde50dcc5be05c4a978")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDO0lBQUE7SUFBcENvQixNQUFNO0lBQUVDLFNBQVM7RUFFeEIsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQVUsR0FBUztJQUNyQkQsU0FBUyxDQUFDRCxNQUFNLENBQUM7RUFDckIsQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBTyxHQUFDLHFCQUFtQixDQUFLLGVBQzlDO0lBQUksU0FBUyxFQUFDO0VBQVUsR0FBQyxrQ0FBZ0MscUZBQUssb0JBQWdCLENBQUssQ0FDakYsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFZLEVBQU8sZUFDbEM7SUFBSyxTQUFTLEVBQUM7RUFBSyxnQkFDaEI7SUFBRyxTQUFTLEVBQUMsVUFBVTtJQUFDLE9BQU8sRUFBRUU7RUFBVyxHQUFDLHdCQUFzQixDQUFJLEVBQ3RFRixNQUFNLGlCQUFJLDJEQUFDLDZDQUFJO0lBQUMsV0FBVyxFQUFFRTtFQUFXLEVBQUUsQ0FDekMsQ0FDSixlQUNOO0lBQUssU0FBUyxFQUFDO0VBQTBCLGdCQUNyQztJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QiwyREFBQyxrREFBUyxPQUFFLENBQ1YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUFhLGdCQUN4QiwyREFBQyxrREFBUyxPQUFFLENBQ1YsZUFDTjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMsMkRBQUMsa0RBQVMsT0FBRSxlQUNaO0lBQUssU0FBUyxFQUFDO0VBQWdCLEVBQU8sQ0FDcEMsQ0FDSixDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlVyxRQUFROzs7Ozs7OztVQ3hDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL01haW5QYWdlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlciwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCdcblxuLy9mb3JtIHJlc2V0aW5nIG9uIHN1bWJpdFxuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZSxcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpc09wZW4gPyBpc09wZW4gOiAhaXNPcGVuO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICB0b2dnbGVGb3JtKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2hlY2tib3ggPSBldmVudC50YXJnZXQudHlwZSA9PT0gJ2NoZWNrYm94JztcbiAgICAgICAgc2V0Rm9ybSh7XG4gICAgICAgICAgICBuYW1lOiBldmVudC50YXJnZXQubmFtZSxcbiAgICAgICAgICAgIHZhbHVlOiBpc0NoZWNrYm94ID8gZXZlbnQudGFyZ2V0LmNoZWNrZWQgOiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+fVxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGlkPVwic3RhbmRhcmQtYmFzaWNcIiB2YXJpYW50PVwic3RhbmRhcmRcIiBjb2xvcj1cImluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgaWQ9XCJmaWxsZWQtYmFzaWNcIiB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGF2ZSB5b3UgZXZlciBiZWVuIHRvIHNwYWNlPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc2l0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtmb3JtLnZpc2l0ZWQgfHwgZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibW90aXZhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtLm1vdGl2YXRpb24gfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIj5TaWduIHVwPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17cHJvcHMuaGFuZGxlQ2xvc2V9PiBYIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vUGFyYWdyYXBoXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XG5cbmNvbnN0IE1haW5QYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWFpbldyYXBwZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpc2NvdmVyIHRoZSBHYWxheHk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Gcm9tIEVhcnRoIHRvIE1hcnMhIFN0ZXAgYnkgc3RlcDxici8+LS0gdW50aWwgTmVwdHVuZTwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWNvcmF0aW9uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3RhLXRleHRcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT5TdGFydCBteSBKb3VybmV5IFRvZGF5PC9wPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtIGhhbmRsZUNsb3NlPXt0b2dnbGVGb3JtfS8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJXcmFwcGVyMVwiPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcldyYXBwZXIxIHBhcldyYXBwZXIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGgvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhcjNiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluUGFnZTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNkZGU1MGRjYzViZTA1YzRhOTc4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlzaXRlZCIsIm1vdGl2YXRpb24iLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwicHJvcHMiLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrYm94IiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJoYW5kbGVDbG9zZSIsIlBhcmFncmFwaCIsIk1haW5QYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==