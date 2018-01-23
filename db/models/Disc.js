const mongoose = require('mongoose')
const Schema = require('../schema')

const Disc = mongoose.model('Disc', Schema.DiscSchema)

module.exports = Disc