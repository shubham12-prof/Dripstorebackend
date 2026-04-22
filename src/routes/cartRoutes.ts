import { Router } from "express";
import {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} from "../controllers/cartController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/:id", protect, removeFromCart);
router.delete("/", protect, clearCart);

export default router;
