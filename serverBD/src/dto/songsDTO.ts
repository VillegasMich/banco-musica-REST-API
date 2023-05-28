import { Song } from "@prisma/client";

export type CreateSongsDTO = Omit<Song, "id">

export type UpdateSongDTO = Song