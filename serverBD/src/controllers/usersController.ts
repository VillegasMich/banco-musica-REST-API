import { NextFunction, Request, Response } from "express";
import { usersService } from "../services/usersServices";
import { User } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../dto/usersDTO";

const getAll = async (
    req: Request,
    res: Response<User[]>,
    next: NextFunction
) => {
    try {
        const users = await usersService.getAll();
        res.send(users);
    } catch (err) {
        next(err);
    }
};

const getById = async (
    req: Request<{ id: string }>,
    res: Response<User>,
    next: NextFunction
) => {
    try {
        const user = await usersService.getById(+req.params.id);
        if (user) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    } catch (err) {
        next(err);
    }
};

const create = async (
    req: Request<never, never, CreateUserDTO>,
    res: Response<User>,
    next: NextFunction
) => {
    try {
        const user = await usersService.create(req.body);
        res.status(201).send(user);
    } catch(err) {
        next(err)
    }
};

const remove = async (req: Request<{ id: string }>, res: Response<void>, next: NextFunction) => {
    try {
        await usersService.remove(+req.params.id);
        res.sendStatus(204);
    } catch(err) {
        next(err)
    }   
};

const update = async (
    req: Request<never, never, UpdateUserDTO>,
    res: Response<User>,
    next: NextFunction
) => {
    try {
        const updateUser = await usersService.update(req.body);
        res.send(updateUser);
    } catch(err) {
        next(err)
    }
};

export const usersController = {
    getAll,
    getById,
    create,
    remove,
    update,
};
