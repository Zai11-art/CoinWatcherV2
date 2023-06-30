import React from "react";
import { useParams } from "react-router-dom";
import { learnData } from "../../data/learnData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sectionLinks } from "../../data/learnData";
import { useId } from "react";
import { useEffect } from "react";

const LearnPage = (props) => {
  const id = useId();
  const { sectionId } = useParams();
  const [open, setOpen] = useState(false);
  const section = learnData.find((item) => item.id === sectionId);

  return (
    <div className="h-[100%] w-[100%]">
      {/* Bar */}
      <div className="sticky left-0 top-[60px] z-[50] flex h-10 w-full flex-row items-center bg-[#062436] shadow-2xl">
        <div
          onClick={() => setOpen(!open)}
          className="mt-1 w-[45px] cursor-pointer bg-gray-900  pl-2 text-3xl text-blue-300 transition-all duration-150
             ease-in-out hover:scale-[1.04] hover:text-blue-100 md:hidden"
        >
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "list-outline"}
          ></ion-icon>
        </div>

        <span className="text-glow ml-7 w-[200px] text-white ">
          Learn / {section.sectionName}
        </span>
      </div>

      <div className="flex h-[100%] bg-[#061016]">
        {/* SIDEBAR */}
        <div
          className={`xl:h-relative lg:h-relative md:h-relative top-25 glass-v2
    
          absolute left-0 
        z-[30] 
        h-[1990px] 
        w-[200px] shadow-2xl transition-all ease-in-out 
        sm:h-[1720px] md:sticky md:w-[250px] lg:sticky
        xl:sticky
        ${open ? "left-[50] " : "left-[-360px]"}
        `}
        >
          <ul className="sticky left-4 top-32 mt-16 px-6">
            <div className="flex">
              <span className="text-2xl text-white">
                <ion-icon name="code-working"></ion-icon>
              </span>
              <span className="mb-2  ml-1 text-xl font-bold text-white">
                Introduction
              </span>
            </div>
            {sectionLinks.slice(0, 6).map((section, index) => (
              <li
                key={`${id}-${index}-${section.id}`}
                className="text-md my-2.5 cursor-pointer font-normal
              text-white transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="my-2 h-[0.9px] w-full bg-blue-300 opacity-20" />
              </li>
            ))}

            <div className="mt-12 flex">
              <span className="text-2xl text-white">
                <ion-icon name="prism-outline"></ion-icon>
              </span>
              <span className="mb-2  ml-1 text-xl font-bold text-white">
                Guides
              </span>
            </div>
            {sectionLinks.slice(6).map((section, index) => (
              <li
                key={`${id}-${index}-${section.id}`}
                className="text-md my-3 cursor-pointer font-normal
              text-white transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="my-2 h-[0.9px] w-full bg-blue-300 opacity-40" />
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex h-[100%] w-full flex-col bg-[red]">
          {/* <div className="bg-[yellow] h-[2000px]"></div> */}

          <div className="h-[100%] w-[100%] bg-[#061016] px-[10%] md:px-[10%] lg:px-[12%] xl:px-[16%]">
            <div
              className=" 
          mt-8
          flex
          h-[100%] w-[100%]   
          flex-col justify-center md:flex-row lg:flex-row xl:flex-row"
            >
              <div
                className=" 
          h-[50%] w-[100%] 
          md:h-[50%] md:w-[50%] 
          lg:h-[80%] lg:w-[60%] 
          xl:h-[80%] xl:w-[60%] 
          "
              >
                <h1 className="mb-4 text-3xl font-bold text-white">
                  {section.sectionName}
                </h1>
                <p
                  className="
            mb-2 mr-7
            text-[0.9rem] text-white 
            md:text-[0.90rem] lg:text-[1.05rem] xl:text-[1.1rem]"
                >
                  {section.paragraphFirst}
                </p>
              </div>
              <div
                className=" 
          learn-card-banner my-6 
          flex h-[250px] 
          w-[100%] items-center 
          justify-center rounded-xl shadow-xl
          shadow-yellow-400/50 transition-all ease-in-out hover:scale-[1.01] hover:shadow-yellow-100/50
          md:my-0 md:h-[400px] md:w-[50%]
          lg:h-[275px] lg:w-[40%] xl:h-[250px] xl:w-[40%]"
              >
                <div
                  className="btc-card-circle-gradient flex h-32 w-32 items-center 
              justify-center 
            rounded-full border-[5px] border-yellow-300 text-7xl
            text-yellow-200 transition-all ease-in-out hover:rotate-[360deg] hover:border-[8px] 
            hover:border-yellow-100 hover:text-yellow-100"
                >
                  <ion-icon name="logo-bitcoin"></ion-icon>
                </div>
              </div>
            </div>
            <div
              className=" 
          mt-8
          flex
          h-[100%] w-[100%]   
          flex-col justify-center md:flex-row lg:flex-row xl:flex-row"
            >
              <div
                className=" 
          h-[50%] w-[100%] 
          md:h-[50%] md:w-[100%] 
          lg:h-[80%] lg:w-[100%] 
          xl:h-[80%] xl:w-[100%] 
          "
              >
                <h1 className="mb-4 text-3xl font-bold text-white">Content</h1>
                <p
                  className="
            mb-2 mr-7
            text-[0.9rem] text-white 
            md:text-[0.90rem] lg:text-[1.05rem] xl:text-[1.1rem]"
                >
                  {section.paragraphSecond}
                </p>
              </div>
            </div>

            <div
              className=" 
       
        mb-12  mt-12
        flex h-[100%]   
        w-[100%] flex-col justify-center md:flex-row lg:flex-row xl:flex-row"
            >
              <div
                className=" 
        
          h-[50%] w-[100%] 
          "
              >
                <h1 className="mb-4 text-2xl font-bold text-white">Summary</h1>

                <p
                  className="
                  mb-2 mr-7
                  text-[0.9rem] text-white 
                  md:text-[0.90rem] lg:text-[1.05rem] xl:text-[1.1rem]"
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
