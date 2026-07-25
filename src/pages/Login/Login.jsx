import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Logo from "../../components/Logo/Logo";
import styles from "./Login.module.css";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    async function handleLogin(e) {

        e.preventDefault();

        setError("");

        try {

            setLoading(true);

            await loginUser(email, password);

            navigate("/dashboard");

        // eslint-disable-next-line no-unused-vars
        } catch (err) {

            setError("Invalid email or password.");

        } finally {

            setLoading(false);

        }

    }


    if (loading) {

        return (
            <LoadingScreen text="Welcome back..." />
        );

    }


    return (

        <div className={styles.container}>

            <div className={`${styles.backgroundBlob} ${styles.blob1}`}></div>

            <div className={`${styles.backgroundBlob} ${styles.blob2}`}></div>

            <div className={`${styles.backgroundBlob} ${styles.blob3}`}></div>

            <div className={`${styles.backgroundBlob} ${styles.blob4}`}></div>

            <div className={styles.card}>

                <Logo />

                <h1 className={styles.title}>
                    PlantPal
                </h1>
                <p className={styles.subtitle}>
                    Your smart plant care assistant
                </p>


                <form onSubmit={handleLogin}>

                    <div className={styles.inputGroup}>

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>


                    <div className={styles.inputGroup}>

                        <label>
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </div>


                    {
                        error && (
                            <p className={styles.error}>
                                {error}
                            </p>
                        )
                    }


                    <button
                        className={styles.button}
                        type="submit"
                        disabled={loading}
                    >
                        Login
                    </button>

                </form>


                <p className={styles.register}>

                    Don't have an account?

                    <Link to="/register">
                        <span>
                            {" "}Create account
                        </span>
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;