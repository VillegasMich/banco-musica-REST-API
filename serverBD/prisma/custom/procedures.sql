CREATE DEFINER=`root`@`%` PROCEDURE `getLongestSong`()
BEGIN
select Song.name, Song.length from Song
where Song.length in (select max(Song.length) from Song);
END