import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { setPosts } from "../../../state";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserPosts } from "../../../state";
import { useParams } from "react-router-dom";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const mode = useSelector((state) => state.mode);
  const { id } = useParams();

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    console.log(posts);
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");

    response && toast.success("Posted successfully",
    { theme: `${mode === "light" ? "light" : "colored"}` });
  };

  return (
    <div
      className={`mb-8 h-[200px] w-full rounded-lg ${
        mode === "light"
          ? "bg-slate-200 text-blue-900 shadow-xl"
          : "bg-[#062c43] text-white"
      }  p-6`}
    >
      <div className="flex justify-between">
        <img
          src={`http://localhost:3001/assets/${picturePath}`}
          alt=""
          className="h-14 w-14 rounded-full"
        />
        <input
          onChange={(e) => setPost(e.target.value)}
          value={post}
          type="text"
          className={`mx-3 w-[90%] rounded-2xl ${
            mode === "light"
              ? "bg-slate-300/50 text-blue-900"
              : "bg-[#062c43] text-white"
          }`}
          placeholder="Tweet it anon..."
        />
      </div>

      {/* break */}
      <div
        className={`my-6 h-[0.1px] w-full ${
          mode === "light" ? "bg-blue-400" : "bg-blue-300"
        } `}
      />

      <div className="items-around flex flex-row justify-between">
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className={`mr-6 flex flex-row items-center rounded-lg border-[0.5px] border-dashed ${
                mode === "light" ? "border-blue-800" : "border-blue-200"
              }  px-5`}
            >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!image ? (
                  <div className="flex cursor-pointer items-center justify-center py-1 transition-all ease-in-out hover:scale-[1.01]">
                    <span className="mt-1 text-3xl ">
                      <ion-icon name="image-outline"></ion-icon>
                    </span>
                    <p className="mb-1 ml-2 ">Add Image Here</p>
                  </div>
                ) : (
                  <div className="mb-1 ml-2 cursor-pointer  transition-all ease-in-out hover:scale-[1.04]">
                    {image.name.slice(0, 20) + "...." + "(click to change)"}
                  </div>
                )}
              </div>
              {image && (
                <div onClick={() => setImage(null)} className="flex">
                  <span className="mt-1 cursor-pointer text-4xl text-red-300 transition-all ease-in-out hover:scale-[1.1]">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                </div>
              )}
            </div>
          )}
        </Dropzone>

        <button
          disabled={!post}
          onClick={() => {
            handlePost();
          }}
          className={`rounded-lg ${
            mode === "light"
              ? "newscard-filter-light border-[1px] border-blue-300 text-blue-900 text-glow hover:text-white"
              : "bg-blue-500 hover:bg-blue-200 hover:text-black "
          }  px-6 text-lg font-semibold
        transition-all ease-in-out `}
        >
          Post
        </button>
      </div>
      <button></button>
    </div>
  );
};

export default MyPostWidget;

// HEX CODES:
// #051925
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0
