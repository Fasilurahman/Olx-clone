import dotenv from 'dotenv'
dotenv.config()
console.log('SECRET_KEY from process.env:', process.env.SECRET_KEY);
import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js';
import morgan from 'morgan'
import userRouter from './routes/userRoutes.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(morgan('dev'))

app.use('/', userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
connectDB()