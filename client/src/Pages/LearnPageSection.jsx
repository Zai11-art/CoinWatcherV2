import React from "react";
import { useParams } from "react-router-dom";
import { learnData } from "../data/learnData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sectionLinks } from "../data/learnData";

const LearnPage = () => {
  const { sectionId } = useParams();
  const [open, setOpen] = useState(false);

  const section = learnData.find(item => item.id === sectionId);

  return (
    <div className="h-[100%] w-[100%]">
      {/* Bar */}
      <div className="top-[70px] left-0 shadow-2xl w-full sticky bg-[#062436] h-10 z-[50] flex flex-row items-center">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl w-[45px] text-blue-300 pl-2  mt-1 bg-gray-900 hover:text-blue-100 transition-all md:hidden
             duration-150 ease-in-out hover:scale-[1.04] cursor-pointer"
        >
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "list-outline"}
          ></ion-icon>
        </div>

        <span className="text-white text-glow w-[200px] ml-7 ">Learn / {section.sectionName}</span>
      </div>

      <div className="flex h-[100%] bg-[#061016]">
        {/* SIDEBAR */}
        <div
          className={`xl:h-relative lg:h-relative md:h-relative sm:h-[1720px] h-[1990px]
    
          md:w-[250px] w-[200px] 
        left-0 
        top-25 
        xl:sticky lg:sticky md:sticky absolute 
        shadow-2xl transition-all ease-in-out z-[30]
        glass-v2
        ${open ? "left-[50] " : "left-[-360px]"}
        `}
        >
          <ul className="mt-16 px-6 sticky left-4 top-32">
            <div className="flex">
              <span className="text-white text-2xl">
                <ion-icon name="code-working"></ion-icon>
              </span>
              <span className="text-white  text-xl font-bold mb-2 ml-1">
                Introduction
                
              </span>
            </div>
            {sectionLinks.slice(0,6).map((section) => (
              <li
                className="text-white text-md my-2.5 font-normal
              hover:scale-[1.05] cursor-pointer transition-all ease-in-out"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="bg-blue-300 w-full h-[0.9px] my-2 opacity-20" />
              </li>
            ))}
            
            <div className="flex mt-12">
              <span className="text-white text-2xl">
                <ion-icon name="prism-outline"></ion-icon>
              </span>
              <span className="text-white  text-xl font-bold mb-2 ml-1">
                Guides
                
              </span>
              
              
            </div>
            {sectionLinks.slice(6).map((section) => (
              <li
                className="text-white text-md my-3 font-normal
              hover:scale-[1.05] cursor-pointer transition-all ease-in-out"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="bg-blue-300 w-full h-[0.9px] my-2 opacity-40" />
              </li>
              
            ))}
            
            
          </ul>
        </div>

        <div className=" bg-[red] flex flex-col w-full h-[100%]">
          

          {/* <div className="bg-[yellow] h-[2000px]"></div> */}

          <div className="bg-[#061016] h-[100%] w-[100%] xl:px-[16%] lg:px-[12%] md:px-[10%] px-[10%]">
            <div
              className=" 
          w-[100%]
          h-[100%]
          justify-center flex   
          xl:flex-row lg:flex-row md:flex-row flex-col mt-8"
            >
              <div
                className=" 
          xl:w-[60%] xl:h-[80%] 
          lg:w-[60%] lg:h-[80%] 
          md:w-[50%] md:h-[50%] 
          w-[100%] h-[50%] 
          "
              >
                <h1 className="text-3xl font-bold text-white mb-4">
                  {section.sectionName}
                </h1>
                <p
                  className="
            xl:text-[1.1rem] lg:text-[1.05rem]
            md:text-[0.90rem] text-[0.9rem] 
            text-white mb-2 mr-7"
                >
                  {section.paragraphFirst}
                </p>
              </div>
              <div
                className=" 
          xl:w-[40%] xl:h-[250px] 
          lg:w-[40%] lg:h-[275px] 
          md:w-[50%] md:h-[400px] 
          w-[100%] h-[250px] rounded-xl
          md:my-0 my-6 flex items-center justify-center
          hover:shadow-yellow-100/50 hover:scale-[1.01] learn-card-banner
          shadow-yellow-400/50 shadow-xl transition-all ease-in-out"
              >
                <div
                  className="text-yellow-200 text-7xl w-32 h-32 border-[5px] 
              hover:border-[8px] 
            border-yellow-300 hover:border-yellow-100 transition-all ease-in-out
            rounded-full btc-card-circle-gradient flex items-center justify-center 
            hover:rotate-[360deg] hover:text-yellow-100"
                >
                  <ion-icon name="logo-bitcoin"></ion-icon>
                </div>
              </div>
            </div>
            <div
              className=" 
          w-[100%]
          h-[100%]
          justify-center flex   
          xl:flex-row lg:flex-row md:flex-row flex-col mt-8"
            >
              <div
                className=" 
          xl:w-[100%] xl:h-[80%] 
          lg:w-[100%] lg:h-[80%] 
          md:w-[100%] md:h-[50%] 
          w-[100%] h-[50%] 
          "
              >
                <h1 className="text-3xl font-bold text-white mb-4">
                  Content
                </h1>
                <p
                  className="
            xl:text-[1.1rem] lg:text-[1.05rem]
            md:text-[0.90rem] text-[0.9rem] 
            text-white mb-2 mr-7"
                >
                  {section.paragraphSecond}
                </p>
              </div>
            </div>

            <div
              className=" 
       
        w-[100%]  h-[100%]
        justify-center flex   
        xl:flex-row lg:flex-row md:flex-row flex-col mt-12 mb-12"
            >
              <div
                className=" 
        
          w-[100%] h-[50%] 
          "
              >
                <h1 className="text-2xl font-bold text-white mb-4">
                  Summary
                </h1>

                <p
                  className="
                  xl:text-[1.1rem] lg:text-[1.05rem]
                  md:text-[0.90rem] text-[0.9rem] 
                  text-white mb-2 mr-7"
                >
                  {section.summary}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0


