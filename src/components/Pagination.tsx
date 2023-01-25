import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/store";
import { selectMaxPageNumLim, selectMinPageNumLim, setMaxPageNumLim, setMinPageNumLim } from "../features/generalSlice";

function Pagination({ onPageChange, wines, itemsPerPage, currentPage, setCurrentPage }) {

  const dispatch = useAppDispatch()
    const pageNumberLimit = 10;
    // const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    // const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const minPageNumLim = useSelector(selectMinPageNumLim)
    const maxPageNumLim = useSelector(selectMaxPageNumLim)
    const pages = [];

    for (let i = 1; i <= Math.ceil(wines.length / itemsPerPage); i++) {
        pages.push(i);
    }
    const renderPageNumbers = pages.map((number) => {
   

        if (number < maxPageNumLim + 1 && number > minPageNumLim) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={onPageChange}
                    className={currentPage==number?"page-numbers rounded-full w-12 h-12 flex items-center justify-center text-grey-600 border border-gray-300 bg-grey-50 hover:bg-grey-100 hover:text-grey-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "page-numbers rounded-full w-12 h-12 flex items-center justify-center ml-0 leading-tight text-gray-500 bg-pagination-color border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });
    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumLim) {
          dispatch(setMaxPageNumLim(maxPageNumLim + pageNumberLimit));
          dispatch(setMinPageNumLim(minPageNumLim + pageNumberLimit));
        }
    };
    const handlePrevbtn = () => {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit == 0) {
        dispatch(setMaxPageNumLim(maxPageNumLim - pageNumberLimit));
        dispatch(setMinPageNumLim(minPageNumLim - pageNumberLimit));
      }
    };
    const handleLastPage = () => {
      setCurrentPage(pages[pages.length - 1]);
      let newMaxPageNumberLimit = Math.ceil(pages[pages.length - 1] / pageNumberLimit) * pageNumberLimit;
      dispatch(setMaxPageNumLim(newMaxPageNumberLimit));
      dispatch(setMinPageNumLim(newMaxPageNumberLimit - pageNumberLimit));
    }
    const handleFirstPage = () => {
      setCurrentPage(1);
      dispatch(setMaxPageNumLim(10))
      dispatch(setMinPageNumLim(0));
    }

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumLim) {
        pageIncrementBtn = <li className="rounded-full 
        w-12 h-12 
        flex items-center 
        justify-center 
        leading-tight 
        text-gray-500 
        bg-pagination-color 
        border border-gray-300 
        hover:bg-gray-100 
        hover:text-gray-700 
        dark:bg-gray-800 
        dark:border-gray-700 
        dark:text-gray-400 
        dark:hover:bg-gray-700 
        dark:hover:text-white"onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumLim >= 1) {
        pageDecrementBtn = <li className="rounded-full 
        w-12 h-12 
        flex items-center 
        justify-center 
        leading-tight 
        text-gray-500 
        bg-pagination-color 
        border border-gray-300 
        hover:bg-gray-100 
        hover:text-gray-700 
        dark:bg-gray-800 
        dark:border-gray-700 
        dark:text-gray-400 
        dark:hover:bg-gray-700 
        dark:hover:text-white" onClick={handlePrevbtn}> &hellip; </li>;
    }
    return (
        <>
        <div className="font-poppins">
            <ul className="
            inline-flex -space-x-px 
            w-full 
            font-poppins 
            justify-between 
            py-6 bg-bg-body 
            pl-4 pr-4
            ">
                <li>
                    <button
                        className="rounded-full
                        w-12 h-12 
                        flex font-poppins 
                        items-center 
                        justify-center 
                        ml-0 leading-tight 
                        text-gray-500 
                        bg-pagination-color 
                        border border-gray-300 
                        hover:bg-gray-100 
                        hover:text-gray-700 
                        dark:bg-gray-800 
                        dark:border-gray-700 
                        dark:text-gray-400 
                        dark:hover:bg-gray-700 
                        dark:hover:text-white"
                        onClick={handlePrevbtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        ←
                    </button>
                </li>
                {currentPage <= pages[pages.length - 1]  && currentPage >= pages[0] + pageNumberLimit? <li>
                    <button
                        className="rounded-full 
                        w-12 h-12 flex 
                        items-center 
                        justify-center 
                        leading-tight 
                        text-gray-500 
                        bg-pagination-color 
                        border border-gray-300 
                        hover:bg-gray-100 
                        hover:text-gray-700 
                        dark:bg-gray-800 
                        dark:border-gray-700 
                        dark:text-gray-400 
                        dark:hover:bg-gray-700 
                        dark:hover:text-white"
                        onClick={handleFirstPage}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        {pages[0]}
                    </button>

                </li> : null
                }
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                {currentPage >= pages[0] && currentPage <= pages[pages.length - 1] - pageNumberLimit ? <li>
                    <button
                        className="rounded-full 
                        w-12 h-12 
                        flex items-center 
                        justify-center 
                        leading-tight 
                        text-gray-500 
                        bg-pagination-color 
                        border border-gray-300 
                        hover:bg-gray-100 
                        hover:text-gray-700 
                        dark:bg-gray-800 
                        dark:border-gray-700 
                        dark:text-gray-400 
                        dark:hover:bg-gray-700 
                        dark:hover:text-white"
                        onClick={handleLastPage}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >
                        {pages[pages.length - 1]}
                    </button>

                </li> : null
                }
                <li>
                    <button
                        className="rounded-full 
                        w-12 h-12 
                        flex items-center 
                        justify-center 
                        leading-tight 
                        text-gray-500 
                        bg-pagination-color 
                        border border-gray-300 
                        hover:bg-gray-100 
                        hover:text-gray-700 
                        dark:bg-gray-800 
                        dark:border-gray-700 
                        dark:text-gray-400 
                        dark:hover:bg-gray-700 
                        dark:hover:text-white"
                        onClick={handleNextbtn}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >→
                    </button>
                </li>
            </ul>
        </div>
        </>
    );
}

export default Pagination;