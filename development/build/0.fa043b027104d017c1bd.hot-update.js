"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sub = _React$useState2[0],
    setSub = _React$useState2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
    }, 2500);
    toggleForm();
  };
  var handleChange = function handleChange(event) {
    var isCheckbox = event.target.type === 'checkbox';
    setForm({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "formWrapper"
  }, sub && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Booking a seat..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("fieldset", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "submit",
    variant: "contained"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    onClick: props.handleClose
  }, " X ")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("54d9df1a0fb82e779ddc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mYTA0M2IwMjcxMDRkMDE3YzFiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1I7QUFDSztBQUUvQyxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxDQUFJQyxLQUFLLEVBQUVDLEtBQUssRUFBSztFQUNsQyxJQUFJQSxLQUFLLENBQUNDLEtBQUssRUFBRTtJQUNiLE9BQU87TUFDSEMsU0FBUyxFQUFFLEVBQUU7TUFDYkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsT0FBTyxFQUFFLEtBQUs7TUFDZEMsVUFBVSxFQUFFO0lBQ2hCLENBQUM7RUFDTDtFQUNBLHVDQUNPUCxLQUFLLDJCQUNQQyxLQUFLLENBQUNPLElBQUksRUFBR1AsS0FBSyxDQUFDUSxLQUFLO0FBRWpDLENBQUM7QUFFRCxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBSSxDQUFLQyxLQUFLLEVBQU07RUFDdEIsa0JBQXdCaEIsaURBQVUsQ0FBQ0ksV0FBVyxFQUFFO01BQzVDSSxTQUFTLEVBQUUsRUFBRTtNQUNiQyxRQUFRLEVBQUUsRUFBRTtNQUNaQyxLQUFLLEVBQUUsRUFBRTtNQUNUQyxPQUFPLEVBQUUsS0FBSztNQUNkQyxVQUFVLEVBQUU7SUFDaEIsQ0FBQyxDQUFDO0lBQUE7SUFOS0ssSUFBSTtJQUFFQyxPQUFPO0VBUXBCLHNCQUFzQm5CLHFEQUFjLENBQUMsS0FBSyxDQUFDO0lBQUE7SUFBcENvQixHQUFHO0lBQUVDLE1BQU07RUFFbEIsZ0JBQTRCbkIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQTtJQUFuQ29CLE1BQU07SUFBRUMsU0FBUztFQUV4QixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0lBQ3JCRCxTQUFTLENBQUMsQ0FBQ0QsTUFBTSxDQUFDO0VBQ3RCLENBQUM7RUFFRCxJQUFNRyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJbEIsS0FBSyxFQUFLO0lBQzVCQSxLQUFLLENBQUNtQixjQUFjLEVBQUU7SUFDdEJMLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFFWk0sVUFBVSxDQUFDLFlBQU07TUFDYk4sTUFBTSxDQUFDLEtBQUssQ0FBQztNQUNiRixPQUFPLENBQUM7UUFBRVgsS0FBSyxFQUFFO01BQUssQ0FBQyxDQUFDO0lBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFUmdCLFVBQVUsRUFBRTtFQUNoQixDQUFDO0VBRUQsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQVksQ0FBSXJCLEtBQUssRUFBSztJQUM1QixJQUFNc0IsVUFBVSxHQUFHdEIsS0FBSyxDQUFDdUIsTUFBTSxDQUFDQyxJQUFJLEtBQUssVUFBVTtJQUNuRFosT0FBTyxDQUFDO01BQ0pMLElBQUksRUFBRVAsS0FBSyxDQUFDdUIsTUFBTSxDQUFDaEIsSUFBSTtNQUN2QkMsS0FBSyxFQUFFYyxVQUFVLEdBQUd0QixLQUFLLENBQUN1QixNQUFNLENBQUNFLE9BQU8sR0FBR3pCLEtBQUssQ0FBQ3VCLE1BQU0sQ0FBQ2Y7SUFDNUQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQWEsR0FDdkJLLEdBQUcsaUJBQUksd0VBQUssbUJBQWlCLENBQU0sZUFDcEM7SUFBTSxRQUFRLEVBQUVLO0VBQWEsZ0JBQ3pCLDBGQUNJLHVGQUNJLHNFQUFHLFlBQVUsQ0FBSSxlQUNqQiwyREFBQywrREFBUztJQUNOLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLFdBQVc7SUFDaEIsUUFBUSxFQUFFRyxZQUFhO0lBQ3ZCLEtBQUssRUFBRVYsSUFBSSxDQUFDVCxTQUFTLElBQUk7RUFBRyxFQUM5QixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsV0FBUyxDQUFJLGVBQ2hCO0lBQ0ksSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsVUFBVTtJQUNmLFFBQVEsRUFBRW1CLFlBQWE7SUFDdkIsS0FBSyxFQUFFVixJQUFJLENBQUNSLFFBQVEsSUFBSTtFQUFHLEVBQzdCLENBQ0UsZUFDUix1RkFDSSxzRUFBRyxlQUFhLENBQUksZUFDcEI7SUFDSSxJQUFJLEVBQUMsT0FBTztJQUNaLElBQUksRUFBQyxPQUFPO0lBQ1osUUFBUSxFQUFFa0IsWUFBYTtJQUN2QixLQUFLLEVBQUVWLElBQUksQ0FBQ1AsS0FBSyxJQUFJO0VBQUcsRUFDMUIsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLDhCQUE0QixDQUFJLGVBQ25DO0lBQ0ksSUFBSSxFQUFDLFVBQVU7SUFDZixJQUFJLEVBQUMsU0FBUztJQUNkLFFBQVEsRUFBRWlCLFlBQWE7SUFDdkIsT0FBTyxFQUFFVixJQUFJLENBQUNOLE9BQU8sSUFBSTtFQUFNLEVBQ2pDLENBQ0UsZUFDUix1RkFDSSxzRUFBRywyQkFBeUIsQ0FBSSxlQUVoQztJQUFVLElBQUksRUFBQyxZQUFZO0lBQUMsUUFBUSxFQUFFZ0IsWUFBYTtJQUFDLEtBQUssRUFBRVYsSUFBSSxDQUFDTCxVQUFVLElBQUk7RUFBRyxFQUFHLENBQ3BGLENBQ0QsZUFDUCwyREFBQyw0REFBTTtJQUFDLElBQUksRUFBQyxRQUFRO0lBQUMsT0FBTyxFQUFDO0VBQVcsR0FBQyxTQUFPLENBQVMsZUFDMUQ7SUFBRyxPQUFPLEVBQUVJLEtBQUssQ0FBQ2dCO0VBQVksR0FBQyxLQUFHLENBQUksQ0FDdkMsQ0FDTDtBQUNWLENBQUM7QUFFRCxpRUFBZWpCLElBQUk7Ozs7Ozs7O1VDOUduQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJ1xuXG5jb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICB2aXNpdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2V2ZW50Lm5hbWVdOiBldmVudC52YWx1ZSxcbiAgICB9O1xufTtcblxuY29uc3QgRm9ybSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlUmVkdWNlcihmb3JtUmVkdWNlciwge1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgdmlzaXRlZDogZmFsc2UsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U3ViKGZhbHNlKTtcbiAgICAgICAgICAgIHNldEZvcm0oeyByZXNldDogdHJ1ZSB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG5cbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgaXNDaGVja2JveCA9IGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnO1xuICAgICAgICBzZXRGb3JtKHtcbiAgICAgICAgICAgIG5hbWU6IGV2ZW50LnRhcmdldC5uYW1lLFxuICAgICAgICAgICAgdmFsdWU6IGlzQ2hlY2tib3ggPyBldmVudC50YXJnZXQuY2hlY2tlZCA6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVdyYXBwZXJcIj5cbiAgICAgICAgICAgIHtzdWIgJiYgPGRpdj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5MYXN0IG5hbWU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SGF2ZSB5b3UgZXZlciBiZWVuIHRvIHNwYWNlPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpc2l0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Zm9ybS52aXNpdGVkIHx8IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJtb3RpdmF0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ30gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+U2lnbiB1cDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfT4gWCA8L3A+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj4pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU0ZDlkZjFhMGZiODJlNzc5ZGRjXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiQnV0dG9uIiwiVGV4dEZpZWxkIiwiZm9ybVJlZHVjZXIiLCJzdGF0ZSIsImV2ZW50IiwicmVzZXQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwidmlzaXRlZCIsIm1vdGl2YXRpb24iLCJuYW1lIiwidmFsdWUiLCJGb3JtIiwicHJvcHMiLCJmb3JtIiwic2V0Rm9ybSIsInN1YiIsInNldFN1YiIsImlzT3BlbiIsInNldElzT3BlbiIsInRvZ2dsZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRpbWVvdXQiLCJoYW5kbGVDaGFuZ2UiLCJpc0NoZWNrYm94IiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJoYW5kbGVDbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=