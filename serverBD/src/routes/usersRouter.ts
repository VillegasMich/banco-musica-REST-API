import { Router } from "express";
import { usersController } from "../controllers/usersController";

export const usersRouter = Router()
    .get("/", usersController.getAll)
    .get("/:id", usersController.getById)
    .post("/", usersController.create)
    .delete("/:id", usersController.remove)
    .put("/", usersController.update);
