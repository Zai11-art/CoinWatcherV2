import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD

const NewsCardHeader = () => {
  return (
    <div
      className="
                headCard-filter absolute
=======
import { useSelector } from "react-redux";

const NewsCardHeader = () => {
  const mode = useSelector((state) => state.mode)
  return (
    <div
      className={`
                ${mode === "light" ? "headCard-filter-light text-slate-700 text-glow" : "headCard-filter text-white"} 
                absolute
>>>>>>> origin/master
                z-[2] mt-12
                flex h-[350px]
                w-[450px] flex-col
                rounded-lg 
                pb-4
                md:h-[300px] 
                md:w-[700px]
<<<<<<< HEAD
                lg:h-[300px]  lg:w-[1000px]"
    >
      <div className="p-6">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Be updated. no FOMO. Crypto news for you.
        </h1>
        <p className="text-md text-white  md:w-[500px]">
=======
                lg:h-[300px]  lg:w-[1000px]`}
    >
      <div className="p-6">
        <h1 className="mb-6 text-3xl font-bold">
          Be updated. no FOMO. Crypto news for you.
        </h1>
        <p className={`text-md  md:w-[500px] ${mode === "light" ? "font-semibold" : "font-normal"}`}>
>>>>>>> origin/master
          Welcome to the ultimate source for all your cryptocurrency news and
          analysis! Our mission is to keep you up-to-date with the latest
          developments in the rapidly evolving world of digital currencies.
        </p>
<<<<<<< HEAD
        <h1 className="text-md my-2 font-bold text-white">
=======
        <h1 className="text-md my-2 font-bold">
>>>>>>> origin/master
          Get the Latest news in the last 24 hrs
        </h1>
      </div>

      <div className="ml-6 mt-1">
        <Link
          to="/Home"
          className="h-[20px]
<<<<<<< HEAD
                        w-[100px] rounded-full border-[0.5px]
                        border-[#9ccddc] bg-[#062c43] p-1 text-[10px] text-white
                        duration-200  ease-in-out hover:scale-[1.02] 
                        hover:bg-[#9ccddc]
=======
                        w-[100px] rounded-full border-[0.5px] text-white
                        border-[#9ccddc] bg-[#062c43] p-1 text-sm
                        duration-200  ease-in-out hover:scale-[1.02] 
                        hover:bg-[#9ccddc] px-5
>>>>>>> origin/master
                        hover:text-[white] md:bg-[#054569]"
        >
          View Coins here
        </Link>
      </div>
    </div>
  );
};

export default NewsCardHeader;
