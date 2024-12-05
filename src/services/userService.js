import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const createUser = (data) => {
  const user = new User(data);
  return user.save();
};

export const getUsers = (data = {}) => {
  const user = User.find(data);

  return user;
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }
    if (user.password !== password) {
      return { success: false, message: "Invalid password" };
    }

    console.log("process.env.JWT_SECRET :>> ", process.env.JWT_SECRET);
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    console.log("token :>> ", token);
    return { success: true, token, user };
  } catch (error) {
    throw new Error("Error logging in user: " + error.message);
  }
};
