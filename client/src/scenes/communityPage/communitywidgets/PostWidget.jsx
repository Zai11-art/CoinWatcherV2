import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../state";
import { useState } from "react";
<<<<<<< HEAD
import Friend from "./Following";
import CommentingWidget from "./commentingWidget";
import { setComments } from "../../../state";
import { setPosts } from "../../../state";
=======
import Following from "./Following";
import { setComments } from "../../../state";
import { setPosts } from "../../../state";
import { toast } from "react-toastify";
import { dateConverter } from "../../../state/utils/utils";
import { dateReformat } from "../../../state/utils/utils";
>>>>>>> origin/master

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  bio,
  picturePath,
  userPicturePath,
  likes,
  comments,
  webPath,
  refetchPosts,
<<<<<<< HEAD
=======
  createdAt,
>>>>>>> origin/master
}) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;
  const commentCount = Object.keys(comments).length;
  const { picturePath: commentImageUser } = useSelector((state) => state.user);

  const [comment, setComment] = useState("");
  const { _id } = useSelector((state) => state.user);
  const { userName } = useSelector((state) => state.user);
<<<<<<< HEAD
=======
  const mode = useSelector((state) => state.mode);
>>>>>>> origin/master

  // handling confirmation boxes
  const [showConfirmationPosts, setShowConfirmationPosts] = useState(false);
  const [showConfirmationComments, setShowConfirmationComments] =
    useState(false);

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

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const data = {
      postId: postId,
      userName: userName,
      comment: comment,
      commentor: _id,
      picturePath: commentImageUser,
    };
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const comments = await response.json();
    dispatch(setComments(comments));

    console.log(comments);
    setComment("");
    refetchPosts();
  };

  const handleDeleteComment = async (commentId) => {
<<<<<<< HEAD
    
=======
>>>>>>> origin/master
    console.log(commentId);

    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comments`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(commentId),
      }
    );

    const comments = await response.json();
    console.log(comments);
    dispatch(setComments(comments));
    refetchPosts();
  };

  const handleDeletePost = async (postId) => {
<<<<<<< HEAD
    const data = postId
   
    const response = await fetch(
      `http://localhost:3001/posts`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({postId: data}),
      }
    );

    const fetchedData = await response.json();
    console.log(fetchedData)
=======
    const data = postId;

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ postId: data }),
    });

    const fetchedData = await response.json();
    console.log(fetchedData);
