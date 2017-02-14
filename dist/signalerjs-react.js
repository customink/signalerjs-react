(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("signalerjs"));
	else if(typeof define === 'function' && define.amd)
		define(["react", ], factory);
	else if(typeof exports === 'object')
		exports["signalerjs-react"] = factory(require("react"), require("signalerjs"));
	else
		root["signalerjs-react"] = factory(root["React"], root["signalerjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _signalerjs = __webpack_require__(3);

var _signalerjs2 = _interopRequireDefault(_signalerjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignalProvider = function (_Component) {
  _inherits(SignalProvider, _Component);

  function SignalProvider(props, context) {
    _classCallCheck(this, SignalProvider);

    var _this = _possibleConstructorReturn(this, (SignalProvider.__proto__ || Object.getPrototypeOf(SignalProvider)).call(this, props, context));

    _this.updateSignals = function (flags) {
      _this.signals = flags;
      _this.forceUpdate();
    };

    _this.signals = null;
    _this.signaler = new _signalerjs2.default(props.features);
    return _this;
  }

  _createClass(SignalProvider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        signals: this.signals,
        updateSignals: this.updateSignals
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.signaler.featureFlags().then(this.updateSignals);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.signals && _react2.default.Children.only(this.props.children);
    }
  }]);

  return SignalProvider;
}(_react.Component);

SignalProvider.propTypes = {
  features: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired,
  children: _react.PropTypes.element
};
SignalProvider.childContextTypes = {
  signals: _react.PropTypes.object,
  updateSignals: _react.PropTypes.func
};
exports.default = SignalProvider;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = featureFlagged;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _SignalProvider = __webpack_require__(0);

var _SignalProvider2 = _interopRequireDefault(_SignalProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function featureFlagged() {
  var mapSignalsToProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (signals) {
    return signals;
  };

  return function (WrappedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
      _inherits(SignalWrapper, _Component);

      function SignalWrapper() {
        _classCallCheck(this, SignalWrapper);

        return _possibleConstructorReturn(this, (SignalWrapper.__proto__ || Object.getPrototypeOf(SignalWrapper)).apply(this, arguments));
      }

      _createClass(SignalWrapper, [{
        key: 'render',
        value: function render() {
          var signalledProps = this.context.signals ? mapSignalsToProps(this.context.signals, this.props) : {};
          return _react2.default.createElement(WrappedComponent, _extends({}, this.props, signalledProps));
        }
      }]);

      return SignalWrapper;
    }(_react.Component), _class.contextTypes = _SignalProvider2.default.childContextTypes, _class.displayName = 'Signals(' + WrappedComponent.displayName + ')', _temp;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.featureFlagged = exports.SignalProvider = undefined;

var _SignalProvider2 = __webpack_require__(0);

var _SignalProvider3 = _interopRequireDefault(_SignalProvider2);

var _signalFactory = __webpack_require__(2);

var _signalFactory2 = _interopRequireDefault(_signalFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SignalProvider = _SignalProvider3.default;
exports.featureFlagged = _signalFactory2.default;

/***/ })
/******/ ]);
});