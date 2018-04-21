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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cart = function (_React$PureComponent) {
  (0, _inherits3.default)(Cart, _React$PureComponent);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Cart.__proto__ || (0, _getPrototypeOf2.default)(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.cartTotal = function () {
      return _this.props.products.reduce(function (acc, curr) {
        return acc + curr.Price;
      }, 0) / 100;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Cart, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'ul',
          null,
          this.props.products.map(function (product) {
            return _react2.default.createElement(
              'li',
              { key: product.id },
              product.CrossReference,
              ' - $',
              product.Price / 100
            );
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          'Total: $',
          this.cartTotal()
        )
      );
    }
  }]);
  return Cart;
}(_react2.default.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.cart
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Cart);