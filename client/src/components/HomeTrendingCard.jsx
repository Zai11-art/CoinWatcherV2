import React from 'react'
import { useState, useEffect } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';

const HomeTrendingCard = (props) => {

    // const trending = props.trendingData
    // const [trending, setTrending] = useState([]);
    // const [usdprice, setUsdPrice] = useState();

    // useEffect(() => {
        
    //     // fetch('https://api.coingecko.com/api/v3/search/trending')
    //     //     .then(response => response.json())
    //     //     .then(data => setTrending([...data.coins]))
    //     //     .catch(error => console.log(error));

    //     fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    //         .then(response => response.json())
    //         .then(data => setUsdPrice(data.bitcoin.usd))
    //         .catch(error => console.log(error));
    //     },[])

    return ( 
        <div className=" 
            cryptocard-grad
            lg:w-[1000px] lg:h-[350px]
            md:w-[700px] md:h-[400px]
            w-[450px] h-[400px]
            mt-5 rounded-lg 
            text-white z-[1]
            pt-3 pb-5  mr-1
                ">
                    <h1 className=" font-semibold lg:text-2xl md:text-xl text-[16px] text-center mx-2">Trending in the last 24 Hrs.</h1>
                    <div className="flex flex-col flex-wrap h-full items-center">
                    {props.trendingData?.length ?  (
                        props.trendingData.slice(0,7).map(trend => (
                            <div key={trend.item.id} className="
                                bg-[#054569]
                                lg:w-[210px] lg:h-[50px]
                                md:w-[270px] md:h-[30px]
                                w-[150px] h-[30px]
                                border-[1px]
                                border-[#9ccddc]
                                w-[200px] h-[20px]
                                mt-5 rounded-lg 
                                text-white z-[1]
                                flex flex-row items-center 
                                ">
                                    
                                    <div className="text-center md:w-[75px] w-[50px] md:text-[15px] text-[12px] md:ml-3 ml-0">#{trend.item.score+1}</div>
                                    <div className="text-center md:w-[200px] w-[100px] md:text-[14px] text-[12px] flex flex-row items-center "> 
                                    <Link rel="noopener noreferrer"  className="flex flex-row items-center" to={`/view/${trend.item.id}`}>
                                        <img src={trend.item.large} alt="" className="lg:h-[30px] lg:w-[30px] md:h-[20px] md:w-[20px] h-[22.5px] w-[22.5px] mr-2 lg:ml-2 md:ml-2 ml-1" />
                                        <span className="overflow-hidden">${trend.item.symbol}</span> 
                                    </Link>
                                    </div>
                                    <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${((trend.item.price_btc * props.btcPrice)/1).toFixed(5)} </div>
                            </div>
                        ))
                    ) : (
                        <div className="mb-32">
                            <Loader/>
                        </div>
                        
                    )}
                    
                    </div>        
            </div>   
    )
}

export default HomeTrendingCard