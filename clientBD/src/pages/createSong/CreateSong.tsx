import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SongCreateFormData } from "../../formsData/songFormData";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./createSong.css";

const CreateSong = () => {
    const schema: ZodType<SongCreateFormData> = z.object({
        userId: z.number(),
        name: z.string().min(2).max(20),
        length: z.number(),
        lyrics: z.optional(z.string()),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SongCreateFormData>({
        resolver: zodResolver(schema),
    });

    const toastError = (err: string) => toast.error(err);
    const toastSucces = () => toast.success("Well done!");

    const submitData = async (data: SongCreateFormData) => {
        await axios
            .post(
                "http://localhost:3001/songs",
                {
                    name: data.name,
                    length: data.length,
                    lyrics: data.lyrics,
                },
                {
                    headers: { "user-id": data.userId.toString() },
                }
            )
            .then(toastSucces)
            .catch((err) => {
                toastError(err.message);
                console.log(err);
            });
    };

    return (
        <div>
            <>
                <ToastContainer />
            </>
            <form onSubmit={handleSubmit(submitData)}>
                <section className="center-box">
                    <h1>Upload your song</h1>
                    <div>
                        <label>User ID</label>
                        <input
                            type="number"
                            {...register("userId", { valueAsNumber: true })}
                        />
                        {errors.userId && (
                            <span> {errors.userId.message} </span>
                        )}
                    </div>
                    <div>
                        <label>Song name </label>
                        <input type="text" {...register("name")} />
                        {errors.name && <span> {errors.name.message} </span>}
                    </div>
                    <div>
                        <label>Length of the song</label>
                        <input
                            type="number"
                            {...register("length", { valueAsNumber: true })}
                        />
                        {errors.length && (
                            <span> {errors.length.message} </span>
                        )}
                    </div>
                    <div>
                        <label>Lyrics </label>
                        <input
                            type="text"
                            placeholder="Can be empty"
                            {...register("lyrics")}
                        />
                        {errors.lyrics && (
                            <span> {errors.lyrics.message} </span>
                        )}
                    </div>
                    <input type="submit" className="send" value={"Submit"} />
                </section>
            </form>
        </div>
    );
};

export default CreateSong;
