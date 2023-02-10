"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRedux = require("react-redux");
var _reducer = require("../../redux/reducer");
require("./Table.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * This component allows to display the data in an html table
 * @param {*} param0 
 * @returns 
 */
var Table = function Table() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    rows = _useState2[0],
    setRows = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    columns = _useState4[0],
    setColums = _useState4[1];
  var _useState5 = (0, _react.useState)({
      width: 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    column_width = _useState6[0],
    setColumn_width = _useState6[1];
  var displayData = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.data.display;
  });
  var sort = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.sort;
  });
  (0, _react.useEffect)(function () {
    if (displayData) {
      setColums(displayData.columns);
      setRows(displayData.data);
      computeColumnWidth();
    }
  }, [displayData]);

  /**
   * This method allows us to calculate the width of each column
   */
  var computeColumnWidth = function computeColumnWidth() {
    var columnWidth = 100 / displayData.columns.length;
    setColumn_width({
      width: columnWidth + "%"
    });
  };

  /**
   * This method allows to compute arrows up/down
   * @param {*} column 
   * @returns 
   */
  var getIcons = function getIcons(column) {
    if (column === sort.column) {
      return sort.order === "ASC" ? /*#__PURE__*/_react.default.createElement("div", {
        className: "arrow-up sort"
      }) : /*#__PURE__*/_react.default.createElement("div", {
        className: "arrow-down sort"
      });
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      className: "arrow-up"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "arrow-down"
    }));
  };

  /**
   * This method allows to handle click when user want to sort
   * @param {*} column 
   */
  var handleSort = function handleSort(column) {
    var newSort = _objectSpread({}, sort);
    if (column === sort.column) {
      //check if column is the same as current sorted column
      newSort.order = sort.order === "ASC" ? "DESC" : "ASC";
    } else {
      newSort.column = column;
      newSort.order = "ASC"; //Par default
    }

    dispatch((0, _reducer.setSort)(newSort));
    dispatch((0, _reducer.compute)());
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Table",
    "data-testid": "Table"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, columns && columns.map(function (column, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index,
      style: column_width,
      onClick: function onClick() {
        return handleSort(column.data);
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "th-text"
    }, column.title, " "), /*#__PURE__*/_react.default.createElement("span", {
      className: "th-icons"
    }, getIcons(column.data)));
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, rows && rows.map(function (row, indexRow) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: indexRow
    }, columns && columns.map(function (column, indexColumn) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: indexColumn,
        style: column_width
      }, " ", row[column.data] && row[column.data], " ");
    }));
  }), rows && rows.length === 0 && /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
    className: "td-no-result"
  }, "No matching records found")))));
};
var _default = Table;
exports.default = _default;