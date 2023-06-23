import React from "react";
import CoinSlideShow from "./HomeCoinSlideshow";
import Loader from "../../components/Loader";

const HomeHero = ({ coinList }) => {
  return (
    <div className="bg-[#051229]">
      <div className="absolute  left-10 top-0 z-[99] mt-[200px] font-bold sm:mt-[250px] md:mt-[300px] lg:mt-[400px] xl:mt-[500px]">
        <span className="text-xl text-gray-300 md:text-3xl lg:text-5xl xl:text-7xl">
          WELCOME ANON
        </span>

        <p className="mt-1 w-[150px] text-[8px] text-gray-400 sm:text-[10px] md:w-[400px] md:text-[12px] lg:w-[1000px] lg:text-[15px]">
          We are the watchers. Wide variety of apps, learning section, community
          stronk. Welcome anon.
        </p>
      </div>

      <img
        src={"http://localhost:3001/assets/front.png"}
        className="vignette absolute z-[5] w-full"
        alt=""
      />
      <div className="mt-128 flex items-center justify-center ">
        {coinList?.length ? <CoinSlideShow images={coinList} /> : <Loader />}
      </div>

      <div className="z-[1] flex bg-cover bg-center bg-no-repeat">
        <img src={"http://localhost:3001/assets/bg.png"} alt="heroImage" />
      </div>
    </div>
  );
};

export default HomeHero;
