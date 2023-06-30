import { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../../components/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const MyElement = styled.div`
  transform: rotate(${(props) => props.rotationAngle || "0deg"});
`;

const FearGreedIndex = (props) => {
  const { data: dataIndex, isLoading } = useQuery(["fearGreedData"], () => {
    return axios
      .get("https://api.alternative.me/fng/?limit=10&format=json")
      .then((res) => res.data.data);
  });

  return (
    <div
      className=" 
            cryptocard-grad
            z-[1] ml-2
            mt-5 h-[400px]
            w-[450px] rounded-lg
            pb-5 pt-3 
            text-white md:h-[400px]
            md:w-[700px] lg:h-[350px] lg:w-[1000px]"
    >
      <h1 className="mx-2 text-center text-[16px] font-semibold md:text-xl lg:text-2xl">
        Fear / Greed Index
      </h1>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="flex h-full flex-col flex-wrap items-center">
          <div
            className=" meter-bgMain absolute z-[2] mt-[60px] h-[calc(100px*1)]
                        w-[calc(200px*1)] md:mt-[40px]
                        md:h-[calc(100px*1.4)] md:w-[calc(200px*1.4)]
                        lg:mt-[20px] lg:h-[calc(100px*1.4)]
                        lg:w-[calc(200px*1.4)]"
          ></div>

          <div
            className=" meter-bg absolute z-[0] mt-[67.5px] h-[calc(100px*0.92)]
                        w-[calc(200px*0.92)] md:mt-[50px]
                        md:h-[calc(100px*1.3)] md:w-[calc(200px*1.3)]
                        lg:mt-[30px] lg:h-[calc(100px*1.3)]
                        lg:w-[calc(200px*1.3)]"
          ></div>

          <div
            className=" meter z-[1] mt-[75px] h-[calc(100px*0.85)]
                        w-[calc(200px*0.85)] md:mt-[60px]
                        md:h-[calc(100px*1.2)] md:w-[calc(200px*1.2)]
                        lg:mt-[40px] lg:h-[calc(100px*1.2)] 
                        lg:w-[calc(200px*1.2)]"
          ></div>

          <MyElement
            data-rotation-angle="5"
            rotationAngle={`${
              (parseInt(dataIndex.slice(0, 1).map((e) => e.value)) / 100) *
                180 -
              90
            }deg`}
            className={`dial absolute z-[4] mt-[80px] h-[80px]
                            w-[50px] origin-bottom
                            border-[2px] border-[#ced7e0]
                            bg-[#ced7e0] duration-100
                            md:mt-[60px] md:h-[120px]
                            md:w-[50px]
                            lg:mt-[40px] lg:h-[120px] lg:w-[50px]`}
          ></MyElement>

          <div
            className="absolute z-[4] mt-[150px]
                         h-[20px] w-[20px] rounded-full border-[5px] border-[#9ccddc]
                        bg-[#062c43] md:mt-[170px] lg:mt-[150px]"
          ></div>
          {dataIndex.slice(0, 1).map((e) => (
            <div
              key={e.value}
              className=" mt-[40px] 
                                flex h-[60px] 
                                w-[140px] flex-col   
                                items-center justify-around rounded-lg
                                border-[1px] border-[#9ccddc] bg-[#062c43]
                                md:h-[50px] md:w-[250px] md:flex-row lg:h-[50px] lg:w-[250px] lg:flex-row"
            >
              <h1
                className={`text-glow text-sm md:text-[16.5px] lg:text-[16.5px] `}
              >
                STATUS:{" "}
                <span
                  className={` ${
                    e.value_classification === "Fear" ||
                    (e.value > 0 && e.value < 20)
                      ? "text-[#ff4929]"
                      : e.value_classification === "Fear" ||
                        (e.value > 20 && e.value < 40)
                      ? "text-[#ffd429]"
                      : e.value_classification === "Neutral" ||
                        (e.value > 40 && e.value < 60)
                      ? "text-[#e6ff29]"
                      : e.value_classification === "Greed" ||
                        (e.value > 60 && e.value < 80)
                      ? "text-[#bbff29]"
                      : e.value_classification === "Greed" ||
                        (e.value > 80 && e.value < 100)
                      ? "text-[#97ff29]"
                      : ""
                  }`}
                >
                  {e.value_classification}
                </span>
              </h1>
              <h1 className="text-glow text-sm md:text-[16.5px] lg:text-[16.5px]">
                SCORE:{" "}
                <span
                  className={` ${
                    e.value_classification === "Fear" ||
                    (e.value > 0 && e.value < 20)
                      ? "text-[#ff4929]"
                      : e.value_classification === "Fear" ||
                        (e.value > 20 && e.value < 40)
                      ? "text-[#ffd429]"
                      : e.value_classification === "Neutral" ||
                        (e.value > 40 && e.value < 60)
                      ? "text-[#e6ff29]"
                      : e.value_classification === "Greed" ||
                        (e.value > 60 && e.value < 80)
                      ? "text-[#bbff29]"
                      : e.value_classification === "Greed" ||
                        (e.value > 80 && e.value < 100)
                      ? "text-[#97ff29]"
                      : ""
                  }`}
                >
                  {e.value}
                </span>{" "}
              </h1>
            </div>
          ))}
          <h1 className="mt-4 text-[13px] font-semibold text-orange-400  duration-150 ease-in-out hover:scale-[1.02] ">
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
