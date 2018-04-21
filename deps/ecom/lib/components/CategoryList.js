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

var _CategoryItem = require('./CategoryItem');

var _CategoryItem2 = _interopRequireDefault(_CategoryItem);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryList = function (_React$PureComponent) {
  (0, _inherits3.default)(CategoryList, _React$PureComponent);

  function CategoryList() {
    (0, _classCallCheck3.default)(this, CategoryList);
    return (0, _possibleConstructorReturn3.default)(this, (CategoryList.__proto__ || (0, _getPrototypeOf2.default)(CategoryList)).apply(this, arguments));
  }

  (0, _createClass3.default)(CategoryList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        this.props.categories.map(function (category) {
          return _react2.default.createElement(_CategoryItem2.default, {
            key: category.id,
            category: category,
            isActive: category.id === _this2.props.activeCategoryId,
            onClick: _this2.props.onCategoryClick
          });
        })
      );
    }
  }]);
  return CategoryList;
}(_react2.default.PureComponent);

var mapStateToProps = function mapStateToProps(state) {
  return {
    categories: state.categories,
    activeCategoryId: state.activeCategoryId
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CategoryList);