import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setPageIndex, display } from '../../redux/reducer';

import './Pagination.css';
/**
 * This component allows to display the pagination tab
 * @param {*} param0 
 * @returns 
 */
const Pagination = () => {
  const dispatch = useDispatch();

  const nbPages = useSelector(state => state.datatable.page.number);
  const pageIndex = useSelector(state => state.datatable.page.index);
  const showingEntries = useSelector(state => state.datatable.entries.current);
  const totalEntries = useSelector(state => state.datatable.entries.total);
  const searchValue = useSelector(state => state.datatable.search);
  const dataLength = useSelector(state => state.datatable.entries.filtered);

  const pagesArr = () => {
    let pages = [];
    for (var i = 1; i <= nbPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  const next = () => {
    if (pageIndex + 1 < nbPages) {
      changePage(pageIndex + 1);
    }
  };

  const prev = () => {
    if (pageIndex > 0) {
      changePage(pageIndex - 1);
    }
  };

  const changePage = (index) => {
    dispatch(setPageIndex(index));
    dispatch(display());
  };

  const getInfos = () => {
    let infos = "Showing ";
    infos += showingEntries > 0 ? pageIndex + 1 : 0; //current page
    infos += " to " + showingEntries + " of " + dataLength + " entries ";//number of entries
    infos += searchValue ? " (filtered from " + totalEntries + " total entries)" : "";//entries filtered
    return infos;
  }

  return (
    <div className="Pagination" data-testid="Pagination">
      <div className='pagination__info'>
        {getInfos()}
      </div>
      <div className='pagination__tab'>
        <div className={pageIndex > 0 ? 'prev page-index' : 'prev'} onClick={prev}>Previous</div>
        {
          pagesArr().map((page) => {
            return <div className={pageIndex + 1 === page ? 'page-index current-page' : 'page-index'} key={page} onClick={() => changePage(page - 1)}>{page}</div>
          })
        }
        <div className={pageIndex + 1 < nbPages ? 'next page-index' : 'next'} onClick={next}>Next</div>
      </div>
    </div>
  );
}
export default Pagination;
