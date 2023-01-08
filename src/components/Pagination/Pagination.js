import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ nbPages, pageIndex, showingEntries, totalEntries, searchValue, setPageIndex, dataLength }) => {

  const pagesArr = () => {
    let pages = [];
    for (var i = 1; i <= nbPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  const next = () => {
    if (pageIndex + 1 < nbPages) {
      setPageIndex(pageIndex + 1);
    }
  };

  const prev = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }

  return (
    <div className="Pagination" data-testid="Pagination">
      <div className='pagination__info'>
        Showing {showingEntries > 0 ? pageIndex + 1 : 0} to {showingEntries} of {dataLength} entries
        {searchValue ? ' (filtered from ' + totalEntries + ' total entries)' : ''}
      </div>
      <div className='pagination__tab'>
        <div className={pageIndex > 0 ? 'prev page-index' : 'prev'} onClick={prev}>Previous</div>
        {
          pagesArr().map((page) => {
            return <div className={pageIndex + 1 === page ? 'page-index current-page' : 'page-index'} key={page} onClick={() => setPageIndex(page - 1)}>{page}</div>
          })
        }
        <div className={pageIndex + 1 < nbPages ? 'next page-index' : 'next'} onClick={next}>Next</div>
      </div>
    </div>
  );
}

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
