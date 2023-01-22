"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reducer = require("../../redux/reducer");
require("./SearchFilter.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This component allows to display a search input field
 * @param {*} param0 
 * @returns 
 */
var SearchFilter = function SearchFilter() {
  var dispatch = (0, _reactRedux.useDispatch)();

  /**
   * Allows to handle search on value change
   * @param {*} event 
   */
  var handleChange = function handleChange(event) {
    dispatch((0, _reducer.setSearch)(event.target.value));
    dispatch((0, _reducer.display)());
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "SearchFilter",
    "data-testid": "SearchFilter"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "search"
  }, "Search: "), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    onChange: handleChange,
    id: "search"
  }));
};
var _default = SearchFilter;
exports.default = _default;