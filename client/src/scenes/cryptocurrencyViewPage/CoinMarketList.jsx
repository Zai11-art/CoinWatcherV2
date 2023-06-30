import React from "react";
import Loader from "../../components/Loader";
import { useId } from "react";
<<<<<<< HEAD

const CoinMarketList = (props) => {
  const receivedData = [...props.data.tickers];
  const id = useId();

  console.log(receivedData)
=======
import { useSelector } from "react-redux";

const CoinMarketList = (props) => {
  const mode = useSelector((state) => state.mode);
  const receivedData = [...props.data.tickers];
  const id = useId();

  console.log(receivedData);
>>>>>>> origin/master

  return (
    <div
      className="
<<<<<<< HEAD
    xl:w-[100%] xl:h-[420px]
    lg:w-[100%] lg:h-[380px]
    md:w-[640px] md:h-[400px]
    w-[100%] h-[420px]"
    >
      <h1 className="xl:text-3xl lg:text-xl md:text-3xl text-2xl xl:text-left lg:text-left text-center md:text-center font-bold text-[white] mb-8">
        Top {props.data.localization.en} Markets
      </h1>
      <div
        className="
        chart
        xl:w-[775px] xl:h-[40px]
        lg:w-[640px] lg:h-[40px]
        md:w-[640px] md:h-[40px]
        w-[100%] h-[30px]
        rounded-none border-[0.5px] border-[#9ccddc]
        flex flex-row justify-around items-center text-white
        md:text-[15px] text-[12px]
        "
      >
        <div className="text-center w-[75px] md:text-[15px] text-[12px]  md:ml-6 ml-2">
          #
        </div>
        <div className="text-center w-[175px] md:text-[15px] text-[11px] lg:mx-1 mx-2">
          Market
        </div>
        <div className="text-center w-[175px] md:text-[15px] text-[12px] lg:mx-1 mx-2">
          Pair
        </div>
        <div className="text-center w-[250px] md:text-[15px] text-[12px] lg:mx-1 mx-2">
          Price
        </div>
        <div className="text-center w-[250px] md:text-[15px] text-[12px] lg:mx-1 mx-2">
=======
    h-[420px] w-[100%]
    md:h-[400px] md:w-[640px]
    lg:h-[380px] lg:w-[100%]
    xl:h-[420px] xl:w-[100%]"
    >
      <h1
        className={`text-center text-2xl font-bold md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl ${
          mode === "light" ? "text-blue-900" : "text-[white]"
        }  mb-8`}
      >
        Top {props.data.localization.en} Markets
      </h1>
      <div
        className={`
        ${
          mode === "light"
            ? "bg-slate-200/90 font-semibold text-slate-900"
            : "chart text-white"
        }
        flex h-[30px]
        w-[100%] flex-row
        items-center justify-around
        rounded-none border-[0.5px]
        border-[#9ccddc] text-[12px] md:h-[40px]
        md:w-[640px] md:text-[15px] lg:h-[40px] lg:w-[640px]
        xl:h-[40px] xl:w-[775px]
        `}
      >
        <div className="ml-2 w-[75px] text-center text-[12px]  md:ml-6 md:text-[15px]">
          #
        </div>
        <div className="mx-2 w-[175px] text-center text-[11px] md:text-[15px] lg:mx-1">
          Market
        </div>
        <div className="mx-2 w-[175px] text-center text-[12px] md:text-[15px] lg:mx-1">
          Pair
        </div>
        <div className="mx-2 w-[250px] text-center text-[12px] md:text-[15px] lg:mx-1">
          Price
        </div>
        <div className="mx-2 w-[200px] text-center text-[12px] md:text-[15px] lg:mx-1">
>>>>>>> origin/master
          Trust Score
        </div>
      </div>
      {receivedData?.length ? (
        receivedData?.slice(0, 10).map((data, index) => (
          <div
            key={`${id}-${data.market.name}-${index}`}
<<<<<<< HEAD
            className=" 
                chart
                xl:w-[775px] xl:h-[30px]
                lg:w-[640px] lg:h-[30px]
                md:w-[640px] md:h-[30px]
                w-[100%] h-[30px]
                rounded-sm 
                text-white z-[1]
                flex flex-row items-center 
                "
          >
            <div className="text-center w-[75px]  md:text-[15px] text-[12px] md:ml-6 ml-2">
              {receivedData.indexOf(data) + 1}
            </div>
            <div className="text-center w-[175px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">
              <a href={data.trade_url}>{data.market.name}</a>
            </div>
            <div className="text-center w-[175px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">
=======
            className={` 
                ${
                  mode === "light"
                    ? "bg-slate-200/70 font-semibold text-slate-900 border-[1px] border-blue-300"
                    : "chart"
                }
                z-[1] flex
                h-[30px] w-[100%]
                flex-row items-center
                rounded-sm md:h-[30px]
                md:w-[640px] 
               lg:h-[30px]
                lg:w-[640px] xl:h-[30px] xl:w-[775px] 
                `}
          >
            <div className="ml-2 w-[75px]  text-center text-[12px] md:ml-6 md:text-[15px]">
              {receivedData.indexOf(data) + 1}
            </div>
            <div className="mx-2 w-[175px]  text-center text-[14px] md:text-[15px] lg:mx-1">
              <a href={data.trade_url}>{data.market.name}</a>
            </div>
            <div className="mx-2 w-[175px]  text-center text-[14px] md:text-[15px] lg:mx-1">
>>>>>>> origin/master
              {data.base.length > 4 ? data.base.slice(0, 5) + "..." : data.base}{" "}
              /
              {data.target.length > 4
                ? data.target.slice(0, 5) + "..."
                : data.target}
            </div>
<<<<<<< HEAD
            <div className="text-center w-[250px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">
              $ {data.converted_last.usd.toLocaleString()}
            </div>
            <div className="text-center w-[250px]  md:text-[15px] text-[14px] lg:mx-1 mx-2 flex items-center justify-center">
              {data.trust_score == "green" ? (
                <div className="w-[10px] h-[10px] rounded-full bg-[green]"></div>
              ) : (
                <div className="w-[10px] h-[10px] rounded-full bg-[orange]"></div>
=======
            <div className="mx-2 w-[250px]  text-center text-[14px] md:text-[15px] lg:mx-1">
              $ {data.converted_last.usd.toLocaleString()}
            </div>
            <div className="mx-2 flex  w-[200px] items-center justify-center text-center text-[14px] md:text-[15px] lg:mx-1">
              {data.trust_score == "green" ? (
                <div className="h-[10px] w-[10px] rounded-full bg-[green]"></div>
              ) : (
                <div className="h-[10px] w-[10px] rounded-full bg-[orange]"></div>
>>>>>>> origin/master
              )}
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CoinMarketList;
