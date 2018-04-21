'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  return {
    getCategories: function getCategories() {
      return _axios2.default.post(config.apiHost + '?query=\n      {\n        categories {\n          id: _id\n          ProductLine\n          ProductSeries\n        }\n      }\n    ').then(function (resp) {
        return resp.data.data.categories;
      });
    },
    getProducts: function getProducts(categoryId) {
      return _axios2.default.post(config.apiHost + '?query=\n      query GetProductsForCategory ($categoryId: String!) {\n        category(_id: $categoryId) {\n          products {\n            id: _id\n            CrossReference\n            ItemDescription\n            Price\n            category {\n              ProductLine\n              ProductSeries\n            }\n          }\n        }\n      }\n    &variables=' + (0, _stringify2.default)({ categoryId: categoryId })).then(function (resp) {
        return resp.data.data.category.products;
      });
    },
    getProductsForSearch: function getProductsForSearch(q) {
      return _axios2.default.post(config.apiHost + '?query=\n      query GetProductsForSearch ($q: String!) {\n        products(q: $q) {\n          id: _id\n          CrossReference\n          ItemDescription\n          Price\n          category {\n            ProductLine\n            ProductSeries\n          }\n        }\n      }\n    &variables=' + (0, _stringify2.default)({ q: q })).then(function (resp) {
        return resp.data.data.products;
      });
    }
  };
};