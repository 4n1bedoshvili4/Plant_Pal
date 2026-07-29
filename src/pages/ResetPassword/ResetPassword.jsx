import { useState } from "react";
import { Link } from "react-router-dom";

import { resetPassword } from "../../services/authService";

import Logo from "../../components/Logo/Logo";

import styles from "./ResetPassword.module.css";

function ResetPassword() {

    const [email, setEmail] = useState("");

    const [message, setMessage] = useState("");

    const [error, setError] = useState("");

    async function handleSubmit(e) {

        e.preventDefault();

        setMessage("");
        setError("");

        try {

            await resetPassword(email);

            setMessage("Password reset email sent! Check your inbox.");

        } catch {

            setError("Unable to send reset email.");

        }

    }

    return (

        <div className={styles.container}>

            <div className={styles.card}>

                <Logo />

                <h1>Reset Password</h1>

                <p className={styles.subtitle}>
                    Enter your email and we'll send you a reset link.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className={styles.inputGroup}>

                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>

                    {message && (
                        <p className={styles.success}>
                            {message}
                        </p>
                    )}

                    {error && (
                        <p className={styles.error}>
                            {error}
                        </p>
                    )}

                    <button className={styles.button}>
                        Send Reset Link
                    </button>

                </form>

                <Link
                    to="/"
                    className={styles.back}
                >
                    ← Back to Login
                </Link>

            </div>

        </div>

    );

}

export default ResetPassword;