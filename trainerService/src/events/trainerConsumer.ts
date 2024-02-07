

import { kafka } from "../config/kafkaClient";
import { trainerRepository } from "../libs/app/repository";
import acceptedRequestController from "../libs/controller/trainer/acceptedRequestController";

const consumer = kafka.consumer({
    groupId: 'trainer-service' 
});

export const trainerConsumer = async (dependencies:any) => {
    console.log("Consumer started");
    try {
        await consumer.connect();
        console.log('Consumer connected');

        await consumer.subscribe({ topic: 'trainer', fromBeginning: true });
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
                if(messageType=='acceptedRequest'){
                     acceptedRequestController(dependencies, jsonData.data);
                    // let data = req.sess
                    // await createTrainer(data)
                }else if(messageType == 'trainersListFromUser'){
                    await trainerRepository.getAllTrainers('user')

                }
            }
        });
    } catch (err) {
        console.error('Error in Kafka consumer:', err);
    }
};

// Call the consumeOrder function to start the consumer
// trainerConsumer();
