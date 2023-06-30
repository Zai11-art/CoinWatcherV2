import React from "react";
import { useParams } from "react-router-dom";
import CoinChartDisplay from "./CoinChartDisplay";
import { Interweave } from "interweave";
import CoinMarketList from "./CoinMarketList";
<<<<<<< HEAD

const ViewCardLower = (props) => {
=======
import { useSelector } from "react-redux";

const ViewCardLower = (props) => {
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master
  const { id } = useParams();
  const response = props.data;

  const formatNum = (x) => {
    let isNegative = x < 0 ? "-" : "";
    return isNegative + "$ " + Math.abs(x.toFixed(2));
  };

  const formatNumLessOne = (x) => {
    let isNegative = x < 0 ? "-" : "";
    return isNegative + "$ " + Math.abs(x.toFixed(6));
  };

  return (
    <div
      className="
        mt-[330px] flex
        h-[400px] w-[100%]
        justify-center rounded-lg
        md:mt-[350px]
        md:h-[400px]  md:w-[100%] lg:mt-[50px] lg:h-[100%]
        lg:w-[100%]  xl:mt-[0px]"
    >
      <div
<<<<<<< HEAD
        className="
=======
        className={`
>>>>>>> origin/master
          flex h-[2300px]
          w-[95%] flex-col
          justify-between rounded-bl-3xl
          rounded-br-3xl border-[2px]
<<<<<<< HEAD
          border-[#054569] bg-[#062130]  
          p-[3%]
          md:h-[2200px] md:w-[700px]
          md:p-[3%]  lg:h-[1300px]  lg:w-[1000px] lg:flex-row 
          lg:p-[1.5%] xl:h-[100%]  xl:w-[1300px] xl:flex-col xl:p-[1%]"
      >
        <div className="flex flex-col justify-between lg:flex-row xl:flex-row">
          <div
            className="
              chart mr-3
              mt-3 flex
              h-[350px] w-[100%]
              flex-col rounded-xl p-2 md:h-[350px]
              md:w-[640px] lg:h-[380px] lg:w-[640px] xl:h-[420px] xl:w-[800px]"
=======
          
          ${
            mode === "light"
              ? "newscard-filter-light text-glow border-blue-300 text-blue-900"
              : " border-[#054569] bg-[#062130]  text-white"
          } 
          p-[3%]
          md:h-[2200px] md:w-[700px]
          md:p-[3%]  lg:h-[1300px]  lg:w-[1000px] lg:flex-col 
          lg:p-[1.5%] xl:h-[100%]  xl:w-[1300px] xl:flex-col xl:p-[1%]`}
      >
        <div className="flex flex-col justify-between lg:flex-row xl:flex-row">
          {/* Coin Chart */}
          <div
            className={`
            ${mode === "light" ? "bg-slate-200/90" : "chart"} mr-3
              mt-3 flex
              h-[350px] w-[100%] flex-col
              rounded-xl p-2 shadow-xl md:h-[350px]
              md:w-[640px] lg:h-[380px] lg:w-[600px] xl:h-[420px] xl:w-[800px]`}
>>>>>>> origin/master
          >
            <CoinChartDisplay data={response} />
          </div>

<<<<<<< HEAD
          <div
            className="
              chart mt-3
              flex h-[420px]
              w-[100%] flex-col
              rounded-xl p-3 md:h-[400px] md:w-[640px]
              lg:h-[380px] lg:w-[400px] xl:h-[420px] xl:w-[445px]"
          >
            <div className="mx-7">
              <h1 className="mb-4 text-center text-2xl font-bold text-[white] md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
                Coin Stats
              </h1>
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
          {/* coin stats right */}
          <div
            className={`
              ${
                mode === "light"
                  ? "bg-slate-200/90 font-semibold text-slate-900"
                  : "chart text-white"
              } mt-3
              flex h-[420px]
              w-[100%] flex-col rounded-xl
              p-3 shadow-xl md:h-[400px] md:w-[640px]
              lg:h-[380px] lg:w-[350px] xl:h-[420px] xl:w-[445px]`}
          >
            <div className="mx-7">
              <h1 className="mb-4 text-center text-2xl font-bold  md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
                Coin Stats
              </h1>
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>Current Price</span>
                <span className="font-semibold">
                  $ {response.market_data.current_price.usd.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>Price Change 24hr</span>
                <span className="font-semibold">
                  {response.market_data.price_change_24h_in_currency.usd > 1
                    ? formatNum(
                        response.market_data.price_change_24h_in_currency.usd
                      )
                    : formatNumLessOne(
                        response.market_data.price_change_24h_in_currency.usd
                      )}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>24hr High / 24hr Low</span>
                <span className="font-semibold">
                  $ {response.market_data.high_24h.usd.toLocaleString()} / ${" "}
                  {response.market_data.low_24h.usd.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>Total trading Vol.</span>
                <span className="font-semibold">
                  $ {response.market_data.total_volume.usd.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>All Time High</span>
                <span className="font-semibold">
                  $ {response.market_data.ath.usd.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>All Time Low</span>
                <span className="font-semibold">
                  {response.market_data.atl.usd > 1
                    ? formatNum(response.market_data.atl.usd)
                    : formatNumLessOne(response.market_data.atl.usd)}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[13.5px] xl:text-[16px]">
>>>>>>> origin/master
                <span>Genesis Date</span>
                <span className="font-semibold">
                  {!response.genesis_date || response.genesis_date == ""
                    ? "N/A"
                    : response.genesis_date}
                </span>
              </div>
              <hr className="border-blue-500" />
            </div>
          </div>
        </div>

        <div
<<<<<<< HEAD
          className="
=======
          className={`
>>>>>>> origin/master
              mt-[-170px] flex
              h-[420px] w-[100%]
              flex-col rounded-xl
              p-3 md:mt-[-100px] 
              md:h-[400px] md:w-[640px]
              lg:mt-[-70px] lg:h-[380px] 
              lg:w-[100%] xl:mt-[45px] xl:h-[420px] xl:w-[100%]  
<<<<<<< HEAD
              "
        >
          <h1 className="mb-4 text-center text-2xl font-bold text-[white] md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
=======
              ${
                mode === "light" ? "font-semibold text-slate-900" : "text-white"
              } 
              `}
        >
          <h1 className="mb-4 text-center text-2xl font-bold  md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
>>>>>>> origin/master
            {response.localization.en} Info{" "}
            {response.description.en == "" ? "Unavailable" : ""}
          </h1>
          <Interweave
<<<<<<< HEAD
            className="xl:text-md text-[12px] text-[#d4d3d2] md:text-[13.5px] lg:text-[15px] "
=======
            className="xl:text-md text-[12px]  md:text-[13.5px] lg:text-[15px] "
>>>>>>> origin/master
            content={response.description.en}
          />
        </div>

        <div className=" ml-3 flex flex-col lg:flex-row xl:flex-row">
          <CoinMarketList data={response} />
          <div
<<<<<<< HEAD
            className="
                chart mt-3
                flex h-[420px]
                w-[100%] flex-col
                rounded-xl p-3 md:h-[400px] md:w-[640px]
                lg:h-[380px] lg:w-[400px] xl:h-[400px] xl:w-[600px]"
          >
            <div className="mx-7">
              <h1 className="mb-4 text-center text-2xl font-bold text-[white] md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
                Currency to {response.localization.en}
              </h1>
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[15px] xl:text-[16px]">
=======
            className={`
            ${
              mode === "light"
                ? "bg-slate-200/90 font-semibold text-slate-900"
                : "chart text-white"
            } mt-3
                flex h-[420px]
                w-[100%] flex-col
                rounded-xl p-3 md:h-[400px] md:w-[640px]
                lg:h-[380px] lg:w-[400px] xl:h-[400px] xl:w-[600px]`}
          >
            <div className="mx-7">
              <h1 className="mb-4 text-center text-2xl font-bold  md:text-center md:text-3xl lg:text-left lg:text-xl xl:text-left xl:text-3xl">
                Currency to {response.localization.en}
              </h1>
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[15px] xl:text-[16px]">
>>>>>>> origin/master
                <span>
                  {response.symbol.toUpperCase()} /{" "}
                  {Object.keys(
                    response.market_data.current_price
                  )[48].toUpperCase()}
                </span>
                <span className="font-semibold">
                  ${response.tickers[0].last.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[15px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[15px] xl:text-[16px]">
>>>>>>> origin/master
                <span>
                  {response.symbol.toUpperCase()} /{" "}
                  {Object.keys(response.market_data.current_price)[
                    61 - 24
                  ].toUpperCase()}
                </span>
                <span className="font-semibold">
                  P {response.market_data.current_price.php.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[15px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[15px] xl:text-[16px]">
>>>>>>> origin/master
                <span>
                  {response.symbol.toUpperCase()} /{" "}
                  {Object.keys(
                    response.market_data.current_price
                  )[25].toUpperCase()}
                </span>
                <span className="font-semibold">
                  R {response.market_data.current_price.inr.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[15px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[15px] xl:text-[16px]">
>>>>>>> origin/master
                <span>
                  {response.symbol.toUpperCase()} /{" "}
                  {Object.keys(
                    response.market_data.current_price
                  )[13].toUpperCase()}
                </span>
                <span className="font-semibold">
                  Y {response.market_data.current_price.cny.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />
<<<<<<< HEAD
              <div className="mb-2 mt-3 flex justify-between text-white md:text-[15px] lg:text-[15px] xl:text-[16px]">
=======
              <div className="mb-2 mt-3 flex justify-between md:text-[15px] lg:text-[15px] xl:text-[16px]">
>>>>>>> origin/master
                <span>
                  {response.symbol.toUpperCase()} /{" "}
                  {Object.keys(
                    response.market_data.current_price
                  )[48].toUpperCase()}
                </span>
                <span className="font-semibold">
                  $ {response.tickers[0].last.toLocaleString()}
                </span>
              </div>
              <hr className="border-blue-500" />

              <div
<<<<<<< HEAD
                className="mb-2 mt-6 flex justify-center rounded-lg  
                    bg-blue-500 p-1 text-white duration-200 ease-in-out
                    hover:bg-blue-100 hover:text-blue-500 md:text-[15px] lg:text-[13px] xl:text-[13px]"
=======
                className={`mb-2 mt-6 flex justify-center rounded-lg  
                     p-1 duration-200 ease-in-out
                      md:text-[15px] lg:text-[13px] xl:text-[13px]
                    ${mode === 'light' ? "newscard-filter-light hover:scale-[1.02] text-blue-800 hover:text-slate-200" : "bg-blue-500 hover:bg-blue-100 hover:text-blue-500"}`}
>>>>>>> origin/master
              >
                <a href="#" className="font-bold">
                  {" "}
                  Full Currency List{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardLower;
