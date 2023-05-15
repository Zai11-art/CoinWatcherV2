import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { getAllPosts, getUserPosts, updateLikePost } from "../controllers/posts.js";

const router = express.Router();

// READ
router.get("/", verifyToken, getAllPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE LIKES
router.get("/:id/like", verifyToken, updateLikePost);

export default router;
