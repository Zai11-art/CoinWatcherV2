import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import axios from "axios";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
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

  // const { userName, followers, followings, bio, viewedProfile } = user;

  // console.log(picturePath);

  if (!user) {
    return (
      <aside
        className="
        mb-5 h-[100%]
        w-[90%] rounded-lg
        bg-[#062c43]  p-6
        text-white md:h-[100%]
      md:w-[90%] lg:ml-8
        lg:h-[100%]
        lg:w-[50%] xl:ml-12 xl:h-[100%]
         xl:w-[45%]"
      >
        <Loader />
      </aside>
    );
  }

  const { userName, bio, friends, followers } = user;

  return (
    <aside
      className="
       h-[100%]
       w-[100%]
       rounded-lg
        bg-[#062c43] p-6
      text-white md:w-[100%]
        lg:w-[100%]
         xl:w-[100%]"
    >
      <div className="flex justify-between ">
        <div className="flex items-center">
          <img
            src={`http://localhost:3001/assets/${picturePath}`}
            alt="user"
            className="h-14 w-14 rounded-full"
            onClick={(e) => {
              navigate(`/profile/${userId}`);
              navigate(0);
            }}
          />
          <div className="flex flex-col">
            <span className="ml-4 text-2xl text-white">{`${userName}`}</span>
            <span className="ml-4 text-sm italic text-gray-300">{bio}</span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-7 w-7 text-blue-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      </div>

      {/* break */}
      <div className="my-6 h-[0.1px] w-full bg-blue-300" />

      <div className="flex flex-col">
        <div className="mb-3 flex justify-between">
          <span className="text-sm text-gray-300">Bio Tag:</span>
          <span className="font-semibold">{bio}</span>
        </div>
        <div className="flex justify-between">
          <Link
            to={`/profile/${userId}/followings`}
            className="text-sm text-gray-300"
          >
            Following:
          </Link>
          <span>{friends.length}</span>
        </div>
        <div className="flex justify-between">
          <Link
            to={`/profile/${userId}/followers`}
            className="text-sm text-gray-300"
          >
            Followers:
          </Link>
          <span>{followers.length}</span>
        </div>
      </div>

      {/* break */}
      <div className="mb-6 h-[0.1px] w-full bg-blue-300" />

      <div className="items-around flex flex-col rounded-lg bg-[#051925] p-1 pb-4">
        <div className="my-2 flex justify-center  text-blue-200">
          <span className="text-xl">
            <ion-icon name="eye-outline"></ion-icon>
          </span>
          <h1 className="ml-2 font-bold">Top WatchList</h1>
        </div>
        <div className="flex h-full w-full flex-wrap justify-center ">
          <div className="m-1 h-9 w-[47%] rounded-lg bg-[#054569] lg:w-[90%] xl:w-[90%]"></div>
          <div className="m-1 h-9 w-[47%] rounded-lg bg-[#054569] lg:w-[90%] xl:w-[90%]"></div>
          <div className="m-1 h-9 w-[47%] rounded-lg bg-[#054569] lg:w-[90%] xl:w-[90%]"></div>
          <div className="m-1 h-9 w-[47%] rounded-lg bg-[#054569] lg:w-[90%] xl:w-[90%]"></div>
          <div className="m-1 h-9 w-[47%] rounded-lg bg-[#054569] lg:w-[90%] xl:w-[90%]"></div>
        </div>
      </div>
    </aside>
  );
};

export default UserWidget;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
