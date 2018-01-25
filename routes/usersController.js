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

router.get('/:userId', (req, res) => {
    console.log("USERID being searched:", req.params.userId)
    User.findById(req.params.userId)
    .then(user => {
        console.log("User found:", user)
        res.json(user)
    })
    .catch((error) => console.log(error))
})

router.delete('/:userId', (req, res) => {
    console.log("Entering Delete")
    const userId = req.params.userId
    console.log("Deleting: ", userId)

    User.findByIdAndRemove(userId)
    .then((user) => {
        console.log("Returning: ", user)
        res.json(user)
    })
    .catch((error) => console.log(error))
})

router.patch('/:userId', (req, res) => {
    console.log("Entering Edit")
    console.log(req.body)
    const userId = req.params.userId
    const updatedUserInfo = req.body
    console.log("Updating: ", userId)

    User.findByIdAndUpdate(userId, updatedUserInfo, {new: true})
    .then((user) => {
        console.log("Returning: ", user)
        res.json(user)
    })
    .catch((error) => console.log(error))
})


module.exports = router