import FearGreedIndex from "./FearGreedIndex";
import HomeHeadCard from "./HomeHeadCard";
import HomeTrendingCard from "./HomeTrendingCard";
import CalculatorWidget from "./CalculatorWidget";
import HomeMarketListProto from "./HomeMarketListProto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
<<<<<<< HEAD
import { useEffect } from "react";

function CryptocurrencyPage(props) {
=======
import { useSelector } from "react-redux";


function CryptocurrencyPage(props) {
  const mode = useSelector((state) => state.mode)
>>>>>>> origin/master

  const { data: coinList } = useQuery(["coinListData"], () => {
    return axios
      .get(
<<<<<<< HEAD
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
=======
        "http://localhost:3001/services/coins"
>>>>>>> origin/master
      )
      .then((res) => res.data);
  });

  const { data: coinTrending } = useQuery(["coinTrending"], () => {
    return axios
<<<<<<< HEAD
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
=======
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

  const { data: globalData } = useQuery(["globalData"], () => {
    return axios
      .get(
        "http://localhost:3001/services/globaldata"
      )
      .then((res) => res.data);
  });

  
  let cardLinks = [
    {
      icon: <ion-icon name="bar-chart-outline"></ion-icon>,
      label: "Global Cryptocurrencies ",
      details: `${globalData?.data?.active_cryptocurrencies}`,
      id: 0,
    },
    {
      icon: <ion-icon name="calculator-outline"></ion-icon>,
      label: "Exchanges:",
      details: `${globalData?.data?.markets}`,
      id: 1,
    },
    {
      icon: <ion-icon name="search-circle-outline"></ion-icon>,
      label: "Crypto Global MarketCap ",
      details: `$${globalData?.data?.total_market_cap.usd.toLocaleString()}`,
      id: 2,
    },
    {
      icon: <ion-icon name="search-circle-outline"></ion-icon>,
      label: "24 hour Trading Volume",
      details: `$${globalData?.data?.total_volume.usd.toLocaleString()}`,
      id: 3,
    },
  ];


  return (
    <main className={`flex  h-[100%] w-[100%] flex-col items-center ${mode === 'light' ? "bg-slate-300/95" : "bg-[#051925]"} `}>
      <HomeHeadCard globalData={globalData} cardLinks={cardLinks}/>
      
>>>>>>> origin/master
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
