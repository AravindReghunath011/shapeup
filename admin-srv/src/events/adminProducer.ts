
import {kafka} from "../config/kafkaClient"


const producer = kafka.producer()

export const adminProducer = async (sendData:any,topic:string,type:string)=>{
  
    try{
        if(!sendData){
             
            throw new Error ("Invalid Send Data")
        }
        console.log('before')
        await producer.connect();
        console.log('after')
        console.log("conneted to produce")
    
        const messagePayload = { 
            type: type,
            data: sendData // Your actual hjhdata here
        };
        console.log(messagePayload.data,"message payload cming to the producer");
        const result = await producer.send({
            topic: topic,
            messages: [{ value: JSON.stringify(messagePayload) }]
        })
        console.log(result, '////////////result');
        if (result && result[0] && result[0]?.errorCode) {
            throw new Error('Message production failed')
        }
 
    } catch(err){
        console.log(err,"err in the product producer");
    } finally{
        await producer.disconnect()
    }
}