import express from "express"
import cors from "cors"
import {Request,Response} from "express"
import "dotenv/config"
import mongoose from "mongoose"
import authRouter from "./routers/auth.router"

// connect to database
mongoose.connect(process.env.MONGO_URI as string)
.then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    
const app = express()


// help to convert res -> json automatically
app.use(express.json())

// help to deal with data comming from request more effcient and easy
app.use(express.urlencoded({extended:true}))

// select wich client can ask your server for sources 
app.use(cors())

app.get("/api/test",(req:Request,res:Response) => {
    res.send("hello from express")
})

app.use("/api/auth",authRouter)

app.listen(5000, () => console.log("server is running on port 5000"))