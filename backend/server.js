import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/mongo.js";
import { authRouter } from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(

  {
    origin: ["http://localhost:5173", "https://react-auth-waitlist.vercel.app"],
    credentials: true,
  }
  
));

// Routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
