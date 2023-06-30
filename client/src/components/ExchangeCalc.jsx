import { useState, useEffect } from "react";
import Exchangecalc from "../testComp/Exchangecalc";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loader from "./Loader";


const ExchangeCalculator = (props) => {

    const {data} = useQuery(['currencyPrices'], () => {
        return axios.get('https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD')
            // .then(response => response.json())
            .then((res) => res.data.conversion_rates)
    })
    
    // console.log(data.conversion_rates)
    const toConvert = data

    const transform = (data) => {
        const currencyObj = data;
        const currencyArr = [];

        for (const key in currencyObj) {
            if (currencyObj.hasOwnProperty(key)) {
            currencyArr.push({
                name: key,
                price: currencyObj[key]
            });
            }
        }
        return currencyArr
    }

    const currencyPrice = transform(toConvert)

    // const currencyPrice = transform(data)
    // console.log(currencyPrice)

    // console.log(currencyPrice)

    // const currencyPrice = props.fiatData
    // const [currencyPrice, setcurrencyPrice] = useState([])

    // useEffect(() => {

    // fetch('https://v6.exchangerate-api.com/v6/b51a7bc71ceacdda84823787/latest/USD')
    //     .then(response => response.json())
    //     .then(data => data.conversion_rates)
    //     .then(data =>  {
    //         const currencyObj = data;
    //         const currencyArr = [];

    //         for (const key in currencyObj) {
    //             if (currencyObj.hasOwnProperty(key)) {
    //               currencyArr.push({
    //                 name: key,
    //                 price: currencyObj[key]
    //               });
    //             }
    //           }

    //           setcurrencyPrice(currencyArr);
    //     })
    //     .catch(error => console.log(error));
    // },[])

    
   
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
    // console.log(currencyPrice.map(e => e))

    if (!data) {
        return (
        <div className={`
        lg:mt-[265px] md:mt-[280px] mt-[270px]
        lg:w-[1000px] lg:h-[525px]
        md:w-[700px] md:h-[500px]
        w-[450px] h-[600px]
        rounded-lg p-6
        border-[#9ccddc] border-[2px] mt-12
        bg-[#062c43]
        pb-4 mx-3
        flex  flex-col 
        shadow-2xl`}> 
            <Loader></Loader>
            <h1 className="text-center text-[white] text-glow">Trying to Fetch Currency Prices...</h1>
        </div>
        )
    }

    return (
        <div className={`
        lg:mt-[265px] md:mt-[280px] mt-[270px]
        lg:w-[1000px] lg:h-[525px]
        md:w-[700px] md:h-[500px]
        w-[450px] h-[600px]
        rounded-lg p-6
        border-[#9ccddc] border-[2px] mt-12
        bg-[#062c43]
        pb-4 mx-3
        flex  flex-col 
        shadow-2xl
        
        `}>
            <form>
            <div className="flex flex-row items-center justify-between w-full">
                <h1 className="text-3xl uppercase font-bold  text-white mt-2 ">currency ex.
                
                </h1>               
                <div className="lg:text-sm text-[11px] italic  text-white mt-2 flex flex-row items-center justify-center">
                    <div className="text-lg">
                    <ion-icon name="help-circle-outline"></ion-icon>
                    </div>
                    
                    <span>
                        Take into account the fees and volatility might vary overtime. 
                    </span>
                    
                </div>
            </div>
            
            <div className="flex flex-col items-between mt-4">
                <div className="flex flex-row justify-between my-1.5 w-full flex-wrap ">
                    <Exchangecalc />               
                    <div className="mt-3 flex flex-col">
                        <h1 className="text-lg font-normal italic text-white mt-0 mb-2">Top exchange rates:</h1>
                        <div className="
                        lg:w-[935px] lg:h-[200px]
                        md:w-[635px] md:h-[175px]
                        w-[395px] h-[275px]
                        rounded-lg bg-[#062c43]
                        flex lg:flex-row md:flex-row flex-col  
                        lg:flex-wrap md:flex-wrap  flex-nowrap 
                        headCard-filter 
                        justify-center
                        p-3">
                            
                            <article className="bg-[#062c43] 
                            lg:w-[400px] lg:h-[75px]
                            md:w-[275px] md:h-[60px]
                            w-[350px] h-[60px] 
                            rounded-lg mr-6 my-1.5 px-1 py-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]">
                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-us mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px] ">1 USD $</h1>
                                </div>

                                <div className="lg:text-3xl text-xl  text-[#9ccddc] ">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>

                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-ph mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px]">₱ {currencyPrice.slice(111,112).map(e => e.price.toFixed(2))}</h1>
                                </div>
                               
                            </article>
                            <article className="bg-[#062c43] 
                            lg:w-[400px] lg:h-[75px]
                            md:w-[275px] md:h-[60px]
                            w-[350px] h-[60px] 
                            rounded-lg mr-6 my-1.5 px-1 py-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]">
                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-eu mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px] ">1 EUR €</h1>
                                </div>

                                <div className="lg:text-3xl text-xl  text-[#9ccddc] ">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>

                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-us mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px]">$ {(1/currencyPrice.slice(43,44).map(e => e.price)).toFixed(4)}</h1>
                                </div>
                               
                            </article>
                            <article className="bg-[#062c43] 
                            lg:w-[400px] lg:h-[75px]
                            md:w-[275px] md:h-[60px]
                            w-[350px] h-[60px] 
                            rounded-lg mr-6 my-1.5 px-1 py-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]">
                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-us mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px] ">1 USD $</h1>
                                </div>

                                <div className="lg:text-3xl text-xl  text-[#9ccddc] ">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>

                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-cn mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px]">¥ {currencyPrice.slice(71,72).map(e => e.price.toFixed(2))}</h1>
                                </div>
                               
                            </article>
                            <article className="bg-[#062c43] 
                            lg:w-[400px] lg:h-[75px]
                            md:w-[275px] md:h-[60px]
                            w-[350px] h-[60px] 
                            rounded-lg mr-6 my-1.5 px-1 py-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]">
                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-gb mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px] ">1 GBP £</h1>
                                </div>

                                <div className="lg:text-3xl text-xl  text-[#9ccddc] ">
                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                </div>

                                <div className="bg-[#054569] lg:p-3 md:p-1.5 p-2 rounded-lg border-[1px] border-[#9ccddc] flex flex-row" >
                                    <span className="fi fi-us mr-1"></span>
                                    <h1 className="font-semibold text-[white] text-glow  lg:text-[20px] md:text-[20px] text-[15px]">$ {(1/currencyPrice.slice(47,48).map(e => e.price)).toFixed(4)}</h1>
                                </div>
                               
                            </article>
                        </div>
                            
                    </div>
                </div> 
            </div>
            </form>     
        </div>
    )

}
// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0

export default ExchangeCalculator;
