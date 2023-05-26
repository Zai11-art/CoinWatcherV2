import express from "express"; // backend framework
import {
    getUser, 
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js"; // controllers for user handling
import { verifyToken } from "../middleware/auth.js"; // verify using jwt

const router = express.Router();

//  READ 
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// UPDATE
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;

