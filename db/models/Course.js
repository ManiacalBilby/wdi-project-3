const mongoose = require('mongoose')
const Schema = require('../schema')

const Course = mongoose.model('Course', Schema.CourseSchema)

module.exports = Course