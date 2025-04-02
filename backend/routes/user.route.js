import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { joinNewsletter } from "../controller/user.controller.js";

const userRouter = express.Router();
userRouter.post("/newsletter", protectedRoute, joinNewsletter);

export default userRouter;
