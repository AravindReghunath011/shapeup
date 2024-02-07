import mongoose from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
    trainerId:String,
    planId:String,
    userId:String
    
    
})

const subscription = mongoose.model("subscription",subscriptionSchema)

export{
    subscription
}