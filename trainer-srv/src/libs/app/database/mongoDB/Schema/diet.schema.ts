import mongoose from 'mongoose'

const dietSchema = new mongoose.Schema({
    title:String,
    type:String,
    description:String,
    image:String,
    trainerId:String
    
    
})

const Diets = mongoose.model("diet",dietSchema)

export{
    Diets
}