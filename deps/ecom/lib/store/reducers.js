'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainReducer = function mainReducer(state, action) {
  switch (action.type) {
    case 'FETCH_CATEGORIES':
      return (0, _extends3.default)({}, state, {
        categories: action.categories
      });
    case 'SHOW_PRODUCTS_FOR_CATEGORY':
      return (0, _extends3.default)({}, state, {
        products: action.products,
        activeCategoryId: action.categoryId
      });
    case 'ADD_TO_CART':
      if (!state.cart.find(function (cp) {
        return cp.id === action.product.id;
      })) {
        return (0, _extends3.default)({}, state, {
          cart: [].concat((0, _toConsumableArray3.default)(state.cart), [action.product]),
          showCart: true
        });
      }
    case 'SEARCH_PRODUCTS':
      return (0, _extends3.default)({}, state, {
        products: action.productsForCurrentSearch,
        activeCategoryId: undefined
      });
    default:
      return state;
  }
};

exports.default = mainReducer;