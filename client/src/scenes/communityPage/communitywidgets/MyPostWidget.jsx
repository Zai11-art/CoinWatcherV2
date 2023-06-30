import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { setPosts } from "../../../state";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
=======
import { toast } from "react-toastify";
import { setUserPosts } from "../../../state";
import { useParams } from "react-router-dom";
>>>>>>> origin/master

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
<<<<<<< HEAD
=======
  const mode = useSelector((state) => state.mode);
  const { id } = useParams();
>>>>>>> origin/master

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
<<<<<<< HEAD
    console.log(posts)
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <div className="w-full h-[200px] bg-[#062c43] mb-8 rounded-lg p-6">
=======
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
>>>>>>> origin/master
      <div className="flex justify-between">
        <img
          src={`http://localhost:3001/assets/${picturePath}`}
          alt=""
<<<<<<< HEAD
          className="w-14 h-14 rounded-full"
=======
          className="h-14 w-14 rounded-full"
>>>>>>> origin/master
        />
        <input
          onChange={(e) => setPost(e.target.value)}
          value={post}
          type="text"
<<<<<<< HEAD
          className="w-[90%] rounded-2xl bg-[#02131d] text-white mx-3"
=======
          className={`mx-3 w-[90%] rounded-2xl ${
            mode === "light"
              ? "bg-slate-300/50 text-blue-900"
              : "bg-[#062c43] text-white"
          }`}
>>>>>>> origin/master
          placeholder="Tweet it anon..."
        />
      </div>

      {/* break */}
<<<<<<< HEAD
      <div className="bg-blue-300 w-full h-[0.1px] my-6 opacity-60" />

      <div className="flex flex-row items-around justify-between">
=======
      <div
        className={`my-6 h-[0.1px] w-full ${
          mode === "light" ? "bg-blue-400" : "bg-blue-300"
        } `}
      />

      <div className="items-around flex flex-row justify-between">
>>>>>>> origin/master
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
<<<<<<< HEAD
            <div className="flex flex-row items-center border-dashed border-[0.5px] rounded-lg border-blue-200 px-5 mr-6">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!image ? (
                  <div className="flex justify-center items-center cursor-pointer hover:scale-[1.01] transition-all ease-in-out py-1">
                    <span className="text-3xl mt-1 text-blue-200">
                      <ion-icon name="image-outline"></ion-icon>
                    </span>
                    <p className="ml-2 mb-1 text-blue-200">Add Image Here</p>
                  </div>
                ) : (
                  <div className="ml-2 mb-1 text-blue-200 hover:scale-[1.04] transition-all ease-in-out cursor-pointer">
=======
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
>>>>>>> origin/master
                    {image.name.slice(0, 20) + "...." + "(click to change)"}
                  </div>
                )}
              </div>
              {image && (
                <div onClick={() => setImage(null)} className="flex">
<<<<<<< HEAD
                  <span className="text-4xl mt-1 text-red-300 cursor-pointer hover:scale-[1.1] transition-all ease-in-out">
=======
                  <span className="mt-1 cursor-pointer text-4xl text-red-300 transition-all ease-in-out hover:scale-[1.1]">
>>>>>>> origin/master
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                </div>
              )}
            </div>
          )}
        </Dropzone>

        <button
          disabled={!post}
<<<<<<< HEAD
          onClick={handlePost}
          className="bg-blue-500 px-6 text-white font-semibold rounded-lg text-lg 
        hover:bg-blue-200 hover:text-black transition-all ease-in-out "
=======
          onClick={() => {
            handlePost();
          }}
          className={`rounded-lg ${
            mode === "light"
              ? "newscard-filter-light border-[1px] border-blue-300 text-blue-900 text-glow hover:text-white"
              : "bg-blue-500 hover:bg-blue-200 hover:text-black "
          }  px-6 text-lg font-semibold
        transition-all ease-in-out `}
>>>>>>> origin/master
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
