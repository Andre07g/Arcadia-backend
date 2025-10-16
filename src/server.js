//imports
import express from "express";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import salesRouter from "./routers/sales.routes.js";
// here you can put the imports of your routers
import videogamesRouter from "./routers/videogames_router.js"
import cors from 'cors'

//Config
const app = express();
app.use(cors());
app.use(express.json());

app.use("/sales", salesRouter);
//Routers
app.use("/videogames",videogamesRouter)
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