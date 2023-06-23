import FearGreedIndex from "./FearGreedIndex";
import HomeHeadCard from "./HomeHeadCard";
import HomeTrendingCard from "./HomeTrendingCard";
import CalculatorWidget from "./CalculatorWidget";
import HomeMarketListProto from "./HomeMarketListProto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";


function CryptocurrencyPage(props) {
  const mode = useSelector((state) => state.mode)

  const { data: coinList } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "http://localhost:3001/services/coins"
      )
      .then((res) => res.data);
  });

  const { data: coinTrending } = useQuery(["coinTrending"], () => {
    return axios
      .get("http://localhost:3001/services/trending")
      .then((res) => res.data);
  });


  const { data: btcPrice } = useQuery(["btcPrice"], () => {
    return axios
      .get(
        "http://localhost:3001/services/btcPrice"
      )
      .then((res) => res.data);
  });

  console.log(btcPrice)

  return (
    <main className={`flex  h-[100%] w-[100%] flex-col items-center ${mode === 'light' ? "bg-slate-300/95" : "bg-[#051925]"} `}>
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
