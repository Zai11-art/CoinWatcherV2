import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  isLoggedIn: false,
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setFollowers: (state, action) => {
      if (state.user) {
        state.user.followers = action.payload.followers;
      } else {
        console.error("Followers non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
<<<<<<< HEAD
=======
    setUserPosts: (state, action) => {
      const matchedUserPosts = state.posts.filter((post) => post.userName === action.payload.user.userName);
      state.posts = matchedUserPosts;
    },
>>>>>>> origin/master
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
    setComments: (state, action) => {
      const { postId, comment } = action.payload;
      const updatedPosts = state.posts.map((post) => {
        if (post._id === postId) {
          const updatedComments = [...post.comments, comment];
          return { ...post, comments: updatedComments };
        }
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const {
  setMode,
  setLogin,
  setLogout,
  setFriends,
  setPosts,
  setPost,
  setFollowers,
<<<<<<< HEAD
=======
  setUserPosts,
>>>>>>> origin/master
  setComments,
} = authSlice.actions;
export default authSlice.reducer;
