import { PrismaClient, User } from "@prisma/client";
import { CreateUserDTO, UpdateUserDTO } from "../dto/usersDTO";
import { prismaClient } from "../database";

const getAll = (prismaClient: PrismaClient) => (): Promise<User[]> =>
    prismaClient.user.findMany();

const getById =
    (prismaClient: PrismaClient) =>
    (id: number): Promise<User | null> =>
        prismaClient.user.findFirst({
            where: {
                id: id,
            },
            include: {
                songs: true,
            },
        });

const create =
    (prismaClient: PrismaClient) =>
    (createUserDTO: CreateUserDTO): Promise<User> =>
        prismaClient.user.create({
            data: {
                fullName: createUserDTO.fullName,
                userName: createUserDTO.userName,
                password: createUserDTO.password,
                isArtist: createUserDTO.isArtist,
            },
        });

const remove =
    (prismaClient: PrismaClient) =>
    (id: number): Promise<User> =>
        prismaClient.user.delete({
            where: {
                id: id,
            },
        });

const update =
    (prismaClient: PrismaClient) =>
    (updateUserDTO: UpdateUserDTO): Promise<User> =>
        prismaClient.user.update({
            data: {
                fullName: updateUserDTO.fullName,
                userName: updateUserDTO.userName,
                password: updateUserDTO.password,
                isArtist: updateUserDTO.isArtist,
            },
            where: {
                id: updateUserDTO.id,
            },
        });

export const usersRepo = {
    getAll: getAll(prismaClient),
    getById: getById(prismaClient),
    create: create(prismaClient),
    remove: remove(prismaClient),
    update: update(prismaClient),
};
