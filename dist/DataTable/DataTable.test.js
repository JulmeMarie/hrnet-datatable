"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _DataTable = _interopRequireDefault(require("./DataTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<DataTable />', function () {
  test('it should mount', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(DataTable, null));
    var DataTable = _react2.screen.getByTestId('DataTable');
    expect(DataTable).toBeInTheDocument();
  });
});