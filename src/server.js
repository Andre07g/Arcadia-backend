//imports
import express from "express";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
// here you can put the imports of your routers


//Config
const app = express();
app.use(express.json());

//Routers
//here you can call the router-imports to test them (don't upload this archive when you merge)

app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend on"});
})


// Excecution
connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend listening on http://${process.env.HOST_NAME}:${process.env.PORT}`)
    })
})