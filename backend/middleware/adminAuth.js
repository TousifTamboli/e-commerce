import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.token; // Correct way to extract token
    if (!token) {
      return res.status(401).json({ success: false, message: "Token missing. Not authorized." });
    }

    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Validate the admin role or email in the token payload
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Invalid token. Not authorized." });
    }

    // Pass control to the next middleware if authorized
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid or expired token. Not authorized." });
  }
};

export default adminAuth;
