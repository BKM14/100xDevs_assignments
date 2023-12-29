const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const { Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const userObj = {
        username, password
    };
    const newUser = new User(userObj);
    newUser.save().then(res.json({
        message: "User created succesfully",
    }))
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((courses) => res.json(courses));
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const course = await Course.findOne({ _id: courseId})
    const user = await User.findOne({ username: req.headers.username, password: req.headers.password});
    user.coursesPurchased.push(course);
    await user.markModified('coursesPurchased');
    await user.save();
    res.json({
        message: "Course purchased succesfully",
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({username: req.headers.username});
    res.json({
        purchasedCourses: user.coursesPurchased,
    })

});


module.exports = router