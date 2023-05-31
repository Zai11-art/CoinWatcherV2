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
  const { picturePath } = useSelector((state) => state.user || {});

  const name = `${user.firstName} ${user.lastName}`;

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
    <nav className="top-0 left-0 shadow-2xl w-full sticky z-[100]">
      <div
        className=" flex md:justify-between justify-center flex-col md:flex-row  z-[10]
             p-2 md:items-center bg-[#062c43] h-[75px]"
      >
        <div>
          <h1 className="text-white ml-4 text-2xl font-bold ">
            <span className="text-glow">CoinWatch</span>
            <span className="span-material text-3xl">.Io</span>{" "}
          </h1>
        </div>

        <div
          className="absolute right-5 top-6 text-3xl text-[#9ccddc] md:hidden
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
             w-full  md:bg-[transparent] md:mt-6 mt-[30px]  ${
               open ? "top-[45px]  bg-[#054569] " : "top-[-360px] "
             } 
            duration-500 ease-in-out left-[-0.1px]  pb-[25px]`}
          >
            {navLinks.map((link) => (
              <Link
                to={link.link}
                className="hover:scale-[1.02] transition-all ease-in-out
                text-white mx-2 font-semibold md:text-[14.5px] text-[15px] md:ml-3 ml-8 md:my-1 my-3"
                key={link.id}
              >
                {link.name}
              </Link>
            ))}

            {isAuth ? (
              <LoggedInDropdown userId={user._id} userName={name} imagePath={picturePath} />
            ) : (
              <button
                onClick={() => navigate("/login")}
                className=" text-white border-[2px] rounded-md px-2 md:py-1 py-1 md:w-[100px] w-[200px] 
                mx-5 border-[#9ccddc]  md:bg-[#054569] bg-[#062c43] font-semibold hover:bg-[#9ccddc] md:mt-0 mt-2 
                hover:text-[white] duration-200 ease-in-out hover:scale-[1.04]"
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
