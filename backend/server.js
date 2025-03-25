import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/mongo.js";

dotenv.config();
connectDb();
const app = express();
app.use(express.json());
app.use(cors());


// Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
