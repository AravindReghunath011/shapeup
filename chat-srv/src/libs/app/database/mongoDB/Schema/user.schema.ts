import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String || null,
    following:Array || [],
    profile:{
        type:String,
        default:null
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    subscription:Array || []
})

const user = mongoose.model("user",userSchema)

export{
    user
}