import mongoose, { model }  from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    phone : {
        type:Number,
        required:true
    },
    age : {
        type:Number,
        required:true
    }
})

const User = mongoose.model("user",userSchema);
export default User