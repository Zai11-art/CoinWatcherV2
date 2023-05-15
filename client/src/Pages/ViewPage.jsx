import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CoinNews from "../components/CoinNews";
import CoinCarousel from "../components/CoinCarousel";
import { getCoinData } from "../utils/utils";
import Loader from "../components/Loader";
import ViewCardUpper from "../components/viewcardUpper";
import ViewCardLower from "../components/ViewCardLower";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ViewPage = (props) => {
    const [response, setCoinData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    
      getCoinData(id)
      .then(data => {
        setCoinData(data);
      })
      .catch(error => {
        console.log(error);
      });
    
    }, [id])

    const {data : price} = useQuery(['coinListData'], () => {
      return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en")
      .then((res) => res.data)
              
    })
    
    const {data : trending} = useQuery(['coinTrending'], () => {
        return axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then((res) => res.data.coins)
        
    })

    const {data : usdprice} = useQuery(['btcPrice'], () => {
        return axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
        .then((res) => res.data.bitcoin.usd)
        
    })
    
  
    if (!response) {
      return <div className={`w-full h-[100vh] bg-[#051925] flex flex-col pb-[200px]`}>
        <Loader/>
      </div>;
    }

    return (

      <div className={`w-full xl:h-[100%] lg:h-[100%] md:h-[6000px] h-[6000px] bg-[#051925] flex flex-col pb-[200px]`}>
        <ViewCardUpper
          data={response}/>
        <ViewCardLower
          data={response}/>    
        <CoinNews/>
        <CoinCarousel
          coinList={price}
          trending={trending}
          btcPrice={usdprice}
        />
      </div>

    );
}
export default ViewPage
