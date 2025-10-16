import { connectDB, getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

const COLLECTION = "sales"

export async function createSale(data) {
    const {date, client, products, total} = data

    const sale = {
        date,
        client,
        products,
        total
    }

    const db = getDB();
    const result = await db.collection(COLLECTION).insertOne(sale);
    return {message: "Sale created successfully", sale}
}

export async function getSales() {
    const db = getDB();
    return await db.collection(COLLECTION).find().toArray();
}

export async function getSale(_id) {
    const db = getDB();
    return await db.collection(COLLECTION).findOne({_id: new ObjectId(_id)});
}

export async function updateSale(_id, data) {
    const db = getDB();
    const result = await db.collection(COLLECTION).updateOne({_id: new ObjectId(_id)}, {$set: data});
    if (result.matchedCount > 0) {
        return {message: "Sale updated successfully", sale: data}
    }
    return null;
}


export async function deleteSale(_id) {
    const db = getDB();
    const result = await db.collection(COLLECTION).deleteOne({_id: new ObjectId(_id)});
    if (result.deletedCount > 0) {
        return {message: "Sale deleted successfully"}
    }
    return null;
}