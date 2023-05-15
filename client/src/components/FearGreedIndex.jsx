import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyElement = styled.div`
  transform: rotate(${(props) => props.rotationAngle || "0deg"});
`;

const FearGreedIndex = (props) => {
  // const [dataIndex, setdataIndex] = useState([]);

  // useEffect(() => {
    // axios.get("https://api.alternative.me/fng/?limit=10&format=json")
    //   .then((data) => setdataIndex(data.data.data))
    //   .catch((error) => console.log(error));

    const {data : dataIndex, isLoading} = useQuery(['fearGreedData'], () => {
      return axios.get("https://api.alternative.me/fng/?limit=10&format=json")
      .then((res) => res.data.data)
      // .then((res) => console.log(res.data.data))
      })
    
  // }, []);

  

  return (
    <div
      className=" 
            cryptocard-grad
            lg:w-[1000px] lg:h-[350px]
            md:w-[700px] md:h-[400px]
            w-[450px] h-[400px]
            mt-5 rounded-lg 
            text-white z-[1]
            pt-3 pb-5 ml-2"
    >
      <h1 className="font-semibold lg:text-2xl md:text-xl text-[16px] text-center mx-2">
        Fear / Greed Index
      </h1>
      {isLoading ? (
          <Loader></Loader>
        ) : (
          <div className="flex flex-col flex-wrap h-full items-center">
        <div
          className=" absolute z-[2] lg:mt-[20px] md:mt-[40px] mt-[60px]
                        lg:w-[calc(200px*1.4)] lg:h-[calc(100px*1.4)]
                        md:w-[calc(200px*1.4)] md:h-[calc(100px*1.4)]
                        w-[calc(200px*1)] h-[calc(100px*1)]
                        meter-bgMain"
        ></div>

        <div
          className=" absolute z-[0] lg:mt-[30px] md:mt-[50px] mt-[67.5px]
                        lg:w-[calc(200px*1.3)] lg:h-[calc(100px*1.3)]
                        md:w-[calc(200px*1.3)] md:h-[calc(100px*1.3)]
                        w-[calc(200px*0.92)] h-[calc(100px*0.92)]
                        meter-bg"
        ></div>

        <div
          className=" z-[1] lg:mt-[40px] md:mt-[60px] mt-[75px]
                        lg:w-[calc(200px*1.2)] lg:h-[calc(100px*1.2)]
                        md:w-[calc(200px*1.2)] md:h-[calc(100px*1.2)]
                        w-[calc(200px*0.85)] h-[calc(100px*0.85)] 
                        meter"
        ></div>
        {/* parseInt(dataIndex.slice(0,1).map(e => e.value)) */}
        
        <MyElement
          data-rotation-angle="5"
          rotationAngle={`${
            (parseInt(dataIndex.slice(0, 1).map((e) => e.value)) / 100) * 180 -
            90
          }deg`}
          className={`dial bg-[#ced7e0] lg:mt-[40px] md:mt-[60px] mt-[80px]
                            absolute z-[4]
                            lg:w-[50px] lg:h-[120px]
                            md:w-[50px] md:h-[120px]
                            w-[50px] h-[80px]
                            border-[2px]
                            duration-100 origin-bottom border-[#ced7e0]`}
        ></MyElement>

        <div
          className="lg:mt-[150px] md:mt-[170px] mt-[150px]
                         absolute w-[20px] h-[20px] bg-[#062c43] rounded-full
                        border-[5px] border-[#9ccddc] z-[4]"
        ></div>
        {dataIndex.slice(0, 1).map((e) => (
          <div key={e.value}
            className=" bg-[#062c43] 
                                lg:w-[250px] lg:h-[50px] 
                                md:w-[250px] md:h-[50px]   
                                w-[140px] h-[60px] rounded-lg
                                border-[1px] border-[#9ccddc] mt-[40px]
                                flex lg:flex-row md:flex-row flex-col items-center justify-around"
          >
            <h1
              className={`text-glow lg:text-[16.5px] md:text-[16.5px] text-sm `}
            >
              STATUS:{" "}
              <span
                className={` ${
                  e.value_classification === "Fear" || e.value > 0 && e.value < 20
                    ? "text-[#ff4929]"
                    : e.value_classification === "Fear" || e.value > 20 && e.value < 40
                    ? "text-[#ffd429]"
                    : e.value_classification === "Neutral" || e.value > 40 && e.value < 60
                    ? "text-[#e6ff29]"
                    : e.value_classification === "Greed" || e.value > 60 && e.value < 80
                    ? "text-[#bbff29]"
                    : e.value_classification === "Greed" || e.value > 80 && e.value < 100
                    ? "text-[#97ff29]"
                    : ""
                }`}
              >
                {e.value_classification}
              </span>
            </h1>
            <h1 className="text-glow lg:text-[16.5px] md:text-[16.5px] text-sm">
              SCORE:{" "}
              <span
                className={` ${
                  e.value_classification === "Fear" || e.value > 0 && e.value < 20
                    ? "text-[#ff4929]"
                    : e.value_classification === "Fear" || e.value > 20 && e.value < 40
                    ? "text-[#ffd429]"
                    : e.value_classification === "Neutral" || e.value > 40 && e.value < 60
                    ? "text-[#e6ff29]"
                    : e.value_classification === "Greed" || e.value > 60 && e.value < 80
                    ? "text-[#bbff29]"
                    : e.value_classification === "Greed" || e.value > 80 && e.value < 100
                    ? "text-[#97ff29]"
                    : ""
                }`}
              >
                {e.value}
              </span>{" "}
            </h1>
          </div>
        ))}
        <h1 className="text-[13px] mt-4 font-semibold text-orange-400  duration-150 ease-in-out hover:scale-[1.02] ">
          Source:{" "}
          <span className="">
            <a href="https://alternative.me/crypto/fear-and-greed-index/">
              Alternative.me
            </a>{" "}
          </span>
        </h1>
      </div>
        )}
      
    </div>
  );
};
export default FearGreedIndex;
