import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  const mode = useSelector((state) => state.mode)

  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const maxPagesToShow = 4; // Number of nearest pages to show

  let startPage = currentPage - Math.floor(maxPagesToShow / 2);
  if (startPage < 1) {
    startPage = 1;
  }
  let endPage = startPage + maxPagesToShow - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = endPage - maxPagesToShow + 1;
    if (startPage < 1) {
      startPage = 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center flex-row justify-center my-2 pagination flex-wrap">
      {currentPage > 1 && (
        <button
          className={`p-1 ${mode === 'light' ? "newscard-filter-light text-[#054569]" : "bg-[#054569] text-[#ced7e0]"} lg:mx-[5px] md:mx-[5px] mx-[2px] px-2 my-[2px] rounded-md  hover:scale-[1.1] duration-200 lg:text-[15px] md:text-[12px] text-[15px]`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
      )}
      {startPage > 1 && (
        <button
          className={`p-1 ${mode === 'light' ? "newscard-filter-light text-[#080e11]" : "bg-[#054569] text-[#ced7e0]"} lg:mx-[5px] md:mx-[5px] mx-[2px] px-2 my-[2px] rounded-md  hover:scale-[1.1] duration-200 lg:text-[15px] md:text-[12px] text-[15px]`}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
      )}
      {pages.map((page, index) => (
        <button
          className={`p-1 ${mode === 'light' ? "newscard-filter-light text-[#054569]" : "bg-[#054569] text-[#ced7e0]"} lg:mx-[5px] md:mx-[5px] mx-[2px] px-2 my-[2px] rounded-md  hover:scale-[1.1] duration-200 lg:text-[15px] md:text-[12px] text-[15px] ${
            page === currentPage ? 'active' : ''
          }`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {endPage < totalPages && (
        <button
          className={`p-1 ${mode === 'light' ? "newscard-filter-light text-[#054569]" : "bg-[#054569] text-[#ced7e0]"} lg:mx-[5px] md:mx-[5px] mx-[2px] px-2 my-[2px] rounded-md  hover:scale-[1.1] duration-200 lg:text-[15px] md:text-[12px] text-[15px]`}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      )}
      {currentPage < totalPages && (
        <button
          className={`p-1 ${mode === 'light' ? "newscard-filter-light text-[#054569]" : "bg-[#054569] text-[#ced7e0]"} lg:mx-[5px] md:mx-[5px] mx-[2px] px-2 my-[2px] rounded-md  hover:scale-[1.1] duration-200 lg:text-[15px] md:text-[12px] text-[15px]`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      )}
    </div>
  );
};

export default Pagination;


// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0