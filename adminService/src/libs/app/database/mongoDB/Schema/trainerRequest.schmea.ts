import mongoose from 'mongoose'

const trainerRequestSchema = new mongoose.Schema({
    email:String,
    certificate:String
    
})

const trainerRequests = mongoose.model("trainerRequests",trainerRequestSchema)

export{
    trainerRequests
}