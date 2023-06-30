import React from "react";
import { useParams } from "react-router-dom";
import { learnData } from "../../data/learnData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { sectionLinks } from "../../data/learnData";
import { useId } from "react";
import { useEffect } from "react";
<<<<<<< HEAD

const LearnPage = (props) => {
=======
import { useSelector } from "react-redux";

const LearnPage = (props) => {
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master
  const id = useId();
  const { sectionId } = useParams();
  const [open, setOpen] = useState(false);
  const section = learnData.find((item) => item.id === sectionId);

  return (
    <div className="h-[100%] w-[100%]">
      {/* Bar */}
<<<<<<< HEAD
      <div className="sticky left-0 top-[60px] z-[50] flex h-10 w-full flex-row items-center bg-[#062436] shadow-2xl">
        <div
          onClick={() => setOpen(!open)}
          className="mt-1 w-[45px] cursor-pointer bg-gray-900  pl-2 text-3xl text-blue-300 transition-all duration-150
             ease-in-out hover:scale-[1.04] hover:text-blue-100 md:hidden"
=======
      <div className={`top-[60px] left-0 shadow-2xl w-full sticky ${mode === 'light' ? "bg-blue-200 text-blue-900 font-semibold" : "bg-[#062436] text-white"}  h-10 z-[50] flex flex-row items-center`}>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl w-[45px] ${mode === 'light' ? "bg-blue-200 text-blue-900 " : "bg-[#062436] text-white"}  pl-2  mt-1 hover:text-blue-100 transition-all md:hidden
          duration-150 ease-in-out hover:scale-[1.04] cursor-pointer`}
>>>>>>> origin/master
        >
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "list-outline"}
          ></ion-icon>
        </div>

<<<<<<< HEAD
        <span className="text-glow ml-7 w-[200px] text-white ">
=======
        <span className="text-glow ml-7 w-[200px] ">
>>>>>>> origin/master
          Learn / {section.sectionName}
        </span>
      </div>

<<<<<<< HEAD
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
=======
      <div className={`flex h-[100%] ${mode === 'light' ? "bg-slate-200 text-blue-900 font-semibold " : "bg-[#062436] text-white"}`}>
        {/* SIDEBAR */}
        <div
          className={`xl:h-relative lg:h-relative md:h-relative h-[2025px]
          md:w-[250px] w-[200px] 
          left-0 
          top-25 
          xl:sticky lg:sticky md:sticky absolute 
          shadow-2xl transition-all ease-in-out z-[30]
          
          ${mode === 'light' ? "glass-v2-light text-slate-900" : "glass-v2 text-white"}
          ${open ? "left-[50] " : "left-[-360px]"}
          `}
        >
          <ul className="sticky left-4 top-32 mt-16 px-6">
            <div className="flex">
              <span className="text-2xl ">
                <ion-icon name="code-working"></ion-icon>
              </span>
              <span className="mb-2  ml-1 text-xl font-bold">
>>>>>>> origin/master
                Introduction
              </span>
            </div>
            {sectionLinks.slice(0, 6).map((section, index) => (
              <li
                key={`${id}-${index}-${section.id}`}
                className="text-md my-2.5 cursor-pointer font-normal
<<<<<<< HEAD
              text-white transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="my-2 h-[0.9px] w-full bg-blue-300 opacity-20" />
=======
             transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className={`${mode === 'light' ? "bg-blue-900 h-[2px]" : "bg-blue-300 h-[0.9px]"}  w-full  my-2 opacity-20`} />
>>>>>>> origin/master
              </li>
            ))}

            <div className="mt-12 flex">
<<<<<<< HEAD
              <span className="text-2xl text-white">
                <ion-icon name="prism-outline"></ion-icon>
              </span>
              <span className="mb-2  ml-1 text-xl font-bold text-white">
=======
              <span className="text-2xl">
                <ion-icon name="prism-outline"></ion-icon>
              </span>
              <span className="mb-2  ml-1 text-xl font-bold">
>>>>>>> origin/master
                Guides
              </span>
            </div>
            {sectionLinks.slice(6).map((section, index) => (
              <li
                key={`${id}-${index}-${section.id}`}
                className="text-md my-3 cursor-pointer font-normal
<<<<<<< HEAD
              text-white transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className="my-2 h-[0.9px] w-full bg-blue-300 opacity-40" />
=======
             transition-all ease-in-out hover:scale-[1.05]"
              >
                <Link to={`/Learn/${section.link}`}>{section.name}</Link>
                <div className={`${mode === 'light' ? "bg-blue-900 h-[2px]" : "bg-blue-300 h-[0.9px]"}  w-full  my-2 opacity-20`} />
>>>>>>> origin/master
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex h-[100%] w-full flex-col bg-[red]">
          {/* <div className="bg-[yellow] h-[2000px]"></div> */}

<<<<<<< HEAD
          <div className="h-[100%] w-[100%] bg-[#061016] px-[10%] md:px-[10%] lg:px-[12%] xl:px-[16%]">
=======
          <div className={`${mode === 'light' ? "bg-slate-200 text-slate-900" : "bg-[#061016]"}  h-[100%] w-[100%] xl:px-[16%] lg:px-[12%] md:px-[10%] px-[10%]`}>
>>>>>>> origin/master
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
<<<<<<< HEAD
                <h1 className="mb-4 text-3xl font-bold text-white">
=======
                <h1 className="mb-4 text-3xl font-bold">
>>>>>>> origin/master
                  {section.sectionName}
                </h1>
                <p
                  className="
            mb-2 mr-7
<<<<<<< HEAD
            text-[0.9rem] text-white 
=======
            text-[0.9rem] 
>>>>>>> origin/master
            md:text-[0.90rem] lg:text-[1.05rem] xl:text-[1.1rem]"
                >
                  {section.paragraphFirst}
                </p>
              </div>
              <div
<<<<<<< HEAD
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
=======
                className={` 
                xl:w-[40%] xl:h-[250px] 
                lg:w-[40%] lg:h-[275px] 
                md:w-[50%] md:h-[400px] 
                w-[100%] h-[250px] rounded-xl
                md:my-0 my-6 flex items-center justify-center
                 hover:scale-[1.01]  ${mode === 'light' ? "learn-card-banner-light hover:shadow-blue-100/90 shadow-blue-500/90" : "learn-card-banner hover:shadow-yellow-100/50 shadow-yellow-400/50"}
                 shadow-xl transition-all ease-in-out`}
              >
                <div
                  className={`text-7xl w-32 h-32 border-[5px] 
                  hover:border-[8px] 
                 transition-all ease-in-out
                rounded-full btc-card-circle-gradient flex items-center justify-center 
                hover:rotate-[360deg]  ${mode === 'light' ? "text-blue-200 border-blue-300 hover:border-blue-100 hover:text-blue-100" : "text-yellow-200 border-yellow-300 hover:border-yellow-100 hover:text-yellow-100"}` }
>>>>>>> origin/master
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
<<<<<<< HEAD
                <h1 className="mb-4 text-3xl font-bold text-white">Content</h1>
                <p
                  className="
            mb-2 mr-7
            text-[0.9rem] text-white 
=======
                <h1 className="mb-4 text-3xl font-bold">Content</h1>
                <p
                  className="
            mb-2 mr-7
            text-[0.9rem] 
>>>>>>> origin/master
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
<<<<<<< HEAD
                <h1 className="mb-4 text-2xl font-bold text-white">Summary</h1>
=======
                <h1 className="mb-4 text-2xl font-bold">Summary</h1>
>>>>>>> origin/master

                <p
                  className="
                  mb-2 mr-7
<<<<<<< HEAD
                  text-[0.9rem] text-white 
=======
                  text-[0.9rem] 
>>>>>>> origin/master
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
