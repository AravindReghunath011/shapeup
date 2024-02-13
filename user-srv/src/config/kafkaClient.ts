import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'user-srv',
    brokers: ['localhost:9092'],
    
})  

