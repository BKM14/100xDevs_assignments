const jwt = require("jsonwebtoken");
jwtToken = "123456";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const authorization = req.headers.authorization;
        const tokenArray = authorization.split(" ");
        const token = tokenArray[1];
        if (jwt.verify(token, jwtPassword)) {
            next()
        }
    } catch {
        res.status(500).json({
            message: "Authentication Error",
        })
    }
}

module.exports = userMiddleware;