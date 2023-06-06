import React from "react";
import Friend from "./Following";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../../state";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

  // console.log(friends);

  const getFriends = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/friends`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // {
  //   friends.map((friend) => {
  //     console.log(friend.firstName);
  //   });
  // }
  return (
    <div className="h-[100%] w-[100%] rounded-t-lg bg-[#062c43] mb-5 mt-6">
      <div className="w-[100%] h-[45px] bg-[#054569] rounded-t-lg px-6 py-3">
        <h1 className="font-semibold text-white">Friends</h1>
      </div>
      <div className="px-6 p-2 w-[100%] flex flex-col rounded-b-lg mt-2 ">
        {friends.map((friend) => (
          <>
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
            {/* break */}
            <div className="bg-blue-300 w-full h-[0.1px] my-4" />
          </>
        ))}
      </div>
    </div>
  );
};

export default FriendListWidget;
