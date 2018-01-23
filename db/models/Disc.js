const mongoose = require('mongoose')
const Schema = require('../schema')

const User = mongoose.model('Disc', Schema.DiscSchema)

module.exports = Disc