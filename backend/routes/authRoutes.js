import dotenv from "dotenv";
import express from "express";
import { register } from "../controller/auth.controller.js";

dotenv.config();
const router = express.Router();

// Register
router.post("/register", register);

// Login
router.post("/login", login);

// Logout
router.get("/logout", logout);

export default router;
