"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./EntriesFilter.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//An array of entries by default
var entriesArr = [10, 25, 50, 100];

/**
 * This component allows to display a select option field for entries
 * @param {*} param0 
 * @returns 
 */
var EntriesFilter = function EntriesFilter(_ref) {
  var updateEntries = _ref.updateEntries;
  var handleChange = function handleChange(event) {
    updateEntries(Number(event.target.value));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "EntriesFilter",
    "data-testid": "EntriesFilter"
  }, /*#__PURE__*/_react.default.createElement("div", null, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange
  }, entriesArr.map(function (optValue, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: optValue
    }, optValue);
  })), /*#__PURE__*/_react.default.createElement("div", null, "entries"));
};
EntriesFilter.propTypes = {};
EntriesFilter.defaultProps = {};
var _default = EntriesFilter;
exports.default = _default;