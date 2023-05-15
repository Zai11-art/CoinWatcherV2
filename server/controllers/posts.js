import User from "../models/User.js";
import Post from "../models/Post.js";

// CREATING A POST
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath, userMood } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      userName: user.userName,
      likes: {},
      comments: [],
      mood: userMood,
      description,
      picturePath,
      userPicturePath: user.picturePath,
    });

    await newPost.save();
    const post = await Post.find();
    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ error: err.message });
  }
};

// READ or GET USER POSTS
export const getAllPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.body;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE or UPDATE POSTS
export const updateLikePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (!isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId.true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};
