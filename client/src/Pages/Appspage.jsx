import { useState, useEffect } from "react";
import ProfitCalculator from "../components/ProfitCalc.jsx";
import LeverageCalculator from "../components/LeverageCalc.jsx";
import ExchangeCalculator from "../components/ExchangeCalc.jsx";


function AppPage(props) {
    const fiatData = props.fiatData

    const [activeCalc, setActiveCalc] = useState("calc1")

    const handleClick = (calc) => {
        setActiveCalc(calc)
    }

    return ( 
        <div className=" w-full lg:h-[1000px] md:h-[1200px] h-[1200px] bg-[#051925] flex flex-col items-center">

            <div className="
            absolute z-[2]
            lg:w-[1000px] lg:h-[200px]
            md:w-[700px] md:h-[210px]
            w-[450px] h-[200px]
            rounded-lg 
            mt-12
            AppsHeader
            pb-4
            flex  flex-col">
    
            </div>

            <div className="
            absolute z-[2]
            lg:w-[1000px] lg:h-[200px]
            md:w-[700px] md:h-[210px]
            w-[450px] h-[200px]
            rounded-lg 
            mt-12
            headCard-filter 
            pb-4
            flex  flex-col">
                <div className="p-6">
                    <div className="lg:mb-5 md:mb-6 mb-3">
                        <h1 className="text-white lg:text-3xl md:text-3xl text-[21.5px] font-bold mb-2">
                            Calculators for P/L. leverage. and more.
                        </h1>
                        <p className="text-[white] md:text-md text-sm italic font-semibold">
                            Use calculators to leverage your trading, make a strategy, or just simple calculate the profits.
                        </p>
                    </div>
                   
                    
                    <div className="flex lg:flex-row items-center justify-center">
                    
                        <div>
                            <button onClick={() => handleClick("calc1")} className={`text-white text-glow lg:text-lg md:text-lg text-sm 
                            bg-[#062c43] lg:w-[250px] md:w-[190px] w-[100px] h-[50px] rounded-lg mr-6 my-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]
                            hover:bg-[#ced7e0] active:bg-[#9ccddc] focus:outline-none focus:ring focus:ring-[#9ccddc]`}>
                                Profit Calculator
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleClick("calc2")} className={`text-white text-glow lg:text-lg md:text-lg text-sm 
                            bg-[#062c43] lg:w-[250px] md:w-[190px] w-[100px] h-[50px] rounded-lg mr-6 my-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]
                            hover:bg-[#ced7e0] active:bg-[#9ccddc] focus:outline-none focus:ring focus:ring-[#9ccddc]`}>
                                Futures Calculator
                            </button>
                        </div>
                        <div>
                            <button onClick={() => handleClick("calc3")} className={`text-white text-glow lg:text-lg md:text-lg text-sm 
                            bg-[#062c43] lg:w-[250px] md:w-[190px] w-[100px] h-[50px] rounded-lg mr-6 my-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]
                            hover:bg-[#ced7e0] active:bg-[#9ccddc] focus:outline-none focus:ring focus:ring-[#9ccddc]`}>
                                Currency Exchange
                            </button>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="lg:mt-1 md:mt-0 mt-[0]">
                {activeCalc === "calc1" && <ProfitCalculator/>}
                {activeCalc === "calc2" && <LeverageCalculator/>}
                {activeCalc === "calc3" && <ExchangeCalculator fiatData={fiatData}/>}
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