import mongoose from 'mongoose'

const subscriptionSchema = new mongoose.Schema({
    trainerId:String,
    userId:String,
    amount:Number,
    duration:String
    
    
})

const subscription = mongoose.model("subscription",subscriptionSchema)

export{
    subscription
}