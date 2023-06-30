import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const TrendingCoinWidget = () => {
  const { data: trending } = useQuery(["coinTrending"], async () => {
    return await axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.data.coins);
  });

  const { data: usdprice } = useQuery(["btcPrice"], async () => {
    return await axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
      .then((res) => res.data.bitcoin.usd);
  });

  // const trending = props.trending;
  // const usdprice = props.btcPrice;
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
          Trending Coins
        </h1>
      </div>

      {trending ? (
        trending.slice(0, 5).map((data) => (
          <div
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
              {data.item.score + 1}
            </div>
            <div className="text-center md:w-[200px] w-[110px] md:text-[12px] text-[12px] flex flex-row items-center ">
              <div
                rel="noopener noreferrer"
                className="flex flex-row items-center hover:scale-[1.1] duration-200 ease-in-out"
                to={`/view/${data.id}`}
              >
                <img
                  src={data.item.small}
                  alt=""
                  className="md:h-[20px] md:w-[20px] h-[22.5px] w-[22.5px] mr-2 lg:ml-5 md:ml-5 ml-3"
                />
                <span className="overflow-hidden  text-[12px] font-bold">
                  {data.item.name}
                </span>
              </div>
            </div>
            <div className="text-center md:w-[175px] w-[75px] md:text-[12px] text-[12px] lg:mx-1 mx-2">
              $
              {parseInt((data.item.price_btc * usdprice) / 1)
                .toFixed(2)
                .toLocaleString()}
            </div>
            {/* <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.market_cap.toLocaleString()}</div> */}
            {/* <div className="text-center md:w-[250px] w-[150px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.total_volume.toLocaleString()} </div> */}
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

export default TrendingCoinWidget;
