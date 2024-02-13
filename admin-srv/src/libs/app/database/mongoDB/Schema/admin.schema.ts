import mongoose from 'mongoose'

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String || null,
    otp:String || null
})

const admin = mongoose.model("admin",adminSchema)

export{
    admin
}