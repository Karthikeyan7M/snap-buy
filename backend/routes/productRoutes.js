import express from "express";
import {
  getProducts,
  getProductById,
  createProductReview,
  getTopProducts,
} from "../controllers/productcontrollers.js";
import { protect, admin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.get("/top", getTopProducts);
router.route("/").get(getProducts);
router.route("/:id").get(getProductById);
router.route("/:id/reviews").post(protect, createProductReview);
export default router;
