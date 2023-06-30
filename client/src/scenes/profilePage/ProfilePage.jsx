import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserWidget from "../communityPage/communitywidgets/userWidget";
import AllPostsWidget from "../communityPage/communitywidgets/AllPostsWidget";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
<<<<<<< HEAD
=======
import MyPostWidget from "../communityPage/communitywidgets/MyPostWidget";
>>>>>>> origin/master

const ProfilePage = (props) => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
<<<<<<< HEAD
=======
  const loggedInUserId = useSelector((state) => state.user._id);
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master

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
<<<<<<< HEAD
      <div className="flex h-[100vh] w-screen  flex-col items-center bg-[#061016] px-12 pb-24 pt-12 md:flex-col md:items-center  md:px-32 lg:flex-row  lg:items-start lg:px-[10%] xl:flex-row xl:px-[15%]">
=======
      <div
        className={`lex h-[100vh] w-screen  flex-col items-center ${
          mode === "light" ? "bg-slate-300" : "bg-[#061016]"
        }  px-12 pb-24 pt-12 md:flex-col md:items-center  md:px-32 lg:flex-row  lg:items-start lg:px-[10%] xl:flex-row xl:px-[15%]`}
      >
>>>>>>> origin/master
        <Loader />;
      </div>
    );
  }

  return (
    <div
<<<<<<< HEAD
      className={`w-screen bg-[#061016] ${
=======
      className={`w-screen ${
        mode === "light" ? "bg-slate-300" : "bg-[#061016]"
      } ${
>>>>>>> origin/master
        !userId ? "h-[2000px]" : "h-[100%]"
      }   flex flex-col items-center px-12 pb-24 pt-12 md:flex-col md:items-center  md:px-32 lg:flex-row  lg:items-start lg:px-[10%] xl:flex-row xl:px-[15%]`}
    >
      <div className="mx-5 flex w-[100%] flex-col items-center justify-center lg:w-[40%] xl:w-[40%]">
        <UserWidget userId={userId} picturePath={user.picturePath} />
        {/* <FriendListWidget userId={userId} /> */}
      </div>
      <div className="mx-5 flex w-[100%] flex-col items-center justify-center lg:w-[60%] xl:w-[60%]">
        <AllPostsWidget userId={userId} isProfile />
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
