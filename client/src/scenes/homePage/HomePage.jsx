import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CoinSlideShow from "./CoinSlideshow";
import axios from "axios";
import Tilt from "react-parallax-tilt";
import Loader from "../../components/Loader";
import LoggedInDropdown from "../../components/LoggedInDropdown";

function HomePage(props) {
  const {
    data: coinList,
    isLoading,
    isError,
    refetch,
  } = useQuery(["coinListData"], () => {
    return axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&locale=en"
      )
      .then((res) => res.data);
  });

  const [open, setOpen] = useState(false);
  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user || {});
  const { picturePath } = useSelector((state) => state.user || {});
  const navigate = useNavigate();

  props.funcNav(false);

  let navLinks = [
    { name: "Cryptocurrencies", link: "/Cryptocurrencies", id: 0 },
    { name: "Apps", link: "/Apps", id: 1 },
    { name: "News", link: "/News", id: 2 },
  ];

  const img_url2 = "http://localhost:3001/assets/1stcard_image.png";

  return (
    <div className="bg-[#02070f] h-[100%] w-full">
      <nav className="top-0 left-0 shadow-2xl w-full sticky z-[101] bg-[#02070f]">
        <div
          className=" flex md:justify-between justify-center flex-col md:flex-row  z-[10]
              p-2 md:items-center h-[60px]"
        >
          <div>
            <h1 className="text-white ml-4 text-xl font-bold ">
              <span className="text-glow">CoinWatcher</span>
              <span className="span-material text-xl font-bold text-glow">
                .Io
              </span>{" "}
            </h1>
          </div>

          <div
            className="absolute right-5 top-5 text-xl text-[#9ccddc] md:hidden
              hover:text-[white] duration-150 ease-in-out hover:scale-[1.04] cursor-pointer"
          >
            <ion-icon
              onClick={() => setOpen(!open)}
              name={open ? "close" : "apps-outline"}
            ></ion-icon>
          </div>

          <div className="md:static md:z-[1] z-[-1] ">
            <ul
              className={`flex md:flex-row flex-col xl:items-center lg:items-center md:items-center mr-4  md:static absolute
              w-full  md:bg-[transparent] md:mt-6 mt-[15px]  ${
                open ? "top-[45px]  bg-[#041d2c] " : "top-[-360px] "
              } 
              duration-500 ease-in-out left-[-0.1px]  pb-[25px]`}
            >
              {navLinks.map((link) => (
                <Link
                  to={link.link}
                  className="hover:scale-[1.02] transition-all ease-in-out
                  text-white mx-2 font-semibold md:text-[12px] text-[15px] md:ml-3 ml-8 md:my-1 my-3"
                  key={link.id}
                >
                  {link.name}
                </Link>
              ))}

              {isAuth ? (
                <LoggedInDropdown
                  userId={user._id}
                  userName={name}
                  imagePath={picturePath}
                />
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className=" text-white border-[2px] rounded-md px-2 md:py-0 py-1 md:w-[100px] w-[200px] 
                mx-5 border-[#9ccddc]  md:bg-[#054569] bg-[#062c43] font-semibold hover:bg-[#9ccddc] md:mt-0 mt-2 
                hover:text-[white] duration-200 ease-in-out hover:scale-[1.04] text-md"
                >
                  LOGIN
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-[#051229]">
        <div className="">
          <div>
            <div
              className="absolute  left-10 top-0 
            xl:mt-[500px] lg:mt-[400px] md:mt-[300px] sm:mt-[250px] mt-[200px]
            z-[99] font-bold"
            >
              <span
                className="text-gray-300 
            xl:text-7xl lg:text-5xl md:text-3xl text-xl "
              >
                WELCOME ANON
              </span>
              <p
                className="text-gray-400 
            lg:text-[15px] md:text-[12px] sm:text-[10px] text-[8px] 
            lg:w-[1000px] md:w-[400px] w-[150px]
            mt-1"
              >
                We are the watchers. Wide variety of apps, learning section,
                community stronk. Welcome anon.
              </p>
            </div>

            <img
              src={"http://localhost:3001/assets/front.png"}
              className="absolute z-[5] w-full vignette"
              alt=""
            />
            <div className="flex items-center justify-center mt-128 ">
              {coinList?.length ? (
                <CoinSlideShow images={coinList} />
              ) : (
                <Loader />
              )}
            </div>

            <div
              className=" bg-cover bg-center bg-no-repeat z-[1] flex
         "
            >
              <img
                src={"http://localhost:3001/assets/bg.png"}
                className=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100%] bg-[#010d14] mt-12">
        {/* first card */}
        <div
          className=" w-full h-[100%] 
        p-5 xl:px-[13%] lg:px-24 md:px-12 px-10
        flex flex-col"
        >
          <h1
            className=" text-white font-bold w-[90%] 
          xl:text-4xl lg:text-4xl md:text-4xl text-3xl mb-3"
          >
            <span className="span-material text-glow">Monitor </span>
            the latest and top cryptocurrencies up to date.
          </h1>
          <p className="text-white font-semibold mb-6 md:text-md text-sm ">
            From the widest varieties of cryptocurrencies in the market. You can
            find it here.
          </p>

          {/* first main card section */}
          <div
            className=" 
            xl:h-[430px] lg:h-[430px] md:h-[450px] h-[500px] 
            w-[100%] rounded-xl flex shadow-blue-300/20 shadow-2xl
         xl:flex-row lg:flex-row md:flex-row flex-col-reverse mb-6"
          >
            <div
              className="
            xl:w-[45%] xl:h-[100%] 
            md:w-[45%] md:h-[100%] 
            w-[100%] h-[50%] 
            rounded-l-xl 
            shadow-2xl z-[100]
            
            bg-[#151b1f] p-5"
            >
              <h1 className="font-semibold text-slate-300 text-2xl mb-2">
                Full with features.
              </h1>
              <p className="text-slate-300 text-sm font-thin mb-3">
                Come across the features that you will need to trade and check
                about information about different coins
              </p>
              <div
                className="
              flex 
              xl:flex-col lg:flex-col md:flex-col flex-row 
              xl:h-[75%] lg:h-[75%] md:h-[75%] h-[100%] 
              w-[100%]
              justify-between"
              >
                <Tilt
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable={true}
                  glareBorderRadius={0.1}
                  glareMaxOpacity={0.6}
                  glareColor="lightblue"
                  glarePosition="all"
                >
                  <div
                    className="glass xl:w-[100%] lg:w-[100%] md:w-[100%] w-[98%] px-1
                xl:h-[90px] lg:h-[90px] md:h-[90px] h-[60%] 
                xl:mx-0 lg:mx-0 md:mx-0  
                flex xl:flex-row lg:flex-row md:flex-row flex-col 
                 items-center justify-around"
                  >
                    <span
                      className="text-5xl bg-[#0c7730] text-white
                  rounded-full 
                  md:w-12 md:h-12 w-10 h-10
                  border-blue-200 border-[1px] flex items-center"
                    >
                      <ion-icon name="search-circle-outline"></ion-icon>
                    </span>
                    <p
                      className="text-white xl:text-lg lg:text-md md:text-sm text-[0.68rem] 
                  w-[70%] overflow-auto font-thin text-center"
                    >
                      Search the latest cryptocurrencies in the market.
                    </p>
                  </div>
                </Tilt>

                <Tilt
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareEnable={true}
                  glareBorderRadius={0.1}
                  glareMaxOpacity={0.6}
                  glareColor="lightblue"
                  glarePosition="all"
                >
                  <div
                    className="glass xl:w-[100%] lg:w-[100%] md:w-[100%] w-[98%] px-1
                xl:h-[90px] lg:h-[90px] md:h-[90px] h-[60%] 
                xl:mx-0 lg:mx-0 md:mx-0  
                flex xl:flex-row lg:flex-row md:flex-row flex-col 
                 items-center justify-around"
                  >
                    <span
                      className="text-5xl bg-[#0d5658] text-white
                  rounded-full 
                  md:w-12 md:h-12 w-10 h-10
                  border-blue-200 border-[1px] flex items-center"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </span>
                    <p
                      className="text-white xl:text-lg lg:text-md md:text-sm text-[0.68rem] 
                  w-[70%] overflow-auto font-thin text-center"
                    >
                      Watch the latest coin prices and stats.
                    </p>
                  </div>
                </Tilt>

                <Tilt
                  tiltMaxAngleX={7}
                  tiltMaxAngleY={7}
                  glareBorderRadius={0.1}
                  glareEnable={true}
                  glareMaxOpacity={0.6}
                  glareColor="lightblue"
                  glarePosition="all"
                >
                  <div
                    className="glass xl:w-[100%] lg:w-[100%] md:w-[100%] w-[98%] px-1
                  xl:h-[90px] lg:h-[90px] md:h-[90px] h-[60%] 
                  xl:mx-0 lg:mx-0 md:mx-0  
                  flex xl:flex-row lg:flex-row md:flex-row flex-col 
                  items-center justify-around"
                  >
                    <span
                      className="text-4xl bg-[#092a4b] text-white
                    rounded-full p-1
                    md:w-12 md:h-12 w-10 h-10
                    border-blue-200 border-[1px] flex items-center justify-center"
                    >
                      <ion-icon name="newspaper-outline"></ion-icon>
                    </span>
                    <p
                      className="text-white xl:text-lg lg:text-md md:text-sm text-[0.68rem] 
                    w-[70%] overflow-auto font-thin text-center"
                    >
                      Search the latest cryptocurrencies in the market.
                    </p>
                  </div>
                </Tilt>
              </div>
            </div>

            
            <div
              className="
            xl:w-[55%] xl:h-[100%] 
            lg:w-[55%] lg:h-[100%] 
            md:w-[55%] md:h-[100%] 
            w-[100%] h-[55%] 
            rounded-r-xl  flex
            bg-[#0e1214] vignette
            bg-cover bg-center saturate-[120%]"
              style={{
                backgroundImage:
                  "url('http://localhost:3001/assets/1stcard_image.png')",
              }}
            ></div>
          </div>

          {/* 1st section benefits */}
          <div
            className="mt-12 w-[100%] h-[100%] flex 
          xl:flex-row lg:flex-row md:flex-row flex-row 
          items-center justify-around"
          >
            {/* <div className="rounded-full bg-slate-700
            w-32 h-32 p-32 
            "></div> */}
            <div className="flex w-[50%] mb-6">
              <h1 className="text-white font-semibold xl:text-3xl lg:text-2xl md:text-xl text-md">
                <span className="text-[#76ff76] text-glow font-bold">
                  Fresh Data.{" "}
                </span>
                Providing the latest information about different
                cryptocurrencies with a chart, available markets, specific news
                for each coin.
              </h1>
            </div>
            <div className="flex w-[50%] flex-col p-2 items-center ">
              <div
                className="glass p-4 flex xl:flex-row lg:flex-row md:flex-row flex-col 
              xl:w-[500px] lg:w-[400px] md:w-[350px] w-[200px] hover:scale-[1.05] transition-all ease-in-out shadow-2xl shadow-green-300/50
              justify-center items-center"
              >
                <h1 className="text-[#76ff76] text-glow font-bold xl:text-7xl lg:text-7xl md:text-6xl text-5xl">
                  250+{" "}
                </h1>
                <span className="text-[#76ff76] xl:text-3xl lg:text-xl md:text-lg text-md text-glow font-thin mt-3">
                  CRYPTOCURRENCIES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
