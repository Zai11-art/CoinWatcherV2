import React from 'react'
import { useState } from 'react';

const CalculatorWidget = () => {
    const [open, setOpen] = useState(false)

    const [currentInitial,setcurrentInitial]=useState(0);
    const [currentPrice,setcurrentPrice]=useState(0);
    const [currentSell,seturrentSell]=useState(0);
    const [total, setTotal] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!currentInitial || !currentPrice || !currentSell){
            setTotal(0)
        } else {
            setTotal(
                (((parseFloat(currentSell) - parseFloat(currentPrice))/ parseFloat(currentPrice))*parseFloat(currentInitial))
             )
        }
        
        setcurrentInitial(currentInitial)
        setcurrentPrice(currentPrice)
        seturrentSell(currentSell)
    }

    const handleReset = (e) => {
        e.preventDefault()
        setcurrentInitial(0)
        setcurrentPrice(0)
        seturrentSell(0)
        setTotal(0)
    }
    
    return (
        <div className="z-[2]">
            <div className="fixed top-[475px] right-[20px] z-[101] duration-150 ease-in-out hover:scale-[1.02] cursor-pointer">
                <div onClick={()=>setOpen(!open)}
                 className="bg-[#9ccddc] 
                md:h-[50px] md:w-[50px] 
                h-[50px] w-[50px]
                lg:right-[19px] lg:top-[-360px] 
                md:right-[19px] md:top-[-355px] 
                right-[10px] top-[-350px]
                z-[2] 
                lg:right-[20p]
                rounded-full absolute 
                 "></div>
                <div 
                 className="absolute 
                lg:right-[26px] lg:top-[-353px] 
                md:right-[26px] md:top-[-347px] 
                right-[19px] top-[-340px]
                md:text-4xl text-3xl 
                text-[#062c43] z-[100]
                hover:text-[white] 
                duration-150 ease-in-out hover:scale-[1.04] cursor-pointer">
                        <ion-icon onClick={()=>setOpen(!open)} name={open ? 'close': 'calculator-outline'}></ion-icon>
                </div>
            </div>

            <div className={` fixed right top-[140px] z-[100]
            ${open ? 'right-[0px] ' : 'right-[-500px] '}  
            duration-300 ease-in-out`}>
                <div className={`
                lg:w-[425px] lg:h-[425px]
                md:w-[400px] md:h-[425px]
                w-[400px] h-[425px]
                rounded-lg px-4
                border-[#094663] border-[2px] mt-12
                bg-[#052330]
                pb-6 mx-3
                flex  flex-col items-center
            
                `}>
                    <form >
                    <h1 className="text-2xl uppercase font-semibold  text-white mt-7 text-center">Profit Calculator</h1>
                    <div className="flex flex-col items-between mt-4 mb-3 ">
                        <div className="flex flex-row justify-between my-2">
                            <label htmlFor="" className=" text-white pr-5">Investment: </label>
                            <input min="0" onChange={(e)=>setcurrentInitial(parseFloat(e.target.value))} value={currentInitial}
                            type="number" className="border-[1px] border-[#9ccddc] rounded-sm bg-[#062c43] text-[white]  p-1 " />
                        </div>
                        <div className="flex flex-row justify-between my-2">
                            <label htmlFor="" className=" text-white pr-5">Price: </label>
                            <input min="0" onChange={(e)=>setcurrentPrice(parseFloat(e.target.value))} value={currentPrice}
                            type="number"  className="border-[1px] border-[#9ccddc] rounded-sm bg-[#062c43] text-[white]  p-1 " />
                        </div>
                        <div className="flex flex-row justify-between my-2">
                            <label htmlFor="" className=" text-white pr-5">Sell Price: </label>
                            <input min="0" onChange={(e)=>seturrentSell(parseFloat(e.target.value))} value={currentSell}
                            type="number" className="border-[1px] border-[#9ccddc] rounded-sm bg-[#062c43] text-[white]  p-1 " />
                        </div>
                        <div className="flex flex-row justify-around my-2">
                            <button onClick={handleSubmit} className="p-2 bg-[#062c43] w-[100px] border-[2px]  border-[#9ccddc] rounded-lg bg-[#062c43] text-[white] ">
                                Calculate
                            </button>
                            <button onClick={handleReset} className="p-2 bg-[#062c43] w-[100px] border-[2px]  border-[#9ccddc] rounded-lg bg-[#062c43] text-[white] ">
                                Reset
                            </button>
                        </div>
                        <div className=" bg-[#062c43] w-[350px] p-2 flex flex-col rounded-lg mt-5 bg-[#020e14]">
                            <span className="text-white">Investment Amount: {`$${currentInitial}`}</span>
                            <span className={`${total > currentInitial? 'text-green-300': total < currentInitial? 'text-[red]': 'text-white' }`}>
                                Profit / Loss Amount: {`$${total.toFixed(2)}`}
                            </span>
                            <span className={`${total > currentInitial? 'text-green-300': total < currentInitial? 'text-[red]': 'text-white' }`}>
                                Exit Total: {`$${((total+currentInitial).toFixed(2))}`}
                            </span>
                            
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CalculatorWidget;