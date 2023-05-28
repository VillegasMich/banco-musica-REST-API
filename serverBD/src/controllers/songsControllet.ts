import { Song } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { songsService } from "../services/songsServices";
import { CreateSongsDTO, UpdateSongDTO } from "../dto/songsDTO";
import { usersService } from "../services/usersServices";

const getAll = async (
    req: Request,
    res: Response<Song[]>,
    next: NextFunction
) => {
    try {
        const songs = await songsService.getAll();
        res.send(songs);
    } catch (err) {
        next(err);
    }
};

const getById = async (
    req: Request<{ id: string }>,
    res: Response<Song>,
    next: NextFunction
) => {
    try {
        const song = await songsService.getById(+req.params.id);
        if (song) {
            res.send(song);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
};

const create = async (
    req: Request<never, never, CreateSongsDTO>,
    res: Response<Song>,
    next: NextFunction
) => {
    try {
        const userId = req.headers['user-id']
        if (!userId) {
            throw Error('User id not found')
        }

        const user = await usersService.getById(+userId)
        if (!user || !user.isArtist) {
            res.sendStatus(404)
        }

        const song = await songsService.create(+userId, req.body);
        res.status(201).send(song);
    } catch (err) {
        next(err);
    }
};

const remove = async (
    req: Request<{ id: string }>,
    res: Response<void>,
    next: NextFunction
) => {
    try {
        await songsService.remove(+req.params.id)
        res.sendStatus(204)
    } catch(err) {
        next(err)
    }
};

const update = async (
    req: Request<never, never, UpdateSongDTO>,
    res: Response<Song>,
    next: NextFunction
) => {
    try {
        const song = await songsService.update(req.body);
        res.send(song);
    } catch (err) {
        next(err);
    }
};

export const songsController = {
    getAll,
    getById,
    create,
    remove,
    update,
}