self["webpackHotUpdatees6_react"](0,{

/***/ 194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SecondPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(193);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(190);
/* harmony import */ var _Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(195);








var Contact = function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Details__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MainPage = function MainPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var toggleForm = function toggleForm() {
    setIsOpen(!isOpen);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "title"
  }, "Discover the Galaxy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "subtitle"
  }, "From Earth to Mars! Step by step", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "-- until Neptune"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "arrow"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "decoration"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "cta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "cta-text",
    onClick: toggleForm
  }, "Start my Journey Today"), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClose: toggleForm
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "contentMainWrapper-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Why Mars?",
    text: "Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Explore Red Planet",
    text: "Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "parWrapper1 parWrapper2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Paragraph__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Our Space Shuttle",
    text: "Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf."
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "par3background"
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

/***/ }),

/***/ 192:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anetaczapnik/Websites/Mars-Exploration/development/js/SecondPage.js: Unexpected token (13:12)\n\n\u001b[0m \u001b[90m 11 |\u001b[39m                     alt\u001b[33m=\u001b[39m\u001b[32m\"mars\"\u001b[39m\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mParagraph\u001b[39m title\u001b[33m=\u001b[39m{\u001b[32m\"Why Mars?\"\u001b[39m} text\u001b[33m=\u001b[39m{\u001b[32m\"Invent the universe vastness is bearable only through love paroxysm of global death the sky calls to us not a sunrise but a galaxyrise white dwarf.\"\u001b[39m}\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m             \u001b[33m<\u001b[39m\u001b[33mdiv\u001b[39m className\u001b[33m=\u001b[39m\u001b[32m\"parWrapper\"\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m                 \u001b[33m<\u001b[39m\u001b[33mimg\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m                     src\u001b[33m=\u001b[39m\u001b[32m\"https://media-cldnry.s-nbcnews.com/image/upload/newscms/2014_18/408611/140429-coslog-selfie.jpg\"\u001b[39m\u001b[0m\n    at instantiate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:362:12)\n    at JSXParserMixin.raise (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3254:19)\n    at JSXParserMixin.unexpected (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3284:16)\n    at JSXParserMixin.jsxParseIdentifier (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6789:12)\n    at JSXParserMixin.jsxParseNamespacedName (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6796:23)\n    at JSXParserMixin.jsxParseAttribute (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6876:22)\n    at JSXParserMixin.jsxParseOpeningElementAfterName (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6891:28)\n    at JSXParserMixin.jsxParseOpeningElementAt (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6886:17)\n    at JSXParserMixin.jsxParseElementAt (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:6910:33)");

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(187);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(189);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(192);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_SecondPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(194);










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
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_SecondPage__WEBPACK_IMPORTED_MODULE_5___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Route, {
      path: "/contact",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], null))
    })))
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
/******/ 	__webpack_require__.h = () => ("549b49849760d63cb114")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mZGMzYjQ5MjVlMzAwNjUwNjgxYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDQTtBQUNpQztBQUNyQjtBQUNSO0FBQ047QUFDVTtBQUNGO0FBRWhDLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFPO0VBQUEsb0JBQ1Q7SUFBSyxTQUFTLEVBQUM7RUFBTSxnQkFDakIsMkRBQUMsNENBQUcsT0FBRyxlQUNQLDJEQUFDLGdEQUFPLE9BQUcsZUFDWCwyREFBQywrQ0FBTSxPQUFHLENBQ1I7QUFBQSxDQUNUO0FBRUQsaUVBQWVBLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmtCO0FBQ0o7QUFDVjtBQUUxQixJQUFNRixRQUFRLEdBQUcsU0FBWEEsUUFBUSxHQUFTO0VBQ25CLGdCQUE0QkcsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTtJQUFwQ0csTUFBTTtJQUFFQyxTQUFTO0VBRXhCLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFVLEdBQVM7SUFDckJELFNBQVMsQ0FBQyxDQUFDRCxNQUFNLENBQUM7RUFDdEIsQ0FBQztFQUVELG9CQUNJO0lBQUssU0FBUyxFQUFDO0VBQW9CLGdCQUMvQjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMscUZBQ0k7SUFBSSxTQUFTLEVBQUM7RUFBTyxHQUFDLHFCQUFtQixDQUFLLGVBQzlDO0lBQUksU0FBUyxFQUFDO0VBQVUsR0FBQyxrQ0FBZ0MscUZBQUssb0JBQWdCLENBQUssZUFDbkY7SUFBSyxTQUFTLEVBQUM7RUFBTyxFQUFPLENBQzNCLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBWSxFQUFPLGVBQ2xDO0lBQUssU0FBUyxFQUFDO0VBQUssZ0JBQ2hCO0lBQUcsU0FBUyxFQUFDLFVBQVU7SUFBQyxPQUFPLEVBQUVFO0VBQVcsR0FBQyx3QkFBc0IsQ0FBSSxFQUN0RUYsTUFBTSxpQkFBSSwyREFBQyw2Q0FBSTtJQUFDLFdBQVcsRUFBRUU7RUFBVyxFQUFHLENBQzFDLENBQ0osZUFDTjtJQUFLLFNBQVMsRUFBQztFQUEwQixnQkFDckM7SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVM7SUFBQyxLQUFLLEVBQUUsV0FBWTtJQUFDLElBQUksRUFBRTtFQUFzSixFQUFFLENBQzNMLGVBQ047SUFBSyxTQUFTLEVBQUM7RUFBYSxnQkFDeEIsMkRBQUMsa0RBQVM7SUFBQyxLQUFLLEVBQUUsb0JBQXFCO0lBQUMsSUFBSSxFQUFFO0VBQXNKLEVBQUUsQ0FDcE0sZUFDTjtJQUFLLFNBQVMsRUFBQztFQUF5QixnQkFDcEMsMkRBQUMsa0RBQVM7SUFBQyxLQUFLLEVBQUUsbUJBQW9CO0lBQUMsSUFBSSxFQUFFO0VBQXNKLEVBQUUsZUFDck07SUFBSyxTQUFTLEVBQUM7RUFBZ0IsRUFBTyxDQUNwQyxDQUNKLENBQ0o7QUFFZCxDQUFDO0FBRUQsaUVBQWVSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QzBDO0FBQ25CO0FBS3BCO0FBQ0E7QUFDQTtBQUNGO0FBQ2M7QUFDUjtBQUNFOztBQUVoQzs7QUFFQSxJQUFNWSxHQUFHLEdBQUcsU0FBTkEsR0FBRyxHQUFTO0VBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0VBRUk7SUFBQTtJQUNKO0lBQ1ksMkRBQUMsd0RBQVUscUJBQ1AsMkRBQUMsb0RBQU0scUJBQ0gsMkRBQUMsbURBQUs7TUFBQyxJQUFJLEVBQUMsR0FBRztNQUFDLE9BQU8sZUFDbkIscUZBQ0ksMkRBQUMsNkNBQUksT0FBRyxlQUNSLDJEQUFDLG9EQUFVLE9BQUcsZUFDZCwyREFBQywrQ0FBTSxPQUFHO0lBQ1AsRUFBRyxlQUNkLDJEQUFDLG1EQUFLO01BQUMsSUFBSSxFQUFDLFVBQVU7TUFBQyxPQUFPLGVBQzFCLHFGQUNJLDJEQUFDLGdEQUFPLE9BQUc7SUFDUixFQUFHLENBQ1Q7SUFFekI7RUFBQTtBQUVBLENBQUM7O0FBRUQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHTCw0REFBVSxDQUFDRSxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRyxDQUFDOzs7Ozs7OztVQ2xFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9Db250YWN0LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL01haW5QYWdlLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcbmltcG9ydCB7SGFzaFJvdXRlciwgUm91dGUsIFJvdXRlc30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBTZWNvbmRQYWdlIGZyb20gXCIuL1NlY29uZFBhZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuL05hdlwiO1xuaW1wb3J0IE1haW5QYWdlIGZyb20gXCIuL01haW5QYWdlXCI7XG5pbXBvcnQgRGV0YWlscyBmcm9tIFwiLi9EZXRhaWxzXCI7XG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPERldGFpbHMgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9QYXJhZ3JhcGhcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcblxuY29uc3QgTWFpblBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHRvZ2dsZUZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50TWFpbldyYXBwZXItbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkRpc2NvdmVyIHRoZSBHYWxheHk8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Gcm9tIEVhcnRoIHRvIE1hcnMhIFN0ZXAgYnkgc3RlcDxici8+LS0gdW50aWwgTmVwdHVuZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyb3dcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlY29yYXRpb25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjdGEtdGV4dFwiIG9uQ2xpY2s9e3RvZ2dsZUZvcm19PlN0YXJ0IG15IEpvdXJuZXkgVG9kYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPEZvcm0gaGFuZGxlQ2xvc2U9e3RvZ2dsZUZvcm19IC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRNYWluV3JhcHBlci1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCB0aXRsZT17XCJXaHkgTWFycz9cIn0gdGV4dD17XCJJbnZlbnQgdGhlIHVuaXZlcnNlIHZhc3RuZXNzIGlzIGJlYXJhYmxlIG9ubHkgdGhyb3VnaCBsb3ZlIHBhcm94eXNtIG9mIGdsb2JhbCBkZWF0aCB0aGUgc2t5IGNhbGxzIHRvIHVzIG5vdCBhIHN1bnJpc2UgYnV0IGEgZ2FsYXh5cmlzZSB3aGl0ZSBkd2FyZi5cIn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCB0aXRsZT17XCJFeHBsb3JlIFJlZCBQbGFuZXRcIn0gdGV4dD17XCJJbnZlbnQgdGhlIHVuaXZlcnNlIHZhc3RuZXNzIGlzIGJlYXJhYmxlIG9ubHkgdGhyb3VnaCBsb3ZlIHBhcm94eXNtIG9mIGdsb2JhbCBkZWF0aCB0aGUgc2t5IGNhbGxzIHRvIHVzIG5vdCBhIHN1bnJpc2UgYnV0IGEgZ2FsYXh5cmlzZSB3aGl0ZSBkd2FyZi5cIn0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyV3JhcHBlcjEgcGFyV3JhcHBlcjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCB0aXRsZT17XCJPdXIgU3BhY2UgU2h1dHRsZVwifSB0ZXh0PXtcIkludmVudCB0aGUgdW5pdmVyc2UgdmFzdG5lc3MgaXMgYmVhcmFibGUgb25seSB0aHJvdWdoIGxvdmUgcGFyb3h5c20gb2YgZ2xvYmFsIGRlYXRoIHRoZSBza3kgY2FsbHMgdG8gdXMgbm90IGEgc3VucmlzZSBidXQgYSBnYWxheHlyaXNlIHdoaXRlIGR3YXJmLlwifS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyM2JhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xuIiwiaW1wb3J0IFJlYWN0LCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQge1xuICAgIEhhc2hSb3V0ZXIsXG4gICAgUm91dGUsXG4gICAgUm91dGVzXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vSGVyb1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcbmltcG9ydCBTZWNvbmRQYWdlIGZyb20gXCIuL1NlY29uZFBhZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5cbi8qZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpOyovXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbi8qICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFubmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIktvd2FsaWtcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImFubmEua293YWxpa0B3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiS2F0YXJ6eW5hXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJQaW90cm93c2thXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJrLnBpb3Ryb3dza2FAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiTWFyY2luXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJNdWxpY2tpXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJtbTI1ODlAd3AucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFkYW1cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIldvbGVja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImEud29sZWNraWtAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgIF0pOyovXG5cbiAgICByZXR1cm4oXG4vKiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzfX0+Ki9cbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kUGFnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9Jy9jb250YWN0JyBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhY3QgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0gLz5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cbi8qICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+Ki9cbiAgICApXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU0OWI0OTg0OTc2MGQ2M2NiMTE0XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVybyIsIkhhc2hSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIlNlY29uZFBhZ2UiLCJGb290ZXIiLCJOYXYiLCJNYWluUGFnZSIsIkRldGFpbHMiLCJDb250YWN0IiwidXNlU3RhdGUiLCJQYXJhZ3JhcGgiLCJGb3JtIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidG9nZ2xlRm9ybSIsImNyZWF0ZUNvbnRleHQiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9