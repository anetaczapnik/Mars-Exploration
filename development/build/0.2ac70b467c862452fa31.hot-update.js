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
    var data = {
      name: "Polonez",
      brand: "FSO"
    };
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
/******/ 	__webpack_require__.h = () => ("78c5633c793ffeea8cf8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGLElBQUksQ0FBQ0QsVUFBVSxJQUFJO0VBQUcsRUFDL0IsQ0FDRSxDQUNELGVBQ1g7SUFBUSxTQUFTLEVBQUMsV0FBVztJQUFDLElBQUksRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFTLGVBQzVELDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsUUFBUSxFQUFDLE9BQU87SUFBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQ2tCO0VBQVksRUFDOUUsQ0FDQyxDQUNMLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVuQixLQUFLOzs7Ozs7OztVQ3JJcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtMS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xvc2VSb3VuZGVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlUm91bmRlZCc7XG5pbXBvcnQge0FwcENvbnRleHR9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBGb3JtMSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB7Y2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlc30gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHByb3BzLmhhbmRsZUNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBuYW1lOiBcIlBvbG9uZXpcIixcbiAgICAgICAgICAgIGJyYW5kOiBcIkZTT1wiXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYW5kaWRhdGVzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLm1hcChlbCA9PntcbiAgICAgICAgICAgIHJldHVybnsuLi5lbCwgaXNzOiBcImRkXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIHNldENhbmRpZGF0ZXMoWy4uLmNhbmRpZGF0ZXMsIG5ld0NhbmRpZGF0ZV0pO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIH0sIDI1MDApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld0NhbmRpZGF0ZXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fRmlyc3RTZWNvbmROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybVRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdGl2YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZVJvdW5kZWRJY29uIGNsYXNzTmFtZT1cImNsb3NlXCIgZm9udFNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtMTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3OGM1NjMzYzc5M2ZmZWVhOGNmOFwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNsb3NlUm91bmRlZEljb24iLCJBcHBDb250ZXh0IiwiRm9ybTEiLCJwcm9wcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJtb3RpdmF0aW9uIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsInN1YiIsInNldFN1YiIsImNhbmRpZGF0ZXMiLCJzZXRDYW5kaWRhdGVzIiwidG9nZ2xlRm9ybSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsImJyYW5kIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJuZXdDYW5kaWRhdGUiLCJuZXdDYW5kaWRhdGVzIiwibWFwIiwiZWwiLCJpc3MiLCJzZXRUaW1lb3V0IiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9