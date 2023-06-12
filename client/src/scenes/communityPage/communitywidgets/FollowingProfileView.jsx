import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../../../state";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const FriendView = ({ friendId, name, subtitle, userPicturePath }) => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams(); // viewed id
  const { _id } = useSelector((state) => state.user); // loggedin user
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

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


  return (
    <div className="flex flex-row items-center justify-between w-[100%] my-4">
      <div className="flex items-center">
        <img
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
          src={`http://localhost:3001/assets/${userPicturePath}`}
          alt="user"
          className="w-14 h-14 rounded-full cursor-pointer"
        />
        <div className="flex flex-col">
          <span
            className="text-white ml-4 cursor-pointer"
            onClick={() => {
              navigate(`/profile/${friendId}`);
              navigate(0);
            }}
          >
            {name}
          </span>
          <span className="text-gray-300 ml-4 text-sm italic">{subtitle}</span>
        </div>
      </div>
      

      {friendId !== _id  && (
        <div
          className="cursor-pointer hover:scale-[1.02] transition-all ease-in-out"
          onClick={() => patchFriend()}
        >
          {isFriend ? (
            <div className="text-2xl hover:text-blue-400 text-blue-200 bg-[#051925] rounded-full px-2 py-1 ">
              <ion-icon name="person-remove"></ion-icon>
            </div>
          ) : (
            <div className="text-2xl hover:text-blue-400 text-blue-200 bg-[#051925] rounded-full px-2 py-1 ">
              <ion-icon name="person-add"></ion-icon>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default FriendView;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
