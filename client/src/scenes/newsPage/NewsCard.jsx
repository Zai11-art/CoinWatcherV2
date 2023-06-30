import React from "react";
import shortid from "shortid";
<<<<<<< HEAD

const NewsCard = ({ image, title, description, source, url }) => {
  return (
    <div
      key={shortid.generate()}
      className="my-3  flex
              h-[300px] w-[100%]
              flex-col  
              rounded-md border-[0.1px] 
              border-[#094663] bg-[#020e14] 
              shadow-xl duration-200 
              ease-in-out  hover:scale-[1.01]
              md:h-[250px] md:w-[100%] lg:h-[210px]
              lg:w-[100%] "
=======
import { useSelector } from "react-redux";

const NewsCard = ({ image, title, description, source, url }) => {
  const mode = useSelector((state) => state.mode)
  
  return (
    <div
      key={shortid.generate()}
      className={`my-3  flex
              h-[300px] w-[100%]
              flex-col  
              rounded-md 
              ${mode === "light" ? "bg-slate-200 text-slate-900 text-glow " : "headCard-filter text-white border-[0.1px] border-cyan-200/40"}
              shadow-xl duration-200 
              ease-in-out  hover:scale-[1.01]
              md:h-[250px] md:w-[100%] lg:h-[210px]
              lg:w-[100%] `}
>>>>>>> origin/master
    >
      <div className="flex flex-row p-1 md:p-0 lg:p-0">
        <div
          className="newscard-filter
                  absolute mx-1
                  h-[200px] w-[175px]
                  rounded-md p-1 md:mx-0
                  md:mt-0  md:h-[245px] 
                  md:w-[250px]  lg:mx-0 lg:mt-0
                  lg:h-[205px] lg:w-[250px]  "
        ></div>
        <img
          src={image}
          alt=""
          className="
                      mx-1 h-[200px]
                      w-[175px] rounded-md
                      md:mx-0 md:mt-0 md:h-[245px] 
                      md:w-[250px]  lg:mx-0 
                      lg:mt-0  lg:h-[205px] lg:w-[250px]
                      
                      "
        />

        <div className="ml-4 w-[400px] lg:w-[700px]">
<<<<<<< HEAD
          <h1 className="text-md my-2 font-semibold text-white md:text-xl lg:text-xl">
=======
          <h1 className="text-md my-2 font-semibold  md:text-xl lg:text-xl">
>>>>>>> origin/master
            {title}
          </h1>
          <p
            className="my-2 
<<<<<<< HEAD
                          text-[13px] text-white
=======
                          text-[13px] 
>>>>>>> origin/master
                          lg:text-[14.5px]"
          >
            {" "}
            {description.slice(0, 150) + "..."}
          </p>
          <div
            className="mt-8 flex flex-row 
                  justify-between text-[12px]
                  md:mt-4 lg:mt-1 lg:text-[14.5px] "
          >
<<<<<<< HEAD
            <span className="pt-2 italic text-white ">
=======
            <span className="pt-2 italic  ">
>>>>>>> origin/master
              Source: {source.name}
            </span>
            <a
              href={url}
<<<<<<< HEAD
              className=" 
              mr-2 rounded-lg border-[#9ccddc] bg-[#062c43] px-3
              pt-[2px]  text-[1] text-white 
              duration-200 ease-in-out 
              hover:scale-[1.02] hover:bg-[#9ccddc]
              hover:text-[white] md:bg-[#054569] md:px-2
              md:pt-1
              lg:px-4 lg:pt-1"
=======
              className={` 
              mr-2 rounded-lg  px-3
              pt-[2px]  text-[1]  
              duration-200 ease-in-out 
              hover:scale-[1.02] 
               md:px-2
              md:pt-1
              lg:px-4 lg:pt-1
              ${
                mode === "light"
                  ? "border-[#0b2027] newscard-filter-light font-semibold text-blue-900 hover:bg-[#274163] hover:text-white focus:outline-none focus:ring focus:ring-[#a2e9ff] active:bg-[#b0ecff]"
                  : "border-[#9ccddc] bg-[#062c43] text-white hover:bg-[#ced7e0] focus:outline-none focus:ring focus:ring-[#9ccddc] active:bg-[#9ccddc]"
              }
              `}
>>>>>>> origin/master
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
