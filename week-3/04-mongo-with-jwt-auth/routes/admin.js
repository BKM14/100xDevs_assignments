const { Router } = require("express");
const { Admin } = require("../db");
const { Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
jwtPassword = "123456";

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const admin = new Admin({
        username: req.body.username,
        password: req.body.password,
    })
    await admin.save();
    res.json({
        message: "Admin created succesfully",
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const token = jwt.sign({
        username: req.body.username,
        password: req.body.password,
    }, jwtPassword);
    res.json({
        token: token,
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    })
    course.published = true;
    await course.save();
    res.json({
        message: "Course created succesfully",
        courseId: course._id,
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    res.json({
        "courses": await Course.find()
    });
});

module.exports = router;