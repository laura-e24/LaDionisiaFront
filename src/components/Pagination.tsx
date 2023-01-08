export default function Pagination({ items, currentPage, pageSize, onPageChange, setCurrentPage }) {
    const pagesCount = Math.ceil(items / pageSize);
    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        console.log(currentPage)
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        console.log(currentPage)
    }
    return (
        <div>
            <ul className="inline-flex -space-x-px">
                <button className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrev} disabled={currentPage === pages[0] ? true : false}>Previous</button>

                {pages.map((page) => (
                    <button className={page === currentPage ? "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} onClick={() => onPageChange(page)} key={page}>{page}</button>
                ))}
                <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNext} disabled={currentPage === pages.length ? true : false}>Next</button>
            </ul>
        </div>
    );
};


