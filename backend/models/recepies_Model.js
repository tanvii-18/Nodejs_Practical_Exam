import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema(
  {
    recipe_name: String,
    description: String,
    ingredients: Array,
  },
  { timestamps: true },
);

export const RecipesDataCollection = mongoose.model(
  "RecipeSchema",
  RecipeSchema,
);
