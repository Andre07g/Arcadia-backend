//imports
import express from "express";
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import salesRouter from "./routers/sales.routes.js"; 
import swaggerUi from 'swagger-ui-express'; 
import swaggerFile from './docs/swagger-output.json' assert { type: 'json' };
// here you can put the imports of your routers
import videogamesRouter from "./routers/videogames_router.js"
import semver from 'semver';
import cors from 'cors'

//Config
const app = express();
app.use(cors());
app.use(express.json());

/* #swagger.tags = ['Sales']
  #swagger.ignore = true 
*/
app.use("/sales", salesRouter);
//Routers
/* #swagger.tags = ['Videogames']
  #swagger.ignore = true
*/
app.use("/videogames",videogamesRouter)
//here you can call the router-imports to test them (don't upload this archive when you merge)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

/* #swagger.tags = ['General']
   #swagger.summary = 'Verificar estado del API'
*/
app.get("/health", (req, res)=>{
    res.status(200).json({message: "Backend on"});
})

app.get('/version', (req, res)=>{
    const clientVersion = req.query.v;

    if(!clientVersion){
        return res.status(400).json({error: "Se debe proporcionar una version"});
    }

    const parsed = semver.coerce(clientVersion)?.version;

    if(!parsed || !semver.valid(parsed)){
        return res.status(400).json({error: "La versión no es válida", verRecibida: clientVersion, ejemploValido: "1.0.0"})
    }

    const es_compatible = semver.satisfies(parsed, process.env.MIN_RANGE);

    if(es_compatible){
        res.status(200).json({
            message: `La versión ${parsed} es compatible`,
            verRecibida: parsed,
            requerido: process.env.MIN_RANGE
        })
    }

    return res.status(426).json({
        error: `La version ${parsed} no es compatible con la aplicacion`,
        apiVersion: process.env.APIVERSION,
        requerido: process.env.MIN_RANGE
    })
})


// Excecution
connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`Backend listening on http://${process.env.HOST_NAME}:${process.env.PORT}`)
    })
})