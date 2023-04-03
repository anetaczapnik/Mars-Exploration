"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_CloseRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
      firstName: "Anna",
      lastName: "Kowalik",
      email: "anna.kowalik@wp.pl",
      motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
    }, {
      firstName: "Katarzyna",
      lastName: "Piotrowska",
      email: "k.piotrowska@onet.pl",
      motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
    }, {
      firstName: "Marcin",
      lastName: "Mulicki",
      email: "mm2589@wp.pl",
      motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
    }, {
      firstName: "Adam",
      lastName: "Wolecki",
      email: "a.woleckik@onet.pl",
      motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
    }]),
    _useState6 = _slicedToArray(_useState5, 2),
    array = _useState6[0],
    setArray = _useState6[1];
  var toggleForm = function toggleForm() {
    props.handleClose();
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    var newCandidate = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      motivation: form.motivation
    };
    //
    // const newCandidates = [...props.candidates, newCandidate];
    // console.log("bjkb",props.candidates)

    var newTab = array.map(function (el) {
      return _objectSpread(_objectSpread({}, el), {}, {
        iss: "dd"
      });
    });
    setArray([].concat(_toConsumableArray(props.candidates), [newCandidate]));

    // setTimeout(() => {
    //     setSub(false);
    //     setForm({ reset: true });
    //     toggleForm()
    // }, 2500);

    // console.log(newCandidates);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form1);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4309deefe00ee40c6c48")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDOUUsQ0FDQyxDQUNMLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVuQixLQUFLOzs7Ozs7OztVQzVJcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Gb3JtMS5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcblxuY29uc3QgRm9ybTEgPSAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthcnJheSwgc2V0QXJyYXldID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQW5uYVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiS293YWxpa1wiLFxuICAgICAgICAgICAgZW1haWw6IFwiYW5uYS5rb3dhbGlrQHdwLnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJLYXRhcnp5bmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIlBpb3Ryb3dza2FcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImsucGlvdHJvd3NrYUBvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJNYXJjaW5cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIk11bGlja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIm1tMjU4OUB3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQWRhbVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiV29sZWNraVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiYS53b2xlY2tpa0BvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICBjb25zdCBuZXdDYW5kaWRhdGUgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZvcm0uZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGZvcm0ubGFzdE5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZm9ybS5lbWFpbCxcbiAgICAgICAgICAgIG1vdGl2YXRpb246IGZvcm0ubW90aXZhdGlvbixcbiAgICAgICAgfTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgbmV3Q2FuZGlkYXRlcyA9IFsuLi5wcm9wcy5jYW5kaWRhdGVzLCBuZXdDYW5kaWRhdGVdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJqa2JcIixwcm9wcy5jYW5kaWRhdGVzKVxuXG4gICAgICAgIGNvbnN0IG5ld1RhYiA9IGFycmF5Lm1hcChlbCA9PntcbiAgICAgICAgICAgIHJldHVybnsuLi5lbCwgaXNzOiBcImRkXCJ9XG4gICAgICAgIH0pXG4gICAgICAgIHNldEFycmF5KFsuLi5wcm9wcy5jYW5kaWRhdGVzLCBuZXdDYW5kaWRhdGVdKTtcblxuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgLy8gICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgLy8gICAgIHRvZ2dsZUZvcm0oKVxuICAgICAgICAvLyB9LCAyNTAwKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdDYW5kaWRhdGVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX0ZpcnN0U2Vjb25kTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDMwOWRlZWZlMDBlZTQwYzZjNDhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNsb3NlUm91bmRlZEljb24iLCJGb3JtMSIsInByb3BzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldlN0YXRlIiwic3ViIiwic2V0U3ViIiwiYXJyYXkiLCJzZXRBcnJheSIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwibmV3Q2FuZGlkYXRlIiwibmV3VGFiIiwibWFwIiwiZWwiLCJpc3MiLCJjYW5kaWRhdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==