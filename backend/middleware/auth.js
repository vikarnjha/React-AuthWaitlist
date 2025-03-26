import jwt from "jsonwebtoken";

const protectedRoute = async (req, res, next) => {
  try {
    
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not logged in",
        success: false,
      });
    }
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    req._id = payload.id;
    console.log("user",req._id);
    next();

  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};
export { protectedRoute }
