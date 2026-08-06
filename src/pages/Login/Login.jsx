/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginUser } from "../../services/authService";
import monstera from "../../assets/monstera.png";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import Logo from "../../components/Logo/Logo";

import styles from "./Login.module.css";


function Login() {

    const navigate = useNavigate();


    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);



    async function handleLogin(e) {

        e.preventDefault();

        setError("");


        try {

            setLoading(true);


            await loginUser(email, password);


            navigate("/dashboard");


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

    <main className={styles.page}>


        <section className={styles.container}>


            <div className={`${styles.backgroundBlob} ${styles.blob1}`}></div>

            <div className={`${styles.backgroundBlob} ${styles.blob2}`}></div>

            <div className={`${styles.backgroundBlob} ${styles.blob3}`}></div>


           <div className={styles.leftPanel}>
                    <img

                            src={monstera}

                            alt=""

                            className={styles.monstera}

                        />
                <p className={styles.overline}>
                    PLANTPAL
                </p>

                <h1>
                    Every plant
                    deserves a
                    little more love.
                </h1>

                <p className={styles.description}>
                    Discover new plants, build your personal collection,
                    and never forget to water them again.
                </p>

                <div className={styles.features}>

                    <div>🌿 Plant Discovery</div>

                    <div>💧 Care Reminders</div>

                    <div>🪴 Personal Collection</div>

                </div>

                <div className={styles.testimonial}>

                    <div className={styles.stars}>
                        ★★★★★
                    </div>

                    <p>
                        PlantPal helped me organize over
                        40 houseplants without forgetting
                        a single watering day.
                    </p>

                    <span>
                        Emily Parker
                    </span>

                </div>

            </div>

            <div className={styles.card}>


                <Link
                    to="/"
                    className={styles.backHome}
                >
                    ← Back to PlantPal
                </Link>



                <Logo />

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



                        <div className={styles.passwordWrapper}>


                            <input

                                type={
                                    showPassword
                                    ? "text"
                                    : "password"
                                }

                                placeholder="Enter your password"

                                value={password}

                                onChange={(e) => setPassword(e.target.value)}

                            />



                            <button

                                type="button"

                                className={styles.eyeButton}

                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }

                            >

                                {
                                    showPassword
                                    ? <FiEyeOff />
                                    : <FiEye />
                                }


                            </button>


                        </div>




                        <div className={styles.forgotPassword}>


                            <Link to="/reset-password">

                                Forgot Password?

                            </Link>


                        </div>


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



        </section>





    </main>

);

}


export default Login;