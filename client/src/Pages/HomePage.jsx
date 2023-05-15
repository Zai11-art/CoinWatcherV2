import FearGreedIndex from "../components/FearGreedIndex";
import HomeHeadCard from "../components/HomeHeadCard";
import HomeTrendingCard from "../components/HomeTrendingCard";
import CalculatorWidget from "../components/CalculatorWidget";
import HomeMarketList from "../components/HomeMarketList";
import { useQuery } from "@tanstack/react-query";
import { getCoinDataList } from "../utils/utils";
import axios from "axios";

function Home() {
    
   const {data : coinList } = useQuery(['coinListData'], () => {
    return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en")
    .then((res) => res.data)
    })
    
   const {data : coinTrending } = useQuery(['coinTrending'], () => {
    return axios.get("https://api.coingecko.com/api/v3/search/trending")
    .then((res) => res.data.coins)
    })

   const {data : btcPrice } = useQuery(['btcPrice'], () => {
    return axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
    .then((res) => res.data.bitcoin.usd)
    })

    

    return ( 
        <main className={`w-[100%]  h-[100%] bg-[#051925] flex flex-col items-center`}>
                <HomeHeadCard/>
            <div className="flex flex-row lg:w-[1000px] lg:h-[260px]
            md:w-[700px] md:h-[300px]
            w-[450px] h-[250px]">
                <HomeTrendingCard
                trendingData={coinTrending}
                btcPrice={btcPrice}
                />
                <FearGreedIndex
                />
            </div>
            
            <CalculatorWidget/>
            <HomeMarketList
            coinData={coinList}
            />
            
        </main>
     );
}

export default Home;


