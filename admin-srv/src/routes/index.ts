import express from 'express'
import adminRoutes from './adminRoutes/admin.route'

export const routes = (dependencies:any)=>{
    const routes = express.Router()
    routes.use('/admin',adminRoutes(dependencies))
    return routes
}