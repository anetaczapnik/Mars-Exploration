"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 41:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n.navWrapping {\n  height: 13vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  font-family: \"Play\", sans-serif;\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n  padding-left: 100px;\n  letter-spacing: 1rem;\n}\n\n.nav {\n  width: 20vw;\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n}\n\n.navLink, .journey {\n  font-family: \"Play\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n  transition: color, 1s, 0.5s;\n}\n.navLink:link, .navLink:active, .navLink:visited, .journey:link, .journey:active, .journey:visited {\n  text-decoration: none;\n}\n.navLink:hover, .journey:hover {\n  color: #eac4ba;\n}\n\n.navLink1 {\n  font-weight: bold;\n}\n\n.journey {\n  padding-right: 100px;\n  color: #eac4ba;\n  position: relative;\n}\n\nspan {\n  position: absolute;\n  content: \"⟶\";\n  top: -4px;\n  left: -35px;\n}\n\n.paragraph {\n  width: 100%;\n}\n.paragraph--title {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: white;\n  padding: 20px 100px 20px 85px;\n  line-height: 1.5rem;\n}\n.paragraph--title_text {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #eac4ba;\n  padding: 5px 100px 0 85px;\n  line-height: 1.5rem;\n}\n.paragraph:nth-child(1) {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.paragraph:first-of-type {\n  padding-top: 45px;\n}\n.paragraph:last-of-type {\n  padding-bottom: 45px;\n}\n\n.contentMainWrapper {\n  display: flex;\n  color: white;\n  width: 100vw;\n  margin: 122px 0 0;\n}\n.contentMainWrapper-left {\n  width: 59.5vw;\n}\n.contentMainWrapper-right {\n  width: 40.5vw;\n  background-color: rgba(36, 36, 36, 0.3);\n  backdrop-filter: blur(20px);\n}\n\n.title {\n  font-family: \"Play\", sans-serif;\n  font-size: 4.8rem;\n  font-weight: bold;\n  color: white;\n  padding-top: 10px;\n  padding-left: 120px;\n  padding-bottom: 1.8rem;\n}\n\n.subtitle {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2rem;\n  font-weight: normal;\n  color: #eac4ba;\n  padding-left: 120px;\n  line-height: 2.8rem;\n}\n\n.cta {\n  background-color: #19161f;\n}\n.cta-text {\n  font-family: \"Play\", sans-serif;\n  font-size: 2.2rem;\n  font-weight: bold;\n  color: white;\n}\n\n.wrapperBackground {\n  background-image: url(\"https://i.ibb.co/brkypN9/bg.png\");\n  width: 100vw;\n  height: 100vh;\n  background-position: bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n}", "",{"version":3,"sources":["webpack://./development/scss/main.scss","webpack://./development/scss/generic/_reset.scss","webpack://./development/scss/elements/_nav.scss","webpack://./development/scss/settings/_mixins.scss","webpack://./development/scss/settings/_colors-fonts.scss","webpack://./development/scss/elements/_paragraph.scss","webpack://./development/scss/elements/_mainPage.scss","webpack://./development/scss/elements/_wrapper.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACE,sBAAA;ADEF;;ACCA;EACE,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,kCAAA;EACA,mCAAA;EACA,sBAAA;ADEF;;ACCA;EACE,cAAA;ADEF;;ACCA;EACE,cAAA;ADEF;;ACCA;EACE,gBAAA;ADEF;;ACCA;EACE,YAAA;ADEF;;ACCA;EACE,WAAA;EACA,aAAA;ADEF;;ACCA;EACE,yBAAA;EACA,iBAAA;ADEF;;ACCA;EACE,wBAAA;EACA,gBAAA;ADEF;;AE9CA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AFiDF;;AE9CA;ECPE,+BCIU;EDHV,kBDOkC;ECNlC,iBDM2C;ECL3C,YCJU;EFUV,qBAAA;EACA,mBAAA;EACA,oBAAA;AFoDF;;AEjDA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,8BAAA;AFoDF;;AEjDA;ECrBE,+BCIU;EDHV,iBDqBkC;ECpBlC,mBDoB0C;ECnB1C,YCJU;EFwBV,qBAAA;EACA,2BAAA;AFuDF;AErDE;EACE,qBAAA;AFuDJ;AEpDE;EACE,cE/BO;AJqFX;;AElDA;EACE,iBAAA;AFqDF;;AElDA;EACE,oBAAA;EACA,cEzCS;EF0CT,kBAAA;AFqDF;;AElDA;EACE,kBAAA;EACA,YAAA;EACA,SAAA;EACA,WAAA;AFqDF;;AKvGA;EACE,WAAA;AL0GF;AKxGE;EFFA,qCCMU;EDLV,iBEEoC;EFDpC,iBEC4C;EFA5C,YCJU;ECKR,6BAAA;EACA,mBAAA;AL6GJ;AK3GI;EFPF,qCCMU;EDLV,eEOsC;EFNtC,mBEM4C;EFL5C,cCHS;ECSL,yBAAA;EACA,mBAAA;ALgHN;AK5GE;EACE,2BAAA;EACA,4BAAA;AL8GJ;AK3GE;EACE,iBAAA;AL6GJ;AK1GE;EACE,oBAAA;AL4GJ;;AMrIA;EACE,aAAA;EACA,YFFU;EEGV,YAAA;EACA,iBAAA;ANwIF;AMtIE;EACE,aAAA;ANwIJ;AMrIE;EACE,aAAA;EACA,uCAAA;EACA,2BAAA;ANuIJ;;AMnIA;EHhBE,+BCIU;EDHV,iBGgBkC;EHflC,iBGe0C;EHd1C,YCJU;EEmBV,iBAAA;EACA,mBAAA;EACA,sBAAA;ANyIF;;AMtIA;EHvBE,qCCMU;EDLV,eGuBkC;EHtBlC,mBGsBwC;EHrBxC,cCHS;EEyBT,mBAAA;EACA,mBAAA;AN4IF;;AMzIA;EACE,yBF7BW;AJyKb;AM1IE;EHhCA,+BCIU;EDHV,iBGgCoC;EH/BpC,iBG+B4C;EH9B5C,YCJU;AJiLZ;;AOjLA;EACE,wDAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;EACA,sBAAA;EACA,4BAAA;APoLF","sourcesContent":["@charset \"UTF-8\";\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0;\n}\n\n.navWrapping {\n  height: 13vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  font-family: \"Play\", sans-serif;\n  font-size: 1.75rem;\n  font-weight: bold;\n  color: white;\n  text-decoration: none;\n  padding-left: 100px;\n  letter-spacing: 1rem;\n}\n\n.nav {\n  width: 20vw;\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n}\n\n.navLink, .journey {\n  font-family: \"Play\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: normal;\n  color: white;\n  text-decoration: none;\n  transition: color, 1s, 0.5s;\n}\n.navLink:link, .navLink:active, .navLink:visited, .journey:link, .journey:active, .journey:visited {\n  text-decoration: none;\n}\n.navLink:hover, .journey:hover {\n  color: #eac4ba;\n}\n\n.navLink1 {\n  font-weight: bold;\n}\n\n.journey {\n  padding-right: 100px;\n  color: #eac4ba;\n  position: relative;\n}\n\nspan {\n  position: absolute;\n  content: \"⟶\";\n  top: -4px;\n  left: -35px;\n}\n\n.paragraph {\n  width: 100%;\n}\n.paragraph--title {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: white;\n  padding: 20px 100px 20px 85px;\n  line-height: 1.5rem;\n}\n.paragraph--title_text {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 1rem;\n  font-weight: normal;\n  color: #eac4ba;\n  padding: 5px 100px 0 85px;\n  line-height: 1.5rem;\n}\n.paragraph:nth-child(1) {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n}\n.paragraph:first-of-type {\n  padding-top: 45px;\n}\n.paragraph:last-of-type {\n  padding-bottom: 45px;\n}\n\n.contentMainWrapper {\n  display: flex;\n  color: white;\n  width: 100vw;\n  margin: 122px 0 0;\n}\n.contentMainWrapper-left {\n  width: 59.5vw;\n}\n.contentMainWrapper-right {\n  width: 40.5vw;\n  background-color: rgba(36, 36, 36, 0.3);\n  backdrop-filter: blur(20px);\n}\n\n.title {\n  font-family: \"Play\", sans-serif;\n  font-size: 4.8rem;\n  font-weight: bold;\n  color: white;\n  padding-top: 10px;\n  padding-left: 120px;\n  padding-bottom: 1.8rem;\n}\n\n.subtitle {\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 2rem;\n  font-weight: normal;\n  color: #eac4ba;\n  padding-left: 120px;\n  line-height: 2.8rem;\n}\n\n.cta {\n  background-color: #19161f;\n}\n.cta-text {\n  font-family: \"Play\", sans-serif;\n  font-size: 2.2rem;\n  font-weight: bold;\n  color: white;\n}\n\n.wrapperBackground {\n  background-image: url(\"https://i.ibb.co/brkypN9/bg.png\");\n  width: 100vw;\n  height: 100vh;\n  background-position: bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n}","*, *:before, *:after{\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main{\n  display: block;\n}\n\nbody{\n  line-height: 1;\n}\n\nol, ul{\n  list-style: none;\n}\n\nblockquote, q{\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after{\n  content: '';\n  content: none;\n}\n\ntable{\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput{\n  -webkit-appearance: none;\n  border-radius: 0;\n}",".navWrapping {\n  height: 13vh;\n  width: 100vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  @include general-font($font-Play, 1.75rem, bold, $col-white);\n  text-decoration: none;\n  padding-left: 100px;\n  letter-spacing: 1rem;\n}\n\n.nav {\n  width: 20vw;\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n}\n\n.navLink, .journey {\n  @include general-font($font-Play, 1.5rem, normal, $col-white);\n  text-decoration: none;\n  transition: color, 1s, 0.5s;\n\n  &:link, &:active, &:visited {\n    text-decoration: none;\n  }\n\n  &:hover {\n    color: $col-rose;\n  }\n}\n\n.navLink1 {\n  font-weight: bold;\n}\n\n.journey {\n  padding-right: 100px;\n  color: $col-rose;\n  position: relative;\n}\n\nspan {\n  position: absolute;\n  content: \"\\27F6\";\n  top: -4px;\n  left: -35px;\n}","@mixin general-font($font, $size, $weight, $color) {\n  font-family: $font;\n  font-size: $size;\n  font-weight: $weight;\n  color: $color;\n}","$col-white: white;\n$col-rose: #eac4ba;\n$col-mirage: #19161f;\n$col-vulcan: #161a20;\n$col-aztec: #1e1c20;\n$font-Play: 'Play', sans-serif;\n$font-RedHat: 'Red Hat Display', sans-serif;\n$font-Mont: 'Montserrat', sans-serif;\n",".paragraph {\n  width: 100%;\n\n  &--title {\n    @include general-font($font-Mont, 1.5rem, bold, $col-white);\n    padding: 20px 100px 20px 85px;\n    line-height: 1.5rem;\n\n    &_text {\n      @include general-font($font-Mont, 1rem, normal, $col-rose);\n      padding: 5px 100px 0 85px;\n      line-height: 1.5rem;\n    }\n  }\n\n  &:nth-child(1) {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n  }\n\n  &:first-of-type {\n    padding-top: 45px;\n  }\n\n  &:last-of-type {\n    padding-bottom: 45px;\n  }\n}",".contentMainWrapper {\n  display: flex;\n  color: $col-white;\n  width: 100vw;\n  margin: 122px 0 0;\n\n  &-left {\n    width: 59.5vw;\n  }\n\n  &-right {\n    width: 40.5vw;\n    background-color: rgba(36, 36, 36, 0.3);\n    backdrop-filter: blur(20px);\n  }\n}\n\n.title {\n  @include general-font($font-Play, 4.8rem, bold, $col-white);\n  padding-top: 10px;\n  padding-left: 120px;\n  padding-bottom: 1.8rem;\n}\n\n.subtitle {\n  @include general-font($font-Mont, 2rem, normal, $col-rose);\n  padding-left: 120px;\n  line-height: 2.8rem;\n}\n\n.cta {\n  background-color: $col-mirage;\n\n  &-text {\n    @include general-font($font-Play, 2.2rem, bold, $col-white);\n  }\n}\n\n\n",".wrapperBackground {\n  background-image: url(\"https://i.ibb.co/brkypN9/bg.png\");\n  width: 100vw;\n  height: 100vh;\n  background-position: bottom;\n  background-size: cover;\n  background-repeat: no-repeat;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("38809571c948d560f3ad")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsZ0JBQWdCLEdBQUcsdURBQXVELHVCQUF1QixxQkFBcUIseUJBQXlCLGtCQUFrQixHQUFHLHFCQUFxQixxQkFBcUIsdUJBQXVCLHVCQUF1QixzQkFBc0IsaUNBQWlDLDhDQUE4Qyx1Q0FBdUMsaUJBQWlCLGdCQUFnQixnQkFBZ0Isa0VBQWtFLG9DQUFvQywwQkFBMEIsZ0JBQWdCLG1FQUFtRSxrQ0FBa0MsNEJBQTRCLE9BQU8sS0FBSyxzQkFBc0Isa0NBQWtDLG1DQUFtQyxLQUFLLHVCQUF1Qix3QkFBd0IsS0FBSyxzQkFBc0IsMkJBQTJCLEtBQUssR0FBRyx3QkFBd0Isa0JBQWtCLHNCQUFzQixpQkFBaUIsc0JBQXNCLGNBQWMsb0JBQW9CLEtBQUssZUFBZSxvQkFBb0IsOENBQThDLGtDQUFrQyxLQUFLLEdBQUcsWUFBWSxnRUFBZ0Usc0JBQXNCLHdCQUF3QiwyQkFBMkIsR0FBRyxlQUFlLCtEQUErRCx3QkFBd0Isd0JBQXdCLEdBQUcsVUFBVSxrQ0FBa0MsY0FBYyxrRUFBa0UsS0FBSyxHQUFHLDZCQUE2QiwrREFBK0QsaUJBQWlCLGtCQUFrQixnQ0FBZ0MsMkJBQTJCLGlDQUFpQyxHQUFHLG1CQUFtQjtBQUN4cVo7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDUHZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vZGV2ZWxvcG1lbnQvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbmZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIG1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubmF2V3JhcHBpbmcge1xcbiAgaGVpZ2h0OiAxM3ZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2TGluaywgLmpvdXJuZXkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yLCAxcywgMC41cztcXG59XFxuLm5hdkxpbms6bGluaywgLm5hdkxpbms6YWN0aXZlLCAubmF2TGluazp2aXNpdGVkLCAuam91cm5leTpsaW5rLCAuam91cm5leTphY3RpdmUsIC5qb3VybmV5OnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2TGluazpob3ZlciwgLmpvdXJuZXk6aG92ZXIge1xcbiAgY29sb3I6ICNlYWM0YmE7XFxufVxcblxcbi5uYXZMaW5rMSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmpvdXJuZXkge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBjb2xvcjogI2VhYzRiYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwi4p+2XFxcIjtcXG4gIHRvcDogLTRweDtcXG4gIGxlZnQ6IC0zNXB4O1xcbn1cXG5cXG4ucGFyYWdyYXBoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFyYWdyYXBoLS10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMTAwcHggMjBweCA4NXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnBhcmFncmFwaC0tdGl0bGVfdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZWFjNGJhO1xcbiAgcGFkZGluZzogNXB4IDEwMHB4IDAgODVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5wYXJhZ3JhcGg6bnRoLWNoaWxkKDEpIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XFxufVxcbi5wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwYWRkaW5nLXRvcDogNDVweDtcXG59XFxuLnBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XFxufVxcblxcbi5jb250ZW50TWFpbldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMTIycHggMCAwO1xcbn1cXG4uY29udGVudE1haW5XcmFwcGVyLWxlZnQge1xcbiAgd2lkdGg6IDU5LjV2dztcXG59XFxuLmNvbnRlbnRNYWluV3JhcHBlci1yaWdodCB7XFxuICB3aWR0aDogNDAuNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMS44cmVtO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogI2VhYzRiYTtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcbn1cXG5cXG4uY3RhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE2MWY7XFxufVxcbi5jdGEtdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndyYXBwZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLmliYi5jby9icmt5cE45L2JnLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9kZXZlbG9wbWVudC9zY3NzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vZGV2ZWxvcG1lbnQvc2Nzcy9nZW5lcmljL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9kZXZlbG9wbWVudC9zY3NzL2VsZW1lbnRzL19uYXYuc2Nzc1wiLFwid2VicGFjazovLy4vZGV2ZWxvcG1lbnQvc2Nzcy9zZXR0aW5ncy9fbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL2RldmVsb3BtZW50L3Njc3Mvc2V0dGluZ3MvX2NvbG9ycy1mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9kZXZlbG9wbWVudC9zY3NzL2VsZW1lbnRzL19wYXJhZ3JhcGguc2Nzc1wiLFwid2VicGFjazovLy4vZGV2ZWxvcG1lbnQvc2Nzcy9lbGVtZW50cy9fbWFpblBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vZGV2ZWxvcG1lbnQvc2Nzcy9lbGVtZW50cy9fd3JhcHBlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0FERUY7O0FDQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0FERUY7O0FDQ0E7RUFDRSxjQUFBO0FERUY7O0FDQ0E7RUFDRSxjQUFBO0FERUY7O0FDQ0E7RUFDRSxnQkFBQTtBREVGOztBQ0NBO0VBQ0UsWUFBQTtBREVGOztBQ0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QURFRjs7QUNDQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QURFRjs7QUNDQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QURFRjs7QUU5Q0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FGaURGOztBRTlDQTtFQ1BFLCtCQ0lVO0VESFYsa0JET2tDO0VDTmxDLGlCRE0yQztFQ0wzQyxZQ0pVO0VGVVYscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FGb0RGOztBRWpEQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBRm9ERjs7QUVqREE7RUNyQkUsK0JDSVU7RURIVixpQkRxQmtDO0VDcEJsQyxtQkRvQjBDO0VDbkIxQyxZQ0pVO0VGd0JWLHFCQUFBO0VBQ0EsMkJBQUE7QUZ1REY7QUVyREU7RUFDRSxxQkFBQTtBRnVESjtBRXBERTtFQUNFLGNFL0JPO0FKcUZYOztBRWxEQTtFQUNFLGlCQUFBO0FGcURGOztBRWxEQTtFQUNFLG9CQUFBO0VBQ0EsY0V6Q1M7RUYwQ1Qsa0JBQUE7QUZxREY7O0FFbERBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUZxREY7O0FLdkdBO0VBQ0UsV0FBQTtBTDBHRjtBS3hHRTtFRkZBLHFDQ01VO0VETFYsaUJFRW9DO0VGRHBDLGlCRUM0QztFRkE1QyxZQ0pVO0VDS1IsNkJBQUE7RUFDQSxtQkFBQTtBTDZHSjtBSzNHSTtFRlBGLHFDQ01VO0VETFYsZUVPc0M7RUZOdEMsbUJFTTRDO0VGTDVDLGNDSFM7RUNTTCx5QkFBQTtFQUNBLG1CQUFBO0FMZ0hOO0FLNUdFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBTDhHSjtBSzNHRTtFQUNFLGlCQUFBO0FMNkdKO0FLMUdFO0VBQ0Usb0JBQUE7QUw0R0o7O0FNcklBO0VBQ0UsYUFBQTtFQUNBLFlGRlU7RUVHVixZQUFBO0VBQ0EsaUJBQUE7QU53SUY7QU10SUU7RUFDRSxhQUFBO0FOd0lKO0FNcklFO0VBQ0UsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsMkJBQUE7QU51SUo7O0FNbklBO0VIaEJFLCtCQ0lVO0VESFYsaUJHZ0JrQztFSGZsQyxpQkdlMEM7RUhkMUMsWUNKVTtFRW1CVixpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QU55SUY7O0FNdElBO0VIdkJFLHFDQ01VO0VETFYsZUd1QmtDO0VIdEJsQyxtQkdzQndDO0VIckJ4QyxjQ0hTO0VFeUJULG1CQUFBO0VBQ0EsbUJBQUE7QU40SUY7O0FNeklBO0VBQ0UseUJGN0JXO0FKeUtiO0FNMUlFO0VIaENBLCtCQ0lVO0VESFYsaUJHZ0NvQztFSC9CcEMsaUJHK0I0QztFSDlCNUMsWUNKVTtBSmlMWjs7QU9qTEE7RUFDRSx3REFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FQb0xGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbmZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIG1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsIHE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubmF2V3JhcHBpbmcge1xcbiAgaGVpZ2h0OiAxM3ZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2TGluaywgLmpvdXJuZXkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yLCAxcywgMC41cztcXG59XFxuLm5hdkxpbms6bGluaywgLm5hdkxpbms6YWN0aXZlLCAubmF2TGluazp2aXNpdGVkLCAuam91cm5leTpsaW5rLCAuam91cm5leTphY3RpdmUsIC5qb3VybmV5OnZpc2l0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4ubmF2TGluazpob3ZlciwgLmpvdXJuZXk6aG92ZXIge1xcbiAgY29sb3I6ICNlYWM0YmE7XFxufVxcblxcbi5uYXZMaW5rMSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmpvdXJuZXkge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBjb2xvcjogI2VhYzRiYTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwi4p+2XFxcIjtcXG4gIHRvcDogLTRweDtcXG4gIGxlZnQ6IC0zNXB4O1xcbn1cXG5cXG4ucGFyYWdyYXBoIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucGFyYWdyYXBoLS10aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHggMTAwcHggMjBweCA4NXB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnBhcmFncmFwaC0tdGl0bGVfdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbnRzZXJyYXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZWFjNGJhO1xcbiAgcGFkZGluZzogNXB4IDEwMHB4IDAgODVweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5wYXJhZ3JhcGg6bnRoLWNoaWxkKDEpIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XFxufVxcbi5wYXJhZ3JhcGg6Zmlyc3Qtb2YtdHlwZSB7XFxuICBwYWRkaW5nLXRvcDogNDVweDtcXG59XFxuLnBhcmFncmFwaDpsYXN0LW9mLXR5cGUge1xcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XFxufVxcblxcbi5jb250ZW50TWFpbldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMTIycHggMCAwO1xcbn1cXG4uY29udGVudE1haW5XcmFwcGVyLWxlZnQge1xcbiAgd2lkdGg6IDU5LjV2dztcXG59XFxuLmNvbnRlbnRNYWluV3JhcHBlci1yaWdodCB7XFxuICB3aWR0aDogNDAuNXZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgMzYsIDM2LCAwLjMpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMS44cmVtO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb250c2VycmF0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogI2VhYzRiYTtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcbn1cXG5cXG4uY3RhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTE2MWY7XFxufVxcbi5jdGEtdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndyYXBwZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLmliYi5jby9icmt5cE45L2JnLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cIixcIiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlb3tcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgbWFpbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5e1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHF7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlcntcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGV7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0e1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XCIsXCIubmF2V3JhcHBpbmcge1xcbiAgaGVpZ2h0OiAxM3ZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gIEBpbmNsdWRlIGdlbmVyYWwtZm9udCgkZm9udC1QbGF5LCAxLjc1cmVtLCBib2xkLCAkY29sLXdoaXRlKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXJlbTtcXG59XFxuXFxuLm5hdiB7XFxuICB3aWR0aDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2TGluaywgLmpvdXJuZXkge1xcbiAgQGluY2x1ZGUgZ2VuZXJhbC1mb250KCRmb250LVBsYXksIDEuNXJlbSwgbm9ybWFsLCAkY29sLXdoaXRlKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yLCAxcywgMC41cztcXG5cXG4gICY6bGluaywgJjphY3RpdmUsICY6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIH1cXG5cXG4gICY6aG92ZXIge1xcbiAgICBjb2xvcjogJGNvbC1yb3NlO1xcbiAgfVxcbn1cXG5cXG4ubmF2TGluazEge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5qb3VybmV5IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgY29sb3I6ICRjb2wtcm9zZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3RjZcXFwiO1xcbiAgdG9wOiAtNHB4O1xcbiAgbGVmdDogLTM1cHg7XFxufVwiLFwiQG1peGluIGdlbmVyYWwtZm9udCgkZm9udCwgJHNpemUsICR3ZWlnaHQsICRjb2xvcikge1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZm9udC1zaXplOiAkc2l6ZTtcXG4gIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcbiAgY29sb3I6ICRjb2xvcjtcXG59XCIsXCIkY29sLXdoaXRlOiB3aGl0ZTtcXG4kY29sLXJvc2U6ICNlYWM0YmE7XFxuJGNvbC1taXJhZ2U6ICMxOTE2MWY7XFxuJGNvbC12dWxjYW46ICMxNjFhMjA7XFxuJGNvbC1henRlYzogIzFlMWMyMDtcXG4kZm9udC1QbGF5OiAnUGxheScsIHNhbnMtc2VyaWY7XFxuJGZvbnQtUmVkSGF0OiAnUmVkIEhhdCBEaXNwbGF5Jywgc2Fucy1zZXJpZjtcXG4kZm9udC1Nb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXCIsXCIucGFyYWdyYXBoIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgJi0tdGl0bGUge1xcbiAgICBAaW5jbHVkZSBnZW5lcmFsLWZvbnQoJGZvbnQtTW9udCwgMS41cmVtLCBib2xkLCAkY29sLXdoaXRlKTtcXG4gICAgcGFkZGluZzogMjBweCAxMDBweCAyMHB4IDg1cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuXFxuICAgICZfdGV4dCB7XFxuICAgICAgQGluY2x1ZGUgZ2VuZXJhbC1mb250KCRmb250LU1vbnQsIDFyZW0sIG5vcm1hbCwgJGNvbC1yb3NlKTtcXG4gICAgICBwYWRkaW5nOiA1cHggMTAwcHggMCA4NXB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gICY6bnRoLWNoaWxkKDEpIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xcbiAgfVxcblxcbiAgJjpmaXJzdC1vZi10eXBlIHtcXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XFxuICB9XFxuXFxuICAmOmxhc3Qtb2YtdHlwZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0NXB4O1xcbiAgfVxcbn1cIixcIi5jb250ZW50TWFpbldyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAkY29sLXdoaXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAxMjJweCAwIDA7XFxuXFxuICAmLWxlZnQge1xcbiAgICB3aWR0aDogNTkuNXZ3O1xcbiAgfVxcblxcbiAgJi1yaWdodCB7XFxuICAgIHdpZHRoOiA0MC41dnc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDM2LCAzNiwgMC4zKTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgfVxcbn1cXG5cXG4udGl0bGUge1xcbiAgQGluY2x1ZGUgZ2VuZXJhbC1mb250KCRmb250LVBsYXksIDQuOHJlbSwgYm9sZCwgJGNvbC13aGl0ZSk7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMS44cmVtO1xcbn1cXG5cXG4uc3VidGl0bGUge1xcbiAgQGluY2x1ZGUgZ2VuZXJhbC1mb250KCRmb250LU1vbnQsIDJyZW0sIG5vcm1hbCwgJGNvbC1yb3NlKTtcXG4gIHBhZGRpbmctbGVmdDogMTIwcHg7XFxuICBsaW5lLWhlaWdodDogMi44cmVtO1xcbn1cXG5cXG4uY3RhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2wtbWlyYWdlO1xcblxcbiAgJi10ZXh0IHtcXG4gICAgQGluY2x1ZGUgZ2VuZXJhbC1mb250KCRmb250LVBsYXksIDIuMnJlbSwgYm9sZCwgJGNvbC13aGl0ZSk7XFxuICB9XFxufVxcblxcblxcblwiLFwiLndyYXBwZXJCYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9pLmliYi5jby9icmt5cE45L2JnLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzg4MDk1NzFjOTQ4ZDU2MGYzYWRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=