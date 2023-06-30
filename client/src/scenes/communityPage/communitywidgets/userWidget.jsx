import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
<<<<<<< HEAD

const UserWidget = ({ userId, picturePath }) => {
=======
import NotificationPopUp from "../../../components/NotificationPopUp";
import { toast } from "react-toastify";
import { useId } from "react";

const UserWidget = ({ userId, picturePath }) => {
  const keyId = useId();
>>>>>>> origin/master
  const [user, setUser] = useState(null);
  const [watchList, setwatchList] = useState([]);
  const [showConfirmationList, setShowConfirmationList] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
<<<<<<< HEAD
=======
  const isAuth = Boolean(useSelector((state) => state.token));
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master

  const { data: coinList } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  const getWatchList = async () => {
<<<<<<< HEAD
    const response = await fetch(
      `http://localhost:3001/users/${loggedInUserId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const fetchedWatchList = await response.json();
    setwatchList(fetchedWatchList);
    console.log(fetchedWatchList);
=======
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const fetchedWatchList = await response.json();
    setwatchList(fetchedWatchList);
>>>>>>> origin/master
  };

  const filteredCoins = coinList?.filter((coin) => {
    return watchList?.coinWatchList?.some(
      (coinId) => coinId?.coinId === coin?.id
    );
  });

  const addToWatchList = async (coin) => {
<<<<<<< HEAD
    console.log(coin);
=======
>>>>>>> origin/master
    const data = coin;
    const response = await fetch(
      `http://localhost:3001/users/${loggedInUserId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const watchListData = await response.json();
<<<<<<< HEAD
    console.log(watchListData);
=======

>>>>>>> origin/master
    getWatchList();
  };

  const removetoWatchList = async (coin) => {
<<<<<<< HEAD
    console.log(coin);
=======
>>>>>>> origin/master
    const data = coin;
    const response = await fetch(
      `http://localhost:3001/users/${loggedInUserId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const watchListData = await response.json();
<<<<<<< HEAD
    console.log(watchListData);
=======

>>>>>>> origin/master
    getWatchList();
  };

  useEffect(() => {
    getWatchList();
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

<<<<<<< HEAD
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
=======
  if (!user) {
    return (
      <aside
        className={`
        mb-5 h-[100%]
        w-[90%] rounded-lg
        ${
          mode === "light" ? "bg-slate-300" : "bg-[#062c43] text-white"
        }   shadow-xx
         p-6
        md:h-[100%] md:w-[90%]
        lg:ml-8 lg:h-[100%]
        lg:w-[50%] xl:ml-12 xl:h-[100%]
         xl:w-[45%]`}
>>>>>>> origin/master
      >
        <Loader />
      </aside>
    );
  }

  const { userName, bio, friends, followers } = user;

  return (
    <>
<<<<<<< HEAD
      <aside
        className="
       h-[100%]
       w-[100%]
       rounded-lg
        bg-[#062c43] p-6
      text-white md:w-[100%]
        lg:w-[100%]
         xl:w-[100%]"
=======
      <div className="h-24 w-full rounded-t-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
      <aside
        className={`
       h-[100%]
       w-[100%]
       rounded-b-lg
       ${
         mode === "light"
           ? "bg-slate-200 text-blue-900"
           : "bg-[#062c43] text-white"
       } px-6 pb-6 pt-4
       shadow-xl
        md:w-[100%] lg:w-[100%]
         xl:w-[100%]`}
>>>>>>> origin/master
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
<<<<<<< HEAD
              <span className="ml-4 text-2xl text-white">{`${userName}`}</span>
              <span className="ml-4 text-sm italic text-gray-300">{bio}</span>
            </div>
          </div>
          <div>
=======
              <span className="ml-4 text-2xl">{`${userName}`}</span>
              <span className="ml-4 text-sm italic">{bio}</span>
            </div>
          </div>
          <div className="flex items-center">
>>>>>>> origin/master
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
<<<<<<< HEAD
              className="h-7 w-7 text-blue-200"
=======
              className="h-7 w-7"
>>>>>>> origin/master
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
<<<<<<< HEAD
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
=======
        <div
          className={`my-6 h-[0.1px] w-full ${
            mode === "light" ? "bg-slate-400" : "bg-blue-300"
          } `}
        />

        <div
          className={` flex flex-row items-center 
        justify-around rounded-full ${
          mode === "light"
            ? "newscard-filter-light text-blue-900 "
            : "follower-card-gradient bg-[#062c43] text-white"
        }  p-1 py-2`}
        >
          <div className="flex flex-col items-center justify-center ">
            <span className="mb-1 text-sm font-semibold ">Bio</span>
            <span className="mb-1 font-semibold ">{bio}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              to={`/profile/${userId}/followings`}
              className="mb-1 flex text-sm font-semibold  transition-all  ease-in-out hover:text-blue-200 hover:underline"
            >
              Following
            </Link>
            <span className="mb-1 font-semibold ">{friends.length}</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link
              to={`/profile/${userId}/followers`}
              className="mb-1 flex text-sm font-semibold  transition-all  ease-in-out hover:text-blue-200 hover:underline"
            >
              Followers
            </Link>
            <span className="mb-1 font-semibold ">{followers.length}</span>
>>>>>>> origin/master
          </div>
        </div>

        {/* break */}
      </aside>
      <div className="mb-6 h-[0.1px] w-full bg-blue-300" />

<<<<<<< HEAD
      <div className="items-around flex w-full flex-col rounded-lg bg-[#062c43]  pb-4">
        <div className="my-2 flex justify-center  text-blue-200">
          <span className="text-xl">
            <ion-icon name="eye-outline"></ion-icon>
          </span>
          <h1 className="ml-2 font-bold">Top WatchList</h1>
        </div>
        <div className="flex h-full w-full flex-col items-center bg-[#041120] py-4 md:flex-col lg:flex-col xl:flex-col">
          {filteredCoins?.length > 0 ? (
            <>
              {filteredCoins?.slice(0,5).map((data) => (
                <div className=" mx-2 my-2 flex h-[100%] w-[90%] items-center justify-around rounded-lg bg-[#072233] p-3 shadow-md shadow-blue-300/40 md:w-[90%] lg:w-[95%] xl:w-[95%]">
=======
      {isAuth}
      <div
        className={`items-around mb-6 flex w-full flex-col rounded-lg shadow-xl ${
          mode === "light"
            ? "text-glow bg-slate-200 text-blue-900"
            : "bg-[#062c43] text-white"
        }  pb-4`}
      >
        <div className="my-3 flex justify-center">
          <span className="text-2xl">
            <ion-icon name="eye-outline"></ion-icon>
          </span>
          <h1 className="ml-2 text-xl font-bold">My WatchList</h1>
        </div>
        <div
          className={`flex h-full w-full flex-col items-center ${
            mode === "light"
              ? "bg-slate-300/60 text-slate-900"
              : "bg-[#041120] text-white"
          }  py-4 md:flex-col lg:flex-col xl:flex-col`}
        >
          {filteredCoins?.length > 0 ? (
            <>
              {filteredCoins?.slice(0, 5).map((data, index) => (
                <div
                  key={`${keyId}-${index}`}
                  className={`mx-2 my-2 flex h-[100%] w-[90%] items-center justify-around rounded-lg ${
                    mode === "light"
                      ? "viewcard-filter-light"
                      : "bg-[#072233] shadow-blue-300/40"
                  }  p-2 shadow-md  md:w-[90%] lg:w-[95%] xl:w-[95%]`}
                >
>>>>>>> origin/master
                  {watchList?.coinWatchList?.some(
                    (coin) => coin.coinId === data.id
                  ) ? (
                    <>
<<<<<<< HEAD
                      <button
                        onClick={() => {
                          removetoWatchList(data);
                          setShowConfirmationList(!showConfirmationList);
                        }}
                        className="mr-3 border-r-[1px] pr-1 text-[1.1rem] text-yellow-200 hover:text-blue-400"
                      >
                        <ion-icon name="star"></ion-icon>
                      </button>
=======
                      <div className="group relative">
                        <button
                          data-popover-target="popover-default"
                          onClick={() => {
                            removetoWatchList(data);
                            toast.success(
                              `${data.name} Coin Removed From Watchlist.`,
                              {
                                theme: `${
                                  mode === "light" ? "light" : "colored"
                                }`,
                              }
                            );
                            setShowConfirmationList(!showConfirmationList);
                          }}
                          className="mr-3 border-r-[1px] pr-1 text-[1.1rem] text-yellow-200 hover:text-red-400"
                        >
                          <ion-icon name="star"></ion-icon>
                        </button>
                        <div
                          className={`absolute z-[100] hidden w-[150px] rounded-lg ${
                            mode === "light"
                              ? "text-glow bg-slate-100 text-blue-900 shadow-xl"
                              : "bg-[#06132b] text-red-200 shadow-red-800/80"
                          }  p-3 shadow-md  group-hover:block`}
                        >
                          <p className="font-bold ">Press to remove.</p>
                        </div>
                      </div>
>>>>>>> origin/master
                    </>
                  ) : (
                    // Render if the coin is not in the watchlist
                    <button
<<<<<<< HEAD
                      onClick={() => addToWatchList(data)}
=======
                      onClick={() => {
                        addToWatchList(data);
                        toast.success(
                          `${data.name} Coin Added To Watchlist. `,
                          { theme: `${mode === "light" ? "light" : "colored"}` }
                        );
                      }}
>>>>>>> origin/master
                      className="mr-3 border-r-[1px] border-r-slate-500 pr-1 text-[1.1rem] hover:text-blue-400"
                    >
                      <ion-icon name="star-outline"></ion-icon>
                    </button>
                  )}
<<<<<<< HEAD
                  <span className="w-[15%] font-bold text-slate-300 md:text-[0.94rem] lg:text-[0.75rem] xl:text-sm ">
=======
                  <span className="w-[15%] font-bold md:text-[0.94rem] lg:text-[0.75rem] xl:text-sm ">
>>>>>>> origin/master
                    # {data.market_cap_rank}
                  </span>
                  <div className="w-[10%]">
                    <img
                      className="h-7 w-7 md:h-8 md:w-8 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
                      src={data.image}
                      alt="coin_image"
                    />
                  </div>
<<<<<<< HEAD
                  <span className="w-[20%] font-bold text-slate-300 md:text-[0.94rem] lg:text-[0.75rem] xl:text-sm ">
                    {data?.symbol?.toUpperCase()}
                  </span>
                  <span className="overflow-invisible w-[20%] text-sm font-semibold text-slate-300 md:text-[0.94rem] lg:text-[0.75rem] ">
=======
                  <span className="w-[20%] font-bold md:text-[0.94rem] lg:text-[0.75rem] xl:text-sm ">
                    {data?.symbol?.toUpperCase()}
                  </span>
                  <span className="overflow-invisible w-[20%] text-sm font-semibold md:text-[0.94rem] lg:text-[0.75rem] ">
>>>>>>> origin/master
                    ${data?.current_price?.toLocaleString()}
                  </span>
                  <div className="w-[100px] rounded-md bg-[#081529] p-1 md:w-[110px] lg:w-[70px] xl:w-[90px]">
                    <Sparklines data={data.sparkline_in_7d.price}>
                      {data.current_price > data.sparkline_in_7d.price[0] ? (
                        <SparklinesLine
                          style={{
                            stroke: "#4dff58",
                            fill: "#4dff58",
                            fillOpacity: "0.2",
                          }}
                        />
                      ) : (
                        <SparklinesLine
                          style={{
                            stroke: "#fc3a3a",
                            fill: "#fc3a3a",
                            fillOpacity: "0.2",
                          }}
                        />
                      )}
                    </Sparklines>
                  </div>
                </div>
              ))}
            </>
          ) : (
<<<<<<< HEAD
            <div className="flex h-[400px] w-full items-center justify-center flex-col">
              <span className="bg-slate-699 p-2 text-xl font-bold text-slate-200">
=======
            <div
              className={`flex h-[200px] w-full flex-col items-center justify-center ${
                mode === "light"
                  ? "text-glow bg-slate-200 text-blue-900"
                  : "bg-[#050c14]"
              }`}
            >
              <span className="bg-slate-699 p-2 text-xl font-bold">
>>>>>>> origin/master
                No coins yet
              </span>
              <Link to="/Cryptocurrencies">
                <button
<<<<<<< HEAD
                  className="mb-2 mt-6 flex justify-center rounded-lg  
                            bg-blue-500 px-3 py-1 text-white duration-200 ease-in-out
                            hover:bg-blue-100 hover:text-blue-500 md:text-[15px] lg:text-[13px] xl:text-[13px]"
                >
                  View all coins here
=======
                  className={`py-1duration-200 mb-2 mt-6 flex justify-center rounded-lg px-3 font-bold
                              ease-in-out hover:underline
                             md:text-[15px] lg:text-[13px] xl:text-[13px] ${
                               mode === "light"
                                 ? ""
                                 : "text-blue-200 hover:text-blue-600 "
                             }`}
                >
                  View all crypto here
>>>>>>> origin/master
                </button>
              </Link>
            </div>
          )}
        </div>
<<<<<<< HEAD
        <div></div>
=======

        <div className="mt-3 flex w-[100%] items-center justify-center">
          {/* click */}
          <Link
            to={`/profile/${userId}/watchlist`}
            className="m-2 flex items-center justify-center rounded-lg bg-blue-500 p-1 px-2 transition-all ease-in-out hover:bg-blue-300 hover:text-blue-900"
          >
            <div className="flex text-[0.8rem] font-bold text-slate-200">
              view this watchlist
            </div>
            <span className="flex text-xl text-white">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </Link>
        </div>
>>>>>>> origin/master
      </div>
    </>
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
{
}
