import { Application, Request, Response } from 'express';
import cors from 'cors'
import todos from './routes/routes';
import mongoose from 'mongoose';
const express = require('express')

const app : Application = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

const port : any  = process.env.PORT || 3001
const mongodb_url : string = process.env.MONGODB_URL || "mongodb+srv://nogsuu:Sunogan33!@cluster0.uiqs1.mongodb.net/roberts"

app.use('/todos', todos)

app.get('/',(req: Request, res: Response) : Response => {
    res.send("Hello tnga")
})

// app.listen(port, () => console.log("connected on port"))
mongoose.connect(mongodb_url)
    .then(()=> app.listen(port, () => console.log("connected on port")))
    .catch(err => console.log("not connected"))
