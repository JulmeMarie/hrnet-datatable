"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./DataTable.css");
var _Table = _interopRequireDefault(require("../Table/Table"));
var _EntriesFilter = _interopRequireDefault(require("../EntriesFilter/EntriesFilter"));
var _SearchFilter = _interopRequireDefault(require("../SearchFilter/SearchFilter"));
var _Pagination = _interopRequireDefault(require("../Pagination/Pagination"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/**
 * This component allows you to create a datatable
 * It takes one props : "inputData"
 */
var DataTable = function DataTable(_ref) {
  var inputData = _ref.inputData;
  var _useState = (0, _react.useState)(10),
    _useState2 = _slicedToArray(_useState, 2),
    entriesValue = _useState2[0],
    setEntriesValue = _useState2[1]; //stock the entries value from  the select option
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1]; //stock the value of the input search
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    pageIndex = _useState6[0],
    setPageIndex = _useState6[1]; //stock the page index (init with 0)
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    pages = _useState8[0],
    setPages = _useState8[1]; //stock the number of pages
  var _useState9 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState9, 2),
    displayData = _useState10[0],
    setDisplayData = _useState10[1]; //stock the data that is displaying in the current page
  var _useState11 = (0, _react.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    dataLength = _useState12[0],
    setDataLength = _useState12[1]; //stock the current number of entries (not the total, but the filtered)

  (0, _react.useEffect)(function () {
    if (inputData) {
      //check if inputData exist
      var filteredData = computeFilteredData();
      var dataToDisplay = getDataForCurrentPage(filteredData);
      computePages(filteredData.data.length);
      setDisplayData({
        rows: dataToDisplay,
        columns: inputData.columns
      });
    }
  }, [inputData, entriesValue, searchValue, pageIndex]);

  /**
   * Method that allows to calculates data for the current page
   * @param {*} filteredData 
   * @returns 
   */
  var getDataForCurrentPage = function getDataForCurrentPage(filteredData) {
    return filteredData.data.filter(function (element, index) {
      var startElement = displayData ? pageIndex * entriesValue : 0; //start position
      var endElement = startElement + entriesValue; //end position

      //index must be between the startelement and the endElement
      return index >= startElement && index < endElement; //True or false
    });
  };
  /**
   * Method that calculates the data by filtering with the value of the search field
   * @returns filteredData if searchValue exist, else returns the inputData
   */
  var computeFilteredData = function computeFilteredData() {
    if (!searchValue || searchValue.length <= 0) {
      return inputData;
    }
    //first of all I filter the data array
    var filteredData = inputData.data.filter(function (element) {
      //Filter the columns array to get the extact column names
      var filteredList = inputData.columns.filter(function (column) {
        //Check if searchValue input includes in the column of the element
        return element[column.data] && element[column.data].toLowerCase().includes(searchValue.toLowerCase());
      });
      return filteredList.length > 0;
    });

    //Return a data filtered with the search value
    return {
      data: filteredData,
      columns: inputData.columns
    };
  };

  /**
   * Method that allows to calculate the number of pages
   * @param {*} dataLength 
   */
  var computePages = function computePages(dataLength) {
    var division = dataLength / entriesValue;
    setDataLength(dataLength);

    //whole number immediately greater than the decimal number
    setPages(Math.ceil(division));
  };

  /**
   * Method that allows to update entries via the entry seach input
   * @param {*} entry 
   */
  var updateEntriesValue = function updateEntriesValue(entry) {
    setEntriesValue(entry);
    setPageIndex(0);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "DataTable",
    "data-testid": "DataTable"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Filter"
  }, /*#__PURE__*/_react.default.createElement(_EntriesFilter.default, {
    updateEntries: updateEntriesValue
  }), /*#__PURE__*/_react.default.createElement(_SearchFilter.default, {
    updateSearch: setSearchValue
  })), /*#__PURE__*/_react.default.createElement(_Table.default, {
    data: displayData
  }), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    nbPages: pages,
    showingEntries: displayData ? displayData.rows.length : 0,
    totalEntries: inputData ? inputData.data.length : 0,
    searchValue: searchValue,
    pageIndex: pageIndex,
    setPageIndex: setPageIndex,
    dataLength: dataLength
  }));
};
DataTable.propTypes = {};
DataTable.defaultProps = {};
var _default = DataTable;
exports.default = _default;