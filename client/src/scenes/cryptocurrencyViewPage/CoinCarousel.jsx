import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import Loader from "../../components/Loader";
import { useId } from "react";
import { useSelector } from "react-redux";

const CoinCarousel = (props) => {
  const mode = useSelector((state) => state.mode);
  const id = useId();
  const price = props.coinList;
  const trending = props.trending;
  const usdprice = props.btcPrice;

  console.log(trending);

  return (
    <div
      className="
        mb-[100px] mt-[0px]
        flex h-[500px]
        w-[100%] items-center
        justify-center md:mt-[200px] 
        md:h-[500px] md:w-[100%] lg:mt-[60px] lg:h-[500px]
        lg:w-[100%] 
        xl:mt-[80px] xl:h-[500px] xl:w-[100%] 
        "
    >
      <div
        className=" 
            z-[1] mt-5
            flex h-[1650px]
            w-[95%] flex-col
            items-center justify-between
            rounded-lg text-white 
            md:h-[1650px] md:w-[700px]
            md:flex-col lg:h-[700px] lg:w-[1000px]
            lg:flex-row xl:h-[800px] xl:w-[1300px] xl:flex-row
            "
      >
        <div
          className={`
                ${
                  mode === "light" ? "bg-slate-200 shadow-xl text-glow text-blue-900" : "chart text-white"
                }  mt-[2300px]
                flex h-[500px]
                w-[95%] flex-col
                items-center justify-around
                rounded-3xl pb-[20px] 
                md:mt-[1800px] md:h-[500px] md:w-[700px] md:flex-col
                lg:mt-[250px] lg:h-[550px] lg:w-[475px] lg:flex-col xl:mt-[200px] xl:h-[500px] xl:w-[600px] xl:flex-col
                `}
        >
          <div className="mx-4 mb-[20px] mt-4 flex flex-col items-center xl:mb-[10px] xl:text-[1rem]">
            <h1 className="text-center text-3xl font-bold ">
              Top Coins now
            </h1>
          </div>

          {price?.length ? (
            price.slice(0, 5).map((data, index) => (
              <div
                key={`${id}-${price.name}-${index}`}
                className={` 
                            ${
                              mode === "light"
                                ? "newscard-filter-light border-2 border-blue-200 font-semibold"
                                : "cryptocard-grad text-white "
                            } 
                            z-[1] mt-5
                            flex h-[50px]
                            w-[85%] flex-row
                            items-center justify-between
                            rounded-lg 
                            md:h-[70px] md:w-[600px]
                            lg:h-[700px] lg:w-[400px] xl:h-[60px] xl:w-[500px]
                            `}
              >
                <div className="ml-2 w-[50px] text-center text-[15px] md:ml-6 md:w-[75px] md:text-[15px]">
                  {data.market_cap_rank}
                </div>
                <div className="flex w-[110px] flex-row items-center text-center text-[15px] md:w-[200px] md:text-[14px] ">
                  <Link
                    rel="noopener noreferrer"
                    className="flex flex-row items-center duration-200 ease-in-out hover:scale-[1.1]"
                    to={`/view/${data.id}`}
                  >
                    <img
                      src={data.image}
                      alt=""
                      className="ml-3 mr-2 h-[22.5px] w-[22.5px] md:ml-5 md:h-[30px] md:w-[30px] lg:ml-5"
                    />
                    <span className="overflow-hidden">{data.name}</span>
                  </Link>
                </div>
                <div className="mx-2 w-[75px] overflow-hidden text-center text-[15px] md:w-[175px] md:text-[15px] lg:mx-1">
                  ${data.current_price.toLocaleString()}
                </div>
                <div className="mx-1 w-[100px] pr-2 text-center text-[15px] md:w-[175px] md:pr-6 md:text-[15px] lg:mx-1 ">
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
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}

          <Link to="/Home">
            <button
              className="mb-2 mt-6 flex justify-center rounded-lg  
                            bg-blue-500 px-3 py-1 text-white duration-200 ease-in-out
                            hover:bg-blue-100 hover:text-blue-500 md:text-[15px] lg:text-[13px] xl:text-[13px]"
            >
              View all coins here
            </button>
          </Link>
        </div>

        <div
          className={`
                 ${
                   mode === "light"
                     ? "text-glow bg-slate-200 text-blue-900 shadow-xl"
                     : "chart text-white"
                 } mt-[30px]
                flex h-[500px]
                w-[95%] flex-col
                items-center justify-around
                rounded-3xl pb-[20px] 
                md:mt-[30px] md:h-[500px] md:w-[700px] md:flex-col
                lg:mt-[250px] lg:h-[550px] lg:w-[475px] lg:flex-col xl:mt-[200px] xl:h-[500px] xl:w-[600px] xl:flex-col
                `}
        >
          <div className="mx-4 mb-[20px] mt-4 flex flex-col items-center xl:mb-[10px] xl:text-[1rem]">
            <h1 className="text-center text-3xl font-bold ">
              Trending Coins now
            </h1>
          </div>

          {trending?.length ? (
            trending?.slice(0, 5).map((data, index) => (
              <div
                key={`${id}-${data.id}-${index}`}
                className={` 
                            ${
                              mode === "light"
                                ? "newscard-filter-light border-2 border-blue-200 font-semibold"
                                : "cryptocard-grad text-white "
                            } 
                            z-[1] mt-5
                            flex h-[50px]
                            w-[85%] flex-row
                            items-center justify-between
                            rounded-lg 
                            md:h-[70px] md:w-[600px]
                            lg:h-[700px] lg:w-[400px] xl:h-[60px] xl:w-[500px]
                            `}
              >
                <div className="ml-2 w-[50px] text-center text-[15px] md:ml-6 md:w-[75px] md:text-[15px]">
                  {data.item.score + 1}
                </div>
                <div className="flex w-[110px] flex-row items-center text-center text-[15px] md:w-[200px] md:text-[14px] ">
                  <Link
                    rel="noopener noreferrer"
                    className="flex flex-row items-center duration-200 ease-in-out hover:scale-[1.1]"
                    to={`/view/${data.id}`}
                  >
                    <img
                      src={data.item.small}
                      alt=""
                      className="ml-3 mr-2 h-[22.5px] w-[22.5px] md:ml-5 md:h-[30px] md:w-[30px] lg:ml-5"
                    />
                    <span className="overflow-hidden">{data.item.name}</span>
                  </Link>
                </div>
                <div className="mx-2 w-[75px] text-center text-[15px] md:w-[175px] md:text-[15px] lg:mx-1">
                  ${((data.item.price_btc * usdprice) / 1).toFixed(8)}
                </div>
                <div className="text-glow mx-2 w-[75px] text-center text-[15px] font-semibold md:w-[175px] md:text-[15px] lg:mx-1">
                  ${data.item.symbol}
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
          <Link to="/Home">
            <button
              className="mb-2 mt-6 flex justify-center rounded-lg  
                        bg-blue-500 px-3 py-1 text-white duration-200 ease-in-out
                        hover:bg-blue-100 hover:text-blue-500 md:text-[15px] lg:text-[13px] xl:text-[13px]"
            >
              View all coins here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoinCarousel;
