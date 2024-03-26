
import { userRepository } from "../libs/app/repository";
import { kafka } from "../config/kafkaClient";
import { handleMessage } from "./handleMessages";
import { newFollow,newSubscription } from "../libs/utils/eventFunctions";
// imposrt { handleMessage } from "../event/handleMessages.js";
// import {orderProducer} from "../event/orderProducer.js"
const consumer = kafka.consumer({
    groupId: 'user-srv'
});

export const userConsumer = async (dependencies:any) => {
    console.log("Consumer started");
    let messageType
    try {
        await consumer.connect();
        console.log('Consumer connected'); 

        await consumer.subscribe({ topic: 'user', fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ message }) => {
                console.log(message, "ooooooooooooooooooooo");
                console.log(message.value, "ooooooooooooooooooooo1111111111111");
                const binaryData = message.value;
                const jsonString = binaryData?.toString(); // Convert binary data to a string
                console.log(jsonString, "after convert to string");
                const jsonData = JSON.parse(jsonString!); // Parse the string as JSON
                console.log("Received JSON dataaaaaaaaaaaaaaaaaa:", jsonData.data);

                 messageType = jsonData.type;
                console.log("Received message type:", messageType);

                if(messageType=='newfollow'){
                      await newFollow(dependencies,jsonData.data)
                }else if(messageType == 'newSubscription'){
                    console.log('entered newsub')
                    await newSubscription(dependencies,jsonData.data)
                }
                
            }
        });
    } catch (err) {
        console.error('Error in Kafka consumer:', err);
    }
    
};


