"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reducer = require("../../redux/reducer");
require("./EntriesFilter.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//An array of entries by default
var entriesArr = [10, 25, 50, 100];

/**
 * This component allows to display a select option field for entries
 * @param {*} param0 
 * @returns 
 */
var EntriesFilter = function EntriesFilter() {
  var dispatch = (0, _reactRedux.useDispatch)();

  /**
   * Allow to handle change entry
   * @param {*} event 
   */
  var handleChange = function handleChange(event) {
    dispatch((0, _reducer.setEntries)(Number(event.target.value)));
    dispatch((0, _reducer.compute)());
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "EntriesFilter",
    "data-testid": "EntriesFilter"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "entries"
  }, "Show"), /*#__PURE__*/_react.default.createElement("select", {
    onChange: handleChange,
    id: "entries"
  }, entriesArr.map(function (optValue, index) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      value: optValue
    }, optValue);
  })), /*#__PURE__*/_react.default.createElement("div", null, "entries"));
};
var _default = EntriesFilter;
exports.default = _default;