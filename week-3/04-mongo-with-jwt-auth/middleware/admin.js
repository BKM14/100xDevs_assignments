// Middleware for handling auth
const jwt = require("jsonwebtoken");
jwtPassword = "123456";

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const authorization = req.headers.authorization;
        const tokenArray = authorization.split(" ");
        const token = tokenArray[1];
        if (jwt.verify(token, jwtPassword)) {
            next();
        }
    } catch {
        res.status(404).json({
            message: "Authentication error",
        });
    }
}

module.exports = adminMiddleware;