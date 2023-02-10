"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var actions = {
  setIncomingData: function setIncomingData(state, action) {
    state.data.incoming = action.payload;
    if (action.payload) {
      state.entries.total = action.payload.data.length;
    }
    return state;
  },
  setDisplayData: function setDisplayData(state, action) {
    state.data.display = action.payload;
    return state;
  },
  setPageIndex: function setPageIndex(state, action) {
    state.page.index = action.payload;
    return state;
  },
  setSearch: function setSearch(state, action) {
    state.search = action.payload;
    state.page.index = 0; //init page index
    return state;
  },
  setEntries: function setEntries(state, action) {
    state.entries.selected = action.payload;
    state.page.index = 0; //init page index
    return state;
  },
  setSort: function setSort(state, action) {
    state.sort = action.payload;
    return state;
  },
  /**
   * This method computes the data in 4 steps: 
   * 1) compute for search filter
   * 2) compute page numbers
   * 3) compute : sort the data
   * 4) Compute data to display in current page
   * @param {*} state 
   * @returns 
   */
  compute: function compute(state) {
    if (state.data.incoming) {
      var results = _objectSpread({}, state.data.incoming); // clone The user data

      //Step 1 : if search exists, perform search
      if (state.search != null && state.search.length > 0) {
        var dataList = results.data.filter(function (element) {
          var filteredList = results.columns.filter(function (column) {
            //return true if searchValue input includes in the column of the element
            return element[column.data] && element[column.data].toLowerCase().includes(state.search.toLowerCase());
          });
          return filteredList.length > 0;
        });
        results.data = dataList;
      }
      ;

      // Step 2 : perform page numbers
      var division = results.data.length / state.entries.selected;
      state.page.number = Math.ceil(division);
      state.entries.filtered = results.data.length;

      // Step 3 : sort the data
      results.data.sort(function (element1, element2) {
        if (state.sort.order === "ASC") {
          return element1[state.sort.column] < element2[state.sort.column] ? -1 : 1;
        } else if (state.sort.order === "DESC") {
          return element1[state.sort.column] > element2[state.sort.column] ? -1 : 1;
        }
        return 0;
      });

      // Step 4 : Compute data to display in the current page
      var dataListForCurrentPage = results.data.filter(function (element, index) {
        var startPos = state.data.display ? state.page.index * state.entries.selected : 0; //start position
        var endPos = startPos + state.entries.selected; //end position
        //index must be between the startPos and the endPos
        return index >= startPos && index < endPos; //True or false
      });

      results.data = dataListForCurrentPage;
      state.data.display = results;
      state.entries.current = results.data.length;
    }
    return state;
  }
};
var _default = actions;
exports.default = _default;