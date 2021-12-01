import express from 'express';
import router from './routes/tasks.js';

const app = express()
const port = 3000

// middleware

app.use(express.json())

// server listen

app.listen(port, () => {
    console.log('lisening on port: '+port)
})

//routes 

app.use('/api/v1/tasks', router)
