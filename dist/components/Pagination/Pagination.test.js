"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _Pagination = _interopRequireDefault(require("./Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<Pagination />', function () {
  test('it should mount', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(Pagination, null));
    var Pagination = _react2.screen.getByTestId('Pagination');
    expect(Pagination).toBeInTheDocument();
  });
});