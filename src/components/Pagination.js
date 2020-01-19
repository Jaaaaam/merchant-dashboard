import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import '../assets/scss/pagination.scss';



import uuidv4 from 'uuid/v4';

const Pagination = ({
  activePage,
  totalPageCount,
  // onPrevNextClick,
  fn,
  customClass,
  customStyle
}) => {
  console.log(activePage, totalPageCount)
  const repeatWhile = (fn, condition) => function () {
    let count = 0;
    while (condition(count++)) fn(count);
  };

  const [paginator, setPaginator] = useState({
    activePage: 1
  });

  // useEffect(() => {
  //   if (paginator !== '') {
  //     onPrevNextClick(paginator);
  //   }
  // }, [onPrevNextClick, paginator]);

  const onClickNext = () => {
    if (totalPageCount === activePage) return;
    setPaginator({
      ...paginator,
      activePage: activePage + 1
    });
  };

  const onClickPrev = () => {
    if (activePage === 1) return;
    setPaginator({
      ...paginator,
      activePage: activePage - 1
    });
  };

  const renderPages = () => {
    const pages = [];

    const fillPages = (count) => {
      let pageNumber = count;
      if (totalPageCount > 1) {
      }
      const newPage = {
        isActive: false,
        value: pageNumber
      };
      if (totalPageCount > 10 && activePage >= 5) {
        if (count <= 4 && count !== 0) {
          pageNumber = activePage - count;
          newPage.value = pageNumber;

          if (activePage === pageNumber) {
            newPage.isActive = true;
          }
          pages.unshift(newPage);

          return;
        }
        pageNumber = activePage + (count - 5);
        newPage.value = pageNumber;
        if (activePage === pageNumber) {
          newPage.isActive = true;
        }
        pages.push(newPage);

        return;
      }
      if (activePage === pageNumber) {
        newPage.isActive = true;
      }
      pages.push(newPage);
    };

    const createPages = repeatWhile(fillPages, i => (i < totalPageCount && i < 10));

    createPages();

    return pages.map(({ isActive, value }) => (
      <button
        key={uuidv4()}
        type="button"
        className={`pagination-button ${isActive && 'active'}`}
        onClick={() => { fn({ isActive, value }); }}
      >
        {value}
      </button>
    ));
  };

  return (
    <div
      className={`pagination ${customClass}`}
      style={customStyle}
    >
      <button
        key={uuidv4()}
        type="button"
        className="pagination-button previous"
        onClick={onClickPrev}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} className='page-icon'/>
      </button>
      { renderPages() }

      <button
        key={uuidv4()}
        type="button"
        className="pagination-button next"
        onClick={onClickNext}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} className="page-icon" />
      </button>

    </div>
  );
};

// Pagination.propTypes = {
//   activePage: PropTypes.number.isRequired, // 1
//   totalPageCount: PropTypes.number.isRequired,
//   onPrevNextClick: PropTypes.func.isRequired,
//   fn: PropTypes.func.isRequired,
//   customClass: PropTypes.string,
//   customStyle: PropTypes.instanceOf(Object)
// };

// Pagination.defaultProps = {
//   customClass: '',
//   customStyle: {}
// };


export default Pagination;