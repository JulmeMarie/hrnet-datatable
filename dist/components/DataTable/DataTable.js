"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _store = require("../../redux/store");
var _reducer = require("../../redux/reducer");
require("./DataTable.css");
var _Table = _interopRequireDefault(require("../Table/Table"));
var _EntriesFilter = _interopRequireDefault(require("../EntriesFilter/EntriesFilter"));
var _SearchFilter = _interopRequireDefault(require("../SearchFilter/SearchFilter"));
var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react-hooks/exhaustive-deps */

var DatatableWrapper = function DatatableWrapper(_ref) {
  var inputData = _ref.inputData;
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _store.store
  }, /*#__PURE__*/_react.default.createElement(DataTable, {
    inputData: inputData
  }));
};

/**
 * This component allows you to create a datatable
 * It takes one props : "inputData"
 */
var DataTable = function DataTable(_ref2) {
  var inputData = _ref2.inputData;
  var dispatch = (0, _reactRedux.useDispatch)();
  (0, _react.useEffect)(function () {
    dispatch((0, _reducer.setIncomingData)(inputData));
    dispatch((0, _reducer.compute)());
  }, [inputData]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DataTable",
    "data-testid": "DataTable"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Filter"
  }, /*#__PURE__*/_react.default.createElement(_EntriesFilter.default, null), /*#__PURE__*/_react.default.createElement(_SearchFilter.default, null)), /*#__PURE__*/_react.default.createElement(_Table.default, null), /*#__PURE__*/_react.default.createElement(_Pagination.default, null));
};
var _default = DatatableWrapper;
exports.default = _default;