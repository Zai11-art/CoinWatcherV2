import React from "react";
import { useSelector } from "react-redux";

const HomeHeadCard = ({ globalData, cardLinks }) => {
  const mode = useSelector((state) => state.mode);

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
            mode === "light" ? "text-glow-light text-[#1b4169]" : " text-white"
          } mb-2 mt-3 text-center `}
        >
          <h1 className="mt-2 text-2xl font-bold uppercase md:text-3xl">
            <span className="">Watch</span> the Top coins now.
          </h1>
          <p className="md:text-md font mt-2 text-[13.5px] italic">
            Watch the latest crypto prices, markets, and news at your
            convenience.
          </p>
        </div>
        <div
          className=" 
                mt-2 flex
                h-[300px] w-[400px]
                flex-row flex-wrap
                items-center justify-center md:h-[270px] md:w-[650px] md:flex-row lg:h-[150px]
                lg:w-[960px] lg:flex-row 
                
                "
        >
          {cardLinks?.map((link) => (
            <div
              key={link.id}
              className={`font-semibold ${
                mode === "light"
                  ? "text-glow bg-slate-200 text-blue-900 shadow-xl"
                  : "text-glow bg-slate-900 text-white"
              } 
                        m-2 flex h-[70px]
                        w-[175px] flex-col
                         justify-center rounded-lg
                        border-[2px] border-[#9ccddc] 
                        duration-100 ease-in-out
                        hover:scale-[1.02] md:h-[70px]
                        md:w-[300px] lg:h-[62.5px] lg:w-[210px]`}
            >
              <span className="text- mx-2 text-[16px] lg:text-[18px] flex items-center">
                {link.image && (
                  <img className="h-5 w-5 mr-1" src={link.image} alt="" />
                )}{" "}
                {link.details}
              </span>
              <span className="text- mx-2 text-[12px] font-normal italic lg:text-[11px]">
                {link.label}
              </span>
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
            opacity-[100%] 
            md:h-[300px] md:w-[700px] lg:h-[200px]
            lg:w-[1000px]
            "
      ></div>
    </div>
  );
};

export default HomeHeadCard;
