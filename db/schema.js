const mongoose = require('mongoose')
const Schema = mongoose.Schema


const DiscSchema = new Schema({
    discType: {
        type: String,
        enum: ['Distance driver', 'Fairway driver', 'Mid-range', 'Putter'],
        required: [true, 'Disc type is required']
    },
    photoUrl: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    color: {
        type: String,
        required: false
    }
})

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'First name is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true
    },
    photoUrl: {
        type: String,
        required: false
    },
    throwingHand: {
        type: String,
        enum: ['Right', 'Left', 'Ambi'],
        required: false
    },
    Courses: [CourseSchema],
    Discs: [DiscSchema]
},
    {
        timestamps: {},
        usePushEach: true
    }
)

module.exports = {
    UserSchema,
    DiscSchema
}