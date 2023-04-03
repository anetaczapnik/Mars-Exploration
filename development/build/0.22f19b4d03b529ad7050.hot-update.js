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
    // fetch("http://localhost:3005/cars")
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("tgdgg",data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
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
    //
    // const newCandidates = [...props.candidates, newCandidate];
    // console.log("bjkb",props.candidates)

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
/******/ 	__webpack_require__.h = () => ("e74cf90813b16a9a9837")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDOUIsSUFBSSxFQUFDLFlBQVk7SUFDakIsUUFBUSxFQUFFSSxZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDRCxVQUFVLElBQUk7RUFBRyxFQUMvQixDQUNFLENBQ0QsZUFDWDtJQUFRLFNBQVMsRUFBQyxXQUFXO0lBQUMsSUFBSSxFQUFDO0VBQVEsR0FBQyxTQUFPLENBQVMsZUFDNUQsMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUosS0FBSyxDQUFDa0I7RUFBWSxFQUM5RSxDQUNDLENBQ0wsQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZW5CLEtBQUs7Ozs7Ozs7O1VDakpwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0xLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSBcIi4vYXBwXCI7XG5cbmNvbnN0IEZvcm0xID0gKCBwcm9wcyApID0+IHtcbiAgICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHNldEZvcm0oKHByZXZTdGF0ZSkgPT4gKHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcblxuICAgICAgICAvLyBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYXJzXCIpXG4gICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC8vICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInRnZGdnXCIsZGF0YSk7XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IFwiUG9sb25lelwiLFxuICAgICAgICAgICAgYnJhbmQ6IFwiRlNPXCJcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDA1L2NhbmRpZGF0ZXNgLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FuZGlkYXRlID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmb3JtLmZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBmb3JtLmxhc3ROYW1lLFxuICAgICAgICAgICAgZW1haWw6IGZvcm0uZW1haWwsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBmb3JtLm1vdGl2YXRpb24sXG4gICAgICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGNvbnN0IG5ld0NhbmRpZGF0ZXMgPSBbLi4ucHJvcHMuY2FuZGlkYXRlcywgbmV3Q2FuZGlkYXRlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiamtiXCIscHJvcHMuY2FuZGlkYXRlcylcblxuICAgICAgICBjb25zdCBuZXdDYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5tYXAoZWwgPT57XG4gICAgICAgICAgICByZXR1cm57Li4uZWwsIGlzczogXCJkZFwifVxuICAgICAgICB9KVxuICAgICAgICBzZXRDYW5kaWRhdGVzKFsuLi5jYW5kaWRhdGVzLCBuZXdDYW5kaWRhdGVdKTtcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKVxuICAgICAgICB9LCAyNTAwKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhuZXdDYW5kaWRhdGVzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX0ZpcnN0U2Vjb25kTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTc0Y2Y5MDgxM2IxNmE5YTk4MzdcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiQXBwQ29udGV4dCIsIkZvcm0xIiwicHJvcHMiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwibW90aXZhdGlvbiIsImZvcm0iLCJzZXRGb3JtIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2U3RhdGUiLCJzdWIiLCJzZXRTdWIiLCJjYW5kaWRhdGVzIiwic2V0Q2FuZGlkYXRlcyIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJicmFuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByZXZlbnREZWZhdWx0IiwibmV3Q2FuZGlkYXRlIiwibmV3Q2FuZGlkYXRlcyIsIm1hcCIsImVsIiwiaXNzIiwic2V0VGltZW91dCIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==