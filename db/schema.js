const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: [true, 'Course name is required']
    },
    location: {
        type: String,
        required: false
    },
    holes: {
        type: Number,
        required: false
    },
    teePad: {
        type: String,
        required: false
    },
    photoUrl: {
        type: String,
        required: false
    }
})

const DiscSchema = new Schema({
    discType: {
        type: String,
        enum: ['Distance driver', 'Fairway driver', 'Mid-range', 'Putter'],
        required: [true, 'Disc type is required']
    },
    discMake: {
        type: String,
        required: false
    },
    discModel: {
        type: String,
        required: false
    },
    photoUrl: {
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
    courses: [CourseSchema],
    discs: [DiscSchema]
},
    {
        timestamps: {},
        usePushEach: true
    }
)

module.exports = {
    UserSchema,
    DiscSchema,
    CourseSchema
}