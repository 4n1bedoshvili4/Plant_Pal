import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

function Login() {
    return (
        <div className={styles.container}>

            <div className={styles.card}>

                <Logo />

                <p className={styles.subtitle}>
                    Your smart plant care assistant
                </p>


                <form>

                    <div className={styles.inputGroup}>
                        <label>Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                        />
                    </div>


                    <div className={styles.inputGroup}>
                        <label>Password</label>
                        <input 
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>


                    <Link to="/dashboard">
                        <button className={styles.button}>
                            Login
                        </button>
                    </Link>

                </form>


                <p className={styles.register}>
                    Don't have an account?
                    <Link to="/register">
                        <span> Create account</span>
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Login;