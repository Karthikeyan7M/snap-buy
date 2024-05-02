import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/usercontrollers.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();
//  ( /means   ->    /api/users)
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/logout", logoutUser); // (/api/users/logout)
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);
export default router;
