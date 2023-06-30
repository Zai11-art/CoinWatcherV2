import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../../../state";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
=======
import { toast } from "react-toastify";

const Following = ({ friendId, name, subtitle, userPicturePath }) => {
>>>>>>> origin/master
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams(); // viewed id
  const { _id } = useSelector((state) => state.user); // loggedin user
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
<<<<<<< HEAD
=======
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master

  const isFriend = friends.find((friend) => friend?._id === friendId);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response?.json();
    // console.log(data)
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-dep

  const patchFriend = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${_id}/${friendId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

<<<<<<< HEAD


  return (
    <div className="flex flex-row items-center justify-between w-[100%] my-4">
=======
  return (
    <div
      className={`my-2  flex w-[100%] flex-row items-center justify-between ${
        mode === "light" ? "texct-slate-900" : "text-white"
      }`}
    >
>>>>>>> origin/master
      <div className="flex items-center">
        <img
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
          src={`http://localhost:3001/assets/${userPicturePath}`}
          alt="user"
<<<<<<< HEAD
          className="w-14 h-14 rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <span
            className="text-white ml-4 cursor-pointer font-bold"
=======
          className="h-14 w-14 cursor-pointer rounded-full"
        />
        <div className="flex flex-col">
          <span
            className="ml-4 cursor-pointer font-bold "
>>>>>>> origin/master
            onClick={() => {
              navigate(`/profile/${friendId}`);
              navigate(0);
            }}
          >
            {name}
          </span>
<<<<<<< HEAD
          <span className="text-gray-300 ml-4 text-sm italic">{subtitle}</span>
        </div>
      </div>
      

      {friendId !== _id && (
        <div
          className="cursor-pointer hover:scale-[1.02] transition-all ease-in-out"
          onClick={() => patchFriend()}
        >
          {isFriend ? (
            <div className="text-2xl hover:text-blue-400 text-blue-200 bg-[#0f405e] rounded-full px-2 py-1 ">
              <ion-icon name="person-remove"></ion-icon>
            </div>
          ) : (
            <div className="text-2xl hover:text-blue-400 text-blue-200 bg-[#0f405e] rounded-full px-2 py-1 ">
=======
          <span className="ml-4 text-sm italic">{subtitle}</span>
        </div>
      </div>

      {friendId !== _id && (
        <div
          className="cursor-pointer transition-all ease-in-out hover:scale-[1.02]"
          onClick={() => {
            patchFriend();

            isFriend
              ? toast.success(`You unfollowed ${name}.`, {
                  theme: `${mode === "light" ? "light" : "colored"}`,
                })
              : toast.success(`You followed ${name}.`, {
                  theme: `${mode === "light" ? "light" : "colored"}`,
                });
          }}
        >
          {isFriend ? (
            <div
              className={`rounded-full ${
                mode === "light"
                  ? "bg-slate-100 text-blue-500/90 shadow-lg hover:text-blue-300"
                  : "bg-[#0f405e] text-blue-200 hover:text-blue-400"
              }  px-2 py-1 text-2xl  `}
            >
              <ion-icon name="person-remove"></ion-icon>
            </div>
          ) : (
            <div
              className={`rounded-full ${
                mode === "light"
                  ? "bg-slate-100 text-blue-500/90 shadow-lg hover:text-blue-300"
                  : "bg-[#0f405e] text-blue-200 hover:text-blue-400"
              }  px-2 py-1 text-2xl  `}
            >
>>>>>>> origin/master
              <ion-icon name="person-add"></ion-icon>
            </div>
          )}
        </div>
      )}
<<<<<<< HEAD
      
=======
>>>>>>> origin/master
    </div>
  );
};

<<<<<<< HEAD
export default Friend;
=======
export default Following;
>>>>>>> origin/master
