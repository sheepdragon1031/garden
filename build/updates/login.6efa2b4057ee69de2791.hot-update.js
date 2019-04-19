require("source-map-support").install();
exports.id = "login";
exports.modules = {

/***/ "./src/routes/login/Login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("isomorphic-style-loader/lib/withStyles");
/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/login/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/drago/Desktop/garden/src/routes/login/Login.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */





class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, this.props.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.lead,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Log in with your username or company email address."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.lineThrough,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "OR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      method: "post",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "usernameOrEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Username or email address:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      id: "usernameOrEmail",
      type: "text",
      name: "usernameOrEmail",
      autoFocus: true // eslint-disable-line jsx-a11y/no-autofocus
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Password:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.input,
      id: "password",
      type: "password",
      name: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.formGroup,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _Login_css__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      type: "submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Log in")))));
  }

}

_defineProperty(Login, "propTypes", {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_Login_css__WEBPACK_IMPORTED_MODULE_3___default.a)(Login));

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlcy9sb2dpbi42ZWZhMmI0MDU3ZWU2OWRlMjc5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZHJhZ28vRGVza3RvcC9nYXJkZW4vc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlYWN0IFN0YXJ0ZXIgS2l0IChodHRwczovL3d3dy5yZWFjdHN0YXJ0ZXJraXQuY29tLylcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxNC1wcmVzZW50IEtyaWFzb2Z0LCBMTEMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLnR4dCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvbGliL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHMgZnJvbSAnLi9Mb2dpbi5jc3MnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17cy5sZWFkfT5cbiAgICAgICAgICAgIExvZyBpbiB3aXRoIHlvdXIgdXNlcm5hbWUgb3IgY29tcGFueSBlbWFpbCBhZGRyZXNzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy5mYWNlYm9va30gaHJlZj1cIi9sb2dpbi9mYWNlYm9va1wiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMiAxNmwxLTVoLTVWN2MwLTEuNTQ0Ljc4NC0yIDMtMmgyVjBoLTRjLTQuMDcyIDAtNyAyLjQzNS03IDd2NEg3djVoNXYxNGg2VjE2aDR6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDxzcGFuPkxvZyBpbiB3aXRoIEZhY2Vib29rPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3MuZ29vZ2xlfSBocmVmPVwiL2xvZ2luL2dvb2dsZVwiPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmljb259XG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGQ9e1xuICAgICAgICAgICAgICAgICAgICAnTTMwIDEzaC00VjloLTJ2NGgtNHYyaDR2NGgydi00aDRtLTE1IDJzLTItMS4xNS0yLTJjMCAwLS41LTEuODI4IDEtMyAnICtcbiAgICAgICAgICAgICAgICAgICAgJzEuNTM3LTEuMiAzLTMuMDM1IDMtNSAwLTIuMzM2LTEuMDQ2LTUtMy02aDNsMi4zODctMUgxMEM1LjgzNSAwIDIgMy4zNDUgMiA3YzAgJyArXG4gICAgICAgICAgICAgICAgICAgICczLjczNSAyLjg1IDYuNTYgNy4wODYgNi41Ni4yOTUgMCAuNTgtLjAwNi44Ni0uMDI1LS4yNzMuNTI2LS40NyAxLjEyLS40NyAxLjczNSAnICtcbiAgICAgICAgICAgICAgICAgICAgJzAgMS4wMzcuODE3IDIuMDQyIDEuNTIzIDIuNzNIOWMtNS4xNiAwLTkgMi41OTMtOSA2IDAgMy4zNTUgNC44NyA2IDEwLjAzIDYgNS44ODIgJyArXG4gICAgICAgICAgICAgICAgICAgICcwIDkuOTctMyA5Ljk3LTcgMC0yLjY5LTIuNTQ1LTQuMjY0LTUtNnptLTQtNGMtMi4zOTUgMC01LjU4Ny0yLjg1Ny02LTZDNC41ODcgJyArXG4gICAgICAgICAgICAgICAgICAgICczLjg1NiA2LjYwNy45MyA5IDFjMi4zOTQuMDcgNC42MDMgMi45MDggNS4wMTcgNi4wNTJDMTQuNDMgMTAuMTk1IDEzIDEzIDExICcgK1xuICAgICAgICAgICAgICAgICAgICAnMTN6bS0xIDE1Yy0zLjU2NiAwLTctMS4yOS03LTQgMC0yLjY1OCAzLjQzNC01LjAzOCA3LTUgLjgzMi4wMSAyIDAgMiAwIDEgMCAnICtcbiAgICAgICAgICAgICAgICAgICAgJzIuODguODggNCAyIDEgMSAxIDIuNjc0IDEgMyAwIDMtMS45ODYgNC03IDR6J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb2cgaW4gd2l0aCBHb29nbGU8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cy50d2l0dGVyfSBocmVmPVwiL2xvZ2luL3R3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pY29ufVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDMwXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPXtcbiAgICAgICAgICAgICAgICAgICAgJ00zMCA2LjcwOGMtMS4xMDUuNDktMi43NTYgMS4xNDMtNCAxLjI5MiAxLjI3My0uNzYyIDIuNTQtMi41NiAnICtcbiAgICAgICAgICAgICAgICAgICAgJzMtNC0uOTcuNTc3LTIuMDg3IDEuMzU1LTMuMjI3IDEuNzczTDI1IDVjLTEuMTItMS4xOTctMi4yMy0yLTQtMi0zLjM5OCAwLTYgJyArXG4gICAgICAgICAgICAgICAgICAgICcyLjYwMi02IDYgMCAuNC4wNDcuNy4xMS45NTZMMTUgMTBDOSAxMCA1LjAzNCA4LjcyNCAyIDVjLS41My45MDgtMSAxLjg3Mi0xICcgK1xuICAgICAgICAgICAgICAgICAgICAnMyAwIDIuMTM2IDEuMzQ4IDMuODk0IDMgNS0xLjAxLS4wMzMtMi4xNy0uNTQyLTMtMSAwIDIuOTggNC4xODYgNi40MzIgNyA3LTEgJyArXG4gICAgICAgICAgICAgICAgICAgICcxLTQuNjIzLjA3NC01IDAgLjc4NCAyLjQ0NyAzLjMxIDMuOTUgNiA0LTIuMTA1IDEuNjQ4LTQuNjQ3IDIuNTEtNy41MyAyLjUxLS41ICcgK1xuICAgICAgICAgICAgICAgICAgICAnMC0uOTg4LS4wMy0xLjQ3LS4wODRDMi43MjMgMjcuMTcgNi41MjMgMjggMTAgMjhjMTEuMzIyIDAgMTctOC44NjcgMTctMTcgJyArXG4gICAgICAgICAgICAgICAgICAgICcwLS4yNjguMDA4LS43MzYgMC0xIDEuMi0uODY4IDIuMTcyLTIuMDU4IDMtMy4yOTJ6J1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8c3Bhbj5Mb2cgaW4gd2l0aCBUd2l0dGVyPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17cy5saW5lVGhyb3VnaH0+T1I8L3N0cm9uZz5cbiAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9PlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzLmxhYmVsfSBodG1sRm9yPVwidXNlcm5hbWVPckVtYWlsXCI+XG4gICAgICAgICAgICAgICAgVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzczpcbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVPckVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZU9yRW1haWxcIlxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzIC8vIGVzbGludC1kaXNhYmxlLWxpbmUganN4LWExMXkvbm8tYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZm9ybUdyb3VwfT5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17cy5sYWJlbH0gaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaW5wdXR9XG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmZvcm1Hcm91cH0+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzLmJ1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTG9naW4pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0VBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUEvR0E7QUFDQTtBQURBO0FBRUE7QUFEQTtBQUNBO0FBK0dBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=