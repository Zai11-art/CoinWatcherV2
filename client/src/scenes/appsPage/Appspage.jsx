import { useState, useEffect } from "react";
import ProfitCalculator from "./ProfitCalc.jsx";
import LeverageCalculator from "./LeverageCalc.jsx";
import ExchangeCalculator from "./ExchangeCalc.jsx";
import { useSelector } from "react-redux";

function AppPage(props) {
  const mode = useSelector((state) => state.mode);
  const fiatData = props.fiatData;

  const [activeCalc, setActiveCalc] = useState("calc1");

  const handleClick = (calc) => {
    setActiveCalc(calc);
  };

  return (
    <div
      className={`h-[100vh] w-full md:h-[100vh] lg:h-[100vh] ${
        mode === "light" ? "bg-slate-300" : "bg-[#051925]"
      }  flex flex-col items-center`}
    >
      <div
        className="
            AppsHeader absolute
            z-[2] mt-12
            flex h-[200px]
            w-[450px] flex-col
            rounded-lg 
            pb-4
            md:h-[210px]
            md:w-[700px]
            lg:h-[200px]  lg:w-[1000px]"
      ></div>

      <div
        className={`
            absolute z-[2]
            mt-12 h-[200px]
            w-[450px] rounded-lg
            shadow-2xl md:h-[210px]
            md:w-[700px] 
            lg:h-[200px] lg:w-[1000px]
            ${mode === "light" ? "headCard-filter-light" : "headCard-filter"}
            flex
            flex-col  pb-4`}
      >
        <div className="p-6">
          <div
            className={`${
              mode === "light" ? "text-glow text-blue-900" : "text-white"
            } mb-3 md:mb-6 lg:mb-5`}
          >
            <h1 className=" mb-2 text-[21.5px] font-bold md:text-3xl lg:text-3xl">
              Calculators for P/L. leverage. and more.
            </h1>
            <p className="tmd:text-md text-sm font-semibold italic">
              Use calculators to leverage your trading, make a strategy, or just
              simple calculate the profits.
            </p>
          </div>

          <div className="flex items-center justify-center lg:flex-row">
            <div>
              <button
                onClick={() => handleClick("calc1")}
                className={` text-glow my-2 mr-6 flex 
                             h-[50px] w-[100px] flex-row items-center justify-around rounded-lg border-[0.5px]
                            text-sm duration-200 ease-in-out hover:scale-[1.02]  md:w-[190px]
                            md:text-lg lg:w-[250px] lg:text-lg
                            ${
                              mode === "light"
                                ? "border-[#0b2027] bg-slate-300/80 font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                            }
                            `}
              >
                Profit Calculator
              </button>
            </div>
            <div>
              <button
                onClick={() => handleClick("calc2")}
                className={` text-glow my-2 mr-6 flex 
                             h-[50px] w-[100px] flex-row items-center justify-around rounded-lg border-[0.5px]
                            text-sm duration-200 ease-in-out hover:scale-[1.02]  md:w-[190px]
                            md:text-lg lg:w-[250px] lg:text-lg
                            ${
                              mode === "light"
                                ? "border-[#0b2027] bg-slate-300/80 font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                            }
                            `}
              >
                Futures Calculator
              </button>
            </div>
            <div>
              <button
                onClick={() => handleClick("calc3")}
                className={` text-glow my-2 mr-6 flex 
                             h-[50px] w-[100px] flex-row items-center justify-around rounded-lg border-[0.5px]
                            text-sm duration-200 ease-in-out hover:scale-[1.02]  md:w-[190px]
                            md:text-lg lg:w-[250px] lg:text-lg
                            ${
                              mode === "light"
                                ? "border-[#0b2027] bg-slate-300/80 font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                            }
                            `}
              >
                Currency Exchange
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[0] md:mt-0 lg:mt-1">
        {activeCalc === "calc1" && <ProfitCalculator />}
        {activeCalc === "calc2" && <LeverageCalculator />}
        {activeCalc === "calc3" && <ExchangeCalculator fiatData={fiatData} />}
      </div>
    </div>
  );
}

export default AppPage;

// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
