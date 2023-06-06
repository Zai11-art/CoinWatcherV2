import FearGreedIndex from "./FearGreedIndex";
import HomeHeadCard from "./HomeHeadCard";
import HomeTrendingCard from "./HomeTrendingCard";
import CalculatorWidget from "./CalculatorWidget";
import HomeMarketListProto from "./HomeMarketListProto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";


function CryptocurrencyPage(props) {


    props.funcNav(true);
 

  const { data: coinList } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  const { data: coinTrending } = useQuery(["coinTrending"], () => {
    return axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.data.coins);
  });

  const { data: btcPrice } = useQuery(["btcPrice"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
      .then((res) => res.data.bitcoin.usd);
  });

  return (
    <main
      className="w-[100%]  h-[100%] bg-[#051925] flex flex-col items-center"
    >
      <HomeHeadCard />
      <div
        className="flex flex-row lg:w-[1000px] lg:h-[260px]
            md:w-[700px] md:h-[300px]
            w-[450px] h-[250px]"
      >
        <HomeTrendingCard trendingData={coinTrending} btcPrice={btcPrice} />
        <FearGreedIndex />
      </div>

      <CalculatorWidget />
      <HomeMarketListProto coinData={coinList} />
    </main>
  );
}

export default CryptocurrencyPage;
