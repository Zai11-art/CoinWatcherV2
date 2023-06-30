import { useState, useEffect } from "react";
<<<<<<< HEAD

const ProfitCalculator = () => {
=======
import { useSelector } from "react-redux";

const ProfitCalculator = () => {

    const mode = useSelector((state) => state.mode)
>>>>>>> origin/master
   
    const [currentInitial,setcurrentInitial]=useState(0);
    const [currentPrice,setcurrentPrice]=useState(0);
    const [currentSell,seturrentSell]=useState(0);
    const [investFee,setInvestFee]=useState(0);
    const [exitFee,setExitFee]=useState(0);
    const [total, setTotal] = useState(0);
    const [multiplier, setmuitiplier] = useState(0);
    const [exit, setExit] = useState(0);

    const handleSubmit = (e) => {
        const x = ((total+currentInitial)/currentInitial);
        const y = (((((parseFloat(currentSell) - parseFloat(currentPrice))/ parseFloat(currentPrice))*parseFloat(currentInitial))+currentInitial)/currentInitial);
        e.preventDefault();
        if (!currentInitial || !currentPrice || !currentSell){
            setTotal(0)
        } else {
            setTotal(
                (((parseFloat(currentSell) - parseFloat(currentPrice))/ parseFloat(currentPrice))*parseFloat(currentInitial)) 
             )
             setExit(
                (((parseFloat(currentSell) - parseFloat(currentPrice))/ parseFloat(currentPrice))*parseFloat(currentInitial)) - (investFee+exitFee) + currentInitial
             ) 
             setmuitiplier(y)
             
        }
        
        
        setcurrentInitial(currentInitial)
        setcurrentPrice(currentPrice)
        seturrentSell(currentSell)
        setInvestFee(investFee)
        setExitFee(exitFee)
    }

    const handleReset = (e) => {
        e.preventDefault()
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
        md:w-[700px] md:h-[470px]
        w-[450px] h-[590px]
        rounded-lg p-6
<<<<<<< HEAD
        border-[#9ccddc] border-[2px] 
        bg-[#062c43]
=======
        ${mode === "light" ? "headCard-filter-light text-blue-900 text-glow" : "headCard-filter text-white"}
>>>>>>> origin/master
        pb-4 mx-3
        flex  flex-col 
        shadow-2xl
        `}>
            <form>
            <div className="flex flex-row items-center justify-between w-full">
<<<<<<< HEAD
                <h1 className="text-3xl uppercase font-bold  text-white mt-2 ">Profit Calculator </h1>
                <div className="lg:text-sm text-[11px] italic  text-white mt-2 flex flex-row items-center justify-center">
=======
                <h1 className="text-3xl uppercase font-bold   mt-2 ">Profit Calculator </h1>
                <div className="lg:text-sm text-[11px] italic   mt-2 flex flex-row items-center justify-center">
>>>>>>> origin/master
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
<<<<<<< HEAD
                        <label htmlFor="" className=" text-white lg:text-lg font-semibold text-md mb-3">Cost / Margin: </label>
=======
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Cost / Margin: </label>
>>>>>>> origin/master
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input required onChange={(e)=>setcurrentInitial(parseFloat(e.target.value))} value={currentInitial}
                            type="number" min="0"
<<<<<<< HEAD
                            className="border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm bg-[#02121c] text-[white]  p-1 " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className=" text-white lg:text-lg font-semibold text-md mb-3">Buy Price: </label>
=======
                            className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Buy Price: </label>
>>>>>>> origin/master
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input  min="0" required onChange={(e)=>setcurrentPrice(parseFloat(e.target.value))} value={currentPrice}
<<<<<<< HEAD
                            type="number" className="border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm bg-[#02121c] text-[white]  p-1 " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className=" text-white lg:text-lg font-semibold text-md mb-3">Sell Price: </label>
=======
                            type="number" 
                            className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Sell Price: </label>
>>>>>>> origin/master
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input  min="0" required onChange={(e)=>seturrentSell(parseFloat(e.target.value))} value={currentSell}
<<<<<<< HEAD
                            type="number" className="border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm bg-[#02121c] text-[white]  p-1 " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className=" text-white lg:text-lg font-semibold text-md mb-3">Investment Fee: </label>
=======
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] mb-6">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Investment Fee: </label>
>>>>>>> origin/master
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input  min="0" required onChange={(e)=>setInvestFee(parseFloat(e.target.value))} value={investFee}
<<<<<<< HEAD
                            type="number" className="border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm bg-[#02121c] text-[white]  p-1 " />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] lg:mb-6 md:mb-6 mb-1">
                        <label htmlFor="" className=" text-white lg:text-lg font-semibold text-md mb-3">Exit Fee: </label>
=======
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[300px] md:w-[200px] w-[190px] lg:mb-6 md:mb-6 mb-1">
                        <label htmlFor="" className="  lg:text-lg font-semibold text-md mb-3">Exit Fee: </label>
>>>>>>> origin/master
                        <div className="flex">
                            <span className="inline-flex items-center px-3 lg:text-xl text-md
                            text-gray-900   bg-[#9ccddc] border border-r-0 border-gray-300 
                            rounded-l-md ">
                            $
                            </span>
                            <input  min="0" required onChange={(e)=>setExitFee(parseFloat(e.target.value))} value={exitFee}
<<<<<<< HEAD
                            type="number" className="border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm bg-[#02121c] text-[white]  p-1 " />
                        </div>
                    </div>    

                    <div className="w-full lg:h-[125px] md:h-[100px] h-[100px] mt-3 
                     bg-[#0b141a] rounded-xl">
                    <div className="flex flex-row justify-around 
                    lg:mt-2 md:mt-1 mt-1">
                        <div className="flex flex-col items-center">
                            <h1 className="text-white text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Profit / Loss:</h1>
                            <div className="rounded-xl bg-[#12232e] 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center">
                                 <h1 className={`lg:text-2xl text-xl
                                  text-glow ${exit > currentInitial || total == 0 ?  "text-[#4dff58]" : "text-[#fc3a3a]"}`
=======
                            type="number" className={`border-[1px] border-[#9ccddc] 
                            lg:w-[170px] lg:h-[35px] 
                            w-[130px] h-[30px] 
                            lg:text-xl md:text-lg text-md
                            rounded-sm ${mode === 'light' ? "bg-slate-200/90" : "bg-[#02121c]"}  p-1 `} />
                        </div>
                    </div>    

                    <div className={`w-full lg:h-[125px] md:h-[100px] h-[100px] mt-3 
                     ${mode === 'light' ? "bg-slate-200/50" : "bg-[#02121c]"}  rounded-xl`}>
                    <div className="flex flex-row justify-around 
                    lg:mt-2 md:mt-1 mt-1">
                        <div className="flex flex-col items-center">
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Profit / Loss:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"}  
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                 <h1 className={`lg:text-2xl text-xl
                                  text-glow font-semibold ${exit > currentInitial || total == 0 ?  `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } ` : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } `}`
>>>>>>> origin/master
                                  }>
                                    ${(total).toFixed(2)}
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
<<<<<<< HEAD
                            <h1 className="text-white text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Total Exit Amount:</h1>
                            <div className="rounded-xl bg-[#12232e] 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center">
                                <h1 className={`lg:text-2xl text-xl
                                  text-glow ${exit > currentInitial || total == 0 ?  "text-[#4dff58]" : "text-[#fc3a3a]"}`
=======
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Total Exit Amount:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"}  
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                <h1 className={`lg:text-2xl text-xl
                                  text-glow font-semibold ${exit > currentInitial || total == 0 ?  `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } ` : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } `}`
>>>>>>> origin/master
                                  }>
                                ${investFee || exitFee ?
                                    (exit).toFixed(2)
                                    : (total).toFixed(2)
                                }
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
<<<<<<< HEAD
                            <h1 className="text-white text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Multipler:</h1>
                            <div className="rounded-xl bg-[#12232e] 
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center">
                                 <h1 className={`lg:text-2xl text-xl
                                  text-glow ${exit > currentInitial || total == 0 ?  "text-[#4dff58]" : "text-[#fc3a3a]"}`
=======
                            <h1 className=" text-glow font-bold
                            lg:text-lg md:text-md text-[12px]">Multipler:</h1>
                            <div className={`rounded-xl ${mode === 'light' ? "newscard-filter-light" : "bg-[#040d11]"}  
                            lg:w-[120px] lg:h-[60px] 
                            md:w-[110px] md:h-[50px] 
                            w-[90px] h-[55px] 
                            mt-3 flex items-center justify-center`}>
                                 <h1 className={`lg:text-2xl text-xl
                                  text-glow font-semibold ${exit > currentInitial || total == 0 ?  `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } ` : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } `}`
>>>>>>> origin/master
                                  }>{
                                !multiplier  ? 0 : multiplier.toFixed(2)
                                 }x
                                 </h1>
                            </div>
                        </div>
                        
                     
                    </div>
                    
                </div>
                    <div className="flex flex-col lg:w-[400px] md:w-[300px] w-[250px] lg:mb-6 md:mb-6 mb-1 mt-5">
                        <div className="flex items-center justify-center">
<<<<<<< HEAD
                            <button onClick={handleSubmit} className="text-white lg:text-lg font-semibold
                            w-[200px] h-[40px] px-1 mx-1   border-[1px] border-[#9ccddc] rounded-lg
                            bg-[#062c43] hover:bg-[#9ccddc] hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]
                            ">Calculate</button>
                            <button onClick={handleReset} className="text-white lg:text-lg font-semibold
                                w-[200px] h-[40px] px-1 mx-1  border-[1px] border-[#9ccddc] rounded-lg
                                bg-[#062c43] hover:bg-[#9ccddc] hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]
                            ">Reset</button>
=======
                            <button onClick={handleSubmit} className={` lg:text-lg font-semibold
                            w-[200px] h-[40px] px-1 mx-1   border-[1px] border-[#9ccddc] rounded-lg
                            duration-200 ease-in-out hover:scale-[1.04] ${
                                mode === "light"
                                  ? "border-[#0b2027] newscard-filter-light font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                  : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                              }
                            `}>Calculate</button>
                            <button onClick={handleReset} className={` lg:text-lg font-semibold
                            w-[200px] h-[40px] px-1 mx-1   border-[1px] border-[#9ccddc] rounded-lg
                            duration-200 ease-in-out hover:scale-[1.04] ${
                                mode === "light"
                                  ? "border-[#0b2027] newscard-filter-light font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                                  : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
                              }
                            `}>Reset</button>
>>>>>>> origin/master
                        </div>
                    </div>                        
                </div>
            </div>
            </form>    
        </div>
    )

}

export default ProfitCalculator;