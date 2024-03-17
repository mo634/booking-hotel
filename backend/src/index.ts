import express from "express"
import cors from "cors"
const app = express()


// help to convert res -> json automatically
app.use(express.json())

// help to deal with data comming from request more effcient and easy
app.use(express.urlencoded({extended:true}))

// select wich client can ask your server for sources 
app.use(cors())

app.get("/api/test",(req,res) => {
    res.send("hello from express")
})

app.listen(5000, () => console.log("server is running on port 5000"))