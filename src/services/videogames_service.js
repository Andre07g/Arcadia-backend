import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";
const COLLECTION_GAMES = "videogames"



export async function getGames(){
    const db = await getDB()
    return await db.collection(COLLECTION_GAMES).find().toArray();

}

export async function getGameById(id){
    const db = await getDB()
    const result = await db.collection(COLLECTION_GAMES).findOne({_id:new ObjectId(id)});
    return result;
}

export async function createGame(data){
    const {title,genre,platform,description,price,image,stock} = data;

    const Game = {title,genre,platform,description,price,image,stock}
    const db = await getDB()
    await db.collection(COLLECTION_GAMES).insertOne(Game);
    return {message:"Game created successfully"};
}

export async function updateGames(id,data) {
    const db = await getDB()
    const result = await db.collection(COLLECTION_GAMES).updateOne({_id:new ObjectId(id)},{$set:data});
    if(result.matchedCount===0){throw new Error("There was an error updating the information of the game");}
    return {message: "Game modified"};
}

export async function deleteGame(id){
    const db = await getDB()
    const result = await db.collection(COLLECTION_GAMES).deleteOne({_id:new ObjectId(id)});
    if(result.deletedCount===0){throw new Error("Game not found");}
    return {message:"Game was deleted"}

}

