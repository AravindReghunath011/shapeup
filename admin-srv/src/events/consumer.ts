

import { kafka } from "../config/kafkaClient";
import { adminRepository } from "../libs/app/repository";

const consumer = kafka.consumer({
    groupId: 'admin-service' 
});

export const adminConsumer = async () => {
    console.log("Consumer started");
    console.log('demo kafka')
    try {
        await consumer.connect();
        console.log('Consumer connected');

        await consumer.subscribe({ topic: 'admin', fromBeginning: true });
        await consumer.run({
            eachMessage: async ({ message }) => {
                console.log(message, "ooooooooooooooooooooo");
                console.log(message.value, "ooooooooooooooooooooo1111111111111");
                const binaryData = message.value;
                const jsonString = binaryData?.toString(); // Convert binary data to a string
                console.log(jsonString, "after convert to string");
                const jsonData = JSON.parse(jsonString!); // Parse the string as JSON
                console.log("Received JSON dataaaaaaaaaaaaaaaaaa:", jsonData.data); 

                const messageType = jsonData.type;
                console.log("Received message type:", messageType);
                if(messageType=='newTrainer'){
                    await adminRepository.saveRequest(jsonData.data)
                }else if(messageType=='returnUsers'){
                    // await adminRepository.getAllUsers()

                }
            }
        });
    } catch (err) {
        console.error('Error in Kafka consumer:', err);
    }
};

// Call the consumeOrder function to start the consumer
adminConsumer();
