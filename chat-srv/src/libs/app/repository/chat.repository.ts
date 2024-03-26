
import {schemas} from '../database/mongoDB'
const {message} = schemas;

export default {
    saveMessage:async(data:any)=>{
        try {
            let newMessage = await message.findOneAndUpdate({from:data.from , to:data.to},{$push:{content:data.content}},{new:true})
            console.log(newMessage) 
        } catch (error:any) {
            throw new Error(error.message);
        }
    },
    findRoomExist:async(data:any)=>{
        let msgExist = await message.findOne({from:data.from,to:data.to})
        if(msgExist){
            return msgExist
        }else{
            return false
        }
    },
    newRoom:async(data:any)=>{
        console.log(data,'dada')
        let newRoom = await message.create(data)
        console.log(newRoom,'from repostitory')
    }
}