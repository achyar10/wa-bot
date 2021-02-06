const mongoose = require('mongoose')

const schema = mongoose.Schema({

    code: {
        type: String,
        unique: true
    },
    api: {
        type: Boolean,
        default: false
    },
    data: {
        type: String,
        default: ''
    }

})
module.exports = mongoose.model('bot', schema)