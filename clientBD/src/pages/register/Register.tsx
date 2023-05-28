import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRegisterFormData } from "../../formsData/userFormData";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./register.css";

const Register = () => {
    const schema: ZodType<UserRegisterFormData> = z.object({
        userName: z.string().min(2).max(30),
        fullName: z.string().min(2).max(100),
        password: z.string().min(4).max(100),
        isArtist: z.boolean(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRegisterFormData>({
        resolver: zodResolver(schema),
    });

    const toastError = (err: string) => toast.error(err);
    const toastSucces = () => toast.success("Well done!");

    const submitData = async (data: UserRegisterFormData) => {
        await axios
            .post("http://localhost:3001/users", {
                fullName: data.fullName,
                userName: data.userName,
                password: data.password,
                isArtist: data.isArtist,
            })
            .then(toastSucces)
            .catch((err) => {
                toastError(err.message);
                console.log(err);
            });
    };

    return (
        <div className="Register">
            <>
                <ToastContainer />
            </>
            <form onSubmit={handleSubmit(submitData)}>
                <h1>New Registry</h1>
                <p>
                    <label>User Name</label>
                    <input type="text" {...register("userName")} />
                    {errors.userName && (
                        <span> {errors.userName.message} </span>
                    )}
                </p>
                <p>
                    <label>Full Name</label>
                    <input type="text" {...register("fullName")} />
                    {errors.fullName && (
                        <span> {errors.fullName.message} </span>
                    )}
                </p>
                <p>
                    <label>Password</label>
                    <input type="password" {...register("password")} />
                    {errors.password && (
                        <span> {errors.password.message} </span>
                    )}
                </p>
                <p>
                    <label>Are you an artist?</label>
                    <input type="checkbox" {...register("isArtist")} />
                    {errors.isArtist && (
                        <span> {errors.isArtist.message} </span>
                    )}
                </p>
                <input type="submit" value={"Submit"} className="send" />
            </form>
        </div>
    );
};

export default Register;
