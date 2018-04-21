'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

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

var _CategoryList = require('./CategoryList');

var _CategoryList2 = _interopRequireDefault(_CategoryList);

var _ProductList = require('./ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

var _Cart = require('./Cart');

var _Cart2 = _interopRequireDefault(_Cart);

var _Search = require('./Search');

var _Search2 = _interopRequireDefault(_Search);

var _reactRedux = require('react-redux');

var _actions = require('../store/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = function (_React$PureComponent) {
  (0, _inherits3.default)(App, _React$PureComponent);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_Search2.default, null),
        _react2.default.createElement(
          'div',
          { id: 'container', style: { display: 'flex' } },
          _react2.default.createElement(
            'div',
            {
              id: 'leftSidebar',
              style: { flex: 3, borderRight: 'thin solid #aaa', paddingRight: 10 } },
            _react2.default.createElement(_CategoryList2.default, { onCategoryClick: this.props.showProductsForCategory })
          ),
          _react2.default.createElement(
            'div',
            { id: 'main', style: { flex: 5 } },
            _react2.default.createElement(_ProductList2.default, null)
          ),
          _react2.default.createElement(
            'div',
            {
              id: 'rightSidebar',
              style: {
                flex: 2,
                display: this.props.showCart ? 'inline-block' : 'none'
              } },
            'The Cart',
            _react2.default.createElement(
              'button',
              { onClick: function onClick() {
                  return _this2.setState({ showCart: false });
                } },
              '=>'
            ),
            _react2.default.createElement(_Cart2.default, null)
          )
        )
      );
    }
  }]);
  return App;
}(_react2.default.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    showCart: state.showCart
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchCategories: _actions.fetchCategories, showProductsForCategory: _actions.showProductsForCategory })(App);