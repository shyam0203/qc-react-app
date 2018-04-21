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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoryItem = function (_React$PureComponent) {
  (0, _inherits3.default)(CategoryItem, _React$PureComponent);

  function CategoryItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CategoryItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CategoryItem.__proto__ || (0, _getPrototypeOf2.default)(CategoryItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _this.props.onClick(_this.props.category.id);
      window.history.pushState('', null, '/category/' + _this.props.category.id);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CategoryItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          category = _props.category,
          isActive = _props.isActive;

      return _react2.default.createElement(
        'div',
        {
          className: 'category',
          style: {
            cursor: 'pointer',
            marginTop: 5,
            fontWeight: isActive ? 'bold' : 'normal'
          },
          onClick: this.handleClick },
        category.ProductLine,
        ' ',
        category.ProductSeries
      );
    }
  }]);
  return CategoryItem;
}(_react2.default.PureComponent);

exports.default = CategoryItem;