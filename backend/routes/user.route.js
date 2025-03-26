import express from "express";
import { protectedRoute } from "../middleware/auth.js";
import { joinNewsletter } from "../controller/user.controller.js";

const userRouter = express.Router();
userRouter.use(protectedRoute);
userRouter.route("/newsletter").post(joinNewsletter);
export default userRouter;
