import Post from "../models/Post.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      userName: user.userName,
      bio: user.bio,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// CREATE COMMENT ON POST
export const addComment = async (req, res) => {
  try {
    const { picturePath, comment, commentor } = req.body;
    const { id } = req.params;
    const user = await User.findById(commentor);
    const post = await Post.findById(id);

    const newComment = new Comment({
      postId: post._id,
      userName: user.userName,
      userId: commentor,
      bio: user.bio,
      comment: comment,
      userPicturePath: picturePath,
      likes: {},
    });

    if (!post) {
      throw new Error("Post not found");
    }

    post.comments = post.comments.concat(newComment);

    await newComment.save();
    await post.save();

    res.status(200).json(post.comments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// REMOVE COMMENT ON POST
export const deleteComment = async (req, res) => {
  try {
     const { commentId } = req.body;
    const { id } = req.params;

    const post = await Post.findById(id);

    const commentIndex = post.comments.findIndex(
      (comment) => comment._id.equals(commentId)
    );
    console.log(commentIndex)

    if (commentIndex === -1) {
      throw new Error("Comment does not exist");
    }

    post.comments.splice(commentIndex - 1, 1);

    await post.save();

    res.status(200).json(post.comments);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* DELETE POST */
export const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const post = await Post.findByIdAndDelete(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
