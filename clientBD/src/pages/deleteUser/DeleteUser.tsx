import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDeleteFormData } from "../../formsData/userFormData";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./deleteUser.css";

const Delete = () => {
    const schema: ZodType<UserDeleteFormData> = z.object({
        id: z.number(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserDeleteFormData>({
        resolver: zodResolver(schema),
    });

    const toastError = (err: string) => toast.error(err);
    const toastSucces = () => toast.success("Well done!");

    const submitData = async (data: UserDeleteFormData) => {
        await axios
            .delete("http://localhost:3001/users/" + data.id, {})
            .then(toastSucces)
            .catch((err) => {
                toastError(err.message);
                console.log(err);
            });
    };

    return (
        <div className="Delete-User">
            <>
                <ToastContainer />
            </>
            <form onSubmit={handleSubmit(submitData)}>
                <h1>Delete User</h1>
                <p>
                    <label>User ID you want to delete</label>
                    <input
                        type="number"
                        {...register("id", { valueAsNumber: true })}
                    />
                    {errors.id && <span> {errors.id.message} </span>}
                </p>
                <input type="submit" value={"Submit"} className="send" />
            </form>
        </div>
    );
};

export default Delete;
