const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true},
    phone: {type: String, require: true},

},
    {
        timestamps: true,
        versionKey: false
    })

module.exports = model('User', userSchema);