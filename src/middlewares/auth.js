import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access denied. No token provided.",
        });
    }

    try {
        // Verify the JWT token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // `JWT_SECRET` should be in your .env file

        // Attach decoded token payload to the request object (user data)
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If token verification fails (expired or invalid)
        res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};

export default auth;
