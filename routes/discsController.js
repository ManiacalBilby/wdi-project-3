const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

router.get('/', (req, res) => {
    console.log(req.params.userId)
    const userId = req.params.userId

    User.findById(userId)
        .then((user) => {
            console.log(user.discs)
            res.json(user.discs)
        })
        .catch((error) => console.log(error))
})




module.exports = router