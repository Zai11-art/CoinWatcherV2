import React from "react";
import Friend from "../communityPage/communitywidgets/Following";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setFriends } from "../../state";
import { useState } from "react";

const ProfileFollowings = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
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

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getFriends();
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className={`flex ${
        friends?.length > 5 ? "h-[100%]" : "h-screen"
      } w-[100%] flex-col items-center  bg-[#062c43] p-8 shadow-2xl`}
    >
      <div className="mt-3 flex h-[70px] w-[500px] items-center justify-between rounded-t-xl bg-[#051731] px-10">
        <Link to={`/profile/${userId}`} className="flex cursor-pointer items-center justify-center text-xl text-white hover:scale-[1.1] hover:text-blue-300">
          <ion-icon name="arrow-back"></ion-icon>
        </Link>

        <div className="text-xl font-bold text-white">
          {user?.userName}s' Following
        </div>

        <div className="flex cursor-pointer items-center justify-center text-xl text-white hover:scale-[1.1] hover:text-blue-300 invisible">
          <ion-icon name="arrow-forward"></ion-icon>
        </div>
      </div>
      <div
        className={`flex ${
          friends?.length > 5 ? "h-[100%]" : "h-[400px]"
        } w-[500px] flex-col items-center rounded-b-xl bg-[#0c101a] pt-4`}
      >
        {friends?.length ? (
          friends?.map((friend) => (
            <>
              <div className="flex w-[100%] px-12">
                <Friend
                  key={friend._id}
                  friendId={friend._id}
                  name={`${friend.userName}`}
                  subtitle={friend.bio}
                  userPicturePath={friend.picturePath}
                />
              </div>
              {/* break */}
              <div className="h-[0.1px] w-[80%] bg-blue-300/30" />
            </>
          ))
        ) : (
          <h1 className="font-lg rounded-lg bg-slate-900 p-3 px-5 font-bold text-white">
            Not Following Anyone.
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProfileFollowings;

// {friends?.map((friend) => (
//   <>
//     <Friend
//       key={friend._id}
//       friendId={friend._id}
//       name={`${friend.userName}`}
//       subtitle={friend.bio}
//       userPicturePath={friend.picturePath}
//     />
//     {/* break */}
//     <div className="bg-blue-300 w-full h-[0.1px] my-4" />
//   </>
// ))}
