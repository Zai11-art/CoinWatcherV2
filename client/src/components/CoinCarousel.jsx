import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import Loader from './Loader';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const CoinCarousel = (props) => {

    const price = props.coinList
    const trending = props.trending
    const usdprice = props.btcPrice
    console.log(price)

    // const [price, setpriceData] = useState([]);
    // const [trending, setTrending] = useState([]);
    // const [usdprice, setUsdPrice] = useState();

    // useEffect(() => {

    //     axios.get('https://api.coingecko.com/api/v3/search/trending')
    //         .then(response => response.json())
    //         .then(data => setTrending([...data.coins]))
    //         .catch(error => console.log(error));

    //     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en')
    //         .then(response => response.json())
    //         .then(data => setpriceData([...data]))
    //         .catch(error => console.log(error));

    //     axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    //         .then(response => response.json())
    //         .then(data => setUsdPrice(data.bitcoin.usd))
    //         .catch(error => console.log(error));
    // }, []);

    

  return (
    <div className="
        xl:w-[100%] xl:h-[500px]
        lg:w-[100%] lg:h-[500px]
        md:w-[100%] md:h-[500px]
        w-[100%] h-[500px] mb-6
        xl:mt-[80px] lg:mt-[60px] md:mt-[200px] mt-[0px]
        mb-[100px] 
        flex justify-center items-center 
        
        ">
            <div className=" 
            xl:w-[1300px] xl:h-[800px]
            lg:w-[1000px] lg:h-[700px]
            md:w-[700px] md:h-[1650px]
            w-[95%] h-[1650px]
            mt-5 rounded-lg 
            text-white z-[1]
            flex flex-row items-center justify-between
            xl:flex-row lg:flex-row md:flex-col flex-col
            ">
                
                <div className="
                xl:w-[600px] xl:h-[500px]
                lg:w-[475px] lg:h-[550px]
                md:w-[700px] md:h-[500px]
                w-[95%] h-[500px]
                chart rounded-3xl 
                xl:mt-[200px] lg:mt-[250px] md:mt-[1800px] mt-[2300px]
                xl:flex-col lg:flex-col md:flex-col flex-col flex justify-around items-center pb-[20px]
                ">
                    <div className='flex flex-col mx-4 xl:mb-[10px] mb-[20px] mt-4 items-center xl:text-[1rem]'>
                        <h1 className="text-3xl text-[white] font-bold text-center">Top Coins now  
                        </h1>
                    </div> 
                    
                    {price.length ? (
                        price.slice(0,5).map(data => 
                            <div className=" 
                            cryptocard-grad
                            xl:w-[500px] xl:h-[60px]
                            lg:w-[400px] lg:h-[700px]
                            md:w-[600px] md:h-[70px]
                            w-[85%] h-[50px]
                            mt-5 rounded-lg 
                            text-white z-[1]
                            flex flex-row items-center justify-between
                            ">
                                <div className="text-center md:w-[75px] w-[50px] md:text-[15px] text-[15px] md:ml-6 ml-2">{data.market_cap_rank}</div>
                                <div className="text-center md:w-[200px] w-[110px] md:text-[14px] text-[15px] flex flex-row items-center ">          
                                <Link  rel="noopener noreferrer"  className="flex flex-row items-center hover:scale-[1.1] duration-200 ease-in-out" to={`/view/${data.id}`}>
                                    <img src={data.image} alt="" className="md:h-[30px] md:w-[30px] h-[22.5px] w-[22.5px] mr-2 lg:ml-5 md:ml-5 ml-3" />
                                    <span className="overflow-hidden">{data.name}</span> 
                                </Link>

                                </div>
                                <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[15px] lg:mx-1 mx-2 overflow-hidden">${data.current_price.toLocaleString()}</div>
                                {/* <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.market_cap.toLocaleString()}</div> */}
                                {/* <div className="text-center md:w-[250px] w-[150px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.total_volume.toLocaleString()} </div> */}
                                <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[15px] lg:mx-1 mx-1 md:pr-6 pr-2 ">
                                    <Sparklines data={data.sparkline_in_7d.price}>
                                        { data.current_price > data.sparkline_in_7d.price[0] ? (
                                            <SparklinesLine style={{ stroke: "#4dff58", fill: "#4dff58", fillOpacity: "0.2" }} />
                                            
                                        ) : (
                                            <SparklinesLine style={{ stroke: "#fc3a3a", fill: "#fc3a3a", fillOpacity: "0.2" }} />
                                        )
                                        }
                                        
                                    </Sparklines>
                                </div>
                                
                            </div>
                            
                            )
                ) : (
                    <Loader/>
                )
                }   
                    <Link to='/Home'>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                            xl:text-[13px] lg:text-[13px] md:text-[15px] px-3 py-1 bg-blue-500
                            hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                                View all coins here
                        </button>
                    </Link>
                </div>

                <div className="
                xl:w-[600px] xl:h-[500px]
                lg:w-[475px] lg:h-[550px]
                md:w-[700px] md:h-[500px]
                w-[95%] h-[500px]
                chart rounded-3xl 
                xl:mt-[200px] lg:mt-[250px] md:mt-[30px] mt-[30px]
                xl:flex-col lg:flex-col md:flex-col flex-col flex justify-around items-center pb-[20px]
                ">
                    <div className='flex flex-col mx-4 xl:mb-[10px] mb-[20px] mt-4 items-center xl:text-[1rem]'>
                        <h1 className="text-3xl text-[white] font-bold text-center">Trending Coins now  
                        </h1>
                    </div> 
                    
                    {trending.length ? (
                        trending.slice(0,5).map(data => 
                            <div className=" 
                            cryptocard-grad
                            xl:w-[500px] xl:h-[60px]
                            lg:w-[400px] lg:h-[700px]
                            md:w-[600px] md:h-[70px]
                            w-[85%] h-[50px]
                            mt-5 rounded-lg 
                            text-white z-[1]
                            flex flex-row items-center justify-between
                            ">
                                <div className="text-center md:w-[75px] w-[50px] md:text-[15px] text-[15px] md:ml-6 ml-2">{data.item.score+1}</div>
                                <div className="text-center md:w-[200px] w-[110px] md:text-[14px] text-[15px] flex flex-row items-center ">          
                                <Link  rel="noopener noreferrer"  className="flex flex-row items-center hover:scale-[1.1] duration-200 ease-in-out" to={`/view/${data.id}`}>
                                    <img src={data.item.small} alt="" className="md:h-[30px] md:w-[30px] h-[22.5px] w-[22.5px] mr-2 lg:ml-5 md:ml-5 ml-3" />
                                    <span className="overflow-hidden">{data.item.name}</span> 
                                </Link>

                                </div>
                                <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[15px] lg:mx-1 mx-2">${((data.item.price_btc * usdprice)/1).toFixed(8)}</div>
                                <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[15px] lg:mx-1 mx-2 font-semibold text-glow">${data.item.symbol}</div>
                                {/* <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.market_cap.toLocaleString()}</div> */}
                                {/* <div className="text-center md:w-[250px] w-[150px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.total_volume.toLocaleString()} </div> */}
                               
                            </div>
                            
                            )
                ) : (
                    <Loader/>
                )
                }   
                <Link to='/Home'>
                    <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] px-3 py-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                            View all coins here
                    </button>
                </Link>
                </div>
            </div>
    </div>
  )
}

export default CoinCarousel