import User from "../models/User.js";

// READ
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFollowers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const followers = await Promise.all(
      user.followers.map((id) => User.findById(id))
    );

    const formattedFollowers = followers.map(
      ({ _id, userName, picturePath, followers, following }) => {
        return { _id, userName, picturePath, followers, following };
      }
    );

    res.status(200).json(formattedFollowers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFollowing = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const followings = await Promise.all(
      user.following.map((id) => User.findById(id))
    );

    const formattedFollowing = followings.map(
      ({ _id, userName, picturePath, followers, following }) => {
        return { _id, userName, picturePath, followers, following };
      }
    );

    res.status(200).json(formattedFollowing);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// UPDATE or FOLLOWING OR UNFOLLOW
export const addRemoveFollowing = async (req, res) => {
  try {
    const { id, followingId } = req.params;
    const user = await User.findById(id);
    const following = await User.findById(followingId);

    if (user.followings.includes(followingId)) {
      user.followings = user.followings.filter((id) => id !== followingId);
      following.followers = following.followers.filter((id) => id !== id);
    } else {
      user.followings.push(followingId);
      following.followers.push(id);
    }

    await user.save();
    await following.save();

    const followings = await Promise.all(
      user.followings.map((id) => User.findById(id))
    );

    const formattedFollowings = followings.map(
      ({ _id, userName, picturePath, followers, following }) => {
        return { _id, userName, picturePath, followers, following };
      }
    );
    
    res.status(200).json(formattedFriends)
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};
