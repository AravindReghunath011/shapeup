import express from 'express'
import { routes } from './routes'
import dependencies from './config/dependencies'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api',routes(dependencies))

export {app}