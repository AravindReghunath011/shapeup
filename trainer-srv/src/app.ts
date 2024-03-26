import express from 'express'
import { routes } from './routes'
import dependencies from './config/dependencies'
import session from 'express-session'
import cors from 'cors'

import { trainerConsumer } from './events/trainerConsumer'

const app = express()

app.use(express.json())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
    },
  }));
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
        //  trainerConsumer(dependencies)

app.use('/api',routes(dependencies))

export {app}