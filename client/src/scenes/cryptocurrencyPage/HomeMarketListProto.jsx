import React from "react";
import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";

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
          <div>
            <h1 className="mt-2 text-[15px] text-[#9ccddc] md:text-[15px] lg:text-[17px]">
              Crypto Ranks:
              <span className="text-glow font-semibold text-[#ced7e0]">
                {" "}
                #{firstPostIndex + 1}{" "}
              </span>{" "}
              -
              <span className="text-glow font-semibold text-[#ced7e0]">
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

      <div className="flex flex-row shadow-2xl shadow-blue-200/20">
        <div
          className="flex h-full w-[200px] 
        flex-col md:w-[200px] lg:w-[220px]"
        >
          <div>
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="text-glow bg-[#051925] text-white">
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
                  <tbody className="divide-y divide-gray-600 bg-[#061720] text-gray-300">
                    {/* Add rows and data */}

                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr key={data.name}>
                          <td className="whitespace-nowrap  py-4 pl-5 pr-0 text-sm">
                            # {data.market_cap_rank}
                          </td>
                          <td className="flex whitespace-nowrap px-5 py-[18.5px] text-sm">
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
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="text-glow bg-[#061720] text-white">
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
                  <tbody className="divide-y divide-gray-600 bg-[#041018] text-gray-300">
                    {data?.length ? (
                      data?.slice(firstPostIndex, lastPostIndex).map((data) => (
                        <tr key={data.name} className="hover:bg-[#0c1824]">
                          <td className="w-64 whitespace-nowrap px-5 py-4 text-sm">
                            ${data.current_price?.toLocaleString()}
                          </td>
                          <td
                            className={`w-64 whitespace-nowrap px-5 py-4 text-sm ${
                              data.market_cap_change_percentage_24h > 0
                                ? "text-[#2ae937]"
                                : "text-[#ff6666]"
                            }`}
                          >
                            {data.market_cap_change_percentage_24h?.toFixed(2)}
                          </td>
                          <td
                            className={`w-64 whitespace-nowrap px-5 py-4 text-sm ${
                              data.price_change_percentage_24h > 0
                                ? "text-[#2ae937]"
                                : "text-[#ff6666]"
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
            <h1 className="mt-2 text-[15px] text-[#9ccddc] md:text-[15px] lg:text-[17px]">
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
