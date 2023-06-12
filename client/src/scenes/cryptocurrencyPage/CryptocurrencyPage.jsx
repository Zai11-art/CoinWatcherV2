import FearGreedIndex from "./FearGreedIndex";
import HomeHeadCard from "./HomeHeadCard";
import HomeTrendingCard from "./HomeTrendingCard";
import CalculatorWidget from "./CalculatorWidget";
import HomeMarketListProto from "./HomeMarketListProto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

function CryptocurrencyPage(props) {

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
    <main className="flex  h-[100%] w-[100%] flex-col items-center bg-[#051925]">
      <HomeHeadCard />
      <div
        className="flex h-[250px] w-[450px] flex-row
            md:h-[300px] md:w-[700px]
            lg:h-[260px] lg:w-[1000px]"
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
