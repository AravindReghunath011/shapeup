import mongoose from 'mongoose'

const trainerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String || null,
    followers:Array || [],
    posts:Array || [],
    videos:Array || [],
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
    otp:String || null
})

const trainer = mongoose.model("trainer",trainerSchema)

export{
    trainer
}