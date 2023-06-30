import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, userName, bio, picturePath }) => {
        return { _id, userName, bio, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getFollowers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const followers = await Promise.all(
      user.followers.map((id) => User.findById(id))
    );

    const formattedFollowers = followers.map(
      ({ _id, userName, bio, picturePath }) => {
        return { _id, userName, bio, picturePath };
      }
    );
    res.status(200).json(formattedFollowers);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// update following

export const addFollowing = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    console.log(user);
    console.log("------------");
    console.log(friend);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.followers = friend.followers.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.followers.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, userName, bio, picturePath }) => {
        return { _id, userName, bio, picturePath };
      }
    );

    console.log("------friend after follow event------");
    console.log(user);
    console.log(friend);

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addToWatchList = async (req, res) => {
  try {
    const { id: coinId, name: coinName } = req.body;
    const { id } = req.params;
    const user = await User.findById(id)

     // Check if the coin already exists in the watchlist
     const existingCoin = user.coinWatchList.find(
      (coin) => coin.coinId === coinId
    );

    if (existingCoin) {
      return res.status(409).json({ message: 'Coin already exists in watchlist' });
    }

    // Add the coin to the watchlist
    user.coinWatchList.push({ coinId, coinName });

    // Save the updated user object
    await user.save();

    res.status(200).json(user.coinWatchList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const removeToWatchList = async (req, res) => {
  try {
    const {  id: coinId, } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);

    const coinIndex = user.coinWatchList.findIndex(
      (coin) => coin.coinId === coinId
    );
    console.log(coinIndex)

    if (coinIndex === -1) {
      return res.status(404).json({ message: 'Coin not found in watchlist' });
    }

    // Remove the coin from the watchlist
    user.coinWatchList.splice(coinIndex, 1);

    // Save the updated user object
    await user.save();

    res.status(200).json(user.coinWatchList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserWatchList = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)

    res.status(200).json(user.coinWatchList);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
