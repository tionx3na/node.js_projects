import express from 'express';
import router from './routes/tasks.js';
import './db/connect.js';
import connectDB from './db/connect.js';
import dotenv from 'dotenv';
dotenv.config()

const app = express()
const port = 3000

// middleware

app.use(express.json())

// server listen

const start = async() => {
    try{
        await connectDB(process.env.CONNECT_URL)
        app.listen(port, () => {
            console.log('Server is listening on port: '+port)
        })
    }catch(error){
        console.log(error)
    }
}

start()

//routes 

app.use('/api/v1/tasks', router)


