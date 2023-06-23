import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CommentingWidget = ({ commentImageUser, postId, comments }) => {
  const [comment, setComment] = useState("");
  const [fetchedComments, setFetchComments] = useState([])
  const token = useSelector((state) => state.token);
  const { _id } = useSelector((state) => state.user);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    const data = {
      postId: postId,
      comment: comment,
      commentor: _id,
      date: date,
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
    console.log(comments)
    setFetchComments(comments)
  };

//   console.log(fetchedComments)

  return (
    <>
      <div className="flex h-[100%] w-[100%] flex-row justify-center rounded-xl bg-[#051925]">
        <img
          className="h-12 w-12 rounded-full bg-blue-900 p-1"
          src={`http://localhost:3001/assets/${commentImageUser}`}
          alt="user image"
        />
        <h1 className="text-white">{postId}</h1>
        <form>
          <textarea
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="mx-3  w-full resize-none overflow-hidden rounded-2xl bg-[#15222b] text-white"
            placeholder="Comment here anon."
            name="comment"
            rows={1}
            style={{ height: "auto", minHeight: "40px" }}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `${e.target.scrollHeight}px`;
            }}
          ></textarea>
          <button
            onClick={(e) => {
              handleCommentSubmit(e);
              setComment("");
            }}
            type="submit"
            className="mr-1 mt-[10px] cursor-pointer  text-2xl hover:text-blue-400 "
          >
            <ion-icon name="send-outline"></ion-icon>
          </button>
        </form>
      </div>
      
      {fetchedComments.map((comment) => (
        <div className="ml-3 pt-1 text-white h-[200px] w-[100px]">
          <div>{comment.commentor}</div>
          <div>{comment.comment}</div>
          <div>{comment.date.toLocaleString()}</div>
          {/* break */}
          <div className="my-2 h-[0.1px] w-full bg-gray-800"></div>
        </div>
      ))}
    </>
  );
};

export default CommentingWidget;
