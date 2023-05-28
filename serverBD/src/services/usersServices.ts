import { User } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../dto/usersDTO";
import { usersRepo } from "../repositories/usersRepo";

const getAll = async (): Promise<User[]> => {
    const users = await usersRepo.getAll();
    return users;
};

const getById = async (id: number): Promise<User | undefined> => {
    const user = await usersRepo.getById(id);
    return user ?? undefined;
};

const create = async (createUserDTO: CreateUserDTO): Promise<User> => {
    const user = await usersRepo.create(createUserDTO);
    return user;
};

const remove = async (id: number) => {
    await usersRepo.remove(id);
};

const update = async (updateUserDTO: UpdateUserDTO): Promise<User> => {
    const updateUser = await usersRepo.update(updateUserDTO);
    return updateUser;
};

export const usersService = {
    getAll,
    create,
    getById,
    remove,
    update,
};
