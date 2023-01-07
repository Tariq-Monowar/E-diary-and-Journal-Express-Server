const { default: mongoose } = require("mongoose");

const userSchma = mongoose.Schema({
    title:{
        type: String,
    },
    desc:{
        type: String
    },
    userName:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User",userSchma)