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



/*const formReducer = (state, event) => {
    if (event.reset) {
        return {
            firstName: '',
            lastName: '',
            email: '',
            motivation: '',
        };
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};*/

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
  var toggleForm = function toggleForm() {
    props.handleClose();
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    setSub(true);
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
      toggleForm();
    }, 2500);
    console.log(props.candidates);
  };

  /*const handleChange = (event) => {
      const { name, value } = event.target;
      setForm({
          name,
          value,
      });
  };
   const [sub, setSub] = useState(false);
   const toggleForm = () => {
      props.handleClose();
  }
   const handleSubmit = (e) => {
      e.preventDefault();
       const newCandidate = {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          motivation: form.motivation,
      }
       const newCandidates = [...props.candidates, newCandidate];
      props.setCandidates(newCandidates);
       console.log(props.candidates);
       setSub(true);
       setTimeout(() => {
          setSub(false);
          setForm({ reset: true });
          toggleForm()
      }, 2500);
  };*/

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
/******/ 	__webpack_require__.h = () => ("01965d2a697dc1d0cedb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEI7SUFDSSxTQUFTLEVBQUMsaUJBQWlCO0lBQzNCLElBQUksRUFBQyxPQUFPO0lBQ1osSUFBSSxFQUFDLE9BQU87SUFDWixRQUFRLEVBQUVLLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNGLEtBQUssSUFBSTtFQUFHLEVBQzFCLENBQ0UsQ0FDTixlQUNOLHVGQUNJLHNFQUFHLDJCQUF5QixDQUFJLGVBQ2hDO0lBQ0ksU0FBUyxFQUFDLG9CQUFvQjtJQUM5QixJQUFJLEVBQUMsWUFBWTtJQUNqQixRQUFRLEVBQUVJLFlBQWE7SUFDdkIsS0FBSyxFQUFFRixJQUFJLENBQUNELFVBQVUsSUFBSTtFQUFHLEVBQy9CLENBQ0UsQ0FDRCxlQUNYO0lBQVEsU0FBUyxFQUFDLFdBQVc7SUFBQyxJQUFJLEVBQUM7RUFBUSxHQUFDLFNBQU8sQ0FBUyxlQUM1RCwyREFBQyx3RUFBZ0I7SUFBQyxTQUFTLEVBQUMsT0FBTztJQUFDLFFBQVEsRUFBQyxPQUFPO0lBQUMsT0FBTyxFQUFFSixLQUFLLENBQUNnQjtFQUFZLEVBQzlFLENBQ0MsQ0FDTCxDQUNKO0FBRWQsQ0FBQztBQUVELGlFQUFlakIsS0FBSzs7Ozs7Ozs7VUN2SnBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybTEuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbG9zZVJvdW5kZWRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VSb3VuZGVkJztcblxuLypjb25zdCBmb3JtUmVkdWNlciA9IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQucmVzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiAnJyxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtldmVudC5uYW1lXTogZXZlbnQudmFsdWUsXG4gICAgfTtcbn07Ki9cblxuY29uc3QgRm9ybTEgPSAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgICAgbGFzdE5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIG1vdGl2YXRpb246ICcnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgc2V0Rm9ybSgocHJldlN0YXRlKSA9PiAoe1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBbc3ViLCBzZXRTdWJdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgcHJvcHMuaGFuZGxlQ2xvc2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBzZXRTdWIodHJ1ZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIH0sIDI1MDApO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmNhbmRpZGF0ZXMpO1xuICAgIH07XG5cbiAgICAvKmNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHNldEZvcm0oe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgW3N1Yiwgc2V0U3ViXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHByb3BzLmhhbmRsZUNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld0NhbmRpZGF0ZSA9IHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogZm9ybS5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogZm9ybS5sYXN0TmFtZSxcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogZm9ybS5tb3RpdmF0aW9uLFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3Q2FuZGlkYXRlcyA9IFsuLi5wcm9wcy5jYW5kaWRhdGVzLCBuZXdDYW5kaWRhdGVdO1xuICAgICAgICBwcm9wcy5zZXRDYW5kaWRhdGVzKG5ld0NhbmRpZGF0ZXMpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLmNhbmRpZGF0ZXMpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1YihmYWxzZSk7XG4gICAgICAgICAgICBzZXRGb3JtKHsgcmVzZXQ6IHRydWUgfSk7XG4gICAgICAgICAgICB0b2dnbGVGb3JtKClcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfTsqL1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX0ZpcnN0U2Vjb25kTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDE5NjVkMmE2OTdkYzFkMGNlZGJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJDbG9zZVJvdW5kZWRJY29uIiwiRm9ybTEiLCJwcm9wcyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJtb3RpdmF0aW9uIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZTdGF0ZSIsInN1YiIsInNldFN1YiIsInRvZ2dsZUZvcm0iLCJoYW5kbGVDbG9zZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInJlc2V0IiwiY29uc29sZSIsImxvZyIsImNhbmRpZGF0ZXMiXSwic291cmNlUm9vdCI6IiJ9