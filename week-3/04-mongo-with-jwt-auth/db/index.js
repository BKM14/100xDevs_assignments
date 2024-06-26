const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Ny6JIvy51pxiUoKd@cluster0.mssgl9t.mongodb.net/courseSellingJWT');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    coursesPurchased: {
        type: Object,
        default: [],
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: {
        type: Boolean,
        default: false,
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}