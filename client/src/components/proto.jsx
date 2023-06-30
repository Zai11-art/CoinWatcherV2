import { useParams } from 'react-router-dom'
import React from 'react'

const Proto = (props) => {
    const {id} = useParams();

  return (
    <div className="flex flex-col 
    lg:w-[430px] md:w-[100%] justify-center
    ">
        <div className="flex flex-row items-center">
        {/* {!props.data.response.image.large || !props.data.response.image.small || !props.data.response.image.thumb ? 
            <ion-icon name="planet-outline" className="mr-3 w-[40px] h-[40px]"></ion-icon>
        :
            <img src={props.data.response.image.large}  className="mr-3 w-[40px] h-[40px]"/>

        } */}
        <h1 className="text-2xl text-[white] font-bold">{id.charAt(0).toUpperCase() + id.slice(1)}</h1>
        <div className="p-2 rounded-lg bg-[#062c43] ml-2">
            <h2 className="text-lg text-[white] font-bold">{!props.data.response.tickers[0].base || props.data.response.tickers[0].base == ''  ? 'N/A' : props.data.response.tickers[0].base}</h2>
        </div>

        </div>
        <div className="flex flex-row items-center mt-1">
        <h1 className="text-4xl text-[white] font-bold text-glow">${props.data.response.market_data.current_price.usd.toLocaleString()}</h1>
        <div className="p-2 rounded-lg bg-[#062c43] ml-2 mt-1">
            <h2 className="text-sm text-[white] font-bold">Rank #{props.data.response.market_cap_rank}</h2>
        </div>
        <div className="p-2 rounded-lg bg-[#062c43] ml-2 mt-1 flex text-white items-center ">
            <ion-icon name="person-outline"></ion-icon>
            <h2 className="text-[12px] text-[white] font-bold"> {props.data.response.watchlist_portfolio_users.toLocaleString()}</h2>
        </div>
        </div>
        <div className="mt-2 flex flex-col font-semibold">
        <h1 className="text-md text-[white] font-semibold flex flex-row items-center">
        <ion-icon name="information-circle-outline"></ion-icon> Links:</h1>
        <div className="flex flex-row mt-1">
            <a href={props.data.response.links.homepage[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1x  duration-200 ease-in-out hover:scale-[1.05]">
            <ion-icon name="globe-outline"></ion-icon> Website
            </a>
            <a href={props.data.response.links.official_forum_url[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
            <ion-icon name="people-outline"></ion-icon> Forum
            </a>
            <a href={props.data.response.links.subreddit_url} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
            <ion-icon name="logo-reddit"></ion-icon> Subreddit
            </a>
            <a href={props.data.response.links.repos_url.github[0]} className="py-1 px-2 rounded-lg bg-[#062c43] text-white text-sm mx-1 duration-200 ease-in-out hover:scale-[1.05]">
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
            <h1 className="text-[#97ff29] xl:text-xl lg:text-lg text-xl font-bold">${props.data.response.market_data.high_24h.usd.toLocaleString()}</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-white">24hr-Low</h1>
            <h1 className="text-[#ff4929] xl:text-xl lg:text-lg text-xl font-bold">${props.data.response.market_data.low_24h.usd.toLocaleString()}</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
            <h1 className="text-white">Change in 24hr</h1>
            <h1 className={`text-[#ff4929] xl:text-xl lg:text-lg text-xl font-bold ${props.data.response.market_data.price_change_24h > 0 ? 'text-[#97ff29]' : 'text-[#ff4929]'}`}>
                {props.data.response.market_data.price_change_24h > 1 ? formatNum(props.data.response.market_data.price_change_24h) : formatNumLessOne(props.data.response.market_data.price_change_24h) }
            </h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Proto