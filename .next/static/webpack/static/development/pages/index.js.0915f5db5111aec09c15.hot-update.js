webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/appbar/index.js":
/*!************************************!*\
  !*** ./components/appbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/InputBase/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "./node_modules/@material-ui/core/styles/colorManipulator.js");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! postcss */ "./node_modules/postcss/lib/postcss.js");
/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(postcss__WEBPACK_IMPORTED_MODULE_17__);



















var styles = function styles(theme) {
  return {
    root: {
      width: '100%'
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      display: 'none'
    }, theme.breakpoints.up('sm'), {
      display: 'block'
    }),
    search: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_13__["fade"])(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_13__["fade"])(theme.palette.common.white, 0.3)
      },
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: 120,
      '&:focus': {
        width: 200
      }
    })
  };
};

var SearchAppBar =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchAppBar, _Component);

  function SearchAppBar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchAppBar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchAppBar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchAppBar, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return (//
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: classes.root
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8___default.a, {
          position: "static"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
          className: classes.menuButton,
          color: "inherit",
          "aria-label": "Open drawer"
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_15___default.a, null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11___default.a, {
          className: classes.title,
          variant: "h6",
          color: "inherit",
          noWrap: true
        }, "Material-UI"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: classes.search
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_12___default.a, {
          placeholder: "Search\u2026",
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          }
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: classes.searchIcon
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_16___default.a, null))))))
      );
    }
  }]);

  return SearchAppBar;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

SearchAppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_14__["withStyles"])(styles)(SearchAppBar));

/***/ })

})
//# sourceMappingURL=index.js.0915f5db5111aec09c15.hot-update.js.map