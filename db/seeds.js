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
    const janeDoe = new User({
        firstName: 'Jane',
        lastName: 'Doe',
        username: 'DoeHunter',
        photoUrl: 'https://www.placecage.com/200/300',
        throwingHand: 'Left'
    })

    const prodigyDistanceDriver = new Disc({
        discType: 'Distance driver',
        discMake: 'Prodigy',
        discModel: 'D1',
        photoUrl: 'https://infinitediscs.com/Inf_Uploads/Disc_Images/da6e3f23-927e-4137-9a78-4d7bc4e3f0afProdigy%20D1%20400S.jpg',
        color: 'Blue'
    })

    janeDoe.discs.push(prodigyDistanceDriver)

    const oregonPark = new Course({
        courseName: 'Oregon Park',
        location: 'Marietta',
        holes: '18',
        teePad: 'Concrete',
        photoUrl: 'http://www.exploregeorgia.org/master/img/blog/2015/07/candycook_discgolf_deerlickpark.jpg'
    })

    janeDoe.courses.push(oregonPark)

    return janeDoe.save()
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