import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const LeverageCalculator = () => {
    
    const mode = useSelector((state) => state.mode)
    const [currentInitial,setcurrentInitial]=useState(0);
    const [currentPrice,setcurrentPrice]=useState(0);
    const [currentSell,seturrentSell]=useState(0);
    // const [investFee,setInvestFee]=useState(0);
    const [leverage,setLeverage]=useState(0);
    const [exitFee,setExitFee]=useState(0);
    const [total, setTotal] = useState(0);
    const [finaltotal, setfinalTotal] = useState(0);
    const [long, setLong] = useState(false)
    const [short, setshort] = useState(false)

    const [multiplier, setmuitiplier] = useState(0);

    const switchL = (e) => {
        e.preventDefault();
        setLong(true)
        setshort(false)
    }
    const switchS = (e) => {
        e.preventDefault();
        setshort(true)
        setLong(false)

    }

    const handleSubmit = (e) => {
        const x = ((total+currentInitial)/currentInitial);
        const y = ((parseFloat(currentSell) - parseFloat(currentPrice))*(currentInitial)*parseFloat(leverage))/currentInitial;
        e.preventDefault();
            setTotal(
                ((parseFloat(currentSell) - parseFloat(currentPrice))*(currentInitial)*parseFloat(leverage)))-currentInitial
            if (!currentInitial || !currentPrice || !currentSell || !exitFee) {
                setmuitiplier(0)
                setfinalTotal(0)
            } else {
                setmuitiplier(y)
                setfinalTotal(((parseFloat(currentSell) - parseFloat(currentPrice))*(currentInitial)*parseFloat(leverage))-exitFee)
            }

        setcurrentInitial(currentInitial)
        setcurrentPrice(currentPrice)
        seturrentSell(currentSell)
        setInvestFee(investFee)
        setExitFee(exitFee)
        
    }

    const handleReset = (e) => {
        e.preventDefault()
        setLeverage(0)
        setfinalTotal(0)
        setmuitiplier(0)
        setcurrentInitial(0)
        setcurrentPrice(0)
        seturrentSell(0)
        setInvestFee(0)
        setExitFee(0)
        setTotal(0)
    }


    return (
        <div className={`
        lg:mt-[265px] md:mt-[280px] mt-[270px]
        lg:w-[1000px] lg:h-[525px]
        md:w-[700px] md:h-[500px]
        w-[450px] h-[610px]
        rounded-lg p-6
        ${mode === "light" ? "headCard-filter-light text-blue-900 text-glow" : "headCard-filter text-white"}
        pb-4 mx-3
        flex  flex-col 
        shadow-2xl
        `}>
            <form>
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl uppercase font-bold  mt-2 ">Futures Calculator {long ? <span className={` ${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"}  text-3xl`}>Long</span> : 
                <span className={` ${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]'} text-3xl`}>Short</span>} </h1>
                
                <div className="lg:text-sm text-[11px] italic  mt-2 flex flex-row items-center justify-center">
                    <div className="text-lg">
                    <ion-icon name="help-circle-outline"></ion-icon>
                    </div>
                    
                    <span>
                     Take into account the fees and volatility might vary overtime.
                    </span>
                    
                </div>
            </div>
            
            <div className="flex flex-col items-between mt-4">
                <div className="flex flex-row  my-2 w-full flex-wrap">
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Cost / Margin: </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input min="0" onChange={(e)=>setcurrentInitial(parseFloat(e.target.value))} value={currentInitial}
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Buy Price: </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input min="0" onChange={(e)=>setcurrentPrice(parseFloat(e.target.value))} value={currentPrice}
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Sell Price: </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input min="0" onChange={(e)=>seturrentSell(parseFloat(e.target.value))} value={currentSell}
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Leverage: </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            X
                            </span>
                            <input min="0" onChange={(e)=>setLeverage(parseFloat(e.target.value))} value={leverage}
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] lg:mb-6 md:mb-6 mb-1">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Costs Fee: </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input min="0" onChange={(e)=>setExitFee(parseFloat(e.target.value))} value={exitFee}
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>    
                    <div className={`w-full lg:h-[125px] md:h-[100px] h-[100px] mt-3 
                        ${mode === 'light' ? "bg-slate-200/50" : "bg-[#02121c]"} rounded-xl`}>
                    <div className="flex flex-row justify-around 
                    lg:mt-2 md:mt-1 mt-1">
                        
                        <div className="flex flex-col items-center">
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[11px]">Contract quantity:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"} 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                  text-glow font-semibold ${mode === 'light' ? "text-blue-900" : "text-blue-300"}`
                                  }>
                                { currentPrice && leverage ? ((currentInitial*leverage)/currentPrice).toFixed(2) : (0)
                                    
                                }
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mr-1">
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[11px]">Profit / Loss:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"} 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                {long ? (
                                    <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                    text-glow font-semibold ${(finaltotal > currentInitial || total == 0) ?  `${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"}` : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]'}`}`
                                    }>
                                      {exitFee ? (
                                      long && finaltotal >= 0 ? `+$${Math.abs((finaltotal).toFixed(2))}` : `-$${Math.abs((finaltotal).toFixed(2))}`
                                    ):(
                                      total.toFixed(2)
                                    )}
  
                                    </h1>
                                ) : (
                                    <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                    text-glow font-semibold ${(finaltotal > currentInitial || total == 0) ?  `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]'}` : `${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"}`}`
                                    }>
                                      {exitFee ? (
                                        short && finaltotal <= 0 ? `+$${Math.abs((finaltotal).toFixed(2))}` : `-$${Math.abs((finaltotal).toFixed(2))}`
                                    ):(
                                      total.toFixed(2)
                                    )}
  
                                    </h1>
                                )}
                                 
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[11px]">Multipler:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"} 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                {long ? (
                                    <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                    text-glow font-semibold ${finaltotal > currentInitial || total == 0 ?  `${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"}` : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]'}`}`
                                    }>{
                                        long && multiplier > 0 ? `+${Math.abs((multiplier).toFixed(2))}` : `-${Math.abs((multiplier).toFixed(2))}`
                                   }x
                                   </h1>
                                ) : (
                                    <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                    text-glow font-semibold ${finaltotal > currentInitial || total == 0 ?  `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]'}` : `${mode === "light" ? "text-[#28a733]" : "text-[#2ae937]"}`}`
                                    }>{
                                        short && multiplier < 0 ? `+${Math.abs((multiplier).toFixed(2))}` : `-${Math.abs((multiplier).toFixed(2))}`
                                   }x
                                   </h1>
                                )}
                                 
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[11px]">Liquidation price:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"} 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                 <h1 className={`lg:text-2xl md:text-xl text-[16px]
                                  text-glow font-semibold ${mode === 'light' ? "text-blue-900" : "text-blue-300"}`
                                  }>$
                                  { long ? (
                                    currentPrice && leverage && currentInitial && long ? 
                                    ((currentPrice - (100/leverage)/100*currentPrice) + currentPrice*(0.004)).toFixed(2)
                                    : (
                                    0)
                                  ) : (
                                    currentPrice && leverage && currentInitial && short ? 
                                    ((currentPrice + (100/leverage)/100*currentPrice) + currentPrice*(0.004)).toFixed(2)
                                    : (
                                    0)
                                  )
                                    
                                    }
                                 </h1>
                            </div>
                        </div>
                        
                     
                    </div>
                    
                </div>
                    <div className="flex flex-row lg:w-[300px] md:w-[200px] w-[200px] lg:mb-6 md:mb-6 mb-1 mt-5 lg:ml-1 md:ml-0 ml-0">
                        <div className="flex items-center justify-center">
                            <button onClick={handleSubmit} className={`lg:text-lg font-semibold
                            lg:w-[100px] w-[90px]  lg:h-[40px] h-[36px] px-1 mx-1   border-[1px] rounded-lg duration-200 ease-in-out hover:scale-[1.04]
                            ${
                                mode === "light"
                                  ? "border-[#0b2027] newscard-filter-light font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                  : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                              }
                            `}>Calculate</button>
                            <button onClick={handleReset} className={`lg:text-lg font-semibold
                            lg:w-[100px] w-[90px]  lg:h-[40px] h-[36px] px-1 mx-1   border-[1px] rounded-lg duration-200 ease-in-out hover:scale-[1.04]
                            ${
                                mode === "light"
                                  ? "border-[#0b2027] newscard-filter-light font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                  : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                              }
                            `}>Reset</button>
                            <button onClick={switchL} className={`text-[#4dff58] lg:text-lg font-semibold
                                lg:w-[100px] w-[90px]  lg:h-[40px] h-[36px] px-1 mx-1  border-[1px] border-[#9ccddc] rounded-lg
                                bg-[#062c43] hover:bg-[#4dff58] hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]
                                ${mode === 'light' ? "border-[#0b2027] bg-blue-200 font-semibold text-[#2ab934] hover:bg-[#4dff58] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]" : ""}
                            `}>Long</button>
                            <button onClick={switchS} className={`text-[#fc3a3a] lg:text-lg font-semibold
                                lg:w-[100px] w-[90px]  lg:h-[40px] h-[36px] px-1 mx-1  border-[1px] border-[#9ccddc] rounded-lg
                                bg-[#062c43] hover:bg-[#fc3a3a] hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]
                                ${mode === 'light' ? "border-[#0b2027] bg-blue-200 font-semibold text-[#fc3a3a] hover:bg-[#fc3a3a] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]" : ""}
                            `}>Short</button>
                        </div>

                    </div>                        
                </div>
                
                
            </div>
            </form>
            
        </div>
    )
}
export default LeverageCalculator;