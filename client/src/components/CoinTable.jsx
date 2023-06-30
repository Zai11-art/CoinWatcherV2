import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useId } from "react";
import _ from "lodash";

const CoinTable = ({ data, firstPostIndex, lastPostIndex }) => {
  const keyId = useId();
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  const loggedInUserId = useSelector((state) => state?.user?._id);
  const token = useSelector((state) => state.token);

  const [watchList, setwatchList] = useState([]);
  const [redirectLogin, setredirectLogin] = useState(false);

  useEffect(() => {
    getWatchList();
    const tableContainer = document.getElementById("table-container");
    const stickyColumns = document.querySelectorAll(".sticky-column");

    if (tableContainer && stickyColumns.length > 0) {
      tableContainer.addEventListener("scroll", () => {
        stickyColumns.forEach((column) => {
          column.style.transform = `translateX(${tableContainer.scrollLeft}px)`;
        });
      });
    }
  }, []);

  const getWatchList = async () => {
    try {
      if (loggedInUserId) {
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

        return response;
      } else {
        console.log("Please Log in");
      }

      const fetchedWatchList = await response.json();
      setwatchList(fetchedWatchList);
    } catch (error) {
      return error;
    }
  };

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

  return (
    <>
      <div
        className={`flex flex-row ${
          mode === "light" ? "shadow-slate-900/30" : "shadow-blue-200/20"
        } shadow-2xl `}
      >
        <div
          className="flex h-full w-[200px] 
        flex-col md:w-[200px] lg:w-[220px]"
        >
          <div>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow ">
                <table className="min-w-full divide-y divide-blue-400 shadow-xl">
                  <thead
                    className={`text-glow  ${
                      mode === "light"
                        ? "bg-slate-200/70 text-slate-900"
                        : " bg-[#082030] text-gray-300"
                    }`}
                  >
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wider"
                      >
                        Coin
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y divide-gray-600 ${
                      mode === "light"
                        ? "bg-slate-200/70 text-slate-900"
                        : " bg-[#082030] text-gray-300"
                    }  `}
                  >
                    {/* Add rows and data */}
                    {data?.length ? (
                      data
                        ?.slice(firstPostIndex, lastPostIndex)
                        .map((data, index) => (
                          <tr key={`${keyId}-${index}`}>
                            <td className="whitespace-nowrap  py-4 pl-3 pr-0 text-sm">
                              {/* watchlist button */}

                              {/* {isAuth ? () : ()} */}

                              {watchList?.coinWatchList?.some(
                                (coin) => coin.coinId === data.id
                              ) ? (
                                // Render if the coin is already in the watchlist
                                <button
                                  aria-label="remove to watchlist"
                                  onClick={() => {
                                    removetoWatchList(data);
                                    toast.success(
                                      `${data.name} Coin Removed From Watchlist`,
                                      {
                                        theme: `${
                                          mode === "light" ? "light" : "colored"
                                        }`,
                                      }
                                    );
                                  }}
                                  className="mr-3 border-r-[1px] pr-1 text-[1.1rem] text-yellow-200 hover:text-blue-400"
                                >
                                  <ion-icon name="star"></ion-icon>
                                </button>
                              ) : (
                                // Render if the coin is not in the watchlist
                                <>
                                  <button
                                    aria-label="add to watchlist"
                                    onClick={() => {
                                      addToWatchList(data);
                                      setredirectLogin(!redirectLogin);

                                      isAuth &&
                                        toast.success(
                                          `${data.name} Coin Added To Watchlist.`,
                                          {
                                            theme: `${
                                              mode === "light"
                                                ? "light"
                                                : "colored"
                                            }`,
                                          }
                                        );
                                    }}
                                    className="mr-3 border-r-[1px] border-r-slate-500 pr-1 text-[1.1rem] hover:text-blue-400"
                                  >
                                    <ion-icon name="star-outline"></ion-icon>
                                  </button>

                                  {!isAuth && redirectLogin && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-60">
                                      <div className="w-[250px] border-[0.02px] border-slate-500/40 bg-[#041625] p-6 shadow-xl shadow-blue-200/10 ">
                                        {/* Pop-up content goes here */}
                                        <h2 className="mb-4 text-lg font-bold text-blue-100">
                                          Login to add coins to <br />
                                          watchlist.
                                        </h2>
                                        <div className="flex flex-col">
                                          <span
                                            onClick={() => {
                                              navigate("/login");
                                            }}
                                            className="cursor-pointer text-[17px] font-semibold text-green-300 transition-all ease-in-out hover:bg-[#193952] hover:text-green-100"
                                          >
                                            <ion-icon name="checkmark-outline"></ion-icon>{" "}
                                            Go to Login.
                                          </span>
                                          <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                                          <span
                                            onClick={() =>
                                              setredirectLogin(!redirectLogin)
                                            }
                                            className="cursor-pointer text-[17px] font-semibold text-red-400 transition-all ease-in-out hover:bg-[#193952] hover:text-red-100"
                                          >
                                            <ion-icon name="close-outline"></ion-icon>{" "}
                                            Cancel
                                          </span>
                                          <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}

                              <span className="text-[0.8rem]">
                                {data.market_cap_rank}
                              </span>
                            </td>
                            <td className="flex  whitespace-nowrap px-3 py-[18.5px] text-sm">
                              <Link className="flex" to={`/view/${data.id}`}>
                                <div className="h-[20px] w-[20px] pr-1">
                                  <img
                                    alt={data.id}
                                    src={data.image}
                                    className="h-full w-full object-contain"
                                  />
                                </div>
                                {data.name}
                              </Link>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td>
                          <Loader></Loader>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full w-[300px]
        flex-col md:w-[500px] lg:w-[780px]"
        >
          <div className="no-scrollbar overflow-x-auto ">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow">
                <table className="min-w-full divide-y divide-blue-300">
                  <thead
                    className={`text-glow ${
                      mode === "light"
                        ? "bg-slate-200 text-slate-900"
                        : " bg-[#061720] text-gray-300"
                    } `}
                  >
                    <tr>
                      {["Price", "1d mc", "24h", "vol", "Mcap", "7d"].map(
                        (label, index) => (
                          <th
                            key={`${label[index]}-${index}`}
                            scope="col"
                            className="w-64 px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                          >
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody
                    className={`divide-y divide-gray-600 ${
                      mode === "light"
                        ? "bg-slate-200 text-slate-900"
                        : " bg-[#061720] text-gray-300"
                    } text-gray-300`}
                  >
                    {data?.length ? (
                      data
                        ?.slice(firstPostIndex, lastPostIndex)
                        .map((data, index) => (
                          <tr
                            key={`${index}-${data.id}`}
                            className={`${
                              mode === "light"
                                ? "hover:bg-[#c1d3ee]"
                                : "hover:bg-[#0c1824]"
                            } `}
                          >
                            <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                              ${data.current_price?.toLocaleString()}
                            </td>
                            <td
                              className={`w-64 whitespace-nowrap px-5 py-4 text-sm  ${
                                data.market_cap_change_percentage_24h > 0
                                  ? `${
                                      mode === "light"
                                        ? "text-[#256d2b]"
                                        : "text-[#2ae937]"
                                    } `
                                  : `${
                                      mode === "light"
                                        ? "text-[#993030]"
                                        : "text-[#ff6666]"
                                    } `
                              }`}
                            >
                              {data.market_cap_change_percentage_24h?.toFixed(
                                2
                              )}
                            </td>
                            <td
                              className={`w-64 whitespace-nowrap px-5 py-4 text-sm  ${
                                data.price_change_percentage_24h > 0
                                  ? `${
                                      mode === "light"
                                        ? "text-[#256d2b]"
                                        : "text-[#2ae937]"
                                    } `
                                  : `${
                                      mode === "light"
                                        ? "text-[#993030]"
                                        : "text-[#ff6666]"
                                    } `
                              }`}
                            >
                              {data.price_change_percentage_24h?.toFixed(2)}
                            </td>

                            <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                              ${data.total_volume?.toLocaleString()}
                            </td>
                            <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                              ${data.market_cap?.toLocaleString()}
                            </td>
                            <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                              <div className="w-[100px] text-center text-[11px] md:w-[100px] md:text-[15px]  ">
                                <Sparklines data={data?.sparkline_in_7d?.price}>
                                  {data.current_price >
                                  data?.sparkline_in_7d?.price[0] ? (
                                    <SparklinesLine
                                      style={{
                                        stroke: `${
                                          mode === "light"
                                            ? "#28a733"
                                            : "#2ae937"
                                        } `,
                                        fill: `${
                                          mode === "light"
                                            ? "#28a733"
                                            : "#2ae937"
                                        } `,
                                        fillOpacity: "0.2",
                                      }}
                                    />
                                  ) : (
                                    <SparklinesLine
                                      style={{
                                        stroke: `${
                                          mode === "light"
                                            ? "#d82e2e"
                                            : "#ff6666"
                                        } `,
                                        fill: `${
                                          mode === "light"
                                            ? "#d82e2e"
                                            : "#ff6666"
                                        } `,
                                        fillOpacity: "0.2",
                                      }}
                                    />
                                  )}
                                </Sparklines>
                              </div>
                            </td>
                          </tr>
                        ))
                    ) : (
                      <tr>
                        <td>
                          <Loader></Loader>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinTable;
