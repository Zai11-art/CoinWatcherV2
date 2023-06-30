import React from "react";
import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Loader from "./Loader";
import { getCoinDataList } from "../utils/utils";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const HomeMarketListProto = (props) => {
  useEffect(() => {
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

  // if (isLoading || isError) {
  //     refetch()
  // }

  // const priceSet = (object) => {
  //     return [...object]
  // }
  // const price = data

  // console.log(price)

  // if (isLoading) {
  //     return <div><h1>LOADING</h1></div>
  // }

  // if (isError) {
  //     return <div><h1>ERROR</h1></div>
  // }

  // const price = data;

  //  const [price, setprice] = useState([])

  // useEffect(() => {
  //     getCoinDataList()
  //     .then(data => {
  //         setprice([...data]);
  //     })
  //     .catch(error => {
  //         console.log(error);
  //     });

  // }, [])

  return (
    <div>
      <div
        className="
            lg:w-[1000px] lg:h-[100%]
            md:w-[700px] md:h-[100%] 
            lg:mt-[110px] md:mt-[120px] mt-[175px]
            w-[450px] h-[100%] flex items-center justify-center "
      >
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full my-2">
          <div>
            <h1 className="lg:text-[17px] md:text-[15px] text-[15px] text-[#9ccddc] mt-2">
              Crypto Ranks:
              <span className="text-glow text-[#ced7e0] font-semibold">
                {" "}
                #{firstPostIndex + 1}{" "}
              </span>{" "}
              -
              <span className="text-glow text-[#ced7e0] font-semibold">
                {" "}
                #{lastPostIndex}{" "}
              </span>
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

      <div className="flex flex-row shadow-blue-200/20 shadow-2xl">
        <div
          className="flex flex-col h-full 
        lg:w-[220px] md:w-[200px] w-[200px]"
        >
          <div
          // className="overflow-hidden"
          >
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#051925] text-glow text-white">
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

                      {/* ... Add more columns as needed */}
                      {/* 
                      
                        // HEX CODES:
                        // #061720
                        // #051925
                        // #062c43
                        // #054569
                        // #5591a9
                        // #9ccddc
                        // #ced7e0
                        */}
                    </tr>
                  </thead>
                  <tbody className="bg-[#061720] divide-y divide-gray-600 text-gray-300">
                    {/* Add rows and data */}

                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr>
                          <td className="pl-5  pr-0 py-4 text-sm whitespace-nowrap">
                            # {data.market_cap_rank}
                          </td>
                          <td className="px-5 py-[18.5px] text-sm whitespace-nowrap flex">
                            <Link className="flex" to={`/view/${data.id}`}>
                              <img
                                src={data.image}
                                className="h-[20px] w-[20px] mr-1"
                              />
                              {data.name}
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <Loader></Loader>
                    )}

                    {/* ... Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col h-full
      lg:w-[790px] md:w-[500px] w-[300px]"
        >
          <div className="overflow-x-auto no-scrollbar ">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#061720] text-glow text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-5 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        1d mc
                      </th>
                      <th
                        scope="col"
                        className="px-5 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        24h
                      </th>

                      <th
                        scope="col"
                        className="px-5 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        vol
                      </th>
                      <th
                        scope="col"
                        className="px-5 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        Mcap
                      </th>
                      <th
                        scope="col"
                        className="px-5 w-64 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                      >
                        7 d
                      </th>
                      {/* ... Add more columns as needed */}
                    </tr>
                  </thead>
                  <tbody className="bg-[#041018] text-gray-300 divide-y divide-gray-600">
                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr>
                          <td className="px-5 w-64 py-4 text-sm whitespace-nowrap">
                            ${data.current_price?.toLocaleString()}
                          </td>
                          <td className={`px-5 w-64 py-4 text-sm whitespace-nowrap ${data.market_cap_change_percentage_24h > 0 ? "text-[#2ae937]" : "text-[#ff6666]"}`}>
                            {data.market_cap_change_percentage_24h?.toFixed(2)}
                          </td>
                          <td className={`px-5 w-64 py-4 text-sm whitespace-nowrap ${data.price_change_percentage_24h > 0 ?  "text-[#2ae937]" : "text-[#ff6666]"}`}>
                            {data.price_change_percentage_24h?.toFixed(2)}
                          </td>

                          <td className="px-5 w-64 py-4 text-sm whitespace-nowrap">
                            ${data.total_volume?.toLocaleString()}
                          </td>
                          <td className="px-5 w-64 py-4 text-sm whitespace-nowrap">
                            ${data.market_cap?.toLocaleString()}
                          </td>
                          <td className="px-5 w-64 py-4 text-sm whitespace-nowrap">
                            <div className="text-center md:w-[100px] w-[100px] md:text-[15px] text-[11px]  ">
                              <Sparklines data={data.sparkline_in_7d.price}>
                                {data.current_price >
                                data.sparkline_in_7d.price[0] ? (
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
                          </td>
                        </tr>
                      ))
                    ) : (
                      <Loader></Loader>
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
                lg:w-[1000px] lg:h-[100%]
                md:w-[700px] md:h-[100%] mt-3  mb-[75px]
                w-[450px] h-[100%] flex items-center justify-center"
      >
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between w-full my-2">
          <div>
            <h1 className="lg:text-[17px] md:text-[15px] text-[15px] text-[#9ccddc] mt-2">
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
