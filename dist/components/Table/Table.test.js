"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _Table = _interopRequireDefault(require("./Table"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<Table />', function () {
  test('it should mount', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Table, null));
    var Table = _react2.screen.getByTestId('Table');
    expect(Table).toBeInTheDocument();
  });
});