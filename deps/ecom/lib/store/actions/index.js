'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = exports.searchAllProducts = exports.showProductsForCategory = exports.fetchCategories = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _apiClient = require('./api-client');

var _apiClient2 = _interopRequireDefault(_apiClient);

var _config = require('../../../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiClient = (0, _apiClient2.default)(_config2.default.config);

var fetchCategories = exports.fetchCategories = function fetchCategories() {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(dispatch) {
      var categories;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return apiClient.getCategories();

            case 2:
              categories = _context.sent;

              dispatch({ type: 'FETCH_CATEGORIES', categories: categories });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var showProductsForCategory = exports.showProductsForCategory = function showProductsForCategory(categoryId) {
  return function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(dispatch) {
      var products;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return apiClient.getProducts(categoryId);

            case 2:
              products = _context2.sent;

              dispatch({
                type: 'SHOW_PRODUCTS_FOR_CATEGORY',
                products: products,
                categoryId: categoryId
              });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var searchAllProducts = exports.searchAllProducts = function searchAllProducts(q) {
  return function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(dispatch) {
      var productsForCurrentSearch;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return apiClient.getProductsForSearch(q);

            case 2:
              productsForCurrentSearch = _context3.sent;

              dispatch({
                type: 'SEARCH_PRODUCTS',
                productsForCurrentSearch: productsForCurrentSearch
              });

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var addToCart = exports.addToCart = function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    product: product
  };
};