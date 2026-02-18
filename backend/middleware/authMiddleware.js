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
