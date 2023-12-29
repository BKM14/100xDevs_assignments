const { Router } = require("express");
const { User } = require("../db");
const { Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    })
    await user.save();
    res.json({
        message: "User created succesfully",
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign({
        username, password
    }, jwtPassword);
    res.json({
        token: token,
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    res.json({
        courses: await Course.find(),
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const _id = req.params.courseId;
    const tokenArray = (req.headers.authorization).split(" ");
    const token = tokenArray[1];
    const userObj = jwt.decode(token, jwtPassword)
    const username = userObj.username;
    const password = userObj.password;
    const user = await User.findOne({username, password});
    const course = await Course.findOne({_id});
    console.log(user, course);
    user.coursesPurchased.push(course);
    user.markModified("coursesPurchased");
    await user.save();
    res.json({
        message: "Course purchased succesfully",
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const tokenArray = (req.headers.authorization).split(" ");
    const token = tokenArray[1];
    const userObj = jwt.decode(token, jwtPassword)
    const username = userObj.username;
    const password = userObj.password;
    const user = await User.findOne({username, password});
    res.json({
        purchasedCourses: await user.coursesPurchased,
    })
});

module.exports = router