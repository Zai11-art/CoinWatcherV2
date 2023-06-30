import React from "react";
import { useState } from "react";

const SectionBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="top-[70px] left-0 shadow-2xl 
  w-full sticky bg-[#062436] h-12 z-[50] flex flex-row"
    >
      <div
        className="text-4xl w-[20px] text-blue-300 ml-3 cursor-pointer
    hover:text-blue-100 transition-all ease-in-out"
      >
        <ion-icon
          onClick={() => setOpen(!open)}
          name={open ? "close" : "list-outline"}
        ></ion-icon>
      </div>
      <span className="text-white text-glow w-[50px] ml-7 mt-1">Learn</span>
    </div>
  );
};

export default SectionBar;
