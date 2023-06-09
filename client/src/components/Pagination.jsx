import React from "react";
<<<<<<< HEAD

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
=======
import { useSelector } from "react-redux";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const mode = useSelector((state) => state.mode);

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
>>>>>>> origin/master
    pages.push(i);
  }

  return (
<<<<<<< HEAD
    <div className="flex items-center flex-row justify-center my-2 pagination flex-wrap">
      {pages.map((page, index) => {
        return (
          <button 
          className={`p-1 bg-[#054569] 
          lg:mx-[5px] md:mx-[5px] mx-[2px]
           px-2 my-[2px]
          rounded-md text-[#ced7e0] 
          hover:scale-[1.1]
          duration-200
          lg:text-[15px] md:text-[12px] text-[15px] ${page == currentPage ? 'active' : ''}`} 
          key={index} onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
=======
    <div className="pagination my-2 flex flex-row flex-wrap items-center justify-center">
      {currentPage > 1 && (
        <button
          aria-label="back button"
          className={`p-1 ${
            mode === "light"
              ? "newscard-filter-light text-[#054569]"
              : "bg-[#054569] text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
      )}
      {startPage > 1 && (
        <button
          className={`p-1 ${
            mode === "light"
              ? "newscard-filter-light text-[#080e11]"
              : "bg-[#054569] text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(1)}
        >
          First
        </button>
      )}
      {pages.map((page, index) => (
        <button
          className={`p-1 ${
            mode === "light"
              ? "newscard-filter-light text-[#054569]"
              : "bg-[#054569] text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px] ${
            page === currentPage ? "active" : ""
          }`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      {endPage < totalPages && (
        <button
          className={`p-1 ${
            mode === "light"
              ? "newscard-filter-light text-[#054569]"
              : "bg-[#054569] text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(totalPages)}
        >
          Last
        </button>
      )}
      {currentPage < totalPages && (
        <button
          aria-label="next button"
          className={`p-1 ${
            mode === "light"
              ? "newscard-filter-light text-[#054569]"
              : "bg-[#054569] text-[#ced7e0]"
          } mx-[2px] my-[2px] rounded-md px-2 text-[15px] duration-200  hover:scale-[1.1] md:mx-[5px] md:text-[12px] lg:mx-[5px] lg:text-[15px]`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      )}
>>>>>>> origin/master
    </div>
  );
};

export default Pagination;

<<<<<<< HEAD

=======
>>>>>>> origin/master
// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
<<<<<<< HEAD
// #ced7e0
=======
// #ced7e0
>>>>>>> origin/master
