import express from "express";
import {
  createData,
  deleteData,
  getData,
  updateData,
} from "../controllers/recipesController.js";

const recipe_Routes = express.Router();

recipe_Routes.get("/get-data", getData);

recipe_Routes.post("/createData", createData);
recipe_Routes.put("/updateData/:id", updateData);
recipe_Routes.delete("/deleteData/:id", deleteData);

export default recipe_Routes;
