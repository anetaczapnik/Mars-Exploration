"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _Form1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Nav = function Nav() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_app__WEBPACK_IMPORTED_MODULE_3__.AppContext),
    test = _useContext.test;
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "navWrapping"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "logo"
  }, "NASA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink navLink1",
    href: "#home"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink",
    href: "#tours"
  }, "Tour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "navLink",
    href: "#contact"
  }, "Contact")))), console.log("TESTTT:", test), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "journey",
    onClick: toggleForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "\u27F6"), "Sign up TODAY"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form1__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContext": () => (/* binding */ AppContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AppContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
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
    _useState2 = _slicedToArray(_useState, 2),
    candidates = _useState2[0],
    setCandidates = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("huih"),
    _useState4 = _slicedToArray(_useState3, 2),
    test = _useState4[0],
    setTest = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppContext.Provider, {
    value: {
      candidates: candidates,
      setCandidates: setCandidates,
      test: test,
      setTest: setTest
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
};
var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/*
const [candidates, setCandidates] = useState([]);

const updateCandidates = (newCandidates) => {
    setCandidates(newCandidates);
};*/

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cf546a6af24f36b18dd8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLE9BQUcsQ0FDUixDQUNZO0FBQzlCLENBQUM7QUFFRCxJQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUNoRCxJQUFNQyxJQUFJLEdBQUdmLDREQUFVLENBQUNZLFNBQVMsQ0FBQztBQUNsQ0csSUFBSSxDQUFDQyxNQUFNLGVBQUMsMkRBQUMsR0FBRyxPQUFHLENBQUM7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9OYXYuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuaW1wb3J0IEZvcm0xIGZyb20gXCIuL0Zvcm0xXCI7XG5pbXBvcnQge0FwcENvbnRleHR9IGZyb20gXCIuL2FwcFwiO1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7dGVzdH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xuXG4gICAgY29uc3QgdG9nZ2xlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdldyYXBwaW5nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+TkFTQTwvZGl2PlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJuYXZMaW5rIG5hdkxpbmsxXCIgaHJlZj1cIiNob21lXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm5hdkxpbmtcIiBocmVmPVwiI3RvdXJzXCI+VG91cjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm5hdkxpbmtcIiBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKFwiVEVTVFRUOlwiLHRlc3QpfVxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImpvdXJuZXlcIiBvbkNsaWNrPXt0b2dnbGVGb3JtfT48c3Bhbj4mIzEwMjMwOzwvc3Bhbj5TaWduIHVwIFRPREFZPC9hPlxuICAgICAgICAgICAgICAgICAgICB7aXNPcGVuICYmIDxGb3JtMSBoYW5kbGVDbG9zZT17dG9nZ2xlRm9ybX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7IiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgXCIuLi9zY3NzL21haW4uc2Nzc1wiXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5pbXBvcnQgU2Vjb25kUGFnZSBmcm9tIFwiLi9TZWNvbmRQYWdlXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICBjb25zdCBbY2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJBbm5hXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJLb3dhbGlrXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJhbm5hLmtvd2FsaWtAd3AucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkthdGFyenluYVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiUGlvdHJvd3NrYVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiay5waW90cm93c2thQG9uZXQucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIk1hcmNpblwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiTXVsaWNraVwiLFxuICAgICAgICAgICAgZW1haWw6IFwibW0yNTg5QHdwLnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJBZGFtXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJXb2xlY2tpXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJhLndvbGVja2lrQG9uZXQucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICBdKTtcbiAgICBjb25zdCBbdGVzdCwgc2V0VGVzdF0gPSB1c2VTdGF0ZShcImh1aWhcIik7XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Y2FuZGlkYXRlcywgc2V0Q2FuZGlkYXRlcywgdGVzdCwgc2V0VGVzdH19PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8SGVybyAvPlxuICAgICAgICAgICAgICAgIDxTZWNvbmRQYWdlIC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj4pXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pO1xuXG4vKlxuY29uc3QgW2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXNdID0gdXNlU3RhdGUoW10pO1xuXG5jb25zdCB1cGRhdGVDYW5kaWRhdGVzID0gKG5ld0NhbmRpZGF0ZXMpID0+IHtcbiAgICBzZXRDYW5kaWRhdGVzKG5ld0NhbmRpZGF0ZXMpO1xufTsqL1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2Y1NDZhNmFmMjRmMzZiMThkZDhcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJGb3JtMSIsIkFwcENvbnRleHQiLCJOYXYiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ0ZXN0IiwidG9nZ2xlRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVDb250ZXh0IiwiY3JlYXRlUm9vdCIsIkhlcm8iLCJTZWNvbmRQYWdlIiwiRm9vdGVyIiwiQXBwIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsIm1vdGl2YXRpb24iLCJjYW5kaWRhdGVzIiwic2V0Q2FuZGlkYXRlcyIsInNldFRlc3QiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=