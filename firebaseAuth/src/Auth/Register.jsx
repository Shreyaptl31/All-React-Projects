import { useForm } from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            console.log(" email, password: ", email, password);

            const provider = new GoogleAuthProvider();

            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    console.log("token: ", token);

                    const user = result.user;
                    console.log("user : ", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.customData.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                });
        } catch (error) {
            console.log("Error during registration: ", error);
        }
    };

    const handlesignOut = async () => {
        try {
            await auth.signOut();
            console.log("User signed out successfully");
        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

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
                    Register
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "6px",
                            fontWeight: "500",
                            color: "#444",
                        }}
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Enter your email"
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
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
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
                        Register with Google
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
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
                        If you already have an account, Login
                    </button>
                </form>

                <button
                    onClick={handlesignOut}
                    style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: "#ff4d4d",
                        color: "#fff",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "600",
                        marginTop: "20px",
                        fontSize: "15px",
                    }}
                >
                    Sign out
                </button>
            </div>
        </>
    );
};

export default Register;
