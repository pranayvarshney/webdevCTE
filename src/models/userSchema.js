const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        name : {
            type :String,
            required : true
        },
        _id : {
            type : String,
            required : true
        },
        hostel_name : {
            type : String,
            require : true
        },
        hostel_number: {
            type: Number,
            require: true
        }
    }
)

module.exports = mongoose.model("userSchema",userSchema)