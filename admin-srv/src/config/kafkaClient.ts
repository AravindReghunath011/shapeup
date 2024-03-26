import {Kafka} from "kafkajs"

export const kafka = new Kafka({
    clientId: 'admin-srv',
    brokers: ['bus3-kafka:9092'],
})

