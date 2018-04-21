'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Product = function (_React$Component) {
  (0, _inherits3.default)(Product, _React$Component);

  function Product() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Product);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Product.__proto__ || (0, _getPrototypeOf2.default)(Product)).call.apply(_ref, [this].concat(args))), _this), _this.handleAddToCart = function () {
      return _this.props.addToCart(_this.props.product);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Product, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: { margin: 12, border: 'thin solid #aaa', padding: 5 } },
        this.props.product.ItemDescription,
        _react2.default.createElement(
          'div',
          { style: { fontWeight: 'bold' } },
          '$',
          this.props.product.Price / 100
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleAddToCart },
          'Add To Cart'
        )
      );
    }
  }]);
  return Product;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(null, { addToCart: _actions.addToCart })(Product);