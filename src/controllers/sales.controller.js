import { createSale, getSale, getSales, deleteSale } from "../services/sales.services.js";

export async function createSale_controller(req, res) {
    try {
        const data = req.body;
        const result = await createSale(data);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error in createSale_controller:", error);
        res.status(500).json({message: "Error creating sale", error: error.message});
    }
}

export async function getSales_controller(req, res) {
    try {
        const result = await getSales()
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in getSales_controller:", error);
        res.status(500).json({message: "Error getting sales", error: error.message});
    }
}

export async function getSale_controller(req, res) {
    try {
        const { id } = req.params;
        const result = await getSale(id)
        if (!result) {
            return res.status(404).json({ message: "Sale not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in getSale_controller:", error);
        res.status(500).json({message: "Error getting sale", error: error.message});
    }
}

export async function deleteSale_controller(req, res) {
    try {
        const { id } = req.params;
        const result = await deleteSale(id)
        if (!result) {
            return res.status(404).json({ message: "Sale not found to delete" });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error("Error in deleteSale_controller:", error);
        res.status(500).json({message: "Error deleting sale", error: error.message});
    }
}