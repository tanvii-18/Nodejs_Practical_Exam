import express from "express";
import { connectDB } from "./config/db.js";
import Cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import recipe_Routes from "./routes/recipeRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
connectDB();
app.use(cookieParser());
app.use(express.json());
app.use(Cors({ origin: "http://localhost:5173", Credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/recipes", recipe_Routes);

app.listen(4000, () => {
  console.log("Server Started Successfully!");
});
