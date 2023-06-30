import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useId } from "react";
import _ from "lodash";
import Loader from "../../components/Loader";
import RatingBar from "../../components/RatingBar";

const ExchangeViewTable = ({ data, firstPostIndex, lastPostIndex }) => {
  const keyId = useId();
  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));
  const loggedInUserId = useSelector((state) => state?.user?._id);
  const token = useSelector((state) => state.token);

  const [watchList, setwatchList] = useState([]);
  const [redirectLogin, setredirectLogin] = useState(false);

  function uppercaseFirstLetter(str) {
    if (!str) {
      return str;
    }

    const firstLetter = str.charAt(0).toUpperCase();
    const restOfString = str.slice(1);

    return firstLetter + restOfString;
  }


  return (
    <>
      <div
        className={`flex flex-row ${
          mode === "light" ? "shadow-slate-900/30" : "shadow-blue-200/20"
        } shadow-2xl `}
      >
        <div
          className="flex h-full w-[200px] 
          flex-col md:w-[200px] lg:w-[250px] xl:w-[300px]"
        >
          <div className="">
            <div className="inline-block min-w-full align-middle ">
              <div className="overflow-hidden border-b border-gray-200 shadow ">
                <table className="min-w-full divide-y divide-blue-400 shadow-xl">
                  <thead
                    className={` ${
                      mode === "light"
                        ? "bg-slate-200/70 text-slate-900"
                        : " bg-[#082030] text-gray-300"
                    }`}
                  >
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wider"
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
                              <span className="text-[0.8rem]">{index + 1}</span>
                            </td>
                            <td className="flex  whitespace-nowrap px-3 py-[16.5px] text-sm font-semibold">
                              <Link
                                className="flex items-center"
                                to={`/view/${data.id}`}
                              >
                                {uppercaseFirstLetter(data.coin_id)} /
                                {data.target_coin_id}
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
          className="flex h-full w-[600px]
          flex-col md:w-[500px] lg:w-[750px] xl:w-[1000px]"
        >
          <div className="no-scrollbar overflow-x-auto ">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border-b border-gray-200 shadow">
                <table className="min-w-full divide-y divide-blue-300">
                  <thead
                    className={` ${
                      mode === "light"
                        ? "bg-slate-200 text-slate-900"
                        : " bg-[#061720] text-gray-300"
                    } `}
                  >
                    <tr>
                      {[
                        "Pair",
                        "Price",
                        "vol",
                        "Spread",
                        "Incentives",
                        "Rating",
                      ].map((label, index) => (
                        <th
                          key={`${label[index]}-${index}`}
                          scope="col"
                          className="w-64 px-4 py-3 text-left text-xs font-medium  uppercase tracking-wider"
                        >
                          {label}
                        </th>
                      ))}
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
                            <td className="w-64 whitespace-nowrap px-4 py-[1.032rem] text-sm">
                              {data?.base} / {data?.target}
                            </td>
                            <td
                              className={`w-64 whitespace-nowrap px-4 py-[1.032rem] text-sm`}
                            >
                              ${data?.converted_last.usd}
                            </td>
                            <td
                              className={`w-64 whitespace-nowrap px-4 py-[1.032rem] text-sm `}
                            >
                              ${(data?.volume).toLocaleString()}
                            </td>

                            <td className="w-64 whitespace-nowrap px-4 py-[1.032rem] text-sm">
                              % {data?.bid_ask_spread_percentage.toFixed(2)}
                            </td>
                            <td
                              className={`w-64 whitespace-nowrap px-4 py-[1.032rem] text-sm`}
                            >
                              {data?.market.has_trading_incentive === true
                                ? "Available"
                                : "N / A"}
                            </td>
                            <td className="w-64 whitespace-nowrap px-5 py-[1.032rem] text-sm">
                              <div className="w-[110px] text-center text-[11px] md:w-[50px] md:text-[15px]  ">
                                <div
                                  className={`ml-1 h-[12px] w-[12px]  rounded-full pr-2 ${
                                    data.trust_score === "green"
                                      ? "bg-[#6cd82e]"
                                      : data.trust_score === "yellow"
                                      ? "bg-[#d8cd2e]"
                                      : data.trust_score === "orange"
                                      ? "bg-[#d88e2e]"
                                      : data.trust_score === "red"
                                      ? "bg-[#d8482e]" :  "bg-[#555151]"
                                      
                                  } `}
                                ></div>
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

export default ExchangeViewTable;
