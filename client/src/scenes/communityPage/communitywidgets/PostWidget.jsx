import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../state";
import { useState } from "react";
import Friend from "./Following";

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  webPath,
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <div className="w-[100%] h-[100%] p-8 bg-[#062c43] mb-9 rounded-xl">
      <Friend
        webPath={webPath}
        friendId={postUserId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <div className="mt-3">
        <p className="text-white">{description}</p>
      </div>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          src={`http://localhost:3001/assets/${picturePath}`}
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
        />
      )}
      <div className="flex flex-row justify-between w-[100%] mt-6">
        <div
          onClick={patchLike}
          className="flex items-center md:px-[3%] px-[2%] py-1 justify-center bg-[#051925] rounded-lg font-bold
          hover:bg-blue-300 text-white hover:text-black transition-all ease-in-out cursor-pointer"
        >
          {isLiked ? (
            <div className="flex items-center">
              <span className="text-2xl">
                <ion-icon name="thumbs-up"></ion-icon>
              </span>
              <span className="ml-2">Liked</span>
            </div>
          ) : (
            <div className="flex items-center">
              <span className="text-2xl">
                <ion-icon name="thumbs-up-outline"></ion-icon>
              </span>
              <span className="ml-2">Like</span>
            </div>
          )}
        </div>
        <div
          onClick={() => setIsComments(!isComments)}
          className="flex items-center md:px-[3%] px-[2%] py-1 justify-center  bg-[#051925] rounded-lg font-bold
          hover:bg-blue-300 text-white hover:text-black transition-all ease-in-out cursor-pointer"
        >
          <span className="text-2xl ">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
          </span>
          <span className=" ml-2 mb-1">Comment</span>
        </div>
        <div
          className="flex items-center md:px-[3%] px-[2%] py-1 justify-center  bg-[#051925] rounded-lg font-bold
          hover:bg-blue-300 text-white hover:text-black transition-all ease-in-out cursor-pointer"
        >
          <span className="text-2xl ">
            <ion-icon name="share-social-outline"></ion-icon>
          </span>
          <span className=" ml-2">Share</span>
        </div>
      </div>
      {isComments && (
        <div className="text-white text-md mt-6 bg-[#051925] rounded-lg ">
          {comments.map((comment, i) => (
            <div className="ml-3 pt-1">
              <div key={`${comment}-${i}`}>
                <span>{comment}</span>
              </div>
              {/* break */}
              <div className="bg-gray-800 w-full h-[0.1px] my-2"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostWidget;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
