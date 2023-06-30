import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setPosts } from "../../../state";
import PostWidget from "./PostWidget";

import React from "react";

const AllPostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);
  const mode = useSelector((state) => state.mode)

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const refetchPosts = () => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  };

  if (posts.length === 0) {
    return (
      <div className={` text-glow font-bold text-xl w-[100%] h-[100%] p-8 ${mode === 'light' ? "bg-slate-200 shadow-lg text-blue-900" : "bg-[#062c43] text-blue-100"}  rounded-lg`}>
        <h1>No posts yet..</h1>
      </div>
    );
  }


  return (
    <>
      {Array.isArray(posts) &&
        posts.map(
          ({
            _id,
            userId,
            userName,
            description,
            bio,
            picturePath,
            userPicturePath,
            likes,
            comments,
            createdAt
          }) => (
            <PostWidget
              key={_id}
              postId={_id}
              postUserId={userId}
              name={`${userName}`}
              description={description}
              bio={bio}
              picturePath={picturePath}
              userPicturePath={userPicturePath}
              likes={likes}
              comments={comments}
              refetchPosts={refetchPosts}
              getPosts={getPosts}
              createdAt={createdAt}
            />
          )
        )}
    </>
  );
};

export default AllPostsWidget;
