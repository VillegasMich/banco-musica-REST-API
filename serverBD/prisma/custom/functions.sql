CREATE DEFINER=`root`@`%` FUNCTION `getArtistFromSong`(song_id int) RETURNS varchar(100) CHARSET utf8mb4
    READS SQL DATA
BEGIN
DECLARE artist varchar(100);
select User.fullName into artist from User, Song, _SongToUser
where User.id =  _SongToUser.B and song_id = _SongToUser.A and Song.id = song_id;
RETURN artist;
END