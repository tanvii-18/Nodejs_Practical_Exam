import jwt, { decode } from "jsonwebtoken";

export const registerUser = (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email) {
      return res.status(400).json({ message: "Email Requires!" });
    }

    if (!password) {
      return res.status(400).json({ message: "Password Requires!" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password Should be 8 Characters long!" });
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  try {
    const decoded = jwt.verify(token, process.env.Token);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(500).json({ message: "Invalid Token!" });
  }
};
