import React from "react";
import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
import NotificationPopUp from "../../components/NotificationPopUp";
import { toast } from "react-toastify";

const HomeMarketListProto = (props) => {
  const mode = useSelector((state) => state.mode)
  const loggedInUserId = useSelector((state) => state?.user?._id);
  const isAuth = Boolean(useSelector((state) => state.token));
  const token = useSelector((state) => state.token);
  const [watchList, setwatchList] = useState([]);
  const navigate = useNavigate();

  console.log(watchList.coinWatchList);

  //  login user guide when pressing add to watchlist if not loggedin
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

  const data = props.coinData;

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(50);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const getWatchList = async () => {
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
    <div>
      <div
        className="
            mt-[175px] flex
            h-[100%] w-[450px] 
            items-center justify-center md:mt-[120px]
            md:h-[100%] md:w-[700px] lg:mt-[110px] lg:h-[100%] lg:w-[1000px] "
      >
        <div className="my-2 flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
          <div className="flex">
            <h1 className={`mr-4 mt-2 text-[15px] ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"} md:text-[15px] lg:text-[17px]`}>
              Crypto Ranks:
              <span className={`text-glow font-bold ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"}`}>
                {" "}
                #{firstPostIndex + 1}{" "}
              </span>{" "}
              -
              <span className={`text-glow font-bold ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"}`}>
                {" "}
                #{lastPostIndex}{" "}
              </span>
            </h1>
            <div className={`mr-2 mt-2 text-[15px] ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"} md:text-[15px] lg:text-[17px]`}>
              Coins available:
              <span className={`text-glow font-bold ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"}`}>
                {" "}
                {data?.length}
              </span>
            </div>
          </div>
          <div>
            <Pagination
              totalPosts={data?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

      <div className={`flex flex-row ${mode === 'light' ? 'shadow-slate-900/30' : 'shadow-blue-200/20'} shadow-2xl `}>
        <div
          className="flex h-full w-[200px] 
        flex-col md:w-[200px] lg:w-[220px]"
        >
          <div>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-blue-400 shadow-xl">
                  <thead className={`text-glow  ${mode === 'light' ? "bg-slate-200/50 text-slate-900" : " bg-[#061720] text-gray-300"}`}>
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
                  <tbody className={`divide-y divide-gray-600 ${mode === 'light' ? "bg-slate-200/50 text-slate-900" : " bg-[#061720] text-gray-300"}  `}>
                    {/* Add rows and data */}

                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr key={data.name}>
                          <td className="whitespace-nowrap  py-4 pl-3 pr-0 text-sm">
                            {/* watchlist button */}

                            {/* {isAuth ? () : ()} */}

                            {watchList?.coinWatchList?.some(
                              (coin) => coin.coinId === data.id
                            ) ? (
                              // Render if the coin is already in the watchlist
                              <button
                                onClick={() => {
                                  removetoWatchList(data);
                                  toast.success(
                                    `${data.name} Coin Removed From Watchlist`
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
                                  onClick={() => {
                                    addToWatchList(data);
                                    setredirectLogin(!redirectLogin);

                                    isAuth &&
                                      toast.success(
                                        `${data.name} Coin Added To Watchlist.`
                                      );
                                  }}
                                  className="mr-3 border-r-[1px] border-r-slate-500 pr-1 text-[1.1rem] hover:text-blue-400"
                                >
                                  <ion-icon name="star-outline"></ion-icon>
                                </button>

                                {!isAuth && redirectLogin && (
                                  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-60">
                                    <div className="w-[250px] rounded-lg border-[0.02px] border-slate-500/40 bg-[#041625] p-6 shadow-xl shadow-blue-200/10 ">
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
                          <td className="flex whitespace-nowrap px-3 py-[18.5px] text-sm">
                            <Link className="flex" to={`/view/${data.id}`}>
                              <img
                                src={data.image}
                                className="mr-1 h-[20px] w-[20px]"
                              />
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

                    {/* ... Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex h-full w-[300px]
        flex-col md:w-[500px] lg:w-[790px]"
        >
          <div className="no-scrollbar overflow-x-auto ">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-blue-300">
                  <thead className={`text-glow ${mode === 'light' ? "bg-slate-200/50 text-slate-900" : " bg-[#061720] text-gray-300"} `}>
                    <tr>
                      {["Price", "1d mc", "24h", "vol", "Mcap", "7d"].map(
                        (label) => (
                          <th
                            scope="col"
                            className="w-64 px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                          >
                            {label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className={`divide-y divide-gray-600 ${mode === 'light' ? "bg-[#cfdcf0] text-slate-900" : " bg-[#061720] text-gray-300"} text-gray-300`}>
                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr key={data.name} className={`${mode === 'light' ? "hover:bg-[#c1d3ee]" : "hover:bg-[#0c1824]"} `}>
                          <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                            ${data.current_price?.toLocaleString()}
                          </td>
                          <td
                            className={`w-64 whitespace-nowrap px-5 py-4 text-sm ${
                              data.market_cap_change_percentage_24h > 0
                                ? `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } `
                                : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } `
                            }`}
                          >
                            {data.market_cap_change_percentage_24h?.toFixed(2)}
                          </td>
                          <td
                            className={`w-64 whitespace-nowrap px-5 py-4 text-sm ${
                              data.price_change_percentage_24h > 0
                                ? `${mode === 'light' ? 'text-[#28a733]' : 'text-[#2ae937]' } `
                                : `${mode === 'light' ? 'text-[#d82e2e]' : 'text-[#ff6666]' } `
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
                                      stroke: `${mode === 'light' ? '#28a733' : '#2ae937' } `,
                                      fill: `${mode === 'light' ? '#28a733' : '#2ae937' } `,
                                      fillOpacity: "0.2",
                                    }}
                                  />
                                ) : (
                                  <SparklinesLine
                                    style={{
                                      stroke: `${mode === 'light' ? '#d82e2e' : '#ff6666' } `,
                                      fill: `${mode === 'light' ? '#d82e2e' : '#ff6666' } `,
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

                    {/* ... Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
                mb-[75px] mt-3
                flex h-[100%] w-[450px]  items-center
                justify-center md:h-[100%] md:w-[700px] lg:h-[100%] lg:w-[1000px]"
      >
        <div className="my-2 flex w-full flex-col items-center justify-between md:flex-row lg:flex-row">
          <div>
            <h1 className={`mt-2 text-[15px] ${mode === 'light' ? "text-blue-900" : "text-[#9ccddc]"}  md:text-[15px] lg:text-[17px]`}>
              Showing {Math.ceil(data?.length / (data?.length / postsPerPage))}{" "}
              results out of {data?.length}
            </h1>
          </div>
          <div>
            <Pagination
              totalPosts={data?.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMarketListProto;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
