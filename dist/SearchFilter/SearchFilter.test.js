"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _SearchFilter = _interopRequireDefault(require("./SearchFilter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<SearchFilter />', function () {
  test('it should mount', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_SearchFilter.default, null));
    var searchFilter = _react2.screen.getByTestId('SearchFilter');
    expect(searchFilter).toBeInTheDocument();
  });
});