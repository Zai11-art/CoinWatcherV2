import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { setLogout } from "../state";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
import { useSelector } from "react-redux";
>>>>>>> origin/master

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoggedInDropdown({ userName, imagePath, userId }) {
<<<<<<< HEAD
  // console.log(userId)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className="flex items-center  transition-all duration-200 hover:bg-slate-800 rounded-lg p-1 pr-3 ml-2">
          <div className="w-[35px] h-[35px] rounded-full ml-3  flex items-center justify-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
=======
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUserId = useSelector((state) => state.user._id);

  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button
          className={`flex items-center  transition-all duration-200 ${
            mode === "light" ? "hover:bg-blue-200" : "hover:bg-slate-800"
          }  ml-2  rounded-lg`}
        >
          <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full">
            <img
              className="h-full w-full object-cover rounded-full"
>>>>>>> origin/master
              src={`http://localhost:3001/assets/${imagePath}`}
              alt="user"
            />
          </div>
<<<<<<< HEAD
          
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
=======
          <ChevronDownIcon
            className="mr-1 h-5 w-5 text-gray-400"
>>>>>>> origin/master
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
<<<<<<< HEAD
        <Menu.Items className="absolute right-0 z-50 mt-2 w-[8rem] mr-6 origin-top-left rounded-md bg-[#051925] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
=======
        <Menu.Items
          className={`absolute right-0 z-50 mr-6 mt-2 w-[8rem] origin-top-left rounded-md ${
            mode === "light"
              ? "bg-slate-200 text-slate-900"
              : "bg-[#051925] text-[#ced7e0]"
          }  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
>>>>>>> origin/master
          <div className="py-1">
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
<<<<<<< HEAD
                      active
                        ? "text-[#ced7e0] transition-all ease-in-out"
                        : "text-[#ced7e0]",
=======
                      active ? " transition-all ease-in-out" : "",
>>>>>>> origin/master
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    {userName.toLocaleString()}
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
<<<<<<< HEAD
                  <Link
                    to={`/profile/${userId}`}
                    className={classNames(
                      active
                        ? "hover:bg-[#054569] text-[#ced7e0] transition-all ease-in-out"
                        : "text-[#ced7e0]",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    User Profile
                  </Link>
=======
                  <div
                    onClick={() => navigate(`/profile/${userId}`)}
                    className={classNames(
                      active
                        ? "transition-all  ease-in-out hover:bg-[#054569]"
                        : "",
                      "block w-full cursor-pointer px-4 py-2 text-left text-sm"
                    )}
                  >
                    User Profile
                  </div>
>>>>>>> origin/master
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      dispatch(setLogout());
                      navigate("/home");
                    }}
                    type="submit"
                    className={classNames(
                      active
<<<<<<< HEAD
                        ? "hover:bg-[#054569] text-[#ced7e0] transition-all ease-in-out"
                        : "text-[#ced7e0]",
=======
                        ? "transition-all  ease-in-out hover:bg-[#054569]"
                        : "",
>>>>>>> origin/master
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
<<<<<<< HEAD

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
=======
>>>>>>> origin/master
