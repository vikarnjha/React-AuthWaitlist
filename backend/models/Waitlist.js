import mongoose from "mongoose";

const WaitlistSchema = new mongoose.Schema({
  email: String,
  joinedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Waitlist", WaitlistSchema);
