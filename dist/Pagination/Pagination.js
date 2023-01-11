"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Pagination.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This component allows to display the pagination tab
 * @param {*} param0 
 * @returns 
 */
var Pagination = function Pagination(_ref) {
  var nbPages = _ref.nbPages,
    pageIndex = _ref.pageIndex,
    showingEntries = _ref.showingEntries,
    totalEntries = _ref.totalEntries,
    searchValue = _ref.searchValue,
    setPageIndex = _ref.setPageIndex,
    dataLength = _ref.dataLength;
  var pagesArr = function pagesArr() {
    var pages = [];
    for (var i = 1; i <= nbPages; i++) {
      pages.push(i);
    }
    return pages;
  };
  var next = function next() {
    if (pageIndex + 1 < nbPages) {
      setPageIndex(pageIndex + 1);
    }
  };
  var prev = function prev() {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Pagination",
    "data-testid": "Pagination"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination__info"
  }, "Showing ", showingEntries > 0 ? pageIndex + 1 : 0, " to ", showingEntries, " of ", dataLength, " entries", searchValue ? ' (filtered from ' + totalEntries + ' total entries)' : ''), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination__tab"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: pageIndex > 0 ? 'prev page-index' : 'prev',
    onClick: prev
  }, "Previous"), pagesArr().map(function (page) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: pageIndex + 1 === page ? 'page-index current-page' : 'page-index',
      key: page,
      onClick: function onClick() {
        return setPageIndex(page - 1);
      }
    }, page);
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: pageIndex + 1 < nbPages ? 'next page-index' : 'next',
    onClick: next
  }, "Next")));
};
Pagination.propTypes = {};
Pagination.defaultProps = {};
var _default = Pagination;
exports.default = _default;