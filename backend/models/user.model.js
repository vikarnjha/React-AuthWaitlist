import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userModel = mongoose.models.user || mongoose.model("user", UserSchema);
export default userModel;
