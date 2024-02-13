import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'admin-srv',
    brokers: ['demo-kafka:9092'],
    
})

