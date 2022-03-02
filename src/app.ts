import 'dotenv/config'
import express from 'express'
import { runDatabase } from './database'
import { userRoutes } from './routes'

const { PORT } = process.env

const app = express()

app.use(express.json())

runDatabase()

app.use('/user', userRoutes)

app.listen(PORT, () => console.log(`Running in localhost ${PORT}`))
