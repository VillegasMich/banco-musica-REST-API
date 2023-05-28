import { PrismaClient, Song } from "@prisma/client";
import { prismaClient } from "../database";
import { CreateSongsDTO, UpdateSongDTO } from "../dto/songsDTO";

const getAll = (prismaClient: PrismaClient) => (): Promise<Song[]> =>
    prismaClient.song.findMany();

const getById =
    (prismaClient: PrismaClient) =>
    (id: number): Promise<Song | null> =>
        prismaClient.song.findFirst({
            where: {
                id: id,
            },
            include: { artists: true },
        });

const create =
    (prismaClient: PrismaClient) =>
    async (userId: number, createSongDTO: CreateSongsDTO): Promise<Song> =>
        prismaClient.song.create({
            data: {
                name: createSongDTO.name,
                length: createSongDTO.length,
                lyrics: createSongDTO.lyrics, //! string | null
                artists: { connect: { id: userId } },
            },
        });

const remove =
    (prismaClient: PrismaClient) =>
    (id: number): Promise<Song> =>
        prismaClient.song.delete({
            where: {
                id: id,
            },
        });

const update = (prismaClient: PrismaClient) => (updateSongDTO: UpdateSongDTO) =>
    prismaClient.song.update({
        data: {
            name: updateSongDTO.name,
            length: updateSongDTO.length,
            lyrics: updateSongDTO.lyrics,
        },
        where: {
            id: updateSongDTO.id,
        },
    });

export const songsRepo = {
    getAll: getAll(prismaClient),
    getById: getById(prismaClient),
    create: create(prismaClient),
    remove: remove(prismaClient),
    update: update(prismaClient),
};
