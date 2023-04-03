self["webpackHotUpdatees6_react"](0,{

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Nav__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(186);



var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_Nav__WEBPACK_IMPORTED_MODULE_1___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MainPage__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ 45:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/anetaczapnik/Websites/Mars-Exploration/development/js/Nav.js: Unexpected token, expected \"from\" (13:0)\n\n\u001b[0m \u001b[90m 11 |\u001b[39m }\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 13 |\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mNav\u001b[39m \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m     \u001b[36mconst\u001b[39m [isOpen\u001b[33m,\u001b[39m setIsOpen] \u001b[33m=\u001b[39m useState(\u001b[36mfalse\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m     \u001b[36mconst\u001b[39m toggleForm \u001b[33m=\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n    at instantiate (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:362:12)\n    at JSXParserMixin.raise (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3254:19)\n    at JSXParserMixin.unexpected (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3284:16)\n    at JSXParserMixin.expectContextual (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:3607:18)\n    at JSXParserMixin.parseImport (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:14032:12)\n    at JSXParserMixin.parseStatementContent (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12647:27)\n    at JSXParserMixin.parseStatementLike (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12534:17)\n    at JSXParserMixin.parseModuleItem (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:12518:17)\n    at JSXParserMixin.parseBlockOrModuleBlockBody (/Users/anetaczapnik/Websites/Mars-Exploration/node_modules/@babel/parser/lib/index.js:13104:36)");

/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(190);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(193);









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
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
      path: "/",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
      path: "contact",
      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], null)
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
/******/ 	__webpack_require__.h = () => ("973e9101b55bac7f7f24")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44NDcwM2M3ZWJhN2QwMDllODhmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNGO0FBQ1U7QUFFbEMsSUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQUk7RUFBQSxvQkFDTjtJQUFLLFNBQVMsRUFBQztFQUFNLGdCQUNqQiwyREFBQyw2Q0FBRyxPQUFHLGVBQ1AsMkRBQUMsaURBQVEsT0FBRyxDQUNWO0FBQUEsQ0FDVDtBQUVELGlFQUFlQSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1g4QztBQUNuQjtBQVN0QjtBQUNFO0FBQ0E7QUFDWTtBQUNSO0FBQ0U7O0FBRWhDOztBQUVBLElBQU1jLEdBQUcsR0FBRyxTQUFOQSxHQUFHLEdBQVM7RUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7RUFFSTtJQUFBO0lBQ0o7SUFDWSwyREFBQyx3REFBVSxxQkFDUCwyREFBQyxvREFBTSxxQkFDSCwyREFBQyxtREFBSztNQUFDLElBQUksRUFBQyxHQUFHO01BQUMsT0FBTyxlQUNuQixxRkFDSSwyREFBQyw2Q0FBSSxPQUFHLGVBQ1IsMkRBQUMsbURBQVUsT0FBRyxlQUNkLDJEQUFDLCtDQUFNLE9BQUc7SUFDUCxFQUFHLGVBQ2QsMkRBQUMsbURBQUs7TUFBQyxJQUFJLEVBQUMsU0FBUztNQUFDLE9BQU8sZUFBRSwyREFBQyxnREFBTztJQUFJLEVBQUcsQ0FDekM7SUFFekI7RUFBQTtBQUNBLENBQUM7O0FBRUQsSUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7QUFDaEQsSUFBTUMsSUFBSSxHQUFHZCw0REFBVSxDQUFDVyxTQUFTLENBQUM7QUFDbENHLElBQUksQ0FBQ0MsTUFBTSxlQUFDLDJEQUFDLEdBQUcsT0FBRyxDQUFDOzs7Ozs7OztVQ2pFcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9kZXZlbG9wbWVudC9qcy9IZXJvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4vTmF2XCI7XG5pbXBvcnQgTWFpblBhZ2UgZnJvbSBcIi4vTWFpblBhZ2VcIjtcblxuY29uc3QgSGVybyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgPE5hdiAvPlxuICAgICAgICA8TWFpblBhZ2UgLz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgICBIYXNoUm91dGVyLFxuICAgIFJvdXRlLFxuICAgIFJvdXRlcyxcbiAgICBMaW5rLFxuICAgIE5hdkxpbmssXG4gICAgT3V0bGV0XG59XG5mcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCJcbmltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcbmltcG9ydCBTZWNvbmRQYWdlIGZyb20gXCIuL1NlY29uZFBhZ2VcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi9Db250YWN0XCI7XG5cbi8qZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpOyovXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbi8qICAgIGNvbnN0IFtjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFubmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIktvd2FsaWtcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImFubmEua293YWxpa0B3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiS2F0YXJ6eW5hXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJQaW90cm93c2thXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJrLnBpb3Ryb3dza2FAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiTWFyY2luXCIsXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJNdWxpY2tpXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJtbTI1ODlAd3AucGxcIixcbiAgICAgICAgICAgIG1vdGl2YXRpb246IFwiQ29ycHVzIGNhbGxvc3VtIGRlc2NlbmRlZCBmcm9tIGFzdHJvbm9tZXJzIGNvc21pYyBvY2VhbiBhIHZlcnkgc21hbGwgc3RhZ2UgaW4gYSB2YXN0IGNvc21pYyBhcmVuYSBlbmN5Y2xvcGFlZGlhIGdhbGFjdGljYSB0aGUgb25seSBob21lIHdlJ3ZlIGV2ZXIga25vd24uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIkFkYW1cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIldvbGVja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImEud29sZWNraWtAb25ldC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgIF0pOyovXG5cbiAgICByZXR1cm4oXG4vKiAgICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYW5kaWRhdGVzLCBzZXRDYW5kaWRhdGVzfX0+Ki9cbiAgICAgICAgICAgIDxIYXNoUm91dGVyPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXM+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPScvJyBlbGVtZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kUGFnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9J2NvbnRhY3QnIGVsZW1lbnQ9ezxDb250YWN0IC8+fSAvPlxuICAgICAgICAgICAgICAgIDwvUm91dGVzPlxuICAgICAgICAgICAgPC9IYXNoUm91dGVyPlxuLyogICAgICAgIDwvQXBwQ29udGV4dC5Qcm92aWRlcj4qLylcbn1cblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcHBcIik7XG5jb25zdCByb290ID0gY3JlYXRlUm9vdChjb250YWluZXIpO1xucm9vdC5yZW5kZXIoPEFwcCAvPik7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTczZTkxMDFiNTViYWM3ZjdmMjRcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJOYXYiLCJNYWluUGFnZSIsIkhlcm8iLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJDb21wb25lbnQiLCJjcmVhdGVSb290IiwiSGFzaFJvdXRlciIsIlJvdXRlIiwiUm91dGVzIiwiTGluayIsIk5hdkxpbmsiLCJPdXRsZXQiLCJTZWNvbmRQYWdlIiwiRm9vdGVyIiwiQ29udGFjdCIsIkFwcCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyb290IiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==