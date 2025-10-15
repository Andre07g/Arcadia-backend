import { body, param } from "express-validator";

export const createGameDTO = [
    body("title")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The title must be the name of the game, a string"),

    body("genre")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The genre must be a string"),
    body("platform")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The platform must be a string"),
    body("description")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The description must be a string"),
    body("price")
        .isInt({ gt: 0 })
        .notEmpty()
        .withMessage("The price must be an integer upper than 0"),
    body("image")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The image must be the link of the game"),
    body("stock")
        .isInt({ gt: 0 })
        .notEmpty()
        .withMessage("The stock must be an integer upper than 0"),
];



export const updateGameDTO = [

    body("title")
        .isString()
        .trim()
        .notEmpty()
        .withMessage("The title must be the name of the game, a string")
        .optional(),
    body("genre")
        .isString()
        .trim()
        .notEmpty().optional()
        .withMessage("The genre must be a string"),
    body("platform")
        .isString()
        .trim()
        .notEmpty().optional()
        .withMessage("The platform must be a string"),
    body("description")
        .isString()
        .trim()
        .notEmpty().optional()
        .withMessage("The description must be a string"),
    body("price")
        .isInt({ gt: 0 })
        .notEmpty().optional()
        .withMessage("The price must be an integer upper than 0"),
    body("stock")
        .isInt({ gt: 0 })
        .notEmpty().optional()
        .withMessage("The stock must be an integer upper than 0"),
    body("image")
        .isString()
        .trim()
        .notEmpty().optional()
        .withMessage("The image must be the link of the game"),
];