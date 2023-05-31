import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
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
        xl:h-[100%] xl:w-[45%]
        lg:h-[100%] lg:w-[50%]
        md:h-[100%]  md:w-[90%]
        h-[100%] w-[90%]
      bg-[#062c43] p-6
        rounded-lg
        xl:ml-12 lg:ml-8 mb-5
         text-white"
      >
        <Loader />
      </aside>
    );
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <aside
      className="
       xl:w-[100%]
       lg:w-[100%]
       md:w-[100%]
        h-[100%] w-[100%]
      bg-[#062c43] p-6
        rounded-lg
         text-white"
    >
      <div className="flex justify-between ">
        <div className="flex items-center">
          <img
            src={`http://localhost:3001/assets/${picturePath}`}
            alt="user"
            className="w-14 h-14 rounded-full"
            onClick={() => navigate(`/profile/${userId}`)}
          />
          <div className="flex flex-col">
            <span className="text-white ml-4 text-2xl">{`${firstName} ${lastName}`}</span>
            <span className="text-gray-300 ml-4 text-sm italic">
              {occupation}
            </span>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 text-blue-200"
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
      <div className="bg-blue-300 w-full h-[0.1px] my-6" />

      <div className="flex flex-col">
        <div className="flex justify-between mb-3">
          <span className="text-gray-300 text-sm">Location:</span>
          <span className="font-semibold">{location}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-300 text-sm">Occupation:</span>
          <span>{occupation}</span>
        </div>
      </div>

      {/* break */}
      <div className="bg-blue-300 w-full h-[0.1px] my-6" />

      <div className="flex flex-col">
        <div className="flex justify-between mb-3">
          <div className="flex">
            <span className="text-lg">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <span className="text-gray-300 text-sm ml-2">Profile Views:</span>
          </div>
          <span className="font-semibold">{viewedProfile}</span>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex">
            <span className="text-lg">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <span className="text-gray-300 text-sm ml-2">Impressions:</span>
          </div>
          <span className="font-semibold">{impressions}</span>
        </div>
        <div className="flex justify-between mb-3">
          <div className="flex">
            <span className="text-lg">
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <span className="text-gray-300 text-sm ml-2">Friends:</span>
          </div>
          <span className="font-semibold">{friends.length}</span>
        </div>
      </div>

      {/* break */}
      <div className="bg-blue-300 w-full h-[0.1px] mb-6" />

      <div className="flex flex-col items-around bg-[#051925] p-1 pb-4 rounded-lg">
        <div className="flex text-blue-200 justify-center  my-2">
          <span className="text-xl">
            <ion-icon name="eye-outline"></ion-icon>
          </span>
          <h1 className="font-bold ml-2">Top WatchList</h1>
        </div>
        <div className="w-full h-full flex flex-wrap justify-center ">
          <div className="xl:w-[90%] lg:w-[90%] w-[47%] h-9 bg-[#054569] m-1 rounded-lg"></div>
          <div className="xl:w-[90%] lg:w-[90%] w-[47%] h-9 bg-[#054569] m-1 rounded-lg"></div>
          <div className="xl:w-[90%] lg:w-[90%] w-[47%] h-9 bg-[#054569] m-1 rounded-lg"></div>
          <div className="xl:w-[90%] lg:w-[90%] w-[47%] h-9 bg-[#054569] m-1 rounded-lg"></div>
          <div className="xl:w-[90%] lg:w-[90%] w-[47%] h-9 bg-[#054569] m-1 rounded-lg"></div>
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
