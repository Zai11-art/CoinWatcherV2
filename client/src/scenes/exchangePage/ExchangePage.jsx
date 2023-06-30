import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ExchangesTable from "../../components/ExchangesTable";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import { useSelector } from "react-redux";
import HomeHeadCard from "../cryptocurrencyPage/HomeHeadCard";

const ExchangePage = () => {
  console.log(`exchange Page here`)
  
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const mode = useSelector((state) => state.mode);

  const { data: exchangeList } = useQuery(["exchangeList"], () => {
    return axios
      .get("http://localhost:3001/services/exchanges")
      .then((res) => res?.data);
  });
  

  const cardLinks = [
    {
      label: "No. of available exchanges: ",
      details: `${exchangeList?.length}`,
      id: 0,
    },
    {
      label: "Highest Rated Exchange: ",
      details: `${exchangeList?.length > 0 ? exchangeList[0].name : null}`,
      image:`${exchangeList?.length > 0 ? exchangeList[0].image : null}`,
      id: 1,
    }
  ];

  return (
    <div
      className={`flex  h-[100%] w-[100%] flex-col items-center ${
        mode === "light" ? "bg-slate-300/95" : "bg-[#051925]"
      } `}
    >
      <HomeHeadCard cardLinks={cardLinks} />
      <div
        className="
             flex
            h-[100%] w-[450px] 
            items-center justify-center 
            md:h-[100%] md:w-[700px]  lg:h-[100%] lg:w-[1000px]"
      >
        <div className="my-2 flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
          <div className="flex">
            <span
              className={`mr-4 mt-2 text-[15px] ${
                mode === "light" ? "text-blue-900" : "text-[#c0f0ff]"
              } md:text-[15px] lg:text-[17px]`}
            >
              Exchange Ranks: #{firstPostIndex + 1} - #{lastPostIndex}{" "}
              Exchannges available: {exchangeList?.length}
            </span>
          </div>
          <div>
            <Pagination
              totalPosts={exchangeList?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
      <ExchangesTable
        data={exchangeList}
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
              Showing{" "}
              {Math.ceil(
                exchangeList?.length / (exchangeList?.length / postsPerPage)
              )}{" "}
              results out of {exchangeList?.length}
            </h1>
          </div>
          <div>
            <Pagination
              totalPosts={exchangeList?.length}
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

export default ExchangePage;
