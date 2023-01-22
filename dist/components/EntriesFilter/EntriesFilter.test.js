"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _EntriesFilter = _interopRequireDefault(require("./EntriesFilter"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('<EntriesFilter />', function () {
  test('it should mount', function () {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_EntriesFilter.default, null));
    var entriesFilter = _react2.screen.getByTestId('EntriesFilter');
    expect(entriesFilter).toBeInTheDocument();
  });
});