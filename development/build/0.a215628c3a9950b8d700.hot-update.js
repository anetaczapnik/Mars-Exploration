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
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Form = function Form(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      firstName: '',
      lastName: '',
      email: '',
      motivation: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var handleChange = function handleChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setForm(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, name, value));
    });
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    sub = _useState4[0],
    setSub = _useState4[1];
  var toggleForm = function toggleForm() {
    props.handleClose();
  };
  var handleSubmit = function handleSubmit(event) {
    var data = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      motivation: form.motivation
    };
    fetch("http://localhost:3005/candidates", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    event.preventDefault();
    setSub(true);
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
    onSubmit: handleSubmit,
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form__fields"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    id: "standard-basic",
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form__fields"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    id: "filled-basic",
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form__fields"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
    type: "email",
    name: "email",
    onChange: handleChange,
    value: form.email || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "form__formTextarea"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "form__formTextarea--p"
  }, "Why do you want to go to Mars?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    className: "form__formTextarea--t",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "pageWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    version: "1.1",
    x: "0px",
    y: "0px",
    width: "307px",
    height: "283px",
    id: "rocket"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    className: "rocket_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "147.5",
    cy: "138.6",
    r: "105.5",
    className: "icon_circle"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    className: "rocket_inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fire fire_path",
    id: "fireMiddle",
    d: "M148.891,179.906c3.928,0,7.111,3.176,7.111,7.094 c0,7.78-7.111,16-7.111,16s-7.111-8.349-7.111-16C141.78,183.082,144.963,179.906,148.891,179.906z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fire_path fire",
    id: "fireRight",
    d: "M154.063,181.092c3.577-1.624,7.788-0.048,9.408,3.52 c3.216,7.084,0.139,17.508,0.139,17.508s-9.927-4.662-13.09-11.63C148.9,186.923,150.487,182.715,154.063,181.092z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fire_path fire",
    id: "fireLeft",
    d: "M143.392,182.519c3.25,2.207,4.098,6.623,1.896,9.864 c-4.372,6.436-14.873,9.238-14.873,9.238s-1.191-10.902,3.108-17.23C135.725,181.149,140.143,180.312,143.392,182.519z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fire_path fire",
    id: "fireSmallLeft",
    d: "M143.193 187.531c2.226 0.4 3.7 2.6 3.2 4.8 c-0.875 4.407-5.829 8.264-5.829 8.264s-3.09-5.53-2.229-9.865C138.807 188.5 141 187.1 143.2 187.531z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "fire_path fire",
    id: "fireSmallRight",
    d: "M152.089 188.599c2.043-0.985 4.496-0.132 5.5 1.9 c1.952 4 0.3 10.1 0.3 10.107s-5.795-2.56-7.713-6.541C149.186 192 150 189.6 152.1 188.599z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "rocket_bottom",
    d: "M157.069 171.31h-3.292c-1.562-0.048-3.178-0.076-4.846-0.076 s-3.284 0.028-4.846 0.076h-3.292c-7.277-7.938-12.371-26.182-12.371-47.434c0-28.54 9.182-51.676 20.508-51.676 c11.327 0 20.5 23.1 20.5 51.676C169.44 145.1 164.3 163.4 157.1 171.31z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "right_wing_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "wing_base",
    d: "M166.678 127.161c0 0 17.7 3.3 12.9 48.099l-18.06-14.05 L166.678 127.161z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "wing_shadow",
    d: "M158.225 140.336c10.481-5.584 22.7 22.2 21.4 34.9 l-18.06-14.05C161.542 161.2 156.1 144.3 158.2 140.336z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "left_wing_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "wing_base",
    d: "M135.131 161.21l-18.06 14.1 c-4.805-44.793 12.924-48.099 12.924-48.099L135.131 161.21z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "wing_shadow",
    d: "M135.131 161.21l-18.06 14.1 c-1.367-12.746 10.896-40.509 21.377-34.924C140.614 144.3 135.1 161.2 135.1 161.21z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "rocket_body_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "rocket_base",
    d: "M162.728 167.358c-3.778-0.623-8.573-0.996-13.796-0.996 s-10.018 0.373-13.795 0.996c-5.033-10.186-8.257-25.808-8.257-43.338c0-30.688 9.873-55.566 22.052-55.566 s22.053 24.9 22.1 55.566C170.984 141.6 167.8 157.2 162.7 167.358z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    className: "rocket_shadow",
    d: "M145.464 166.417c19.578-40.575 7.26-85.229 4.112-98.067 c11.88 0.9 21.4 25.4 21.4 55.525c0 17.529-3.225 33.152-8.257 43.337c0 0-3.786-0.472-8.069-0.697 S145.464 166.4 145.5 166.417z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", {
    id: "large_window_wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("radialgradient", {
    id: "SVGID_2_",
    cx: "148.9",
    cy: "112.5",
    r: "15.2",
    fx: "139.4853",
    fy: "112.5239",
    gradientunits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0",
    className: "window_grandient"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.5868",
    className: "window_grandient"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6834",
    className: "window_grandient"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6845",
    className: "window_grandient1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6861",
    className: "window_grandient2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("stop", {
    offset: "0.6897",
    className: "window_grandient3"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    className: "large_window_path",
    cx: "148.9",
    cy: "111.3",
    r: "10.5"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    className: "small_window_path",
    cx: "148.9",
    cy: "132.4",
    r: "5.2"
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("27733f4fa3b9755250d8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsT0FBTztJQUFDLENBQUMsRUFBQyxNQUFNO0lBQUMsRUFBRSxFQUFDLFVBQVU7SUFDMUQsRUFBRSxFQUFDLFVBQVU7SUFBQyxhQUFhLEVBQUM7RUFBZ0IsZ0JBQ3hEO0lBQU0sTUFBTSxFQUFDLEdBQUc7SUFBQyxTQUFTLEVBQUM7RUFBa0IsRUFBRSxlQUMvQztJQUFNLE1BQU0sRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWtCLEVBQUUsZUFDcEQ7SUFBTSxNQUFNLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFrQixFQUFFLGVBQ3BEO0lBQU0sTUFBTSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxlQUNyRDtJQUFNLE1BQU0sRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQW1CLEVBQUUsZUFDckQ7SUFBTSxNQUFNLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFtQixFQUFFLENBQ3hDLGVBQ2pCO0lBQVEsU0FBUyxFQUFDLG1CQUFtQjtJQUFDLEVBQUUsRUFBQyxPQUFPO0lBQUMsRUFBRSxFQUFDLE9BQU87SUFBQyxDQUFDLEVBQUM7RUFBTSxFQUFFLENBQ3RFLGVBRUo7SUFBUSxTQUFTLEVBQUMsbUJBQW1CO0lBQUMsRUFBRSxFQUFDLE9BQU87SUFBQyxFQUFFLEVBQUMsT0FBTztJQUFDLENBQUMsRUFBQztFQUFLLEVBQUUsQ0FFckUsQ0FFSixDQUNGLENBQ0osQ0FDSCxDQUNMLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVqQixJQUFJOzs7Ozs7OztVQ3ZMbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBGb3JtID0gKHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDUvY2FuZGlkYXRlc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKVxuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19mb3JtVGV4dGFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtX19mb3JtVGV4dGFyZWEtLXBcIj5XaHkgZG8geW91IHdhbnQgdG8gZ28gdG8gTWFycz88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYS0tdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMzA3cHhcIiBoZWlnaHQ9XCIyODNweFwiIGlkPVwicm9ja2V0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzc05hbWU9XCJyb2NrZXRfd3JhcFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNDcuNVwiIGN5PVwiMTM4LjZcIiByPVwiMTA1LjVcIiBjbGFzc05hbWU9XCJpY29uX2NpcmNsZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBjbGFzc05hbWU9XCJyb2NrZXRfaW5uZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiZmlyZSBmaXJlX3BhdGhcIiBpZD1cImZpcmVNaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNDguODkxLDE3OS45MDZjMy45MjgsMCw3LjExMSwzLjE3Niw3LjExMSw3LjA5NCBjMCw3Ljc4LTcuMTExLDE2LTcuMTExLDE2cy03LjExMS04LjM0OS03LjExMS0xNkMxNDEuNzgsMTgzLjA4MiwxNDQuOTYzLDE3OS45MDYsMTQ4Ljg5MSwxNzkuOTA2elwiLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJmaXJlX3BhdGggZmlyZVwiIGlkPVwiZmlyZVJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTU0LjA2MywxODEuMDkyYzMuNTc3LTEuNjI0LDcuNzg4LTAuMDQ4LDkuNDA4LDMuNTIgYzMuMjE2LDcuMDg0LDAuMTM5LDE3LjUwOCwwLjEzOSwxNy41MDhzLTkuOTI3LTQuNjYyLTEzLjA5LTExLjYzQzE0OC45LDE4Ni45MjMsMTUwLjQ4NywxODIuNzE1LDE1NC4wNjMsMTgxLjA5MnpcIi8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiZmlyZV9wYXRoIGZpcmVcIiBpZD1cImZpcmVMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQzLjM5MiwxODIuNTE5YzMuMjUsMi4yMDcsNC4wOTgsNi42MjMsMS44OTYsOS44NjQgYy00LjM3Miw2LjQzNi0xNC44NzMsOS4yMzgtMTQuODczLDkuMjM4cy0xLjE5MS0xMC45MDIsMy4xMDgtMTcuMjNDMTM1LjcyNSwxODEuMTQ5LDE0MC4xNDMsMTgwLjMxMiwxNDMuMzkyLDE4Mi41MTl6XCIvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImZpcmVfcGF0aCBmaXJlXCIgaWQ9XCJmaXJlU21hbGxMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQzLjE5MyAxODcuNTMxYzIuMjI2IDAuNCAzLjcgMi42IDMuMiA0LjggYy0wLjg3NSA0LjQwNy01LjgyOSA4LjI2NC01LjgyOSA4LjI2NHMtMy4wOS01LjUzLTIuMjI5LTkuODY1QzEzOC44MDcgMTg4LjUgMTQxIDE4Ny4xIDE0My4yIDE4Ny41MzF6XCIvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImZpcmVfcGF0aCBmaXJlXCIgaWQ9XCJmaXJlU21hbGxSaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1Mi4wODkgMTg4LjU5OWMyLjA0My0wLjk4NSA0LjQ5Ni0wLjEzMiA1LjUgMS45IGMxLjk1MiA0IDAuMyAxMC4xIDAuMyAxMC4xMDdzLTUuNzk1LTIuNTYtNy43MTMtNi41NDFDMTQ5LjE4NiAxOTIgMTUwIDE4OS42IDE1Mi4xIDE4OC41OTl6XCIvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInJvY2tldF9ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNTcuMDY5IDE3MS4zMWgtMy4yOTJjLTEuNTYyLTAuMDQ4LTMuMTc4LTAuMDc2LTQuODQ2LTAuMDc2IHMtMy4yODQgMC4wMjgtNC44NDYgMC4wNzZoLTMuMjkyYy03LjI3Ny03LjkzOC0xMi4zNzEtMjYuMTgyLTEyLjM3MS00Ny40MzRjMC0yOC41NCA5LjE4Mi01MS42NzYgMjAuNTA4LTUxLjY3NiBjMTEuMzI3IDAgMjAuNSAyMy4xIDIwLjUgNTEuNjc2QzE2OS40NCAxNDUuMSAxNjQuMyAxNjMuNCAxNTcuMSAxNzEuMzF6XCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cInJpZ2h0X3dpbmdfd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIndpbmdfYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNjYuNjc4IDEyNy4xNjFjMCAwIDE3LjcgMy4zIDEyLjkgNDguMDk5bC0xOC4wNi0xNC4wNSBMMTY2LjY3OCAxMjcuMTYxelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJ3aW5nX3NoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNTguMjI1IDE0MC4zMzZjMTAuNDgxLTUuNTg0IDIyLjcgMjIuMiAyMS40IDM0LjkgbC0xOC4wNi0xNC4wNUMxNjEuNTQyIDE2MS4yIDE1Ni4xIDE0NC4zIDE1OC4yIDE0MC4zMzZ6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD1cImxlZnRfd2luZ193cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwid2luZ19iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEzNS4xMzEgMTYxLjIxbC0xOC4wNiAxNC4xIGMtNC44MDUtNDQuNzkzIDEyLjkyNC00OC4wOTkgMTIuOTI0LTQ4LjA5OUwxMzUuMTMxIDE2MS4yMXpcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwid2luZ19zaGFkb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTM1LjEzMSAxNjEuMjFsLTE4LjA2IDE0LjEgYy0xLjM2Ny0xMi43NDYgMTAuODk2LTQwLjUwOSAyMS4zNzctMzQuOTI0QzE0MC42MTQgMTQ0LjMgMTM1LjEgMTYxLjIgMTM1LjEgMTYxLjIxelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJyb2NrZXRfYm9keV93cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicm9ja2V0X2Jhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTYyLjcyOCAxNjcuMzU4Yy0zLjc3OC0wLjYyMy04LjU3My0wLjk5Ni0xMy43OTYtMC45OTYgcy0xMC4wMTggMC4zNzMtMTMuNzk1IDAuOTk2Yy01LjAzMy0xMC4xODYtOC4yNTctMjUuODA4LTguMjU3LTQzLjMzOGMwLTMwLjY4OCA5Ljg3My01NS41NjYgMjIuMDUyLTU1LjU2NiBzMjIuMDUzIDI0LjkgMjIuMSA1NS41NjZDMTcwLjk4NCAxNDEuNiAxNjcuOCAxNTcuMiAxNjIuNyAxNjcuMzU4elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJyb2NrZXRfc2hhZG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE0NS40NjQgMTY2LjQxN2MxOS41NzgtNDAuNTc1IDcuMjYtODUuMjI5IDQuMTEyLTk4LjA2NyBjMTEuODggMC45IDIxLjQgMjUuNCAyMS40IDU1LjUyNWMwIDE3LjUyOS0zLjIyNSAzMy4xNTItOC4yNTcgNDMuMzM3YzAgMC0zLjc4Ni0wLjQ3Mi04LjA2OS0wLjY5NyBTMTQ1LjQ2NCAxNjYuNCAxNDUuNSAxNjYuNDE3elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsYXJnZV93aW5kb3dfd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyYWRpYWxncmFkaWVudCBpZD1cIlNWR0lEXzJfXCIgY3g9XCIxNDguOVwiIGN5PVwiMTEyLjVcIiByPVwiMTUuMlwiIGZ4PVwiMTM5LjQ4NTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmeT1cIjExMi41MjM5XCIgZ3JhZGllbnR1bml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjBcIiBjbGFzc05hbWU9XCJ3aW5kb3dfZ3JhbmRpZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjU4NjhcIiBjbGFzc05hbWU9XCJ3aW5kb3dfZ3JhbmRpZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjY4MzRcIiBjbGFzc05hbWU9XCJ3aW5kb3dfZ3JhbmRpZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjY4NDVcIiBjbGFzc05hbWU9XCJ3aW5kb3dfZ3JhbmRpZW50MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42ODYxXCIgY2xhc3NOYW1lPVwid2luZG93X2dyYW5kaWVudDJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNjg5N1wiIGNsYXNzTmFtZT1cIndpbmRvd19ncmFuZGllbnQzXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcmFkaWFsZ3JhZGllbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJsYXJnZV93aW5kb3dfcGF0aFwiIGN4PVwiMTQ4LjlcIiBjeT1cIjExMS4zXCIgcj1cIjEwLjVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY2xhc3NOYW1lPVwic21hbGxfd2luZG93X3BhdGhcIiBjeD1cIjE0OC45XCIgY3k9XCIxMzIuNFwiIHI9XCI1LjJcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3NzMzZjRmYTNiOTc1NTI1MGQ4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiRm9ybSIsInByb3BzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldlN0YXRlIiwic3ViIiwic2V0U3ViIiwidG9nZ2xlRm9ybSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9