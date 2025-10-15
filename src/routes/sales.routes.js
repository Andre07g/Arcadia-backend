import { Router } from "express";
import { createSale_controller, getSales_controller, getSale_controller, deleteSale_controller } from "../controllers/sales.controller.js";
import { validationDTO } from "../middlewares/validationDTO.js";
import { createSale_DTO } from "../DTOS/sales_DTO.js";

const salesRouter = Router();

salesRouter.post("/", createSale_DTO, validationDTO, createSale_controller);
salesRouter.get("/", getSales_controller)
salesRouter.get("/:id", getSale_controller)
salesRouter.delete("/:id", deleteSale_controller)

export default salesRouter


