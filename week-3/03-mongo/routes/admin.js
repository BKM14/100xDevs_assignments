const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const adminObj = {
        username: username,
        password: password,
    }
    const newAdmin = new Admin(adminObj);
    newAdmin.save().then(() => {
        res.json({
            message: "Admin created successfully",
        })
    })
});
router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let courseObj = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,

    }
    const newCourse = new Course(courseObj);
    newCourse.published = true;
    newCourse.save().then(() => {
        ;
        res.json({
            message: "Course created successfully",
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        res.json(data);
    });
});

module.exports = router;