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

router.post('/', (req, res) => {
    const newUser = new User(req.body.user)
    newUser.save()
    .then((user) => {
        res.json(user)
    })
    .catch((error) => console.log(error))
})

router.delete('/:userId/delete', (req, res) => {
    const userId = request.params.userId

    User.findByIdAndRemove(userId)
    .then((user) => {
        res.json(user)
    })
    .catch((error) => console.log(error))
})


module.exports = router