import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { getExchangeData } from "../../state/utils/utils";
import { useSelector } from "react-redux";
import ExchangeViewCardUp from "./ExchangeViewCardUp";
import Pagination from "../../components/Pagination";
import ExchangeViewTable from "./ExchangeViewTable";

const ExchangeViewPage = () => {
  const mode = useSelector((state) => state.mode);
  const { exchangeId } = useParams();
  const [exchangeData, setExchangeData] = useState(null);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    getExchangeData(exchangeId)
      .then((data) => {
        setExchangeData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [exchangeId]);

  return (
    <div
      className={`flex h-[6000px] w-full flex-col items-center ${
        mode === "light" ? "bg-slate-300" : "bg-[#030d13]"
      }  pb-[200px] md:h-[6000px] lg:h-[100%] xl:h-[100%]`}
    >
      <ExchangeViewCardUp data={exchangeData} />
      <div
        className={`text-glow z-[1]
        mt-3 flex 
        h-[50px] w-[95%] 
        flex-row 
        justify-between     md:w-[700px] 
        lg:w-[1000px]   lg:flex-row xl:w-[1300px] ${
          mode === "light" ? "text-blue-900" : "text-white"
        }`}
      >
        <div className="flex items-center">
          <span>
            Ticker Ranks: #{firstPostIndex + 1} - #{lastPostIndex + ""}
          </span>
          <span> Tickers available: {exchangeData?.tickers.length}</span>
        </div>
        <div className="flex items-center">
          <Pagination
            totalPosts={exchangeData?.tickers?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
      <div
        className={`text-glow z-[1]
        mt-3 flex
        h-full w-full
        flex-col 
        justify-between  md:w-[700px] 
        lg:w-[1000px]   lg:flex-row xl:w-[1300px]  ${
          mode === "light" ? "text-blue-900" : "text-white"
        }`}
      >
        <ExchangeViewTable
          firstPostIndex={firstPostIndex}
          lastPostIndex={lastPostIndex}
          data={exchangeData?.tickers}
        />
      </div>
      <div
        className={`text-glow z-[1]
        mt-3 flex
        h-[50px] w-[95%]
        flex-col 
        justify-between     md:w-[700px] 
        lg:w-[1000px]   lg:flex-row xl:w-[1300px] ${
          mode === "light" ? "text-blue-900" : "text-white"
        }`}
      >
        <div className="w-[90%]">
    
          <span> Tickers available: {exchangeData?.tickers.length}</span>
        </div>
        <div>
          <Pagination
            totalPosts={exchangeData?.tickers?.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ExchangeViewPage;
