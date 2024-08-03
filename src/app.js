import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//common middlewares
app.use(express.json({limit: '20kb'}))
app.use(express.urlencoded({limit: '20kb', extended: true}))
app.use(express.static('public'))

//import router
import healthcheckRouter from './routes/healthcheck.router.js'

//routes
app.use('/api/v1/healthcheck', healthcheckRouter)

export default app