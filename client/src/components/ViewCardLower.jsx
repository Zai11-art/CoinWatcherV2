import React from 'react'
import { useParams } from 'react-router-dom'
import CoinChartDisplay from './CoinChartDisplay';
import { Interweave } from 'interweave';
import CoinMarketList from './CoinMarketList';

const ViewCardLower = (props) => {
    const {id} = useParams();
    const response = props.data

    const formatNum = (x) => {
        let isNegative = x < 0 ? '-' : '';
        return  isNegative + '$ ' + Math.abs(x.toFixed(2));
      }
  
      const formatNumLessOne = (x) => {
        let isNegative = x < 0 ? '-' : '';
        return  isNegative + '$ ' + Math.abs(x.toFixed(6));
      }

  return (
    <div className="
        lg:w-[100%] lg:h-[100%]
        md:w-[100%] md:h-[400px]
        w-[100%] h-[400px]
        rounded-lg
        xl:mt-[0px]  lg:mt-[50px] md:mt-[350px] mt-[330px]
        flex  justify-center">
          <div className="
          xl:w-[1300px] xl:h-[100%]
          lg:w-[1000px] lg:h-[1300px]
          md:w-[700px] md:h-[2200px]
          w-[95%] h-[2300px]
          rounded-bl-3xl rounded-br-3xl  
          bg-[#062130]
          border-[#054569] border-[2px]
          xl:p-[1%]  lg:p-[1.5%]  md:p-[3%] p-[3%] 
          flex xl:flex-col lg:flex-col lg:flex-row flex-col justify-between">
            <div className="flex xl:flex-row lg:flex-row lg:flex-row flex-col justify-between">
              <div className="
              xl:w-[800px] xl:h-[420px]
              lg:w-[640px] lg:h-[380px]
              md:w-[640px] md:h-[350px]
              w-[100%] h-[350px] p-2 rounded-xl
              chart flex flex-col mt-3 mr-3">
                 
                  <CoinChartDisplay
                  data={response} />
              </div>
              
              <div className="
              xl:w-[445px] xl:h-[420px]
              lg:w-[400px] lg:h-[380px]
              md:w-[640px] md:h-[400px]
              w-[100%] h-[420px] p-3 rounded-xl
              chart flex flex-col mt-3">
                <div className="mx-7">
                  <h1 className="xl:text-3xl lg:text-xl md:text-3xl text-2xl xl:text-left lg:text-left text-center md:text-center font-bold text-[white] mb-4">Coin Stats</h1>
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>Current Price</span>
                    <span className="font-semibold">$ {response.market_data.current_price.usd.toLocaleString()}</span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>Price Change 24hr</span>
                    <span className="font-semibold">
                    {response.market_data.price_change_24h_in_currency.usd > 1 ? formatNum(response.market_data.price_change_24h_in_currency.usd) : formatNumLessOne(response.market_data.price_change_24h_in_currency.usd) }
                      </span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>24hr High / 24hr Low</span>
                    <span className="font-semibold">$ {(response.market_data.high_24h.usd.toLocaleString())} / $ {(response.market_data.low_24h.usd.toLocaleString())}</span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>Total trading Vol.</span>
                    <span className="font-semibold">$ {(response.market_data.total_volume.usd.toLocaleString())}</span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>All Time High</span>
                    <span className="font-semibold">$ {(response.market_data.ath.usd.toLocaleString())}</span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>All Time Low</span>
                    <span className="font-semibold">
                    {response.market_data.atl.usd > 1 ? formatNum(response.market_data.atl.usd) : formatNumLessOne(response.market_data.atl.usd) }
                    </span>
                  </div>
                    <hr className="border-blue-500" />
                  <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[13.5px] md:text-[15px]">
                    <span>Genesis Date</span>
                    <span className="font-semibold">{(!response.genesis_date || response.genesis_date == ''? 'N/A' : response.genesis_date)}</span>
                  </div>
                    <hr className="border-blue-500" />
                </div>
              </div>
            </div>

            <div className="
              xl:w-[100%] xl:h-[420px]
              lg:w-[100%] lg:h-[380px]
              md:w-[640px] md:h-[400px]
              w-[100%] h-[420px] 
              p-3 rounded-xl
              flex flex-col 
              xl:mt-[45px] lg:mt-[-70px] md:mt-[-100px] mt-[-170px]  
              mt-6">
                <h1 className="xl:text-3xl lg:text-xl md:text-3xl text-2xl xl:text-left lg:text-left text-center md:text-center font-bold text-[white] mb-4">
                  {response.localization.en} Info {response.description.en == "" ? 'Unavailable' : ''}
                </h1>
                <Interweave className="text-[#d4d3d2] xl:text-md lg:text-[15px] md:text-[13.5px] text-[12px] " content={response.description.en} />
            </div>

            <div className=" ml-3 flex xl:flex-row lg:flex-row lg:flex-row flex-col">
                <CoinMarketList
                data={response}/>
                <div className="
                xl:w-[600px] xl:h-[400px]
                lg:w-[400px] lg:h-[380px]
                md:w-[640px] md:h-[400px]
                w-[100%] h-[420px] p-3 rounded-xl
                chart flex flex-col mt-3">
                  <div className="mx-7">
                    <h1 className="xl:text-3xl lg:text-xl md:text-3xl text-2xl xl:text-left lg:text-left text-center md:text-center font-bold text-[white] mb-4">
                       Currency to {response.localization.en}
                    </h1>
                    <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[15px] md:text-[15px]">
                      <span>{response.symbol.toUpperCase()} / {Object.keys(response.market_data.current_price)[48].toUpperCase()}</span>
                      <span className="font-semibold">${response.tickers[0].last.toLocaleString()}</span>
                    </div>
                      <hr className="border-blue-500" />
                    <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[15px] md:text-[15px]">
                      <span>{response.symbol.toUpperCase()} / {Object.keys(response.market_data.current_price)[61-24].toUpperCase()}</span>
                      <span className="font-semibold">P {response.market_data.current_price.php.toLocaleString()}</span>
                    </div>
                      <hr className="border-blue-500" />
                    <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[15px] md:text-[15px]">
                      <span>{response.symbol.toUpperCase()} / {Object.keys(response.market_data.current_price)[25].toUpperCase()}</span>
                      <span className="font-semibold">R {response.market_data.current_price.inr.toLocaleString()}</span>
                    </div>
                      <hr className="border-blue-500" />
                    <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[15px] md:text-[15px]">
                      <span>{response.symbol.toUpperCase()} / {Object.keys(response.market_data.current_price)[13].toUpperCase()}</span>
                      <span className="font-semibold">Y {response.market_data.current_price.cny.toLocaleString()}</span>
                    </div>
                      <hr className="border-blue-500" />
                    <div className="text-white mt-3 mb-2 flex justify-between xl:text-[16px] lg:text-[15px] md:text-[15px]">
                      <span>{response.symbol.toUpperCase()} / {Object.keys(response.market_data.current_price)[48].toUpperCase()}</span>
                      <span className="font-semibold">$ {response.tickers[0].last.toLocaleString()}</span>
                    </div>
                      <hr className="border-blue-500" />
                    
                    <div className="text-white mt-6 mb-2 flex justify-center  
                    xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                    hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                      <a href="#" className="font-bold"> Full Currency List </a>
                    </div>
                  </div>
                  </div>
            </div>
          </div>
        </div>
  )
}

export default ViewCardLower