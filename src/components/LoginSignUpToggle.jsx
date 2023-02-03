import React, { useState } from "react";
import LoginForm from "./loginForm";
import SignUpForm from "./signupForm";

const LoginSignUpToggle = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="toggle-container">
            <div className={`form-toggle ${isLogin ? "selected" : ""}`} onClick={() => setIsLogin(true)}>
                login
            </div>
            <div className={`form-toggle ${!isLogin ? "selected" : ""}`} onClick={() => setIsLogin(false)}>
                sign up
            </div>
        </div>
    );
};

export default LoginSignUpToggle;
