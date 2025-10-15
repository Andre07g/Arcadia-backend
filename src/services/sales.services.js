import { connectDB, getDB } from "../config/db.js";
import { ObjectId } from "mongodb";
const COLLECTION = "sales"
const salesCollection = () => getDB().collection(COLLECTION);

export async function createSale(data) {
    try {
        const {date, client, products, total} = data

    const sale = {
        date,
        client,
        products,
        total
    }

    await salesCollection().insertOne(sale);
    return {message: "Sale created successfully", sale}
    } catch (error) {
        return {message: "Error creating sale", error}
    }
}

export async function getSales() {
    try {
        return await salesCollection().find().toArray();
    } catch (error) {
        return {message: "Error getting sales", error}
    }
}

export async function getSale(_id) {
    try {
        return await salesCollection().findOne({_id: ObjectId(_id)});
    } catch (error) {
        return {message: "Error getting sale", error}
    }
}

export async function updateSale(_id, data) {
    try {
        const result = await salesCollection().updateOne({_id: ObjectId(_id)}, {$set: data});
        if (result.matchedCount > 0) {
            return {message: "Sale updated successfully", sale: data}
        }
    } catch (error) {
        return {message: "Error updating sale", error}
    }
}

export async function deleteSale(_id) {
    try {
        const result = await salesCollection().deleteOne({_id: ObjectId(_id)});
        if (result.deletedCount > 0) {
            return {message: "Sale deleted successfully"}
        }
    } catch (error) {
        return {message: "Error deleting sale", error}
    }
}