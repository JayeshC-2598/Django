import { useState } from "react";
import Home from "./pages/home/Home";
import "./App.css";
import { Router, Routes, Route } from "react-router-dom";

import SignUp from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    );
}

export default App;
