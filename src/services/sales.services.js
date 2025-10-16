import { connectDB, getDB } from "../config/db.js";
import { ObjectId } from "mongodb";
import { updateGameStock } from "./videogames_service.js";

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

export async function createSaleWithTransaction(data) {
    const { date, client, products, total } = data;
    const clientDB = await connectDB();
    const session = clientDB.startSession();

    let saleResult;

    try {
        await session.withTransaction(async () => {
            const db = getDB();

            // 1. Iterar sobre los productos y actualizar el stock de cada uno
            for (const item of products) {
                await updateGameStock(item.nombre, item.cantidad, session);
            }

            // 2. Si todo el stock se pudo actualizar, registrar la venta
            const sale = { date, client, products, total };
            saleResult = await db.collection(COLLECTION).insertOne(sale, { session });
        });

        return { message: "Venta creada exitosamente", id: saleResult.insertedId };
    } catch (error) {
        console.error("❌ Error en la transacción de venta:", error.message);
        // Re-lanzamos el error para que el controlador lo capture
        throw new Error(error.message);
    } finally {
        // Es muy importante cerrar la sesión al final
        await session.endSession();
    }
}

export async function deleteSale(_id) {
    const db = getDB();
    const result = await db.collection(COLLECTION).deleteOne({_id: new ObjectId(_id)});
    if (result.deletedCount > 0) {
        return {message: "Sale deleted successfully"}
    }
    return null;
}