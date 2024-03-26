import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
    title:String,
    bodypart:String,
    description:String,
    video:String,
    trainerId:String,
    premium:{
        type:Boolean,
        default:false
    }
    
    
})

const Videos = mongoose.model("video",videoSchema)

export{
    Videos
}