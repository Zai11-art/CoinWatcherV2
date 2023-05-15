import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  getUser,
  getUserFollowers,
  getUserFollowing,
  addRemoveFollowing
} from "../controllers/users.js";

const router = express.Router();

// READ
router.get("/:id", getUser);
router.get("/:id/followers", verifyToken, getUserFollowers);
router.get("/:id/following", verifyToken, getUserFollowing);

// UPDATE
router.patch("/:id/:followingId", verifyToken, addRemoveFollowing);

export default router;
