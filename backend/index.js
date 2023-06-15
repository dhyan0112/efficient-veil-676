const express=require('express');
const app=express();
app.use(express.json());
const http=require('http');
const  connection  = require('./config/db');

const {userRouter}=require("./routes/Users.routes")
const {authenticate}=require("./middlewares/authenticate.middleware")

require("dotenv").config();
const cors=require("cors")

app.use(express.json());
app.use(cors())

app.use("/users",userRouter)

const server=http.createServer(app);




server.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error.message)
    }
    console.log("connected to server")
})