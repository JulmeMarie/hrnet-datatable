"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSort = exports.setSearch = exports.setPageIndex = exports.setIncomingData = exports.setEntries = exports.setDisplayData = exports.display = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _actions = _interopRequireDefault(require("./actions"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var tableSlice = (0, _toolkit.createSlice)({
  name: "datatable",
  initialState: {
    search: null,
    //stock the value of the input search
    data: {
      incoming: null,
      //The data from the root app
      display: null //stock the data that is displaying in the current page
    },

    entries: {
      selected: 10,
      //The value of the select option field
      filtered: 0,
      //stock dataLength: 0, 
      current: 0,
      //stock the number of entries displaying in the current page
      total: 0 //Store the total number of entries
    },

    page: {
      index: 0,
      //Store the page index
      number: 1 //Store the number of pages
    },

    sort: {
      column: null,
      //Column to sort
      order: null //The order of the sort
    }
  },

  reducers: _actions.default
});
var _tableSlice$actions = tableSlice.actions,
  setIncomingData = _tableSlice$actions.setIncomingData,
  setDisplayData = _tableSlice$actions.setDisplayData,
  display = _tableSlice$actions.display,
  setEntries = _tableSlice$actions.setEntries,
  setPageIndex = _tableSlice$actions.setPageIndex,
  setSearch = _tableSlice$actions.setSearch,
  setSort = _tableSlice$actions.setSort;
exports.setSort = setSort;
exports.setSearch = setSearch;
exports.setPageIndex = setPageIndex;
exports.setEntries = setEntries;
exports.display = display;
exports.setDisplayData = setDisplayData;
exports.setIncomingData = setIncomingData;
var _default = tableSlice.reducer;
exports.default = _default;