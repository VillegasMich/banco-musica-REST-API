import { Router } from "express";
import { songsController } from "../controllers/songsControllet";

export const songsRouter = Router()
    .get("/", songsController.getAll)
    .get("/:id", songsController.getById)
    .post("/", songsController.create)
    .delete("/:id", songsController.remove)
    .put("/", songsController.update);
