import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    from:String,
    to:String,
    content:Array||[],
    
})

const message = mongoose.model("message",messageSchema)

export{
    message
}