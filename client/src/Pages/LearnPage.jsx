import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SectionBar from "../components/LearnPageComponents/SectionBar";
import SectionSideBar from "../components/LearnPageComponents/SectionSideBar";
import { useState } from "react";
import { sectionLinks } from "../data/learnData";

const faq = [
  {
    id: 0,
    question: "What is cryptocurrency?:",
    answer:
      "This section provides a concise definition of cryptocurrency, highlighting its digital nature and cryptographic security features.",
  },
  {
    id: 1,
    question: "How does cryptocurrency work?:",
    answer:
      "Here, you can explain the fundamental workings of cryptocurrencies, focusing on concepts like blockchain, consensus mechanisms, and transaction verification.",
  },
  {
    id: 2,
    question: "Advantages and disadvantages of cryptocurrencies?:",
    answer:
      "Discuss the benefits of cryptocurrencies such as fast and borderless transactions, financial inclusivity, and potential for innovation. Also, address the drawbacks like price volatility, lack of mainstream adoption, and the potential for scams.",
  },
  {
    id: 3,
    question: "Key terms and concepts?:",
    answer:
      " Introduce essential terms and concepts related to cryptocurrencies, such as blockchain, decentralization, cryptography, public and private keys, and wallets. Explain these concepts in simple language to help beginners grasp the fundamental ideas.",
  },
];



/*
<div
        className="top-[7.5%] left-0 shadow-2xl 
      w-full sticky bg-[#051925] h-8 z-[50] flex flex-row"
      >
        <div
          className="text-4xl w-[20px] text-blue-300 ml-3 cursor-pointer
        hover:text-blue-100 transition-all ease-in-out"
        >
          <ion-icon name="list-outline"></ion-icon>
        </div>
        <span className="text-white text-glow w-[50px] ml-7 mt-1">Learn</span>
      </div>
 */

const LearnPage = () => {
  const { sectionId } = useParams();
  const [open, setOpen] = useState(false);

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

        <span className="text-white text-glow w-[50px] ml-7 ">Learn</span>
      </div>

      <div className="flex h-[100%] bg-[#061016]">
        {/* SIDEBAR */}
        <div
          class={`xl:h-relative lg:h-relative md:h-relative h-[2025px]
    
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
          <div
            className="w-full h-[500px] learn-banner flex md:flex-row flex-col 
          xl:items-center lg:items-center md:items-center 
          justify-around 
          xl:px-[16%] lg:px-[12%] md:px-[10%] px-[10%]"
          >
            <div className="flex flex-col w-[50%]">
              <h1 className="text-6xl font-bold text-white mb-2">
                LEARN CRYPTO.
              </h1>
              <p className="text-md text-white">
                LFG? learn the meaning of that here anon.
              </p>
              <button
                className="bg-blue-500 mt-4 py-1 w-32 font-bold text-white rounded-lg text-sm
            hover:bg-blue-200 hover:text-blue-800 transition-all ease-in-out duration-100
          "
              >
                Read More
              </button>
            </div>

            <div className="flex flex-col w-[50%]">
              <h1 className="text-6xl font-bold text-center text-white mb-2">
                CRYPTO.
              </h1>
            </div>
          </div>

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
                  Introduction
                </h1>
                <p
                  className="
            xl:text-[1.1rem] lg:text-[1.05rem]
            md:text-[0.90rem] text-[0.9rem] 
            text-white mb-2 mr-7"
                >
                  Welcome to the Learning Section of our cryptocurrency website!
                  Here, you'll find a wealth of knowledge and resources to help
                  you navigate the exciting world of cryptocurrencies. Whether
                  you're new to cryptocurrencies or looking to expand your
                  existing knowledge, our comprehensive learning materials will
                  equip you with the essential information needed to understand,
                  invest, and participate in the cryptocurrency ecosystem.
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
                  Objective
                </h1>
                <p
                  className="
            xl:text-[1.1rem] lg:text-[1.05rem]
            md:text-[0.90rem] text-[0.9rem] 
            text-white mb-2 mr-7"
                >
                  We're committed to providing you with accurate, reliable, and
                  up-to-date information to empower you on your cryptocurrency
                  journey. So, dive in, explore the learning materials, and
                  embark on your path to becoming a knowledgeable participant in
                  the exciting world of cryptocurrencies. Let's get started!
                </p>
              </div>
            </div>

            <div
              className=" 
       
        w-[100%]  h-[100%]
        justify-center flex   
        xl:flex-row lg:flex-row md:flex-row flex-col mt-12"
            >
              <div
                className=" 
        
          w-[100%] h-[50%] 
          "
              >
                <h1 className="text-2xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h1>

                <p
                  className="
            xl:text-[1rem] lg:text-[1rem]
            md:text-[0.92rem] text-[0.9rem] 
            text-white mb-7 mr-7"
                >
                  Most common questions asked in and about crypto. Check it out
                  below:
                </p>
                <ul>
                  {faq.map((faq) => (
                    <li
                      key={faq.id}
                      className="xl:text-[1rem] lg:text-[1rem]
                    md:text-[0.92rem] text-[0.9rem]  
                text-gray-300 mb-8"
                    >
                      <span className="font-bold mr-2 md:text-lg text-md">
                        {faq.question}
                      </span>

                      <div className="bg-blue-300 w-full h-[0.9px] my-2 opacity-40" />

                      <p
                        className="italic
                  xl:text-[0.93rem] lg:text-[0.9rem]
                  md:text-[0.92rem] text-[0.9rem]"
                      >
                        - {faq.answer}
                      </p>
                    </li>
                  ))}
                </ul>
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
