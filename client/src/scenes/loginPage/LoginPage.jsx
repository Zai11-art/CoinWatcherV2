import React from "react";
import Form from "./Form";
import { useSelector } from "react-redux";

const commonstyles =
  "rounded-t-lg mt-[4rem] md:w-[500px] md:h-[100px] w-[400px] h-[100px]";

const RegisterPage = (props) => {
  const mode = useSelector((state) => state.mode)
  return (
    <div className={`flex h-[100vh] w-full flex-col items-center ${mode === 'light' ? "bg-slate-300/95" : "bg-[#051925]"}`}>
      <Form></Form>
    </div>
  );
};

export default RegisterPage;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
