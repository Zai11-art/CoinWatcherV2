import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { setLogout } from "../state";
import ImageHolder from "./ImageHolder";
import LoggedInDropdown from "./LoggedInDropdown";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user || {});
  const isAuth = Boolean(useSelector((state) => state.token));
  const isLoggedIn = Boolean(useSelector((state) => state.isLoggedIn));
  const { picturePath } = useSelector((state) => state.user || {});

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
    <nav className="sticky left-0 top-0 z-[100] w-full shadow-2xl">
      <div
        className=" z-[10] flex h-[60px] flex-col justify-center  bg-[#062c43]
             p-2 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="ml-4 text-xl font-bold text-white ">
            <span className="text-glow">CoinWatcher</span>
            <span className="span-material text-xl">.Io</span>{" "}
          </h1>
        </div>

        <div
          className="absolute right-5 top-5 cursor-pointer text-xl text-[#9ccddc]
              duration-150 ease-in-out hover:scale-[1.04] hover:text-[white] md:hidden"
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
               open ? "top-[45px]  bg-[#054569] " : "top-[-360px] "
             } 
            left-[-0.1px] pb-[25px] duration-500  ease-in-out`}
          >
            {navLinks.map((link) => (
              <Link
                to={link.link}
                className="mx-2 my-3 ml-8
                text-[15px] font-semibold text-white transition-all ease-in-out hover:scale-[1.02] md:my-1 md:ml-2 md:text-[13px]"
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
                className=" py- mx-5 mt-2 rounded-md border-[2px] border-[#9ccddc]  
                bg-[#062c43] font-semibold  text-white duration-200 ease-in-out hover:scale-[1.04] hover:bg-[#9ccddc] hover:text-[white] 
                md:mt-0 md:w-[90px] md:bg-[#054569] "
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
