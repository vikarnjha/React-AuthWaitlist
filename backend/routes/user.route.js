import express from "express";
import { joinWaitlist } from "../controller/user.controller.js";
const userRouter = express.Router();
userRouter.route("/waitlist").post(joinWaitlist);
export default userRouter;
