import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoggedInDropdown from "./LoggedInDropdown";
import { setMode } from "../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user || {});
  const isAuth = Boolean(useSelector((state) => state.token));
  const { picturePath } = useSelector((state) => state.user || {});
  const mode = useSelector((state) => state.mode);

  const handleMode = () => {
    dispatch(setMode());
  };

  const name = `${user.userName}`;

  let navLinks = [
    { name: "Home", link: "/Home", id: 0 },
    { name: "Cryptocurrencies", link: "/Cryptocurrencies", id: 1 },
    { name: "Apps", link: "/Apps", id: 2 },
    { name: "News", link: "/News", id: 3 },
    { name: "Community", link: "/Community", id: 4 },
    { name: "Learn", link: "/Learn", id: 5 },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky left-0 top-0 z-[100] w-full shadow-lg">
      <div
        className={` z-[100] flex h-[60px] flex-col justify-center ${
          mode === "light" ? "bg-slate-300" : "bg-[#062c43]"
        } 
             p-2 md:flex-row md:items-center md:justify-between`}
      >
        <div>
          <h1
            className={`ml-4 text-xl font-bold ${
              mode === "light" ? "text-[#3259af]" : "text-white"
            } `}
          >
            <span className="text-glow text-2xl">CoinWatcher</span>
            <span className="span-material text-2xl">.Io</span>{" "}
          </h1>
        </div>

        <div
          className={`absolute right-5 top-5 cursor-pointer text-xl 
              duration-150 ease-in-out hover:scale-[1.04] hover:text-[white] md:hidden
              ${mode === "light" ? "text-[#060d16]" : "text-[#9ccddc] "}`}
        >
          <ion-icon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "apps-outline"}
          ></ion-icon>
        </div>

        <div className="z-[-1] md:static md:z-[1] ">
          <ul
            className={`absolute mr-4 mt-[15px] flex w-full flex-col md:static  md:mt-6 md:flex-row
             md:items-center  md:bg-[transparent] lg:items-center xl:items-center  ${
               open
                 ? `top-[45px]   ${
                     mode === "light" ? "bg-slate-300" : "bg-[#062c43]"
                   } `
                 : "top-[-360px] "
             } left-[-0.1px] pb-[25px] duration-500  ease-in-out`}
          >
            {navLinks.map((link) => (
              <Link
                to={link.link}
                className={`mx-2 my-3 ml-8
                text-[15px] font-semibold ${
                  mode === "light" ? "text-black" : "text-white"
                } transition-all ease-in-out hover:scale-[1.02] md:my-1 md:ml-2 md:text-[13px]`}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}

            <div className="ml-7 md:ml-1 lg:ml-1 xl:ml-1">
              {mode === "light" ? (
                <button
                  onClick={handleMode}
                  className=" flex rounded-full bg-slate-200 p-1 text-2xl text-blue-400 shadow-xl "
                >
                  <ion-icon name="sunny"></ion-icon>
                </button>
              ) : (
                <button
                  onClick={handleMode}
                  className=" flex rounded-full bg-[#060d16] p-1 text-2xl text-blue-300 shadow-xl "
                >
                  <ion-icon name="moon"></ion-icon>
                </button>
              )}
            </div>

            {isAuth ? (
              <LoggedInDropdown
                userId={user._id}
                userName={name}
                imagePath={picturePath}
              />
            ) : (
              <button
                onClick={() => navigate("/login")}
                className={` py- mx-4 mt-2 rounded-md border-[2px] 
                font-semibold   duration-200 ease-in-out   hover:scale-[1.04] 
                md:mt-0 md:w-[90px] 
                ${
                  mode === "light"
                    ? "border-blue-900 bg-slate-300 text-blue-900 hover:bg-[#12406b] hover:text-[white]"
                    : "border-[#9ccddc] bg-[#062c43]  text-white  hover:bg-[#9ccddc] hover:text-[white]"
                } 
                `}
              >
                LOGIN
              </button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
