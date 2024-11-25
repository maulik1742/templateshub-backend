import * as UserService from "../services/userService.js"; // Import your service function
import jwt from "jsonwebtoken"; // Import JWT package

// create user
export const createUserController = async (req, res) => {
    try {
        const exist = await UserService.getUsers({ email: req.body?.email })
        console.log('exist :>> ', exist);
        if (exist.length > 0) {
            return res.status(200).json({
                success: false,
                message: "User Already exist",
            });
        }
        const userData = req.body; // Extract user data from the request body
        const newUser = await UserService.createUser(userData); // Call the service function to create the user
        return res.status(201).json({
            success: true,
            message: "User created successfully",
            data: newUser,
        });
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "Error creating user",
            error: error.message,
        });
    }
};

// login user
export const loginUserController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await UserService.loginUser(email, password);

        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: result.message,
            });
        }
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: result.token,
            user: {
                _id: result.user._id,
                name: result.user.name,
                email: result.user.email,
                isAdmin: result.user.isAdmin,
            },
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error: error.message,
        });
    }
};