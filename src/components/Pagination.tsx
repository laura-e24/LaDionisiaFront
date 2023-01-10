import React, { useEffect, useState } from "react";

function Pagination({ onPageChange, wines, itemsPerPage, currentPage, setCurrentPage }) {
    const [pageNumberLimit, setpageNumberLimit] = useState(10);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(wines.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={onPageChange}
                    className={currentPage == number ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
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
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    const handlePrevbtn = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    const handleLastPage = () => {
        setCurrentPage(pages[pages.length - 1]);
        setmaxPageNumberLimit(pages[pages.length - 1])
        setminPageNumberLimit(pages[pages.length - 1] - pages[pages.length - 1] % pageNumberLimit);
    }
    const handleFirstPage = () => {
        setCurrentPage(1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(pages[pages.length - 1])
            setminPageNumberLimit(pages[pages.length - 1] - pageNumberLimit)
        }
    }

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevbtn}> &hellip; </li>;
    }

    return (
        <>
            <ul className="inline-flex -space-x-px w-full justify-between py-6">
                <li>
                    <button
                        className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handlePrevbtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {currentPage <= pages[pages.length - 1] ? <li>
                    <button
                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleLastPage}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >
                        {pages[pages.length - 1]}
                    </button>

                </li> : null
                }
                <li>
                    <button
                        className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={handleNextbtn}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </>
    );
}

export default Pagination;