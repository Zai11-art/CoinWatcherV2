import React from "react";
import { useSelector } from "react-redux";

const HomeHeadCard = () => {
  const mode = useSelector((state) => state.mode);

  let cardLinks = [
    {
      icon: <ion-icon name="bar-chart-outline"></ion-icon>,
      details: "Exploring the Exciting World of Cryptocurrency Markets.",
      id: 0,
    },
    {
      icon: <ion-icon name="calculator-outline"></ion-icon>,
      details: "Maximizing Your Crypto Trading Potential.",
      id: 1,
    },
    {
      icon: <ion-icon name="search-circle-outline"></ion-icon>,
      details: "Discovering the Latest Trends and Insights in Crypto Markets.",
      id: 2,
    },
  ];

  return (
    <div
      className="flex w-full 
        flex-row items-center 
        justify-center "
    >
      <div
        className={` 
            absolute z-[2]
            mt-12 h-[320px]
            w-[450px] rounded-lg
            md:h-[300px] md:w-[700px]
            lg:h-[200px] 
             lg:w-[1000px]
             ${mode === "light" ? "newscard-filter-light" : "newscard-filter"}
            flex
            flex-col 
            items-center  pb-4 opacity-95`}
      >
        <div
          className={`${
            mode === "light" ? "text-[#1b4169] text-glow-light" : " text-white"
          } mb-2 mt-3 text-center `}
        >
          <h1 className="mt-2 text-2xl font-bold uppercase md:text-3xl">
            <span className="">Watch</span> the Top coins now.
          </h1>
          <p className="md:text-md mt-2 font text-[13.5px] italic">
            Watch the latest crypto prices, markets, and news at your
            convenience.
          </p>
        </div>
        <div
          className=" 
                mt-2 flex
                h-[300px] w-[400px]
                flex-col flex-wrap
                items-center justify-center md:h-[270px] md:w-[650px] md:flex-row lg:h-[150px]
                lg:w-[960px] lg:flex-row 
                
                "
        >
          {cardLinks.map((link) => (
            <div
              key={link.id}
              className={` ${mode === 'light' ? "bg-slate-200/50 text-[#101218] shadow-xl" : "HeadCard-bg text-white"} 
                        m-2 flex 
                        h-[50px] w-[350px]
                        flex-row rounded-lg
                        border-[2px] border-[#9ccddc] py-6
                        duration-100 ease-in-out
                        hover:scale-[1.02] md:h-[50px]
                        md:w-[300px] lg:h-[50px] lg:w-[300px]`}
            >
              <div className="mx-2 flex flex-row items-center">
                <h1 className="mx-2 text-3xl lg:text-4xl">{link.icon}</h1>

                <p className="text- mx-2 text-[12px] lg:text-[13px]">
                  {link.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="
            homePageCard
            mt-12 h-[320px]
            w-[450px] rounded-lg
            border-[2px] border-[#9ccddc]
            md:h-[300px] 
            md:w-[700px] lg:h-[200px] lg:w-[1000px]
            opacity-[100%]
            "
      ></div>
    </div>
  );
};

export default HomeHeadCard;
