import { Song } from "@prisma/client";
import { songsRepo } from "../repositories/songsRepo";
import { CreateSongsDTO, UpdateSongDTO } from "../dto/songsDTO";

const getAll = async (): Promise<Song[]> => {
    const songs = await songsRepo.getAll();
    return songs;
};

const getById = async (id: number): Promise<Song | undefined> => {
    const song = await songsRepo.getById(id);
    return song ?? undefined;
};

const create = async (userId:number, createSongsDTO: CreateSongsDTO): Promise<Song> => {
    const song = await songsRepo.create(userId, createSongsDTO);
    return song;
};

const remove = async (id: number) => {
    await songsRepo.remove(id);
};

const update = async (updateSongDTO: UpdateSongDTO): Promise<Song> => {
    const updateSong = await songsRepo.update(updateSongDTO);
    return updateSong;
};

export const songsService = {
    getAll,
    getById,
    create,
    remove,
    update,
};
