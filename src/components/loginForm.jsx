import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Login</h2>
            <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-field">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="submit-button">Login</button>
            <p>You don't have an account ? click to <Link to="/signup">Create account</Link></p>
        </form>
    );
};

export default LoginForm;
