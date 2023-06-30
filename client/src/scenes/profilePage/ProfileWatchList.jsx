import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
  Colors,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { toast } from "react-toastify";
import CoinTable from "../../components/CoinTable";

const options = {
  events: [],
};

ChartJS.register(ArcElement, Tooltip, Legend, Filler, Colors);

const ProfileWatchList = () => {
  const { userId: currentViewId } = useParams();
  const [user, setUser] = useState(null);
  const [watchList, setwatchList] = useState([]);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isAuth = Boolean(useSelector((state) => state.token));
  console.log(currentViewId);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const mode = useSelector((state) => state.mode);
  console.log(user);

  const { data: coinList } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  const getUser = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${currentViewId}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    setUser(data);
  };

  const getWatchList = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${currentViewId}`,
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
  };

  const filteredCoins = coinList?.filter((coin) => {
    return watchList?.coinWatchList?.some(
      (coinId) => coinId?.coinId === coin?.id
    );
  });

  const addToWatchList = async (coin) => {
    console.log(coin);
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
    console.log(watchListData);
    getWatchList();
  };

  const removetoWatchList = async (coin) => {
    console.log(coin);
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
    console.log(watchListData);
    getWatchList();
  };

  useEffect(() => {
    getWatchList();
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const inTheGreen = filteredCoins
    ?.map((e) => e.price_change_percentage_24h)
    .filter((e) => e > 0);
  const inTheRed = filteredCoins
    ?.map((e) => e.price_change_percentage_24h)
    .filter((e) => e < 0);

  console.log("<----coins---->");
  console.log(filteredCoins);

  return (
    <div
      className={`flex h-[100%] w-[100%] flex-col items-center ${
        mode === "light" ? "bg-slate-300" : "bg-[#031427]"
      }`}
    >
      <div className="h-[100%] pb-[500px]">
        {/* dashboard section upper section */}
        <div
          className={`mt-10 h-[590px] w-full rounded-t-xl shadow-2xl ${
            mode === "light"
              ? "viewcard-filter-light "
              : "bg-[#050c14] bg-gradient-to-r from-[#050c14] via-[#03080f] to-[#031427] text-slate-100"
          }  px-6 pt-8 md:h-[450px] lg:h-[300px] xl:h-[320px]`}
        >
          <div className="flex h-full w-full">
            <div className="flex h-full w-full flex-col justify-between md:flex-col lg:flex-col xl:flex-col">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div
                    className="mb-4 flex h-[90px] w-[90px] items-center justify-center rounded-full border-[2px] 
                    shadow-inner transition-all duration-100 ease-in-out md:w-[90px] xl:w-[100px]"
                  >
                    <img
                      src={`http://localhost:3001/assets/${user?.picturePath}`}
                      alt="user"
                      className="flex h-[70px] w-[70px] rounded-full "
                    />
                  </div>
                  <div className="mx-2 mt-1 flex  flex-col">
                    <span className="text-2xl font-bold ">
                      {user?.userName}'s dashboard
                    </span>
                    <span className=" text-sm italic">{user?.bio}</span>
                  </div>
                </div>
              </div>

              <div
                className={`flex h-[100%] w-[100%] flex-wrap justify-between pb-5 md:w-[650px] md:flex-wrap lg:w-full lg:flex-row xl:w-[100%] xl:flex-row ${
                  mode === "light" ? "text-slate-300" : "text-white"
                }`}
              >
                <div className="flex h-[130px] w-[100%] flex-row p-2 transition-all ease-in-out hover:scale-[1.03] md:h-[150px] md:w-[320px] lg:h-[150px] lg:w-[280px] xl:h-[150px] xl:w-[280px]">
                  <div
                    className={`flex w-[30%] flex-col items-center justify-center rounded-l-2xl bg-[#8a30ff] shadow-2xl shadow-purple-500/70 transition-all ease-in-out hover:border-[2px] hover:border-purple-300 hover:bg-[#030b14] hover:text-purple-200 hover:shadow-none`}
                  >
                    <span className="text-3xl">
                      <ion-icon name="star-half-outline"></ion-icon>
                    </span>
                    <span className="text-center text-[10px] font-semibold">
                      Coin in Watchlist
                    </span>
                  </div>
                  <div className="flex w-[70%] flex-row items-center justify-center rounded-r-2xl bg-gradient-to-r from-violet-800 to-purple-700 transition-all ease-in-out hover:border-[2px] hover:border-purple-300 hover:bg-none hover:text-purple-400   hover:shadow-none md:flex-col lg:flex-col xl:flex-col">
                    {filteredCoins?.length > 0 ? (
                      <>
                        <span className="mx-2 mb-1 text-[0.8rem] font-bold  md:text-[0.7rem]">
                          Coins: {filteredCoins?.length} / 20
                        </span>
                        <div className="h-[90px] w-[90px] ">
                          <Pie
                            options={options}
                            data={{
                              labels: [],
                              datasets: [
                                {
                                  label: [],
                                  data: [
                                    inTheRed?.length,
                                    20 - filteredCoins?.length,
                                  ],
                                  backgroundColor: ["#8a30ff", "#041e3b"],
                                  borderColor: ["#8a30ff", "#041e3b"],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <div className=" mt-10 flex items-center justify-center">
                        <div className="absolute flex items-center justify-center text-[0.8rem] font-bold text-[#e2dbd5]">
                          <h1>No coins listed yet</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex h-[130px] w-[100%] flex-row p-2 transition-all ease-in-out hover:scale-[1.03] md:h-[150px] md:w-[320px] lg:h-[150px] lg:w-[280px] xl:h-[150px] xl:w-[280px]">
                  <div className="flex w-[30%] flex-col items-center justify-center rounded-l-2xl bg-[#3060ff] shadow-2xl shadow-blue-500/70 transition-all ease-in-out hover:border-[2px] hover:border-blue-300 hover:bg-[#030b14] hover:text-blue-500 hover:shadow-none">
                    <span className="text-3xl">
                      <ion-icon name="create"></ion-icon>
                    </span>
                    <span className="text-center text-[10px] font-semibold">
                      Socials Stats
                    </span>
                  </div>
                  <div className="flex w-[70%] flex-row items-center justify-around rounded-r-2xl bg-gradient-to-r from-blue-800 to-blue-700 shadow-blue-500/70 transition-all ease-in-out hover:border-[2px] hover:border-blue-300 hover:bg-none hover:text-blue-500 hover:shadow-none md:flex-col lg:flex-col xl:flex-col">
                    <div className=" h-12">
                      <span className="text-[0.8rem] font-bold md:text-[0.7rem]">
                        Following
                      </span>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-bold">
                          {user?.friends?.length}
                        </span>
                      </div>
                    </div>
                    <div className=" h-12">
                      <span className="text-[0.8rem] font-bold md:text-[0.7rem]">
                        Followers
                      </span>
                      <div className="flex items-center justify-center">
                        <span className="text-sm font-bold">
                          {user?.followers?.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex h-[130px] w-[100%] flex-row p-2 transition-all ease-in-out hover:scale-[1.03] md:h-[150px] md:w-[320px] lg:h-[150px] lg:w-[280px] xl:h-[150px] xl:w-[280px]">
                  <div className="flex w-[30%] flex-col items-center justify-center rounded-l-2xl bg-[#23a59a] text-slate-200 shadow-2xl shadow-green-500/70 transition-all ease-in-out hover:border-[2px] hover:border-green-300 hover:bg-[#030b14] hover:text-green-200 hover:shadow-none">
                    <span className="text-3xl">
                      <ion-icon name="stats-chart"></ion-icon>
                    </span>
                    <span className="text-center text-[10px] font-semibold">
                      Watchlist stats
                    </span>
                  </div>
                  <div className="flex w-[70%] flex-row items-center justify-center rounded-r-2xl  bg-gradient-to-r from-cyan-800 to-cyan-700 shadow-blue-500/70 transition-all ease-in-out hover:border-[2px] hover:border-blue-300 hover:bg-none hover:text-blue-500 hover:shadow-none md:flex-col lg:flex-col xl:flex-col">
                    {filteredCoins?.length > 0 ? (
                      <>
                        {inTheGreen?.length >= inTheRed?.length ? (
                          <span className="mb-1 bg-[] text-[0.8rem] font-bold md:text-[0.7rem]">
                            {(inTheGreen?.length / filteredCoins?.length) * 100}
                            % coins in the{" "}
                            <span className="font-bold text-[#93ff9c]">
                              Green.
                            </span>
                          </span>
                        ) : (
                          <span className="mb-1 text-[0.8rem] font-bold md:text-[0.7rem]">
                            {(
                              (inTheRed?.length / filteredCoins?.length) *
                              100
                            ).toFixed()}
                            % coins in the{" "}
                            <span className="text-[#ff3425]">Red.</span>
                          </span>
                        )}

                        <div className="h-[90px] w-[90px] ">
                          <Pie
                            options={options}
                            data={{
                              labels: [],
                              datasets: [
                                {
                                  label: [],
                                  data: [inTheGreen?.length, inTheRed?.length],
                                  backgroundColor: ["#2df5e4", "#ff5858"],
                                  borderColor: ["#2df5e4", "#ff5858"],
                                  borderWidth: 1,
                                },
                              ],
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center">
                        <div className="absolute flex items-center justify-center text-[0.8rem] font-bold ">
                          <h1>No coins listed yet</h1>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* watchlist section*/}
        <div className={`shadow-3xl flex flex-row shadow-blue-200/20 `}>
          {filteredCoins?.length > 0 ? (
            <>
              {/* sidebar coinList */}
              <CoinTable
                data={filteredCoins}
                firstPostIndex={firstPostIndex}
                lastPostIndex={lastPostIndex}
              />
            </>
          ) : (
            <div
              className={`flex h-[350px] w-full items-center justify-center rounded-b-2xl ${
                mode === "light" ? "bg-slate-200 text-black" : "bg-[#050c14] text-white"
              } `}
            >
              <span className="text-glow text-2xl font-bold">No Coins yet</span>
            </div>
          )}
        </div>

        {/* Pagination section */}
        <div className="flex">
          <div className=" flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
            <div>
              <h1 className="mt-1 text-[14px] text-[#9ccddc] md:text-[15px] lg:text-[14px]">
                {filteredCoins?.length} coins
              </h1>
            </div>
            <div>
              <Pagination
                totalPosts={filteredCoins?.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWatchList;
