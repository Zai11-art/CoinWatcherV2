import React from 'react'
import { useParams } from 'react-router-dom';

const formatNum = (x) => {
    let isNegative = x < 0 ? '-' : '';
    return  isNegative + '$ ' + Math.abs(x.toFixed(2));
  }

  const formatNumLessOne = (x) => {
    let isNegative = x < 1 ? '-' : '';
    return  isNegative + '$ ' + Math.abs(x.toFixed(7));
  }
  
const ViewCardUpper = (props) => {
    
    const { id } = useParams();
    const response = props.data;

  return (
    <div className="
    lg:w-[100%] lg:h-[350px]
    md:w-[100%] md:h-[400px]
    w-[100%] h-[400px]
    rounded-lg 
    bg-[#0e2433]
    mt-12 px-12
    flex  justify-center
    
    ">
        <div className="
        absolute z-[1]
        viewCardHeader
        xl:w-[1300px] xl:h-[350px]
        lg:w-[1000px] lg:h-[400px]
        md:w-[700px] md:h-[650px]
        w-[95%] h-[730px]
        rounded-tl-3xl rounded-tr-3xl  
        bg-[#062130]
        border-[#054569] border-[2px]
        xl:p-[2%]  lg:p-[3%]  md:p-[3%] p-[5%] 
        flex lg:flex-row lg:flex-row flex-col justify-between 
        
        "></div>

        <div className="
        absolute z-[2]
        viewcard-filter 
        xl:w-[1300px] xl:h-[350px]
        lg:w-[1000px] lg:h-[400px]
        md:w-[700px] md:h-[650px]
        w-[95%] h-[730px]
        rounded-tl-3xl rounded-tr-3xl  opacity-0
        bg-[#062130]
        border-[#054569] border-[2px]
        xl:p-[2%]  lg:p-[3%]  md:p-[3%] p-[5%] 
        flex lg:flex-row lg:flex-row flex-col justify-between ">

        </div>

        <div className="
        absolute z-[3]
        viewcard-filter 
        xl:w-[1300px] xl:h-[350px]
        lg:w-[1000px] lg:h-[400px]
        md:w-[700px] md:h-[750px]
        w-[95%] h-[730px]
        rounded-tl-3xl rounded-tr-3xl 
        border-[#054569] border-[2px]
        xl:p-[2%]  lg:p-[3%]  md:p-[3%] p-[5%] 
        flex lg:flex-row lg:flex-row flex-col justify-between 
        
        ">
        <div className="flex flex-col 
        lg:w-[430px] md:w-[100%] justify-center
        ">
            <div className="flex flex-row items-center">
            <img src={response.image.small} alt={id} className="mr-3 w-[40px] h-[40px]"/>
            <h1 className="text-2xl text-[white] font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
            <div className="p-2 rounded-lg bg-[#062c43] ml-2">
                <h2 className="text-lg text-[white] font-bold">{!response.tickers[0].base ? 'N/A' : response.tickers[0].base}</h2>
            </div>

            </div>
            <div className="flex flex-row items-center mt-1">
            <h1 className="text-4xl text-[white] font-bold text-glow">${response.market_data.current_price.usd.toFixed(2)}</h1>
            <div className="p-2 rounded-lg bg-[#062c43] ml-2 mt-1">
                <h2 className="text-sm text-[white] font-bold">Rank #{response.market_cap_rank}</h2>
            </div>
            <div className="p-2 rounded-lg bg-[#062c43] ml-2 mt-1 flex text-white items-center ">
                <ion-icon name="person-outline"></ion-icon>
                <h2 className="text-[12px] text-[white] font-bold"> {response.watchlist_portfolio_users.toLocaleString()}</h2>
            </div>
            </div>
            <div className="mt-2 flex flex-col font-semibold">
            <h1 className="text-md text-[white] font-semibold flex flex-row items-center">
            <ion-icon name="information-circle-outline"></ion-icon> Links:</h1>
            <div className="flex flex-row mt-1">
                <a href={response.links.homepage[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1x  duration-200 ease-in-out hover:scale-[1.05]">
                <ion-icon name="globe-outline"></ion-icon> Website
                </a>
                <a href={response.links.official_forum_url[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
                <ion-icon name="people-outline"></ion-icon> Forum
                </a>
                <a href={response.links.subreddit_url} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
                <ion-icon name="logo-reddit"></ion-icon> Subreddit
                </a>
                <a href={response.links.repos_url.github[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
                <ion-icon name="logo-github"></ion-icon> Github
                </a>
            </div>
            <div className="
                xl:w-[98%] xl:h-[90px]
                lg:w-[98%] lg:h-[90px]
                md:w-[98%] md:h-[90px]
                w-[98%] h-[70px]
                bg-[#03111a] mt-3 rounded-xl flex flex-row justify-around p-1 meter-bgMain">
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-white">24hr-High</h1>
                <h1 className="text-[#97ff29] xl:text-xl lg:text-[16px] md:text-lg font-bold">${response.market_data.high_24h.usd.toFixed(2)}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-white">24hr-Low</h1>
                <h1 className="text-[#ff4929] xl:text-xl lg:text-[16px] md:text-lg font-bold">${response.market_data.low_24h.usd.toFixed(2)}</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                <h1 className="text-white">Change-24hr</h1>
                <h1 className={`text-[#ff4929] xl:text-xl lg:text-[16px] md:text-lg font-bold ${response.market_data.price_change_24h > 0 ? 'text-[#97ff29]' : 'text-[#ff4929]'}`}>
                    {response.market_data.price_change_24h > 1 ? formatNum(response.market_data.price_change_24h) : formatNumLessOne(response.market_data.price_change_24h) }
                </h1>
                </div>
            </div>
            </div>
        </div>
        <div className="
        flex xl:flex-row   items-center  
        xl:w-[500px] xl:h-[100%]
        lg:w-[500px] lg:h-[100%]
        md:w-[99%] md:h-[95%]
        w-[99%] h-[675px]
        rounded-3xl bg-[#03111a]
        shadow-md shadow-cyan-700
        xl:p-[2%]  lg:p-[3%]  md:p-[2%] p-[5%]  
        flex-wrap items-center justify-center xl:mx-3 lg:mx-6 mx-0 xl:my-0  lg:my-0 my-3">
            <div 
            className="
            xl:w-[192.5px] xl:h-[60px] 
            lg:w-[140px] lg:h-[70px]
            md:w-[190px] md:h-[70px]
            w-[167.5px] h-[60px]
            m-1 bg-[#062c43] rounded-md flex flex-col justify-center items-center">
            <h1 className="text-white font-normal lg:text-[15px] md:text-md text-[15px] text-glow">Market Cap</h1>
            <span className="text-white font-semibold lg:text-[15px] md:text-md text-[15px]">${response.market_data.market_cap.usd == null ?  'n/a' : response.market_data.market_cap.usd.toLocaleString()}</span>
            </div>
            <div 
            className="
            xl:w-[192.5px] xl:h-[60px] 
            lg:w-[140px] lg:h-[70px]
            md:w-[190px] md:h-[70px]
            w-[167.5px] h-[60px]
            m-1 bg-[#062c43] rounded-md flex flex-col justify-center items-center">
            <h1 className="text-white font-normal text-center lg:text-[15px] md:text-md text-[15px] text-glow">Fully Dilluted Valuation</h1>
            <span className="text-white font-semibold lg:text-[15px] md:text-md text-[15px]">${response.market_data.fully_diluted_valuation.usd == null ?  'n/a' : response.market_data.fully_diluted_valuation.usd.toLocaleString() }</span>
            </div>
            <div 
            className="
            xl:w-[192.5px] xl:h-[60px] 
            lg:w-[140px] lg:h-[70px]
            md:w-[190px] md:h-[70px]
            w-[167.5px] h-[60px]
            m-1 bg-[#062c43] rounded-md flex flex-col justify-center items-center">
            <h1 className="text-white font-normal lg:text-[15px] md:text-md text-[15px] text-glow">Circulating Supply</h1>
            <span className="text-white font-semibold lg:text-[15px] md:text-md text-[15px]">{response.market_data.circulating_supply == null ?  'n/a' : response.market_data.circulating_supply.toLocaleString()}</span>   
            </div>
            <div 
            className="
            xl:w-[192.5px] xl:h-[60px] 
            lg:w-[140px] lg:h-[70px]
            md:w-[190px] md:h-[70px]
            w-[167.5px] h-[60px]
            m-1 bg-[#062c43] rounded-md flex flex-col justify-center items-center">
            <h1 className="text-white font-normal lg:text-[15px] md:text-md text-[15px] text-glow">Total Supply</h1>
            <span className="text-white font-semibold lg:text-[15px] md:text-md text-[15px]">{response.market_data.total_supply == null ? 'n/a': response.market_data.total_supply.toLocaleString()  }</span> 
            </div>
            <div 
            className="
            xl:w-[192.5px] xl:h-[60px] 
            lg:w-[140px] lg:h-[70px]
            md:w-[190px] md:h-[70px]
            w-[167.5px] h-[60px]
            m-1 bg-[#062c43] rounded-md flex flex-col justify-center items-center">
            <h1 className="text-white font-normal lg:text-[15px] md:text-md text-[15px] text-glow">Max Supply</h1>
            <span className="text-white font-semibold lg:text-[15px] md:text-md text-[15px]">{response.market_data.max_supply == null ? 'n/a' : response.market_data.max_supply.toLocaleString() }</span>
            </div>
            
        </div>
        <div className="flex flex-row rounded-3xl border-[white] bg-[#051824] py-2 
        lg:w-[350px] md:w-[100%] w-full justify-center items-center shadow-md shadow-cyan-700 flex-wrap">
            <div 
            className="
            xl:w-[130px] xl:h-[110px] 
            lg:w-[200px] lg:h-[70px] 
            md:w-[27.5%] md:h-[110px] 
            w-[27%] h-[110px]
            bg-[#062c43] m-2 rounded-xl text-center 
            flex items-center xl:flex-col lg:flex-row md:flex-col flex-col xl:justify-center lg:justify-around md:justify-center justify-center">
            <span className="lg:text-5xl md:text-5xl text-4xl text-green-400">
                <ion-icon name="barcode-outline"></ion-icon>
            </span>
            <div>
                <h2 className="text-white font-semibold xl:text-[13px] text-[12px]">Hashing Algorithm:</h2>
                <h2 className="text-white font-semibold xl:text-[13px] text-[13px]">{response.hashing_algorithm == null || response.hashing_algorithm == '' ? 'n/a' : response.hashing_algorithm}</h2>
            </div>
            </div>
            
            <div 
            className="
            xl:w-[130px] xl:h-[110px] 
            lg:w-[200px] lg:h-[70px] 
            md:w-[27.5%] md:h-[110px] 
            w-[27%] h-[110px]
            bg-[#062c43] m-2 rounded-xl text-center 
            flex items-center xl:flex-col lg:flex-row md:flex-col flex-col  xl:justify-center lg:justify-around md:justify-center justify-center">
            <span className="lg:text-5xl md:text-5xl text-4xl text-violet-400">
                <ion-icon name="star-half-outline"></ion-icon>               
            </span>
            <div>
            <h2 className="text-white font-semibold xl:text-[13px] text-[12px]">Community Score:</h2>
            <h2 className="text-white font-semibold xl:text-[13px] text-[13px]">{response.community_score}</h2>

            </div>
            </div>
            
            <div 
            className="
            xl:w-[130px] xl:h-[110px] 
            lg:w-[200px] lg:h-[70px] 
            md:w-[27.5%] md:h-[110px] 
            w-[27%] h-[110px]
            bg-[#062c43] m-2 rounded-xl text-center 
            flex items-center xl:flex-col lg:flex-row md:flex-col flex-col  xl:justify-center lg:justify-around md:justify-center justify-center">
            <span className="lg:text-5xl md:text-5xl text-4xl text-teal-400">
            <ion-icon name="layers-outline"></ion-icon>              
            </span>
            <div>
            <h2 className="text-white font-semibold xl:text-[13px] text-[12px]">Layer type:</h2>
            <h2 className="text-white font-semibold xl:text-[13px] text-[13px]">{response.categories[1]}</h2>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ViewCardUpper