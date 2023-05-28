CREATE DEFINER=`root`@`%` TRIGGER `userBeforeUpdate` BEFORE UPDATE ON `User` FOR EACH ROW BEGIN
INSERT UserHistory(userId, fullName, userName, password, isArtist, action, date)
VALUES(old.id, old.fullName, old.userName, old.password, old.isArtist, 'old', current_time());
INSERT UserHistory(userId, fullName, userName, password, isArtist, action, date)
VALUES(new.id, new.fullName, new.userName, new.password, new.isArtist, 'new', current_time());
END

CREATE DEFINER=`root`@`%` TRIGGER `songBeforeUpdate` BEFORE UPDATE ON `Song` FOR EACH ROW BEGIN
INSERT SongsHistory(songId, name, length, lyrics, action, date)
VALUES(old.id, old.name, old.length, old.lyrics, 'old', current_time());
INSERT SongsHistory(songId, name, length, lyrics, action, date)
VALUES(new.id, new.name, new.length, new.lyrics, 'new', current_time());
END