>>>>>>> origin/master
    dispatch(setPosts({ posts: fetchedData }));
    refetchPosts();
  };

  return (
<<<<<<< HEAD
    <div className="mb-9 h-[100%] w-[100%] rounded-xl bg-[#062c43] p-7">
      <div className="rounded-2xl bg-[#071b27] p-4">
        <Friend
=======
    <div
      className={`mb-9 h-[100%] w-[100%] rounded-xl ${
        mode === "light" ? "bg-slate-200 shadow-xl" : "bg-[#062c43]"
      }  p-7`}
    >
      <div
        className={`rounded-2xl ${
          mode === "light"
            ? "bg-slate-300/20 text-slate-900 shadow-inner"
            : "bg-[#091b25] text-white"
        } p-4`}
      >
        <Following
>>>>>>> origin/master
          webPath={webPath}
          friendId={postUserId}
          name={name}
          subtitle={bio}
          userPicturePath={userPicturePath}
        />
<<<<<<< HEAD
=======

>>>>>>> origin/master
        {loggedInUserId == postUserId && (
          <div className="flex flex-row-reverse">
            <button
              onClick={() => setShowConfirmationPosts(!showConfirmationPosts)}
              className="mr-2 flex  cursor-pointer flex-row-reverse items-center text-xl text-red-500 hover:text-red-200 active:text-blue-500"
            >
<<<<<<< HEAD
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f405e] text-[1.4rem]">
=======
              <span
                className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full ${
                  mode === "light" ? "bg-slate-100 shadow-lg" : "bg-[#0f405e]"
                }  text-[1.4rem]`}
              >
>>>>>>> origin/master
                <ion-icon name="trash-bin-outline"></ion-icon>
              </span>
            </button>

            {showConfirmationPosts && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
<<<<<<< HEAD
                <div className="w-[200px] rounded-lg border-[0.02px] border-slate-500/40 bg-[#041625] p-6 shadow-xl shadow-blue-200/10 ">
                  {/* Pop-up content goes here */}
                  <h2 className="mb-4 text-lg font-bold text-blue-100">
                    Delete This Post?
                  </h2>
                  <div className="flex flex-col">
                    <span onClick={() => {handleDeletePost(postId)}} className="cursor-pointer text-[17px] font-semibold text-green-300 transition-all ease-in-out hover:bg-[#193952] hover:text-green-100">
=======
                <div
                  className={`w-[250px] rounded-lg border-[0.02px] ${
                    mode === "light"
                      ? "border-slate-500/40 bg-slate-200 text-blue-900 shadow-blue-200/10"
                      : "border-slate-500/40 bg-[#041625] text-blue-100 shadow-blue-200/10"
                  } p-6 shadow-xl  `}
                >
                  {/* Pop-up content goes here */}
                  <h2 className="mb-4 text-lg font-bold">Delete This Post?</h2>
                  <div className="flex flex-col">
                    <span
                      onClick={() => {
                        toast.success("Post deleted Successfully", {
                          theme: `${mode === "light" ? "light" : "colored"}`,
                        });
                        handleDeletePost(postId);
                      }}
                      className={`cursor-pointer text-[17px] font-semibold ${
                        mode === "light"
                          ? "rounded-lg p-1 text-green-500 hover:bg-slate-300 hover:text-green-500"
                          : "rounded-lg p-1 text-green-300 hover:bg-[#193952] hover:text-green-100"
                      }  transition-all ease-in-out `}
                    >
>>>>>>> origin/master
                      <ion-icon name="checkmark-outline"></ion-icon> Confirm
                    </span>
                    <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                    <span
                      onClick={() =>
                        setShowConfirmationPosts(!showConfirmationPosts)
                      }
<<<<<<< HEAD
                      className="cursor-pointer text-[17px] font-semibold text-red-400 transition-all ease-in-out hover:bg-[#193952] hover:text-red-100"
=======
                      className={`cursor-pointer text-[17px] font-semibold ${
                        mode === "light"
                          ? "rounded-lg p-1 text-red-500 hover:bg-slate-300 hover:text-red-500"
                          : "rounded-lg p-1 text-red-300 hover:bg-[#193952] hover:text-red-100"
                      }  transition-all ease-in-out `}
>>>>>>> origin/master
                    >
                      <ion-icon name="close-outline"></ion-icon> Cancel
                    </span>
                    <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-3">
<<<<<<< HEAD
          <p className="text-white">{description}</p>
        </div>
=======
          <p className="">{description}</p>
        </div>

>>>>>>> origin/master
        {picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            src={`http://localhost:3001/assets/${picturePath}`}
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          />
        )}
<<<<<<< HEAD
        <div className="mt-5 flex flex-row justify-between font-thin text-white">
=======

        <div className="group relative mt-2 flex w-28">
          <div
            data-popover-target="popover-default"
            className={`mr-1 text-[1rem] text-slate-900 hover:text-red-400`}
          >
            <ion-icon name="timer-outline"></ion-icon>
          </div>
          <div
            className={`absolute z-[100] hidden w-[150px] rounded-lg ${
              mode === "light"
                ? "text-glow bg-slate-100 text-blue-900 shadow-xl"
                : "bg-[#06132b] text-red-200 shadow-red-800/80"
            }  p-3 shadow-md  group-hover:block`}
          >
            <p className="text-xs font-bold">{dateReformat(createdAt)}</p>
          </div>
          <span className="mx-1 mb-1 text-[0.8rem] font-thin">
            {dateConverter(createdAt)}
          </span>
        </div>

        <div className="mt-5 flex flex-row justify-between font-thin ">
>>>>>>> origin/master
          <span>{likeCount} Likes</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => {
              setIsComments(!isComments);
            }}
          >
            {commentCount} Comments
          </span>
        </div>
<<<<<<< HEAD
        <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>

        <div className="flex w-[100%] flex-row justify-between rounded-lg bg-[#071b27] p-1">
          <div
            onClick={patchLike}
            className="flex w-full cursor-pointer items-center justify-center rounded-l-lg px-[2%] py-1 font-bold
          text-white transition-all ease-in-out hover:bg-blue-300 hover:text-black md:px-[3%]"
