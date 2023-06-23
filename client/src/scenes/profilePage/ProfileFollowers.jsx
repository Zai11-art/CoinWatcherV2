import React from "react";
import FriendView from "../communityPage/communitywidgets/FollowingProfileView";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFollowers } from "../../state";

const ProfileFollowers = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const followers = useSelector((state) => state.user.followers);
  const { _id } = useSelector((state) => state.user); // loggedin user

  const getFollowers = async () => {
    const response = await fetch(
      `http://localhost:3001/users/${userId}/followers`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setFollowers({ followers: data }));
  };

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
    getFollowers();
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-dep

  return (
    <div
      className={`flex ${
        followers?.length > 5 ? "h-[100%]" : "h-screen"
      } w-[100%] flex-col items-center  bg-[#062c43] p-8 shadow-2xl`}
    >
      <div className="mt-3 flex h-[70px] w-[500px] items-center justify-between rounded-t-xl bg-[#051731] px-10">
        <Link
          to={`/profile/${userId}`}
          className="flex cursor-pointer items-center justify-center text-xl text-white hover:scale-[1.1] hover:text-blue-300"
        >
          <ion-icon name="arrow-back"></ion-icon>
        </Link>

        <div className="text-xl font-bold text-white">
          {user?.userName}s' Followers
        </div>

        <div className="flex cursor-pointer items-center justify-center text-xl text-white hover:scale-[1.1] hover:text-blue-300 invisible">
          <ion-icon name="arrow-forward"></ion-icon>
        </div>
      </div>
      <div
        className={`flex ${
          followers?.length > 5 ? "h-[100%]" : "h-[400px]"
        } w-[500px] flex-col items-center rounded-b-xl bg-[#0c101a] pt-4`}
      >
        {followers?.length ? (
          followers?.map((follower) => (
            <>
              <div className="flex w-[100%] px-12">
                <FriendView
                  key={follower._id}
                  friendId={follower._id}
                  name={`${follower.userName}`}
                  subtitle={follower.bio}
                  userPicturePath={follower.picturePath}
                />
              </div>

              <div className="h-[0.1px] w-[80%] bg-blue-300/30" />
            </>
          ))
        ) : (
          <h1 className="font-lg rounded-lg bg-slate-900 p-3 px-5 font-bold text-white">
            No Followers Yet.
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProfileFollowers;
