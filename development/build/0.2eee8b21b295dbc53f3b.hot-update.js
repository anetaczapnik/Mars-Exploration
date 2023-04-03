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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f9bb4d024a3d173c1a9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsRUFBQyxPQUFPO0lBQUMsQ0FBQyxFQUFDLE1BQU07SUFBQyxFQUFFLEVBQUMsVUFBVTtJQUMxRCxFQUFFLEVBQUMsVUFBVTtJQUFDLGFBQWEsRUFBQztFQUFnQixnQkFDeEQ7SUFBTSxNQUFNLEVBQUMsR0FBRztJQUFDLFNBQVMsRUFBQztFQUFrQixFQUFFLGVBQy9DO0lBQU0sTUFBTSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUM7RUFBa0IsRUFBRSxlQUNwRDtJQUFNLE1BQU0sRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQWtCLEVBQUUsZUFDcEQ7SUFBTSxNQUFNLEVBQUMsUUFBUTtJQUFDLFNBQVMsRUFBQztFQUFtQixFQUFFLGVBQ3JEO0lBQU0sTUFBTSxFQUFDLFFBQVE7SUFBQyxTQUFTLEVBQUM7RUFBbUIsRUFBRSxlQUNyRDtJQUFNLE1BQU0sRUFBQyxRQUFRO0lBQUMsU0FBUyxFQUFDO0VBQW1CLEVBQUUsQ0FDeEMsZUFDakI7SUFBUSxTQUFTLEVBQUMsbUJBQW1CO0lBQUMsRUFBRSxFQUFDLE9BQU87SUFBQyxFQUFFLEVBQUMsT0FBTztJQUFDLENBQUMsRUFBQztFQUFNLEVBQUUsQ0FDdEUsZUFFSjtJQUFRLFNBQVMsRUFBQyxtQkFBbUI7SUFBQyxFQUFFLEVBQUMsT0FBTztJQUFDLEVBQUUsRUFBQyxPQUFPO0lBQUMsQ0FBQyxFQUFDO0VBQUssRUFBRSxDQUVyRSxDQUVKLENBQ0YsQ0FDSixDQUNKLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVqQixJQUFJOzs7Ozs7OztVQ3ZMbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBGb3JtID0gKHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDUvY2FuZGlkYXRlc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKVxuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19mb3JtVGV4dGFyZWFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtX19mb3JtVGV4dGFyZWEtLXBcIj5XaHkgZG8geW91IHdhbnQgdG8gZ28gdG8gTWFycz88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYS0tdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2VXcmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIzMDdweFwiIGhlaWdodD1cIjI4M3B4XCIgaWQ9XCJyb2NrZXRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGcgY2xhc3NOYW1lPVwicm9ja2V0X3dyYXBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNDcuNVwiIGN5PVwiMTM4LjZcIiByPVwiMTA1LjVcIiBjbGFzc05hbWU9XCJpY29uX2NpcmNsZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGNsYXNzTmFtZT1cInJvY2tldF9pbm5lclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImZpcmUgZmlyZV9wYXRoXCIgaWQ9XCJmaXJlTWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNDguODkxLDE3OS45MDZjMy45MjgsMCw3LjExMSwzLjE3Niw3LjExMSw3LjA5NCBjMCw3Ljc4LTcuMTExLDE2LTcuMTExLDE2cy03LjExMS04LjM0OS03LjExMS0xNkMxNDEuNzgsMTgzLjA4MiwxNDQuOTYzLDE3OS45MDYsMTQ4Ljg5MSwxNzkuOTA2elwiLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cImZpcmVfcGF0aCBmaXJlXCIgaWQ9XCJmaXJlUmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1NC4wNjMsMTgxLjA5MmMzLjU3Ny0xLjYyNCw3Ljc4OC0wLjA0OCw5LjQwOCwzLjUyIGMzLjIxNiw3LjA4NCwwLjEzOSwxNy41MDgsMC4xMzksMTcuNTA4cy05LjkyNy00LjY2Mi0xMy4wOS0xMS42M0MxNDguOSwxODYuOTIzLDE1MC40ODcsMTgyLjcxNSwxNTQuMDYzLDE4MS4wOTJ6XCIvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiZmlyZV9wYXRoIGZpcmVcIiBpZD1cImZpcmVMZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNDMuMzkyLDE4Mi41MTljMy4yNSwyLjIwNyw0LjA5OCw2LjYyMywxLjg5Niw5Ljg2NCBjLTQuMzcyLDYuNDM2LTE0Ljg3Myw5LjIzOC0xNC44NzMsOS4yMzhzLTEuMTkxLTEwLjkwMiwzLjEwOC0xNy4yM0MxMzUuNzI1LDE4MS4xNDksMTQwLjE0MywxODAuMzEyLDE0My4zOTIsMTgyLjUxOXpcIi8+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzc05hbWU9XCJmaXJlX3BhdGggZmlyZVwiIGlkPVwiZmlyZVNtYWxsTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTQzLjE5MyAxODcuNTMxYzIuMjI2IDAuNCAzLjcgMi42IDMuMiA0LjggYy0wLjg3NSA0LjQwNy01LjgyOSA4LjI2NC01LjgyOSA4LjI2NHMtMy4wOS01LjUzLTIuMjI5LTkuODY1QzEzOC44MDcgMTg4LjUgMTQxIDE4Ny4xIDE0My4yIDE4Ny41MzF6XCIvPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwiZmlyZV9wYXRoIGZpcmVcIiBpZD1cImZpcmVTbWFsbFJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNTIuMDg5IDE4OC41OTljMi4wNDMtMC45ODUgNC40OTYtMC4xMzIgNS41IDEuOSBjMS45NTIgNCAwLjMgMTAuMSAwLjMgMTAuMTA3cy01Ljc5NS0yLjU2LTcuNzEzLTYuNTQxQzE0OS4xODYgMTkyIDE1MCAxODkuNiAxNTIuMSAxODguNTk5elwiLz5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cInJvY2tldF9ib3R0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE1Ny4wNjkgMTcxLjMxaC0zLjI5MmMtMS41NjItMC4wNDgtMy4xNzgtMC4wNzYtNC44NDYtMC4wNzYgcy0zLjI4NCAwLjAyOC00Ljg0NiAwLjA3NmgtMy4yOTJjLTcuMjc3LTcuOTM4LTEyLjM3MS0yNi4xODItMTIuMzcxLTQ3LjQzNGMwLTI4LjU0IDkuMTgyLTUxLjY3NiAyMC41MDgtNTEuNjc2IGMxMS4zMjcgMCAyMC41IDIzLjEgMjAuNSA1MS42NzZDMTY5LjQ0IDE0NS4xIDE2NC4zIDE2My40IDE1Ny4xIDE3MS4zMXpcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJyaWdodF93aW5nX3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIndpbmdfYmFzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE2Ni42NzggMTI3LjE2MWMwIDAgMTcuNyAzLjMgMTIuOSA0OC4wOTlsLTE4LjA2LTE0LjA1IEwxNjYuNjc4IDEyNy4xNjF6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwid2luZ19zaGFkb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNTguMjI1IDE0MC4zMzZjMTAuNDgxLTUuNTg0IDIyLjcgMjIuMiAyMS40IDM0LjkgbC0xOC4wNi0xNC4wNUMxNjEuNTQyIDE2MS4yIDE1Ni4xIDE0NC4zIDE1OC4yIDE0MC4zMzZ6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9XCJsZWZ0X3dpbmdfd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwid2luZ19iYXNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTM1LjEzMSAxNjEuMjFsLTE4LjA2IDE0LjEgYy00LjgwNS00NC43OTMgMTIuOTI0LTQ4LjA5OSAxMi45MjQtNDguMDk5TDEzNS4xMzEgMTYxLjIxelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzTmFtZT1cIndpbmdfc2hhZG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMTM1LjEzMSAxNjEuMjFsLTE4LjA2IDE0LjEgYy0xLjM2Ny0xMi43NDYgMTAuODk2LTQwLjUwOSAyMS4zNzctMzQuOTI0QzE0MC42MTQgMTQ0LjMgMTM1LjEgMTYxLjIgMTM1LjEgMTYxLjIxelwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwicm9ja2V0X2JvZHlfd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicm9ja2V0X2Jhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0xNjIuNzI4IDE2Ny4zNThjLTMuNzc4LTAuNjIzLTguNTczLTAuOTk2LTEzLjc5Ni0wLjk5NiBzLTEwLjAxOCAwLjM3My0xMy43OTUgMC45OTZjLTUuMDMzLTEwLjE4Ni04LjI1Ny0yNS44MDgtOC4yNTctNDMuMzM4YzAtMzAuNjg4IDkuODczLTU1LjU2NiAyMi4wNTItNTUuNTY2IHMyMi4wNTMgMjQuOSAyMi4xIDU1LjU2NkMxNzAuOTg0IDE0MS42IDE2Ny44IDE1Ny4yIDE2Mi43IDE2Ny4zNTh6XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3NOYW1lPVwicm9ja2V0X3NoYWRvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTE0NS40NjQgMTY2LjQxN2MxOS41NzgtNDAuNTc1IDcuMjYtODUuMjI5IDQuMTEyLTk4LjA2NyBjMTEuODggMC45IDIxLjQgMjUuNCAyMS40IDU1LjUyNWMwIDE3LjUyOS0zLjIyNSAzMy4xNTItOC4yNTcgNDMuMzM3YzAgMC0zLjc4Ni0wLjQ3Mi04LjA2OS0wLjY5NyBTMTQ1LjQ2NCAxNjYuNCAxNDUuNSAxNjYuNDE3elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPVwibGFyZ2Vfd2luZG93X3dyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyYWRpYWxncmFkaWVudCBpZD1cIlNWR0lEXzJfXCIgY3g9XCIxNDguOVwiIGN5PVwiMTEyLjVcIiByPVwiMTUuMlwiIGZ4PVwiMTM5LjQ4NTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ5PVwiMTEyLjUyMzlcIiBncmFkaWVudHVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwXCIgY2xhc3NOYW1lPVwid2luZG93X2dyYW5kaWVudFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjU4NjhcIiBjbGFzc05hbWU9XCJ3aW5kb3dfZ3JhbmRpZW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuNjgzNFwiIGNsYXNzTmFtZT1cIndpbmRvd19ncmFuZGllbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42ODQ1XCIgY2xhc3NOYW1lPVwid2luZG93X2dyYW5kaWVudDFcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42ODYxXCIgY2xhc3NOYW1lPVwid2luZG93X2dyYW5kaWVudDJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC42ODk3XCIgY2xhc3NOYW1lPVwid2luZG93X2dyYW5kaWVudDNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JhZGlhbGdyYWRpZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBjbGFzc05hbWU9XCJsYXJnZV93aW5kb3dfcGF0aFwiIGN4PVwiMTQ4LjlcIiBjeT1cIjExMS4zXCIgcj1cIjEwLjVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGNsYXNzTmFtZT1cInNtYWxsX3dpbmRvd19wYXRoXCIgY3g9XCIxNDguOVwiIGN5PVwiMTMyLjRcIiByPVwiNS4yXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjliYjRkMDI0YTNkMTczYzFhOWRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNsb3NlUm91bmRlZEljb24iLCJGb3JtIiwicHJvcHMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsImZvcm0iLCJzZXRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJzdWIiLCJzZXRTdWIiLCJ0b2dnbGVGb3JtIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJkYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=