import { UserDataCollection } from "../models/user_Model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const existingUser = await UserDataCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Exists Already!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserDataCollection.create({
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User Registered Successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "User Can't Register!" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserDataCollection.findOne({ email });

    console.log(user);
    if (!user) {
      return res.status(400).json({ message: "User not found!" });
    }

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched) {
      return res.status(400).json({ message: "Incorrect Password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.Token, {
      expiresIn: "1d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(200).json({ message: "Login Successfully!", token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Login Failed!", error: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout Successfully!" });
};