=======
        <div
          className={`my-1 mt-1  h-[1px] w-full ${
            mode === "light" ? "" : "bg-gray-600"
          }`}
        ></div>

        <div
          className={`flex w-[100%] flex-row justify-between rounded-lg ${
            mode === "light"
              ? "bg-slate-300/30 text-slate-900 shadow-md"
              : "bg-[#071b27] text-white"
          }  p-1`}
        >
          <div
            onClick={patchLike}
            className={`flex w-full cursor-pointer items-center justify-center rounded-l-lg px-[2%] py-1 font-bold
           transition-all ease-in-out ${
             mode === "light"
               ? "hover:bg-blue-400 hover:text-slate-100"
               : "hover:bg-blue-300 hover:text-black"
           }  md:px-[3%]`}
>>>>>>> origin/master
          >
            {isLiked ? (
              <div className="flex items-center">
                <span className="text-2xl text-blue-400">
                  <ion-icon name="heart"></ion-icon>
                </span>
                <span className="ml-2 text-blue-400">Liked</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-2xl">
                  <ion-icon name="heart-outline"></ion-icon>
                </span>
                <span className="ml-2">Like</span>
              </div>
            )}
          </div>
<<<<<<< HEAD
          <div
            onClick={() => setIsComments(!isComments)}
            className="flex w-full cursor-pointer items-center justify-center px-[2%] py-1 font-bold
          text-white transition-all ease-in-out hover:bg-blue-300 hover:text-black md:px-[3%]"
=======

          <div
            onClick={() => setIsComments(!isComments)}
            className={`flex w-full cursor-pointer items-center justify-center px-[2%] py-1 font-bold
            transition-all ease-in-out ${
              mode === "light"
                ? "hover:bg-blue-400 hover:text-slate-100"
                : "hover:bg-blue-300 hover:text-black"
            }  md:px-[3%]`}
>>>>>>> origin/master
          >
            <span className="text-2xl ">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            </span>
            <span className=" mb-1 ml-2">Comment</span>
          </div>
          <div
<<<<<<< HEAD
            className="flex w-full cursor-pointer items-center justify-center rounded-r-lg px-[2%]  py-1 font-bold
          text-white transition-all ease-in-out hover:bg-blue-300 hover:text-black md:px-[3%]"
=======
            className={`flex w-full cursor-pointer items-center justify-center rounded-r-lg px-[2%] py-1 font-bold
            transition-all ease-in-out ${
              mode === "light"
                ? "hover:bg-blue-400 hover:text-slate-100"
                : "hover:bg-blue-300 hover:text-black"
            }  md:px-[3%]`}
>>>>>>> origin/master
          >
            <span className="text-2xl ">
              <ion-icon name="repeat-outline"></ion-icon>
            </span>
            <span className=" ml-2">Repost</span>
          </div>
        </div>
<<<<<<< HEAD
        <div className="my-1  h-[1px] w-full bg-gray-600"></div>
=======
        <div
          className={`my-1 mt-1  h-[1px] w-full ${
            mode === "light" ? "" : "bg-gray-600"
          }`}
        ></div>
>>>>>>> origin/master
        {isComments && (
          // <div className="text-md mt-6 rounded-lg bg-[#051925] p-2  text-white">
          //   <CommentingWidget commentImageUser={commentImageUser} postId={postId} comments={comments}/>

          // </div>
          <>
<<<<<<< HEAD
            <div className="flex h-[100%] w-[100%] flex-row justify-around rounded-xl bg-[#051925] p-3">
              <img
                className="h-12 w-12 rounded-full bg-blue-900 p-1"
                src={`http://localhost:3001/assets/${commentImageUser}`}
                alt="user image"
              />
=======
            <div
              className={`flex h-[100%] w-[100%] flex-row justify-around rounded-xl ${
                mode === "light"
                  ? "bg-slate-300/20 shadow-inner"
                  : "bg-[#051925]"
              }  p-3`}
            >
              <div className="h-14 w-14">
                <img
                  className="h-12 w-12 rounded-full bg-blue-900 "
                  src={`http://localhost:3001/assets/${commentImageUser}`}
                  alt="user image"
                />
              </div>
>>>>>>> origin/master
              <form className="flex w-full">
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
<<<<<<< HEAD
                  className="mx-3 w-full resize-none overflow-hidden rounded-2xl bg-[#15222b] text-white"
=======
                  className={`mx-3 w-full resize-none overflow-hidden rounded-2xl ${
                    mode === "light"
                      ? "bg-slate-300/50 text-blue-900"
                      : "bg-[#062c43] text-white"
                  }`}
>>>>>>> origin/master
                  placeholder="Comment here anon."
                  name="comment"
                  rows={1}
                  style={{
<<<<<<< HEAD
                    height: "auto",
=======
                    height: "50px",
>>>>>>> origin/master
                    minHeight: "40px",
                    minWidth: "60%",
                    wordWrap: "break-word",
                  }}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                ></textarea>
                <button
                  onClick={(e) => {
                    handleCommentSubmit(e);
<<<<<<< HEAD
                    setComment("");
                  }}
                  type="submit"
                  className="mr-1 cursor-pointer text-2xl text-white hover:text-blue-400 "
=======
                    toast.success(`Comment submitted.`, {
                      theme: `${mode === "light" ? "light" : "colored"}`,
                    });
                    setComment("");
                  }}
                  type="submit"
                  className={`mr-1 cursor-pointer text-2xl ${
                    mode === "light"
                      ? "text-blue-500 hover:text-blue-400 "
                      : "text-white hover:text-blue-400 "
                  } `}
