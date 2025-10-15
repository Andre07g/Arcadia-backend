import { createSale, getSale, getSales, deleteSale } from "../services/sales.services.js";

export async function createSale_controller(req, res) {
    try {
        const data = req.body;
        const result = await createSale(data);
        res.status(201).json(result);
    } catch (error) {
        res.status(401).json({message: "Error creating sale", error});
    }
}

export async function getSales_controller(req, res) {
    try {
        const result = await getSales()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "Error getting sales", error});
    }
}

export async function getSale_controller(req, res) {
    try {
        const _id = req.params._id
        const result = await getSale(_id)
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({message: "Error getting sale", error});
    }
}

export async function deleteSale_controller(req, res) {
    try {
        const id = req.params._id
        const result = await deleteSale(id)
        res.status(200).json(result);
    } catch (error) {
        res.status(401).json({message: "Error deleting sale", error});
    }
}