import React from "react";
import UserWidget from "./communitywidgets/userWidget";
import MyPostWidget from "./communitywidgets/MyPostWidget";
import TopCoinWidget from "./communitywidgets/TopCoinWidget";
import TrendingCoinWidget from "./communitywidgets/TrendingCoinWidget";
import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";
import AllPostsWidget from "./communitywidgets/AllPostsWidget";
import FriendListWidget from "./communitywidgets/FriendListWidget";

const CommunityPage = (props) => {
  props.funcNav(true);
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div
      className={`bg-[#061016] w-screen ${
        !_id ? "h-[2000px]" : "h-[100%]"
      } flex lg:flex-row md:flex-col flex-col justify-around lg:items-start md:items-center items-center xl:px-[10%] lg:px-[5%] md:px-6 px-2 py-12 `}
    >
      <div
        className="
        xl:h-[100%] xl:w-[60%]
        lg:h-[100%] lg:w-[60%]
        md:h-[100%] md:w-[90%]
        h-[100%] w-[90%] mb-5"
      >
        <UserWidget userId={_id} picturePath={picturePath} />
      </div>

      <div
        className="
        h-[100%] w-[90%]
        lg:mx-5 pb-2"
      >
        <MyPostWidget picturePath={picturePath} />

        <div className="w-full h-[2000pxflex flex-col items-center justify-center">
          <AllPostsWidget userId={_id} />
        </div>
      </div>

      <div
        className="
        xl:h-[100%] xl:w-[25%]
        lg:h-[100%] lg:w-[25%]
        md:h-[100%] md:w-[50%]
        h-[300px] w-[90%]
      bg-[#051925] chart rounded-2xl
        lg:mr-4 flex flex-col "
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
