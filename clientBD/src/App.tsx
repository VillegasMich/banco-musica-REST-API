import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Update from "./pages/update/Update";
import CreateSong from "./pages/createSong/CreateSong";
import Register from "./pages/register/Register";
import Delete from "./pages/deleteUser/DeleteUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/createSong" element={<CreateSong />} />
                    <Route path="/deleteUser" element={<Delete />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
