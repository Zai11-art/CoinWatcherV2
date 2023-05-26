import React from "react";
import { useParams } from "react-router-dom";


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

const LearnPage = () => {
  const { sectionId } = useParams();

  return (
    <>
      <div
        className="w-[100%] learn-banner flex items-center md:justify-between justify-between flex-wrap
      xl:h-[400px] lg:h-[400px] md:h-[500px] h-[600px]
      xl:px-[14%] lg:px-[10%] md:px-16 px-12"
      >
        <div className="flex flex-col ">
          <h1 className="text-7xl font-bold text-white mb-2">LEARN CRYPTO.</h1>
          <p className="text-lg text-white">
            LFG? learn the meaning of that here anon.
          </p>
          <button
            className="bg-blue-500 mt-4 py-2 px-6 w-36 font-bold text-white rounded-lg
            hover:bg-blue-200 hover:text-blue-800 transition-all ease-in-out duration-100
          "
          >
            Read More
          </button>
        </div>
        <div className="flex flex-col ">
          <h1 className="text-7xl font-bold text-white mb-2">LEARN.</h1>
        </div>
      </div>
      <div
        className="bg-[#061016] h-[100%] w-screen pt-6 pb-64 
      xl:px-[14%] lg:px-[10%] md:px-16 px-12"
      >
        <div
          className=" 
        xl:w-[100%] 
        lg:w-[100%]  
        md:w-[100%]
        w-[100%]  h-[100%]
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
            <h1 className="text-3xl font-bold text-white mb-4">Introduction</h1>
            <p
              className="
            xl:text-[1rem] lg:text-[1rem]
            md:text-[0.92rem] text-[0.9rem] 
            text-white mb-2 mr-7"
            >
              Cryptocurrencies are digital or virtual currencies that utilize
              cryptography for security and operate on decentralized networks
              called blockchains. They provide a peer-to-peer method of
              transferring value and enable secure and transparent transactions
              without the need for intermediaries like banks. Cryptocurrencies
              have gained popularity due to their potential for financial
              freedom, privacy, and the ability to bypass traditional financial
              systems. However, they also come with risks such as price
              volatility, regulatory uncertainties, and security threats.
            </p>
          </div>
          <div
            className=" 
          xl:w-[40%] xl:h-[250px] 
          lg:w-[40%] lg:h-[275px] 
          md:w-[50%] md:h-[350px] 
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
        xl:w-[100%] 
        lg:w-[100%]  
        md:w-[100%]
        w-[100%]  h-[100%]
        justify-center flex   
        xl:flex-row lg:flex-row md:flex-row flex-col mt-24"
        >
          <div
            className=" 
          xl:w-[100%] xl:h-[80%] 
          lg:w-[100%] lg:h-[80%] 
          md:w-[100%] md:h-[50%] 
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
                  <span className="font-bold mr-2 text-md">{faq.question}</span>

                  {/* break */}
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
    </>
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
