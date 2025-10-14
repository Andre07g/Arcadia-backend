import { MongoClient } from "mongodb";
import 'dotenv/config';

const uri = process.env.MONGO_URI
const db_name = process.env.DB_NAME

const client = new MongoClient (uri);
let db;

export async function connectDB() {
    try {
        await client.connect();
        console.log("DB connected!");
        db = client.db(db_name);
    } catch (error) {
        console.error("Error connecting to the DB", error)
    }
}

export async function getDB() {
    if(!db){
        throw new Error("Has not connected with the DB!");
    }
    return db;
}

