import mongoose from 'mongoose'

const trainerSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String || null,
    followers:Array || [],
    videos:Array || [],
    profile:{
        type:String,
        default:null
    },
    certificate:String,
    isBlocked:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    
})

const trainer = mongoose.model("trainer",trainerSchema)

export{
    trainer
}