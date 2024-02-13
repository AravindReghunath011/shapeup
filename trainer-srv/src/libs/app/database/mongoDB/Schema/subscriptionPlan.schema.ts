import mongoose from 'mongoose'

const subscriptionPlanSchema = new mongoose.Schema({
    trainerId:String,
    weekly:Number,
    monthly:Number,
    yearly:Number
    
    
})

const subscriptionPlan = mongoose.model("subscriptionPlan",subscriptionPlanSchema)

export{
    subscriptionPlan
}