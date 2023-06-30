<<<<<<< HEAD
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
        flex lg:flex-row flex-col justify-between 
        
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
        flex lg:flex-row flex-col justify-between ">

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
        flex  lg:flex-row flex-col justify-between 
        
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
        flex xl:flex-row   
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
=======
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const formatNum = (x) => {
  let isNegative = x < 0 ? "-" : "";
  return isNegative + "$ " + Math.abs(x.toFixed(2));
};

const formatNumLessOne = (x) => {
  let isNegative = x < 1 ? "-" : "";
  return isNegative + "$ " + Math.abs(x.toFixed(7));
};

const ViewCardUpper = (props) => {
  const mode = useSelector((state) => state.mode);
  const { id } = useParams();
  const response = props.data;

  return (
    <div
      className={`
    h-[400px] w-[100%]
    rounded-lg md:h-[400px]
    md:w-[100%] lg:h-[350px]
    lg:w-[100%] 
    ${mode === "light" ? "bg-slate-400/30" : "bg-[#0e2433]"}
    mt-12 flex
    justify-center  px-12
    
    `}
    >
      <div
        className={`
        viewCardHeader absolute
        z-[1]
        flex h-[730px]
        w-[95%] flex-col
        justify-between rounded-tl-3xl
        rounded-tr-3xl border-[2px]
        p-[5%] md:h-[750px]  
         md:w-[700px]
        md:p-[3%]  lg:h-[400px]  lg:w-[1000px] lg:flex-row 
        lg:p-[3%] xl:h-[350px] xl:w-[1300px] xl:p-[2%] 
        
        `}
      ></div>

      <div
        className={`
        viewcard-filter absolute
        z-[2]
        h-[730px] w-[95%]
        rounded-tl-3xl rounded-tr-3xl
        border-[2px] opacity-0
        md:h-[650px] md:w-[700px]
        lg:h-[400px] lg:w-[1000px]  xl:h-[350px]
         xl:w-[1300px]
        ${
          mode === "light"
            ? "border-[#054569] bg-[#062130]"
            : " border-[#054569] bg-[#062130]"
        }
        flex  flex-col  justify-between p-[5%] 
        md:p-[3%] lg:flex-row lg:p-[3%] xl:p-[2%] `}
      ></div>

      <div
        className={`
        absolute z-[3]
        
        h-[730px] w-[95%]
        rounded-tl-3xl rounded-tr-3xl
        md:h-[750px] md:w-[700px]
        lg:h-[400px] lg:w-[1000px]
        xl:h-[350px] xl:w-[1300px] 
        ${
          mode === "light"
            ? "viewcard-filter-light border-blue-300 text-[#193155] text-glow "
            : "  viewcard-filter border-[#054569] text-white"
        }
        flex flex-col  justify-between  border-[#054569] p-[5%] 
        md:p-[3%]  lg:flex-row lg:p-[3%] xl:p-[2%] 
        
        `}
      >
        <div
          className="flex flex-col 
        justify-center md:w-[100%] lg:w-[430px]
        "
        >
          <div className="flex flex-row items-center">
            <img
              src={response.image.small}
              alt={id}
              className="mr-3 h-[40px] w-[40px]"
            />
            <h1 className="text-2xl font-bold">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </h1>
            <div
              className={`rounded-lg p-2 ${
                mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
              }  ml-2`}
            >
              <h2 className="text-lg font-bold">
                {!response.tickers[0].base ? "N/A" : response.tickers[0].base}
              </h2>
            </div>
          </div>
          <div className="mt-1 flex flex-row items-center">
            <h1 className="text-glow text-4xl font-bold">
              ${response.market_data.current_price.usd.toFixed(2)}
            </h1>
            <div
              className={`rounded-lg p-2 ${
                mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
              } ml-2 mt-1`}
            >
              <h2 className="text-sm font-bold">
                Rank #{response.market_cap_rank}
              </h2>
            </div>
            <div
              className={`rounded-lg p-2 ${
                mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
              } ml-2 mt-1 flex items-center `}
            >
              <ion-icon name="person-outline"></ion-icon>
              <h2 className="text-[12px] font-bold">
                {" "}
                {response.watchlist_portfolio_users.toLocaleString()}
              </h2>
            </div>
          </div>
          <div className="mt-2 flex flex-col font-semibold">
            <h1 className="text-md flex flex-row items-center font-semibold">
              <ion-icon name="information-circle-outline"></ion-icon> Links:
            </h1>
            <div className="mt-1 flex flex-row">
              <a
                href={response.links.homepage[0]}
                className={`rounded-lg px-2 py-1 ${
                  mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
                } mx-1 text-sm  duration-200 ease-in-out hover:scale-[1.05]`}
              >
                <ion-icon name="globe-outline"></ion-icon> Website
              </a>
              <a
                href={response.links.official_forum_url[0]}
                className={`rounded-lg px-2 py-1 ${
                  mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
                } mx-1 text-sm  duration-200 ease-in-out hover:scale-[1.05]`}
              >
                <ion-icon name="people-outline"></ion-icon> Forum
              </a>
              <a
                href={response.links.subreddit_url}
                className={`rounded-lg px-2 py-1 ${
                  mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
                } mx-1 text-sm  duration-200 ease-in-out hover:scale-[1.05]`}
              >
                <ion-icon name="logo-reddit"></ion-icon> Subreddit
              </a>
              <a
                href={response.links.repos_url.github[0]}
                className={`rounded-lg px-2 py-1 ${
                  mode === "light" ? "newscard-filter-light shadow-md shadow-blue-900" : "bg-[#062c43]"
                } mx-1 text-sm  duration-200 ease-in-out hover:scale-[1.05]`}
              >
                <ion-icon name="logo-github"></ion-icon> Github
              </a>
            </div>
            <div
              className={`
                h-[70px] w-[98%]
                md:h-[90px] md:w-[98%]
                lg:h-[90px] lg:w-[98%]
                xl:h-[90px] xl:w-[98%]
                ${
                  mode === "light"
                    ? "bg-slate-300/50 newscard-filter-light shadow-md shadow-blue-900"
                    : "meter-bgMain bg-[#062c43]"
                }  mt-3 flex flex-row justify-around rounded-xl p-1 `}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold">24hr-High</h1>
                <h1
                  className={`${
                    mode === "light" ? "text-[#28a733] bg-slate-300/80 border-blue-200/60 border-[2px]" : "text-[#2ae937] bg-slate-900/80 border-cyan-200 "
                  } font-bold md:text-lg lg:text-[16px] xl:text-xl p-1 rounded-lg `}
                >
                  ${response.market_data.high_24h.usd.toFixed(2)}
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold">24hr-Low</h1>
                <h1
                  className={`${
                    mode === "light" ? "text-[#d82e2e] bg-slate-300/80 border-blue-200/60 border-[2px]" : "text-[#ff6666] bg-slate-900/80 border-cyan-200"
                  } font-bold md:text-lg lg:text-[16px] xl:text-xl p-1 rounded-lg`}
                >
                  ${response.market_data.low_24h.usd.toFixed(2)}
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold">Change-24hr</h1>
                <h1
                  className={`font-bold md:text-lg lg:text-[16px] xl:text-xl p-1 rounded-lg ${
                    response.market_data.price_change_24h > 0
                      ? `${
                          mode === "light" ? "text-[#28a733] bg-slate-300/80 border-blue-200/60 border-[2px]" : "text-[#2ae937] bg-slate-900/80 border-cyan-200"
                        }`
                      : `${
                          mode === "light" ? "text-[#d82e2e] bg-slate-300/80 border-blue-200/60 border-[2px]" : "text-[#ff6666] bg-slate-900/80 border-cyan-200"
                        } `
                  }`}
                >
                  {response.market_data.price_change_24h > 1
                    ? formatNum(response.market_data.price_change_24h)
                    : formatNumLessOne(response.market_data.price_change_24h)}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`
        mx-0 my-3   
        flex h-[675px]
        w-[99%] flex-wrap
        items-center justify-center
        rounded-3xl 
        p-[5%] shadow-md
         md:h-[95%]
        md:w-[99%]  md:p-[2%]  lg:mx-6 lg:my-0  
        lg:h-[100%] lg:w-[500px] lg:p-[3%] xl:mx-3 xl:my-0 xl:h-[100%] xl:w-[500px]  xl:flex-row xl:p-[2%]
        ${mode === "light" ? "newscard-filter-light shadow-blue-900 text-slate-900 font-semibold" : "bg-[#03111a] shadow-cyan-700 text-white font-semibold" }`}
        >
          <div
            className={`
            m-1 flex 
            h-[60px] w-[167.5px]
            flex-col items-center
            justify-center rounded-md
             md:h-[70px] md:w-[190px] lg:h-[70px] lg:w-[140px] xl:h-[60px] xl:w-[192.5px]
            ${mode === "light" ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43] " }`}
          >
            <h1 className="md:text-md text-glow text-[15px] lg:text-[15px]">
              Market Cap
            </h1>
            <span className="md:text-md text-[15px] lg:text-[15px]">
              $
              {response.market_data.market_cap.usd == null
                ? "n/a"
                : response.market_data.market_cap.usd.toLocaleString()}
            </span>
          </div>
          <div
            className={`
            m-1 flex 
            h-[60px] w-[167.5px]
            flex-col items-center
            justify-center rounded-md
             md:h-[70px] md:w-[190px] lg:h-[70px] lg:w-[140px] xl:h-[60px] xl:w-[192.5px]
            ${mode === "light" ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]" }`}
          >
            <h1 className="md:text-md text-glow text-center text-[15px] lg:text-[15px]">
              Fully Dilluted Valuation
            </h1>
            <span className="md:text-md text-[15px] lg:text-[15px]">
              $
              {response.market_data.fully_diluted_valuation.usd == null
                ? "n/a"
                : response.market_data.fully_diluted_valuation.usd.toLocaleString()}
            </span>
          </div>
          <div
            className={`
            m-1 flex 
            h-[60px] w-[167.5px]
            flex-col items-center
            justify-center rounded-md
             md:h-[70px] md:w-[190px] lg:h-[70px] lg:w-[140px] xl:h-[60px] xl:w-[192.5px]
            ${mode === "light" ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]" }`}
          >
            <h1 className="md:text-md text-glow text-[15px]  lg:text-[15px]">
              Circulating Supply
            </h1>
            <span className="md:text-md text-[15px] lg:text-[15px]">
              {response.market_data.circulating_supply == null
                ? "n/a"
                : response.market_data.circulating_supply.toLocaleString()}
            </span>
          </div>
          <div
            className={`
            m-1 flex 
            h-[60px] w-[167.5px]
            flex-col items-center
            justify-center rounded-md
             md:h-[70px] md:w-[190px] lg:h-[70px] lg:w-[140px] xl:h-[60px] xl:w-[192.5px]
            ${mode === "light" ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]" }`}
          >
            <h1 className="md:text-md text-glow text-[15px] lg:text-[15px]">
              Total Supply
            </h1>
            <span className="md:text-md text-[15px] lg:text-[15px]">
              {response.market_data.total_supply == null
                ? "n/a"
                : response.market_data.total_supply.toLocaleString()}
            </span>
          </div>
          <div
            className={`
            m-1 flex 
            h-[60px] w-[167.5px]
            flex-col items-center
            justify-center rounded-md
             md:h-[70px] md:w-[190px] lg:h-[70px] lg:w-[140px] xl:h-[60px] xl:w-[192.5px]
            ${mode === "light" ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]" }`}
          >
            <h1 className="md:text-md text-glow text-[15px] lg:text-[15px]">
              Max Supply
            </h1>
            <span className="md:text-md text-[15px] lg:text-[15px]">
              {response.market_data.max_supply == null
                ? "n/a"
                : response.market_data.max_supply.toLocaleString()}
            </span>
          </div>
        </div>
        <div
          className={`flex w-full flex-row flex-wrap items-center justify-center 
        rounded-3xl  py-2 shadow-md  ${
            mode === "light"
              ? "newscard-filter-light border-blue-300 shadow-blue-900 text-slate-900 font-semibold text-glow"
              : " bg-[#03111a] border-[white] shadow-cyan-700 text-white font-semibold"
          } md:w-[100%] lg:w-[350px]`}
        >
          <div
            className={`
            m-2 flex 
            h-[110px] w-[27%] 
            flex-col items-center 
            justify-center rounded-xl
             text-center md:h-[110px] md:w-[27.5%] 
            md:flex-col md:justify-center lg:h-[70px] lg:w-[200px] lg:flex-row lg:justify-around xl:h-[110px] xl:w-[130px] xl:flex-col xl:justify-center
            ${mode === 'light' ? "bg-slate-300/90 border-[1px] border-blue-300" : "bg-[#062c43]"}`}
          >
            <span className="text-4xl text-green-400 md:text-5xl lg:text-5xl">
              <ion-icon name="barcode-outline"></ion-icon>
            </span>
            <div>
              <h2 className="text-[12px] xl:text-[13px]">
                Hashing Algorithm:
              </h2>
              <h2 className="text-[13px] xl:text-[13px]">
                {response.hashing_algorithm == null ||
                response.hashing_algorithm == ""
                  ? "n/a"
                  : response.hashing_algorithm}
              </h2>
            </div>
          </div>

          <div
            className={`
            m-2 flex 
            h-[110px] w-[27%] 
            flex-col items-center 
            justify-center rounded-xl
             text-center md:h-[110px] md:w-[27.5%] 
            md:flex-col md:justify-center lg:h-[70px] lg:w-[200px] lg:flex-row lg:justify-around xl:h-[110px] xl:w-[130px] xl:flex-col xl:justify-center
            ${mode === 'light' ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]"}`}
          >
            <span className="text-4xl text-violet-400 md:text-5xl lg:text-5xl">
              <ion-icon name="star-half-outline"></ion-icon>
            </span>
            <div>
              <h2 className="text-[12px] xl:text-[13px]">
                Community Score:
              </h2>
              <h2 className="text-[13px] xl:text-[13px]">
                {response.community_score}
              </h2>
            </div>
          </div>

          <div
            className={`
            m-2 flex 
            h-[110px] w-[27%] 
            flex-col items-center 
            justify-center rounded-xl
             text-center md:h-[110px] md:w-[27.5%] 
            md:flex-col md:justify-center lg:h-[70px] lg:w-[200px] lg:flex-row lg:justify-around xl:h-[110px] xl:w-[130px] xl:flex-col xl:justify-center
            ${mode === 'light' ? "bg-slate-300/50 border-[1px] border-blue-300" : "bg-[#062c43]"}`}
          >
            <span className="text-4xl text-teal-400 md:text-5xl lg:text-5xl">
              <ion-icon name="layers-outline"></ion-icon>
            </span>
            <div>
              <h2 className="text-[12px] xl:text-[13px]">
                Layer type:
              </h2>
              <h2 className="text-[13px] xl:text-[13px]">
                {response.categories[1]}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardUpper;
>>>>>>> origin/master
