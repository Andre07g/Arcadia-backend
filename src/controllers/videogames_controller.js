import { getGames,getGameById,createGame,updateGames,deleteGame } from "../services/videogames_service.js";

export async function getAllGames(req, res) {
    try {
        const games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({error: "Error obtaining all games"});
    }
}

export async function getAGame(req, res) {
    try {
        const id = req.params.id;
        const game = await getGameById(id);
        if(!game) return res.status(404).json({error: "Game not found"});
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json({error: "Error obtaining the game"});
    }
}

export async function createAGame(req, res) {
    try {
        const result = await createGame(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export async function updateAGame(req, res) {
    try {
        const id = req.params.id;
        const result = await updateGames(id, req.body);
        res.status(202).json(result);
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

export async function deleteAGame(req, res) {
    try {
        const id = req.params.id;
        const result = await deleteGame(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}