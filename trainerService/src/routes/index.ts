import express from 'express'
import trainerRoutes from './trainerRoutes/trainer.route'

export const routes = (dependencies:any)=>{
    const routes = express.Router()
    routes.use('/trainer',trainerRoutes(dependencies))
    return routes
}