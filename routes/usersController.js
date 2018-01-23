const express = require('express')
const User = require('../db/models/User')
const router = express.Router()

router.get('/', (req, res) => {
    User.find()
    .then(users => {
        res.json(users)
    })
    .catch((error) => console.log(error))
})


module.exports = router