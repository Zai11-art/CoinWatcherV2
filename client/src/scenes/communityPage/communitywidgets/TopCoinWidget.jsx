import React from "react";
import Loader from "../../../components/Loader";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopCoinWidget = () => {
  const { data: price, isLoading, isError } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  if (isLoading || isError) {
    return (
      <Loader/>
    )
  }

  return (
    <div
      className="
                w-[100%] h-[100%]
                chart rounded-3xl 
                flex flex-col items-center
                "
    >
      <div className="flex flex-col mx-4 xl:mb-[10px] mb-[20px] mt-4 items-center xl:text-[1rem]">
        <h1 className="text-xl text-[white] font-bold text-center">
          Top Coins
        </h1>
      </div>

      {price ? (
        price.slice(0, 5).map((data) => (
          <div key={data.id}
            className=" 
                cryptocard-grad
                w-[90%] h-[35px]
                rounded-lg
                text-white z-[1]
                my-2
                flex flex-row items-center justify-between
                "
          >
            <div className="text-center md:w-[75px] w-[50px] md:text-[12px] text-[12px] md:ml-6 ml-2">
              {data.market_cap_rank}
            </div>
            <div className="text-center md:w-[200px] w-[110px] md:text-[14px] text-[15px] flex flex-row items-center ">
              <div
                key={data.id}
                rel="noopener noreferrer"
                className="flex flex-row items-center hover:scale-[1.1] duration-200 ease-in-out"
                to={`/view/${data.id}`}
              >
                <img
                  src={data.image}
                  alt=""
                  className="md:h-[20px] md:w-[20px] h-[22.5px] w-[22.5px] mr-2 lg:ml-5 md:ml-5 ml-3"
                />
                <span className="overflow-hidden text-[12px] font-bold">
                  {data.name}
                </span>
              </div>
            </div>
            <div className="text-center md:w-[175px] w-[75px] md:text-[12px] text-[12px] lg:mx-1 mx-2 overflow-hidden">
              ${data.current_price.toLocaleString()}
            </div>
            {/* <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.market_cap.toLocaleString()}</div> */}
            {/* <div className="text-center md:w-[250px] w-[150px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.total_volume.toLocaleString()} </div> */}
            {/* <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[15px] lg:mx-1 mx-1 md:pr-6 pr-2 ">
              <Sparklines data={data.sparkline_in_7d.price}>
                {data.current_price > data.sparkline_in_7d.price[0] ? (
                  <SparklinesLine
                    style={{
                      stroke: "#4dff58",
                      fill: "#4dff58",
                      fillOpacity: "0.2",
                    }}
                  />
                ) : (
                  <SparklinesLine
                    style={{
                      stroke: "#fc3a3a",
                      fill: "#fc3a3a",
                      fillOpacity: "0.2",
                    }}
                  />
                )}
              </Sparklines>
            </div> */}
          </div>
        ))
      ) : (
        <Loader />
      )}
      <Link to="/Home">
        <button
          className="text-white mt-6 mb-2 flex justify-center  
                            xl:text-[13px] lg:text-[13px] md:text-[15px] px-3 py-1 bg-blue-500
                            hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
        >
          View all coins here
        </button>
      </Link>
    </div>
  );
};

export default TopCoinWidget;
