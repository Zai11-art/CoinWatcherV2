import React from 'react'
import { useState,useEffect } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import {Link} from 'react-router-dom'
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { getCoinDataList } from '../utils/utils';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const HomeMarketList = (props) => {
    
    const data = props.coinData

    // for pagination
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setpostsPerPage] = useState(50);

   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   
    
    // if (isLoading || isError) {
    //     refetch()
    // }


    
    // const priceSet = (object) => {
    //     return [...object]
    // }
    // const price = data

    // console.log(price)

    // if (isLoading) {
    //     return <div><h1>LOADING</h1></div>
    // }

    // if (isError) {
    //     return <div><h1>ERROR</h1></div>
    // }

    // const price = data;

    //  const [price, setprice] = useState([])


    
    // useEffect(() => {
    //     getCoinDataList()
    //     .then(data => {
    //         setprice([...data]);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    
    // }, [])

 

  return (
    <div>

    <div className="
            lg:w-[1000px] lg:h-[100%]
            md:w-[700px] md:h-[100%] 
            lg:mt-[110px] md:mt-[120px] mt-[175px]
            w-[450px] h-[100%] flex items-center justify-center ">
                    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full my-2">
                    <div>
                        <h1 className="lg:text-[17px] md:text-[15px] text-[15px] text-[#9ccddc] mt-2">
                            Crypto Ranks:  
                            <span className="text-glow text-[#ced7e0] font-semibold"> #{firstPostIndex + 1} </span> - 
                            <span className="text-glow text-[#ced7e0] font-semibold"> #{lastPostIndex} </span> 
                        </h1>
                    </div>
                    <div>
                        <Pagination 
                        totalPosts={data?.length} 
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        />
                    </div>    
                </div>
            </div>
            
            <div className="
            lg:w-[1000px] lg:h-[100%]
            md:w-[700px] md:h-[100%]
            w-[450px] h-[100%]
            rounded-lg 
            mt-1 mb-1
            opacity-95 CoinContainer-bg
            flex flex-col items-center">
                <div className="HeadCard-bg 
                lg:w-[1000px] lg:h-[50px]
                md:w-[100%] md:h-[50px]
                w-[100%] h-[50px]
                rounded-none border-[0.5px] border-[#9ccddc]
                flex flex-row justify-around items-center text-white
                md:text-[15px] text-[12px]
                ">
                    <div className="text-center md:w-[75px] w-[50px] md:text-[15px] text-[12px]  md:ml-6 ml-2">#</div>
                    <div className="text-center md:w-[200px] w-[60px] md:text-[14px] text-[12px] "> 
                            
                            <span className="">Coin</span> 
                            
                        </div>
                        <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Price</div>
                        <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Marketcap</div>
                        <div className="text-center md:w-[250px] w-[100px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Volume <span className="text-[9px]">24hr</span></div>
                        <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[11px] lg:mx-1 ml-2 mr-4">Graph - Week</div>           
                    </div>
            
                {data?.length ? (
                        data?.slice(firstPostIndex,lastPostIndex).map(data => 
                            <div key={data.id} className=" 
                            cryptocard-grad
                            lg:w-[1000px] lg:h-[50px]
                            md:w-[100%] md:h-[50px]
                            w-[100%] h-[50px]
                            mt-5 rounded-lg 
                            text-white z-[1]
                            flex flex-row items-center 
                            ">
                                <div className="text-center md:w-[75px] w-[50px] md:text-[15px] text-[12px] md:ml-6 ml-2">{data.market_cap_rank}</div>
                                <div className="text-center md:w-[200px] w-[100px] md:text-[14px] text-[12px] flex flex-row items-center ">          
                                <Link  rel="noopener noreferrer"  className="flex flex-row items-center hover:scale-[1.1] duration-200 ease-in-out" to={`/view/${data.id}`}>
                                    <img src={data.image} alt="" className="md:h-[30px] md:w-[30px] h-[22.5px] w-[22.5px] mr-2 lg:ml-5 md:ml-5 ml-3" />
                                    <span className="overflow-hidden">{data.name}</span> 
                                </Link>

                                </div>
                                <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.current_price.toLocaleString()}</div>
                                <div className="text-center md:w-[175px] w-[75px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.market_cap.toLocaleString()}</div>
                                <div className="text-center md:w-[250px] w-[150px] md:text-[15px] text-[11px] lg:mx-1 mx-2">${data.total_volume.toLocaleString()} </div>
                                <div className="text-center md:w-[175px] w-[100px] md:text-[15px] text-[11px] lg:mx-1 mx-1 md:pr-6 pr-2 ">
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
        </div>
            <div className="
                lg:w-[1000px] lg:h-[100%]
                md:w-[700px] md:h-[100%] mt-3  mb-[75px]
                w-[450px] h-[100%] flex items-center justify-center">
                    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full my-2">
                    <div>
                        <h1 className="lg:text-[17px] md:text-[15px] text-[15px] text-[#9ccddc] mt-2">
                        Showing {Math.ceil(data?.length / (data?.length / postsPerPage))} results out of {data?.length}
                        </h1>
                    </div>
                    <div>
                        <Pagination 
                        totalPosts={data?.length} 
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        />
                    </div>    
                </div>
            </div>
    </div>
  )
}

export default HomeMarketList