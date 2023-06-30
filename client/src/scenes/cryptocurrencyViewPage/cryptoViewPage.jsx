import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CoinNews from "./CoinNews";
import CoinCarousel from "./CoinCarousel";
import { getCoinData } from "../../state/utils/utils";
import Loader from "../../components/Loader";
import ViewCardUpper from "./viewcardUpper";
import ViewCardLower from "./ViewCardLower";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
<<<<<<< HEAD

const ViewPage = (props) => {
=======
import { useSelector } from "react-redux";

const ViewPage = (props) => {
  console.log(`crypto view page`);
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master
  const [response, setCoinData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getCoinData(id)
      .then((data) => {
        setCoinData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const { data: price } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  const { data: trending } = useQuery(["coinTrending"], () => {
    return axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.data.coins);
  });

  const { data: usdprice } = useQuery(["btcPrice"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      )
      .then((res) => res.data.bitcoin.usd);
  });

  if (!response) {
    return (
<<<<<<< HEAD
      <div className={`flex h-[100vh] w-full flex-col bg-[#051925] pb-[200px]`}>
=======
      <div
        className={`flex h-[100vh] w-full flex-col ${
          mode === "light" ? "bg-slate-200" : "bg-[#03111a]"
        }  pb-[200px]`}
      >
>>>>>>> origin/master
        <Loader />
      </div>
    );
  }

  return (
    <div
<<<<<<< HEAD
      className={`flex h-[6000px] w-full flex-col bg-[#051925] pb-[200px] md:h-[6000px] lg:h-[100%] xl:h-[100%]`}
=======
      className={`flex h-[6000px] w-full flex-col ${
        mode === "light" ? "bg-slate-300" : "bg-[#030d13]"
      }  pb-[200px] md:h-[6000px] lg:h-[100%] xl:h-[100%]`}
>>>>>>> origin/master
    >
      <ViewCardUpper data={response} />
      <ViewCardLower data={response} />
      <CoinNews />
      <CoinCarousel coinList={price} trending={trending} btcPrice={usdprice} />
    </div>
  );
};
export default ViewPage;
