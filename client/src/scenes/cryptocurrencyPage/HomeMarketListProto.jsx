import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import CoinTable from "../../components/CoinTable";

const HomeMarketListProto = (props) => {
  const mode = useSelector((state) => state.mode);
  const loggedInUserId = useSelector((state) => state?.user?._id);
  const token = useSelector((state) => state.token);

  const data = props.coinData;

  const [searchData, setSearchData] = useState(data);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <div>
      <div
        className="
            mt-[175px] flex
            h-[100%] w-[450px] 
            items-center justify-center md:mt-[120px]
            md:h-[100%] md:w-[700px] lg:mt-[110px] lg:h-[100%] lg:w-[1000px]"
      >
        <div className="my-2 flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
          <div className="flex">
            <span
              className={`mr-4 mt-2 text-[15px] ${
                mode === "light" ? "text-blue-900" : "text-[#c0f0ff]"
              } md:text-[15px] lg:text-[17px]`}
            >
              Crypto Ranks: #{firstPostIndex + 1} - #{lastPostIndex} Coins available: {data?.length}
            </span>
          </div>
          <div>
            <Pagination
              totalPosts={data?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

      <CoinTable
        data={data}
        firstPostIndex={firstPostIndex}
        lastPostIndex={lastPostIndex}
      />

      <div
        className="
                mb-[75px] mt-3
                flex h-[100%] w-[450px]  items-center
                justify-center md:h-[100%] md:w-[700px] lg:h-[100%] lg:w-[1000px]"
      >
        <div className="my-2 flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
          <div>
            <h1
              className={`mt-2 text-[15px] ${
                mode === "light" ? "text-blue-900" : "text-[#9ccddc]"
              }  md:text-[15px] lg:text-[17px]`}
            >
              Showing {Math.ceil(data?.length / (data?.length / postsPerPage))}{" "}
              results out of {data?.length}
            </h1>
          </div>
          <div>
            <Pagination
              totalPosts={data?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMarketListProto;
