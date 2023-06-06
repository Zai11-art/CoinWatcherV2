import React from "react";
import Form from "./Form";
import { useState } from "react";

const commonstyles =
  "rounded-t-lg mt-[4rem] md:w-[500px] md:h-[100px] w-[400px] h-[100px]";

const RegisterPage = (props) => {
  props.funcNav(true);
  return (
    <div className="w-full h-[100vh] bg-[#051925] flex items-center flex-col ">
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
