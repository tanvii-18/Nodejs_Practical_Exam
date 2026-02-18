import { RecipesDataCollection } from "../models/recepies_Model.js";

export const createData = async (req, res) => {
  const { recipe_name, description, ingredients } = req.body;

  try {
    await RecipesDataCollection.create({
      recipe_name,
      description,
      ingredients,
      rating: 0,
      view: 0,
    });

    return res.status(201).json({ message: "Recipe Created Successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error in Creating Data" });
  }
};

export const getData = async (req, res) => {
  try {
    const data = await RecipesDataCollection.find({});

    return res
      .status(200)
      .json({ message: "Fetching Data successfully!", data });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error in fetching Data" });
  }
};

export const updateData = async (req, res) => {
  try {
    await RecipesDataCollection.updateOne(req.body);

    return res.status(200).json({ message: "Data Updated Successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error in updating Data" });
  }
};

export const deleteData = async (req, res) => {
  const id = req.params;
  try {
    if (!id) {
      return res.status(400).json({ message: "data not found" });
    }
    await RecipesDataCollection.deleteOne({ id });

    return res.status(200).json({ message: "Data Deleted Successfully!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Error in Deleting Data" });
  }
};
