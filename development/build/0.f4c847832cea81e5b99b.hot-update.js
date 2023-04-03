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
    var newCandidate = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      motivation: form.motivation
    };
    props.candidates.push(newCandidate);
    setTimeout(function () {
      setSub(false);
      setForm({
        reset: true
      });
      toggleForm();
    }, 2500);
  };
  console.log(props.candidates);
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
/******/ 	__webpack_require__.h = () => ("eec48f407a68907167a0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNGM4NDc4MzJjZWE4MWU1Yjk5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBS0MsS0FBSyxFQUFNO0VBQ3ZCLGdCQUF3QkgsK0NBQVEsQ0FBQztNQUM3QkksU0FBUyxFQUFFLEVBQUU7TUFDYkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsVUFBVSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztJQUFBO0lBTEtDLElBQUk7SUFBRUMsT0FBTztFQU9wQixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxLQUFLLEVBQUs7SUFDNUIsb0JBQXdCQSxLQUFLLENBQUNDLE1BQU07TUFBNUJDLElBQUksaUJBQUpBLElBQUk7TUFBRUMsS0FBSyxpQkFBTEEsS0FBSztJQUNuQkwsT0FBTyxDQUFDLFVBQUNNLFNBQVM7TUFBQSx1Q0FDWEEsU0FBUywyQkFDWEYsSUFBSSxFQUFHQyxLQUFLO0lBQUEsQ0FDZixDQUFDO0VBQ1AsQ0FBQztFQUVELGlCQUFzQmQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5QmdCLEdBQUc7SUFBRUMsTUFBTTtFQUVsQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0lBQ3JCZixLQUFLLENBQUNnQixXQUFXLEVBQUU7RUFDdkIsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlULEtBQUssRUFBSztJQUM1QkEsS0FBSyxDQUFDVSxjQUFjLEVBQUU7SUFFdEJKLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFFWixJQUFNSyxZQUFZLEdBQUc7TUFDakJsQixTQUFTLEVBQUVJLElBQUksQ0FBQ0osU0FBUztNQUN6QkMsUUFBUSxFQUFFRyxJQUFJLENBQUNILFFBQVE7TUFDdkJDLEtBQUssRUFBRUUsSUFBSSxDQUFDRixLQUFLO01BQ2pCQyxVQUFVLEVBQUVDLElBQUksQ0FBQ0Q7SUFDckIsQ0FBQztJQUVESixLQUFLLENBQUNvQixVQUFVLENBQUNDLElBQUksQ0FBQ0YsWUFBWSxDQUFDO0lBRW5DRyxVQUFVLENBQUMsWUFBTTtNQUNiUixNQUFNLENBQUMsS0FBSyxDQUFDO01BQ2JSLE9BQU8sQ0FBQztRQUFFaUIsS0FBSyxFQUFFO01BQUssQ0FBQyxDQUFDO01BQ3hCUixVQUFVLEVBQUU7SUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaLENBQUM7RUFFRFMsT0FBTyxDQUFDQyxHQUFHLENBQUN6QixLQUFLLENBQUNvQixVQUFVLENBQUM7RUFFN0Isb0JBQ0k7SUFBSyxTQUFTLEVBQUM7RUFBZ0IsZ0JBQzNCO0lBQUssU0FBUyxFQUFDO0VBQWEsR0FDdkJQLEdBQUcsaUJBQUk7SUFBSyxTQUFTLEVBQUM7RUFBUyxHQUFDLG1CQUFpQixDQUFNLGVBQ3hEO0lBQU0sUUFBUSxFQUFFSTtFQUFhLGdCQUN6QjtJQUFVLFNBQVMsRUFBQztFQUFNLGdCQUN0QjtJQUFLLFNBQVMsRUFBQztFQUF1QixnQkFDbEMsdUZBQ0ksc0VBQUcsWUFBVSxDQUFJLGVBQ2pCO0lBQ0ksU0FBUyxFQUFDLGlCQUFpQjtJQUMzQixFQUFFLEVBQUMsZ0JBQWdCO0lBQ25CLElBQUksRUFBQyxNQUFNO0lBQ1gsSUFBSSxFQUFDLFdBQVc7SUFDaEIsUUFBUSxFQUFFVixZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDSixTQUFTLElBQUk7RUFBRyxFQUM5QixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsV0FBUyxDQUFJLGVBQ2hCO0lBQ0ksU0FBUyxFQUFDLGlCQUFpQjtJQUMzQixFQUFFLEVBQUMsY0FBYztJQUNqQixJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxVQUFVO0lBQ2YsUUFBUSxFQUFFTSxZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDSCxRQUFRLElBQUk7RUFBRyxFQUM3QixDQUNFLGVBQ1IsdUZBQ0ksc0VBQUcsZUFBYSxDQUFJLGVBQ3BCO0lBQ0ksU0FBUyxFQUFDLGlCQUFpQjtJQUMzQixJQUFJLEVBQUMsT0FBTztJQUNaLElBQUksRUFBQyxPQUFPO0lBQ1osUUFBUSxFQUFFSyxZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDRixLQUFLLElBQUk7RUFBRyxFQUMxQixDQUNFLENBQ04sZUFDTix1RkFDSSxzRUFBRywyQkFBeUIsQ0FBSSxlQUNoQztJQUNJLFNBQVMsRUFBQyxvQkFBb0I7SUFDOUIsSUFBSSxFQUFDLFlBQVk7SUFDakIsUUFBUSxFQUFFSSxZQUFhO0lBQ3ZCLEtBQUssRUFBRUYsSUFBSSxDQUFDRCxVQUFVLElBQUk7RUFBRyxFQUMvQixDQUNFLENBQ0QsZUFDWDtJQUFRLFNBQVMsRUFBQyxXQUFXO0lBQUMsSUFBSSxFQUFDO0VBQVEsR0FBQyxTQUFPLENBQVMsZUFDNUQsMkRBQUMsd0VBQWdCO0lBQUMsU0FBUyxFQUFDLE9BQU87SUFBQyxRQUFRLEVBQUMsT0FBTztJQUFDLE9BQU8sRUFBRUosS0FBSyxDQUFDZ0I7RUFBWSxFQUM5RSxDQUNDLENBQ0wsQ0FDSjtBQUVkLENBQUM7QUFFRCxpRUFBZWpCLEtBQUs7Ozs7Ozs7O1VDM0dwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL0Zvcm0xLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBGb3JtMSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHNldFN1Yih0cnVlKTtcblxuICAgICAgICBjb25zdCBuZXdDYW5kaWRhdGUgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZvcm0uZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGZvcm0ubGFzdE5hbWUsXG4gICAgICAgICAgICBlbWFpbDogZm9ybS5lbWFpbCxcbiAgICAgICAgICAgIG1vdGl2YXRpb246IGZvcm0ubW90aXZhdGlvbixcbiAgICAgICAgfTtcblxuICAgICAgICBwcm9wcy5jYW5kaWRhdGVzLnB1c2gobmV3Q2FuZGlkYXRlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFN1YihmYWxzZSk7XG4gICAgICAgICAgICBzZXRGb3JtKHsgcmVzZXQ6IHRydWUgfSk7XG4gICAgICAgICAgICB0b2dnbGVGb3JtKClcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHByb3BzLmNhbmRpZGF0ZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtQmFja2dyb3VuZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIHtzdWIgJiYgPGRpdiBjbGFzc05hbWU9XCJib29raW5nXCI+Qm9va2luZyBhIHNlYXQuLi48L2Rpdj59XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX0ZpcnN0U2Vjb25kTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Rmlyc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxhc3QgbmFtZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaWxsZWQtYmFzaWNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWwgYWRkcmVzczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtX19mb3JtSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWwgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldoeSBzaG91bGQgd2UgY2hvb3NlIFlPVT88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1UZXh0YXJlYVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb3RpdmF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubW90aXZhdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdG5cIiB0eXBlPVwic3VibWl0XCI+U2lnbiB1cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Q2xvc2VSb3VuZGVkSWNvbiBjbGFzc05hbWU9XCJjbG9zZVwiIGZvbnRTaXplPVwibGFyZ2VcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTE7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWVjNDhmNDA3YTY4OTA3MTY3YTBcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNsb3NlUm91bmRlZEljb24iLCJGb3JtMSIsInByb3BzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldlN0YXRlIiwic3ViIiwic2V0U3ViIiwidG9nZ2xlRm9ybSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJuZXdDYW5kaWRhdGUiLCJjYW5kaWRhdGVzIiwicHVzaCIsInNldFRpbWVvdXQiLCJyZXNldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9