import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../state";
import { useState } from "react";
import Following from "./Following";
import { setComments } from "../../../state";
import { setPosts } from "../../../state";
import { toast } from "react-toastify";

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
  const mode = useSelector((state) => state.mode);

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
    dispatch(setPosts({ posts: fetchedData }));
    refetchPosts();
  };

  return (
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
          webPath={webPath}
          friendId={postUserId}
          name={name}
          subtitle={bio}
          userPicturePath={userPicturePath}
        />

        {loggedInUserId == postUserId && (
          <div className="flex flex-row-reverse">
            <button
              onClick={() => setShowConfirmationPosts(!showConfirmationPosts)}
              className="mr-2 flex  cursor-pointer flex-row-reverse items-center text-xl text-red-500 hover:text-red-200 active:text-blue-500"
            >
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0f405e] text-[1.4rem]">
                <ion-icon name="trash-bin-outline"></ion-icon>
              </span>
            </button>

            {showConfirmationPosts && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                <div
                  className={`w-[200px] rounded-lg border-[0.02px] ${
                    mode === "light" ? "" : "border-slate-500/40 bg-[#041625]"
                  }  p-6 shadow-xl shadow-blue-200/10 `}
                >
                  {/* Pop-up content goes here */}
                  <h2 className="mb-4 text-lg font-bold text-blue-100">
                    Delete This Post?
                  </h2>
                  <div className="flex flex-col">
                    <span
                      onClick={() => {
                        toast.success("Post deleted Successfully");
                        handleDeletePost(postId);
                      }}
                      className="cursor-pointer text-[17px] font-semibold text-green-300 transition-all ease-in-out hover:bg-[#193952] hover:text-green-100"
                    >
                      <ion-icon name="checkmark-outline"></ion-icon> Confirm
                    </span>
                    <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                    <span
                      onClick={() =>
                        setShowConfirmationPosts(!showConfirmationPosts)
                      }
                      className="cursor-pointer text-[17px] font-semibold text-red-400 transition-all ease-in-out hover:bg-[#193952] hover:text-red-100"
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
          <p className="">{description}</p>
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
        <div className="mt-5 flex flex-row justify-between font-thin ">
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
        <div className={`my-1 mt-1  h-[1px] w-full ${mode === 'light' ? "" : "bg-gray-600"}`}></div>

        <div
          className={`flex w-[100%] flex-row justify-between rounded-lg ${
            mode === "light"
              ? "bg-slate-300/30 shadow-md text-slate-900"
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

          <div
            onClick={() => setIsComments(!isComments)}
            className={`flex w-full cursor-pointer items-center justify-center px-[2%] py-1 font-bold
            transition-all ease-in-out ${
              mode === "light"
                ? "hover:bg-blue-400 hover:text-slate-100"
                : "hover:bg-blue-300 hover:text-black"
            }  md:px-[3%]`}
          >
            <span className="text-2xl ">
              <ion-icon name="chatbox-ellipses-outline"></ion-icon>
            </span>
            <span className=" mb-1 ml-2">Comment</span>
          </div>
          <div
            className={`flex w-full cursor-pointer items-center justify-center rounded-r-lg px-[2%] py-1 font-bold
            transition-all ease-in-out ${
              mode === "light"
                ? "hover:bg-blue-400 hover:text-slate-100"
                : "hover:bg-blue-300 hover:text-black"
            }  md:px-[3%]`}
          >
            <span className="text-2xl ">
              <ion-icon name="repeat-outline"></ion-icon>
            </span>
            <span className=" ml-2">Repost</span>
          </div>
        </div>
        <div className={`my-1 mt-1  h-[1px] w-full ${mode === 'light' ? "" : "bg-gray-600"}`}></div>
        {isComments && (
          // <div className="text-md mt-6 rounded-lg bg-[#051925] p-2  text-white">
          //   <CommentingWidget commentImageUser={commentImageUser} postId={postId} comments={comments}/>

          // </div>
          <>
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
              <form className="flex w-full">
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                  className={`mx-3 w-full resize-none overflow-hidden rounded-2xl ${
                    mode === "light"
                      ? "bg-slate-300/50 text-blue-900"
                      : "bg-[#062c43] text-white"
                  }`}
                  placeholder="Comment here anon."
                  name="comment"
                  rows={1}
                  style={{
                    height: "50px",
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
                    toast.success(`Comment submitted.`);
                    setComment("");
                  }}
                  type="submit"
                  className={`mr-1 cursor-pointer text-2xl ${
                    mode === "light"
                      ? "text-blue-500 hover:text-blue-400 "
                      : "text-white hover:text-blue-400 "
                  } `}
                >
                  <ion-icon name="send-outline"></ion-icon>
                </button>
              </form>
            </div>

            {comments?.map((comment) => (
              <div className=" h-[100%] w-[100%] pt-1">
                <div className=" flex h-[100%] w-[100%]  p-3">
                  <img
                    className={`mt-1 h-12 w-12 rounded-full ${
                      mode === "light"
                        ? "bg-slate-300 shadow-inner"
                        : "bg-blue-900"
                    }  p-1`}
                    src={`http://localhost:3001/assets/${comment.userPicturePath}`}
                    alt="commentor image"
                  />

                  <div
                    className={`ml-4 flex h-[100%]  flex-col rounded-xl ${
                      mode === "light"
                        ? "bg-slate-300/30 shadow-inner"
                        : "bg-blue-900"
                    } p-2 px-5 py-3`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="mb-1 mr-2 font-bold">
                          {comment?.userName}
                        </span>
                        <ion-icon name="timer-outline"></ion-icon>
                        <span className="mx-1 text-[0.8rem] font-extralight">
                          {new Date(comment?.createdAt).toLocaleTimeString()}
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
                            <span
                              className={`mt-1 flex h-6 w-6 items-center justify-center rounded-full ${
                                mode === "light"
                                  ? "bg-blue-300/50 shadow-xl"
                                  : "bg-[#0b293b]"
                              }  text-[1.6rem]`}
                            >
                              <ion-icon name="close-outline"></ion-icon>
                            </span>
                          </button>

                          {showConfirmationComments && (
                            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
                              <div
                                className={`w-[250px] rounded-lg border-[0.02px] ${
                                  mode === "light"
                                    ? "border-slate-500/40 bg-slate-200 text-blue-900 shadow-blue-200/10"
                                    : "border-slate-500/40 bg-[#041625] text-blue-100 shadow-blue-200/10"
                                } p-6 shadow-xl  `}
                              >
                                {/* Pop-up content goes here */}
                                <h2 className="mb-4 text-lg font-bold ">
                                  Delete This Comment?
                                </h2>
                                <div className="flex flex-col">
                                  <span
                                    onClick={() => {
                                      toast.success(`Comment deleted.`);
                                      handleDeleteComment({
                                        commentId: comment._id,
                                        postId: postId,
                                      });
                                      setShowConfirmationComments(
                                        !showConfirmationComments
                                      );
                                    }}
                                    className={`cursor-pointer text-[17px] font-semibold ${
                                      mode === "light"
                                        ? "text-green-500 hover:bg-slate-300 hover:text-green-500 rounded-lg p-1"
                                        : "text-green-300 hover:bg-[#193952] hover:text-green-100 rounded-lg p-1"
                                    }  transition-all ease-in-out `}
                                  >
                                    <ion-icon name="checkmark-outline"></ion-icon>{" "}
                                    Confirm
                                  </span>
                                  {/* break */}
                                  <div className="my-1 mt-1  h-[1px] w-full bg-gray-600"></div>
                                  <span
                                    onClick={() =>
                                      setShowConfirmationComments(
                                        !showConfirmationComments
                                      )
                                    }
                                    className={`cursor-pointer text-[17px] font-semibold ${
                                      mode === "light"
                                        ? "text-red-500 hover:bg-slate-300 hover:text-red-500 rounded-lg p-1"
                                        : "text-red-300 hover:bg-[#193952] hover:text-red-100 rounded-lg p-1"
                                    }  transition-all ease-in-out `}
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
                <div className={`my-1 mt-1  h-[1px] w-full ${mode === 'light' ? "bg-slate-300" : "bg-gray-600"}`}></div>
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
