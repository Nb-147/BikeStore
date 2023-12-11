import { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

export const Login = ({ onLogin }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [emailError, setEmailError] = useState("");

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("El email es inválido");
            return;
        }
        setIsLoggedIn(true);
        setLoggedInUser(name || email);
        onLogin(name || email);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setLoggedInUser(null);
        setName("");
        setEmail("");
        setPassword("");
        setEmailError("");
    };

    return (
        <div className={`login-container ${isLoggedIn ? "logged-in" : ""}`}>
            {!isLoggedIn ? (
                <form className="login-form">
                    <h2 >👤 Mi Cuenta</h2>
                    <br />
                    <label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nombre"
                        />
                    </label>
                    <label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError("");
                            }}
                            placeholder="Email"
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </label>
                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Calve"
                        />
                    </label>
                    <button type="button" onClick={handleLogin}>
                        Iniciar Sesión
                    </button>
                </form>
            ) : (
                <div className="welcome-message">
                    <p>Bienvenido, {loggedInUser}!</p>
                    <button type="button" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                    <button className="ms-3"><Link to="/">Inicio</Link></button>
                </div>
            )}
        </div>
    );
};
