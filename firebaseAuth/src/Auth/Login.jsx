import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div
                style={{
                    width: "350px",
                    margin: "60px auto",
                    padding: "30px 25px",
                    borderRadius: "18px",
                    background: "#fff",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                    fontFamily: "Poppins, sans-serif",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        marginBottom: "20px",
                        fontSize: "26px",
                        fontWeight: "600",
                        color: "#333",
                    }}
                >
                    Login
                </h1>

                <form>
                    <label
                        htmlFor="username"
                        style={{
                            display: "block",
                            marginBottom: "6px",
                            fontWeight: "500",
                            color: "#444",
                        }}
                    >
                        Username
                    </label>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "1.5px solid #ccc",
                            fontSize: "15px",
                            marginBottom: "18px",
                            outline: "none",
                        }}
                    />

                    <label
                        htmlFor="password"
                        style={{
                            display: "block",
                            marginBottom: "6px",
                            fontWeight: "500",
                            color: "#444",
                        }}
                    >
                        Password
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "10px",
                            border: "1.5px solid #ccc",
                            fontSize: "15px",
                            marginBottom: "22px",
                            outline: "none",
                        }}
                    />

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "10px",
                            backgroundColor: "#4A90E2",
                            color: "#fff",
                            border: "none",
                            fontWeight: "600",
                            fontSize: "16px",
                            cursor: "pointer",
                            marginTop: "8px",
                        }}
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/register")}
                        style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "10px",
                            backgroundColor: "#4A90E2",
                            color: "#fff",
                            border: "none",
                            fontWeight: "600",
                            fontSize: "16px",
                            cursor: "pointer",
                            marginTop: "15px",
                        }}
                    >
                        Don’t have an account? Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
