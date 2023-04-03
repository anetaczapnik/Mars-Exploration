"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 50:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
var Form = function Form() {
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sub = _React$useState2[0],
    setSub = _React$useState2[1];
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
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
  var handleClose = function handleClose(event) {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "closeIcon",
    onClick: handleClose
  }, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Sign up now"), sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "firstName",
    onChange: handleChange,
    value: form.firstName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "lastName",
    onChange: handleChange,
    value: form.lastName || ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Sign up")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78563c46421b229b5732")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksRUFBQyxPQUFPO0lBQ1osUUFBUSxFQUFFZSxZQUFhO0lBQ3ZCLEtBQUssRUFBRVIsSUFBSSxDQUFDTixLQUFLLElBQUk7RUFBRyxFQUMxQixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsOEJBQTRCLENBQUksZUFDbkM7SUFDSSxJQUFJLEVBQUMsVUFBVTtJQUNmLElBQUksRUFBQyxTQUFTO0lBQ2QsUUFBUSxFQUFFYyxZQUFhO0lBQ3ZCLE9BQU8sRUFBRVIsSUFBSSxDQUFDTCxPQUFPLElBQUk7RUFBTSxFQUNqQyxDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFFaEM7SUFBVSxJQUFJLEVBQUMsWUFBWTtJQUFDLFFBQVEsRUFBRWEsWUFBYTtJQUFDLEtBQUssRUFBRVIsSUFBSSxDQUFDSixVQUFVLElBQUk7RUFBRyxFQUFHLENBQ3BGLENBQ0QsZUFDWDtJQUFRLElBQUksRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFTLENBQ25DLENBQ0w7QUFDVixDQUFDO0FBRUQsaUVBQWVHLElBQUk7Ozs7Ozs7O1VDeEduQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZm9ybVJlZHVjZXIgPSAoc3RhdGUsIGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnJlc2V0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC5uYW1lXTogZXZlbnQudmFsdWUsXG4gICAgfTtcbn07XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NoZWNrYm94ID0gZXZlbnQudGFyZ2V0LnR5cGUgPT09ICdjaGVja2JveCc7XG4gICAgICAgIHNldEZvcm0oe1xuICAgICAgICAgICAgbmFtZTogZXZlbnQudGFyZ2V0Lm5hbWUsXG4gICAgICAgICAgICB2YWx1ZTogaXNDaGVja2JveCA/IGV2ZW50LnRhcmdldC5jaGVja2VkIDogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2xvc2VJY29uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9Png8L3NwYW4+XG4gICAgICAgICAgICA8aDM+U2lnbiB1cCBub3c8L2gzPlxuICAgICAgICAgICAge3N1YiAmJiA8ZGl2PkJvb2tpbmcgYSBzZWF0Li4uPC9kaXY+fVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsIGFkZHJlc3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkhhdmUgeW91IGV2ZXIgYmVlbiB0byBzcGFjZT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aXNpdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm0udmlzaXRlZCB8fCBmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibW90aXZhdGlvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtmb3JtLm1vdGl2YXRpb24gfHwgJyd9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc4NTYzYzQ2NDIxYjIyOWI1NzMyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsImZvcm1SZWR1Y2VyIiwic3RhdGUiLCJldmVudCIsInJlc2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInZpc2l0ZWQiLCJtb3RpdmF0aW9uIiwibmFtZSIsInZhbHVlIiwiRm9ybSIsImZvcm0iLCJzZXRGb3JtIiwidXNlU3RhdGUiLCJzdWIiLCJzZXRTdWIiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrYm94IiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJoYW5kbGVDbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=