const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    petfinderId: {
        type: Number,
        required: [true, 'You need to have a petfinder id']
    }
})

module.exports = mongoose.model('User', userSchema)
