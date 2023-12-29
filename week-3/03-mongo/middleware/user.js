const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({ username, password}).then((user) => {
        if (user) {
            next();
        } else {
            res.json("Invalid username or password");
        }
    })
}

module.exports = userMiddleware;