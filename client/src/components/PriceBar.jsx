import React from "react";
import { useState, useEffect } from "react";
import { getServerStatus } from "../utils/utils";
import { Link } from "react-router-dom";
import { getCoinDataList } from "../utils/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PriceBar = (props) => {

  const {data : price } = useQuery(['coinListData'], () => {
    return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en")
    .then((res) => res.data)
    })


  const formatNum = (x) => {
    let isNegative = x < 0 ? '-' : '';
    return  isNegative + '% ' + Math.abs(x);
  }

  return (
    <div className="w-full h-[20px] bg-[#172229] sticky bottom-[0px] left-0 z-[50] flex items-center">
      <div className="text-white ml-6  w-[150px]">
        {true ? (
          <div className="flex flex-row items-center">
            <div className="w-[14px] h-[14px] bg-[#97ff29] rounded-full mr-2"></div>
            <div className="text-[#97ff29] font-semibold xl:text-sm lg:text-sm text-[12px]">{`Status: Online`}</div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <div className="w-[15px] h-[15px] bg-[#ff4929] rounded-full"></div>{" "}
            <span className="text-[#97ff29] xl:text-sm text-[12px] font-semibold">{`Status: Offline`}</span>
            Offline
          </div>
        )}
      </div>
      <div className="text-white  mr-3 flex w-[150px] justify-around">
        <Link to="/Apps" key={0}>
          <span className="text-[white] xl:text-sm lg:text-sm text-[12px] font-semibold">Apps</span>
        </Link>
        <Link to="/News" key={1}>
          <span className="text-[white] xl:text-sm lg:text-sm text-[12px] font-semibold">News</span>
        </Link>
        <Link to="/About" key={2}>
          <span className="text-[white] xl:text-sm lg:text-sm text-[12px] font-semibold">Info</span>
        </Link>
      </div>
      <div className="slideshow-container  xl:w-[100%] lg:w-[100%] md:w-[100%] w-[80%] h-[20px] bg-[#18263b]">
        <div className=" slideshow flex flex-row">
          {price?.map(data => 
          <div key={data.id} className="flex flex-row px-[20px]  mx-1  shadow-blue-500 shadow-lg">
              <div className="mx-2 text-sm text-white">{data.symbol.toUpperCase()}</div>
              <div className="mx-2 text-sm text-white">${(data.current_price).toLocaleString()}</div>
              <div className={`mx-2 text-sm ${data.price_change_percentage_24h < 0 ? 'text-[#ff4929]' : 'text-[#97ff29]' }`}>{(data.price_change_percentage_24h) }%</div>
          </div>
          )

          }
        </div>
      </div>
      <div className="text-white ml-6  w-[200px] xl:visible md:hidden hidden">
        <h1 className="text-sm">Coin updates available now</h1>
      </div>
    </div>
  );
};

export default PriceBar;
// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
