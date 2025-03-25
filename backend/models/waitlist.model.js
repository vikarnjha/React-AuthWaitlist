import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  email: String,
  
}, { timestamps: true });

export default mongoose.model("waitlist", WaitlistSchema);
