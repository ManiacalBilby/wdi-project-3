require('dotenv').config()
const User = require('./models/User')
const Disc = require('./models/Disc')
const Course = require('./models/Course')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', () => {
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
        username: 'DeerHunter',
        photoUrl: 'https://www.placecage.com/200/300',
        throwingHand: 'Right'
    })

    const innovaDistanceDriver = new Disc({
        discType: 'Distance driver',
        discMake: 'Innova',
        discModel: 'Vulcan',
        photoUrl: 'https://www.innovadiscs.com/wp-content/uploads/2016/01/vulcan_01.jpg',
        color: 'Red'
    })

    johnDoe.discs.push(innovaDistanceDriver)

    const deerLickPark = new Course({
        courseName: 'Deer Lick Park',
        location: 'Douglasville',
        holes: '18',
        teePad: 'Concrete / Clay',
        photoUrl: 'http://www.exploregeorgia.org/master/img/blog/2015/07/candycook_discgolf_deerlickpark.jpg'
    })

    johnDoe.courses.push(deerLickPark)

    return johnDoe.save()
})
.catch((error) => {
    console.log(error)
})

.then(() => {
    mongoose.connection.close()
    console.log(`Finished seeding database...
    
    Disconnected from MongoDB
    `)
})
.catch((error) => {
    console.log(error)
})