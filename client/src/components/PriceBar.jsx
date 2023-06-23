import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

const PriceBar = (props) => {

  const mode = useSelector((state) => state.mode)

  const {data : price } = useQuery(['coinListData'], () => {
    return axios.get("http://localhost:3001/services/coins")
    .then((res) => res.data)
    })
  const {data : status } = useQuery(['status'], () => {
    return axios.get("https://api.coingecko.com/api/v3/ping")
    .then((res) => res.data)
    })


  const formatNum = (x) => {
    let isNegative = x < 0 ? '-' : '';
    return  isNegative + '% ' + Math.abs(x);
  }

  return (
    <div className={`w-full h-[20px] ${mode === 'light' ? 'bg-blue-200' : 'bg-[#09141b]'}  sticky bottom-[0px] left-0 z-[31] flex items-center shadow-2xl`}>
      <div className="text-white ml-6  w-[150px]">
        {true ? (
          <div className="flex flex-row items-center">
            <div className={`w-[14px] h-[14px] ${mode === 'light' ? 'bg-[#28a733]' : 'bg-[#2ae937]' } rounded-full mr-2`}></div>
            <div className={` ${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } font-semibold xl:text-sm lg:text-sm text-[12px]`}>{`Status: Online`}</div>
          </div>
        ) : (
          <div className="flex flex-row items-center">
            <div className="w-[15px] h-[15px] bg-[#ff4929] rounded-full"></div>{" "}
            <span className="text-[#97ff29] xl:text-sm text-[12px] font-semibold">{`Status: Offline`}</span>
            {status == "(V3) To the Moon!" ? "Online" : "loading"}
          </div>
        )}
      </div>
      <div className={`${mode === 'light' ? 'text-slate-600' : 'text-white'}  mr-3 flex w-[150px] justify-around`}>
        <Link to="/Apps" key={0}>
          <span className="xl:text-sm lg:text-sm text-[12px] font-semibold">Apps</span>
        </Link>
        <Link to="/News" key={1}>
          <span className="xl:text-sm lg:text-sm text-[12px] font-semibold">News</span>
        </Link>
        <Link to="/About" key={2}>
          <span className="xl:text-sm lg:text-sm text-[12px] font-semibold">Info</span>
        </Link>
      </div>
      <div className={`slideshow-container  xl:w-[100%] lg:w-[100%] md:w-[100%] w-[80%] h-[20px]  ${mode === 'light' ? 'bg-blue-100' : 'bg-[#081014]'} `}>
        <div className=" slideshow flex flex-row">
          {price?.map(data => 
          <div key={data?.id} className={`flex flex-row px-[20px]  mx-1 ${mode === 'light' ? "bg-blue-200" : ""} shadow-blue-500 shadow-lg`}>
              <div className={`mx-2 text-sm font-semibold ${mode === 'light' ? 'text-black' : 'text-white'} `}>{data?.symbol?.toUpperCase()}</div>
              <div className={`mx-2 text-sm font-semibold ${mode === 'light' ? 'text-black' : 'text-white'} `}>${(data?.current_price)?.toLocaleString()}</div>
              <div className={`mx-2 text-sm font-semibold ${data?.price_change_percentage_24h < 0 ? `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } ` : `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' }` }`}>{(data.price_change_percentage_24h) }%</div>
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
