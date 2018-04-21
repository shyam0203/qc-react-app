'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Product = require('./Product');

var _Product2 = _interopRequireDefault(_Product);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductList = function ProductList(_ref) {
  var products = _ref.products;
  return _react2.default.createElement(
    'div',
    null,
    products.map(function (product) {
      return _react2.default.createElement(_Product2.default, { key: product.id, product: product });
    })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: state.products
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProductList);