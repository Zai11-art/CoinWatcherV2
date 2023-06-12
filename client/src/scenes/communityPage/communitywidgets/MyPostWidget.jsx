import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import { setPosts } from "../../../state";
import { useDispatch, useSelector } from "react-redux";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);

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
    console.log(posts)
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <div className="w-full h-[200px] bg-[#062c43] mb-8 rounded-lg p-6">
      <div className="flex justify-between">
        <img
          src={`http://localhost:3001/assets/${picturePath}`}
          alt=""
          className="w-14 h-14 rounded-full"
        />
        <input
          onChange={(e) => setPost(e.target.value)}
          value={post}
          type="text"
          className="w-[90%] rounded-2xl bg-[#02131d] text-white mx-3"
          placeholder="Tweet it anon..."
        />
      </div>

      {/* break */}
      <div className="bg-blue-300 w-full h-[0.1px] my-6 opacity-60" />

      <div className="flex flex-row items-around justify-between">
        <Dropzone
          acceptedFiles=".jpg,.jpeg,.png"
          multiple={false}
          onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
        >
          {({ getRootProps, getInputProps }) => (
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
                    {image.name.slice(0, 20) + "...." + "(click to change)"}
                  </div>
                )}
              </div>
              {image && (
                <div onClick={() => setImage(null)} className="flex">
                  <span className="text-4xl mt-1 text-red-300 cursor-pointer hover:scale-[1.1] transition-all ease-in-out">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>
                </div>
              )}
            </div>
          )}
        </Dropzone>

        <button
          disabled={!post}
          onClick={handlePost}
          className="bg-blue-500 px-6 text-white font-semibold rounded-lg text-lg 
        hover:bg-blue-200 hover:text-black transition-all ease-in-out "
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
