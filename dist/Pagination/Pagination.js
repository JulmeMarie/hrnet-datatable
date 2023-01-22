"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _reducer = require("../../redux/reducer");
require("./Pagination.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This component allows to display the pagination tab
 * @param {*} param0 
 * @returns 
 */
var Pagination = function Pagination() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var nbPages = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.page.number;
  });
  var pageIndex = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.page.index;
  });
  var showingEntries = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.entries.current;
  });
  var totalEntries = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.entries.total;
  });
  var searchValue = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.search;
  });
  var dataLength = (0, _reactRedux.useSelector)(function (state) {
    return state.datatable.entries.filtered;
  });

  /**
   * 
   * @returns Allows to convert nbPages into an array of number
   */
  var pagesArr = function pagesArr() {
    var pages = [];
    for (var i = 1; i <= nbPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  var next = function next() {
    if (pageIndex + 1 < nbPages) {
      changePage(pageIndex + 1);
    }
  };
  var prev = function prev() {
    if (pageIndex > 0) {
      changePage(pageIndex - 1);
    }
  };
  var changePage = function changePage(index) {
    dispatch((0, _reducer.setPageIndex)(index));
    dispatch((0, _reducer.display)());
  };
  var getInfos = function getInfos() {
    var infos = "Showing ";
    infos += showingEntries > 0 ? pageIndex + 1 : 0; //current page
    infos += " to " + showingEntries + " of " + dataLength + " entries "; //number of entries
    infos += searchValue ? " (filtered from " + totalEntries + " total entries)" : ""; //entries filtered
    return infos;
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Pagination",
    "data-testid": "Pagination"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination__info"
  }, getInfos()), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination__tab"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: pageIndex > 0 ? 'prev page-index' : 'prev',
    onClick: prev
  }, "Previous"), pagesArr().map(function (page) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: pageIndex + 1 === page ? 'page-index current-page' : 'page-index',
      key: page,
      onClick: function onClick() {
        return changePage(page - 1);
      }
    }, page);
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: pageIndex + 1 < nbPages ? 'next page-index' : 'next',
    onClick: next
  }, "Next")));
};
var _default = Pagination;
exports.default = _default;