import express from 'express'
import { routes } from './routes'
import dependencies from './config/dependencies'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
import cookieparser from 'cookie-parser'
import {SessionData} from '../src/libs/utils/reuseFunctions/customSession'
dotenv.config()


const app = express()
app.use(cookieparser())
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
    },
  }));

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/api',routes(dependencies))

export {app}