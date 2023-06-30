import React from "react";
import { Link } from "react-router-dom";

const SectionSideBar = ({sectionLinks}) => {
  return (
    <div class="h-[100vh] md:w-[250px] w-[200px] 
    left-0 
    top-24 
    xl:sticky lg:sticky md:sticky absolute
    bg-[#0f171b] shadow-2xl">
      <ul className="mt-12 px-6">
        <div className="flex">
          <span className="text-white text-2xl">
            <ion-icon name="code-working"></ion-icon>
          </span>
          <span className="text-white  text-xl font-bold mb-8 ml-1">
            Sections
          </span>
        </div>
        {sectionLinks.map((section) => (
          <li
            className="text-white text-md my-3 font-semibold
              hover:scale-[1.05] cursor-pointer transition-all ease-in-out"
          >
            <Link to={`/Learn/${section.link}`}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionSideBar;
