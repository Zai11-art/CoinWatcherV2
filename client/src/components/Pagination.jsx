import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
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