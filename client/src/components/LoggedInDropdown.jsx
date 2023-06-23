import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { setLogout } from "../state";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function LoggedInDropdown({ userName, imagePath, userId }) {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUserId = useSelector((state) => state.user._id )

  return (
    <Menu as="div" className="">
      <div>
        <Menu.Button className={`flex items-center  transition-all duration-200 ${mode === 'light' ? "hover:bg-blue-200" : "hover:bg-slate-800"}  rounded-lg  ml-2`}>
          <div className="w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <img
              className="w-[30px] h-[30px] rounded-full"
              src={`http://localhost:3001/assets/${imagePath}`}
              alt="user"
            />
          </div>
          
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
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
        <Menu.Items className={`absolute right-0 z-50 mt-2 w-[8rem] mr-6 origin-top-left rounded-md ${mode === 'light' ? "bg-slate-200 text-slate-900" : "bg-[#051925] text-[#ced7e0]"}  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1">
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active
                        ? " transition-all ease-in-out"
                        : "",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    {userName.toLocaleString()}
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    onClick={() => navigate(`/profile/${userId}`)}
                    className={classNames(
                      active
                        ? "hover:bg-[#054569]  transition-all ease-in-out"
                        : "",
                      "block w-full px-4 py-2 text-left text-sm cursor-pointer"
                    )}
                  >
                    User Profile
                  </div>
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
                        ? "hover:bg-[#054569]  transition-all ease-in-out"
                        : "",
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
