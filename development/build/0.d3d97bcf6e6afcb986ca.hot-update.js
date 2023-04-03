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
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.log(error);
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

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);







/*export const AppContext = createContext(null);*/

var App = function App() {
  /*    const [candidates, setCandidates] = useState([
          {
              firstName: "Anna",
              lastName: "Kowalik",
              email: "anna.kowalik@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Katarzyna",
              lastName: "Piotrowska",
              email: "k.piotrowska@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Marcin",
              lastName: "Mulicki",
              email: "mm2589@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Adam",
              lastName: "Wolecki",
              email: "a.woleckik@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
      ]);*/

  return (
    /*#__PURE__*/
    /*        <AppContext.Provider value={{candidates, setCandidates}}>*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null))
    /*        </AppContext.Provider>*/
  );
};

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8b8ac47125ed447e1b5e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kM2Q5N2JjZjZlNmFmY2I5ODZjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDd0I7QUFFaEUsSUFBTUcsS0FBSyxHQUFHLFNBQVJBLEtBQUssQ0FBS0MsS0FBSyxFQUFNO0VBQ3ZCLGdCQUF3QkgsK0NBQVEsQ0FBQztNQUM3QkksU0FBUyxFQUFFLEVBQUU7TUFDYkMsUUFBUSxFQUFFLEVBQUU7TUFDWkMsS0FBSyxFQUFFLEVBQUU7TUFDVEMsVUFBVSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztJQUFBO0lBTEtDLElBQUk7SUFBRUMsT0FBTztFQU9wQixJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBWSxDQUFJQyxLQUFLLEVBQUs7SUFDNUIsb0JBQXdCQSxLQUFLLENBQUNDLE1BQU07TUFBNUJDLElBQUksaUJBQUpBLElBQUk7TUFBRUMsS0FBSyxpQkFBTEEsS0FBSztJQUNuQkwsT0FBTyxDQUFDLFVBQUNNLFNBQVM7TUFBQSx1Q0FDWEEsU0FBUywyQkFDWEYsSUFBSSxFQUFHQyxLQUFLO0lBQUEsQ0FDZixDQUFDO0VBQ1AsQ0FBQztFQUVELGlCQUFzQmQsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUE5QmdCLEdBQUc7SUFBRUMsTUFBTTtFQUVsQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBVSxHQUFTO0lBQ3JCZixLQUFLLENBQUNnQixXQUFXLEVBQUU7RUFDdkIsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZLENBQUlULEtBQUssRUFBSztJQUM1QixJQUFNVSxJQUFJLEdBQUc7TUFDVGpCLFNBQVMsRUFBRUksSUFBSSxDQUFDSixTQUFTO01BQ3pCQyxRQUFRLEVBQUVHLElBQUksQ0FBQ0gsUUFBUTtNQUN2QkMsS0FBSyxFQUFFRSxJQUFJLENBQUNGLEtBQUs7TUFDakJDLFVBQVUsRUFBRUMsSUFBSSxDQUFDRDtJQUNyQixDQUFDO0lBRURlLEtBQUsscUNBQXFDO01BQ3RDQyxNQUFNLEVBQUUsTUFBTTtNQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxJQUFJLENBQUM7TUFDMUJNLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRTtNQUNwQjtJQUNKLENBQUMsQ0FBQyxDQUNHQyxJQUFJLENBQUMsVUFBQUMsUUFBUTtNQUFBLE9BQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0lBQUEsRUFBQyxDQUNqQ0YsSUFBSSxDQUFDLFVBQUFQLElBQUksRUFBSTtNQUNWVSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsSUFBSSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQVksS0FBSyxFQUFJO01BQ1pGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxLQUFLLENBQUM7SUFDdEIsQ0FBQyxDQUFDO0lBRU50QixLQUFLLENBQUN1QixjQUFjLEVBQUU7SUFFdEJqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBR1prQixVQUFVLENBQUMsWUFBTTtNQUNibEIsTUFBTSxDQUFDLEtBQUssQ0FBQztNQUNiUixPQUFPLENBQUM7UUFBRTJCLEtBQUssRUFBRTtNQUFLLENBQUMsQ0FBQztNQUN4QmxCLFVBQVUsRUFBRTtJQUNoQixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1osQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQWdCLGdCQUMzQjtJQUFLLFNBQVMsRUFBQztFQUFhLEdBQ3ZCRixHQUFHLGlCQUFJO0lBQUssU0FBUyxFQUFDO0VBQVMsR0FBQyxtQkFBaUIsQ0FBTSxlQUN4RDtJQUFNLFFBQVEsRUFBRUk7RUFBYSxnQkFDekI7SUFBVSxTQUFTLEVBQUM7RUFBTSxnQkFDdEI7SUFBSyxTQUFTLEVBQUM7RUFBdUIsZ0JBQ2xDLHVGQUNJLHNFQUFHLFlBQVUsQ0FBSSxlQUNqQjtJQUNJLFNBQVMsRUFBQyxpQkFBaUI7SUFDM0IsRUFBRSxFQUFDLGdCQUFnQjtJQUNuQixJQUFJLEVBQUMsTUFBTTtJQUNYLElBQUksRUFBQyxXQUFXO0lBQ2hCLFFBQVEsRUFBRVYsWUFBYTtJQUN2QixLQUFLLEVBQUVGLElBQUksQ0FBQ0osU0FBUyxJQUFJO0VBQUcsRUFDOUIsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLFdBQVMsQ0FBSSxlQUNoQjtJQUNJLFNBQVMsRUFBQyxpQkFBaUI7SUFDM0IsRUFBRSxFQUFDLGNBQWM7SUFDakIsSUFBSSxFQUFDLE1BQU07SUFDWCxJQUFJLEVBQUMsVUFBVTtJQUNmLFFBQVEsRUFBRU0sWUFBYTtJQUN2QixLQUFLLEVBQUVGLElBQUksQ0FBQ0gsUUFBUSxJQUFJO0VBQUcsRUFDN0IsQ0FDRSxlQUNSLHVGQUNJLHNFQUFHLGVBQWEsQ0FBSSxlQUNwQjtJQUNJLFNBQVMsRUFBQyxpQkFBaUI7SUFDM0IsSUFBSSxFQUFDLE9BQU87SUFDWixJQUFJLEVBQUMsT0FBTztJQUNaLFFBQVEsRUFBRUssWUFBYTtJQUN2QixLQUFLLEVBQUVGLElBQUksQ0FBQ0YsS0FBSyxJQUFJO0VBQUcsRUFDMUIsQ0FDRSxDQUNOLGVBQ04sdUZBQ0ksc0VBQUcsMkJBQXlCLENBQUksZUFDaEM7SUFDSSxTQUFTLEVBQUMsb0JBQW9CO0lBQzlCLElBQUksRUFBQyxZQUFZO0lBQ2pCLFFBQVEsRUFBRUksWUFBYTtJQUN2QixLQUFLLEVBQUVGLElBQUksQ0FBQ0QsVUFBVSxJQUFJO0VBQUcsRUFDL0IsQ0FDRSxDQUNELGVBQ1g7SUFBUSxTQUFTLEVBQUMsV0FBVztJQUFDLElBQUksRUFBQztFQUFRLEdBQUMsU0FBTyxDQUFTLGVBQzVELDJEQUFDLHdFQUFnQjtJQUFDLFNBQVMsRUFBQyxPQUFPO0lBQUMsUUFBUSxFQUFDLE9BQU87SUFBQyxPQUFPLEVBQUVKLEtBQUssQ0FBQ2dCO0VBQVksRUFDOUUsQ0FDQyxDQUNMLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVqQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUN2SGlDO0FBQ1A7QUFDcEI7QUFDQTtBQUNZO0FBQ1I7O0FBRTlCOztBQUVBLElBQU13QyxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUk7SUFBQTtJQUNKO0lBQ1kscUZBQ0ksMkRBQUMsNkNBQUksT0FBRyxlQUNSLDJEQUFDLG1EQUFVLE9BQUcsZUFDZCwyREFBQywrQ0FBTSxPQUFHO0lBRTFCO0VBQUE7QUFDQSxDQUFDOztBQUVELElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUFDO0FBQ2hELElBQU1DLElBQUksR0FBR1IsNERBQVUsQ0FBQ0ssU0FBUyxDQUFDO0FBQ2xDRyxJQUFJLENBQUNDLE1BQU0sZUFBQywyREFBQyxHQUFHLE9BQUcsQ0FBQzs7Ozs7Ozs7VUNqRHBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvRm9ybTEuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsb3NlUm91bmRlZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZVJvdW5kZWQnO1xuXG5jb25zdCBGb3JtMSA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgICAgICBmaXJzdE5hbWU6ICcnLFxuICAgICAgICBsYXN0TmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbW90aXZhdGlvbjogJycsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBzZXRGb3JtKChwcmV2U3RhdGUpID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgICBbbmFtZV06IHZhbHVlLFxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IFtzdWIsIHNldFN1Yl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBjb25zdCB0b2dnbGVGb3JtID0gKCkgPT4ge1xuICAgICAgICBwcm9wcy5oYW5kbGVDbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBmb3JtLmZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBmb3JtLmxhc3ROYW1lLFxuICAgICAgICAgICAgZW1haWw6IGZvcm0uZW1haWwsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBmb3JtLm1vdGl2YXRpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYW5kaWRhdGVzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgc2V0U3ViKHRydWUpO1xuXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTdWIoZmFsc2UpO1xuICAgICAgICAgICAgc2V0Rm9ybSh7IHJlc2V0OiB0cnVlIH0pO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIH0sIDI1MDApO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1CYWNrZ3JvdW5kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1XcmFwcGVyXCI+XG4gICAgICAgICAgICAgICAge3N1YiAmJiA8ZGl2IGNsYXNzTmFtZT1cImJvb2tpbmdcIj5Cb29raW5nIGEgc2VhdC4uLjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybV9fRmlyc3RTZWNvbmROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GaXJzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLWJhc2ljXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGFzdCBuYW1lPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbCBhZGRyZXNzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm1fX2Zvcm1JbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+V2h5IHNob3VsZCB3ZSBjaG9vc2UgWU9VPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybV9fZm9ybVRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vdGl2YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5tb3RpdmF0aW9uIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ0blwiIHR5cGU9XCJzdWJtaXRcIj5TaWduIHVwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZVJvdW5kZWRJY29uIGNsYXNzTmFtZT1cImNsb3NlXCIgZm9udFNpemU9XCJsYXJnZVwiIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtMTsiLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcbmltcG9ydCBTZWNvbmRQYWdlIGZyb20gXCIuL1NlY29uZFBhZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5cbi8qZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpOyovXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbi8qICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFubmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIktvd2FsaWtcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImFubmEua293YWxpa0B3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiS2F0YXJ6eW5hXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJQaW90cm93c2thXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJrLnBpb3Ryb3dza2FAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiTWFyY2luXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJNdWxpY2tpXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJtbTI1ODlAd3AucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFkYW1cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIldvbGVja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImEud29sZWNraWtAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgIF0pOyovXG5cbiAgICByZXR1cm4oXG4vKiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzfX0+Ki9cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICAgICAgICA8U2Vjb25kUGFnZSAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuLyogICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj4qLylcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGI4YWM0NzEyNWVkNDQ3ZTFiNWVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNsb3NlUm91bmRlZEljb24iLCJGb3JtMSIsInByb3BzIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJmb3JtIiwic2V0Rm9ybSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwicHJldlN0YXRlIiwic3ViIiwic2V0U3ViIiwidG9nZ2xlRm9ybSIsImhhbmRsZUNsb3NlIiwiaGFuZGxlU3VibWl0IiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInJlc2V0IiwiY3JlYXRlQ29udGV4dCIsImNyZWF0ZVJvb3QiLCJIZXJvIiwiU2Vjb25kUGFnZSIsIkZvb3RlciIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==