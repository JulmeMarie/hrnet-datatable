"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _store = require("../redux/store");
var _DataTable = _interopRequireDefault(require("./DataTable/DataTable"));
var _data = _interopRequireDefault(require("../data"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Hrnet/Datatable',
  component: _DataTable.default
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement(_DataTable.default, args));
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  inputData: _data.default
};