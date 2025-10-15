import {param, body} from "express-validator";

export const createSale_DTO = [
    body("date").isISO8601().toDate().withMessage("Date must be in ISO8601 format"),
    body("client").isString().trim().notEmpty().withMessage("Client name is required"),
    body("products").isArray({min: 1}).withMessage("Minimum 1 product is required"),
    body("products.*.nombre").isString().trim().notEmpty().withMessage("Product name is required"),
    body("products.*.precio").isFloat({min: 1}).withMessage("Product price is required"),
    body("products.*.cantidad").isInt({min: 1}).withMessage("Product quantity is required"),
    body("total").isFloat({min: 1}).withMessage("Total is required")
]