import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'admin-srv',
    brokers: ['localhost:9092'],
    
})

