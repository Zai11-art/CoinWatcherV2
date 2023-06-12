import React from "react";
import { inView, animate } from "motion";

inView("animateCont", ({ target }) => {
  animate(
    target.querySelector("#animate"),
    { opacity: 1, transform: "none" },
    { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

const TestPage = () => {
  return (
    <div className="h-[6000px] w-screen text-white ">
      <div
        className="mb-[750px] h-[200px] w-[500px] bg-[red] "
        id="animate"
      >
        Some Text
      </div>

      <div className="mb-[750px] h-[200px] w-[500px] bg-[red]" id="animate">
        weheheh
      </div>
    </div>
  );
};

export default TestPage;
