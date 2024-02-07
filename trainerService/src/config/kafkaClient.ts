import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'trainer-srv',
    brokers: ['localhost:9092'],
    
})

