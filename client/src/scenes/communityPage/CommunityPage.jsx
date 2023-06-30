import React from "react";
import UserWidget from "./communitywidgets/userWidget";
import MyPostWidget from "./communitywidgets/MyPostWidget";
import TopCoinWidget from "./communitywidgets/TopCoinWidget";
import TrendingCoinWidget from "./communitywidgets/TrendingCoinWidget";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import AllPostsWidget from "./communitywidgets/AllPostsWidget";
import FriendListWidget from "./communitywidgets/FriendListWidget";
import { useEffect } from "react";

const CommunityPage = (props) => {
  const { _id, picturePath } = useSelector((state) => state.user);
<<<<<<< HEAD

  return (
    <div
      className={`w-screen bg-[#061016] pb-[400px] ${
        !_id ? "h-[2000px]" : "h-[100%]"
      } flex flex-col items-center justify-around px-2 py-12 md:flex-col md:items-center md:px-6 lg:flex-row lg:items-start lg:px-[5%] xl:px-[10%] `}
=======
  const mode = useSelector((state) => state.mode);
  return (
    <div
      className={`w-[screen] ${
        mode === "light" ? "bg-slate-300" : "bg-[#061016]"
      }  pb-[400px] ${
        !_id ? "h-[2000px]" : "h-[100%]"
      } flex flex-col items-center justify-around px-2 py-12 md:flex-col md:items-center md:px-6 lg:flex-col xl:items-start lg:items- lg:px-[10%] xl:flex-row xl:px-[10%] `}
>>>>>>> origin/master
    >
      <div
        className="
        mb-5 h-[100%]
        w-[90%] md:h-[100%]
        md:w-[90%] lg:h-[100%]
<<<<<<< HEAD
        lg:w-[60%] xl:h-[100%] xl:w-[60%]"
=======
        lg:w-[90%] xl:h-[100%] xl:w-[60%]"
>>>>>>> origin/master
      >
        <UserWidget userId={_id} picturePath={picturePath} />
      </div>

      <div
        className="
        h-[100%] w-[90%]
        pb-2 lg:mx-5"
      >
        <MyPostWidget picturePath={picturePath} />

        <div className="h-[2000pxflex w-full flex-col items-center justify-center">
          <AllPostsWidget userId={_id} />
        </div>
      </div>

      <div
<<<<<<< HEAD
        className="
        chart flex
        h-[300px] w-[90%]
        flex-col rounded-2xl
        bg-[#051925] md:h-[100%]
        md:w-[90%] lg:mr-4 lg:h-[100%]
        lg:w-[25%] xl:h-[100%] xl:w-[25%] "
=======
        className={`
         flex
        h-[300px] w-[90%]
        flex-col 
         md:h-[100%]
        md:w-[90%] lg:mr-4 lg:h-[100%]
        lg:w-[90%] xl:h-[100%] xl:w-[25%] `}
>>>>>>> origin/master
      >
        <div className="h-[425px] ">
          <Carousel slide={true} className="" leftControl=" " rightControl=" ">
            <TopCoinWidget />
            <TrendingCoinWidget />
          </Carousel>
        </div>
        <FriendListWidget userId={_id} />
      </div>
    </div>
  );
};

export default CommunityPage;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
