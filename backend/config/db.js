import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Recipe-Hub");
    console.log("Database Connected successfully!");
  } catch (error) {
    console.log("Error in connecting database", error);
  }
};
