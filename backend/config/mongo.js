// Database Connection

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export function connectDb(){
    mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
}