import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserWidget from "../components/communitywidgets/userWidget";
import FriendListWidget from "../components/communitywidgets/FriendListWidget";
import MyPostWidget from "../components/communitywidgets/MyPostWidget";
import AllPostsWidget from "../components/communitywidgets/AllPostsWidget";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ProfilePage = () => {

  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return (
      <div className="bg-[#061016] w-screen h-[100vh]  flex xl:flex-row lg:flex-row md:flex-col flex-col lg:items-start md:items-center items-center  xl:px-[15%] lg:px-[10%]  md:px-32 px-12 pt-12 pb-24">
        <Loader />;
      </div>
    );
  }

  return (
    <div
      className={`bg-[#061016] w-screen ${
        !userId ? "h-[2000px]" : "h-[100%]"
      }   flex xl:flex-row lg:flex-row md:flex-col flex-col lg:items-start md:items-center items-center  xl:px-[15%] lg:px-[10%]  md:px-32 px-12 pt-12 pb-24`}
    >
      <div className="flex flex-col justify-center items-center xl:w-[40%] lg:w-[40%] w-[100%] mx-5">
        <UserWidget userId={userId} picturePath={user.picturePath} />
        {/* <FriendListWidget userId={userId} /> */}
      </div>
      <div className="flex flex-col justify-center items-center xl:w-[60%] lg:w-[60%] w-[100%] mx-5">
        <AllPostsWidget  userId={userId} isProfile />
      </div>
    </div>
  );
};

export default ProfilePage;

{
  /* <div className="flex flex-col justify-center items-center">
        <UserWidget userId={userId} picturePath={user.picturePath} />
        <FriendListWidget userId={userId} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <AllPostsWidget userId={userId} isProfile />
      </div> */
}
