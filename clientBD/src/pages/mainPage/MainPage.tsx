import { useNavigate } from "react-router-dom";
import "./mainPage.css";
import logo from "./musicLogo240.png";
// import logo from './icons8-música-64.png'

function Main() {
    const navigate = useNavigate();

    const goToUpdate = () => {
        navigate("/update");
    };
    const gotToRegister = () => {
        navigate("/register");
    };

    const goToCreateSong = () => {
        navigate("/createSong");
    };

    const goToDeleteUser = () => {
        navigate("/deleteUser");
    };

    return (
        <div className="App">
            <img src={logo} alt="" />
            <h1>Music bank</h1>
            <header className="LogIn-Header">
                <button className="Button-LogIn" onClick={goToUpdate}>
                    Update User{" "}
                </button>
            </header>
            <header className="Register-Header">
                <button className="Button-Register" onClick={gotToRegister}>
                    Register{" "}
                </button>
            </header>
            <header className="CreateSong-Header">
                <button className="Button-CreateSong" onClick={goToCreateSong}>
                    Create Song{" "}
                </button>
            </header>
            <header className="DeleteUser-Header">
                <button className="Button-DeleteUser" onClick={goToDeleteUser}>
                    Delete User{" "}
                </button>
            </header>
        </div>
    );
}

export default Main;
