'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _App = require('./App');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_enzyme2.default.configure({ adapter: new _enzymeAdapterReact2.default() });

describe('App', function () {
  it('works', function () {
    var tree = (0, _enzyme.shallow)(_react2.default.createElement(_App.App, null));

    expect(tree).toMatchSnapshot();
  });
});