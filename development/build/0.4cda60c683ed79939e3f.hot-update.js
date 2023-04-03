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
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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



var Form1 = function Form1(props) {
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
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_1__.AppContext),
    candidates = _useContext.candidates,
    setCandidates = _useContext.setCandidates;
  var toggleForm = function toggleForm() {
    props.handleClose();
  };
  var handleSubmit = function handleSubmit(event) {
    /*        const data = {
                name: "Polonez",
                brand: "FSO"
            };*/

    fetch("http://localhost:3005/candidates", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.log(error);
    });
    event.preventDefault();
    setSub(true);
    var newCandidate = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      motivation: form.motivation
    };
    var newCandidates = candidates.map(function (el) {
      return _objectSpread(_objectSpread({}, el), {}, {
        iss: "dd"
      });
    });
    setCandidates([].concat(_toConsumableArray(candidates), [newCandidate]));
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
      toggleForm();
    }, 2500);
    console.log(newCandidates);
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
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "form__formInput",
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
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "close",
    fontSize: "large",
    onClick: props.handleClose
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form1);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6af1fa679d2ac171f8e3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBQyxTQUFPLENBQVMsZUFDNUQsMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUosS0FBSyxDQUFDa0I7RUFBWSxFQUM5RSxDQUNDLENBQ0wsQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZW5CLEtBQUs7Ozs7Ozs7O1VDbklwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0xLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSBcIi4vYXBwXCI7XG5cbmNvbnN0IEZvcm0xID0gKCBwcm9wcyApID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHNldEZvcm0oKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbi8qICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogXCJQb2xvbmV6XCIsXG4gICAgICAgICAgICBicmFuZDogXCJGU09cIlxuICAgICAgICB9OyovXG5cbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYW5kaWRhdGVzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLm1hcChlbCA9PntcbiAgICAgICAgICAgIHJldHVybnsuLi5lbCwgaXNzOiBcImRkXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIHNldENhbmRpZGF0ZXMoWy4uLmNhbmRpZGF0ZXMsIG5ld0NhbmRpZGF0ZV0pO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIH0sIDI1MDApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NhbmRpZGF0ZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fRmlyc3RTZWNvbmROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmFmMWZhNjc5ZDJhYzE3MWY4ZTNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiQXBwQ29udGV4dCIsIkZvcm0xIiwicHJvcHMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsImZvcm0iLCJzZXRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJzdWIiLCJzZXRTdWIiLCJjYW5kaWRhdGVzIiwic2V0Q2FuZGlkYXRlcyIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld0NhbmRpZGF0ZSIsIm5ld0NhbmRpZGF0ZXMiLCJtYXAiLCJlbCIsImlzcyIsInNldFRpbWVvdXQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=