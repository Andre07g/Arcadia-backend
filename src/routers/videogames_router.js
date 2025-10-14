import { Router } from "express";
 import { createGameDTO,updateGameDTO } from "../dtos/videogames_dto.js";
 import { validationDTO } from "../middlewares/validationDTO.js";
import { getAllGames,getAGame,createAGame,updateAGame,deleteAGame } from "../controllers/videogames_controller.js";

const router = Router();

router.get("/", getAllGames);
router.get("/:id", getAGame);
router.post("/", createGameDTO, validationDTO,createAGame);
router.patch("/:id", updateGameDTO, validationDTO, updateAGame);
router.delete("/:id", deleteAGame);

export default router;