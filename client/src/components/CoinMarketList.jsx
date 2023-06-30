import React from 'react'

const CoinMarketList = (props) => {

    const receivedData = [...props.data.tickers]
    console.log(receivedData)
    // const MarketLength = receivedData.length

  return (
    <div className="
    xl:w-[100%] xl:h-[420px]
    lg:w-[100%] lg:h-[380px]
    md:w-[640px] md:h-[400px]
    w-[100%] h-[420px]">
    <h1 className="xl:text-3xl lg:text-xl md:text-3xl text-2xl xl:text-left lg:text-left text-center md:text-center font-bold text-[white] mb-8">
    Top {props.data.localization.en} Markets
    </h1>
    <div className="
        chart
        xl:w-[775px] xl:h-[40px]
        lg:w-[640px] lg:h-[40px]
        md:w-[640px] md:h-[40px]
        w-[100%] h-[30px]
        rounded-none border-[0.5px] border-[#9ccddc]
        flex flex-row justify-around items-center text-white
        md:text-[15px] text-[12px]
        ">
            <div className="text-center w-[75px] md:text-[15px] text-[12px]  md:ml-6 ml-2">#</div>
            <div className="text-center w-[175px] md:text-[15px] text-[11px] lg:mx-1 mx-2">Market</div>
            <div className="text-center w-[175px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Pair</div>
            <div className="text-center w-[250px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Price</div>
            <div className="text-center w-[250px] md:text-[15px] text-[12px] lg:mx-1 mx-2">Trust Score</div>           
    </div>
    {receivedData.slice(0,10).map(data => (
    <div className=" 
        chart
        xl:w-[775px] xl:h-[30px]
        lg:w-[640px] lg:h-[30px]
        md:w-[640px] md:h-[30px]
        w-[100%] h-[30px]
        rounded-sm 
        text-white z-[1]
        flex flex-row items-center 
        ">
            <div className="text-center w-[75px]  md:text-[15px] text-[12px] md:ml-6 ml-2">{receivedData.indexOf(data)+1}</div>
            <div className="text-center w-[175px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">
                <a href={data.trade_url}>{data.market.name}</a>
                </div>
            <div className="text-center w-[175px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">
                {data.base.length > 4 ?  data.base.slice(0,5) + '...' : data.base} / 
                {data.target.length > 4 ?  data.target.slice(0,5) + '...' : data.target}
            </div>  
            <div className="text-center w-[250px]  md:text-[15px] text-[14px] lg:mx-1 mx-2">$ {data.converted_last.usd.toLocaleString()}</div>
            <div className="text-center w-[250px]  md:text-[15px] text-[14px] lg:mx-1 mx-2 flex items-center justify-center">
            {data.trust_score == 'green' ? 
                <div className="w-[10px] h-[10px] rounded-full bg-[green]"></div>
                : 
                <div className="w-[10px] h-[10px] rounded-full bg-[orange]"></div>
            }
            </div>
            {}
    </div>
    ))}
    </div>
  )
}

export default CoinMarketList