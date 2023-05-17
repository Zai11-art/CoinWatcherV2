import React from "react";
import Form from "../components/Form";

const commonstyles = "rounded-t-lg mt-[4rem] md:w-[500px] md:h-[100px] w-[400px] h-[100px]"

const LoginPage = () => {
  return (
    <div className="w-full h-[100vh] bg-[#051925] flex items-center flex-col ">
      <div className={`${commonstyles} homePageCard-filter shadow-lg  absolute z-[2]`}></div>
      <div className={`${commonstyles} h-[100px] homePageCard  absolute z-[1]`}></div>
      <div className={`${commonstyles} h-[100px] z-[3] p-6`}>
        <h1 className="text-[white] text-glow text-4xl font-bold">
          REGISTER
        </h1>
      </div>
      <div className=" rounded-t-none md:w-[500px] md:h-[560px] w-[400px] h-[560px] bg-[#062c43] p-6 shadow-lg shadow-cyan-500/30">
        <Form></Form>
      </div>
    </div>
  );
};

export default LoginPage;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
