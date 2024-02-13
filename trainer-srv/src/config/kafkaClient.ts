import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'trainer-srv',
    brokers: ['demo-kafka:9092'],
    
})

