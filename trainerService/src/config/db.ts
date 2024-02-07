import mongoose from "mongoose";
import dotenv from 'dotenv' 
dotenv.config({ path: '.env' })
export const dbConnect = async()=>{ 
    console.log(process.env.MONGO_PASSWORD)
    try {
        // await mongoose.connect(`mongodb+srv://AravindReghunath:${process.env.MONGO_PASSWORD}@cluster0.57qseds.mongodb.net/Trainer-srv?retryWrites=true&w=majority`)
        await mongoose.connect(`mongodb://localhost:27017/trainerService`)
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