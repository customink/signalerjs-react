(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["signalerjs-react"] = factory(require("react"));
	else
		root["signalerjs-react"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signaler = function (_Component) {
	  _inherits(Signaler, _Component);

	  function Signaler() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Signaler);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signaler.__proto__ || Object.getPrototypeOf(Signaler)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      flag: undefined
	    }, _this.mounted = true, _this.getFlag = function () {
	      _this.props.signalerInstance.featureFlag(_this.props.featureName).then(function (flag) {
	        if (_this.mounted) {
	          _this.setState({ flag: flag });
	        }
	      });
	    }, _this.getComponent = function () {
	      var children = [].concat(_this.props.children);
	      return children.filter(function (child) {
	        var childFlags = [].concat(child.props.flag);
	        var regex = new RegExp('^' + childFlags.join('|') + '$');
	        return regex.test(_this.state.flag);
	      })[0] || null;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Signaler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.getFlag();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.getFlag();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.mounted = false;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (typeof this.props.children === 'function') {
	        return this.props.children(this.state.flag);
	      }
	      var component = this.getComponent();
	      if (this.props.wrapper) {
	        return _react2.default.createElement(this.props.wrapper, this.props, component);
	      } else {
	        return component;
	      }
	    }
	  }]);

	  return Signaler;
	}(_react.Component);

	Signaler.displayName = 'Signaler';
	Signaler.propTypes = {
	  children: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]).isRequired,
	  signalerInstance: _react.PropTypes.object.isRequired,
	  featureName: _react.PropTypes.string.isRequired,
	  wrapper: _react2.default.PropTypes.node
	};
	exports.default = Signaler;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;