import {param, body} from "express-validator";

export const crerVenta_dto = [
    body("fecha").isISO8601().toDate().withMessage("Date has to be ISO8601"),
    body("productos").isArray({min: 1}).withMessage("Minimum 1 product is required"),
    body("productos.*.nombre").isString().trim().notEmpty().withMessage("Product name is required"),
    body("productos.*.precio").isFloat({min: 1}).withMessage("Product price is required"),
    body("productos.*.cantidad").isInt({min: 1}).withMessage("Product quantity is required"),
    body("total").isFloat({min: 1}).withMessage("Total is required")
]