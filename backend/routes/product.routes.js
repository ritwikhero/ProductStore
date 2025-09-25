import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getAllProduct);

router.put("/:id", updateProduct);

export default router;
