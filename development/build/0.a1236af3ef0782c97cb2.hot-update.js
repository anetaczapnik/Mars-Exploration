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
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", {
    className: "form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Why do you want to go to Mars?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
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
/******/ 	__webpack_require__.h = () => ("5a70b9081841229ea2a9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7RUFBRyxFQUM3QixDQUNFLGVBQ1I7SUFBTyxTQUFTLEVBQUM7RUFBYyxnQkFDM0Isc0VBQUcsZUFBYSxDQUFJLGVBQ3BCO0lBQ0ksU0FBUyxFQUFDLGlCQUFpQjtJQUMzQixJQUFJLEVBQUMsT0FBTztJQUNaLElBQUksRUFBQyxPQUFPO0lBQ1osUUFBUSxFQUFFSyxZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDRixLQUFLLElBQUk7RUFBRyxFQUMxQixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsZ0NBQThCLENBQUksZUFDckM7SUFDSSxTQUFTLEVBQUMsb0JBQW9CO0lBQzlCLElBQUksRUFBQyxZQUFZO0lBQ2pCLFFBQVEsRUFBRUksWUFBYTtJQUN2QixLQUFLLEVBQUVGLElBQUksQ0FBQ0QsVUFBVSxJQUFJO0VBQUcsRUFDL0IsQ0FDRSxDQUNELGVBQ1g7SUFBUSxTQUFTLEVBQUMsV0FBVztJQUFDLElBQUksRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFTLGVBQzVELDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsUUFBUSxFQUFDLE9BQU87SUFBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQ2dCO0VBQVksRUFDOUUsQ0FDQyxDQUNMLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVqQixJQUFJOzs7Ozs7OztVQzlHbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBGb3JtID0gKHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDUvY2FuZGlkYXRlc2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKVxuICAgICAgICB9LCAyNTAwKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybV9fZmllbGRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlsbGVkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtX19maWVsZHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XaHkgZG8geW91IHdhbnQgdG8gZ28gdG8gTWFycz88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YTcwYjkwODE4NDEyMjllYTJhOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQ2xvc2VSb3VuZGVkSWNvbiIsIkZvcm0iLCJwcm9wcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJtb3RpdmF0aW9uIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsInN1YiIsInNldFN1YiIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==