const mongoose = require('mongoose');

const Userschema = new mongoose.Schema( {
    name: String,
    chat: String
});

const User = mongoose.model('User', Userschema);

module.exports = User;