import express from "express";
import { loginUser, register } from "../controllers/authControllers.js";
import { registerUser } from "../middleware/authMiddleware.js";

const authRoutes = express.Router();

authRoutes.post("/register", registerUser, register);
authRoutes.post("/login", loginUser);

export default authRoutes;
