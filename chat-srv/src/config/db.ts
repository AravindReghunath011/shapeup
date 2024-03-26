import mongoose from "mongoose";
import dotenv from 'dotenv' 
dotenv.config({ path: '.env' })
export const dbConnect = async()=>{ 
    try {
        // await mongoose.connect(`mongodb+srv://AravindReghunath:12345@cluster0.57qseds.mongodb.net/User-srv?retryWrites=true&w=majority`)
        await mongoose.connect(`mongodb://localhost:27017/chatService`)
        .then(()=>console.log('Db connected ')) 
        .catch((err)=>{
        throw new Error('Mongo Db error') 

        })      
    } catch (error) {
        console.log(error) 
        setTimeout(() => {
            dbConnect()
        }, 5000);
        
    }
}     