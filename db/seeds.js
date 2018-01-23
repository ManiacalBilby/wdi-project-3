require('dotenv').config()
const User = required('./models/User')
const Disc = required('./models/Disc')
const Course = required('./models/Course')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open,' () => {
    console.log('Mongoose has connected to MongoDB')
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error! ${error}`)
    process.exit(-1)
})


User.remove({}).then(() => {
    const johnDoe = new User({
        firstName: 'John',
        lastName: 'Doe',
        userName: 'DeerHunter',
        photoUrl: 'https://www.placecage.com/200/300',
        throwingHand: 'Right'
    })

    const InnovaDistanceDriver = new Disc({
        discType: 'Distance driver',
        discMake: 'Innova',
        discModel: 'Vulcan',
        photoUrl: 'https://www.innovadiscs.com/wp-content/uploads/2016/01/vulcan_01.jpg',
        color: 'Red'
    })
})