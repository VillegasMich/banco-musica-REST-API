import express from "express";
import { usersRouter } from "./routes/usersRouter";
import { handleError } from "./middleware/handleError";
import { songsRouter } from "./routes/songsRouter";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/users", usersRouter);
app.use("/songs", songsRouter);

app.use(handleError);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
