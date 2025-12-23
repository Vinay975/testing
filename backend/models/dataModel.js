import mongoose, { model }  from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    phone : {
        type:Number,
        require:true
    },
    age : {
        type:Number,
        require:true
    }
})

const userData = mongoose.model("user",userSchema);
export default userData