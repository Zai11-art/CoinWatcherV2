import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcrypt";

// REGISTERING THE USER
export const register = async (req, res) => {
  try {
    const {
      userName,
      email,
      password,
      picturePath,
      followers,
      following,
      viewedProfile,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt(password, salt);

    const newUser = new User({
      userName,
      email,
      password: passwordHash,
      picturePath,
      followers,
      following,
      viewedProfile,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// LOGGING IN USER
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ msg: "user does not exist." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ msg: "username or password is wrong" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

// export const registerReplica = async (req, res) => {
//   try {
//     const {
//       userName,
//       email,
//       password,
//       picturePath,
//       followers,
//       following,
//       viewedProfile,
//     } = req.body;

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt(password, salt);

//     const newUser = new User({
//       userName,
//       email,
//       password: passwordHash,
//       picturePath,
//       followers,
//       following,
//       viewedProfile,
//     });

//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (error) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const loginReplica = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email: email });

//     if (!user) {
//       return res.status(400).json({ msg: "user not found." });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Wrong username or password" });
//     }

//     const token = await jwt.sign({ id: user._id }, process.JWT_SECRET);
//     delete user.password;
//     res.status(200).json({ token, user });
//   } catch (error) {
//     res.status(500).json({ error: err.message });
//   }
// };