>>>>>>> origin/master
                >
                  <ion-icon name="send-outline"></ion-icon>
                </button>
              </form>
            </div>

            {comments?.map((comment) => (
<<<<<<< HEAD
              <div className=" h-[100%] w-[100%] pt-1 text-white">
                <div className=" flex h-[100%] w-[100%]  p-3">
                  <img
                    className="mt-1 h-12 w-12 rounded-full bg-blue-900 p-1"
=======
              <div className=" h-[100%] w-[100%] pt-1">
                <div className=" flex h-[100%] w-[100%]  p-3">
                  <img
                    className={`mt-1 h-12 w-12 rounded-full ${
                      mode === "light"
                        ? "bg-slate-300 shadow-inner"
                        : "bg-blue-900"
                    }  p-1`}
>>>>>>> origin/master
                    src={`http://localhost:3001/assets/${comment.userPicturePath}`}
                    alt="commentor image"
                  />

<<<<<<< HEAD
                  <div className="ml-4 flex h-[100%]  flex-col rounded-xl bg-[#143b57] p-2 px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mb-1 mr-2 font-bold">
                          {comment?.userName}
                        </span>
                        <ion-icon name="timer-outline"></ion-icon>
                        <span className="mx-1 text-[0.8rem] font-extralight">
                          {new Date(comment?.createdAt).toLocaleTimeString()}
=======
                  <div
                    className={`ml-4 flex h-[100%]  flex-col rounded-xl ${
                      mode === "light"
                        ? "bg-slate-300/30 shadow-inner"
                        : "bg-[#0c1327] shadow-inner"
                    } p-2 px-5 py-3`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-center">
                        <span className="mb-1 mr-2 font-bold">
                          {comment?.userName}
                        </span>

                        {/* time hover popup */}
                        <div className="group relative">
                          <div
                            data-popover-target="popover-default"
                            className={`mr-1 text-[1remm] text-slate-900 hover:text-red-400`}
                          >
                            <ion-icon name="timer-outline"></ion-icon>
                          </div>
                          <div
                            className={`absolute z-[100] hidden w-[150px] rounded-lg ${
                              mode === "light"
                                ? "text-glow bg-slate-100 text-blue-900 shadow-xl"
                                : "bg-[#06132b] text-red-200 shadow-red-800/80"
                            }  p-3 shadow-md  group-hover:block`}
                          >
                            <p className="text-sm font-bold">
                              {dateReformat(comment?.createdAt)}
                            </p>
                          </div>
                        </div>

                        <span className="mx-1 mb-1 text-[0.8rem] font-thin">
                          {dateConverter(comment?.createdAt)}
>>>>>>> origin/master
                        </span>
                      </div>

                      {comment.userId == _id && (
                        <>
                          <button
                            onClick={() =>
                              setShowConfirmationComments(
                                !showConfirmationComments
                              )
                            }
                            className="ml-2 flex  cursor-pointer items-center text-xl text-red-500 hover:text-red-200 active:text-blue-500"
                          >
<<<<<<< HEAD
                            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b293b] text-[1.6rem]">
=======
                            <span
                              className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full ${
                                mode === "light"
                                  ? "bg-blue-300/50 shadow-xl"
                                  : "bg-[#0b293b]"
                              }  text-[1.6rem]`}
                            >
>>>>>>> origin/master
                              <ion-icon name="close-outline"></ion-icon>
                            </span>
                          </button>

                          {showConfirmationComments && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
<<<<<<< HEAD
                              <div className="w-[250px] rounded-lg border-[0.02px] border-slate-500/40 bg-[#041625] p-6 shadow-xl shadow-blue-200/10 ">
                                {/* Pop-up content goes here */}
                                <h2 className="mb-4 text-lg font-bold text-blue-100">
=======
                              <div
                                className={`w-[250px] rounded-lg border-[0.02px] ${
                                  mode === "light"
                                    ? "border-slate-500/40 bg-slate-200 text-blue-900 shadow-blue-200/10"
                                    : "border-slate-500/40 bg-[#041625] text-blue-100 shadow-blue-200/10"
                                } p-6 shadow-xl  `}
                              >
                                {/* Pop-up content goes here */}
                                <h2 className="mb-4 text-lg font-bold ">
>>>>>>> origin/master
                                  Delete This Comment?
                                </h2>
                                <div className="flex flex-col">
                                  <span
                                    onClick={() => {
<<<<<<< HEAD
=======
                                      toast.success(`Comment deleted.`, {
                                        theme: `${
                                          mode === "light" ? "light" : "colored"
                                        }`,
                                      });
>>>>>>> origin/master
                                      handleDeleteComment({
                                        commentId: comment._id,
                                        postId: postId,
                                      });
                                      setShowConfirmationComments(
                                        !showConfirmationComments
                                      );
                                    }}
<<<<<<< HEAD
                                    className="cursor-pointer text-[17px] font-semibold text-green-300 transition-all ease-in-out hover:bg-[#193952] hover:text-green-100"
=======
                                    className={`cursor-pointer text-[17px] font-semibold ${
                                      mode === "light"
                                        ? "rounded-lg p-1 text-green-500 hover:bg-slate-300 hover:text-green-500"
                                        : "rounded-lg p-1 text-green-300 hover:bg-[#193952] hover:text-green-100"
                                    }  transition-all ease-in-out `}
>>>>>>> origin/master
                                  >
                                    <ion-icon name="checkmark-outline"></ion-icon>{" "}
                                    Confirm
                                  </span>
<<<<<<< HEAD
=======
                                  {/* break */}
>>>>>>> origin/master
                                  <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                                  <span
                                    onClick={() =>
                                      setShowConfirmationComments(
                                        !showConfirmationComments
                                      )
                                    }
<<<<<<< HEAD
                                    className="cursor-pointer text-[17px] font-semibold text-red-400 transition-all ease-in-out hover:bg-[#193952] hover:text-red-100"
=======
                                    className={`cursor-pointer text-[17px] font-semibold ${
                                      mode === "light"
                                        ? "rounded-lg p-1 text-red-500 hover:bg-slate-300 hover:text-red-500"
                                        : "rounded-lg p-1 text-red-300 hover:bg-[#193952] hover:text-red-100"
                                    }  transition-all ease-in-out `}
>>>>>>> origin/master
                                  >
                                    <ion-icon name="close-outline"></ion-icon>{" "}
                                    Cancel
                                  </span>
                                  <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </>
                      )}
<<<<<<< HEAD
                      {/* 
                        <button
              onClick={() => setShowConfirmation(!showConfirmation)}
              className="mr-2 flex  cursor-pointer flex-row-reverse items-center text-xl text-red-500 hover:text-red-200 active:text-blue-500">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f405e] text-[1.4rem]">
                <ion-icon name="trash-bin-outline"></ion-icon>
              </span>
            </button>
                      */}

                      {/* <span className="text-sm mx-1">{new Date(comment?.date).toLocaleDateString()}</span> */}
=======
>>>>>>> origin/master
                    </div>
                    <div className="flex h-[100%] w-[100%]  py-2 text-[1rem]">
                      <div className="flex h-full w-full items-center">
                        <span className="break-all text-[1rem]">
                          {comment?.comment}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* break */}
<<<<<<< HEAD
                <div className="my-2 h-[1px] w-full bg-gray-700"></div>
=======
                <div
                  className={`my-1 mt-1  h-[1px] w-full ${
                    mode === "light" ? "bg-slate-300" : "bg-gray-600"
                  }`}
                ></div>
>>>>>>> origin/master
              </div>
            ))}
          </>
        )}
      </div>
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
